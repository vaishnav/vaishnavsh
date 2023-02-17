import{r as c,a as v}from"./react.4bffc009.js";import{c as b}from"./react-dom.66c62180.js";import{L as h,B as k}from"./react-router-dom.3ab6bad7.js";import{a as r,j as e,A as y,H as j,b as S,c as _,F as g,d as L,e as P,f as x,g as w,h as T}from"./react-icons.54c61436.js";import{_ as A}from"./@splinetool.822e2b52.js";import{e as R}from"./@emailjs.9547f5f8.js";import{D as H,P as M}from"./react-pdf.a6d91ec6.js";import{d as C,e as d,N as D}from"./react-router.eb71e201.js";import"./pdfjs-dist.90e1c69c.js";import"./scheduler.bbe5d97c.js";import"./@remix-run.24163fd1.js";import"./@babel.d80823c4.js";import"./prop-types.26c31ece.js";import"./make-event-props.904b2f8b.js";import"./make-cancellable-promise.4791df74.js";import"./clsx.09c75e33.js";import"./tiny-invariant.47b24a6d.js";import"./tiny-warning.49191a0e.js";import"./merge-refs.551234d1.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();const E=()=>{const[t,a]=c.exports.useState("#");return r("nav",{children:[r("div",{className:"mobile-view",children:[e(h,{to:"/",onClick:()=>a("#"),className:t==="#"?"active":"",children:e(y,{className:"nav-icon"})}),e(h,{to:"/resume",onClick:()=>a("#resume"),className:t==="#resume"?"active":"",children:e(j,{className:"nav-icon"})})]}),r("div",{className:"desktop-view",children:[e(h,{to:"/",onClick:()=>a("#"),className:t==="#"?"nav-element home active":"home nav-element",children:"Home"}),e(h,{to:"/resume",onClick:()=>a("#resume"),className:t==="#resume"?"nav-element active":"nav-element",children:"Resume"})]})]})};const F=v.lazy(()=>A(()=>import("./@splinetool.822e2b52.js").then(t=>t.r),["assets/@splinetool.822e2b52.js","assets/react.4bffc009.js","assets/pdfjs-dist.90e1c69c.js"]));function $(){const[t,a]=c.exports.useState(!0);return r("div",{className:"table",children:[e("div",{className:"loading",children:t?r("h3",{children:["Loading...",e("br",{}),"( Hover once loaded )"]}):null}),e(c.exports.Suspense,{children:e(F,{scene:"https://prod.spline.design/7MD6gokbWs9a2Zn4/scene.splinecode",onLoad:()=>a(!1)})})]})}const p=t=>r("div",{className:"heading",children:[e("h1",{children:t.header}),e("h4",{children:t.info})]}),f=()=>{const[t,a]=c.exports.useState(""),[i,n]=c.exports.useState(""),[s,o]=c.exports.useState(""),m=c.exports.useRef(null);return e("div",{className:"container",children:r("form",{ref:m,onSubmit:l=>{l.preventDefault(),R.sendForm("service_cg4vkyf","template_m6kxgu8",m.current,"7OJ48YVY6Esued1vN").then(u=>{console.log(u.text),alert("Mail Sent Successfully"),a(""),n(""),o("")},u=>{console.log(u.text),alert("Something went wrong, mail not sent, Ill fix it")})},className:"contact-form",children:[e(p,{header:"Lets Connect",info:"Drop me a message, would love to talk to you"}),e("label",{children:"Tell me about yourself!"}),e("input",{type:"text",name:"user_name",placeholder:"Your Name",className:"contact-box",value:t,onChange:l=>a(l.target.value)}),e("input",{type:"email",name:"user_email",placeholder:"Your Email",className:"contact-box",value:i,onChange:l=>n(l.target.value)}),e("label",{children:"Drop your message here"}),e("textarea",{name:"message",placeholder:"Your Message",className:"contact-text-box",value:s,onChange:l=>o(l.target.value)}),e("input",{type:"submit",value:"Send",className:"default-button"})]})})};const J=t=>{let a,i;const n=t.project;return n.source!=""?a=e("a",{href:n.source,target:"_blank",children:e(S,{})}):a=null,n.demo!=""?i=e("a",{href:n.source,target:"_blank",children:e(_,{})}):i=null,e("div",{className:"project-body",children:r("div",{className:"project-info",children:[e("div",{className:"project-name",children:n.name}),e("div",{className:"project-description",children:n.description}),r("div",{className:"project-links",children:[a,i]}),e("div",{className:"project-stacks",children:n.stack.map(s=>e("div",{children:s}))})]})})},z=[{name:"Three Js Rocket Scene",projectType:"Three Js Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea.Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Three Js","Vite","HTML","CSS"],source:"https://github.com/vaishnav/threejs_rockets",demo:"https://vaishnav.github.io/threejs_rockets/"},{name:"Maze Generator/Solver",projectType:"Path Finding Algorithms Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Python","Pygame","DSA"],source:"https://github.com/vaishnav/maze_generator_solver",demo:""},{name:"Three Js Rocket Scene",projectType:"Three Js Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Three Js","Vite","HTML","CSS"],source:"https://github.com/vaishnav/threejs_rockets",demo:"https://vaishnav.github.io/threejs_rockets/"},{name:"Maze Generator/Solver",projectType:"Path Finding Algorithms Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Python","Pygame","DSA"],source:"https://github.com/vaishnav/maze_generator_solver",demo:""},{name:"Three Js Rocket Scene",projectType:"Three Js Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Three Js","Vite","HTML","CSS"],source:"https://github.com/vaishnav/threejs_rockets",demo:"https://vaishnav.github.io/threejs_rockets/"},{name:"Maze Generator/Solver",projectType:"Path Finding Algorithms Project",description:"Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",stack:["Python","Pygame","DSA"],source:"https://github.com/vaishnav/maze_generator_solver",demo:""}],N=()=>r(g,{children:[e(p,{header:"My Projects",info:"Some of my Recent Projets, feel free to check Source or Demo"}),e("div",{className:"container project-layout",children:z.map(t=>e(J,{project:t},t.name))})]}),O=()=>r(g,{children:[r("div",{className:"container header",children:[r("div",{className:"left",children:[e("h4",{children:"Hi, my name is"}),r("p",{className:"header-name",children:["Vaishnav ",e("span",{className:"primary",children:"Sharma"})]}),e("p",{className:"header-about",children:"Programmer, Problem-Solver, 3D-Artist and a GEEK."}),r("div",{className:"header-quick-nav",children:[e("a",{className:"quick-nav-item",href:"mailto:vaishnav291999@gmail.com",children:e(L,{})}),e("a",{className:"quick-nav-item",href:"https://www.linkedin.com/in/vaishnav-sharma-1952681a3/",target:"_blank",children:e(P,{})}),e("a",{className:"quick-nav-item",href:"https://github.com/vaishnav",target:"_blank",children:e(x,{})}),e("a",{className:"quick-nav-item",href:"https://ue837ee2a.artstation.com/",target:"_blank",children:e(w,{})}),e("a",{className:"quick-nav-item",href:"https://www.instagram.com/vaishnav_1024/",target:"_blank",children:e(T,{})})]})]}),e("div",{className:"right",children:e($,{})})]}),e(N,{}),e(f,{})]});const q=()=>e("div",{children:"Gallery"});const G="https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf",I=()=>{const[t,a]=c.exports.useState(window.innerWidth*.8);return c.exports.useEffect(()=>{const i=()=>{a(window.innerWidth*.8)};window.addEventListener("resize",i)}),r("div",{className:"container",children:[e(p,{header:"Resume",info:"My Updated Resume, take a look and feel free to connect."}),e(H,{file:G,className:"resume-pdf",children:e(M,{pageNumber:1,width:t})})]})};function V(){return r(k,{children:[e(E,{}),r(C,{children:[e(d,{path:"/vaishnavsh",element:e(O,{})}),e(d,{path:"/project",element:e(N,{})}),e(d,{path:"/gallery",element:e(q,{})}),e(d,{path:"/contact",element:e(f,{})}),e(d,{path:"/resume",element:e(I,{})}),e(d,{path:"*",element:e(D,{to:"/vaishnavsh"})})]})]})}b.createRoot(document.getElementById("root")).render(e(v.StrictMode,{children:e(V,{})}));