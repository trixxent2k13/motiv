/**
 * Smart Sync Assets — CEP панель
 * Синхронизация исходников в _Assets, проверка обновлений с GitHub.
 */
(function() {
    'use strict';

    var VERSION = '1.0.0';
    var HELP_URL = 'https://github.com/trixxent2k13/motiv/tree/main/SmartSyncAssets';
    var FEEDBACK_URL = 'https://forms.yandex.ru/u/696f2eb6068ff088f7e89e2e/?project_key_id=a7Bk2m';
    var RELEASES_API = 'https://api.github.com/repos/trixxent2k13/motiv/releases/latest';

    var csInterface = null;
    try {
        csInterface = typeof CSInterface !== 'undefined' ? new CSInterface() : null;
    } catch (e) {}

    var syncedEl = document.getElementById('synced');
    var unsyncedEl = document.getElementById('unsynced');
    var syncBtn = document.getElementById('syncBtn');
    var moveCheck = document.getElementById('moveCheck');
    var updateHint = document.getElementById('updateHint');

    function updateStatus() {
        if (!csInterface) return;
        csInterface.evalScript('$._ssa.getStatus()', function(result) {
            try {
                var raw = (result != null) ? String(result) : '{}';
                var data = raw.indexOf('"synced"') >= 0 ? JSON.parse(raw) : { synced: 0, unsynced: 0 };
                syncedEl.textContent = 'Синхронизировано: ' + (data.synced || 0);
                unsyncedEl.textContent = 'Не синхронизировано: ' + (data.unsynced || 0);
            } catch (e) {}
        });
    }

    function doSync() {
        if (!csInterface) return;
        syncBtn.disabled = true;
        syncBtn.textContent = 'Синхронизация...';
        var isMove = moveCheck.checked;
        csInterface.evalScript('$._ssa.performSync(' + isMove + ')', function(result) {
            syncBtn.disabled = false;
            syncBtn.textContent = 'Sync';
            try {
                var raw = (result != null) ? String(result) : '{}';
                var data = raw.indexOf('"ok"') >= 0 ? JSON.parse(raw) : {};
                if (data.ok) {
                    updateStatus();
                    if (data.errorCount > 0) {
                        alert('Синхронизация завершена, но возникли ошибки: ' + data.errorCount + ' файл(ов).');
                    }
                } else if (data.error) {
                    alert(data.error);
                }
            } catch (e) {
                updateStatus();
            }
        });
    }

    function checkUpdate() {
        if (!window.XMLHttpRequest) return;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', RELEASES_API, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4) return;
            try {
                var resp = JSON.parse(xhr.responseText || '{}');
                var tag = (resp.tag_name || '').replace(/^v/, '');
                if (tag && compareVersions(tag, VERSION) > 0) {
                    updateHint.style.display = 'inline';
                    updateHint.innerHTML = 'Доступна <a href="' + (resp.html_url || '') + '" target="_blank">v' + tag + '</a>';
                    updateHint.querySelector('a').onclick = function(e) {
                        e.preventDefault();
                        if (csInterface) csInterface.openURLInDefaultBrowser(resp.html_url || '');
                    };
                }
            } catch (e) {}
        };
        xhr.send();
    }

    function compareVersions(a, b) {
        var pa = a.split('.').map(Number);
        var pb = b.split('.').map(Number);
        for (var i = 0; i < Math.max(pa.length, pb.length); i++) {
            var na = pa[i] || 0;
            var nb = pb[i] || 0;
            if (na > nb) return 1;
            if (na < nb) return -1;
        }
        return 0;
    }

    syncBtn.onclick = doSync;
    document.getElementById('help').onclick = function(e) {
        e.preventDefault();
        if (csInterface) csInterface.openURLInDefaultBrowser(HELP_URL);
    };
    document.getElementById('feedback').onclick = function(e) {
        e.preventDefault();
        if (csInterface) csInterface.openURLInDefaultBrowser(FEEDBACK_URL);
    };

    updateStatus();
    checkUpdate();
    setInterval(updateStatus, 5000);
})();
