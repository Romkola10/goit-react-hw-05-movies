"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{9426:function(t,n,e){e.d(n,{_S:function(){return i},bs:function(){return l},cJ:function(){return m},kR:function(){return d},yW:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1912);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="3c2d3d1a4a9318a7ef02a0fdedccb03f";function i(t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/trending/movie/day?api_key=".concat(s,"&page=").concat(n),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"?api_key=").concat(s),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/search/movie?api_key=".concat(s,"&query=").concat(n),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits?api_key=").concat(s),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(n){var e,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews?api_key=").concat(s),t.next=3,u.Z.get(e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9746:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),s=e(2791),i=e(7689),o=e(9426),p=e(1087),f=e(184),l=function(t){var n=t.popFilms,e=t.state;return(0,f.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.title,a=t.name;return(0,f.jsx)("li",{children:(0,f.jsx)(p.rU,{to:"movies/".concat(n),state:e,style:{color:"#058bf8"},children:r||a})},n)}))})},h=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],p=(0,i.TH)();return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o._S)(1);case 3:n=t.sent,c(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:e.length>0&&(0,f.jsx)(l,{popFilms:e,state:{from:p}})})},d=function(){return(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=746.bc985fe5.chunk.js.map