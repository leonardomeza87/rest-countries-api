(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,c=n(1),i=n.n(c),a=n(18),o=n.n(a),l=(n(25),n(2)),s=n(8),u=n(3),j=(n(26),["title","titleId"]);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function f(e,t){var n=e.title,i=e.titleId,a=d(e,j);return c.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":i},a),void 0===n?c.createElement("title",{id:i},"Arrow Back"):n?c.createElement("title",{id:i},n):null,r||(r=c.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M244 400L100 256l144-144M120 256h292"})))}var O,h=c.forwardRef(f),p=(n.p,n(0)),m=function(e){var t=e.country,n=e.data,r=t.name,c=t.nativeName,i=t.population,a=t.region,o=t.subregion,u=t.capital,j=t.topLevelDomain,b=t.currencies,d=t.languages,f=t.borders;d=d.map((function(e){return e.name})).join(", ");for(var O=[],m=function(e){var t=n.filter((function(t){return t.alpha3Code===f[e]})),r=Object(l.a)(t,1);O[e]=r[0]},v=0;v<f.length;v++)m(v);return Object(p.jsxs)("div",{className:"country-page",children:[Object(p.jsx)(s.b,{to:"/",className:"back",children:Object(p.jsxs)("button",{children:[Object(p.jsx)(h,{}),Object(p.jsx)("p",{children:"Back"})]})}),Object(p.jsxs)("div",{className:"country-container",children:[Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:t.flag,alt:"".concat(t.name," flag")})}),Object(p.jsxs)("div",{className:"text-container",children:[Object(p.jsx)("h1",{children:r}),Object(p.jsxs)("div",{className:"details",children:[Object(p.jsxs)("div",{className:"part-1",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Native Name: "}),c]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Population: "}),(new Intl.NumberFormat).format(i)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Region: "}),a]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Sub Region: "}),o]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Capital: "}),u]})]}),Object(p.jsxs)("div",{className:"part-2",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Top Level Domain: "}),j[0]]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Currencies: "}),b[0].name]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Languages: "}),d]})]})]}),Object(p.jsxs)("div",{className:"borders",children:[Object(p.jsx)("strong",{children:"Border Countries:"}),Object(p.jsx)("div",{className:"container",children:O.length>0?O.map((function(e){return Object(p.jsx)(s.b,{to:"/".concat(e.alpha3Code),className:"border",children:Object(p.jsx)("button",{children:e.name})},e.alpha3Code)})):Object(p.jsx)("p",{children:"None (This country is probably on an island)"})})]})]})]})]})},v=function(e){var t=e.error,n=Object(u.f)().code;return Object(p.jsx)("div",{className:"error-page",children:Object(p.jsxs)("div",{className:t?"container error":"container",children:[!t&&Object(p.jsx)(s.b,{to:"/",className:"back",children:Object(p.jsxs)("button",{children:[Object(p.jsx)(h,{}),Object(p.jsx)("p",{children:"Back"})]})}),Object(p.jsx)("h1",{children:t?"A communication error has occurred with the API, check your internet":"No results for the country code: ".concat(n.toUpperCase())}),t&&Object(p.jsx)("a",{href:"/rest-countries-api/",className:"retry",children:Object(p.jsx)("button",{children:"Retry"})})]})})},x=n(20),g=function(e){var t=e.country,n=e.scrollUp;return Object(p.jsx)(s.b,{to:"/".concat(t.alpha3Code),onClick:n,children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"flag-container",children:Object(p.jsx)("img",{src:t.flag,alt:"".concat(t.name," flag")})}),Object(p.jsxs)("div",{className:"text-container",children:[Object(p.jsx)("h2",{children:t.name}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Population: "}),(new Intl.NumberFormat).format(t.population)]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Region: "}),t.region]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Capital: "}),t.capital]})]})]})})},y=function(e,t){for(var n=0,r=[],c=0;c<e.length/t;c++)r.push(e.slice(n,n+t)),n+=t;return r},w=function(e){var t=e.countries,n=e.increaseChunk,r=e.setCondition,i=e.scrollUp,a=Object(c.useState)(y(t,8)),o=Object(l.a)(a,2),s=o[0],u=o[1],j=Object(c.useState)(1),b=Object(l.a)(j,2),d=b[0],f=b[1],O=Object(c.useCallback)((function(){f(d+1)}),[d]);Object(c.useEffect)((function(){r(d<t.length/8)}),[t,r,d]),Object(c.useEffect)((function(){O()}),[n]),Object(c.useEffect)((function(){u(y(t,8)),f(1)}),[t]);var h=[];return s.slice(0,d).forEach((function(e){h.push.apply(h,Object(x.a)(e))})),Object(p.jsx)("div",{className:"countries-container",children:t?h.map((function(e){return Object(p.jsx)(g,{country:e,scrollUp:i},e.name)})):Object(p.jsx)("h2",{children:"Nothing to see here"})})},k=["title","titleId"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function C(e,t){var n=e.title,r=e.titleId,i=N(e,k);return c.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Chevron Down"):n?c.createElement("title",{id:r},n):null,O||(O=c.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M112 184l144 144 144-144"})))}var S,I=c.forwardRef(C),P=(n.p,function(e){var t=e.updateRegion,n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)("Filter by Region"),s=Object(l.a)(o,2),u=s[0],j=s[1];return Object(c.useEffect)((function(){t(u)}),[u,t]),Object(p.jsxs)("div",{className:"filter",children:[Object(p.jsxs)("button",{onClick:function(){a(!i)},onBlur:function(){setTimeout((function(){a(!1)}),100)},className:i?"unfolded":"",children:[u," ",Object(p.jsx)(I,{})]}),Object(p.jsxs)("div",{className:i?"options selected":"options",children:[Object(p.jsx)("div",{className:"option",onClick:function(){j("All")},children:"All"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Africa")},children:"Africa"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Americas")},children:"Americas"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Asia")},children:"Asia"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Europe")},children:"Europe"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Oceania")},children:"Oceania"}),Object(p.jsx)("div",{className:"option",onClick:function(){j("Polar")},children:"Polar"})]})]})}),A=function(e){var t=e.increaseChunks,n=e.condition,r=Object(c.useState)(!0),i=Object(l.a)(r,2),a=i[0],o=i[1],s=Object(c.useRef)(null),u=Object(c.useCallback)((function(e){e[0].isIntersecting&&!0===a&&(o(!1),setTimeout((function(){t(),o(!0)}),10))}),[a,t]);return Object(c.useEffect)((function(){var e=new IntersectionObserver(u,{root:null,rootMargin:"0px",threshold:0});s.current&&e.observe(s.current)}),[a,n]),Object(p.jsx)(p.Fragment,{children:n&&a&&Object(p.jsx)("div",{className:"loader",ref:s})})},L=["title","titleId"];function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function B(e,t){var n=e.title,r=e.titleId,i=M(e,L);return c.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Search"):n?c.createElement("title",{id:r},n):null,S||(S=c.createElement("path",{d:"M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"})))}var T,z=c.forwardRef(B),F=(n.p,["title","titleId"]);function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function W(e,t){var n=e.title,r=e.titleId,i=D(e,F);return c.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Close"):n?c.createElement("title",{id:r},n):null,T||(T=c.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M368 368L144 144M368 144L144 368"})))}var J,Q=c.forwardRef(W),_=(n.p,function(e){var t=e.filterByQuery,n=Object(c.useState)(""),r=Object(l.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return t(i)}),500);return function(){return clearTimeout(e)}}),[i,t]),Object(p.jsxs)("div",{className:"search-bar",children:[Object(p.jsx)(z,{}),Object(p.jsx)("input",{type:"text",placeholder:"Search for a country...",value:i,onChange:function(e){var t=e.target.value;a(t)},onKeyUp:function(e){"Enter"===e.key&&i&&t(i)}}),i&&Object(p.jsx)(Q,{className:"close-btn",onClick:function(){a("")}})]})}),G=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},H=function(e){var t=e.data,n=Object(c.useState)(t),r=Object(l.a)(n,2),i=r[0],a=r[1],o=Object(c.useState)("Filter by Region"),s=Object(l.a)(o,2),u=s[0],j=s[1],b=Object(c.useState)(0),d=Object(l.a)(b,2),f=d[0],O=d[1],h=Object(c.useState)(!0),m=Object(l.a)(h,2),v=m[0],x=m[1];Object(c.useEffect)((function(){G()}),[]);var g=Object(c.useCallback)((function(e){j(e),O(0)}),[]),y=Object(c.useCallback)((function(e){var n=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));a(n)}),[t]);Object(c.useEffect)((function(){if("Filter by Region"===u)return!1;if("All"===u)a(t);else{var e=t.filter((function(e){return e.region===u}));a(e)}}),[u,t]);return Object(p.jsxs)("div",{className:"home",children:[Object(p.jsxs)("div",{className:"utilities",children:[Object(p.jsx)(_,{filterByQuery:y}),Object(p.jsx)(P,{updateRegion:g})]}),i.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{countries:i,increaseChunk:f,setCondition:x,scrollUp:G}),Object(p.jsx)(A,{increaseChunks:function(){O(Date.now())},condition:v})]}):Object(p.jsx)("h1",{className:"empty-result",children:"There is no result for your search"})]})},K=["title","titleId"];function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function X(e,t){var n=e.title,r=e.titleId,i=V(e,K);return c.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Moon"):n?c.createElement("title",{id:r},n):null,J||(J=c.createElement("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32})))}var Y,Z=c.forwardRef(X),$=(n.p,["title","titleId"]);function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ne(e,t){var n=e.title,r=e.titleId,i=te(e,$);return c.createElement("svg",ee({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Moon"):n?c.createElement("title",{id:r},n):null,Y||(Y=c.createElement("path",{d:"M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z"})))}var re,ce=c.forwardRef(ne),ie=(n.p,function(){var e=document.body,t="theme--light",n="theme--dark",r=Object(c.useState)(localStorage.getItem("theme")||t),i=Object(l.a)(r,2),a=i[0],o=i[1];e.classList.add(a);return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("h1",{children:Object(p.jsx)(s.b,{to:"/",children:"Where in the world?"})}),Object(p.jsxs)("button",{onClick:function(){a===n?(e.classList.replace(n,t),localStorage.setItem("theme",t),o(t)):(e.classList.replace(t,n),localStorage.setItem("theme",n),o(n))},children:[a===t?Object(p.jsx)(Z,{}):Object(p.jsx)(ce,{})," Dark Mode"]})]})}),ae=["title","titleId"];function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function se(e,t){var n=e.title,r=e.titleId,i=le(e,ae);return c.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"Repo in GitHub"):n?c.createElement("title",{id:r},n):null,re||(re=c.createElement("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})))}var ue,je=c.forwardRef(se),be=(n.p,["title","titleId"]);function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Oe(e,t){var n=e.title,r=e.titleId,i=fe(e,be);return c.createElement("svg",de({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},i),void 0===n?c.createElement("title",{id:r},"My Twitter"):n?c.createElement("title",{id:r},n):null,ue||(ue=c.createElement("path",{d:"M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"})))}var he=c.forwardRef(Oe),pe=(n.p,function(){return Object(p.jsxs)("footer",{children:[Object(p.jsx)("a",{href:"https://twitter.com/leonardomeza87",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(he,{})}),Object(p.jsx)("a",{href:"https://github.com/leonardomeza87/rest-countries-api",target:"_blank",rel:"noopener noreferrer",children:Object(p.jsx)(je,{})})]})});var me=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(null),a=Object(l.a)(i,2),o=a[0],j=a[1],b=Object(c.useState)(!0),d=Object(l.a)(b,2),f=d[0],O=d[1];return Object(c.useEffect)((function(){O(!0),fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){r(e),O(!1)})).catch((function(e){console.log(e),j(!0),O(!1)}))}),[]),Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)(s.a,{basename:"/rest-countries-api",children:[Object(p.jsx)(ie,{}),f?Object(p.jsx)("div",{className:"loader-cont",children:Object(p.jsx)("div",{className:"loader-animation"})}):Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/",children:o?Object(p.jsx)(v,{error:o}):n&&Object(p.jsx)(H,{data:n})}),n&&n.map((function(e){return Object(p.jsx)(u.a,{exact:!0,path:"/".concat(e.alpha3Code),children:Object(p.jsx)(m,{country:e,data:n})},e.alpha3Code)})),Object(p.jsx)(u.a,{exact:!0,path:"/:code",children:Object(p.jsx)(v,{error:o})})]})]}),Object(p.jsx)(pe,{})]})};o.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(me,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e1707503.chunk.js.map