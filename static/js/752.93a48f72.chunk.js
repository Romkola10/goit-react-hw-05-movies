"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[752],{9426:function(n,e,r){r.d(e,{_S:function(){return s},bs:function(){return d},cJ:function(){return v},kR:function(){return h},yW:function(){return l}});var t=r(5861),a=r(7757),i=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="3c2d3d1a4a9318a7ef02a0fdedccb03f";function s(n){return u.apply(this,arguments)}function u(){return(u=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/trending/movie/day?api_key=".concat(o,"&page=").concat(e),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"?api_key=").concat(o),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/search/movie?api_key=".concat(o,"&query=").concat(e),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/credits?api_key=").concat(o),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="/movie/".concat(e,"/reviews?api_key=").concat(o),n.next=3,c.Z.get(r);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7752:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(5861),a=r(9439),i=r(7757),c=r.n(i),o=r(2791),s=r(7689),u=r(9649),l=r(9426),p=r(7692),d=r(7368),f=r(184),h=function(n,e){return n||e?n?"("+n.slice(0,4)+")":"("+e.slice(0,4)+")":""},x=function(n){var e,r,t=n.filmInfo,a=(0,s.TH)(),i=t.poster_path,c=t.title,o=t.name,u=t.original_title,l=t.release_date,p=t.first_air_date,x=t.overview,v=t.vote_average,m=t.genres;return(0,f.jsxs)("div",{style:{paddingTop:16},children:[(0,f.jsxs)(d.lx,{children:[(0,f.jsx)("img",{width:"200px",src:i?"https://image.tmdb.org/t/p/w400"+i:"https://dummyimage.com/200x300/bab8ba/000&text=no+photo",alt:c||o}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[c||o||u||"no info",(0,f.jsxs)("span",{children:[" ",h(l,p)]})]}),(0,f.jsxs)("p",{children:["User Score: ",(0,f.jsxs)("span",{children:[Math.ceil(10*v),"%"]})]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:x}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:m.map((function(n){return n.name})).join(" ")})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(d.Fg,{to:"cast",state:{from:null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(d.Fg,{to:"reviews",state:{from:null===a||void 0===a||null===(r=a.state)||void 0===r?void 0:r.from},children:"Reviews"})})]})]})]})},v=function(){var n,e,r=(0,s.UO)().id,i=(0,o.useState)(null),h=(0,a.Z)(i,2),v=h[0],m=h[1],b=(0,s.TH)(),j=null!==(n=null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,o.useEffect)((function(){function n(){return(n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.yW)(r);case 3:e=n.sent,m(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[r]),v?(0,f.jsxs)("main",{children:[(0,f.jsxs)(d.hb,{to:j,children:[(0,f.jsx)(p.Xcu,{size:20}),"Go back"]}),(0,f.jsx)(x,{filmInfo:v,state:{from:b}}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(u.a,{}),children:(0,f.jsx)(s.j3,{})})]}):null}},7368:function(n,e,r){r.d(e,{Fg:function(){return p},hb:function(){return l},lx:function(){return u}});var t,a,i,c=r(168),o=r(6444),s=r(1087),u=o.ZP.div(t||(t=(0,c.Z)(["\n  padding: 16px;\n  display: flex;\n  gap: 10px;\n  box-shadow: 0px 4px 10px 4px #272727;\n"]))),l=(0,o.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid #272727; \n  border-color: #272727;\n  border-radius: 5px;\n  width: 100px;\n  height: 40px;\n  color: #d33121;\n  background-color: #272727;\n  &:hover {\n    color: #272727;\n    background-color: #d33121;\n  }\n"]))),p=(0,o.ZP)(s.rU)(i||(i=(0,c.Z)(["\n  color: #272727;\n  &:hover {\n    color: black;\n    border: 1px solid #272727; \n    border-color: #272727;\n    border-radius: 5px;\n  }\n"])))}}]);
//# sourceMappingURL=752.93a48f72.chunk.js.map