(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{DW2E:function(e,t,n){var r=n("0/R4"),o=n("Z6vF").onFreeze;n("Xtr8")("freeze",(function(e){return function(t){return e&&r(t)?e(o(t)):t}}))},R8uD:function(e,t,n){"use strict";(function(e){n("DNiP"),n("bWfx"),n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var a,f=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,u,i,a="object",f=function(e){return e&&e.Math==Math&&e},l=f(typeof globalThis==a&&globalThis)||f(typeof window==a&&window)||f(typeof self==a&&self)||f(typeof n==a&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},v={}.toString,g="".split,b=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return v.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,O=function(e){return b(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},T=function(e){return"object"==typeof e?null!==e:"function"==typeof e},m=function(e,t){if(!T(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!T(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!T(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,_=function(e,t){return S.call(e,t)},I=l.document,D=T(I)&&T(I.createElement),N=function(e){return D?I.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,w={f:p?A:function(e,t){if(e=O(e),t=m(t,!0),L)try{return A(e,t)}catch(n){}if(_(e,t))return h(!y.f.call(e,t),e[t])}},j=function(e){if(!T(e))throw TypeError(String(e)+" is not an object");return e},P=Object.defineProperty,R={f:p?P:function(e,t,n){if(j(e),t=m(t,!0),j(n),L)try{return P(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},M=p?function(e,t,n){return R.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},H=function(e,t){try{M(l,e,t)}catch(n){l[e]=t}return t},G=r((function(e){var t=l["__core-js_shared__"]||H("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),C=G("native-function-to-string",Function.toString),k=l.WeakMap,K="function"==typeof k&&/native code/.test(C.call(k)),B=0,x=Math.random(),F=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+x).toString(36)},Y=G("keys"),U=function(e){return Y[e]||(Y[e]=F(e))},V={},W=l.WeakMap;if(K){var z=new W,Q=z.get,q=z.has,X=z.set;o=function(e,t){return X.call(z,e,t),t},u=function(e){return Q.call(z,e)||{}},i=function(e){return q.call(z,e)}}else{var J=U("state");V[J]=!0,o=function(e,t){return M(e,J,t),t},u=function(e){return _(e,J)?e[J]:{}},i=function(e){return _(e,J)}}var Z={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!T(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(C).split("toString");G("inspectSource",(function(e){return C.call(e)})),(e.exports=function(e,t,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,a=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||_(o,"name")||M(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==l?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=o:M(e,t,o)):c?e[t]=o:H(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C.call(this)}))})),ee=l,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(l[e]):ee[e]&&ee[e][t]||l[e]&&l[e][t]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,ae=Math.min,fe=function(e){return function(t,n,r){var o,u,i=O(t),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,a=function(e,t){var n=ue(e);return n<0?ce(n+t,0):ae(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},le={includes:fe(!0),indexOf:fe(!1)},se=le.indexOf,pe=function(e,t){var n,r=O(e),o=0,u=[];for(n in r)!_(V,n)&&_(r,n)&&u.push(n);for(;t.length>o;)_(r,n=t[o++])&&(~se(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},he={f:Object.getOwnPropertySymbols},ve=ne("Reflect","ownKeys")||function(e){var t=ye.f(j(e)),n=he.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=ve(t),r=R.f,o=w.f,u=0;u<n.length;u++){var i=n[u];_(e,i)||r(e,i,o(t,i))}},be=/#|\.prototype\./,Oe=function(e,t){var n=me[Te(e)];return n==_e||n!=Se&&("function"==typeof t?s(t):!!t)},Te=Oe.normalize=function(e){return String(e).replace(be,".").toLowerCase()},me=Oe.data={},Se=Oe.NATIVE="N",_e=Oe.POLYFILL="P",Ie=Oe,De=w.f,Ne=function(e,t){var n,r,o,u,i,c=e.target,a=e.global,f=e.stat;if(n=a?l:f?l[c]||H(c,{}):(l[c]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(i=De(n,r))&&i.value:n[r],!Ie(a?r:c+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;ge(u,o)}(e.sham||o&&o.sham)&&M(u,"sham",!0),$(n,r,u,e)}},Le=Object.keys||function(e){return pe(e,de)},Ae=y.f,we=function(e){return function(t){for(var n,r=O(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],p&&!Ae.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},je={entries:we(!0),values:we(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return je(e)}});ee.Object.values;var Pe=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),Re=l.Symbol,Me=G("wks"),He=p?Object.defineProperties:function(e,t){j(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)R.f(e,n=r[u++],t[n]);return e},Ge=ne("document","documentElement"),Ce=U("IE_PROTO"),ke=function(){},Ke=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ke=e.F;n--;)delete Ke.prototype[de[n]];return Ke()},Be=Object.create||function(e,t){var n;return null!==e?(ke.prototype=j(e),n=new ke,ke.prototype=null,n[Ce]=e):n=Ke(),void 0===t?n:He(n,t)};V[Ce]=!0;var xe,Fe=Me[xe="unscopables"]||(Me[xe]=Pe&&Re[xe]||(Pe?Re:F)("Symbol."+xe)),Ye=Array.prototype;null==Ye[Fe]&&M(Ye,Fe,Be(null));var Ue,Ve=le.includes;Ne({target:"Array",proto:!0},{includes:function(e){return Ve(this,e,arguments.length>1?arguments[1]:void 0)}}),Ue="includes",Ye[Fe][Ue]=!0;var We,ze,Qe,qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Xe=Function.call;We="includes",qe(Xe,l["Array"].prototype[We],ze);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Qe||(Qe={}));var Je,Ze=Qe;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Je||(Je={}));var $e,et=Je,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(a=f)&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")&&a.default;var l,s,p=f.BLOCKS,d=(f.CONTAINERS,f.INLINES),E=f.MARKS,y=(f.TOP_LEVEL_BLOCKS,f.VOID_BLOCKS,f.helpers);function h(e,t){return e.map((function(e,n){return r=v(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var g=((l={})[p.DOCUMENT]=function(e,t){return t},l[p.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},l[p.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},l[p.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},l[p.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},l[p.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},l[p.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},l[p.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},l[p.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},l[p.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},l[p.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},l[p.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},l[p.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},l[p.HR]=function(){return u.createElement("hr",null)},l[d.ASSET_HYPERLINK]=function(e){return O(d.ASSET_HYPERLINK,e)},l[d.ENTRY_HYPERLINK]=function(e){return O(d.ENTRY_HYPERLINK,e)},l[d.EMBEDDED_ENTRY]=function(e){return O(d.EMBEDDED_ENTRY,e)},l[d.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},l),b=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function O(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?v(e,{renderNode:i({},g,t.renderNode),renderMark:i({},b,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},UExd:function(e,t,n){var r=n("nh4g"),o=n("DVgA"),u=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=u(t),a=o(c),f=a.length,l=0,s=[];f>l;)n=a[l++],r&&!i.call(c,n)||s.push(e?[n,c[n]]:c[n]);return s}}},VyhK:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return d}));var r=n("VbXa"),o=n.n(r),u=n("q1tI"),i=n.n(u),c=(n("TJpk"),n("mwIZ")),a=n.n(c),f=(n("9eSz"),n("Bl7J")),l=n("vbKG"),s=n("R8uD"),p=(n("3dzV"),function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=a()(this.props,"data.contentfulArtPage"),n={renderNode:(e={},e[l.BLOCKS.EMBEDDED_ASSET]=function(e){console.log(e);var t=e.data.target.fields,n=(t.description,t.title,t.file);return i.a.createElement("img",{src:n["en-US"].url})},e)},r=Object(s.documentToReactComponents)(t.content.json,n);return console.log("content",r),i.a.createElement(f.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"section-headline"},t.title),i.a.createElement("div",null,r))))},t}(i.a.Component));t.default=p;var d="1513872284"},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},hhXQ:function(e,t,n){var r=n("XKFU"),o=n("UExd")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},vbKG:function(e,t,n){"use strict";(function(e){n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var u=function(e){return e&&e.Math==Math&&e},i=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof r&&r)||Function("return this")(),c=function(e){try{return!!e()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!f.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:f},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,E="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return d.call(e).slice(8,-1)}(e)?E.call(e,""):Object(e)}:Object,h=function(e){return y(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!v(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!v(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!v(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,O=function(e,t){return b.call(e,t)},T=i.document,m=v(T)&&v(T.createElement),S=function(e){return m?T.createElement(e):{}},_=!a&&!c((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,D={f:a?I:function(e,t){if(e=h(e),t=g(t,!0),_)try{return I(e,t)}catch(n){}if(O(e,t))return p(!s.f.call(e,t),e[t])}},N=function(e){if(!v(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,A={f:a?L:function(e,t,n){if(N(e),t=g(t,!0),N(n),_)try{return L(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},w=a?function(e,t,n){return A.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},j=function(e,t){try{w(i,e,t)}catch(n){i[e]=t}return t},P=i["__core-js_shared__"]||j("__core-js_shared__",{}),R=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return R.call(e)});var M,H,G,C=P.inspectSource,k=i.WeakMap,K="function"==typeof k&&/native code/.test(C(k)),B=o((function(e){(e.exports=function(e,t){return P[e]||(P[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),x=0,F=Math.random(),Y=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++x+F).toString(36)},U=B("keys"),V=function(e){return U[e]||(U[e]=Y(e))},W={},z=i.WeakMap;if(K){var Q=new z,q=Q.get,X=Q.has,J=Q.set;M=function(e,t){return J.call(Q,e,t),t},H=function(e){return q.call(Q,e)||{}},G=function(e){return X.call(Q,e)}}else{var Z=V("state");W[Z]=!0,M=function(e,t){return w(e,Z,t),t},H=function(e){return O(e,Z)?e[Z]:{}},G=function(e){return O(e,Z)}}var $={set:M,get:H,has:G,enforce:function(e){return G(e)?H(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=o((function(e){var t=$.get,n=$.enforce,r=String(String).split("String");(e.exports=function(e,t,o,u){var c=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||w(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==i?(c?!f&&e[t]&&(a=!0):delete e[t],a?e[t]=o:w(e,t,o)):a?e[t]=o:j(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),te=i,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(te[e])||ne(i[e]):te[e]&&te[e][t]||i[e]&&i[e][t]},oe=Math.ceil,ue=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?ue:oe)(e)},ce=Math.min,ae=Math.max,fe=Math.min,le=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?ce(ie(o),9007199254740991):0,a=function(e,t){var n=ie(e);return n<0?ae(n+t,0):fe(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},se={includes:le(!0),indexOf:le(!1)},pe=se.indexOf,de=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!O(W,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~pe(u,n)||u.push(n));return u},Ee=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=Ee.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return de(e,ye)}},ve={f:Object.getOwnPropertySymbols},ge=re("Reflect","ownKeys")||function(e){var t=he.f(N(e)),n=ve.f;return n?t.concat(n(e)):t},be=function(e,t){for(var n=ge(t),r=A.f,o=D.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},Oe=/#|\.prototype\./,Te=function(e,t){var n=Se[me(e)];return n==Ie||n!=_e&&("function"==typeof t?c(t):!!t)},me=Te.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},Se=Te.data={},_e=Te.NATIVE="N",Ie=Te.POLYFILL="P",De=Te,Ne=D.f,Le=function(e,t){var n,r,o,u,c,a=e.target,f=e.global,l=e.stat;if(n=f?i:l?i[a]||j(a,{}):(i[a]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(c=Ne(n,r))&&c.value:n[r],!De(f?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;be(u,o)}(e.sham||o&&o.sham)&&w(u,"sham",!0),ee(n,r,u,e)}},Ae=Object.keys||function(e){return de(e,Ee)},we=s.f,je=function(e){return function(t){for(var n,r=h(t),o=Ae(r),u=o.length,i=0,c=[];u>i;)n=o[i++],a&&!we.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Pe={entries:je(!0),values:je(!1)}.values;Le({target:"Object",stat:!0},{values:function(e){return Pe(e)}});te.Object.values;var Re,Me=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),He=Me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ge=B("wks"),Ce=i.Symbol,ke=He?Ce:Ce&&Ce.withoutSetter||Y,Ke=a?Object.defineProperties:function(e,t){N(e);for(var n,r=Ae(t),o=r.length,u=0;o>u;)A.f(e,n=r[u++],t[n]);return e},Be=re("document","documentElement"),xe=V("IE_PROTO"),Fe=function(){},Ye=function(e){return"<script>"+e+"<\/script>"},Ue=function(){try{Re=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;Ue=Re?function(e){e.write(Ye("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Re):((t=S("iframe")).style.display="none",Be.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Ye("document.F=Object")),e.close(),e.F);for(var n=Ee.length;n--;)delete Ue.prototype[Ee[n]];return Ue()};W[xe]=!0;var Ve,We=Object.create||function(e,t){var n;return null!==e?(Fe.prototype=N(e),n=new Fe,Fe.prototype=null,n[xe]=e):n=Ue(),void 0===t?n:Ke(n,t)},ze=(O(Ge,Ve="unscopables")||(Me&&O(Ce,Ve)?Ge[Ve]=Ce[Ve]:Ge[Ve]=ke("Symbol."+Ve)),Ge[Ve]),Qe=Array.prototype;null==Qe[ze]&&A.f(Qe,ze,{configurable:!0,value:We(null)});var qe,Xe=Object.defineProperty,Je={},Ze=function(e){throw e},$e=se.includes;Le({target:"Array",proto:!0,forced:!function(e,t){if(O(Je,e))return Je[e];t||(t={});var n=[][e],r=!!O(t,"ACCESSORS")&&t.ACCESSORS,o=O(t,0)?t[0]:Ze,u=O(t,1)?t[1]:void 0;return Je[e]=!!n&&!c((function(){if(r&&!a)return!0;var e={length:-1};r?Xe(e,1,{enumerable:!0,get:Ze}):e[1]=1,n.call(e,o,u)}))}("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return $e(this,e,arguments.length>1?arguments[1]:void 0)}}),qe="includes",Qe[ze][qe]=!0;var et,tt,nt,rt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},ot=Function.call;et="includes",rt(ot,i["Array"].prototype[et],tt);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(nt||(nt={}));var ut,it=nt;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(ut||(ut={}));var ct,at=ut,ft=[it.PARAGRAPH,it.HEADING_1,it.HEADING_2,it.HEADING_3,it.HEADING_4,it.HEADING_5,it.HEADING_6,it.OL_LIST,it.UL_LIST,it.HR,it.QUOTE,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],lt=[it.HR,it.EMBEDDED_ENTRY,it.EMBEDDED_ASSET],st=((ct={})[it.OL_LIST]=[it.LIST_ITEM],ct[it.UL_LIST]=[it.LIST_ITEM],ct[it.LIST_ITEM]=ft.slice(),ct[it.QUOTE]=[it.PARAGRAPH],ct),pt={nodeType:it.DOCUMENT,data:{},content:[{nodeType:it.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};var dt=Object.freeze({isInline:function(e){return Object.values(at).includes(e.nodeType)},isBlock:function(e){return Object.values(it).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=it,t.CONTAINERS=st,t.EMPTY_DOCUMENT=pt,t.INLINES=at,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=ft,t.VOID_BLOCKS=lt,t.helpers=dt}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-art-post-js-4f675621cd74b1860838.js.map