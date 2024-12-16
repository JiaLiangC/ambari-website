"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[7791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||i;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="FAQ",s={unversionedId:"ambari-design/stack-and-services/faq",id:"version-2.7.5/ambari-design/stack-and-services/faq",title:"FAQ",description:"[STACK]/[SERVICE]/metainfo.xml",source:"@site/versioned_docs/version-2.7.5/ambari-design/stack-and-services/faq.md",sourceDirName:"ambari-design/stack-and-services",slug:"/ambari-design/stack-and-services/faq",permalink:"/docs/2.7.5/ambari-design/stack-and-services/faq",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.5/ambari-design/stack-and-services/faq.md",tags:[],version:"2.7.5",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Writing metainfo.xml",permalink:"/docs/2.7.5/ambari-design/stack-and-services/writing-metainfo"},next:{title:"Hooks",permalink:"/docs/2.7.5/ambari-design/stack-and-services/hooks"}},l={},c=[{value:"<strong>STACK/SERVICE/metainfo.xml</strong>",id:"stackservicemetainfoxml",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("h2",{id:"stackservicemetainfoxml"},(0,a.kt)("strong",{parentName:"h2"},"[STACK]","/","[SERVICE]","/metainfo.xml")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If a component exists in the parent stack and is defined again in the child stack with just a few attributes, are these values just to override the parent's values or the whole component definition is replaced? What about other elements in metainfo.xml -- which rules apply?")),(0,a.kt)("p",null,"Ambari goes property by property and merge them from parent to child. So if you remove a category for example from the child it will be inherited from parent, that goes for pretty much all properties."),(0,a.kt)("p",null,"So, the question is how do we tackle existence of a property in both parent and child. Here, most of the decision still follow same paradigm as take the child value instead of parent and every property in parent, not explicitly deleted from child using a marker like "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For config-dependencies, we take all or nothing approach, if this property exists in child use it and all of its children else take it from parent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The custom commands are merged based on names, such that merged definition is a union of commands with child commands with same name overriding those fro parent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cardinality is overwritten by a child or take from the parent if child has not provided one."))),(0,a.kt)("p",null,"You could look at this method for more details: ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.ambari.server.api.util.StackExtensionHelper#mergeServices")),(0,a.kt)("p",null,"For more information see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.7.5/ambari-design/stack-and-services/custom-services#Service20%25Inheritance"},"Service Inheritance")," wiki page."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If a component is missing in the new definition but is present in the parent, does it get inherited?")),(0,a.kt)("p",null,"Generally yes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuration dependencies for the service -- are they overwritten or merged?")),(0,a.kt)("p",null,"Overwritten."))}m.isMDXComponent=!0}}]);