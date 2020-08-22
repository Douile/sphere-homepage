/*
keystrokes.js - An extinsible key-stroke binder for the web
Copyright (C) 2019-2020  Douile

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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
