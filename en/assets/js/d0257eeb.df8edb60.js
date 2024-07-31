"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,g=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={id:"kzt-jmgnjs",title:"Drill down",sidebar_position:50},o="Drill down",l={unversionedId:"70 analysis/kzt-jmgnjs",id:"70 analysis/kzt-jmgnjs",title:"Drill down",description:"Data drilling can be understood as adding levels of dimensionality, so that data can be observed from coarse to fine granularity. For example, when analyzing product sales, data can be drilled down from product categories to specific products along the product dimension.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/50 \u6570\u636e\u4e0b\u94bb.md",sourceDirName:"70 analysis",slug:"/70 analysis/kzt-jmgnjs",permalink:"/docs/en/70 analysis/kzt-jmgnjs",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/50 \u6570\u636e\u4e0b\u94bb.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"kzt-jmgnjs",title:"Drill down",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Tooltips",permalink:"/docs/en/70 analysis/analysis-tooltips"},next:{title:"Drill through",permalink:"/docs/en/70 analysis/analysis-Drill-through"}},s={},c=[{value:"Creating Hierarchies in Analytical Models",id:"creating-hierarchies-in-analytical-models",level:2},{value:"Component Drill-down Behavior",id:"component-drill-down-behavior",level:2},{value:"Using Fields in Hierarchies",id:"using-fields-in-hierarchies",level:3},{value:"Preview Page",id:"preview-page",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drill-down"},"Drill down"),(0,i.kt)("p",null,"Data drilling can be understood as adding levels of dimensionality, so that data can be observed from coarse to fine granularity. For example, when analyzing product sales, data can be drilled down from product categories to specific products along the product dimension."),(0,i.kt)("h2",{id:"creating-hierarchies-in-analytical-models"},"Creating Hierarchies in Analytical Models"),(0,i.kt)("p",null,"Open the model editing interface."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677400661992",src:n(3821).Z,width:"1831",height:"868"})),(0,i.kt)("p",null,'In the "Analytical Model" panel, right-click on a dimension field and select the "New Hierarchy" button from the pop-up menu.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677400737020",src:n(8406).Z,width:"1831",height:"864"})),(0,i.kt)("p",null,'A "hierarchy" is created in the dimension, and the attribute field selected by right-clicking is automatically added to this "hierarchy."'),(0,i.kt)("p",null,'Through the "Properties" panel on the right, you can modify the name of the "hierarchy" or hide the "hierarchy".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677400828510",src:n(5216).Z,width:"1842",height:"871"})),(0,i.kt)("p",null,"Drag other fields into this hierarchy and adjust their positions by dragging and dropping."),(0,i.kt)("p",null,"Hierarchies are arranged from top to bottom, from higher level to lower level, with the lowest level being the most detailed."),(0,i.kt)("h2",{id:"component-drill-down-behavior"},"Component Drill-down Behavior"),(0,i.kt)("h3",{id:"using-fields-in-hierarchies"},"Using Fields in Hierarchies"),(0,i.kt)("p",null,"When the component data uses fields in a hierarchy, no settings are required, and the component can drill down."),(0,i.kt)("p",null,"Take the column chart as an example and set the component's drill-down behavior."),(0,i.kt)("p",null,'For the "axis" field of a column chart, a higher-level field in the hierarchy is usually selected.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677401056266",src:n(932).Z,width:"1839",height:"837"})),(0,i.kt)("p",null,'In the example, the "Product Line" hierarchy has two levels, "Product Line" and "Product."'),(0,i.kt)("h3",{id:"preview-page"},"Preview Page"),(0,i.kt)("p",null,'Click the "Drill-Down Mode" button on the component toolbar.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677402081753",src:n(946).Z,width:"1833",height:"642"})),(0,i.kt)("p",null,"Click on a column to drill down."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677402128961",src:n(1108).Z,width:"1832",height:"669"})),(0,i.kt)("p",null,'Click the "Reset Drilling" button in the upper-right corner of the component menu to return the component to the data before drilling down.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1677402023419",src:n(9869).Z,width:"1837",height:"680"})))}p.isMDXComponent=!0},3821:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677400661992-56826e613f399bab0ccdc9e6131610f9.png"},8406:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677400737020-7d4cb8ac5f548dc51fb195d944cd635c.png"},5216:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677400828510-e2c3feb8009a6d71f455f5b185e9c745.png"},932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677401056266-8dbdeb002b7b13b7a544bc4f992cd56c.png"},9869:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677402023419-04cb3a17cf73116891da816d47cdabb2.png"},946:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677402081753-4ac8b5bdaca4d646fe03188f71617614.png"},1108:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1677402128961-ab0e0f541a72c4a1359ebd90baa2a5f0.png"}}]);