/*
homepage.js - Sphere homepage "Main" script
Copyright (C) 2019  Douile

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

function query(q) {
  return document.querySelector(q);
}

function generatePositions(poscount) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  var smallest = height;
  if (width < smallest) {
    smallest = height;
  }

  var size = (smallest/2)-200;

  var output = "";

  var positions = Array(poscount);
  let mult = (Math.PI*2)/poscount;
  let r = size/2 + 150;
  for (a=0;a<positions.length;a++) {
    var rad = mult*a - Math.PI/2;
    let x = r * Math.cos(rad);
    let y = r * Math.sin(rad);
    let style = "".concat('.contLink[pos="',a,'"] { transform: translate(',x,'px,',y,'px); }' );
    positions[a] = style;
    output += style;
  }

  let st = document.createElement("style");
  st.innerText = output;
  document.head.appendChild(st);
  return positions;
}

function setupBoxes(poscount) {
  var cont = query(".maincont");
  for (a=0;a<poscount;a++) {
    let li = document.createElement("a");
    li.setAttribute("class","contLink");
    li.setAttribute("pos",a.toString());
    let img = document.createElement("img");
    li.appendChild(img);
    cont.appendChild(li);
  }
}

function mouseHandler(e) {
  if (e.target.getAttribute("class") === "contLink" && e.type === "contextmenu") {
    e.preventDefault();
    let id = e.target.getAttribute("pos");
    query("#linkform").setAttribute("linkid",id);
    let href = e.target.href;
    let favicon = e.target.firstChild.src;
    query("#linkurl").value = href;
    query("#linkfavicon").value = favicon;
    query("#linkfaviconprev").src = favicon;
  } else if (e.target.id === "linksubmit" && e.type === "click") {
    let urlel = query("#linkurl");
    let faviconel = query("#linkfavicon");
    var url = urlel.value;
    let id = query("#linkform").getAttribute("linkid");
    var favicon = faviconel.value;
    urlel.value = "";
    faviconel.value = "";
    window.links[id] = { url: url, ic: favicon };
    saveLinks(window.links);
    refreshLinks();
    query("#linkform").removeAttribute("linkid");
  } else if (e.target.classList.contains('count-button') && e.type === "click") {
    if (e.target.classList.contains('count-increase')) window.links.push({ url: '', ic: '' });
    if (e.target.classList.contains('count-decrease')) window.links.pop( window.links.length - 1);
    saveLinks(window.links);
    refreshLinks();
  }
}

function changeUrl(e) {
  var url = e.target.value;
  console.log(url);
  var urlpattern = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
  if (urlpattern.test(url)) {
    var favicon = query("#linkfavicon");
    if (favicon.value == "" || favicon.getAttribute("default") == "true") {
      favicon.setAttribute("default","true");
      var suffix = "favicon.ico";
      if (url.endsWith("/") != true) {
        suffix = "/" + suffix;
      }
      var iconurl = url + suffix;
      favicon.value = iconurl;
      query("#linkfaviconprev").src = iconurl;
    }
  }
}

function loadErrorHandler(e) {
  if (e.target.tagName === 'IMG') {
    e.target.removeAttribute('src');
  }
}

function parseCookie() {
  let data = {},
  i = 0, cookieString = document.cookie,
  name = '', value = '',
  state = 0;
  while (i < cookieString.length) {
    let c = cookieString[i];
    if (c === '=') {
      state = 1;
      value = '';
    } else if (c === '&') {
      console.log(name,value);
      data[name] = value;
      state = 0;
      name = '';
    } else {
      if (state === 0) name += c;
      else if (state === 1) value += c;
    }
    i++;
  }
  if (state === 1) data[name] = value;
  return data;
}

function parseLinks(links) {
  generatePositions(links.length);
  setupBoxes(links.length);

  for (let i=0;i<links.length;i++) {
    let t = query(`.contLink[pos="${i}"]`);
    t.href = links[i].url;
    t.querySelector('img').src = links[i].ic;
  }
}

function saveLinks(links) {
  let data = JSON.stringify(links);
  saveLinksCookie(data);
  saveLinksLocalStorage(data);
}

function saveLinksCookie(data) {
  document.cookie = `sphere-links=${encodeURIComponent(data)};path=/;samesite;expires=Fri, 1 Jan 9999 00:00:00 GMT`;
}

function saveLinksLocalStorage(data) {
  window.localStorage.setItem('sphere-links',data);
}

function loadLinks() {
  let data = loadLinksLocalStorage();
  data = data === null ? loadLinksCookie() : data;
  return data;
}

function loadLinksCookie() {
  let text = decodeURIComponent( parseCookie()['sphere-links'] ),
  data = {};
  try {
    data = JSON.parse(text);
  } catch(e) {}
  return data;
}

function loadLinksLocalStorage() {
  let data = {};
  try {
    data = JSON.parse(window.localStorage.getItem('sphere-links'));
  } catch(e) {}
  return data;
}

function refreshLinks() {
  window.links = loadLinks();
  document.querySelectorAll('.contLink').forEach(n => n.remove());
  parseLinks(window.links);
}

window.addEventListener("click",mouseHandler);
window.addEventListener("contextmenu",mouseHandler);
window.addEventListener("error",loadErrorHandler, { capture: true, passive: true }, true);
query("#linkurl").addEventListener("keyup",changeUrl);

var links;
/* [{url:"https://duckduckgo.com/?kae=d&kax=-1&kad=en_GB&kac=-1&k1=-1&kaj=m&kam=osm&kak=-1&kaq=-1&kao=-1&kap=-1&kp=-2&kz=1&kt=a&ks=n&kw=s&km=l&ka=a&ku=-1&kai=1&kg=p",ic:"https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png"},
  {url:"https://www.youtube.com/",ic:"https://www.youtube.com/yts/img/favicon_144-vfliLAfaB.png"},
  {url:"https://google.co.uk/",ic:"https://avatars0.githubusercontent.com/u/1342004?s=400&v=4"},
  {url:"http://steamcommunity.com/",ic:"http://steamcommunity-a.akamaihd.net/public/shared/images/responsive/share_steam_logo.png"},
  {url:"https://discordapp.com/",ic:"https://maxcdn.icons8.com/Share/icon/Logos/discord_logo1600.png"},
  {url:"https://twitter.com/",ic:"https://abs.twimg.com/icons/apple-touch-icon-192x192.png"},
  {url:"https://www.netflix.com/",ic:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"},
  {url:"https://github.com/",ic:"https://assets-cdn.github.com/pinned-octocat.svg"}]
  */

refreshLinks();
