"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[8279],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9411:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a="container_KXSz",i="legend_Ecw3";function o(e){let{data:t,children:n}=e;return t||n?r.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return r.createElement(r.Fragment,null);switch(e.type){case"image":case"img":return e.url?r.createElement("a",{href:e.url,target:"_blank"},r.createElement("img",e)):r.createElement("img",e);case"video":return r.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"audio":return r.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"html":return r.createElement("div",{className:a},r.createElement("iframe",e));default:return r.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),r.createElement("figcaption",{className:i},n)):r.createElement(r.Fragment,null)}},9807:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),a=n(9163),i=n(3868),o=n.n(i),c=n(5999),s="formContainer_ssZr",l="inputContainer_rIzC",u="input_xw7i",m="submit_jbGj",p="status_Xmiw",d="success_K3DK",g="sending_s6rj",y="error_ltts";const f=e=>{let t,{status:n,message:a,onValidated:i}=e;const f=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&i({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),r.createElement("div",{className:s},r.createElement("h3",null,r.createElement(c.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),r.createElement("div",{className:l},r.createElement("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,c.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?f():null,required:!0,autoComplete:"email"}),r.createElement("a",{className:m+" tooltip",rel:"noopener",onClick:f,type:"submit"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),r.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===n&&r.createElement("div",{className:`${p} ${g}`},r.createElement(c.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===n&&r.createElement("div",{className:`${p} ${y}`,dangerouslySetInnerHTML:{__html:a}}),"success"===n&&r.createElement("div",{className:`${p} ${d}`,dangerouslySetInnerHTML:{__html:a}}))};function h(e){let{url:t}=e;return r.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:a}=e;return r.createElement(f,{status:n,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(5999);function i(){return r.createElement("div",{className:"center"},r.createElement("span",{className:"italic"},r.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(5742),i=n(2263),o=n(4996);function c(e){const{siteConfig:t}=(0,i.Z)();let{url:n}=t||{};return`${n}${(0,o.Z)(e)}`}function s(e){let{uri:t,image:n,type:o}=e;const{siteConfig:s}=(0,i.Z)(),{projectName:l,customFields:{mType:u,twitterName:m}}=s,p=o||u,d=n?c(n):null,g=c(t);return r.createElement(r.Fragment,null,r.createElement(a.Z,null,g&&r.createElement("link",{rel:"canonical",href:g}),g&&r.createElement("meta",{property:"og:url",content:g}),d&&r.createElement("meta",{property:"og:image",content:d}),p&&r.createElement("meta",{property:"og:type",content:p}),l&&r.createElement("meta",{property:"og:site_name",content:l}),m&&r.createElement("meta",{property:"twitter:site",content:`@${m}`}),d&&r.createElement("meta",{name:"twitter:image",content:d}),d&&r.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},9248:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905)),i=n(9411);n(2147),n(1324),n(9807),n(3089);const o={slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},c=void 0,s={permalink:"/blog/sharing-is-caring",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2023-04-06-sharing-is-caring.mdx",source:"@site/blog/2023-04-06-sharing-is-caring.mdx",title:"Sharing is caring",description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"development",permalink:"/blog/tags/development"},{label:"coach",permalink:"/blog/tags/coach"},{label:"agility",permalink:"/blog/tags/agility"},{label:"IT",permalink:"/blog/tags/it"},{label:"craft",permalink:"/blog/tags/craft"},{label:"software craftsman",permalink:"/blog/tags/software-craftsman"}],readingTime:9.34,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},nextItem:{title:"What architecture do I use for my projects?",permalink:"/blog/why-did-i-switch-to-clean-architecture"}},l={authorsImageUrls:[]},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/sharing-is-caring"},(0,a.kt)(i.Z,{data:{src:"/img/coaching.jpg",alt:"Example Mapping used to get feedback on my coaching session",type:"image"},mdxType:"Figure"},"My client's feedback on my first coaching mission")),(0,a.kt)("p",null,"For quite some time now, I have been thinking about my career and how I would like it to evolve.\nYou know that too, don't you? Every time you have an interview as a young person, you are asked \"where do you see yourself in x years?\".\nIt did not tickle me at the beginning, but with some experience, you learn and understand what you like and especially what you don't like."),(0,a.kt)("p",null,"Finally, where do I see myself in a few years?"))}p.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);