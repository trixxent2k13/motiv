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
            for (var j = 0; j < lines.length; j++) {
                var ln = lines[j];
                if (ln.indexOf('===') >= 0 || ln.indexOf('--- ИТОГО') >= 0 || ln === '') continue;
                var m = ln.match(sessionRe);
                if (m) {
                    sessionLines.push(ln);
                    totalSeconds += parseDuration(m[3]);
                }
            }

            sessionLines.push(startTime + ' — ' + endTime + '  |  ' + durationStr);
            totalSeconds += durationSeconds;

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

    $._aett = {
        getProjectState: getProjectState,
        logSession: logSession
    };

})();
