"use strict";(self.webpackChunkour_lists_react=self.webpackChunkour_lists_react||[]).push([[667],{667:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var a=s(791),i=s(689),l=s(184);const n=t=>{const e=(0,i.s0)(),[s,n]=(0,a.useState)(!1),[r,c]=(0,a.useState)(""),[o,u]=(0,a.useState)(!1),[g,d]=(0,a.useState)(!1),p=(0,a.useRef)(r);return(0,l.jsxs)("div",{id:"content",children:[(0,l.jsxs)("div",{id:"header",children:[(0,l.jsx)("img",{id:"back",src:"https://cdn.glitch.global/a505ce02-f570-40df-ad76-697af5e6acd7/back.png?v=1703820361532",alt:"back",onClick:()=>{n(!0),setTimeout((()=>{n(!1),e("/")}),1e3)},style:s?{animation:"button-press .75s"}:null}),(0,l.jsx)("p",{children:"number"===t.pageType?"Join List":"Create List"})]}),(0,l.jsx)("img",{id:"story",src:t.storyImg,alt:"Action Img"}),(0,l.jsxs)("div",{className:"input-section",children:["number"===t.pageType?(0,l.jsx)("input",{className:"user-input",type:"number",placeholder:"Join code",name:"list",id:"list",onChange:t=>{c(t.target.value),p.current=t.target.value},required:!0}):(0,l.jsx)("input",{className:"user-input",type:"text",placeholder:"List name",name:"list",id:"list",onChange:t=>{c(t.target.value),p.current=t.target.value},required:!0}),(0,l.jsx)("button",{onClick:"number"===t.pageType?()=>{var t;t=p.current,fetch("https://our-lists.glitch.me/joinList/".concat(t)).then((t=>t.json())).then((s=>{!1===s.found?u(!0):localStorage.getItem("lists")?(JSON.parse(localStorage.getItem("lists")).includes(parseInt(t))&&e("/list/".concat(t)),localStorage.setItem("lists",JSON.stringify([...JSON.parse(localStorage.getItem("lists")),parseInt(t)])),e("/list/".concat(t))):(localStorage.setItem("lists",JSON.stringify([parseInt(t)])),e("/list/".concat(t)))}))}:()=>{var t;t=p.current,fetch("https://our-lists.glitch.me/createList",{method:"POST",body:JSON.stringify({name:t}),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>{localStorage.getItem("lists")?(localStorage.setItem("lists",JSON.stringify([...JSON.parse(localStorage.getItem("lists")),t.code])),e("/list/".concat(t.code))):(localStorage.setItem("lists",JSON.stringify([t.code])),e("/list/".concat(t.code)))})).catch((t=>console.log(t)))},type:"submit",children:"number"===t.pageType?"Join":"Create"}),o?(0,l.jsx)("p",{id:"error-msg",children:"No list found with that code"}):null]})]})}}}]);
//# sourceMappingURL=667.09528b09.chunk.js.map