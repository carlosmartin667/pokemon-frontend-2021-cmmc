(this["webpackJsonppokemon-frontend-2021-cmmc"]=this["webpackJsonppokemon-frontend-2021-cmmc"]||[]).push([[7],{47:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(2),n=s(15),i=s.n(n),r=s(20),l=s(9),o=s(1);t.default=function(e){var t=function(e,t){var s=Object(a.useState)({}),c=Object(l.a)(s,2),n=c[0],o=c[1],m=function(){var e=Object(r.a)(i.a.mark((function e(t){var s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,o({imgJuego:a.sprites.front_default,nombre:a.name,experiencia:a.base_experience,hp:a.stats[0].base_stat,ataque:a.stats[1].base_stat,defensa:a.stats[2].base_stat,especial:a.stats[3].base_stat}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){m(t)}),[]),{pokemonData:n,volver:function(){e.goBack()}}}(e.history,Object(c.i)().id),s=t.pokemonData,n=t.volver,m=s.ataque,d=s.defensa,p=s.especial,u=s.experiencia,b=s.hp,j=s.imgJuego,h=s.nombre;return console.log(s),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"conatainer mx-5 mt-4",children:[Object(o.jsx)("div",{className:"card mb-3 text-white bg-dark",style:{maxWidth:540},children:Object(o.jsxs)("div",{className:"row g-0",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("img",{loading:"lazy",className:"card-img-top",style:{width:"100%"},src:j,alt:h,height:"200"})}),Object(o.jsx)("div",{className:"col-md-8",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:h}),Object(o.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(o.jsxs)("li",{className:"list-group-item",children:["ataque : ",m]}),Object(o.jsxs)("li",{className:"list-group-item",children:["defensa : ",d]}),Object(o.jsxs)("li",{className:"list-group-item",children:["especial : ",p]}),Object(o.jsxs)("li",{className:"list-group-item",children:["experiencia : ",u]}),Object(o.jsxs)("li",{className:"list-group-item",children:["hp : ",b]})]})]})})]})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:n,children:" volver"})]})})}}}]);
//# sourceMappingURL=7.83107e0b.chunk.js.map