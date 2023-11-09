"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[4799],{4032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(5893),s=n(1151),i=n(9411);n(831),n(1324),n(9807),n(3089);const a={slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},o=void 0,u={permalink:"/fr/blog/what-is-a-container",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-06-01-what-is-a-container.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-06-01-what-is-a-container.mdx",title:"Qu'est-ce qu'un conteneur?",description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",date:"2021-06-01T00:00:00.000Z",formattedDate:"1 juin 2021",tags:[{label:"conteneur",permalink:"/fr/blog/tags/conteneur"},{label:"docker",permalink:"/fr/blog/tags/docker"},{label:"docusaurus",permalink:"/fr/blog/tags/docusaurus"},{label:"i18n",permalink:"/fr/blog/tags/i-18-n"}],readingTime:6.695,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},unlisted:!1,prevItem:{title:"Les tests unitaires",permalink:"/fr/blog/unit-testing"},nextItem:{title:"Environnements de d\xe9ploiement",permalink:"/fr/blog/deployment-environments"}},c={authorsImageUrls:[]},l=[];function d(e){const t={li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"/blog/what-is-a-container",children:(0,r.jsx)(i.Z,{data:{src:"/img/what-is-a-container.jpg",alt:"What is a Container",type:"image"}})}),"\n",(0,r.jsx)(t.p,{children:"Salut! Aujourd'hui, on va parler de deux choses:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais de te fournir mon blog en deux langues!"}),"\n",(0,r.jsx)(t.li,{children:"les conteneurs et leur utilit\xe9 dans le cadre du d\xe9veloppement d'applications."}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9411:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5298),s={container:"container_KXSz",legend:"legend_Ecw3"},i=n(5893);function a(e){if("object"!=typeof e||!e.type)return(0,i.jsx)(i.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,i.jsx)("a",{href:e.url,target:"_blank",children:(0,i.jsx)("img",{...e})}):(0,i.jsx)("img",{...e});case"video":return(0,i.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,i.jsx)("source",{src:e.src,type:e.type}))):(0,i.jsx)("source",{...e})});case"audio":return(0,i.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,i.jsx)("source",{src:e.src,type:e.type}))):(0,i.jsx)("source",{...e})});case"html":return(0,i.jsx)("div",{className:s.container,children:(0,i.jsx)("iframe",{...e})});default:return(0,i.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function o(e){let{data:t,children:n}=e;return t||n?(t.src&&(t.src=(0,r.Z)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:(0,r.Z)(e.src)})))),(0,i.jsxs)("figure",{children:[t&&a(t),(0,i.jsx)("figcaption",{className:s.legend,children:n})]})):(0,i.jsx)(i.Fragment,{})}},9807:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7294),s=n(9163),i=n(3868),a=n.n(i),o=n(5999),u="formContainer_ssZr",c="inputContainer_rIzC",l="input_xw7i",d="submit_jbGj",m="status_Xmiw",p="success_K3DK",h="sending_s6rj",g="error_ltts",f=n(5893);const x=e=>{let t,{status:n,message:s,onValidated:i}=e;const x=()=>t&&t.value.indexOf("@")>-1&&a()(t.value)&&i({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("h3",{children:(0,f.jsx)(o.Z,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("input",{className:l,ref:e=>t=e,type:"email",placeholder:(0,o.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?x():null,required:!0,autoComplete:"email"}),(0,f.jsxs)("a",{className:d+" tooltip",rel:"noopener",onClick:x,type:"submit",children:[(0,f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,f.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,f.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===n&&(0,f.jsx)("div",{className:`${m} ${h}`,children:(0,f.jsx)(o.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===n&&(0,f.jsx)("div",{className:`${m} ${g}`,dangerouslySetInnerHTML:{__html:s}}),"success"===n&&(0,f.jsx)("div",{className:`${m} ${p}`,dangerouslySetInnerHTML:{__html:s}})]})};function j(e){let{url:t}=e;return(0,f.jsx)(s.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:r}=e;return(0,f.jsx)(x,{status:n,message:r,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5999),s=n(5893);function i(){return(0,s.jsx)("div",{className:"center",children:(0,s.jsx)("span",{className:"italic",children:(0,s.jsx)(r.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},831:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5742),s=n(2263),i=n(5298),a=n(5893);function o(e){let{uri:t,image:n,type:o}=e;const{siteConfig:u}=(0,s.Z)(),{projectName:c,customFields:{mType:l,twitterName:d}}=u,m=o||l,p=n?(0,i.Z)(n):null,h=(0,i.Z)(t);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{children:[h&&(0,a.jsx)("link",{rel:"canonical",href:h}),h&&(0,a.jsx)("meta",{property:"og:url",content:h}),p&&(0,a.jsx)("meta",{property:"og:image",content:p}),m&&(0,a.jsx)("meta",{property:"og:type",content:m}),c&&(0,a.jsx)("meta",{property:"og:site_name",content:c}),d&&(0,a.jsx)("meta",{property:"twitter:site",content:`@${d}`}),p&&(0,a.jsx)("meta",{name:"twitter:image",content:p}),p&&(0,a.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},5298:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2263),s=n(4996);function i(e){const{siteConfig:t}=(0,r.Z)();let{url:n}=t||{};return`${n}${(0,s.Z)(e)}`}},1151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(7294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);