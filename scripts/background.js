const STORAGE_AREA = 'local'

if (browser) {
  browser.onMessage.addListener((message, sender, sendResponse) => {
    if (typeof message === typeof {}) {
      switch(message.action) {
        case 'save':
        switch(message.key) {
          case 'override_newtab':
          browser.storage[STORAGE_AREA].set({
            'override_newtab': message.value
          },sendResponse);
          break;
          case 'add_shortcut':
          browser.storage[STORAGE_AREA].set({
            ''
          })
        }
        break;
        case 'load':

        break;
        default:
        sendResponse({'error':'Unknown action'});
        break;
      }
    }
  })
} else {
  throw new Error('Could not find browser API');
}
