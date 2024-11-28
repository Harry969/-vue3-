import{i as S,t as L}from"./dark-PeH-7L3Y.js";import{I as z}from"./iconify-CYK8mek9.js";import{d as v,o as n,c as m,f as t,g as _,h as T,w as d,i as H,n as A,j as V,k as $,e as p,m as q,l as Q,p as j,q as U,s as D,v as W,x as b,y as X,r as B,b as g,z as N,F as O,A as R,B as Y,t as M,C as F,D as Z,E as ee,G as te,H as oe,T as E,I as ne,K as se,J as ae}from"./app-zVVW9CMR.js";import{x as re,E as le,I as ie,$ as ce,c as de,D as pe,P as ue}from"./shadcn-vue-utils-D88rhJQu.js";import{c as fe}from"./index-Ber_-xc0.js";const me=v({__name:"DarkToggle",setup(f){return(o,l)=>(n(),m("button",{class:"!outline-none",onClick:l[0]||(l[0]=(...i)=>("toggleDark"in o?o.toggleDark:t(L))&&("toggleDark"in o?o.toggleDark:t(L))(...i))},[("isDark"in o?o.isDark:t(S))?(n(),_(t(z),{key:0,class:"h-[16px] w-[16px]",icon:"carbon-moon"})):(n(),_(t(z),{key:1,class:"h-[16px] w-[16px]",icon:"carbon-sun"}))]))}}),_e="/Harry969.github.io/logo.svg",he={},ge={class:"mt-[0px] block h-[40px] w-[40px] md:mt-0 md:h-[56px] md:w-[56px]",src:_e,alt:""};function ve(f,o){return n(),m("img",ge)}const xe=T(he,[["render",ve]]),ye=v({__name:"HoverCard",props:{defaultOpen:{type:Boolean},open:{type:Boolean},openDelay:{},closeDelay:{}},emits:["update:open"],setup(f,{emit:o}){const a=re(f,o);return(r,k)=>(n(),_(t(le),A(V(t(a))),{default:d(()=>[H(r.$slots,"default")]),_:3},16))}}),we=v({__name:"HoverCardContent",props:{forceMount:{type:Boolean},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},updatePositionStrategy:{},prioritizePosition:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(f){const o=f,l=$(()=>{const{class:a,...r}=o;return r}),i=ie(l);return(a,r)=>(n(),_(t(pe),null,{default:d(()=>[p(t(ce),q(t(i),{class:t(de)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o.class)}),{default:d(()=>[H(a.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),be=v({__name:"HoverCardTrigger",props:{asChild:{type:Boolean},as:{}},setup(f){const o=f;return(l,i)=>(n(),_(t(ue),A(V(o)),{default:d(()=>[H(l.$slots,"default")]),_:3},16))}}),ke={class:"nav-container"},Ce={class:"flex flex-col items-center justify-start text-[14px]"},$e=v({__name:"Nav",setup(f){Q(e=>({"2688e6d8":t(i)}));const o=j(),l=U(),i=$(()=>S.value?"unset":"difference"),a={width:80,height:28,padding:5},r=D(-2),k=$(()=>({width:`${a.width}px`,height:`${a.height}px`,transform:`
      translate(
        ${r.value*a.width+a.padding}px,
        5px
      )
    `})),s=D();W(()=>{const e=b.find(c=>c.route===o.path);e&&u(e,b.indexOf(e))}),X(()=>o.path,e=>{const c=b.find(C=>C.route===o.path);c&&u(c,b.indexOf(c)),b.map(C=>C.route).includes(e)||y()});function u(e,c){l.value=e.label==="组件"?"Harry":e.label,r.value=c,x()}function x(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(1, 1, 1)"],c=[1,1];if(s.value){const w=s.value.animate({transform:e,opacity:c},{duration:900,fill:"forwards"});w.onfinish=()=>{}}}function y(){const e=["scale3d(1, 1, 1)","scale3d(1.25, 0.75, 1)","scale3d(0.75, 1.25, 1)","scale3d(1.15, 0.85, 1)","scale3d(0.95, 1.05, 1)","scale3d(1.05, 0.95, 1)","scale3d(0.97, 1.03, 1)","scale3d(0, 0, 1)"],c=[1,0];if(s.value){const w=s.value.animate({transform:e,opacity:c},{duration:900,fill:"forwards"});w.onfinish=()=>{}}}return(e,c)=>{const w=B("router-link"),C=be,J=we,G=ye,K=B("ClientOnly");return n(),_(K,null,{default:d(()=>[g("div",ke,[(n(!0),m(O,null,N(t(b),h=>(n(),m("div",{key:h.label},[p(G,{"open-delay":0,"close-delay":0},{default:d(()=>{var P;return[p(C,null,{default:d(()=>[p(w,{to:h.route,replace:"",class:"nav-item",style:R({height:`${a.height}px`,width:`${a.width}px`})},{default:d(()=>[Y(M(h.label),1)]),_:2},1032,["to","style"])]),_:2},1024),((P=h==null?void 0:h.children)==null?void 0:P.length)>0?(n(),_(J,{key:0,"side-offset":15,class:"w-[120px]! p-[4px]!"},{default:d(()=>[g("div",Ce,[(n(!0),m(O,null,N(h.children,I=>(n(),m("div",{key:I.label,class:"option-item h-10 w-full flex cursor-pointer items-center justify-center"},M(I.label),1))),128))])]),_:2},1024)):F("",!0)]}),_:2},1024)]))),128)),g("div",{style:R(t(k)),class:"pointer-events-none absolute left-0 top-0 transition-transform duration-300 ease-in-out"},[g("div",{ref_key:"bgInnerRef",ref:s,class:"h-full w-full rounded-[50px] bg-[var(--nav-placeholder-bg)]"},null,512)],4)])]),_:1})}}}),Be=T($e,[["__scopeId","data-v-f5b46f96"]]),De={id:"nav-bg",class:"fixed left-0 top-0 z-[2] h-fit w-full flex flex-row items-center justify-between px-[3.5vw] py-[18px] md:h-[80px] md:py-unset"},Te={class:"grid h-[40px] w-[40px] place-items-center"},He=v({__name:"index",setup(f){return(o,l)=>{const i=me;return n(),m("div",De,[p(xe),p(Be),g("div",Te,[p(i)])])}}}),Pe=T(He,[["__scopeId","data-v-0216a5e7"]]),Ie=["src","alt"],Me=v({__name:"default",setup(f){const o=j(),l=["/blog/content-sidebar"],i=$(()=>l.includes(o.path)),a=Z("(min-width: 720px)"),r=D();return ee("click",async k=>{const s=Array.from(k.composedPath()),u=s[0];if(!(u instanceof HTMLElement)||u.tagName!=="IMG"||u.classList.contains("no-preview")||s.some(e=>e instanceof HTMLElement&&["A","BUTTON"].includes(e.tagName))||!s.some(e=>e instanceof HTMLElement&&e.classList.contains("prose")))return;const x=u.getBoundingClientRect();await new Promise(e=>setTimeout(e,50));const y=u.getBoundingClientRect();x.left!==y.left||x.top!==y.top||(r.value=u)}),(k,s)=>{const u=Pe,x=B("RouterView"),y=B("client-only");return n(),m("main",{id:"main-root",class:ae(["bg-[var(--bg-main-color)]",t(i)?"":"pt-[100px] pb-20 px-[10px] md:px-5 overflow-x-hidden min-h-screen md:pt-[112px] "])},[te(p(u,null,null,512),[[oe,!t(a)||!t(i)]]),p(x,null,{default:d(({Component:e})=>[p(E,{name:t(fe)||"page",mode:"out-in"},{default:d(()=>[(n(),_(se,null,[(n(),_(ne(e)))],1024))]),_:2},1032,["name"])]),_:1}),p(E,{name:"fade"},{default:d(()=>[t(r)?(n(),m("div",{key:0,class:"fixed bottom-0 left-0 right-0 top-0 z-[500] backdrop-blur",onClick:s[0]||(s[0]=e=>r.value=void 0)},[s[1]||(s[1]=g("div",{class:"absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-black:30"},null,-1)),g("img",{class:"mx-auto h-[calc(100%_-_20px)] mt-[10px] w-[calc(100%_-_20px)] object-contain",src:t(r).src,alt:t(r).alt},null,8,Ie)])):F("",!0)]),_:1}),p(y)],2)}}});export{Me as default};
