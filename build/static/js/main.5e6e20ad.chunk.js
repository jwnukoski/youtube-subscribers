(this["webpackJsonpyoutube-subscribers"]=this["webpackJsonpyoutube-subscribers"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(13),i=n.n(a),u=(n(19),n(3)),r=(n(20),n(14)),b=n.n(r),o=n(1);var j=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(-1),i=Object(u.a)(a,2),r=i[0],j=i[1],l=Object(c.useState)(-1),d=Object(u.a)(l,2),h=d[0],v=d[1],O=Object(c.useState)(-1),f=Object(u.a)(O,2),p=f[0],x=f[1];function m(e){var t=e.target.value;s(t)}function g(e){null!==e&&e.preventDefault(),b.a.get("/channel/".concat(n)).then((function(e){var t=e.data.subscriberCount||-1;j(t);var n=e.data.viewCount||-1;v(n);var c=e.data.videoCount||-1;x(c)})).catch((function(e){console.error(e)}))}return Object(o.jsx)("div",{className:"App",children:-1===r?Object(o.jsxs)("form",{onSubmit:g,children:[Object(o.jsx)("input",{type:"text",onChange:m}),Object(o.jsx)("input",{type:"submit"})]}):(setInterval((function(){g(null)}),1e3),Object(o.jsxs)("div",{className:"ytchannel-wrapper",children:[Object(o.jsxs)("div",{className:"ytchannel-subs",children:["Subscribers: ",r]}),Object(o.jsxs)("div",{className:"ytchannel-views",children:["Views: ",h]}),Object(o.jsxs)("div",{className:"ytchannel-videos",children:["Videos: ",p]})]}))})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),l()}},[[40,1,2]]]);
//# sourceMappingURL=main.5e6e20ad.chunk.js.map