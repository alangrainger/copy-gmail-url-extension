// Create a context menu item
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'copyGmailUrl',
    title: 'Copy link to Gmail message',
    contexts: ['page'],
    documentUrlPatterns: ['https://mail.google.com/mail/*']
  })
})

// Listen for the context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'copyGmailUrl') {
    chrome.tabs.executeScript({
      file: 'content.js'
    })
  }
})
