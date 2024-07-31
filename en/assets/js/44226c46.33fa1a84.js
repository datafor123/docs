"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1495],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)o=i[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(o),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return o?a.createElement(f,r(r({ref:e},c),{},{components:o})):a.createElement(f,r({ref:e},c))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=o.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,r[1]=s;for(var p=2;p<i;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},301:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const i={id:"analysis-tooltips",title:"Tooltips",sidebar_position:40},r="Tooltips for Chart Components",s={unversionedId:"70 analysis/analysis-tooltips",id:"70 analysis/analysis-tooltips",title:"Tooltips",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/40 \u56fe\u8868\u7ec4\u4ef6\u7684\u5de5\u5177\u63d0\u793a.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-tooltips",permalink:"/docs/en/70 analysis/analysis-tooltips",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/40 \u56fe\u8868\u7ec4\u4ef6\u7684\u5de5\u5177\u63d0\u793a.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"analysis-tooltips",title:"Tooltips",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Aggregation",permalink:"/docs/en/70 analysis/sjfx-dlhz"},next:{title:"Quick Calculated Measures",permalink:"/docs/en/70 analysis/sjfx-quickmeasure"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Understanding Tooltips",id:"understanding-tooltips",level:2},{value:"What are Tooltips?",id:"what-are-tooltips",level:3},{value:"Benefits of Tooltips",id:"benefits-of-tooltips",level:3},{value:"How to Use Tooltips",id:"how-to-use-tooltips",level:2},{value:"Default Tooltips",id:"default-tooltips",level:3},{value:"Custom Tooltips",id:"custom-tooltips",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tooltips-for-chart-components"},"Tooltips for Chart Components"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Tooltips feature in Datafor provides additional information when users hover over chart or visualization data points. This feature enhances data comprehension by providing more details without taking up visual space. Tooltips can be customized to display various information, such as summary statistics, text descriptions, and even additional visual content."),(0,n.kt)("h2",{id:"understanding-tooltips"},"Understanding Tooltips"),(0,n.kt)("h3",{id:"what-are-tooltips"},"What are Tooltips?"),(0,n.kt)("p",null,"Tooltips are small interactive boxes that appear when users hover over data points in Datafor chart components. They provide contextual information about specific data points, such as data values and categories, helping users better understand and analyze the data."),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20240730151629410.png"})),(0,n.kt)("h3",{id:"benefits-of-tooltips"},"Benefits of Tooltips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enhanced Data Understanding"),": Tooltips provide additional information, helping users gain a more comprehensive understanding of the data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Maintains Visualization Clarity"),": By not displaying all details on the chart, tooltips keep the interface clean and clear."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dynamic Interaction"),": Users can interact with data points in real-time by hovering, improving data exploration and interaction.")),(0,n.kt)("h2",{id:"how-to-use-tooltips"},"How to Use Tooltips"),(0,n.kt)("h3",{id:"default-tooltips"},"Default Tooltips"),(0,n.kt)("p",null,"Every chart component in Datafor has tooltips enabled by default. By default, tooltips display basic data information, such as data values and categories."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Open your Datafor Report"),": Ensure your report page has multiple chart components."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Hover over a Data Point"),": Hover your mouse over a data point in the chart component to see the default tooltip."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"View Information"),": Observe the tooltip displaying the relevant data point information.")),(0,n.kt)("h3",{id:"custom-tooltips"},"Custom Tooltips"),(0,n.kt)("p",null,"Users can customize tooltips to display more detailed information or custom content."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Select the Chart Component"),": Click on the chart where you want to customize the tooltip.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},'Find "Tooltips" in the Data Panel')),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722323977713.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},'Add Dimension and Measure Fields to the "Tooltips" Area')),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722323948050.png"})))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Datafor's Tooltips feature is a powerful tool that enhances data understanding and interaction by providing additional information for data points. Default tooltips offer basic information, while custom tooltips allow users to display more detailed content based on specific needs."))}u.isMDXComponent=!0}}]);