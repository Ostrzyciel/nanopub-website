(()=>{"use strict";var e,t,r,o,a,n={},b={};function f(e){var t=b[e];if(void 0!==t)return t.exports;var r=b[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=b,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],b=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(b=!1,a<n&&(n=a));if(b){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var b=2&o&&e;"object"==typeof b&&!~t.indexOf(b);b=r(b))Object.getOwnPropertyNames(b).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({30:"09d5ad39",53:"935f2afb",85:"1f391b9e",234:"4a00c823",237:"1df93b7f",381:"2b785902",397:"bcb85c39",423:"66c10cbb",514:"1be78505",524:"4cbb3e73",532:"4cc4d2ba",777:"5969ba0b",828:"58b01185",877:"879aed75",918:"17896441",920:"1a4e3797",923:"be6c8720"}[e]||e)+"."+{30:"3d675474",53:"1707232a",85:"a6634fbe",234:"6c44d608",237:"4c7d54d1",381:"4fc22b39",397:"18706b83",423:"40e73abc",443:"178dd356",514:"92ae6ec1",524:"9d78ad47",525:"50bf5a6c",532:"1c481a84",771:"df32544b",777:"7e59bbda",828:"03bedf08",877:"c4b4a479",918:"0e26cedc",920:"5f65611d",923:"7bd793a1",972:"3f808041"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="nanopub-website:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var b,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){b=u;break}}b||(i=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,f.nc&&b.setAttribute("nonce",f.nc),b.setAttribute("data-webpack",a+r),b.src=e),o[e]=[t];var l=(t,r)=>{b.onerror=b.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],b.parentNode&&b.parentNode.removeChild(b),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),i&&document.head.appendChild(b)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",f.gca=function(e){return e={17896441:"918","09d5ad39":"30","935f2afb":"53","1f391b9e":"85","4a00c823":"234","1df93b7f":"237","2b785902":"381",bcb85c39:"397","66c10cbb":"423","1be78505":"514","4cbb3e73":"524","4cc4d2ba":"532","5969ba0b":"777","58b01185":"828","879aed75":"877","1a4e3797":"920",be6c8720:"923"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,312:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^3(03|12)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),b=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;b.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",b.name="ChunkLoadError",b.type=a,b.request=n,o[1](b)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,b,i]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in b)f.o(b,o)&&(f.m[o]=b[o]);if(i)var d=i(f)}for(t&&t(r);c<n.length;c++)a=n[c],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(d)},r=self.webpackChunknanopub_website=self.webpackChunknanopub_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();