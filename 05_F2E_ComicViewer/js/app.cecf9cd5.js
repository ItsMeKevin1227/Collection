(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)o=c[p],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={1:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/05_F2E_ComicViewer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([9,0]),n()})({"+oFc":function(e,t,n){e.exports=n.p+"img/ad-3.034dc23d.png"},"/OQF":function(e,t,n){},"/W0K":function(e,t,n){"use strict";var r=n("9Qjl"),a=n.n(r);a.a},"/hlL":function(e,t,n){e.exports=n.p+"img/storyboard-3.5510e48c.png"},"5a7p":function(e,t,n){"use strict";var r=n("MVhe"),a=n.n(r);a.a},"7tkK":function(e,t,n){e.exports=n.p+"img/storyboard-5.6931c4d9.png"},9:function(e,t,n){e.exports=n("Vtdi")},"90v4":function(e,t,n){},"9Qjl":function(e,t,n){},Acox:function(e,t,n){e.exports=n.p+"img/ad-1.f99b0756.png"},"I/x8":function(e,t,n){e.exports=n.p+"img/storyboard-11.566f6894.png"},MVhe:function(e,t,n){},Qt0r:function(e,t,n){e.exports=n.p+"img/storyboard-10.07c075de.png"},RsKb:function(e,t,n){"use strict";var r=n("je3U"),a=n.n(r);a.a},T1rb:function(e,t,n){"use strict";var r=n("UlR4"),a=n.n(r);a.a},UlR4:function(e,t,n){},UyVp:function(e,t,n){e.exports=n.p+"img/storyboard-4.70c4033e.png"},Vaq8:function(e,t,n){e.exports=n.p+"img/storyboard-1.3ed0e59d.png"},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("Kw5r"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HeaderPage"),n("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"HeaderPage"}},[e._v("\n  ComicComic\n")])},c=[],s={name:"HeaderPage"},u=s,l=(n("T1rb"),n("KHd+")),p=Object(l["a"])(u,o,c,!1,null,null,null),d=p.exports,f={name:"App",components:{HeaderPage:d}},g=f,h=(n("nNx0"),Object(l["a"])(g,a,i,!1,null,null,null)),m=h.exports,v=n("jE9Z"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"HomePage"}},[n("Ad",{attrs:{adNumber:1}}),n("ComicCover"),n("Ad",{attrs:{adNumber:2}}),n("ComicChapter"),n("Ad",{attrs:{adNumber:3}})],1)},_=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{backgroundImage:"url('"+e.img+"')"},attrs:{id:"ad"}})},y=[],x=n("Acox"),S=n.n(x),P=n("d467"),j=n.n(P),w=n("+oFc"),O=n.n(w),E={props:["adNumber"],computed:{img:function(){return 1===this.adNumber?S.a:2===this.adNumber?j.a:3===this.adNumber?O.a:""}}},N=E,k=(n("f2mV"),Object(l["a"])(N,b,y,!1,null,null,null)),$=k.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ComicCover"}},[n("div",{style:{backgroundImage:"url('"+e.cover+"')"},attrs:{id:"cover"}}),n("div",{attrs:{id:"info"}},[n("h2",{attrs:{id:"title"}},[e._v("MY HEXSCHOOL")]),n("div",{attrs:{id:"intro"}},[e._m(0),e._m(1),e._m(2),e._m(3),e._v("\n      Summary\n      "),n("p",[e._v(e._s(e.text1)+"\n      ")]),n("p",[e._v("\n        "+e._s(e.text2)+"\n      ")])])])])},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",[e._v("Genres")]),e._v("\n        Fusce/vehicula/dolor\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",[e._v("Author")]),e._v("\n        Namae Shiranai\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",[e._v("Status")]),e._v("\n        Ongoing\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("span",[e._v("Rate")]),n("span",{staticClass:"star"},[e._v("★★★★☆")])])}],K=n("cyKj"),H=n.n(K),M={name:"ComicCover",data:function(){return{cover:H.a,text1:"If your banker breaks, you snap if your apothecary by mistake sends you poison in your pills, you die.",text2:"Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals."}}},T=M,U=(n("5a7p"),Object(l["a"])(T,V,A,!1,null,null,null)),I=U.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ComicChapter"}},[n("h3",[e._v("All Chapters")]),n("div",{attrs:{id:"chapterChoose"}},e._l(e.chapters,function(t,r){return n("router-link",{key:r,attrs:{to:"comics/chapter/"+(r+1)}},[n("li",[e._v("Chapter "+e._s(r+1)+": "+e._s(t))])])}))])},F=[],z={data:function(){return{chapters:["The F2E Challenge Start!","Todo List is Going Crazy!"]}}},R=z,L=(n("y85x"),Object(l["a"])(R,Q,F,!1,null,null,null)),X=L.exports,q={name:"HomePage",components:{Ad:$,ComicCover:I,ComicChapter:X}},W=q,J=(n("zbso"),Object(l["a"])(W,C,_,!1,null,null,null)),D=J.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ComicChapter"}},[n("Ad",{attrs:{adNumber:1}}),n("ChapterSelect",{attrs:{chapterSelected:e.id,pageSelected:e.pageSelected},on:{newPage:e.onNewPage}}),n("Ad",{attrs:{adNumber:2}}),n("ComicPage",{attrs:{pageSelected:e.pageSelected},on:{pageChanged:e.onPageChanged}}),n("Ad",{attrs:{adNumber:3}})],1)},Y=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ChapterSelect"}},[n("h2",[e._v("My Hexschool")]),n("i",{staticClass:"fas fa-caret-right"}),n("div",{staticClass:"selectPanel",on:{click:function(t){e.selectChapter=!e.selectChapter}}},[e._v("\n    Chapter "+e._s(e.chapterSelected)+"\n    "),n("i",{staticClass:"fas fa-sort"}),e.selectChapter?n("div",e._l(2,function(t,r){return n("router-link",{attrs:{to:""+(r+1)}},[n("li",[e._v("\n          Chapter "+e._s(t)+"\n        ")])])})):e._e()]),n("div",{staticClass:"selectPanel",on:{click:function(t){e.selectPage=!e.selectPage}}},[e._v("\n    Page "+e._s(e.pageCurrent)+"\n    "),n("i",{staticClass:"fas fa-sort"}),e.selectPage?n("div",e._l(12,function(t,r){return n("li",{on:{click:function(n){e.pageCurrent=t}}},[e._v("Page "+e._s(t))])})):e._e()]),e._m(0)])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dayNightSwitch"},[n("i",{staticClass:"fas fa-sun"}),n("div",[n("span")]),n("i",{staticClass:"far fa-moon"})])}],ee={name:"ChapterSelect",props:["chapterSelected","pageSelected"],data:function(){return{selectChapter:!1,selectPage:!1}},computed:{pageCurrent:{get:function(){return this.pageSelected},set:function(e){this.$emit("newPage",e)}}}},te=ee,ne=(n("/W0K"),Object(l["a"])(te,Z,B,!1,null,null,null)),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ComicPage"}},[n("div",{style:{backgroundImage:"url('"+e.comicPage+"')"}},[n("i",{staticClass:"fas fa-angle-left",on:{click:function(t){e.pageChange(-1)}}}),n("i",{staticClass:"fas fa-angle-right",on:{click:function(t){e.pageChange(1)}}})])])},ie=[],oe=n("Vaq8"),ce=n.n(oe),se=n("e4WT"),ue=n.n(se),le=n("/hlL"),pe=n.n(le),de=n("UyVp"),fe=n.n(de),ge=n("7tkK"),he=n.n(ge),me=n("cc9U"),ve=n.n(me),Ce=n("fQxK"),_e=n.n(Ce),be=n("cfd1"),ye=n.n(be),xe=n("pVD4"),Se=n.n(xe),Pe=n("Qt0r"),je=n.n(Pe),we=n("I/x8"),Oe=n.n(we),Ee=n("g0ad"),Ne=n.n(Ee),ke={name:"ComicPage",props:["pageSelected"],computed:{pageCurrent:{get:function(){return this.pageSelected},set:function(e){this.$emit("pageChanged",e)}},comicPage:function(){return 1===this.pageCurrent?ce.a:2===this.pageCurrent?ue.a:3===this.pageCurrent?pe.a:4===this.pageCurrent?fe.a:5===this.pageCurrent?he.a:6===this.pageCurrent?ve.a:7===this.pageCurrent?_e.a:8===this.pageCurrent?ye.a:9===this.pageCurrent?Se.a:10===this.pageCurrent?je.a:11===this.pageCurrent?Oe.a:12===this.pageCurrent?Ne.a:""}},methods:{pageChange:function(e){this.pageCurrent>=1&&this.pageCurrent<=12&&(this.pageCurrent+=e,this.pageCurrent<=0?this.pageCurrent=1:this.pageCurrent>=13&&(this.pageCurrent=12))}}},$e=ke,Ve=(n("RsKb"),Object(l["a"])($e,ae,ie,!1,null,null,null)),Ae=Ve.exports,Ke={name:"ComicChapter",data:function(){return{pageSelected:1}},computed:{id:function(){return this.$route.params.id}},components:{Ad:$,ChapterSelect:re,ComicPage:Ae},methods:{onNewPage:function(e){this.pageSelected=e},onPageChanged:function(e){this.pageSelected=e}}},He=Ke,Me=(n("eNNa"),Object(l["a"])(He,G,Y,!1,null,null,null)),Te=Me.exports;r["a"].use(v["a"]);var Ue=new v["a"]({routes:[{path:"/comics",name:"Comic",component:D},{path:"/comics/chapter/:id",name:"ComicChapter",component:Te},{path:"*",redirect:"/comics"}]}),Ie=n("L2JU");r["a"].use(Ie["a"]);var Qe=new Ie["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:Ue,store:Qe,render:function(e){return e(m)}}).$mount("#app")},X3SM:function(e,t,n){},boi5:function(e,t,n){},cc9U:function(e,t,n){e.exports=n.p+"img/storyboard-6.6af9e5dd.png"},cfd1:function(e,t,n){e.exports=n.p+"img/storyboard-8.2e8ea641.png"},cyKj:function(e,t,n){e.exports=n.p+"img/comicCover.c7904d1c.png"},d467:function(e,t,n){e.exports=n.p+"img/ad-2.f13073d8.png"},e4WT:function(e,t,n){e.exports=n.p+"img/storyboard-2.4d514d05.png"},eNNa:function(e,t,n){"use strict";var r=n("zEqX"),a=n.n(r);a.a},f2mV:function(e,t,n){"use strict";var r=n("90v4"),a=n.n(r);a.a},fQxK:function(e,t,n){e.exports=n.p+"img/storyboard-7.4c3ac722.png"},g0ad:function(e,t,n){e.exports=n.p+"img/storyboard-12.b619b50b.png"},je3U:function(e,t,n){},nNx0:function(e,t,n){"use strict";var r=n("boi5"),a=n.n(r);a.a},pVD4:function(e,t,n){e.exports=n.p+"img/storyboard-9.fac94d1b.png"},y85x:function(e,t,n){"use strict";var r=n("X3SM"),a=n.n(r);a.a},zEqX:function(e,t,n){},zbso:function(e,t,n){"use strict";var r=n("/OQF"),a=n.n(r);a.a}});
//# sourceMappingURL=app.cecf9cd5.js.map