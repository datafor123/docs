"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5653],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||s;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<s;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const s={id:"ststem-yhgl",title:"User Management",sidebar_position:1},i="User Management",o={unversionedId:"100 system/ststem-yhgl",id:"100 system/ststem-yhgl",title:"User Management",description:'The administrator or super administrator user logs in to the system and clicks on the navigation menu "User". Select the "User" submenu for user management.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/100 system/\u7528\u6237\u7ba1\u7406.md",sourceDirName:"100 system",slug:"/100 system/ststem-yhgl",permalink:"/docs/en/100 system/ststem-yhgl",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/100 system/\u7528\u6237\u7ba1\u7406.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ststem-yhgl",title:"User Management",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u5b57\u5178",permalink:"/docs/en/90 tools/tools-sjzd"},next:{title:"\u7528\u6237\u7c7b\u578b",permalink:"/docs/en/100 system/system-yhlx"}},l={},m=[{value:"Create users",id:"create-users",level:2},{value:"View user details",id:"view-user-details",level:2}],c={toc:m};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-management"},"User Management"),(0,a.kt)("p",null,'The administrator or super administrator user logs in to the system and clicks on the navigation menu "User". Select the "User" submenu for user management.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230131162309655",src:r(3299).Z,width:"1375",height:"669"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NEW"),": Create a new user"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Batch delete"),": delete users"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Batch Activation"),": activate users"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Export"),": Export user information to an Excel file"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Import"),": Import users to the system from an Excel file"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Search"),": Search users"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Status Switch"),": activate status setting"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Operation menu"),": delete, directory file permissions, copy permissions to..., analyze model permissions, set roles, view details")),(0,a.kt)("h2",{id:"create-users"},"Create users"),(0,a.kt)("p",null,"The system provides 2 ways to add users:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Add" button to manually add user information.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image-20230131162341574",src:r(9283).Z,width:"1920",height:"942"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Import" button to import user information in batches from the Excel file.'))),(0,a.kt)("h2",{id:"view-user-details"},"View user details"),(0,a.kt)("p",null,'Click the "Details" menu in the action menu'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230131162449735",src:r(4914).Z,width:"1920",height:"942"})),(0,a.kt)("p",null,"On the user details interface, you can view the user's personal information and various system permissions, including: file and directory permissions, analysis model permissions, data permissions, data connection permissions, and other information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20230131162541844",src:r(6871).Z,width:"1920",height:"942"})))}p.isMDXComponent=!0},3299:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230131162309655-fc93b49ad0527b2daf5c1833e9ba5797.png"},9283:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230131162341574-c3ec2e848e232320126d17c8eaf2be0e.png"},4914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230131162449735-fb0d0d0257a930135c77d606eab17865.png"},6871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20230131162541844-425ed6cb02aae59b8dc29065ef3954fd.png"}}]);