(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){},158:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(67),o=a.n(r),l=(a(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(49),u=a(17);a(74);function m(){return c.a.createElement("div",{className:"Navbar"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h1",{className:"title container-fluid"},"BURGER QUEEN")),c.a.createElement("div",{className:"col-6"},c.a.createElement("div",{className:"row margin-top"},c.a.createElement("div",{className:"col-4 margin-div a-center"},c.a.createElement("a",{href:"#about",className:"color"},"ORDENAR PEDIDO")),c.a.createElement("div",{className:"col-4 margin-div a-center"},c.a.createElement("a",{href:"#about",className:"color"},"ATENDER PEDIDO")),c.a.createElement("div",{className:"col-4 a-center"},c.a.createElement("a",{href:"#about",className:"color"},"PEDIDO LISTO"))))))}var d=a(50);a(75);var E=function(e){var t=e.addUser,a=e.orden,n=e.user,r=e.handleInputChange,o=e.updateItem,l=e.deleteOrden;return c.a.createElement("form",{onSubmit:t,className:"margintop"},c.a.createElement("div",{className:"center orden weigth"},c.a.createElement("p",null,"ORDEN")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4 section"},c.a.createElement("p",null,"Nombre de cliente:")),c.a.createElement("div",{className:"col-8 section"},c.a.createElement("input",{type:"text",name:"name",value:n.customer,onChange:r,"data-testid":"cliente-input"}))),c.a.createElement("div",{className:"row section"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"table weigth"},c.a.createElement("tr",null,c.a.createElement("th",null,"ITEM"),c.a.createElement("th",null,"CANTIDAD"),c.a.createElement("th",null,"P/UNITARIO"),c.a.createElement("th",null,"P/TOTAL"),c.a.createElement("th",null))),c.a.createElement("tbody",{className:"table"},a.length>0?a.map(function(e,t){return c.a.createElement("tr",{"data-testid":"item",key:e.id},c.a.createElement("td",null,e.name),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"button-count margin-button-count-sum",onClick:function(){var a=Object(d.a)({},e);a.count+=1,o(t,a)},"data-testid":"".concat(t,"-update-button-sum")},c.a.createElement("i",{className:"fas fa-plus"})),e.count,c.a.createElement("button",{type:"button",className:"button-count margin-button-count-substr",onClick:function(){var a=Object(d.a)({},e);a.count-=1,a.count<1&&(a.count=1),o(t,a)},"data-testid":"".concat(t,"-update-button-subs")},c.a.createElement("i",{className:"fas fa-minus"}))),c.a.createElement("td",null,e.value),c.a.createElement("td",null,e.count*e.value),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"button muted-button button-delete",onClick:function(){return l(e.name)},"data-testid":"".concat(t,"-deleteOrden-button")},c.a.createElement("i",{className:"fas fa-trash-alt"}))))}):c.a.createElement("tr",null,c.a.createElement("td",{colSpan:3},"No hay pedidos"))),c.a.createElement("tfoot",{className:"table weigth"},c.a.createElement("tr",null,c.a.createElement("th",null,"TOTAL"),c.a.createElement("th",null,a.reduce(function(e,t){return e+t.count*t.value},0)),c.a.createElement("th",null),c.a.createElement("th",null),c.a.createElement("th",null))))),c.a.createElement("div",{className:"margin-button-send weigth"},c.a.createElement("button",{type:"submit","data-testid":"ordenToFirebase-button",className:"button-send"},"ENVIAR A COCINAR")))};a(76);function b(e){var t=e.addOrden,a=e.state,r=Object(n.useState)("Desayuno"),o=Object(u.a)(r,2),l=o[0],i=o[1];return c.a.createElement("div",{className:"background-blue"},c.a.createElement("div",{className:"row button-center margintop margin-filter-bottom"},c.a.createElement("div",{className:"col-6 margin-filter"},c.a.createElement("button",{className:"button-filter weigth marginsup",type:"button",onClick:function(){return i("Desayuno")},"data-testid":"filter-button-desayuno"},"DESAYUNO")),c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{className:"button-filter weigth marginsup",type:"button",onClick:function(){return i("Resto del d\xeda")},"data-testid":"filter-button-restodeldia"},"MEN\xda"))),c.a.createElement("div",{className:"background-blue div-center"},a.filter(function(e){return e.type===l}).map(function(e){return c.a.createElement("div",{key:e.id,className:"row button-center background-white margin-div margin-top div-centerhijo"},c.a.createElement("div",{className:"col-3"},c.a.createElement("img",{src:e.img,alt:"imagen de opciones"})),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("p",null,e.name)),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("p",null,"$/",e.value,".00")),c.a.createElement("div",{className:"col-3 width section centrar1"},c.a.createElement("button",{key:e.id,className:"button-addOrden",type:"button",onClick:function(){return t(e.name)},"data-testid":"addOrden-button"},c.a.createElement("i",{className:"fas fa-shopping-cart"}))))})))}var f=a(48),v=a.n(f);v.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var g=v.a,h=(a(156),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){fetch("https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json").then(function(e){return e.json()}).then(function(e){r(e)})},[]);var o=Object(n.useState)([]),l=Object(u.a)(o,2),i=l[0],d=l[1],f=Object(n.useState)({customer:""}),v=Object(u.a)(f,2),h=v[0],p=v[1];return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement(m,null)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 background-blue"},c.a.createElement(b,{addOrden:function(e){a.filter(function(t){return t.name===e?d([].concat(Object(s.a)(i),[t])):t})},state:a})),c.a.createElement("div",{className:"col-md-6 background-yellow margin-black"},c.a.createElement(E,{orden:i,deleteOrden:function(e){d(i.filter(function(t){return t.name!==e}))},updateItem:function(e,t){var a=Object(s.a)(i);a[e]=t,d(a)},addUser:function(e){e.preventDefault();var t=g.firestore();t.settings({timestampsInSnapshots:!0}),t.collection("users").add({name:h.customer,orden:i}),p({customer:""}),d([])},user:h,handleInputChange:function(e){p({customer:e.target.value})}}))))}),p=(a(157),document.getElementById("root"));o.a.render(c.a.createElement(h,null),p),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/custom-sw.js");l?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):i(e)})}}()},68:function(e,t,a){e.exports=a(158)},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.623248e5.chunk.js.map