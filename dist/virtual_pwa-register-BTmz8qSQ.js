import{_ as f}from"./app-zVVW9CMR.js";function l(s={}){const{immediate:o=!1,onNeedRefresh:_,onOfflineReady:d,onRegistered:i,onRegisteredSW:a,onRegisterError:t}=s;let r,n;const c=async(e=!0)=>{await n};async function u(){if("serviceWorker"in navigator){if(r=await f(async()=>{const{Workbox:e}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:e}},[]).then(({Workbox:e})=>new e("/Harry969.github.io/sw.js",{scope:"/Harry969.github.io/",type:"classic"})).catch(e=>{t==null||t(e)}),!r)return;r.register({immediate:o}).then(e=>{a?a("/Harry969.github.io/sw.js",e):i==null||i(e)}).catch(e=>{t==null||t(e)})}}return n=u(),c}export{l as registerSW};
