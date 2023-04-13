// A minimal background script for a manifest v3 Chrome extension.
// Add your background logic here.

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
