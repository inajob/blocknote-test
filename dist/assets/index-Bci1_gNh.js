import{z as T}from"./index-BEo9Qbf6.js";import{p as E,e as b,l as S,d as R,t as z,a as M,i as $,s as j,c as q,b as G}from"./list-item-xb9BgIlX.js";import{v as Q,E as D}from"./index-BSAZhzZx.js";import{t as x}from"./index-C_aolqmU.js";import{p as U}from"./index-vY-h4J_N.js";import"./index-D7TIu75F.js";function k(r,t){let e=-1,n;if(t.extensions)for(;++e<t.extensions.length;)k(r,t.extensions[e]);for(n in t)n==="extensions"||(n==="unsafe"||n==="join"?r[n]=[...r[n]||[],...t[n]||[]]:n==="handlers"?r[n]=Object.assign(r[n],t[n]||{}):r.options[n]=t[n]);return r}function Z(r,t,e,n){const u=e.enter("blockquote"),l=e.createTracker(n);l.move("> "),l.shift(2);const c=e.indentLines(e.containerFlow(r,l.current()),H);return u(),c}function H(r,t,e){return">"+(e?"":" ")+r}function g(r,t,e,n){let u=-1;for(;++u<e.unsafe.length;)if(e.unsafe[u].character===`
`&&E(e.stack,e.unsafe[u]))return/[ \t]/.test(n.before)?"":" ";return`\\
`}function W(r,t){const e=String(r);let n=e.indexOf(t),u=n,l=0,c=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;n!==-1;)n===u?++l>c&&(c=l):l=1,u=n+t.length,n=e.indexOf(t,u);return c}function m(r,t){return!!(!t.options.fences&&r.value&&!r.lang&&/[^ \r\n]/.test(r.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(r.value))}function X(r){const t=r.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function J(r,t,e,n){const u=X(e),l=r.value||"",c=u==="`"?"GraveAccent":"Tilde";if(m(r,e)){const s=e.enter("codeIndented"),h=e.indentLines(l,K);return s(),h}const a=e.createTracker(n),i=u.repeat(Math.max(W(l,u)+1,3)),o=e.enter("codeFenced");let f=a.move(i);if(r.lang){const s=e.enter(`codeFencedLang${c}`);f+=a.move(e.safe(r.lang,{before:f,after:" ",encode:["`"],...a.current()})),s()}if(r.lang&&r.meta){const s=e.enter(`codeFencedMeta${c}`);f+=a.move(" "),f+=a.move(e.safe(r.meta,{before:f,after:`
`,encode:["`"],...a.current()})),s()}return f+=a.move(`
`),l&&(f+=a.move(l+`
`)),f+=a.move(i),o(),f}function K(r,t,e){return(e?"":"    ")+r}function v(r){const t=r.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function N(r,t,e,n){const u=v(e),l=u==='"'?"Quote":"Apostrophe",c=e.enter("definition");let a=e.enter("label");const i=e.createTracker(n);let o=i.move("[");return o+=i.move(e.safe(e.associationId(r),{before:o,after:"]",...i.current()})),o+=i.move("]: "),a(),!r.url||/[\0- \u007F]/.test(r.url)?(a=e.enter("destinationLiteral"),o+=i.move("<"),o+=i.move(e.safe(r.url,{before:o,after:">",...i.current()})),o+=i.move(">")):(a=e.enter("destinationRaw"),o+=i.move(e.safe(r.url,{before:o,after:r.title?" ":`
`,...i.current()}))),a(),r.title&&(a=e.enter(`title${l}`),o+=i.move(" "+u),o+=i.move(e.safe(r.title,{before:o,after:u,...i.current()})),o+=i.move(u),a()),c(),o}function V(r){const t=r.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}w.peek=Y;function w(r,t,e,n){const u=V(e),l=e.enter("emphasis"),c=e.createTracker(n);let a=c.move(u);return a+=c.move(e.containerPhrasing(r,{before:a,after:u,...c.current()})),a+=c.move(u),l(),a}function Y(r,t,e){return e.options.emphasis||"*"}function C(r,t){let e=!1;return Q(r,n=>{if("value"in n&&/\r?\n|\r/.test(n.value)||n.type==="break")return e=!0,D}),!!((!r.depth||r.depth<3)&&x(r)&&(t.options.setext||e))}function ee(r,t,e,n){const u=Math.max(Math.min(6,r.depth||1),1),l=e.createTracker(n);if(C(r,e)){const f=e.enter("headingSetext"),s=e.enter("phrasing"),h=e.containerPhrasing(r,{...l.current(),before:`
`,after:`
`});return s(),f(),h+`
`+(u===1?"=":"-").repeat(h.length-(Math.max(h.lastIndexOf("\r"),h.lastIndexOf(`
`))+1))}const c="#".repeat(u),a=e.enter("headingAtx"),i=e.enter("phrasing");l.move(c+" ");let o=e.containerPhrasing(r,{before:"# ",after:`
`,...l.current()});return/^[\t ]/.test(o)&&(o="&#x"+o.charCodeAt(0).toString(16).toUpperCase()+";"+o.slice(1)),o=o?c+" "+o:c,e.options.closeAtx&&(o+=" "+c),i(),a(),o}O.peek=re;function O(r){return r.value||""}function re(){return"<"}_.peek=te;function _(r,t,e,n){const u=v(e),l=u==='"'?"Quote":"Apostrophe",c=e.enter("image");let a=e.enter("label");const i=e.createTracker(n);let o=i.move("![");return o+=i.move(e.safe(r.alt,{before:o,after:"]",...i.current()})),o+=i.move("]("),a(),!r.url&&r.title||/[\0- \u007F]/.test(r.url)?(a=e.enter("destinationLiteral"),o+=i.move("<"),o+=i.move(e.safe(r.url,{before:o,after:">",...i.current()})),o+=i.move(">")):(a=e.enter("destinationRaw"),o+=i.move(e.safe(r.url,{before:o,after:r.title?" ":")",...i.current()}))),a(),r.title&&(a=e.enter(`title${l}`),o+=i.move(" "+u),o+=i.move(e.safe(r.title,{before:o,after:u,...i.current()})),o+=i.move(u),a()),o+=i.move(")"),c(),o}function te(){return"!"}y.peek=ne;function y(r,t,e,n){const u=r.referenceType,l=e.enter("imageReference");let c=e.enter("label");const a=e.createTracker(n);let i=a.move("![");const o=e.safe(r.alt,{before:i,after:"]",...a.current()});i+=a.move(o+"]["),c();const f=e.stack;e.stack=[],c=e.enter("reference");const s=e.safe(e.associationId(r),{before:i,after:"]",...a.current()});return c(),e.stack=f,l(),u==="full"||!o||o!==s?i+=a.move(s+"]"):u==="shortcut"?i=i.slice(0,-1):i+=a.move("]"),i}function ne(){return"!"}function A(r,t){const e=x(r);return!!(!t.options.resourceLink&&r.url&&!r.title&&r.children&&r.children.length===1&&r.children[0].type==="text"&&(e===r.url||"mailto:"+e===r.url)&&/^[a-z][a-z+.-]+:/i.test(r.url)&&!/[\0- <>\u007F]/.test(r.url))}B.peek=oe;function B(r,t,e,n){const u=v(e),l=u==='"'?"Quote":"Apostrophe",c=e.createTracker(n);let a,i;if(A(r,e)){const f=e.stack;e.stack=[],a=e.enter("autolink");let s=c.move("<");return s+=c.move(e.containerPhrasing(r,{before:s,after:">",...c.current()})),s+=c.move(">"),a(),e.stack=f,s}a=e.enter("link"),i=e.enter("label");let o=c.move("[");return o+=c.move(e.containerPhrasing(r,{before:o,after:"](",...c.current()})),o+=c.move("]("),i(),!r.url&&r.title||/[\0- \u007F]/.test(r.url)?(i=e.enter("destinationLiteral"),o+=c.move("<"),o+=c.move(e.safe(r.url,{before:o,after:">",...c.current()})),o+=c.move(">")):(i=e.enter("destinationRaw"),o+=c.move(e.safe(r.url,{before:o,after:r.title?" ":")",...c.current()}))),i(),r.title&&(i=e.enter(`title${l}`),o+=c.move(" "+u),o+=c.move(e.safe(r.title,{before:o,after:u,...c.current()})),o+=c.move(u),i()),o+=c.move(")"),a(),o}function oe(r,t,e){return A(r,e)?"<":"["}F.peek=ce;function F(r,t,e,n){const u=r.referenceType,l=e.enter("linkReference");let c=e.enter("label");const a=e.createTracker(n);let i=a.move("[");const o=e.containerPhrasing(r,{before:i,after:"]",...a.current()});i+=a.move(o+"]["),c();const f=e.stack;e.stack=[],c=e.enter("reference");const s=e.safe(e.associationId(r),{before:i,after:"]",...a.current()});return c(),e.stack=f,l(),u==="full"||!o||o!==s?i+=a.move(s+"]"):u==="shortcut"?i=i.slice(0,-1):i+=a.move("]"),i}function ce(){return"["}function ie(r){const t=b(r),e=r.options.bulletOther;if(!e)return t==="*"?"-":"*";if(e!=="*"&&e!=="+"&&e!=="-")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(e===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+e+"`) to be different");return e}function L(r){const t=r.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function ae(r){const t=L(r),e=r.options.bulletOrderedOther;if(!e)return t==="."?")":".";if(e!=="."&&e!==")")throw new Error("Cannot serialize items with `"+e+"` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");if(e===t)throw new Error("Expected `bulletOrdered` (`"+t+"`) and `bulletOrderedOther` (`"+e+"`) to be different");return e}function I(r){const t=r.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function ue(r,t,e,n){const u=e.enter("list"),l=e.bulletCurrent;let c=r.ordered?L(e):b(e);const a=r.ordered?ae(e):ie(e),i=e.bulletLastUsed;let o=!1;if(t&&(r.ordered?e.options.bulletOrderedOther:e.options.bulletOther)&&i&&c===i&&(o=!0),!r.ordered){const s=r.children?r.children[0]:void 0;if((c==="*"||c==="-")&&s&&(!s.children||!s.children[0])&&e.stack[e.stack.length-1]==="list"&&e.stack[e.stack.length-2]==="listItem"&&e.stack[e.stack.length-3]==="list"&&e.stack[e.stack.length-4]==="listItem"&&e.indexStack[e.indexStack.length-1]===0&&e.indexStack[e.indexStack.length-2]===0&&e.indexStack[e.indexStack.length-3]===0&&(o=!0),I(e)===c&&s){let h=-1;for(;++h<r.children.length;){const d=r.children[h];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){o=!0;break}}}}o&&(c=a),e.bulletCurrent=c;const f=e.containerFlow(r,n);return e.bulletLastUsed=c,e.bulletCurrent=l,u(),f}function le(r,t,e,n){const u=e.enter("paragraph"),l=e.enter("phrasing"),c=e.containerPhrasing(r,n);return l(),u(),c}function se(r,t,e,n){return(r.children.some(c=>U(c))?e.containerPhrasing:e.containerFlow).call(e,r,n)}function fe(r){const t=r.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}P.peek=he;function P(r,t,e,n){const u=fe(e),l=e.enter("strong"),c=e.createTracker(n);let a=c.move(u+u);return a+=c.move(e.containerPhrasing(r,{before:a,after:u,...c.current()})),a+=c.move(u+u),l(),a}function he(r,t,e){return e.options.strong||"*"}function pe(r,t,e,n){return e.safe(r.value,n)}function de(r){const t=r.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function ke(r,t,e){const n=(I(e)+(e.options.ruleSpaces?" ":"")).repeat(de(e));return e.options.ruleSpaces?n.slice(0,-1):n}const me={blockquote:Z,break:g,code:J,definition:N,emphasis:w,hardBreak:g,heading:ee,html:O,image:_,imageReference:y,inlineCode:R,link:B,linkReference:F,list:ue,listItem:S,paragraph:le,root:se,strong:P,text:pe,thematicBreak:ke},ve=[ge];function ge(r,t,e,n){if(t.type==="code"&&m(t,n)&&(r.type==="list"||r.type===t.type&&m(r,n))||r.type==="list"&&r.type===t.type&&!!r.ordered==!!t.ordered&&!(r.ordered?n.options.bulletOrderedOther:n.options.bulletOther))return!1;if("spread"in e&&typeof e.spread=="boolean")return r.type==="paragraph"&&(r.type===t.type||t.type==="definition"||t.type==="heading"&&C(t,n))?void 0:e.spread?1:0}const p=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"],be=[{character:"	",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",before:"[\\r\\n]",inConstruct:"phrasing"},{character:"	",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"\r",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:`
`,inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde","codeFencedMetaGraveAccent","codeFencedMetaTilde","destinationLiteral","headingAtx"]},{character:" ",after:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",before:"[\\r\\n]",inConstruct:"phrasing"},{character:" ",inConstruct:["codeFencedLangGraveAccent","codeFencedLangTilde"]},{character:"!",after:"\\[",inConstruct:"phrasing",notInConstruct:p},{character:'"',inConstruct:"titleQuote"},{atBreak:!0,character:"#"},{character:"#",inConstruct:"headingAtx",after:`(?:[\r
]|$)`},{character:"&",after:"[#A-Za-z]",inConstruct:"phrasing"},{character:"'",inConstruct:"titleApostrophe"},{character:"(",inConstruct:"destinationRaw"},{before:"\\]",character:"(",inConstruct:"phrasing",notInConstruct:p},{atBreak:!0,before:"\\d+",character:")"},{character:")",inConstruct:"destinationRaw"},{atBreak:!0,character:"*",after:`(?:[ 	\r
*])`},{character:"*",inConstruct:"phrasing",notInConstruct:p},{atBreak:!0,character:"+",after:`(?:[ 	\r
])`},{atBreak:!0,character:"-",after:`(?:[ 	\r
-])`},{atBreak:!0,before:"\\d+",character:".",after:`(?:[ 	\r
]|$)`},{atBreak:!0,character:"<",after:"[!/?A-Za-z]"},{character:"<",after:"[!/?A-Za-z]",inConstruct:"phrasing",notInConstruct:p},{character:"<",inConstruct:"destinationLiteral"},{atBreak:!0,character:"="},{atBreak:!0,character:">"},{character:">",inConstruct:"destinationLiteral"},{atBreak:!0,character:"["},{character:"[",inConstruct:"phrasing",notInConstruct:p},{character:"[",inConstruct:["label","reference"]},{character:"\\",after:"[\\r\\n]",inConstruct:"phrasing"},{character:"]",inConstruct:["label","reference"]},{atBreak:!0,character:"_"},{character:"_",inConstruct:"phrasing",notInConstruct:p},{atBreak:!0,character:"`"},{character:"`",inConstruct:["codeFencedLangGraveAccent","codeFencedMetaGraveAccent"]},{character:"`",inConstruct:"phrasing",notInConstruct:p},{atBreak:!0,character:"~"}];function xe(r,t={}){const e={enter:u,indentLines:$,associationId:M,containerPhrasing:_e,containerFlow:ye,createTracker:z,safe:Ae,stack:[],unsafe:[],join:[],handlers:{},options:{},indexStack:[],handle:void 0};k(e,{unsafe:be,join:ve,handlers:me}),k(e,t),e.options.tightDefinitions&&k(e,{join:[Oe]}),e.handle=T("type",{invalid:we,unknown:Ce,handlers:e.handlers});let n=e.handle(r,void 0,e,{before:`
`,after:`
`,now:{line:1,column:1},lineShift:0});return n&&n.charCodeAt(n.length-1)!==10&&n.charCodeAt(n.length-1)!==13&&(n+=`
`),n;function u(l){return e.stack.push(l),c;function c(){e.stack.pop()}}}function we(r){throw new Error("Cannot handle value `"+r+"`, expected node")}function Ce(r){throw new Error("Cannot handle unknown node `"+r.type+"`")}function Oe(r,t){if(r.type==="definition"&&r.type===t.type)return 0}function _e(r,t){return G(r,this,t)}function ye(r,t){return q(r,this,t)}function Ae(r,t){return j(this,r,t)}function Ee(r){Object.assign(this,{Compiler:e=>{const n=this.data("settings");return xe(e,Object.assign({},n,r,{extensions:this.data("toMarkdownExtensions")||[]}))}})}export{Ee as default};
