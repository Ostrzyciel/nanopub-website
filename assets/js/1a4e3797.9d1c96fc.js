"use strict";(self.webpackChunknanopub_website=self.webpackChunknanopub_website||[]).push([[138],{8988:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var a=n(675),r=n(467),c=n(6540),u=n(4586),s=n(422),l=n(5260),o=n(5489),m=n(6347),h=n(8193);const i=function(){var e=(0,m.W6)(),t=(0,m.zy)(),n=(0,u.A)().siteConfig.baseUrl;return{searchValue:h.A.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}};var p=n(5891),f=n(2384),d=n(6841),_=n(3810),g=n(7674),E=n(2849),y=n(1088);function I(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}const v={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var S=n(4471);function b(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,u=t.tokens,s=t.metadata,l=0===a,m=2===a,h=(l?n.b:r.b).slice(),i=m?n.s:n.t;return l||h.push(r.t),c.createElement("article",{className:v.searchResultItem},c.createElement("h2",null,c.createElement(o.A,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:m?(0,d.Z)(i,u):(0,_.C)(i,(0,g.g)(s,"t"),u,100)}})),h.length>0&&c.createElement("p",{className:v.searchResultItemPath},(0,S.$)(h)),m&&c.createElement("p",{className:v.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,_.C)(n.t,(0,g.g)(s,"t"),u,100)}}))}const w=function(){var e=(0,u.A)().siteConfig.baseUrl,t=i(),n=t.searchValue,o=t.updateSearchPath,m=(0,c.useState)(n),h=m[0],d=m[1],_=(0,c.useState)(),g=_[0],S=_[1],w=(0,c.useState)(),P=w[0],R=w[1],k=(0,c.useMemo)((function(){return h?I(y.P9.search_results_for,{keyword:h}):y.P9.search_the_documentation}),[h]);(0,c.useEffect)((function(){o(h),g&&(h?g(h,(function(e){R(e)})):R(void 0))}),[h,g]);var C=(0,c.useCallback)((function(e){d(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==h&&d(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.A)((0,a.A)().mark((function t(){var n,r,c;return(0,a.A)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Z)(e);case 2:n=t.sent,r=n.wrappedIndexes,c=n.zhDictionary,S((function(){return(0,f.m)(r,c,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(s.A,null,c.createElement(l.A,null,c.createElement("meta",{property:"robots",content:"noindex, follow"}),c.createElement("title",null,k)),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,k),c.createElement("input",{type:"search",name:"q",className:v.searchQueryInput,"aria-label":"Search",onChange:C,value:h,autoComplete:"off",autoFocus:!0}),!g&&h&&c.createElement("div",null,c.createElement(E.A,null)),P&&(P.length>0?c.createElement("p",null,I(1===P.length?y.P9.count_documents_found:y.P9.count_documents_found_plural,{count:P.length})):c.createElement("p",null,y.P9.no_documents_were_found)),c.createElement("section",null,P&&P.map((function(e){return c.createElement(b,{key:e.document.i,searchResult:e})})))))}}}]);