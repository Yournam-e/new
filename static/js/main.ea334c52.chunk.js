(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{142:function(e,t,c){},143:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(16),s=c.n(i),r=c(10),a=c.n(r),o=c(25),j=c(15),d=c(21),l=c.n(d),b=c(8),h=(c(136),c(20)),p=c(7),O=Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY.toString;console.log("${API_KEY}");var u=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(p.jsxs)(b.j,{id:t,children:[Object(p.jsx)(b.k,{children:"Examplese"}),n&&Object(p.jsx)(b.h,{header:Object(p.jsx)(b.i,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(p.jsx)(b.e,{before:n.photo_200?Object(p.jsx)(b.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(p.jsx)(b.h,{header:Object(p.jsx)(b.i,{mode:"secondary",children:"Navigation Example"}),children:Object(p.jsx)(b.g,{children:Object(p.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:O})})}),Object(p.jsx)(h.AppleMaps,{token:"${API_KEY}",longitude:30.8008,latitude:-1.5491,zoomLevel:2,height:"1000px",width:"1000px"})]})},x=c.p+"static/media/persik.ae9f0072.png",f=(c(142),function(e){return Object(p.jsxs)(b.j,{id:e.id,children:[Object(p.jsx)(b.k,{left:Object(p.jsx)(b.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(p.jsx)("img",{className:"Persik",src:x,alt:"Persik The Cat"})]})}),m=function(){var e=Object(n.useState)("bright_light"),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)("home"),r=Object(j.a)(s,2),d=r[0],h=r[1],O=Object(n.useState)(null),x=Object(j.a)(O,2),m=x[0],g=x[1],_=Object(n.useState)(Object(p.jsx)(b.m,{size:"large"})),E=Object(j.a)(_,2),k=E[0],v=E[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,g(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;"VKWebAppUpdateConfig"===c&&i(n.scheme)})),function(){e.apply(this,arguments)}()}),[]);var S=function(e){h(e.currentTarget.dataset.to)};return Object(p.jsx)(b.f,{scheme:c,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(b.b,{children:Object(p.jsx)(b.o,{popout:k,children:Object(p.jsx)(b.n,{children:Object(p.jsxs)(b.p,{activePanel:d,children:[Object(p.jsx)(u,{id:"home",fetchedUser:m,go:S}),Object(p.jsx)(f,{id:"persik",go:S})]})})})})})})};a.a.send("VKWebAppInit"),s.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.ea334c52.chunk.js.map