browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  browser.pageAction.show(sender.tab.id);
});
