(this.webpackJsonptodoapireact=this.webpackJsonptodoapireact||[]).push([[0],{16:function(e,t,n){e.exports={register:"register_register__38OdK",input:"register_input__rVJVD",button:"register_button__mRvgl",btn:"register_btn__2ZJEO",inpt:"register_inpt__1iU9U",h4:"register_h4__1rto8"}},17:function(e,t,n){e.exports={wrapper:"itemForm_wrapper__3cHAv",form:"itemForm_form__8xkpo",w100:"itemForm_w100__1xEJx",btn:"itemForm_btn__3LYhe"}},18:function(e,t,n){e.exports={loginForm:"SignIn_loginForm__3e-Ia",login:"SignIn_login__-RAs-",input:"SignIn_input__3rDvD",h4:"SignIn_h4__AXYV1",h42:"SignIn_h42__3bvru",button:"SignIn_button__2XZVv",btn:"SignIn_btn__2yiBT",inpt:"SignIn_inpt__1e69t"}},21:function(e,t,n){e.exports={input:"todoForm_input__1lU5d",button:"todoForm_button__1vtKu"}},27:function(e,t,n){e.exports={todo:"todo_todo__3pRvp",card:"todo_card__1ka25",info:"todo_info__2Zmyp",buttons:"todo_buttons__2YHI-"}},32:function(e,t,n){e.exports={navbar:"Navbar_navbar__4sm0m",button:"Navbar_button__30yUn"}},44:function(e,t,n){e.exports={card:"Item_card__aizIQ"}},45:function(e,t,n){e.exports={main:"itemlist_main__1m1fj"}},46:function(e,t,n){e.exports={button:"signOut_button__wVY2v"}},60:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),i=n(4),s=(n(60),n(13)),u=n(6),l=n(5),d=n(26),p=n(7),b=n.n(p),j=n(14),O=n(15),h=n.n(O),m={FetchLoading:"FetchLoading",FetchSuccess:"FetchSuccess",FetchFailure:"FetchFailure",PostTodoLoading:"PostTodoLoading",POST_TODO_SUCCESS:"POST_TODO_SUCCESS",POST_TODO_FAILURE:"POST_TODO_FAILURE",RegisterationLoading:"RegisterationLoading",RegisterationSuccess:"RegisterationSuccess",RegisterationFailure:"RegisterationFailure",SignInLoading:"SignInLoading",SignInSuccess:"SignInSuccess",SignInFailure:"SignInFailure",SignOut:"SignOut",DeleteTodoLoading:"DeleteTodoLoading",DeleteTodoSuccess:"DeleteTodoSuccess",DeleteTodoFailure:"DeleteTodoFailure",UpdateTodoLoading:"UpdateTodoLoading",UpdateTodoSuccess:"UpdateTodoSuccess",UpdateTodoFailure:"UpdateTodoFailure",GetItemsLoading:"GetItemsLoading",GetItemsSuccess:"GetItemsSuccess",GetItemsFailure:"GetItemsFailure",POST_ITEMS_LOADING:"POST_ITEMS_LOADING",POST_ITEMS_SUCCESS:"POST_ITEMS_SUCCESS",POST_ITEMS_FAILURE:"POST_ITEMS_FAILURE",UPDATE_ITEMS_LOADING:"UPDATE_ITEMS_LOADING",UPDATE_ITEMS_SUCCESS:"UPDATE_ITEMS_SUCCESS",UPDATE_ITEMS_FAILURE:"UPDATE_ITEMS_FAILURE",DELETE_ITEMS_LOADING:"DELETE_ITEMS_LOADING",DELETE_ITEMS_SUCCESS:"DELETE_ITEMS_SUCCESS",DELETE_ITEMS_FAILURE:"DELETE_ITEMS_FAILURE"},g=localStorage.getItem("token"),v=n(18),S=n.n(v),_=n(1),f=function(){localStorage.removeItem("token");var e=Object(u.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),p=s[0],O=s[1],g=Object(i.b)(),v=Object(i.c)((function(e){return e.RegisterationReducer}));Object(a.useEffect)((function(){if(v.items){var t=v.items.token;if(localStorage.setItem("token",t),t){var n=Object(d.a)(t).user_id;localStorage.setItem("user_id",n),e.push("/todos/".concat(n))}}}),[v]);return Object(_.jsx)("div",{className:S.a.loginForm,children:Object(_.jsxs)("div",{id:"login",className:S.a.login,children:[Object(_.jsx)("div",{className:S.a.input,children:Object(_.jsx)("input",{type:"email",onChange:function(e){return function(e){return c(e.target.value)}(e)},value:r,placeholder:"EMAIL",className:S.a.inpt})}),Object(_.jsx)("div",{className:S.a.input,children:Object(_.jsx)("input",{type:"password",onChange:function(e){return function(e){return O(e.target.value)}(e)},value:p,placeholder:"PASSWORD",className:S.a.inpt})}),Object(_.jsxs)("div",{className:S.a.button,children:[Object(_.jsx)("button",{className:S.a.btn,type:"submit",onClick:function(){var e;g((e={email:r,password:p},function(){var t=Object(j.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:m.RegisterationLoading}),t.prev=1,t.next=4,h()({method:"post",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/login",headers:{"Content-Type":"application/json"},data:e});case 4:a=t.sent,n({type:m.RegisterationSuccess,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:m.POST_TODO_FAILURE,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Sign In"}),Object(_.jsx)("button",{type:"button",className:S.a.btn,onClick:function(t){return function(t){t.preventDefault(),e.push("/register")}(t)},children:"Sign Up"})]})]})})},T=f,y=n(16),x=n.n(y),E=function(){localStorage.removeItem("token");var e=Object(u.f)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),p=s[0],O=s[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),S=v[0],f=v[1],T=Object(i.b)(),y=Object(i.c)((function(e){return e.RegisterationReducer}));Object(a.useEffect)((function(){if(y.items){var t=y.items.token;if(localStorage.setItem("token",t),t){var n=Object(d.a)(t).user_id;localStorage.setItem("user_id",n),e.push("/todos/".concat(n))}}}),[y]);return Object(_.jsxs)("div",{id:"register",className:x.a.register,children:[Object(_.jsx)("div",{className:x.a.input,children:Object(_.jsx)("input",{type:"email",onChange:function(e){return function(e){return c(e.target.value)}(e)},value:r,placeholder:"EMAIL",className:x.a.inpt})}),Object(_.jsx)("div",{className:x.a.input,children:Object(_.jsx)("input",{type:"password",onChange:function(e){return function(e){return O(e.target.value)}(e)},value:p,placeholder:"PASSWORD",className:x.a.inpt})}),Object(_.jsx)("div",{className:x.a.input,children:Object(_.jsx)("input",{type:"password",onChange:function(e){return function(e){return f(e.target.value)}(e)},value:S,placeholder:"CONFIRM PASSWORD",className:x.a.inpt})}),Object(_.jsxs)("div",{className:x.a.button,children:[Object(_.jsx)("button",{className:x.a.btn,type:"submit",onClick:function(){var e;T((e={email:r,password:p,password_confirmation:S},function(){var t=Object(j.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:m.RegisterationLoading}),t.prev=1,t.next=4,h()({method:"post",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/registeration",headers:{"Content-Type":"application/json"},data:e});case 4:a=t.sent,n({type:m.RegisterationSuccess,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:m.POST_TODO_FAILURE,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))},children:"Register"}),Object(_.jsx)("button",{className:x.a.btn,type:"button",onClick:function(t){return function(t){t.preventDefault(),e.push("/")}(t)},children:"Sign In"})]})]})},I=E,D=n(27),L=n.n(D),C=function(e){var t=e.todo,n=Object(u.f)(),r=Object(i.b)(),c=t.id,o=t.title,s=t.created_by,d=Object(a.useState)(o),p=Object(l.a)(d,2),O=p[0],v=p[1],S=Object(a.useState)(s),f=Object(l.a)(S,2),T=f[0],y=f[1];return Object(_.jsxs)("div",{className:L.a.card,children:[Object(_.jsxs)("div",{className:L.a.info,children:[Object(_.jsx)("input",{className:c,value:O,disabled:!0,onChange:function(e){return v(e.target.value)}}),Object(_.jsx)("input",{className:c,value:T,disabled:!0,onChange:function(e){return y(e.target.value)}})]}),Object(_.jsxs)("div",{className:L.a.buttons,children:[Object(_.jsx)("button",{type:"button",onClick:function(){return n.push("/todos/".concat(c,"/items"))},children:"View"}),Object(_.jsx)("button",{type:"button",onClick:function(){return function(){var e=document.getElementsByClassName(c);e[0].disabled=!1,e[1].disabled=!1}()},children:"Edit"}),Object(_.jsx)("button",{type:"button",onClick:function(){return r(function(e){return function(){var t=Object(j.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:m.DeleteTodoLoading}),t.prev=1,t.next=4,h()({method:"delete",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e),headers:{"Content-Type":"application/json",token:g}});case 4:a=t.sent,n({type:m.DeleteTodoSuccess,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:m.DeleteTodoFailure,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(c))},children:"Delete"}),Object(_.jsx)("button",{type:"button",onClick:function(){var e=document.getElementsByClassName(c);e[0].disabled=!0,e[1].disabled=!0,r(function(e,t){return function(){var n=Object(j.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:m.UpdateTodoLoading}),n.prev=1,n.next=4,h()({method:"patch",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e),headers:{"Content-Type":"application/json",token:g},data:t});case 4:r=n.sent,a({type:m.UpdateTodoSuccess,payload:r.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a({type:m.UpdateTodoFailure,error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(c,{id:c,title:O,created_by:T}))},children:"Save"})]})]})},N=C,F=n(21),k=n.n(F),U=function(){var e=Object(i.b)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),u=s[0],d=s[1],p=localStorage.getItem("user_id");return Object(_.jsx)("div",{className:k.a.wrapper,children:Object(_.jsxs)("form",{onSubmit:function(t){var n;t.preventDefault(),e((n={title:r,created_by:u,user_id:p},function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.PostTodoLoading}),e.prev=1,e.next=4,h()({method:"post",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos",headers:{"Content-Type":"application/json",token:g},data:n});case 4:a=e.sent,t({type:m.POST_TODO_SUCCESS,payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m.POST_TODO_FAILURE,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),c(""),d("")},className:k.a.form,children:[Object(_.jsx)("input",{className:k.a.input,type:"text",placeholder:"Todo Title",value:r,onChange:function(e){return c(e.target.value)}}),Object(_.jsx)("input",{className:k.a.input,type:"text",placeholder:"Created by",value:u,onChange:function(e){return d(e.target.value)}}),Object(_.jsx)("button",{className:k.a.button,type:"submit",children:"Submit"})]})})},R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})),n=t.RegisterationReducer,r=t.todoReducer,c=t.PostTodoReducer,o=t.DeleteTodoReducer;Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.FetchLoading}),e.prev=1,e.next=4,h.a.get("https://vast-eyrie-23535.herokuapp.com/api/v1/todos",{headers:{"Content-Type":"application/json",token:g}});case 4:n=e.sent,t({type:m.FetchSuccess,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:m.FetchFailure,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c,o]);return Object(_.jsxs)("div",{children:[Object(_.jsx)(U,{}),t.loading?Object(_.jsx)("h1",{children:"loading..."}):r.items.length>0?r.items.map((function(e){return Object(_.jsx)(N,{todo:e},e.id)})):Object(_.jsx)("h1",{children:"cannot get list try again"})]})},w=R,A=n(44),P=n.n(A),M=function(e){var t=e.item,n=Object(u.g)().todoId,r=Object(i.b)(),c=t.name,o=t.description,s=t.proirity,d=t.completed,p=t.id,O=Object(a.useState)(s),v=Object(l.a)(O,2),S=v[0],f=v[1],T=Object(a.useState)(d),y=Object(l.a)(T,2),x=y[0],E=y[1],I=Object(a.useState)(c),D=Object(l.a)(I,2),L=D[0],C=D[1],N=Object(a.useState)(o),F=Object(l.a)(N,2),k=F[0],U=F[1],R={todo_id:n,name:L,description:k,proirity:S,completed:x};return Object(_.jsxs)("div",{className:P.a.card,children:[Object(_.jsx)("span",{children:p}),Object(_.jsx)("input",{className:p,type:"checkbox",checked:!!x||"",disabled:!0,value:x,onChange:function(){return E(!x)}}),Object(_.jsx)("input",{className:p,type:"text",value:L,disabled:!0,onChange:function(e){return C(e.target.value)}}),Object(_.jsx)("input",{className:p,type:"text",value:k,disabled:!0,onChange:function(e){return U(e.target.value)}}),Object(_.jsxs)("select",{className:p,type:"text",value:S,disabled:!0,onChange:function(e){return f(e.target.value)},children:[Object(_.jsx)("option",{disabled:!0,defaultValue:!0,hidden:!0,children:S}),Object(_.jsx)("option",{value:"High",children:"High"}),Object(_.jsx)("option",{value:"Medium",children:"Medium"}),Object(_.jsx)("option",{value:"Low",children:"Low"})]}),Object(_.jsx)("button",{type:"button",onClick:function(){return function(){var e=document.getElementsByClassName(p);e[0].disabled=!1,e[1].disabled=!1,e[2].disabled=!1,e[3].disabled=!1}()},children:"Edit"}),Object(_.jsx)("button",{type:"button",onClick:function(){return r(function(e,t,n){return function(){var a=Object(j.a)(b.a.mark((function a(r){var c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:m.UPDATE_ITEMS_LOADING}),a.prev=1,a.next=4,h()({method:"put",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e,"/items/").concat(t),headers:{"Content-Type":"application/json",token:g},data:n});case 4:c=a.sent,r({type:m.UPDATE_ITEMS_SUCCESS,payload:c.data}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),r({type:m.UPDATE_ITEMS_FAILURE,error:a.t0});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(n,p,R))},children:"Save"}),Object(_.jsx)("button",{type:"button",onClick:function(){return r(function(e,t){return function(){var n=Object(j.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:m.DELETE_ITEMS_LOADING}),n.prev=1,n.next=4,h()({method:"delete",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e,"/items/").concat(t),headers:{"Content-Type":"application/json",token:g}});case 4:r=n.sent,a({type:m.DELETE_ITEMS_SUCCESS,payload:r.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a({type:m.DELETE_ITEMS_FAILURE,error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,p))},children:"Delete"})]})},G=M,B=n(17),V=n.n(B),H=function(){var e=Object(u.g)();console.log(e);var t=Object(i.b)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(""),d=Object(l.a)(s,2),p=d[0],O=d[1],v=Object(a.useState)(""),S=Object(l.a)(v,2),f=S[0],T=S[1],y={todo_id:e.id,name:c,description:p,proirity:f};return Object(_.jsx)("div",{className:V.a.wrapper,children:Object(_.jsxs)("form",{className:V.a.form,onSubmit:function(n){n.preventDefault(),t(function(e,t){return function(){var n=Object(j.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:m.POST_ITEMS_LOADING}),n.prev=1,n.next=4,h()({method:"post",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e,"/items"),headers:{"Content-Type":"application/json",token:g},data:t});case 4:r=n.sent,a({type:m.POST_ITEMS_SUCCESS,payload:r.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a({type:m.POST_ITEMS_FAILURE,error:n.t0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(e.id,y)),o(""),O(""),T("")},children:[Object(_.jsx)("div",{className:V.a.w100,children:Object(_.jsxs)("label",{htmlFor:"Name",children:["Name:",Object(_.jsx)("input",{placeholder:"Name",value:c,onChange:function(e){return o(e.target.value)},id:"name",className:V.a.w100})]})}),Object(_.jsx)("div",{className:V.a.w100,children:Object(_.jsxs)("label",{htmlFor:"Description",children:["Description:",Object(_.jsx)("input",{placeholder:"Description",value:p,onChange:function(e){return O(e.target.value)},id:"Description",className:V.a.w100})]})}),Object(_.jsx)("div",{className:V.a.w100,children:Object(_.jsxs)("label",{htmlFor:"Proirity",children:["proirity:",Object(_.jsxs)("select",{value:f,onChange:function(e){return T(e.target.value)},className:V.a.w100,children:[Object(_.jsx)("option",{disabled:!0,defaultValue:!0,hidden:!0,children:"Proirity"}),Object(_.jsx)("option",{value:"High",children:"High"}),Object(_.jsx)("option",{value:"Medium",children:"Medium"}),Object(_.jsx)("option",{value:"Low",children:"Low"})]})]})}),Object(_.jsx)("button",{className:"".concat(V.a.btn," ").concat(V.a.w100),type:"submit",children:"Submit"})]})})},J=n(45),W=n.n(J),Y=function(){var e=Object(u.f)();console.log(e);var t=Object(u.g)(),n=Object(i.b)(),r=Object(i.c)((function(e){return e})),c=r.DeleteItemsReducer,o=r.UpdateItemsReducer,s=r.PostItemsReducer;Object(a.useEffect)((function(){var e;n((e=t.id,function(){var t=Object(j.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:m.GetItemsLoading}),t.prev=1,t.next=4,h()({method:"get",url:"https://vast-eyrie-23535.herokuapp.com/api/v1/todos/".concat(e,"/items"),headers:{"Content-Type":"application/json",token:g}});case 4:a=t.sent,n({type:m.GetItemsSuccess,payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:m.GetItemsFailure,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,o,s]);return Object(_.jsxs)("main",{className:W.a.main,children:[Object(_.jsx)(H,{}),function(){var e=r.GetItemsReducer,t=e.loading,n=e.items,a=e.error,o=n.length,i=c.error,u=s.error;return t?"Loading data .............":o>0?n.map((function(e){return Object(_.jsx)(G,{item:e},e.id)})):i?"".concat(i):u?"".concat(u):a}()]})},Z=n(46),K=n.n(Z),X=function(){var e=Object(i.b)(),t=Object(u.f)(),n=function(){e({type:m.SignOut,value:null}),t.push("/")};return Object(_.jsx)("button",{className:K.a.button,type:"submit",onClick:function(){return n()},children:"SIGN OUT"})},z=n(32),Q=n.n(z),q=function(){var e=Object(i.c)((function(e){return e.RegisterationReducer}));return Object(a.useEffect)((function(){e.items||localStorage.getItem("token")?document.getElementById("navbar").style.display="block":localStorage.getItem("token")||(document.getElementById("navbar").style.display="none")}),[e]),Object(_.jsxs)("nav",{id:"navbar",className:Q.a.navbar,children:[Object(_.jsx)(s.b,{to:"/todos/:id",className:Q.a.button,children:"HOME"}),Object(_.jsx)(X,{})]})};n(85);var $=function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(q,{}),Object(_.jsxs)(u.c,{children:[Object(_.jsx)(u.a,{path:"/",component:T,exact:!0}),Object(_.jsx)(u.a,{path:"/register",component:I}),Object(_.jsx)(u.a,{path:"/todos/:id",exact:!0,component:w}),Object(_.jsx)(u.a,{path:"/todos/:id/items",exact:!0,component:Y})]})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},te=n(47),ne=n.n(te),ae=n(20),re=n(48),ce=n(49),oe=n(2),ie={items:[],loading:!1,error:"",message:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.FetchLoading:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0,error:""});case m.FetchFailure:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:t.error});case m.FetchSuccess:return Object(oe.a)(Object(oe.a)({},e),{},{items:t.payload,loading:!1,error:""});default:return e}},ue={items:[],loading:!1,error:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.POST_TODO_LOADING:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.POST_TODO_SUCCESS:return Object(oe.a)(Object(oe.a)({},e),{},{items:t.payload,loading:!1});case m.POST_TODO_FAILURE:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error});default:return e}},de={items:null,loading:!1,error:null},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.RegisterationLoading:case m.SignInLoading:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.RegisterationSuccess:case m.SignInSuccess:return Object(oe.a)(Object(oe.a)({},e),{},{items:t.payload,loading:!1});case m.RegisterationFailure:case m.SignInFailure:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error});case m.SignOut:return localStorage.removeItem("token"),Object(oe.a)(Object(oe.a)({},e),{},{items:t.value});default:return e}},be={message:null,loading:!1,error:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UpdateTodoLoading:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.UpdateTodoSuccess:return Object(oe.a)(Object(oe.a)({},e),{},{message:t.payload,loading:!1});case m.UpdateTodoFailure:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},Oe={message:null,loading:!1,error:null},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.DeleteTodoLoading:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.DeleteTodoSuccess:return Object(oe.a)(Object(oe.a)({},e),{},{message:t.payload,loading:!1});case m.DeleteTodoFailure:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},me=n(50),ge={items:[],loading:!1,error:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.GetItemsLoading:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.GetItemsSuccess:return Object(oe.a)(Object(oe.a)({},e),{},{items:Object(me.a)(t.payload),loading:!1});case m.GetItemsFailure:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},Se={item:{},loading:!1,error:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.POST_ITEMS_LOADING:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.POST_ITEMS_SUCCESS:return Object(oe.a)(Object(oe.a)({},e),{},{item:t.payload,loading:!1});case m.POST_ITEMS_FAILURE:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},fe={item:{},loading:!1,error:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.UPDATE_ITEMS_LOADING:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.UPDATE_ITEMS_SUCCESS:return Object(oe.a)(Object(oe.a)({},e),{},{item:t.payload,loading:!1});case m.UPDATE_ITEMS_FAILURE:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},ye={message:{},loading:!1,error:null},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.DELETE_ITEMS_LOADING:return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0});case m.DELETE_ITEMS_SUCCESS:return Object(oe.a)(Object(oe.a)({},e),{},{message:t.payload,loading:!1});case m.DELETE_ITEMS_FAILURE:return Object(oe.a)(Object(oe.a)({},e),{},{error:t.error,loading:!1});default:return e}},Ee=Object(ae.combineReducers)({RegisterationReducer:pe,todoReducer:se,PostTodoReducer:le,UpdateTodoReducer:je,DeleteTodoReducer:he,GetItemsReducer:ve,PostItemsReducer:_e,UpdateItemsReducer:Te,DeleteItemsReducer:xe}),Ie=Object(ae.createStore)(Ee,Object(ce.composeWithDevTools)(Object(ae.applyMiddleware)(re.a,ne.a)));o.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(i.a,{store:Ie,children:Object(_.jsx)(s.a,{basename:"/todoapireact",children:Object(_.jsx)($,{})})})}),document.getElementById("root")),ee()}},[[86,1,2]]]);
//# sourceMappingURL=main.e981ba72.chunk.js.map