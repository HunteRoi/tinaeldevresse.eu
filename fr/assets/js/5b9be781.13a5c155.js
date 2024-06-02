"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[8862],{4617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=t(4848),r=t(8453),i=t(3827);t(2467),t(695),t(7388),t(6582);const o={slug:"deployment-environments",title:"Environnements de d\xe9ploiement",tags:["d\xe9ployement","environnement","environnement d'application","environnement de pipeline","CI/CD"],description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",image:"img/deployment-environments.png"},a=void 0,l={permalink:"/fr/blog/deployment-environments",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-01-01-deployment-environments.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-01-01-deployment-environments.mdx",title:"Environnements de d\xe9ploiement",description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",date:"2021-01-01T00:00:00.000Z",tags:[{inline:!0,label:"d\xe9ployement",permalink:"/fr/blog/tags/deployement"},{inline:!0,label:"environnement",permalink:"/fr/blog/tags/environnement"},{inline:!0,label:"environnement d'application",permalink:"/fr/blog/tags/environnement-dapplication"},{inline:!0,label:"environnement de pipeline",permalink:"/fr/blog/tags/environnement-de-pipeline"},{inline:!0,label:"CI/CD",permalink:"/fr/blog/tags/ci-cd"}],readingTime:8.87,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"deployment-environments",title:"Environnements de d\xe9ploiement",tags:["d\xe9ployement","environnement","environnement d'application","environnement de pipeline","CI/CD"],description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",image:"img/deployment-environments.png"},unlisted:!1,prevItem:{title:"Qu'est-ce qu'un conteneur?",permalink:"/fr/blog/what-is-a-container"},nextItem:{title:"Qu'est-ce qui fait un bon d\xe9veloppeur?",permalink:"/fr/blog/what-makes-a-good-developer"}},c={authorsImageUrls:[]},u=[];function d(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"/blog/deployment-environments",children:(0,s.jsx)(i.A,{data:{src:"/img/deployment-environments.png",alt:"Deployment Environments",type:"image"}})}),"\n",(0,s.jsx)(n.p,{children:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n'apprennent pas durant leurs \xe9tudes.\n\xc0 mon avis, c'est une connaissance importante \xe0 poss\xe9der quand on commence \xe0 travailler pour de plus grosses entreprises comme elles tendent \xe0 ajouter plusieurs couches \xe0 leur pipeline."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3827:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(299);const r={container:"container_KXSz",legend:"legend_Ecw3"};var i=t(4848);function o(e){if("object"!=typeof e||!e.type)return(0,i.jsx)(i.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,i.jsx)("a",{href:e.url,target:"_blank",children:(0,i.jsx)("img",{...e})}):(0,i.jsx)("img",{...e});case"video":return(0,i.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,i.jsx)("source",{src:e.src,type:e.type}))):(0,i.jsx)("source",{...e})});case"audio":return(0,i.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,i.jsx)("source",{src:e.src,type:e.type}))):(0,i.jsx)("source",{...e})});case"html":return(0,i.jsx)("div",{className:r.container,children:(0,i.jsx)("iframe",{...e})});default:return(0,i.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function a(e){let{data:n,children:t}=e;return n||t?(n.src&&!n.src.startsWith("http")&&(n.src=(0,s.A)(n.src)),n.sources&&n.sources.length>0&&(n.sources=n.sources.map((e=>({...e,src:e.src.startsWith("http")?e.src:(0,s.A)(e.src)})))),(0,i.jsxs)("figure",{children:[n&&o(n),(0,i.jsx)("figcaption",{className:r.legend,children:t})]})):(0,i.jsx)(i.Fragment,{})}},7388:(e,n,t)=>{t.d(n,{A:()=>f});var s=t(6540),r=t(231),i=t(9517),o=t.n(i),a=t(1312);const l="formContainer_ssZr",c="inputContainer_rIzC",u="input_xw7i",d="submit_jbGj",p="status_Xmiw",m="success_K3DK",g="sending_s6rj",h="error_ltts";var v=t(4848);const x=e=>{let n,{status:t,message:r,onValidated:i}=e;const x=()=>n&&n.value.indexOf("@")>-1&&o()(n.value)&&i({EMAIL:n.value});return(0,s.useEffect)((()=>{t&&"success"===t&&(n.text="")}),[t]),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h3",{children:(0,v.jsx)(a.A,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("input",{className:u,ref:e=>n=e,type:"email",placeholder:(0,a.T)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?x():null,required:!0,autoComplete:"email"}),(0,v.jsxs)("a",{className:d+" tooltip",rel:"noopener",onClick:x,type:"submit",children:[(0,v.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,v.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,v.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===t&&(0,v.jsx)("div",{className:`${p} ${g}`,children:(0,v.jsx)(a.A,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===t&&(0,v.jsx)("div",{className:`${p} ${h}`,dangerouslySetInnerHTML:{__html:r}}),"success"===t&&(0,v.jsx)("div",{className:`${p} ${m}`,dangerouslySetInnerHTML:{__html:r}})]})};function f(e){let{url:n}=e;return(0,v.jsx)(r.A,{url:n,render:e=>{let{subscribe:n,status:t,message:s}=e;return(0,v.jsx)(x,{status:t,message:s,onValidated:e=>n(e)})}})}},695:(e,n,t)=>{t.d(n,{A:()=>i});var s=t(1312),r=t(4848);function i(){return(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("span",{className:"italic",children:(0,r.jsx)(s.A,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},2467:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(5260),r=t(4586),i=t(299),o=t(4848);function a(e){let{uri:n,image:t,type:a}=e;const{siteConfig:l}=(0,r.A)(),{projectName:c,customFields:{mType:u,twitterName:d}}=l,p=a||u,m=t?(0,i.A)(t):null,g=(0,i.A)(n);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(s.A,{children:[g&&(0,o.jsx)("link",{rel:"canonical",href:g}),g&&(0,o.jsx)("meta",{property:"og:url",content:g}),m&&(0,o.jsx)("meta",{property:"og:image",content:m}),p&&(0,o.jsx)("meta",{property:"og:type",content:p}),c&&(0,o.jsx)("meta",{property:"og:site_name",content:c}),d&&(0,o.jsx)("meta",{property:"twitter:site",content:`@${d}`}),m&&(0,o.jsx)("meta",{name:"twitter:image",content:m}),m&&(0,o.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},299:(e,n,t)=>{t.d(n,{A:()=>i});var s=t(4586),r=t(6025);function i(e){const{siteConfig:n}=(0,s.A)();let{url:t}=n||{};return`${t}${(0,r.Ay)(e)}`}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},6582:e=>{e.exports=JSON.parse('{"pt":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);