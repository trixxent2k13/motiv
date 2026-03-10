/**
 * AE Time Tracker — панель CEP
 * Polling состояния проекта, отображение таймера, логирование при закрытии.
 * Режим отладки: тройной клик по статусу («Нет проекта» / «Отслеживание»).
 */
(function() {
    'use strict';

    var POLL_INTERVAL = 1000;
    var csInterface = null;
    var pollTimer = null;
    var debugMode = false;
    var debugLog = [];
    var lastPath = null;
    try {
        csInterface = typeof CSInterface !== 'undefined' ? new CSInterface() : null;
    } catch (e) {
        console.error('AETimeTracker: CSInterface init failed', e);
    }
    var sessionStart = null;
    var paused = false;
    var elapsedAtPause = 0;

    var statusEl = document.getElementById('status');
    var projectEl = document.getElementById('project');
    var timerEl = document.getElementById('timer');
    var sessionEl = document.getElementById('session');
    var pauseBtn = document.getElementById('pauseBtn');
    var debugPanelEl = document.getElementById('debugPanel');
    var debugLogEl = document.getElementById('debugLog');
    var debugCopyBtn = document.getElementById('debugCopy');

    function debug(msg) {
        var d = new Date();
        var pad = function(n, len) { n = String(n); len = len || 2; return n.length >= len ? n : (Array(len + 1).join('0') + n).slice(-len); };
        var line = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()) + '.' + pad(d.getMilliseconds(), 3) + ' | ' + msg;
        debugLog.push(line);
        if (debugLog.length > 50) debugLog.shift();
        if (debugLogEl) debugLogEl.textContent = debugLog.join('\n');
    }

    function debugCollect() {
        if (!debugMode) return;
        var lines = [];
        lines.push('=== AE Time Tracker Debug ===');
        lines.push('ОС: ' + (navigator.platform || 'unknown'));
        lines.push('User-Agent: ' + navigator.userAgent);
        lines.push('');
        if (!csInterface) {
            lines.push('CSInterface: ОШИБКА — не создан (возможно CEP не загрузился)');
        } else {
            lines.push('CSInterface: OK');
            try {
                var hostEnv = csInterface.getHostEnvironment();
                if (hostEnv && hostEnv.appName) {
                    lines.push('Host: ' + hostEnv.appName + ' ' + (hostEnv.appVersion || ''));
                    if (hostEnv.appUILocale) lines.push('Locale: ' + hostEnv.appUILocale);
                }
            } catch (e) {
                lines.push('Host env: ' + e.toString());
            }
        }
        lines.push('');
        lines.push('--- Лог ---');
        lines.push.apply(lines, debugLog);
        return lines.join('\n');
    }

    function toggleDebug() {
        debugMode = !debugMode;
        debugPanelEl.style.display = debugMode ? 'block' : 'none';
        if (debugMode) {
            debug('Режим отладки включён');
            if (csInterface) {
                csInterface.evalScript('$._aett ? "ok" : "host.jsx не загружен"', function(result) {
                    debug('evalScript test: ' + (result !== undefined && result !== null ? result : '(пусто)'));
                    if (result === 'host.jsx не загружен') {
                        debug('ОШИБКА: $._aett отсутствует. Проверьте ScriptPath в manifest.xml');
                    }
                });
            } else {
                debug('CSInterface недоступен — evalScript невозможен');
            }
        }
    }

    function escapeForEval(str) {
        if (!str) return '""';
        return '"' + String(str).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    }

    function formatTime(ms) {
        var s = Math.floor(ms / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        s = s % 60;
        m = m % 60;
        var pad = function(n) { return (n < 10 ? '0' : '') + n; };
        return pad(h) + ':' + pad(m) + ':' + pad(s);
    }

    function toISOLocal(d) {
        var pad = function(n) { return (n < 10 ? '0' : '') + n; };
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' +
            pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
    }

    function getElapsedMs() {
        if (!sessionStart) return 0;
        if (paused) return elapsedAtPause;
        return Date.now() - sessionStart.getTime();
    }

    function updateUI(path, elapsed) {
        if (path) {
            statusEl.textContent = paused ? 'Пауза' : 'Отслеживание';
            var name = path.split(/[/\\]/).pop();
            projectEl.textContent = name;
            projectEl.title = path;
            timerEl.textContent = formatTime(elapsed);
            timerEl.classList.toggle('paused', paused);
            sessionEl.textContent = paused ? 'Нажмите Продолжить для возобновления' : 'Сессия началась ' + toISOLocal(sessionStart);
            pauseBtn.disabled = false;
            pauseBtn.textContent = paused ? 'Продолжить' : 'Пауза';
        } else {
            statusEl.textContent = 'Нет проекта';
            projectEl.textContent = '';
            projectEl.title = '';
            timerEl.textContent = '--:--:--';
            timerEl.classList.remove('paused');
            sessionEl.textContent = '';
            pauseBtn.disabled = true;
            pauseBtn.textContent = 'Пауза';
        }
    }

    function checkProject() {
        if (!csInterface) {
            statusEl.textContent = 'Ошибка: CEP не загружен';
            return;
        }
        csInterface.evalScript('$._aett.getProjectState()', function(result) {
            var raw = (result !== undefined && result !== null) ? String(result) : '';
            if (debugMode) debug('getProjectState: ' + (raw || '(пусто)'));
            var state = {};
            try {
                if (raw && raw.indexOf('"hasProject"') >= 0 && raw.indexOf('"path"') >= 0) {
                    state = JSON.parse(raw);
                } else if (raw && (raw.indexOf('{') >= 0 || raw.indexOf(':') >= 0)) {
                    if (debugMode) debug('Неверный формат ответа (возможно CEP/версия AE). Raw: ' + raw.substring(0, 80));
                    state = { hasProject: false, path: null };
                }
                var path = state.saved && state.path ? state.path : null;

                if (path && path !== lastPath) {
                    if (lastPath && sessionStart) {
                        var end = new Date();
                        var dur = Math.floor((paused ? elapsedAtPause : (end - sessionStart)) / 1000);
                        var script = '$._aett.logSession(' +
                            escapeForEval(lastPath) + ',' +
                            escapeForEval(toISOLocal(sessionStart)) + ',' +
                            escapeForEval(toISOLocal(end)) + ',' + dur + ')';
                        csInterface.evalScript(script, function() {});
                    }
                    lastPath = path;
                    sessionStart = new Date();
                    paused = false;
                    elapsedAtPause = 0;
                } else if (!path && lastPath && sessionStart) {
                    var endTime = new Date();
                    var durationSec = Math.floor((paused ? elapsedAtPause : (endTime - sessionStart)) / 1000);
                    var script = '$._aett.logSession(' +
                        escapeForEval(lastPath) + ',' +
                        escapeForEval(toISOLocal(sessionStart)) + ',' +
                        escapeForEval(toISOLocal(endTime)) + ',' + durationSec + ')';
                    csInterface.evalScript(script, function() {});
                    lastPath = null;
                    sessionStart = null;
                    paused = false;
                    elapsedAtPause = 0;
                } else if (!path) {
                    lastPath = null;
                    sessionStart = null;
                    paused = false;
                    elapsedAtPause = 0;
                }

                var elapsed = getElapsedMs();
                updateUI(lastPath, elapsed);
            } catch (e) {
                statusEl.textContent = 'Ошибка';
                if (debugMode) debug('Ошибка парсинга: ' + e.toString());
            }
        });
    }

    function startPolling() {
        if (pollTimer) return;
        checkProject();
        pollTimer = setInterval(checkProject, POLL_INTERVAL);
    }

    function stopPolling() {
        if (pollTimer) {
            clearInterval(pollTimer);
            pollTimer = null;
        }
    }

    var feedbackUrl = 'https://forms.yandex.ru/u/696f2eb6068ff088f7e89e2e/?project_key_id=4gxaft';
    document.getElementById('feedback').href = feedbackUrl;
    document.getElementById('feedback').onclick = function(e) {
        e.preventDefault();
        if (csInterface) csInterface.openURLInDefaultBrowser(feedbackUrl);
        var link = this;
        link.textContent = 'Открыто в браузере!';
        link.classList.add('feedback-done');
        setTimeout(function() {
            link.textContent = 'Отзыв';
            link.classList.remove('feedback-done');
        }, 2000);
    };

    var tripleClickCount = 0;
    var tripleClickTimer = null;
    statusEl.onclick = function() {
        tripleClickCount++;
        if (tripleClickTimer) clearTimeout(tripleClickTimer);
        if (tripleClickCount >= 3) {
            tripleClickCount = 0;
            toggleDebug();
        } else {
            tripleClickTimer = setTimeout(function() { tripleClickCount = 0; }, 400);
        }
    };

    debugCopyBtn.onclick = function() {
        var text = debugCollect();
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                debugCopyBtn.textContent = 'Скопировано!';
                setTimeout(function() { debugCopyBtn.textContent = 'Скопировать'; }, 1500);
            }).catch(function() {
                debug('Не удалось скопировать в буфер');
            });
        } else {
            debug('Clipboard API недоступен');
        }
    };

    pauseBtn.onclick = function() {
        if (!lastPath || !sessionStart) return;
        if (paused) {
            sessionStart = new Date(Date.now() - elapsedAtPause);
            paused = false;
            elapsedAtPause = 0;
        } else {
            elapsedAtPause = Date.now() - sessionStart.getTime();
            paused = true;
        }
        updateUI(lastPath, getElapsedMs());
    };

    if (csInterface && typeof CSInterface !== 'undefined') {
        csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, function() {});
    }
    startPolling();

    window.addEventListener('beforeunload', function() {
        if (csInterface && lastPath && sessionStart) {
            var end = new Date();
            var dur = Math.floor((paused ? elapsedAtPause : (end - sessionStart)) / 1000);
            csInterface.evalScript('$._aett.logSession(' +
                escapeForEval(lastPath) + ',' +
                escapeForEval(toISOLocal(sessionStart)) + ',' +
                escapeForEval(toISOLocal(end)) + ',' + dur + ')', function() {});
        }
        stopPolling();
    });

})();
