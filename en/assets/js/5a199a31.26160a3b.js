"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[5828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={id:"datasource-sqsz",title:"JDBC Timezone Setting",sidebar_position:40},i="JDBC Timezone Setting",s={unversionedId:"40 datasource/datasource-sqsz",id:"40 datasource/datasource-sqsz",title:"JDBC Timezone Setting",description:"When using JDBC to connect to a database in Datafor, timezone issues can lead to inconsistencies and confusion with time data. To resolve this, you can ensure the timezone is set correctly and displayed consistently in Datafor by following these steps.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/40 datasource/\u65f6\u533a\u8bbe\u7f6e.md",sourceDirName:"40 datasource",slug:"/40 datasource/datasource-sqsz",permalink:"/docs/en/40 datasource/datasource-sqsz",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/40 datasource/\u65f6\u533a\u8bbe\u7f6e.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{id:"datasource-sqsz",title:"JDBC Timezone Setting",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Data security",permalink:"/docs/en/40 datasource/datasource-sjqx"},next:{title:"JDBC Driver Management",permalink:"/docs/en/40 datasource/datasource-JDBC-driver"}},c={},u=[{value:"1. Why Set JDBC Timezone",id:"1-why-set-jdbc-timezone",level:3},{value:"2. Configuring Datafor Data Source Timezone",id:"2-configuring-datafor-data-source-timezone",level:3},{value:"3. Verify Timezone Setting",id:"3-verify-timezone-setting",level:3},{value:"Conclusion",id:"conclusion",level:3}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jdbc-timezone-setting"},"JDBC Timezone Setting"),(0,r.kt)("p",null,"When using JDBC to connect to a database in Datafor, timezone issues can lead to inconsistencies and confusion with time data. To resolve this, you can ensure the timezone is set correctly and displayed consistently in Datafor by following these steps."),(0,r.kt)("h3",{id:"1-why-set-jdbc-timezone"},"1. Why Set JDBC Timezone"),(0,r.kt)("p",null,"In applications spanning multiple time zones, incorrect timezone settings can lead to confusion with time data. For instance, timestamp data may differ during storage and retrieval. Setting the JDBC timezone ensures consistency between the client and the database server."),(0,r.kt)("h3",{id:"2-configuring-datafor-data-source-timezone"},"2. Configuring Datafor Data Source Timezone"),(0,r.kt)("p",null,'Add a new parameter in the "options" section of the database connection configuration to set the timezone parameter and value.'),(0,r.kt)("div",{align:"left"},(0,r.kt)("img",{src:"../../../..//docs/img/en/datafor/datasource/1681220004076.png",width:"60%"})),(0,r.kt)("h3",{id:"3-verify-timezone-setting"},"3. Verify Timezone Setting"),(0,r.kt)("p",null,"After configuring the timezone setting, ensure that the time data is displayed correctly:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create time-related visualizations in Datafor."),(0,r.kt)("li",{parentName:"ol"},"Confirm that the time data matches expectations.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"By properly setting and adjusting the timezone, you can ensure the consistency and accuracy of time data in Datafor."))}d.isMDXComponent=!0}}]);