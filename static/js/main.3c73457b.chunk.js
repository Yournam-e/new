(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{142:function(e,t,c){},143:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(16),s=c.n(n),a=c(10),r=c.n(a),o=c(25),l=c(15),j=c(21),d=c.n(j),b=c(8),O=(c(136),c(20)),p=c(4),h=Object({NODE_ENV:"production",PUBLIC_URL:"/new",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,u=function(e){var t=e.id,c=e.go,i=e.fetchedUser;return Object(p.jsxs)(b.j,{id:t,children:[Object(p.jsx)(b.k,{children:"Examplese"}),i&&Object(p.jsx)(b.h,{header:Object(p.jsx)(b.i,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(p.jsx)(b.e,{before:i.photo_200?Object(p.jsx)(b.c,{src:i.photo_200}):null,description:i.city&&i.city.title?i.city.title:"",children:"".concat(i.first_name," ").concat(i.last_name)})}),Object(p.jsx)(b.h,{header:Object(p.jsx)(b.i,{mode:"secondary",children:"Navigation Example"}),children:Object(p.jsx)(b.g,{children:Object(p.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:h})})}),Object(p.jsxs)(O.AppleMaps,{token:"loeyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZRSzhEM0s4VjUifQ.eyJpc3MiOiJGOUMzNVo3TURWIiwiaWF0IjoxNjU0NzYwNTc3LCJleHAiOjE2ODYyNjg4MDB9.H_2lSyr73hPdfb30rKl6rEUtulLmDMrwTH1CoAfylmKE0cCWSk2MQO6lvwHp6_LtTKnmjOuFbMmOzG5Rczz4XAl",longitude:53.8008,latitude:-1.5491,zoomLevel:6,children:[Object(p.jsx)(Annotation,{longitude:53.8158,latitude:-1.6017,color:"#969696",title:"Apple",subtitle:"work",selected:!0,glyphText:"\uf8ff"}),Object(p.jsx)(Annotation,{longitude:53.8158,latitude:-1.5017,color:"#349576",title:"New Annotation",subtitle:"work",selected:!1}),Object(p.jsx)(ImageAnnotation,{longitude:53.8158,latitude:-1.4017,title:"Cat Cafe",subtitle:"scholes",selected:!1,url:"./assets/cat.jpeg",visible:!1})]})]})},x=c.p+"static/media/persik.ae9f0072.png",f=(c(142),function(e){return Object(p.jsxs)(b.j,{id:e.id,children:[Object(p.jsx)(b.k,{left:Object(p.jsx)(b.l,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(p.jsx)("img",{className:"Persik",src:x,alt:"Persik The Cat"})]})}),m=function(){var e=Object(i.useState)("bright_light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)("home"),a=Object(l.a)(s,2),j=a[0],O=a[1],h=Object(i.useState)(null),x=Object(l.a)(h,2),m=x[0],g=x[1],k=Object(i.useState)(Object(p.jsx)(b.m,{size:"large"})),_=Object(l.a)(k,2),A=_[0],C=_[1];Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,g(t),C(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,i=t.data;"VKWebAppUpdateConfig"===c&&n(i.scheme)})),function(){e.apply(this,arguments)}()}),[]);var E=function(e){O(e.currentTarget.dataset.to)};return Object(p.jsx)(b.f,{scheme:c,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(b.b,{children:Object(p.jsx)(b.o,{popout:A,children:Object(p.jsx)(b.n,{children:Object(p.jsxs)(b.p,{activePanel:j,children:[Object(p.jsx)(u,{id:"home",fetchedUser:m,go:E}),Object(p.jsx)(f,{id:"persik",go:E})]})})})})})})};r.a.send("VKWebAppInit"),s.a.render(Object(p.jsx)(m,{}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.3c73457b.chunk.js.map