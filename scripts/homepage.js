// homepage.js
function query(q) {
  return document.querySelector(q);
}
function getCookie(name) {

}
function generatePositions(poscount) {
  let width = window.innerWidth;
  let height = window.innerHeight;

  var smallest = height;
  if (width < smallest) {
    smallest = height;
  }

  var size = (smallest/2)-200;
  var offset = -1*size/2;
  var centerSize = size.toString() + "px;";
  var centerOffset = offset.toString() + "px;";
  let style = "".concat("height:",centerSize,"width:",centerSize,"margin-left:",centerOffset,"margin-top:",centerOffset);
  let centr = query(".maincont");
  centr.setAttribute("style",style);

  var output = "";

  var positions = Array(poscount);
  let mult = 360/poscount;
  let r = size/2 + 150;
  for (a=0;a<positions.length;a++) {
    var deg = mult*a;
    let x = r * Math.cos(deg * Math.PI / 180);
    let y = r * Math.sin(deg * Math.PI / 180);
    if (deg > 180) {
      deg = deg-360;
    }
    var degrees = (deg).toString() + "deg";
    let style = "".concat('.contLink[pos="',a,'"] { transform: translate(',x,'px,',y,'px); }' /*.content[pos="',a,'"] > .contLine {transform: rotate(',degrees,') translate(',xin,'px,',yin,'px);} '*/);
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
  if (e.target.getAttribute("class") == "contLink" && e.type == "contextmenu") {
    e.preventDefault();
    let id = e.target.getAttribute("pos");
    query("#linkform").setAttribute("linkid",id);
    let href = e.target.href;
    let favicon = e.target.firstChild.src;
    query("#linkurl").value = href;
    query("#linkfavicon").value = favicon;
    query("#linkfaviconprev").src = favicon;
  } else if (e.target.id == "linksubmit" && e.type == "click") {
    let urlel = query("#linkurl");
    let faviconel = query("#linkfavicon");
    var url = urlel.value;
    if (url != "") {
      var favicon = faviconel.value;
      urlel.value = "";
      faviconel.value = "";
      var id = query("#linkform").getAttribute("linkid");
      var el = query("".concat('.contLink[pos="',id,'"]'));
      el.href = url;
      el.firstChild.src = favicon;
    }
    query("#linkform").removeAttribute("linkid");
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

window.addEventListener("click",mouseHandler);
window.addEventListener("contextmenu",mouseHandler);
query("#linkurl").addEventListener("keyup",changeUrl);

var poscount = 8;
var homepagedata = new Array(poscount);
generatePositions(poscount);
setupBoxes(poscount);
var defaults = [{url:"https://duckduckgo.com/?kae=d&kax=-1&kad=en_GB&kac=-1&k1=-1&kaj=m&kam=osm&kak=-1&kaq=-1&kao=-1&kap=-1&kp=-2&kz=1&kt=a&ks=n&kw=s&km=l&ka=a&ku=-1&kai=1&kg=p",ic:"https://duckduckgo.com/assets/icons/meta/DDG-icon_256x256.png"},
  {url:"https://www.youtube.com/",ic:"https://www.youtube.com/yts/img/favicon_144-vfliLAfaB.png"},
  {url:"https://google.co.uk/",ic:"https://avatars0.githubusercontent.com/u/1342004?s=400&v=4"},
  {url:"http://steamcommunity.com/",ic:"http://steamcommunity-a.akamaihd.net/public/shared/images/responsive/share_steam_logo.png"},
  {url:"https://discordapp.com/",ic:"https://maxcdn.icons8.com/Share/icon/Logos/discord_logo1600.png"},
  {url:"https://twitter.com/",ic:"https://abs.twimg.com/icons/apple-touch-icon-192x192.png"},
  {url:"https://www.netflix.com/",ic:"https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"},
  {url:"https://github.com/",ic:"https://assets-cdn.github.com/pinned-octocat.svg"}]
  ,el;
for (var i=0;i<defaults.length;i++) {
  el = query("".concat(".contLink[pos=\"",i,"\"]"));
  el.href = defaults[i].url;
  el.firstChild.src = defaults[i].ic;
}
