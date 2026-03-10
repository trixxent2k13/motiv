// Флаги для диагностики (видны из injected script)
try {
  window.__ymc_loaded = true;
  window.__ymc_version = "1.2";
} catch (_) {}

const AUTO_SWITCH_SELECTORS = [
  // Элементы, которые всегда есть
  '.map-controls',
  '.header-view._noprint',
  // (сам сайдбар скрываем через клик по кнопке, чтобы карта сама перерасчитала канвас)
  // Элементы, которые появляются при открытии карточки/поиска (могут отсутствовать)
  '.search-placemark-title._position_bottom._no-truncate',
  '.search-placemark-view__icon',
  '.search-placemark-view__title',
  '.sidebar-toggle-button._name_search-result'
];

const SIDEBAR_TOGGLE_BUTTONS = [
  '.sidebar-toggle-button._name_home',
  '.sidebar-toggle-button._name_search-result'
];

function applyAutoSwitch() {
  // Закрываем сайдбар, если он открыт (по кнопке home)
  const homeToggle = document.querySelector('.sidebar-toggle-button._name_home');
  if (homeToggle) {
    const isCollapsed = homeToggle.classList.contains('_collapsed');
    if (!isCollapsed) {
      homeToggle.click();
    }
  }
  AUTO_SWITCH_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => { el.style.display = 'none'; });
  });
}

async function tryAutoSwitch() {
  if (!chrome?.storage?.session) return;
  const result = await chrome.storage.session.get('autoSwitch');
  if (!result.autoSwitch) return;
  await chrome.storage.session.remove('autoSwitch');
  applyAutoSwitch();
  // Повтор через 1.5 и 3 с — карта может подгружаться динамически
  setTimeout(applyAutoSwitch, 1500);
  setTimeout(applyAutoSwitch, 3000);
}

// Переключение темы через событие force-theme
window.addEventListener('force-theme', (ev) => {
  const theme = ev?.detail?.theme;
  if (!theme) return;
  
  // Способ 1: Переключение через класс body (может работать)
  if (theme === 'dark') {
    document.body.classList.add('_theme_dark');
    document.body.classList.remove('_theme_light');
  } else if (theme === 'light') {
    document.body.classList.remove('_theme_dark');
    document.body.classList.add('_theme_light');
  }
  
  // Способ 2: Попытка найти и вызвать API темы в window
  // Ищем возможные объекты с методом setTheme
  const possibleApis = [
    window.ymaps?.theme,
    window.__ymaps_theme,
    window.yandex_map?.theme,
    document.querySelector('[data-theme]')?.dataset
  ];
  
  for (const api of possibleApis) {
    if (api && typeof api.setTheme === 'function') {
      try {
        api.setTheme(theme);
        console.log('[Yandex Map Cleaner] Тема переключена через API:', theme);
        return;
      } catch (e) {
        console.warn('[Yandex Map Cleaner] Ошибка переключения темы:', e);
      }
    }
  }
  
  console.log('[Yandex Map Cleaner] Тема переключена через класс body:', theme);
});

window.addEventListener('load', tryAutoSwitch);
if (document.readyState === 'complete') tryAutoSwitch();
