(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function ov(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Bf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function ey(){if(bg)return Mo;bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var Mg;function ty(){return Mg||(Mg=1,Bf.exports=ey()),Bf.exports}var M=ty(),If={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function ny(){if(Eg)return rt;Eg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function v(L,X,k){this.props=L,this.context=X,this.refs=S,this.updater=k||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,X){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,X,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=v.prototype;function C(L,X,k){this.props=L,this.context=X,this.refs=S,this.updater=k||A}var P=C.prototype=new B;P.constructor=C,T(P,v.prototype),P.isPureReactComponent=!0;var Y=Array.isArray;function H(){}var I={H:null,A:null,T:null,S:null},_e=Object.prototype.hasOwnProperty;function D(L,X,k){var Q=k.ref;return{$$typeof:o,type:L,key:X,ref:Q!==void 0?Q:null,props:k}}function U(L,X){return D(L.type,X,L.props)}function ue(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ge(L){var X={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(k){return X[k]})}var Te=/\/+/g;function j(L,X){return typeof L=="object"&&L!==null&&L.key!=null?ge(""+L.key):X.toString(36)}function ie(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(X){L.status==="pending"&&(L.status="fulfilled",L.value=X)},function(X){L.status==="pending"&&(L.status="rejected",L.reason=X)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,X,k,Q,ye){var Ee=typeof L;(Ee==="undefined"||Ee==="boolean")&&(L=null);var Ae=!1;if(L===null)Ae=!0;else switch(Ee){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(L.$$typeof){case o:case t:Ae=!0;break;case g:return Ae=L._init,z(Ae(L._payload),X,k,Q,ye)}}if(Ae)return ye=ye(L),Ae=Q===""?"."+j(L,0):Q,Y(ye)?(k="",Ae!=null&&(k=Ae.replace(Te,"$&/")+"/"),z(ye,X,k,"",function(qe){return qe})):ye!=null&&(ue(ye)&&(ye=U(ye,k+(ye.key==null||L&&L.key===ye.key?"":(""+ye.key).replace(Te,"$&/")+"/")+Ae)),X.push(ye)),1;Ae=0;var Pe=Q===""?".":Q+":";if(Y(L))for(var Be=0;Be<L.length;Be++)Q=L[Be],Ee=Pe+j(Q,Be),Ae+=z(Q,X,k,Ee,ye);else if(Be=b(L),typeof Be=="function")for(L=Be.call(L),Be=0;!(Q=L.next()).done;)Q=Q.value,Ee=Pe+j(Q,Be++),Ae+=z(Q,X,k,Ee,ye);else if(Ee==="object"){if(typeof L.then=="function")return z(ie(L),X,k,Q,ye);throw X=String(L),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function q(L,X,k){if(L==null)return L;var Q=[],ye=0;return z(L,Q,"","",function(Ee){return X.call(k,Ee,ye++)}),Q}function K(L){if(L._status===-1){var X=L._result;X=X(),X.then(function(k){(L._status===0||L._status===-1)&&(L._status=1,L._result=k)},function(k){(L._status===0||L._status===-1)&&(L._status=2,L._result=k)}),L._status===-1&&(L._status=0,L._result=X)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},de={map:q,forEach:function(L,X,k){q(L,function(){X.apply(this,arguments)},k)},count:function(L){var X=0;return q(L,function(){X++}),X},toArray:function(L){return q(L,function(X){return X})||[]},only:function(L){if(!ue(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=x,rt.Children=de,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=C,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return I.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,X,k){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Q=T({},L.props),ye=L.key;if(X!=null)for(Ee in X.key!==void 0&&(ye=""+X.key),X)!_e.call(X,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&X.ref===void 0||(Q[Ee]=X[Ee]);var Ee=arguments.length-2;if(Ee===1)Q.children=k;else if(1<Ee){for(var Ae=Array(Ee),Pe=0;Pe<Ee;Pe++)Ae[Pe]=arguments[Pe+2];Q.children=Ae}return D(L.type,ye,Q)},rt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,X,k){var Q,ye={},Ee=null;if(X!=null)for(Q in X.key!==void 0&&(Ee=""+X.key),X)_e.call(X,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(ye[Q]=X[Q]);var Ae=arguments.length-2;if(Ae===1)ye.children=k;else if(1<Ae){for(var Pe=Array(Ae),Be=0;Be<Ae;Be++)Pe[Be]=arguments[Be+2];ye.children=Pe}if(L&&L.defaultProps)for(Q in Ae=L.defaultProps,Ae)ye[Q]===void 0&&(ye[Q]=Ae[Q]);return D(L,Ee,ye)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:d,render:L}},rt.isValidElement=ue,rt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:K}},rt.memo=function(L,X){return{$$typeof:p,type:L,compare:X===void 0?null:X}},rt.startTransition=function(L){var X=I.T,k={};I.T=k;try{var Q=L(),ye=I.S;ye!==null&&ye(k,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(H,fe)}catch(Ee){fe(Ee)}finally{X!==null&&k.types!==null&&(X.types=k.types),I.T=X}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(L){return I.H.use(L)},rt.useActionState=function(L,X,k){return I.H.useActionState(L,X,k)},rt.useCallback=function(L,X){return I.H.useCallback(L,X)},rt.useContext=function(L){return I.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,X){return I.H.useDeferredValue(L,X)},rt.useEffect=function(L,X){return I.H.useEffect(L,X)},rt.useEffectEvent=function(L){return I.H.useEffectEvent(L)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(L,X,k){return I.H.useImperativeHandle(L,X,k)},rt.useInsertionEffect=function(L,X){return I.H.useInsertionEffect(L,X)},rt.useLayoutEffect=function(L,X){return I.H.useLayoutEffect(L,X)},rt.useMemo=function(L,X){return I.H.useMemo(L,X)},rt.useOptimistic=function(L,X){return I.H.useOptimistic(L,X)},rt.useReducer=function(L,X,k){return I.H.useReducer(L,X,k)},rt.useRef=function(L){return I.H.useRef(L)},rt.useState=function(L){return I.H.useState(L)},rt.useSyncExternalStore=function(L,X,k){return I.H.useSyncExternalStore(L,X,k)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.2.1",rt}var Tg;function zd(){return Tg||(Tg=1,If.exports=ny()),If.exports}var ke=zd();const lv=ov(ke);var Ff={exports:{}},Eo={},Hf={exports:{}},Gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function iy(){return Ag||(Ag=1,(function(o){function t(z,q){var K=z.length;z.push(q);e:for(;0<K;){var fe=K-1>>>1,de=z[fe];if(0<l(de,q))z[fe]=q,z[K]=de,K=fe;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],K=z.pop();if(K!==q){z[0]=K;e:for(var fe=0,de=z.length,L=de>>>1;fe<L;){var X=2*(fe+1)-1,k=z[X],Q=X+1,ye=z[Q];if(0>l(k,K))Q<de&&0>l(ye,k)?(z[fe]=ye,z[Q]=K,fe=Q):(z[fe]=k,z[X]=K,fe=X);else if(Q<de&&0>l(ye,K))z[fe]=ye,z[Q]=K,fe=Q;else break e}}return q}function l(z,q){var K=z.sortIndex-q.sortIndex;return K!==0?K:z.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,y=3,b=!1,A=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=z)r(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function Y(z){if(T=!1,P(z),!A)if(i(m)!==null)A=!0,H||(H=!0,ge());else{var q=i(p);q!==null&&ie(Y,q.startTime-z)}}var H=!1,I=-1,_e=5,D=-1;function U(){return S?!0:!(o.unstable_now()-D<_e)}function ue(){if(S=!1,H){var z=o.unstable_now();D=z;var q=!0;try{e:{A=!1,T&&(T=!1,B(I),I=-1),b=!0;var K=y;try{t:{for(P(z),x=i(m);x!==null&&!(x.expirationTime>z&&U());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,y=x.priorityLevel;var de=fe(x.expirationTime<=z);if(z=o.unstable_now(),typeof de=="function"){x.callback=de,P(z),q=!0;break t}x===i(m)&&r(m),P(z)}else r(m);x=i(m)}if(x!==null)q=!0;else{var L=i(p);L!==null&&ie(Y,L.startTime-z),q=!1}}break e}finally{x=null,y=K,b=!1}q=void 0}}finally{q?ge():H=!1}}}var ge;if(typeof C=="function")ge=function(){C(ue)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,j=Te.port2;Te.port1.onmessage=ue,ge=function(){j.postMessage(null)}}else ge=function(){v(ue,0)};function ie(z,q){I=v(function(){z(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_e=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(z){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var K=y;y=q;try{return z()}finally{y=K}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=y;y=z;try{return q()}finally{y=K}},o.unstable_scheduleCallback=function(z,q,K){var fe=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?fe+K:fe):K=fe,z){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=K+de,z={id:g++,callback:q,priorityLevel:z,startTime:K,expirationTime:de,sortIndex:-1},K>fe?(z.sortIndex=K,t(p,z),i(m)===null&&z===i(p)&&(T?(B(I),I=-1):T=!0,ie(Y,K-fe))):(z.sortIndex=de,t(m,z),A||b||(A=!0,H||(H=!0,ge()))),z},o.unstable_shouldYield=U,o.unstable_wrapCallback=function(z){var q=y;return function(){var K=y;y=q;try{return z.apply(this,arguments)}finally{y=K}}}})(Gf)),Gf}var wg;function ay(){return wg||(wg=1,Hf.exports=iy()),Hf.exports}var Vf={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function ry(){if(Rg)return wn;Rg=1;var o=zd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:b}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.1",wn}var Cg;function sy(){if(Cg)return Vf.exports;Cg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vf.exports=ry(),Vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function oy(){if(Dg)return Eo;Dg=1;var o=ay(),t=zd(),i=sy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,s=f;break}if(E===s){_=!0,s=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=c;break}if(E===s){_=!0,s=f,a=c;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),C=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function ge(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function j(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case Y:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case C:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:j(e.type)||"Memo";case _e:n=e._payload,e=e._init;try{return j(e(n))}catch{}}return null}var ie=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},fe=[],de=-1;function L(e){return{current:e}}function X(e){0>de||(e.current=fe[de],fe[de]=null,de--)}function k(e,n){de++,fe[de]=e.current,e.current=n}var Q=L(null),ye=L(null),Ee=L(null),Ae=L(null);function Pe(e,n){switch(k(Ee,n),k(ye,e),k(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xm(n),e=Wm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(Q),k(Q,e)}function Be(){X(Q),X(ye),X(Ee)}function qe(e){e.memoizedState!==null&&k(Ae,e);var n=Q.current,a=Wm(n,e.type);n!==a&&(k(ye,e),k(Q,a))}function ct(e){ye.current===e&&(X(Q),X(ye)),Ae.current===e&&(X(Ae),xo._currentValue=K)}var te,Jt;function Ve(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",Jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+Jt}var tt=!1;function Ie(e,n){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var ee=le}Reflect.construct(e,[],xe)}else{try{xe.call()}catch(le){ee=le}e.call(xe.prototype)}}else{try{throw Error()}catch(le){ee=le}(xe=e())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&ee&&typeof le.stack=="string")return[le.stack,ee.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var F=_.split(`
`),$=E.split(`
`);for(c=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===F.length||c===$.length)for(s=F.length-1,c=$.length-1;1<=s&&0<=c&&F[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(F[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||F[s]!==$[c]){var pe=`
`+F[s].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=s&&0<=c);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ve(a):""}function zt(e,n){switch(e.tag){case 26:case 27:case 5:return Ve(e.type);case 16:return Ve("Lazy");case 13:return e.child!==n&&n!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return Ie(e.type,!1);case 11:return Ie(e.type.render,!1);case 1:return Ie(e.type,!0);case 31:return Ve("Activity");default:return""}}function et(e){try{var n="",a=null;do n+=zt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var N=Object.prototype.hasOwnProperty,w=o.unstable_scheduleCallback,ne=o.unstable_cancelCallback,Me=o.unstable_shouldYield,me=o.unstable_requestPaint,O=o.unstable_now,ce=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,De=o.unstable_NormalPriority,Fe=o.unstable_LowPriority,Se=o.unstable_IdlePriority,ht=o.log,nt=o.unstable_setDisableYieldValue,Qe=null,Oe=null;function Ue(e){if(typeof ht=="function"&&nt(e),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Qe,e)}catch{}}var Ye=Math.clz32?Math.clz32:ut,bt=Math.log,kt=Math.LN2;function ut(e){return e>>>=0,e===0?32:31-(bt(e)/kt|0)|0}var we=256,G=262144,Le=4194304;function Re(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Re(s):(_&=E,_!==0?c=Re(_):a||(a=E&~e,a!==0&&(c=Re(a))))):(E=s&~f,E!==0?c=Re(E):_!==0?c=Re(_):a||(a=s&~e,a!==0&&(c=Re(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Xe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ct(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var e=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Zt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dt(e,n,a,s,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-Ye(a),xe=1<<pe;E[pe]=0,F[pe]=-1;var ee=$[pe];if(ee!==null)for($[pe]=null,pe=0;pe<ee.length;pe++){var le=ee[pe];le!==null&&(le.lane&=-536870913)}a&=~xe}s!==0&&hn(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function hn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ye(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function qn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ye(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Rs(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ds(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:mg(e.type))}function qa(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var mi=Math.random().toString(36).slice(2),$t="__reactFiber$"+mi,Tn="__reactProps$"+mi,la="__reactContainer$"+mi,Ls="__reactEvents$"+mi,R="__reactListeners$"+mi,Z="__reactHandles$"+mi,se="__reactResources$"+mi,oe="__reactMarker$"+mi;function ae(e){delete e[$t],delete e[Tn],delete e[Ls],delete e[R],delete e[Z]}function Ne(e){var n=e[$t];if(n)return n;for(var a=e.parentNode;a;){if(n=a[la]||a[$t]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$m(e);e!==null;){if(a=e[$t])return a;e=$m(e)}return n}e=a,a=e.parentNode}return null}function He(e){if(e=e[$t]||e[la]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ze(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ke(e){var n=e[se];return n||(n=e[se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function je(e){e[oe]=!0}var it=new Set,at={};function At(e,n){en(e,n),en(e+"Capture",n)}function en(e,n){for(at[e]=n,e=0;e<n.length;e++)it.add(n[e])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ii={},It={};function ft(e){return N.call(It,e)?!0:N.call(ii,e)?!1:tn.test(e)?It[e]=!0:(ii[e]=!0,!1)}function ca(e,n,a){if(ft(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function _n(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nn(e){if(!e._valueTracker){var n=ua(e)?"checked":"value";e._valueTracker=Ns(e,n,""+e[n])}}function Ai(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ua(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function An(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Us(e,n,a,s,c,f,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ln(n)):e.value!==""+Ln(n)&&(e.value=""+Ln(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Lc(e,_,Ln(n)):a!=null?Lc(e,_,Ln(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ln(E):e.removeAttribute("name")}function Os(e,n,a,s,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){nn(e);return}a=a!=null?""+Ln(a):"",n=n!=null?""+Ln(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),nn(e)}function Lc(e,n,a){n==="number"&&fa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sr(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Ln(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Hd(e,n,a){if(n!=null&&(n=""+Ln(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ln(a):""}function Gd(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ie(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ln(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),nn(e)}function br(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Zv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Zv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Vd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Vd(e,f,n[f])}function Nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(e){return Qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ni(){}var Uc=null;function Oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Er=null;function jd(e){var n=He(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Us(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+An(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Tn]||null;if(!c)throw Error(r(90));Us(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ai(s)}break e;case"textarea":Hd(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sr(e,!!a.multiple,n,!1)}}}var zc=!1;function Xd(e,n,a){if(zc)return e(n,a);zc=!0;try{var s=e(n);return s}finally{if(zc=!1,(Mr!==null||Er!==null)&&(Tl(),Mr&&(n=Mr,e=Er,Er=Mr=null,jd(n),e)))for(n=0;n<e.length;n++)jd(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Tn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(Ui)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Pc=!1}var da=null,Bc=null,Fo=null;function Wd(){if(Fo)return Fo;var e,n=Bc,a=n.length,s,c="value"in da?da.value:da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Fo=c.slice(e,1<s?1-s:void 0)}function Ho(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function qd(){return!1}function Pn(e){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:qd,this.isPropagationStopped=qd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Pn(Ya),Bs=x({},Ya,{view:0,detail:0}),Jv=Pn(Bs),Ic,Fc,Is,ko=x({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Ic=e.screenX-Is.screenX,Fc=e.screenY-Is.screenY):Fc=Ic=0,Is=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Fc}}),Yd=Pn(ko),$v=x({},ko,{dataTransfer:0}),e_=Pn($v),t_=x({},Bs,{relatedTarget:0}),Hc=Pn(t_),n_=x({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=Pn(n_),a_=x({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r_=Pn(a_),s_=x({},Ya,{data:0}),Zd=Pn(s_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=c_[e])?!!n[e]:!1}function Gc(){return u_}var f_=x({},Bs,{key:function(e){if(e.key){var n=o_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?l_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),d_=Pn(f_),h_=x({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=Pn(h_),p_=x({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),m_=Pn(p_),g_=x({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=Pn(g_),__=x({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Pn(__),y_=x({},Ya,{newState:0,oldState:0}),S_=Pn(y_),b_=[9,13,27,32],Vc=Ui&&"CompositionEvent"in window,Fs=null;Ui&&"documentMode"in document&&(Fs=document.documentMode);var M_=Ui&&"TextEvent"in window&&!Fs,Qd=Ui&&(!Vc||Fs&&8<Fs&&11>=Fs),Jd=" ",$d=!1;function eh(e,n){switch(e){case"keyup":return b_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function E_(e,n){switch(e){case"compositionend":return th(n);case"keypress":return n.which!==32?null:($d=!0,Jd);case"textInput":return e=n.data,e===Jd&&$d?null:e;default:return null}}function T_(e,n){if(Tr)return e==="compositionend"||!Vc&&eh(e,n)?(e=Wd(),Fo=Bc=da=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qd&&n.locale!=="ko"?null:n.data;default:return null}}var A_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!A_[e.type]:n==="textarea"}function ih(e,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Nl(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function w_(e){Fm(e,0)}function jo(e){var n=Ze(e);if(Ai(n))return e}function ah(e,n){if(e==="change")return n}var rh=!1;if(Ui){var kc;if(Ui){var jc="oninput"in document;if(!jc){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),jc=typeof sh.oninput=="function"}kc=jc}else kc=!1;rh=kc&&(!document.documentMode||9<document.documentMode)}function oh(){Hs&&(Hs.detachEvent("onpropertychange",lh),Gs=Hs=null)}function lh(e){if(e.propertyName==="value"&&jo(Gs)){var n=[];ih(n,Gs,e,Oc(e)),Xd(w_,n)}}function R_(e,n,a){e==="focusin"?(oh(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",lh)):e==="focusout"&&oh()}function C_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Gs)}function D_(e,n){if(e==="click")return jo(n)}function L_(e,n){if(e==="input"||e==="change")return jo(n)}function N_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:N_;function Vs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!N.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function ch(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uh(e,n){var a=ch(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ch(a)}}function fh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?fh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fa(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fa(e.document)}return n}function Xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var U_=Ui&&"documentMode"in document&&11>=document.documentMode,Ar=null,Wc=null,ks=null,qc=!1;function hh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||Ar==null||Ar!==fa(s)||(s=Ar,"selectionStart"in s&&Xc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Nl(Wc,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ar)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var wr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Yc={},ph={};Ui&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Ka(e){if(Yc[e])return Yc[e];if(!wr[e])return e;var n=wr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in ph)return Yc[e]=n[a];return e}var mh=Ka("animationend"),gh=Ka("animationiteration"),vh=Ka("animationstart"),O_=Ka("transitionrun"),z_=Ka("transitionstart"),P_=Ka("transitioncancel"),_h=Ka("transitionend"),xh=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function gi(e,n){xh.set(e,n),At(n,[e])}var Xo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Rr=0,Kc=0;function Wo(){for(var e=Rr,n=Kc=Rr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&yh(a,c,f)}}function qo(e,n,a,s){ai[Rr++]=e,ai[Rr++]=n,ai[Rr++]=a,ai[Rr++]=s,Kc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Qc(e,n,a,s){return qo(e,n,a,s),Yo(e)}function Qa(e,n){return qo(e,null,null,n),Yo(e)}function yh(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ye(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(e){if(50<fo)throw fo=0,of=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={};function B_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,s){return new B_(e,n,a,s)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Sh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zo(e,n,a,s,c,f){var _=0;if(s=e,typeof e=="function")Jc(e)&&(_=1);else if(typeof e=="string")_=Vx(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Zn(31,a,n,c),e.elementType=D,e.lanes=f,e;case T:return Ja(a.children,c,f,n);case S:_=8,c|=24;break;case v:return e=Zn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case Y:return e=Zn(13,a,n,c),e.elementType=Y,e.lanes=f,e;case H:return e=Zn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:_=10;break e;case B:_=9;break e;case P:_=11;break e;case I:_=14;break e;case _e:_=16,s=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Zn(_,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ja(e,n,a,s){return e=Zn(7,e,s,n),e.lanes=a,e}function $c(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function bh(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function eu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Mh=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=Mh.get(e);return a!==void 0?a:(n={value:e,source:n,stack:et(n)},Mh.set(e,n),n)}return{value:e,source:n,stack:et(n)}}var Dr=[],Lr=0,Ko=null,js=0,si=[],oi=0,ha=null,wi=1,Ri="";function zi(e,n){Dr[Lr++]=js,Dr[Lr++]=Ko,Ko=e,js=n}function Eh(e,n,a){si[oi++]=wi,si[oi++]=Ri,si[oi++]=ha,ha=e;var s=wi;e=Ri;var c=32-Ye(s)-1;s&=~(1<<c),a+=1;var f=32-Ye(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,wi=1<<32-Ye(n)+c|a<<c|s,Ri=f+e}else wi=1<<f|a<<c|s,Ri=e}function tu(e){e.return!==null&&(zi(e,1),Eh(e,1,0))}function nu(e){for(;e===Ko;)Ko=Dr[--Lr],Dr[Lr]=null,js=Dr[--Lr],Dr[Lr]=null;for(;e===ha;)ha=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null,wi=si[--oi],si[oi]=null}function Th(e,n){si[oi++]=wi,si[oi++]=Ri,si[oi++]=ha,wi=n.id,Ri=n.overflow,ha=e}var xn=null,Ft=null,xt=!1,pa=null,li=!1,iu=Error(r(519));function ma(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ri(n,e)),iu}function Ah(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[$t]=e,n[Tn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)gt(po[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Gd(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||km(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||ma(e,!0)}function wh(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:xn=xn.return}}function Nr(e){if(e!==xn)return!1;if(!xt)return wh(e),xt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bf(e.type,e.memoizedProps)),a=!a),a&&Ft&&ma(e),wh(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ft=Jm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ft=Jm(e)}else n===27?(n=Ft,Ca(e.type)?(e=wf,wf=null,Ft=e):Ft=n):Ft=xn?ui(e.stateNode.nextSibling):null;return!0}function $a(){Ft=xn=null,xt=!1}function au(){var e=pa;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),pa=null),e}function Xs(e){pa===null?pa=[e]:pa.push(e)}var ru=L(null),er=null,Pi=null;function ga(e,n,a){k(ru,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=ru.current,X(ru)}function su(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function ou(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var F=0;F<n.length;F++)if(E.context===n[F]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),su(f.return,a,e),s||(_=null);break e}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),su(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ur(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=c.type;Yn(c.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(c===Ae.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&ou(n,e,a,s),n.flags|=262144}function Qo(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){er=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Rh(er,e)}function Jo(e,n){return er===null&&tr(e),Rh(e,n)}function Rh(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(r(308));Pi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pi=Pi.next=n;return a}var I_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},F_=o.unstable_scheduleCallback,H_=o.unstable_NormalPriority,an={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lu(){return{controller:new I_,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&F_(H_,function(){e.controller.abort()})}var qs=null,cu=0,Or=0,zr=null;function G_(e,n){if(qs===null){var a=qs=[];cu=0,Or=hf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return cu++,n.then(Ch,Ch),n}function Ch(){if(--cu===0&&qs!==null){zr!==null&&(zr.status="fulfilled");var e=qs;qs=null,Or=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function V_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Dh=z.S;z.S=function(e,n){hm=O(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&G_(e,n),Dh!==null&&Dh(e,n)};var nr=L(null);function uu(){var e=nr.current;return e!==null?e:Bt.pooledCache}function $o(e,n){n===null?k(nr,nr.current):k(nr,n.pool)}function Lh(){var e=uu();return e===null?null:{parent:an._currentValue,pool:e}}var Pr=Error(r(460)),fu=Error(r(474)),el=Error(r(542)),tl={then:function(){}};function Nh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Uh(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zh(e),e;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(e=Bt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,zh(e),e}throw ar=n,Pr}}function ir(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ar=a,Pr):a}}var ar=null;function Oh(){if(ar===null)throw Error(r(459));var e=ar;return ar=null,e}function zh(e){if(e===Pr||e===el)throw Error(r(483))}var Br=null,Ys=0;function nl(e){var n=Ys;return Ys+=1,Br===null&&(Br=[]),Uh(Br,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function il(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ph(e){function n(W,V){if(e){var J=W.deletions;J===null?(W.deletions=[V],W.flags|=16):J.push(V)}}function a(W,V){if(!e)return null;for(;V!==null;)n(W,V),V=V.sibling;return null}function s(W){for(var V=new Map;W!==null;)W.key!==null?V.set(W.key,W):V.set(W.index,W),W=W.sibling;return V}function c(W,V){return W=Oi(W,V),W.index=0,W.sibling=null,W}function f(W,V,J){return W.index=J,e?(J=W.alternate,J!==null?(J=J.index,J<V?(W.flags|=67108866,V):J):(W.flags|=67108866,V)):(W.flags|=1048576,V)}function _(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,V,J,ve){return V===null||V.tag!==6?(V=$c(J,W.mode,ve),V.return=W,V):(V=c(V,J),V.return=W,V)}function F(W,V,J,ve){var We=J.type;return We===T?pe(W,V,J.props.children,ve,J.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===_e&&ir(We)===V.type)?(V=c(V,J.props),Zs(V,J),V.return=W,V):(V=Zo(J.type,J.key,J.props,null,W.mode,ve),Zs(V,J),V.return=W,V)}function $(W,V,J,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=eu(J,W.mode,ve),V.return=W,V):(V=c(V,J.children||[]),V.return=W,V)}function pe(W,V,J,ve,We){return V===null||V.tag!==7?(V=Ja(J,W.mode,ve,We),V.return=W,V):(V=c(V,J),V.return=W,V)}function xe(W,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=$c(""+V,W.mode,J),V.return=W,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return J=Zo(V.type,V.key,V.props,null,W.mode,J),Zs(J,V),J.return=W,J;case A:return V=eu(V,W.mode,J),V.return=W,V;case _e:return V=ir(V),xe(W,V,J)}if(ie(V)||ge(V))return V=Ja(V,W.mode,J,null),V.return=W,V;if(typeof V.then=="function")return xe(W,nl(V),J);if(V.$$typeof===C)return xe(W,Jo(W,V),J);il(W,V)}return null}function ee(W,V,J,ve){var We=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return We!==null?null:E(W,V,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case b:return J.key===We?F(W,V,J,ve):null;case A:return J.key===We?$(W,V,J,ve):null;case _e:return J=ir(J),ee(W,V,J,ve)}if(ie(J)||ge(J))return We!==null?null:pe(W,V,J,ve,null);if(typeof J.then=="function")return ee(W,V,nl(J),ve);if(J.$$typeof===C)return ee(W,V,Jo(W,J),ve);il(W,J)}return null}function le(W,V,J,ve,We){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return W=W.get(J)||null,E(V,W,""+ve,We);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return W=W.get(ve.key===null?J:ve.key)||null,F(V,W,ve,We);case A:return W=W.get(ve.key===null?J:ve.key)||null,$(V,W,ve,We);case _e:return ve=ir(ve),le(W,V,J,ve,We)}if(ie(ve)||ge(ve))return W=W.get(J)||null,pe(V,W,ve,We,null);if(typeof ve.then=="function")return le(W,V,J,nl(ve),We);if(ve.$$typeof===C)return le(W,V,J,Jo(V,ve),We);il(V,ve)}return null}function ze(W,V,J,ve){for(var We=null,yt=null,Ge=V,lt=V=0,_t=null;Ge!==null&&lt<J.length;lt++){Ge.index>lt?(_t=Ge,Ge=null):_t=Ge.sibling;var St=ee(W,Ge,J[lt],ve);if(St===null){Ge===null&&(Ge=_t);break}e&&Ge&&St.alternate===null&&n(W,Ge),V=f(St,V,lt),yt===null?We=St:yt.sibling=St,yt=St,Ge=_t}if(lt===J.length)return a(W,Ge),xt&&zi(W,lt),We;if(Ge===null){for(;lt<J.length;lt++)Ge=xe(W,J[lt],ve),Ge!==null&&(V=f(Ge,V,lt),yt===null?We=Ge:yt.sibling=Ge,yt=Ge);return xt&&zi(W,lt),We}for(Ge=s(Ge);lt<J.length;lt++)_t=le(Ge,W,lt,J[lt],ve),_t!==null&&(e&&_t.alternate!==null&&Ge.delete(_t.key===null?lt:_t.key),V=f(_t,V,lt),yt===null?We=_t:yt.sibling=_t,yt=_t);return e&&Ge.forEach(function(Oa){return n(W,Oa)}),xt&&zi(W,lt),We}function $e(W,V,J,ve){if(J==null)throw Error(r(151));for(var We=null,yt=null,Ge=V,lt=V=0,_t=null,St=J.next();Ge!==null&&!St.done;lt++,St=J.next()){Ge.index>lt?(_t=Ge,Ge=null):_t=Ge.sibling;var Oa=ee(W,Ge,St.value,ve);if(Oa===null){Ge===null&&(Ge=_t);break}e&&Ge&&Oa.alternate===null&&n(W,Ge),V=f(Oa,V,lt),yt===null?We=Oa:yt.sibling=Oa,yt=Oa,Ge=_t}if(St.done)return a(W,Ge),xt&&zi(W,lt),We;if(Ge===null){for(;!St.done;lt++,St=J.next())St=xe(W,St.value,ve),St!==null&&(V=f(St,V,lt),yt===null?We=St:yt.sibling=St,yt=St);return xt&&zi(W,lt),We}for(Ge=s(Ge);!St.done;lt++,St=J.next())St=le(Ge,W,lt,St.value,ve),St!==null&&(e&&St.alternate!==null&&Ge.delete(St.key===null?lt:St.key),V=f(St,V,lt),yt===null?We=St:yt.sibling=St,yt=St);return e&&Ge.forEach(function($x){return n(W,$x)}),xt&&zi(W,lt),We}function Ut(W,V,J,ve){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case b:e:{for(var We=J.key;V!==null;){if(V.key===We){if(We=J.type,We===T){if(V.tag===7){a(W,V.sibling),ve=c(V,J.props.children),ve.return=W,W=ve;break e}}else if(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===_e&&ir(We)===V.type){a(W,V.sibling),ve=c(V,J.props),Zs(ve,J),ve.return=W,W=ve;break e}a(W,V);break}else n(W,V);V=V.sibling}J.type===T?(ve=Ja(J.props.children,W.mode,ve,J.key),ve.return=W,W=ve):(ve=Zo(J.type,J.key,J.props,null,W.mode,ve),Zs(ve,J),ve.return=W,W=ve)}return _(W);case A:e:{for(We=J.key;V!==null;){if(V.key===We)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(W,V.sibling),ve=c(V,J.children||[]),ve.return=W,W=ve;break e}else{a(W,V);break}else n(W,V);V=V.sibling}ve=eu(J,W.mode,ve),ve.return=W,W=ve}return _(W);case _e:return J=ir(J),Ut(W,V,J,ve)}if(ie(J))return ze(W,V,J,ve);if(ge(J)){if(We=ge(J),typeof We!="function")throw Error(r(150));return J=We.call(J),$e(W,V,J,ve)}if(typeof J.then=="function")return Ut(W,V,nl(J),ve);if(J.$$typeof===C)return Ut(W,V,Jo(W,J),ve);il(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(W,V.sibling),ve=c(V,J),ve.return=W,W=ve):(a(W,V),ve=$c(J,W.mode,ve),ve.return=W,W=ve),_(W)):a(W,V)}return function(W,V,J,ve){try{Ys=0;var We=Ut(W,V,J,ve);return Br=null,We}catch(Ge){if(Ge===Pr||Ge===el)throw Ge;var yt=Zn(29,Ge,null,W.mode);return yt.lanes=ve,yt.return=W,yt}finally{}}}var rr=Ph(!0),Bh=Ph(!1),va=!1;function du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Mt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Yo(e),yh(e,null,a),n}return qo(e,s,n,a),Yo(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,qn(e,a)}}function pu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var mu=!1;function Qs(){if(mu){var e=zr;if(e!==null)throw e}}function Js(e,n,a,s){mu=!1;var c=e.updateQueue;va=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var F=E,$=F.next;F.next=null,_===null?f=$:_.next=$,_=F;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,E=pe.lastBaseUpdate,E!==_&&(E===null?pe.firstBaseUpdate=$:E.next=$,pe.lastBaseUpdate=F))}if(f!==null){var xe=c.baseState;_=0,pe=$=F=null,E=f;do{var ee=E.lane&-536870913,le=ee!==E.lane;if(le?(vt&ee)===ee:(s&ee)===ee){ee!==0&&ee===Or&&(mu=!0),pe!==null&&(pe=pe.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ze=e,$e=E;ee=n;var Ut=a;switch($e.tag){case 1:if(ze=$e.payload,typeof ze=="function"){xe=ze.call(Ut,xe,ee);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=$e.payload,ee=typeof ze=="function"?ze.call(Ut,xe,ee):ze,ee==null)break e;xe=x({},xe,ee);break e;case 2:va=!0}}ee=E.callback,ee!==null&&(e.flags|=64,le&&(e.flags|=8192),le=c.callbacks,le===null?c.callbacks=[ee]:le.push(ee))}else le={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},pe===null?($=pe=le,F=xe):pe=pe.next=le,_|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;le=E,E=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);pe===null&&(F=xe),c.baseState=F,c.firstBaseUpdate=$,c.lastBaseUpdate=pe,f===null&&(c.shared.lanes=0),Ea|=_,e.lanes=_,e.memoizedState=xe}}function Ih(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Fh(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ih(a[e],n)}var Ir=L(null),al=L(0);function Hh(e,n){e=Wi,k(al,e),k(Ir,n),Wi=e|n.baseLanes}function gu(){k(al,Wi),k(Ir,Ir.current)}function vu(){Wi=al.current,X(Ir),X(al)}var Kn=L(null),ci=null;function ya(e){var n=e.alternate;k(Kt,Kt.current&1),k(Kn,e),ci===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(ci=e)}function _u(e){k(Kt,Kt.current),k(Kn,e),ci===null&&(ci=e)}function Gh(e){e.tag===22?(k(Kt,Kt.current),k(Kn,e),ci===null&&(ci=e)):Sa()}function Sa(){k(Kt,Kt.current),k(Kn,Kn.current)}function Qn(e){X(Kn),ci===e&&(ci=null),X(Kt)}var Kt=L(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tf(a)||Af(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,ot=null,Lt=null,rn=null,sl=!1,Fr=!1,sr=!1,ol=0,$s=0,Hr=null,k_=0;function qt(){throw Error(r(321))}function xu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function yu(e,n,a,s,c,f){return Ii=f,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Ep:zu,sr=!1,f=a(s,c),sr=!1,Fr&&(f=kh(n,a,s,c)),Vh(e),f}function Vh(e){z.H=no;var n=Lt!==null&&Lt.next!==null;if(Ii=0,rn=Lt=ot=null,sl=!1,$s=0,Hr=null,n)throw Error(r(300));e===null||sn||(e=e.dependencies,e!==null&&Qo(e)&&(sn=!0))}function kh(e,n,a,s){ot=e;var c=0;do{if(Fr&&(Hr=null),$s=0,Fr=!1,25<=c)throw Error(r(301));if(c+=1,rn=Lt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Tp,f=n(a,s)}while(Fr);return f}function j_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Lt!==null?Lt.memoizedState:null)!==e&&(ot.flags|=1024),n}function Su(){var e=ol!==0;return ol=0,e}function bu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Mu(e){if(sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sl=!1}Ii=0,rn=Lt=ot=null,Fr=!1,$s=ol=0,Hr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?ot.memoizedState=rn=e:rn=rn.next=e,rn}function Qt(){if(Lt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=Lt.next;var n=rn===null?ot.memoizedState:rn.next;if(n!==null)rn=n,Lt=e;else{if(e===null)throw ot.alternate===null?Error(r(467)):Error(r(310));Lt=e,e={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},rn===null?ot.memoizedState=rn=e:rn=rn.next=e}return rn}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$s;return $s+=1,Hr===null&&(Hr=[]),e=Uh(Hr,e,n),n=ot,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Ep:zu),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===C)return yn(e)}throw Error(r(438,String(e)))}function Eu(e){var n=null,a=ot.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ot.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ot.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=U;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=Qt();return Tu(n,Lt,e)}function Tu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=_=null,F=null,$=n,pe=!1;do{var xe=$.lane&-536870913;if(xe!==$.lane?(vt&xe)===xe:(Ii&xe)===xe){var ee=$.revertLane;if(ee===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xe===Or&&(pe=!0);else if((Ii&ee)===ee){$=$.next,ee===Or&&(pe=!0);continue}else xe={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(E=F=xe,_=f):F=F.next=xe,ot.lanes|=ee,Ea|=ee;xe=$.action,sr&&a(f,xe),f=$.hasEagerState?$.eagerState:a(f,xe)}else ee={lane:xe,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(E=F=ee,_=f):F=F.next=ee,ot.lanes|=xe,Ea|=xe;$=$.next}while($!==null&&$!==n);if(F===null?_=f:F.next=E,!Yn(f,e.memoizedState)&&(sn=!0,pe&&(a=zr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=F,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Au(e){var n=Qt(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Yn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function jh(e,n,a){var s=ot,c=Qt(),f=xt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Yn((Lt||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,Cu(qh.bind(null,s,c,e),[e]),c.getSnapshot!==n||_||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,Gr(9,{destroy:void 0},Wh.bind(null,s,c,a,n),null),Bt===null)throw Error(r(349));f||(Ii&127)!==0||Xh(s,n,a)}return a}function Xh(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ot.updateQueue,n===null?(n=ll(),ot.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Wh(e,n,a,s){n.value=a,n.getSnapshot=s,Yh(n)&&Zh(e)}function qh(e,n,a){return a(function(){Yh(n)&&Zh(e)})}function Yh(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Zh(e){var n=Qa(e,2);n!==null&&Gn(n,e,2)}function wu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),sr){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function Kh(e,n,a,s){return e.baseState=a,Tu(e,Lt,typeof s=="function"?s:Fi)}function X_(e,n,a,s,c){if(hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Qh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Qh(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var E=a(c,s),F=z.S;F!==null&&F(_,E),Jh(e,n,E)}catch($){Ru(e,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(c,s),Jh(e,n,f)}catch($){Ru(e,n,$)}}function Jh(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){$h(e,n,s)},function(s){return Ru(e,n,s)}):$h(e,n,a)}function $h(e,n,a){n.status="fulfilled",n.value=a,ep(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Qh(e,a)))}function Ru(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ep(n),n=n.next;while(n!==s)}e.action=null}function ep(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tp(e,n){return n}function np(e,n){if(xt){var a=Bt.formState;if(a!==null){e:{var s=ot;if(xt){if(Ft){t:{for(var c=Ft,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ft=ui(c.nextSibling),s=c.data==="F!";break e}}ma(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tp,lastRenderedState:n},a.queue=s,a=Sp.bind(null,ot,s),s.dispatch=a,s=wu(!1),f=Ou.bind(null,ot,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=X_.bind(null,ot,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function ip(e){var n=Qt();return ap(n,Lt,e)}function ap(e,n,a){if(n=Tu(e,n,tp)[0],e=ul(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(_){throw _===Pr?el:_}else s=n;n=Qt();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ot.flags|=2048,Gr(9,{destroy:void 0},W_.bind(null,c,a),null)),[s,f,e]}function W_(e,n){e.action=n}function rp(e){var n=Qt(),a=Lt;if(a!==null)return ap(n,a,e);Qt(),n=n.memoizedState,a=Qt();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Gr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=ot.updateQueue,n===null&&(n=ll(),ot.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function sp(){return Qt().memoizedState}function fl(e,n,a,s){var c=Nn();ot.flags|=e,c.memoizedState=Gr(1|n,{destroy:void 0},a,s===void 0?null:s)}function dl(e,n,a,s){var c=Qt();s=s===void 0?null:s;var f=c.memoizedState.inst;Lt!==null&&s!==null&&xu(s,Lt.memoizedState.deps)?c.memoizedState=Gr(n,f,a,s):(ot.flags|=e,c.memoizedState=Gr(1|n,f,a,s))}function op(e,n){fl(8390656,8,e,n)}function Cu(e,n){dl(2048,8,e,n)}function q_(e){ot.flags|=4;var n=ot.updateQueue;if(n===null)n=ll(),ot.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lp(e){var n=Qt().memoizedState;return q_({ref:n,nextImpl:e}),function(){if((Mt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cp(e,n){return dl(4,2,e,n)}function up(e,n){return dl(4,4,e,n)}function fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dp(e,n,a){a=a!=null?a.concat([e]):null,dl(4,4,fp.bind(null,n,e),a)}function Du(){}function hp(e,n){var a=Qt();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&xu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function pp(e,n){var a=Qt();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&xu(n,s[1]))return s[0];if(s=e(),sr){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[s,n],s}function Lu(e,n,a){return a===void 0||(Ii&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=mm(),ot.lanes|=e,Ea|=e,a)}function mp(e,n,a,s){return Yn(a,n)?a:Ir.current!==null?(e=Lu(e,a,s),Yn(e,n)||(sn=!0),e):(Ii&42)===0||(Ii&1073741824)!==0&&(vt&261930)===0?(sn=!0,e.memoizedState=a):(e=mm(),ot.lanes|=e,Ea|=e,n)}function gp(e,n,a,s,c){var f=q.p;q.p=f!==0&&8>f?f:8;var _=z.T,E={};z.T=E,Ou(e,!1,n,a);try{var F=c(),$=z.S;if($!==null&&$(E,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pe=V_(F,s);to(e,n,pe,ei(e))}else to(e,n,s,ei(e))}catch(xe){to(e,n,{then:function(){},status:"rejected",reason:xe},ei())}finally{q.p=f,_!==null&&E.types!==null&&(_.types=E.types),z.T=_}}function Y_(){}function Nu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=vp(e).queue;gp(e,c,n,K,a===null?Y_:function(){return _p(e),a(s)})}function vp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:K},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _p(e){var n=vp(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},ei())}function Uu(){return yn(xo)}function xp(){return Qt().memoizedState}function yp(){return Qt().memoizedState}function Z_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=_a(a);var s=xa(n,e,a);s!==null&&(Gn(s,n,a),Ks(s,n,a)),n={cache:lu()},e.payload=n;return}n=n.return}}function K_(e,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?bp(n,a):(a=Qc(e,n,a,s),a!==null&&(Gn(a,e,s),Mp(a,n,s)))}function Sp(e,n,a){var s=ei();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))bp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Yn(E,_))return qo(e,n,c,0),Bt===null&&Wo(),!1}catch{}finally{}if(a=Qc(e,n,c,s),a!==null)return Gn(a,e,s),Mp(a,n,s),!0}return!1}function Ou(e,n,a,s){if(s={lane:2,revertLane:hf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(n)throw Error(r(479))}else n=Qc(e,a,s,2),n!==null&&Gn(n,e,2)}function hl(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function bp(e,n){Fr=sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mp(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,qn(e,a)}}var no={readContext:yn,use:cl,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};no.useEffectEvent=qt;var Ep={readContext:yn,use:cl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var s=e();if(sr){Ue(!0);try{e()}finally{Ue(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(sr){Ue(!0);try{a(n)}finally{Ue(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=K_.bind(null,ot,e),[s.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=wu(e);var n=e.queue,a=Sp.bind(null,ot,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Du,useDeferredValue:function(e,n){var a=Nn();return Lu(a,e,n)},useTransition:function(){var e=wu(!1);return e=gp.bind(null,ot,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ot,c=Nn();if(xt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Bt===null)throw Error(r(349));(vt&127)!==0||Xh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,op(qh.bind(null,s,f,e),[e]),s.flags|=2048,Gr(9,{destroy:void 0},Wh.bind(null,s,f,a,n),null),a},useId:function(){var e=Nn(),n=Bt.identifierPrefix;if(xt){var a=Ri,s=wi;a=(s&~(1<<32-Ye(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=k_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Uu,useFormState:np,useActionState:np,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ou.bind(null,ot,!0,a),a.dispatch=n,[e,n]},useMemoCache:Eu,useCacheRefresh:function(){return Nn().memoizedState=Z_.bind(null,ot)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((Mt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},zu={readContext:yn,use:cl,useCallback:hp,useContext:yn,useEffect:Cu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:ul,useRef:sp,useState:function(){return ul(Fi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=Qt();return mp(a,Lt.memoizedState,e,n)},useTransition:function(){var e=ul(Fi)[0],n=Qt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:jh,useId:xp,useHostTransitionStatus:Uu,useFormState:ip,useActionState:ip,useOptimistic:function(e,n){var a=Qt();return Kh(a,Lt,e,n)},useMemoCache:Eu,useCacheRefresh:yp};zu.useEffectEvent=lp;var Tp={readContext:yn,use:cl,useCallback:hp,useContext:yn,useEffect:Cu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:Au,useRef:sp,useState:function(){return Au(Fi)},useDebugValue:Du,useDeferredValue:function(e,n){var a=Qt();return Lt===null?Lu(a,e,n):mp(a,Lt.memoizedState,e,n)},useTransition:function(){var e=Au(Fi)[0],n=Qt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:jh,useId:xp,useHostTransitionStatus:Uu,useFormState:rp,useActionState:rp,useOptimistic:function(e,n){var a=Qt();return Lt!==null?Kh(a,Lt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:yp};Tp.useEffectEvent=lp;function Pu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Bu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ei(),c=_a(s);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ei(),c=_a(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),s=_a(a);s.tag=2,n!=null&&(s.callback=n),n=xa(e,s,a),n!==null&&(Gn(n,e,a),Ks(n,e,a))}};function Ap(e,n,a,s,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function wp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Bu.enqueueReplaceState(n,n.state,null)}function or(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Rp(e){Xo(e)}function Cp(e){console.error(e)}function Dp(e){Xo(e)}function pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Lp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(e,n)},a}function Np(e){return e=_a(e),e.tag=3,e}function Up(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Lp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Lp(n,a,s),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Q_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ur(n,a,c,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Al():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),uf(e,s,c)),!1;case 22:return a.flags|=65536,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),uf(e,s,c)),!1}throw Error(r(435,a.tag))}return uf(e,s,c),Al(),!1}if(xt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==iu&&(e=Error(r(422),{cause:s}),Xs(ri(e,a)))):(s!==iu&&(n=Error(r(423),{cause:s}),Xs(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=Iu(e.stateNode,s,c),pu(e,c),Yt!==4&&(Yt=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),uo===null?uo=[f]:uo.push(f),Yt!==4&&(Yt=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Iu(a.stateNode,s,e),pu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Np(c),Up(c,e,a,s),pu(a,c),!1}a=a.return}while(a!==null);return!1}var Fu=Error(r(461)),sn=!1;function Sn(e,n,a,s){n.child=e===null?Bh(n,null,a,s):rr(n,e.child,a,s)}function Op(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return tr(n),s=yu(e,n,a,_,f,c),E=Su(),e!==null&&!sn?(bu(e,n,c),Hi(e,n,c)):(xt&&E&&tu(n),n.flags|=1,Sn(e,n,s,c),n.child)}function zp(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pp(e,n,f,s,c)):(e=Zo(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!qu(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(_,s)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Pp(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(sn=!1,n.pendingProps=s=f,qu(e,c))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return Hu(e,n,a,s,c)}function Bp(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Ip(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&$o(n,f!==null?f.cachePool:null),f!==null?Hh(n,f):gu(),Gh(n);else return s=n.lanes=536870912,Ip(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?($o(n,f.cachePool),Hh(n,f),Sa(),n.memoizedState=null):(e!==null&&$o(n,null),gu(),Sa());return Sn(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ip(e,n,a,s,c){var f=uu();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&$o(n,null),gu(),Gh(n),e!==null&&Ur(e,n,s,!0),n.childLanes=c,null}function ml(e,n){return n=vl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Fp(e,n,a){return rr(n,e.child,null,a),e=ml(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function J_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xt){if(s.mode==="hidden")return e=ml(n,s),n.lanes=536870912,io(null,e);if(_u(n),(e=Ft)?(e=Qm(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=bh(e),a.return=n,n.child=a,xn=n,Ft=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return ml(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(_u(n),c)if(n.flags&256)n.flags&=-257,n=Fp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Ur(e,n,a,!1),c=(a&e.childLanes)!==0,sn||c){if(s=Bt,s!==null&&(_=Rs(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Qa(e,_),Gn(s,e,_),Fu;Al(),n=Fp(e,n,a)}else e=f.treeContext,Ft=ui(_.nextSibling),xn=n,xt=!0,pa=null,li=!1,e!==null&&Th(n,e),n=ml(n,s),n.flags|=4096;return n}return e=Oi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hu(e,n,a,s,c){return tr(n),a=yu(e,n,a,s,void 0,c),s=Su(),e!==null&&!sn?(bu(e,n,c),Hi(e,n,c)):(xt&&s&&tu(n),n.flags|=1,Sn(e,n,a,c),n.child)}function Hp(e,n,a,s,c,f){return tr(n),n.updateQueue=null,a=kh(n,s,a,c),Vh(e),s=Su(),e!==null&&!sn?(bu(e,n,f),Hi(e,n,f)):(xt&&s&&tu(n),n.flags|=1,Sn(e,n,a,f),n.child)}function Gp(e,n,a,s,c){if(tr(n),n.stateNode===null){var f=Cr,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},du(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):Cr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Pu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Bu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,F=or(a,E);f.props=F;var $=f.context,pe=a.contextType;_=Cr,typeof pe=="object"&&pe!==null&&(_=yn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==_)&&wp(n,f,s,_),va=!1;var ee=n.memoizedState;f.state=ee,Js(n,s,f,c),Qs(),$=n.memoizedState,E||ee!==$||va?(typeof xe=="function"&&(Pu(n,a,xe,s),$=n.memoizedState),(F=va||Ap(n,a,F,s,ee,$,_))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,hu(e,n),_=n.memoizedProps,pe=or(a,_),f.props=pe,xe=n.pendingProps,ee=f.context,$=a.contextType,F=Cr,typeof $=="object"&&$!==null&&(F=yn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xe||ee!==F)&&wp(n,f,s,F),va=!1,ee=n.memoizedState,f.state=ee,Js(n,s,f,c),Qs();var le=n.memoizedState;_!==xe||ee!==le||va||e!==null&&e.dependencies!==null&&Qo(e.dependencies)?(typeof E=="function"&&(Pu(n,a,E,s),le=n.memoizedState),(pe=va||Ap(n,a,pe,s,ee,le,F)||e!==null&&e.dependencies!==null&&Qo(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),f.props=s,f.state=le,f.context=F,s=pe):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=rr(n,e.child,null,c),n.child=rr(n,null,a,c)):Sn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function Vp(e,n,a,s){return $a(),n.flags|=256,Sn(e,n,a,s),n.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(e){return{baseLanes:e,cachePool:Lh()}}function ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function kp(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Kt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(xt){if(c?ya(n):Sa(),(e=Ft)?(e=Qm(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=bh(e),a.return=n,n.child=a,xn=n,Ft=null)):e=null,e===null)throw ma(n);return Af(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Sa(),c=n.mode,E=vl({mode:"hidden",children:E},c),s=Ja(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Vu(a),s.childLanes=ku(e,_,a),n.memoizedState=Gu,io(null,s)):(ya(n),ju(n,E))}var F=e.memoizedState;if(F!==null&&(E=F.dehydrated,E!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=Xu(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),E=s.fallback,c=n.mode,s=vl({mode:"visible",children:s.children},c),E=Ja(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,rr(n,e.child,null,a),s=n.child,s.memoizedState=Vu(a),s.childLanes=ku(e,_,a),n.memoizedState=Gu,n=io(null,s));else if(ya(n),Af(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,Xs({value:s,source:null,stack:null}),n=Xu(e,n,a)}else if(sn||Ur(e,n,a,!1),_=(a&e.childLanes)!==0,sn||_){if(_=Bt,_!==null&&(s=Rs(_,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,Qa(e,s),Gn(_,e,s),Fu;Tf(E)||Al(),n=Xu(e,n,a)}else Tf(E)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ft=ui(E.nextSibling),xn=n,xt=!0,pa=null,li=!1,e!==null&&Th(n,e),n=ju(n,s.children),n.flags|=4096);return n}return c?(Sa(),E=s.fallback,c=n.mode,F=e.child,$=F.sibling,s=Oi(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,$!==null?E=Oi($,E):(E=Ja(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=e.child.memoizedState,E===null?E=Vu(a):(c=E.cachePool,c!==null?(F=an._currentValue,c=c.parent!==F?{parent:F,pool:F}:c):c=Lh(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=ku(e,_,a),n.memoizedState=Gu,io(e.child,s)):(ya(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function ju(e,n){return n=vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function vl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Xu(e,n,a){return rr(n,e.child,null,a),e=ju(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jp(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),su(e.return,n,a)}function Wu(e,n,a,s,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Xp(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Kt.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,k(Kt,_),Sn(e,n,s,a),s=xt?js:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jp(e,a,n);else if(e.tag===19)jp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&rl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Wu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&rl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Wu(n,!0,a,null,f,s);break;case"together":Wu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ur(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function qu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Qo(e)))}function $_(e,n,a){switch(n.tag){case 3:Pe(n,n.stateNode.containerInfo),ga(n,an,e.memoizedState.cache),$a();break;case 27:case 5:qe(n);break;case 4:Pe(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_u(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?kp(e,n,a):(ya(n),e=Hi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ur(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Xp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),k(Kt,Kt.current),s)break;return null;case 22:return n.lanes=0,Bp(e,n,a,n.pendingProps);case 24:ga(n,an,e.memoizedState.cache)}return Hi(e,n,a)}function Wp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!qu(e,a)&&(n.flags&128)===0)return sn=!1,$_(e,n,a);sn=(e.flags&131072)!==0}else sn=!1,xt&&(n.flags&1048576)!==0&&Eh(n,js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=ir(n.elementType),n.type=e,typeof e=="function")Jc(e)?(s=or(e,s),n.tag=1,n=Gp(null,n,e,s,a)):(n.tag=0,n=Hu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===P){n.tag=11,n=Op(null,n,e,s,a);break e}else if(c===I){n.tag=14,n=zp(null,n,e,s,a);break e}}throw n=j(e)||e,Error(r(306,n,""))}}return n;case 0:return Hu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=or(s,n.pendingProps),Gp(e,n,s,c,a);case 3:e:{if(Pe(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,hu(e,n),Js(n,s,null,a);var _=n.memoizedState;if(s=_.cache,ga(n,an,s),s!==f.cache&&ou(n,[an],a,!0),Qs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vp(e,n,s,a);break e}else if(s!==c){c=ri(Error(r(424)),n),Xs(c),n=Vp(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ft=ui(e.firstChild),xn=n,xt=!0,pa=null,li=!0,a=Bh(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($a(),s===c){n=Hi(e,n,a);break e}Sn(e,n,s,a)}n=n.child}return n;case 26:return gl(e,n),e===null?(a=ig(n.type,null,n.pendingProps,null))?n.memoizedState=a:xt||(a=n.type,e=n.pendingProps,s=Ul(Ee.current).createElement(a),s[$t]=n,s[Tn]=e,bn(s,a,e),je(s),n.stateNode=s):n.memoizedState=ig(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qe(n),e===null&&xt&&(s=n.stateNode=eg(n.type,n.pendingProps,Ee.current),xn=n,li=!0,c=Ft,Ca(n.type)?(wf=c,Ft=ui(s.firstChild)):Ft=c),Sn(e,n,n.pendingProps.children,a),gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xt&&((c=s=Ft)&&(s=Cx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,xn=n,Ft=ui(s.firstChild),li=!1,c=!0):c=!1),c||ma(n)),qe(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,bf(c,f)?s=null:_!==null&&bf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=yu(e,n,j_,null,null,a),xo._currentValue=c),gl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&xt&&((e=a=Ft)&&(a=Dx(a,n.pendingProps,li),a!==null?(n.stateNode=a,xn=n,Ft=null,e=!0):e=!1),e||ma(n)),null;case 13:return kp(e,n,a);case 4:return Pe(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=rr(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return Op(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ga(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,tr(n),c=yn(c),s=s(c),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return zp(e,n,n.type,n.pendingProps,a);case 15:return Pp(e,n,n.type,n.pendingProps,a);case 19:return Xp(e,n,a);case 31:return J_(e,n,a);case 22:return Bp(e,n,a,n.pendingProps);case 24:return tr(n),s=yn(an),e===null?(c=uu(),c===null&&(c=Bt,f=lu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},du(n),ga(n,an,c)):((e.lanes&a)!==0&&(hu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,an,s)):(s=f.cache,ga(n,an,s),s!==c.cache&&ou(n,[an],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function Yu(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(xm())e.flags|=8192;else throw ar=tl,fu}else e.flags&=-16777217}function qp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lg(n))if(xm())e.flags|=8192;else throw ar=tl,fu}function _l(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,Xr|=n)}function ao(e,n){if(!xt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function ex(e,n,a){var s=n.pendingProps;switch(nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(n),null;case 1:return Ht(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(an),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,au())),Ht(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Gi(n),f!==null?(Ht(n),qp(n,f)):(Ht(n),Yu(n,c,null,s,a))):f?f!==e.memoizedState?(Gi(n),Ht(n),qp(n,f)):(Ht(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Gi(n),Ht(n),Yu(n,c,e,s,a)),null;case 27:if(ct(n),a=Ee.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ht(n),null}e=Q.current,Nr(n)?Ah(n):(e=eg(c,s,a),n.stateNode=e,Gi(n))}return Ht(n),null;case 5:if(ct(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ht(n),null}if(f=Q.current,Nr(n))Ah(n);else{var _=Ul(Ee.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[$t]=n,f[Tn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(bn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Gi(n)}}return Ht(n),Yu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=Ee.current,Nr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[$t]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||km(e.nodeValue,a)),e||ma(n,!0)}else e=Ul(e).createTextNode(s),e[$t]=n,n.stateNode=e}return Ht(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Nr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[$t]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),e=!1}else a=au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ht(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Nr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[$t]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),c=!1}else c=au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),Ht(n),null);case 4:return Be(),e===null&&vf(n.stateNode.containerInfo),Ht(n),null;case 10:return Bi(n.type),Ht(n),null;case 19:if(X(Kt),s=n.memoizedState,s===null)return Ht(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Yt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=rl(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,_l(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Sh(a,e),a=a.sibling;return k(Kt,Kt.current&1|2),xt&&zi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&O()>Ml&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(e=rl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,_l(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xt)return Ht(n),null}else 2*O()-s.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=O(),e.sibling=null,a=Kt.current,k(Kt,c?a&1|2:a&1),xt&&zi(n,s.treeForkCount),e):(Ht(n),null);case 22:case 23:return Qn(n),vu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ht(n),n.subtreeFlags&6&&(n.flags|=8192)):Ht(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&X(nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(an),Ht(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function tx(e,n){switch(nu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(an),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Kt),null;case 4:return Be(),null;case 10:return Bi(n.type),null;case 22:case 23:return Qn(n),vu(),e!==null&&X(nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(an),null;case 25:return null;default:return null}}function Yp(e,n){switch(nu(n),n.tag){case 3:Bi(an),Be();break;case 26:case 27:case 5:ct(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:X(Kt);break;case 10:Bi(n.type);break;case 22:case 23:Qn(n),vu(),e!==null&&X(nr);break;case 24:Bi(an)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(E){Rt(n,n.return,E)}}function ba(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var F=a,$=E;try{$()}catch(pe){Rt(c,F,pe)}}}s=s.next}while(s!==f)}}catch(pe){Rt(n,n.return,pe)}}function Zp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fh(n,a)}catch(s){Rt(e,e.return,s)}}}function Kp(e,n,a){a.props=or(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Rt(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Rt(e,n,c)}}function Ci(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Rt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Rt(e,n,c)}else a.current=null}function Qp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Rt(e,e.return,c)}}function Zu(e,n,a){try{var s=e.stateNode;Mx(s,e.type,a,n),s[Tn]=n}catch(c){Rt(e,e.return,c)}}function Jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Qu(e,n,a),e=e.sibling;e!==null;)Qu(e,n,a),e=e.sibling}function xl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xl(e,n,a),e=e.sibling;e!==null;)xl(e,n,a),e=e.sibling}function $p(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,s,a),n[$t]=e,n[Tn]=a}catch(f){Rt(e,e.return,f)}}var Vi=!1,on=!1,Ju=!1,em=typeof WeakSet=="function"?WeakSet:Set,pn=null;function nx(e,n){if(e=e.containerInfo,yf=Hl,e=dh(e),Xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,E=-1,F=-1,$=0,pe=0,xe=e,ee=null;t:for(;;){for(var le;xe!==a||c!==0&&xe.nodeType!==3||(E=_+c),xe!==f||s!==0&&xe.nodeType!==3||(F=_+s),xe.nodeType===3&&(_+=xe.nodeValue.length),(le=xe.firstChild)!==null;)ee=xe,xe=le;for(;;){if(xe===e)break t;if(ee===a&&++$===c&&(E=_),ee===f&&++pe===s&&(F=_),(le=xe.nextSibling)!==null)break;xe=ee,ee=xe.parentNode}xe=le}a=E===-1||F===-1?null:{start:E,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:e,selectionRange:a},Hl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ze=or(a.type,c);e=s.getSnapshotBeforeUpdate(ze,f),s.__reactInternalSnapshotBeforeUpdate=e}catch($e){Rt(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ef(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function tm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&ro(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Rt(a,a.return,_)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Rt(a,a.return,_)}}s&64&&Zp(a),s&512&&so(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fh(e,n)}catch(_){Rt(a,a.return,_)}}break;case 27:n===null&&s&4&&$p(a);case 26:case 5:ji(e,a),n===null&&s&4&&Qp(a),s&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&am(e,a);break;case 13:ji(e,a),s&4&&rm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=fx.bind(null,a),Lx(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||on,c=Vi;var f=on;Vi=s,(on=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Vi=c,on=f}break;case 30:break;default:ji(e,a)}}function nm(e){var n=e.alternate;n!==null&&(e.alternate=null,nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ae(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jt=null,Bn=!1;function ki(e,n,a){for(a=a.child;a!==null;)im(e,n,a),a=a.sibling}function im(e,n,a){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 26:on||Ci(a,n),ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||Ci(a,n);var s=jt,c=Bn;Ca(a.type)&&(jt=a.stateNode,Bn=!1),ki(e,n,a),go(a.stateNode),jt=s,Bn=c;break;case 5:on||Ci(a,n);case 6:if(s=jt,c=Bn,jt=null,ki(e,n,a),jt=s,Bn=c,jt!==null)if(Bn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){Rt(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){Rt(a,n,f)}break;case 18:jt!==null&&(Bn?(e=jt,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$r(e)):Zm(jt,a.stateNode));break;case 4:s=jt,c=Bn,jt=a.stateNode.containerInfo,Bn=!0,ki(e,n,a),jt=s,Bn=c;break;case 0:case 11:case 14:case 15:ba(2,a,n),on||ba(4,a,n),ki(e,n,a);break;case 1:on||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Kp(a,n,s)),ki(e,n,a);break;case 21:ki(e,n,a);break;case 22:on=(s=on)||a.memoizedState!==null,ki(e,n,a),on=s;break;default:ki(e,n,a)}}function am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$r(e)}catch(a){Rt(n,n.return,a)}}}function rm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$r(e)}catch(a){Rt(n,n.return,a)}}function ix(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new em),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new em),n;default:throw Error(r(435,e.tag))}}function yl(e,n){var a=ix(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=dx.bind(null,e,s);s.then(c,c)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Ca(E.type)){jt=E.stateNode,Bn=!1;break e}break;case 5:jt=E.stateNode,Bn=!1;break e;case 3:case 4:jt=E.stateNode.containerInfo,Bn=!0;break e}E=E.return}if(jt===null)throw Error(r(160));im(f,_,c),jt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sm(n,e),n=n.sibling}var vi=null;function sm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Fn(e),s&4&&(ba(3,e,e.return),ro(3,e),ba(5,e,e.return));break;case 1:In(n,e),Fn(e),s&512&&(on||a===null||Ci(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=vi;if(In(n,e),Fn(e),s&512&&(on||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[oe]||f[$t]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,s,a),f[$t]=e,je(f),s=f;break e;case"link":var _=sg("link","href",c).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=sg("meta","content",c).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}f=c.createElement(s),bn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[$t]=e,je(f),s=f}e.stateNode=s}else og(c,e.type,e.stateNode);else e.stateNode=rg(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?og(c,e.type,e.stateNode):rg(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Zu(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Fn(e),s&512&&(on||a===null||Ci(a,a.return)),a!==null&&s&4&&Zu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Fn(e),s&512&&(on||a===null||Ci(a,a.return)),e.flags&32){c=e.stateNode;try{br(c,"")}catch(ze){Rt(e,e.return,ze)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Zu(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Ju=!0);break;case 6:if(In(n,e),Fn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(ze){Rt(e,e.return,ze)}}break;case 3:if(Pl=null,c=vi,vi=Ol(n.containerInfo),In(n,e),vi=c,Fn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch(ze){Rt(e,e.return,ze)}Ju&&(Ju=!1,om(e));break;case 4:s=vi,vi=Ol(e.stateNode.containerInfo),In(n,e),Fn(e),vi=s;break;case 12:In(n,e),Fn(e);break;case 31:In(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,yl(e,s)));break;case 13:In(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bl=O()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,yl(e,s)));break;case 22:c=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=Vi,pe=on;if(Vi=$||c,on=pe||F,In(n,e),on=pe,Vi=$,Fn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||F||Vi||on||lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=F.stateNode;var xe=F.memoizedProps.style,ee=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(ze){Rt(F,F.return,ze)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(ze){Rt(F,F.return,ze)}}}else if(n.tag===18){if(a===null){F=n;try{var le=F.stateNode;c?Km(le,!0):Km(F.stateNode,!1)}catch(ze){Rt(F,F.return,ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,yl(e,a))));break;case 19:In(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,yl(e,s)));break;case 30:break;case 21:break;default:In(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Jp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ku(e);xl(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(br(_,""),a.flags&=-33);var E=Ku(e);xl(e,E,_);break;case 3:case 4:var F=a.stateNode.containerInfo,$=Ku(e);Qu(e,$,F);break;default:throw Error(r(161))}}catch(pe){Rt(e,e.return,pe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tm(e,n.alternate,n),n=n.sibling}function lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ba(4,n,n.return),lr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kp(n,n.return,a),lr(n);break;case 27:go(n.stateNode);case 26:case 5:Ci(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),ro(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Rt(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Ih(F[c],E)}catch($){Rt(s,s.return,$)}}a&&_&64&&Zp(f),so(f,f.return);break;case 27:$p(f);case 26:case 5:Xi(c,f,a),a&&s===null&&_&4&&Qp(f),so(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&_&4&&am(c,f);break;case 13:Xi(c,f,a),a&&_&4&&rm(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),so(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function $u(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function _i(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lm(e,n,a,s),n=n.sibling}function lm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,s),c&2048&&ro(9,n);break;case 1:_i(e,n,a,s);break;case 3:_i(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(c&2048){_i(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Rt(n,n.return,F)}}else _i(e,n,a,s);break;case 31:_i(e,n,a,s);break;case 13:_i(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,s):oo(e,n):f._visibility&2?_i(e,n,a,s):(f._visibility|=2,Vr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&$u(_,n);break;case 24:_i(e,n,a,s),c&2048&&ef(n.alternate,n);break;default:_i(e,n,a,s)}}function Vr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,E=a,F=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:Vr(f,_,E,F,c),ro(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?Vr(f,_,E,F,c):oo(f,_):(pe._visibility|=2,Vr(f,_,E,F,c)),c&&$&2048&&$u(_.alternate,_);break;case 24:Vr(f,_,E,F,c),c&&$&2048&&ef(_.alternate,_);break;default:Vr(f,_,E,F,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&$u(s.alternate,s);break;case 24:oo(a,s),c&2048&&ef(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function kr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)cm(e,n,a),e=e.sibling}function cm(e,n,a){switch(e.tag){case 26:kr(e,n,a),e.flags&lo&&e.memoizedState!==null&&kx(a,vi,e.memoizedState,e.memoizedProps);break;case 5:kr(e,n,a);break;case 3:case 4:var s=vi;vi=Ol(e.stateNode.containerInfo),kr(e,n,a),vi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,kr(e,n,a),lo=s):kr(e,n,a));break;default:kr(e,n,a)}}function um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,dm(s,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(e),e=e.sibling}function fm(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&ba(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Sl(e)):co(e);break;default:co(e)}}function Sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,dm(s,e)}um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ba(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sl(n));break;default:Sl(n)}e=e.sibling}}function dm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else e:for(a=e;pn!==null;){s=pn;var c=s.sibling,f=s.return;if(nm(s),s===a){pn=null;break e}if(c!==null){c.return=f,pn=c;break e}pn=f}}}var ax={getCacheForType:function(e){var n=yn(an),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return yn(an).controller.signal}},rx=typeof WeakMap=="function"?WeakMap:Map,Mt=0,Bt=null,mt=null,vt=0,wt=0,Jn=null,Ma=!1,jr=!1,tf=!1,Wi=0,Yt=0,Ea=0,cr=0,nf=0,$n=0,Xr=0,uo=null,Hn=null,af=!1,bl=0,hm=0,Ml=1/0,El=null,Ta=null,un=0,Aa=null,Wr=null,qi=0,rf=0,sf=null,pm=null,fo=0,of=null;function ei(){return(Mt&2)!==0&&vt!==0?vt&-vt:z.T!==null?hf():Ds()}function mm(){if($n===0)if((vt&536870912)===0||xt){var e=G;G<<=1,(G&3932160)===0&&(G=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Gn(e,n,a){(e===Bt&&(wt===2||wt===9)||e.cancelPendingCommit!==null)&&(qr(e,0),wa(e,vt,$n,!1)),Zt(e,a),((Mt&2)===0||e!==Bt)&&(e===Bt&&((Mt&2)===0&&(cr|=a),Yt===4&&wa(e,vt,$n,!1)),Di(e))}function gm(e,n,a){if((Mt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xe(e,n),c=s?lx(e,n):cf(e,n,!0),f=s;do{if(c===0){jr&&!s&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!sx(a)){c=cf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=e;c=uo;var F=E.current.memoizedState.isDehydrated;if(F&&(qr(E,_).flags|=256),_=cf(E,_,!1),_!==2){if(tf&&!F){E.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),wa(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:wa(s,n,$n,!Ma);break e;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=bl+300-O(),10<c)){if(wa(s,n,$n,!Ma),Je(s,0,!0)!==0)break e;qi=n,s.timeoutHandle=qm(vm.bind(null,s,a,Hn,El,af,n,$n,cr,Xr,Ma,f,"Throttled",-0,0),c);break e}vm(s,a,Hn,El,af,n,$n,cr,Xr,Ma,f,null,-0,0)}}break}while(!0);Di(e)}function vm(e,n,a,s,c,f,_,E,F,$,pe,xe,ee,le){if(e.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},cm(n,f,xe);var ze=(f&62914560)===f?bl-O():(f&4194048)===f?hm-O():0;if(ze=jx(xe,ze),ze!==null){qi=f,e.cancelPendingCommit=ze(Tm.bind(null,e,n,f,a,s,c,_,E,F,pe,xe,null,ee,le)),wa(e,f,_,!$);return}}Tm(e,n,f,a,s,c,_,E,F)}function sx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,s){n&=~nf,n&=~cr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ye(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&hn(e,a,n)}function Tl(){return(Mt&6)===0?(ho(0),!1):!0}function lf(){if(mt!==null){if(wt===0)var e=mt.return;else e=mt,Pi=er=null,Mu(e),Br=null,Ys=0,e=mt;for(;e!==null;)Yp(e.alternate,e),e=e.return;mt=null}}function qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qi=0,lf(),Bt=e,mt=a=Oi(e.current,null),vt=n,wt=0,Jn=null,Ma=!1,jr=Xe(e,n),tf=!1,Xr=$n=nf=cr=Ea=Yt=0,Hn=uo=null,af=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ye(s),f=1<<c;n|=e[c],s&=~f}return Wi=n,Wo(),a}function _m(e,n){ot=null,z.H=no,n===Pr||n===el?(n=Oh(),wt=3):n===fu?(n=Oh(),wt=4):wt=n===Fu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,mt===null&&(Yt=1,pl(e,ri(n,e.current)))}function xm(){var e=Kn.current;return e===null?!0:(vt&4194048)===vt?ci===null:(vt&62914560)===vt||(vt&536870912)!==0?e===ci:!1}function ym(){var e=z.H;return z.H=no,e===null?no:e}function Sm(){var e=z.A;return z.A=ax,e}function Al(){Yt=4,Ma||(vt&4194048)!==vt&&Kn.current!==null||(jr=!0),(Ea&134217727)===0&&(cr&134217727)===0||Bt===null||wa(Bt,vt,$n,!1)}function cf(e,n,a){var s=Mt;Mt|=2;var c=ym(),f=Sm();(Bt!==e||vt!==n)&&(El=null,qr(e,n)),n=!1;var _=Yt;e:do try{if(wt!==0&&mt!==null){var E=mt,F=Jn;switch(wt){case 8:lf(),_=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var $=wt;if(wt=0,Jn=null,Yr(e,E,F,$),a&&jr){_=0;break e}break;default:$=wt,wt=0,Jn=null,Yr(e,E,F,$)}}ox(),_=Yt;break}catch(pe){_m(e,pe)}while(!0);return n&&e.shellSuspendCounter++,Pi=er=null,Mt=s,z.H=c,z.A=f,mt===null&&(Bt=null,vt=0,Wo()),_}function ox(){for(;mt!==null;)bm(mt)}function lx(e,n){var a=Mt;Mt|=2;var s=ym(),c=Sm();Bt!==e||vt!==n?(El=null,Ml=O()+500,qr(e,n)):jr=Xe(e,n);e:do try{if(wt!==0&&mt!==null){n=mt;var f=Jn;t:switch(wt){case 1:wt=0,Jn=null,Yr(e,n,f,1);break;case 2:case 9:if(Nh(f)){wt=0,Jn=null,Mm(n);break}n=function(){wt!==2&&wt!==9||Bt!==e||(wt=7),Di(e)},f.then(n,n);break e;case 3:wt=7;break e;case 4:wt=5;break e;case 7:Nh(f)?(wt=0,Jn=null,Mm(n)):(wt=0,Jn=null,Yr(e,n,f,7));break;case 5:var _=null;switch(mt.tag){case 26:_=mt.memoizedState;case 5:case 27:var E=mt;if(_?lg(_):E.stateNode.complete){wt=0,Jn=null;var F=E.sibling;if(F!==null)mt=F;else{var $=E.return;$!==null?(mt=$,wl($)):mt=null}break t}}wt=0,Jn=null,Yr(e,n,f,5);break;case 6:wt=0,Jn=null,Yr(e,n,f,6);break;case 8:lf(),Yt=6;break e;default:throw Error(r(462))}}cx();break}catch(pe){_m(e,pe)}while(!0);return Pi=er=null,z.H=s,z.A=c,Mt=a,mt!==null?0:(Bt=null,vt=0,Wo(),Yt)}function cx(){for(;mt!==null&&!Me();)bm(mt)}function bm(e){var n=Wp(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?wl(e):mt=n}function Mm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hp(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=Hp(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Mu(n);default:Yp(a,n),n=mt=Sh(n,Wi),n=Wp(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?wl(e):mt=n}function Yr(e,n,a,s){Pi=er=null,Mu(n),Br=null,Ys=0;var c=n.return;try{if(Q_(e,c,n,a,vt)){Yt=1,pl(e,ri(a,e.current)),mt=null;return}}catch(f){if(c!==null)throw mt=c,f;Yt=1,pl(e,ri(a,e.current)),mt=null;return}n.flags&32768?(xt||s===1?e=!0:jr||(vt&536870912)!==0?e=!1:(Ma=e=!0,(s===2||s===9||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Em(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){Em(n,Ma);return}e=n.return;var a=ex(n.alternate,n,Wi);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=e}while(n!==null);Yt===0&&(Yt=5)}function Em(e,n){do{var a=tx(e.alternate,e);if(a!==null){a.flags&=32767,mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){mt=e;return}mt=e=a}while(e!==null);Yt=6,mt=null}function Tm(e,n,a,s,c,f,_,E,F){e.cancelPendingCommit=null;do Rl();while(un!==0);if((Mt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Kc,Dt(e,a,f,_,E,F),e===Bt&&(mt=Bt=null,vt=0),Wr=n,Aa=e,qi=a,rf=f,sf=c,pm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hx(De,function(){return Dm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=q.p,q.p=2,_=Mt,Mt|=4;try{nx(e,n,a)}finally{Mt=_,q.p=c,z.T=s}}un=1,Am(),wm(),Rm()}}function Am(){if(un===1){un=0;var e=Aa,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=q.p;q.p=2;var c=Mt;Mt|=4;try{sm(n,e);var f=Sf,_=dh(e.containerInfo),E=f.focusedElem,F=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&fh(E.ownerDocument.documentElement,E)){if(F!==null&&Xc(E)){var $=F.start,pe=F.end;if(pe===void 0&&(pe=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(pe,E.value.length);else{var xe=E.ownerDocument||document,ee=xe&&xe.defaultView||window;if(ee.getSelection){var le=ee.getSelection(),ze=E.textContent.length,$e=Math.min(F.start,ze),Ut=F.end===void 0?$e:Math.min(F.end,ze);!le.extend&&$e>Ut&&(_=Ut,Ut=$e,$e=_);var W=uh(E,$e),V=uh(E,Ut);if(W&&V&&(le.rangeCount!==1||le.anchorNode!==W.node||le.anchorOffset!==W.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var J=xe.createRange();J.setStart(W.node,W.offset),le.removeAllRanges(),$e>Ut?(le.addRange(J),le.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),le.addRange(J))}}}}for(xe=[],le=E;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<xe.length;E++){var ve=xe[E];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Hl=!!yf,Sf=yf=null}finally{Mt=c,q.p=s,z.T=a}}e.current=n,un=2}}function wm(){if(un===2){un=0;var e=Aa,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=q.p;q.p=2;var c=Mt;Mt|=4;try{tm(e,n.alternate,n)}finally{Mt=c,q.p=s,z.T=a}}un=3}}function Rm(){if(un===4||un===3){un=0,me();var e=Aa,n=Wr,a=qi,s=pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Wr=Aa=null,Cm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ta=null),oa(a),n=n.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=q.p,q.p=2,z.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{z.T=n,q.p=c}}(qi&3)!==0&&Rl(),Di(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===of?fo++:(fo=0,of=e):fo=0,ho(0)}}function Cm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function Rl(){return Am(),wm(),Rm(),Dm()}function Dm(){if(un!==5)return!1;var e=Aa,n=rf;rf=0;var a=oa(qi),s=z.T,c=q.p;try{q.p=32>a?32:a,z.T=null,a=sf,sf=null;var f=Aa,_=qi;if(un=0,Wr=Aa=null,qi=0,(Mt&6)!==0)throw Error(r(331));var E=Mt;if(Mt|=4,fm(f.current),lm(f,f.current,_,a),Mt=E,ho(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Qe,f)}catch{}return!0}finally{q.p=c,z.T=s,Cm(e,n)}}function Lm(e,n,a){n=ri(a,n),n=Iu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Zt(e,2),Di(e))}function Rt(e,n,a){if(e.tag===3)Lm(e,e,a);else for(;n!==null;){if(n.tag===3){Lm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ta===null||!Ta.has(s))){e=ri(a,e),a=Np(2),s=xa(n,a,2),s!==null&&(Up(a,s,n,e),Zt(s,2),Di(s));break}}n=n.return}}function uf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new rx;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(tf=!0,c.add(a),e=ux.bind(null,e,n,a),n.then(e,e))}function ux(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Bt===e&&(vt&a)===a&&(Yt===4||Yt===3&&(vt&62914560)===vt&&300>O()-bl?(Mt&2)===0&&qr(e,0):nf|=a,Xr===vt&&(Xr=0)),Di(e)}function Nm(e,n){n===0&&(n=Tt()),e=Qa(e,n),e!==null&&(Zt(e,n),Di(e))}function fx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Nm(e,a)}function dx(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Nm(e,a)}function hx(e,n){return w(e,n)}var Cl=null,Zr=null,ff=!1,Dl=!1,df=!1,Ra=0;function Di(e){e!==Zr&&e.next===null&&(Zr===null?Cl=Zr=e:Zr=Zr.next=e),Dl=!0,ff||(ff=!0,mx())}function ho(e,n){if(!df&&Dl){df=!0;do for(var a=!1,s=Cl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ye(42|e)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Pm(s,f))}else f=vt,f=Je(s,s===Bt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Xe(s,f)||(a=!0,Pm(s,f));s=s.next}while(a);df=!1}}function px(){Um()}function Um(){Dl=ff=!1;var e=0;Ra!==0&&Tx()&&(e=Ra);for(var n=O(),a=null,s=Cl;s!==null;){var c=s.next,f=Om(s,n);f===0?(s.next=null,a===null?Cl=c:a.next=c,c===null&&(Zr=a)):(a=s,(e!==0||(f&3)!==0)&&(Dl=!0)),s=c}un!==0&&un!==5||ho(e),Ra!==0&&(Ra=0)}function Om(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ye(f),E=1<<_,F=c[_];F===-1?((E&a)===0||(E&s)!==0)&&(c[_]=Ct(E,n)):F<=n&&(e.expiredLanes|=E),f&=~E}if(n=Bt,a=vt,a=Je(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(wt===2||wt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ne(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ne(s),oa(a)){case 2:case 8:a=be;break;case 32:a=De;break;case 268435456:a=Se;break;default:a=De}return s=zm.bind(null,e),a=w(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ne(s),e.callbackPriority=2,e.callbackNode=null,2}function zm(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Rl()&&e.callbackNode!==a)return null;var s=vt;return s=Je(e,e===Bt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(gm(e,s,n),Om(e,O()),e.callbackNode!=null&&e.callbackNode===a?zm.bind(null,e):null)}function Pm(e,n){if(Rl())return null;gm(e,n,!0)}function mx(){wx(function(){(Mt&6)!==0?w(he,px):Um()})}function hf(){if(Ra===0){var e=Or;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),Ra=e}return Ra}function Bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Io(""+e)}function Im(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Bm((c[Tn]||null).action),_=s.submitter;_&&(n=(n=_[Tn]||null)?Bm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Vo("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ra!==0){var F=_?Im(c,_):new FormData(c);Nu(a,{pending:!0,data:F,method:c.method,action:f},null,F)}}else typeof f=="function"&&(E.preventDefault(),F=_?Im(c,_):new FormData(c),Nu(a,{pending:!0,data:F,method:c.method,action:f},f,F))},currentTarget:c}]})}}for(var pf=0;pf<Zc.length;pf++){var mf=Zc[pf],vx=mf.toLowerCase(),_x=mf[0].toUpperCase()+mf.slice(1);gi(vx,"on"+_x)}gi(mh,"onAnimationEnd"),gi(gh,"onAnimationIteration"),gi(vh,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(O_,"onTransitionRun"),gi(z_,"onTransitionStart"),gi(P_,"onTransitionCancel"),gi(_h,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Fm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],F=E.instance,$=E.currentTarget;if(E=E.listener,F!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(pe){Xo(pe)}c.currentTarget=null,f=F}else for(_=0;_<s.length;_++){if(E=s[_],F=E.instance,$=E.currentTarget,E=E.listener,F!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=$;try{f(c)}catch(pe){Xo(pe)}c.currentTarget=null,f=F}}}}function gt(e,n){var a=n[Ls];a===void 0&&(a=n[Ls]=new Set);var s=e+"__bubble";a.has(s)||(Hm(n,e,2,!1),a.add(s))}function gf(e,n,a){var s=0;n&&(s|=4),Hm(a,e,s,n)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function vf(e){if(!e[Ll]){e[Ll]=!0,it.forEach(function(a){a!=="selectionchange"&&(xx.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ll]||(n[Ll]=!0,gf("selectionchange",!1,n))}}function Hm(e,n,a,s){switch(mg(n)){case 2:var c=qx;break;case 8:c=Yx;break;default:c=Nf}a=c.bind(null,n,a,e),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function _f(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=s.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=Ne(E),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){s=f=_;continue e}E=E.parentNode}}s=s.return}Xd(function(){var $=f,pe=Oc(a),xe=[];e:{var ee=xh.get(e);if(ee!==void 0){var le=Vo,ze=e;switch(e){case"keypress":if(Ho(a)===0)break e;case"keydown":case"keyup":le=d_;break;case"focusin":ze="focus",le=Hc;break;case"focusout":ze="blur",le=Hc;break;case"beforeblur":case"afterblur":le=Hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=m_;break;case mh:case gh:case vh:le=i_;break;case _h:le=v_;break;case"scroll":case"scrollend":le=Jv;break;case"wheel":le=x_;break;case"copy":case"cut":case"paste":le=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Kd;break;case"toggle":case"beforetoggle":le=S_}var $e=(n&4)!==0,Ut=!$e&&(e==="scroll"||e==="scrollend"),W=$e?ee!==null?ee+"Capture":null:ee;$e=[];for(var V=$,J;V!==null;){var ve=V;if(J=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||J===null||W===null||(ve=zs(V,W),ve!=null&&$e.push(mo(V,ve,J))),Ut)break;V=V.return}0<$e.length&&(ee=new le(ee,ze,null,a,pe),xe.push({event:ee,listeners:$e}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",ee&&a!==Uc&&(ze=a.relatedTarget||a.fromElement)&&(Ne(ze)||ze[la]))break e;if((le||ee)&&(ee=pe.window===pe?pe:(ee=pe.ownerDocument)?ee.defaultView||ee.parentWindow:window,le?(ze=a.relatedTarget||a.toElement,le=$,ze=ze?Ne(ze):null,ze!==null&&(Ut=u(ze),$e=ze.tag,ze!==Ut||$e!==5&&$e!==27&&$e!==6)&&(ze=null)):(le=null,ze=$),le!==ze)){if($e=Yd,ve="onMouseLeave",W="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&($e=Kd,ve="onPointerLeave",W="onPointerEnter",V="pointer"),Ut=le==null?ee:Ze(le),J=ze==null?ee:Ze(ze),ee=new $e(ve,V+"leave",le,a,pe),ee.target=Ut,ee.relatedTarget=J,ve=null,Ne(pe)===$&&($e=new $e(W,V+"enter",ze,a,pe),$e.target=J,$e.relatedTarget=Ut,ve=$e),Ut=ve,le&&ze)t:{for($e=yx,W=le,V=ze,J=0,ve=W;ve;ve=$e(ve))J++;ve=0;for(var We=V;We;We=$e(We))ve++;for(;0<J-ve;)W=$e(W),J--;for(;0<ve-J;)V=$e(V),ve--;for(;J--;){if(W===V||V!==null&&W===V.alternate){$e=W;break t}W=$e(W),V=$e(V)}$e=null}else $e=null;le!==null&&Gm(xe,ee,le,$e,!1),ze!==null&&Ut!==null&&Gm(xe,Ut,ze,$e,!0)}}e:{if(ee=$?Ze($):window,le=ee.nodeName&&ee.nodeName.toLowerCase(),le==="select"||le==="input"&&ee.type==="file")var yt=ah;else if(nh(ee))if(rh)yt=L_;else{yt=C_;var Ge=R_}else le=ee.nodeName,!le||le.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?$&&Nc($.elementType)&&(yt=ah):yt=D_;if(yt&&(yt=yt(e,$))){ih(xe,yt,a,pe);break e}Ge&&Ge(e,ee,$),e==="focusout"&&$&&ee.type==="number"&&$.memoizedProps.value!=null&&Lc(ee,"number",ee.value)}switch(Ge=$?Ze($):window,e){case"focusin":(nh(Ge)||Ge.contentEditable==="true")&&(Ar=Ge,Wc=$,ks=null);break;case"focusout":ks=Wc=Ar=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,hh(xe,a,pe);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":hh(xe,a,pe)}var lt;if(Vc)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Tr?eh(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(Qd&&a.locale!=="ko"&&(Tr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Tr&&(lt=Wd()):(da=pe,Bc="value"in da?da.value:da.textContent,Tr=!0)),Ge=Nl($,_t),0<Ge.length&&(_t=new Zd(_t,e,null,a,pe),xe.push({event:_t,listeners:Ge}),lt?_t.data=lt:(lt=th(a),lt!==null&&(_t.data=lt)))),(lt=M_?E_(e,a):T_(e,a))&&(_t=Nl($,"onBeforeInput"),0<_t.length&&(Ge=new Zd("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ge,listeners:_t}),Ge.data=lt)),gx(xe,e,$,a,pe)}Fm(xe,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Nl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(mo(e,c,f)),c=zs(e,n),c!=null&&s.push(mo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function yx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gm(e,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,F=E.alternate,$=E.stateNode;if(E=E.tag,F!==null&&F===s)break;E!==5&&E!==26&&E!==27||$===null||(F=$,c?($=zs(a,f),$!=null&&_.unshift(mo(a,$,F))):c||($=zs(a,f),$!=null&&_.push(mo(a,$,F)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var Sx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function Vm(e){return(typeof e=="string"?e:""+e).replace(Sx,`
`).replace(bx,"")}function km(e,n){return n=Vm(n),Vm(e)===n}function Nt(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(e,""+s);break;case"className":Pt(e,"class",s);break;case"tabIndex":Pt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,s);break;case"style":kd(e,s,f);break;case"data":if(n!=="object"){Pt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Io(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Nt(e,n,"name",c.name,c,null),Nt(e,n,"formEncType",c.formEncType,c,null),Nt(e,n,"formMethod",c.formMethod,c,null),Nt(e,n,"formTarget",c.formTarget,c,null)):(Nt(e,n,"encType",c.encType,c,null),Nt(e,n,"method",c.method,c,null),Nt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Io(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ni);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Io(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ca(e,"popover",s);break;case"xlinkActuate":_n(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":_n(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":_n(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":_n(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":_n(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":_n(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":_n(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":_n(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":_n(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ca(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kv.get(a)||a,ca(e,a,s))}}function xf(e,n,a,s,c,f){switch(a){case"style":kd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?br(e,s):(typeof s=="number"||typeof s=="bigint")&&br(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ca(e,a,s)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Nt(e,n,f,_,a,null)}}c&&Nt(e,n,"srcSet",a.srcSet,a,null),s&&Nt(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var E=f=_=c=null,F=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var pe=a[s];if(pe!=null)switch(s){case"name":c=pe;break;case"type":_=pe;break;case"checked":F=pe;break;case"defaultChecked":$=pe;break;case"value":f=pe;break;case"defaultValue":E=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Nt(e,n,s,pe,a,null)}}Os(e,f,E,F,$,_,c,!1);return;case"select":gt("invalid",e),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Nt(e,n,c,E,a,null)}n=f,a=_,e.multiple=!!s,n!=null?Sr(e,!!s,n,!1):a!=null&&Sr(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Nt(e,n,_,E,a,null)}Gd(e,s,c,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(s=a[F],s!=null))switch(F){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Nt(e,n,F,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)gt(po[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Nt(e,n,$,s,a,null)}return;default:if(Nc(n)){for(pe in a)a.hasOwnProperty(pe)&&(s=a[pe],s!==void 0&&xf(e,n,pe,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Nt(e,n,E,s,a,null))}function Mx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,F=null,$=null,pe=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=xe;default:s.hasOwnProperty(le)||Nt(e,n,le,null,s,xe)}}for(var ee in s){var le=s[ee];if(xe=a[ee],s.hasOwnProperty(ee)&&(le!=null||xe!=null))switch(ee){case"type":f=le;break;case"name":c=le;break;case"checked":$=le;break;case"defaultChecked":pe=le;break;case"value":_=le;break;case"defaultValue":E=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Nt(e,n,ee,le,s,xe)}}Us(e,_,E,F,$,pe,f,c);return;case"select":le=_=E=ee=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:s.hasOwnProperty(f)||Nt(e,n,f,null,s,F)}for(c in s)if(f=s[c],F=a[c],s.hasOwnProperty(c)&&(f!=null||F!=null))switch(c){case"value":ee=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==F&&Nt(e,n,c,f,s,F)}n=E,a=_,s=le,ee!=null?Sr(e,!!a,ee,!1):!!s!=!!a&&(n!=null?Sr(e,!!a,n,!0):Sr(e,!!a,a?[]:"",!1));return;case"textarea":le=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Nt(e,n,E,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ee=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Nt(e,n,_,c,s,f)}Hd(e,ee,le);return;case"option":for(var ze in a)if(ee=a[ze],a.hasOwnProperty(ze)&&ee!=null&&!s.hasOwnProperty(ze))switch(ze){case"selected":e.selected=!1;break;default:Nt(e,n,ze,null,s,ee)}for(F in s)if(ee=s[F],le=a[F],s.hasOwnProperty(F)&&ee!==le&&(ee!=null||le!=null))switch(F){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Nt(e,n,F,ee,s,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ee=a[$e],a.hasOwnProperty($e)&&ee!=null&&!s.hasOwnProperty($e)&&Nt(e,n,$e,null,s,ee);for($ in s)if(ee=s[$],le=a[$],s.hasOwnProperty($)&&ee!==le&&(ee!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:Nt(e,n,$,ee,s,le)}return;default:if(Nc(n)){for(var Ut in a)ee=a[Ut],a.hasOwnProperty(Ut)&&ee!==void 0&&!s.hasOwnProperty(Ut)&&xf(e,n,Ut,void 0,s,ee);for(pe in s)ee=s[pe],le=a[pe],!s.hasOwnProperty(pe)||ee===le||ee===void 0&&le===void 0||xf(e,n,pe,ee,s,le);return}}for(var W in a)ee=a[W],a.hasOwnProperty(W)&&ee!=null&&!s.hasOwnProperty(W)&&Nt(e,n,W,null,s,ee);for(xe in s)ee=s[xe],le=a[xe],!s.hasOwnProperty(xe)||ee===le||ee==null&&le==null||Nt(e,n,xe,ee,s,le)}function jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ex(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&jm(_)){for(_=0,E=c.responseEnd,s+=1;s<a.length;s++){var F=a[s],$=F.startTime;if($>E)break;var pe=F.transferSize,xe=F.initiatorType;pe&&jm(xe)&&(F=F.responseEnd,_+=pe*(F<E?1:(E-$)/(F-$)))}if(--s,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yf=null,Sf=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Xm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function bf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function Tx(){var e=window.event;return e&&e.type==="popstate"?e===Mf?!1:(Mf=e,!0):(Mf=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(e){return Ym.resolve(null).then(e).catch(Rx)}:qm;function Rx(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function Zm(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),$r(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[oe]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(e.ownerDocument.body);a=c}while(a);$r(n)}function Km(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[oe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Dx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Qm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Tf(e){return e.data==="$?"||e.data==="$~"}function Af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var wf=null;function Jm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $m(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function eg(e,n,a){switch(n=Ul(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ae(e)}var fi=new Map,tg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=q.d;q.d={f:Nx,r:Ux,D:Ox,C:zx,L:Px,m:Bx,X:Fx,S:Ix,M:Hx};function Nx(){var e=Yi.f(),n=Tl();return e||n}function Ux(e){var n=He(e);n!==null&&n.tag===5&&n.type==="form"?_p(n):Yi.r(e)}var Kr=typeof document>"u"?null:document;function ng(e,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=An(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),tg.has(c)||(tg.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),bn(n,"link",e),je(n),s.head.appendChild(n)))}}function Ox(e){Yi.D(e),ng("dns-prefetch",e,null)}function zx(e,n){Yi.C(e,n),ng("preconnect",e,n)}function Px(e,n,a){Yi.L(e,n,a);var s=Kr;if(s&&e&&n){var c='link[rel="preload"][as="'+An(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+An(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+An(a.imageSizes)+'"]')):c+='[href="'+An(e)+'"]';var f=c;switch(n){case"style":f=Qr(e);break;case"script":f=Jr(e)}fi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),bn(n,"link",e),je(n),s.head.appendChild(n)))}}function Bx(e,n){Yi.m(e,n);var a=Kr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+An(s)+'"][href="'+An(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(e)}if(!fi.has(f)&&(e=x({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),bn(s,"link",e),je(s),a.head.appendChild(s)}}}function Ix(e,n,a){Yi.S(e,n,a);var s=Kr;if(s&&e){var c=Ke(s).hoistableStyles,f=Qr(e);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(vo(f)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Rf(e,a);var F=_=s.createElement("link");je(F),bn(F,"link",e),F._p=new Promise(function($,pe){F.onload=$,F.onerror=pe}),F.addEventListener("load",function(){E.loading|=1}),F.addEventListener("error",function(){E.loading|=2}),E.loading|=4,zl(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function Fx(e,n){Yi.X(e,n);var a=Kr;if(a&&e){var s=Ke(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=x({src:e,async:!0},n),(n=fi.get(c))&&Cf(e,n),f=a.createElement("script"),je(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Hx(e,n){Yi.M(e,n);var a=Kr;if(a&&e){var s=Ke(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Cf(e,n),f=a.createElement("script"),je(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function ig(e,n,a,s){var c=(c=Ee.current)?Ol(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=Ke(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qr(a.href);var f=Ke(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(vo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Gx(c,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=Ke(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qr(e){return'href="'+An(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function ag(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Gx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),bn(n,"link",a),je(n),e.head.appendChild(n))}function Jr(e){return'[src="'+An(e)+'"]'}function _o(e){return"script[async]"+e}function rg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+An(a.href)+'"]');if(s)return n.instance=s,je(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),je(s),bn(s,"style",c),zl(s,a.precedence,e),n.instance=s;case"stylesheet":c=Qr(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,je(f),f;s=ag(a),(c=fi.get(c))&&Rf(s,c),f=(e.ownerDocument||e).createElement("link"),je(f);var _=f;return _._p=new Promise(function(E,F){_.onload=E,_.onerror=F}),bn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,e),n.instance=f;case"script":return f=Jr(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,je(c),c):(s=a,(c=fi.get(f))&&(s=x({},a),Cf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),je(c),bn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,e));return n.instance}function zl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pl=null;function sg(e,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[oe]||f[$t]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function og(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Vx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Qr(s.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Bl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,je(f);return}f=n.ownerDocument||n,s=ag(s),(c=fi.get(c))&&Rf(s,c),f=f.createElement("link"),je(f);var _=f;_._p=new Promise(function(E,F){_.onload=E,_.onerror=F}),bn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Bl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Df=0;function jx(e,n){return e.stylesheets&&e.count===0&&Fl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Fl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Df===0&&(Df=62500*Ex());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Fl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Df?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Bl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Il=null;function Fl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Il=new Map,n.forEach(Xx,e),Il=null,Bl.call(e))}function Xx(e,n){if(!(n.state.loading&4)){var a=Il.get(e);if(a)var s=a.get(null);else{a=new Map,Il.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=Bl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:C,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Wx(e,n,a,s,c,f,_,E,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function cg(e,n,a,s,c,f,_,E,F,$,pe,xe){return e=new Wx(e,n,a,_,F,$,pe,xe,E),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=lu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},du(f),e}function ug(e){return e?(e=Cr,e):Cr}function fg(e,n,a,s,c,f){c=ug(c),s.context===null?s.context=c:s.pendingContext=c,s=_a(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=xa(e,s,n),a!==null&&(Gn(a,e,n),Ks(a,e,n))}function dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lf(e,n){dg(e,n),(e=e.alternate)&&dg(e,n)}function hg(e){if(e.tag===13||e.tag===31){var n=Qa(e,67108864);n!==null&&Gn(n,e,67108864),Lf(e,67108864)}}function pg(e){if(e.tag===13||e.tag===31){var n=ei();n=Cs(n);var a=Qa(e,n);a!==null&&Gn(a,e,n),Lf(e,n)}}var Hl=!0;function qx(e,n,a,s){var c=z.T;z.T=null;var f=q.p;try{q.p=2,Nf(e,n,a,s)}finally{q.p=f,z.T=c}}function Yx(e,n,a,s){var c=z.T;z.T=null;var f=q.p;try{q.p=8,Nf(e,n,a,s)}finally{q.p=f,z.T=c}}function Nf(e,n,a,s){if(Hl){var c=Uf(s);if(c===null)_f(e,n,s,Gl,a),gg(e,s);else if(Kx(c,e,n,a,s))s.stopPropagation();else if(gg(e,s),n&4&&-1<Zx.indexOf(e)){for(;c!==null;){var f=He(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var F=1<<31-Ye(_);E.entanglements[1]|=F,_&=~F}Di(f),(Mt&6)===0&&(Ml=O()+500,ho(0))}}break;case 31:case 13:E=Qa(f,2),E!==null&&Gn(E,f,2),Tl(),Lf(f,2)}if(f=Uf(s),f===null&&_f(e,n,s,Gl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else _f(e,n,s,null,a)}}function Uf(e){return e=Oc(e),Of(e)}var Gl=null;function Of(e){if(Gl=null,e=Ne(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Gl=e,null}function mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case he:return 2;case be:return 8;case De:case Fe:return 32;case Se:return 268435456;default:return 32}default:return 32}}var zf=!1,Da=null,La=null,Na=null,yo=new Map,So=new Map,Ua=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gg(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function bo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=He(n),n!==null&&hg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Kx(e,n,a,s,c){switch(n){case"focusin":return Da=bo(Da,e,n,a,s,c),!0;case"dragenter":return La=bo(La,e,n,a,s,c),!0;case"mouseover":return Na=bo(Na,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,bo(yo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,bo(So.get(f)||null,e,n,a,s,c)),!0}return!1}function vg(e){var n=Ne(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,qa(e.priority,function(){pg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,qa(e.priority,function(){pg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Uf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Uc=s,a.target.dispatchEvent(s),Uc=null}else return n=He(a),n!==null&&hg(n),e.blockedOn=a,!1;n.shift()}return!0}function _g(e,n,a){Vl(e)&&a.delete(n)}function Qx(){zf=!1,Da!==null&&Vl(Da)&&(Da=null),La!==null&&Vl(La)&&(La=null),Na!==null&&Vl(Na)&&(Na=null),yo.forEach(_g),So.forEach(_g)}function kl(e,n){e.blockedOn===n&&(e.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Qx)))}var jl=null;function xg(e){jl!==e&&(jl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===e&&(jl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Of(s||a)===null)continue;break}var f=He(a);f!==null&&(e.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function $r(e){function n(F){return kl(F,e)}Da!==null&&kl(Da,e),La!==null&&kl(La,e),Na!==null&&kl(Na,e),yo.forEach(n),So.forEach(n);for(var a=0;a<Ua.length;a++){var s=Ua[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[Tn]||null;if(typeof f=="function")_||xg(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[Tn]||null)E=_.formAction;else if(Of(c)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),xg(a)}}}function yg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pf(e){this._internalRoot=e}Xl.prototype.render=Pf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();fg(a,s,e,n,null,null)},Xl.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fg(e.current,2,null,e,null,null),Tl(),n[la]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&vg(e)}};var Sg=t.version;if(Sg!=="19.2.1")throw Error(r(527,Sg,"19.2.1"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Jx={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Qe=Wl.inject(Jx),Oe=Wl}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Rp,f=Cp,_=Dp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=cg(e,1,!1,null,null,a,s,null,c,f,_,yg),e[la]=n.current,vf(e),new Pf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Rp,_=Cp,E=Dp,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=cg(e,1,!0,n,a??null,s,c,F,f,_,E,yg),n.context=ug(null),a=n.current,s=ei(),s=Cs(s),c=_a(s),c.callback=null,xa(a,c,s),a=s,n.current.lanes=a,Zt(n,a),Di(n),e[la]=n.current,vf(e),new Xl(n)},Eo.version="19.2.1",Eo}var Lg;function ly(){if(Lg)return Ff.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ff.exports=oy(),Ff.exports}var cy=ly();const uy=ov(cy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dy=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Ng=o=>{const t=dy(o);return t.charAt(0).toUpperCase()+t.slice(1)},cv=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),hy=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var py={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=ke.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>ke.createElement("svg",{ref:m,...py,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:cv("lucide",l),...!u&&!hy(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>ke.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(o,t)=>{const i=ke.forwardRef(({className:r,...l},u)=>ke.createElement(my,{ref:u,iconNode:t,className:cv(`lucide-${fy(Ng(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Ng(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],vy=Vt("activity",gy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xy=Vt("arrow-right",_y);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],uv=Vt("arrow-up-right",yy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],by=Vt("arrow-up",Sy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Ey=Vt("chart-column",My);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ay=Vt("check",Ty);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ry=Vt("chevron-down",wy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Dy=Vt("copy",Cy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],fv=Vt("cpu",Ly);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Uy=Vt("globe",Ny);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],zy=Vt("instagram",Oy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],By=Vt("linkedin",Py);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Fy=Vt("map",Iy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Gy=Vt("menu",Hy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ky=Vt("message-square",Vy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Xy=Vt("network",jy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],qy=Vt("radio",Wy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Zy=Vt("scan",Yy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Qy=Vt("star",Ky);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$y=Vt("target",Jy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],dv=Vt("terminal",eS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],nS=Vt("twitter",tS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],aS=Vt("wifi",iS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sS=Vt("x",rS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],hv=Vt("zap",oS);class lS{constructor(){this.ctx=null,this.gainNode=null,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.ctx.createGain(),this.gainNode.connect(this.ctx.destination),this.gainNode.gain.value=.04,this.initialized=!0}catch(t){console.error("Audio init failed",t)}}playHover(){if(this.initialized||this.init(),!this.ctx||!this.gainNode)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2e3,t.connect(r),r.connect(i),i.connect(this.gainNode),t.type="sine",t.frequency.setValueAtTime(1e3,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(500,this.ctx.currentTime+.03),i.gain.setValueAtTime(.2,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.03),t.start(),t.stop(this.ctx.currentTime+.04)}playClick(){if(this.initialized||this.init(),!this.ctx||!this.gainNode)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1e3,t.connect(r),r.connect(i),i.connect(this.gainNode),t.type="triangle",t.frequency.setValueAtTime(300,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1),i.gain.setValueAtTime(.4,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.start(),t.stop(this.ctx.currentTime+.12)}}const Xt=new lS,cS=()=>{if(typeof document>"u")return;const o="star-border-styles";if(document.getElementById(o))return;const t=document.createElement("style");t.id=o,t.textContent=`
    .star-border-container {
      position: relative;
      display: inline-block;
      overflow: hidden;
      /* borderRadius removed for sharp edges */
      z-index: 1;
    }
    
    .border-gradient-bottom,
    .border-gradient-top {
      position: absolute;
      width: 300%;
      aspect-ratio: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      animation: star-border-rotate linear infinite;
      opacity: 1;
    }

    .border-gradient-top {
      animation-delay: -3s;
    }

    .inner-content {
      position: relative;
      background: #050505; 
      z-index: 2;
      /* Sharp edges for inner content */
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      margin: 1px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes star-border-rotate {
      from {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `,document.head.appendChild(t)};typeof document<"u"&&cS();const uS=({as:o,className:t="",color:i="#DE69CB",speed:r="4s",thickness:l=1,children:u,onMouseEnter:h,onClick:d,...m})=>{const p=o||"button";return M.jsxs(p,{className:`star-border-container ${t}`,onMouseEnter:g=>{Xt.playHover(),h&&h(g)},onClick:g=>{Xt.playClick(),d&&d(g)},...m,children:[M.jsx("div",{className:"border-gradient-bottom",style:{background:`radial-gradient(circle, ${i}, transparent 10%)`,animationDuration:r}}),M.jsx("div",{className:"border-gradient-top",style:{background:`radial-gradient(circle, ${i}, transparent 10%)`,animationDuration:r}}),M.jsx("div",{className:"inner-content",children:u})]})},fS=({className:o=""})=>M.jsxs("div",{className:`flex items-center gap-4 ${o}`,children:[M.jsx("div",{className:"relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-neon border-2 border-brand-neon shadow-[0_0_20px_rgba(222,105,203,0.4)] transition-transform duration-300 hover:scale-105",children:M.jsx("span",{className:"font-black text-black text-xl tracking-tighter",children:"HD"})}),M.jsxs("span",{className:"font-bold text-2xl md:text-3xl tracking-tight text-white hidden md:block",children:["HED",M.jsx("span",{className:"text-brand-neon",children:"."})]})]}),dS=()=>{const[o,t]=ke.useState(!1),[i,r]=ke.useState(!1);ke.useEffect(()=>{const u=()=>{r(window.scrollY>20)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]);const l=(u,h)=>{if(Xt.playClick(),u.preventDefault(),t(!1),h==="top"){window.scrollTo({top:0,behavior:"smooth"});return}const d=document.getElementById(h);if(d){const p=document.body.getBoundingClientRect().top,y=d.getBoundingClientRect().top-p-120;window.scrollTo({top:y,behavior:"smooth"})}};return M.jsxs(M.Fragment,{children:[M.jsxs("header",{className:"fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",children:[M.jsxs("div",{className:`hidden md:flex items-center justify-between px-8 py-1.5 border-b border-white/10 transition-all duration-300 ${i?"bg-[#030303] text-gray-400":"bg-[#030303]/50 backdrop-blur-md text-gray-300"}`,children:[M.jsxs("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Uy,{size:10,className:"text-brand-cyan"}),M.jsx("span",{children:"Global Agency"})]}),M.jsx("div",{className:"w-px h-3 bg-white/20"}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(aS,{size:10,className:"text-brand-neon"}),M.jsx("span",{children:"Fast Response"})]})]}),M.jsxs("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase",children:[M.jsxs("div",{className:"flex items-center gap-2 text-brand-neon",children:[M.jsx(vy,{size:10,className:"animate-pulse"}),M.jsx("span",{children:"Accepting New Clients"})]}),M.jsx("div",{className:"w-px h-3 bg-white/20"}),M.jsxs("div",{className:"text-gray-500",children:["Availability: ",M.jsx("span",{className:"text-white animate-pulse",children:"Limited"})]})]})]}),M.jsx("div",{className:`
            border-b border-white/10
            transition-all duration-300
            ${i?"bg-[#030303]/95 backdrop-blur-xl py-3 shadow-2xl":"bg-transparent py-4 md:py-5"}
          `,children:M.jsxs("div",{className:"max-w-[98%] mx-auto px-4 md:px-8 flex items-center justify-between relative",children:[M.jsx("div",{className:"cursor-pointer flex items-center shrink-0 z-20",onClick:u=>l(u,"top"),onMouseEnter:()=>Xt.playHover(),children:M.jsx(fS,{})}),M.jsx("nav",{className:"hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10",children:["Services","Process","About"].map(u=>M.jsxs("a",{href:`#${u.toLowerCase()}`,onClick:h=>l(h,u.toLowerCase()),onMouseEnter:()=>Xt.playHover(),className:"group relative px-2 py-1 text-xs lg:text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.15em] font-mono",children:[M.jsx("span",{className:"absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black",children:"["}),u,M.jsx("span",{className:"absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black",children:"]"}),M.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-brand-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"})]},u))}),M.jsxs("div",{className:"flex items-center gap-6 shrink-0 z-20",children:[M.jsx("div",{className:"hidden md:block",children:M.jsx(uS,{as:"a",href:"#contact",onClick:u=>l(u,"contact"),onMouseEnter:()=>Xt.playHover(),color:"#DE69CB",speed:"4s",className:"group",children:M.jsxs("span",{className:"px-5 py-2.5 lg:px-6 lg:py-3 font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white group-hover:text-brand-neon transition-colors flex items-center gap-3",children:["Start Project ",M.jsx(uv,{size:16})]})})}),M.jsx("button",{className:"md:hidden w-12 h-12 flex items-center justify-center border border-white/20 bg-black text-white active:scale-95 transition-all hover:border-brand-neon",onClick:()=>{Xt.playClick(),t(!o)},onMouseEnter:()=>Xt.playHover(),children:o?M.jsx(sS,{size:24}):M.jsx(Gy,{size:24})})]})]})})]}),M.jsxs("div",{className:`
          fixed inset-0 z-[9998] bg-[#030303] flex flex-col items-center justify-center gap-10
          transition-all duration-300
          ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}
        `,children:[M.jsx("div",{className:"absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"}),["Services","Process","About","Contact"].map((u,h)=>M.jsxs("a",{href:`#${u.toLowerCase()}`,onClick:d=>l(d,u.toLowerCase()),onMouseEnter:()=>Xt.playHover(),className:"relative text-5xl md:text-7xl font-black text-white uppercase tracking-tighter hover:text-brand-neon transition-all",children:[M.jsxs("span",{className:"text-gray-800 mr-4 font-mono text-2xl align-top mt-2 inline-block",children:["0",h+1]}),u]},u)),M.jsx("div",{className:"mt-12 w-full max-w-xs px-6",children:M.jsx("a",{href:"#contact",onClick:u=>l(u,"contact"),onMouseEnter:()=>Xt.playHover(),className:"flex items-center justify-center w-full py-5 bg-brand-neon text-black font-black uppercase tracking-widest text-sm border-2 border-brand-neon hover:bg-black hover:text-brand-neon transition-all duration-300",children:"Start Project"})})]})]})},pv=({children:o,className:t="",onMouseEnter:i,onClick:r,...l})=>M.jsxs("button",{className:`
        relative group overflow-hidden px-10 py-5 
        bg-brand-neon/5 border border-brand-neon text-brand-neon
        font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em]
        transition-all duration-500 ease-out
        shadow-[0_0_20px_rgba(222,105,203,0.2)]
        hover:shadow-[0_0_60px_rgba(222,105,203,0.6),inset_0_0_20px_rgba(222,105,203,0.4)]
        active:scale-[0.98]
        ${t}
      `,onMouseEnter:u=>{Xt.playHover(),i&&i(u)},onClick:u=>{Xt.playClick(),r&&r(u)},...l,children:[M.jsx("div",{className:"absolute inset-0 bg-brand-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"}),M.jsx("div",{className:"absolute inset-0 border border-white/50 scale-[0.95] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out z-10"}),M.jsx("span",{className:"relative z-20 flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-white group-hover:tracking-[0.35em] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]",children:o}),M.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white opacity-100 z-20"}),M.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white opacity-100 z-20"}),M.jsx("div",{className:"absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 pointer-events-none"})]}),cn=({children:o,width:t="fit-content",delay:i=0})=>{const r=ke.useRef(null),[l,u]=ke.useState(!1);return ke.useEffect(()=>{const h=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(u(!0),h.disconnect())})},{threshold:.1,rootMargin:"0px 0px -20px 0px"});return r.current&&h.observe(r.current),()=>{r.current&&h.unobserve(r.current)}},[]),M.jsx("div",{ref:r,style:{width:t},className:"relative",children:M.jsx("div",{className:`transform transition-all duration-[1200ms] cubic-bezier(0.2, 1, 0.3, 1) ${l?"opacity-100 translate-y-0 blur-0":"opacity-0 translate-y-12 blur-sm"}`,style:{transitionDelay:`${i}ms`},children:o})})},Ug="ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*!<>[]{}".split(""),hS=({text:o,duration:t=800,className:i="",animateOnHover:r=!0,delay:l=0})=>{const[u,h]=ke.useState(o),[d,m]=ke.useState(!1),p=ke.useRef(0);ke.useRef(!0);const g=()=>{p.current=0,m(!0)};return ke.useEffect(()=>{const x=setTimeout(()=>{g()},l);return()=>clearTimeout(x)},[l]),ke.useEffect(()=>{if(!d)return;const x=setInterval(()=>{p.current<o.length?(h(y=>y.split("").map((b,A)=>b===" "?b:A<p.current?o[A]:Ug[Math.floor(Math.random()*Ug.length)]).join("")),p.current=p.current+.1):(h(o),clearInterval(x),m(!1))},t/(o.length*10));return()=>clearInterval(x)},[o,t,d]),M.jsx("span",{className:`inline-block ${i}`,onMouseEnter:r?g:void 0,children:u})},pS=()=>{const[o,t]=ke.useState({x:0,y:0});ke.useEffect(()=>{const r=l=>{const u=l.clientX/window.innerWidth*2-1,h=l.clientY/window.innerHeight*2-1;t({x:u,y:h})};return window.addEventListener("mousemove",r),()=>window.removeEventListener("mousemove",r)},[]);const i=()=>{const r=document.getElementById("contact");if(r){const u=document.body.getBoundingClientRect().top,m=r.getBoundingClientRect().top-u-100;window.scrollTo({top:m,behavior:"smooth"})}};return M.jsx("section",{className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-transparent pt-40 md:pt-20 perspective-1000",children:M.jsx("div",{className:"max-w-[95vw] md:max-w-[90vw] mx-auto px-4 md:px-6 relative z-10 w-full",children:M.jsxs("div",{className:"flex flex-col items-center justify-center text-center space-y-12",children:[M.jsxs("div",{className:"relative w-full",children:[M.jsxs("div",{className:"relative group mb-4 transition-transform duration-100 ease-out will-change-transform",style:{transform:`translate(${o.x*-20}px, ${o.y*-10}px)`},children:[M.jsx(cn,{width:"100%",children:M.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[M.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent to-gray-500"}),M.jsx("h2",{className:"text-xl md:text-3xl font-bold text-gray-400 tracking-[0.2em] uppercase drop-shadow-md font-mono",children:"We handle the"}),M.jsx("div",{className:"h-px w-12 bg-gradient-to-l from-transparent to-gray-500"})]})}),M.jsx(cn,{width:"100%",delay:100,children:M.jsx("div",{className:"relative mix-blend-normal flex justify-center",children:M.jsx("div",{className:"relative text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]",children:M.jsx(hS,{text:"NOISE",className:"text-white dark:text-white",duration:1e3})})})})]}),M.jsxs("div",{className:"relative mt-4 md:mt-8 transition-transform duration-100 ease-out will-change-transform",style:{transform:`translate(${o.x*20}px, ${o.y*10}px)`},children:[M.jsx(cn,{width:"100%",delay:300,children:M.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[M.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent to-brand-neon/50"}),M.jsx("h2",{className:"text-xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-md font-mono",children:"You handle the"}),M.jsx("div",{className:"h-px w-12 bg-gradient-to-l from-transparent to-brand-neon/50"})]})}),M.jsx(cn,{width:"100%",delay:400,children:M.jsxs("h1",{className:"relative z-10 text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white mix-blend-normal drop-shadow-[0_0_30px_rgba(222,105,203,0.3)]",children:["BUSINESS",M.jsx("span",{className:"text-brand-neon",children:"."}),M.jsx("div",{className:"absolute inset-0 bg-brand-neon/20 blur-[100px] md:blur-[150px] -z-10 rounded-full opacity-50 animate-pulse-slow"})]})})]})]}),M.jsx(cn,{delay:600,children:M.jsx("div",{className:"mt-16 w-full max-w-4xl flex flex-col items-center gap-8",children:M.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left relative z-10",children:M.jsxs("div",{className:"max-w-lg text-center",children:[M.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[M.jsx("div",{className:"w-2 h-2 bg-brand-neon rounded-full animate-pulse shadow-[0_0_10px_#DE69CB]"}),M.jsx("span",{className:"font-mono text-[10px] text-brand-neon tracking-[0.2em] uppercase",children:"Agency Status: Active"})]}),M.jsxs("p",{className:"text-white font-medium text-xl md:text-2xl mb-10 leading-relaxed",children:["You close the deals. ",M.jsx("span",{className:"text-brand-cyan text-glow",children:"We drive the demand."})]}),M.jsx(pv,{onClick:i,className:"w-full md:w-auto mx-auto hover:scale-105 transition-transform duration-300",children:"START PROJECT"})]})})})})]})})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="160",mS=0,Og=1,gS=2,mv=1,vS=2,ea=3,ja=0,jn=1,ta=2,Ga=0,_s=1,bd=2,zg=3,Pg=4,_S=5,gr=100,xS=101,yS=102,Bg=103,Ig=104,SS=200,bS=201,MS=202,ES=203,Md=204,Ed=205,TS=206,AS=207,wS=208,RS=209,CS=210,DS=211,LS=212,NS=213,US=214,OS=0,zS=1,PS=2,xc=3,BS=4,IS=5,FS=6,HS=7,gv=0,GS=1,VS=2,Va=0,kS=1,jS=2,XS=3,WS=4,qS=5,YS=6,vv=300,Ss=301,bs=302,Td=303,Ad=304,Ac=306,wd=1e3,On=1001,Rd=1002,Mn=1003,Fg=1004,kf=1005,Dn=1006,ZS=1007,Lo=1008,ka=1009,KS=1010,QS=1011,Bd=1012,_v=1013,Ha=1014,na=1015,Ms=1016,xv=1017,yv=1018,_r=1020,JS=1021,hi=1023,$S=1024,eb=1025,xr=1026,Es=1027,tb=1028,Sv=1029,nb=1030,bv=1031,Mv=1033,jf=33776,Xf=33777,Wf=33778,qf=33779,Hg=35840,Gg=35841,Vg=35842,kg=35843,Ev=36196,jg=37492,Xg=37496,Wg=37808,qg=37809,Yg=37810,Zg=37811,Kg=37812,Qg=37813,Jg=37814,$g=37815,e0=37816,t0=37817,n0=37818,i0=37819,a0=37820,r0=37821,Yf=36492,s0=36494,o0=36495,ib=36283,l0=36284,c0=36285,u0=36286,Tv=3e3,yr=3001,ab=3200,rb=3201,sb=0,ob=1,pi="",En="srgb",ra="srgb-linear",Id="display-p3",wc="display-p3-linear",yc="linear",Gt="srgb",Sc="rec709",bc="p3",es=7680,f0=519,lb=512,cb=513,ub=514,Av=515,fb=516,db=517,hb=518,pb=519,d0=35044,h0="300 es",Cd=1035,ia=2e3,Mc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,Dd=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function kn(o,t,i){return Math.max(t,Math.min(i,o))}function mb(o,t){return(o%t+t)%t}function Kf(o,t,i){return(1-i)*o+i*t}function p0(o){return(o&o-1)===0&&o!==0}function Ld(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class st{constructor(t=0,i=0){st.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(kn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(t,i,r,l,u,h,d,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],y=r[2],b=r[5],A=r[8],T=l[0],S=l[3],v=l[6],B=l[1],C=l[4],P=l[7],Y=l[2],H=l[5],I=l[8];return u[0]=h*T+d*B+m*Y,u[3]=h*S+d*C+m*H,u[6]=h*v+d*P+m*I,u[1]=p*T+g*B+x*Y,u[4]=p*S+g*C+x*H,u[7]=p*v+g*P+x*I,u[2]=y*T+b*B+A*Y,u[5]=y*S+b*C+A*H,u[8]=y*v+b*P+A*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,y=d*m-g*u,b=p*u-h*m,A=i*x+r*y+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(l*p-g*r)*T,t[2]=(d*r-l*h)*T,t[3]=y*T,t[4]=(g*i-l*m)*T,t[5]=(l*u-d*i)*T,t[6]=b*T,t[7]=(r*m-p*i)*T,t[8]=(h*i-r*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qf.makeScale(t,i)),this}rotate(t){return this.premultiply(Qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new pt;function wv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function gb(){const o=Ec("canvas");return o.style.display="block",o}const m0={};function Do(o){o in m0||(m0[o]=!0,console.warn(o))}const g0=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),v0=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[ra]:{transfer:yc,primaries:Sc,toReference:o=>o,fromReference:o=>o},[En]:{transfer:Gt,primaries:Sc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[wc]:{transfer:yc,primaries:bc,toReference:o=>o.applyMatrix3(v0),fromReference:o=>o.applyMatrix3(g0)},[Id]:{transfer:Gt,primaries:bc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(v0),fromReference:o=>o.applyMatrix3(g0).convertLinearToSRGB()}},vb=new Set([ra,wc]),Ot={enabled:!0,_workingColorSpace:ra,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!vb.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const r=ql[t].toReference,l=ql[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return ql[o].primaries},getTransfer:function(o){return o===pi?yc:ql[o].transfer}};function xs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class Rv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ts===void 0&&(ts=Ec("canvas")),ts.width=t.width,ts.height=t.height;const r=ts.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ts}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ec("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=xs(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xs(i[r]/255)*255):i[r]=xs(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _b=0;class Cv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Uo(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push($f(l[h].image)):u.push($f(l[h]))}else u=$f(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Rv.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xb=0;class Xn extends As{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=On,l=On,u=Dn,h=Lo,d=hi,m=ka,p=Xn.DEFAULT_ANISOTROPY,g=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Uo(),this.name="",this.source=new Cv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===yr?En:pi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wd:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case Rd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wd:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case Rd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===En?yr:Tv}set encoding(t){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===yr?En:pi}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=vv;Xn.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,r=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],y=m[1],b=m[5],A=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-T)<.01&&Math.abs(A-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+T)<.1&&Math.abs(A+S)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,P=(b+1)/2,Y=(v+1)/2,H=(g+y)/4,I=(x+T)/4,_e=(A+S)/4;return C>P&&C>Y?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=H/r,u=I/r):P>Y?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=H/l,u=_e/l):Y<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),r=I/u,l=_e/u),this.set(r,l,u,i),this}let B=Math.sqrt((S-A)*(S-A)+(x-T)*(x-T)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(S-A)/B,this.y=(x-T)/B,this.z=(y-g)/B,this.w=Math.acos((p+b+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yb extends As{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:1};r.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===yr?En:pi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(t,i,r=1){(this.width!==t||this.height!==i||this.depth!==r)&&(this.width=t,this.height=i,this.depth=r,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Cv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xa extends yb{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Dv extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sb extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const y=u[h+0],b=u[h+1],A=u[h+2],T=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=b,t[i+2]=A,t[i+3]=T;return}if(x!==T||m!==y||p!==b||g!==A){let S=1-d;const v=m*y+p*b+g*A+x*T,B=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const Y=Math.sqrt(C),H=Math.atan2(Y,v*B);S=Math.sin(S*H)/Y,d=Math.sin(d*H)/Y}const P=d*B;if(m=m*S+y*P,p=p*S+b*P,g=g*S+A*P,x=x*S+T*P,S===1-d){const Y=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=Y,p*=Y,g*=Y,x*=Y}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],y=u[h+1],b=u[h+2],A=u[h+3];return t[i]=d*A+g*x+m*b-p*y,t[i+1]=m*A+g*y+p*x-d*b,t[i+2]=p*A+g*b+d*y-m*x,t[i+3]=g*A-d*x-m*y-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),y=m(r/2),b=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=y*g*x+p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x-y*b*A;break;case"YXZ":this._x=y*g*x+p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x+y*b*A;break;case"ZXY":this._x=y*g*x-p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x-y*b*A;break;case"ZYX":this._x=y*g*x-p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x+y*b*A;break;case"YZX":this._x=y*g*x+p*b*A,this._y=p*b*x+y*g*A,this._z=p*g*A-y*b*x,this._w=p*g*x-y*b*A;break;case"XZY":this._x=y*g*x-p*b*A,this._y=p*b*x-y*g*A,this._z=p*g*A+y*b*x,this._w=p*g*x+y*b*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=r+d+x;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(g-m)*b,this._y=(u-p)*b,this._z=(h-l)*b}else if(r>d&&r>x){const b=2*Math.sqrt(1+r-d-x);this._w=(g-m)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(u+p)/b}else if(d>x){const b=2*Math.sqrt(1+d-r-x);this._w=(u-p)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+x-r-d);this._w=(h-l)/b,this._x=(u+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const b=1-i;return this._w=b*h+i*this._w,this._x=b*r+i*this._x,this._y=b*l+i*this._y,this._z=b*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(t=0,i=0,r=0){re.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(_0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(_0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(kn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new re,_0=new Oo;class zo{constructor(t=new re(1/0,1/0,1/0),i=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),Zl.subVectors(this.max,Ao),ns.subVectors(t.a,Ao),is.subVectors(t.b,Ao),as.subVectors(t.c,Ao),za.subVectors(is,ns),Pa.subVectors(as,is),ur.subVectors(ns,as);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-ur.z,ur.y,za.z,0,-za.x,Pa.z,0,-Pa.x,ur.z,0,-ur.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-ur.y,ur.x,0];return!td(i,ns,is,as,Zl)||(i=[1,0,0,0,1,0,0,0,1],!td(i,ns,is,as,Zl))?!1:(Kl.crossVectors(za,Pa),i=[Kl.x,Kl.y,Kl.z],td(i,ns,is,as,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new re,new re,new re,new re,new re,new re,new re,new re],xi=new re,Yl=new zo,ns=new re,is=new re,as=new re,za=new re,Pa=new re,ur=new re,Ao=new re,Zl=new re,Kl=new re,fr=new re;function td(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){fr.fromArray(o,u);const d=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),m=t.dot(fr),p=i.dot(fr),g=r.dot(fr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const bb=new zo,wo=new re,nd=new re;class Rc{constructor(t=new re,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):bb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(nd)),this.expandByPoint(wo.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new re,id=new re,Ql=new re,Ba=new re,ad=new re,Jl=new re,rd=new re;class Lv{constructor(t=new re,i=new re(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){id.copy(t).add(i).multiplyScalar(.5),Ql.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(id);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Ba.dot(this.direction),m=-Ba.dot(Ql),p=Ba.lengthSq(),g=Math.abs(1-h*h);let x,y,b,A;if(g>0)if(x=h*m-d,y=h*d-m,A=u*g,x>=0)if(y>=-A)if(y<=A){const T=1/g;x*=T,y*=T,b=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;else y<=-A?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p):y<=A?(x=0,y=Math.min(Math.max(-u,-m),u),b=y*(y+2*m)+p):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-m),u),b=-x*x+y*(y+2*m)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),b=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(id).addScaledVector(Ql,y),b}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){ad.subVectors(i,t),Jl.subVectors(r,t),rd.crossVectors(ad,Jl);let h=this.direction.dot(rd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(Jl.crossVectors(Ba,Jl));if(m<0)return null;const p=d*this.direction.dot(ad.cross(Ba));if(p<0||m+p>h)return null;const g=-d*Ba.dot(rd);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn{constructor(t,i,r,l,u,h,d,m,p,g,x,y,b,A,T,S){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,y,b,A,T,S)}set(t,i,r,l,u,h,d,m,p,g,x,y,b,A,T,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=y,v[3]=b,v[7]=A,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),u=1/rs.setFromMatrixColumn(t,1).length(),h=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=h*g,b=h*x,A=d*g,T=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=b+A*p,i[5]=y-T*p,i[9]=-d*m,i[2]=T-y*p,i[6]=A+b*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,b=m*x,A=p*g,T=p*x;i[0]=y+T*d,i[4]=A*d-b,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=b*d-A,i[6]=T+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,b=m*x,A=p*g,T=p*x;i[0]=y-T*d,i[4]=-h*x,i[8]=A+b*d,i[1]=b+A*d,i[5]=h*g,i[9]=T-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,b=h*x,A=d*g,T=d*x;i[0]=m*g,i[4]=A*p-b,i[8]=y*p+T,i[1]=m*x,i[5]=T*p+y,i[9]=b*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,b=h*p,A=d*m,T=d*p;i[0]=m*g,i[4]=T-y*x,i[8]=A*x+b,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=b*x+A,i[10]=y-T*x}else if(t.order==="XZY"){const y=h*m,b=h*p,A=d*m,T=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+T,i[5]=h*g,i[9]=b*x-A,i[2]=A*x-b,i[6]=d*g,i[10]=T*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mb,t,Eb)}lookAt(t,i,r){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ia.crossVectors(r,ti),Ia.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ia.crossVectors(r,ti)),Ia.normalize(),$l.crossVectors(ti,Ia),l[0]=Ia.x,l[4]=$l.x,l[8]=ti.x,l[1]=Ia.y,l[5]=$l.y,l[9]=ti.y,l[2]=Ia.z,l[6]=$l.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],y=r[9],b=r[13],A=r[2],T=r[6],S=r[10],v=r[14],B=r[3],C=r[7],P=r[11],Y=r[15],H=l[0],I=l[4],_e=l[8],D=l[12],U=l[1],ue=l[5],ge=l[9],Te=l[13],j=l[2],ie=l[6],z=l[10],q=l[14],K=l[3],fe=l[7],de=l[11],L=l[15];return u[0]=h*H+d*U+m*j+p*K,u[4]=h*I+d*ue+m*ie+p*fe,u[8]=h*_e+d*ge+m*z+p*de,u[12]=h*D+d*Te+m*q+p*L,u[1]=g*H+x*U+y*j+b*K,u[5]=g*I+x*ue+y*ie+b*fe,u[9]=g*_e+x*ge+y*z+b*de,u[13]=g*D+x*Te+y*q+b*L,u[2]=A*H+T*U+S*j+v*K,u[6]=A*I+T*ue+S*ie+v*fe,u[10]=A*_e+T*ge+S*z+v*de,u[14]=A*D+T*Te+S*q+v*L,u[3]=B*H+C*U+P*j+Y*K,u[7]=B*I+C*ue+P*ie+Y*fe,u[11]=B*_e+C*ge+P*z+Y*de,u[15]=B*D+C*Te+P*q+Y*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],y=t[10],b=t[14],A=t[3],T=t[7],S=t[11],v=t[15];return A*(+u*m*x-l*p*x-u*d*y+r*p*y+l*d*b-r*m*b)+T*(+i*m*b-i*p*y+u*h*y-l*h*b+l*p*g-u*m*g)+S*(+i*p*x-i*d*b-u*h*x+r*h*b+u*d*g-r*p*g)+v*(-l*d*g-i*m*x+i*d*y+l*h*x-r*h*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],y=t[10],b=t[11],A=t[12],T=t[13],S=t[14],v=t[15],B=x*S*p-T*y*p+T*m*b-d*S*b-x*m*v+d*y*v,C=A*y*p-g*S*p-A*m*b+h*S*b+g*m*v-h*y*v,P=g*T*p-A*x*p+A*d*b-h*T*b-g*d*v+h*x*v,Y=A*x*m-g*T*m-A*d*y+h*T*y+g*d*S-h*x*S,H=i*B+r*C+l*P+u*Y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=B*I,t[1]=(T*y*u-x*S*u-T*l*b+r*S*b+x*l*v-r*y*v)*I,t[2]=(d*S*u-T*m*u+T*l*p-r*S*p-d*l*v+r*m*v)*I,t[3]=(x*m*u-d*y*u-x*l*p+r*y*p+d*l*b-r*m*b)*I,t[4]=C*I,t[5]=(g*S*u-A*y*u+A*l*b-i*S*b-g*l*v+i*y*v)*I,t[6]=(A*m*u-h*S*u-A*l*p+i*S*p+h*l*v-i*m*v)*I,t[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*b+i*m*b)*I,t[8]=P*I,t[9]=(A*x*u-g*T*u-A*r*b+i*T*b+g*r*v-i*x*v)*I,t[10]=(h*T*u-A*d*u+A*r*p-i*T*p-h*r*v+i*d*v)*I,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*b-i*d*b)*I,t[12]=Y*I,t[13]=(g*T*l-A*x*l+A*r*y-i*T*y-g*r*S+i*x*S)*I,t[14]=(A*d*l-h*T*l-A*r*m+i*T*m+h*r*S-i*d*S)*I,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*y+i*d*y)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,y=u*p,b=u*g,A=u*x,T=h*g,S=h*x,v=d*x,B=m*p,C=m*g,P=m*x,Y=r.x,H=r.y,I=r.z;return l[0]=(1-(T+v))*Y,l[1]=(b+P)*Y,l[2]=(A-C)*Y,l[3]=0,l[4]=(b-P)*H,l[5]=(1-(y+v))*H,l[6]=(S+B)*H,l[7]=0,l[8]=(A+C)*I,l[9]=(S-B)*I,l[10]=(1-(y+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,g=1/h,x=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ia){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let b,A;if(d===ia)b=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Mc)b=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ia){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),y=(i+t)*p,b=(r+l)*g;let A,T;if(d===ia)A=(h+u)*x,T=-2*x;else if(d===Mc)A=u*x,T=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-b,m[2]=0,m[6]=0,m[10]=T,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new re,yi=new vn,Mb=new re(0,0,0),Eb=new re(1,1,1),Ia=new re,$l=new re,ti=new re,x0=new vn,y0=new Oo;class Cc{constructor(t=0,i=0,r=0,l=Cc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-kn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(kn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-kn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(kn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-kn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return x0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(x0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return y0.setFromEuler(this),this.setFromQuaternion(y0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cc.DEFAULT_ORDER="XYZ";class Nv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tb=0;const S0=new re,ss=new Oo,Qi=new vn,ec=new re,Ro=new re,Ab=new re,wb=new Oo,b0=new re(1,0,0),M0=new re(0,1,0),E0=new re(0,0,1),Rb={type:"added"},Cb={type:"removed"};class Wn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new re,i=new Cc,r=new Oo,l=new re(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new vn},normalMatrix:{value:new pt}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(b0,t)}rotateY(t){return this.rotateOnAxis(M0,t)}rotateZ(t){return this.rotateOnAxis(E0,t)}translateOnAxis(t,i){return S0.copy(t).applyQuaternion(this.quaternion),this.position.add(S0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(b0,t)}translateY(t){return this.translateOnAxis(M0,t)}translateZ(t){return this.translateOnAxis(E0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ec.copy(t):ec.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ro,ec,this.up):Qi.lookAt(ec,Ro,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Qi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Rb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Cb)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,Ab),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,wb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),y=h(t.skeletons),b=h(t.animations),A=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new re(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new re,Ji=new re,sd=new re,$i=new re,os=new re,ls=new re,T0=new re,od=new re,ld=new re,cd=new re;let tc=!1;class bi{constructor(t=new re,i=new re,r=new re){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Si.subVectors(l,i),Ji.subVectors(r,i),sd.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(Ji),m=Si.dot(sd),p=Ji.dot(Ji),g=Ji.dot(sd),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,b=(p*m-d*g)*y,A=(h*g-d*m)*y;return u.set(1-b-A,A,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(t,i,r,l,u,h,d,m){return tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tc=!0),this.getInterpolation(t,i,r,l,u,h,d,m)}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),Ji.subVectors(t,i),Si.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,l,u){return tc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tc=!0),bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}getInterpolation(t,i,r,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),od.subVectors(t,r);const m=os.dot(od),p=ls.dot(od);if(m<=0&&p<=0)return i.copy(r);ld.subVectors(t,l);const g=os.dot(ld),x=ls.dot(ld);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);cd.subVectors(t,u);const b=os.dot(cd),A=ls.dot(cd);if(A>=0&&b<=A)return i.copy(u);const T=b*p-m*A;if(T<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(ls,d);const S=g*A-b*x;if(S<=0&&x-g>=0&&b-A>=0)return T0.subVectors(u,l),d=(x-g)/(x-g+(b-A)),i.copy(l).addScaledVector(T0,d);const v=1/(S+T+y);return h=T*v,d=y*v,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},nc={h:0,s:0,l:0};function ud(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Et{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ot.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ot.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ot.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ot.workingColorSpace){if(t=mb(t,1),i=kn(i,0,1),r=kn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ud(h,u,t+1/3),this.g=ud(h,u,t),this.b=ud(h,u,t-1/3)}return Ot.toWorkingColorSpace(this,l),this}setStyle(t,i=En){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=En){const r=Uv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=Jf(t.r),this.g=Jf(t.g),this.b=Jf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return Ot.fromWorkingColorSpace(Cn.copy(this),t),Math.round(kn(Cn.r*255,0,255))*65536+Math.round(kn(Cn.g*255,0,255))*256+Math.round(kn(Cn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ot.workingColorSpace){Ot.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=En){Ot.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==En?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(nc);const r=Kf(Fa.h,nc.h,i),l=Kf(Fa.s,nc.s,i),u=Kf(Fa.l,nc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Et;Et.NAMES=Uv;let Db=0;class Po extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=_s,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Md&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ov extends Po{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new re,ic=new st;class Ti{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=d0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ic.fromBufferAttribute(this,i),ic.applyMatrix3(t),this.setXY(i,ic.x,ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==d0&&(t.usage=this.usage),t}}class zv extends Ti{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Pv extends Ti{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class aa extends Ti{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Lb=0;const di=new vn,fd=new Wn,cs=new re,ni=new zo,Co=new zo,mn=new re;class sa extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wv(t)?Pv:zv)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new pt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new aa(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new re,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(ni.min,Co.min),ni.expandByPoint(mn),mn.addVectors(ni.max,Co.max),ni.expandByPoint(mn)):(ni.expandByPoint(Co.min),ni.expandByPoint(Co.max))}ni.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(t,p),mn.add(cs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*d),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let U=0;U<d;U++)p[U]=new re,g[U]=new re;const x=new re,y=new re,b=new re,A=new st,T=new st,S=new st,v=new re,B=new re;function C(U,ue,ge){x.fromArray(l,U*3),y.fromArray(l,ue*3),b.fromArray(l,ge*3),A.fromArray(h,U*2),T.fromArray(h,ue*2),S.fromArray(h,ge*2),y.sub(x),b.sub(x),T.sub(A),S.sub(A);const Te=1/(T.x*S.y-S.x*T.y);isFinite(Te)&&(v.copy(y).multiplyScalar(S.y).addScaledVector(b,-T.y).multiplyScalar(Te),B.copy(b).multiplyScalar(T.x).addScaledVector(y,-S.x).multiplyScalar(Te),p[U].add(v),p[ue].add(v),p[ge].add(v),g[U].add(B),g[ue].add(B),g[ge].add(B))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let U=0,ue=P.length;U<ue;++U){const ge=P[U],Te=ge.start,j=ge.count;for(let ie=Te,z=Te+j;ie<z;ie+=3)C(r[ie+0],r[ie+1],r[ie+2])}const Y=new re,H=new re,I=new re,_e=new re;function D(U){I.fromArray(u,U*3),_e.copy(I);const ue=p[U];Y.copy(ue),Y.sub(I.multiplyScalar(I.dot(ue))).normalize(),H.crossVectors(_e,ue);const Te=H.dot(g[U])<0?-1:1;m[U*4]=Y.x,m[U*4+1]=Y.y,m[U*4+2]=Y.z,m[U*4+3]=Te}for(let U=0,ue=P.length;U<ue;++U){const ge=P[U],Te=ge.start,j=ge.count;for(let ie=Te,z=Te+j;ie<z;ie+=3)D(r[ie+0]),D(r[ie+1]),D(r[ie+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,b=r.count;y<b;y++)r.setXYZ(y,0,0,0);const l=new re,u=new re,h=new re,d=new re,m=new re,p=new re,g=new re,x=new re;if(t)for(let y=0,b=t.count;y<b;y+=3){const A=t.getX(y+0),T=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,y=new p.constructor(m.length*g);let b=0,A=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?b=m[T]*d.data.stride+d.offset:b=m[T]*g;for(let v=0;v<g;v++)y[A++]=p[b++]}return new Ti(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new sa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const y=p[g],b=t(y,r);m.push(b)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const b=p[x];g.push(b.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,b=x.length;y<b;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A0=new vn,dr=new Lv,ac=new Rc,w0=new re,us=new re,fs=new re,ds=new re,dd=new re,rc=new re,sc=new st,oc=new st,lc=new st,R0=new re,C0=new re,D0=new re,cc=new re,uc=new re;class Ei extends Wn{constructor(t=new sa,i=new Ov){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(dd.fromBufferAttribute(x,t),h?rc.addScaledVector(dd,g):rc.addScaledVector(dd.sub(i),g))}i.add(rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(u),dr.copy(t.ray).recast(t.near),!(ac.containsPoint(dr.origin)===!1&&(dr.intersectSphere(ac,w0)===null||dr.origin.distanceToSquared(w0)>(t.far-t.near)**2))&&(A0.copy(u).invert(),dr.copy(t.ray).applyMatrix4(A0),!(r.boundingBox!==null&&dr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,dr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,b=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,T=y.length;A<T;A++){const S=y[A],v=h[S.materialIndex],B=Math.max(S.start,b.start),C=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let P=B,Y=C;P<Y;P+=3){const H=d.getX(P),I=d.getX(P+1),_e=d.getX(P+2);l=fc(this,v,t,r,p,g,x,H,I,_e),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),T=Math.min(d.count,b.start+b.count);for(let S=A,v=T;S<v;S+=3){const B=d.getX(S),C=d.getX(S+1),P=d.getX(S+2);l=fc(this,h,t,r,p,g,x,B,C,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,T=y.length;A<T;A++){const S=y[A],v=h[S.materialIndex],B=Math.max(S.start,b.start),C=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let P=B,Y=C;P<Y;P+=3){const H=P,I=P+1,_e=P+2;l=fc(this,v,t,r,p,g,x,H,I,_e),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),T=Math.min(m.count,b.start+b.count);for(let S=A,v=T;S<v;S+=3){const B=S,C=S+1,P=S+2;l=fc(this,h,t,r,p,g,x,B,C,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Nb(o,t,i,r,l,u,h,d){let m;if(t.side===jn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===ja,d),m===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function fc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,us),o.getVertexPosition(m,fs),o.getVertexPosition(p,ds);const g=Nb(o,t,i,r,us,fs,ds,cc);if(g){l&&(sc.fromBufferAttribute(l,d),oc.fromBufferAttribute(l,m),lc.fromBufferAttribute(l,p),g.uv=bi.getInterpolation(cc,us,fs,ds,sc,oc,lc,new st)),u&&(sc.fromBufferAttribute(u,d),oc.fromBufferAttribute(u,m),lc.fromBufferAttribute(u,p),g.uv1=bi.getInterpolation(cc,us,fs,ds,sc,oc,lc,new st),g.uv2=g.uv1),h&&(R0.fromBufferAttribute(h,d),C0.fromBufferAttribute(h,m),D0.fromBufferAttribute(h,p),g.normal=bi.getInterpolation(cc,us,fs,ds,R0,C0,D0,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new re,materialIndex:0};bi.getNormal(us,fs,ds,x.normal),g.face=x}return g}class Bo extends sa{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let y=0,b=0;A("z","y","x",-1,-1,r,i,t,h,u,0),A("z","y","x",1,-1,r,i,-t,h,u,1),A("x","z","y",1,1,t,r,i,l,h,2),A("x","z","y",1,-1,t,r,-i,l,h,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new aa(p,3)),this.setAttribute("normal",new aa(g,3)),this.setAttribute("uv",new aa(x,2));function A(T,S,v,B,C,P,Y,H,I,_e,D){const U=P/I,ue=Y/_e,ge=P/2,Te=Y/2,j=H/2,ie=I+1,z=_e+1;let q=0,K=0;const fe=new re;for(let de=0;de<z;de++){const L=de*ue-Te;for(let X=0;X<ie;X++){const k=X*U-ge;fe[T]=k*B,fe[S]=L*C,fe[v]=j,p.push(fe.x,fe.y,fe.z),fe[T]=0,fe[S]=0,fe[v]=H>0?1:-1,g.push(fe.x,fe.y,fe.z),x.push(X/I),x.push(1-de/_e),q+=1}}for(let de=0;de<_e;de++)for(let L=0;L<I;L++){const X=y+L+ie*de,k=y+L+ie*(de+1),Q=y+(L+1)+ie*(de+1),ye=y+(L+1)+ie*de;m.push(X,k,ye),m.push(k,Q,ye),K+=6}d.addGroup(b,K,D),b+=K,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)t[l]=r[l]}return t}function Ub(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Bv(o){return o.getRenderTarget()===null?o.outputColorSpace:Ot.workingColorSpace}const Ob={clone:Ts,merge:Un};var zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends Po{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Ub(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tc extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mi extends Tc{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ps=1;class Bb extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(hs,ps,t,i);l.layers=this.layers,this.add(l);const u=new Mi(hs,ps,t,i);u.layers=this.layers,this.add(u);const h=new Mi(hs,ps,t,i);h.layers=this.layers,this.add(h);const d=new Mi(hs,ps,t,i);d.layers=this.layers,this.add(d);const m=new Mi(hs,ps,t,i);m.layers=this.layers,this.add(m);const p=new Mi(hs,ps,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Iv extends Xn{constructor(t,i,r,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ss,super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ib extends Xa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?En:pi),this.texture=new Iv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ga});u.uniforms.tEquirect.value=i;const h=new Ei(l,u),d=i.minFilter;return i.minFilter===Lo&&(i.minFilter=Dn),new Bb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const hd=new re,Fb=new re,Hb=new pt;class pr{constructor(t=new re(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=hd.subVectors(r,i).cross(Fb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Hb.getNormalMatrix(t),l=this.coplanarPoint(hd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Rc,dc=new re;class Fv{constructor(t=new pr,i=new pr,r=new pr,l=new pr,u=new pr,h=new pr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ia){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],b=l[8],A=l[9],T=l[10],S=l[11],v=l[12],B=l[13],C=l[14],P=l[15];if(r[0].setComponents(m-u,y-p,S-b,P-v).normalize(),r[1].setComponents(m+u,y+p,S+b,P+v).normalize(),r[2].setComponents(m+h,y+g,S+A,P+B).normalize(),r[3].setComponents(m-h,y-g,S-A,P-B).normalize(),r[4].setComponents(m-d,y-x,S-T,P-C).normalize(),i===ia)r[5].setComponents(m+d,y+x,S+T,P+C).normalize();else if(i===Mc)r[5].setComponents(d,x,T,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hv(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Gb(o,t){const i=t.isWebGL2,r=new WeakMap;function l(p,g){const x=p.array,y=p.usage,b=x.byteLength,A=o.createBuffer();o.bindBuffer(g,A),o.bufferData(g,x,y),p.onUploadCallback();let T;if(x instanceof Float32Array)T=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)T=o.SHORT;else if(x instanceof Uint32Array)T=o.UNSIGNED_INT;else if(x instanceof Int32Array)T=o.INT;else if(x instanceof Int8Array)T=o.BYTE;else if(x instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:A,type:T,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:b}}function u(p,g,x){const y=g.array,b=g._updateRange,A=g.updateRanges;if(o.bindBuffer(x,p),b.count===-1&&A.length===0&&o.bufferSubData(x,0,y),A.length!==0){for(let T=0,S=A.length;T<S;T++){const v=A[T];i?o.bufferSubData(x,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):o.bufferSubData(x,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}b.count!==-1&&(i?o.bufferSubData(x,b.offset*y.BYTES_PER_ELEMENT,y,b.offset,b.count):o.bufferSubData(x,b.offset*y.BYTES_PER_ELEMENT,y.subarray(b.offset,b.offset+b.count)),b.count=-1),g.onUploadCallback()}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function d(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(o.deleteBuffer(g.buffer),r.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=r.get(p);if(x===void 0)r.set(p,l(p,g));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,p,g),x.version=p.version}}return{get:h,remove:d,update:m}}class ys extends sa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,y=i/m,b=[],A=[],T=[],S=[];for(let v=0;v<g;v++){const B=v*y-h;for(let C=0;C<p;C++){const P=C*x-u;A.push(P,-B,0),T.push(0,0,1),S.push(C/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<d;B++){const C=B+p*v,P=B+p*(v+1),Y=B+1+p*(v+1),H=B+1+p*v;b.push(C,P,H),b.push(P,Y,H)}this.setIndex(b),this.setAttribute("position",new aa(A,3)),this.setAttribute("normal",new aa(T,3)),this.setAttribute("uv",new aa(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,GM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Vb,alphahash_pars_fragment:kb,alphamap_fragment:jb,alphamap_pars_fragment:Xb,alphatest_fragment:Wb,alphatest_pars_fragment:qb,aomap_fragment:Yb,aomap_pars_fragment:Zb,batching_pars_vertex:Kb,batching_vertex:Qb,begin_vertex:Jb,beginnormal_vertex:$b,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:fM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:hM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:SM,envmap_pars_fragment:bM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:zM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:wM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_fragment:DM,lightmap_pars_fragment:LM,lights_lambert_fragment:NM,lights_lambert_pars_fragment:UM,lights_pars_begin:OM,lights_toon_fragment:PM,lights_toon_pars_fragment:BM,lights_phong_fragment:IM,lights_phong_pars_fragment:FM,lights_physical_fragment:HM,lights_physical_pars_fragment:GM,lights_fragment_begin:VM,lights_fragment_maps:kM,lights_fragment_end:jM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:qM,logdepthbuf_vertex:YM,map_fragment:ZM,map_pars_fragment:KM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:wE,skinning_pars_vertex:RE,skinning_vertex:CE,skinnormal_vertex:DE,specularmap_fragment:LE,specularmap_pars_fragment:NE,tonemapping_fragment:UE,tonemapping_pars_fragment:OE,transmission_fragment:zE,transmission_pars_fragment:PE,uv_pars_fragment:BE,uv_pars_vertex:IE,uv_vertex:FE,worldpos_vertex:HE,background_vert:GE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:jE,cube_vert:XE,cube_frag:WE,depth_vert:qE,depth_frag:YE,distanceRGBA_vert:ZE,distanceRGBA_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:a1,meshmatcap_vert:r1,meshmatcap_frag:s1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:h1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},Ce={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Li={basic:{uniforms:Un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Un([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Un([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Un([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Un([Ce.points,Ce.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Un([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Un([Ce.common,Ce.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Un([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Un([Ce.sprite,Ce.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Un([Ce.common,Ce.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Un([Ce.lights,Ce.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Li.physical={uniforms:Un([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const hc={r:0,b:0,g:0};function S1(o,t,i,r,l,u,h){const d=new Et(0);let m=u===!0?0:1,p,g,x=null,y=0,b=null;function A(S,v){let B=!1,C=v.isScene===!0?v.background:null;C&&C.isTexture&&(C=(v.backgroundBlurriness>0?i:t).get(C)),C===null?T(d,m):C&&C.isColor&&(T(C,1),B=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||B)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ac)?(g===void 0&&(g=new Ei(new Bo(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ts(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Y,H,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Gt,(x!==C||y!==C.version||b!==o.toneMapping)&&(g.material.needsUpdate=!0,x=C,y=C.version,b=o.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ei(new ys(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ts(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||y!==C.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,y=C.version,b=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function T(S,v){S.getRGB(hc,Bv(o)),r.buffers.color.setClear(hc.r,hc.g,hc.b,v,h)}return{getClearColor:function(){return d},setClearColor:function(S,v=1){d.set(S),m=v,T(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(S){m=S,T(d,m)},render:A}}function b1(o,t,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:t.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},m=S(null);let p=m,g=!1;function x(j,ie,z,q,K){let fe=!1;if(h){const de=T(q,z,ie);p!==de&&(p=de,b(p.object)),fe=v(j,q,z,K),fe&&B(j,q,z,K)}else{const de=ie.wireframe===!0;(p.geometry!==q.id||p.program!==z.id||p.wireframe!==de)&&(p.geometry=q.id,p.program=z.id,p.wireframe=de,fe=!0)}K!==null&&i.update(K,o.ELEMENT_ARRAY_BUFFER),(fe||g)&&(g=!1,_e(j,ie,z,q),K!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(K).buffer))}function y(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function b(j){return r.isWebGL2?o.bindVertexArray(j):u.bindVertexArrayOES(j)}function A(j){return r.isWebGL2?o.deleteVertexArray(j):u.deleteVertexArrayOES(j)}function T(j,ie,z){const q=z.wireframe===!0;let K=d[j.id];K===void 0&&(K={},d[j.id]=K);let fe=K[ie.id];fe===void 0&&(fe={},K[ie.id]=fe);let de=fe[q];return de===void 0&&(de=S(y()),fe[q]=de),de}function S(j){const ie=[],z=[],q=[];for(let K=0;K<l;K++)ie[K]=0,z[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:z,attributeDivisors:q,object:j,attributes:{},index:null}}function v(j,ie,z,q){const K=p.attributes,fe=ie.attributes;let de=0;const L=z.getAttributes();for(const X in L)if(L[X].location>=0){const Q=K[X];let ye=fe[X];if(ye===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(ye=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(ye=j.instanceColor)),Q===void 0||Q.attribute!==ye||ye&&Q.data!==ye.data)return!0;de++}return p.attributesNum!==de||p.index!==q}function B(j,ie,z,q){const K={},fe=ie.attributes;let de=0;const L=z.getAttributes();for(const X in L)if(L[X].location>=0){let Q=fe[X];Q===void 0&&(X==="instanceMatrix"&&j.instanceMatrix&&(Q=j.instanceMatrix),X==="instanceColor"&&j.instanceColor&&(Q=j.instanceColor));const ye={};ye.attribute=Q,Q&&Q.data&&(ye.data=Q.data),K[X]=ye,de++}p.attributes=K,p.attributesNum=de,p.index=q}function C(){const j=p.newAttributes;for(let ie=0,z=j.length;ie<z;ie++)j[ie]=0}function P(j){Y(j,0)}function Y(j,ie){const z=p.newAttributes,q=p.enabledAttributes,K=p.attributeDivisors;z[j]=1,q[j]===0&&(o.enableVertexAttribArray(j),q[j]=1),K[j]!==ie&&((r.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,ie),K[j]=ie)}function H(){const j=p.newAttributes,ie=p.enabledAttributes;for(let z=0,q=ie.length;z<q;z++)ie[z]!==j[z]&&(o.disableVertexAttribArray(z),ie[z]=0)}function I(j,ie,z,q,K,fe,de){de===!0?o.vertexAttribIPointer(j,ie,z,K,fe):o.vertexAttribPointer(j,ie,z,q,K,fe)}function _e(j,ie,z,q){if(r.isWebGL2===!1&&(j.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;C();const K=q.attributes,fe=z.getAttributes(),de=ie.defaultAttributeValues;for(const L in fe){const X=fe[L];if(X.location>=0){let k=K[L];if(k===void 0&&(L==="instanceMatrix"&&j.instanceMatrix&&(k=j.instanceMatrix),L==="instanceColor"&&j.instanceColor&&(k=j.instanceColor)),k!==void 0){const Q=k.normalized,ye=k.itemSize,Ee=i.get(k);if(Ee===void 0)continue;const Ae=Ee.buffer,Pe=Ee.type,Be=Ee.bytesPerElement,qe=r.isWebGL2===!0&&(Pe===o.INT||Pe===o.UNSIGNED_INT||k.gpuType===_v);if(k.isInterleavedBufferAttribute){const ct=k.data,te=ct.stride,Jt=k.offset;if(ct.isInstancedInterleavedBuffer){for(let Ve=0;Ve<X.locationSize;Ve++)Y(X.location+Ve,ct.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ve=0;Ve<X.locationSize;Ve++)P(X.location+Ve);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Ve=0;Ve<X.locationSize;Ve++)I(X.location+Ve,ye/X.locationSize,Pe,Q,te*Be,(Jt+ye/X.locationSize*Ve)*Be,qe)}else{if(k.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)Y(X.location+ct,k.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ct=0;ct<X.locationSize;ct++)P(X.location+ct);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let ct=0;ct<X.locationSize;ct++)I(X.location+ct,ye/X.locationSize,Pe,Q,ye*Be,ye/X.locationSize*ct*Be,qe)}}else if(de!==void 0){const Q=de[L];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(X.location,Q);break;case 3:o.vertexAttrib3fv(X.location,Q);break;case 4:o.vertexAttrib4fv(X.location,Q);break;default:o.vertexAttrib1fv(X.location,Q)}}}}H()}function D(){ge();for(const j in d){const ie=d[j];for(const z in ie){const q=ie[z];for(const K in q)A(q[K].object),delete q[K];delete ie[z]}delete d[j]}}function U(j){if(d[j.id]===void 0)return;const ie=d[j.id];for(const z in ie){const q=ie[z];for(const K in q)A(q[K].object),delete q[K];delete ie[z]}delete d[j.id]}function ue(j){for(const ie in d){const z=d[ie];if(z[j.id]===void 0)continue;const q=z[j.id];for(const K in q)A(q[K].object),delete q[K];delete z[j.id]}}function ge(){Te(),g=!0,p!==m&&(p=m,b(p.object))}function Te(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:ge,resetDefaultState:Te,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:ue,initAttributes:C,enableAttribute:P,disableUnusedAttributes:H}}function M1(o,t,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function m(g,x,y){if(y===0)return;let b,A;if(l)b=o,A="drawArraysInstanced";else if(b=t.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[A](u,g,x,y),i.update(x,u,y)}function p(g,x,y){if(y===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<y;A++)this.render(g[A],x[A]);else{b.multiDrawArraysWEBGL(u,g,0,x,0,y);let A=0;for(let T=0;T<y;T++)A+=x[T];i.update(A,u,1)}}this.setMode=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=p}function E1(o,t,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const m=u(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),C=y>0,P=h||t.has("OES_texture_float"),Y=C&&P,H=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:B,vertexTextures:C,floatFragmentTextures:P,floatVertexTextures:Y,maxSamples:H}}function T1(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new pr,d=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const b=x.length!==0||y||r!==0||l;return l=y,r=x.length,b},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,b){const A=x.clippingPlanes,T=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||A===null||A.length===0||u&&!S)u?g(null):p();else{const B=u?0:r,C=B*4;let P=v.clippingState||null;m.value=P,P=g(A,y,C,b);for(let Y=0;Y!==C;++Y)P[Y]=i[Y];v.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,b,A){const T=x!==null?x.length:0;let S=null;if(T!==0){if(S=m.value,A!==!0||S===null){const v=b+T*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(S===null||S.length<v)&&(S=new Float32Array(v));for(let C=0,P=b;C!==T;++C,P+=4)h.copy(x[C]).applyMatrix4(B,d),h.normal.toArray(S,P),S[P+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function A1(o){let t=new WeakMap;function i(h,d){return d===Td?h.mapping=Ss:d===Ad&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Td||d===Ad)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Ib(m.height/2);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class w1 extends Tc{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const gs=4,L0=[.125,.215,.35,.446,.526,.582],vr=20,pd=new w1,N0=new Et;let md=null,gd=0,vd=0;const mr=(1+Math.sqrt(5))/2,ms=1/mr,U0=[new re(1,1,1),new re(-1,1,1),new re(1,1,-1),new re(-1,1,-1),new re(0,mr,ms),new re(0,mr,-ms),new re(ms,0,mr),new re(-ms,0,mr),new re(mr,ms,0),new re(-mr,ms,0)];class O0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(md,gd,vd),t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ss||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ms,format:hi,colorSpace:ra,depthBuffer:!1},l=z0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R1(u)),this._blurMaterial=C1(u,t,i)}return l}_compileMaterial(t){const i=new Ei(this._lodPlanes[0],t);this._renderer.compile(i,pd)}_sceneToCubeUV(t,i,r,l){const d=new Mi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(N0),g.toneMapping=Va,g.autoClear=!1;const b=new Ov({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),A=new Ei(new Bo,b);let T=!1;const S=t.background;S?S.isColor&&(b.color.copy(S),t.background=null,T=!0):(b.color.copy(N0),T=!0);for(let v=0;v<6;v++){const B=v%3;B===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):B===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const C=this._cubeSize;pc(l,B*C,v>2?C:0,C,C),g.setRenderTarget(l),T&&g.render(A,d),g.render(t,d)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ss||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,pd)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=U0[(l-1)%U0.length];this._blur(t,l-1,l,u,h)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ei(this._lodPlanes[l],p),y=p.uniforms,b=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*vr-1),T=u/A,S=isFinite(u)?1+Math.floor(g*T):vr;S>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vr}`);const v=[];let B=0;for(let I=0;I<vr;++I){const _e=I/T,D=Math.exp(-_e*_e/2);v.push(D),I===0?B+=D:I<S&&(B+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/B;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=A,y.mipInt.value=C-r;const P=this._sizeLods[l],Y=3*P*(l>C-gs?l-C+gs:0),H=4*(this._cubeSize-P);pc(i,Y,H,3*P,2*P),m.setRenderTarget(i),m.render(x,pd)}}function R1(o){const t=[],i=[],r=[];let l=o;const u=o-gs+1+L0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-gs?m=L0[h-o+gs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,A=6,T=3,S=2,v=1,B=new Float32Array(T*A*b),C=new Float32Array(S*A*b),P=new Float32Array(v*A*b);for(let H=0;H<b;H++){const I=H%3*2/3-1,_e=H>2?0:-1,D=[I,_e,0,I+2/3,_e,0,I+2/3,_e+1,0,I,_e,0,I+2/3,_e+1,0,I,_e+1,0];B.set(D,T*A*H),C.set(y,S*A*H);const U=[H,H,H,H,H,H];P.set(U,v*A*H)}const Y=new sa;Y.setAttribute("position",new Ti(B,T)),Y.setAttribute("uv",new Ti(C,S)),Y.setAttribute("faceIndex",new Ti(P,v)),t.push(Y),l>gs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function z0(o,t,i){const r=new Xa(o,t,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function C1(o,t,i){const r=new Float32Array(vr),l=new re(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function P0(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function B0(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function D1(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Td||m===Ad,g=m===Ss||m===bs;if(p||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=t.get(d);return i===null&&(i=new O0(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),t.set(d,x),x.texture}else{if(t.has(d))return t.get(d).texture;{const x=d.image;if(p&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new O0(o));const y=p?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,y),d.addEventListener("dispose",u),y.texture}else return null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function L1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function N1(o,t,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const A in y.attributes)t.remove(y.attributes[A]);for(const A in y.morphAttributes){const T=y.morphAttributes[A];for(let S=0,v=T.length;S<v;S++)t.remove(T[S])}y.removeEventListener("dispose",h),delete l[y.id];const b=u.get(y);b&&(t.remove(b),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const A in y)t.update(y[A],o.ARRAY_BUFFER);const b=x.morphAttributes;for(const A in b){const T=b[A];for(let S=0,v=T.length;S<v;S++)t.update(T[S],o.ARRAY_BUFFER)}}function p(x){const y=[],b=x.index,A=x.attributes.position;let T=0;if(b!==null){const B=b.array;T=b.version;for(let C=0,P=B.length;C<P;C+=3){const Y=B[C+0],H=B[C+1],I=B[C+2];y.push(Y,H,H,I,I,Y)}}else if(A!==void 0){const B=A.array;T=A.version;for(let C=0,P=B.length/3-1;C<P;C+=3){const Y=C+0,H=C+1,I=C+2;y.push(Y,H,H,I,I,Y)}}else return;const S=new(wv(y)?Pv:zv)(y,1);S.version=T;const v=u.get(x);v&&t.remove(v),u.set(x,S)}function g(x){const y=u.get(x);if(y){const b=x.index;b!==null&&y.version<b.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function U1(o,t,i,r){const l=r.isWebGL2;let u;function h(b){u=b}let d,m;function p(b){d=b.type,m=b.bytesPerElement}function g(b,A){o.drawElements(u,A,d,b*m),i.update(A,u,1)}function x(b,A,T){if(T===0)return;let S,v;if(l)S=o,v="drawElementsInstanced";else if(S=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[v](u,A,d,b*m,T),i.update(A,u,T)}function y(b,A,T){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<T;v++)this.render(b[v]/m,A[v]);else{S.multiDrawElementsWEBGL(u,A,0,d,b,0,T);let v=0;for(let B=0;B<T;B++)v+=A[B];i.update(v,u,1)}}this.setMode=h,this.setIndex=p,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function O1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function z1(o,t){return o[0]-t[0]}function P1(o,t){return Math.abs(t[1])-Math.abs(o[1])}function B1(o,t,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new gn,d=[];for(let p=0;p<8;p++)d[p]=[p,0];function m(p,g,x){const y=p.morphTargetInfluences;if(t.isWebGL2===!0){const A=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=A!==void 0?A.length:0;let S=u.get(g);if(S===void 0||S.count!==T){let ie=function(){Te.dispose(),u.delete(g),g.removeEventListener("dispose",ie)};var b=ie;S!==void 0&&S.texture.dispose();const C=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,Y=g.morphAttributes.color!==void 0,H=g.morphAttributes.position||[],I=g.morphAttributes.normal||[],_e=g.morphAttributes.color||[];let D=0;C===!0&&(D=1),P===!0&&(D=2),Y===!0&&(D=3);let U=g.attributes.position.count*D,ue=1;U>t.maxTextureSize&&(ue=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const ge=new Float32Array(U*ue*4*T),Te=new Dv(ge,U,ue,T);Te.type=na,Te.needsUpdate=!0;const j=D*4;for(let z=0;z<T;z++){const q=H[z],K=I[z],fe=_e[z],de=U*ue*4*z;for(let L=0;L<q.count;L++){const X=L*j;C===!0&&(h.fromBufferAttribute(q,L),ge[de+X+0]=h.x,ge[de+X+1]=h.y,ge[de+X+2]=h.z,ge[de+X+3]=0),P===!0&&(h.fromBufferAttribute(K,L),ge[de+X+4]=h.x,ge[de+X+5]=h.y,ge[de+X+6]=h.z,ge[de+X+7]=0),Y===!0&&(h.fromBufferAttribute(fe,L),ge[de+X+8]=h.x,ge[de+X+9]=h.y,ge[de+X+10]=h.z,ge[de+X+11]=fe.itemSize===4?h.w:1)}}S={count:T,texture:Te,size:new st(U,ue)},u.set(g,S),g.addEventListener("dispose",ie)}let v=0;for(let C=0;C<y.length;C++)v+=y[C];const B=g.morphTargetsRelative?1:1-v;x.getUniforms().setValue(o,"morphTargetBaseInfluence",B),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const A=y===void 0?0:y.length;let T=r[g.id];if(T===void 0||T.length!==A){T=[];for(let P=0;P<A;P++)T[P]=[P,0];r[g.id]=T}for(let P=0;P<A;P++){const Y=T[P];Y[0]=P,Y[1]=y[P]}T.sort(P1);for(let P=0;P<8;P++)P<A&&T[P][1]?(d[P][0]=T[P][0],d[P][1]=T[P][1]):(d[P][0]=Number.MAX_SAFE_INTEGER,d[P][1]=0);d.sort(z1);const S=g.morphAttributes.position,v=g.morphAttributes.normal;let B=0;for(let P=0;P<8;P++){const Y=d[P],H=Y[0],I=Y[1];H!==Number.MAX_SAFE_INTEGER&&I?(S&&g.getAttribute("morphTarget"+P)!==S[H]&&g.setAttribute("morphTarget"+P,S[H]),v&&g.getAttribute("morphNormal"+P)!==v[H]&&g.setAttribute("morphNormal"+P,v[H]),l[P]=I,B+=I):(S&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),v&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),l[P]=0)}const C=g.morphTargetsRelative?1:1-B;x.getUniforms().setValue(o,"morphTargetBaseInfluence",C),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function I1(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class Gv extends Xn{constructor(t,i,r,l,u,h,d,m,p,g){if(g=g!==void 0?g:xr,g!==xr&&g!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===xr&&(r=Ha),r===void 0&&g===Es&&(r=_r),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Mn,this.minFilter=m!==void 0?m:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Vv=new Xn,kv=new Gv(1,1);kv.compareFunction=Av;const jv=new Dv,Xv=new Sb,Wv=new Iv,I0=[],F0=[],H0=new Float32Array(16),G0=new Float32Array(9),V0=new Float32Array(4);function ws(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=I0[l];if(u===void 0&&(u=new Float32Array(l),I0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Dc(o,t){let i=F0[t];i===void 0&&(i=new Int32Array(t),F0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function F1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function H1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function k1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;V0.set(r),o.uniformMatrix2fv(this.addr,!1,V0),dn(i,r)}}function j1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;G0.set(r),o.uniformMatrix3fv(this.addr,!1,G0),dn(i,r)}}function X1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;H0.set(r),o.uniformMatrix4fv(this.addr,!1,H0),dn(i,r)}}function W1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function K1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function $1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function eT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?kv:Vv;i.setTexture2D(t||u,l)}function tT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Xv,l)}function nT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Wv,l)}function iT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||jv,l)}function aT(o){switch(o){case 5126:return F1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return k1;case 35675:return j1;case 35676:return X1;case 5124:case 35670:return W1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return Z1;case 5125:return K1;case 36294:return Q1;case 36295:return J1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function rT(o,t){o.uniform1fv(this.addr,t)}function sT(o,t){const i=ws(t,this.size,2);o.uniform2fv(this.addr,i)}function oT(o,t){const i=ws(t,this.size,3);o.uniform3fv(this.addr,i)}function lT(o,t){const i=ws(t,this.size,4);o.uniform4fv(this.addr,i)}function cT(o,t){const i=ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function uT(o,t){const i=ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function fT(o,t){const i=ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function dT(o,t){o.uniform1iv(this.addr,t)}function hT(o,t){o.uniform2iv(this.addr,t)}function pT(o,t){o.uniform3iv(this.addr,t)}function mT(o,t){o.uniform4iv(this.addr,t)}function gT(o,t){o.uniform1uiv(this.addr,t)}function vT(o,t){o.uniform2uiv(this.addr,t)}function _T(o,t){o.uniform3uiv(this.addr,t)}function xT(o,t){o.uniform4uiv(this.addr,t)}function yT(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Vv,u[h])}function ST(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Xv,u[h])}function bT(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Wv,u[h])}function MT(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||jv,u[h])}function ET(o){switch(o){case 5126:return rT;case 35664:return sT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return fT;case 5124:case 35670:return dT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return bT;case 36289:case 36303:case 36311:case 36292:return MT}}class TT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=aT(i.type)}}class AT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=ET(i.type)}}class wT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function k0(o,t){o.seq.push(t),o.map[t.id]=t}function RT(o,t,i){const r=o.name,l=r.length;for(_d.lastIndex=0;;){const u=_d.exec(r),h=_d.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){k0(i,p===void 0?new TT(d,o,t):new AT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new wT(d),k0(i,x)),i=x}}}class _c{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);RT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function j0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const CT=37297;let DT=0;function LT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function NT(o){const t=Ot.getPrimaries(Ot.workingColorSpace),i=Ot.getPrimaries(o);let r;switch(t===i?r="":t===bc&&i===Sc?r="LinearDisplayP3ToLinearSRGB":t===Sc&&i===bc&&(r="LinearSRGBToLinearDisplayP3"),o){case ra:case wc:return[r,"LinearTransferOETF"];case En:case Id:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function X0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+LT(o.getShaderSource(t),h)}else return l}function UT(o,t){const i=NT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function OT(o,t){let i;switch(t){case kS:i="Linear";break;case jS:i="Reinhard";break;case XS:i="OptimizedCineon";break;case WS:i="ACESFilmic";break;case YS:i="AgX";break;case qS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function zT(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function PT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function BT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function IT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function vs(o){return o!==""}function W0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function q0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(FT,GT)}const HT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function GT(o,t){let i=dt[t];if(i===void 0){const r=HT.get(t);if(r!==void 0)i=dt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(o){return o.replace(VT,kT)}function kT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Z0(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===vS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function XT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case bs:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function qT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case gv:t="ENVMAP_BLENDING_MULTIPLY";break;case GS:t="ENVMAP_BLENDING_MIX";break;case VS:t="ENVMAP_BLENDING_ADD";break}return t}function YT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function ZT(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=jT(i),p=XT(i),g=WT(i),x=qT(i),y=YT(i),b=i.isWebGL2?"":zT(i),A=PT(i),T=BT(u),S=l.createProgram();let v,B,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vs).join(`
`),v.length>0&&(v+=`
`),B=[b,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(vs).join(`
`),B.length>0&&(B+=`
`)):(v=[Z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),B=[b,Z0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?dt.tonemapping_pars_fragment:"",i.toneMapping!==Va?OT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,UT("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vs).join(`
`)),h=Nd(h),h=W0(h,i),h=q0(h,i),d=Nd(d),d=W0(d,i),d=q0(d,i),h=Y0(h),d=Y0(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,v=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,B=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===h0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===h0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+B);const P=C+v+h,Y=C+B+d,H=j0(l,l.VERTEX_SHADER,P),I=j0(l,l.FRAGMENT_SHADER,Y);l.attachShader(S,H),l.attachShader(S,I),i.index0AttributeName!==void 0?l.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(S,0,"position"),l.linkProgram(S);function _e(ge){if(o.debug.checkShaderErrors){const Te=l.getProgramInfoLog(S).trim(),j=l.getShaderInfoLog(H).trim(),ie=l.getShaderInfoLog(I).trim();let z=!0,q=!0;if(l.getProgramParameter(S,l.LINK_STATUS)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,S,H,I);else{const K=X0(l,H,"vertex"),fe=X0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(S,l.VALIDATE_STATUS)+`

Program Info Log: `+Te+`
`+K+`
`+fe)}else Te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Te):(j===""||ie==="")&&(q=!1);q&&(ge.diagnostics={runnable:z,programLog:Te,vertexShader:{log:j,prefix:v},fragmentShader:{log:ie,prefix:B}})}l.deleteShader(H),l.deleteShader(I),D=new _c(l,S),U=IT(l,S)}let D;this.getUniforms=function(){return D===void 0&&_e(this),D};let U;this.getAttributes=function(){return U===void 0&&_e(this),U};let ue=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=l.getProgramParameter(S,CT)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=DT++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=H,this.fragmentShader=I,this}let KT=0;class QT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new JT(t),i.set(t,r)),r}}class JT{constructor(t){this.id=KT++,this.code=t,this.usedTimes=0}}function $T(o,t,i,r,l,u,h){const d=new Nv,m=new QT,p=[],g=l.isWebGL2,x=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return D===0?"uv":`uv${D}`}function S(D,U,ue,ge,Te){const j=ge.fog,ie=Te.geometry,z=D.isMeshStandardMaterial?ge.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),K=q&&q.mapping===Ac?q.image.height:null,fe=A[D.type];D.precision!==null&&(b=l.getMaxPrecision(D.precision),b!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const de=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,L=de!==void 0?de.length:0;let X=0;ie.morphAttributes.position!==void 0&&(X=1),ie.morphAttributes.normal!==void 0&&(X=2),ie.morphAttributes.color!==void 0&&(X=3);let k,Q,ye,Ee;if(fe){const Zt=Li[fe];k=Zt.vertexShader,Q=Zt.fragmentShader}else k=D.vertexShader,Q=D.fragmentShader,m.update(D),ye=m.getVertexShaderID(D),Ee=m.getFragmentShaderID(D);const Ae=o.getRenderTarget(),Pe=Te.isInstancedMesh===!0,Be=Te.isBatchedMesh===!0,qe=!!D.map,ct=!!D.matcap,te=!!q,Jt=!!D.aoMap,Ve=!!D.lightMap,tt=!!D.bumpMap,Ie=!!D.normalMap,zt=!!D.displacementMap,et=!!D.emissiveMap,N=!!D.metalnessMap,w=!!D.roughnessMap,ne=D.anisotropy>0,Me=D.clearcoat>0,me=D.iridescence>0,O=D.sheen>0,ce=D.transmission>0,he=ne&&!!D.anisotropyMap,be=Me&&!!D.clearcoatMap,De=Me&&!!D.clearcoatNormalMap,Fe=Me&&!!D.clearcoatRoughnessMap,Se=me&&!!D.iridescenceMap,ht=me&&!!D.iridescenceThicknessMap,nt=O&&!!D.sheenColorMap,Qe=O&&!!D.sheenRoughnessMap,Oe=!!D.specularMap,Ue=!!D.specularColorMap,Ye=!!D.specularIntensityMap,bt=ce&&!!D.transmissionMap,kt=ce&&!!D.thicknessMap,ut=!!D.gradientMap,we=!!D.alphaMap,G=D.alphaTest>0,Le=!!D.alphaHash,Re=!!D.extensions,Je=!!ie.attributes.uv1,Xe=!!ie.attributes.uv2,Ct=!!ie.attributes.uv3;let Tt=Va;return D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Tt=o.toneMapping),{isWebGL2:g,shaderID:fe,shaderType:D.type,shaderName:D.name,vertexShader:k,fragmentShader:Q,defines:D.defines,customVertexShaderID:ye,customFragmentShaderID:Ee,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Be,instancing:Pe,instancingColor:Pe&&Te.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Ae===null?o.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ra,map:qe,matcap:ct,envMap:te,envMapMode:te&&q.mapping,envMapCubeUVHeight:K,aoMap:Jt,lightMap:Ve,bumpMap:tt,normalMap:Ie,displacementMap:y&&zt,emissiveMap:et,normalMapObjectSpace:Ie&&D.normalMapType===ob,normalMapTangentSpace:Ie&&D.normalMapType===sb,metalnessMap:N,roughnessMap:w,anisotropy:ne,anisotropyMap:he,clearcoat:Me,clearcoatMap:be,clearcoatNormalMap:De,clearcoatRoughnessMap:Fe,iridescence:me,iridescenceMap:Se,iridescenceThicknessMap:ht,sheen:O,sheenColorMap:nt,sheenRoughnessMap:Qe,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:Ye,transmission:ce,transmissionMap:bt,thicknessMap:kt,gradientMap:ut,opaque:D.transparent===!1&&D.blending===_s,alphaMap:we,alphaTest:G,alphaHash:Le,combine:D.combine,mapUv:qe&&T(D.map.channel),aoMapUv:Jt&&T(D.aoMap.channel),lightMapUv:Ve&&T(D.lightMap.channel),bumpMapUv:tt&&T(D.bumpMap.channel),normalMapUv:Ie&&T(D.normalMap.channel),displacementMapUv:zt&&T(D.displacementMap.channel),emissiveMapUv:et&&T(D.emissiveMap.channel),metalnessMapUv:N&&T(D.metalnessMap.channel),roughnessMapUv:w&&T(D.roughnessMap.channel),anisotropyMapUv:he&&T(D.anisotropyMap.channel),clearcoatMapUv:be&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&T(D.sheenRoughnessMap.channel),specularMapUv:Oe&&T(D.specularMap.channel),specularColorMapUv:Ue&&T(D.specularColorMap.channel),specularIntensityMapUv:Ye&&T(D.specularIntensityMap.channel),transmissionMapUv:bt&&T(D.transmissionMap.channel),thicknessMapUv:kt&&T(D.thicknessMap.channel),alphaMapUv:we&&T(D.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ie||ne),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,vertexUv1s:Je,vertexUv2s:Xe,vertexUv3s:Ct,pointsUvs:Te.isPoints===!0&&!!ie.attributes.uv&&(qe||we),fog:!!j,useFog:D.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:Te.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:X,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&ue.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:qe&&D.map.isVideoTexture===!0&&Ot.getTransfer(D.map.colorSpace)===Gt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:Re&&D.extensions.derivatives===!0,extensionFragDepth:Re&&D.extensions.fragDepth===!0,extensionDrawBuffers:Re&&D.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&D.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&D.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()}}function v(D){const U=[];if(D.shaderID?U.push(D.shaderID):(U.push(D.customVertexShaderID),U.push(D.customFragmentShaderID)),D.defines!==void 0)for(const ue in D.defines)U.push(ue),U.push(D.defines[ue]);return D.isRawShaderMaterial===!1&&(B(U,D),C(U,D),U.push(o.outputColorSpace)),U.push(D.customProgramCacheKey),U.join()}function B(D,U){D.push(U.precision),D.push(U.outputColorSpace),D.push(U.envMapMode),D.push(U.envMapCubeUVHeight),D.push(U.mapUv),D.push(U.alphaMapUv),D.push(U.lightMapUv),D.push(U.aoMapUv),D.push(U.bumpMapUv),D.push(U.normalMapUv),D.push(U.displacementMapUv),D.push(U.emissiveMapUv),D.push(U.metalnessMapUv),D.push(U.roughnessMapUv),D.push(U.anisotropyMapUv),D.push(U.clearcoatMapUv),D.push(U.clearcoatNormalMapUv),D.push(U.clearcoatRoughnessMapUv),D.push(U.iridescenceMapUv),D.push(U.iridescenceThicknessMapUv),D.push(U.sheenColorMapUv),D.push(U.sheenRoughnessMapUv),D.push(U.specularMapUv),D.push(U.specularColorMapUv),D.push(U.specularIntensityMapUv),D.push(U.transmissionMapUv),D.push(U.thicknessMapUv),D.push(U.combine),D.push(U.fogExp2),D.push(U.sizeAttenuation),D.push(U.morphTargetsCount),D.push(U.morphAttributeCount),D.push(U.numDirLights),D.push(U.numPointLights),D.push(U.numSpotLights),D.push(U.numSpotLightMaps),D.push(U.numHemiLights),D.push(U.numRectAreaLights),D.push(U.numDirLightShadows),D.push(U.numPointLightShadows),D.push(U.numSpotLightShadows),D.push(U.numSpotLightShadowsWithMaps),D.push(U.numLightProbes),D.push(U.shadowMapType),D.push(U.toneMapping),D.push(U.numClippingPlanes),D.push(U.numClipIntersection),D.push(U.depthPacking)}function C(D,U){d.disableAll(),U.isWebGL2&&d.enable(0),U.supportsVertexTextures&&d.enable(1),U.instancing&&d.enable(2),U.instancingColor&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),D.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.skinning&&d.enable(4),U.morphTargets&&d.enable(5),U.morphNormals&&d.enable(6),U.morphColors&&d.enable(7),U.premultipliedAlpha&&d.enable(8),U.shadowMapEnabled&&d.enable(9),U.useLegacyLights&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),D.push(d.mask)}function P(D){const U=A[D.type];let ue;if(U){const ge=Li[U];ue=Ob.clone(ge.uniforms)}else ue=D.uniforms;return ue}function Y(D,U){let ue;for(let ge=0,Te=p.length;ge<Te;ge++){const j=p[ge];if(j.cacheKey===U){ue=j,++ue.usedTimes;break}}return ue===void 0&&(ue=new ZT(o,U,D,u),p.push(ue)),ue}function H(D){if(--D.usedTimes===0){const U=p.indexOf(D);p[U]=p[p.length-1],p.pop(),D.destroy()}}function I(D){m.remove(D)}function _e(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:Y,releaseProgram:H,releaseShaderCache:I,programs:p,dispose:_e}}function e2(){let o=new WeakMap;function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function t2(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function K0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Q0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,y,b,A,T,S){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:y,material:b,groupOrder:A,renderOrder:x.renderOrder,z:T,group:S},o[t]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=b,v.groupOrder=A,v.renderOrder=x.renderOrder,v.z=T,v.group=S),t++,v}function d(x,y,b,A,T,S){const v=h(x,y,b,A,T,S);b.transmission>0?r.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(x,y,b,A,T,S){const v=h(x,y,b,A,T,S);b.transmission>0?r.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||t2),r.length>1&&r.sort(y||K0),l.length>1&&l.sort(y||K0)}function g(){for(let x=t,y=o.length;x<y;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function n2(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new Q0,o.set(r,[h])):l>=u.length?(h=new Q0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function i2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new re,color:new Et};break;case"SpotLight":i={position:new re,direction:new re,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new re,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new re,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new re,halfWidth:new re,halfHeight:new re};break}return o[t.id]=i,i}}}function a2(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let r2=0;function s2(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function o2(o,t){const i=new i2,r=a2(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new re);const u=new re,h=new vn,d=new vn;function m(g,x){let y=0,b=0,A=0;for(let ge=0;ge<9;ge++)l.probe[ge].set(0,0,0);let T=0,S=0,v=0,B=0,C=0,P=0,Y=0,H=0,I=0,_e=0,D=0;g.sort(s2);const U=x===!0?Math.PI:1;for(let ge=0,Te=g.length;ge<Te;ge++){const j=g[ge],ie=j.color,z=j.intensity,q=j.distance,K=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)y+=ie.r*z*U,b+=ie.g*z*U,A+=ie.b*z*U;else if(j.isLightProbe){for(let fe=0;fe<9;fe++)l.probe[fe].addScaledVector(j.sh.coefficients[fe],z);D++}else if(j.isDirectionalLight){const fe=i.get(j);if(fe.color.copy(j.color).multiplyScalar(j.intensity*U),j.castShadow){const de=j.shadow,L=r.get(j);L.shadowBias=de.bias,L.shadowNormalBias=de.normalBias,L.shadowRadius=de.radius,L.shadowMapSize=de.mapSize,l.directionalShadow[T]=L,l.directionalShadowMap[T]=K,l.directionalShadowMatrix[T]=j.shadow.matrix,P++}l.directional[T]=fe,T++}else if(j.isSpotLight){const fe=i.get(j);fe.position.setFromMatrixPosition(j.matrixWorld),fe.color.copy(ie).multiplyScalar(z*U),fe.distance=q,fe.coneCos=Math.cos(j.angle),fe.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),fe.decay=j.decay,l.spot[v]=fe;const de=j.shadow;if(j.map&&(l.spotLightMap[I]=j.map,I++,de.updateMatrices(j),j.castShadow&&_e++),l.spotLightMatrix[v]=de.matrix,j.castShadow){const L=r.get(j);L.shadowBias=de.bias,L.shadowNormalBias=de.normalBias,L.shadowRadius=de.radius,L.shadowMapSize=de.mapSize,l.spotShadow[v]=L,l.spotShadowMap[v]=K,H++}v++}else if(j.isRectAreaLight){const fe=i.get(j);fe.color.copy(ie).multiplyScalar(z),fe.halfWidth.set(j.width*.5,0,0),fe.halfHeight.set(0,j.height*.5,0),l.rectArea[B]=fe,B++}else if(j.isPointLight){const fe=i.get(j);if(fe.color.copy(j.color).multiplyScalar(j.intensity*U),fe.distance=j.distance,fe.decay=j.decay,j.castShadow){const de=j.shadow,L=r.get(j);L.shadowBias=de.bias,L.shadowNormalBias=de.normalBias,L.shadowRadius=de.radius,L.shadowMapSize=de.mapSize,L.shadowCameraNear=de.camera.near,L.shadowCameraFar=de.camera.far,l.pointShadow[S]=L,l.pointShadowMap[S]=K,l.pointShadowMatrix[S]=j.shadow.matrix,Y++}l.point[S]=fe,S++}else if(j.isHemisphereLight){const fe=i.get(j);fe.skyColor.copy(j.color).multiplyScalar(z*U),fe.groundColor.copy(j.groundColor).multiplyScalar(z*U),l.hemi[C]=fe,C++}}B>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ce.LTC_FLOAT_1,l.rectAreaLTC2=Ce.LTC_FLOAT_2):(l.rectAreaLTC1=Ce.LTC_HALF_1,l.rectAreaLTC2=Ce.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ce.LTC_FLOAT_1,l.rectAreaLTC2=Ce.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ce.LTC_HALF_1,l.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=b,l.ambient[2]=A;const ue=l.hash;(ue.directionalLength!==T||ue.pointLength!==S||ue.spotLength!==v||ue.rectAreaLength!==B||ue.hemiLength!==C||ue.numDirectionalShadows!==P||ue.numPointShadows!==Y||ue.numSpotShadows!==H||ue.numSpotMaps!==I||ue.numLightProbes!==D)&&(l.directional.length=T,l.spot.length=v,l.rectArea.length=B,l.point.length=S,l.hemi.length=C,l.directionalShadow.length=P,l.directionalShadowMap.length=P,l.pointShadow.length=Y,l.pointShadowMap.length=Y,l.spotShadow.length=H,l.spotShadowMap.length=H,l.directionalShadowMatrix.length=P,l.pointShadowMatrix.length=Y,l.spotLightMatrix.length=H+I-_e,l.spotLightMap.length=I,l.numSpotLightShadowsWithMaps=_e,l.numLightProbes=D,ue.directionalLength=T,ue.pointLength=S,ue.spotLength=v,ue.rectAreaLength=B,ue.hemiLength=C,ue.numDirectionalShadows=P,ue.numPointShadows=Y,ue.numSpotShadows=H,ue.numSpotMaps=I,ue.numLightProbes=D,l.version=r2++)}function p(g,x){let y=0,b=0,A=0,T=0,S=0;const v=x.matrixWorldInverse;for(let B=0,C=g.length;B<C;B++){const P=g[B];if(P.isDirectionalLight){const Y=l.directional[y];Y.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),Y.direction.sub(u),Y.direction.transformDirection(v),y++}else if(P.isSpotLight){const Y=l.spot[A];Y.position.setFromMatrixPosition(P.matrixWorld),Y.position.applyMatrix4(v),Y.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),Y.direction.sub(u),Y.direction.transformDirection(v),A++}else if(P.isRectAreaLight){const Y=l.rectArea[T];Y.position.setFromMatrixPosition(P.matrixWorld),Y.position.applyMatrix4(v),d.identity(),h.copy(P.matrixWorld),h.premultiply(v),d.extractRotation(h),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),Y.halfWidth.applyMatrix4(d),Y.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const Y=l.point[b];Y.position.setFromMatrixPosition(P.matrixWorld),Y.position.applyMatrix4(v),b++}else if(P.isHemisphereLight){const Y=l.hemi[S];Y.direction.setFromMatrixPosition(P.matrixWorld),Y.direction.transformDirection(v),S++}}}return{setup:m,setupView:p,state:l}}function J0(o,t){const i=new o2(o,t),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function m(x){i.setup(r,x)}function p(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:h,pushShadow:d}}function l2(o,t){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let m;return d===void 0?(m=new J0(o,t),i.set(u,[m])):h>=d.length?(m=new J0(o,t),d.push(m)):m=d[h],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class c2 extends Po{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u2 extends Po{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const f2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function h2(o,t,i){let r=new Fv;const l=new st,u=new st,h=new gn,d=new c2({depthPacking:rb}),m=new u2,p={},g=i.maxTextureSize,x={[ja]:jn,[jn]:ja,[ta]:ta},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:f2,fragmentShader:d2}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const A=new sa;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ei(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mv;let v=this.type;this.render=function(H,I,_e){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const D=o.getRenderTarget(),U=o.getActiveCubeFace(),ue=o.getActiveMipmapLevel(),ge=o.state;ge.setBlending(Ga),ge.buffers.color.setClear(1,1,1,1),ge.buffers.depth.setTest(!0),ge.setScissorTest(!1);const Te=v!==ea&&this.type===ea,j=v===ea&&this.type!==ea;for(let ie=0,z=H.length;ie<z;ie++){const q=H[ie],K=q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const fe=K.getFrameExtents();if(l.multiply(fe),u.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/fe.x),l.x=u.x*fe.x,K.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/fe.y),l.y=u.y*fe.y,K.mapSize.y=u.y)),K.map===null||Te===!0||j===!0){const L=this.type!==ea?{minFilter:Mn,magFilter:Mn}:{};K.map!==null&&K.map.dispose(),K.map=new Xa(l.x,l.y,L),K.map.texture.name=q.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const de=K.getViewportCount();for(let L=0;L<de;L++){const X=K.getViewport(L);h.set(u.x*X.x,u.y*X.y,u.x*X.z,u.y*X.w),ge.viewport(h),K.updateMatrices(q,L),r=K.getFrustum(),P(I,_e,K.camera,q,this.type)}K.isPointLightShadow!==!0&&this.type===ea&&B(K,_e),K.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(D,U,ue)};function B(H,I){const _e=t.update(T);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,b.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Xa(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(I,null,_e,y,T,null),b.uniforms.shadow_pass.value=H.mapPass.texture,b.uniforms.resolution.value=H.mapSize,b.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(I,null,_e,b,T,null)}function C(H,I,_e,D){let U=null;const ue=_e.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(ue!==void 0)U=ue;else if(U=_e.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ge=U.uuid,Te=I.uuid;let j=p[ge];j===void 0&&(j={},p[ge]=j);let ie=j[Te];ie===void 0&&(ie=U.clone(),j[Te]=ie,I.addEventListener("dispose",Y)),U=ie}if(U.visible=I.visible,U.wireframe=I.wireframe,D===ea?U.side=I.shadowSide!==null?I.shadowSide:I.side:U.side=I.shadowSide!==null?I.shadowSide:x[I.side],U.alphaMap=I.alphaMap,U.alphaTest=I.alphaTest,U.map=I.map,U.clipShadows=I.clipShadows,U.clippingPlanes=I.clippingPlanes,U.clipIntersection=I.clipIntersection,U.displacementMap=I.displacementMap,U.displacementScale=I.displacementScale,U.displacementBias=I.displacementBias,U.wireframeLinewidth=I.wireframeLinewidth,U.linewidth=I.linewidth,_e.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const ge=o.properties.get(U);ge.light=_e}return U}function P(H,I,_e,D,U){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&U===ea)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,H.matrixWorld);const Te=t.update(H),j=H.material;if(Array.isArray(j)){const ie=Te.groups;for(let z=0,q=ie.length;z<q;z++){const K=ie[z],fe=j[K.materialIndex];if(fe&&fe.visible){const de=C(H,fe,D,U);H.onBeforeShadow(o,H,I,_e,Te,de,K),o.renderBufferDirect(_e,null,Te,de,H,K),H.onAfterShadow(o,H,I,_e,Te,de,K)}}}else if(j.visible){const ie=C(H,j,D,U);H.onBeforeShadow(o,H,I,_e,Te,ie,null),o.renderBufferDirect(_e,null,Te,ie,H,null),H.onAfterShadow(o,H,I,_e,Te,ie,null)}}const ge=H.children;for(let Te=0,j=ge.length;Te<j;Te++)P(ge[Te],I,_e,D,U)}function Y(H){H.target.removeEventListener("dispose",Y);for(const _e in p){const D=p[_e],U=H.target.uuid;U in D&&(D[U].dispose(),delete D[U])}}}function p2(o,t,i){const r=i.isWebGL2;function l(){let G=!1;const Le=new gn;let Re=null;const Je=new gn(0,0,0,0);return{setMask:function(Xe){Re!==Xe&&!G&&(o.colorMask(Xe,Xe,Xe,Xe),Re=Xe)},setLocked:function(Xe){G=Xe},setClear:function(Xe,Ct,Tt,Wt,Zt){Zt===!0&&(Xe*=Wt,Ct*=Wt,Tt*=Wt),Le.set(Xe,Ct,Tt,Wt),Je.equals(Le)===!1&&(o.clearColor(Xe,Ct,Tt,Wt),Je.copy(Le))},reset:function(){G=!1,Re=null,Je.set(-1,0,0,0)}}}function u(){let G=!1,Le=null,Re=null,Je=null;return{setTest:function(Xe){Xe?Be(o.DEPTH_TEST):qe(o.DEPTH_TEST)},setMask:function(Xe){Le!==Xe&&!G&&(o.depthMask(Xe),Le=Xe)},setFunc:function(Xe){if(Re!==Xe){switch(Xe){case OS:o.depthFunc(o.NEVER);break;case zS:o.depthFunc(o.ALWAYS);break;case PS:o.depthFunc(o.LESS);break;case xc:o.depthFunc(o.LEQUAL);break;case BS:o.depthFunc(o.EQUAL);break;case IS:o.depthFunc(o.GEQUAL);break;case FS:o.depthFunc(o.GREATER);break;case HS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=Xe}},setLocked:function(Xe){G=Xe},setClear:function(Xe){Je!==Xe&&(o.clearDepth(Xe),Je=Xe)},reset:function(){G=!1,Le=null,Re=null,Je=null}}}function h(){let G=!1,Le=null,Re=null,Je=null,Xe=null,Ct=null,Tt=null,Wt=null,Zt=null;return{setTest:function(Dt){G||(Dt?Be(o.STENCIL_TEST):qe(o.STENCIL_TEST))},setMask:function(Dt){Le!==Dt&&!G&&(o.stencilMask(Dt),Le=Dt)},setFunc:function(Dt,hn,qn){(Re!==Dt||Je!==hn||Xe!==qn)&&(o.stencilFunc(Dt,hn,qn),Re=Dt,Je=hn,Xe=qn)},setOp:function(Dt,hn,qn){(Ct!==Dt||Tt!==hn||Wt!==qn)&&(o.stencilOp(Dt,hn,qn),Ct=Dt,Tt=hn,Wt=qn)},setLocked:function(Dt){G=Dt},setClear:function(Dt){Zt!==Dt&&(o.clearStencil(Dt),Zt=Dt)},reset:function(){G=!1,Le=null,Re=null,Je=null,Xe=null,Ct=null,Tt=null,Wt=null,Zt=null}}}const d=new l,m=new u,p=new h,g=new WeakMap,x=new WeakMap;let y={},b={},A=new WeakMap,T=[],S=null,v=!1,B=null,C=null,P=null,Y=null,H=null,I=null,_e=null,D=new Et(0,0,0),U=0,ue=!1,ge=null,Te=null,j=null,ie=null,z=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,fe=0;const de=o.getParameter(o.VERSION);de.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(de)[1]),K=fe>=1):de.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),K=fe>=2);let L=null,X={};const k=o.getParameter(o.SCISSOR_BOX),Q=o.getParameter(o.VIEWPORT),ye=new gn().fromArray(k),Ee=new gn().fromArray(Q);function Ae(G,Le,Re,Je){const Xe=new Uint8Array(4),Ct=o.createTexture();o.bindTexture(G,Ct),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Tt=0;Tt<Re;Tt++)r&&(G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY)?o.texImage3D(Le,0,o.RGBA,1,1,Je,0,o.RGBA,o.UNSIGNED_BYTE,Xe):o.texImage2D(Le+Tt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Xe);return Ct}const Pe={};Pe[o.TEXTURE_2D]=Ae(o.TEXTURE_2D,o.TEXTURE_2D,1),Pe[o.TEXTURE_CUBE_MAP]=Ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Pe[o.TEXTURE_2D_ARRAY]=Ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Pe[o.TEXTURE_3D]=Ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Be(o.DEPTH_TEST),m.setFunc(xc),et(!1),N(Og),Be(o.CULL_FACE),Ie(Ga);function Be(G){y[G]!==!0&&(o.enable(G),y[G]=!0)}function qe(G){y[G]!==!1&&(o.disable(G),y[G]=!1)}function ct(G,Le){return b[G]!==Le?(o.bindFramebuffer(G,Le),b[G]=Le,r&&(G===o.DRAW_FRAMEBUFFER&&(b[o.FRAMEBUFFER]=Le),G===o.FRAMEBUFFER&&(b[o.DRAW_FRAMEBUFFER]=Le)),!0):!1}function te(G,Le){let Re=T,Je=!1;if(G)if(Re=A.get(Le),Re===void 0&&(Re=[],A.set(Le,Re)),G.isWebGLMultipleRenderTargets){const Xe=G.texture;if(Re.length!==Xe.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let Ct=0,Tt=Xe.length;Ct<Tt;Ct++)Re[Ct]=o.COLOR_ATTACHMENT0+Ct;Re.length=Xe.length,Je=!0}}else Re[0]!==o.COLOR_ATTACHMENT0&&(Re[0]=o.COLOR_ATTACHMENT0,Je=!0);else Re[0]!==o.BACK&&(Re[0]=o.BACK,Je=!0);Je&&(i.isWebGL2?o.drawBuffers(Re):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Jt(G){return S!==G?(o.useProgram(G),S=G,!0):!1}const Ve={[gr]:o.FUNC_ADD,[xS]:o.FUNC_SUBTRACT,[yS]:o.FUNC_REVERSE_SUBTRACT};if(r)Ve[Bg]=o.MIN,Ve[Ig]=o.MAX;else{const G=t.get("EXT_blend_minmax");G!==null&&(Ve[Bg]=G.MIN_EXT,Ve[Ig]=G.MAX_EXT)}const tt={[SS]:o.ZERO,[bS]:o.ONE,[MS]:o.SRC_COLOR,[Md]:o.SRC_ALPHA,[CS]:o.SRC_ALPHA_SATURATE,[wS]:o.DST_COLOR,[TS]:o.DST_ALPHA,[ES]:o.ONE_MINUS_SRC_COLOR,[Ed]:o.ONE_MINUS_SRC_ALPHA,[RS]:o.ONE_MINUS_DST_COLOR,[AS]:o.ONE_MINUS_DST_ALPHA,[DS]:o.CONSTANT_COLOR,[LS]:o.ONE_MINUS_CONSTANT_COLOR,[NS]:o.CONSTANT_ALPHA,[US]:o.ONE_MINUS_CONSTANT_ALPHA};function Ie(G,Le,Re,Je,Xe,Ct,Tt,Wt,Zt,Dt){if(G===Ga){v===!0&&(qe(o.BLEND),v=!1);return}if(v===!1&&(Be(o.BLEND),v=!0),G!==_S){if(G!==B||Dt!==ue){if((C!==gr||H!==gr)&&(o.blendEquation(o.FUNC_ADD),C=gr,H=gr),Dt)switch(G){case _s:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFunc(o.ONE,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _s:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case bd:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Pg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,Y=null,I=null,_e=null,D.set(0,0,0),U=0,B=G,ue=Dt}return}Xe=Xe||Le,Ct=Ct||Re,Tt=Tt||Je,(Le!==C||Xe!==H)&&(o.blendEquationSeparate(Ve[Le],Ve[Xe]),C=Le,H=Xe),(Re!==P||Je!==Y||Ct!==I||Tt!==_e)&&(o.blendFuncSeparate(tt[Re],tt[Je],tt[Ct],tt[Tt]),P=Re,Y=Je,I=Ct,_e=Tt),(Wt.equals(D)===!1||Zt!==U)&&(o.blendColor(Wt.r,Wt.g,Wt.b,Zt),D.copy(Wt),U=Zt),B=G,ue=!1}function zt(G,Le){G.side===ta?qe(o.CULL_FACE):Be(o.CULL_FACE);let Re=G.side===jn;Le&&(Re=!Re),et(Re),G.blending===_s&&G.transparent===!1?Ie(Ga):Ie(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),m.setFunc(G.depthFunc),m.setTest(G.depthTest),m.setMask(G.depthWrite),d.setMask(G.colorWrite);const Je=G.stencilWrite;p.setTest(Je),Je&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Be(o.SAMPLE_ALPHA_TO_COVERAGE):qe(o.SAMPLE_ALPHA_TO_COVERAGE)}function et(G){ge!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),ge=G)}function N(G){G!==mS?(Be(o.CULL_FACE),G!==Te&&(G===Og?o.cullFace(o.BACK):G===gS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):qe(o.CULL_FACE),Te=G}function w(G){G!==j&&(K&&o.lineWidth(G),j=G)}function ne(G,Le,Re){G?(Be(o.POLYGON_OFFSET_FILL),(ie!==Le||z!==Re)&&(o.polygonOffset(Le,Re),ie=Le,z=Re)):qe(o.POLYGON_OFFSET_FILL)}function Me(G){G?Be(o.SCISSOR_TEST):qe(o.SCISSOR_TEST)}function me(G){G===void 0&&(G=o.TEXTURE0+q-1),L!==G&&(o.activeTexture(G),L=G)}function O(G,Le,Re){Re===void 0&&(L===null?Re=o.TEXTURE0+q-1:Re=L);let Je=X[Re];Je===void 0&&(Je={type:void 0,texture:void 0},X[Re]=Je),(Je.type!==G||Je.texture!==Le)&&(L!==Re&&(o.activeTexture(Re),L=Re),o.bindTexture(G,Le||Pe[G]),Je.type=G,Je.texture=Le)}function ce(){const G=X[L];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function he(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Qe(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(G){ye.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),ye.copy(G))}function bt(G){Ee.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function kt(G,Le){let Re=x.get(Le);Re===void 0&&(Re=new WeakMap,x.set(Le,Re));let Je=Re.get(G);Je===void 0&&(Je=o.getUniformBlockIndex(Le,G.name),Re.set(G,Je))}function ut(G,Le){const Je=x.get(Le).get(G);g.get(Le)!==Je&&(o.uniformBlockBinding(Le,Je,G.__bindingPointIndex),g.set(Le,Je))}function we(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},L=null,X={},b={},A=new WeakMap,T=[],S=null,v=!1,B=null,C=null,P=null,Y=null,H=null,I=null,_e=null,D=new Et(0,0,0),U=0,ue=!1,ge=null,Te=null,j=null,ie=null,z=null,ye.set(0,0,o.canvas.width,o.canvas.height),Ee.set(0,0,o.canvas.width,o.canvas.height),d.reset(),m.reset(),p.reset()}return{buffers:{color:d,depth:m,stencil:p},enable:Be,disable:qe,bindFramebuffer:ct,drawBuffers:te,useProgram:Jt,setBlending:Ie,setMaterial:zt,setFlipSided:et,setCullFace:N,setLineWidth:w,setPolygonOffset:ne,setScissorTest:Me,activeTexture:me,bindTexture:O,unbindTexture:ce,compressedTexImage2D:he,compressedTexImage3D:be,texImage2D:Oe,texImage3D:Ue,updateUBOMapping:kt,uniformBlockBinding:ut,texStorage2D:nt,texStorage3D:Qe,texSubImage2D:De,texSubImage3D:Fe,compressedTexSubImage2D:Se,compressedTexSubImage3D:ht,scissor:Ye,viewport:bt,reset:we}}function m2(o,t,i,r,l,u,h){const d=l.isWebGL2,m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,w){return b?new OffscreenCanvas(N,w):Ec("canvas")}function T(N,w,ne,Me){let me=1;if((N.width>Me||N.height>Me)&&(me=Me/Math.max(N.width,N.height)),me<1||w===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const O=w?Ld:Math.floor,ce=O(me*N.width),he=O(me*N.height);x===void 0&&(x=A(ce,he));const be=ne?A(ce,he):x;return be.width=ce,be.height=he,be.getContext("2d").drawImage(N,0,0,ce,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+ce+"x"+he+")."),be}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function S(N){return p0(N.width)&&p0(N.height)}function v(N){return d?!1:N.wrapS!==On||N.wrapT!==On||N.minFilter!==Mn&&N.minFilter!==Dn}function B(N,w){return N.generateMipmaps&&w&&N.minFilter!==Mn&&N.minFilter!==Dn}function C(N){o.generateMipmap(N)}function P(N,w,ne,Me,me=!1){if(d===!1)return w;if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let O=w;if(w===o.RED&&(ne===o.FLOAT&&(O=o.R32F),ne===o.HALF_FLOAT&&(O=o.R16F),ne===o.UNSIGNED_BYTE&&(O=o.R8)),w===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(O=o.R8UI),ne===o.UNSIGNED_SHORT&&(O=o.R16UI),ne===o.UNSIGNED_INT&&(O=o.R32UI),ne===o.BYTE&&(O=o.R8I),ne===o.SHORT&&(O=o.R16I),ne===o.INT&&(O=o.R32I)),w===o.RG&&(ne===o.FLOAT&&(O=o.RG32F),ne===o.HALF_FLOAT&&(O=o.RG16F),ne===o.UNSIGNED_BYTE&&(O=o.RG8)),w===o.RGBA){const ce=me?yc:Ot.getTransfer(Me);ne===o.FLOAT&&(O=o.RGBA32F),ne===o.HALF_FLOAT&&(O=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(O=ce===Gt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(O=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(O=o.RGB5_A1)}return(O===o.R16F||O===o.R32F||O===o.RG16F||O===o.RG32F||O===o.RGBA16F||O===o.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function Y(N,w,ne){return B(N,ne)===!0||N.isFramebufferTexture&&N.minFilter!==Mn&&N.minFilter!==Dn?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function H(N){return N===Mn||N===Fg||N===kf?o.NEAREST:o.LINEAR}function I(N){const w=N.target;w.removeEventListener("dispose",I),D(w),w.isVideoTexture&&g.delete(w)}function _e(N){const w=N.target;w.removeEventListener("dispose",_e),ue(w)}function D(N){const w=r.get(N);if(w.__webglInit===void 0)return;const ne=N.source,Me=y.get(ne);if(Me){const me=Me[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&U(N),Object.keys(Me).length===0&&y.delete(ne)}r.remove(N)}function U(N){const w=r.get(N);o.deleteTexture(w.__webglTexture);const ne=N.source,Me=y.get(ne);delete Me[w.__cacheKey],h.memory.textures--}function ue(N){const w=N.texture,ne=r.get(N),Me=r.get(w);if(Me.__webglTexture!==void 0&&(o.deleteTexture(Me.__webglTexture),h.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(ne.__webglFramebuffer[me]))for(let O=0;O<ne.__webglFramebuffer[me].length;O++)o.deleteFramebuffer(ne.__webglFramebuffer[me][O]);else o.deleteFramebuffer(ne.__webglFramebuffer[me]);ne.__webglDepthbuffer&&o.deleteRenderbuffer(ne.__webglDepthbuffer[me])}else{if(Array.isArray(ne.__webglFramebuffer))for(let me=0;me<ne.__webglFramebuffer.length;me++)o.deleteFramebuffer(ne.__webglFramebuffer[me]);else o.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&o.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let me=0;me<ne.__webglColorRenderbuffer.length;me++)ne.__webglColorRenderbuffer[me]&&o.deleteRenderbuffer(ne.__webglColorRenderbuffer[me]);ne.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let me=0,O=w.length;me<O;me++){const ce=r.get(w[me]);ce.__webglTexture&&(o.deleteTexture(ce.__webglTexture),h.memory.textures--),r.remove(w[me])}r.remove(w),r.remove(N)}let ge=0;function Te(){ge=0}function j(){const N=ge;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),ge+=1,N}function ie(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function z(N,w){const ne=r.get(N);if(N.isVideoTexture&&zt(N),N.isRenderTargetTexture===!1&&N.version>0&&ne.__version!==N.version){const Me=N.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(ne,N,w);return}}i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+w)}function q(N,w){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){ye(ne,N,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+w)}function K(N,w){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){ye(ne,N,w);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+w)}function fe(N,w){const ne=r.get(N);if(N.version>0&&ne.__version!==N.version){Ee(ne,N,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+w)}const de={[wd]:o.REPEAT,[On]:o.CLAMP_TO_EDGE,[Rd]:o.MIRRORED_REPEAT},L={[Mn]:o.NEAREST,[Fg]:o.NEAREST_MIPMAP_NEAREST,[kf]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[ZS]:o.LINEAR_MIPMAP_NEAREST,[Lo]:o.LINEAR_MIPMAP_LINEAR},X={[lb]:o.NEVER,[pb]:o.ALWAYS,[cb]:o.LESS,[Av]:o.LEQUAL,[ub]:o.EQUAL,[hb]:o.GEQUAL,[fb]:o.GREATER,[db]:o.NOTEQUAL};function k(N,w,ne){if(ne?(o.texParameteri(N,o.TEXTURE_WRAP_S,de[w.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,de[w.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,de[w.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,L[w.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,L[w.minFilter])):(o.texParameteri(N,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(N,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==On||w.wrapT!==On)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(N,o.TEXTURE_MAG_FILTER,H(w.magFilter)),o.texParameteri(N,o.TEXTURE_MIN_FILTER,H(w.minFilter)),w.minFilter!==Mn&&w.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Me=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Mn||w.minFilter!==kf&&w.minFilter!==Lo||w.type===na&&t.has("OES_texture_float_linear")===!1||d===!1&&w.type===Ms&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(o.texParameterf(N,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function Q(N,w){let ne=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",I));const Me=w.source;let me=y.get(Me);me===void 0&&(me={},y.set(Me,me));const O=ie(w);if(O!==N.__cacheKey){me[O]===void 0&&(me[O]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ne=!0),me[O].usedTimes++;const ce=me[N.__cacheKey];ce!==void 0&&(me[N.__cacheKey].usedTimes--,ce.usedTimes===0&&U(w)),N.__cacheKey=O,N.__webglTexture=me[O].texture}return ne}function ye(N,w,ne){let Me=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=o.TEXTURE_3D);const me=Q(N,w),O=w.source;i.bindTexture(Me,N.__webglTexture,o.TEXTURE0+ne);const ce=r.get(O);if(O.version!==ce.__version||me===!0){i.activeTexture(o.TEXTURE0+ne);const he=Ot.getPrimaries(Ot.workingColorSpace),be=w.colorSpace===pi?null:Ot.getPrimaries(w.colorSpace),De=w.colorSpace===pi||he===be?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Fe=v(w)&&S(w.image)===!1;let Se=T(w.image,Fe,!1,l.maxTextureSize);Se=et(w,Se);const ht=S(Se)||d,nt=u.convert(w.format,w.colorSpace);let Qe=u.convert(w.type),Oe=P(w.internalFormat,nt,Qe,w.colorSpace,w.isVideoTexture);k(Me,w,ht);let Ue;const Ye=w.mipmaps,bt=d&&w.isVideoTexture!==!0&&Oe!==Ev,kt=ce.__version===void 0||me===!0,ut=Y(w,Se,ht);if(w.isDepthTexture)Oe=o.DEPTH_COMPONENT,d?w.type===na?Oe=o.DEPTH_COMPONENT32F:w.type===Ha?Oe=o.DEPTH_COMPONENT24:w.type===_r?Oe=o.DEPTH24_STENCIL8:Oe=o.DEPTH_COMPONENT16:w.type===na&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===xr&&Oe===o.DEPTH_COMPONENT&&w.type!==Bd&&w.type!==Ha&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ha,Qe=u.convert(w.type)),w.format===Es&&Oe===o.DEPTH_COMPONENT&&(Oe=o.DEPTH_STENCIL,w.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=_r,Qe=u.convert(w.type))),kt&&(bt?i.texStorage2D(o.TEXTURE_2D,1,Oe,Se.width,Se.height):i.texImage2D(o.TEXTURE_2D,0,Oe,Se.width,Se.height,0,nt,Qe,null));else if(w.isDataTexture)if(Ye.length>0&&ht){bt&&kt&&i.texStorage2D(o.TEXTURE_2D,ut,Oe,Ye[0].width,Ye[0].height);for(let we=0,G=Ye.length;we<G;we++)Ue=Ye[we],bt?i.texSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,nt,Qe,Ue.data):i.texImage2D(o.TEXTURE_2D,we,Oe,Ue.width,Ue.height,0,nt,Qe,Ue.data);w.generateMipmaps=!1}else bt?(kt&&i.texStorage2D(o.TEXTURE_2D,ut,Oe,Se.width,Se.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,nt,Qe,Se.data)):i.texImage2D(o.TEXTURE_2D,0,Oe,Se.width,Se.height,0,nt,Qe,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){bt&&kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ut,Oe,Ye[0].width,Ye[0].height,Se.depth);for(let we=0,G=Ye.length;we<G;we++)Ue=Ye[we],w.format!==hi?nt!==null?bt?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Se.depth,nt,Ue.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,we,Oe,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?i.texSubImage3D(o.TEXTURE_2D_ARRAY,we,0,0,0,Ue.width,Ue.height,Se.depth,nt,Qe,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,we,Oe,Ue.width,Ue.height,Se.depth,0,nt,Qe,Ue.data)}else{bt&&kt&&i.texStorage2D(o.TEXTURE_2D,ut,Oe,Ye[0].width,Ye[0].height);for(let we=0,G=Ye.length;we<G;we++)Ue=Ye[we],w.format!==hi?nt!==null?bt?i.compressedTexSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,nt,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,we,Oe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?i.texSubImage2D(o.TEXTURE_2D,we,0,0,Ue.width,Ue.height,nt,Qe,Ue.data):i.texImage2D(o.TEXTURE_2D,we,Oe,Ue.width,Ue.height,0,nt,Qe,Ue.data)}else if(w.isDataArrayTexture)bt?(kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ut,Oe,Se.width,Se.height,Se.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,nt,Qe,Se.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,Se.width,Se.height,Se.depth,0,nt,Qe,Se.data);else if(w.isData3DTexture)bt?(kt&&i.texStorage3D(o.TEXTURE_3D,ut,Oe,Se.width,Se.height,Se.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,nt,Qe,Se.data)):i.texImage3D(o.TEXTURE_3D,0,Oe,Se.width,Se.height,Se.depth,0,nt,Qe,Se.data);else if(w.isFramebufferTexture){if(kt)if(bt)i.texStorage2D(o.TEXTURE_2D,ut,Oe,Se.width,Se.height);else{let we=Se.width,G=Se.height;for(let Le=0;Le<ut;Le++)i.texImage2D(o.TEXTURE_2D,Le,Oe,we,G,0,nt,Qe,null),we>>=1,G>>=1}}else if(Ye.length>0&&ht){bt&&kt&&i.texStorage2D(o.TEXTURE_2D,ut,Oe,Ye[0].width,Ye[0].height);for(let we=0,G=Ye.length;we<G;we++)Ue=Ye[we],bt?i.texSubImage2D(o.TEXTURE_2D,we,0,0,nt,Qe,Ue):i.texImage2D(o.TEXTURE_2D,we,Oe,nt,Qe,Ue);w.generateMipmaps=!1}else bt?(kt&&i.texStorage2D(o.TEXTURE_2D,ut,Oe,Se.width,Se.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,nt,Qe,Se)):i.texImage2D(o.TEXTURE_2D,0,Oe,nt,Qe,Se);B(w,ht)&&C(Me),ce.__version=O.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ee(N,w,ne){if(w.image.length!==6)return;const Me=Q(N,w),me=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+ne);const O=r.get(me);if(me.version!==O.__version||Me===!0){i.activeTexture(o.TEXTURE0+ne);const ce=Ot.getPrimaries(Ot.workingColorSpace),he=w.colorSpace===pi?null:Ot.getPrimaries(w.colorSpace),be=w.colorSpace===pi||ce===he?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,Fe=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let we=0;we<6;we++)!De&&!Fe?Se[we]=T(w.image[we],!1,!0,l.maxCubemapSize):Se[we]=Fe?w.image[we].image:w.image[we],Se[we]=et(w,Se[we]);const ht=Se[0],nt=S(ht)||d,Qe=u.convert(w.format,w.colorSpace),Oe=u.convert(w.type),Ue=P(w.internalFormat,Qe,Oe,w.colorSpace),Ye=d&&w.isVideoTexture!==!0,bt=O.__version===void 0||Me===!0;let kt=Y(w,ht,nt);k(o.TEXTURE_CUBE_MAP,w,nt);let ut;if(De){Ye&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Ue,ht.width,ht.height);for(let we=0;we<6;we++){ut=Se[we].mipmaps;for(let G=0;G<ut.length;G++){const Le=ut[G];w.format!==hi?Qe!==null?Ye?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Le.width,Le.height,Qe,Le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,0,0,Le.width,Le.height,Qe,Oe,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G,Ue,Le.width,Le.height,0,Qe,Oe,Le.data)}}}else{ut=w.mipmaps,Ye&&bt&&(ut.length>0&&kt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Ue,Se[0].width,Se[0].height));for(let we=0;we<6;we++)if(Fe){Ye?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Se[we].width,Se[we].height,Qe,Oe,Se[we].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ue,Se[we].width,Se[we].height,0,Qe,Oe,Se[we].data);for(let G=0;G<ut.length;G++){const Re=ut[G].image[we].image;Ye?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,Re.width,Re.height,Qe,Oe,Re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ue,Re.width,Re.height,0,Qe,Oe,Re.data)}}else{Ye?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Qe,Oe,Se[we]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ue,Qe,Oe,Se[we]);for(let G=0;G<ut.length;G++){const Le=ut[G];Ye?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,0,0,Qe,Oe,Le.image[we]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+we,G+1,Ue,Qe,Oe,Le.image[we])}}}B(w,nt)&&C(o.TEXTURE_CUBE_MAP),O.__version=me.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ae(N,w,ne,Me,me,O){const ce=u.convert(ne.format,ne.colorSpace),he=u.convert(ne.type),be=P(ne.internalFormat,ce,he,ne.colorSpace);if(!r.get(w).__hasExternalTextures){const Fe=Math.max(1,w.width>>O),Se=Math.max(1,w.height>>O);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?i.texImage3D(me,O,be,Fe,Se,w.depth,0,ce,he,null):i.texImage2D(me,O,be,Fe,Se,0,ce,he,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ie(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Me,me,r.get(ne).__webglTexture,0,tt(w)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Me,me,r.get(ne).__webglTexture,O),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(N,w,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,N),w.depthBuffer&&!w.stencilBuffer){let Me=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(ne||Ie(w)){const me=w.depthTexture;me&&me.isDepthTexture&&(me.type===na?Me=o.DEPTH_COMPONENT32F:me.type===Ha&&(Me=o.DEPTH_COMPONENT24));const O=tt(w);Ie(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,O,Me,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,O,Me,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,Me,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,N)}else if(w.depthBuffer&&w.stencilBuffer){const Me=tt(w);ne&&Ie(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,o.DEPTH24_STENCIL8,w.width,w.height):Ie(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,N)}else{const Me=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let me=0;me<Me.length;me++){const O=Me[me],ce=u.convert(O.format,O.colorSpace),he=u.convert(O.type),be=P(O.internalFormat,ce,he,O.colorSpace),De=tt(w);ne&&Ie(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,De,be,w.width,w.height):Ie(w)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,De,be,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,be,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Be(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const Me=r.get(w.depthTexture).__webglTexture,me=tt(w);if(w.depthTexture.format===xr)Ie(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0);else if(w.depthTexture.format===Es)Ie(w)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0,me):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function qe(N){const w=r.get(N),ne=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Be(w.__webglFramebuffer,N)}else if(ne){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]=o.createRenderbuffer(),Pe(w.__webglDepthbuffer[Me],N,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Pe(w.__webglDepthbuffer,N,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(N,w,ne){const Me=r.get(N);w!==void 0&&Ae(Me.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&qe(N)}function te(N){const w=N.texture,ne=r.get(N),Me=r.get(w);N.addEventListener("dispose",_e),N.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=o.createTexture()),Me.__version=w.version,h.memory.textures++);const me=N.isWebGLCubeRenderTarget===!0,O=N.isWebGLMultipleRenderTargets===!0,ce=S(N)||d;if(me){ne.__webglFramebuffer=[];for(let he=0;he<6;he++)if(d&&w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[he]=[];for(let be=0;be<w.mipmaps.length;be++)ne.__webglFramebuffer[he][be]=o.createFramebuffer()}else ne.__webglFramebuffer[he]=o.createFramebuffer()}else{if(d&&w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)ne.__webglFramebuffer[he]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(O)if(l.drawBuffers){const he=N.texture;for(let be=0,De=he.length;be<De;be++){const Fe=r.get(he[be]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&N.samples>0&&Ie(N)===!1){const he=O?w:[w];ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const De=he[be];ne.__webglColorRenderbuffer[be]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[be]);const Fe=u.convert(De.format,De.colorSpace),Se=u.convert(De.type),ht=P(De.internalFormat,Fe,Se,De.colorSpace,N.isXRRenderTarget===!0),nt=tt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,nt,ht,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+be,o.RENDERBUFFER,ne.__webglColorRenderbuffer[be])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),Pe(ne.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(me){i.bindTexture(o.TEXTURE_CUBE_MAP,Me.__webglTexture),k(o.TEXTURE_CUBE_MAP,w,ce);for(let he=0;he<6;he++)if(d&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Ae(ne.__webglFramebuffer[he][be],N,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,be);else Ae(ne.__webglFramebuffer[he],N,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);B(w,ce)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(O){const he=N.texture;for(let be=0,De=he.length;be<De;be++){const Fe=he[be],Se=r.get(Fe);i.bindTexture(o.TEXTURE_2D,Se.__webglTexture),k(o.TEXTURE_2D,Fe,ce),Ae(ne.__webglFramebuffer,N,Fe,o.COLOR_ATTACHMENT0+be,o.TEXTURE_2D,0),B(Fe,ce)&&C(o.TEXTURE_2D)}i.unbindTexture()}else{let he=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(d?he=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(he,Me.__webglTexture),k(he,w,ce),d&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)Ae(ne.__webglFramebuffer[be],N,w,o.COLOR_ATTACHMENT0,he,be);else Ae(ne.__webglFramebuffer,N,w,o.COLOR_ATTACHMENT0,he,0);B(w,ce)&&C(he),i.unbindTexture()}N.depthBuffer&&qe(N)}function Jt(N){const w=S(N)||d,ne=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let Me=0,me=ne.length;Me<me;Me++){const O=ne[Me];if(B(O,w)){const ce=N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,he=r.get(O).__webglTexture;i.bindTexture(ce,he),C(ce),i.unbindTexture()}}}function Ve(N){if(d&&N.samples>0&&Ie(N)===!1){const w=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],ne=N.width,Me=N.height;let me=o.COLOR_BUFFER_BIT;const O=[],ce=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=r.get(N),be=N.isWebGLMultipleRenderTargets===!0;if(be)for(let De=0;De<w.length;De++)i.bindFramebuffer(o.FRAMEBUFFER,he.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,he.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let De=0;De<w.length;De++){O.push(o.COLOR_ATTACHMENT0+De),N.depthBuffer&&O.push(ce);const Fe=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Fe===!1&&(N.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),be&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,he.__webglColorRenderbuffer[De]),Fe===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ce]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ce])),be){const Se=r.get(w[De]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,ne,Me,0,0,ne,Me,me,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,O)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),be)for(let De=0;De<w.length;De++){i.bindFramebuffer(o.FRAMEBUFFER,he.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.RENDERBUFFER,he.__webglColorRenderbuffer[De]);const Fe=r.get(w[De]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,he.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+De,o.TEXTURE_2D,Fe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function tt(N){return Math.min(l.maxSamples,N.samples)}function Ie(N){const w=r.get(N);return d&&N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function zt(N){const w=h.render.frame;g.get(N)!==w&&(g.set(N,w),N.update())}function et(N,w){const ne=N.colorSpace,Me=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===Cd||ne!==ra&&ne!==pi&&(Ot.getTransfer(ne)===Gt?d===!1?t.has("EXT_sRGB")===!0&&Me===hi?(N.format=Cd,N.minFilter=Dn,N.generateMipmaps=!1):w=Rv.sRGBToLinear(w):(Me!==hi||me!==ka)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),w}this.allocateTextureUnit=j,this.resetTextureUnits=Te,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=fe,this.rebindTextures=ct,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ie}function g2(o,t,i){const r=i.isWebGL2;function l(u,h=pi){let d;const m=Ot.getTransfer(h);if(u===ka)return o.UNSIGNED_BYTE;if(u===xv)return o.UNSIGNED_SHORT_4_4_4_4;if(u===yv)return o.UNSIGNED_SHORT_5_5_5_1;if(u===KS)return o.BYTE;if(u===QS)return o.SHORT;if(u===Bd)return o.UNSIGNED_SHORT;if(u===_v)return o.INT;if(u===Ha)return o.UNSIGNED_INT;if(u===na)return o.FLOAT;if(u===Ms)return r?o.HALF_FLOAT:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===JS)return o.ALPHA;if(u===hi)return o.RGBA;if(u===$S)return o.LUMINANCE;if(u===eb)return o.LUMINANCE_ALPHA;if(u===xr)return o.DEPTH_COMPONENT;if(u===Es)return o.DEPTH_STENCIL;if(u===Cd)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===tb)return o.RED;if(u===Sv)return o.RED_INTEGER;if(u===nb)return o.RG;if(u===bv)return o.RG_INTEGER;if(u===Mv)return o.RGBA_INTEGER;if(u===jf||u===Xf||u===Wf||u===qf)if(m===Gt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===jf)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Xf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Wf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===qf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===jf)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Xf)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Wf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===qf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Hg||u===Gg||u===Vg||u===kg)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===Hg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Gg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Vg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===kg)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===Ev)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===jg||u===Xg)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(u===jg)return m===Gt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Xg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Wg||u===qg||u===Yg||u===Zg||u===Kg||u===Qg||u===Jg||u===$g||u===e0||u===t0||u===n0||u===i0||u===a0||u===r0)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Wg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===qg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Yg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Zg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Kg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Qg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Jg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===$g)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===e0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===t0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===n0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===i0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===a0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===r0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Yf||u===s0||u===o0)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(u===Yf)return m===Gt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===s0)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===o0)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===ib||u===l0||u===c0||u===u0)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(u===Yf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===l0)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===c0)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===u0)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===_r?r?o.UNSIGNED_INT_24_8:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class v2 extends Mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _2={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,r),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),b=.02,A=.005;p.inputState.pinching&&y>b+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=b-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_2)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class x2 extends As{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,y=null,b=null,A=null;const T=i.getContextAttributes();let S=null,v=null;const B=[],C=[],P=new st;let Y=null;const H=new Mi;H.layers.enable(1),H.viewport=new gn;const I=new Mi;I.layers.enable(2),I.viewport=new gn;const _e=[H,I],D=new v2;D.layers.enable(1),D.layers.enable(2);let U=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=B[k];return Q===void 0&&(Q=new xd,B[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=B[k];return Q===void 0&&(Q=new xd,B[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=B[k];return Q===void 0&&(Q=new xd,B[k]=Q),Q.getHandSpace()};function ge(k){const Q=C.indexOf(k.inputSource);if(Q===-1)return;const ye=B[Q];ye!==void 0&&(ye.update(k.inputSource,k.frame,p||h),ye.dispatchEvent({type:k.type,data:k.inputSource}))}function Te(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",Te),l.removeEventListener("inputsourceschange",j);for(let k=0;k<B.length;k++){const Q=C[k];Q!==null&&(C[k]=null,B[k].disconnect(Q))}U=null,ue=null,t.setRenderTarget(S),b=null,y=null,x=null,l=null,v=null,X.stop(),r.isPresenting=!1,t.setPixelRatio(Y),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",Te),l.addEventListener("inputsourceschange",j),T.xrCompatible!==!0&&await i.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(P),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Q),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),v=new Xa(b.framebufferWidth,b.framebufferHeight,{format:hi,type:ka,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil})}else{let Q=null,ye=null,Ee=null;T.depth&&(Ee=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Q=T.stencil?Es:xr,ye=T.stencil?_r:Ha);const Ae={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Ae),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),v=new Xa(y.textureWidth,y.textureHeight,{format:hi,type:ka,depthTexture:new Gv(y.textureWidth,y.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0});const Pe=t.properties.get(v);Pe.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),X.setContext(l),X.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function j(k){for(let Q=0;Q<k.removed.length;Q++){const ye=k.removed[Q],Ee=C.indexOf(ye);Ee>=0&&(C[Ee]=null,B[Ee].disconnect(ye))}for(let Q=0;Q<k.added.length;Q++){const ye=k.added[Q];let Ee=C.indexOf(ye);if(Ee===-1){for(let Pe=0;Pe<B.length;Pe++)if(Pe>=C.length){C.push(ye),Ee=Pe;break}else if(C[Pe]===null){C[Pe]=ye,Ee=Pe;break}if(Ee===-1)break}const Ae=B[Ee];Ae&&Ae.connect(ye)}}const ie=new re,z=new re;function q(k,Q,ye){ie.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(ye.matrixWorld);const Ee=ie.distanceTo(z),Ae=Q.projectionMatrix.elements,Pe=ye.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),qe=Ae[14]/(Ae[10]+1),ct=(Ae[9]+1)/Ae[5],te=(Ae[9]-1)/Ae[5],Jt=(Ae[8]-1)/Ae[0],Ve=(Pe[8]+1)/Pe[0],tt=Be*Jt,Ie=Be*Ve,zt=Ee/(-Jt+Ve),et=zt*-Jt;Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(et),k.translateZ(zt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const N=Be+zt,w=qe+zt,ne=tt-et,Me=Ie+(Ee-et),me=ct*qe/w*N,O=te*qe/w*N;k.projectionMatrix.makePerspective(ne,Me,me,O,N,w),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function K(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;D.near=I.near=H.near=k.near,D.far=I.far=H.far=k.far,(U!==D.near||ue!==D.far)&&(l.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,ue=D.far);const Q=k.parent,ye=D.cameras;K(D,Q);for(let Ee=0;Ee<ye.length;Ee++)K(ye[Ee],Q);ye.length===2?q(D,H,I):D.projectionMatrix.copy(H.projectionMatrix),fe(k,D,Q)};function fe(k,Q,ye){ye===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(ye.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Dd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(k){m=k,y!==null&&(y.fixedFoveation=k),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=k)};let de=null;function L(k,Q){if(g=Q.getViewerPose(p||h),A=Q,g!==null){const ye=g.views;b!==null&&(t.setRenderTargetFramebuffer(v,b.framebuffer),t.setRenderTarget(v));let Ee=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,Ee=!0);for(let Ae=0;Ae<ye.length;Ae++){const Pe=ye[Ae];let Be=null;if(b!==null)Be=b.getViewport(Pe);else{const ct=x.getViewSubImage(y,Pe);Be=ct.viewport,Ae===0&&(t.setRenderTargetTextures(v,ct.colorTexture,y.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(v))}let qe=_e[Ae];qe===void 0&&(qe=new Mi,qe.layers.enable(Ae),qe.viewport=new gn,_e[Ae]=qe),qe.matrix.fromArray(Pe.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Pe.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ae===0&&(D.matrix.copy(qe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ee===!0&&D.cameras.push(qe)}}for(let ye=0;ye<B.length;ye++){const Ee=C[ye],Ae=B[ye];Ee!==null&&Ae!==void 0&&Ae.update(Ee,Q,p||h)}de&&de(k,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),A=null}const X=new Hv;X.setAnimationLoop(L),this.setAnimationLoop=function(k){de=k},this.dispose=function(){}}}function y2(o,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Bv(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,B,C,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&b(S,v,P)):v.isMeshMatcapMaterial?(u(S,v),A(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),T(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,B,C):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===jn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===jn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const B=t.get(v).envMap;if(B&&(S.envMap.value=B,S.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const C=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*C,i(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,B,C){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*B,S.scale.value=C*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),t.get(v).envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,B){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===jn&&S.clearcoatNormalScale.value.negate())),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const B=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function S2(o,t,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(B,C){const P=C.program;r.uniformBlockBinding(B,P)}function p(B,C){let P=l[B.id];P===void 0&&(A(B),P=g(B),l[B.id]=P,B.addEventListener("dispose",S));const Y=C.program;r.updateUBOMapping(B,Y);const H=t.render.frame;u[B.id]!==H&&(y(B),u[B.id]=H)}function g(B){const C=x();B.__bindingPointIndex=C;const P=o.createBuffer(),Y=B.__size,H=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,Y,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,P),P}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const C=l[B.id],P=B.uniforms,Y=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,I=P.length;H<I;H++){const _e=Array.isArray(P[H])?P[H]:[P[H]];for(let D=0,U=_e.length;D<U;D++){const ue=_e[D];if(b(ue,H,D,Y)===!0){const ge=ue.__offset,Te=Array.isArray(ue.value)?ue.value:[ue.value];let j=0;for(let ie=0;ie<Te.length;ie++){const z=Te[ie],q=T(z);typeof z=="number"||typeof z=="boolean"?(ue.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ge+j,ue.__data)):z.isMatrix3?(ue.__data[0]=z.elements[0],ue.__data[1]=z.elements[1],ue.__data[2]=z.elements[2],ue.__data[3]=0,ue.__data[4]=z.elements[3],ue.__data[5]=z.elements[4],ue.__data[6]=z.elements[5],ue.__data[7]=0,ue.__data[8]=z.elements[6],ue.__data[9]=z.elements[7],ue.__data[10]=z.elements[8],ue.__data[11]=0):(z.toArray(ue.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ge,ue.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(B,C,P,Y){const H=B.value,I=C+"_"+P;if(Y[I]===void 0)return typeof H=="number"||typeof H=="boolean"?Y[I]=H:Y[I]=H.clone(),!0;{const _e=Y[I];if(typeof H=="number"||typeof H=="boolean"){if(_e!==H)return Y[I]=H,!0}else if(_e.equals(H)===!1)return _e.copy(H),!0}return!1}function A(B){const C=B.uniforms;let P=0;const Y=16;for(let I=0,_e=C.length;I<_e;I++){const D=Array.isArray(C[I])?C[I]:[C[I]];for(let U=0,ue=D.length;U<ue;U++){const ge=D[U],Te=Array.isArray(ge.value)?ge.value:[ge.value];for(let j=0,ie=Te.length;j<ie;j++){const z=Te[j],q=T(z),K=P%Y;K!==0&&Y-K<q.boundary&&(P+=Y-K),ge.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=P,P+=q.storage}}}const H=P%Y;return H>0&&(P+=Y-H),B.__size=P,B.__cache={},this}function T(B){const C={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(C.boundary=4,C.storage=4):B.isVector2?(C.boundary=8,C.storage=8):B.isVector3||B.isColor?(C.boundary=16,C.storage=12):B.isVector4?(C.boundary=16,C.storage=16):B.isMatrix3?(C.boundary=48,C.storage=48):B.isMatrix4?(C.boundary=64,C.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),C}function S(B){const C=B.target;C.removeEventListener("dispose",S);const P=h.indexOf(C.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class qv{constructor(t={}){const{canvas:i=gb(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=t;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=h;const b=new Uint32Array(4),A=new Int32Array(4);let T=null,S=null;const v=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this._useLegacyLights=!1,this.toneMapping=Va,this.toneMappingExposure=1;const C=this;let P=!1,Y=0,H=0,I=null,_e=-1,D=null;const U=new gn,ue=new gn;let ge=null;const Te=new Et(0);let j=0,ie=i.width,z=i.height,q=1,K=null,fe=null;const de=new gn(0,0,ie,z),L=new gn(0,0,ie,z);let X=!1;const k=new Fv;let Q=!1,ye=!1,Ee=null;const Ae=new vn,Pe=new st,Be=new re,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return I===null?q:1}let te=r;function Jt(R,Z){for(let se=0;se<R.length;se++){const oe=R[se],ae=i.getContext(oe,Z);if(ae!==null)return ae}return null}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",G,!1),i.addEventListener("webglcontextcreationerror",Le,!1),te===null){const Z=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&Z.shift(),te=Jt(Z,R),te===null)throw Jt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ve,tt,Ie,zt,et,N,w,ne,Me,me,O,ce,he,be,De,Fe,Se,ht,nt,Qe,Oe,Ue,Ye,bt;function kt(){Ve=new L1(te),tt=new E1(te,Ve,t),Ve.init(tt),Ue=new g2(te,Ve,tt),Ie=new p2(te,Ve,tt),zt=new O1(te),et=new e2,N=new m2(te,Ve,Ie,et,tt,Ue,zt),w=new A1(C),ne=new D1(C),Me=new Gb(te,tt),Ye=new b1(te,Ve,Me,tt),me=new N1(te,Me,zt,Ye),O=new I1(te,me,Me,zt),nt=new B1(te,tt,N),Fe=new T1(et),ce=new $T(C,w,ne,Ve,tt,Ye,Fe),he=new y2(C,et),be=new n2,De=new l2(Ve,tt),ht=new S1(C,w,ne,Ie,O,y,m),Se=new h2(C,O,tt),bt=new S2(te,zt,tt,Ie),Qe=new M1(te,Ve,zt,tt),Oe=new U1(te,Ve,zt,tt),zt.programs=ce.programs,C.capabilities=tt,C.extensions=Ve,C.properties=et,C.renderLists=be,C.shadowMap=Se,C.state=Ie,C.info=zt}kt();const ut=new x2(C,te);this.xr=ut,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const R=Ve.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ve.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(ie,z,!1))},this.getSize=function(R){return R.set(ie,z)},this.setSize=function(R,Z,se=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=R,z=Z,i.width=Math.floor(R*q),i.height=Math.floor(Z*q),se===!0&&(i.style.width=R+"px",i.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(ie*q,z*q).floor()},this.setDrawingBufferSize=function(R,Z,se){ie=R,z=Z,q=se,i.width=Math.floor(R*se),i.height=Math.floor(Z*se),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(de)},this.setViewport=function(R,Z,se,oe){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,Z,se,oe),Ie.viewport(U.copy(de).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(L)},this.setScissor=function(R,Z,se,oe){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,Z,se,oe),Ie.scissor(ue.copy(L).multiplyScalar(q).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(R){Ie.setScissorTest(X=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(R=!0,Z=!0,se=!0){let oe=0;if(R){let ae=!1;if(I!==null){const Ne=I.texture.format;ae=Ne===Mv||Ne===bv||Ne===Sv}if(ae){const Ne=I.texture.type,He=Ne===ka||Ne===Ha||Ne===Bd||Ne===_r||Ne===xv||Ne===yv,Ze=ht.getClearColor(),Ke=ht.getClearAlpha(),je=Ze.r,it=Ze.g,at=Ze.b;He?(b[0]=je,b[1]=it,b[2]=at,b[3]=Ke,te.clearBufferuiv(te.COLOR,0,b)):(A[0]=je,A[1]=it,A[2]=at,A[3]=Ke,te.clearBufferiv(te.COLOR,0,A))}else oe|=te.COLOR_BUFFER_BIT}Z&&(oe|=te.DEPTH_BUFFER_BIT),se&&(oe|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",G,!1),i.removeEventListener("webglcontextcreationerror",Le,!1),be.dispose(),De.dispose(),et.dispose(),w.dispose(),ne.dispose(),O.dispose(),Ye.dispose(),bt.dispose(),ce.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Zt),ut.removeEventListener("sessionend",Dt),Ee&&(Ee.dispose(),Ee=null),hn.stop()};function we(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=zt.autoReset,Z=Se.enabled,se=Se.autoUpdate,oe=Se.needsUpdate,ae=Se.type;kt(),zt.autoReset=R,Se.enabled=Z,Se.autoUpdate=se,Se.needsUpdate=oe,Se.type=ae}function Le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){const Z=R.target;Z.removeEventListener("dispose",Re),Je(Z)}function Je(R){Xe(R),et.remove(R)}function Xe(R){const Z=et.get(R).programs;Z!==void 0&&(Z.forEach(function(se){ce.releaseProgram(se)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,se,oe,ae,Ne){Z===null&&(Z=qe);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,Ze=Tn(R,Z,se,oe,ae);Ie.setMaterial(oe,He);let Ke=se.index,je=1;if(oe.wireframe===!0){if(Ke=me.getWireframeAttribute(se),Ke===void 0)return;je=2}const it=se.drawRange,at=se.attributes.position;let At=it.start*je,en=(it.start+it.count)*je;Ne!==null&&(At=Math.max(At,Ne.start*je),en=Math.min(en,(Ne.start+Ne.count)*je)),Ke!==null?(At=Math.max(At,0),en=Math.min(en,Ke.count)):at!=null&&(At=Math.max(At,0),en=Math.min(en,at.count));const tn=en-At;if(tn<0||tn===1/0)return;Ye.setup(ae,oe,Ze,se,Ke);let ii,It=Qe;if(Ke!==null&&(ii=Me.get(Ke),It=Oe,It.setIndex(ii)),ae.isMesh)oe.wireframe===!0?(Ie.setLineWidth(oe.wireframeLinewidth*ct()),It.setMode(te.LINES)):It.setMode(te.TRIANGLES);else if(ae.isLine){let ft=oe.linewidth;ft===void 0&&(ft=1),Ie.setLineWidth(ft*ct()),ae.isLineSegments?It.setMode(te.LINES):ae.isLineLoop?It.setMode(te.LINE_LOOP):It.setMode(te.LINE_STRIP)}else ae.isPoints?It.setMode(te.POINTS):ae.isSprite&&It.setMode(te.TRIANGLES);if(ae.isBatchedMesh)It.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)It.renderInstances(At,tn,ae.count);else if(se.isInstancedBufferGeometry){const ft=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,ca=Math.min(se.instanceCount,ft);It.renderInstances(At,tn,ca)}else It.render(At,tn)};function Ct(R,Z,se){R.transparent===!0&&R.side===ta&&R.forceSinglePass===!1?(R.side=jn,R.needsUpdate=!0,qa(R,Z,se),R.side=ja,R.needsUpdate=!0,qa(R,Z,se),R.side=ta):qa(R,Z,se)}this.compile=function(R,Z,se=null){se===null&&(se=R),S=De.get(se),S.init(),B.push(S),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(S.pushLight(ae),ae.castShadow&&S.pushShadow(ae))}),R!==se&&R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(S.pushLight(ae),ae.castShadow&&S.pushShadow(ae))}),S.setupLights(C._useLegacyLights);const oe=new Set;return R.traverse(function(ae){const Ne=ae.material;if(Ne)if(Array.isArray(Ne))for(let He=0;He<Ne.length;He++){const Ze=Ne[He];Ct(Ze,se,ae),oe.add(Ze)}else Ct(Ne,se,ae),oe.add(Ne)}),B.pop(),S=null,oe},this.compileAsync=function(R,Z,se=null){const oe=this.compile(R,Z,se);return new Promise(ae=>{function Ne(){if(oe.forEach(function(He){et.get(He).currentProgram.isReady()&&oe.delete(He)}),oe.size===0){ae(R);return}setTimeout(Ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Tt=null;function Wt(R){Tt&&Tt(R)}function Zt(){hn.stop()}function Dt(){hn.start()}const hn=new Hv;hn.setAnimationLoop(Wt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(R){Tt=R,ut.setAnimationLoop(R),R===null?hn.stop():hn.start()},ut.addEventListener("sessionstart",Zt),ut.addEventListener("sessionend",Dt),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(Z),Z=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,Z,I),S=De.get(R,B.length),S.init(),B.push(S),Ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),k.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,Q=Fe.init(this.clippingPlanes,ye),T=be.get(R,v.length),T.init(),v.push(T),qn(R,Z,0,C.sortObjects),T.finish(),C.sortObjects===!0&&T.sort(K,fe),this.info.render.frame++,Q===!0&&Fe.beginShadows();const se=S.state.shadowsArray;if(Se.render(se,R,Z),Q===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(T,R),S.setupLights(C._useLegacyLights),Z.isArrayCamera){const oe=Z.cameras;for(let ae=0,Ne=oe.length;ae<Ne;ae++){const He=oe[ae];Rs(T,R,He,He.viewport)}}else Rs(T,R,Z);I!==null&&(N.updateMultisampleRenderTarget(I),N.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(C,R,Z),Ye.resetDefaultState(),_e=-1,D=null,B.pop(),B.length>0?S=B[B.length-1]:S=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function qn(R,Z,se,oe){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||k.intersectsSprite(R)){oe&&Be.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const He=O.update(R),Ze=R.material;Ze.visible&&T.push(R,He,Ze,se,Be.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||k.intersectsObject(R))){const He=O.update(R),Ze=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Be.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Be.copy(He.boundingSphere.center)),Be.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ze)){const Ke=He.groups;for(let je=0,it=Ke.length;je<it;je++){const at=Ke[je],At=Ze[at.materialIndex];At&&At.visible&&T.push(R,He,At,se,Be.z,at)}}else Ze.visible&&T.push(R,He,Ze,se,Be.z,null)}}const Ne=R.children;for(let He=0,Ze=Ne.length;He<Ze;He++)qn(Ne[He],Z,se,oe)}function Rs(R,Z,se,oe){const ae=R.opaque,Ne=R.transmissive,He=R.transparent;S.setupLightsView(se),Q===!0&&Fe.setGlobalState(C.clippingPlanes,se),Ne.length>0&&Cs(ae,Ne,Z,se),oe&&Ie.viewport(U.copy(oe)),ae.length>0&&oa(ae,Z,se),Ne.length>0&&oa(Ne,Z,se),He.length>0&&oa(He,Z,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Cs(R,Z,se,oe){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Ne=tt.isWebGL2;Ee===null&&(Ee=new Xa(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")?Ms:ka,minFilter:Lo,samples:Ne?4:0})),C.getDrawingBufferSize(Pe),Ne?Ee.setSize(Pe.x,Pe.y):Ee.setSize(Ld(Pe.x),Ld(Pe.y));const He=C.getRenderTarget();C.setRenderTarget(Ee),C.getClearColor(Te),j=C.getClearAlpha(),j<1&&C.setClearColor(16777215,.5),C.clear();const Ze=C.toneMapping;C.toneMapping=Va,oa(R,se,oe),N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee);let Ke=!1;for(let je=0,it=Z.length;je<it;je++){const at=Z[je],At=at.object,en=at.geometry,tn=at.material,ii=at.group;if(tn.side===ta&&At.layers.test(oe.layers)){const It=tn.side;tn.side=jn,tn.needsUpdate=!0,Ds(At,se,oe,en,tn,ii),tn.side=It,tn.needsUpdate=!0,Ke=!0}}Ke===!0&&(N.updateMultisampleRenderTarget(Ee),N.updateRenderTargetMipmap(Ee)),C.setRenderTarget(He),C.setClearColor(Te,j),C.toneMapping=Ze}function oa(R,Z,se){const oe=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Ne=R.length;ae<Ne;ae++){const He=R[ae],Ze=He.object,Ke=He.geometry,je=oe===null?He.material:oe,it=He.group;Ze.layers.test(se.layers)&&Ds(Ze,Z,se,Ke,je,it)}}function Ds(R,Z,se,oe,ae,Ne){R.onBeforeRender(C,Z,se,oe,ae,Ne),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ae.onBeforeRender(C,Z,se,oe,R,Ne),ae.transparent===!0&&ae.side===ta&&ae.forceSinglePass===!1?(ae.side=jn,ae.needsUpdate=!0,C.renderBufferDirect(se,Z,oe,ae,R,Ne),ae.side=ja,ae.needsUpdate=!0,C.renderBufferDirect(se,Z,oe,ae,R,Ne),ae.side=ta):C.renderBufferDirect(se,Z,oe,ae,R,Ne),R.onAfterRender(C,Z,se,oe,ae,Ne)}function qa(R,Z,se){Z.isScene!==!0&&(Z=qe);const oe=et.get(R),ae=S.state.lights,Ne=S.state.shadowsArray,He=ae.state.version,Ze=ce.getParameters(R,ae.state,Ne,Z,se),Ke=ce.getProgramCacheKey(Ze);let je=oe.programs;oe.environment=R.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(R.isMeshStandardMaterial?ne:w).get(R.envMap||oe.environment),je===void 0&&(R.addEventListener("dispose",Re),je=new Map,oe.programs=je);let it=je.get(Ke);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===He)return $t(R,Ze),it}else Ze.uniforms=ce.getUniforms(R),R.onBuild(se,Ze,C),R.onBeforeCompile(Ze,C),it=ce.acquireProgram(Ze,Ke),je.set(Ke,it),oe.uniforms=Ze.uniforms;const at=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(at.clippingPlanes=Fe.uniform),$t(R,Ze),oe.needsLights=Ls(R),oe.lightsStateVersion=He,oe.needsLights&&(at.ambientLightColor.value=ae.state.ambient,at.lightProbe.value=ae.state.probe,at.directionalLights.value=ae.state.directional,at.directionalLightShadows.value=ae.state.directionalShadow,at.spotLights.value=ae.state.spot,at.spotLightShadows.value=ae.state.spotShadow,at.rectAreaLights.value=ae.state.rectArea,at.ltc_1.value=ae.state.rectAreaLTC1,at.ltc_2.value=ae.state.rectAreaLTC2,at.pointLights.value=ae.state.point,at.pointLightShadows.value=ae.state.pointShadow,at.hemisphereLights.value=ae.state.hemi,at.directionalShadowMap.value=ae.state.directionalShadowMap,at.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,at.spotShadowMap.value=ae.state.spotShadowMap,at.spotLightMatrix.value=ae.state.spotLightMatrix,at.spotLightMap.value=ae.state.spotLightMap,at.pointShadowMap.value=ae.state.pointShadowMap,at.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function mi(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=_c.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function $t(R,Z){const se=et.get(R);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Tn(R,Z,se,oe,ae){Z.isScene!==!0&&(Z=qe),N.resetTextureUnits();const Ne=Z.fog,He=oe.isMeshStandardMaterial?Z.environment:null,Ze=I===null?C.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ra,Ke=(oe.isMeshStandardMaterial?ne:w).get(oe.envMap||He),je=oe.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,it=!!se.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),at=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let tn=Va;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tn=C.toneMapping);const ii=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,It=ii!==void 0?ii.length:0,ft=et.get(oe),ca=S.state.lights;if(Q===!0&&(ye===!0||R!==D)){const zn=R===D&&oe.id===_e;Fe.setState(oe,R,zn)}let Pt=!1;oe.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==ca.state.version||ft.outputColorSpace!==Ze||ae.isBatchedMesh&&ft.batching===!1||!ae.isBatchedMesh&&ft.batching===!0||ae.isInstancedMesh&&ft.instancing===!1||!ae.isInstancedMesh&&ft.instancing===!0||ae.isSkinnedMesh&&ft.skinning===!1||!ae.isSkinnedMesh&&ft.skinning===!0||ae.isInstancedMesh&&ft.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&ft.instancingColor===!1&&ae.instanceColor!==null||ft.envMap!==Ke||oe.fog===!0&&ft.fog!==Ne||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==Fe.numPlanes||ft.numIntersection!==Fe.numIntersection)||ft.vertexAlphas!==je||ft.vertexTangents!==it||ft.morphTargets!==at||ft.morphNormals!==At||ft.morphColors!==en||ft.toneMapping!==tn||tt.isWebGL2===!0&&ft.morphTargetsCount!==It)&&(Pt=!0):(Pt=!0,ft.__version=oe.version);let _n=ft.currentProgram;Pt===!0&&(_n=qa(oe,Z,ae));let Ln=!1,ua=!1,Ns=!1;const nn=_n.getUniforms(),Ai=ft.uniforms;if(Ie.useProgram(_n.program)&&(Ln=!0,ua=!0,Ns=!0),oe.id!==_e&&(_e=oe.id,ua=!0),Ln||D!==R){nn.setValue(te,"projectionMatrix",R.projectionMatrix),nn.setValue(te,"viewMatrix",R.matrixWorldInverse);const zn=nn.map.cameraPosition;zn!==void 0&&zn.setValue(te,Be.setFromMatrixPosition(R.matrixWorld)),tt.logarithmicDepthBuffer&&nn.setValue(te,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&nn.setValue(te,"isOrthographic",R.isOrthographicCamera===!0),D!==R&&(D=R,ua=!0,Ns=!0)}if(ae.isSkinnedMesh){nn.setOptional(te,ae,"bindMatrix"),nn.setOptional(te,ae,"bindMatrixInverse");const zn=ae.skeleton;zn&&(tt.floatVertexTextures?(zn.boneTexture===null&&zn.computeBoneTexture(),nn.setValue(te,"boneTexture",zn.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(nn.setOptional(te,ae,"batchingTexture"),nn.setValue(te,"batchingTexture",ae._matricesTexture,N));const fa=se.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0&&tt.isWebGL2===!0)&&nt.update(ae,se,_n),(ua||ft.receiveShadow!==ae.receiveShadow)&&(ft.receiveShadow=ae.receiveShadow,nn.setValue(te,"receiveShadow",ae.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Ai.envMap.value=Ke,Ai.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ua&&(nn.setValue(te,"toneMappingExposure",C.toneMappingExposure),ft.needsLights&&la(Ai,Ns),Ne&&oe.fog===!0&&he.refreshFogUniforms(Ai,Ne),he.refreshMaterialUniforms(Ai,oe,q,z,Ee),_c.upload(te,mi(ft),Ai,N)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(_c.upload(te,mi(ft),Ai,N),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&nn.setValue(te,"center",ae.center),nn.setValue(te,"modelViewMatrix",ae.modelViewMatrix),nn.setValue(te,"normalMatrix",ae.normalMatrix),nn.setValue(te,"modelMatrix",ae.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const zn=oe.uniformsGroups;for(let An=0,Us=zn.length;An<Us;An++)if(tt.isWebGL2){const Os=zn[An];bt.update(Os,_n),bt.bind(Os,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function la(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ls(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,Z,se){et.get(R.texture).__webglTexture=Z,et.get(R.depthTexture).__webglTexture=se;const oe=et.get(R);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=se===void 0,oe.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Z){const se=et.get(R);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,se=0){I=R,Y=Z,H=se;let oe=!0,ae=null,Ne=!1,He=!1;if(R){const Ke=et.get(R);Ke.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(te.FRAMEBUFFER,null),oe=!1):Ke.__webglFramebuffer===void 0?N.setupRenderTarget(R):Ke.__hasExternalTextures&&N.rebindTextures(R,et.get(R.texture).__webglTexture,et.get(R.depthTexture).__webglTexture);const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(He=!0);const it=et.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[Z])?ae=it[Z][se]:ae=it[Z],Ne=!0):tt.isWebGL2&&R.samples>0&&N.useMultisampledRTT(R)===!1?ae=et.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?ae=it[se]:ae=it,U.copy(R.viewport),ue.copy(R.scissor),ge=R.scissorTest}else U.copy(de).multiplyScalar(q).floor(),ue.copy(L).multiplyScalar(q).floor(),ge=X;if(Ie.bindFramebuffer(te.FRAMEBUFFER,ae)&&tt.drawBuffers&&oe&&Ie.drawBuffers(R,ae),Ie.viewport(U),Ie.scissor(ue),Ie.setScissorTest(ge),Ne){const Ke=et.get(R.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ke.__webglTexture,se)}else if(He){const Ke=et.get(R.texture),je=Z||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ke.__webglTexture,se||0,je)}_e=-1},this.readRenderTargetPixels=function(R,Z,se,oe,ae,Ne,He){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=et.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){Ie.bindFramebuffer(te.FRAMEBUFFER,Ze);try{const Ke=R.texture,je=Ke.format,it=Ke.type;if(je!==hi&&Ue.convert(je)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const at=it===Ms&&(Ve.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Ve.has("EXT_color_buffer_float"));if(it!==ka&&Ue.convert(it)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(it===na&&(tt.isWebGL2||Ve.has("OES_texture_float")||Ve.has("WEBGL_color_buffer_float")))&&!at){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-oe&&se>=0&&se<=R.height-ae&&te.readPixels(Z,se,oe,ae,Ue.convert(je),Ue.convert(it),Ne)}finally{const Ke=I!==null?et.get(I).__webglFramebuffer:null;Ie.bindFramebuffer(te.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(R,Z,se=0){const oe=Math.pow(2,-se),ae=Math.floor(Z.image.width*oe),Ne=Math.floor(Z.image.height*oe);N.setTexture2D(Z,0),te.copyTexSubImage2D(te.TEXTURE_2D,se,0,0,R.x,R.y,ae,Ne),Ie.unbindTexture()},this.copyTextureToTexture=function(R,Z,se,oe=0){const ae=Z.image.width,Ne=Z.image.height,He=Ue.convert(se.format),Ze=Ue.convert(se.type);N.setTexture2D(se,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,se.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,oe,R.x,R.y,ae,Ne,He,Ze,Z.image.data):Z.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,oe,R.x,R.y,Z.mipmaps[0].width,Z.mipmaps[0].height,He,Z.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,oe,R.x,R.y,He,Ze,Z.image),oe===0&&se.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,se,oe,ae=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ne=R.max.x-R.min.x+1,He=R.max.y-R.min.y+1,Ze=R.max.z-R.min.z+1,Ke=Ue.convert(oe.format),je=Ue.convert(oe.type);let it;if(oe.isData3DTexture)N.setTexture3D(oe,0),it=te.TEXTURE_3D;else if(oe.isDataArrayTexture||oe.isCompressedArrayTexture)N.setTexture2DArray(oe,0),it=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,oe.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,oe.unpackAlignment);const at=te.getParameter(te.UNPACK_ROW_LENGTH),At=te.getParameter(te.UNPACK_IMAGE_HEIGHT),en=te.getParameter(te.UNPACK_SKIP_PIXELS),tn=te.getParameter(te.UNPACK_SKIP_ROWS),ii=te.getParameter(te.UNPACK_SKIP_IMAGES),It=se.isCompressedTexture?se.mipmaps[ae]:se.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,It.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,It.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,R.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,R.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,R.min.z),se.isDataTexture||se.isData3DTexture?te.texSubImage3D(it,ae,Z.x,Z.y,Z.z,Ne,He,Ze,Ke,je,It.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(it,ae,Z.x,Z.y,Z.z,Ne,He,Ze,Ke,It.data)):te.texSubImage3D(it,ae,Z.x,Z.y,Z.z,Ne,He,Ze,Ke,je,It),te.pixelStorei(te.UNPACK_ROW_LENGTH,at),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,At),te.pixelStorei(te.UNPACK_SKIP_PIXELS,en),te.pixelStorei(te.UNPACK_SKIP_ROWS,tn),te.pixelStorei(te.UNPACK_SKIP_IMAGES,ii),ae===0&&oe.generateMipmaps&&te.generateMipmap(it),Ie.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){Y=0,H=0,I=null,Ie.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Id?"display-p3":"srgb",i.unpackColorSpace=Ot.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===En?yr:Tv}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===yr?En:ra}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class b2 extends qv{}b2.prototype.isWebGL1Renderer=!0;class $0 extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class M2 extends Xn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=Mn,g=Mn,x,y){super(null,h,d,m,p,g,l,u,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class E2 extends Po{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ev=new re,tv=new re,nv=new vn,yd=new Lv,gc=new Rc;class T2 extends Wn{constructor(t=new sa,i=new E2){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)ev.fromBufferAttribute(i,l-1),tv.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=ev.distanceTo(tv);t.setAttribute("lineDistance",new aa(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(l),gc.radius+=u,t.ray.intersectsSphere(gc)===!1)return;nv.copy(l).invert(),yd.copy(t.ray).applyMatrix4(nv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=new re,g=new re,x=new re,y=new re,b=this.isLineSegments?2:1,A=r.index,S=r.attributes.position;if(A!==null){const v=Math.max(0,h.start),B=Math.min(A.count,h.start+h.count);for(let C=v,P=B-1;C<P;C+=b){const Y=A.getX(C),H=A.getX(C+1);if(p.fromBufferAttribute(S,Y),g.fromBufferAttribute(S,H),yd.distanceSqToSegment(p,g,y,x)>m)continue;y.applyMatrix4(this.matrixWorld);const _e=t.ray.origin.distanceTo(y);_e<t.near||_e>t.far||i.push({distance:_e,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,h.start),B=Math.min(S.count,h.start+h.count);for(let C=v,P=B-1;C<P;C+=b){if(p.fromBufferAttribute(S,C),g.fromBufferAttribute(S,C+1),yd.distanceSqToSegment(p,g,y,x)>m)continue;y.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(y);H<t.near||H>t.far||i.push({distance:H,point:x.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}const iv=new re,av=new re;class A2 extends T2{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)iv.fromBufferAttribute(i,l),av.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+iv.distanceTo(av);t.setAttribute("lineDistance",new aa(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vc extends Wa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class w2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=rv();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function rv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);const R2=["#5227FF","#FF9FFC","#B19EEF"];function C2({mouseForce:o=20,cursorSize:t=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:g=R2,style:x={},className:y="",autoDemo:b=!0,autoSpeed:A=.5,autoIntensity:T=2.2,takeoverDuration:S=.25,autoResumeDelay:v=1e3,autoRampDuration:B=.6}){const C=ke.useRef(null),P=ke.useRef(null),Y=ke.useRef(null),H=ke.useRef(null),I=ke.useRef(null),_e=ke.useRef(!0),D=ke.useRef(null);return ke.useEffect(()=>{if(!C.current)return;function U(me){let O;Array.isArray(me)&&me.length>0?O=me.length===1?[me[0],me[0]]:me:O=["#ffffff","#ffffff"];const ce=O.length,he=new Uint8Array(ce*4);for(let De=0;De<ce;De++){const Fe=new Et(O[De]);he[De*4+0]=Math.round(Fe.r*255),he[De*4+1]=Math.round(Fe.g*255),he[De*4+2]=Math.round(Fe.b*255),he[De*4+3]=255}const be=new M2(he,ce,1,hi);return be.magFilter=Dn,be.minFilter=Dn,be.wrapS=On,be.wrapT=On,be.generateMipmaps=!1,be.needsUpdate=!0,be}const ue=U(g),ge=new gn(0,0,0,0);class Te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(O){this.container=O,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new qv({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Et(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const ce=this.renderer.domElement;ce.style.width="100%",ce.style.height="100%",ce.style.display="block",this.clock=new w2,this.clock.start()}resize(){if(!this.container)return;const O=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(O.width)),this.height=Math.max(1,Math.floor(O.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const j=new Te;class ie{constructor(){this.mouseMoved=!1,this.coords=new st,this.coords_old=new st,this.diff=new st,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new st,this.takeoverTo=new st,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(O){var he,be;this.container=O,this.docTarget=O.ownerDocument||null;const ce=((he=this.docTarget)==null?void 0:he.defaultView)||(typeof window<"u"?window:null);ce&&(this.listenerTarget=ce,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),(be=this.docTarget)==null||be.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(O,ce){if(!this.container)return!1;const he=this.container.getBoundingClientRect();return he.width===0||he.height===0?!1:O>=he.left&&O<=he.right&&ce>=he.top&&ce<=he.bottom}updateHoverState(O,ce){return this.isHoverInside=this.isPointInside(O,ce),this.isHoverInside}setCoords(O,ce){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const he=this.container.getBoundingClientRect();if(he.width===0||he.height===0)return;const be=(O-he.left)/he.width,De=(ce-he.top)/he.height;this.coords.set(be*2-1,-(De*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(O,ce){this.coords.set(O,ce),this.mouseMoved=!0}onDocumentMouseMove(O){if(this.updateHoverState(O.clientX,O.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const ce=this.container.getBoundingClientRect(),he=(O.clientX-ce.left)/ce.width,be=(O.clientY-ce.top)/ce.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(he*2-1,-(be*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(O.clientX,O.clientY),this.hasUserControl=!0}}onDocumentTouchStart(O){if(O.touches.length!==1)return;const ce=O.touches[0];this.updateHoverState(ce.clientX,ce.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(ce.clientX,ce.clientY),this.hasUserControl=!0)}onDocumentTouchMove(O){if(O.touches.length!==1)return;const ce=O.touches[0];this.updateHoverState(ce.clientX,ce.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(ce.clientX,ce.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const O=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(O>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const ce=O*O*(3-2*O);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,ce)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const z=new ie;class q{constructor(O,ce,he){this.active=!1,this.current=new st(0,0),this.target=new st,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new st,this.mouse=O,this.manager=ce,this.enabled=he.enabled,this.speed=he.speed,this.resumeDelay=he.resumeDelay||3e3,this.rampDurationMs=(he.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const O=Math.random;this.target.set((O()*2-1)*(1-this.margin),(O()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const O=performance.now();if(O-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=O,this.activationTime=O),!this.active)return;this.mouse.isAutoActive=!0;let he=(O-this.lastTime)/1e3;this.lastTime=O,he>.2&&(he=.016);const be=this._tmpDir.subVectors(this.target,this.current),De=be.length();if(De<.01){this.pickNewTarget();return}be.normalize();let Fe=1;if(this.rampDurationMs>0){const nt=Math.min(1,(O-this.activationTime)/this.rampDurationMs);Fe=nt*nt*(3-2*nt)}const Se=this.speed*he*Fe,ht=Math.min(Se,De);this.current.addScaledVector(be,ht),this.mouse.setNormalized(this.current.x,this.current.y)}}const K=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,fe=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,de=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,L=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,X=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,k=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,Q=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ye=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,Ee=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Ae=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Pe{constructor(O){var ce;this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null,this.props=O||{},this.uniforms=(ce=this.props.material)==null?void 0:ce.uniforms}init(...O){this.scene=new $0,this.camera=new Tc,this.uniforms&&(this.material=new vc(this.props.material),this.geometry=new ys(2,2),this.plane=new Ei(this.geometry,this.material),this.scene.add(this.plane))}update(...O){!j.renderer||!this.scene||!this.camera||(j.renderer.setRenderTarget(this.props.output||null),j.renderer.render(this.scene,this.camera),j.renderer.setRenderTarget(null))}}class Be extends Pe{constructor(O){super({material:{vertexShader:K,fragmentShader:L,uniforms:{boundarySpace:{value:O.cellScale},px:{value:O.cellScale},fboSize:{value:O.fboSize},velocity:{value:O.src.texture},dt:{value:O.dt},isBFECC:{value:!0}}},output:O.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const O=new sa,ce=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);O.setAttribute("position",new Ti(ce,3));const he=new vc({vertexShader:fe,fragmentShader:L,uniforms:this.uniforms});this.line=new A2(O,he),this.scene.add(this.line)}update(...O){const{dt:ce,isBounce:he,BFECC:be}=O[0]||{};this.uniforms&&(typeof ce=="number"&&(this.uniforms.dt.value=ce),typeof he=="boolean"&&(this.line.visible=he),typeof be=="boolean"&&(this.uniforms.isBFECC.value=be),super.update())}}class qe extends Pe{constructor(O){super({output:O.dst}),this.init(O)}init(O){super.init();const ce=new ys(1,1),he=new vc({vertexShader:de,fragmentShader:Q,blending:bd,depthWrite:!1,uniforms:{px:{value:O.cellScale},force:{value:new st(0,0)},center:{value:new st(0,0)},scale:{value:new st(O.cursor_size,O.cursor_size)}}});this.mouse=new Ei(ce,he),this.scene.add(this.mouse)}update(...O){const ce=O[0]||{},he=z.diff.x/2*(ce.mouse_force||0),be=z.diff.y/2*(ce.mouse_force||0),De=ce.cellScale||{x:1,y:1},Fe=ce.cursor_size||0,Se=Fe*De.x,ht=Fe*De.y,nt=Math.min(Math.max(z.coords.x,-1+Se+De.x*2),1-Se-De.x*2),Qe=Math.min(Math.max(z.coords.y,-1+ht+De.y*2),1-ht-De.y*2),Oe=this.mouse.material.uniforms;Oe.force.value.set(he,be),Oe.center.value.set(nt,Qe),Oe.scale.value.set(Fe,Fe),super.update()}}class ct extends Pe{constructor(O){super({material:{vertexShader:K,fragmentShader:Ae,uniforms:{boundarySpace:{value:O.boundarySpace},velocity:{value:O.src.texture},velocity_new:{value:O.dst_.texture},v:{value:O.viscous},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst,output0:O.dst_,output1:O.dst}),this.init()}update(...O){const{viscous:ce,iterations:he,dt:be}=O[0]||{};if(!this.uniforms)return;let De,Fe;typeof ce=="number"&&(this.uniforms.v.value=ce);const Se=he??0;for(let ht=0;ht<Se;ht++)ht%2===0?(De=this.props.output0,Fe=this.props.output1):(De=this.props.output1,Fe=this.props.output0),this.uniforms.velocity_new.value=De.texture,this.props.output=Fe,typeof be=="number"&&(this.uniforms.dt.value=be),super.update();return Fe}}class te extends Pe{constructor(O){super({material:{vertexShader:K,fragmentShader:k,uniforms:{boundarySpace:{value:O.boundarySpace},velocity:{value:O.src.texture},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst}),this.init()}update(...O){const{vel:ce}=O[0]||{};this.uniforms&&ce&&(this.uniforms.velocity.value=ce.texture),super.update()}}class Jt extends Pe{constructor(O){super({material:{vertexShader:K,fragmentShader:ye,uniforms:{boundarySpace:{value:O.boundarySpace},pressure:{value:O.dst_.texture},divergence:{value:O.src.texture},px:{value:O.cellScale}}},output:O.dst,output0:O.dst_,output1:O.dst}),this.init()}update(...O){const{iterations:ce}=O[0]||{};let he,be;const De=ce??0;for(let Fe=0;Fe<De;Fe++)Fe%2===0?(he=this.props.output0,be=this.props.output1):(he=this.props.output1,be=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=he.texture),this.props.output=be,super.update();return be}}class Ve extends Pe{constructor(O){super({material:{vertexShader:K,fragmentShader:Ee,uniforms:{boundarySpace:{value:O.boundarySpace},pressure:{value:O.src_p.texture},velocity:{value:O.src_v.texture},px:{value:O.cellScale},dt:{value:O.dt}}},output:O.dst}),this.init()}update(...O){const{vel:ce,pressure:he}=O[0]||{};this.uniforms&&ce&&he&&(this.uniforms.velocity.value=ce.texture,this.uniforms.pressure.value=he.texture),super.update()}}class tt{constructor(O){this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new st,this.cellScale=new st,this.boundarySpace=new st,this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...O},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ms:na}createAllFBO(){const ce={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Dn,magFilter:Dn,wrapS:On,wrapT:On};for(const he in this.fbos)this.fbos[he]=new Xa(this.fboSize.x,this.fboSize.y,ce)}createShaderPass(){this.advection=new Be({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new qe({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ct({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new te({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Jt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ve({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const O=Math.max(1,Math.round(this.options.resolution*j.width)),ce=Math.max(1,Math.round(this.options.resolution*j.height));this.cellScale.set(1/O,1/ce),this.fboSize.set(O,ce)}resize(){this.calcSize();for(const O in this.fbos)this.fbos[O].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let O=this.fbos.vel_1;this.options.isViscous&&(O=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:O});const ce=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:O,pressure:ce})}}class Ie{constructor(){this.simulation=new tt,this.scene=new $0,this.camera=new Tc,this.output=new Ei(new ys(2,2),new vc({vertexShader:K,fragmentShader:X,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new st},palette:{value:ue},bgColor:{value:ge}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){j.renderer&&(j.renderer.setRenderTarget(null),j.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class zt{constructor(O){this.lastUserInteraction=performance.now(),this.running=!1,this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),this.props=O,j.init(O.$wrapper),z.init(O.$wrapper),z.autoIntensity=O.autoIntensity,z.takeoverDuration=O.takeoverDuration,z.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new q(z,this,{enabled:O.autoDemo,speed:O.autoSpeed,resumeDelay:O.autoResumeDelay,rampDuration:O.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():_e.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){j.renderer&&(this.props.$wrapper.prepend(j.renderer.domElement),this.output=new Ie)}resize(){j.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),z.update(),j.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),z.dispose(),j.renderer){const O=j.renderer.domElement;O&&O.parentNode&&O.parentNode.removeChild(O),j.renderer.dispose()}}catch{}}}const et=C.current;et.style.position=et.style.position||"relative",et.style.overflow=et.style.overflow||"hidden";const N=new zt({$wrapper:et,autoDemo:b,autoSpeed:A,autoIntensity:T,takeoverDuration:S,autoResumeDelay:v,autoRampDuration:B});P.current=N,(()=>{var ce;if(!P.current)return;const me=(ce=P.current.output)==null?void 0:ce.simulation;if(!me)return;const O=me.options.resolution;Object.assign(me.options,{mouse_force:o,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==O&&me.resize()})(),N.start();const ne=new IntersectionObserver(me=>{const O=me[0],ce=O.isIntersecting&&O.intersectionRatio>0;_e.current=ce,P.current&&(ce&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});ne.observe(et),I.current=ne;const Me=new ResizeObserver(()=>{P.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Me.observe(et),Y.current=Me,()=>{if(H.current&&cancelAnimationFrame(H.current),Y.current)try{Y.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[d,t,h,p,i,u,l,o,m,r,g,b,A,T,S,v,B]),ke.useEffect(()=>{var Te;const U=P.current;if(!U)return;const ue=(Te=U.output)==null?void 0:Te.simulation;if(!ue)return;const ge=ue.options.resolution;Object.assign(ue.options,{mouse_force:o,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),U.autoDriver&&(U.autoDriver.enabled=b,U.autoDriver.speed=A,U.autoDriver.resumeDelay=v,U.autoDriver.rampDurationMs=B*1e3,U.autoDriver.mouse&&(U.autoDriver.mouse.autoIntensity=T,U.autoDriver.mouse.takeoverDuration=S)),m!==ge&&ue.resize()},[o,t,i,r,l,u,h,d,m,p,b,A,T,S,v,B]),M.jsx("div",{ref:C,className:`liquid-ether-container ${y||""}`,style:x})}const Sd=({children:o,className:t="",spotlightColor:i="rgba(222, 105, 203, 0.15)"})=>{const r=ke.useRef(null),[l,u]=ke.useState({x:0,y:0}),[h,d]=ke.useState(0),m=x=>{if(!r.current)return;const y=r.current.getBoundingClientRect();u({x:x.clientX-y.left,y:x.clientY-y.top})},p=()=>{d(1)},g=()=>{d(0)};return M.jsxs("div",{ref:r,onMouseMove:m,onMouseEnter:p,onMouseLeave:g,className:`relative overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-300 hover:border-white/20 ${t}`,children:[M.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition duration-300",style:{opacity:h,background:`radial-gradient(600px circle at ${l.x}px ${l.y}px, ${i}, transparent 40%)`}}),M.jsx("div",{className:"relative h-full",children:o})]})},D2=()=>M.jsxs("section",{id:"about",className:"py-40 relative overflow-hidden bg-transparent",children:[M.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-brand-neon/50"}),M.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[M.jsx(cn,{width:"100%",children:M.jsxs("div",{className:"text-center mb-24 max-w-5xl mx-auto",children:[M.jsxs("div",{className:"inline-flex items-center gap-3 text-brand-neon font-mono text-xs uppercase tracking-[0.2em] mb-10",children:[M.jsx("span",{className:"text-white/50",children:"["}),M.jsx("span",{className:"animate-pulse",children:"ABOUT US"}),M.jsx("span",{className:"text-white/50",children:"]"})]}),M.jsxs("h2",{className:"text-4xl md:text-7xl font-bold leading-[0.95] text-white tracking-tighter drop-shadow-lg",children:["High Energy Digital blends ",M.jsx("br",{}),M.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-cyan drop-shadow-[0_0_20px_rgba(222,105,203,0.2)]",children:"innovative strategies"}),M.jsx("br",{})," with enthusiasm."]})]})}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[M.jsx(cn,{delay:100,width:"100%",children:M.jsx(Sd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(222, 105, 203, 0.2)",children:M.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[M.jsx("div",{className:"w-14 h-14 bg-brand-neon/10 flex items-center justify-center border border-brand-neon/30 shadow-[0_0_20px_rgba(222,105,203,0.1)]",children:M.jsx($y,{className:"text-brand-neon",size:28})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// Who We Are"}),M.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We help brands stand out, resonate, and engage. We specialize in elevating online presence through tailored digital marketing solutions."})]})]})})}),M.jsx(cn,{delay:200,width:"100%",children:M.jsx(Sd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(0, 240, 255, 0.2)",children:M.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[M.jsx("div",{className:"w-14 h-14 bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]",children:M.jsx(fv,{className:"text-brand-cyan",size:28})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// How We Work"}),M.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We combine creativity, data-driven insights, and a results-oriented approach to capture attention and drive tangible growth."})]})]})})}),M.jsx(cn,{delay:300,width:"100%",children:M.jsx(Sd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(255, 255, 255, 0.15)",children:M.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[M.jsx("div",{className:"w-14 h-14 bg-white/10 flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]",children:M.jsx(hv,{className:"text-white",size:28})}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// Our Vision"}),M.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We aim for digital excellence where every click becomes a meaningful connection. The future with HED is electrifying."})]})]})})})]}),M.jsx("div",{className:"mt-32 flex justify-center",children:M.jsx("div",{className:"h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent shadow-[0_0_15px_#DE69CB]"})})]})]}),L2=[{id:"01",title:"Social Media Management",desc:"A digital audit identifies strengths, weaknesses, opportunities.",Icon:Xy,status:"OPTIMAL",color:"text-brand-neon"},{id:"02",title:"Digital Strategy Audit",desc:"After the audit, we create a strategy to increase ROI.",Icon:dv,status:"READY",color:"text-brand-cyan"},{id:"03",title:"Design and Implementation",desc:"Once approved, we design and implement the marketing strategy.",Icon:fv,status:"ACTIVE",color:"text-white"}],N2=()=>{const[o,t]=ke.useState(null);return M.jsx("section",{id:"services",className:"py-32 md:py-40 bg-[#030303] border-y border-white/10 relative z-10 transition-colors duration-300",children:M.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6",children:[M.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8",children:[M.jsx(cn,{children:M.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase drop-shadow-md",children:["Our ",M.jsx("span",{className:"text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.5)]",children:"Services"})]})}),M.jsx("div",{className:"hidden md:block font-mono text-xs text-gray-400 tracking-[0.2em]",children:"// WHAT WE DO"})]}),M.jsx("div",{className:"flex flex-col gap-6",children:L2.map((i,r)=>M.jsx(cn,{delay:r*100,width:"100%",children:M.jsxs("div",{onMouseEnter:()=>{t(r),Xt.playHover()},onMouseLeave:()=>t(null),className:`group relative border transition-all duration-500 overflow-hidden ${o===r?"border-brand-neon bg-[#080808] shadow-[0_0_30px_rgba(222,105,203,0.15)]":"border-white/20 bg-[#050505]"}`,children:[o===r&&M.jsx("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:M.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px] animate-[grid-scroll_20s_linear_infinite]"})}),M.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1 bg-brand-neon transition-all duration-300 shadow-[0_0_10px_#DE69CB] ${o===r?"opacity-100 h-full":"opacity-0 h-0"} hidden md:block`}),M.jsxs("div",{className:"relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center",children:[M.jsxs("div",{className:"flex items-start md:items-center gap-6",children:[M.jsxs("div",{className:`p-4 border transition-all duration-300 flex-shrink-0 relative overflow-hidden ${o===r?"bg-brand-neon/10 border-brand-neon/50":"bg-white/5 border-white/20"}`,children:[M.jsx("div",{className:`transform transition-all duration-500 ${o===r?"scale-110":"scale-100"}`,children:M.jsx(i.Icon,{size:28,className:`
                                    transition-all duration-500
                                    ${o===r?`${i.color} drop-shadow-[0_0_8px_currentColor] animate-pulse`:"text-gray-400 animate-pulse-slow opacity-100"}
                                  `})}),M.jsx("div",{className:`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${o===r?"border-brand-neon":"border-white/30"}`}),M.jsx("div",{className:`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${o===r?"border-brand-neon":"border-white/30"}`})]}),M.jsxs("div",{className:"md:hidden flex-1",children:[M.jsx("div",{className:"flex items-center gap-3 mb-2",children:M.jsxs("span",{className:"font-mono text-[10px] text-gray-400 tracking-widest",children:["SERVICE_",i.id]})}),M.jsx("h3",{className:"text-2xl font-bold text-white uppercase tracking-tight leading-none",children:i.title})]})]}),M.jsxs("div",{className:"hidden md:block flex-1",children:[M.jsx("div",{className:"flex items-center gap-4 mb-2",children:M.jsxs("span",{className:"font-mono text-[10px] text-gray-400 tracking-widest",children:["SERVICE_",i.id]})}),M.jsx("h3",{className:"text-4xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors",children:i.title})]}),M.jsx("div",{className:`w-full md:w-1/3 transition-all duration-500 ${o===r?"md:opacity-100 md:translate-x-0":"md:opacity-60 md:translate-x-4"}`,children:M.jsx("p",{className:"text-gray-300 font-light leading-relaxed text-base md:border-l md:border-white/20 md:pl-6 group-hover:border-brand-neon/50",children:i.desc})}),M.jsx("div",{className:`hidden md:flex items-center justify-center w-12 h-12 border transition-all duration-300 ${o===r?"border-brand-neon bg-brand-neon text-black rotate-0 shadow-[0_0_15px_#DE69CB]":"border-white/20 text-gray-400 -rotate-45 group-hover:border-white"}`,children:M.jsx(xy,{size:24})})]})]})},i.id))})]})})},U2=[{id:"01",title:"DIAGNOSTIC AUDIT",desc:"We dismantle your current digital presence to find leaks, inefficiencies, and missed opportunities. No sugar-coating.",output:"Deliverable: Audit Report",icon:M.jsx(Zy,{size:24})},{id:"02",title:"STRATEGIC PLAN",desc:"We engineer a custom roadmap. This isn't a template; it's a battle plan tailored to your specific market mechanics.",output:"Deliverable: Strategy Doc",icon:M.jsx(Fy,{size:24})},{id:"03",title:"ACTIVE DEPLOYMENT",desc:"We execute. High-frequency content, precision ad targeting, and community engagement protocols go live.",output:"Deliverable: Campaign Launch",icon:M.jsx(hv,{size:24})},{id:"04",title:"OPTIMIZATION",desc:"We analyze the data stream. If it works, we scale it. If it doesn't, we kill it and iterate. Ruthless efficiency.",output:"Deliverable: ROI Analysis",icon:M.jsx(Ey,{size:24})}],O2=()=>{const[o,t]=ke.useState(null);return M.jsxs("section",{id:"process",className:"py-40 relative overflow-hidden bg-[#030303]",children:[M.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"}),M.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10",children:[M.jsx("div",{className:"md:sticky md:top-32 h-fit",children:M.jsxs(cn,{children:[M.jsxs("div",{className:"inline-flex items-center gap-3 mb-8 px-4 py-2 border border-brand-neon/30 bg-brand-neon/5 rounded-sm",children:[M.jsx("div",{className:"w-2 h-2 bg-brand-neon animate-pulse"}),M.jsx("span",{className:"font-mono text-xs text-brand-neon tracking-[0.2em] uppercase",children:"Our Process"})]}),M.jsxs("h2",{className:"text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-[0.9]",children:["HOW WE ",M.jsx("br",{}),M.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-white",children:"WORK."})]}),M.jsx("p",{className:"text-xl text-gray-300 font-light leading-relaxed max-w-lg mb-12",children:"Complexity kills momentum. We strip away the fluff and run a linear, 4-stage process designed to extract maximum value from your market."}),M.jsxs("div",{className:"hidden md:block p-6 border border-white/20 bg-black/80 font-mono text-xs text-gray-400",children:[M.jsxs("div",{className:"flex justify-between mb-2",children:[M.jsx("span",{children:"STATUS"}),M.jsx("span",{className:"text-brand-neon",children:"ONLINE"})]}),M.jsxs("div",{className:"flex justify-between mb-2",children:[M.jsx("span",{children:"Pipeline Status"}),M.jsx("span",{children:"100%"})]}),M.jsx("div",{className:"w-full h-1 bg-gray-800 mt-4",children:M.jsx("div",{className:"h-full bg-brand-neon w-[70%] animate-pulse"})})]})]})}),M.jsxs("div",{className:"relative pt-4",children:[M.jsx("div",{className:"absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/20 md:left-[23px]"}),M.jsx("div",{className:"space-y-12",children:U2.map((i,r)=>M.jsx(cn,{delay:r*100,width:"100%",children:M.jsxs("div",{className:"relative pl-16 md:pl-20 group",onMouseEnter:()=>{t(r),Xt.playHover()},onMouseLeave:()=>t(null),children:[M.jsx("div",{className:`
                            absolute left-0 md:left-1 top-0 w-10 h-10 md:w-12 md:h-12 
                            border-2 flex items-center justify-center bg-[#030303] transition-all duration-300 z-10
                            ${o===r?"border-brand-neon scale-110 shadow-[0_0_15px_#DE69CB]":"border-white/30 group-hover:border-white/60"}
                         `,children:M.jsx("span",{className:`font-mono font-bold text-sm ${o===r?"text-brand-neon":"text-gray-400"}`,children:i.id})}),M.jsxs("div",{className:`
                            relative p-8 border transition-all duration-300 bg-[#050505]
                            ${o===r?"border-brand-neon/50 bg-brand-neon/[0.04]":"border-white/20 hover:border-white/40"}
                         `,children:[M.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30"}),M.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30"}),M.jsxs("div",{className:"flex items-start justify-between mb-4",children:[M.jsx("h3",{className:`text-2xl font-bold uppercase tracking-tight transition-colors ${o===r?"text-white":"text-gray-200"}`,children:i.title}),M.jsx("div",{className:`transition-colors ${o===r?"text-brand-neon":"text-gray-500"}`,children:i.icon})]}),M.jsx("p",{className:"text-gray-300 leading-relaxed mb-6 font-light",children:i.desc}),M.jsx("div",{className:`
                               flex items-center gap-4 py-3 px-4 border-l-2 text-sm font-mono
                               transition-colors duration-300
                               ${o===r?"bg-brand-neon/10 border-brand-neon text-brand-neon":"bg-white/5 border-white/20 text-gray-400"}
                            `,children:M.jsx("span",{className:"truncate",children:i.output})})]}),M.jsx("div",{className:`absolute left-[19px] md:left-[23px] top-12 bottom-[-48px] w-[2px] bg-brand-neon transition-all duration-500 ${o===r?"opacity-100":"opacity-0"}`})]})},r))})]})]})]})},z2=()=>{const[o,t]=ke.useState(null),i=[{q:"Why hire a consultant vs in-house?",a:"Consultants bring specialized skills and objective perspective. We hit the ground running without the need for training, benefits, or HR overhead. You get a senior team for the price of a junior hire."},{q:"What deliverables can we expect?",a:"A complete strategy architecture, daily content execution, deep-dive analytics, and monthly growth reporting. You get a fully documented system, not just 'hours worked' or random posts."},{q:"How long until we see results?",a:"It depends on the vector. Paid ads can generate leads instantly. Organic social typically sees traction in month one, but compound growth (the 'hockey stick') usually activates around months 3-6 of consistent execution."},{q:"Do you handle paid advertising?",a:"Absolutely. We engineer high-ROAS campaigns across LinkedIn, Twitter/X, and Meta. We focus on lowering CPA (Cost Per Acquisition) while scaling volume, using the same creative-first approach as our organic content."},{q:"What does the onboarding process look like?",a:"Swift and surgical. We kick off with a strategy deep-dive within 48 hours. We audit your current assets, build the roadmap, and typically go live with the first wave of content within 7 days of signing."},{q:"Do you understand tech products?",a:"Yes. Our DNA is in Tech and Cybersecurity. We know the difference between a firewall, a VPN, and a zero-trust architecture. Your content will sound like it came from an engineer, not a generic marketer."},{q:"Do you offer custom enterprise packages?",a:"Yes. While we have core protocols, we engineer bespoke growth systems for enterprise clients with specific compliance, volume, or multi-region needs. Contact us for a custom scope."}];return M.jsxs("section",{id:"faq",className:"py-40 border-t border-white/5 bg-[#050505] transition-colors duration-300 relative overflow-hidden",children:[M.jsx("div",{className:"absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none"}),M.jsxs("div",{className:"max-w-4xl mx-auto px-6 relative z-10",children:[M.jsx(cn,{width:"100%",children:M.jsxs("div",{className:"mb-20 text-center md:text-left",children:[M.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tighter uppercase",children:["Common ",M.jsx("span",{className:"text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.4)]",children:"Questions"})]}),M.jsx("p",{className:"text-gray-500 font-mono text-sm tracking-[0.2em] uppercase",children:"// FAQ"})]})}),M.jsx("div",{className:"space-y-6",children:i.map((r,l)=>M.jsx(cn,{delay:l*50,width:"100%",children:M.jsxs("div",{className:`
                  group border rounded-xl overflow-hidden transition-all duration-300
                  ${o===l?"border-brand-neon bg-brand-neon/[0.03] shadow-[0_0_20px_rgba(222,105,203,0.1)]":"border-white/10 bg-white/[0.01] hover:border-white/30 hover:bg-white/[0.02]"}
                `,onMouseEnter:()=>Xt.playHover(),children:[M.jsxs("button",{className:"w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer",onClick:()=>{Xt.playClick(),t(o===l?null:l)},children:[M.jsx("span",{className:`text-lg md:text-xl font-bold transition-colors duration-300 ${o===l?"text-white":"text-gray-400 group-hover:text-white"}`,children:r.q}),M.jsx("span",{className:`
                    ml-4 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                    ${o===l?"border-brand-neon bg-brand-neon text-white rotate-180 shadow-[0_0_10px_#DE69CB]":"border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-white"}
                  `,children:M.jsx(Ry,{size:20})})]}),M.jsx("div",{className:`transition-all duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${o===l?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:M.jsx("div",{className:"px-6 pb-8 md:px-8 text-gray-300 leading-relaxed font-light text-base md:text-lg border-t border-white/5 pt-6",children:r.a})})]})},l))})]})]})},P2=[{text:"High Energy Digital took my social media profiles from zero to hero with a really solid plan of attack. Highly recommended!",author:"Rosa Maria Aguado",role:"Beal and Harlow"},{text:"These guys are really great to work with. Extremely professional and helpful when I asked them questions. Don’t look anywhere else for your digital marketing needs!",author:"Aaron Loeb",role:"NoBlueberry Label"},{text:"Results started off slow, but once they started coming through, we couldn’t stop the traffic to our site and socials! Highly recommended. Get in touch and start winning!",author:"David Lee",role:"The Safer Internet Project"}],B2=({review:o,index:t})=>{const i=ke.useRef(null),[r,l]=ke.useState(!1),[u,h]=ke.useState(!1);return ke.useEffect(()=>{if(!i.current||u)return;const d=new IntersectionObserver(([m])=>{if(m.isIntersecting){const p=300+t*200;setTimeout(()=>{l(!0),h(!0)},p)}},{threshold:.3});return d.observe(i.current),()=>d.disconnect()},[t,u]),M.jsxs("div",{ref:i,className:"relative h-full p-10 border border-white/20 bg-[#0a0a0a] hover:border-brand-neon/60 transition-all duration-300 flex flex-col justify-between group shadow-none hover:shadow-[0_0_30px_rgba(222,105,203,0.15)] rounded-2xl overflow-hidden",onMouseEnter:()=>Xt.playHover(),children:[r&&M.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:M.jsx("div",{className:"absolute top-0 bottom-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-sweep"})}),M.jsxs("div",{className:"relative z-10 flex justify-between items-start mb-8",children:[M.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map(d=>M.jsx(Qy,{size:16,className:"fill-brand-neon text-brand-neon drop-shadow-[0_0_5px_rgba(222,105,203,0.5)]"},d))}),M.jsx(ky,{size:24,className:"text-white/40 group-hover:text-brand-neon transition-colors"})]}),M.jsxs("p",{className:"relative z-10 text-lg md:text-xl font-light text-white leading-relaxed mb-10",children:['"',o.text,'"']}),M.jsxs("div",{className:"relative z-10 border-t border-white/20 pt-6 mt-auto",children:[M.jsx("div",{className:"font-bold text-white text-lg mb-1 group-hover:text-brand-neon transition-colors",children:o.author}),M.jsx("div",{className:"font-mono text-xs text-gray-400 uppercase tracking-[0.2em]",children:o.role})]})]})},I2=()=>M.jsxs("section",{id:"testimonials",className:"py-40 bg-[#050505] relative border-t border-white/20 overflow-hidden transition-colors duration-300",children:[M.jsx("div",{className:"absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none"}),M.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[M.jsx("div",{className:"flex items-center justify-between mb-20",children:M.jsx(cn,{children:M.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase flex items-center gap-6 drop-shadow-md",children:[M.jsxs("div",{className:"relative",children:[M.jsx("div",{className:"absolute inset-0 bg-brand-neon/50 blur-xl rounded-full animate-pulse"}),M.jsx(qy,{className:"text-brand-neon relative z-10",size:32})]}),"Client ",M.jsx("span",{className:"text-gray-400",children:"Reviews"})]})})}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:P2.map((o,t)=>M.jsx(cn,{delay:t*150,width:"100%",children:M.jsx(B2,{review:o,index:t})},t))})]})]}),F2=()=>{const[o,t]=ke.useState(!1),i=()=>{Xt.playClick(),navigator.clipboard.writeText("clientservices@highenergydigital.com"),t(!0),setTimeout(()=>t(!1),2e3)},r=[{name:"Instagram",url:"https://instagram.com/highenergydigital",Icon:zy},{name:"LinkedIn",url:"https://www.linkedin.com/company/high-energy-digital/",Icon:By},{name:"Twitter",url:"https://x.com/highenergydigit?s=21",Icon:nS}];return M.jsxs("section",{id:"contact",className:"py-32 relative overflow-hidden bg-[#030303] border-t border-white/20 transition-colors duration-300",children:[M.jsx("div",{className:"absolute top-0 right-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"}),M.jsx("div",{className:"absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"}),M.jsx("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[M.jsxs("div",{children:[M.jsxs(cn,{children:[M.jsxs("div",{className:"inline-flex items-center gap-2 mb-6 px-3 py-1 border border-brand-neon/40 bg-brand-neon/10 rounded text-brand-neon font-mono text-xs tracking-widest uppercase",children:[M.jsx("div",{className:"w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse"}),"Contact Us"]}),M.jsxs("h2",{className:"text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none",children:["Start Your ",M.jsx("br",{}),M.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan",children:"Project."})]}),M.jsx("p",{className:"text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-md",children:"Stop shouting into the void. Send us a message and let's discuss your growth."})]}),M.jsx(cn,{delay:200,children:M.jsxs("div",{children:[M.jsx("h4",{className:"text-gray-400 font-mono text-xs uppercase tracking-[0.2em] mb-6",children:"Social Media"}),M.jsx("div",{className:"flex gap-4",children:r.map(l=>M.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-brand-neon hover:border-brand-neon hover:text-black hover:shadow-[0_0_20px_#DE69CB] transition-all duration-300 group","aria-label":l.name,onMouseEnter:()=>Xt.playHover(),onClick:()=>Xt.playClick(),children:M.jsx(l.Icon,{size:20,className:"transition-transform duration-300 group-hover:scale-110"})},l.name))})]})})]}),M.jsx(cn,{delay:100,width:"100%",children:M.jsxs("div",{className:"relative group",children:[M.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-br from-brand-neon to-brand-cyan opacity-40 blur-lg group-hover:opacity-60 transition duration-1000"}),M.jsxs("div",{className:"relative bg-[#050505] border border-white/20 p-10 md:p-16 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]",children:[M.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0 opacity-20"}),M.jsxs("div",{className:"relative z-10 w-full max-w-md",children:[M.jsx("div",{className:"w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-brand-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]",children:M.jsx(dv,{size:40,className:"text-brand-cyan"})}),M.jsx("h3",{className:"text-white font-bold text-2xl uppercase tracking-widest mb-2",children:"Get In Touch"}),M.jsx("p",{className:"text-gray-400 font-mono text-xs mb-10 tracking-widest",children:"We reply within 24 hours."}),M.jsxs("div",{className:"flex flex-col gap-4",children:[M.jsx("a",{href:"mailto:clientservices@highenergydigital.com",className:"w-full group/btn",children:M.jsxs(pv,{className:"w-full flex justify-center py-6",children:["EMAIL US NOW ",M.jsx(uv,{className:"ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"})]})}),M.jsx("button",{onClick:i,onMouseEnter:()=>Xt.playHover(),className:"w-full py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-300 hover:text-white transition-all uppercase tracking-widest font-mono text-xs flex items-center justify-center gap-3 rounded-sm active:scale-[0.98]",children:o?M.jsxs(M.Fragment,{children:["COPIED TO CLIPBOARD ",M.jsx(Ay,{size:14,className:"text-green-500"})]}):M.jsxs(M.Fragment,{children:["clientservices@highenergydigital.com ",M.jsx(Dy,{size:14})]})})]})]})]})]})})]})})]})},H2=()=>M.jsx("footer",{className:"w-full bg-[#030303] border-t border-white/10 py-8 md:py-10 relative z-20",children:M.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0",children:[M.jsxs("div",{className:"text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase font-medium",children:["© ",new Date().getFullYear()," High Energy Digital. Engineered in Australia."]}),M.jsxs("div",{className:"group flex items-center gap-3 cursor-default",onMouseEnter:()=>Xt.playHover(),children:[M.jsxs("div",{className:"relative flex h-1.5 w-1.5 md:h-2 md:w-2",children:[M.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"}),M.jsx("span",{className:"relative inline-flex rounded-full h-full w-full bg-brand-neon"})]}),M.jsx("span",{className:"text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-brand-neon group-hover:drop-shadow-[0_0_8px_rgba(222,105,203,0.8)]",children:"All Systems Nominal"})]})]})}),G2=()=>{const[o,t]=ke.useState({x:-100,y:-100}),[i,r]=ke.useState(!1);return ke.useEffect(()=>{const l=d=>{t({x:d.clientX,y:d.clientY})},u=()=>r(!0),h=()=>r(!1);return window.addEventListener("mousemove",l),window.addEventListener("mousedown",u),window.addEventListener("mouseup",h),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mousedown",u),window.removeEventListener("mouseup",h)}},[]),M.jsxs(M.Fragment,{children:[M.jsx("style",{children:`
        @media (pointer: fine) {
          body { cursor: none; }
        }
      `}),M.jsxs("div",{className:"fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference",style:{transform:`translate(${o.x}px, ${o.y}px)`},children:[M.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-[1px] bg-white/50"}),M.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/50"}),M.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand-neon transition-all duration-100 ${i?"w-2 h-2 bg-brand-neon":"w-4 h-4 bg-transparent"}`})]})]})},V2=()=>M.jsx("div",{className:"pointer-events-none fixed inset-0 z-[9999] opacity-[0.02] mix-blend-overlay",children:M.jsxs("svg",{className:"h-full w-full",children:[M.jsx("filter",{id:"noise",children:M.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.8",numOctaves:"3",stitchTiles:"stitch"})}),M.jsx("rect",{width:"100%",height:"100%",filter:"url(#noise)"})]})}),k2={position:"bottom",strength:2,height:"6rem",divCount:5,exponential:!1,zIndex:1e3,animated:!1,duration:"0.3s",easing:"ease-out",opacity:1,curve:"linear",responsive:!1,target:"parent",className:"",style:{}},Ud={top:{position:"top",height:"6rem"},bottom:{position:"bottom",height:"6rem"},left:{position:"left",height:"6rem"},right:{position:"right",height:"6rem"},subtle:{height:"4rem",strength:1,opacity:.8,divCount:3},intense:{height:"10rem",strength:4,divCount:8,exponential:!0},smooth:{height:"8rem",curve:"bezier",divCount:10},sharp:{height:"5rem",curve:"linear",divCount:4},header:{position:"top",height:"8rem",curve:"ease-out"},footer:{position:"bottom",height:"8rem",curve:"ease-out"},sidebar:{position:"left",height:"6rem",strength:2.5},"page-header":{position:"top",height:"10rem",target:"page",strength:3},"page-footer":{position:"bottom",height:"10rem",target:"page",strength:3}},Od={linear:o=>o,bezier:o=>o*o*(3-2*o),"ease-in":o=>o*o,"ease-out":o=>1-Math.pow(1-o,2),"ease-in-out":o=>o<.5?2*o*o:1-Math.pow(-2*o+2,2)/2},j2=(...o)=>o.reduce((t,i)=>({...t,...i}),{}),X2=o=>({top:"to top",bottom:"to bottom",left:"to left",right:"to right"})[o]||"to bottom",W2=(o,t)=>{let i;return(...r)=>{clearTimeout(i),i=setTimeout(()=>o(...r),t)}},sv=(o,t,i)=>{const[r,l]=ke.useState(t[i]);return ke.useEffect(()=>{if(!o)return;const u=()=>{const d=window.innerWidth;let m=t[i];const g=(x=>x.charAt(0).toUpperCase()+x.slice(1))(i);d<=480&&t["mobile"+g]?m=t["mobile"+g]:d<=768&&t["tablet"+g]?m=t["tablet"+g]:d<=1024&&t["desktop"+g]&&(m=t["desktop"+g]),l(m)},h=W2(u,100);return u(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[o,t,i]),o?r:t[i]},q2=(o,t=!1)=>{const[i,r]=ke.useState(!t);return ke.useEffect(()=>{if(!t||!o.current)return;const l=new IntersectionObserver(([u])=>r(u.isIntersecting),{threshold:.1});return l.observe(o.current),()=>l.disconnect()},[o,t]),i},Y2=o=>{const t=ke.useRef(null),[i,r]=ke.useState(!1),l=ke.useMemo(()=>{const A=o.preset&&Ud[o.preset]?Ud[o.preset]:{};return j2(k2,A,o)},[o]),u=sv(l.responsive,l,"height"),h=sv(l.responsive,l,"width"),d=q2(t,l.animated==="scroll"),m=ke.useMemo(()=>{const A=[],T=100/l.divCount,S=i&&l.hoverIntensity?l.strength*l.hoverIntensity:l.strength,v=Od[l.curve]||Od.linear;for(let B=1;B<=l.divCount;B++){let C=B/l.divCount;C=v(C);let P;l.exponential?P=Math.pow(2,C*4)*.0625*S:P=.0625*(C*l.divCount+1)*S;const Y=Math.round((T*B-T)*10)/10,H=Math.round(T*B*10)/10,I=Math.round((T*B+T)*10)/10,_e=Math.round((T*B+T*2)*10)/10;let D=`transparent ${Y}%, black ${H}%`;I<=100&&(D+=`, black ${I}%`),_e<=100&&(D+=`, transparent ${_e}%`);const U=X2(l.position),ue={position:"absolute",inset:"0",maskImage:`linear-gradient(${U}, ${D})`,WebkitMaskImage:`linear-gradient(${U}, ${D})`,backdropFilter:`blur(${P.toFixed(3)}rem)`,WebkitBackdropFilter:`blur(${P.toFixed(3)}rem)`,opacity:l.opacity,transition:l.animated&&l.animated!=="scroll"?`backdrop-filter ${l.duration} ${l.easing}`:void 0};A.push(M.jsx("div",{style:ue},B))}return A},[l,i]),p=ke.useMemo(()=>{const A=["top","bottom"].includes(l.position),T=["left","right"].includes(l.position),S=l.target==="page",v={position:S?"fixed":"absolute",pointerEvents:l.hoverIntensity?"auto":"none",opacity:d?1:0,transition:l.animated?`opacity ${l.duration} ${l.easing}`:void 0,zIndex:S?l.zIndex+100:l.zIndex,...l.style};return A?(v.height=u,v.width=h||"100%",v[l.position]=0,v.left=0,v.right=0):T&&(v.width=h||u,v.height="100%",v[l.position]=0,v.top=0,v.bottom=0),v},[l,u,h,d]),{hoverIntensity:g,animated:x,onAnimationComplete:y,duration:b}=l;return ke.useEffect(()=>{if(d&&x==="scroll"&&y){const A=setTimeout(()=>y(),parseFloat(b)*1e3);return()=>clearTimeout(A)}},[d,x,y,b]),M.jsx("div",{ref:t,className:`gradual-blur ${l.target==="page"?"gradual-blur-page":"gradual-blur-parent"} ${l.className}`,style:p,onMouseEnter:g?()=>r(!0):void 0,onMouseLeave:g?()=>r(!1):void 0,children:M.jsx("div",{className:"gradual-blur-inner",style:{position:"relative",width:"100%",height:"100%"},children:m})})},No=lv.memo(Y2);No.displayName="GradualBlur";No.PRESETS=Ud;No.CURVE_FUNCTIONS=Od;const Z2=()=>{if(typeof document>"u")return;const o="gradual-blur-styles";if(document.getElementById(o))return;const t=document.createElement("style");t.id=o,t.textContent=".gradual-blur{pointer-events:none;transition:opacity 0.3s ease-out}.gradual-blur-inner{pointer-events:none}",document.head.appendChild(t)};typeof document<"u"&&Z2();const K2=()=>{const[o,t]=ke.useState(!1);ke.useEffect(()=>{const r=()=>{window.scrollY>500?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{Xt.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return M.jsx("div",{className:`fixed bottom-10 right-10 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${o?"translate-y-0 opacity-100":"translate-y-32 opacity-0 pointer-events-none"}`,children:M.jsxs("button",{onClick:i,onMouseEnter:()=>Xt.playHover(),className:"group relative w-14 h-14 flex items-center justify-center bg-black border border-brand-neon/40 hover:border-brand-neon transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.8)]","aria-label":"Return to top",children:[M.jsx("div",{className:"absolute inset-0 bg-brand-neon/5 group-hover:bg-brand-neon/10 transition-colors duration-300"}),M.jsx(by,{size:20,className:"text-white group-hover:text-brand-neon transition-all duration-300 group-hover:-translate-y-1",strokeWidth:2}),M.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-neon opacity-100"}),M.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-neon opacity-100"}),M.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),M.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),M.jsx("div",{className:"absolute right-full mr-6 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none",children:M.jsxs("div",{className:"flex items-center gap-3 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out",children:[M.jsx("span",{className:"h-px w-8 bg-brand-neon"}),M.jsx("span",{className:"font-mono text-xs text-brand-neon font-bold tracking-widest whitespace-nowrap bg-black px-2 py-1 border border-brand-neon/30",children:"RTB [TOP]"})]})})]})})},Q2=()=>{const[o,t]=ke.useState({x:-500,y:-500});return ke.useEffect(()=>{const i=r=>{t({x:r.clientX,y:r.clientY})};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),M.jsx("div",{className:"fixed inset-0 z-[1] pointer-events-none mix-blend-screen transition-opacity duration-300",style:{background:`radial-gradient(800px circle at ${o.x}px ${o.y}px, rgba(222, 105, 203, 0.06), transparent 50%)`}})},J2=()=>{const[o,t]=ke.useState(["#000000","#DE69CB","#00f0ff"]);return ke.useEffect(()=>{document.documentElement.classList.add("dark")},[]),M.jsx(M.Fragment,{children:M.jsxs("div",{className:"min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans selection:bg-brand-neon selection:text-white relative",children:[M.jsx("div",{className:"fixed inset-0 z-0",children:M.jsx(C2,{className:"w-full h-full",colors:o,mouseForce:20,cursorSize:250,viscous:30,dt:.01,autoSpeed:.2})}),M.jsx("div",{className:"fixed inset-0 z-[0] backdrop-blur-[40px] bg-black/30 pointer-events-none"}),M.jsx(Q2,{}),M.jsx(V2,{}),M.jsx(G2,{}),M.jsx(No,{preset:"page-header",zIndex:40,opacity:.5}),M.jsx(No,{preset:"page-footer",zIndex:40,opacity:.7}),M.jsx(dS,{}),M.jsxs("main",{className:"relative z-10",children:[M.jsx(pS,{}),M.jsx(N2,{}),M.jsx(O2,{}),M.jsx(D2,{}),M.jsx(I2,{}),M.jsx(z2,{}),M.jsx(F2,{}),M.jsx(H2,{})]}),M.jsx(K2,{})]})})},Yv=document.getElementById("root");if(!Yv)throw new Error("Could not find root element to mount to");const $2=uy.createRoot(Yv);$2.render(M.jsx(lv.StrictMode,{children:M.jsx(J2,{})}));
