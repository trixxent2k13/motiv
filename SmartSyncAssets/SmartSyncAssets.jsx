(function(thisObj) {
    var HELP_URL = "https://github.com/trixxent2k13/motiv/tree/main/SmartSyncAssets";

    function openUrl(url) {
        try {
            if ($.os.indexOf("Windows") >= 0) {
                system.callSystem('explorer "' + url + '"');
            } else {
                system.callSystem('open "' + url + '"');
            }
        } catch (e1) {
            try {
                var shortcut = new File(Folder.temp + "/SmartSyncOpen.url");
                shortcut.open("w");
                shortcut.writeln("[InternetShortcut]");
                shortcut.writeln("URL=" + url);
                shortcut.close();
                shortcut.execute();
                shortcut.remove();
            } catch (e2) {
                alert("Не удалось открыть браузер. Включите: Edit → Preferences → General → Allow Scripts to Write Files and Access Network\n\nИли откройте вручную:\n" + url);
            }
        }
    }

    function buildUI(thisObj) {
        var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Smart Sync Assets", undefined, {resizeable:true});
        myPanel.orientation = "column";
        myPanel.alignChildren = ["fill", "top"];
        myPanel.margins = 8;
        myPanel.spacing = 6;

        var statusGroup = myPanel.add("group", undefined);
        statusGroup.orientation = "column";
        statusGroup.alignChildren = ["left", "top"];
        statusGroup.spacing = 2;
        var unsyncedText = statusGroup.add("statictext", undefined, "Не синхронизировано: 0");
        var syncedText = statusGroup.add("statictext", undefined, "Синхронизировано: 0");

        var btnRow = myPanel.add("group", undefined);
        btnRow.orientation = "row";
        btnRow.alignChildren = ["fill", "center"];
        btnRow.spacing = 4;

        var syncBtn = btnRow.add("button", undefined, "Sync");
        syncBtn.preferredSize = [60, 28];
        var helpBtn = btnRow.add("button", undefined, "Help");
        helpBtn.preferredSize = [60, 28];
        var feedbackBtn = btnRow.add("button", undefined, "Отзыв");

        helpBtn.onClick = function() { openUrl(HELP_URL); };
        feedbackBtn.onClick = function() {
            openUrl("https://forms.yandex.ru/u/696f2eb6068ff088f7e89e2e/?project_key_id=a7Bk2m");
        };

        var moveCheckbox = myPanel.add("checkbox", undefined, "Удалить дубликаты");
        moveCheckbox.value = false;
        syncBtn.onClick = function() {
            app.beginUndoGroup("Smart Sync Assets");
            try {
                var isMove = moveCheckbox.value;
                
                // Создаём отдельное окно для процесса синхронизации (там progress bar корректно обновляется)
                var syncWin = new Window("palette", "Smart Sync Assets", undefined, {resizeable: false});
                syncWin.orientation = "column";
                syncWin.alignChildren = ["fill", "top"];
                syncWin.margins = 15;
                syncWin.spacing = 10;
                var prgBar = syncWin.add("progressbar", undefined, 0, 100);
                prgBar.size = [220, 18];
                var prgLabel = syncWin.add("statictext", undefined, "Подготовка...", {multiline: false});
                prgLabel.justify = "center";
                syncWin.center();
                syncWin.show();
                
                performSync(prgBar, prgLabel, isMove, syncedText, unsyncedText, syncWin, function() {
                    updateStatus(syncedText, unsyncedText);
                    syncWin.close();
                });
            } catch (e) {
                alert("Ошибка: " + e.toString());
            }
            app.endUndoGroup();
        };

        updateStatus(syncedText, unsyncedText);

        // Настройки ресайза окна
        myPanel.layout.layout(true);
        myPanel.layout.resize();
        myPanel.onResizing = myPanel.onResize = function() {this.layout.resize();}
        
        return myPanel;
    }

    function updateStatus(syncedText, unsyncedText) {
        var proj = app.project;
        if (!proj || !proj.file) {
            syncedText.text = "Синхронизировано: 0";
            unsyncedText.text = "Не синхронизировано: 0";
            return;
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
        syncedText.text = "Синхронизировано: " + synced;
        unsyncedText.text = "Не синхронизировано: " + unsynced;
    }

    function performSync(progressBar, progressText, isMove, syncedText, unsyncedText, syncWindow, onComplete) {
        var proj = app.project;
        if (!proj) {
            if (syncWindow) syncWindow.close();
            alert("Нет открытого проекта.");
            return;
        }
        if (!proj.file) {
            if (syncWindow) syncWindow.close();
            alert("Пожалуйста, сначала сохраните проект (File -> Save)!");
            return;
        }

        // Определяем пути
        var projFile = proj.file;
        var projFolder = projFile.parent;
        // Убираем расширение .aep и заменяем %20 на пробелы
        var projName = decodeURI(projFile.name).replace(/\.[^\.]+$/, ''); 
        var assetsFolderName = projName + "_Assets";
        var assetsFolder = new Folder(projFolder.fsName + "/" + assetsFolderName);

        // Создаем папку, если ее нет
        if (!assetsFolder.exists) {
            if (!assetsFolder.create()) {
                if (syncWindow) syncWindow.close();
                alert("Не удалось создать папку для исходников: " + assetsFolder.fsName);
                return;
            }
        }

        var syncedCount = 0;
        var skippedCount = 0;
        var errorCount = 0;

        var totalItems = proj.numItems;

        if (progressBar && progressText) {
            progressBar.value = 0;
            progressBar.maxvalue = totalItems;
            progressBar.show();
            progressText.text = "Подготовка...";
            progressText.show();
        }

        // Перебираем все элементы в окне Project
        for (var i = 1; i <= totalItems; i++) {
            if (progressBar && progressText) {
                progressBar.value = i;
                progressText.text = "Обработка: " + i + " из " + totalItems;
                if (progressBar.window && typeof progressBar.window.update === 'function') {
                    progressBar.window.update();
                }
            }
            
            var item = proj.item(i);
            
            // Проверяем, что это футаж (FootageItem) и у него есть физический файл
            if (item instanceof FootageItem && item.mainSource instanceof FileSource && item.mainSource.file != null) {
                
                var sourceFile = item.mainSource.file;
                var sourcePath = decodeURI(sourceFile.fsName);
                var projFolderPath = decodeURI(projFolder.fsName);

                // Если путь файла начинается с пути папки проекта (то есть лежит рядом с проектом или в его подпапках) -> пропускаем
                if (sourcePath.indexOf(projFolderPath) === 0) {
                    skippedCount++;
                    continue; 
                }

                // ОБРАБОТКА СЕКВЕНЦИЙ КАДРОВ
                var isSequence = false;
                if (!item.mainSource.isStill) {
                    var ext = sourceFile.name.split('.').pop().toLowerCase();
                    // Исключаем популярные видео/аудио форматы и спец-файлы, чтобы не считать их секвенциями
                    var nonSeqFormats = { 'mp4':1, 'mov':1, 'avi':1, 'wmv':1, 'flv':1, 'mkv':1, 'webm':1, 'mxf':1, 'r3d':1, 'braw':1, 'gif':1, 'wav':1, 'mp3':1, 'aif':1, 'aiff':1, 'm4a':1, 'c4d':1 };
                    if (!nonSeqFormats[ext]) {
                        isSequence = true;
                    }
                }

                if (isSequence) {
                    var fileName = decodeURI(sourceFile.name);
                    var sourceFolder = sourceFile.parent;
                    // Ищем префикс, цифры и расширение (например render_ 0001 .png)
                    var match = fileName.match(/^(.*?)(\d+)(\.[^\.]+)$/i);
                
                    var seqFilesToCopy = [];
                    var prefix = "";
                    var ext = "";
                
                    if (match) {
                        prefix = match[1];
                        ext = match[3].toLowerCase();
                        
                        // Получаем все файлы в папке и ищем те, что подходят под паттерн секвенции
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
                        // Фолбэк, если в имени файла странным образом нет цифр
                        seqFilesToCopy.push(sourceFile);
                    }
                
                    // Создаем отдельную подпапку для секвенции в Assets
                    var subFolderName = "Seq_" + (prefix !== "" ? prefix.replace(/[_\-\s]+$/, '') : "Asset");
                    var seqDestFolder = new Folder(assetsFolder.fsName + "/" + subFolderName);
                
                    // Если папка с таким именем уже есть, добавляем индекс
                    var seqCounter = 1;
                    var baseSubFolderName = subFolderName;
                    while (seqDestFolder.exists) {
                        seqDestFolder = new Folder(assetsFolder.fsName + "/" + baseSubFolderName + "_" + seqCounter);
                        seqCounter++;
                    }
                    
                    if (!seqDestFolder.create()) {
                        errorCount++;
                        continue;
                    }
                
                    var firstCopiedFile = null;
                    var sequenceError = false;
                
                    // Копируем все файлы секвенции
                    for (var f = 0; f < seqFilesToCopy.length; f++) {
                        var sFile = seqFilesToCopy[f];
                        var dFile = new File(seqDestFolder.fsName + "/" + decodeURI(sFile.name));
                        if (sFile.copy(dFile.fsName)) {
                            // Ищем тот конкретный файл, к которому изначально была привязка в AE
                            if (decodeURI(sFile.fsName) === sourcePath) {
                                firstCopiedFile = dFile;
                            }
                        } else {
                            sequenceError = true;
                        }
                    }
                
                    // Перепривязываем секвенцию
                    if (firstCopiedFile) {
                        try {
                            item.replaceWithSequence(firstCopiedFile, false);
                            syncedCount++;
                            
                            // Удаляем оригиналы, если выбран "полный перенос" и не было ошибок копирования
                            if (isMove && !sequenceError) {
                                for (var df = 0; df < seqFilesToCopy.length; df++) {
                                    if (seqFilesToCopy[df].exists) {
                                        seqFilesToCopy[df].remove();
                                    }
                                }
                            }
                        } catch(replaceErr) {
                            errorCount++;
                        }
                    } else {
                        errorCount++;
                    }
                
                    if (sequenceError) {
                        errorCount++;
                    }
                
                    continue; // Переходим к следующему футажу
                }

                // ОБРАБОТКА ОБЫЧНЫХ ОДИНОЧНЫХ ФАЙЛОВ
                var originalName = decodeURI(sourceFile.name);
                var destFileObj = new File(assetsFolder.fsName + "/" + originalName);

                // Защита от одинаковых имен файлов (добавляем _1, _2 и т.д.)
                var counter = 1;
                var baseName = originalName;
                var extension = "";
                var dotIndex = originalName.lastIndexOf('.');
                
                if (dotIndex !== -1) {
                    baseName = originalName.substring(0, dotIndex);
                    extension = originalName.substring(dotIndex);
                }

                while (destFileObj.exists) {
                    destFileObj = new File(assetsFolder.fsName + "/" + baseName + "_" + counter + extension);
                    counter++;
                }

                // Копируем файл
                var copySuccess = sourceFile.copy(destFileObj.fsName);
                
                if (copySuccess) {
                    try {
                        // Перепривязываем файл в After Effects на новый путь
                        item.replace(destFileObj);
                        syncedCount++;
                        
                        // Удаляем оригинал, если выбран полный перенос
                        if (isMove) {
                            if (sourceFile.exists) {
                                sourceFile.remove();
                            }
                        }
                    } catch(replaceErr) {
                        errorCount++;
                    }
                } else {
                    errorCount++;
                }
            }
        }

        if (progressBar && progressText) {
            progressBar.hide();
            progressText.hide();
            progressBar.value = 0;
            if (progressBar.window && typeof progressBar.window.update === 'function') {
                progressBar.window.update();
            }
        }

        if (syncedText && unsyncedText && onComplete) {
            onComplete();
        }

        if (errorCount > 0) {
            alert("Синхронизация завершена, но возникли ошибки при копировании " + errorCount + " файлов.");
        }
    }

    // Запуск интерфейса
    var myScriptPal = buildUI(thisObj);
    if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
        myScriptPal.center();
        myScriptPal.show();
    }
})(this);