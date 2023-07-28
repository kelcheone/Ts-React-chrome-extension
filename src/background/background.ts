chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message);
  sendResponse("From the background script");
});
