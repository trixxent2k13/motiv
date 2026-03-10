chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.autoSwitchPending) {
    chrome.storage.session.set({ autoSwitch: true });
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
