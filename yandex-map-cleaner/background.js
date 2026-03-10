chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.autoSwitchPending) {
    chrome.storage.session.set({ autoSwitch: true });
  }
  if (message.type === 'ymcCheckUpdate') {
    checkUpdate();
  }
});

const REDIRECT_RULES = [
  // Старые пути (на случай если где-то ещё используются)
  { id: 1, condition: { urlFilter: "map-features/", resourceTypes: ["script"] }, desc: "map-features/" },
  { id: 2, condition: { urlFilter: "map-features", resourceTypes: ["script"] }, desc: "map-features" }
  // Примечание: перехват chunks/ymaps/ не используется, т.к. подстановка старого бандла может сломать карту
  // Вместо этого переключение темы работает через DOM и события
];

function installRedirectRules() {
  const rules = REDIRECT_RULES.map(({ id, condition, desc }) => ({
    id,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { extensionPath: "/scripts/custom-map-features.js" }
    },
    condition
  }));

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: REDIRECT_RULES.map(r => r.id),
    addRules: rules
  }, () => {
    if (chrome.runtime.lastError) {
      console.error("[Yandex Map Cleaner] ❌ Ошибка redirect:", chrome.runtime.lastError.message);
    } else {
      console.log("[Yandex Map Cleaner] ✅ Redirect-правила установлены:", REDIRECT_RULES.map(r => r.desc).join(", "));
    }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("[Yandex Map Cleaner] Установка расширения");
  installRedirectRules();
});
chrome.runtime.onStartup.addListener(() => { checkUpdate(); });
checkUpdate();

function checkUpdate() {
  const manifest = chrome.runtime.getManifest();
  const VERSION = (manifest && manifest.version) || '0.0.0';
  const UTILITY_ID = 'yandex-map-cleaner';
  const VERSIONS_URL = 'https://raw.githubusercontent.com/trixxent2k13/motiv/main/versions.json';

  fetch(VERSIONS_URL)
    .then(r => r.json())
    .then(vers => {
      const latest = vers[UTILITY_ID];
      if (!latest) return;
      const pa = latest.split('.').map(Number);
      const pb = VERSION.split('.').map(Number);
      for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
        const na = pa[i] || 0, nb = pb[i] || 0;
        if (na > nb) {
          chrome.storage.local.set({ ymcUpdate: { ver: latest, url: 'https://github.com/trixxent2k13/motiv/releases/latest' } });
          return;
        }
        if (na < nb) return;
      }
      chrome.storage.local.remove('ymcUpdate');
    })
    .catch(() => {});
}
