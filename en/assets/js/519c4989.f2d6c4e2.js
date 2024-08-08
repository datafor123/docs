"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[7491],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={id:"assist-bqy",title:"Tabs",sidebar_position:10},s="Tabs",o={unversionedId:"60 visualizer/55 assist/assist-bqy",id:"60 visualizer/55 assist/assist-bqy",title:"Tabs",description:"Using tabs allows for browsing and comparing multiple related data views or charts within the same interface. Tab components typically consist of a tab bar and multiple tabs, with each tab containing a different visual element or chart.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/55 assist/\u6807\u7b7e\u9875\uff08Tab\uff09.md",sourceDirName:"60 visualizer/55 assist",slug:"/60 visualizer/55 assist/assist-bqy",permalink:"/docs/en/60 visualizer/55 assist/assist-bqy",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/60 visualizer/55 assist/\u6807\u7b7e\u9875\uff08Tab\uff09.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"assist-bqy",title:"Tabs",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Number Range Filter",permalink:"/docs/en/60 visualizer/50 filter/filter-number-range"},next:{title:"Hyperlink",permalink:"/docs/en/60 visualizer/55 assist/assist-clj"}},l={},c=[{value:"Creating Tabs",id:"creating-tabs",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tabs"},"Tabs"),(0,i.kt)("p",null,"Using tabs allows for browsing and comparing multiple related data views or charts within the same interface. Tab components typically consist of a tab bar and multiple tabs, with each tab containing a different visual element or chart."),(0,i.kt)("p",null,"The main advantage of tab components is that they can save screen space and improve user efficiency in comparing and analyzing data. Through tab components, users can easily switch between different data views or charts without having to switch to different interfaces or open multiple windows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"20230419_165134_ev",src:a(9620).Z,width:"1836",height:"862"})),(0,i.kt)("h2",{id:"creating-tabs"},"Creating Tabs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select the "Tabs" component in assists.'),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1681891183084.png",width:"30%"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adding a New Tab"),(0,i.kt)("p",{parentName:"li"},"To add a new tab to the tabs component, you can add or delete tabs on the data panel of the tabs component."),(0,i.kt)("p",{parentName:"li"},"Note: Deleting a tab will also delete all the visual elements and charts associated with that tab. Be sure to back up any important data before deleting a tab."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"1681892994716",src:a(7377).Z,width:"1843",height:"842"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Adjust the order of tabs"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"20230419_163934_ev",src:a(1619).Z,width:"1836",height:"862"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add components to the tab"),(0,i.kt)("p",{parentName:"li"},"Double-click on the content area of the tab to enter component editing mode."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"1681894115533",src:a(7844).Z,width:"1830",height:"857"})),(0,i.kt)("p",{parentName:"li"},"At this point, you can add and edit other components on the tab just like adding components on a page."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"20230419_164922_ev",src:a(7066).Z,width:"1836",height:"862"})))),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Exit component editing mode\nExit component editing mode by clicking anywhere outside of the tab.")))}d.isMDXComponent=!0},7377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1681892994716-7613f43d954169d34249917ea7bab3d5.png"},7844:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1681894115533-c3abae29627352441249f0598183dbf9.png"},1619:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20230419_163934_ev-89ad9088abde6d75ea96072b284a93e3.gif"},7066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20230419_164922_ev-207d2b4b37ad88826ff8fe03ca834c97.gif"},9620:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20230419_165134_ev-442a4ca07bde873ae535e328950ef1f4.gif"}}]);