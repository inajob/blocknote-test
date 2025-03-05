import{e as X}from"./index-BIFKZ17F.js";import{p as je}from"./index-vY-h4J_N.js";import{v as I,E as Ee,S as Fe}from"./index-BSAZhzZx.js";import{t as Te}from"./index-C_aolqmU.js";import"./index-C9m0e0wQ.js";const U=function(e,t,n,r,i){const l=z(t);return!e||!e.type||typeof e.type!="string"?!1:l.call(i,e,n,r)},z=function(e){if(e==null)return W;if(typeof e=="string")return qe(e);if(typeof e=="object")return Ce(e);if(typeof e=="function")return se(e);throw new Error("Expected function, string, or array as test")};function Ce(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=z(e[n]);return se(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function qe(e){return t;function t(n){return W(n)&&n.tagName===e}}function se(e){return t;function t(n,...r){return W(n)&&!!e.call(this,n,...r)}}function W(e){return!!(e&&typeof e=="object"&&e.type==="element"&&typeof e.tagName=="string")}const Oe=z(["audio","canvas","embed","iframe","img","math","object","picture","svg","video"]),oe=function(e){if(e==null)return Ue;if(typeof e=="string")return Le(e);if(typeof e=="object")return Array.isArray(e)?Pe(e):Re(e);if(typeof e=="function")return E(e);throw new Error("Expected function, string, or object as test")};function Pe(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=oe(e[n]);return E(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function Re(e){return E(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function Le(e){return E(t);function t(n){return n&&n.type===e}}function E(e){return t;function t(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&e.call(this,n,...r))}}function Ue(){return!0}function ze(e){const t=e&&typeof e=="object"&&e.type==="text"?e.value||"":e;return typeof t=="string"&&t.replace(/[ \t\n\f\r]/g,"")===""}const We=["address","article","aside","blockquote","body","br","caption","center","col","colgroup","dd","dialog","dir","div","dl","dt","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","legend","li","li","listing","main","menu","nav","ol","optgroup","option","p","plaintext","pre","section","summary","table","tbody","td","td","tfoot","th","th","thead","tr","ul","wbr","xmp"],Me=["button","input","select","textarea"],De=["area","base","basefont","dialog","datalist","head","link","meta","noembed","noframes","param","rp","script","source","style","template","track","title"],M=oe(["doctype","comment"]);function He(e={}){const t=Je(e.newlines?_e:Ge);return n=>{ae(n,{collapse:t,whitespace:"normal"})}}function ae(e,t){if("children"in e){const n=Object.assign({},t);return(e.type==="root"||fe(e))&&(n.before=!0,n.after=!0),n.whitespace=Qe(e,t),Ve(e,n)}if(e.type==="text"){if(t.whitespace==="normal")return Ke(e,t);t.whitespace==="nowrap"&&(e.value=t.collapse(e.value))}return{remove:!1,ignore:M(e),stripAtStart:!1}}function Ke(e,t){const n=t.collapse(e.value),r={remove:!1,ignore:!1,stripAtStart:!1};let i=0,l=n.length;return t.before&&Y(n.charAt(0))&&i++,i!==l&&Y(n.charAt(l-1))&&(t.after?l--:r.stripAtStart=!0),i===l?r.remove=!0:e.value=n.slice(i,l),r}function Ve(e,t){let n=t.before;const r=t.after,i=e.children;let l=i.length,c=-1;for(;++c<l;){const s=ae(i[c],Object.assign({},t,{before:n,after:ue(i,c,r)}));s.remove?(i.splice(c,1),c--,l--):s.ignore||(n=s.stripAtStart),pe(i[c])&&(n=!1)}return{remove:!1,ignore:!1,stripAtStart:!!(n||r)}}function ue(e,t,n){for(;++t<e.length;){const r=e[t];let i=Xe(r);if(i===void 0&&"children"in r&&!Ye(r)&&(i=ue(r.children,-1)),typeof i=="boolean")return i}return n}function Xe(e){if(e.type==="element"){if(pe(e))return!1;if(fe(e))return!0}else if(e.type==="text"){if(!ze(e))return!1}else if(!M(e))return!1}function pe(e){return Oe(e)||U(e,Me)}function fe(e){return U(e,We)}function Ye(e){return!!("properties"in e&&e.properties&&e.properties.hidden)||M(e)||U(e,De)}function Y(e){return e===" "||e===`
`}function _e(e){const t=/\r?\n|\r/.exec(e);return t?t[0]:" "}function Ge(){return" "}function Je(e){return t;function t(n){return String(n).replace(/[\t\n\v\f\r ]+/g,e)}}function Qe(e,t){if("tagName"in e&&e.properties)switch(e.tagName){case"listing":case"plaintext":case"script":case"style":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return e.properties.wrap?"pre-wrap":"pre";case"td":case"th":return e.properties.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}return t.whitespace}const he=function(e){if(e==null)return nt;if(typeof e=="string")return tt(e);if(typeof e=="object")return Array.isArray(e)?Ze(e):et(e);if(typeof e=="function")return F(e);throw new Error("Expected function, string, or object as test")};function Ze(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=he(e[n]);return F(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function et(e){return F(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function tt(e){return F(t);function t(n){return n&&n.type===e}}function F(e){return t;function t(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&e.call(this,n,...r))}}function nt(){return!0}function a(e,t){const n=t.children||[],r=[];let i=-1;for(;++i<n.length;){const s=de(e,n[i],t);Array.isArray(s)?r.push(...s):s&&r.push(s)}let l=0,c=r.length;for(;l<c&&r[l].type==="break";)l++;for(;c>l&&r[c-1].type==="break";)c--;return l===0&&c===r.length?r:r.slice(l,c)}const j={}.hasOwnProperty;function g(e,t){return e.wrapText?t:t.replace(/\r?\n|\r/g," ")}function de(e,t,n){let r;if(t.type==="element"){if(t.properties&&t.properties.dataMdast==="ignore")return;j.call(e.handlers,t.tagName)&&(r=e.handlers[t.tagName])}else j.call(e.handlers,t.type)&&(r=e.handlers[t.type]);return typeof r=="function"?r(e,t,n):rt(e,t)}function rt(e,t){return typeof t.value=="string"?e(t,"text",g(e,t.value)):a(e,t)}const it=function(e,t,n,r,i){const l=d(t);return!e||!e.type||typeof e.type!="string"?!1:l.call(i,e,n,r)},d=function(e){if(e==null)return D;if(typeof e=="string")return ct(e);if(typeof e=="object")return lt(e);if(typeof e=="function")return ge(e);throw new Error("Expected function, string, or array as test")};function lt(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=d(e[n]);return ge(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function ct(e){return t;function t(n){return D(n)&&n.tagName===e}}function ge(e){return t;function t(n,...r){return D(n)&&!!e.call(this,n,...r)}}function D(e){return!!(e&&typeof e=="object"&&e.type==="element"&&typeof e.tagName=="string")}const st={}.hasOwnProperty;function N(e,t){const n=typeof t=="string"&&ot(e)&&e.type==="element"&&e.properties&&st.call(e.properties,t)&&e.properties[t];return n!=null&&n!==!1}function ot(e){return!!(e&&typeof e=="object"&&"type"in e)}const at=d(["audio","canvas","embed","iframe","img","math","object","picture","svg","video"]),ut=new Set(["pingback","prefetch","stylesheet"]);function pt(e){if(!it(e,"link"))return!1;if(N(e,"itemProp"))return!0;const n=(e.properties||{}).rel||[];let r=-1;if(!Array.isArray(n)||n.length===0)return!1;for(;++r<n.length;)if(!ut.has(String(n[r])))return!1;return!0}const ft=d(["a","abbr","area","b","bdi","bdo","br","button","cite","code","data","datalist","del","dfn","em","i","input","ins","kbd","keygen","label","map","mark","meter","noscript","output","progress","q","ruby","s","samp","script","select","small","span","strong","sub","sup","template","textarea","time","u","var","wbr"]),ht=d("meta");function dt(e){return!!(gt(e)&&(e.type==="text"||ft(e)||at(e)||pt(e)||ht(e)&&N(e,"itemProp")))}function gt(e){return e&&typeof e=="object"&&"type"in e}function ye(e){return me(e,t);function t(n){const r=n[0];return n.length===1&&r.type==="text"&&(r.value===" "||r.value===`
`)?[]:{type:"paragraph",children:n}}}function T(e){let t=-1,n;for(;++t<e.length;)if(n=e[t],!be(n)||"children"in n&&T(n.children))return!0;return!1}function me(e,t,n){const r=n||bt,i=yt(e);let l=[],c=-1,s,o;for(;++c<i.length;)o=i[c],be(o)?(s||(s=[]),s.push(o)):(s&&(l=l.concat(t(s)),s=void 0),l=l.concat(r(o)));return s&&(l=l.concat(t(s))),l}function yt(e){let t=[],n=-1,r;for(;++n<e.length;)r=e[n],(r.type==="delete"||r.type==="link")&&T(r.children)?t=t.concat(mt(r)):t.push(r);return t}function mt(e){return me(e.children,n,t);function t(r){if("children"in r&&"children"in e){const{children:i,...l}=e;return{...r,children:[{...X(!0,{},l),children:r.children}]}}return{...r}}function n(r){const{children:i,...l}=e;return{...X(!0,{},l),children:r}}}function be(e){return e.data&&e.data.hName?dt({type:"element",tagName:e.data.hName,properties:{},children:[]}):je(e)}function bt(e){return e}function h(e,t){return ye(a(e,t))}function w(e,t){return t==null?"":e.frozenBaseUrl?String(new URL(t,e.frozenBaseUrl)):t}function wt(e,t){const n=t.properties;return e(t,"link",{title:n.title||null,url:w(e,String(n.href||"")||null)},a(e,t))}function xt(e,t){e.baseFound||(e.frozenBaseUrl=String(t.properties&&t.properties.href||"")||null,e.baseFound=!0)}function kt(e,t){return e(t,"blockquote",h(e,t))}function vt(e,t){return e.wrapText?e(t,"break"):e(t,"text"," ")}const x=function(e){if(e==null)return H;if(typeof e=="string")return Nt(e);if(typeof e=="object")return St(e);if(typeof e=="function")return we(e);throw new Error("Expected function, string, or array as test")};function St(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=x(e[n]);return we(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function Nt(e){return t;function t(n){return H(n)&&n.tagName===e}}function we(e){return t;function t(n,...r){return H(n)&&!!e.call(this,n,...r)}}function H(e){return!!(e&&typeof e=="object"&&e.type==="element"&&typeof e.tagName=="string")}const xe=function(e){if(e==null)return It;if(typeof e=="string")return Bt(e);if(typeof e=="object")return Array.isArray(e)?At(e):$t(e);if(typeof e=="function")return C(e);throw new Error("Expected function, string, or object as test")};function At(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=xe(e[n]);return C(r);function r(...i){let l=-1;for(;++l<t.length;)if(t[l].call(this,...i))return!0;return!1}}function $t(e){return C(t);function t(n){let r;for(r in e)if(n[r]!==e[r])return!1;return!0}}function Bt(e){return C(t);function t(n){return n&&n.type===e}}function C(e){return t;function t(n,...r){return!!(n&&typeof n=="object"&&"type"in n&&e.call(this,n,...r))}}function It(){return!0}const _=function(e,t,n){const r=xe(n);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof t=="number"){if(t<0||t===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(t=e.children.indexOf(t),t<0)throw new Error("Expected child node or index");for(;++t<e.children.length;)if(r(e.children[t],t,e))return e.children[t];return null},G=/\n/g,J=/[\t ]+/g,L=x("br"),jt=x("p"),Q=x(["th","td"]),Z=x("tr"),Et=x(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",qt,Ot]),ke=x(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function A(e,t={}){const n="children"in e?e.children:[],r=ke(e),i=Ne(e,{whitespace:t.whitespace||"normal"}),l=[];(e.type==="text"||e.type==="comment")&&l.push(...Se(e,{breakBefore:!0,breakAfter:!0}));let c=-1;for(;++c<n.length;)l.push(...ve(n[c],e,{whitespace:i,breakBefore:c?void 0:r,breakAfter:c<n.length-1?L(n[c+1]):r}));const s=[];let o;for(c=-1;++c<l.length;){const u=l[c];typeof u=="number"?o!==void 0&&u>o&&(o=u):u&&(o!==void 0&&o>-1&&s.push(`
`.repeat(o)||" "),o=-1,s.push(u))}return s.join("")}function ve(e,t,n){return e.type==="element"?Ft(e,t,n):e.type==="text"?n.whitespace==="normal"?Se(e,n):Tt(e):[]}function Ft(e,t,n){const r=Ne(e,n),i=e.children||[];let l=-1,c=[];if(Et(e))return c;let s,o;for(L(e)||Z(e)&&_(t,e,Z)?o=`
`:jt(e)?(s=2,o=2):ke(e)&&(s=1,o=1);++l<i.length;)c=c.concat(ve(i[l],e,{whitespace:r,breakBefore:l?void 0:s,breakAfter:l<i.length-1?L(i[l+1]):o}));return Q(e)&&_(t,e,Q)&&c.push("	"),s&&c.unshift(s),o&&c.push(o),c}function Se(e,t){const n=String(e.value),r=[],i=[];let l=0;for(;l<=n.length;){G.lastIndex=l;const o=G.exec(n),u=o&&"index"in o?o.index:n.length;r.push(Ct(n.slice(l,u).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),l===0?t.breakBefore:!0,u===n.length?t.breakAfter:!0)),l=u+1}let c=-1,s;for(;++c<r.length;)r[c].charCodeAt(r[c].length-1)===8203||c<r.length-1&&r[c+1].charCodeAt(0)===8203?(i.push(r[c]),s=void 0):r[c]?(typeof s=="number"&&i.push(s),i.push(r[c]),s=0):(c===0||c===r.length-1)&&i.push(0);return i}function Tt(e){return[String(e.value)]}function Ct(e,t,n){const r=[];let i=0,l;for(;i<e.length;){J.lastIndex=i;const c=J.exec(e);l=c?c.index:e.length,!i&&!l&&c&&!t&&r.push(""),i!==l&&r.push(e.slice(i,l)),i=c?l+c[0].length:l}return i!==l&&!n&&r.push(""),r.join(" ")}function Ne(e,t){if(e.type==="element"){const n=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return n.wrap?"pre-wrap":"pre";case"td":case"th":return n.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap"}}return t.whitespace}function qt(e){return!!(e.properties||{}).hidden}function Ot(e){return e.tagName==="dialog"&&!(e.properties||{}).open}function Pt(e){const t=String(e);let n=t.length;for(;n>0;){const r=t.codePointAt(n-1);if(r!==void 0&&(r===10||r===13))n--;else break}return t.slice(0,n)}const q="language-",Rt=d("pre"),Lt=d("code");function $(e,t){const n=t.children;let r=-1,i,l;if(Rt(t))for(;++r<n.length;){const c=n[r];if(Lt(c)&&c.properties&&c.properties.className&&Array.isArray(c.properties.className)){i=c.properties.className;break}}if(i){for(r=-1;++r<i.length;)if(String(i[r]).slice(0,q.length)===q){l=String(i[r]).slice(q.length);break}}return e(t,"code",{lang:l||null,meta:null},Pt(g(e,A(t))))}function Ut(e,t){return e(t,"html","<!--"+g(e,t.value)+"-->")}function O(e,t){return e(t,"delete",a(e,t))}function K(e){let t=-1;if(e.length>1){for(;++t<e.length;)if(e[t].spread)return!0}return!1}function Ae(e,t){const n=a(e,t);let r=-1;for(;++r<n.length;){const i=n[r];i.type!=="listItem"&&(n[r]={type:"listItem",spread:!1,checked:null,children:[i]})}return n}const zt=d("div"),Wt=d("dt"),Mt=d("dd");function Dt(e,t){const n=t.children;let r=-1,i=[];const l=[];let c={titles:[],definitions:[]},s,o;for(;++r<n.length;)s=n[r],i=i.concat(zt(s)?s.children:s);for(r=-1;++r<i.length;)s=i[r],Wt(s)?(Mt(i[r-1])&&(l.push(c),c={titles:[],definitions:[]}),c.titles.push(s)):c.definitions.push(s);l.push(c),r=-1;const u=[];for(;++r<l.length;)o=[...ee(e,l[r].titles),...ee(e,l[r].definitions)],o.length>0&&u.push({type:"listItem",spread:o.length>1,checked:null,children:o});if(u.length>0)return e(t,"list",{ordered:!1,start:null,spread:K(u)},u)}function ee(e,t){const n=Ae(e,{type:"element",tagName:"x",children:t});return n.length===0?[]:n.length===1?n[0].children:[{type:"list",ordered:!1,start:null,spread:K(n),children:n}]}function B(e,t){return e(t,"emphasis",a(e,t))}function v(e,t){const n=Number(t.tagName.charAt(1))||1,r=e.wrapText;e.wrapText=!1;const i=e(t,"heading",{depth:n},a(e,t));return e.wrapText=r,i}function Ht(e,t){return e(t,"thematicBreak")}function Kt(e,t){const n=t.properties,r=String(n.src||""),i=String(n.title||"");if(r&&i)return{type:"link",title:null,url:w(e,r),children:[{type:"text",value:g(e,i)}]}}function te(e,t){const n=t.properties;return e(t,"image",{url:w(e,String(n.src||"")||null),title:n.title||null,alt:n.alt||""})}function S(e,t){return e(t,"inlineCode",g(e,A(t)))}const Vt=d("option");function $e(e,t,n){const r=n||t.properties;let i=Be(t);const l=Math.min(Number.parseInt(String(r.size),10),0)||(r.multiple?4:1);let c=-1;const s=[],o=[];for(;++c<i.length;)N(i[c],"selected")&&s.push(i[c]);for(i=(s.length>0?s:i).slice(0,l),c=-1;++c<i.length;){const f=i[c],m=g(e,A(f)),y=f.properties,b=m||String(y.label||""),k=String(y.value||"")||m;o.push([k,b===k?null:b])}return o}function Be(e){const t=e.children;let n=-1,r=[],i;for(;++n<t.length;)i=t[n],Array.isArray(i.children)&&(r=r.concat(Be(i))),Vt(i)&&!N(i,"disabled")&&r.push(i);return r}const Xt=d("datalist");function Yt(e,t){const n=t.properties;let r=String(n.value||n.placeholder||"");const i=[],l=[];let c=[],s=-1,o;if(!(n.disabled||n.type==="hidden"||n.type==="file")){if(n.type==="checkbox"||n.type==="radio")return e(t,"text",g(e,e[n.checked?"checked":"unchecked"]));if(n.type==="image")return n.alt||r?e(t,"image",{url:w(e,String(n.src||"")||null),title:g(e,String(n.title||""))||null,alt:g(e,String(n.alt||r))}):[];if(r?c=[[r,null]]:n.type!=="password"&&n.type!=="file"&&n.type!=="submit"&&n.type!=="reset"&&n.type!=="button"&&n.list&&(o=String(n.list).toUpperCase(),j.call(e.nodeById,o)&&Xt(e.nodeById[o])&&(c=$e(e,e.nodeById[o],n))),c.length!==0){if(n.type==="password"&&(c[0]=["•".repeat(c[0][0].length),null]),n.type==="url"||n.type==="email"){for(;++s<c.length;)r=w(e,c[s][0]),i.push(e(t,"link",{title:null,url:g(e,n.type==="email"?"mailto:"+r:r)},[{type:"text",value:g(e,c[s][1]||r)}])),s!==c.length-1&&i.push({type:"text",value:", "});return i}for(;++s<c.length;)l.push(c[s][1]?c[s][1]+" ("+c[s][0]+")":c[s][0]);return e(t,"text",g(e,l.join(", ")))}}}const _t=d("p"),Gt=d("input");function P(e,t){const n=t.children[0];let r=null,i,l;_t(n)&&(i=n.children[0],Gt(i)&&i.properties&&(i.properties.type==="checkbox"||i.properties.type==="radio")&&(r=!!i.properties.checked,l={...t,children:[{...n,children:n.children.slice(1)},...t.children.slice(1)]}));const c=h(e,l||t);return e(t,"listItem",{spread:c.length>1,checked:r},c)}const Jt=d("ol");function R(e,t){const n=Jt(t),r=Ae(e,t);let i=null;return n&&(i=N(t,"start")?Number.parseInt(String(t.properties.start),10):1),e(t,"list",{ordered:n,start:i,spread:K(r)},r)}const Qt=d("source"),Zt=d("video");function ne(e,t){let n=a(e,t);const r=t.properties,i=Zt(t)&&String(r.poster||"");let l=String(r.src||""),c=-1,s=!1,o;if(I({type:"root",children:n},"link",u),s||T(n))return n;for(;!l&&++c<t.children.length;)o=t.children[c],Qt(o)&&(l=String(o.properties.src||""));return i&&(n=[{type:"image",title:null,url:w(e,i),alt:Te({children:n})}]),{type:"link",title:t.properties.title||null,url:w(e,l),children:n};function u(){return s=!0,Ee}}function re(e,t){const n=a(e,t);if(n.length>0)return e(t,"paragraph",n)}function en(e,t){const n=e.quotes[e.qNesting%e.quotes.length];e.qNesting++;const r=a(e,t);return e.qNesting--,r.unshift({type:"text",value:n.charAt(0)}),r.push({type:"text",value:n.length>1?n.charAt(1):n}),r}function tn(e,t){let n=a(e,t);return(e.document||T(n))&&(n=ye(n)),e(t,"root",n)}function nn(e,t){const n=$e(e,t);let r=-1;const i=[];let l;for(;++r<n.length;)l=n[r],i.push(l[1]?l[1]+" ("+l[0]+")":l[0]);if(i.length>0)return e(t,"text",g(e,i.join(", ")))}function ie(e,t){return e(t,"strong",a(e,t))}function le(e,t){const n=e.wrapText;e.wrapText=!1;const r=e(t,"tableCell",a(e,t));if(t.properties&&(t.properties.rowSpan||t.properties.colSpan)){const i=r.data||(r.data={});t.properties.rowSpan&&(i.rowSpan=t.properties.rowSpan),t.properties.colSpan&&(i.colSpan=t.properties.colSpan)}return e.wrapText=n,r}function rn(e,t){return e(t,"tableRow",a(e,t))}const ln=d("thead"),cn=d("tr"),sn=d(["th","td"]);function on(e,t){if(e.inTable)return e(t,"text",g(e,A(t)));e.inTable=!0;const{headless:n,align:r}=an(t),i=un(a(e,t),n);let l=1,c=-1;for(;++c<i.length;){const o=i[c].children;let u=-1;for(;++u<o.length;){const f=o[u];if(f.data){const m=Number.parseInt(String(f.data.colSpan),10)||1,y=Number.parseInt(String(f.data.rowSpan),10)||1;if(m>1||y>1){let b=c-1;for(;++b<c+y;){let k=u-1;for(;++k<u+m&&i[b];){const V=[];(b!==c||k!==u)&&V.push({type:"tableCell",children:[]}),i[b].children.splice(k,0,...V)}}}"colSpan"in f.data&&delete f.data.colSpan,"rowSpan"in f.data&&delete f.data.rowSpan,Object.keys(f.data).length===0&&delete f.data}}o.length>l&&(l=o.length)}for(c=-1;++c<i.length;){const o=i[c].children;let u=o.length-1;for(;++u<l;)o.push({type:"tableCell",children:[]})}let s=r.length-1;for(;++s<l;)r.push(null);return e.inTable=!1,e(t,"table",{align:r},i)}function an(e){let t=!0,n=0,r=0;const i=[null];return I(e,"element",l=>{if(l.tagName==="table"&&e!==l)return Fe;sn(l)&&l.properties?(i[r]||(i[r]=String(l.properties.align||"")||null),t&&n<2&&l.tagName==="th"&&(t=!1),r++):ln(l)?t=!1:cn(l)&&(n++,r=0)}),{align:i,headless:t}}function un(e,t){let n=-1;const r=[];let i;for(t&&r.push({type:"tableRow",children:[]});++n<e.length;){const l=e[n];l.type==="tableRow"?(i&&(l.children.unshift(...i),i=void 0),r.push(l)):(i||(i=[]),i.push(l))}for(i&&r[r.length-1].children.push(...i),n=-1;++n<r.length;)r[n].children=pn(r[n].children);return r}function pn(e){const t=[];let n=-1,r,i;for(;++n<e.length;)r=e[n],r.type==="tableCell"?(i&&(r.children.unshift(...i),i=void 0),t.push(r)):(i||(i=[]),i.push(r));return i&&(r=t[t.length-1],r||(r={type:"tableCell",children:[]},t.push(r)),r.children.push(...i)),t}function fn(e,t){return e(t,"text",g(e,t.value))}function hn(e,t){return e(t,"text",g(e,A(t)))}function dn(e,t){return e(t,"text","​")}const ce={root:tn,text:fn,comment:Ut,doctype:p,applet:p,area:p,basefont:p,bgsound:p,caption:p,col:p,colgroup:p,command:p,content:p,datalist:p,dialog:p,element:p,embed:p,frame:p,frameset:p,isindex:p,keygen:p,link:p,math:p,menu:p,menuitem:p,meta:p,nextid:p,noembed:p,noframes:p,optgroup:p,option:p,param:p,script:p,shadow:p,source:p,spacer:p,style:p,svg:p,template:p,title:p,track:p,abbr:a,acronym:a,bdi:a,bdo:a,big:a,blink:a,button:a,canvas:a,cite:a,data:a,details:a,dfn:a,font:a,ins:a,label:a,map:a,marquee:a,meter:a,nobr:a,noscript:a,object:a,output:a,progress:a,rb:a,rbc:a,rp:a,rt:a,rtc:a,ruby:a,slot:a,small:a,span:a,sup:a,sub:a,tbody:a,tfoot:a,thead:a,time:a,address:h,article:h,aside:h,body:h,center:h,div:h,fieldset:h,figcaption:h,figure:h,form:h,footer:h,header:h,hgroup:h,html:h,legend:h,main:h,multicol:h,nav:h,picture:h,section:h,a:wt,audio:ne,b:ie,base:xt,blockquote:kt,br:vt,code:S,dir:R,dl:Dt,dt:P,dd:P,del:O,em:B,h1:v,h2:v,h3:v,h4:v,h5:v,h6:v,hr:Ht,i:B,iframe:Kt,img:te,image:te,input:Yt,kbd:S,li:P,listing:$,mark:B,ol:R,p:re,plaintext:$,pre:$,q:en,s:O,samp:S,select:nn,strike:O,strong:ie,summary:re,table:on,td:le,textarea:hn,th:le,tr:rn,tt:S,u:B,ul:R,var:S,video:ne,wbr:dn,xmp:$};function p(){}const gn=he(["heading","paragraph","root"]);function Ie(e,t={}){const n={};let r;const i=Object.assign((s,o,u,f)=>{let m;typeof u=="string"||Array.isArray(u)?(f=u,m={}):m=u;const y={type:o,...m};return typeof f=="string"?y.value=f:f&&(y.children=f),s.position&&(y.position=s.position),y},{nodeById:n,baseFound:!1,inTable:!1,wrapText:!0,frozenBaseUrl:null,qNesting:0,handlers:t.handlers?{...ce,...t.handlers}:ce,document:t.document,checked:t.checked||"[x]",unchecked:t.unchecked||"[ ]",quotes:t.quotes||['"']});I(e,"element",s=>{const o=s.properties&&"id"in s.properties&&String(s.properties.id).toUpperCase();o&&!j.call(n,o)&&(n[o]=s)}),He({newlines:t.newlines===!0})(e);const l=de(i,e,void 0);return l?Array.isArray(l)?r={type:"root",children:l}:r=l:r={type:"root",children:[]},I(r,"text",c),r;function c(s,o,u){if(o===null||!u)return;const f=u.children[o-1];if(f&&f.type===s.type)return f.value+=s.value,u.children.splice(o,1),f.position&&s.position&&(f.position.end=s.position.end),o-1;if(s.value=s.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/,"$1"),u&&gn(u)&&(o||(s.value=s.value.replace(/^[\t ]+/,"")),o===u.children.length-1&&(s.value=s.value.replace(/[\t ]+$/,""))),!s.value)return u.children.splice(o,1),o}}const Sn=function(e,t){let n,r;return typeof e=="function"?(r=e,n=t||{}):n=e||{},(n.document===void 0||n.document===null)&&(n=Object.assign({},n,{document:!0})),r?yn(r,n):mn(n)};function yn(e,t){return(n,r,i)=>{e.run(Ie(n,t),r,l=>{i(l)})}}function mn(e={}){return t=>Ie(t,e)}export{a as all,Sn as default,ce as defaultHandlers,de as one};
