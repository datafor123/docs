"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[9570],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:e},c),{},{components:a})):r.createElement(f,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9250:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={id:"updates-v6.06",title:"v6.06 Updates",sidebar_position:1},o="v6.06 Updates:",p={unversionedId:"00 update/updates-v6.06",id:"00 update/updates-v6.06",title:"v6.06 Updates",description:"1. Coordinate charts optimization: support for scroll bars, zooming, and automatic layout (Legend, Axis text, Axis names, Grid, etc.)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/00 update/2024-7 v6.06.md",sourceDirName:"00 update",slug:"/00 update/updates-v6.06",permalink:"/docs/en/00 update/updates-v6.06",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/00 update/2024-7 v6.06.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"updates-v6.06",title:"v6.06 Updates",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/en/"},next:{title:"Basic Operations for Creating Pages",permalink:"/docs/en/10 start/start-design"}},l={},s=[],c={toc:s};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v606-updates"},"v6.06 Updates:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Coordinate charts optimization: support for scroll bars, zooming, and automatic layout (Legend, Axis text, Axis names, Grid, etc.)"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/update/1720103692310.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Added "Continuous" and "Categorical" types to the X-axis. "Continuous" is suitable for numerical or time series data, while "Categorical" is suitable for categorical data.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/update/1720103883321.png",width:"100%"})),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/update/1720103912539.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Negative Value Display Optimization: For waterfall chart, Ratio stack chart, etc."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/update/1720104017593.png",width:"100%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Chart tooltip optimization")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Table pagination query performance optimization")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Added system parameters: #{system.username}, #{system.role}, #{system.roles_array}, #{system.locale}, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SQL optimization for filtering with null values")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Indicator filtering performance optimization")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Error and performance optimization for sorting multiple fact tables")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"License update")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Other optimizations and bug fixes"))))}u.isMDXComponent=!0}}]);