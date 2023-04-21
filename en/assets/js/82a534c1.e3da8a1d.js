"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2517],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),l=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=l(a),f=n,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return a?r.createElement(g,i(i({ref:e},u),{},{components:a})):r.createElement(g,i({ref:e},u))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1031:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={id:"azybs-centos",title:"\u5b89\u88c5\u8bf4\u660e\uff08Centos\u73af\u5883\uff09",sidebar_position:2},i="\u5b89\u88c5\u8bf4\u660e\uff08Centos\u73af\u5883\uff09",p={unversionedId:"20 setup/azybs-centos",id:"20 setup/azybs-centos",title:"\u5b89\u88c5\u8bf4\u660e\uff08Centos\u73af\u5883\uff09",description:"\u5b89\u88c5Java\u73af\u5883",source:"@site/docs/20 setup/\u5b89\u88c5\u8bf4\u660e(Centos\u73af\u5883).md",sourceDirName:"20 setup",slug:"/20 setup/azybs-centos",permalink:"/docs/en/20 setup/azybs-centos",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/20 setup/\u5b89\u88c5\u8bf4\u660e(Centos\u73af\u5883).md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"azybs-centos",title:"\u5b89\u88c5\u8bf4\u660e\uff08Centos\u73af\u5883\uff09",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Computing environments",permalink:"/docs/en/20 setup/szybs-sjdsxhgl"},next:{title:"\u5b89\u88c5\u8bf4\u660e\uff08Ubuntu\u73af\u5883\uff09",permalink:"/docs/en/20 setup/azybs-ubuntu"}},s={},l=[{value:"\u5b89\u88c5Java\u73af\u5883",id:"\u5b89\u88c5java\u73af\u5883",level:2},{value:"\u5b89\u88c5Datafor",id:"\u5b89\u88c5datafor",level:2},{value:"\u65e5\u5e38\u542f\u52a8",id:"\u65e5\u5e38\u542f\u52a8",level:2}],u={toc:l};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5b89\u88c5\u8bf4\u660ecentos\u73af\u5883"},"\u5b89\u88c5\u8bf4\u660e\uff08Centos\u73af\u5883\uff09"),(0,n.kt)("h2",{id:"\u5b89\u88c5java\u73af\u5883"},"\u5b89\u88c5Java\u73af\u5883"),(0,n.kt)("p",null,"JAVA 1.8\u4ee5\u4e0a"),(0,n.kt)("p",null,"\u68c0\u67e5\u7cfb\u7edf\u662f\u5426\u5b89\u88c5java\u73af\u5883"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172227194.png"})),(0,n.kt)("p",null,"\u5982\u679c\u63d0\u793a\u547d\u4ee4\u627e\u4e0d\u5230\uff0c\u5219\u9700\u8981\u5b89\u88c5\u3002"),(0,n.kt)("p",null,"\u5b89\u88c5\u7684\u65b9\u5f0f\u6709\u591a\u79cd\uff0c\u53ef\u4ee5\u79bb\u7ebf\u3002\u5982\u4e0b\u65b9\u5f0f\u901a\u8fc7yum\u547d\u4ee4\u5b89\u88c5"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172259131.png"})),(0,n.kt)("p",null," \u5982\u679c\u7cfb\u7edf\u652f\u6301yum\u547d\u4ee4\uff0c\u4e14\u4e0e\u4e92\u8054\u7f51\u8054\u901a\uff0c\u5219\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u4f1a\u63d0\u793a"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172317391.png"})),(0,n.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u786e\u8ba4\u5b89\u88c5\u662f\u5426\u6210\u529f"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172331647.png"})),(0,n.kt)("h2",{id:"\u5b89\u88c5datafor"},"\u5b89\u88c5Datafor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa41. \u5207\u6362root\u7528\u6237")),(0,n.kt)("p",null,"sudo su root"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172346058.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa42. \u521b\u5efadatafor\u7528\u6237\u7ec4")),(0,n.kt)("p",null,"groupadd datafor"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172418679.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa43. \u521b\u5efadatafor\u7528\u6237\u5e76\u6dfb\u52a0\u5230datafor\u7528\u6237\u7ec4\uff0c\u5e76\u5c06\u7528\u6237\u5bc6\u7801\u4e5f\u8bbe\u7f6e\u4e3adatafor")),(0,n.kt)("p",null,"adduser datafor -g datafor\npasswd datafor"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172434849.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa44. \u8fdb\u5165\u5b89\u88c5\u5305\u6240\u5728\u76ee\u5f55\uff0c\u5c06\u5b89\u88c5\u5305\u89e3\u538b\u81f3/opt\u8def\u5f84\u4e0b")),(0,n.kt)("p",null,"unzip -o datafor-server_202203240605.zip -d /opt/"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172446528.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b65\u9aa45. \u89e3\u538b\u5b8c\u6210\u540e\uff0c\u8fdb\u5165/opt/\u76ee\u5f55\uff0c\u4fee\u6539\u6743\u9650")),(0,n.kt)("p",null,"cd /opt/\nchmod -R 700 datafor-server\nchown -R datafor datafor-server\nchgrp -R datafor datafor-server"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172501348.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u5b8c\u6bd5")),(0,n.kt)("p",null,"\u542f\u505c\u670d\u52a1\uff0c\u53c2\u89c1\u65e5\u5e38\u542f\u52a8"),(0,n.kt)("h2",{id:"\u65e5\u5e38\u542f\u52a8"},"\u65e5\u5e38\u542f\u52a8"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u65e5\u5e38\u542f\u505c\uff0c\u8bf7\u4ee5datafor\u7528\u6237\u64cd\u4f5c")),(0,n.kt)("p",null,"su datafor\ncd /opt/datafor-server/"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8\u670d\u52a1")),(0,n.kt)("p",null,"./start-datafor.sh"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172513074.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u505c\u6b62\u670d\u52a1")),(0,n.kt)("p",null,"./stop-datafor.sh"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172525119.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u67e5\u770b\u670d\u52a1\u542f\u505c\u72b6\u6001")),(0,n.kt)("p",null,"ps -ef|grep tomcat"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829172541387.png"})),(0,n.kt)("p",null,"\u547d\u4ee4\u5982\u4e0a\u8f93\u51fa\uff0c\u5219\u8868\u793a\u670d\u52a1\u5904\u4e8e\u8fd0\u884c\u72b6\u6001"))}c.isMDXComponent=!0}}]);