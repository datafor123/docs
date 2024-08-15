"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={id:"sjfx-zjsjld",title:"Component Data Linkage",sidebar_position:140},r="Component Data Linkage",s={unversionedId:"70 analysis/sjfx-zjsjld",id:"70 analysis/sjfx-zjsjld",title:"Component Data Linkage",description:"Component data linkage refers to the phenomenon where data in one component changes, and corresponding data in other components also change accordingly. This linkage allows users to view and analyze data more conveniently and efficiently in an analysis report.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/140_\u7ec4\u4ef6\u6570\u636e\u8054\u52a8.md",sourceDirName:"70 analysis",slug:"/70 analysis/sjfx-zjsjld",permalink:"/docs/en/70 analysis/sjfx-zjsjld",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/140_\u7ec4\u4ef6\u6570\u636e\u8054\u52a8.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{id:"sjfx-zjsjld",title:"Component Data Linkage",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Chart Reference Lines",permalink:"/docs/en/70 analysis/sjfx-tbckx"},next:{title:"What-if Analysis",permalink:"/docs/en/70 analysis/analysis-what-if"}},l={},c=[{value:"How to Set up Linkage",id:"how-to-set-up-linkage",level:2},{value:"Linkage between Data Charts",id:"linkage-between-data-charts",level:3},{value:"Linkage between Filter Components and Data Charts",id:"linkage-between-filter-components-and-data-charts",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"component-data-linkage"},"Component Data Linkage"),(0,o.kt)("p",null,"Component data linkage refers to the phenomenon where data in one component changes, and corresponding data in other components also change accordingly. This linkage allows users to view and analyze data more conveniently and efficiently in an analysis report."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"linkage",src:n(8730).Z,width:"1452",height:"800"})),(0,o.kt)("h2",{id:"how-to-set-up-linkage"},"How to Set up Linkage"),(0,o.kt)("h3",{id:"linkage-between-data-charts"},"Linkage between Data Charts"),(0,o.kt)("p",null,"The linkage between charts in Datafor is implemented based on the automatic association of analytical models. If there are common dimensions in different analytical models, they will be automatically associated, thus realizing the linkage between charts."),(0,o.kt)("h3",{id:"linkage-between-filter-components-and-data-charts"},"Linkage between Filter Components and Data Charts"),(0,o.kt)("p",null,'In data analysis, it is usually necessary to filter data through filter components (such as drop-down boxes, sliders, etc.), and these filtering conditions need to be applied to data charts at the same time. By default, there is no linkage between filter components and data charts. To achieve linkage between them, a "subscription" needs to be established, allowing filter components and data charts to be mutually associated.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"1680788188190",src:n(6512).Z,width:"1838",height:"872"})),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Can components from different analytical models be linked?"),(0,o.kt)("p",{parentName:"li"},"If the selected dimension of a component exists in different analytical models, the selected dimension value will be passed to different analytical models. All components from different analytical models can be linked, but this requires the premise that the models have common dimensions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Will chart components be linked to filter components?"),(0,o.kt)("p",{parentName:"li"},"Chart components do not have linkage function with filter components. Chart components can only subscribe to filter components.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Do filter components have linkage function with each other?"),(0,o.kt)("p",{parentName:"li"},'The linkage between filter components is achieved through "',(0,o.kt)("a",{parentName:"p",href:"https://datafor123.github.io/docs/visualizer/visualization-sxzjhtbzjddy"},"Subscription of filter components and chart components"),'" to achieve linkage function.'))))}p.isMDXComponent=!0},6512:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1680788188190-b3cba902d92fb5027a47efd5d2647657.png"},8730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/linkage-deab79dbbe38276d8e121a271e37a50a.gif"}}]);