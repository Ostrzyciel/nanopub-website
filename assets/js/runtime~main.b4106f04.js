(()=>{"use strict";var e,t,r,o,a,n={},c={};function b(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=n,b.c=c,e=[],b.O=(t,r,o,a)=>{if(!r){var n=1/0;for(f=0;f<e.length;f++){for(var[r,o,a]=e[f],c=!0,i=0;i<r.length;i++)(!1&a||n>=a)&&Object.keys(b.O).every((e=>b.O[e](r[i])))?r.splice(i--,1):(c=!1,a<n&&(n=a));if(c){e.splice(f--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]},b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);b.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,b.d(a,n),a},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"assets/js/"+({61:"1f391b9e",138:"1a4e3797",251:"5969ba0b",332:"66c10cbb",334:"4a00c823",401:"17896441",528:"be6c8720",572:"bcb85c39",581:"935f2afb",583:"1df93b7f",714:"1be78505",806:"2b785902",864:"09d5ad39",877:"58b01185",893:"879aed75",904:"4cc4d2ba",982:"4cbb3e73"}[e]||e)+"."+{61:"24249360",138:"9d1c96fc",251:"356a30b8",323:"b705945c",332:"d70a0147",334:"fc9903c1",401:"18bcc77f",489:"a771d9f2",528:"467815d0",572:"65515838",581:"e5418b89",583:"252d6cd1",714:"43771c11",741:"5dc1dc9a",774:"e21fb5ee",806:"6ad8e3dc",864:"4ae6f66c",877:"ce174a2b",893:"f3cd727f",904:"e765a870",982:"44695636"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="nanopub-website:",b.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var c,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var u=d[f];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==a+r){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,b.nc&&c.setAttribute("nonce",b.nc),c.setAttribute("data-webpack",a+r),c.src=e),o[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),i&&document.head.appendChild(c)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",b.gca=function(e){return e={17896441:"401","1f391b9e":"61","1a4e3797":"138","5969ba0b":"251","66c10cbb":"332","4a00c823":"334",be6c8720:"528",bcb85c39:"572","935f2afb":"581","1df93b7f":"583","1be78505":"714","2b785902":"806","09d5ad39":"864","58b01185":"877","879aed75":"893","4cc4d2ba":"904","4cbb3e73":"982"}[e]||e,b.p+b.u(e)},(()=>{var e={354:0,869:0};b.f.j=(t,r)=>{var o=b.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=b.p+b.u(t),c=new Error;b.l(n,(r=>{if(b.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",c.name="ChunkLoadError",c.type=a,c.request=n,o[1](c)}}),"chunk-"+t,t)}},b.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,c,i]=r,d=0;if(n.some((t=>0!==e[t]))){for(o in c)b.o(c,o)&&(b.m[o]=c[o]);if(i)var f=i(b)}for(t&&t(r);d<n.length;d++)a=n[d],b.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return b.O(f)},r=self.webpackChunknanopub_website=self.webpackChunknanopub_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();