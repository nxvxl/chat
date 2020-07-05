(function(t){function e(e){for(var o,r,i=e[0],c=e[1],u=e[2],m=0,p=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},n={app:0},a=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec"),n=s.n(o);n.a},1:function(t,e){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=s("8c4f"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("small",[t._v(" Created by: "),s("a",{attrs:{href:"https://github.com/nxvxl"}},[t._v("noval")])])])}],i={name:"App"},c=i,u=(s("034f"),s("2877")),l=Object(u["a"])(c,a,r,!1,null,null,null),m=l.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("h1",[t._v("Login")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[s("div",{staticClass:"form-control"},[s("label",[t._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),s("div",{staticClass:"form-control"},[s("label",[t._v("Room")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.room,expression:"room"}],attrs:{type:"text",required:""},domProps:{value:t.room},on:{input:function(e){e.target.composing||(t.room=e.target.value)}}})]),s("button",{staticClass:"btn-block",attrs:{type:"submit"}},[t._v("Join")])])])},f=[],h=(s("d3b7"),s("25f0"),{name:"LoginPage",data:function(){return{username:"",room:""}},methods:{handleSubmit:function(){var t=Math.random().toString(36).substring(2);this.$store.commit("SET_USERNAME",this.username),this.$store.commit("SET_ROOM",this.room),this.$store.commit("SET_SESSION_ID",t),this.$router.push("/room")}}}),d=h,v=Object(u["a"])(d,p,f,!1,null,null,null),g=v.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"chat-room"},[o("h1",[t._v("Chat Room "+t._s(t.$store.state.room))]),o("nav",{staticClass:"topnav"},[o("span",{staticClass:"online-users"},[t._v(t._s(t.$store.state.onlineUsers)+" Online User"+t._s(t.$store.state.onlineUsers>1?"s":""))]),o("button",{staticClass:"btn-logout",on:{click:function(e){return t.logout()}}},[t._v("logout")])]),o("div",{staticClass:"chat-box"},t._l(t.getMessages,(function(e,s){return o("div",{key:s,staticClass:"chat-bubble-wrapper"},["notification"==e.type?o("div",{staticClass:"chat-notification"},[t._v(" "+t._s(e.message)+" ")]):o("div",{staticClass:"chat-bubble",class:{sender:e.sessionId==t.$store.state.sessionId}},[o("h5",{staticClass:"chat-username"},[t._v(t._s(e.username))]),o("p",{staticClass:"chat-content"},[t._v(t._s(e.content))])])])})),0),o("form",{staticClass:"chat-input",on:{submit:function(e){return e.preventDefault(),t.sendMessage()}}},[o("label",[t._v(t._s(t.$store.state.username))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{type:"text"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),o("button",{staticClass:"btn-send",attrs:{type:"submit"}},[t._v("Send")])]),o("audio",{ref:"notification",attrs:{src:s("e528")}})])},_=[],S=s("5530"),E=s("2f62"),$=s("8055"),y=s.n($),O={name:"ChatRoom",data:function(){return{message:"",username:this.$store.state.username,socket:null}},methods:{sendMessage:function(){this.message&&(this.$store.dispatch("sendMessage",this.message),this.message="")},scrollToBottom:function(){var t=this.$el.querySelector(".chat-box");t.scrollTop=t.scrollHeight},logout:function(){this.$router.push("/")}},computed:Object(S["a"])({},Object(E["b"])(["getMessages"])),mounted:function(){var t=this;this.socket=y()("https://noval-chat.herokuapp.com"),this.socket.on("connect",(function(){t.socket.emit("join",{room:t.$store.state.room,username:t.$store.state.username}),t.$store.dispatch("fetchMessages")})),this.socket.on("notification",(function(e){t.$store.dispatch("pushNotification",e)})),this.socket.on("message",(function(e){t.$store.commit("PUSH_MESSAGE",e),e.username!=t.$store.state.username&&(t.$refs.notification.currentTime=0,t.$refs.notification.play())})),this.scrollToBottom()},updated:function(){this.scrollToBottom()},destroyed:function(){this.socket.emit("leave",{room:this.$store.state.room,username:this.$store.state.username}),this.$store.commit("RESET")}},M=O,x=Object(u["a"])(M,b,_,!1,null,null,null),T=x.exports,w=(s("99af"),s("bc3a")),C=s.n(w);o["a"].use(E["a"]);var k=new E["a"].Store({state:{sessionId:"",username:"",room:"",messages:[],onlineUsers:0},getters:{getMessages:function(t){return t.messages}},mutations:{SET_SESSION_ID:function(t,e){t.sessionId=e},SET_USERNAME:function(t,e){t.username=e},SET_ROOM:function(t,e){t.room=e},SET_MESSAGES:function(t,e){t.messages=e},PUSH_MESSAGE:function(t,e){t.messages.push(e)},RESET:function(t){t.username="",t.room="",t.messages=[]},SET_ONLINE_USERS:function(t,e){t.onlineUsers=e}},actions:{fetchMessages:function(t){var e=t.commit,s=t.state;C.a.get("".concat("https://noval-chat.herokuapp.com","/api/messages?room=").concat(s.room)).then((function(t){return e("SET_MESSAGES",t.data.messages)})).catch(console.error)},sendMessage:function(t,e){var s=t.state;C.a.post("".concat("https://noval-chat.herokuapp.com","/api/messages"),{sessionId:s.sessionId,username:s.username,room:s.room,content:e}).catch(console.log)},pushNotification:function(t,e){var s=t.commit;s("PUSH_MESSAGE",e),s("SET_ONLINE_USERS",e.onlineUsers)}}}),j=k,P=new n["a"]({routes:[{path:"/",component:g,name:"login-page"},{path:"/room/",component:T,name:"chat-room",beforeEnter:function(t,e,s){j.state.username&&j.state.room?s():s({path:"/"})}}]}),U=P;o["a"].config.productionTip=!1,o["a"].use(n["a"]),new o["a"]({render:function(t){return t(m)},router:U,store:j}).$mount("#app")},"85ec":function(t,e,s){},e528:function(t,e,s){t.exports=s.p+"media/pristine.ogg"}});
//# sourceMappingURL=app.js.map