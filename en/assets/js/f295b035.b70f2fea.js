"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[1511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,h=c["".concat(s,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={id:"sjfx-sjdsxhgl",title:"Data filtering",sidebar_position:20},l="Data filtering",o={unversionedId:"70 analysis/sjfx-sjdsxhgl",id:"70 analysis/sjfx-sjdsxhgl",title:"Data filtering",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/\u6570\u636e\u7684\u7b5b\u9009\u548c\u8fc7\u6ee4.md",sourceDirName:"70 analysis",slug:"/70 analysis/sjfx-sjdsxhgl",permalink:"/docs/en/70 analysis/sjfx-sjdsxhgl",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/\u6570\u636e\u7684\u7b5b\u9009\u548c\u8fc7\u6ee4.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{id:"sjfx-sjdsxhgl",title:"Data filtering",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Component Data Linkage",permalink:"/docs/en/70 analysis/sjfx-zjsjld"},next:{title:"Measure aggregation",permalink:"/docs/en/70 analysis/sjfx-dlhz"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Component add filter",id:"component-add-filter",level:2},{value:"Filter components filter other components",id:"filter-components-filter-other-components",level:2},{value:"Filtering and highlighting",id:"filtering-and-highlighting",level:2},{value:"Pass parameters to SQL for filtering",id:"pass-parameters-to-sql-for-filtering",level:2},{value:"Add query string parameters to the URL to filter",id:"add-query-string-parameters-to-the-url-to-filter",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-filtering"},"Data filtering"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Datafor provides five data filtering methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"During the page design process, add component filter conditions in the data panel."),(0,r.kt)("li",{parentName:"ul"},"By adding a filter component to the page, change the selected value of the filter component when viewing the page to filter the subscribed component data."),(0,r.kt)("li",{parentName:"ul"},'By setting the "filtering" behavior of components, filtering and highlighting can be performed through the linkage between components when viewing the page.'),(0,r.kt)("li",{parentName:"ul"},"Use parameters in the SQL of the analysis model, and affect the parameter value through the filter component to achieve SQL layer data filtering."),(0,r.kt)("li",{parentName:"ul"},"Filter reports by adding query string parameters to the URL")),(0,r.kt)("h2",{id:"component-add-filter"},"Component add filter"),(0,r.kt)("p",null,"Adding data filtering to components is added when analyzing report design:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select the component on the page and add a "Filter" field in the data panel.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20230112221818242.png",alt:"image-20230112221818242",width:"67%"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the value of the filter field"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20230112221938758.png",alt:"image-20230112221938758",width:"67%"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Filter methods for different types of fields"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Filter Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Filter Method"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"basic filter","\u2003","\u2003","\u2003","\u2003"),(0,r.kt)("td",{parentName:"tr",align:null},"include or exclude")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Filtering"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains, Does Not Contain, Prefix, Suffix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"basic filtering"),(0,r.kt)("td",{parentName:"tr",align:null},"include or exclude")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic date filter"),(0,r.kt)("td",{parentName:"tr",align:null},"Select dynamic date, such as: today, last year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced Filtering"),(0,r.kt)("td",{parentName:"tr",align:null},"Before (<=), Equal to (=), After (>=)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"less than, less than or equal to, equal to, greater than or equal to, greater than, greater than and less than, greater than or equal to and less than, greater than and less than or equal to, greater than or equal to and less than or equal to, not null data, null data")))),(0,r.kt)("h2",{id:"filter-components-filter-other-components"},"Filter components filter other components"),(0,r.kt)("p",null,"The filter component is used to filter the data displayed by other components on the page."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select an appropriate filter component, draw a filter on the canvas, and bind the dimension field to be filtered."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20230112222145970.png",alt:"image-20230112222145970",width:"80%"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the "Behavior" panel of the filter component, create a subscription relationship between other components on the page and this filter component. Components that have a subscription relationship will be affected by this filter component.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20230112222250423.png",alt:"image-20230112222250423",width:"80%"})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Preview the page, select the value in the filter component, and the subscribed component data will change accordingly."),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/20230112_222411.gif",alt:"20230112_222411",width:"67%"})))),(0,r.kt)("h2",{id:"filtering-and-highlighting"},"Filtering and highlighting"),(0,r.kt)("p",null,'The "filtering" behavior of the component can highlight the data you are most concerned about, and pass the dimension value related to the highlighted data to other components on the page to filter the data of other components.'),(0,r.kt)("p",null,"One of the two conditions must be met for the filter condition to have a filter effect on other components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Components use the same model"),(0,r.kt)("li",{parentName:"ul"},"the models used by the components have the same dimensions")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Select "Filter" or "Drilldown and Filter" on the "Behavior Panel" of the component'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/image-20230112222718284.png",alt:"image-20230112222718284",width:"67%"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Preview the page, click the position of the plot area of the chart component"),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/20230112_223238.gif"})))),(0,r.kt)("h2",{id:"pass-parameters-to-sql-for-filtering"},"Pass parameters to SQL for filtering"),(0,r.kt)("h2",{id:"add-query-string-parameters-to-the-url-to-filter"},"Add query string parameters to the URL to filter"),(0,r.kt)("p",null,"Each page of the report has its own unique URL, add query string parameters to the URL to pre-filter the report. This scenario often occurs when the report page is embedded in other systems, and the report page is filtered after selecting filter conditions in other systems."))}m.isMDXComponent=!0}}]);