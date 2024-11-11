"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2781],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>f});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(a),f=n,m=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return a?r.createElement(m,p(p({ref:e},u),{},{components:a})):r.createElement(m,p({ref:e},u))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,p=new Array(o);p[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var s=2;s<o;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3232:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={id:"datafor-ubuntu",title:"Datafor Installation (Ubuntu)",sidebar_position:35},p="Datafor Installation (Ubuntu)",i={unversionedId:"20 setup/datafor-ubuntu",id:"20 setup/datafor-ubuntu",title:"Datafor Installation (Ubuntu)",description:"Installation Steps",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20 setup/30 Datefor\u5b89\u88c5(Ubuntu).md",sourceDirName:"20 setup",slug:"/20 setup/datafor-ubuntu",permalink:"/docs/en/20 setup/datafor-ubuntu",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/20 setup/30 Datefor\u5b89\u88c5(Ubuntu).md",tags:[],version:"current",sidebarPosition:35,frontMatter:{id:"datafor-ubuntu",title:"Datafor Installation (Ubuntu)",sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Datafor Installation (Windows)",permalink:"/docs/en/20 setup/datafor-windows"},next:{title:"Visualizer(Plugin for PBA) Setup",permalink:"/docs/en/20 setup/visualizer-setup"}},l={},s=[{value:"Installation Steps",id:"installation-steps",level:2},{value:"Startup",id:"startup",level:2},{value:"Login",id:"login",level:2},{value:"Update the System",id:"update-the-system",level:2}],u={toc:s};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datafor-installation-ubuntu"},"Datafor Installation (Ubuntu)"),(0,n.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1. Switch to the root user")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo su  \n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171526492.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Step 2. Create the "datafor" user, and set the user password to "datafor" as well.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"adduser datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171542736.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Step 3. Create a user group and add the "datafor" user to the "datafor" user group.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"addgroup datafor\naddgroup datafor datafor\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171600582.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4. Navigate to the directory where the installation package is located and unzip the package to the /opt path.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"unzip -o datafor-server_202203210834.zip -d /opt/\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171613825.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5. After the extraction is complete, go to the /opt/ directory and modify permissions.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd /opt/\nchmod -R 700 datafor-server\nchown -R datafor datafor-server\nchgrp -R datafor datafor-server\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171632512.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Installation Completed")),(0,n.kt)("p",null,"Start or stop the service, refer to daily startup procedures."),(0,n.kt)("h2",{id:"startup"},"Startup"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'For daily startup and shutdown, please perform the operations using the "datafor" user.')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"su datafor\ncd /opt/datafor-server/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Start the service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./start-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171648174.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stop the service")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./stop-datafor.sh\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171701208.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check the status of the service startup and shutdown")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ps -ef|grep tomcat\n")),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/image-20220829171716368.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If the command outputs as above, it indicates that the service is in a running state.")),(0,n.kt)("h2",{id:"login"},"Login"),(0,n.kt)("p",null,"URL:  ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:28080/")),(0,n.kt)("p",null,"username  /  password"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"admin")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"password")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"demo")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"demo"))),(0,n.kt)("h2",{id:"update-the-system"},"Update the System"),(0,n.kt)("p",null,"Place the update package ",(0,n.kt)("inlineCode",{parentName:"p"},"datafor-upload.jar")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"datafor-server\\update")," folder and restart the system."))}d.isMDXComponent=!0}}]);