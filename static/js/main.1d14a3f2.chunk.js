(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},186:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(75),l=a.n(c),o=(a(83),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(53),u=a(51),m=a.n(u),d=a(76),b=a(18),f=a(77),E=a.n(f);a(104);function v(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark Navbar justify-content-between title"},r.a.createElement("h1",{className:"principal"},"BURGER QUEEN"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navbar-text margin-left",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item margin-li"},r.a.createElement("a",{className:"nav-link",href:"#about"},"ORDENAR PEDIDO")),r.a.createElement("li",{className:"nav-item margin-li"},r.a.createElement("a",{className:"nav-link",href:"#about"},"ATENDER PEDIDO")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#about"},"PEDIDO LISTO")))))}var p=a(54);a(105);var g=function(e){var t=e.addUser,a=e.orden,n=e.user,c=e.handleInputChange,l=e.updateItem,o=e.deleteOrden;return r.a.createElement("form",{onSubmit:t,className:"margintop"},r.a.createElement("div",{className:"center orden weigth"},r.a.createElement("p",null,"ORDEN")),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"name"},"Nombre de cliente:",r.a.createElement("input",{type:"text",id:"name",name:"name",value:n.customer,onChange:c,"data-testid":"cliente-input"}))),r.a.createElement("div",{className:"row section"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table weigth"},r.a.createElement("tr",null,r.a.createElement("th",null,"ITEM"),r.a.createElement("th",null,"CANTIDAD"),r.a.createElement("th",null,"P/UNITARIO"),r.a.createElement("th",null,"P/TOTAL"),r.a.createElement("th",null))),r.a.createElement("tbody",{className:"table"},a.length>0?a.map(function(e,t){return r.a.createElement("tr",{"data-testid":"item",key:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"button-count margin-button-count-sum",onClick:function(){var a=Object(p.a)({},e);a.count+=1,l(t,a)},"data-testid":"".concat(t,"-update-button-sum")},r.a.createElement("i",{className:"fas fa-plus"})),e.count,r.a.createElement("button",{type:"button",className:"button-count margin-button-count-substr",onClick:function(){var a=Object(p.a)({},e);a.count-=1,a.count<1&&(a.count=1),l(t,a)},"data-testid":"".concat(t,"-update-button-subs")},r.a.createElement("i",{className:"fas fa-minus"}))),r.a.createElement("td",null,e.value),r.a.createElement("td",null,e.count*e.value),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"button muted-button button-delete",onClick:function(){return o(e.name)},"data-testid":"".concat(t,"-deleteOrden-button")},r.a.createElement("i",{className:"fas fa-trash-alt"}))))}):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No hay pedidos"))),r.a.createElement("tfoot",{className:"table weigth"},r.a.createElement("tr",null,r.a.createElement("th",null,"TOTAL"),r.a.createElement("th",null,a.reduce(function(e,t){return e+t.count*t.value},0)),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null))))),r.a.createElement("div",{className:"margin-button-send weigth"},r.a.createElement("button",{type:"submit","data-testid":"ordenToFirebase-button",className:"button-send"},"ENVIAR A COCINAR")))};a(106);function h(e){var t=e.addOrden,a=e.state,c=Object(n.useState)("Desayuno"),l=Object(b.a)(c,2),o=l[0],i=l[1];return r.a.createElement("div",{className:"background-blue"},r.a.createElement("div",{className:"row button-center margintop margin-filter-bottom"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"button-filter weigth marginsup list-group-item list-group-item-action tabs",type:"button",onClick:function(){return i("Desayuno")},"data-testid":"filter-button-desayuno"},"DESAYUNO")),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"button-filter weigth marginsup list-group-item list-group-item-action tabs",type:"button",onClick:function(){return i("Resto del d\xeda")},"data-testid":"filter-button-restodeldia"},"MEN\xda"))),r.a.createElement("div",{className:"background-blue div-center"},a.filter(function(e){return e.type===o}).map(function(e){return r.a.createElement("div",{key:e.id,className:"row button-center background-white margin-div margin-top div-centerhijo"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:e.img,alt:"imagen de opciones"})),r.a.createElement("div",{className:"col-3 width section centrar1"},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"col-3 width section centrar1"},r.a.createElement("p",null,"$/",e.value,".00")),r.a.createElement("div",{className:"col-3 width section centrar1"},r.a.createElement("button",{key:e.id,className:"addOrden",type:"button",onClick:function(){return t(e.name)},"data-testid":"addOrden-button"},r.a.createElement("i",{id:"addToOrden",className:"fas fa-shopping-cart"}))))})))}var N=a(52),w=a.n(N);w.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var O=w.a,k=(a(186),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){function e(){return(e=Object(d.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()("https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var l=Object(n.useState)([]),o=Object(b.a)(l,2),i=o[0],u=o[1],f=Object(n.useState)({customer:""}),p=Object(b.a)(f,2),N=p[0],w=p[1];return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 background-blue"},r.a.createElement(h,{addOrden:function(e){a.filter(function(t){return t.name===e?u([].concat(Object(s.a)(i),[t])):t})},state:a})),r.a.createElement("div",{className:"col-md-6 background-yellow margin-black"},r.a.createElement(g,{orden:i,deleteOrden:function(e){u(i.filter(function(t){return t.name!==e}))},updateItem:function(e,t){var a=Object(s.a)(i);a[e]=t,u(a)},addUser:function(e){e.preventDefault(),O.firestore().collection("users").add({name:N.customer,orden:i,date:O.firestore.FieldValue.serverTimestamp()}),w({customer:""}),u([])},user:N,handleInputChange:function(e){w({customer:e.target.value})}}))))}),y=(a(187),document.getElementById("root"));l.a.render(r.a.createElement(k,null),y),function(e){if("serviceWorker"in navigator){if(new URL("/LIM008-fe-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LIM008-fe-burger-queen","/service-worker.js");o?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):i(t,e)})}}()},78:function(e,t,a){e.exports=a(188)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.1d14a3f2.chunk.js.map