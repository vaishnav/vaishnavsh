import{r as l,a as p}from"./react.f0f82c81.js";import{c as b}from"./react-dom.d01de86b.js";import{L as u,B as N}from"./react-router-dom.3571a0e1.js";import{a,j as e,A as k,b as j,T as y,H as w,I as S,c as _,d as x,F as P,e as T,f as L,g as A,h as D,i as M}from"./react-icons.f9325c53.js";import{_ as H}from"./@splinetool.cd26f9be.js";import{e as E}from"./@emailjs.9547f5f8.js";import{d as F,e as m,N as I}from"./react-router.b68d1adb.js";import"./scheduler.bbe5d97c.js";import"./@remix-run.24163fd1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const C=()=>(l.exports.useState("#"),a("nav",{children:[a("div",{className:"mobile-view",children:[e(u,{to:"/",className:"active",children:e(k,{className:"nav-icon"})}),e("a",{href:"#projects",children:e(j,{className:"nav-icon"})}),e("a",{href:"#contact",children:e(y,{className:"nav-icon"})}),e("a",{href:"https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf",target:"_blank",children:e(w,{className:"nav-icon"})}),e("a",{href:"https://vaishnavsh.hashnode.dev/",target:"_blank",children:e(S,{className:"nav-icon"})})]}),a("div",{className:"desktop-view",children:[e(u,{to:"/",className:"home nav-element",children:"Home"}),e("a",{href:"#projects",className:"nav-element",children:"Projects"}),e("a",{href:"#contact",className:"nav-element",children:"Contact"}),e("a",{href:"https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf",target:"_blank",className:"nav-element",children:"Resume"}),e("a",{href:"https://vaishnavsh.hashnode.dev/",target:"_blank",className:"nav-element",children:"Blog"})]})]}));const O=p.lazy(()=>H(()=>import("./@splinetool.cd26f9be.js").then(n=>n.r),["assets/@splinetool.cd26f9be.js","assets/react.f0f82c81.js"]));function R(){const[n,o]=l.exports.useState(!0);return a("div",{className:"table",children:[e("div",{className:"loading",children:n?a("h3",{children:["Loading...",e("br",{}),"( Hover once loaded )"]}):null}),e(l.exports.Suspense,{children:e(O,{scene:"https://prod.spline.design/7MD6gokbWs9a2Zn4/scene.splinecode",onLoad:()=>o(!1)})})]})}const v=n=>a("div",{className:"heading",children:[e("h1",{children:n.header}),e("h4",{children:n.info})]}),g=()=>{const[n,o]=l.exports.useState(""),[i,r]=l.exports.useState(""),[t,s]=l.exports.useState(""),h=l.exports.useRef(null);return e("div",{className:"container",id:"contact",children:a("form",{ref:h,onSubmit:c=>{c.preventDefault(),E.sendForm("service_cg4vkyf","template_m6kxgu8",h.current,"7OJ48YVY6Esued1vN").then(d=>{console.log(d.text),alert("Mail Sent Successfully"),o(""),r(""),s("")},d=>{console.log(d.text),alert("Something went wrong, mail not sent, Ill fix it")})},className:"contact-form",children:[e(v,{header:"Lets Connect",info:"Drop me a message, would love to talk to you"}),e("label",{children:"Tell me about yourself!"}),e("input",{type:"text",name:"user_name",placeholder:"Your Name",className:"contact-box",value:n,onChange:c=>o(c.target.value)}),e("input",{type:"email",name:"user_email",placeholder:"Your Email",className:"contact-box",value:i,onChange:c=>r(c.target.value)}),e("label",{children:"Drop your message here"}),e("textarea",{name:"message",placeholder:"Your Message",className:"contact-text-box",value:t,onChange:c=>s(c.target.value)}),e("input",{type:"submit",value:"Send",className:"default-button"})]})})};const $=n=>{let o,i;const r=n.project;return r.source!=""?o=e("a",{href:r.source,target:"_blank",children:e(_,{})}):o=null,r.demo!=""?i=e("a",{href:r.demo,target:"_blank",children:e(x,{})}):i=null,e("div",{className:"project-body",children:a("div",{className:"project-info",children:[e("div",{className:"project-name",children:r.name}),e("div",{className:"project-description",children:r.description}),a("div",{className:"project-links",children:[o,i]}),e("div",{className:"project-stacks",children:r.stack.map(t=>e("div",{children:t}))})]})})},q=[{name:"Three Js Rocket Scene",projectType:"Three Js Project",description:"3D WebApp, users can look around and interact in a 3D environment on a browser. Integration of 3D Elements with HTML",stack:["Three Js","Vite","HTML","CSS"],source:"https://github.com/vaishnav/threejs_rockets",demo:"https://vaishnav.github.io/threejs_rockets/"},{name:"Twitter Like Social Media Platform",projectType:"",description:"A text based social network, along with support for posting images and user interaction like following other users or liking of posts.",stack:["Django","Database","HTML","CSS"],source:"https://github.com/sudoharshita16/Social-Network",demo:""},{name:"Movie API",projectType:"",description:"Backend API for managing movies, along with details like movie title, director, rating or genere",stack:["Django-Rest-Framework","Authentication"],source:"https://github.com/vaishnav/movie_django_rest_api/tree/main/MovieApi",demo:""},{name:"Search Engine From Scratch",projectType:"",description:"Making a search engine that can crawl the web, index the websites and rank them with the help of page-rank algorithm",stack:["Beautiful-Soup","Django"],source:"https://github.com/vaishnav/SearchEngine",demo:""},{name:"Maze Generator/Solver",projectType:"Path Finding Algorithms Project",description:"Generating mazes with the help of python and solving them with the help of different path finding algorithms",stack:["Python","Pygame","DSA"],source:"https://github.com/vaishnav/maze_generator_solver",demo:""},{name:"Interactive 3D scene",projectType:"",description:"3D WebApp, users can look around and interact in the browser",stack:["Three Js","Vite"],source:"https://github.com/vaishnav/threejs_scene",demo:"https://vaishnav.github.io/threejs_scene/"}],f=()=>a("div",{className:"container",id:"projects",children:[e(v,{header:"My Projects",info:"Some of my Recent Projets, feel free to check Source or Demo"}),e("div",{className:"project-layout",children:q.map(n=>e($,{project:n},n.name))})]}),B=()=>a(P,{children:[a("div",{className:"container header",children:[a("div",{className:"left",children:[e("h4",{children:"Hi, my name is"}),a("p",{className:"header-name",children:["Vaishnav ",e("span",{className:"primary",children:"Sharma"})]}),e("p",{className:"header-about",children:"Programmer, Problem-Solver, 3D-Artist and a GEEK."}),a("div",{className:"header-quick-nav",children:[e("a",{className:"quick-nav-item",href:"mailto:vaishnav291999@gmail.com",children:e(T,{})}),e("a",{className:"quick-nav-item",href:"https://www.linkedin.com/in/vaishnav-sharma-1952681a3/",target:"_blank",children:e(L,{})}),e("a",{className:"quick-nav-item",href:"https://github.com/vaishnav",target:"_blank",children:e(A,{})}),e("a",{className:"quick-nav-item",href:"https://ue837ee2a.artstation.com/",target:"_blank",children:e(D,{})}),e("a",{className:"quick-nav-item",href:"https://www.instagram.com/vaishnav_1024/",target:"_blank",children:e(M,{})})]})]}),e("div",{className:"right",children:e(R,{})})]}),e(f,{}),e(g,{})]});const G=()=>e("div",{children:"Gallery"});function J(){return a(N,{children:[e(C,{}),a(F,{children:[e(m,{path:"/",element:e(B,{})}),e(m,{path:"/project",element:e(f,{})}),e(m,{path:"/gallery",element:e(G,{})}),e(m,{path:"/contact",element:e(g,{})}),e(m,{path:"*",element:e(I,{to:"/"})})]})]})}b.createRoot(document.getElementById("root")).render(e(p.StrictMode,{children:e(J,{})}));
