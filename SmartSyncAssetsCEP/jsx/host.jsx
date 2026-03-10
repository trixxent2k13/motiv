/**
 * Smart Sync Assets — ExtendScript host (CEP)
 * Логика синхронизации: копирование внешних исходников в _Assets, перепривязка.
 */
(function() {
    'use strict';

    function escapeJson(s) {
        if (s == null) return 'null';
        return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '').replace(/\n/g, '\\n') + '"';
    }

    function getStatus() {
        try {
            var proj = app.project;
            if (!proj || !proj.file) {
                return '{"synced":0,"unsynced":0}';
            }
            var projFolder = proj.file.parent;
            var projFolderPathURI = decodeURI(projFolder.fsName);
            var synced = 0;
            var unsynced = 0;
            for (var i = 1; i <= proj.numItems; i++) {
                var item = proj.item(i);
                if (item instanceof FootageItem && item.mainSource instanceof FileSource && item.mainSource.file != null) {
                    var sourcePath = decodeURI(item.mainSource.file.fsName);
                    if (sourcePath.indexOf(projFolderPathURI) === 0) {
                        synced++;
                    } else {
                        unsynced++;
                    }
                }
            }
            return '{"synced":' + synced + ',"unsynced":' + unsynced + '}';
        } catch (e) {
            return '{"synced":0,"unsynced":0,"error":' + escapeJson(e.toString()) + '}';
        }
    }

    function performSync(isMove) {
        try {
            var proj = app.project;
            if (!proj) {
                return '{"ok":false,"error":"Нет открытого проекта"}';
            }
            if (!proj.file) {
                return '{"ok":false,"error":"Сохраните проект (File -> Save)"}';
            }
            app.beginUndoGroup("Smart Sync Assets");
            var projFile = proj.file;
            var projFolder = projFile.parent;
            var projName = decodeURI(projFile.name).replace(/\.[^\.]+$/, '');
            var assetsFolderName = projName + "_Assets";
            var assetsFolder = new Folder(projFolder.fsName + "/" + assetsFolderName);
            if (!assetsFolder.exists) {
                if (!assetsFolder.create()) {
                    app.endUndoGroup();
                    return '{"ok":false,"error":"Не удалось создать папку: ' + String(assetsFolder.fsName).replace(/\\/g,'\\\\').replace(/"/g,'\\"') + '"}';
                }
            }
            var syncedCount = 0;
            var errorCount = 0;
            var totalItems = proj.numItems;
            for (var i = 1; i <= totalItems; i++) {
                var item = proj.item(i);
                if (item instanceof FootageItem && item.mainSource instanceof FileSource && item.mainSource.file != null) {
                    var sourceFile = item.mainSource.file;
                    var sourcePath = decodeURI(sourceFile.fsName);
                    var projFolderPath = decodeURI(projFolder.fsName);
                    if (sourcePath.indexOf(projFolderPath) === 0) continue;
                    var nonSeqFormats = { 'mp4':1, 'mov':1, 'avi':1, 'wmv':1, 'flv':1, 'mkv':1, 'webm':1, 'mxf':1, 'r3d':1, 'braw':1, 'gif':1, 'wav':1, 'mp3':1, 'aif':1, 'aiff':1, 'm4a':1, 'c4d':1 };
                    var isSequence = false;
                    if (!item.mainSource.isStill) {
                        var ext = sourceFile.name.split('.').pop().toLowerCase();
                        if (!nonSeqFormats[ext]) isSequence = true;
                    }
                    if (isSequence) {
                        var fileName = decodeURI(sourceFile.name);
                        var sourceFolder = sourceFile.parent;
                        var match = fileName.match(/^(.*?)(\d+)(\.[^\.]+)$/i);
                        var seqFilesToCopy = [];
                        var prefix = "", ext = "";
                        if (match) {
                            prefix = match[1];
                            ext = match[3].toLowerCase();
                            var allFiles = sourceFolder.getFiles();
                            for (var f = 0; f < allFiles.length; f++) {
                                if (allFiles[f] instanceof File) {
                                    var fName = decodeURI(allFiles[f].name);
                                    var fMatch = fName.match(/^(.*?)(\d+)(\.[^\.]+)$/i);
                                    if (fMatch && fMatch[1] === prefix && fMatch[3].toLowerCase() === ext) {
                                        seqFilesToCopy.push(allFiles[f]);
                                    }
                                }
                            }
                        } else {
                            seqFilesToCopy.push(sourceFile);
                        }
                        var subFolderName = "Seq_" + (prefix !== "" ? prefix.replace(/[_\-\s]+$/, '') : "Asset");
                        var seqDestFolder = new Folder(assetsFolder.fsName + "/" + subFolderName);
                        var seqCounter = 1, baseSubFolderName = subFolderName;
                        while (seqDestFolder.exists) {
                            seqDestFolder = new Folder(assetsFolder.fsName + "/" + baseSubFolderName + "_" + seqCounter);
                            seqCounter++;
                        }
                        if (!seqDestFolder.create()) { errorCount++; continue; }
                        var firstCopiedFile = null, sequenceError = false;
                        for (var f = 0; f < seqFilesToCopy.length; f++) {
                            var sFile = seqFilesToCopy[f];
                            var dFile = new File(seqDestFolder.fsName + "/" + decodeURI(sFile.name));
                            if (sFile.copy(dFile.fsName)) {
                                if (decodeURI(sFile.fsName) === sourcePath) firstCopiedFile = dFile;
                            } else sequenceError = true;
                        }
                        if (firstCopiedFile) {
                            try {
                                item.replaceWithSequence(firstCopiedFile, false);
                                syncedCount++;
                                if (isMove && !sequenceError) {
                                    for (var df = 0; df < seqFilesToCopy.length; df++) {
                                        if (seqFilesToCopy[df].exists) seqFilesToCopy[df].remove();
                                    }
                                }
                            } catch (e) { errorCount++; }
                        } else errorCount++;
                        if (sequenceError) errorCount++;
                        continue;
                    }
                    var originalName = decodeURI(sourceFile.name);
                    var destFileObj = new File(assetsFolder.fsName + "/" + originalName);
                    var counter = 1, baseName = originalName, extension = "";
                    var dotIndex = originalName.lastIndexOf('.');
                    if (dotIndex !== -1) {
                        baseName = originalName.substring(0, dotIndex);
                        extension = originalName.substring(dotIndex);
                    }
                    while (destFileObj.exists) {
                        destFileObj = new File(assetsFolder.fsName + "/" + baseName + "_" + counter + extension);
                        counter++;
                    }
                    var copySuccess = sourceFile.copy(destFileObj.fsName);
                    if (copySuccess) {
                        try {
                            item.replace(destFileObj);
                            syncedCount++;
                            if (isMove && sourceFile.exists) sourceFile.remove();
                        } catch (e) { errorCount++; }
                    } else errorCount++;
                }
            }
            app.endUndoGroup();
            return '{"ok":true,"syncedCount":' + syncedCount + ',"errorCount":' + errorCount + '}';
        } catch (e) {
            try { app.endUndoGroup(); } catch (x) {}
            return '{"ok":false,"error":' + escapeJson(e.toString()) + '}';
        }
    }

    $._ssa = {
        getStatus: getStatus,
        performSync: performSync
    };
})();
