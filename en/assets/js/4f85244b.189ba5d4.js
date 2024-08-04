"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5173],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=m(t),h=s,f=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return t?n.createElement(f,o(o({ref:a},d),{},{components:t})):n.createElement(f,o({ref:a},d))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=u;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var m=2;m<i;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7906:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=t(7462),s=(t(7294),t(3905));const i={id:"fxmx-fxmxgs",title:"Overview of Analysis Models",sidebar_position:10},o="Overview of Analysis Models",r={unversionedId:"50 model/fxmx-fxmxgs",id:"50 model/fxmx-fxmxgs",title:"Overview of Analysis Models",description:"The DATAFOR analysis model uses a multidimensional model, which is a data structure used to support multidimensional analysis. It can slice data from different dimensions to achieve multi-angle analysis. The multidimensional model can meet the analysis needs of different business areas and levels, allowing users to gain new business perspectives and decision-making bases through data analysis. In enterprise management and decision-making, multidimensional models can be used in market analysis, sales analysis, customer analysis, financial analysis, and other areas.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/50 model/10 \u5206\u6790\u6a21\u578b\u6982\u8ff0.md",sourceDirName:"50 model",slug:"/50 model/fxmx-fxmxgs",permalink:"/docs/en/50 model/fxmx-fxmxgs",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/50 model/10 \u5206\u6790\u6a21\u578b\u6982\u8ff0.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"fxmx-fxmxgs",title:"Overview of Analysis Models",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Data security",permalink:"/docs/en/40 datasource/datasource-sjqx"},next:{title:"Create analysis model",permalink:"/docs/en/50 model/sjfx-cjfxmx"}},l={},m=[{value:"Dimension Tables and Fact Tables",id:"dimension-tables-and-fact-tables",level:2},{value:"Star Schema and Snowflake Schema",id:"star-schema-and-snowflake-schema",level:2},{value:"Star Schema",id:"star-schema",level:3},{value:"Snowflake Schema",id:"snowflake-schema",level:3},{value:"How to design a multidimensional model",id:"how-to-design-a-multidimensional-model",level:2}],d={toc:m};function c(e){let{components:a,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"overview-of-analysis-models"},"Overview of Analysis Models"),(0,s.kt)("p",null,"The DATAFOR analysis model uses a multidimensional model, which is a data structure used to support multidimensional analysis. It can slice data from different dimensions to achieve multi-angle analysis. The multidimensional model can meet the analysis needs of different business areas and levels, allowing users to gain new business perspectives and decision-making bases through data analysis. In enterprise management and decision-making, multidimensional models can be used in market analysis, sales analysis, customer analysis, financial analysis, and other areas."),(0,s.kt)("h2",{id:"dimension-tables-and-fact-tables"},"Dimension Tables and Fact Tables"),(0,s.kt)("p",null,"In a multidimensional model, dimension tables and fact tables are the two basic types of tables. Dimension tables are used to describe the attribute information of different dimensions, such as time dimensions, geographic dimensions, product dimensions, etc. They are used to filter and slice data to achieve multidimensional analysis. Fact tables are used to describe specific measure information, such as sales, visits, etc. They are associated with dimension tables through shared keys to achieve multidimensional analysis of data."),(0,s.kt)("h2",{id:"star-schema-and-snowflake-schema"},"Star Schema and Snowflake Schema"),(0,s.kt)("p",null,"In multidimensional models, star schema and snowflake schema are the two most commonly used models. DATAFOR supports the creation of both star and snowflake schemas."),(0,s.kt)("h3",{id:"star-schema"},"Star Schema"),(0,s.kt)("p",null,"Star Schema is a common multidimensional data model consisting of a central Fact Table and multiple Dimension Tables. The central Fact Table contains various measure data, while Dimension Tables contain various attribute information describing these measure data."),(0,s.kt)("p",null,'In the Star Schema, Dimension Tables and Fact Tables are directly connected, forming a structure similar to a star, hence the name "Star Schema". Dimension Tables usually contain multiple columns, which describe the attribute information of the measure data, such as the year, month, and day in the Time Dimension Table; product name, color, brand, and other product attributes in the Product Dimension Table; customer name, address, contact information, and other customer attributes in the Customer Dimension Table.'),(0,s.kt)("p",null,"The central Fact Table typically contains one or more measure data columns. Measures refer to actual data that needs to be measured, such as sales revenue, sales volume, etc. Each row of data in the Fact Table represents a measure event, which is connected to one or more rows of data in the Dimension Tables, forming a Star Schema."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"1677417365819",src:t(6116).Z,width:"1482",height:"757"})),(0,s.kt)("h3",{id:"snowflake-schema"},"Snowflake Schema"),(0,s.kt)("p",null,"Snowflake Schema is based on the Star Schema and further decomposes some of the dimension tables into multiple tables, forming a structure similar to a snowflake, hence the name Snowflake Schema. The advantage of the Snowflake Schema is that it can flexibly express complex multidimensional analysis requirements, but the disadvantage is that the query performance is relatively lower."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"1677417444944",src:t(6958).Z,width:"1516",height:"762"})),(0,s.kt)("h2",{id:"how-to-design-a-multidimensional-model"},"How to design a multidimensional model"),(0,s.kt)("p",null,"When designing a multidimensional model, the following points should be taken into consideration:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Determine business requirements"),(0,s.kt)("p",{parentName:"li"},"Before designing a multidimensional model, it is important to understand business requirements and analysis objectives, clarify analysis goals and priorities, as well as the indicators and data sources that need to be analyzed. This step is crucial because the design of a multidimensional model needs to be based on business requirements and analysis objectives to ensure its effectiveness and accuracy.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Determine dimension tables"),(0,s.kt)("p",{parentName:"li"},"Identify the dimensions that need to be analyzed based on business requirements and analysis objectives. Dimensions are attributes that describe facts, such as time, location, product, and customer. Dimensions have hierarchical structures, such as time dimensions can be divided into years, quarters, months, days, etc., and product dimensions can be divided into categories, brands, models, etc.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Determine fact tables"),(0,s.kt)("p",{parentName:"li"},"When determining fact tables, it is necessary to consider the events or transactions that occur in the business process and the indicators that need to be analyzed. Facts are usually numeric data such as sales, volume, profit, etc., but can also be other types of data such as customer satisfaction. When determining facts, it is necessary to consider granularity, that is, what actual events each fact corresponds to and what kind of measurement needs to be applied to these events.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Design star schema or snowflake schema"),(0,s.kt)("p",{parentName:"li"},"Based on the relationship between dimension tables and fact tables, design a star schema or snowflake schema. In the star schema, each dimension table is directly associated with the fact table, forming a star-shaped structure. In the snowflake schema, each dimension table may be associated with other dimension tables, forming a structure similar to a snowflake.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Design dimension hierarchy"),(0,s.kt)("p",{parentName:"li"},"For each dimension table, design its hierarchy structure so that users can analyze and query data at different levels. The hierarchy structure usually consists of multiple dimension levels, such as time dimensions can be analyzed by year, quarter, month, etc.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Optimize the model"),(0,s.kt)("p",{parentName:"li"},"After designing the model, it needs to be optimized. Optimizing the model can improve query performance, including techniques such as adding aggregate fact tables, merging dimensions, and using partitioning. At the same time, the model needs to be tested and tuned."))))}c.isMDXComponent=!0},6116:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1677417365819-625240fae596cc7db45ecd36d0f248ba.png"},6958:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1677417444944-284e00d755490b643c4406fbc3a8decb.png"}}]);