(this.webpackJsonpseabass=this.webpackJsonpseabass||[]).push([[0],Array(26).concat([function(e,t,c){},function(e,t,c){},,,,function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),i=(c(38),c(7)),l=c(6),o=c(11),j=c.n(o),u=c(22),d=c(4),b=c(2);var h=function(e,t){var c=Object(n.useRef)({}),a=Object(n.useRef)(!1),r={error:void 0,data:void 0},s=Object(n.useReducer)((function(e,t){switch(t.type){case"loading":return Object(b.a)({},r);case"fetched":return Object(b.a)(Object(b.a)({},r),{},{data:t.payload});case"error":return Object(b.a)(Object(b.a)({},r),{},{error:t.payload});default:return e}}),r),i=Object(d.a)(s,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){if(e)return function(){var n=Object(u.a)(j.a.mark((function n(){var r,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o({type:"loading"}),!c.current[e]){n.next=4;break}return o({type:"fetched",payload:c.current[e]}),n.abrupt("return");case 4:return n.prev=4,n.next=7,fetch(e,t);case 7:if((r=n.sent).ok){n.next=10;break}throw new Error(r.statusText);case 10:return n.next=12,r.json();case 12:if(s=n.sent,c.current[e]=s,!a.current){n.next=16;break}return n.abrupt("return");case 16:o({type:"fetched",payload:s}),n.next=24;break;case 19:if(n.prev=19,n.t0=n.catch(4),!a.current){n.next=23;break}return n.abrupt("return");case 23:o({type:"error",payload:n.t0});case 24:case"end":return n.stop()}}),n,null,[[4,19]])})));return function(){return n.apply(this,arguments)}}()(),function(){a.current=!0}}),[e]),l},O=Object(l.b)({key:"PricesContents",default:{BTC:0,ETH:0,LTC:0,USD:1}}),m=Object(l.b)({key:"fancyContents",default:{isFancy:!1}}),f=Object(l.b)({key:"liquorContent",default:{liquors:["gin","vodka","tequila","rum","whiskey","scotch","rye","bourbon","amaretto","kahlua"]}}),x=c(5),p=c(3),v=c.n(p),g=(c(40),c(0)),y=(c(42),function(e){var t=e.className,c=e.name,n=e.children,a=Object(x.a)(e,["className","name","children"]),r=v()("section","section-".concat(c),t);return Object(g.jsx)("section",Object(b.a)(Object(b.a)({className:r},a),{},{children:n}))}),N=(c(43),function(e){var t=e.className,c=e.name,n=e.id,a=e.children,r=e.onChange,s=Object(x.a)(e,["className","name","id","children","onChange"]),i=v()("dropdown",t);return Object(g.jsx)("select",Object(b.a)(Object(b.a)({className:i,name:c,id:n,onChange:r},s),{},{children:a}))}),k=(c(44),function(e){var t=e.className,c=e.value,a=e.children,r=Object(x.a)(e,["className","value","children"]),s=v()("dropdownitem",t);return Object(n.createElement)("option",Object(b.a)(Object(b.a)({className:s,value:c},r),{},{key:c}),a)}),C=(c(45),function(e){var t=e.className,c=e.children,n=Object(x.a)(e,["className","children"]),a=v()("masthead",t);return Object(g.jsxs)("header",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",c," "]}))}),w=(c(46),function(e){var t=e.children,c=e.className,n=e.name,a=void 0===n?"base":n,r=v()("page","page-".concat(a),c);return Object(g.jsx)("main",{className:r,children:t})}),T=c(13),S=(c(47),function(e){var t=e.className,c=e.children,n=e.isLink,a=e.isIcon,r=Object(x.a)(e,["className","children","isLink","isIcon"]),s=v()("button",Object(T.a)({},"button-isLink",n),Object(T.a)({},"button-isIcon",a),t);return Object(g.jsx)("button",Object(b.a)(Object(b.a)({className:s},r),{},{children:c}))}),F=c(14),L=(c(48),function(e){var t=e.className,c=e.to,n=e.children,a=e.isPlain,r=e.isSmall,s=Object(x.a)(e,["className","to","children","isPlain","isSmall"]),i=v()("go",{"go-isPlain":a},{"go-isSmall":r},t);return Object(g.jsxs)(F.b,Object(b.a)(Object(b.a)({to:c},s),{},{className:i,children:[" ",n," "]}))}),B=(c(54),function(e){var t=e.className,c=e.Level,n=e.weight,a=e.isSmall,r=e.children,s=v()("heading","heading-".concat(c),"heading-weight--".concat(n),Object(T.a)({},"heading-".concat(c,"--isSmall"),a),t);return Object(g.jsx)(c,{className:s,children:r})});B.defaultProps={Level:"h1",weight:"normal"};var D=B,I=(c(55),function(e){var t=e.className,c=e.currency,n=e.price,a=Object(x.a)(e,["className","currency","price"]),r=v()("currency","currency-".concat(c),t);return Object(g.jsxs)("span",Object(b.a)(Object(b.a)({className:r},a),{},{children:[" ",n," ",Object(g.jsx)("sub",{children:c})]}))}),E=Object(l.b)({key:"currencyContents",default:{type:"USD"}}),q=["USD","ETH","BTC","LTC"],P=function(){var e=Object(l.d)(E);return Object(g.jsx)(N,{name:"currency",id:"currency",onChange:function(t){switch(t.target.value){case"USD":e({type:"USD"});break;case"ETH":e({type:"ETH"});break;case"BTC":e({type:"BTC"});break;case"LTC":e({type:"LTC"});break;default:e({type:"USD"})}},children:q.map((function(e){return Object(g.jsx)(k,{value:e,children:e},e)}))})},U=(c(56),function e(t){var c=t.className,n=t.text,a=t.header,r=Object(x.a)(t,["className","text","header"]),s=v()("error",c);return e.defaultProps={header:"oh, fiddlesticks!",text:"We just hit an error :("},Object(g.jsxs)(y,Object(b.a)(Object(b.a)({name:"error",className:s},r),{},{children:[Object(g.jsxs)(D,{Level:"h1",children:[" ",a," "]}),Object(g.jsxs)("span",{children:[" ",n," "]})]}))}),R=(c(57),function(e){var t=e.className,c=Object(x.a)(e,["className"]),n=v()("loading",t);return Object(g.jsx)("div",Object(b.a)({className:n},c))}),H=(c(31),function(e){var t=e.className,c=e.children,n=e.title,a=Object(x.a)(e,["className","children","title"]),r=v()("description",t);return Object(g.jsxs)("dl",Object(b.a)(Object(b.a)({className:r},a),{},{children:[Object(g.jsxs)("dt",{children:[" ",n," "]}),c]}))}),z=function(e){var t=e.className,c=e.text,n=Object(x.a)(e,["className","text"]),a=v()("description-item",t);return Object(g.jsxs)("dd",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",c," "]}))},A=(c(26),function(e){var t=e.className,c=e.children,n=Object(x.a)(e,["className","children"]),a=v()("card",t);return Object(g.jsxs)("article",Object(b.a)(Object(b.a)({className:a},n),{},{children:[" ",c," "]}))}),J=function(e){var t=e.className,c=e.children,n=e.title,a=Object(x.a)(e,["className","children","title"]),r=v()("card-header",t);return Object(g.jsxs)("div",Object(b.a)(Object(b.a)({className:r},a),{},{children:[Object(g.jsxs)(D,{Level:"h2",children:[" ",n]}),c]}))},W=function(e){var t=e.className,c=e.children,n=Object(x.a)(e,["className","children"]),a=v()("card-body",t);return Object(g.jsx)("div",Object(b.a)(Object(b.a)({className:a},n),{},{children:c}))},G=(c(58),function(e){var t=e.className,c=e.image,n=e.size,a=Object(x.a)(e,["className","image","size"]),r=v()("brand","brand-".concat(n),t);return Object(g.jsx)("img",Object(b.a)({src:"./images/".concat(c,".png"),className:r},a))});G.defaultProps={size:"md"};var Y=G,M=(c(59),function(e){var t=e.className,c=Object(x.a)(e,["className"]),r=Object(n.useState)(!1),s=Object(d.a)(r,2),i=s[0],l=s[1],o=v()("footer",t);return Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)("footer",Object(b.a)(Object(b.a)({className:o},c),{},{children:[Object(g.jsx)("span",{children:" please drink responsibly "}),Object(g.jsx)(S,{onClick:function(){return l(!i)},isLink:!0,children:" acknowledgements"})]})),Object(g.jsx)(Q,{isOpen:i,onClose:function(){return l(!1)},title:"Acknowledgements",children:Object(g.jsxs)(V,{children:[Object(g.jsx)(D,{Level:"h3",weight:"light",children:" Thank you! "}),Object(g.jsx)("p",{children:"Art: Jacob Hartsell "})]})})]})}),K=c(23),Q=(c(27),function(e){var t=e.children,c=e.isOpen,n=e.onClose,a=e.title,r=document.getElementById("modal");return window.onclick=function(e){e.target==r&&n()},Object(g.jsx)("div",{id:"modal",className:"modal modal-".concat(c?"open":"closed"),children:Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsxs)("div",{className:"modal-content-head",children:[a,Object(g.jsx)(S,{className:"modal-content-close",isIcon:!0,onClick:n,children:Object(g.jsx)(K.b,{})})]}),t]})})}),V=function(e){var t=e.children,c=e.className,n=v()("modal-content-body",c);return Object(g.jsx)("div",{className:n,children:t})},X=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},Z=function(e){return decodeURI(e.split("=")[1])},$=function(e,t,c){return parseFloat((t*e).toFixed(c))},_=(c(60),function(){var e=Object(i.f)(),t=Object(l.d)(m),c=Object(l.c)(f).liquors;t({isFancy:!1});var n=c.sort(),r=a.a.useState(n[0]),s=Object(d.a)(r,2),o=s[0],j=s[1];return Object(g.jsxs)(w,{name:"landing",children:[Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.push({pathname:"/find",search:"?liquor=".concat(o)})},className:"landing-form",children:[Object(g.jsx)("label",{htmlFor:"liquor",children:" Choose a liquor"}),Object(g.jsx)(N,{name:"liquor",id:"liquor",onChange:function(e){var t=e.target.value;j(t)},children:n.map((function(e){return Object(g.jsx)(k,{value:e,children:X(e)},e)}))}),Object(g.jsx)(S,{type:"submit",value:"Submit",children:"Find it"})]}),Object(g.jsx)(L,{to:{pathname:"/find",search:"?liquor=Grain Alcohol"},className:"drunk-button",children:" just get me as drunk as possible"})]})}),ee=(c(32),function(e){var t=e.input,c=h("https://cbaas-api.herokuapp.com/booze?type=".concat(t)),n=c.data,r=c.error,s=Object(l.d)(m),i=Object(l.c)(E),o=Object(l.c)(O),j=Object(l.c)(m).isFancy,u=n&&n[0],d=n&&n[1],b=i.type;return console.log("Booze",{data:n,error:r}),Object(g.jsxs)(a.a.Fragment,{children:[r&&Object(g.jsx)(U,{}),!n&&!r&&Object(g.jsx)(R,{}),n&&Object(g.jsxs)(y,{name:"results",children:[j?Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsx)(D,{Level:"h2",weight:"light",children:" Oh, you're feeling fancy?"}),d?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("span",{children:[" ",d["Brand Name"]," for a whopping ",Object(g.jsx)(I,{price:$(d["Retail Bottle Price"],o[b],5),currency:i.type})]})}):Object(g.jsx)("span",{children:" you actually already saw the fanciest drink..."}),Object(g.jsx)(S,{onClick:function(){return s({isFancy:!j})},children:"I'm feeling cheap"})]}):Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)(D,{Level:"h2",weight:"light",children:[" ","Grain Alcohol"===t?"Yikes..... ":"","The absolute cheapest, bottom shelf ",t," we could find is"]}),Object(g.jsxs)("span",{children:[" ",u["Brand Name"]," for ",Object(g.jsx)(I,{price:$(u["Retail Bottle Price"],o[b],5),currency:i.type})]}),Object(g.jsx)(S,{onClick:function(){return s({isFancy:!j})},children:"\u2728 I'm feeling fancy \u2728"})]}),Object(g.jsxs)(L,{to:{pathname:"/"},isSmall:!0,children:[" ",Object(g.jsx)(K.a,{})," Back "]})]})]})}),te=(c(61),function(e){var t=e.input,c=h("https://cbaas-api.herokuapp.com/drinks?spirit=".concat(function(e){return"Rye"===e?"rye whiskey":e}(t))),n=c.data,r=c.error,s=Object(l.c)(m).isFancy;return console.log("Spirit",{data:n,error:r}),Object(g.jsxs)(a.a.Fragment,{children:[r&&Object(g.jsx)(U,{}),!n&&!r&&Object(g.jsx)(R,{}),n&&Object(g.jsxs)(y,{name:"cocktails",children:[Object(g.jsxs)(D,{Level:"h2",weight:"light",children:[" Here are the ",n.count," cocktails you could make",s?", fancy pants":""]}),Object(g.jsx)("ul",{className:"cocktails-list",children:n.drinks.map((function(e){return Object(g.jsx)("li",{className:"cocktails-list-item",children:Object(g.jsx)(L,{to:{pathname:"/make",search:"cocktail=".concat(e.strDrink)},children:e.strDrink})},e.strDrink)}))})]})]})}),ce=function(){var e=X(Z(Object(i.f)().location.search)),t=Object(l.c)(m).isFancy;return console.log(t),Object(g.jsxs)(w,{name:"find",className:t?"isFancy":"isCheap",children:[Object(g.jsx)(ee,{input:e}),Object(g.jsx)(te,{input:e})]})},ne=(c(62),function(e,t){var c="";return null!=e&&(c=e),"".concat(c," ").concat(t)}),ae=function(){var e=Z(Object(i.f)().location.search),t=h("https://cbaas-api.herokuapp.com/spec?name=".concat(e)),c=t.data,n=t.error,a=c&&c.drinks[0],r=[];a&&Object.keys(a).filter((function(e){return e.includes("strIngredient")&&r.push(a[e])})),console.log("spec",{data:c,error:n});var s;return Object(g.jsxs)(w,{name:"make",children:[n&&Object(g.jsx)(U,{}),!c&&!n&&Object(g.jsx)(R,{}),a&&Object(g.jsxs)(A,{children:[Object(g.jsx)(J,{title:"You want to make a ".concat(e).concat((s=e,"White Russian"===s?", Dude":"")),children:"White Russian"===e&&Object(g.jsx)("img",{src:"./images/the-dude.gif",alt:"The Dude",className:"card-header-img"})}),Object(g.jsxs)(W,{children:[Object(g.jsx)(H,{title:"Ingredients",children:r.map((function(e,t){return e&&Object(g.jsx)(z,{text:ne(a["strMeasure"+(t+1).toString()],e)},e)}))}),Object(g.jsx)(H,{title:"Instructions",children:Object(g.jsx)(z,{text:a.strInstructions})})]})]})]})},re=(c(63),function(){return Object(g.jsx)("span",{children:" oops "})}),se=(c(64),function(){var e=Object(l.d)(O),t=h("https://api.coinbase.com/v2/exchange-rates?currency=USD").data;return t&&e({BTC:null===t||void 0===t?void 0:t.data.rates.BTC,ETH:null===t||void 0===t?void 0:t.data.rates.ETH,LTC:null===t||void 0===t?void 0:t.data.rates.LTC,USD:1}),Object(g.jsxs)(a.a.Fragment,{children:[Object(g.jsxs)(C,{children:[" ",Object(g.jsx)(L,{to:{pathname:"/"},isPlain:!0,children:Object(g.jsx)(Y,{image:"text",size:"sm"})}),Object(g.jsx)(P,{})]}),Object(g.jsxs)(i.c,{children:[Object(g.jsx)(i.a,{exact:!0,path:"/",component:_}),Object(g.jsx)(i.a,{path:"/find",component:ce}),Object(g.jsx)(i.a,{path:"/make",component:ae}),Object(g.jsx)(i.a,{component:re})]}),Object(g.jsx)(M,{})]})});s.a.render(Object(g.jsx)(F.a,{basename:"",children:Object(g.jsx)(l.a,{children:Object(g.jsx)(se,{})})}),document.getElementById("root"))}]),[[65,1,2]]]);
//# sourceMappingURL=main.071f5333.chunk.js.map