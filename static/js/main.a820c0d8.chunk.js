(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),i=c(38),r=c.n(i),l=(c(48),c(49),c(42)),o=c(4),j=c(12),d=c.n(j),u=c(15),b=c(8),m=c(39),O=c.n(m).a.create({baseURL:"https://new-portfolioapi.herokuapp.com/"}),h="GET_PROJECTS",p="PROJECT_ERROR",x="SEND_EMAIL",f="EMAIL_ERROR",g="EMAIL_SENDING",v="SET_POSITION",N="SET_SECTION",y="SET_TOP_SECTIONS",w="SET_SELECTED_SECTION",S=Object(a.createContext)(),E=c(3),k=function(e,t){switch(t.type){case x:return Object(E.a)(Object(E.a)({},e),{},{sending:!1,sent:!0});case g:return Object(E.a)(Object(E.a)({},e),{},{sending:!0});case f:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload,sending:!1,sent:!1});default:return e}},C=function(e){var t={sending:!1,error:null,sent:!1},c=Object(a.useReducer)(k,t),n=Object(b.a)(c,2),i=n[0],r=n[1],l=function(){var e=Object(u.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:g,payload:!0}),e.next=4,O.post("/api/emails",c);case 4:r({type:x,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o();case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){r({type:f,payload:{msg:"There was an error",category:"alerta-error"}})};return Object(s.jsx)(S.Provider,{value:{sending:i.sending,sent:i.sent,error:i.message,sendEmail:l},children:e.children})},R=Object(a.createContext)(),T=function(e,t){switch(t.type){case h:return Object(E.a)(Object(E.a)({},e),{},{projects:t.payload,loading:!1});case p:return Object(E.a)(Object(E.a)({},e),{},{message:t.payload,loading:!1});default:return e}},M=function(e){var t=Object(a.useReducer)(T,{projects:[],error:!1,loading:!0,message:null}),c=Object(b.a)(t,2),n=c[0],i=c[1],r=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.get("/api/projects");case 3:(t=e.sent).data.projects.map((function(e){return e.id=e._id})),i({type:h,payload:t.data.projects.sort((function(e,t){return e.position>t.position?1:-1}))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),l=function(){i({type:p,payload:{msg:"There was an error",category:"alerta-error"}})};return Object(s.jsx)(R.Provider,{value:{loading:n.loading,projects:n.projects,error:n.errorForm,message:n.message,getProjects:r},children:e.children})},A=Object(a.createContext)(),I=function(e,t){switch(t.type){case v:return Object(E.a)(Object(E.a)({},e),{},{position:t.payload});case N:return Object(E.a)(Object(E.a)({},e),{},{actualSection:t.payload});case w:return Object(E.a)(Object(E.a)({},e),{},{selectedSection:t.payload});case y:return Object(E.a)(Object(E.a)({},e),{},{topSections:t.payload});default:return e}},L=function(e){var t=Object(a.useReducer)(I,{position:0,topSections:{myWork:0,about:0,contact:0},actualSection:null,selectedSection:null}),c=Object(b.a)(t,2),n=c[0],i=c[1];return Object(s.jsx)(A.Provider,{value:{position:n.position,actualSection:n.actualSection,topSections:n.topSections,selectedSection:n.selectedSection,setPosition:function(e){i({type:v,payload:e})},setActualSection:function(e){i({type:N,payload:e})},setSelectedSection:function(e){i({type:w,payload:e})},setTopSections:function(e){i({type:y,payload:e})}},children:e.children})},_=(c(22),c(11)),P=c(17),z=c(18),D=c(10),F=c(9),U=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),c=Object(a.useRef)(null),n=Object(a.useRef)(null),i=Object(a.useRef)(null),r=Object(a.useRef)(null),l=Object(a.useRef)(null),o=Object(a.useContext)(A),j=o.actualSection,d=o.setSelectedSection,u=[e,t,c,n,i,r];Object(a.useEffect)((function(){}),[j]),Object(a.useEffect)((function(){u.forEach((function(e,t){D.a.from(e.current,{autoAlpha:0,y:200,ease:"power4",duration:1,delay:.1*t+.2})})),D.a.from(l.current,{autoAlpha:0,duration:1,ease:"none",delay:1.5})}),[]);var b=function(e){F.a.event({category:"User",action:"Clicked Social",label:e})};return Object(s.jsxs)("div",{className:"left-container section-container",children:[Object(s.jsxs)("div",{className:"top-path",children:[Object(s.jsxs)("div",{className:"intro",children:[Object(s.jsx)("div",{className:"uncutable title-container",children:Object(s.jsxs)("div",{className:"title",ref:e,children:[" ","migu.",Object(s.jsx)("div",{className:"yellow",children:"es"}),"()"," "]})}),Object(s.jsx)("div",{className:"uncutable",children:Object(s.jsx)("div",{className:"subtitle yellow",ref:t,children:"Miguel Rodriguez - Full Stack developer"})}),Object(s.jsxs)("div",{className:"i-text-container",children:[Object(s.jsx)("div",{className:"uncutable",children:Object(s.jsxs)("div",{className:"i-text",ref:c,children:["I create awesome ",Object(s.jsx)("strong",{className:"white",children:"apps"})," and"," "]})}),Object(s.jsx)("div",{className:"uncutable",children:Object(s.jsxs)("div",{className:"i-text",ref:n,children:["unique ",Object(s.jsx)("strong",{className:"white",children:"web experiences"}),", let's"," "]})}),Object(s.jsx)("div",{className:"uncutable",children:Object(s.jsxs)("div",{className:"i-text",ref:i,children:[Object(s.jsx)("strong",{className:"white",children:"build"})," something"," ",Object(s.jsx)("strong",{className:"white",children:"together"})]})})]})]}),Object(s.jsx)("div",{className:"uncutable",children:Object(s.jsxs)("div",{className:"menu",ref:r,children:[Object(s.jsxs)("div",{onClick:function(){d("myWork")},className:"option"+("myWork"===j?" selected":""),children:[Object(s.jsx)("div",{className:"opt-num",children:"1"}),Object(s.jsx)("div",{className:"opt-separator"}),Object(s.jsx)("div",{className:"opt-text",children:"My Work"})]}),Object(s.jsxs)("div",{onClick:function(){d("about")},className:"option"+("about"===j?" selected":""),children:[Object(s.jsx)("div",{className:"opt-num",children:"2"}),Object(s.jsx)("div",{className:"opt-separator"}),Object(s.jsx)("div",{className:"opt-text",children:"About"})]}),Object(s.jsxs)("div",{onClick:function(){d("contact")},className:"option"+("contact"===j?" selected":""),children:[Object(s.jsx)("div",{className:"opt-num",children:"3"}),Object(s.jsx)("div",{className:"opt-separator"}),Object(s.jsx)("div",{className:"opt-text",children:"Contact"})]})]})})]}),Object(s.jsxs)("div",{className:"footer-path",ref:l,children:[Object(s.jsx)("div",{className:"photo",children:Object(s.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/5733463?s=460&u=f31bd217ce82ed57915490e041a80f7e283fec1a&v=4",alt:""})}),Object(s.jsxs)("div",{className:"social",children:[Object(s.jsxs)("a",{onClick:function(){return b("github")},rel:"noreferrer",className:"s-network",href:"https://github.com/MiguelRodriguezR",target:"_blank",children:[Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:P.a})}),Object(s.jsx)("div",{className:"s-n-text",children:"Github"}),Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:z.a})})]}),Object(s.jsxs)("a",{onClick:function(){return b("linkedin")},rel:"noreferrer",className:"s-network",href:"https://www.linkedin.com/in/miguel-rodriguez-a66b9084/",target:"_blank",children:[Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:P.b})}),Object(s.jsx)("div",{className:"s-n-text",children:"Linkedin"}),Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:z.a})})]}),Object(s.jsxs)("a",{onClick:function(){return b("twitter")},rel:"noreferrer",className:"s-network",href:"https://twitter.com/MiguelRodriR",target:"_blank",children:[Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:P.c})}),Object(s.jsx)("div",{className:"s-n-text",children:"Twitter"}),Object(s.jsx)("div",{className:"s-n-ico",children:Object(s.jsx)(_.a,{icon:z.a})})]})]})]})]})},W=(c(73),function(e){return Object(s.jsx)("div",{className:"card",children:e.children})}),G=(c(34),function(e){var t=e.langs,c=e.title,a=e.desc,n=e.image,i=e.color,r=e.plink;return Object(s.jsxs)("a",{className:"project-structure",onClick:function(){F.a.event({category:"User",action:"Clicked Project",label:c})},href:r,target:"_blank",rel:"noreferrer",children:[Object(s.jsxs)("div",{className:"left",children:[Object(s.jsx)("div",{className:"p-langs",style:{color:i},children:t.toUpperCase()}),Object(s.jsx)("div",{className:"p-title",children:c}),Object(s.jsx)("div",{className:"p-desc",children:a})]}),Object(s.jsxs)("div",{className:"right",children:[Object(s.jsx)("div",{className:"img",style:{backgroundImage:"url('"+n+"')"}}),Object(s.jsx)("div",{className:"img frame",style:{backgroundColor:i}})]})]})}),B=["#558651","#FFC66D","#9876AA","#6897BB"],J=n.a.forwardRef((function(e,t){var c=Object(a.useContext)(R).projects,n=Object(a.useState)(!1),i=Object(b.a)(n,2),r=i[0],l=i[1],o=B;if(0===c.length)return Object(s.jsxs)("p",{className:"white",children:["No projects"," ",Object(s.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude14"})," ","this may be an error, please, report this error to miguel.a.rodriguez.r@gmail.com"]});setTimeout((function(){window.postMessage({id:"tilt"},"*")}),200);var j=c.slice(0,4),d=c.slice(4);return Object(s.jsxs)("div",{className:"p-section",ref:t,children:[j.map((function(e,t){return Object(s.jsx)(W,{children:Object(s.jsx)(G,{plink:e.plink,langs:e.languages,title:e.name,desc:e.description,color:o[t%o.length],image:e.image})},e.name)})),r&&d.map((function(e,t){return Object(s.jsx)(W,{children:Object(s.jsx)(G,{plink:e.plink,langs:e.languages,title:e.name,desc:e.description,color:o[t%o.length],image:e.image})},e.name)})),!r&&Object(s.jsx)("div",{className:"more-btn",onClick:function(){return l(!0)},children:"- View all work"})]})})),q=(c(35),function(e){e.years;var t=e.text,c=e.techlist;return Object(s.jsxs)("div",{className:"about-structure",children:[Object(s.jsx)("div",{className:"a-title",children:"ABOUT ME"}),Object(s.jsx)("div",{className:"a-photo",children:Object(s.jsx)("img",{src:"https://i.imgur.com/bcypd4u.jpg",alt:""})}),Object(s.jsx)("div",{className:"a-desc",children:t}),Object(s.jsx)("div",{className:"a-desc",children:"Here are a few technologies I've been working with recently:"}),Object(s.jsx)("ul",{className:"a-techs",children:c.map((function(e){return Object(s.jsx)("li",{className:"a-tech",children:e},e)}))})]})}),H=n.a.forwardRef((function(e,t){var c=Math.abs(new Date(new Date-new Date("10/13/1993")).getUTCFullYear()-1970);return Object(s.jsx)("div",{className:"a-section",ref:t,children:Object(s.jsx)(W,{children:Object(s.jsx)(q,{years:c,text:"Hi, my name is Miguel Rodriguez, I\u2019m a Sistems Engineer based in Pasto - Colombia, I love building and designing exceptional, high-quality websites and applications. I have worked in different software construction projects for recognized financial, governmental and telecommunications, companies arround the world. I am someone who has been able to grow up professionally, someone who usually faces the future and the challenges that it brings with positivity and enthusiasm.",techlist:["Angular","React","Node.js","Wordpress","Java-Spring","R"]})})})})),Y=(c(36),c(16)),Z=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},V=function(){var e=Object(a.useContext)(S),t=e.sending,c=e.sendEmail,n=e.sent,i=Object(a.useState)({noMessage:!1,noEmail:!1,incorrectEmail:!1}),r=Object(b.a)(i,2),l=r[0],o=r[1],j=Object(a.useState)({visitorEmail:"",message:""}),d=Object(b.a)(j,2),u=d[0],m=d[1],O=function(e){""==u[e.target.name]&&h(e.target.name),m(Object(E.a)(Object(E.a)({},u),{},Object(Y.a)({},e.target.name,e.target.value)))},h=function(e){F.a.event({category:"User",action:"Contact typed",label:e})};return Object(s.jsxs)("form",{className:"contact-structure",onSubmit:function(e){e.preventDefault(),o({noMessage:!1,noEmail:!1,incorrectEmail:!1}),console.log(l),""!==u.visitorEmail?Z(u.visitorEmail)?""!==u.message?c(u):o({noMessage:!0}):o({incorrectEmail:!0}):o({noEmail:!0})},children:[t?Object(s.jsxs)("div",{className:"sending-loader",children:[Object(s.jsxs)("div",{class:"spinner",children:[Object(s.jsx)("div",{class:"cube1"}),Object(s.jsx)("div",{class:"cube2"})]}),"SENDING EMAIL"]}):null,Object(s.jsx)("div",{className:"margin5 c-title yellow",children:"GET IN TOUCH"}),Object(s.jsx)("div",{className:"margin10 c-text",children:"Want to talk? my inbox is always open. Whether for new projects, opportunities or just to say hi,"}),Object(s.jsx)("div",{className:"margin5 c-title yellow",children:"YOUR EMAIL"}),Object(s.jsx)("input",{type:"text",className:"custom-input margin10",value:u.visitorEmail,name:"visitorEmail",onChange:O}),l.noEmail?Object(s.jsx)("p",{className:"error",children:"Email is required"}):null,l.incorrectEmail?Object(s.jsx)("p",{className:"error",children:"Email format is not ok "}):null,Object(s.jsx)("div",{className:"margin5 c-title yellow",children:"MESSAGE"}),Object(s.jsx)("textarea",{className:"custom-input margin10",cols:"30",rows:"10",name:"message",value:u.message,onChange:O}),l.noMessage?Object(s.jsx)("p",{className:"error",children:"Message is required"}):null,Object(s.jsx)("input",{type:"submit",className:"custom-button",value:"SEND"}),n?Object(s.jsxs)("div",{className:"sent",children:["Your email has been sent!"," ",Object(s.jsx)("span",{role:"img","aria-label":"sad",children:"\ud83d\ude03\ud83e\udd73"})]}):null]})},K=n.a.forwardRef((function(e,t){return Object(s.jsx)("div",{className:"c-section",ref:t,children:Object(s.jsx)(W,{children:Object(s.jsx)(V,{})})})})),Q=function(){var e=Object(a.useRef)(null),t=n.a.createRef(),c=n.a.createRef(),i=n.a.createRef(),r=Object(a.useContext)(A),l=r.position,o=r.setActualSection,j=r.setTopSections;return Object(a.useEffect)((function(){D.a.from(e.current,{autoAlpha:0,duration:1,ease:"none",delay:1.5})}),[]),Object(a.useEffect)((function(){j({contact:i.current.offsetTop,about:c.current.offsetTop,myWork:0}),l>=i.current.offsetTop?o("contact"):l>=c.current.offsetTop?o("about"):o("myWork")}),[l]),Object(s.jsxs)("div",{className:"right-container section-container",ref:e,children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{className:"sec-title yellow thic",children:"MY WORK"}),Object(s.jsx)(J,{ref:t}),Object(s.jsx)("div",{className:"section-space"}),Object(s.jsx)("div",{className:"sec-title yellow thic",children:"ABOUT"}),Object(s.jsx)(H,{ref:c}),Object(s.jsx)("div",{className:"section-space"}),Object(s.jsx)("div",{className:"sec-title yellow thic",children:"CONTACT"}),Object(s.jsx)(K,{ref:i}),Object(s.jsx)("div",{className:"section-space"})]})},$=(c(74),function(){var e=Object(a.useContext)(R).loading;return Object(a.useEffect)((function(){}),[e]),Object(s.jsxs)("div",{className:"container"+(e?"":" loaded"),children:[Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 98",width:"50",height:"98",className:"loader-svg",children:[Object(s.jsx)("style",{children:"\n          tspan { white-space:pre }\n          .shp0 { fill: transparent } \n          .shp1 { fill: none;stroke: #000000;stroke-width: 1.4 } \n          .txt1 { font-size: 43px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } \n          .txt2 { font-size: 48px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } \n          "}),Object(s.jsx)("path",{id:"Shape 4",className:"shp0",d:"M0 0L50 0L50 100L0 100L0 0Z"}),Object(s.jsx)("path",{id:"Shape 1",className:"shp1",d:"M4 3L48 3L48 94.01L48 96"}),Object(s.jsx)("path",{id:"Shape 2",className:"shp1",d:"M44 95L1.99 95L1.99 2"}),Object(s.jsx)("text",{id:"M ",style:{transform:"matrix(1,0,0,1,6,43)"},children:Object(s.jsx)("tspan",{x:"0",y:"0",className:"txt1 txt",children:"M"})}),Object(s.jsx)("text",{id:"R ",style:{transform:"matrix(1,0,0,1,9,86)"},children:Object(s.jsx)("tspan",{x:"0",y:"0",className:"txt2 txt",children:"R"})})]}),Object(s.jsx)("p",{className:"loading-text yellow",children:"loading..."})]})}),X=function(){var e=Object(a.useContext)(R),t=e.message,c=e.loading,n=e.getProjects,i=Object(a.useContext)(A),r=i.setPosition,l=i.selectedSection,o=i.topSections,j=i.setSelectedSection,d=Object(a.useRef)(null);Object(a.useEffect)((function(){if(!c)return console.log("data loaded"),void D.a.to(d.current,{opacity:1,duration:.1,ease:"none",delay:0});t?console.log(t):n()}),[c,t]),Object(a.useEffect)((function(){d.current&&l&&d.current.scrollTo({top:o[l],behavior:"smooth"})}),[l]);return Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)($,{}),!c&&Object(s.jsxs)("div",{className:"big-container",onScroll:function(e){j(null),r(d.current.scrollTop+d.current.offsetHeight/2)},ref:d,children:[Object(s.jsx)("div",{className:"top-shadow"}),Object(s.jsx)("div",{className:"bottom-shadow"}),Object(s.jsxs)("div",{className:"mid-contaier",children:[Object(s.jsx)(U,{}),Object(s.jsx)(Q,{})]})]})]})},ee=function(){return Object(s.jsx)(M,{children:Object(s.jsx)(C,{children:Object(s.jsx)(L,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)(o.c,{children:Object(s.jsx)(o.a,{exact:!0,path:"/",component:X})})})})})})};F.a.initialize("G-VFR9084Q32",{debug:!0}),F.a.event({category:"User",action:"Contact typed",label:"test"});var te=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(ee,{})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(te,{})}),document.getElementById("root")),ce()}},[[77,1,2]]]);
//# sourceMappingURL=main.a820c0d8.chunk.js.map