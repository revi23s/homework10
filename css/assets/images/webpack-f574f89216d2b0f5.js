!function(){"use strict";var e,t,n,r,o,c,u,i,a,f,d,s,l={},b={};function p(e){var t=b[e];if(void 0!==t)return t.exports;var n=b[e]={id:e,loaded:!1,exports:{}},r=!0;try{l[e].call(n.exports,n,n.exports,p),r=!1}finally{r&&delete b[e]}return n.loaded=!0,n.exports}p.m=l,e=[],p.O=function(t,n,r,o){if(n){o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o];return}for(var u=1/0,c=0;c<e.length;c++){for(var n=e[c][0],r=e[c][1],o=e[c][2],i=!0,a=0;a<n.length;a++)u>=o&&Object.keys(p.O).every(function(e){return p.O[e](n[a])})?n.splice(a--,1):(i=!1,o<u&&(u=o));if(i){e.splice(c--,1);var f=r();void 0!==f&&(t=f)}}return t},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},p.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var o=Object.create(null);p.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach(function(t){c[t]=function(){return e[t]}});return c.default=function(){return e},p.d(o,c),o},p.d=function(e,t){for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce(function(t,n){return p.f[n](e,t),t},[]))},p.u=function(e){return 5260===e?"static/chunks/5260-f96e56b0c85a23d1.js":2367===e?"static/chunks/2367-8c4a2b8b3c32a11c.js":3456===e?"static/chunks/3456-abf2736f6ae4be04.js":5551===e?"static/chunks/5551-df3cfbce0f0043a2.js":9198===e?"static/chunks/9198-73306a30ac0aff09.js":939===e?"static/chunks/939-8e7988a5f1a5933b.js":1876===e?"static/chunks/1876-1af9b0dd0ec7e978.js":"static/chunks/"+(({2937:"eabe11fc",5279:"6c44d60f",9269:"0b7b90cd"})[e]||e)+"."+({1167:"8929eb1aa42af900",2937:"915a6345bbc4bf7b",3157:"f8c45386322f67b2",3802:"d51b241e3759c0b2",4504:"96e6589caa017ff0",4706:"0d3e596c2e9eb986",5279:"d2cd91aeae98796c",6284:"ed89c12b46edb906",7229:"7a443032bce33aa4",7280:"eb6de9008de5d9e2",7736:"d8854b6b3f83bc0c",7857:"571b4a1e7f13bc96",8581:"d477f1ea35bda51c",9269:"0b9b968388bef4f3"})[e]+".js"},p.miniCssF=function(e){return"static/css/"+({14:"2b5c1f33afa4096e",187:"2b5c1f33afa4096e",226:"2959200a453540a5",2888:"7d9d03267bf102ab",3802:"7658a21445486894",4363:"2959200a453540a5",4965:"2959200a453540a5",5111:"2959200a453540a5",7570:"99e837af73da8dbf",8115:"2959200a453540a5",9798:"2959200a453540a5"})[e]+".css"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="_N_E:",p.l=function(e,t,n,c){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var u,i,a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var d=a[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){u=d;break}}u||(i=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,p.nc&&u.setAttribute("nonce",p.nc),u.setAttribute("data-webpack",o+n),u.src=p.tu(e)),r[e]=[t];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(n)}),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),i&&document.head.appendChild(u)},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},p.tt=function(){return void 0===c&&(c={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(c=trustedTypes.createPolicy("nextjs#bundler",c))),c},p.tu=function(e){return p.tt().createScriptURL(e)},p.p="https://nextjs.spruko.com/ynex-ts-tailwind/preview/_next/",u=function(e,t,n,r){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var u=c&&("load"===c.type?"missing":c.type),i=c&&c.target&&c.target.href||t,a=Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=i,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o),o},i=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===e||c===t))return o}for(var u=document.getElementsByTagName("style"),r=0;r<u.length;r++){var o=u[r],c=o.getAttribute("data-href");if(c===e||c===t)return o}},a={2272:0},p.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&({3802:1})[e]&&t.push(a[e]=new Promise(function(t,n){var r=p.miniCssF(e),o=p.p+r;if(i(r,o))return t();u(e,o,t,n)}).then(function(){a[e]=0},function(t){throw delete a[e],t}))},f={2272:0},p.f.j=function(e,t){var n=p.o(f,e)?f[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=f[e]=[t,r]});t.push(n[2]=r);var o=p.p+p.u(e),c=Error();p.l(o,function(t){if(p.o(f,e)&&(0!==(n=f[e])&&(f[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}},"chunk-"+e,e)}else f[e]=0}},p.O.j=function(e){return 0===f[e]},d=function(e,t){var n,r,o=t[0],c=t[1],u=t[2],i=0;if(o.some(function(e){return 0!==f[e]})){for(n in c)p.o(c,n)&&(p.m[n]=c[n]);if(u)var a=u(p)}for(e&&e(t);i<o.length;i++)r=o[i],p.o(f,r)&&f[r]&&f[r][0](),f[r]=0;return p.O(a)},(s=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(d.bind(null,0)),s.push=d.bind(null,s.push.bind(s))}();