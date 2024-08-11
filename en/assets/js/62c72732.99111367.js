"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[6188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"analysis-what-if",title:"What-if Analysis",sidebar_position:150},s="What-if Analysis",l={unversionedId:"70 analysis/analysis-what-if",id:"70 analysis/analysis-what-if",title:"What-if Analysis",description:"What-if analysis is a predictive analysis method used to evaluate the impact of changes in specific variables under different assumptions or scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/150 What-if.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-what-if",permalink:"/docs/en/70 analysis/analysis-what-if",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/150 What-if.md",tags:[],version:"current",sidebarPosition:150,frontMatter:{id:"analysis-what-if",title:"What-if Analysis",sidebar_position:150},sidebar:"tutorialSidebar",previous:{title:"Component Data Linkage",permalink:"/docs/en/70 analysis/sjfx-zjsjld"},next:{title:"test",permalink:"/docs/en/70 analysis/test"}},o={},p=[{value:"Scenario: Sales Forecast Analysis",id:"scenario-sales-forecast-analysis",level:3},{value:"Background",id:"background",level:4},{value:"Objective",id:"objective",level:4},{value:"Steps",id:"steps",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-if-analysis"},"What-if Analysis"),(0,r.kt)("p",null,"What-if analysis is a predictive analysis method used to evaluate the impact of changes in specific variables under different assumptions or scenarios."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/gnix5-j1hnn.gif",width:"76%"})),(0,r.kt)("p",null,"Below is a detailed example demonstrating how to use What-If parameters in Datafor for sales forecast analysis:"),(0,r.kt)("h3",{id:"scenario-sales-forecast-analysis"},"Scenario: Sales Forecast Analysis"),(0,r.kt)("h4",{id:"background"},"Background"),(0,r.kt)("p",null,"A retail company wants to forecast the impact of different pricing strategies on future sales revenue. They aim to understand how adjusting product prices will affect sales quantities and total revenue."),(0,r.kt)("h4",{id:"objective"},"Objective"),(0,r.kt)("p",null,"Use Datafor's What-If parameter feature to simulate the impact of different price adjustment scenarios on sales revenue."),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Parameter Controller")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504262167.png",width:"100%"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create What-If Parameter")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Select the parameter controller, click the "Add Data" button in the data panel, and choose "New Parameter".')),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504381269.png",width:"30%"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Name the parameter "Price Adjustment Percentage" with a default value of "0".')),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504437457.png",width:"50%"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Select the created "Price Adjustment Percentage" parameter.')),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504494630.png",width:"100%"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define the slider's value range in the style panel, with a minimum of -0.2, maximum of 0.2, and a step size of 0.01.")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504556314.png",width:"100%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a Gauge Component")),(0,r.kt)("p",{parentName:"li"},'Select the analysis model "',(0,r.kt)("strong",{parentName:"p"},"workshop-model"),'".'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504617543.png",width:"100%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add Measures")),(0,r.kt)("p",{parentName:"li"},'In the data panel, click the "Add Data" button.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504680025.png",width:"30%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create Calculated Measures")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722504714258(1).png",width:"30%"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Measure Name: ",(0,r.kt)("strong",{parentName:"p"},"Adjusted Price")),(0,r.kt)("p",{parentName:"li"},"Formula:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'[Measures].[sales_fact.UNIT_PRICE] * (1 + ParamRef("Price Adjustment Percentage"))\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Measure Name: ",(0,r.kt)("strong",{parentName:"p"},"Adjusted Sales Amount"),"  "),(0,r.kt)("p",{parentName:"li"},"Formula:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"[Measures].[sales_fact.QUANTITY] * [Measures].[Adjusted Price]\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'Select "Adjusted Sales Revenue" as the Measure for the Gauge Component')),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722505167138.png",width:"100%"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adjust the dashboard component's style by setting the ",(0,r.kt)("strong",{parentName:"li"},"Minimum Value (0)")," and ",(0,r.kt)("strong",{parentName:"li"},"Maximum Value (3000000)"),".")),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722505237854.png",width:"100%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interactive Analysis")),(0,r.kt)("p",{parentName:"li"},'Adjust the "',(0,r.kt)("strong",{parentName:"p"},"Price Adjustment Percentage"),'" parameter to dynamically view changes in ',(0,r.kt)("strong",{parentName:"p"},"Adjusted Sales Revenue")," under different price adjustment scenarios."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/gnix5-j1hnn.gif",width:"100%"})))))}m.isMDXComponent=!0}}]);