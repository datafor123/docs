"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2442],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const o={id:"map-geojsonfilled",title:"GGeoJSON marked map",sidebar_position:20},i="GeoJSON marked map",p={unversionedId:"60 visualizer/40 map/map-geojsonfilled",id:"60 visualizer/40 map/map-geojsonfilled",title:"GGeoJSON marked map",description:"A GeoJSON marked map is a map that encodes geographical location information as data in the GeoJSON format and marks it on the map. The GeoJSON marked map can help users display geographical location information more intuitively on the map, such as marking different locations, paths, and regions.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/40 map/GeoJSON\u6807\u8bb0\u5730\u56fe.md",sourceDirName:"60 visualizer/40 map",slug:"/60 visualizer/40 map/map-geojsonfilled",permalink:"/docs/en/60 visualizer/40 map/map-geojsonfilled",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/60 visualizer/40 map/GeoJSON\u6807\u8bb0\u5730\u56fe.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"map-geojsonfilled",title:"GGeoJSON marked map",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Pivot table",permalink:"/docs/en/60 visualizer/30 charts/sjfxyksh-pivot"},next:{title:"GGeoJSON marked map",permalink:"/docs/en/60 visualizer/40 map/map-geojsonfilled"}},l={},m=[{value:"Creating a Map",id:"creating-a-map",level:2},{value:"FAQ",id:"faq",level:2}],s={toc:m};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geojson-marked-map"},"GeoJSON marked map"),(0,r.kt)("p",null,"A GeoJSON marked map is a map that encodes geographical location information as data in the GeoJSON format and marks it on the map. The GeoJSON marked map can help users display geographical location information more intuitively on the map, such as marking different locations, paths, and regions."),(0,r.kt)("h2",{id:"creating-a-map"},"Creating a Map"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new report in Datafor and add a GeoJSON marked map component in the report's design mode. This will add a blank map to the canvas area of the report designer."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681887783802",src:a(6099).Z,width:"1833",height:"857"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Map Data"),(0,r.kt)("p",{parentName:"li"},"Select the required map JSON data from the data panel."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20230419151149418",src:a(42).Z,width:"1835",height:"862"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add Geographic Data Fields"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"1681888030553",src:a(4071).Z,width:"1837",height:"871"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customize Map Style\nYou can customize the style of the map according to your preferences, including background color, border lines, labels, etc."))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How do I match the names of my regions with the names of the regions in the GeoJSON file?"),(0,r.kt)("p",{parentName:"li"},'You can maintain the mapping between the names of the regions in your map and the data in the "key-value mapping table".'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20230419151212963",src:a(3199).Z,width:"1838",height:"870"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Can I customize my own GeoJSON map?"),(0,r.kt)("p",{parentName:"li"},"Yes, you can contact Datafor to customize a GeoJSON map for you."),(0,r.kt)("p",{parentName:"li"},"Contact email: ",(0,r.kt)("a",{parentName:"p",href:"mailto:marketing@datafor.com.cn"},"marketing@datafor.com.cn")))))}c.isMDXComponent=!0},6099:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1681887783802-12fd8b179f9cd9873d4cf1e00e33f2c8.png"},4071:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1681888030553-8e251589179dae8b0281f371c30e680c.png"},42:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230419151149418-32ab5ce9960c4b54774792ab698c927c.png"},3199:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230419151212963-a51e5f2b49436c678b177b97bc222985.png"}}]);