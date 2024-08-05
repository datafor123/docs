"use strict";(self.webpackChunkdatafor_document=self.webpackChunkdatafor_document||[]).push([[2002],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>L});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var c=r.createContext({}),i=function(t){var a=r.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=i(t.components);return r.createElement(c.Provider,{value:a},t.children)},g={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=i(e),L=n,s=u["".concat(c,".").concat(L)]||u[L]||g[L]||l;return e?r.createElement(s,o(o({ref:a},d),{},{components:e})):r.createElement(s,o({ref:a},d))}));function L(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=u;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var i=2;i<l;i++)o[i]=e[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6703:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=e(7462),n=(e(7294),e(3905));const l={id:"modeler-setup",title:"Modeler(Plugin for PBA) Setup",sidebar_position:50},o="Modeler(Plugin for PBA) Setup",p={unversionedId:"20 setup/modeler-setup",id:"20 setup/modeler-setup",title:"Modeler(Plugin for PBA) Setup",description:'1. Extract "Modeler.zip" to the "pentaho-solutions\\system" directory.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/20 setup/70 Modeler Setup Manual.md",sourceDirName:"20 setup",slug:"/20 setup/modeler-setup",permalink:"/docs/en/20 setup/modeler-setup",draft:!1,editUrl:"https://github.com/datafor123/DocusaurusDataforDocument/edit/main/docs/20 setup/70 Modeler Setup Manual.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{id:"modeler-setup",title:"Modeler(Plugin for PBA) Setup",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Deploying Datafor Using Docker",permalink:"/docs/en/20 setup/datafor-docker"},next:{title:"Migration of analysis reports and models",permalink:"/docs/en/20 setup/setup-zyqy"}},c={},i=[],d={toc:i};function g(t){let{components:a,...e}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modelerplugin-for-pba-setup"},"Modeler(Plugin for PBA) Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Extract "',(0,n.kt)("strong",{parentName:"p"},"Modeler.zip"),'" to the "',(0,n.kt)("strong",{parentName:"p"},"pentaho-solutions\\system"),'" directory.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/1692583361248-1702190072436-1-1702190804918-6.png"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Create a database named "',(0,n.kt)("strong",{parentName:"p"},"datafor"),'" in the repository database of PBA (PostgreSQL).'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"CREATE DATABASE datafor WITH OWNER = postgres ENCODING = 'UTF8' TABLESPACE = pg_default;\nGRANT ALL PRIVILEGES ON DATABASE datafor to postgres;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Create 6 tables in the "',(0,n.kt)("strong",{parentName:"p"},"datafor"),'" database.'),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Table: auth_config")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."auth_config" (\n      "id" varchar(250) COLLATE "pg_catalog"."default" NOT NULL,\n      "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n      "schema" varchar(255) COLLATE "pg_catalog"."default",\n      "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n      "cols" text COLLATE "pg_catalog"."default",\n      "rows" text COLLATE "pg_catalog"."default",\n      "sql" text COLLATE "pg_catalog"."default",\n      "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n      "visible" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n      "add_time" timestamp(6),\n      "add_by" varchar(200) COLLATE "pg_catalog"."default",\n      "update_time" timestamp(6),\n      "update_by" varchar(200) COLLATE "pg_catalog"."default",\n      "name" varchar(255) COLLATE "pg_catalog"."default",\n      "type" varchar(1) COLLATE "pg_catalog"."default",\n      "editable" char(1) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 1\n);\nALTER TABLE "public"."auth_config" ADD CONSTRAINT "auth_config_pkey" PRIMARY KEY ("id");\n\n')))),(0,n.kt)("p",null,"   ",(0,n.kt)("strong",{parentName:"p"},"Table: gis_config")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."gis_config" (\n "engine" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n "name" varchar(255) COLLATE "pg_catalog"."zh-Hans-CN-x-icu" NOT NULL,\n "longitude" varchar(255) COLLATE "pg_catalog"."default",\n "latitude" varchar(255) COLLATE "pg_catalog"."default"\n \n);\nALTER TABLE "public"."gis_config" ADD CONSTRAINT "gis_config_pkey" PRIMARY KEY ("engine", "name");\n')),(0,n.kt)("p",null,"   ",(0,n.kt)("strong",{parentName:"p"},"Table: dict_config")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."dict_config" (\n      "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n      "name" varchar(255) COLLATE "pg_catalog"."default",\n      "dbconn" varchar(255) COLLATE "pg_catalog"."default",\n      "schema" varchar(255) COLLATE "pg_catalog"."default",\n      "detail" text COLLATE "pg_catalog"."default",\n      "type" char(1) COLLATE "pg_catalog"."default",\n      "default" varchar(255) COLLATE "pg_catalog"."default",\n      "desc" varchar(255) COLLATE "pg_catalog"."default",\n      "add_time" timestamp(6),\n      "update_time" timestamp(6),\n      "add_by" varchar(255) COLLATE "pg_catalog"."default",\n      "update_by" varchar(255) COLLATE "pg_catalog"."default",\n      "expire" varchar(255) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."dict_config" ADD CONSTRAINT "dict_config_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",null,"   ",(0,n.kt)("strong",{parentName:"p"},"Table: dict_map")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."dict_map" (\n "id" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,\n "dict" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n "type" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,\n "dbconn" varchar(255) COLLATE "pg_catalog"."default",\n "schema" varchar(255) COLLATE "pg_catalog"."default",\n "table" varchar(255) COLLATE "pg_catalog"."default",\n "field" varchar(255) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."dict_map" ADD CONSTRAINT "dict_map_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",null,"   ",(0,n.kt)("strong",{parentName:"p"},"Table: query_config")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."query_config" (\n       "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n       "dbconn" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n       "schema" varchar(255) COLLATE "pg_catalog"."default",\n       "tbname" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,\n       "sql" text COLLATE "pg_catalog"."default",\n       "enable" char(1) COLLATE "pg_catalog"."default" NOT NULL,\n       "add_time" timestamp(6),\n       "add_by" varchar(200) COLLATE "pg_catalog"."default",\n       "update_time" timestamp(6),\n       "update_by" varchar(200) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."query_config" ADD CONSTRAINT "query_config_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("p",null,"   ",(0,n.kt)("strong",{parentName:"p"},"Table: parameter_config")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'CREATE TABLE "public"."parameter_config" (\n           "id" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,\n           "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,\n           "effectconn" varchar(200) COLLATE "pg_catalog"."default",\n           "dbconn" varchar(200) COLLATE "pg_catalog"."default",\n           "schema" varchar(200) COLLATE "pg_catalog"."default",\n           "detail" text COLLATE "pg_catalog"."default",\n           "type" char(1) COLLATE "pg_catalog"."default",\n           "default" varchar(2000) COLLATE "pg_catalog"."default",\n           "datatype" varchar(2) COLLATE "pg_catalog"."default",\n           "desc" varchar(2000) COLLATE "pg_catalog"."default",\n           "add_time" timestamp(6),\n           "update_time" timestamp(6),\n           "add_by" varchar(200) COLLATE "pg_catalog"."default",\n           "update_by" varchar(200) COLLATE "pg_catalog"."default"\n);\nALTER TABLE "public"."parameter_config" ADD CONSTRAINT "parameter_config_pkey" PRIMARY KEY ("id");\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Create a database connection named "',(0,n.kt)("strong",{parentName:"p"},"datafor_modeler_auth"),'". Set the value of the "',(0,n.kt)("strong",{parentName:"p"},"stringtype"),'" option to "',(0,n.kt)("strong",{parentName:"p"},"unspecified"),'," and enable connection pooling.'),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/1692582689359-1692583387446-5-1702190072436-2-1702190804918-7.png",width:"80%"})))),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/1692582732206-1692583387447-6-1702190072436-3-1702190804918-8.png",width:"80%"})),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/1692582772259-1692583387447-7-1702190072436-4-1702190804918-9.png",width:"80%"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart PBA"),(0,n.kt)("div",{align:"left"},(0,n.kt)("img",{src:"../../../..//docs/img/en/datafor/setup/1692582866703-1692583387447-8-1702190072436-5-1702190804918-10.png"})))))}g.isMDXComponent=!0}}]);