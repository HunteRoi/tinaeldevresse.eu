"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[5974],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9411:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a="container_KXSz",i="legend_Ecw3";function s(e){let{data:t,children:n}=e;return t||n?r.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return r.createElement(r.Fragment,null);switch(e.type){case"image":case"img":return e.url?r.createElement("a",{href:e.url,target:"_blank"},r.createElement("img",e)):r.createElement("img",e);case"video":return r.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"audio":return r.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"html":return r.createElement("div",{className:a},r.createElement("iframe",e));default:return r.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),r.createElement("figcaption",{className:i},n)):r.createElement(r.Fragment,null)}},9807:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),a=n(9163),i=n(3868),s=n.n(i),u=n(5999),o="formContainer_ssZr",l="inputContainer_rIzC",c="input_xw7i",p="submit_jbGj",m="status_Xmiw",d="success_K3DK",g="sending_s6rj",f="error_ltts";const h=e=>{let t,{status:n,message:a,onValidated:i}=e;const h=()=>t&&t.value.indexOf("@")>-1&&s()(t.value)&&i({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),r.createElement("div",{className:o},r.createElement("h3",null,r.createElement(u.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),r.createElement("div",{className:l},r.createElement("input",{className:c,ref:e=>t=e,type:"email",placeholder:(0,u.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?h():null,required:!0,autoComplete:"email"}),r.createElement("a",{className:p+" tooltip",rel:"noopener",onClick:h,type:"submit"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),r.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===n&&r.createElement("div",{className:`${m} ${g}`},r.createElement(u.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===n&&r.createElement("div",{className:`${m} ${f}`,dangerouslySetInnerHTML:{__html:a}}),"success"===n&&r.createElement("div",{className:`${m} ${d}`,dangerouslySetInnerHTML:{__html:a}}))};function v(e){let{url:t}=e;return r.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:a}=e;return r.createElement(h,{status:n,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(5999);function i(){return r.createElement("div",{className:"center"},r.createElement("span",{className:"italic"},r.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(5742),i=n(2263),s=n(4996);function u(e){const{siteConfig:t}=(0,i.Z)();let{url:n}=t||{};return`${n}${(0,s.Z)(e)}`}function o(e){let{uri:t,image:n,type:s}=e;const{siteConfig:o}=(0,i.Z)(),{projectName:l,customFields:{mType:c,twitterName:p}}=o,m=s||c,d=n?u(n):null,g=u(t);return r.createElement(r.Fragment,null,r.createElement(a.Z,null,g&&r.createElement("link",{rel:"canonical",href:g}),g&&r.createElement("meta",{property:"og:url",content:g}),d&&r.createElement("meta",{property:"og:image",content:d}),m&&r.createElement("meta",{property:"og:type",content:m}),l&&r.createElement("meta",{property:"og:site_name",content:l}),p&&r.createElement("meta",{property:"twitter:site",content:`@${p}`}),d&&r.createElement("meta",{name:"twitter:image",content:d}),d&&r.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},1517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return g}});var r=n(3117),a=(n(7294),n(3905)),i=n(9411),s=n(2147),u=n(1324),o=n(9807),l=n(3089);const c={slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},p=void 0,m={permalink:"/fr/blog/what-is-a-container",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-06-01-what-is-a-container.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-06-01-what-is-a-container.mdx",title:"Qu'est-ce qu'un conteneur?",description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",date:"2021-06-01T00:00:00.000Z",formattedDate:"1 juin 2021",tags:[{label:"conteneur",permalink:"/fr/blog/tags/conteneur"},{label:"docker",permalink:"/fr/blog/tags/docker"},{label:"docusaurus",permalink:"/fr/blog/tags/docusaurus"},{label:"i18n",permalink:"/fr/blog/tags/i-18-n"}],readingTime:6.685,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},prevItem:{title:"Les tests unitaires",permalink:"/fr/blog/unit-testing"},nextItem:{title:"Environnements de d\xe9ploiement",permalink:"/fr/blog/deployment-environments"}},d={authorsImageUrls:[]},g=[{value:"Docusaurus",id:"docusaurus",level:2},{value:"Qu&#39;est-ce que c&#39;est?",id:"quest-ce-que-cest",level:3},{value:"Pourquoi Docusaurus?",id:"pourquoi-docusaurus",level:3},{value:"Ce site web est g\xe9n\xe9r\xe9 avec Docusaurus",id:"ce-site-web-est-g\xe9n\xe9r\xe9-avec-docusaurus",level:3},{value:"Les conteneurs",id:"les-conteneurs",level:2},{value:"De quoi parle-t-on?",id:"de-quoi-parle-t-on",level:3},{value:"Quelles diff\xe9rences avec une Machine Virtuelle?",id:"quelles-diff\xe9rences-avec-une-machine-virtuelle",level:3},{value:"Comment \xe7a fonctionne?",id:"comment-\xe7a-fonctionne",level:3},{value:"Pourquoi utiliser Docker ou ses concurrents?",id:"pourquoi-utiliser-docker-ou-ses-concurrents",level:3},{value:"Conclusion",id:"conclusion",level:2}],f={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/what-is-a-container"},(0,a.kt)(i.Z,{data:{src:"/img/what-is-a-container.jpg",alt:"What is a Container",type:"image"},mdxType:"Figure"})),(0,a.kt)("p",null,"Salut! Aujourd'hui, on va parler de deux choses:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais de te fournir mon blog en deux langues!"),(0,a.kt)("li",{parentName:"ol"},"les conteneurs et leur utilit\xe9 dans le cadre du d\xe9veloppement d'applications.")),(0,a.kt)(s.Z,{uri:"blog/what-is-a-container",image:"img/what-is-a-container.jpg",type:"article",mdxType:"SEO"}),(0,a.kt)("hr",null),(0,a.kt)(u.Z,{mdxType:"Reminder"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"docusaurus"},"Docusaurus"),(0,a.kt)("h3",{id:"quest-ce-que-cest"},"Qu'est-ce que c'est?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus"),", c'est un g\xe9n\xe9rateur de sites web optimis\xe9s open-source qui embarque plusieurs fonctionnalit\xe9s int\xe9ressantes pour les cr\xe9ateurs de contenu en ligne:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"documentation et articles de blog en ",(0,a.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/getting-started/"},"Markdown")," ;"),(0,a.kt)("li",{parentName:"ul"},"multi-linguisme ;"),(0,a.kt)("li",{parentName:"ul"},"versionage ;"),(0,a.kt)("li",{parentName:"ul"},"recherche de contenu fortement d\xe9velopp\xe9e (gr\xe2ce \xe0 une int\xe9gration d'",(0,a.kt)("a",{parentName:"li",href:"https://www.algolia.com/"},"Algolia"),").")),(0,a.kt)("h3",{id:"pourquoi-docusaurus"},"Pourquoi Docusaurus?"),(0,a.kt)("p",null,"En effet, la question peut se poser. Pourquoi Docusaurus alors qu'il existe d'autres g\xe9n\xe9rateurs de sites comme Wix, Shopify, Weebly, ... ou plus ax\xe9s d\xe9veloppeur comme Next.js, Hugo, Gatsby, etc."),(0,a.kt)("p",null,"Je suis tomb\xe9 sur Docusaurus par pur hasard en cherchant un g\xe9n\xe9rateur de documentations sp\xe9cifique \xe0 .NET (",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.github.io/docfx/"},"Docfx")," d'ailleurs, si \xe7a t'int\xe9resse).\nCependant, j'ai personnellement choisi Docusaurus pour mes projets personnels pour 3 raisons: il est..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus"},"open-source")," (ce qui signifie que je peux y contribuer, consulter son code source, etc.),"),(0,a.kt)("li",{parentName:"ul"},"d\xe9velopp\xe9 en React (j'aime beaucoup de cette librairie),"),(0,a.kt)("li",{parentName:"ul"},"facilement utilisable (en 2-3 minutes, tu peux avoir un site fonctionnel et personnalis\xe9).")),(0,a.kt)("h3",{id:"ce-site-web-est-g\xe9n\xe9r\xe9-avec-docusaurus"},"Ce site web est g\xe9n\xe9r\xe9 avec Docusaurus"),(0,a.kt)("p",null,"Si tu ne l'as pas encore remarqu\xe9, ce site web est g\xe9n\xe9r\xe9 avec Docusaurus. Tu peux d'ailleurs retrouver les sources sur ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/hunteroi/tinaeldevresse.eu"},"Github"),".\nSi tu vois une faute, n'h\xe9sitez pas \xe0 le mentionner en ouvrant une issue!"),(0,a.kt)("p",null,"Passons au sujet principal maintenant! Notre introduction aux conteneurs (ou ",(0,a.kt)("em",{parentName:"p"},"containers")," en anglais)."),(0,a.kt)("h2",{id:"les-conteneurs"},"Les conteneurs"),(0,a.kt)("h3",{id:"de-quoi-parle-t-on"},"De quoi parle-t-on?"),(0,a.kt)("p",null,"Un des probl\xe8mes dans le d\xe9veloppement, c'est qu'on est fortement li\xe9s \xe0 la machine sur laquelle tourne notre produit.\nQue cela soit en plein d\xe9veloppement, ou quand il s'agit de distribuer un service web \xe0 des clients, il y a toujours une machine quelque part.\nEt le soucis principal, c'est que les syst\xe8mes et leurs configurations diff\xe8rent..!"),(0,a.kt)(i.Z,{data:{src:"/img/it-works-on-my-machine.jpg",alt:"It Works On My Machine - meme",type:"image"},mdxType:"Figure"}),(0,a.kt)("p",null,"Tu l'auras compris. Un conteneur, c'est une unit\xe9 logiciel qui embarque du code et toutes ses d\xe9pendances afin de faire tourner une application d'un environnement \xe0 l'autre de mani\xe8re rapide et fiable.\nC'est comme si, finalement, tu envoyais ton propre ordinateur au client."),(0,a.kt)("h3",{id:"quelles-diff\xe9rences-avec-une-machine-virtuelle"},"Quelles diff\xe9rences avec une Machine Virtuelle?"),(0,a.kt)("p",null,"Il est vrai que les conteneurs sont souvent compar\xe9s aux machines virtuelles (en anglais, ",(0,a.kt)("em",{parentName:"p"},"virtual machine (VM)"),") en \xe7a qu'ils ont tous deux le m\xeame but: faire tourner une application dans un environnement embarqu\xe9.\nLa grosse diff\xe9rence entre les 2, c'est qu'un conteneur fait appel au syst\xe8me d'exploitation (en anglais, ",(0,a.kt)("em",{parentName:"p"},"operating system (OS)"),") du serveur h\xf4te tandis qu'une VM h\xe9berge son propre OS."),(0,a.kt)("p",null,"En fait, une machine avec Docker install\xe9e apporte les avantages suivants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"l\xe9g\xe8ret\xe9 et rapidit\xe9,"),(0,a.kt)("li",{parentName:"ul"},"portabilit\xe9 et standardisation, donc multi-plateforme (dans une certaine mesure).")),(0,a.kt)("p",null,"En r\xe9alit\xe9, c'est compr\xe9hensible. Regardons de plus pr\xe8s \xe0 ce sch\xe9ma:"),(0,a.kt)(i.Z,{data:{src:"/img/container_against_VM.png",alt:"Container VS Virtual Machine",type:"image"},mdxType:"Figure"}),(0,a.kt)("p",null,"Ce sch\xe9ma est une comparaison d'une machine avec Docker install\xe9 et d'une machine qui instancie et g\xe8re des VMs.\nGr\xe2ce \xe0 mon extraordinaire talent de dessinateur, on peut vite comprendre pourquoi Docker propose l\xe9g\xe8ret\xe9 et rapidit\xe9 comme atout: Docker se base sur l'OS install\xe9 et r\xe9utilise les binaires.\nCela signifie que la machine n'a plus qu'\xe0 charger les conteneurs qui embarquent le code, les variables d'environnement, etc. (donc peu de choses lourdes \xe0 proprement parler)."),(0,a.kt)("p",null,"A contrario, un syst\xe8me qui se base sur les VMs poss\xe8de un hyperviseur, qui va g\xe9rer les diff\xe9rentes VMs. Cet hyperviseur se base en effet sur l'OS de la machine h\xf4te.\nCependant, chaque VM embarque elle-m\xeame son propre OS et ses binaires."),(0,a.kt)("p",null,"En conclusion donc, on peut avoir une machine qui fait facilement tourner 500 conteneurs avec un seul OS.\nMais ce ne sera pas la m\xeame histoire si on doit faire tourner 500 VMs... M\xeame si, en r\xe9alit\xe9, il reste complexe de g\xe9rer de fa\xe7on efficiente plusieurs conteneurs en simultan\xe9."),(0,a.kt)("p",null,"Pourtant, la force de Docker peut \xe9galement se r\xe9v\xe9ler une faiblesse : il n'est pas possible de faire tourner un conteneur qui d\xe9pend de Windows sur une machine Linux (et invers\xe9ment)."),(0,a.kt)("p",null,"Un autre probl\xe8me important qui se pose lors de l'utilisation de Docker est \xe9videmment la s\xe9curit\xe9!\nLes conteneurs ont beau \xeatre isol\xe9s... si un seul est compromis, il est fort \xe0 pari\xe9 que l'enti\xe8ret\xe9 de la machine (et donc tous les autres conteneurs) repr\xe9sente un risque."),(0,a.kt)("h3",{id:"comment-\xe7a-fonctionne"},"Comment \xe7a fonctionne?"),(0,a.kt)("p",null,"Je vais poser les bases, histoire qu'on parle avec le langage. On va parler de Docker sp\xe9cifiquement.\nIl se compose de 3 parties distinctes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"le logiciel, appel\xe9 Docker daemon, est un processus qui g\xe8re les conteneurs Docker et les objets en r\xe9sultant (ex: Docker Engine, ...)"),(0,a.kt)("li",{parentName:"ol"},"les objets, divis\xe9s eux-m\xeames en 3 cat\xe9gories, sont des entit\xe9s qui permettent de construire une application dans Docker:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("strong",{parentName:"li"},"conteneur")," est un environnement standardis\xe9 qui contient les applications."),(0,a.kt)("li",{parentName:"ul"},"une ",(0,a.kt)("strong",{parentName:"li"},"image")," est un mod\xe8le en lecture seule qui permet de g\xe9n\xe9rer un conteneur. On peut donc dire que l'instance d'une image est un conteneur."),(0,a.kt)("li",{parentName:"ul"},"un ",(0,a.kt)("strong",{parentName:"li"},"service")," est un syst\xe8me qui permet d'orchestrer les op\xe9rations de plusieurs conteneurs g\xe9r\xe9s par plusieurs daemons. \xc7a porte aussi le nom de ",(0,a.kt)("em",{parentName:"li"},"Swarm")," (un ensemble de Docker daemons qui communiquent entre eux gr\xe2ce \xe0 Docker - ex: Docker Swarm, Kubernetes, ...)."))),(0,a.kt)("li",{parentName:"ol"},"les registres sont des entrep\xf4ts pour les images Docker (ex: Docker Hub, Google Cloud Platform, ...)")),(0,a.kt)("p",null,"Pour cr\xe9er un conteneur, il faut respecter quelques principes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"un conteneur ne contient qu'un seul processus ;"),(0,a.kt)("li",{parentName:"ul"},"un conteneur est immutable (\xe7a signife qu'avec les m\xeames variables d'environnement, le conteneur tournera le ",(0,a.kt)("em",{parentName:"li"},"m\xeame processus"),") ;"),(0,a.kt)("li",{parentName:"ul"},"un conteneur est disposable (\xe7a signifie qu'on peut le supprimer, le remplacer, etc. comme on veut).")),(0,a.kt)("p",null,"Ces 3 principes ne sont que les plus importants selon moi, mais tu trouveras la m\xe9thodologie compl\xe8te sur le site ",(0,a.kt)("a",{parentName:"p",href:"https://12factor.net/"},'"The Twelve Factors"'),"."),(0,a.kt)("p",null,"Une fois une image r\xe9cup\xe9r\xe9e depuis un registre ou construite localement, tu peux cr\xe9er un conteneur. Je te le montrerais bien, mais comme je ne r\xe9invente pas la roue, tu trouveras une petite vid\xe9o qui explique pas mal ces principes-ci!"),(0,a.kt)(i.Z,{data:{type:"html",width:"560",height:"315",src:"https://www.youtube.com/embed/iqqDU2crIEQ",title:"YouTube video player of Docker tutorial",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},mdxType:"Figure"}),(0,a.kt)("h3",{id:"pourquoi-utiliser-docker-ou-ses-concurrents"},"Pourquoi utiliser Docker ou ses concurrents?"),(0,a.kt)("p",null,"Le principe de conteneurisation am\xe8ne diff\xe9rents avantages consid\xe9rables. En voici une petite liste non-exhaustive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"embarquement de nouvelles ressources humaines plus rapide et facile ;"),(0,a.kt)("li",{parentName:"ul"},"certitude de travailler dans le m\xeame environnement que ses coll\xe8gues (m\xeame version des outils notamment) ;"),(0,a.kt)("li",{parentName:"ul"},'application du principe "Do Not Reinvent The Wheel" puisqu\'un acc\xe8s aux images open-source est possible ;'),(0,a.kt)("li",{parentName:"ul"},"plus grande rapidit\xe9 de compilation et de destruction en comparaison \xe0 une VM ;"),(0,a.kt)("li",{parentName:"ul"},"environnement coh\xe9rent et isolation ;"),(0,a.kt)("li",{parentName:"ul"},"grande compatibilit\xe9 (l'OS de la machine de dev importe peu, donc tout le monde peut travailler sur son poste pr\xe9f\xe9r\xe9).")),(0,a.kt)("p",null,"Conteneuriser ses applications est de plus en plus courant. On peut d'ailleurs trouver une raison \xe0 cette \xe9volution dans la croissance que subit le mouvement ",(0,a.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Devops"},"DevOps"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Si tu n'as de cesse d'avoir des probl\xe8mes de configuration d'environnement, que tu dois toujours attendre au moins 1 semaine pour d\xe9ployer un test dans un environnement client, que c'est toujours compliqu\xe9 d'embarquer de nouveaux coll\xe8gues sur un projet... alors consid\xe8re peut-\xeatre l'emploi de conteneurs dans ton quotidien.\nCela dit, je t'avoue que nous n'avons que gratter la surface des possibilit\xe9s qu'offre Docker. Je te conseille vivement de continuer \xe0 te documenter."),(0,a.kt)("p",null,"Et si tu cherches \xe0 g\xe9n\xe9rer de la documentation en ligne ou \xe0 \xe9crire un blog, tu peux aussi essayer Docusaurus! \ud83d\ude01"),(0,a.kt)(o.Z,{url:l.vO,mdxType:"Newsletter"}))}h.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);