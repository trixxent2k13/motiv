/**
 * AE Time Tracker — панель CEP
 * Polling состояния проекта, отображение таймера, логирование при закрытии.
 */
(function() {
    'use strict';

    var POLL_INTERVAL = 1000;
    var csInterface = new CSInterface();
    var pollTimer = null;
    var lastPath = null;
    var sessionStart = null;
    var paused = false;
    var elapsedAtPause = 0;

    var statusEl = document.getElementById('status');
    var projectEl = document.getElementById('project');
    var timerEl = document.getElementById('timer');
    var sessionEl = document.getElementById('session');
    var pauseBtn = document.getElementById('pauseBtn');

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
        csInterface.evalScript('$._aett.getProjectState()', function(result) {
            try {
                var state = JSON.parse(result || '{}');
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
        csInterface.openURLInDefaultBrowser(feedbackUrl);
        var link = this;
        link.textContent = 'Открыто в браузере!';
        link.classList.add('feedback-done');
        setTimeout(function() {
            link.textContent = 'Отзыв';
            link.classList.remove('feedback-done');
        }, 2000);
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

    csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, function() {});
    startPolling();

    window.addEventListener('beforeunload', function() {
        if (lastPath && sessionStart) {
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
