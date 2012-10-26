function pinIt(info, tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function () {
      var description = tab.title.substr(0, 500);
      var url = "http://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(info.srcUrl) +
        "&url=" + encodeURIComponent(tab.url) +
        "&title=" + encodeURIComponent(tab.title) +
        "&description=" + encodeURIComponent(description);
        chrome.windows.create({
            url: url,
            type: "popup",
            width: 600,
            height: 300
        });
    });
}
chrome.contextMenus.create({
    title: "Pin it!",
    contexts: ["image"],
    onclick: pinIt
});
