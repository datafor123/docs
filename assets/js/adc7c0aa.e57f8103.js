"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=n,s=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return r?a.createElement(s,l(l({ref:t},u),{},{components:r})):a.createElement(s,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},l="API \u53c2\u8003",i={unversionedId:"120 advanced/API\u53c2\u8003",id:"120 advanced/API\u53c2\u8003",title:"API \u53c2\u8003",description:"\u4ee5\u4e0b\u662f\u53ef\u7528\u7684 API \u53c2\u8003\uff1a",source:"@site/docs/120 advanced/API\u53c2\u8003.md",sourceDirName:"120 advanced",slug:"/120 advanced/API\u53c2\u8003",permalink:"/docs/120 advanced/API\u53c2\u8003",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/120 advanced/API\u53c2\u8003.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MDX\u51fd\u6570",permalink:"/docs/120 advanced/advanced-mdx"},next:{title:"URL\u8c03\u7528\u5206\u6790\u62a5\u8868\u4f20\u53c2\u8bf4\u660e",permalink:"/docs/120 advanced/URL\u8c03\u7528\u5206\u6790\u62a5\u8868\u4f20\u53c2\u8bf4\u660e"}},c={},p=[{value:"\u5b9a\u5236 Datafor \u4ea7\u54c1",id:"\u5b9a\u5236-datafor-\u4ea7\u54c1",level:2},{value:"\u5d4c\u5165\u548c\u6269\u5c55 Datafor \u529f\u80fd",id:"\u5d4c\u5165\u548c\u6269\u5c55-datafor-\u529f\u80fd",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"api-\u53c2\u8003"},"API \u53c2\u8003"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u7528\u7684 API \u53c2\u8003\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"REST API"),"\uff1a\u6b64 API \u5141\u8bb8\u521b\u5efa\u4e0e Datafor \u6570\u636e\u4ea4\u4e92\u7684\u81ea\u5b9a\u4e49\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u62a5\u8868\u8bbe\u8ba1\u5668JavaScript API"),"\uff1a\u6b64 API \u5141\u8bb8\u66f4\u7cbe\u7ec6\u5730\u4e0e Datafor \u62a5\u8868\u8bbe\u8ba1\u5668\u548c\u6570\u636e\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Platform JavaScript API"),"\uff1a\u6b64 API \u5c06\u5173\u952e\u7684 Datafor \u5e73\u53f0\u4fe1\u606f\u548c\u670d\u52a1\u66b4\u9732\u7ed9 JavaScript \u7ec4\u4ef6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Community Dashboard Framework (CDF) API"),"\uff1a\u6b64 API \u5141\u8bb8\u5728\u6ca1\u6709\u4efb\u4f55 Java \u7f16\u7801\u7684\u60c5\u51b5\u4e0b\u63a7\u5236 Datafor \u4eea\u8868\u677f\u7684\u751f\u547d\u5468\u671f\u3002")),(0,n.kt)("h2",{id:"\u5b9a\u5236-datafor-\u4ea7\u54c1"},"\u5b9a\u5236 Datafor \u4ea7\u54c1"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5b9a\u5236 Datafor\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b9a\u5236 Datafor \u7528\u6237\u63a7\u5236\u53f0"),"\uff1a\u901a\u8fc7\u624b\u52a8\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\u3001\u56fe\u5f62\u548c CSS \u6837\u5f0f\u8868\uff0c\u6539\u53d8\u7528\u6237\u63a7\u5236\u53f0\uff08Datafor \u670d\u52a1\u5668\u7684\u6807\u51c6 Web \u5e94\u7528\u7a0b\u5e8f\uff09\u7684\u5916\u89c2\u548c\u611f\u89c9\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5b9a\u5236 Datafor Analyzer"),"\uff1a\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"li"},"analyzer.properties")," \u6587\u4ef6\u4ee5\u4fee\u6539 Datafor Analyzer \u4ee5\u6ee1\u8db3\u60a8\u7684\u9700\u6c42\u3002")),(0,n.kt)("h2",{id:"\u5d4c\u5165\u548c\u6269\u5c55-datafor-\u529f\u80fd"},"\u5d4c\u5165\u548c\u6269\u5c55 Datafor \u529f\u80fd"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5d4c\u5165\u548c\u6269\u5c55\u4ee5\u4e0b Datafor \u529f\u80fd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5c06 Datafor \u670d\u52a1\u5668\u529f\u80fd\u5d4c\u5165 Web \u5e94\u7528\u7a0b\u5e8f\u4e2d"),"\uff1a\u5c06 Datafor \u670d\u52a1\u5668\u529f\u80fd\u548c\u5185\u5bb9\u96c6\u6210\u5230\u60a8\u81ea\u5df1\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5d4c\u5165\u5206\u6790\u62a5\u544a\u529f\u80fd"),"\uff1a\u5c06 Datafor \u62a5\u544a\u5f15\u64ce\u96c6\u6210\u5230\u65b0\u7684\u6216\u73b0\u6709\u7684 Java \u5e94\u7528\u7a0b\u5e8f\u4e2d\u3002")))}d.isMDXComponent=!0}}]);