(this["webpackJsonpts-starter"]=this["webpackJsonpts-starter"]||[]).push([[0],{25:function(e,c,n){},26:function(e,c,n){},28:function(e,c,n){},29:function(e,c,n){},30:function(e,c,n){},31:function(e,c,n){},32:function(e,c,n){},33:function(e,c,n){},34:function(e,c,n){},40:function(e,c,n){},41:function(e,c,n){},42:function(e,c,n){},43:function(e,c,n){},44:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n.n(t),s=n(19),r=n.n(s),i=(n(25),n(2)),l=n(13),o=n(3),j=n(6),u=n(5),b=n.n(u),h=(n(26),n(1)),d=(n(28),function(e){var c=e.className,n=e.name,t=e.children,a=Object(j.a)(e,["className","name","children"]),s=b()("section","section-".concat(n),c);return Object(h.jsx)("section",Object(o.a)(Object(o.a)({className:s},a),{},{children:t}))}),m=(n(29),function(e){var c=e.className,n=e.name,t=e.id,a=e.children,s=e.onChange,r=Object(j.a)(e,["className","name","id","children","onChange"]),i=b()("dropdown",c);return Object(h.jsx)("select",Object(o.a)(Object(o.a)({className:i,name:n,id:t,onChange:s},r),{},{children:a}))}),O=(n(30),function(e){var c=e.className,n=e.value,t=e.children,a=Object(j.a)(e,["className","value","children"]),s=b()("dropdownitem",c);return Object(h.jsx)("option",Object(o.a)(Object(o.a)({className:s,value:n},a),{},{children:t}))}),f=(n(31),function(e){var c=e.className,n=e.children,t=Object(j.a)(e,["className","children"]),a=b()("masthead",c);return Object(h.jsxs)("header",Object(o.a)(Object(o.a)({className:a},t),{},{children:[" ",n," "]}))}),x=(n(32),function(e){var c=e.children,n=e.className,t=e.name,a=void 0===t?"base":t,s=b()("page","page-".concat(a),n);return Object(h.jsx)("main",{className:s,children:c})}),p=(n(33),function(e){var c=e.className,n=e.children,t=Object(j.a)(e,["className","children"]),a=b()("button",c);return Object(h.jsx)("button",Object(o.a)(Object(o.a)({className:a},t),{},{children:n}))}),N=function(e){return e.split("=")[1]},v=(n(34),["vodka","gin","whiskey","tequila","rum"]),g=function(){var e=Object(i.f)(),c=v.sort(),n=a.a.useState(c[0]),t=Object(l.a)(n,2),s=t[0],r=t[1];return Object(h.jsx)(x,{name:"landing",children:Object(h.jsxs)("form",{onSubmit:function(c){c.preventDefault(),console.log(c),e.push({pathname:"/find",search:"?liquor=".concat(s)})},className:"landing-form",children:[Object(h.jsx)("label",{htmlFor:"liquor",children:" Choose a liquor"}),Object(h.jsx)(m,{name:"liquor",id:"liquor",onChange:function(e){var c=e.target.value;r(c)},children:c.map((function(e){return Object(h.jsx)(O,{value:e,children:(c=e,c.charAt(0).toUpperCase()+c.slice(1))});var c}))}),Object(h.jsx)(p,{type:"submit",value:"Submit",children:"Find it"})]})})},k=n(10),y=(n(40),n(41),function(e){var c=e.className,n=e.currency,t=e.price,a=Object(j.a)(e,["className","currency","price"]),s=b()("currency","currency-".concat(n),c);return Object(h.jsxs)("span",Object(o.a)(Object(o.a)({className:s},a),{},{children:[" ",t," ",Object(h.jsx)("sub",{children:n})]}))}),C=["foo","bar"],w=function(){var e=N(Object(i.f)().location.search),c=Object(t.useState)(!1),n=Object(l.a)(c,2),s=n[0],r=n[1],o=function(){r(!s)};return Object(h.jsxs)(x,{name:"find",className:s?"isFancy":"isCheap",children:[Object(h.jsx)(d,{name:"results",children:s?Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)("span",{children:" Oh, you're feeling fancy? Try: bar "}),Object(h.jsx)(p,{onClick:o,children:"I'm feeling cheap"})]}):Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsxs)("span",{className:"section-results-title",children:[" The absolute cheapest, bottom shelf ",e," we could find is"]}),Object(h.jsxs)("span",{children:[" foo for ",Object(h.jsx)(y,{price:500,currency:"USD"})]}),Object(h.jsx)(p,{onClick:o,children:"\u2728 I'm feeling fancy \u2728"})]})}),Object(h.jsxs)(d,{name:"cocktails",children:[Object(h.jsx)("span",{children:" here are the cocktails you could make"}),Object(h.jsx)("ul",{children:C.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(k.b,{to:{pathname:"/make",search:"cocktail=".concat(e)},children:e})})}))})]})]})},q=function(){var e=N(Object(i.f)().location.search);return Object(h.jsx)(x,{name:"make",children:Object(h.jsx)(d,{name:"results",children:Object(h.jsxs)("span",{children:[" You want to make ",e," "]})})})},F=(n(42),function(){return Object(h.jsx)("span",{children:" oops "})}),S=(n(43),function(){return Object(h.jsxs)(t.Fragment,{children:[Object(h.jsx)(f,{children:" Seabass "}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:g}),Object(h.jsx)(i.a,{exact:!0,path:"/find",component:w}),Object(h.jsx)(i.a,{exact:!0,path:"/make",component:q}),Object(h.jsx)(i.a,{component:F})]})]})});r.a.render(Object(h.jsx)(k.a,{basename:"/sea-bass-ui",children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.db1315a1.chunk.js.map