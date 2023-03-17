"use strict";(self.webpackChunknanopub_website=self.webpackChunknanopub_website||[]).push([[234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,p(p({ref:t},c),{},{components:n})):r.createElement(b,p({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),p=["components"],i={id:"network",title:"Network"},l=void 0,s={unversionedId:"network",id:"network",title:"Network",description:"Nanopublications are published in a decentralized network of servers. This network is composed of multiple nanopublications servers deployed at various locations, such as universities, cf. example server / paper 1 / paper 2",source:"@site/docs/network.md",sourceDirName:".",slug:"/network",permalink:"/docs/network",draft:!1,editUrl:"https://github.com/Nanopublication/nanopub-website/edit/main/website/docs/network.md",tags:[],version:"current",lastUpdatedBy:"Tobias Kuhn",lastUpdatedAt:1679060872,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"network",title:"Network"},sidebar:"docs",previous:{title:"Examples",permalink:"/docs/examples"},next:{title:"Tools",permalink:"/docs/tools"}},c={},u=[{value:"\ud83d\udd2d Nanopub monitor",id:"-nanopub-monitor",level:2},{value:"\ud83d\uddc4\ufe0f Nanopublications servers",id:"\ufe0f-nanopublications-servers",level:2},{value:"\ud83d\udcab SPARQL endpoint",id:"-sparql-endpoint",level:2},{value:"\u2705 Validators",id:"-validators",level:2}],d={toc:u},m="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Nanopublications are published in a ",(0,o.kt)("strong",{parentName:"p"},"decentralized network of servers"),". This network is composed of multiple nanopublications servers deployed at various locations, such as universities, cf. ",(0,o.kt)("a",{parentName:"p",href:"https://np.petapico.org/"},"example server")," / ",(0,o.kt)("a",{parentName:"p",href:"http://arxiv.org/pdf/1411.2749"},"paper 1")," / ",(0,o.kt)("a",{parentName:"p",href:"https://doi.org/10.7717/peerj-cs.78"},"paper 2")),(0,o.kt)("h2",{id:"-nanopub-monitor"},"\ud83d\udd2d Nanopub monitor"),(0,o.kt)("p",null,"A service to see ",(0,o.kt)("strong",{parentName:"p"},"see all servers")," in the nanopublications network by accessing the ",(0,o.kt)("a",{parentName:"p",href:"http://purl.org/nanopub/monitor"},(0,o.kt)("strong",{parentName:"a"},"nanopub monitor"))," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tkuhn/nanopub-monitor/"},"monitor code"),")"),(0,o.kt)("h2",{id:"\ufe0f-nanopublications-servers"},"\ud83d\uddc4\ufe0f Nanopublications servers"),(0,o.kt)("p",null,"Each nanopublication server is composed of 3 core services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nanopub API: ",(0,o.kt)("a",{parentName:"li",href:"http://grlc.nanopubs.lod.labs.vu.nl/api/local/local/"},"instance 1")," / ",(0,o.kt)("a",{parentName:"li",href:"http://130.60.24.146:7881/api/local/local/"},"instance 2")),(0,o.kt)("li",{parentName:"ul"},"Tapas interface: ",(0,o.kt)("a",{parentName:"li",href:"http://grlc.nanopubs.lod.labs.vu.nl/tapas/tapas.html"},"instance 1")," / ",(0,o.kt)("a",{parentName:"li",href:"http://130.60.24.146:7881/tapas/tapas.html"},"instance 2")),(0,o.kt)("li",{parentName:"ul"},"Quad Pattern Fragments: ",(0,o.kt)("a",{parentName:"li",href:"http://ldf.nanopubs.lod.labs.vu.nl/np"},"instance 1")," / ",(0,o.kt)("a",{parentName:"li",href:"http://130.60.24.146:7882/np"},"instance 2"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tkuhn/nanopub-server"},"Source code for the server")),(0,o.kt)("h2",{id:"-sparql-endpoint"},"\ud83d\udcab SPARQL endpoint"),(0,o.kt)("p",null,"A public SPARQL endpoint is available to directly query the nanopublications network at ",(0,o.kt)("a",{parentName:"p",href:"https://virtuoso.nps.petapico.org/sparql"},"virtuoso.nps.petapico.org/sparql")),(0,o.kt)("h2",{id:"-validators"},"\u2705 Validators"),(0,o.kt)("p",null,"And there are ",(0,o.kt)("strong",{parentName:"p"},"validators")," for nanopublications: ",(0,o.kt)("a",{parentName:"p",href:"https://nanopub.petapico.org/"},"instance 1")," / ",(0,o.kt)("a",{parentName:"p",href:"http://app.tkuhn.eculture.labs.vu.nl/nanopub-validator/"},"instance 2")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tkuhn/nanopub-validator"},"source code"),")"))}b.isMDXComponent=!0}}]);