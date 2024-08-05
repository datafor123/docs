"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[4073],{3905:(a,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>L});var r=e(7294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function p(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function l(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function o(a,t){if(null==a)return{};var e,r,n=function(a,t){if(null==a)return{};var e,r,n={},p=Object.keys(a);for(r=0;r<p.length;r++)e=p[r],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(r=0;r<p.length;r++)e=p[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var c=r.createContext({}),i=function(a){var t=r.useContext(c),e=t;return a&&(e="function"==typeof a?a(t):l(l({},t),a)),e},d=function(a){var t=i(a.components);return r.createElement(c.Provider,{value:t},a.children)},g={inlineCode:"code",wrapper:function(a){var t=a.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(a,t){var e=a.components,n=a.mdxType,p=a.originalType,c=a.parentName,d=o(a,["components","mdxType","originalType","parentName"]),u=i(e),L=n,m=u["".concat(c,".").concat(L)]||u[L]||g[L]||p;return e?r.createElement(m,l(l({ref:t},d),{},{components:e})):r.createElement(m,l({ref:t},d))}));function L(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var p=e.length,l=new Array(p);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=a,o.mdxType="string"==typeof a?a:n,l[1]=o;for(var i=2;i<p;i++)l[i]=e[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},5760:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var r=e(7462),n=(e(7294),e(3905));const p={id:"modeler-setup",title:"Modeler(PBA\u63d2\u4ef6)\u5b89\u88c5",sidebar_position:70},l="Modeler(PBA\u63d2\u4ef6)\u5b89\u88c5",o={unversionedId:"20 setup/modeler-setup",id:"20 setup/modeler-setup",title:"Modeler(PBA\u63d2\u4ef6)\u5b89\u88c5",description:'1. \u5c06 "Modeler.zip" \u89e3\u538b\u7f29\u5230 "pentaho-solutions\\system" \u76ee\u5f55\u3002',source:"@site/docs/20 setup/70 Modeler Setup Manual.md",sourceDirName:"20 setup",slug:"/20 setup/modeler-setup",permalink:"/docs/20 setup/modeler-setup",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/20 setup/70 Modeler Setup Manual.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{id:"modeler-setup",title:"Modeler(PBA\u63d2\u4ef6)\u5b89\u88c5",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"Visualizer(PBA\u63d2\u4ef6)\u5b89\u88c5",permalink:"/docs/20 setup/visualizer-setup"},next:{title:"\u5206\u6790\u62a5\u8868\u548c\u6a21\u578b\u7684\u8fc1\u79fb",permalink:"/docs/20 setup/setup-zyqy"}},c={},i=[],d={toc:i};function g(a){let{components:t,...e}=a;return(0,n.kt)("wrapper",(0,r.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modelerpba\u63d2\u4ef6\u5b89\u88c5"},"Modeler(PBA\u63d2\u4ef6)\u5b89\u88c5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5c06 "',(0,n.kt)("strong",{parentName:"p"},"Modeler.zip"),'" \u89e3\u538b\u7f29\u5230 "',(0,n.kt)("strong",{parentName:"p"},"pentaho-solutions\\system"),'" \u76ee\u5f55\u3002'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/1692584188749.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5728PBA\uff08PostgreSQL\uff09\u7684\u5b58\u50a8\u5e93\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a "',(0,n.kt)("strong",{parentName:"p"},"datafor"),'" \u7684\u6570\u636e\u5e93\u3002'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"CREATE DATABASE datafor WITH OWNER = postgres ENCODING = 'UTF8' TABLESPACE = pg_default;\nGRANT ALL PRIVILEGES ON DATABASE datafor to postgres;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'\u5728 "',(0,n.kt)("strong",{parentName:"p"},"datafor"),'" \u6570\u636e\u5e93\u4e2d\u521b\u5efa 6 \u4e2a\u8868\u3002'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: auth_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."auth_config" (\n      "id" varchar(250) COLLATE "pg_catalog"."default" NOT NULL,\n      "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n      "schema" varchar(255) COLLATE "pg_catalog"."default",\n      "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n      "cols" text COLLATE "pg_catalog"."default",\n      "rows" text COLLATE "pg_catalog"."default",\n      "sql" text COLLATE "pg_catalog"."default",\n      "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n      "visible" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n      "add_time" timestamp(6),\n      "add_by" varchar(200) COLLATE "pg_catalog"."default",\n      "update_time" timestamp(6),\n      "update_by" varchar(200) COLLATE "pg_catalog"."default",\n      "name" varchar(255) COLLATE "pg_catalog"."default",\n      "type" varchar(1) COLLATE "pg_catalog"."default",\n      "editable" char(1) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 1\n);\nALTER TABLE "public"."auth_config" ADD CONSTRAINT "auth_config_pkey" PRIMARY KEY ("id");\n\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: gis_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."gis_config" (\n "engine" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n "name" varchar(255) COLLATE "pg_catalog"."zh-Hans-CN-x-icu" NOT NULL,\n "longitude" varchar(255) COLLATE "pg_catalog"."default",\n "latitude" varchar(255) COLLATE "pg_catalog"."default"\n \n);\nALTER TABLE "public"."gis_config" ADD CONSTRAINT "gis_config_pkey" PRIMARY KEY ("engine", "name");\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: dict_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."dict_config" (\n      "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n      "name" varchar(255) COLLATE "pg_catalog"."default",\n      "dbconn" varchar(255) COLLATE "pg_catalog"."default",\n      "schema" varchar(255) COLLATE "pg_catalog"."default",\n      "detail" text COLLATE "pg_catalog"."default",\n      "type" char(1) COLLATE "pg_catalog"."default",\n      "default" varchar(255) COLLATE "pg_catalog"."default",\n      "desc" varchar(255) COLLATE "pg_catalog"."default",\n      "add_time" timestamp(6),\n      "update_time" timestamp(6),\n      "add_by" varchar(255) COLLATE "pg_catalog"."default",\n      "update_by" varchar(255) COLLATE "pg_catalog"."default",\n      "expire" varchar(255) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."dict_config" ADD CONSTRAINT "dict_config_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: dict_map")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."dict_map" (\n "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,\n "dict" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n "type" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,\n "dbconn" varchar(255) COLLATE "pg_catalog"."default",\n "schema" varchar(255) COLLATE "pg_catalog"."default",\n "table" varchar(255) COLLATE "pg_catalog"."default",\n "field" varchar(255) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."dict_map" ADD CONSTRAINT "dict_map_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: query_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."query_config" (\n       "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n       "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n       "schema" varchar(255) COLLATE "pg_catalog"."default",\n       "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n       "sql" text COLLATE "pg_catalog"."default",\n       "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n       "add_time" timestamp(6),\n       "add_by" varchar(200) COLLATE "pg_catalog"."default",\n       "update_time" timestamp(6),\n       "update_by" varchar(200) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."query_config" ADD CONSTRAINT "query_config_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8868: parameter_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."parameter_config" (\n           "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n           "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,\n           "effectconn" varchar(200) COLLATE "pg_catalog"."default",\n           "dbconn" varchar(200) COLLATE "pg_catalog"."default",\n           "schema" varchar(200) COLLATE "pg_catalog"."default",\n           "detail" text COLLATE "pg_catalog"."default",\n           "type" char(1) COLLATE "pg_catalog"."default",\n           "default" varchar(2000) COLLATE "pg_catalog"."default",\n           "datatype" varchar(2) COLLATE "pg_catalog"."default",\n           "desc" varchar(2000) COLLATE "pg_catalog"."default",\n           "add_time" timestamp(6),\n           "update_time" timestamp(6),\n           "add_by" varchar(200) COLLATE "pg_catalog"."default",\n           "update_by" varchar(200) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."parameter_config" ADD CONSTRAINT "parameter_config_pkey" PRIMARY KEY ("id");\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Create a database connection named "',(0,n.kt)("strong",{parentName:"p"},"datafor_modeler_auth"),'". Set the value of the "',(0,n.kt)("strong",{parentName:"p"},"stringtype"),'" option to "',(0,n.kt)("strong",{parentName:"p"},"unspecified"),'," and enable connection pooling.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/1692582689359-1692583387446-5.png",width:"80%"})),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/1692582732206-1692583387447-6.png",width:"80%"})),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/1692582772259-1692583387447-7.png",width:"80%"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u91cd\u542fPBA"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"/docs/img/datafor/setup/1692582866703-1692583387447-8.png"})))))}g.isMDXComponent=!0}}]);