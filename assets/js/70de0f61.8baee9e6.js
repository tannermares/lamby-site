"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[1184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},l=void 0,i={permalink:"/blog/tailscale-extension-for-lambda-containers",source:"@site/blog/2023-06-03-tailscale-extension-for-lambda-containers.mdx",title:"Using Tailscale on Lambda for a Live Development Proxy",description:"Using Tailscale on Lambda for a Live Development Proxy",date:"2023-06-03T00:00:00.000Z",formattedDate:"June 3, 2023",tags:[{label:"tailscale",permalink:"/blog/tags/tailscale"},{label:"websockets",permalink:"/blog/tags/websockets"},{label:"lambda",permalink:"/blog/tags/lambda"},{label:"extension",permalink:"/blog/tags/extension"},{label:"container",permalink:"/blog/tags/container"}],readingTime:3.335,hasTruncateMarker:!0,authors:[{name:"Ken Collins",title:"Principal Engineer & Cloud Architect",url:"https://dev.to/metaskills",imageURL:"https://github.com/metaskills.png",key:"kcollins"}],frontMatter:{slug:"tailscale-extension-for-lambda-containers",title:"Using Tailscale on Lambda for a Live Development Proxy",authors:["kcollins"],tags:["tailscale","websockets","lambda","extension","container"]},nextItem:{title:"Welcome Lamby v4!",permalink:"/blog/welcome-to-lamby-v4"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lamby.cloud/img/blog/tailscale/header.png",alt:"Using Tailscale on Lambda for a Live Development Proxy"})),(0,r.kt)("p",null,"\u26a0\ufe0f DISCLAIMER: In no way am I advocating for the use of live proxies as a normal way to develop against cloud resources. However in some edge cases, such as developing a new system, live dev proxies or the general use of Tailscale in Lambda could be useful."))}m.isMDXComponent=!0}}]);