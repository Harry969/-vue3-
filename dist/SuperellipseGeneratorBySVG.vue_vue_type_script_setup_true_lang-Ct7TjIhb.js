import{d as $,s as r,aA as M,v as B,o as b,c as S,b as k,f as n}from"./app-zVVW9CMR.js";const A=["viewBox"],C=["d"],T=$({__name:"SuperellipseGeneratorBySVG",async setup(V){let s,i;const c=r("");c.value=([s,i]=M(()=>g()),s=await s,i(),s);const h=r(null),e=r({x:0,y:0,width:200,height:200});B(()=>{const t=h.value.getBBox();e.value={x:t.x,y:t.y,width:t.width,height:t.height}});async function g(t=50,l=50,w=4,d=4,_=360){const y=2/w,f=2/d;return`${(await Array.from({length:_},(o,a)=>{const p=a*2*Math.PI/_,u=Math.cos(p),x=Math.sin(p),m=Math.abs(u)**y*t*Math.sign(u),v=Math.abs(x)**f*l*Math.sign(x);return{x:m,y:v}})).map((o,a)=>`${a===0?"M":"L"} ${o.x} ${o.y}`).join(" ")} Z`}return(t,l)=>(b(),S("svg",{viewBox:`${n(e).x} ${n(e).y} ${n(e).width} ${n(e).height}`,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},[k("path",{ref_key:"$path",ref:h,d:n(c),fill:"currentColor"},null,8,C)],8,A))}});export{T as _};
