"use strict";(self.webpackChunkoccamfilter=self.webpackChunkoccamfilter||[]).push([[413],{2792:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return p}});var l=a(4506),n=a(4164),r=a(6540),c=a(7986),s=a(3112);const i={game:"",leagueVersion:"",leagueName:"",id:(0,s.gZ)(),name:"",lastUpdated:new Date,description:"",categories:[]},o=(0,r.createContext)({filter:i,setFilter:()=>{}}),m=(0,r.createContext)({category:null,setCategory:()=>{}});function d(){const{filter:e,setFilter:t}=(0,r.useContext)(o),{category:a,setCategory:i}=(0,r.useContext)(m),d=a?e.categories.indexOf(a):-1;return r.createElement("div",{className:"flex w-[20ch] flex-col"},e.categories.map(((a,l)=>r.createElement("div",{key:a.id,className:(0,n.A)("w-full items-center border-b border-r border-neutral-500 text-left text-xl",{"border-b-0 border-r-0 font-bold":l===d,"rounded-tr-md border-t":l===d+1,"rounded-br-md":l===d-1,"text-neutral-400 hover:text-teal-500":l!==d})},r.createElement(c.Fo,{className:(0,n.A)("mx-3 my-4 w-full truncate text-left",{hidden:l!==d}),text:a.name,placeholder:"category...",onTextChange:l=>function(a,l){a=Object.assign({},a,{name:l}),t(Object.assign({},e,{categories:e.categories.map((e=>e.id===a.id?a:e))})),i(a)}(a,l)}),r.createElement("button",{className:(0,n.A)("w-full truncate px-3 py-4 text-left",{hidden:l===d}),onClick:()=>function(e){i(e)}(a)},a.name?a.name:"...")))),r.createElement("div",{className:(0,n.A)("flex w-[20ch] flex-grow border-r border-neutral-500 px-2 pt-8",{"rounded-tr-md border-t":d===e.categories.length-1})},r.createElement(c.K0,{icon:"mingcute:file-new-line",text:"New category",onClick:function(){const a={id:(0,s.gZ)(),name:"",rules:[]};t(Object.assign({},e,{categories:[].concat((0,l.A)(e.categories),[a])})),i(a)}})))}function u(e){let{action:t,config:a}=e;return r.createElement("div",{className:"flex flex-row"},r.createElement("div",{style:{width:a.width+"ch"},className:"border-b border-neutral-500"},t.label),r.createElement("div",{className:"truncate border-b border-neutral-500 pe-2 ps-2"},t.value))}function f(e){let{condition:t,config:a}=e;return r.createElement("div",{className:"flex flex-row"},r.createElement("div",{style:{width:a.width+"ch"},className:"border-b border-neutral-500"},t.label),r.createElement("div",{className:"truncate border-b border-neutral-500 pe-2 ps-2"},t.value))}function x(e){let{rule:t}=e;const{filter:a,setFilter:s}=(0,r.useContext)(o),{category:i,setCategory:d}=(0,r.useContext)(m),{0:x,1:g}=(0,r.useState)(!1),b=[].concat((0,l.A)(t.actions),(0,l.A)(t.conditions)).reduce(((e,t)=>Math.max(t.label.length,e)),0);return r.createElement("div",{className:"flex w-full flex-col rounded-md border border-neutral-500"},r.createElement("div",{className:(0,n.A)("flex w-full flex-row justify-between space-x-2 rounded-t-md bg-neutral-900 px-2 py-2",{"rounded-b-md":!x})},r.createElement(c.K0,{icon:x?"mingcute:square-arrow-up-line":"mingcute:square-arrow-down-line",onClick:()=>g(!x)}),r.createElement("div",{className:"flex-grow font-bold"},r.createElement(c.Fo,{text:t.name,placeholder:"rule...",onTextChange:function(e){if(!i)return;const l=Object.assign({},i,{rules:i.rules.map((a=>a.id===t.id?Object.assign({},a,{name:e}):a))});s(Object.assign({},a,{categories:a.categories.map((e=>e.id===l.id?l:e))})),d(l)}})),r.createElement(c.K0,{icon:"mingcute:delete-2-line",onClick:function(){if(!i)return;const e=Object.assign({},i,{rules:i.rules.filter((e=>e!==t))});s(Object.assign({},a,{categories:a.categories.map((t=>t.id===e.id?e:t))})),d(e)}})),x&&r.createElement("div",{className:"w-full rounded-b-md bg-neutral-950 px-3 py-2"},r.createElement("div",{className:"mb-2 flex h-28 flex-col items-center justify-center bg-slate-800"},r.createElement("div",null,"Filter rule preview"),r.createElement("div",null,"Coming some day")),r.createElement("div",{className:"text-neutral-400"},"Actions"),r.createElement("div",{className:"flex flex-col space-y-1"},t.actions.map((e=>r.createElement(u,{key:e.id,action:e,config:{width:b}})))),r.createElement("div",{className:"mt-4 text-neutral-400"},"Conditions"),r.createElement("div",{className:"mb-2 flex flex-col space-y-1"},t.conditions.map((e=>r.createElement(f,{key:e.id,condition:e,config:{width:b}}))))))}function g(){const{filter:e,setFilter:t}=(0,r.useContext)(o),{category:a,setCategory:n}=(0,r.useContext)(m);return r.createElement("div",{className:"flex w-full"},a&&r.createElement("div",{className:"flex w-full flex-col space-y-2 px-4 py-2"},a.rules.map((e=>r.createElement(x,{rule:e,key:e.id}))),r.createElement("div",{className:"ps-2"},r.createElement(c.K0,{icon:"mingcute:add-square-line",text:"New rule",onClick:function(){if(!a)return;const r=Object.assign({},a,{rules:[].concat((0,l.A)(a.rules),[{id:(0,s.gZ)(),name:"",description:"",actions:[],conditions:[]}])});t(Object.assign({},e,{categories:e.categories.map((e=>e.id===r.id?r:e))})),n(r)}})),r.createElement("div",{className:"flex-grow"}),r.createElement("button",{className:"self-end hover:text-teal-500",onClick:function(){const l=Math.max(e.categories.indexOf(a)-1,0),r=e.categories.filter((e=>e!==a));t(Object.assign({},e,{categories:r})),n(r[l])}},"Delete category")))}var b=a(6543),E=a(1042);function p(e){let{data:t,params:a}=e;const{version:l,"*":n}=a,u=(0,s.aP)(l,n);if(!u&&n)return r.createElement(w,null);const f=t.allPoeMetadata.nodes.map((e=>({name:e.league,version:e.version}))),{0:x,1:E}=(0,r.useState)(u||Object.assign({},i,{game:l,id:(0,s.gZ)(),leagueVersion:f[0].version,leagueName:f[0].name})),{0:p,1:v}=(0,r.useState)(x.categories[0]);return(0,r.useEffect)((()=>{console.log("saveFilter: ",x)}),[x]),r.createElement(b.A,null,r.createElement(o.Provider,{value:{filter:x,setFilter:E}},r.createElement(m.Provider,{value:{category:p,setCategory:v}},r.createElement("div",{className:"flex h-full justify-center"},r.createElement("div",{className:"flex w-[900px] flex-col space-y-2"},r.createElement("div",{className:"flex flex-row items-center space-x-4 pt-2"},r.createElement("div",{className:"w-44"},r.createElement(c.Fo,{className:"truncate px-3 text-lg",text:x.name,placeholder:"filter name...",onTextChange:e=>E(Object.assign({},x,{name:e}))})),r.createElement("div",{className:"flex-grow"}),r.createElement(c.ms,{data:f.map((e=>({text:e.name,value:e}))),onSelected:()=>{}})),r.createElement("div",{className:"flex h-full flex-row rounded-md border border-neutral-500"},r.createElement(d,null),r.createElement(g,null)))))))}const v=()=>r.createElement(E.A,{title:""});function w(){return r.createElement(b.A,null,r.createElement("div",{className:"font-ubuntu flex flex-col items-center space-y-6 pt-24"},r.createElement("div",{className:"text-4xl"},"Exile!"),r.createElement("div",{className:"text-3xl"},"Your filter is in another browser!"),r.createElement("div",{className:"w-[38ch] whitespace-pre-wrap"},"░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░ ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░ ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░ ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░ ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░ ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░ ░░░░░le░░░░░░░▐░░░░▐█████████████▄ ░░░░toucan░░░░░░▀▄░░░▐█████████████▄ ░░░░░░has░░░░░░░░▀▄▄███████████████ ░░░░░arrived░░░░░░░░░░░░█▀██████░░")))}}}]);
//# sourceMappingURL=component---src-pages-game-version-filter-tsx-e43f8140b2e915f92388.js.map