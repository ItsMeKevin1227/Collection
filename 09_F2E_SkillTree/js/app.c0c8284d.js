(function(t){function e(e){for(var s,a,o=e[0],r=e[1],l=e[2],p=0,m=[];p<o.length;p++)a=o[p],n[a]&&m.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(m.length)m.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],s=!0,o=1;o<i.length;o++){var r=i[o];0!==n[r]&&(s=!1)}s&&(c.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={app:0},c=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/09_F2E_SkillTree/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=r;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0853":function(t,e,i){t.exports=i.p+"img/img-ship-developer@2x.b4538555.png"},"106f":function(t,e,i){},"25db":function(t,e,i){"use strict";var s=i("449c"),n=i.n(s);n.a},"428f":function(t,e,i){},"449c":function(t,e,i){},"4c60":function(t,e,i){t.exports=i.p+"img/img-planet-js@2x.f8915513.png"},"54b4":function(t,e,i){t.exports=i.p+"img/img-ship-noob@2x.fc436d4b.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c");var s=i("2b0e"),n=(i("428f"),i("bfe8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)}),c=[],a={name:"App"},o=a,r=(i("5c0b"),i("2877")),l=Object(r["a"])(o,n,c,!1,null,null,null),d=l.exports,p=i("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homepage"},[s("div",{staticClass:"header"},[s("div",{staticClass:"txt"},[s("h1",[t._v("FRONT-END SKILL TREE")]),s("span",{staticClass:"sub-title"},[t._v("CURRENT RANK")]),s("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.nowTxt?s("h2",{key:"NOOB"},[t._v("FRONT-END\n          "),s("br"),t._v("NOOB")]):1===t.nowTxt?s("h2",{key:"Beginner"},[t._v("FRONT-END\n          "),s("br"),t._v("Beginner")]):2===t.nowTxt?s("h2",{key:"Developer"},[t._v("FRONT-END\n          "),s("br"),t._v("Developer")]):3===t.nowTxt?s("h2",{key:"Master"},[t._v("FRONT-END\n          "),s("br"),t._v("Master")]):t._e()])],1),s("div",{staticClass:"img"},[s("img",{attrs:{width:"300",src:t.nowImg,alt:""}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.nowTxt?s("p",{key:"NOOB",staticClass:"myTxt"},[t._v("Welcome to aboard. Your mission is:\n          "),s("span",{staticClass:"main-color"},[t._v("\n            Collect the resources and learn the skills to upgrade the ship.\n          ")]),t._v("\n          Good luck, captain!\n        ")]):1===t.nowTxt?s("p",{key:"Beginner",staticClass:"myTxt"},[s("strong",[t._v("Congratulations! ")]),t._v("You become the\n          "),s("span",{staticClass:"main-color"},[t._v("\n            Front-end Beginner”.\n          ")]),t._v("\n          “ Keep searching the resources to upgrade to the next level.\n        ")]):2===t.nowTxt?s("p",{key:"Developer",staticClass:"myTxt"},[s("strong",[t._v("You’re doing well!")]),t._v(" Now you’re a\n          "),s("span",{staticClass:"main-color"},[t._v("\n            “Front-end Developer”.\n          ")]),t._v("\n          It’s close to complete the upgrading program.\n          "),s("br"),t._v("Next level: Front-end Master.\n        ")]):3===t.nowTxt?s("p",{key:"Master",staticClass:"myTxt"},[s("strong",[t._v("Excellent!")]),t._v(" You’re a\n          "),s("span",{staticClass:"main-color"},[t._v("\n            “Front-end Master”\n          ")]),t._v("\n          now. But a new gallery was just detected by the system. Captain, make your choice.\n        ")]):t._e()])],1)]),s("div",{staticClass:"body"},[s("div",{staticClass:"body-title"},[s("div",{staticClass:"step step-1",on:{"~click":function(e){t.addItem("basic")}}},[t._m(0)]),s("div",{staticClass:"step step-2"},[s("div",{staticClass:"step-img",class:{canClick:t.isCategory("css")}},[s("img",{attrs:{width:"100",src:i("ac59"),alt:""}})])]),s("div",{staticClass:"step step-3"},[s("div",{staticClass:"step-img",class:{canClick:t.isCategory("js")}},[s("img",{attrs:{width:"100",src:i("4c60"),alt:""}})])]),s("div",{staticClass:"step step-4"},[s("div",{staticClass:"step-img",class:{canClick:t.isCategory("manager")}},[s("img",{attrs:{width:"100",src:i("ff86"),alt:""}})])])]),s("div",{staticClass:"body-content"},[s("div",{staticClass:"step step-1"},t._l(t.basicLists,function(e,i){return s("div",{staticClass:"step-item",class:{canClick:t.isCategory("basic"),isDone:e.done,isActive:t.myDetail.id===e.id},on:{click:function(e){t.showDetail(t.basicLists[i])}}},[s("div",{staticClass:"item-img"},[s("span",{class:"icon-sharp-"+e.icon+"-24px"})]),s("div",{staticClass:"item-list"},[s("p",[s("span",{staticClass:"icon-sharp-build-24px"}),t._v(t._s(t.checkedLength(e.recommend))+"/"+t._s(e.recommend&&e.recommend.length))]),s("p",[s("span",{staticClass:"icon-sharp-filter_tilt_shift-24px"}),t._v(t._s(t.checkedLength(e.optional))+"/"+t._s(e.optional&&e.optional.length))])])])})),s("div",{staticClass:"step step-2"},t._l(t.cssLists,function(e,i){return s("div",{staticClass:"step-item",class:{canClick:t.isCategory("css"),isDone:e.done,isActive:t.myDetail.id===e.id},on:{click:function(e){t.showDetail(t.cssLists[i])}}},[s("div",{staticClass:"item-img"},[s("span",{class:"icon-sharp-"+e.icon+"-24px"})]),s("div",{staticClass:"item-list"},[s("p",[s("span",{staticClass:"icon-sharp-build-24px"}),t._v(t._s(t.checkedLength(e.recommend))+"/"+t._s(e.recommend&&e.recommend.length))]),s("p",[s("span",{staticClass:"icon-sharp-filter_tilt_shift-24px"}),t._v(t._s(t.checkedLength(e.optional))+"/"+t._s(e.optional&&e.optional.length))])])])})),s("div",{staticClass:"step step-3"},t._l(t.jsLists,function(e,i){return s("div",{staticClass:"step-item",class:{canClick:t.isCategory("js"),isDone:e.done,isActive:t.myDetail.id===e.id},on:{click:function(e){t.showDetail(t.jsLists[i])}}},[s("div",{staticClass:"item-img"},[s("span",{class:"icon-sharp-"+e.icon+"-24px"})]),s("div",{staticClass:"item-list"},[s("p",[s("span",{staticClass:"icon-sharp-build-24px"}),t._v(t._s(t.checkedLength(e.recommend))+"/"+t._s(e.recommend&&e.recommend.length))]),s("p",[s("span",{staticClass:"icon-sharp-filter_tilt_shift-24px"}),t._v(t._s(t.checkedLength(e.optional))+"/"+t._s(e.optional&&e.optional.length))])])])})),s("div",{staticClass:"step step-4"},t._l(t.managerLists,function(e,i){return s("div",{staticClass:"step-item",class:{canClick:t.isCategory("manager"),isActive:t.myDetail.id===e.id,isDone:e.done},on:{click:function(e){t.showDetail(t.managerLists[i])}}},[s("div",{staticClass:"item-img"},[s("span",{class:"icon-sharp-"+e.icon+"-24px"})]),s("div",{staticClass:"item-list"},[s("p",[s("span",{staticClass:"icon-sharp-build-24px"}),t._v(t._s(t.checkedLength(e.recommend))+"/"+t._s(e.recommend&&e.recommend.length))]),s("p",[s("span",{staticClass:"icon-sharp-filter_tilt_shift-24px"}),t._v(t._s(t.checkedLength(e.optional))+"/"+t._s(e.optional&&e.optional.length))])])])}))])]),s("div",{staticClass:"note"},[s("div",{staticClass:"note-header"},[s("div",{staticClass:"title"},[s("span",{class:"icon-sharp-"+t.myDetail.icon+"-24px"}),s("h2",[t._v(t._s(t.myDetail.title))])])]),s("div",{staticClass:"note-body"},[t.myDetail.recommend&&t.myDetail.recommend.length>0?s("div",{staticClass:"note-container"},[t._m(1),t._l(t.myDetail.recommend,function(e,i){return s("button",{staticClass:"btn",class:{isActive:e.checked},on:{click:function(e){e.stopPropagation(),t.addCheck(t.myDetail.id,i,"recommend")}}},[t._v(t._s(e.title))])})],2):t._e(),t.myDetail.optional&&t.myDetail.optional.length>0?s("div",{staticClass:"note-container"},[t._m(2),t._l(t.myDetail.optional,function(e,i){return s("button",{staticClass:"btn",class:{isActive:e.checked},on:{click:function(e){e.stopPropagation(),t.addCheck(t.myDetail.id,i,"optional")}}},[t._v(t._s(e.title))])})],2):t._e()])])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"step-img canClick"},[s("img",{attrs:{width:"100",src:i("b9f5"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("span",{staticClass:"icon-sharp-settings-24px"}),i("p",[t._v("RECOMMENDED")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("span",{staticClass:"icon-sharp-filter_tilt_shift-24px"}),i("p",[t._v("OPTIONAL")])])}],u=(i("7514"),i("20d6"),{name:"homepage",data:function(){return{clickList:["basic"],shipImg:[i("54b4"),i("8da7"),i("0853"),i("f399")],basicData:[{category:"basic",id:"skills",icon:"category",title:"BASIC SKILLS",done:!1,recommend:[{title:"Learn HTML",checked:!1},{title:"Basics of CSS",checked:!1},{title:"Basics of JavaScript",checked:!1}],optional:[]},{category:"basic",id:"tools",icon:"build",title:"BASIC Tools",done:!1,recommend:[{title:"Git - Version Contro",checked:!1},{title:"Basic Terminal Usage",checked:!1},{title:"Text Editor",checked:!1},{title:"Heart of Reserching",checked:!1}],optional:[]},{category:"css",id:"framework",icon:"flip_to_front",title:"CSS FRAMEWORK",done:!1,recommend:[{title:"Bootstrap",checked:!1}],optional:[{title:"UIKit",checked:!1},{title:"Foundation",checked:!1},{title:"Semantic UI",checked:!1}]},{category:"css",id:"prepro",icon:"view_quilt",title:"CSS PREPROCESSORS",done:!1,recommend:[{title:"Sass",checked:!1},{title:"PostCSS",checked:!1}],optional:[{title:"Less",checked:!1},{title:"Stylus",checked:!1}]},{category:"css",id:"architechture",icon:"developer_board",title:"CSS ARCHITECHTURE",done:!1,recommend:[{title:"OOCSS",checked:!1}],optional:[{title:"SMACSS",checked:!1},{title:"BEM",checked:!1}]},{category:"css",id:"cssSkill",icon:"devices",title:"CSS SKILLS",done:!1,recommend:[{title:"Responsive",checked:!1},{title:"Flexbox",checked:!1}],optional:[]},{category:"css",id:"mastery",icon:"widgets",title:"CSS MASTERY",done:!0,recommend:[],optional:[{title:"Grid Layout",checked:!1},{title:"Animation",checked:!1},{title:"Transform 2D, 3D",checked:!1}]},{category:"js",id:"dom",icon:"hdr_strong",title:"BASIC DOM",done:!0,recommend:[],optional:[{title:"jQuery",checked:!1}]},{category:"js",id:"draw",icon:"gradient",title:"WEB DRAWING",done:!0,recommend:[],optional:[{title:"SVG",checked:!1},{title:"Canvas",checked:!1},{title:"D3.js",checked:!1}]},{category:"js",id:"es6",icon:"format_quote",title:"JAVASCRIPT SKILLS",done:!1,recommend:[{title:"ES6",checked:!1}],optional:[]},{category:"js",id:"jsframework",icon:"developer_mode",title:"JAVASCRIPT FRAMEWORK",done:!1,recommend:[{title:"Vue.js",checked:!1},{title:"Angular",checked:!1},{title:"React.js",checked:!1}],optional:[]},{category:"js",id:"jsprepro",icon:"nfc",title:"JAVASCRIPT PREPROCESSORS",done:!0,recommend:[],optional:[{title:"TypeScript",checked:!1},{title:"Babel",checked:!1},{title:"CoffeeScript",checked:!1}]},{category:"manager",id:"npm",icon:"device_hub",title:"PACKAGE MANAGERS",done:!1,recommend:[{title:"NPM",checked:!1},{title:"YARN",checked:!1}],optional:[{title:"Bower",checked:!1}]},{category:"manager",id:"task",icon:"import_contacts",title:"TASK RUNNERS",done:!1,recommend:[{title:"npm scripts",checked:!1},{title:"gulp",checked:!1}],optional:[{title:"grunt",checked:!1}]},{category:"manager",id:"buildtools",icon:"table_chart",title:"BUILD TOOLS",done:!1,recommend:[{title:"Webpack",checked:!1}],optional:[{title:"Parcel",checked:!1}]}],myDetail:{},nowTxt:0}},mounted:function(){this.myDetail=this.basicData[0]},computed:{nowImg:function(){return this.isCategory("manager")?(this.nowTxt=3,this.shipImg[3]):this.isCategory("js")?(this.nowTxt=2,this.shipImg[2]):this.isCategory("css")?(this.nowTxt=1,this.shipImg[1]):(this.nowTxt=0,this.shipImg[0])},basicLists:function(){return this.basicData.filter(function(t){return"basic"===t.category})},cssLists:function(){return this.basicData.filter(function(t){return"css"===t.category})},jsLists:function(){return this.basicData.filter(function(t){return"js"===t.category})},managerLists:function(){return this.basicData.filter(function(t){return"manager"===t.category})}},methods:{isCategory:function(t){return-1!==this.clickList.findIndex(function(e){return e===t})},addItem:function(t){this.clickList.push(t)},showDetail:function(t){this.myDetail=t},addCheck:function(t,e,i){var s=this.basicData.find(function(e){return e.id===t});"recommend"===i?(s.recommend[e].checked=!0,s.done=s.recommend.every(function(t){return!0===t.checked})):"optional"===i&&(s.optional[e].checked=!0),this.basicLists.every(function(t){return!0===t.done})&&this.clickList.push("css"),this.cssLists.every(function(t){return!0===t.done})&&this.clickList.push("js"),this.jsLists.every(function(t){return!0===t.done})&&this.clickList.push("manager")},checkedLength:function(t){return t.filter(function(t){return!0===t.checked}).length}}}),g=u,f=(i("25db"),Object(r["a"])(g,m,h,!1,null,"332a9700",null)),v=f.exports;s["a"].use(p["a"]);var C=new p["a"]({routes:[{path:"/",name:"Home",component:v}]});s["a"].config.productionTip=!1,new s["a"]({router:C,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("106f"),n=i.n(s);n.a},"8da7":function(t,e,i){t.exports=i.p+"img/img-ship-beginner@2x.18348634.png"},ac59:function(t,e,i){t.exports=i.p+"img/img-planet-css@2x.fb5cc8aa.png"},b9f5:function(t,e,i){t.exports=i.p+"img/img-planet-basics@2x.c56e8252.png"},bfe8:function(t,e,i){},f399:function(t,e,i){t.exports=i.p+"img/img-ship-master@2x.12bb8261.png"},ff86:function(t,e,i){t.exports=i.p+"img/img-planet-managers@2x.658e95f6.png"}});
//# sourceMappingURL=app.c0c8284d.js.map