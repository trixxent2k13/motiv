/**
 * AE Time Tracker — ExtendScript host
 * Проверка состояния проекта и логирование сессий.
 */

(function() {
    'use strict';

    function escapeStr(s) {
        if (s == null) return '';
        var t = String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '').replace(/\n/g, '\\n');
        return t;
    }

    function getProjectState() {
        try {
            if (!app.project) return '{"hasProject":false,"path":null,"saved":false}';
            var f = app.project.file;
            if (!f) return '{"hasProject":true,"path":null,"saved":false}';
            var path = f.fsName;
            return '{"hasProject":true,"path":"' + escapeStr(path) + '","saved":true}';
        } catch (e) {
            return '{"hasProject":false,"path":null,"saved":false,"error":"' + escapeStr(e.toString()) + '"}';
        }
    }

    /**
     * Логирует сессию в файл рядом с .aep
     * projectPath — полный путь к .aep
     * startTime, endTime — ISO строки
     * durationSeconds — число
     */
    function logSession(projectPath, startTime, endTime, durationSeconds) {
        try {
            var basePath = projectPath.replace(/\.aepx?$/i, '');
            var logPath = basePath + '.time.txt';
            var logFile = new File(logPath);

            var durationMin = Math.floor(durationSeconds / 60);
            var durationSec = durationSeconds % 60;
            var durationStr = durationMin + 'm ' + durationSec + 's';
            if (durationMin >= 60) {
                var h = Math.floor(durationMin / 60);
                var m = durationMin % 60;
                durationStr = h + 'h ' + m + 'm ' + durationSec + 's';
            }

            var line = startTime + ' — ' + endTime + '  |  ' + durationStr + '\n';

            var existing = '';
            if (logFile.exists) {
                logFile.open('r', 'TEXT', '????');
                existing = logFile.read();
                logFile.close();
            }

            var lines = existing ? existing.split('\n') : [];
            var header = '=== AE Time Tracker ===\n';
            var headerIdx = -1;
            for (var i = 0; i < lines.length; i++) {
                if (lines[i].indexOf('=== AE Time Tracker ===') >= 0) {
                    headerIdx = i;
                    break;
                }
            }

            var sessionLines = [];
            var totalSeconds = 0;
            function parseDuration(str) {
                var s = 0;
                var hm = str.match(/(\d+)h/);
                if (hm) s += parseInt(hm[1], 10) * 3600;
                var mm = str.match(/(\d+)m/);
                if (mm) s += parseInt(mm[1], 10) * 60;
                var ss = str.match(/(\d+)s/);
                if (ss) s += parseInt(ss[1], 10);
                return s;
            }

            var sessionRe = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) — (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+\|\s+(.+)$/;
            var isDuplicate = false;
            for (var j = 0; j < lines.length; j++) {
                var ln = lines[j];
                if (ln.indexOf('===') >= 0 || ln.indexOf('--- ИТОГО') >= 0 || ln === '') continue;
                var m = ln.match(sessionRe);
                if (m) {
                    if (m[1] === startTime) isDuplicate = true;
                    sessionLines.push(ln);
                    totalSeconds += parseDuration(m[3]);
                }
            }

            if (!isDuplicate) {
                sessionLines.push(startTime + ' — ' + endTime + '  |  ' + durationStr);
                totalSeconds += durationSeconds;
            }

            var totalH = Math.floor(totalSeconds / 3600);
            var totalM = Math.floor((totalSeconds % 3600) / 60);
            var totalS = totalSeconds % 60;
            var totalStr = totalH + 'h ' + totalM + 'm ' + totalS + 's';

            var out = header + sessionLines.join('\n') + '\n\n--- ИТОГО: ' + totalStr + ' ---\n';

            logFile.open('w', 'TEXT', '????');
            logFile.write(out);
            logFile.close();

            return JSON.stringify({ ok: true, path: logPath });
        } catch (e) {
            return JSON.stringify({ ok: false, error: e.toString() });
        }
    }

    /**
     * Периодический бэкап сессии (синхронная запись).
     * Формат: path\nstartTime\nlastUpdate — ES3-совместимо.
     */
    function savePendingSync(projectPath, startTimeISO, lastUpdateISO) {
        try {
            if (!projectPath) return;
            var f = new File(getPendingPath());
            f.open('w', 'TEXT', '????');
            f.write(projectPath + '\n' + startTimeISO + '\n' + lastUpdateISO);
            f.close();
        } catch (e) {}
    }

    function getPendingPath() {
        return Folder.temp.fsName + '/aett_pending.txt';
    }

    function removePendingSync() {
        try {
            var f = new File(getPendingPath());
            if (f.exists) f.remove();
        } catch (e) {}
    }

    /**
     * Если есть pending — дописывает сессию в .time.txt и удаляет pending.
     * Вызывать при старте панели.
     */
    function replayPendingIfExists() {
        try {
            var f = new File(getPendingPath());
            if (!f.exists) return '';
            f.open('r', 'TEXT', '????');
            var content = f.read();
            f.close();
            f.remove();

            var lines = content.split('\n');
            var path = (lines[0] || '').trim();
            var startStr = lines[1] || '';
            var endStr = lines[2] || '';
            if (!path || !startStr || !endStr) return '';

            var startDate = new Date(startStr.replace(' ', 'T'));
            var endDate = new Date(endStr.replace(' ', 'T'));
            var durSec = Math.max(0, Math.floor((endDate.getTime() - startDate.getTime()) / 1000));

            logSession(path, startStr, endStr, durSec);
            return path;
        } catch (e) {
            return '';
        }
    }

    /**
     * Возвращает суммарное время проекта в секундах (из .time.txt, без текущей сессии).
     */
    function getTotalSeconds(projectPath) {
        try {
            if (!projectPath) return 0;
            var basePath = projectPath.replace(/\.aepx?$/i, '');
            var logPath = basePath + '.time.txt';
            var logFile = new File(logPath);
            if (!logFile.exists) return 0;

            logFile.open('r', 'TEXT', '????');
            var content = logFile.read();
            logFile.close();

            function parseDuration(str) {
                var s = 0;
                var hm = str.match(/(\d+)h/);
                if (hm) s += parseInt(hm[1], 10) * 3600;
                var mm = str.match(/(\d+)m/);
                if (mm) s += parseInt(mm[1], 10) * 60;
                var ss = str.match(/(\d+)s/);
                if (ss) s += parseInt(ss[1], 10);
                return s;
            }

            var lines = content.split('\n');
            var sessionRe = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) — (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+\|\s+(.+)$/;
            var totalSeconds = 0;
            for (var i = 0; i < lines.length; i++) {
                var m = lines[i].match(sessionRe);
                if (m) totalSeconds += parseDuration(m[3]);
            }
            return totalSeconds;
        } catch (e) {
            return 0;
        }
    }

    $._aett = {
        getProjectState: getProjectState,
        logSession: logSession,
        getTotalSeconds: getTotalSeconds,
        savePendingSync: savePendingSync,
        replayPendingIfExists: replayPendingIfExists,
        removePendingSync: removePendingSync
    };

})();
