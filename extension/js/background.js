chrome.browserAction.onClicked.addListener(function(tab) {
    if(!tab.id || tab.id == chrome.tabs.TAB_ID_NONE)
        return;

    chrome.tabs.executeScript({
        file: 'js/injected_script.js'
    });
});