import{_ as p}from"./nuxt-link.7c02825b.js";import{a as v,p as h,o as d,b as c,f as o,h as l,w as r,m}from"./entry.f31f3820.js";const _=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGO.png"),b=""+globalThis.__publicAssetsURL("dark/assets/imgs/LOGOwhite.png"),f={class:"container"},w={class:"logo icon-img-100",href:"#"},M={key:0,src:_,alt:"logo"},k={key:1,src:b,style:{width:"160px",height:"24px"},alt:"logo"},x={class:"navbar-nav"},y={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},L=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"首頁",-1),S={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},$=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"關於我們",-1),B={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},C=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"四大單元",-1),z={class:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},N=o("span",{class:"rolling-text",style:{"font-size":"1.5em"}},"節目場次",-1),O={__name:"Navbar",props:["lightMode","mainBg","subBg","noStatic","curve"],setup(e){function g(){const a=window.scrollY,i=document.querySelector(".navbar");a>300?i.classList.add("nav-scroll"):i.classList.remove("nav-scroll")}function t(a){a.currentTarget.querySelector(".dropdown-menu").classList.add("show")}function s(a){a.currentTarget.querySelector(".dropdown-menu").classList.remove("show")}function u(){document.querySelector(".navbar .navbar-collapse").classList.toggle("show")}return v(()=>{window.addEventListener("scroll",g)}),h(()=>{window.removeEventListener("scroll",g)}),(a,i)=>{const n=p;return d(),c("nav",{class:m(`navbar navbar-expand-lg ${e.curve?"nav-crev":""} ${e.noStatic?"":"static"} ${e.mainBg?"main-bg":""} ${e.subBg?"sub-bg":""}`)},[o("div",f,[o("a",w,[e.lightMode?(d(),c("img",M)):(d(),c("img",k))]),o("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[o("span",{class:"icon-bar"},[o("i",{class:"fas fa-bars",onClick:u})])]),o("div",{class:"collapse navbar-collapse justify-content-center",id:"navbarSupportedContent",onClick:u},[o("ul",x,[o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",y,[l(n,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/home-onepage`},{default:r(()=>[L]),_:1},8,["to"])])],32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",S,[l(n,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/page-about`},{default:r(()=>[$]),_:1},8,["to"])])],32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",B,[l(n,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/sessions`},{default:r(()=>[C]),_:1},8,["to"])])],32),o("li",{class:"nav-item dropdown",onMousemove:t,onMouseleave:s},[o("a",z,[l(n,{class:"nav-item",to:`/${e.lightMode?"light":"dark"}/schedule`},{default:r(()=>[N]),_:1},8,["to"])])],32)])])])],2)}}};export{O as _};
