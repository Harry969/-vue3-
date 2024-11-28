import{d,s as o,y as p,o as f,c as m,b as a,G as v,H as _,h as g,e as w,f as u}from"./app-zVVW9CMR.js";const h={class:"box"},x=["src"],z=["src"],k=d({__name:"AnimatedBackground",props:{modelValue:{default:""}},setup(r){const l=r,e=o(""),c=o(null),n=o(null);p(()=>l.modelValue,async(s,i)=>{e.value=i,t()});async function t(){c.value&&c.value.animate({transform:["scale(1)","scale(1.3)"],opacity:[1,0],filter:["blur(0px)","blur(20px)"]},{duration:400,fill:"forwards"}),n.value&&n.value.animate({transform:["scale(1.5)","scale(1)"],opacity:[0,1],filter:["blur(10px)","blur(0px)"]},{duration:400,fill:"forwards"})}return(s,i)=>(f(),m("div",h,[a("img",{ref_key:"realRef",ref:n,src:l.modelValue},null,8,x),v(a("img",{ref_key:"fakeRef",ref:c,class:"fake",src:e.value},null,8,z),[[_,e.value]])]))}}),V=g(k,[["__scopeId","data-v-b400a9e2"]]),b={class:"pointer-events-none relative z-[2] h-full w-full overflow-hidden rounded-[10px]"},B=d({__name:"SwitchImage",setup(r){const l=["/static/main_1.png","/static/main_4.png","/static/main_5.png","/static/main_6.png","/static/main_7.png"],e=o(0);function c(){e.value=(e.value+1)%l.length}return(n,t)=>(f(),m("div",null,[a("div",b,[w(V,{modelValue:l[u(e)],"onUpdate:modelValue":t[0]||(t[0]=s=>l[u(e)]=s)},null,8,["modelValue"])]),a("div",{class:"pointer-events-auto absolute left-1/2 top-1/2 z-[99] h-16 w-16 cursor-pointer rounded-[6px] text-white transition-colors duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 !select-none hover:bg-[#FFFFFF30]",onClick:t[1]||(t[1]=s=>c())},t[2]||(t[2]=[a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},[a("g",{fill:"currentColor","fill-rule":"evenodd"},[a("path",{d:"M47.895 88.097c.001-4.416 3.064-9.837 6.854-12.117l66.257-39.858c3.785-2.277 9.915-2.277 13.707.008l66.28 39.934c3.786 2.28 6.853 7.703 6.852 12.138l-.028 79.603c-.001 4.423-3.069 9.865-6.848 12.154l-66.4 40.205c-3.781 2.29-9.903 2.289-13.69-.01l-66.167-40.185c-3.78-2.295-6.842-7.733-6.84-12.151l.023-79.72zm13.936-6.474l65.834 36.759l62.766-36.278l-62.872-36.918L61.83 81.623zM57.585 93.52c0 1.628-1.065 71.86-1.065 71.86c-.034 2.206 1.467 4.917 3.367 6.064l61.612 37.182l.567-77.413s-64.48-39.322-64.48-37.693zm76.107 114.938l60.912-38.66c2.332-1.48 4.223-4.915 4.223-7.679V93.125l-65.135 37.513v77.82z"}),a("path",{d:"M77.76 132.287c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm-32 16c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm32 21c-4.782 2.762-11.122.735-14.16-4.526c-3.037-5.261-1.622-11.765 3.16-14.526c4.783-2.762 11.123-.735 14.16 4.526c3.038 5.261 1.623 11.765-3.16 14.526zm78.238-78.052c-4.783-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.623 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-16.238 29c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zm-17 28c-4.782-2.762-11.122-.735-14.16 4.526c-3.037 5.261-1.622 11.765 3.16 14.526c4.783 2.762 11.123.735 14.16-4.526c3.038-5.261 1.623-11.765-3.16-14.526zM128.5 69c-6.351 0-11.5 4.925-11.5 11s5.149 11 11.5 11S140 86.075 140 80s-5.149-11-11.5-11z"})])],-1)]))]))}});export{B as default};
