"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3424],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),u=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},l=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),c=u(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?a.createElement(m,p(p({ref:e},l),{},{components:r})):a.createElement(m,p({ref:e},l))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,p=new Array(o);p[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5468:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={id:"datafor-ubuntu",title:"Installation of Datafor(Ubuntu)",sidebar_position:35},p="Installation of Datafor(Ubuntu)",i={unversionedId:"20 setup/datafor-ubuntu",id:"20 setup/datafor-ubuntu",title:"Installation of Datafor(Ubuntu)",description:"Installation Steps",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20 setup/Datefor\u5b89\u88c5(Ubuntu).md",sourceDirName:"20 setup",slug:"/20 setup/datafor-ubuntu",permalink:"/docs/en/20 setup/datafor-ubuntu",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/20 setup/Datefor\u5b89\u88c5(Ubuntu).md",tags:[],version:"current",sidebarPosition:35,frontMatter:{id:"datafor-ubuntu",title:"Installation of Datafor(Ubuntu)",sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Installation of Datafor(Windows)",permalink:"/docs/en/20 setup/datafor-windows"},next:{title:"Visualizer(plugin for PBA) Setup",permalink:"/docs/en/20 setup/visualizer-setup"}},s={},u=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Startup",id:"startup",level:2}],l={toc:u};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"installation-of-dataforubuntu"},"Installation of Datafor(Ubuntu)"),(0,n.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1. Switch to the root user")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo su  \n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171526492.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Step 2. Create the "datafor" user, and set the user password to "datafor" as well.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"adduser datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171542736.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Step 3. Create a user group and add the "datafor" user to the "datafor" user group.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"addgroup datafor\naddgroup datafor datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171600582.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4. Navigate to the directory where the installation package is located and unzip the package to the /opt path.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"unzip -o datafor-server_202203210834.zip -d /opt/\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171613825.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5. After the extraction is complete, go to the /opt/ directory and modify permissions.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /opt/\nchmod -R 700 datafor-server\nchown -R datafor datafor-server\nchgrp -R datafor datafor-server\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171632512.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Installation Completed")),(0,n.kt)("p",null,"Start or stop the service, refer to daily startup procedures."),(0,n.kt)("h2",{id:"startup"},"Startup"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'For daily startup and shutdown, please perform the operations using the "datafor" user.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"su datafor\ncd /opt/datafor-server/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Start the service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./start-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171648174.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stop the service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./stop-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171701208.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check the status of the service startup and shutdown")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ps -ef|grep tomcat\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171716368.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If the command outputs as above, it indicates that the service is in a running state.")))}d.isMDXComponent=!0}}]);