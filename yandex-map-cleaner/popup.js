const toggleUIVisibility = () => {
  window.__uiHidden = !window.__uiHidden;
  const isHidden = window.__uiHidden;

  const selectorsToToggle = [
    '.map-controls',
    '.header-view._noprint',
    'footer',
    '.search-placemark-title._position_bottom._no-truncate',
    '.search-placemark-view__icon',
    '.search-placemark-view__title'
  ];

  selectorsToToggle.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = isHidden ? 'none' : '';
    });
  });

  // Управляем сайдбаром через штатную кнопку
  const homeToggle = document.querySelector('.sidebar-toggle-button._name_home');
  if (homeToggle) {
    const isCollapsed = homeToggle.classList.contains('_collapsed');
    const shouldBeOpen = !isHidden;
    if (shouldBeOpen && isCollapsed) {
      homeToggle.style.display = '';
      homeToggle.click();
    } else if (!shouldBeOpen && !isCollapsed) {
      homeToggle.click();
      homeToggle.style.display = 'none';
    }
  }

  // tilt-кнопка — делаем прозрачной (не скрываем, чтобы клик работал)
  const tiltBtn = document.querySelector('.map-tilt-rotate-control__tilt');
  if (tiltBtn) {
    tiltBtn.style.opacity = isHidden ? '0' : '1';
  }

  // Меню настроек — скрываем вместе с UI
  const toolsMenu = document.querySelector('.map-tools-list');
  if (toolsMenu) {
    toolsMenu.style.opacity = isHidden ? '0' : '';
  }
};

const toggleTiltScript = () => {
  const tiltBtn = document.querySelector('.map-tilt-rotate-control__tilt');
  if (!tiltBtn) {
    console.warn('[Map Cleaner] Кнопка наклона не найдена');
    return;
  }
  const opts = { bubbles: true, cancelable: true };
  tiltBtn.dispatchEvent(new MouseEvent('mouseenter', opts));
  tiltBtn.dispatchEvent(new MouseEvent('mouseover', opts));
  tiltBtn.dispatchEvent(new MouseEvent('mousedown', opts));
  tiltBtn.dispatchEvent(new MouseEvent('mouseup', opts));
  tiltBtn.dispatchEvent(new MouseEvent('click', opts));
};

const toggleThemeScript = () => {
  const openAndToggleTheme = () => {
    const menuButton = document.querySelector('button._view_air._size_medium._pin-left._no-shadow');
    if (!menuButton) {
      console.warn('[Map Cleaner] Кнопка меню не найдена');
      return;
    }

    // Открываем меню, сразу скрываем визуально
    menuButton.click();
    const hideMenu = () => {
      const menu = document.querySelector('.map-tools-list');
      if (menu) menu.style.opacity = '0';
    };
    hideMenu();
    const hideInterval = setInterval(hideMenu, 16);

    setTimeout(() => {
      clearInterval(hideInterval);

      const switcher = document.querySelector('.map-tools-list__switcher') ||
                       document.querySelector('.segmented-control-view');

      if (!switcher) {
        console.warn('[Map Cleaner] Переключатель темы не найден');
        return;
      }

      const activeItem = switcher.querySelector('.segmented-control-view__item._active');
      const currentKey = activeItem?.classList.contains('_key_light') ? 'light' :
                         activeItem?.classList.contains('_key_dark') ? 'dark' :
                         activeItem?.classList.contains('_key_system') ? 'system' : null;

      if (!currentKey) {
        console.warn('[Map Cleaner] Не удалось определить текущую тему');
        return;
      }

      const targetKey = currentKey === 'light' ? 'dark' :
                        currentKey === 'dark' ? 'light' :
                        'dark'; // system → dark

      const targetButton = switcher.querySelector(`.segmented-control-view__item._key_${targetKey}`);

      if (!targetButton) {
        console.warn(`[Map Cleaner] Кнопка темы "${targetKey}" не найдена`);
        return;
      }

      targetButton.click();
      menuButton.click(); // закрываем меню

      // Сообщаем popup о смене темы
      chrome.runtime.sendMessage({ type: 'ymc-theme-changed', theme: targetKey });

      // Восстанавливаем opacity только если UI не скрыт
      setTimeout(() => {
        if (!window.__uiHidden) {
          const menu = document.querySelector('.map-tools-list');
          if (menu) menu.style.opacity = '';
        }
      }, 300);

      console.log(`[Map Cleaner] Тема переключена: ${currentKey} → ${targetKey}`);
    }, 200);
  };

  openAndToggleTheme();
};

const toggleBranchScript = () => {
  const url = new URL(window.location.href);
  const param1 = 'renderer_experimental_design';
  const param2 = 'renderer_experimental_ppoi_design';
  const val = '082d6429-8015-4b11-ad0a-64711c61702d';

  if (url.searchParams.has(param1) || url.searchParams.has(param2)) {
    url.searchParams.delete(param1);
    url.searchParams.delete(param2);
  } else {
    url.searchParams.set(param1, val);
    url.searchParams.set(param2, val);
  }

  window.location.href = url.toString();
};


const statusOut = document.getElementById("diagnostic-output");
const showStatus = (text) => {
  if (!statusOut) return;
  statusOut.style.display = "block";
  statusOut.textContent = String(text);
};

const bind = (id, func) => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("click", async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({ target: { tabId: tab.id }, func }, () => {
        if (chrome.runtime.lastError) {
          showStatus(`Ошибка выполнения "${id}": ${chrome.runtime.lastError.message}`);
        }
      });
    });
  } else {
    console.warn(`⚠️ Кнопка с id="${id}" не найдена`);
  }
};

bind("toggle-ui", toggleUIVisibility);
bind("toggle-tilt", toggleTiltScript);
bind("toggle-theme", toggleThemeScript);
bind("toggle-branch", toggleBranchScript);

// Синхронизация темы popup
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'ymc-theme-changed') {
    if (msg.theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('ymc-theme', msg.theme);
  }
});

// Восстанавливаем тему из прошлой сессии
const savedTheme = localStorage.getItem('ymc-theme');
if (savedTheme === 'light') {
  document.documentElement.classList.add('light');
}

// Диагностика
function runDiagnostic() {
  const out = document.getElementById("diagnostic-output");
  if (!out) return;
  out.style.display = "block";
  out.textContent = "Проверяю вкладку...";

  const selectors = [
    ".search-placemark-title._position_bottom._no-truncate",
    ".search-placemark-view__icon",
    ".map-controls",
    ".header-view._noprint",
    ".sidebar-toggle-button._name_search-result",
    ".sidebar-toggle-button._name_home",
    ".map-tilt-rotate-control__tilt",
    "button._view_air._size_medium._pin-top",
    "footer",
    "body._theme_dark"
  ];

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab || !tab.url || !/yandex\.(ru|eu)\/maps\//.test(tab.url)) {
      out.textContent = "Откройте страницу yandex.ru/maps или yandex.eu/maps и нажмите Диагностика снова.";
      return;
    }
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (selList) => {
        const scriptUrls = Array.from(document.querySelectorAll("script[src]"))
          .map(s => s.src)
          .filter(src => src.includes("map") || src.includes("feature") || src.includes("yastatic"));
        const selectorCounts = {};
        selList.forEach(sel => {
          try { selectorCounts[sel] = document.querySelectorAll(sel).length; }
          catch (e) { selectorCounts[sel] = "err: " + e.message; }
        });
        return {
          scriptUrls: scriptUrls.slice(0, 25),
          selectorCounts,
          yandexMapExists: typeof window.yandex_map !== "undefined",
          ymcLoaded: !!window.__ymc_loaded,
          ymcVersion: window.__ymc_version || null,
          bodyTheme: document.body.classList.contains("_theme_dark") ? "dark" : "light",
          bodyClass: document.body.className || "",
          htmlClass: document.documentElement.className || ""
        };
      },
      args: [selectors]
    }, (results) => {
      if (chrome.runtime.lastError) {
        out.textContent = "Ошибка: " + chrome.runtime.lastError.message;
        return;
      }
      const d = results?.[0]?.result;
      if (!d) { out.textContent = "Нет результата (страница ещё не загружена?)"; return; }

      let text = "=== Скрипты (map/feature/yastatic) ===\n";
      text += (d.scriptUrls.length ? d.scriptUrls.join("\n") : "Не найдено") + "\n\n";
      text += "=== Селекторы (найдено элементов) ===\n";
      Object.entries(d.selectorCounts).forEach(([sel, n]) => {
        text += (n > 0 ? "✓ " : "✗ ") + n + " — " + sel + "\n";
      });
      text += "\n=== Остальное ===\n";
      text += "YMC content.js: " + (d.ymcLoaded ? "загружен" : "НЕ загружен") + (d.ymcVersion ? ` (v${d.ymcVersion})` : "") + "\n";
      text += "yandex_map: " + (d.yandexMapExists ? "есть" : "нет") + "\n";
      text += "Тема body: " + d.bodyTheme + "\n";
      text += "\nbody.className: " + (d.bodyClass || "(пусто)") + "\n";
      text += "html.className: " + (d.htmlClass || "(пусто)") + "\n";
      out.textContent = text;
    });
  });
}

const diagnosticBtn = document.getElementById("diagnostic");
if (diagnosticBtn) {
  diagnosticBtn.addEventListener("click", runDiagnostic);
} else {
  console.error("Кнопка 'diagnostic' не найдена в popup.html");
}

// Версия из manifest
(function() {
  const manifest = chrome.runtime.getManifest();
  const v = (manifest && manifest.version) ? manifest.version : '0.0.0';
  const el = document.getElementById('versionDisplay');
  if (el) el.textContent = 'v' + v;
})();
