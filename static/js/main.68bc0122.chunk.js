(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(3),c=t.n(r),i=(t(9),t(1)),l=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},s=function(e){var n=e.robots;return a.a.createElement("div",null,n.map((function(e,t){return a.a.createElement(l,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},u=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},f=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)};t(10);var d=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(""),l=Object(i.a)(c,2),d=l[0],h=l[1],m=Object(o.useState)(0),g=Object(i.a)(m,2),b=g[0],v=g[1];Object(o.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),Object(o.useEffect)((function(){console.log(b)}),[b]);var p=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return t.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement("button",{onClick:function(){return v(b+1)}}," Click Me!"),a.a.createElement(u,{searchChange:function(e){h(e.target.value)}}),a.a.createElement(f,null,a.a.createElement(s,{robots:p}))):a.a.createElement("h1",null,"Loading")},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(11);c.a.render(a.a.createElement(d,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends-hooks",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends-hooks","/service-worker.js");h?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):m(e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.68bc0122.chunk.js.map