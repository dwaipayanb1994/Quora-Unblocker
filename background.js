chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "modify_url.js"});
});
