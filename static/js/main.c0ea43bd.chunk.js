(this["webpackJsonptrivia-app"]=this["webpackJsonptrivia-app"]||[]).push([[0],{79:function(e,t,a){e.exports=a(91)},84:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(14),i=(a(84),a(142)),u=a(144),s=a(92),m=a(139),f=Object(m.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#735DD0"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var E=function(){var e=f();return r.a.createElement(i.a,{position:"static",className:e.root},r.a.createElement(u.a,{variant:"dense"},r.a.createElement(s.a,{variant:"h6",color:"inherit",className:e.title},"Trivia App")))},d=a(55),g=a.n(d),b=a(66),v=a(24),p=a(67),h=a(10),y=a(146),j=a(100),O=a(154),x=a(147),C=a(93),S=a(97),k=a(145),w=a(70),N=a(96),q=Object(m.a)((function(e){return{container:{height:"100%"},formControl:{width:350,margin:20},formContainer:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}}));var A=function(e){var t=e.getQuestions,a=Object(h.f)(),c=q(),o=Object(n.useState)(!1),i=Object(l.a)(o,2),u=i[0],m=i[1],f=Object(n.useState)({questions:"",category:"",difficulty:"",type:""}),E=Object(l.a)(f,2),d=E[0],A=E[1],D=function(e){e.persist(),A((function(t){return Object(p.a)({},t,Object(v.a)({},e.target.name,e.target.value))}))},I=function(){var e=Object(b.a)(g.a.mark((function e(n){var r,c,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==d.questions){e.next=4;break}return m(!0),e.abrupt("return",null);case 4:return r="https://opentdb.com/api.php?amount=".concat(d.questions,"&category=").concat(d.category,"&difficulty=").concat(d.difficulty,"&type=").concat(d.type),e.next=7,fetch(r);case 7:return c=e.sent,e.next=10,c.json();case 10:o=e.sent,t(o.results),a.push("/trivia");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:c.formContainer},r.a.createElement(w.a,{elevation:6},r.a.createElement("form",{onSubmit:I},r.a.createElement(k.a,{container:!0,className:c.container,direction:"column"},r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary",style:{textAlign:"center",backgroundColor:"#735DD0",color:"#ffffff",padding:"10px"}},"Make your quiz!"),r.a.createElement(C.a,{className:c.formControl},r.a.createElement(y.a,{id:"questions",name:"questions",label:"Questions*",onChange:D,value:d.questions||""})),r.a.createElement(C.a,{className:c.formControl},r.a.createElement(j.a,{id:"categoryLabel"},"Category"),r.a.createElement(S.a,{value:d.category||"",onChange:D,labelId:"categoryLabel",id:"category",name:"category"},r.a.createElement(O.a,{value:"any"},"Any Category"),r.a.createElement(O.a,{value:9},"General Knowledge"),r.a.createElement(O.a,{value:10},"Entertainment: Books"),r.a.createElement(O.a,{value:11},"Entertainment: Film"),r.a.createElement(O.a,{value:12},"Entertainment: Music"),r.a.createElement(O.a,{value:13},"Entertainment: Musicals & Theatres"),r.a.createElement(O.a,{value:14},"Entertainment: Television"),r.a.createElement(O.a,{value:17},"Science & Nature"),r.a.createElement(O.a,{value:18},"Science: Computers"),r.a.createElement(O.a,{value:19},"Science: Mathematics"),r.a.createElement(O.a,{value:20},"Mythology"),r.a.createElement(O.a,{value:21},"Sports"),r.a.createElement(O.a,{value:22},"Geography"),r.a.createElement(O.a,{value:23},"History"),r.a.createElement(O.a,{value:24},"Politics"),r.a.createElement(O.a,{value:25},"Art"),r.a.createElement(O.a,{value:29},"Entertainment: Comics"),r.a.createElement(O.a,{value:30},"Science: Gadgets"),r.a.createElement(O.a,{value:31},"Entertainment: Japanese Anime & Manga"),r.a.createElement(O.a,{value:32},"Entertainment: Cartoon & Animations"))),r.a.createElement(C.a,{className:c.formControl},r.a.createElement(j.a,{id:"difficultyLabel"},"Difficulty"),r.a.createElement(S.a,{value:d.difficulty||"",onChange:D,labelId:"difficultyLabel",id:"difficulty",name:"difficulty"},r.a.createElement(O.a,{value:"any"},"Any Difficulty"),r.a.createElement(O.a,{value:"easy"},"Easy"),r.a.createElement(O.a,{value:"medium"},"Medium"),r.a.createElement(O.a,{value:"hard"},"Hard"))),r.a.createElement(C.a,{className:c.formControl},r.a.createElement(j.a,{id:"typeLabel"},"Type"),r.a.createElement(S.a,{value:d.type||"",onChange:D,labelId:"typeLabel",name:"type"},r.a.createElement(O.a,{value:"any"},"Any Type"),r.a.createElement(O.a,{value:"multiple"},"Multiple Choice"),r.a.createElement(O.a,{value:"boolean"},"True / False"))),r.a.createElement("br",null),r.a.createElement(N.a,{style:{textAlign:"center",color:"red"}},u?"Before proceeding, please enter no of question you would like to challenge":""),r.a.createElement(C.a,{className:c.formControl},r.a.createElement(x.a,{type:"submit",variant:"contained",style:{backgroundColor:"#735DD0"},color:"primary"},"Create your Quiz"))))))},D=a(68),I=a(148),M=a(149),L=(a(152),a(153)),T=(a(150),Object(m.a)((function(e){var t;return{gridItem:(t={},Object(v.a)(t,e.breakpoints.up("xs"),{margin:20}),Object(v.a)(t,e.breakpoints.up("sm"),{margin:40}),t),root:{width:"80%",height:"250px"},question:Object(v.a)({fontWeight:"1000",fontSize:"20px",textAlign:"center"},e.breakpoints.up("sm"),{fontSize:"30px"})}}))),G=function(e){var t=e.question,a=t.question,c=t.incorrect_answers,o=t.correct_answer,i=e.index,u=e.handleNext,m=e.handleAnswer,f=e.disabled,E=e.onAnswerChange,d=e.timer,g=T(),b=Object(n.useState)(""),v=Object(l.a)(b,2),p=v[0],h=v[1],y=Object(n.useState)([]),j=Object(l.a)(y,2),O=j[0],C=j[1],S=[].concat(Object(D.a)(c),[o]);Object(n.useEffect)((function(){var e=function(e){for(var t,a,n=e.length;0!=n;)a=Math.floor(Math.random()*e.length),t=e[--n],e[n]=e[a],e[a]=t;return e}(S);C(e);var t=setInterval(d,1e3);return function(){clearInterval(t)}}),[a]);var w=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value};return r.a.createElement(k.a,{container:!0,justify:"center",alignItems:"center",direction:"column",style:{height:"100%"}},r.a.createElement(k.a,{item:!0,className:g.gridItem},r.a.createElement(s.a,{className:g.question,gutterBottom:!0,variant:"h2",component:"h2"},"Question ",i+1,": ",w(a))),r.a.createElement(I.a,{className:g.root},r.a.createElement(M.a,null,r.a.createElement(L.a,{"aria-label":"quiz",name:"quiz",value:p,onChange:function(e){h(e.target.value),E(e.target.value)}},O.map((function(e){}))),f?r.a.createElement(x.a,{onClick:function(){u()},variant:"outlined",color:"primary"},"Next"):r.a.createElement(x.a,{variant:"outlined",color:"primary",className:g.button,onClick:function(){m()}},"Choose"))))},Y=a(151),z=Object(m.a)((function(e){return{alertSuccess:{border:"1px solid rgb(214,233,198)",backgroundColor:"rgb(223, 240, 216)",color:"rgb(70, 136, 71)"},alertDanger:{border:"1px solid rgb(238,211,215)",backgroundColor:" rgb(242,222,222)",color:"rgb(185,74,72)"},container:{width:"80%",margin:"auto",height:"100%",textAlign:"center",background:"#ffffff"}}}));var B=function(e){var t=e.score,a=e.timer,n=e.question,c=z(),o=Object(h.f)(),l=(t/n*100).toFixed(2);return r.a.createElement(k.a,{container:!0,justify:"center",alignItems:"center",className:c.container},r.a.createElement(k.a,{item:!0,xs:12,md:12},r.a.createElement(s.a,{component:"h4",variant:"h4"},"YOUR RESULTS"),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary"},"Your Score: ",t),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary"},"Time Spent: ",a,"s"),r.a.createElement(s.a,{variant:"subtitle1",color:"textSecondary"},"Your score percentage is ",l),r.a.createElement(s.a,null,l<=30?r.a.createElement("span",{className:c.alertDanger},"Your score is deemed: Poor"):l>=30&&l<=50?r.a.createElement("span",{className:c.alertDanger},"Your score is deemed: Average"):l>=50&&l<=80?r.a.createElement("span",{className:c.alertSuccess},"Your score is deemed: Good"):r.a.createElement("span",{className:c.alertSuccess},"Your score is deemed: Excellent")),r.a.createElement("br",null),r.a.createElement(x.a,{variant:"contained",style:{backgroundColor:"#735DD0"},color:"secondary",onClick:function(){o.push("/")}},"Play again!")))},F=Object(m.a)((function(e){return{root:{maxWidth:600,margin:"auto"},container:{height:"100%"},item:{margin:"0 auto"}}}));var Q=function(e){var t=e.question,a=(F(),Object(h.f)()),c=Object(n.useState)(0),o=Object(l.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)(0),f=Object(l.a)(m,2),E=f[0],d=f[1],g=Object(n.useState)(!1),b=Object(l.a)(g,2),v=b[0],p=b[1],y=Object(n.useState)(""),j=Object(l.a)(y,2),O=j[0],C=j[1],S=Object(n.useState)(!1),w=Object(l.a)(S,2),N=w[0],q=w[1],A=Object(n.useState)(0),D=Object(l.a)(A,2),I=D[0],M=D[1];return t.length>0?r.a.createElement(r.a.Fragment,null,N?r.a.createElement(B,{score:E,timer:I,question:t.length}):r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{onAnswerChange:function(e){C(e)},gameOver:N,disabled:v,handleNext:function(){i!==t.length-1?u((function(e){return e+1})):q(!0),p(!1)},handleAnswer:function(){""!==O&&(O===t[i].correct_answer&&d(E+1),C(""),p(!0))},index:i,question:t[i],timer:function(){M((function(e){return e+1}))}}))):r.a.createElement(k.a,{container:!0,justify:"center",alignItems:"center",direction:"column",style:{height:"100%"}},r.a.createElement(Y.a,{color:"secondary"}),r.a.createElement(s.a,null," Question not Loaded"),r.a.createElement(x.a,{onClick:function(){a.push("/")},color:"secondary"},"Go back"))},W=a(39);var H=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e){c(e)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,r.a.createElement(h.c,null,r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(A,Object.assign({},e,{getQuestions:o}))}}),r.a.createElement(h.a,{path:"/trivia",render:function(e){return r.a.createElement(Q,Object.assign({},e,{question:a}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[79,1,2]]]);
//# sourceMappingURL=main.c0ea43bd.chunk.js.map