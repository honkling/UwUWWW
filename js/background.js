chrome.webNavigation.onDOMContentLoaded.addListener(({ tabId, url }) => {
    console.log({ url });
    chrome.scripting.executeScript({
        target: { tabId },
        files: ["js/inject.js"],
    });
});
