"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[7492],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9411:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a="container_KXSz",o="legend_Ecw3";function i(e){let{data:t,children:r}=e;return t||r?n.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return n.createElement(n.Fragment,null);switch(e.type){case"image":case"img":return e.url?n.createElement("a",{href:e.url,target:"_blank"},n.createElement("img",e)):n.createElement("img",e);case"video":return n.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"audio":return n.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"html":return n.createElement("div",{className:a},n.createElement("iframe",e));default:return n.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),n.createElement("figcaption",{className:o},r)):n.createElement(n.Fragment,null)}},9807:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),a=r(9163),o=r(3868),i=r.n(o),l=r(5999),s="formContainer_ssZr",c="inputContainer_rIzC",m="input_xw7i",u="submit_jbGj",p="status_Xmiw",d="success_K3DK",f="sending_s6rj",h="error_ltts";const g=e=>{let t,{status:r,message:a,onValidated:o}=e;const g=()=>t&&t.value.indexOf("@")>-1&&i()(t.value)&&o({EMAIL:t.value});return(0,n.useEffect)((()=>{r&&"success"===r&&(t.text="")}),[r]),n.createElement("div",{className:s},n.createElement("h3",null,n.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),n.createElement("div",{className:c},n.createElement("input",{className:m,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?g():null,required:!0,autoComplete:"email"}),n.createElement("a",{className:u+" tooltip",rel:"noopener",onClick:g,type:"submit"},n.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),n.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===r&&n.createElement("div",{className:`${p} ${f}`},n.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===r&&n.createElement("div",{className:`${p} ${h}`,dangerouslySetInnerHTML:{__html:a}}),"success"===r&&n.createElement("div",{className:`${p} ${d}`,dangerouslySetInnerHTML:{__html:a}}))};function y(e){let{url:t}=e;return n.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:r,message:a}=e;return n.createElement(g,{status:r,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(5999);function o(){return n.createElement("div",{className:"center"},n.createElement("span",{className:"italic"},n.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a=r(5742),o=r(2263),i=r(4996);function l(e){const{siteConfig:t}=(0,o.Z)();let{url:r}=t||{};return`${r}${(0,i.Z)(e)}`}function s(e){let{uri:t,image:r,type:i}=e;const{siteConfig:s}=(0,o.Z)(),{projectName:c,customFields:{mType:m,twitterName:u}}=s,p=i||m,d=r?l(r):null,f=l(t);return n.createElement(n.Fragment,null,n.createElement(a.Z,null,f&&n.createElement("link",{rel:"canonical",href:f}),f&&n.createElement("meta",{property:"og:url",content:f}),d&&n.createElement("meta",{property:"og:image",content:d}),p&&n.createElement("meta",{property:"og:type",content:p}),c&&n.createElement("meta",{property:"og:site_name",content:c}),u&&n.createElement("meta",{property:"twitter:site",content:`@${u}`}),d&&n.createElement("meta",{name:"twitter:image",content:d}),d&&n.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},9528:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var n=r(3117),a=(r(7294),r(3905)),o=r(9411);r(2147),r(1324),r(9807),r(3089);const i={slug:"what-makes-a-good-developer",title:"What Makes a Good Developer?",tags:["best practices","careers","tech"],description:"Hey there! Welcome to my new blog website. For my first start here, I'd like to introduce you to the key points which I think are the most important for a develop...",image:"img/what-makes-a-good-developer.jpg"},l=void 0,s={permalink:"/blog/what-makes-a-good-developer",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2020-06-01-what-makes-a-good-developer.mdx",source:"@site/blog/2020-06-01-what-makes-a-good-developer.mdx",title:"What Makes a Good Developer?",description:"Hey there! Welcome to my new blog website. For my first start here, I'd like to introduce you to the key points which I think are the most important for a develop...",date:"2020-06-01T00:00:00.000Z",formattedDate:"June 1, 2020",tags:[{label:"best practices",permalink:"/blog/tags/best-practices"},{label:"careers",permalink:"/blog/tags/careers"},{label:"tech",permalink:"/blog/tags/tech"}],readingTime:7.705,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"what-makes-a-good-developer",title:"What Makes a Good Developer?",tags:["best practices","careers","tech"],description:"Hey there! Welcome to my new blog website. For my first start here, I'd like to introduce you to the key points which I think are the most important for a develop...",image:"img/what-makes-a-good-developer.jpg"},prevItem:{title:"Deployment Environments",permalink:"/blog/deployment-environments"}},c={authorsImageUrls:[]},m=[],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/what-makes-a-good-developer"},(0,a.kt)(o.Z,{data:{src:"/img/what-makes-a-good-developer.jpg",alt:"What Makes a Good Developer",type:"image"},mdxType:"Figure"},"Photo by"," ",(0,a.kt)("a",{target:"_blank",href:"https://unsplash.com/@anniespratt",rel:"noreferrer noopener nofollow"},"Annie Spratt")," ","on"," ",(0,a.kt)("a",{target:"_blank",href:"https://unsplash.com/photos/QckxruozjRg",rel:"noreferrer noopener nofollow"},"Unsplash"))),(0,a.kt)("p",null,"Hey there! Welcome to my new blog website. For my first start here, I'd like to introduce you to the key points which I think are the most important for a developer in their daily job!"))}p.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);