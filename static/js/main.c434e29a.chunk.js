(this.webpackJsonpseabass=this.webpackJsonpseabass||[]).push([[0],Array(25).concat([function(e,c,t){},function(e,c,t){},,,,function(e,c,t){},function(e,c,t){},,,,,,,function(e,c,t){},,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},,,,,,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(19),s=t.n(r),i=(t(38),t(7)),l=t(6),o=t(11),j=t.n(o),u=t(22),d=t(4),b=t(2);var h=function(e,c){var t=Object(n.useRef)({}),a=Object(n.useRef)(!1),r={error:void 0,data:void 0},s=Object(n.useReducer)((function(e,c){switch(c.type){case"loading":return Object(b.a)({},r);case"fetched":return Object(b.a)(Object(b.a)({},r),{},{data:c.payload});case"error":return Object(b.a)(Object(b.a)({},r),{},{error:c.payload});default:return e}}),r),i=Object(d.a)(s,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){if(e)return function(){var n=Object(u.a)(j.a.mark((function n(){var r,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o({type:"loading"}),!t.current[e]){n.next=4;break}return o({type:"fetched",payload:t.current[e]}),n.abrupt("return");case 4:return n.prev=4,n.next=7,fetch(e,c);case 7:if((r=n.sent).ok){n.next=10;break}throw new Error(r.statusText);case 10:return n.next=12,r.json();case 12:if(s=n.sent,t.current[e]=s,!a.current){n.next=16;break}return n.abrupt("return");case 16:o({type:"fetched",payload:s}),n.next=24;break;case 19:if(n.prev=19,n.t0=n.catch(4),!a.current){n.next=23;break}return n.abrupt("return");case 23:o({type:"error",payload:n.t0});case 24:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(){return n.apply(this,arguments)}}()(),function(){a.current=!0}}),[e]),l},O=Object(l.b)({key:"PricesContents",default:{BTC:0,ETH:0,LTC:0,USD:1}}),m=Object(l.b)({key:"fancyContents",default:{isFancy:!1}}),f=Object(l.b)({key:"liquorContent",default:{liquors:["gin","vodka","tequila","rum","whiskey","scotch","rye","bourbon","amaretto","kahlua"]}}),p=t(5),x=t(3),v=t.n(x),g=(t(40),t(0)),y=(t(42),function(e){var c=e.className,t=e.name,n=e.children,a=Object(p.a)(e,["className","name","children"]),r=v()("section","section-".concat(t),c);return Object(g.jsx)("section",Object(b.a)(Object(b.a)({className:r},a),{},{children:n}))}),N=(t(43),function(e){var c=e.className,t=e.name,n=e.id,a=e.children,r=e.onChange,s=Object(p.a)(e,["className","name","id","children","onChange"]),i=v()("dropdown",c);return Object(g.jsx)("select",Object(b.a)(Object(b.a)({className:i,name:t,id:n,onChange:r},s),{},{children:a}))}),k=(t(44),function(e){var c=e.className,t=e.value,a=e.children,r=Object(p.a)(e,["className","value","children"]),s=v()("dropdownitem",c);return Object(n.createElement)("option",Object(b.a)(Object(b.a)({className:s,value:t},r),{},{key:t}),a)}),C=(t(45),function(e){var c=e.className,t=e.children,n=Object(p.a)(e,["className","children"]),a=v()("masthead",c);return Object(g.jsxs)("header",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",t," "]}))}),w=(t(46),function(e){var c=e.children,t=e.className,n=e.name,a=void 0===n?"base":n,r=v()("page","page-".concat(a),t);return Object(g.jsx)("main",{className:r,children:c})}),T=t(13),F=(t(47),function(e){var c=e.className,t=e.children,n=e.isLink,a=e.isIcon,r=Object(p.a)(e,["className","children","isLink","isIcon"]),s=v()("button",Object(T.a)({},"button-isLink",n),Object(T.a)({},"button-isIcon",a),c);return Object(g.jsx)("button",Object(b.a)(Object(b.a)({className:s},r),{},{children:t}))}),L=t(14),S=(t(48),function(e){var c=e.className,t=e.to,n=e.children,a=e.isPlain,r=Object(p.a)(e,["className","to","children","isPlain"]),s=v()("go",{"go-isPlain":a},c);return Object(g.jsxs)(L.b,Object(b.a)(Object(b.a)({to:t},r),{},{className:s,children:[" ",n," "]}))}),D=(t(54),function(e){var c=e.className,t=e.Level,n=e.weight,a=e.isSmall,r=e.children,s=v()("heading","heading-".concat(t),"heading-weight--".concat(n),Object(T.a)({},"heading-".concat(t,"--isSmall"),a),c);return Object(g.jsx)(t,{className:s,children:r})});D.defaultProps={Level:"h1",weight:"normal"};var B=D,I=(t(55),function(e){var c=e.className,t=e.currency,n=e.price,a=Object(p.a)(e,["className","currency","price"]),r=v()("currency","currency-".concat(t),c);return Object(g.jsxs)("span",Object(b.a)(Object(b.a)({className:r},a),{},{children:[" ",n," ",Object(g.jsx)("sub",{children:t})]}))}),E=Object(l.b)({key:"currencyContents",default:{type:"USD"}}),q=["USD","ETH","BTC","LTC"],U=function(){var e=Object(l.d)(E);return Object(g.jsx)(N,{name:"currency",id:"currency",onChange:function(c){switch(c.target.value){case"USD":e({type:"USD"});break;case"ETH":e({type:"ETH"});break;case"BTC":e({type:"BTC"});break;case"LTC":e({type:"LTC"});break;default:e({type:"USD"})}},children:q.map((function(e){return Object(g.jsx)(k,{value:e,children:e},e)}))})},P=(t(56),function(e){var c=e.className,t=Object(p.a)(e,["className"]),n=v()("error",c);return Object(g.jsxs)(y,Object(b.a)(Object(b.a)({name:"error",className:n},t),{},{children:[Object(g.jsx)(B,{Level:"h1",children:" Oh, fiddlesticks! "}),Object(g.jsx)("span",{children:" We just hit an error :( "})]}))}),R=(t(57),function(e){var c=e.className,t=Object(p.a)(e,["className"]),n=v()("loading",c);return Object(g.jsx)("div",Object(b.a)({className:n},t))}),H=(t(30),function(e){var c=e.className,t=e.children,n=e.title,a=Object(p.a)(e,["className","children","title"]),r=v()("description",c);return Object(g.jsxs)("dl",Object(b.a)(Object(b.a)({className:r},a),{},{children:[Object(g.jsxs)("dt",{children:[" ",n," "]}),t]}))}),z=function(e){var c=e.className,t=e.text,n=Object(p.a)(e,["className","text"]),a=v()("description-item",c);return Object(g.jsxs)("dd",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",t," "]}))},A=(t(25),function(e){var c=e.className,t=e.children,n=Object(p.a)(e,["className","children"]),a=v()("card",c);return Object(g.jsxs)("article",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",t," "]}))}),J=function(e){var c=e.className,t=e.children,n=e.title,a=Object(p.a)(e,["className","children","title"]),r=v()("card-header",c);return Object(g.jsxs)("div",Object(b.a)(Object(b.a)({className:r},a),{},{children:[Object(g.jsxs)(B,{Level:"h2",children:[" ",n]}),t]}))},W=function(e){var c=e.className,t=e.children,n=Object(p.a)(e,["className","children"]),a=v()("card-body",c);return Object(g.jsx)("div",Object(b.a)(Object(b.a)({className:a},n),{},{children:t}))},Y=(t(58),function(e){var c=e.className,t=e.image,n=e.size,a=Object(p.a)(e,["className","image","size"]),r=v()("brand","brand-".concat(n),c);return Object(g.jsx)("img",Object(b.a)({src:"./images/".concat(t,".png"),className:r},a))});Y.defaultProps={size:"md"};var M=Y,G=(t(59),function(e){var c=e.className,t=Object(p.a)(e,["className"]),r=Object(n.useState)(!1),s=Object(d.a)(r,2),i=s[0],l=s[1],o=v()("footer",c);return Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)("footer",Object(b.a)(Object(b.a)({className:o},t),{},{children:[Object(g.jsx)("span",{children:" please drink responsibly "}),Object(g.jsx)(F,{onClick:function(){return l(!i)},isLink:!0,children:" acknowledgements"})]})),Object(g.jsx)(Q,{isOpen:i,onClose:function(){return l(!1)},title:"Acknowledgements",children:Object(g.jsxs)(V,{children:[Object(g.jsx)(B,{Level:"h3",weight:"light",children:" Thank you! "}),Object(g.jsx)("p",{children:"Art: Jacob Hartsell "})]})})]})}),K=t(33),Q=(t(26),function(e){var c=e.children,t=e.isOpen,n=e.onClose,a=e.title,r=document.getElementById("modal");return window.onclick=function(e){e.target==r&&n()},Object(g.jsx)("div",{id:"modal",className:"modal modal-".concat(t?"open":"closed"),children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsxs)("div",{className:"modal-content-head",children:[a,Object(g.jsx)(F,{className:"modal-content-close",isIcon:!0,onClick:n,children:Object(g.jsx)(K.a,{})})]}),c]})})}),V=function(e){var c=e.children,t=e.className,n=v()("modal-content-body",t);return Object(g.jsx)("div",{className:n,children:c})},X=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Z=function(e){return decodeURI(e.split("=")[1])},$=function(e,c,t){return parseFloat((c*e).toFixed(t))},_=(t(60),function(){var e=Object(i.f)(),c=Object(l.d)(m),t=Object(l.c)(f).liquors;c({isFancy:!1});var n=t.sort(),r=a.a.useState(n[0]),s=Object(d.a)(r,2),o=s[0],j=s[1];return Object(g.jsxs)(w,{name:"landing",children:[Object(g.jsxs)("form",{onSubmit:function(c){c.preventDefault(),e.push({pathname:"/find",search:"?liquor=".concat(o)})},className:"landing-form",children:[Object(g.jsx)("label",{htmlFor:"liquor",children:" Choose a liquor"}),Object(g.jsx)(N,{name:"liquor",id:"liquor",onChange:function(e){var c=e.target.value;j(c)},children:n.map((function(e){return Object(g.jsx)(k,{value:e,children:X(e)},e)}))}),Object(g.jsx)(F,{type:"submit",value:"Submit",children:"Find it"})]}),Object(g.jsx)(S,{to:{pathname:"/find",search:"?liquor=Alcohol"},className:"drunk-button",children:" just get me as drunk as possible"})]})}),ee=(t(31),function(e){var c=e.input,t=h("https://cbaas-api.herokuapp.com/booze?type=".concat(c)),n=t.data,r=t.error,s=Object(l.d)(m),i=Object(l.c)(E),o=Object(l.c)(O),j=Object(l.c)(m).isFancy,u=n&&n[0],d=n&&n[1],b=i.type;return console.log("Booze",{data:n,error:r}),Object(g.jsxs)(a.a.Fragment,{children:[r&&Object(g.jsx)(P,{}),!n&&!r&&Object(g.jsx)(R,{}),n&&Object(g.jsx)(y,{name:"results",children:j?Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsx)(B,{Level:"h2",weight:"light",children:" Oh, you're feeling fancy?"}),d?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("span",{children:[" ",d["Brand Name"]," for a whopping ",Object(g.jsx)(I,{price:$(d["Retail Bottle Price"],o[b],5),currency:i.type})]})}):Object(g.jsx)("span",{children:" you actually already saw the fanciest drink..."}),Object(g.jsx)(F,{onClick:function(){return s({isFancy:!j})},children:"I'm feeling cheap"})]}):Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)(B,{Level:"h2",weight:"light",children:[" ","Alcohol"===c?"Yikes..... ":"","The absolute cheapest, bottom shelf ",c," we could find is"]}),Object(g.jsxs)("span",{children:[" ",u["Brand Name"]," for ",Object(g.jsx)(I,{price:$(u["Retail Bottle Price"],o[b],5),currency:i.type})]}),Object(g.jsx)(F,{onClick:function(){return s({isFancy:!j})},children:"\u2728 I'm feeling fancy \u2728"})]})})]})}),ce=(t(61),function(e){var c=e.input,t=h("https://cbaas-api.herokuapp.com/drinks?spirit=".concat(function(e){return"Rye"===e?"rye whiskey":e}(c))),n=t.data,r=t.error,s=Object(l.c)(m).isFancy;return console.log("Spirit",{data:n,error:r}),Object(g.jsxs)(a.a.Fragment,{children:[r&&Object(g.jsx)(P,{}),!n&&!r&&Object(g.jsx)(R,{}),n&&Object(g.jsxs)(y,{name:"cocktails",children:[Object(g.jsxs)(B,{Level:"h2",weight:"light",children:[" Here are the ",n.count," cocktails you could make",s?", fancy pants":""]}),Object(g.jsx)("ul",{className:"cocktails-list",children:n.drinks.map((function(e){return Object(g.jsx)("li",{className:"cocktails-list-item",children:Object(g.jsx)(S,{to:{pathname:"/make",search:"cocktail=".concat(e.strDrink)},children:e.strDrink})},e.strDrink)}))})]})]})}),te=function(){var e=X(Z(Object(i.f)().location.search)),c=Object(l.c)(m).isFancy;return console.log(c),Object(g.jsxs)(w,{name:"find",className:c?"isFancy":"isCheap",children:[Object(g.jsx)(ee,{input:e}),Object(g.jsx)(ce,{input:e})]})},ne=(t(62),function(e,c){var t="";return null!=e&&(t=e),"".concat(t," ").concat(c)}),ae=function(){var e=Z(Object(i.f)().location.search),c=h("https://cbaas-api.herokuapp.com/spec?name=".concat(e)),t=c.data,n=c.error,a=t&&t.drinks[0],r=[];a&&Object.keys(a).filter((function(e){return e.includes("strIngredient")&&r.push(a[e])})),console.log("spec",{data:t,error:n});var s;return Object(g.jsxs)(w,{name:"make",children:[n&&Object(g.jsx)(P,{}),!t&&!n&&Object(g.jsx)(R,{}),a&&Object(g.jsxs)(A,{children:[Object(g.jsx)(J,{title:"You want to make a ".concat(e).concat((s=e,"White Russian"===s?", Dude":"")),children:"White Russian"===e&&Object(g.jsx)("img",{src:"./images/the-dude.gif",alt:"The Dude",className:"card-header-img"})}),Object(g.jsxs)(W,{children:[Object(g.jsx)(H,{title:"Ingredients",children:r.map((function(e,c){return e&&Object(g.jsx)(z,{text:ne(a["strMeasure"+(c+1).toString()],e)},e)}))}),Object(g.jsx)(H,{title:"Instructions",children:Object(g.jsx)(z,{text:a.strInstructions})})]})]})]})},re=(t(63),function(){return Object(g.jsx)("span",{children:" oops "})}),se=(t(64),function(){var e=Object(l.d)(O),c=h("https://api.coinbase.com/v2/exchange-rates?currency=USD").data;return c&&e({BTC:null===c||void 0===c?void 0:c.data.rates.BTC,ETH:null===c||void 0===c?void 0:c.data.rates.ETH,LTC:null===c||void 0===c?void 0:c.data.rates.LTC,USD:1}),Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)(C,{children:[" ",Object(g.jsx)(S,{to:{pathname:"/"},isPlain:!0,children:Object(g.jsx)(M,{image:"text",size:"sm"})}),Object(g.jsx)(U,{})]}),Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/",component:_}),Object(g.jsx)(i.a,{path:"/find",component:te}),Object(g.jsx)(i.a,{path:"/make",component:ae}),Object(g.jsx)(i.a,{component:re})]}),Object(g.jsx)(G,{})]})});s.a.render(Object(g.jsx)(L.a,{basename:"",children:Object(g.jsx)(l.a,{children:Object(g.jsx)(se,{})})}),document.getElementById("root"))}]),[[65,1,2]]]);
//# sourceMappingURL=main.c434e29a.chunk.js.map