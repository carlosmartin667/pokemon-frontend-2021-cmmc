(this["webpackJsonppokemon-frontend-2021-cmmc"]=this["webpackJsonppokemon-frontend-2021-cmmc"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)()},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={login:"login",logout:"logout"}},28:function(e,t,n){},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(22),s=n.n(o),r=(n(28),n(9)),i=(n.p,n(29),n(14)),l=n(2),u=n(10),d=n(7),j=n(13),b=n(1),h=function(e){var t=e.auth,n=e.component,c=Object(j.a)(e,["auth","component"]);return Object(b.jsx)(l.b,Object(d.a)(Object(d.a)({},c),{},{component:function(e){return t.log?Object(b.jsx)(l.a,{to:"/"}):Object(b.jsx)(n,Object(d.a)({},e))}}))},m=n(15),p=n.n(m),f=n(20),g=n(12),O=function(e){var t=Object(c.useContext)(u.a).dispatch,n=Object(c.useState)({}),a=Object(r.a)(n,2),o=a[0],s=a[1],i=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,s({imgJuego:c.sprites.front_default,nombre:c.name,experiencia:c.base_experience,hp:c.stats[0].base_stat,ataque:c.stats[1].base_stat,defensa:c.stats[2].base_stat,especial:c.stats[3].base_stat}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e,t,n=(e=1,t=152,Math.floor(Math.random()*(t-e))+e);i(n)}),[]),{handleLogin:function(){t({type:g.a.login}),e.push("/")},pokemonData:o}},x=function(e){var t=e.history,n=O(t),c=n.handleLogin,a=n.pokemonData,o=a.imgJuego,s=a.nombre,r=a.experiencia,i=a.hp,l=a.ataque,u=a.defensa,d=a.especial;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"conatainer text-center",children:Object(b.jsx)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-ride":"carousel",children:Object(b.jsx)("div",{className:"carousel-inner",children:Object(b.jsx)("div",{className:"carousel-item active",children:Object(b.jsx)("img",{src:"https://phantom-marca.unidadeditorial.es/2a6bb9293b020d388e4c1b1d3e640f1a/resize/1320/f/jpg/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg",className:"d-block w-100",alt:"...",width:"500",height:"400"})})})})}),Object(b.jsx)("div",{className:"row justify-content-md-center ",children:Object(b.jsxs)("div",{className:"card mb-3  bg",style:{maxWidth:540},children:[Object(b.jsxs)("div",{className:"row g-0 ",children:[Object(b.jsx)("div",{className:"col-md-4 mt-4",children:Object(b.jsx)("img",{loading:"lazy",className:"card-img-top",style:{width:"100%"},src:o,alt:s,height:"200"})}),Object(b.jsx)("div",{className:"col-md-8",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h3",{children:s}),Object(b.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(b.jsxs)("li",{className:"list-group-item",children:["ataque : ",l]}),Object(b.jsxs)("li",{className:"list-group-item",children:["defensa : ",u]}),Object(b.jsxs)("li",{className:"list-group-item",children:["especial : ",d]}),Object(b.jsxs)("li",{className:"list-group-item",children:["experiencia : ",r]}),Object(b.jsxs)("li",{className:"list-group-item",children:["hp : ",i]})]})]})})]}),Object(b.jsx)("button",{type:"button",onClick:c,className:"btn btn-outline-primary my-3",children:"ENTRAR"})]})})]})},v=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,47))})),w=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,43))})),k=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,46))})),N=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,48))})),y=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,44))})),S=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(c.Suspense,{fallback:Object(b.jsx)("h1",{children:".."}),children:[Object(b.jsx)(N,{}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/home",component:y}),Object(b.jsx)(l.b,{exact:!0,path:"/searchs",component:k}),Object(b.jsx)(l.b,{exact:!0,path:"/Detalles/:id",component:v}),Object(b.jsx)(l.a,{to:"/home"})]}),Object(b.jsx)(w,{})]})})},W=function(e){var t=e.auth,n=e.component,c=Object(j.a)(e,["auth","component"]);return Object(b.jsx)(l.b,Object(d.a)(Object(d.a)({},c),{},{component:function(e){return t.log?Object(b.jsx)(n,Object(d.a)({},e)):Object(b.jsx)(l.a,{to:"/login"})}}))},C=function(e){var t=Object(c.useContext)(u.a).log;return Object(b.jsx)(i.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(h,{path:"/login",auth:t,component:x}),Object(b.jsx)(W,{path:"/",auth:t,component:S})]})})},z=function(e,t){switch(t.type){case g.a.login:return{log:!0};case g.a.logout:return{log:!1};default:return e}};var E=function(){var e=function(){var e=Object(c.useReducer)(z,{},(function(){return JSON.parse(localStorage.getItem("log"))||{log:!1}})),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){localStorage.setItem("log",JSON.stringify(n))}),[n]),[n,a]}(),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)(u.a.Provider,{value:{log:n,dispatch:a},children:Object(b.jsx)(C,{})})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};n(37);s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokemon-frontend-2021-cmmc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pokemon-frontend-2021-cmmc","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):J(t,e)}))}}(),L()}},[[38,1,2]]]);
//# sourceMappingURL=main.e802ade3.chunk.js.map