(this.webpackJsonpynd=this.webpackJsonpynd||[]).push([[0],{50:function(e,t,c){},51:function(e,t,c){},55:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},68:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(27),r=c.n(a),i=(c(50),c(51),c(8)),o=c(40),l=(c(52),c(53),o.a.initializeApp({apiKey:"AIzaSyAqYV_Ych5B1rIXeG6qbzAsmssGMMc6ISE",authDomain:"suggestmeplaces-4deac.firebaseapp.com",projectId:"suggestmeplaces-4deac",storageBucket:"suggestmeplaces-4deac.appspot.com",messagingSenderId:"849037283225",appId:"1:849037283225:web:a4a2b8f54cefc4d3d20d08"})),u=l.auth(),j=l.firestore(),d=c(3),b=Object(n.createContext)();function p(){return Object(n.useContext)(b)}function O(e){var t=e.children,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),j=l[0],p=l[1],O=Object(n.useState)(!1),h=Object(i.a)(O,2),m=h[0],f=h[1];Object(n.useEffect)((function(){return u.onAuthStateChanged((function(e){r(e),p(!1),f(!0)}))}),[]);var x={currentUser:a,login:function(e,t){return u.signInWithEmailAndPassword(e,t)},signup:function(e,t){return u.createUserWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},loggedinStatus:m};return Object(d.jsx)(b.Provider,{value:x,children:!j&&t})}var h=c(10),m=c(14);c(55);function f(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=(t[0],t[1]),s=p(),a=s.currentUser,r=s.logout,o=Object(h.g)();return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header__right",children:Object(d.jsx)(m.b,{className:"links",to:"/",children:Object(d.jsx)("strong",{children:"Your Next Destination"})})}),Object(d.jsxs)("div",{className:"header__left",children:[a?Object(d.jsx)(m.b,{className:"links",to:"/login",children:"Welcome"}):Object(d.jsx)(m.b,{className:"links",to:"/signup",children:"Sign Up"}),a?Object(d.jsx)(m.b,{className:"links",onClick:function(){c("");try{r(),o.push("/login")}catch(e){c("Failed to log out")}},children:"Log Out"}):Object(d.jsx)(m.b,{className:"links",to:"/login",children:"Log In"})]})]})}var x=c(18),v=c.n(x),g=c(23);c(64);function y(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),l=p().signup,u=Object(n.useState)(!1),j=Object(i.a)(u,2),b=(j[0],j[1]),O=Object(h.g)(),f=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r.current.value===o.current.value){e.next=3;break}return e.abrupt("return",s("Passwords do not match"));case 3:return e.prev=3,s(""),b(!0),e.next=8,l(a.current.value,r.current.value);case 8:O.push("/login"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),s("Failed to create  an account");case 14:b(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"signin__container",children:[c&&Object(d.jsx)("h1",{children:c}),Object(d.jsxs)("form",{id:"postform",onSubmit:f,children:[Object(d.jsx)("input",{type:"email",className:"userEmail",placeholder:"Enter Email",ref:a,required:!0}),Object(d.jsx)("input",{type:"password",className:"userPassword",placeholder:"Enter Password",minLength:"8",required:!0,ref:r}),Object(d.jsx)("input",{type:"password",className:"userPassword",placeholder:"Confirm Password",minLength:"8",required:!0,ref:o}),Object(d.jsx)("div",{className:"signin__btnsubmitcontainer",children:Object(d.jsx)("button",{type:"submit",children:"Sign Up"})})]})]}),Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("p",{children:"Already have an Account "}),Object(d.jsx)(m.b,{to:"/login",children:"Login"})]})]})}c(65);function N(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useRef)(),r=Object(n.useRef)(),o=p().login,l=Object(n.useState)(!1),u=Object(i.a)(l,2),j=(u[0],u[1]),b=Object(h.g)(),O=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,s(""),j(!0),e.next=6,o(a.current.value,r.current.value);case 6:b.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),s("Failed to Login");case 12:j(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"login__container",children:[c&&Object(d.jsxs)("h1",{children:[c,": Something went wrong"]}),Object(d.jsxs)("form",{id:"postform",onSubmit:O,children:[Object(d.jsx)("input",{type:"email",className:"userEmail",placeholder:"Enter Email",autoComplete:"off",ref:a,required:!0}),Object(d.jsx)("input",{type:"password",className:"userPassword",placeholder:"Enter Password",autoComplete:"off",minLength:"8",required:!0,ref:r}),Object(d.jsx)("div",{className:"login__btnsubmitcontainer",children:Object(d.jsx)("button",{type:"submit",children:"Log In"})})]})]}),Object(d.jsxs)("div",{className:"signup",children:[Object(d.jsx)("p",{children:"Don't have an Account"})," ",Object(d.jsx)(m.b,{to:"/signup",children:"SignUp"})]})]})}c(66);var k=c(43),_=c.n(k),S=c(41),w=c.n(S),C=c(42),P=c.n(C);var E=function(e){var t=e.id,c=e.byuser,s=e.placename,a=e.cityname,r=e.country,o=e.typeofplace,l=(e.likes,e.dislikes,e.username),u=p().currentUser,b=Object(n.useState)(0),O=Object(i.a)(b,2),h=O[0],m=O[1],f=function(){u&&(0===h?(m(1),j.collection("posts").doc(t).update({likes:h})):(m(0),j.collection("posts").doc(t).update({likes:h})))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"posts",children:[Object(d.jsxs)("div",{className:"post__container",children:[Object(d.jsx)("div",{className:"post__container__username",children:Object(d.jsxs)("h2",{children:[" Suggested by : ",c]})}),Object(d.jsxs)("div",{className:"post__container__postdetails",children:[Object(d.jsxs)("p",{children:["Place Name: ",Object(d.jsxs)("strong",{children:[" ",s]})]}),Object(d.jsxs)("p",{children:["City Name:",a]}),Object(d.jsxs)("p",{children:["Country:",r]}),Object(d.jsxs)("p",{children:["Type of Place:",o]})]})]}),Object(d.jsxs)("div",{className:"postfeedback",children:[Object(d.jsx)("div",{className:"like",children:h?Object(d.jsx)(P.a,{onClick:f}):Object(d.jsx)(w.a,{onClick:f})}),Object(d.jsx)("div",{className:"delete",children:Object(d.jsx)(_.a,{title:"Delete",onClick:function(){try{l===c&&j.collection("posts").doc(t).delete()}catch(e){console.log(e)}}})})]})]})})},I=(c(68),c(44));var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],s=t[1],a=p().currentUser,r=a.email.substr(0,a.email.indexOf("@"))||" ",o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],b=l[1],O=Object(n.useState)(""),h=Object(i.a)(O,2),m=h[0],f=h[1],x=Object(n.useState)(""),y=Object(i.a)(x,2),N=y[0],k=y[1],_=Object(n.useState)(""),S=Object(i.a)(_,2),w=S[0],C=S[1],P=Object(n.useState)([]),A=Object(i.a)(P,2),L=A[0],U=A[1],F=Object(n.useState)(""),q=Object(i.a)(F,2),D=(q[0],q[1]),B=function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j.collection("posts").add({byuser:r,placename:u,cityname:m,country:N,typeofplace:w,likes:0,dislikes:0,timestamp:I.a.firestore.FieldValue.serverTimestamp()});case 3:D("Please fill all the field");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){U(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){R()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"feed",children:Object(d.jsx)("div",{className:"feed__btncontainer",children:Object(d.jsx)("button",{className:"hideformbtn",onClick:function(){var e=document.getElementById("postform");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:"View Post"})})}),Object(d.jsx)("div",{className:"feed__inputcontainer",children:Object(d.jsxs)("form",{id:"postform",children:[Object(d.jsx)("input",{type:"text",placeholder:"Place Name",value:u,onChange:function(e){b(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"City Name",value:m,onChange:function(e){f(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Country",value:N,onChange:function(e){k(e.target.value)}}),Object(d.jsx)("input",{type:"text",value:w,placeholder:"Type of Place",onChange:function(e){C(e.target.value)}}),Object(d.jsx)("div",{className:"feed__btnsubmitcontainer",children:Object(d.jsx)("button",{type:"submit",className:"submitform",onClick:B,disabled:!u||!m||!N||!w,children:"Post"})})]})})]}),Object(d.jsx)("div",{className:"search",children:Object(d.jsx)("input",{className:"search__by__name",type:"text",placeholder:"Search by Country Name",onChange:function(e){var t=e.target.value;s(t)},value:c})}),L.filter((function(e){if(console.log("value ==== ",typeof e.data.country),e.data.country.toLowerCase().includes(c.toLowerCase()))return e})).map((function(e){var t=e.id,c=e.data,n=c.byuser,s=c.placename,a=c.cityname,i=c.country,o=c.typeofplace,l=c.likes,u=c.dislikes;return Object(d.jsx)("div",{className:"post",children:Object(d.jsx)(E,{id:t,byuser:n,placename:s,cityname:a,country:i,typeofplace:o,likes:l,dislikes:u,username:r})})}))]})},L=c(30),U=c(11),F=["component"];function q(e){var t=e.component,c=Object(U.a)(e,F),n=p().currentUser;return Object(d.jsx)(h.b,Object(L.a)(Object(L.a)({},c),{},{render:function(e){return n?Object(d.jsx)(t,Object(L.a)({},e)):Object(d.jsx)(h.a,{to:"/login"})}}))}c(72);c(73);c(74);var D=function(){return Object(d.jsx)("div",{className:"errorpage",children:Object(d.jsxs)("div",{className:"errorpage_content",children:[Object(d.jsx)("h1",{className:"errorpage_heading",children:" 404 Page Not Found"}),Object(d.jsx)("p",{className:"errorpage_heading",children:" Sorry ,This page doesn't exist."}),Object(d.jsx)(m.b,{className:"homelink",to:"/",children:"Go Back"})]})})};var B=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(O,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)(f,{}),Object(d.jsxs)(h.d,{children:[Object(d.jsx)(h.b,{exact:!0,path:"/login",component:N}),Object(d.jsx)(h.b,{exact:!0,path:"/signup",component:y}),Object(d.jsx)(q,{exact:!0,path:"/",component:A}),Object(d.jsx)(h.b,{component:D})]})]})})})})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.ed7167b1.chunk.js.map