(function(n){function e(e){for(var r,a,c=e[0],u=e[1],f=e[2],s=0,p=[];s<c.length;s++)a=c[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={popup:0},i=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var l=u;i.push([1,"chunk-vendors"]),t()})({1:function(n,e,t){n.exports=t("5f0b")},"16db":function(n,e,t){},"589e":function(n,e,t){},"5f0b":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"popup"}},[t("ip-transform")],1)},i=[],a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"ip-transform"},[t("button",{on:{click:n.tranformIP}},[n._v("本地转内网ip")])])},c=[];t("a481"),t("28a5"),t("ac6a"),t("456d");function u(){return new Promise(function(n){var e=window.RTCPeerConnection||window.webkitRTCPeerConnection||window.mozRTCPeerConnection;if(e){var t=function(e){if(!(e in i)){i[e]=!0;for(var t=Object.keys(i).filter(function(n){return i[n]}),r=0;r<t.length;r++)t[r].length>16&&(t.splice(r,1),r--);n(t[0])}},r=function(n){n.split("\r\n").forEach(function(n,e,r){if(~n.indexOf("a=candidate")){var o=n.split(" "),i=o[4],a=o[7];"host"===a&&t(i)}else if(~n.indexOf("c=")){o=n.split(" "),i=o[2];t(i)}})},o=new e({iceServers:[]});o.createDataChannel("",{reliable:!1}),o.onicecandidate=function(n){n.candidate&&r("a="+n.candidate.candidate)},o.createOffer(function(n){r(n.sdp),o.setLocalDescription(n)},function(n){console.warn("offer failed",n)});var i=Object.create(null);i["0.0.0.0"]=!1}})}var f={name:"IpTransform",methods:{tranformIP:function(){u().then(function(n){console.log(n)}),chrome.tabs.getSelected(null,function(n){var e=n.url,t=/localhost|127.0.0.1/;t.test(e)?u().then(function(n){chrome.tabs.create({url:e.replace(t,n)})}):alert("不是localhost地址")})}},mounted:function(){}},l=f,s=(t("a4b0"),t("2877")),p=Object(s["a"])(l,a,c,!1,null,null,null);p.options.__file="ip-transform.vue";var d=p.exports,v={name:"popup",components:{IpTransform:d}},b=v,h=(t("9aa8"),Object(s["a"])(b,o,i,!1,null,null,null));h.options.__file="App.vue";var m=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(m)}}).$mount("#app")},"9aa8":function(n,e,t){"use strict";var r=t("16db"),o=t.n(r);o.a},a4b0:function(n,e,t){"use strict";var r=t("589e"),o=t.n(r);o.a}});
//# sourceMappingURL=popup.874d6250.js.map