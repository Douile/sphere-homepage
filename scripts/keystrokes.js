var keystrokes = {
  patterns: {
    data: [],
    add: function(keys, url) {
      keystrokes.patterns.data.push(new keystrokes.Patern(keys, url));
      if (keys.length > keystrokes.patterns.maxsize) {
        keystrokes.patterns.maxsize = keys.length;
      }
    },
    find: function(text) {
      for (i=0;i<keystrokes.patterns.data.length;i++) {
        if (text.includes(keystrokes.patterns.data[i].keys)) {
          window.location = keystrokes.patterns.data[i].url;
          keystrokes.cur = "";
        }
      }
    },
    maxsize: 0
  },
  Patern: function(keys, url) {
    this.keys = keys;
    this.url = url;
  },
  cur: "",
  keyListener: function(e) {
    //console.log(e);
    keystrokes.cur += e.key;
    keystrokes.patterns.find(keystrokes.cur);
  }
}
window.addEventListener("keydown",keystrokes.keyListener);
// keystrokes.patterns.add("123","https://example.com/",{capture:false, passive:true}, false);
