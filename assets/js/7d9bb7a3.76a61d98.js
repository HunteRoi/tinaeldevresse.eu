"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[513],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2503:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),i=n(7294),a=n(6010),o=n(5999),l=n(6668),s=n(9960),c="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:p}}=(0,l.L)();if("h1"===t||!n)return i.createElement(t,(0,r.Z)({},m,{id:void 0}));const f=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return i.createElement(t,(0,r.Z)({},m,{className:(0,a.Z)("anchor",p?u:c,m.className),id:n}),m.children,i.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":f,title:f},"\u200b"))}},4501:function(e,t,n){n.d(t,{N:function(){return o},x:function(){return l}});var r=n(3117),i=n(7294),a=n(2503);const o=e=>{let{children:t,...n}=e;return i.createElement(a.Z,(0,r.Z)({as:"h2"},n),t)},l=e=>{let{children:t,...n}=e;return i.createElement(a.Z,(0,r.Z)({as:"p"},n),t)}},9411:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),i="container_KXSz",a="legend_Ecw3";function o(e){let{data:t,children:n}=e;return t||n?r.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return r.createElement(r.Fragment,null);switch(e.type){case"image":case"img":return e.url?r.createElement("a",{href:e.url,target:"_blank"},r.createElement("img",e)):r.createElement("img",e);case"video":return r.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"audio":return r.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"html":return r.createElement("div",{className:i},r.createElement("iframe",e));default:return r.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),r.createElement("figcaption",{className:a},n)):r.createElement(r.Fragment,null)}},9807:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(7294),i=n(9163),a=n(3868),o=n.n(a),l=n(5999),s="formContainer_ssZr",c="inputContainer_rIzC",u="input_xw7i",m="submit_jbGj",p="status_Xmiw",f="success_K3DK",d="sending_s6rj",g="error_ltts";const h=e=>{let t,{status:n,message:i,onValidated:a}=e;const h=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&a({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),r.createElement("div",{className:s},r.createElement("h3",null,r.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),r.createElement("div",{className:c},r.createElement("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?h():null,required:!0,autoComplete:"email"}),r.createElement("a",{className:m+" tooltip",rel:"noopener",onClick:h,type:"submit"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),r.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===n&&r.createElement("div",{className:`${p} ${d}`},r.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===n&&r.createElement("div",{className:`${p} ${g}`,dangerouslySetInnerHTML:{__html:i}}),"success"===n&&r.createElement("div",{className:`${p} ${f}`,dangerouslySetInnerHTML:{__html:i}}))};function y(e){let{url:t}=e;return r.createElement(i.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:i}=e;return r.createElement(h,{status:n,message:i,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294),i=n(5999);function a(){return r.createElement("div",{className:"center"},r.createElement("span",{className:"italic"},r.createElement(i.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),i=n(5742),a=n(2263),o=n(4996);function l(e){const{siteConfig:t}=(0,a.Z)();let{url:n}=t||{};return`${n}${(0,o.Z)(e)}`}function s(e){let{uri:t,image:n,type:o}=e;const{siteConfig:s}=(0,a.Z)(),{projectName:c,customFields:{mType:u,twitterName:m}}=s,p=o||u,f=n?l(n):null,d=l(t);return r.createElement(r.Fragment,null,r.createElement(i.Z,null,d&&r.createElement("link",{rel:"canonical",href:d}),d&&r.createElement("meta",{property:"og:url",content:d}),f&&r.createElement("meta",{property:"og:image",content:f}),p&&r.createElement("meta",{property:"og:type",content:p}),c&&r.createElement("meta",{property:"og:site_name",content:c}),m&&r.createElement("meta",{property:"twitter:site",content:`@${m}`}),f&&r.createElement("meta",{name:"twitter:image",content:f}),f&&r.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},6631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905)),a=n(9411);n(2147),n(1324),n(9807),n(3089),n(4501);const o={slug:"unit-testing",title:"Unit Testing",tags:["test","unit test","programming"],description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',image:"img/unit-testing.jpg"},l=void 0,s={permalink:"/blog/unit-testing",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-01-01-unit-testing.mdx",source:"@site/blog/2022-01-01-unit-testing.mdx",title:"Unit Testing",description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"test",permalink:"/blog/tags/test"},{label:"unit test",permalink:"/blog/tags/unit-test"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:25.985,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"unit-testing",title:"Unit Testing",tags:["test","unit test","programming"],description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',image:"img/unit-testing.jpg"},prevItem:{title:"What architecture do I use for my projects?",permalink:"/blog/why-did-i-switch-to-clean-architecture"},nextItem:{title:"What is a Container?",permalink:"/blog/what-is-a-container"}},c={authorsImageUrls:[]},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{href:"/blog/unit-testing"},(0,i.kt)(a.Z,{data:{src:"/img/unit-testing.jpg",alt:"Unit tests",type:"image"},mdxType:"Figure"})),(0,i.kt)("p",null,"Today's article is done in joint effort with my former colleague and mentor ",(0,i.kt)("a",{href:"https://www.linkedin.com/in/guillaumefaas/",target:"_blank",rel:"noreferrer noopener nofollow"},"Guillaume Faas"),"\n(\ud83d\udd39) in the form of an interview of a developer."),(0,i.kt)("p",null,"Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it."))}p.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);