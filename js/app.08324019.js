(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1a03c336"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"f53bd068"}[t]+".css",o=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4230:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("f309");n["default"].use(r["a"]);var o=new r["a"]({icons:{iconfont:"mdi"},theme:{dark:!1}}),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:t.goDark}},[a("v-content",[a("v-container",{attrs:{"align-center":""}},[a("Header",{attrs:{appBarBG:t.appBarBG},on:{changeTheme:function(e){return t.updateTheme(e)}}}),a("transition",{attrs:{name:"router-animation",mode:"out-in","enter-active-class":"animated fadeIn fast","leave-active-class":"animated fadeOut faster"}},[a("router-view")],1)],1)],1),a("Footer")],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"mx-auto",staticStyle:{background:"#344d3a"},attrs:{temporary:"",app:"",width:"100%",height:"100%",elevation:"3"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("div",{staticClass:"text-right"},[a("v-btn",{attrs:{text:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",[t._v("fa fa-close")])],1)],1),a("v-list",{staticClass:"pt-4 text-center font-weight-bold",attrs:{align:"center",justify:"center"}},[a("v-list-item",{attrs:{"active-class":"green--text",to:"/"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("HOME")])],1)],1),a("v-list-item",{attrs:{"active-class":"green--text",to:"/resume"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("RESUME")])],1)],1),a("v-list-item",{attrs:{"active-class":"green--text",to:"/services"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("SERVICES")])],1)],1),a("v-list-item",{attrs:{"active-class":"green--text",to:"/portfolio"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("PORTFOLIO")])],1)],1),a("v-list-item",{attrs:{"active-class":"green--text",to:"/contact"}},[a("v-list-item-content",[a("v-list-item-title",[t._v("CONTACT")])],1)],1)],1)],1),a("v-app-bar",{attrs:{flat:"",dense:"",color:t.appBarBG,"scroll-off-screen":"",fixed:"",elevation:"0"}},[a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-items",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100%","justify-content":"center!important","text-align":"center"}},[a("v-btn",{attrs:{text:"",to:"/","active-class":"green--text headline"}},[t._v("Home")]),a("v-btn",{attrs:{text:"",to:"/resume","active-class":"green--text headline"}},[t._v("Resume")]),a("v-btn",{attrs:{text:"",to:"/services","active-class":"green--text headline"}},[t._v("Services")]),a("v-btn",{attrs:{text:"",to:"/portfolio","active-class":"green--text headline"}},[t._v("Portfolio")]),a("v-btn",{attrs:{text:"",to:"/contact","active-class":"green--text headline"}},[t._v("Contact")])],1)],1)],1)},c=[],u={props:{appBarBG:{type:String}},data:function(){return{drawer:null}}},p=u,d=a("2877"),f=a("6544"),m=a.n(f),v=a("40dc"),h=a("5bc1"),g=a("8336"),b=a("132d"),y=a("8860"),w=a("da13"),x=a("5d23"),_=a("f774"),k=a("2a7f"),S=Object(d["a"])(p,l,c,!1,null,"b82ddebe",null),C=S.exports;m()(S,{VAppBar:v["a"],VAppBarNavIcon:h["a"],VBtn:g["a"],VIcon:b["a"],VList:y["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemTitle:x["b"],VNavigationDrawer:_["a"],VToolbarItems:k["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"pa-3 green--text p-5 mt-5",staticStyle:{"font-size":"14px!important",background:"transparent"}},[t._v(" rk4bir.github.io "),a("v-spacer"),a("div",[t._v("© "+t._s((new Date).getFullYear()))])],1)},P=[],V={},O=V,j=a("553a"),E=a("2fa4"),B=Object(d["a"])(O,I,P,!1,null,"82a8c844",null),L=B.exports;m()(B,{VFooter:j["a"],VSpacer:E["a"]});var T={name:"App",metaInfo:{title:"Home",titleTemplate:"%s ← Kabir's Space",meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"description",content:"Raihan Kabir's Portfolio"},{charset:"utf-8"},{property:"og:title",content:"Raihan Kabir's Portfolio"},{property:"og:site_name",content:"Raihan Kabir's Portfolio"},{property:"og:type",content:"website"},{property:"og:url",content:"https://rk4bir.github.io"},{property:"og:image",content:"https://i.imgur.com/a8TeA0D.png"},{property:"og:description",content:"Raihan Kabir's Portfolio"}]},components:{Header:C,Footer:L},data:function(){return{goDark:!1,appBarBG:"#ffffff"}}},A=T,D=a("7496"),R=a("a523"),H=a("a75b"),N=Object(d["a"])(A,i,s,!1,null,null,null),F=N.exports;m()(N,{VApp:D["a"],VContainer:R["a"],VContent:H["a"]});a("d3b7");var M=a("8c4f"),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"mt-5 pt-2"},[a("div",{staticClass:"container",staticStyle:{"margin-top":"30px"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-sm-12 col-lg-3"},[a("VueCompareImage",{staticStyle:{width:"240px"},attrs:{hover:"",sliderLineWidth:t.sliderLine,handleSize:t.hSize,leftImage:t.leftImage,rightImage:t.rightImage,sliderPositionPercentage:t.sliderPosition}}),a("br"),a("vue-typer",{staticClass:"headline",style:{fontSize:"2.2rem!important"},attrs:{repeat:0,text:"Raihan Kabir"}}),a("br"),a("vue-typer",{style:{fontSize:"1rem!important"},attrs:{text:t.titles,repeat:1/0,shuffle:!1,"initial-action":"erasing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":1980,"erase-delay":150,"erase-style":"select-back","erase-on-complete":!1,"caret-animation":"smooth"}})],1),a("div",{staticClass:"col-md-8 col-sm-12 col-lg-9 mt-5"},[a("v-card",{attrs:{flat:"",color:"transparent"}},[a("div",{staticClass:"mt-5"},[a("div",{staticClass:"font-weight-light text-justify",staticStyle:{"font-size":"0.9rem","letter-spacing":"2px"}},[a("div",[a("p",[t._v("I am a software developer with extensive experience with linux system. I have played with a lot of tools and technologies. However, I like to call these tools and tech. as my primary skills for software development-")]),a("p",[a("strong",{staticStyle:{color:"green"}},[t._v("Python")]),t._v(" ➞ Django, DRF, Flask, Celery, Redis, Channels, Selenium, BeautifulSoup"),a("br"),a("strong",{staticStyle:{color:"green"}},[t._v("JavaScript")]),t._v(" ➞ jQuery, Vue, Nuxt, Node, Express"),a("br"),a("strong",{staticStyle:{color:"green"}},[t._v("Database")]),t._v(" ➞ PostgreSQL, MySQL, Firestore, MongoDB, SQLite3"),a("br"),a("strong",{staticStyle:{color:"green"}},[t._v("Others")]),t._v(" ➞ Linux, Docker, Virtual Environment, Git, CI-CD, Unit testing, Automation, Scripting ")]),a("br"),a("p",[t._v("Also, I am very comfortable with HTML5, CSS3 and some cutting edge front-end technologies. Apart from development I can deploy apps to cloud providers like Heroku, AWS, or any VPS or even on cPanel. Programming is my passion and I am always ready to take challenges for any kind of unique or challenging tasks. I am a quick learner and I enjoy being challenged and engaging with projects that require me to work outside my comfort zone and knowledge set, as continuing to learn new technologies and development techniques.")])]),a("div",{staticClass:"mt-5"},t._l(t.icons,(function(e){return a("v-btn",{key:e.icon,staticClass:"mr-2",attrs:{small:"",fab:"",dark:"",outlined:"",color:"green",href:e.href,target:"_blank"}},[a("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1)})),1)])])])],1)])])])},K=[],q=a("e956"),G=a("83c1"),$=a.n(G),Q={metaInfo:{title:"Home",titleTemplate:"%s ← Raihan Kabir"},components:{"vue-typer":q["VueTyper"],VueCompareImage:$.a},data:function(){return{icons:[{href:"https://gitlab.com/rk4bir",icon:"fa fa-gitlab"},{href:"https://github.com/rk4bir",icon:"fa fa-github"},{href:"https://stackoverflow.com/users/10371817/raihan-kabir",icon:"fa fa-stack-overflow"},{href:"https://www.linkedin.com/in/rk4bir",icon:"fa fa-linkedin"}],titles:["Passionate Learner","Software Developer (BE-heavy)","Web Scraper"],leftImage:a("e5b9"),rightImage:a("c376"),sliderLine:0,hSize:0,sliderPosition:.5}}},J=Q,U=(a("cccb"),a("b0af")),W=a("a722"),Y=Object(d["a"])(J,z,K,!1,null,null,null),X=Y.exports;m()(Y,{VBtn:g["a"],VCard:U["a"],VIcon:b["a"],VLayout:W["a"]});var Z=a("58ca");n["default"].use(M["a"]),n["default"].use(Z["a"]);var tt=new M["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:X},{path:"/contact",name:"contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/resume",name:"resume",component:function(){return a.e("about").then(a.bind(null,"1ba2"))}},{path:"/services",name:"services",component:function(){return a.e("about").then(a.bind(null,"f23e"))}},{path:"/portfolio",name:"portfolio",component:function(){return a.e("about").then(a.bind(null,"c9e5"))}},{path:"*",name:"Error",component:function(){return a.e("about").then(a.bind(null,"dda8"))}}]});n["default"].config.productionTip=!1,new n["default"]({router:tt,vuetify:o,render:function(t){return t(F)}}).$mount("#app")},c376:function(t,e,a){t.exports=a.p+"img/rk4bir_black.bf7c143f.svg"},cccb:function(t,e,a){"use strict";var n=a("4230"),r=a.n(n);r.a},e5b9:function(t,e,a){t.exports=a.p+"img/rk4bir_green.ad59ed7d.svg"}});
//# sourceMappingURL=app.08324019.js.map