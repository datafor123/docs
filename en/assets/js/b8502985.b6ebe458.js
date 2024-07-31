"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[3360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"analysis-cross-filtering",title:"Cross-Filtering",sidebar_position:30},o="Cross-Filtering",s={unversionedId:"70 analysis/analysis-cross-filtering",id:"70 analysis/analysis-cross-filtering",title:"Cross-Filtering",description:"Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/30 \u4ea4\u53c9\u7b5b\u9009.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-cross-filtering",permalink:"/docs/en/70 analysis/analysis-cross-filtering",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/30 \u4ea4\u53c9\u7b5b\u9009.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{id:"analysis-cross-filtering",title:"Cross-Filtering",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Component-Level Filtering",permalink:"/docs/en/70 analysis/analysis-component-Filtering"},next:{title:"Tooltips",permalink:"/docs/en/70 analysis/analysis-tooltips"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"What is Cross-Filtering?",id:"what-is-cross-filtering",level:2},{value:"Benefits of Cross-Filtering",id:"benefits-of-cross-filtering",level:2},{value:"How to Use Cross-Filtering",id:"how-to-use-cross-filtering",level:2},{value:"Example",id:"example",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cross-filtering"},"Cross-Filtering"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Datafor's cross-filtering feature enable users to interact with multiple chart components within reports. These features allow users to dynamically filter and highlight data, aiding in deeper understanding of relationships within the data and more effective data exploration."),(0,a.kt)("h2",{id:"what-is-cross-filtering"},"What is Cross-Filtering?"),(0,a.kt)("p",null,"Cross-filtering allows users to filter data in other related chart components by selecting a data point in one chart. When a data point is selected, other related chart components automatically update to display only the relevant data. This helps users focus on specific data subsets and understand the relationships between different data segments."),(0,a.kt)("h2",{id:"benefits-of-cross-filtering"},"Benefits of Cross-Filtering"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Focused Analysis"),": Concentrate on specific points of interest for better analysis and understanding."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discover Data Relationships"),": Explore how changes in one data point affect other related data points."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Interactive Data Exploration"),": Engage with data in a dynamic and intuitive manner.")),(0,a.kt)("h2",{id:"how-to-use-cross-filtering"},"How to Use Cross-Filtering"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Open Your Datafor Report"),": Ensure your report page contains multiple chart components."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Select a Data Point"),": Click on a data point in one of the chart components (e.g., a bar in a bar chart)."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Observe the Effect"),": Watch how other chart components update to reflect the selected related data.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider a sales report with a pie chart showing sales by product line and other charts. By selecting a specific product line in the pie, other charts update to display data only for that product line."),(0,a.kt)("p",null,"This interactive exploration allows users to analyze sales for a specific product line and compare it with overall sales."),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/20230112_223238.gif"})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Datafor's cross-filtering  features are powerful interactive data exploration tools. They help users focus on specific data points and understand the relationships between different data segments, enabling more effective and insightful data analysis."))}u.isMDXComponent=!0}}]);