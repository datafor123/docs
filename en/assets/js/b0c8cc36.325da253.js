"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,p=d["".concat(s,".").concat(f)]||d[f]||c[f]||a;return r?n.createElement(p,l(l({ref:t},m),{},{components:r})):n.createElement(p,l({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={id:"filter-number-range",title:"Number Range Filter",sidebar_position:50},l="Number Range Filter",o={unversionedId:"60 visualizer/50 filter/filter-number-range",id:"60 visualizer/50 filter/filter-number-range",title:"Number Range Filter",description:"The Number Range Filter is used to filter numerical fields in the dimension of an analysis model.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/60 visualizer/50 filter/\u6570\u5b57\u8303\u56f4\u7b5b\u9009\u5668.md",sourceDirName:"60 visualizer/50 filter",slug:"/60 visualizer/50 filter/filter-number-range",permalink:"/docs/en/60 visualizer/50 filter/filter-number-range",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/60 visualizer/50 filter/\u6570\u5b57\u8303\u56f4\u7b5b\u9009\u5668.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"filter-number-range",title:"Number Range Filter",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Time Filter",permalink:"/docs/en/60 visualizer/50 filter/filter-timefilter"},next:{title:"Tabs",permalink:"/docs/en/60 visualizer/55 assist/assist-bqy"}},s={},u=[{value:"Numerical Dimension Fields",id:"numerical-dimension-fields",level:2},{value:"<strong>Datafor Analysis Model</strong>",id:"datafor-analysis-model",level:3},{value:"<strong>Pentaho Mondrian 3 Schema</strong>",id:"pentaho-mondrian-3-schema",level:3},{value:"How to Add a Number Range Filter?",id:"how-to-add-a-number-range-filter",level:2},{value:"Using the Number Slicer",id:"using-the-number-slicer",level:2},{value:"Adjusting the Range",id:"adjusting-the-range",level:3},{value:"Entering Specific Values",id:"entering-specific-values",level:3},{value:"Summary",id:"summary",level:2}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"number-range-filter"},"Number Range Filter"),(0,i.kt)("p",null,"The Number Range Filter is used to filter numerical fields in the dimension of an analysis model."),(0,i.kt)("h2",{id:"numerical-dimension-fields"},"Numerical Dimension Fields"),(0,i.kt)("p",null,"Only numerical dimension fields can be used in the Number Range Filter."),(0,i.kt)("h3",{id:"datafor-analysis-model"},(0,i.kt)("strong",{parentName:"h3"},"Datafor Analysis Model")),(0,i.kt)("p",null,'When creating an analysis model in Datafor, the system automatically detects the field types in the data table and sets the dimension fields of the analysis model to "numerical."'),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723127406337.png",width:"30%"})),(0,i.kt)("h3",{id:"pentaho-mondrian-3-schema"},(0,i.kt)("strong",{parentName:"h3"},"Pentaho Mondrian 3 Schema")),(0,i.kt)("p",null,'In Pentaho\u2019s schema file, fields with the type set to "Numeric."'),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723123784260.png",width:"100%"})),(0,i.kt)("h2",{id:"how-to-add-a-number-range-filter"},"How to Add a Number Range Filter?"),(0,i.kt)("p",null,"The following steps will guide users on how to add and configure a Number Range Filter in a Datafor report:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select the Number Range Filter"))),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723127508505.png",width:"72%"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Select a \u201cNumerical\u201d Field")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"[!NOTE]"),(0,i.kt)("p",{parentName:"blockquote"},"When selecting a field for the Number Range Filter, only \u201cnumerical\u201d fields will be displayed in the model.")))),(0,i.kt)("div",{align:"left"},(0,i.kt)("img",{src:"../../../../..//docs/img/en/datafor/visualizer/1723127584243.png",width:"72%"})),(0,i.kt)("h2",{id:"using-the-number-slicer"},"Using the Number Slicer"),(0,i.kt)("h3",{id:"adjusting-the-range"},"Adjusting the Range"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the report view, users will see a slicer with two sliders representing the minimum and maximum values."),(0,i.kt)("li",{parentName:"ol"},"Users can adjust the filter range by dragging the sliders, e.g., from 100 to 500."),(0,i.kt)("li",{parentName:"ol"},"Like other filter components, the slicer will automatically update other chart components subscribed to this filter component in the report, displaying only data that falls within the selected range.")),(0,i.kt)("h3",{id:"entering-specific-values"},"Entering Specific Values"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Users can also directly enter the specific minimum and maximum values in the text boxes next to the slicer."),(0,i.kt)("li",{parentName:"ol"},"After entering the values, press Enter, and the slicer will update the filter range according to the entered values.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"The Number Range Filter allows users to filter numerical data more flexibly, enabling quick focus on data segments within a specific numerical range."))}c.isMDXComponent=!0}}]);