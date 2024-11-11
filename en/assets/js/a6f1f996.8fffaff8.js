"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[7237],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>p});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=l,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||r;return t?n.createElement(f,s(s({ref:a},o),{},{components:t})):n.createElement(f,s({ref:a},o))}));function p(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3677:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const r={id:"analysis-calculated-measures",title:"Calculated Measures",sidebar_position:80},s="Calculated Measures",i={unversionedId:"70 analysis/analysis-calculated-measures",id:"70 analysis/analysis-calculated-measures",title:"Calculated Measures",description:"Datafor offers robust calculated measures functionality, allowing users to define complex calculation logic for use in reports and dashboards.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/70 analysis/80_\u8ba1\u7b97\u5ea6\u91cf.md",sourceDirName:"70 analysis",slug:"/70 analysis/analysis-calculated-measures",permalink:"/docs/en/70 analysis/analysis-calculated-measures",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/70 analysis/80_\u8ba1\u7b97\u5ea6\u91cf.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{id:"analysis-calculated-measures",title:"Calculated Measures",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Cross-Model and Cross-Data Source",permalink:"/docs/en/70 analysis/sjfx-cross-models"},next:{title:"Top/Bottom N",permalink:"/docs/en/70 analysis/sjfx-tsxz"}},u={},c=[{value:"What are Calculated Measures?",id:"what-are-calculated-measures",level:2},{value:"Defining Calculated Measures with MDX",id:"defining-calculated-measures-with-mdx",level:2},{value:"Example: Simple Calculated Measure",id:"example-simple-calculated-measure",level:3},{value:"Example: Time Intelligence Calculated Measure",id:"example-time-intelligence-calculated-measure",level:3},{value:"Creating Calculated Measures in Datafor",id:"creating-calculated-measures-in-datafor",level:2},{value:"Creating in the Analysis Model",id:"creating-in-the-analysis-model",level:3},{value:"Creating in the Report Edit View",id:"creating-in-the-report-edit-view",level:3},{value:"Using Calculated Measures in Reports",id:"using-calculated-measures-in-reports",level:2},{value:"Example: Using a Calculated Measure in a Dashboard",id:"example-using-a-calculated-measure-in-a-dashboard",level:3},{value:"Summary",id:"summary",level:2}],o={toc:c};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"calculated-measures"},"Calculated Measures"),(0,l.kt)("p",null,"Datafor offers robust calculated measures functionality, allowing users to define complex calculation logic for use in reports and dashboards."),(0,l.kt)("h2",{id:"what-are-calculated-measures"},"What are Calculated Measures?"),(0,l.kt)("p",null,"Calculated measures are user-defined metrics created by performing calculations on existing data to generate new values. These calculations can be simple, like sums or averages, or more complex, like time intelligence calculations and custom business logic. Calculated measures enable users to create dynamic and flexible analyses based on specific business requirements."),(0,l.kt)("h2",{id:"defining-calculated-measures-with-mdx"},"Defining Calculated Measures with MDX"),(0,l.kt)("p",null,"MDX (Multidimensional Expressions) is a specialized language for querying and manipulating multidimensional data. Datafor uses MDX to define calculated measures, providing users with powerful calculation and analysis capabilities. MDX offers a range of functions and operators to handle complex multidimensional data calculation needs."),(0,l.kt)("p",null,"[MDX Functions]","(",(0,l.kt)("a",{parentName:"p",href:"https://datafor123.github.io/docs/en/120"},"https://datafor123.github.io/docs/en/120")," advanced/advanced-mdx)"),(0,l.kt)("h3",{id:"example-simple-calculated-measure"},"Example: Simple Calculated Measure"),(0,l.kt)("p",null,"For example, you can create a simple calculated measure to calculate total sales:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SUM([Sales].[Amount])\n")),(0,l.kt)("h3",{id:"example-time-intelligence-calculated-measure"},"Example: Time Intelligence Calculated Measure"),(0,l.kt)("p",null,"MDX also supports complex time intelligence calculations. For instance, you can create a calculated measure to calculate year-over-year growth:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"([Measures].[Sales Amount], [Date].[Calendar].CurrentMember) - \n([Measures].[Sales Amount], [Date].[Calendar].CurrentMember.PrevYear)\n")),(0,l.kt)("h2",{id:"creating-calculated-measures-in-datafor"},"Creating Calculated Measures in Datafor"),(0,l.kt)("h3",{id:"creating-in-the-analysis-model"},"Creating in the Analysis Model"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722348626665.png",width:"72%"})),(0,l.kt)("h3",{id:"creating-in-the-report-edit-view"},"Creating in the Report Edit View"),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722348665939.png",width:"72%"})),(0,l.kt)("h2",{id:"using-calculated-measures-in-reports"},"Using Calculated Measures in Reports"),(0,l.kt)("p",null,"Once created, calculated measures can be used in Datafor's reports and dashboards."),(0,l.kt)("h3",{id:"example-using-a-calculated-measure-in-a-dashboard"},"Example: Using a Calculated Measure in a Dashboard"),(0,l.kt)("p",null,"You can add the previously created ",(0,l.kt)("inlineCode",{parentName:"p"},"Current year margin%")," calculated measure to a dashboard."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SUM([Sales].[Amount])\n")),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722348715735.png",width:"90%"})),(0,l.kt)("p",null,"In this way, you can view and analyze the changes in margin percentage in real-time on your dashboard."),(0,l.kt)("div",{align:"left"},(0,l.kt)("img",{src:"../../../..//docs/img/en/datafor/analysis/1722348749787.png",width:"72%"})),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"Datafor's calculated measures functionality, using the MDX language, provides users with powerful data calculation and analysis capabilities."))}d.isMDXComponent=!0}}]);