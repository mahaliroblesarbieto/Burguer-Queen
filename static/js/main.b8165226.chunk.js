(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(75),o=a.n(c),i=(a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(53),m=a(51),u=a.n(m),d=a(76),b=a(18),v=a(77),f=a.n(v);a(104);function p(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark Navbar justify-content-between title"},r.a.createElement("h1",{className:"principal"},"BURGER QUEEN"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navbar-text margin-left",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item margin-li"},r.a.createElement("a",{className:"nav-link",href:"#about"},"ORDENAR PEDIDO")),r.a.createElement("li",{className:"nav-item margin-li"},r.a.createElement("a",{className:"nav-link",href:"#about"},"ATENDER PEDIDO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#about"},"PEDIDO LISTO")))))}var g=a(54);a(105);var E=function(e){var t=e.addUser,a=e.orden,n=e.user,c=e.handleInputChange,o=e.updateItem,i=e.deleteOrden;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t,className:"margintop"},r.a.createElement("div",{className:"center weigth row margin-orden"},"ORDEN"),r.a.createElement("div",{className:"section form-inline margin-option container"},r.a.createElement("div",{className:"row label"},r.a.createElement("label",{htmlFor:"name",className:"label center"},"Nombre de cliente:",r.a.createElement("input",{type:"text",id:"name",name:"name",value:n.customer,onChange:c,"data-testid":"cliente-input"})))),r.a.createElement("div",{className:"container section center"},r.a.createElement("div",{className:"row weigth font-mayor"},r.a.createElement("div",{className:"col-3"},"ITEM"),r.a.createElement("div",{className:"col-3"},"CANTIDAD"),r.a.createElement("div",{className:"col-3"},"P/UNITARIO"),r.a.createElement("div",{className:"col-3"},"P/TOTAL")),a.length>0?a.map(function(e,t){return r.a.createElement("div",{className:"row margin-option center font-menor","data-testid":"item",key:e.id},r.a.createElement("div",{className:"col-3 center"},e.name),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("button",{type:"button",className:"button-count margin-button-count-sum",onClick:function(){var a=Object(g.a)({},e);a.count+=1,o(t,a)},"data-testid":"".concat(t,"-update-button-sum")},r.a.createElement("i",{className:"fas fa-plus"})),e.count,r.a.createElement("button",{type:"button",className:"button-count margin-button-count-substr",onClick:function(){var a=Object(g.a)({},e);a.count-=1,a.count<1&&(a.count=1),o(t,a)},"data-testid":"".concat(t,"-update-button-subs")},r.a.createElement("i",{className:"fas fa-minus"}))),r.a.createElement("div",{className:"col-3 center"},e.value),r.a.createElement("div",{className:"col-3 center"},e.count*e.value,r.a.createElement("button",{type:"button",className:"button muted-button button-delete margin-button-count-substr",onClick:function(){return i(e.name)},"data-testid":"".concat(t,"-deleteOrden-button")},r.a.createElement("i",{className:"fas fa-trash-alt"}))))}):r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"No hay pedidos")),r.a.createElement("div",{className:"row weigth margin-total font-mayor"},r.a.createElement("p",null,"TOTAL:",a.reduce(function(e,t){return e+t.count*t.value},0))),r.a.createElement("div",{className:"margin-button-send weigth"},r.a.createElement("button",{type:"submit","data-testid":"ordenToFirebase-button",className:"button-send"},"ENVIAR A COCINAR")))))};a(106);function N(e){var t=e.addOrden,a=e.state,c=Object(n.useState)("Desayuno"),o=Object(b.a)(c,2),i=o[0],l=o[1];return r.a.createElement("div",{className:"background-menu"},r.a.createElement("div",{className:"row button-center margin-filter-bottom"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"button-filter weigth marginsup list-group-item list-group-item-action",type:"button",onClick:function(){return l("Desayuno")},"data-testid":"filter-button-desayuno"},"DESAYUNO")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"button-filter weigth marginsup list-group-item list-group-item-action",type:"button",onClick:function(){return l("Resto del d\xeda")},"data-testid":"filter-button-restodeldia"},"MEN\xda"))),r.a.createElement("div",{className:"background-blue div-center"},a.filter(function(e){return e.type===i}).map(function(e){return r.a.createElement("div",{key:e.id,className:"row button-center background-white margin-div div-centerhijo padding-option"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:e.img,alt:"imagen de opciones"})),r.a.createElement("div",{className:"col-3 width section centrar font-menor"},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"col-3 width section centrar font-menor"},r.a.createElement("p",null,"$/",e.value,".00")),r.a.createElement("div",{className:"col-3 width section centrar"},r.a.createElement("span",{key:e.id,className:"addOrden",role:"presentation",onClick:function(){return t(e.name)},"data-testid":"addOrden-button"},r.a.createElement("i",{className:"fas fa-shopping-cart"}))))})))}var h=a(52),w=a.n(h);w.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var k=w.a,O=(a(186),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var o=Object(n.useState)([]),i=Object(b.a)(o,2),l=i[0],m=i[1],v=Object(n.useState)({customer:""}),g=Object(b.a)(v,2),h=g[0],w=g[1];return r.a.createElement("div",{className:"width-total"},r.a.createElement("div",{className:"row width-total"},r.a.createElement(p,null)),r.a.createElement("div",{className:"row width-total"},r.a.createElement("div",{className:"col-md-6 background-principal"},r.a.createElement(N,{addOrden:function(e){a.filter(function(t){return t.name===e?m([].concat(Object(s.a)(l),[t])):t})},state:a})),r.a.createElement("div",{className:"col-md-6 background-principal margin-black"},r.a.createElement(E,{orden:l,deleteOrden:function(e){m(l.filter(function(t){return t.name!==e}))},updateItem:function(e,t){var a=Object(s.a)(l);a[e]=t,m(a)},addUser:function(e){e.preventDefault(),k.firestore().collection("users").add({name:h.customer,orden:l,date:k.firestore.FieldValue.serverTimestamp()}),w({customer:""}),m([])},user:h,handleInputChange:function(e){w({customer:e.target.value})}}))))}),y=(a(187),document.getElementById("root"));o.a.render(r.a.createElement(O,{className:"width-total"}),y),function(e){if("serviceWorker"in navigator){if(new URL("/LIM008-fe-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LIM008-fe-burger-queen","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(t,e)})}}()},78:function(e,t,a){e.exports=a(188)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.b8165226.chunk.js.map