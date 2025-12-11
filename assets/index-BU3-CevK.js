(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Y0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Uf={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Hx(){if(gg)return Eo;gg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var _g;function Gx(){return _g||(_g=1,Uf.exports=Hx()),Uf.exports}var b=Gx(),Of={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function Vx(){if(vg)return nt;vg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),y=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function v(L,k,V){this.props=L,this.context=k,this.refs=S,this.updater=V||R}v.prototype.isReactComponent={},v.prototype.setState=function(L,k){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,k,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function I(){}I.prototype=v.prototype;function N(L,k,V){this.props=L,this.context=k,this.refs=S,this.updater=V||R}var P=N.prototype=new I;P.constructor=N,A(P,v.prototype),P.isPureReactComponent=!0;var q=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},ge=Object.prototype.hasOwnProperty;function C(L,k,V){var K=V.ref;return{$$typeof:o,type:L,key:k,ref:K!==void 0?K:null,props:V}}function O(L,k){return C(L.type,k,L.props)}function ce(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function de(L){var k={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(V){return k[V]})}var ve=/\/+/g;function j(L,k){return typeof L=="object"&&L!==null&&L.key!=null?de(""+L.key):k.toString(36)}function $(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(k){L.status==="pending"&&(L.status="fulfilled",L.value=k)},function(k){L.status==="pending"&&(L.status="rejected",L.reason=k)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function U(L,k,V,K,pe){var ye=typeof L;(ye==="undefined"||ye==="boolean")&&(L=null);var Ee=!1;if(L===null)Ee=!0;else switch(ye){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(L.$$typeof){case o:case t:Ee=!0;break;case g:return Ee=L._init,U(Ee(L._payload),k,V,K,pe)}}if(Ee)return pe=pe(L),Ee=K===""?"."+j(L,0):K,q(pe)?(V="",Ee!=null&&(V=Ee.replace(ve,"$&/")+"/"),U(pe,k,V,"",function(Ve){return Ve})):pe!=null&&(ce(pe)&&(pe=O(pe,V+(pe.key==null||L&&L.key===pe.key?"":(""+pe.key).replace(ve,"$&/")+"/")+Ee)),k.push(pe)),1;Ee=0;var Be=K===""?".":K+":";if(q(L))for(var Ne=0;Ne<L.length;Ne++)K=L[Ne],ye=Be+j(K,Ne),Ee+=U(K,k,V,ye,pe);else if(Ne=M(L),typeof Ne=="function")for(L=Ne.call(L),Ne=0;!(K=L.next()).done;)K=K.value,ye=Be+j(K,Ne++),Ee+=U(K,k,V,ye,pe);else if(ye==="object"){if(typeof L.then=="function")return U($(L),k,V,K,pe);throw k=String(L),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function X(L,k,V){if(L==null)return L;var K=[],pe=0;return U(L,K,"","",function(ye){return k.call(V,ye,pe++)}),K}function Y(L){if(L._status===-1){var k=L._result;k=k(),k.then(function(V){(L._status===0||L._status===-1)&&(L._status=1,L._result=V)},function(V){(L._status===0||L._status===-1)&&(L._status=2,L._result=V)}),L._status===-1&&(L._status=0,L._result=k)}if(L._status===1)return L._result.default;throw L._result}var oe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ue={map:X,forEach:function(L,k,V){X(L,function(){k.apply(this,arguments)},V)},count:function(L){var k=0;return X(L,function(){k++}),k},toArray:function(L){return X(L,function(k){return k})||[]},only:function(L){if(!ce(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return nt.Activity=x,nt.Children=ue,nt.Component=v,nt.Fragment=i,nt.Profiler=l,nt.PureComponent=N,nt.StrictMode=r,nt.Suspense=m,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,nt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},nt.cache=function(L){return function(){return L.apply(null,arguments)}},nt.cacheSignal=function(){return null},nt.cloneElement=function(L,k,V){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var K=A({},L.props),pe=L.key;if(k!=null)for(ye in k.key!==void 0&&(pe=""+k.key),k)!ge.call(k,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&k.ref===void 0||(K[ye]=k[ye]);var ye=arguments.length-2;if(ye===1)K.children=V;else if(1<ye){for(var Ee=Array(ye),Be=0;Be<ye;Be++)Ee[Be]=arguments[Be+2];K.children=Ee}return C(L.type,pe,K)},nt.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},nt.createElement=function(L,k,V){var K,pe={},ye=null;if(k!=null)for(K in k.key!==void 0&&(ye=""+k.key),k)ge.call(k,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(pe[K]=k[K]);var Ee=arguments.length-2;if(Ee===1)pe.children=V;else if(1<Ee){for(var Be=Array(Ee),Ne=0;Ne<Ee;Ne++)Be[Ne]=arguments[Ne+2];pe.children=Be}if(L&&L.defaultProps)for(K in Ee=L.defaultProps,Ee)pe[K]===void 0&&(pe[K]=Ee[K]);return C(L,ye,pe)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(L){return{$$typeof:d,render:L}},nt.isValidElement=ce,nt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Y}},nt.memo=function(L,k){return{$$typeof:p,type:L,compare:k===void 0?null:k}},nt.startTransition=function(L){var k=z.T,V={};z.T=V;try{var K=L(),pe=z.S;pe!==null&&pe(V,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(G,oe)}catch(ye){oe(ye)}finally{k!==null&&V.types!==null&&(k.types=V.types),z.T=k}},nt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},nt.use=function(L){return z.H.use(L)},nt.useActionState=function(L,k,V){return z.H.useActionState(L,k,V)},nt.useCallback=function(L,k){return z.H.useCallback(L,k)},nt.useContext=function(L){return z.H.useContext(L)},nt.useDebugValue=function(){},nt.useDeferredValue=function(L,k){return z.H.useDeferredValue(L,k)},nt.useEffect=function(L,k){return z.H.useEffect(L,k)},nt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},nt.useId=function(){return z.H.useId()},nt.useImperativeHandle=function(L,k,V){return z.H.useImperativeHandle(L,k,V)},nt.useInsertionEffect=function(L,k){return z.H.useInsertionEffect(L,k)},nt.useLayoutEffect=function(L,k){return z.H.useLayoutEffect(L,k)},nt.useMemo=function(L,k){return z.H.useMemo(L,k)},nt.useOptimistic=function(L,k){return z.H.useOptimistic(L,k)},nt.useReducer=function(L,k,V){return z.H.useReducer(L,k,V)},nt.useRef=function(L){return z.H.useRef(L)},nt.useState=function(L){return z.H.useState(L)},nt.useSyncExternalStore=function(L,k,V){return z.H.useSyncExternalStore(L,k,V)},nt.useTransition=function(){return z.H.useTransition()},nt.version="19.2.1",nt}var xg;function Rd(){return xg||(xg=1,Of.exports=Vx()),Of.exports}var it=Rd();const Z0=Y0(it);var zf={exports:{}},bo={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function kx(){return yg||(yg=1,(function(o){function t(U,X){var Y=U.length;U.push(X);e:for(;0<Y;){var oe=Y-1>>>1,ue=U[oe];if(0<l(ue,X))U[oe]=X,U[Y]=ue,Y=oe;else break e}}function i(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var X=U[0],Y=U.pop();if(Y!==X){U[0]=Y;e:for(var oe=0,ue=U.length,L=ue>>>1;oe<L;){var k=2*(oe+1)-1,V=U[k],K=k+1,pe=U[K];if(0>l(V,Y))K<ue&&0>l(pe,V)?(U[oe]=pe,U[K]=Y,oe=K):(U[oe]=V,U[k]=Y,oe=k);else if(K<ue&&0>l(pe,Y))U[oe]=pe,U[K]=Y,oe=K;else break e}}return X}function l(U,X){var Y=U.sortIndex-X.sortIndex;return Y!==0?Y:U.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,y=3,M=!1,R=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(U){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=U)r(p),X.sortIndex=X.expirationTime,t(m,X);else break;X=i(p)}}function q(U){if(A=!1,P(U),!R)if(i(m)!==null)R=!0,G||(G=!0,de());else{var X=i(p);X!==null&&$(q,X.startTime-U)}}var G=!1,z=-1,ge=5,C=-1;function O(){return S?!0:!(o.unstable_now()-C<ge)}function ce(){if(S=!1,G){var U=o.unstable_now();C=U;var X=!0;try{e:{R=!1,A&&(A=!1,I(z),z=-1),M=!0;var Y=y;try{t:{for(P(U),x=i(m);x!==null&&!(x.expirationTime>U&&O());){var oe=x.callback;if(typeof oe=="function"){x.callback=null,y=x.priorityLevel;var ue=oe(x.expirationTime<=U);if(U=o.unstable_now(),typeof ue=="function"){x.callback=ue,P(U),X=!0;break t}x===i(m)&&r(m),P(U)}else r(m);x=i(m)}if(x!==null)X=!0;else{var L=i(p);L!==null&&$(q,L.startTime-U),X=!1}}break e}finally{x=null,y=Y,M=!1}X=void 0}}finally{X?de():G=!1}}}var de;if(typeof N=="function")de=function(){N(ce)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,j=ve.port2;ve.port1.onmessage=ce,de=function(){j.postMessage(null)}}else de=function(){v(ce,0)};function $(U,X){z=v(function(){U(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(U){U.callback=null},o.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<U?Math.floor(1e3/U):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(U){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var Y=y;y=X;try{return U()}finally{y=Y}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Y=y;y=U;try{return X()}finally{y=Y}},o.unstable_scheduleCallback=function(U,X,Y){var oe=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?oe+Y:oe):Y=oe,U){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Y+ue,U={id:g++,callback:X,priorityLevel:U,startTime:Y,expirationTime:ue,sortIndex:-1},Y>oe?(U.sortIndex=Y,t(p,U),i(m)===null&&U===i(p)&&(A?(I(z),z=-1):A=!0,$(q,Y-oe))):(U.sortIndex=ue,t(m,U),R||M||(R=!0,G||(G=!0,de()))),U},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(U){var X=y;return function(){var Y=y;y=X;try{return U.apply(this,arguments)}finally{y=Y}}}})(Bf)),Bf}var Sg;function jx(){return Sg||(Sg=1,Pf.exports=kx()),Pf.exports}var If={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Xx(){if(Mg)return Rn;Mg=1;var o=Rd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.1",Rn}var Eg;function Wx(){if(Eg)return If.exports;Eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),If.exports=Xx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function qx(){if(bg)return bo;bg=1;var o=jx(),t=Rd(),i=Wx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var _=!1,E=c.child;E;){if(E===a){_=!0,a=c,s=f;break}if(E===s){_=!0,s=c,a=f;break}E=E.sibling}if(!_){for(E=f.child;E;){if(E===a){_=!0,a=f,s=c;break}if(E===s){_=!0,s=f,a=c;break}E=E.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),ce=Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=ce&&e[ce]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function j(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case q:return"Suspense";case G:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case N:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:j(e.type)||"Memo";case ge:n=e._payload,e=e._init;try{return j(e(n))}catch{}}return null}var $=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},oe=[],ue=-1;function L(e){return{current:e}}function k(e){0>ue||(e.current=oe[ue],oe[ue]=null,ue--)}function V(e,n){ue++,oe[ue]=e.current,e.current=n}var K=L(null),pe=L(null),ye=L(null),Ee=L(null);function Be(e,n){switch(V(ye,n),V(pe,e),V(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Fm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Fm(n),e=Hm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(K),V(K,e)}function Ne(){k(K),k(pe),k(ye)}function Ve(e){e.memoizedState!==null&&V(Ee,e);var n=K.current,a=Hm(n,e.type);n!==a&&(V(pe,e),V(K,a))}function ot(e){pe.current===e&&(k(K),k(pe)),Ee.current===e&&(k(Ee),xo._currentValue=Y)}var te,Zt;function Fe(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",Zt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+Zt}var Xe=!1;function De(e,n){if(!e||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(se){var ee=se}Reflect.construct(e,[],me)}else{try{me.call()}catch(se){ee=se}e.call(me.prototype)}}else{try{throw Error()}catch(se){ee=se}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(se){if(se&&ee&&typeof se.stack=="string")return[se.stack,ee.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],E=f[1];if(_&&E){var B=_.split(`
`),J=E.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===J.length)for(s=B.length-1,c=J.length-1;1<=s&&0<=c&&B[s]!==J[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==J[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==J[c]){var fe=`
`+B[s].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=s&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Fe(a):""}function ft(e,n){switch(e.tag){case 26:case 27:case 5:return Fe(e.type);case 16:return Fe("Lazy");case 13:return e.child!==n&&n!==null?Fe("Suspense Fallback"):Fe("Suspense");case 19:return Fe("SuspenseList");case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Fe("Activity");default:return""}}function Je(e){try{var n="",a=null;do n+=ft(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var D=Object.prototype.hasOwnProperty,T=o.unstable_scheduleCallback,ie=o.unstable_cancelCallback,Me=o.unstable_shouldYield,Se=o.unstable_requestPaint,_e=o.unstable_now,Ge=o.unstable_getCurrentPriorityLevel,we=o.unstable_ImmediatePriority,ze=o.unstable_UserBlockingPriority,Ye=o.unstable_NormalPriority,rt=o.unstable_LowPriority,xe=o.unstable_IdlePriority,bt=o.log,dt=o.unstable_setDisableYieldValue,$e=null,Ue=null;function Le(e){if(typeof bt=="function"&&dt(e),Ue&&typeof Ue.setStrictMode=="function")try{Ue.setStrictMode($e,e)}catch{}}var We=Math.clz32?Math.clz32:lt,Mt=Math.log,kt=Math.LN2;function lt(e){return e>>>=0,e===0?32:31-(Mt(e)/kt|0)|0}var be=256,F=262144,Re=4194304;function Te(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ke(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Te(s):(_&=E,_!==0?c=Te(_):a||(a=E&~e,a!==0&&(c=Te(a))))):(E=s&~f,E!==0?c=Te(E):_!==0?c=Te(_):a||(a=s&~e,a!==0&&(c=Te(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ke(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Dt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(){var e=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),e}function Wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Kt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,n,a,s,c,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var fe=31-We(a),me=1<<fe;E[fe]=0,B[fe]=-1;var ee=J[fe];if(ee!==null)for(J[fe]=null,fe=0;fe<ee.length;fe++){var se=ee[fe];se!==null&&(se.lane&=-536870913)}a&=~me}s!==0&&hn(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function hn(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-We(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Xn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-We(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function ws(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ra(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ds(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:cg(e.type))}function Xa(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var mi=Math.random().toString(36).slice(2),$t="__reactFiber$"+mi,Tn="__reactProps$"+mi,sa="__reactContainer$"+mi,Ls="__reactEvents$"+mi,w="__reactListeners$"+mi,Z="__reactHandles$"+mi,ae="__reactResources$"+mi,re="__reactMarker$"+mi;function ne(e){delete e[$t],delete e[Tn],delete e[Ls],delete e[w],delete e[Z]}function Ce(e){var n=e[$t];if(n)return n;for(var a=e.parentNode;a;){if(n=a[sa]||a[$t]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qm(e);e!==null;){if(a=e[$t])return a;e=qm(e)}return n}e=a,a=e.parentNode}return null}function Pe(e){if(e=e[$t]||e[sa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function qe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ze(e){var n=e[ae];return n||(n=e[ae]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function He(e){e[re]=!0}var et=new Set,tt={};function At(e,n){en(e,n),en(e+"Capture",n)}function en(e,n){for(tt[e]=n,e=0;e<n.length;e++)et.add(n[e])}var tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ii={},It={};function ct(e){return D.call(It,e)?!0:D.call(ii,e)?!1:tn.test(e)?It[e]=!0:(ii[e]=!0,!1)}function oa(e,n,a){if(ct(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function gn(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function la(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ns(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nn(e){if(!e._valueTracker){var n=la(e)?"checked":"value";e._valueTracker=Ns(e,n,""+e[n])}}function Ti(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=la(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function An(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Us(e,n,a,s,c,f,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ln(n)):e.value!==""+Ln(n)&&(e.value=""+Ln(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Rc(e,_,Ln(n)):a!=null?Rc(e,_,Ln(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Ln(E):e.removeAttribute("name")}function Os(e,n,a,s,c,f,_,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){nn(e);return}a=a!=null?""+Ln(a):"",n=n!=null?""+Ln(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),nn(e)}function Rc(e,n,a){n==="number"&&ca(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sr(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Ln(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Od(e,n,a){if(n!=null&&(n=""+Ln(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ln(a):""}function zd(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if($(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ln(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),nn(e)}function Mr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var z_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||z_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Bd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Pd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Pd(e,f,n[f])}function wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(e){return B_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ni(){}var Cc=null;function Dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,br=null;function Id(e){var n=Pe(e);if(n&&(e=n.stateNode)){var a=e[Tn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Us(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+An(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Tn]||null;if(!c)throw Error(r(90));Us(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ti(s)}break e;case"textarea":Od(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sr(e,!!a.multiple,n,!1)}}}var Lc=!1;function Fd(e,n,a){if(Lc)return e(n,a);Lc=!0;try{var s=e(n);return s}finally{if(Lc=!1,(Er!==null||br!==null)&&(El(),Er&&(n=Er,e=br,br=Er=null,Id(n),e)))for(n=0;n<e.length;n++)Id(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Tn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(Ui)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Nc=!1}var ua=null,Uc=null,Bo=null;function Hd(){if(Bo)return Bo;var e,n=Uc,a=n.length,s,c="value"in ua?ua.value:ua.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===c[f-s];s++);return Bo=c.slice(e,1<s?1-s:void 0)}function Io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fo(){return!0}function Gd(){return!1}function zn(e){function n(a,s,c,f,_){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Fo:Gd,this.isPropagationStopped=Gd,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=zn(Wa),Bs=x({},Wa,{view:0,detail:0}),I_=zn(Bs),Oc,zc,Is,Go=x({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Is&&(Is&&e.type==="mousemove"?(Oc=e.screenX-Is.screenX,zc=e.screenY-Is.screenY):zc=Oc=0,Is=e),Oc)},movementY:function(e){return"movementY"in e?e.movementY:zc}}),Vd=zn(Go),F_=x({},Go,{dataTransfer:0}),H_=zn(F_),G_=x({},Bs,{relatedTarget:0}),Pc=zn(G_),V_=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=zn(V_),j_=x({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),X_=zn(j_),W_=x({},Wa,{data:0}),kd=zn(W_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z_[e])?!!n[e]:!1}function Bc(){return K_}var Q_=x({},Bs,{key:function(e){if(e.key){var n=q_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J_=zn(Q_),$_=x({},Go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=zn($_),ev=x({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),tv=zn(ev),nv=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=zn(nv),av=x({},Go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=zn(av),sv=x({},Wa,{newState:0,oldState:0}),ov=zn(sv),lv=[9,13,27,32],Ic=Ui&&"CompositionEvent"in window,Fs=null;Ui&&"documentMode"in document&&(Fs=document.documentMode);var cv=Ui&&"TextEvent"in window&&!Fs,Xd=Ui&&(!Ic||Fs&&8<Fs&&11>=Fs),Wd=" ",qd=!1;function Yd(e,n){switch(e){case"keyup":return lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function uv(e,n){switch(e){case"compositionend":return Zd(n);case"keypress":return n.which!==32?null:(qd=!0,Wd);case"textInput":return e=n.data,e===Wd&&qd?null:e;default:return null}}function fv(e,n){if(Tr)return e==="compositionend"||!Ic&&Yd(e,n)?(e=Hd(),Bo=Uc=ua=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xd&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dv[e.type]:n==="textarea"}function Qd(e,n,a,s){Er?br?br.push(s):br=[s]:Er=s,n=Dl(n,"onChange"),0<n.length&&(a=new Ho("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function hv(e){Um(e,0)}function Vo(e){var n=qe(e);if(Ti(n))return e}function Jd(e,n){if(e==="change")return n}var $d=!1;if(Ui){var Fc;if(Ui){var Hc="oninput"in document;if(!Hc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Hc=typeof eh.oninput=="function"}Fc=Hc}else Fc=!1;$d=Fc&&(!document.documentMode||9<document.documentMode)}function th(){Hs&&(Hs.detachEvent("onpropertychange",nh),Gs=Hs=null)}function nh(e){if(e.propertyName==="value"&&Vo(Gs)){var n=[];Qd(n,Gs,e,Dc(e)),Fd(hv,n)}}function pv(e,n,a){e==="focusin"?(th(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",nh)):e==="focusout"&&th()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(Gs)}function gv(e,n){if(e==="click")return Vo(n)}function _v(e,n){if(e==="input"||e==="change")return Vo(n)}function vv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:vv;function Vs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!D.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function ih(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ah(e,n){var a=ih(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ih(a)}}function rh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?rh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function sh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ca(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ca(e.document)}return n}function Gc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var xv=Ui&&"documentMode"in document&&11>=document.documentMode,Ar=null,Vc=null,ks=null,kc=!1;function oh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Ar==null||Ar!==ca(s)||(s=Ar,"selectionStart"in s&&Gc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Dl(Vc,"onSelect"),0<s.length&&(n=new Ho("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ar)))}function qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},jc={},lh={};Ui&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ya(e){if(jc[e])return jc[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in lh)return jc[e]=n[a];return e}var ch=Ya("animationend"),uh=Ya("animationiteration"),fh=Ya("animationstart"),yv=Ya("transitionrun"),Sv=Ya("transitionstart"),Mv=Ya("transitioncancel"),dh=Ya("transitionend"),hh=new Map,Xc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xc.push("scrollEnd");function gi(e,n){hh.set(e,n),At(n,[e])}var ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],wr=0,Wc=0;function jo(){for(var e=wr,n=Wc=wr=0;n<e;){var a=ai[n];ai[n++]=null;var s=ai[n];ai[n++]=null;var c=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,s!==null&&c!==null){var _=s.pending;_===null?c.next=c:(c.next=_.next,_.next=c),s.pending=c}f!==0&&ph(a,c,f)}}function Xo(e,n,a,s){ai[wr++]=e,ai[wr++]=n,ai[wr++]=a,ai[wr++]=s,Wc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function qc(e,n,a,s){return Xo(e,n,a,s),Wo(e)}function Za(e,n){return Xo(e,null,null,n),Wo(e)}function ph(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-We(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Wo(e){if(50<fo)throw fo=0,nf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={};function Ev(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new Ev(e,n,a,s)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mh(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function qo(e,n,a,s,c,f){var _=0;if(s=e,typeof e=="function")Yc(e)&&(_=1);else if(typeof e=="string")_=wx(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C:return e=qn(31,a,n,c),e.elementType=C,e.lanes=f,e;case A:return Ka(a.children,c,f,n);case S:_=8,c|=24;break;case v:return e=qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case q:return e=qn(13,a,n,c),e.elementType=q,e.lanes=f,e;case G:return e=qn(19,a,n,c),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break e;case I:_=9;break e;case P:_=11;break e;case z:_=14;break e;case ge:_=16,s=null;break e}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(_,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function Ka(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function Zc(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function gh(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function Kc(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _h=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=_h.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Je(n)},_h.set(e,n),n)}return{value:e,source:n,stack:Je(n)}}var Dr=[],Lr=0,Yo=null,js=0,si=[],oi=0,fa=null,Ai=1,Ri="";function zi(e,n){Dr[Lr++]=js,Dr[Lr++]=Yo,Yo=e,js=n}function vh(e,n,a){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=fa,fa=e;var s=Ai;e=Ri;var c=32-We(s)-1;s&=~(1<<c),a+=1;var f=32-We(n)+c;if(30<f){var _=c-c%5;f=(s&(1<<_)-1).toString(32),s>>=_,c-=_,Ai=1<<32-We(n)+c|a<<c|s,Ri=f+e}else Ai=1<<f|a<<c|s,Ri=e}function Qc(e){e.return!==null&&(zi(e,1),vh(e,1,0))}function Jc(e){for(;e===Yo;)Yo=Dr[--Lr],Dr[Lr]=null,js=Dr[--Lr],Dr[Lr]=null;for(;e===fa;)fa=si[--oi],si[oi]=null,Ri=si[--oi],si[oi]=null,Ai=si[--oi],si[oi]=null}function xh(e,n){si[oi++]=Ai,si[oi++]=Ri,si[oi++]=fa,Ai=n.id,Ri=n.overflow,fa=e}var _n=null,Ft=null,vt=!1,da=null,li=!1,$c=Error(r(519));function ha(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(ri(n,e)),$c}function yh(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[$t]=e,n[Tn]=s,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)mt(po[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),Os(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),zd(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Bm(n.textContent,a)?(s.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),s.onScroll!=null&&mt("scroll",n),s.onScrollEnd!=null&&mt("scrollend",n),s.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||ha(e,!0)}function Sh(e){for(_n=e.return;_n;)switch(_n.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:_n=_n.return}}function Nr(e){if(e!==_n)return!1;if(!vt)return Sh(e),vt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vf(e.type,e.memoizedProps)),a=!a),a&&Ft&&ha(e),Sh(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ft=Wm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ft=Wm(e)}else n===27?(n=Ft,Ra(e.type)?(e=Ef,Ef=null,Ft=e):Ft=n):Ft=_n?ui(e.stateNode.nextSibling):null;return!0}function Qa(){Ft=_n=null,vt=!1}function eu(){var e=da;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),da=null),e}function Xs(e){da===null?da=[e]:da.push(e)}var tu=L(null),Ja=null,Pi=null;function pa(e,n,a){V(tu,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=tu.current,k(tu)}function nu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function iu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),nu(f.return,a,e),s||(_=null);break e}f=E.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),nu(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function Ur(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var E=c.type;Wn(c.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(c===Ee.current){if(_=c.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&iu(n,e,a,s),n.flags|=262144}function Zo(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function vn(e){return Mh(Ja,e)}function Ko(e,n){return Ja===null&&$a(e),Mh(e,n)}function Mh(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(r(308));Pi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pi=Pi.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Tv=o.unstable_scheduleCallback,Av=o.unstable_NormalPriority,an={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function au(){return{controller:new bv,data:new Map,refCount:0}}function Ws(e){e.refCount--,e.refCount===0&&Tv(Av,function(){e.controller.abort()})}var qs=null,ru=0,Or=0,zr=null;function Rv(e,n){if(qs===null){var a=qs=[];ru=0,Or=cf(),zr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ru++,n.then(Eh,Eh),n}function Eh(){if(--ru===0&&qs!==null){zr!==null&&(zr.status="fulfilled");var e=qs;qs=null,Or=0,zr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function wv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var bh=U.S;U.S=function(e,n){om=_e(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rv(e,n),bh!==null&&bh(e,n)};var er=L(null);function su(){var e=er.current;return e!==null?e:Bt.pooledCache}function Qo(e,n){n===null?V(er,er.current):V(er,n.pool)}function Th(){var e=su();return e===null?null:{parent:an._currentValue,pool:e}}var Pr=Error(r(460)),ou=Error(r(474)),Jo=Error(r(542)),$o={then:function(){}};function Ah(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rh(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ch(e),e;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(e=Bt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ch(e),e}throw nr=n,Pr}}function tr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,Pr):a}}var nr=null;function wh(){if(nr===null)throw Error(r(459));var e=nr;return nr=null,e}function Ch(e){if(e===Pr||e===Jo)throw Error(r(483))}var Br=null,Ys=0;function el(e){var n=Ys;return Ys+=1,Br===null&&(Br=[]),Rh(Br,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function tl(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Dh(e){function n(W,H){if(e){var Q=W.deletions;Q===null?(W.deletions=[H],W.flags|=16):Q.push(H)}}function a(W,H){if(!e)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function s(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Oi(W,H),W.index=0,W.sibling=null,W}function f(W,H,Q){return W.index=Q,e?(Q=W.alternate,Q!==null?(Q=Q.index,Q<H?(W.flags|=67108866,H):Q):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function _(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,H,Q,he){return H===null||H.tag!==6?(H=Zc(Q,W.mode,he),H.return=W,H):(H=c(H,Q),H.return=W,H)}function B(W,H,Q,he){var je=Q.type;return je===A?fe(W,H,Q.props.children,he,Q.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ge&&tr(je)===H.type)?(H=c(H,Q.props),Zs(H,Q),H.return=W,H):(H=qo(Q.type,Q.key,Q.props,null,W.mode,he),Zs(H,Q),H.return=W,H)}function J(W,H,Q,he){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=Kc(Q,W.mode,he),H.return=W,H):(H=c(H,Q.children||[]),H.return=W,H)}function fe(W,H,Q,he,je){return H===null||H.tag!==7?(H=Ka(Q,W.mode,he,je),H.return=W,H):(H=c(H,Q),H.return=W,H)}function me(W,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Zc(""+H,W.mode,Q),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=qo(H.type,H.key,H.props,null,W.mode,Q),Zs(Q,H),Q.return=W,Q;case R:return H=Kc(H,W.mode,Q),H.return=W,H;case ge:return H=tr(H),me(W,H,Q)}if($(H)||de(H))return H=Ka(H,W.mode,Q,null),H.return=W,H;if(typeof H.then=="function")return me(W,el(H),Q);if(H.$$typeof===N)return me(W,Ko(W,H),Q);tl(W,H)}return null}function ee(W,H,Q,he){var je=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return je!==null?null:E(W,H,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===je?B(W,H,Q,he):null;case R:return Q.key===je?J(W,H,Q,he):null;case ge:return Q=tr(Q),ee(W,H,Q,he)}if($(Q)||de(Q))return je!==null?null:fe(W,H,Q,he,null);if(typeof Q.then=="function")return ee(W,H,el(Q),he);if(Q.$$typeof===N)return ee(W,H,Ko(W,Q),he);tl(W,Q)}return null}function se(W,H,Q,he,je){if(typeof he=="string"&&he!==""||typeof he=="number"||typeof he=="bigint")return W=W.get(Q)||null,E(H,W,""+he,je);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case M:return W=W.get(he.key===null?Q:he.key)||null,B(H,W,he,je);case R:return W=W.get(he.key===null?Q:he.key)||null,J(H,W,he,je);case ge:return he=tr(he),se(W,H,Q,he,je)}if($(he)||de(he))return W=W.get(Q)||null,fe(H,W,he,je,null);if(typeof he.then=="function")return se(W,H,Q,el(he),je);if(he.$$typeof===N)return se(W,H,Q,Ko(H,he),je);tl(H,he)}return null}function Oe(W,H,Q,he){for(var je=null,yt=null,Ie=H,st=H=0,_t=null;Ie!==null&&st<Q.length;st++){Ie.index>st?(_t=Ie,Ie=null):_t=Ie.sibling;var St=ee(W,Ie,Q[st],he);if(St===null){Ie===null&&(Ie=_t);break}e&&Ie&&St.alternate===null&&n(W,Ie),H=f(St,H,st),yt===null?je=St:yt.sibling=St,yt=St,Ie=_t}if(st===Q.length)return a(W,Ie),vt&&zi(W,st),je;if(Ie===null){for(;st<Q.length;st++)Ie=me(W,Q[st],he),Ie!==null&&(H=f(Ie,H,st),yt===null?je=Ie:yt.sibling=Ie,yt=Ie);return vt&&zi(W,st),je}for(Ie=s(Ie);st<Q.length;st++)_t=se(Ie,W,st,Q[st],he),_t!==null&&(e&&_t.alternate!==null&&Ie.delete(_t.key===null?st:_t.key),H=f(_t,H,st),yt===null?je=_t:yt.sibling=_t,yt=_t);return e&&Ie.forEach(function(Na){return n(W,Na)}),vt&&zi(W,st),je}function Qe(W,H,Q,he){if(Q==null)throw Error(r(151));for(var je=null,yt=null,Ie=H,st=H=0,_t=null,St=Q.next();Ie!==null&&!St.done;st++,St=Q.next()){Ie.index>st?(_t=Ie,Ie=null):_t=Ie.sibling;var Na=ee(W,Ie,St.value,he);if(Na===null){Ie===null&&(Ie=_t);break}e&&Ie&&Na.alternate===null&&n(W,Ie),H=f(Na,H,st),yt===null?je=Na:yt.sibling=Na,yt=Na,Ie=_t}if(St.done)return a(W,Ie),vt&&zi(W,st),je;if(Ie===null){for(;!St.done;st++,St=Q.next())St=me(W,St.value,he),St!==null&&(H=f(St,H,st),yt===null?je=St:yt.sibling=St,yt=St);return vt&&zi(W,st),je}for(Ie=s(Ie);!St.done;st++,St=Q.next())St=se(Ie,W,st,St.value,he),St!==null&&(e&&St.alternate!==null&&Ie.delete(St.key===null?st:St.key),H=f(St,H,st),yt===null?je=St:yt.sibling=St,yt=St);return e&&Ie.forEach(function(Fx){return n(W,Fx)}),vt&&zi(W,st),je}function Ot(W,H,Q,he){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var je=Q.key;H!==null;){if(H.key===je){if(je=Q.type,je===A){if(H.tag===7){a(W,H.sibling),he=c(H,Q.props.children),he.return=W,W=he;break e}}else if(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ge&&tr(je)===H.type){a(W,H.sibling),he=c(H,Q.props),Zs(he,Q),he.return=W,W=he;break e}a(W,H);break}else n(W,H);H=H.sibling}Q.type===A?(he=Ka(Q.props.children,W.mode,he,Q.key),he.return=W,W=he):(he=qo(Q.type,Q.key,Q.props,null,W.mode,he),Zs(he,Q),he.return=W,W=he)}return _(W);case R:e:{for(je=Q.key;H!==null;){if(H.key===je)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(W,H.sibling),he=c(H,Q.children||[]),he.return=W,W=he;break e}else{a(W,H);break}else n(W,H);H=H.sibling}he=Kc(Q,W.mode,he),he.return=W,W=he}return _(W);case ge:return Q=tr(Q),Ot(W,H,Q,he)}if($(Q))return Oe(W,H,Q,he);if(de(Q)){if(je=de(Q),typeof je!="function")throw Error(r(150));return Q=je.call(Q),Qe(W,H,Q,he)}if(typeof Q.then=="function")return Ot(W,H,el(Q),he);if(Q.$$typeof===N)return Ot(W,H,Ko(W,Q),he);tl(W,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(W,H.sibling),he=c(H,Q),he.return=W,W=he):(a(W,H),he=Zc(Q,W.mode,he),he.return=W,W=he),_(W)):a(W,H)}return function(W,H,Q,he){try{Ys=0;var je=Ot(W,H,Q,he);return Br=null,je}catch(Ie){if(Ie===Pr||Ie===Jo)throw Ie;var yt=qn(29,Ie,null,W.mode);return yt.lanes=he,yt.return=W,yt}finally{}}}var ir=Dh(!0),Lh=Dh(!1),ma=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Et&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Wo(e),ph(e,null,a),n}return Xo(e,s,n,a),Wo(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Xn(e,a)}}function uu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var fu=!1;function Qs(){if(fu){var e=zr;if(e!==null)throw e}}function Js(e,n,a,s){fu=!1;var c=e.updateQueue;ma=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,E=fe.lastBaseUpdate,E!==_&&(E===null?fe.firstBaseUpdate=J:E.next=J,fe.lastBaseUpdate=B))}if(f!==null){var me=c.baseState;_=0,fe=J=B=null,E=f;do{var ee=E.lane&-536870913,se=ee!==E.lane;if(se?(gt&ee)===ee:(s&ee)===ee){ee!==0&&ee===Or&&(fu=!0),fe!==null&&(fe=fe.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Oe=e,Qe=E;ee=n;var Ot=a;switch(Qe.tag){case 1:if(Oe=Qe.payload,typeof Oe=="function"){me=Oe.call(Ot,me,ee);break e}me=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Qe.payload,ee=typeof Oe=="function"?Oe.call(Ot,me,ee):Oe,ee==null)break e;me=x({},me,ee);break e;case 2:ma=!0}}ee=E.callback,ee!==null&&(e.flags|=64,se&&(e.flags|=8192),se=c.callbacks,se===null?c.callbacks=[ee]:se.push(ee))}else se={lane:ee,tag:E.tag,payload:E.payload,callback:E.callback,next:null},fe===null?(J=fe=se,B=me):fe=fe.next=se,_|=ee;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;se=E,E=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);fe===null&&(B=me),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=fe,f===null&&(c.shared.lanes=0),Ma|=_,e.lanes=_,e.memoizedState=me}}function Nh(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Uh(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Nh(a[e],n)}var Ir=L(null),nl=L(0);function Oh(e,n){e=Wi,V(nl,e),V(Ir,n),Wi=e|n.baseLanes}function du(){V(nl,Wi),V(Ir,Ir.current)}function hu(){Wi=nl.current,k(Ir),k(nl)}var Yn=L(null),ci=null;function va(e){var n=e.alternate;V(Qt,Qt.current&1),V(Yn,e),ci===null&&(n===null||Ir.current!==null||n.memoizedState!==null)&&(ci=e)}function pu(e){V(Qt,Qt.current),V(Yn,e),ci===null&&(ci=e)}function zh(e){e.tag===22?(V(Qt,Qt.current),V(Yn,e),ci===null&&(ci=e)):xa()}function xa(){V(Qt,Qt.current),V(Yn,Yn.current)}function Zn(e){k(Yn),ci===e&&(ci=null),k(Qt)}var Qt=L(0);function il(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sf(a)||Mf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ii=0,at=null,Nt=null,rn=null,al=!1,Fr=!1,ar=!1,rl=0,$s=0,Hr=null,Cv=0;function qt(){throw Error(r(321))}function mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function gu(e,n,a,s,c,f){return Ii=f,at=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?vp:Lu,ar=!1,f=a(s,c),ar=!1,Fr&&(f=Bh(n,a,s,c)),Ph(e),f}function Ph(e){U.H=no;var n=Nt!==null&&Nt.next!==null;if(Ii=0,rn=Nt=at=null,al=!1,$s=0,Hr=null,n)throw Error(r(300));e===null||sn||(e=e.dependencies,e!==null&&Zo(e)&&(sn=!0))}function Bh(e,n,a,s){at=e;var c=0;do{if(Fr&&(Hr=null),$s=0,Fr=!1,25<=c)throw Error(r(301));if(c+=1,rn=Nt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=xp,f=n(a,s)}while(Fr);return f}function Dv(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Nt!==null?Nt.memoizedState:null)!==e&&(at.flags|=1024),n}function _u(){var e=rl!==0;return rl=0,e}function vu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function xu(e){if(al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}al=!1}Ii=0,rn=Nt=at=null,Fr=!1,$s=rl=0,Hr=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?at.memoizedState=rn=e:rn=rn.next=e,rn}function Jt(){if(Nt===null){var e=at.alternate;e=e!==null?e.memoizedState:null}else e=Nt.next;var n=rn===null?at.memoizedState:rn.next;if(n!==null)rn=n,Nt=e;else{if(e===null)throw at.alternate===null?Error(r(467)):Error(r(310));Nt=e,e={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},rn===null?at.memoizedState=rn=e:rn=rn.next=e}return rn}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$s;return $s+=1,Hr===null&&(Hr=[]),e=Rh(Hr,e,n),n=at,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?vp:Lu),e}function ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===N)return vn(e)}throw Error(r(438,String(e)))}function yu(e){var n=null,a=at.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=at.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sl(),at.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=O;return n.index++,a}function Fi(e,n){return typeof n=="function"?n(e):n}function ll(e){var n=Jt();return Su(n,Nt,e)}function Su(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=_=null,B=null,J=n,fe=!1;do{var me=J.lane&-536870913;if(me!==J.lane?(gt&me)===me:(Ii&me)===me){var ee=J.revertLane;if(ee===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),me===Or&&(fe=!0);else if((Ii&ee)===ee){J=J.next,ee===Or&&(fe=!0);continue}else me={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=me,_=f):B=B.next=me,at.lanes|=ee,Ma|=ee;me=J.action,ar&&a(f,me),f=J.hasEagerState?J.eagerState:a(f,me)}else ee={lane:me,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=ee,_=f):B=B.next=ee,at.lanes|=me,Ma|=me;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=E,!Wn(f,e.memoizedState)&&(sn=!0,fe&&(a=zr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Mu(e){var n=Jt(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=e(f,_.action),_=_.next;while(_!==c);Wn(f,n.memoizedState)||(sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Ih(e,n,a){var s=at,c=Jt(),f=vt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Wn((Nt||c).memoizedState,a);if(_&&(c.memoizedState=a,sn=!0),c=c.queue,Tu(Gh.bind(null,s,c,e),[e]),c.getSnapshot!==n||_||rn!==null&&rn.memoizedState.tag&1){if(s.flags|=2048,Gr(9,{destroy:void 0},Hh.bind(null,s,c,a,n),null),Bt===null)throw Error(r(349));f||(Ii&127)!==0||Fh(s,n,a)}return a}function Fh(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=at.updateQueue,n===null?(n=sl(),at.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hh(e,n,a,s){n.value=a,n.getSnapshot=s,Vh(n)&&kh(e)}function Gh(e,n,a){return a(function(){Vh(n)&&kh(e)})}function Vh(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function kh(e){var n=Za(e,2);n!==null&&Hn(n,e,2)}function Eu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),ar){Le(!0);try{a()}finally{Le(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},n}function jh(e,n,a,s){return e.baseState=a,Su(e,Nt,typeof s=="function"?s:Fi)}function Lv(e,n,a,s,c){if(fl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};U.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Xh(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Xh(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=U.T,_={};U.T=_;try{var E=a(c,s),B=U.S;B!==null&&B(_,E),Wh(e,n,E)}catch(J){bu(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),U.T=f}}else try{f=a(c,s),Wh(e,n,f)}catch(J){bu(e,n,J)}}function Wh(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qh(e,n,s)},function(s){return bu(e,n,s)}):qh(e,n,a)}function qh(e,n,a){n.status="fulfilled",n.value=a,Yh(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Xh(e,a)))}function bu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yh(n),n=n.next;while(n!==s)}e.action=null}function Yh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zh(e,n){return n}function Kh(e,n){if(vt){var a=Bt.formState;if(a!==null){e:{var s=at;if(vt){if(Ft){t:{for(var c=Ft,f=li;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ft=ui(c.nextSibling),s=c.data==="F!";break e}}ha(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zh,lastRenderedState:n},a.queue=s,a=mp.bind(null,at,s),s.dispatch=a,s=Eu(!1),f=Du.bind(null,at,!1,s.queue),s=Nn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=Lv.bind(null,at,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Qh(e){var n=Jt();return Jh(n,Nt,e)}function Jh(e,n,a){if(n=Su(e,n,Zh)[0],e=ll(Fi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(_){throw _===Pr?Jo:_}else s=n;n=Jt();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(at.flags|=2048,Gr(9,{destroy:void 0},Nv.bind(null,c,a),null)),[s,f,e]}function Nv(e,n){e.action=n}function $h(e){var n=Jt(),a=Nt;if(a!==null)return Jh(n,a,e);Jt(),n=n.memoizedState,a=Jt();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Gr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=at.updateQueue,n===null&&(n=sl(),at.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function ep(){return Jt().memoizedState}function cl(e,n,a,s){var c=Nn();at.flags|=e,c.memoizedState=Gr(1|n,{destroy:void 0},a,s===void 0?null:s)}function ul(e,n,a,s){var c=Jt();s=s===void 0?null:s;var f=c.memoizedState.inst;Nt!==null&&s!==null&&mu(s,Nt.memoizedState.deps)?c.memoizedState=Gr(n,f,a,s):(at.flags|=e,c.memoizedState=Gr(1|n,f,a,s))}function tp(e,n){cl(8390656,8,e,n)}function Tu(e,n){ul(2048,8,e,n)}function Uv(e){at.flags|=4;var n=at.updateQueue;if(n===null)n=sl(),at.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function np(e){var n=Jt().memoizedState;return Uv({ref:n,nextImpl:e}),function(){if((Et&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ip(e,n){return ul(4,2,e,n)}function ap(e,n){return ul(4,4,e,n)}function rp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sp(e,n,a){a=a!=null?a.concat([e]):null,ul(4,4,rp.bind(null,n,e),a)}function Au(){}function op(e,n){var a=Jt();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function lp(e,n){var a=Jt();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mu(n,s[1]))return s[0];if(s=e(),ar){Le(!0);try{e()}finally{Le(!1)}}return a.memoizedState=[s,n],s}function Ru(e,n,a){return a===void 0||(Ii&1073741824)!==0&&(gt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=cm(),at.lanes|=e,Ma|=e,a)}function cp(e,n,a,s){return Wn(a,n)?a:Ir.current!==null?(e=Ru(e,a,s),Wn(e,n)||(sn=!0),e):(Ii&42)===0||(Ii&1073741824)!==0&&(gt&261930)===0?(sn=!0,e.memoizedState=a):(e=cm(),at.lanes|=e,Ma|=e,n)}function up(e,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var _=U.T,E={};U.T=E,Du(e,!1,n,a);try{var B=c(),J=U.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=wv(B,s);to(e,n,fe,Jn(e))}else to(e,n,s,Jn(e))}catch(me){to(e,n,{then:function(){},status:"rejected",reason:me},Jn())}finally{X.p=f,_!==null&&E.types!==null&&(_.types=E.types),U.T=_}}function Ov(){}function wu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=fp(e).queue;up(e,c,n,Y,a===null?Ov:function(){return dp(e),a(s)})}function fp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function dp(e){var n=fp(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},Jn())}function Cu(){return vn(xo)}function hp(){return Jt().memoizedState}function pp(){return Jt().memoizedState}function zv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Jn();e=ga(a);var s=_a(n,e,a);s!==null&&(Hn(s,n,a),Ks(s,n,a)),n={cache:au()},e.payload=n;return}n=n.return}}function Pv(e,n,a){var s=Jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fl(e)?gp(n,a):(a=qc(e,n,a,s),a!==null&&(Hn(a,e,s),_p(a,n,s)))}function mp(e,n,a){var s=Jn();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(e))gp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,E=f(_,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,_))return Xo(e,n,c,0),Bt===null&&jo(),!1}catch{}finally{}if(a=qc(e,n,c,s),a!==null)return Hn(a,e,s),_p(a,n,s),!0}return!1}function Du(e,n,a,s){if(s={lane:2,revertLane:cf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fl(e)){if(n)throw Error(r(479))}else n=qc(e,a,s,2),n!==null&&Hn(n,e,2)}function fl(e){var n=e.alternate;return e===at||n!==null&&n===at}function gp(e,n){Fr=al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _p(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Xn(e,a)}}var no={readContext:vn,use:ol,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useLayoutEffect:qt,useInsertionEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useSyncExternalStore:qt,useId:qt,useHostTransitionStatus:qt,useFormState:qt,useActionState:qt,useOptimistic:qt,useMemoCache:qt,useCacheRefresh:qt};no.useEffectEvent=qt;var vp={readContext:vn,use:ol,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:vn,useEffect:tp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cl(4194308,4,rp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cl(4194308,4,e,n)},useInsertionEffect:function(e,n){cl(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var s=e();if(ar){Le(!0);try{e()}finally{Le(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Nn();if(a!==void 0){var c=a(n);if(ar){Le(!0);try{a(n)}finally{Le(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Pv.bind(null,at,e),[s.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Eu(e);var n=e.queue,a=mp.bind(null,at,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Au,useDeferredValue:function(e,n){var a=Nn();return Ru(a,e,n)},useTransition:function(){var e=Eu(!1);return e=up.bind(null,at,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=at,c=Nn();if(vt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Bt===null)throw Error(r(349));(gt&127)!==0||Fh(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tp(Gh.bind(null,s,f,e),[e]),s.flags|=2048,Gr(9,{destroy:void 0},Hh.bind(null,s,f,a,n),null),a},useId:function(){var e=Nn(),n=Bt.identifierPrefix;if(vt){var a=Ri,s=Ai;a=(s&~(1<<32-We(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Cv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Cu,useFormState:Kh,useActionState:Kh,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,at,!0,a),a.dispatch=n,[e,n]},useMemoCache:yu,useCacheRefresh:function(){return Nn().memoizedState=zv.bind(null,at)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((Et&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Lu={readContext:vn,use:ol,useCallback:op,useContext:vn,useEffect:Tu,useImperativeHandle:sp,useInsertionEffect:ip,useLayoutEffect:ap,useMemo:lp,useReducer:ll,useRef:ep,useState:function(){return ll(Fi)},useDebugValue:Au,useDeferredValue:function(e,n){var a=Jt();return cp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=ll(Fi)[0],n=Jt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Ih,useId:hp,useHostTransitionStatus:Cu,useFormState:Qh,useActionState:Qh,useOptimistic:function(e,n){var a=Jt();return jh(a,Nt,e,n)},useMemoCache:yu,useCacheRefresh:pp};Lu.useEffectEvent=np;var xp={readContext:vn,use:ol,useCallback:op,useContext:vn,useEffect:Tu,useImperativeHandle:sp,useInsertionEffect:ip,useLayoutEffect:ap,useMemo:lp,useReducer:Mu,useRef:ep,useState:function(){return Mu(Fi)},useDebugValue:Au,useDeferredValue:function(e,n){var a=Jt();return Nt===null?Ru(a,e,n):cp(a,Nt.memoizedState,e,n)},useTransition:function(){var e=Mu(Fi)[0],n=Jt().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:Ih,useId:hp,useHostTransitionStatus:Cu,useFormState:$h,useActionState:$h,useOptimistic:function(e,n){var a=Jt();return Nt!==null?jh(a,Nt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yu,useCacheRefresh:pp};xp.useEffectEvent=np;function Nu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ga(s);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Hn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Jn(),c=ga(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Hn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Jn(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(Hn(n,e,a),Ks(n,e,a))}};function yp(e,n,a,s,c,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function Sp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Uu.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Mp(e){ko(e)}function Ep(e){console.error(e)}function bp(e){ko(e)}function dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tp(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ou(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(e,n)},a}function Ap(e){return e=ga(e),e.tag=3,e}function Rp(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Tp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Tp(n,a,s),typeof c!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function Bv(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ur(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?bl():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===$o?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(e,s,c)),!1;case 22:return a.flags|=65536,s===$o?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(e,s,c)),!1}throw Error(r(435,a.tag))}return sf(e,s,c),bl(),!1}if(vt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==$c&&(e=Error(r(422),{cause:s}),Xs(ri(e,a)))):(s!==$c&&(n=Error(r(423),{cause:s}),Xs(ri(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ri(s,a),c=Ou(e.stateNode,s,c),uu(e,c),Yt!==4&&(Yt=2)),!1;var f=Error(r(520),{cause:s});if(f=ri(f,a),uo===null?uo=[f]:uo.push(f),Yt!==4&&(Yt=2),n===null)return!0;s=ri(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ou(a.stateNode,s,e),uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ap(c),Rp(c,e,a,s),uu(a,c),!1}a=a.return}while(a!==null);return!1}var zu=Error(r(461)),sn=!1;function xn(e,n,a,s){n.child=e===null?Lh(n,null,a,s):ir(n,e.child,a,s)}function wp(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var E in s)E!=="ref"&&(_[E]=s[E])}else _=s;return $a(n),s=gu(e,n,a,_,f,c),E=_u(),e!==null&&!sn?(vu(e,n,c),Hi(e,n,c)):(vt&&E&&Qc(n),n.flags|=1,xn(e,n,s,c),n.child)}function Cp(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!Yc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dp(e,n,f,s,c)):(e=qo(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ku(e,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(_,s)&&e.ref===n.ref)return Hi(e,n,c)}return n.flags|=1,e=Oi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Dp(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(sn=!1,n.pendingProps=s=f,ku(e,c))(e.flags&131072)!==0&&(sn=!0);else return n.lanes=e.lanes,Hi(e,n,c)}return Pu(e,n,a,s,c)}function Lp(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Np(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qo(n,f!==null?f.cachePool:null),f!==null?Oh(n,f):du(),zh(n);else return s=n.lanes=536870912,Np(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Qo(n,f.cachePool),Oh(n,f),xa(),n.memoizedState=null):(e!==null&&Qo(n,null),du(),xa());return xn(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Np(e,n,a,s,c){var f=su();return f=f===null?null:{parent:an._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Qo(n,null),du(),zh(n),e!==null&&Ur(e,n,s,!0),n.childLanes=c,null}function hl(e,n){return n=ml({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Up(e,n,a){return ir(n,e.child,null,a),e=hl(n,n.pendingProps),e.flags|=2,Zn(n),n.memoizedState=null,e}function Iv(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(vt){if(s.mode==="hidden")return e=hl(n,s),n.lanes=536870912,io(null,e);if(pu(n),(e=Ft)?(e=Xm(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=gh(e),a.return=n,n.child=a,_n=n,Ft=null)):e=null,e===null)throw ha(n);return n.lanes=536870912,null}return hl(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(pu(n),c)if(n.flags&256)n.flags&=-257,n=Up(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(sn||Ur(e,n,a,!1),c=(a&e.childLanes)!==0,sn||c){if(s=Bt,s!==null&&(_=ws(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Za(e,_),Hn(s,e,_),zu;bl(),n=Up(e,n,a)}else e=f.treeContext,Ft=ui(_.nextSibling),_n=n,vt=!0,da=null,li=!1,e!==null&&xh(n,e),n=hl(n,s),n.flags|=4096;return n}return e=Oi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Pu(e,n,a,s,c){return $a(n),a=gu(e,n,a,s,void 0,c),s=_u(),e!==null&&!sn?(vu(e,n,c),Hi(e,n,c)):(vt&&s&&Qc(n),n.flags|=1,xn(e,n,a,c),n.child)}function Op(e,n,a,s,c,f){return $a(n),n.updateQueue=null,a=Bh(n,s,a,c),Ph(e),s=_u(),e!==null&&!sn?(vu(e,n,f),Hi(e,n,f)):(vt&&s&&Qc(n),n.flags|=1,xn(e,n,a,f),n.child)}function zp(e,n,a,s,c){if($a(n),n.stateNode===null){var f=Cr,_=a.contextType;typeof _=="object"&&_!==null&&(f=vn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Uu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?vn(_):Cr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Nu(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Uu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,B=rr(a,E);f.props=B;var J=f.context,fe=a.contextType;_=Cr,typeof fe=="object"&&fe!==null&&(_=vn(fe));var me=a.getDerivedStateFromProps;fe=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,fe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==_)&&Sp(n,f,s,_),ma=!1;var ee=n.memoizedState;f.state=ee,Js(n,s,f,c),Qs(),J=n.memoizedState,E||ee!==J||ma?(typeof me=="function"&&(Nu(n,a,me,s),J=n.memoizedState),(B=ma||yp(n,a,B,s,ee,J,_))?(fe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,cu(e,n),_=n.memoizedProps,fe=rr(a,_),f.props=fe,me=n.pendingProps,ee=f.context,J=a.contextType,B=Cr,typeof J=="object"&&J!==null&&(B=vn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==me||ee!==B)&&Sp(n,f,s,B),ma=!1,ee=n.memoizedState,f.state=ee,Js(n,s,f,c),Qs();var se=n.memoizedState;_!==me||ee!==se||ma||e!==null&&e.dependencies!==null&&Zo(e.dependencies)?(typeof E=="function"&&(Nu(n,a,E,s),se=n.memoizedState),(fe=ma||yp(n,a,fe,s,ee,se,B)||e!==null&&e.dependencies!==null&&Zo(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,se,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,se,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=se),f.props=s,f.state=se,f.context=B,s=fe):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ee===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ir(n,e.child,null,c),n.child=ir(n,null,a,c)):xn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Hi(e,n,c),e}function Pp(e,n,a,s){return Qa(),n.flags|=256,xn(e,n,a,s),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Iu(e){return{baseLanes:e,cachePool:Th()}}function Fu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Qn),e}function Bp(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(Qt.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(vt){if(c?va(n):xa(),(e=Ft)?(e=Xm(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=gh(e),a.return=n,n.child=a,_n=n,Ft=null)):e=null,e===null)throw ha(n);return Mf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(xa(),c=n.mode,E=ml({mode:"hidden",children:E},c),s=Ka(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Iu(a),s.childLanes=Fu(e,_,a),n.memoizedState=Bu,io(null,s)):(va(n),Hu(n,E))}var B=e.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=Gu(e,n,a)):n.memoizedState!==null?(xa(),n.child=e.child,n.flags|=128,n=null):(xa(),E=s.fallback,c=n.mode,s=ml({mode:"visible",children:s.children},c),E=Ka(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ir(n,e.child,null,a),s=n.child,s.memoizedState=Iu(a),s.childLanes=Fu(e,_,a),n.memoizedState=Bu,n=io(null,s));else if(va(n),Mf(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var J=_.dgst;_=J,s=Error(r(419)),s.stack="",s.digest=_,Xs({value:s,source:null,stack:null}),n=Gu(e,n,a)}else if(sn||Ur(e,n,a,!1),_=(a&e.childLanes)!==0,sn||_){if(_=Bt,_!==null&&(s=ws(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Za(e,s),Hn(_,e,s),zu;Sf(E)||bl(),n=Gu(e,n,a)}else Sf(E)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ft=ui(E.nextSibling),_n=n,vt=!0,da=null,li=!1,e!==null&&xh(n,e),n=Hu(n,s.children),n.flags|=4096);return n}return c?(xa(),E=s.fallback,c=n.mode,B=e.child,J=B.sibling,s=Oi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Oi(J,E):(E=Ka(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=e.child.memoizedState,E===null?E=Iu(a):(c=E.cachePool,c!==null?(B=an._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Th(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Fu(e,_,a),n.memoizedState=Bu,io(e.child,s)):(va(n),a=e.child,e=a.sibling,a=Oi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Hu(e,n){return n=ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ml(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Gu(e,n,a){return ir(n,e.child,null,a),e=Hu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ip(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),nu(e.return,n,a)}function Vu(e,n,a,s,c,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function Fp(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var _=Qt.current,E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,V(Qt,_),xn(e,n,s,a),s=vt?js:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,a,n);else if(e.tag===19)Ip(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&il(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Vu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&il(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Vu(n,!0,a,null,f,s);break;case"together":Vu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ur(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Oi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Oi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Zo(e)))}function Fv(e,n,a){switch(n.tag){case 3:Be(n,n.stateNode.containerInfo),pa(n,an,e.memoizedState.cache),Qa();break;case 27:case 5:Ve(n);break;case 4:Be(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Bp(e,n,a):(va(n),e=Hi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ur(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Fp(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),V(Qt,Qt.current),s)break;return null;case 22:return n.lanes=0,Lp(e,n,a,n.pendingProps);case 24:pa(n,an,e.memoizedState.cache)}return Hi(e,n,a)}function Hp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)sn=!0;else{if(!ku(e,a)&&(n.flags&128)===0)return sn=!1,Fv(e,n,a);sn=(e.flags&131072)!==0}else sn=!1,vt&&(n.flags&1048576)!==0&&vh(n,js,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=tr(n.elementType),n.type=e,typeof e=="function")Yc(e)?(s=rr(e,s),n.tag=1,n=zp(null,n,e,s,a)):(n.tag=0,n=Pu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===P){n.tag=11,n=wp(null,n,e,s,a);break e}else if(c===z){n.tag=14,n=Cp(null,n,e,s,a);break e}}throw n=j(e)||e,Error(r(306,n,""))}}return n;case 0:return Pu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),zp(e,n,s,c,a);case 3:e:{if(Be(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,cu(e,n),Js(n,s,null,a);var _=n.memoizedState;if(s=_.cache,pa(n,an,s),s!==f.cache&&iu(n,[an],a,!0),Qs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pp(e,n,s,a);break e}else if(s!==c){c=ri(Error(r(424)),n),Xs(c),n=Pp(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ft=ui(e.firstChild),_n=n,vt=!0,da=null,li=!0,a=Lh(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),s===c){n=Hi(e,n,a);break e}xn(e,n,s,a)}n=n.child}return n;case 26:return pl(e,n),e===null?(a=Qm(n.type,null,n.pendingProps,null))?n.memoizedState=a:vt||(a=n.type,e=n.pendingProps,s=Ll(ye.current).createElement(a),s[$t]=n,s[Tn]=e,yn(s,a,e),He(s),n.stateNode=s):n.memoizedState=Qm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ve(n),e===null&&vt&&(s=n.stateNode=Ym(n.type,n.pendingProps,ye.current),_n=n,li=!0,c=Ft,Ra(n.type)?(Ef=c,Ft=ui(s.firstChild)):Ft=c),xn(e,n,n.pendingProps.children,a),pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&vt&&((c=s=Ft)&&(s=mx(s,n.type,n.pendingProps,li),s!==null?(n.stateNode=s,_n=n,Ft=ui(s.firstChild),li=!1,c=!0):c=!1),c||ha(n)),Ve(n),c=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,vf(c,f)?s=null:_!==null&&vf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=gu(e,n,Dv,null,null,a),xo._currentValue=c),pl(e,n),xn(e,n,s,a),n.child;case 6:return e===null&&vt&&((e=a=Ft)&&(a=gx(a,n.pendingProps,li),a!==null?(n.stateNode=a,_n=n,Ft=null,e=!0):e=!1),e||ha(n)),null;case 13:return Bp(e,n,a);case 4:return Be(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ir(n,null,s,a):xn(e,n,s,a),n.child;case 11:return wp(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),xn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=vn(c),s=s(c),n.flags|=1,xn(e,n,s,a),n.child;case 14:return Cp(e,n,n.type,n.pendingProps,a);case 15:return Dp(e,n,n.type,n.pendingProps,a);case 19:return Fp(e,n,a);case 31:return Iv(e,n,a);case 22:return Lp(e,n,a,n.pendingProps);case 24:return $a(n),s=vn(an),e===null?(c=su(),c===null&&(c=Bt,f=au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},lu(n),pa(n,an,c)):((e.lanes&a)!==0&&(cu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),pa(n,an,s)):(s=f.cache,pa(n,an,s),s!==c.cache&&iu(n,[an],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function ju(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(hm())e.flags|=8192;else throw nr=$o,ou}else e.flags&=-16777217}function Gp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ng(n))if(hm())e.flags|=8192;else throw nr=$o,ou}function gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,Xr|=n)}function ao(e,n){if(!vt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Hv(e,n,a){var s=n.pendingProps;switch(Jc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(n),null;case 1:return Ht(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(an),Ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Nr(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,eu())),Ht(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Gi(n),f!==null?(Ht(n),Gp(n,f)):(Ht(n),ju(n,c,null,s,a))):f?f!==e.memoizedState?(Gi(n),Ht(n),Gp(n,f)):(Ht(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Gi(n),Ht(n),ju(n,c,e,s,a)),null;case 27:if(ot(n),a=ye.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ht(n),null}e=K.current,Nr(n)?yh(n):(e=Ym(c,s,a),n.stateNode=e,Gi(n))}return Ht(n),null;case 5:if(ot(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ht(n),null}if(f=K.current,Nr(n))yh(n);else{var _=Ll(ye.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(c,{is:s.is}):_.createElement(c)}}f[$t]=n,f[Tn]=s;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(yn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Gi(n)}}return Ht(n),ju(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ye.current,Nr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=_n,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[$t]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Bm(e.nodeValue,a)),e||ha(n,!0)}else e=Ll(e).createTextNode(s),e[$t]=n,n.stateNode=e}return Ht(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Nr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[$t]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),e=!1}else a=eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ht(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Nr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[$t]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ht(n),c=!1}else c=eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),gl(n,n.updateQueue),Ht(n),null);case 4:return Ne(),e===null&&hf(n.stateNode.containerInfo),Ht(n),null;case 10:return Bi(n.type),Ht(n),null;case 19:if(k(Qt),s=n.memoizedState,s===null)return Ht(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Yt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=il(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)mh(a,e),a=a.sibling;return V(Qt,Qt.current&1|2),vt&&zi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&_e()>Sl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(e=il(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,gl(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!vt)return Ht(n),null}else 2*_e()-s.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_e(),e.sibling=null,a=Qt.current,V(Qt,c?a&1|2:a&1),vt&&zi(n,s.treeForkCount),e):(Ht(n),null);case 22:case 23:return Zn(n),hu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ht(n),n.subtreeFlags&6&&(n.flags|=8192)):Ht(n),a=n.updateQueue,a!==null&&gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&k(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(an),Ht(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gv(e,n){switch(Jc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(an),Ne(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ot(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(Qt),null;case 4:return Ne(),null;case 10:return Bi(n.type),null;case 22:case 23:return Zn(n),hu(),e!==null&&k(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(an),null;case 25:return null;default:return null}}function Vp(e,n){switch(Jc(n),n.tag){case 3:Bi(an),Ne();break;case 26:case 27:case 5:ot(n);break;case 4:Ne();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:k(Qt);break;case 10:Bi(n.type);break;case 22:case 23:Zn(n),hu(),e!==null&&k(er);break;case 24:Bi(an)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==c)}}catch(E){wt(n,n.return,E)}}function ya(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var _=s.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,c=n;var B=a,J=E;try{J()}catch(fe){wt(c,B,fe)}}}s=s.next}while(s!==f)}}catch(fe){wt(n,n.return,fe)}}function kp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Uh(n,a)}catch(s){wt(e,e.return,s)}}}function jp(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){wt(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){wt(e,n,c)}}function wi(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){wt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){wt(e,n,c)}else a.current=null}function Xp(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){wt(e,e.return,c)}}function Xu(e,n,a){try{var s=e.stateNode;cx(s,e.type,a,n),s[Tn]=n}catch(c){wt(e,e.return,c)}}function Wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(qu(e,n,a),e=e.sibling;e!==null;)qu(e,n,a),e=e.sibling}function _l(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_l(e,n,a),e=e.sibling;e!==null;)_l(e,n,a),e=e.sibling}function qp(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);yn(n,s,a),n[$t]=e,n[Tn]=a}catch(f){wt(e,e.return,f)}}var Vi=!1,on=!1,Yu=!1,Yp=typeof WeakSet=="function"?WeakSet:Set,pn=null;function Vv(e,n){if(e=e.containerInfo,gf=Il,e=sh(e),Gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,E=-1,B=-1,J=0,fe=0,me=e,ee=null;t:for(;;){for(var se;me!==a||c!==0&&me.nodeType!==3||(E=_+c),me!==f||s!==0&&me.nodeType!==3||(B=_+s),me.nodeType===3&&(_+=me.nodeValue.length),(se=me.firstChild)!==null;)ee=me,me=se;for(;;){if(me===e)break t;if(ee===a&&++J===c&&(E=_),ee===f&&++fe===s&&(B=_),(se=me.nextSibling)!==null)break;me=ee,ee=me.parentNode}me=se}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:e,selectionRange:a},Il=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Oe=rr(a.type,c);e=s.getSnapshotBeforeUpdate(Oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(Qe){wt(a,a.return,Qe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function Zp(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&ro(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){wt(a,a.return,_)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){wt(a,a.return,_)}}s&64&&kp(a),s&512&&so(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Uh(e,n)}catch(_){wt(a,a.return,_)}}break;case 27:n===null&&s&4&&qp(a);case 26:case 5:ji(e,a),n===null&&s&4&&Xp(a),s&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&Jp(e,a);break;case 13:ji(e,a),s&4&&$p(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qv.bind(null,a),_x(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||on,c=Vi;var f=on;Vi=s,(on=n)&&!f?Xi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Vi=c,on=f}break;case 30:break;default:ji(e,a)}}function Kp(e){var n=e.alternate;n!==null&&(e.alternate=null,Kp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ne(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jt=null,Pn=!1;function ki(e,n,a){for(a=a.child;a!==null;)Qp(e,n,a),a=a.sibling}function Qp(e,n,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 26:on||wi(a,n),ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:on||wi(a,n);var s=jt,c=Pn;Ra(a.type)&&(jt=a.stateNode,Pn=!1),ki(e,n,a),go(a.stateNode),jt=s,Pn=c;break;case 5:on||wi(a,n);case 6:if(s=jt,c=Pn,jt=null,ki(e,n,a),jt=s,Pn=c,jt!==null)if(Pn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(f){wt(a,n,f)}else try{jt.removeChild(a.stateNode)}catch(f){wt(a,n,f)}break;case 18:jt!==null&&(Pn?(e=jt,km(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),$r(e)):km(jt,a.stateNode));break;case 4:s=jt,c=Pn,jt=a.stateNode.containerInfo,Pn=!0,ki(e,n,a),jt=s,Pn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),on||ya(4,a,n),ki(e,n,a);break;case 1:on||(wi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&jp(a,n,s)),ki(e,n,a);break;case 21:ki(e,n,a);break;case 22:on=(s=on)||a.memoizedState!==null,ki(e,n,a),on=s;break;default:ki(e,n,a)}}function Jp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{$r(e)}catch(a){wt(n,n.return,a)}}}function $p(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$r(e)}catch(a){wt(n,n.return,a)}}function kv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Yp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Yp),n;default:throw Error(r(435,e.tag))}}function vl(e,n){var a=kv(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=Jv.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,_=n,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Ra(E.type)){jt=E.stateNode,Pn=!1;break e}break;case 5:jt=E.stateNode,Pn=!1;break e;case 3:case 4:jt=E.stateNode.containerInfo,Pn=!0;break e}E=E.return}if(jt===null)throw Error(r(160));Qp(f,_,c),jt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)em(n,e),n=n.sibling}var _i=null;function em(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),In(e),s&4&&(ya(3,e,e.return),ro(3,e),ya(5,e,e.return));break;case 1:Bn(n,e),In(e),s&512&&(on||a===null||wi(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(Bn(n,e),In(e),s&512&&(on||a===null||wi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[re]||f[$t]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),yn(f,s,a),f[$t]=e,He(f),s=f;break e;case"link":var _=eg("link","href",c).get(s+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(f=_[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;case"meta":if(_=eg("meta","content",c).get(s+(a.content||""))){for(E=0;E<_.length;E++)if(f=_[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}f=c.createElement(s),yn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[$t]=e,He(f),s=f}e.stateNode=s}else tg(c,e.type,e.stateNode);else e.stateNode=$m(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?tg(c,e.type,e.stateNode):$m(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Xu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),In(e),s&512&&(on||a===null||wi(a,a.return)),a!==null&&s&4&&Xu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),In(e),s&512&&(on||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Mr(c,"")}catch(Oe){wt(e,e.return,Oe)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Xu(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Yu=!0);break;case 6:if(Bn(n,e),In(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Oe){wt(e,e.return,Oe)}}break;case 3:if(Ol=null,c=_i,_i=Nl(n.containerInfo),Bn(n,e),_i=c,In(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch(Oe){wt(e,e.return,Oe)}Yu&&(Yu=!1,tm(e));break;case 4:s=_i,_i=Nl(e.stateNode.containerInfo),Bn(n,e),In(e),_i=s;break;case 12:Bn(n,e),In(e);break;case 31:Bn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,vl(e,s)));break;case 13:Bn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yl=_e()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,vl(e,s)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Vi,fe=on;if(Vi=J||c,on=fe||B,Bn(n,e),on=fe,Vi=J,In(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Vi||on||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=B.stateNode;var me=B.memoizedProps.style,ee=me!=null&&me.hasOwnProperty("display")?me.display:null;E.style.display=ee==null||typeof ee=="boolean"?"":(""+ee).trim()}}catch(Oe){wt(B,B.return,Oe)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Oe){wt(B,B.return,Oe)}}}else if(n.tag===18){if(a===null){B=n;try{var se=B.stateNode;c?jm(se,!0):jm(B.stateNode,!1)}catch(Oe){wt(B,B.return,Oe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,vl(e,a))));break;case 19:Bn(n,e),In(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,vl(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(Wp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Wu(e);_l(e,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Mr(_,""),a.flags&=-33);var E=Wu(e);_l(e,E,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Wu(e);qu(e,J,B);break;default:throw Error(r(161))}}catch(fe){wt(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function tm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;tm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zp(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),sr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jp(n,n.return,a),sr(n);break;case 27:go(n.stateNode);case 26:case 5:wi(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),ro(4,f);break;case 1:if(Xi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){wt(s,s.return,J)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Nh(B[c],E)}catch(J){wt(s,s.return,J)}}a&&_&64&&kp(f),so(f,f.return);break;case 27:qp(f);case 26:case 5:Xi(c,f,a),a&&s===null&&_&4&&Xp(f),so(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&_&4&&Jp(c,f);break;case 13:Xi(c,f,a),a&&_&4&&$p(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),so(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function Zu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ws(a))}function Ku(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e))}function vi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)nm(e,n,a,s),n=n.sibling}function nm(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,s),c&2048&&ro(9,n);break;case 1:vi(e,n,a,s);break;case 3:vi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ws(e)));break;case 12:if(c&2048){vi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,E=f.onPostCommit;typeof E=="function"&&E(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){wt(n,n.return,B)}}else vi(e,n,a,s);break;case 31:vi(e,n,a,s);break;case 13:vi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,s):oo(e,n):f._visibility&2?vi(e,n,a,s):(f._visibility|=2,Vr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Zu(_,n);break;case 24:vi(e,n,a,s),c&2048&&Ku(n.alternate,n);break;default:vi(e,n,a,s)}}function Vr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,E=a,B=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:Vr(f,_,E,B,c),ro(8,_);break;case 23:break;case 22:var fe=_.stateNode;_.memoizedState!==null?fe._visibility&2?Vr(f,_,E,B,c):oo(f,_):(fe._visibility|=2,Vr(f,_,E,B,c)),c&&J&2048&&Zu(_.alternate,_);break;case 24:Vr(f,_,E,B,c),c&&J&2048&&Ku(_.alternate,_);break;default:Vr(f,_,E,B,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&Zu(s.alternate,s);break;case 24:oo(a,s),c&2048&&Ku(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function kr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)im(e,n,a),e=e.sibling}function im(e,n,a){switch(e.tag){case 26:kr(e,n,a),e.flags&lo&&e.memoizedState!==null&&Cx(a,_i,e.memoizedState,e.memoizedProps);break;case 5:kr(e,n,a);break;case 3:case 4:var s=_i;_i=Nl(e.stateNode.containerInfo),kr(e,n,a),_i=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,kr(e,n,a),lo=s):kr(e,n,a));break;default:kr(e,n,a)}}function am(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,sm(s,e)}am(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rm(e),e=e.sibling}function rm(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&ya(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,xl(e)):co(e);break;default:co(e)}}function xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,sm(s,e)}am(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xl(n));break;default:xl(n)}e=e.sibling}}function sm(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else e:for(a=e;pn!==null;){s=pn;var c=s.sibling,f=s.return;if(Kp(s),s===a){pn=null;break e}if(c!==null){c.return=f,pn=c;break e}pn=f}}}var jv={getCacheForType:function(e){var n=vn(an),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return vn(an).controller.signal}},Xv=typeof WeakMap=="function"?WeakMap:Map,Et=0,Bt=null,pt=null,gt=0,Rt=0,Kn=null,Sa=!1,jr=!1,Qu=!1,Wi=0,Yt=0,Ma=0,or=0,Ju=0,Qn=0,Xr=0,uo=null,Fn=null,$u=!1,yl=0,om=0,Sl=1/0,Ml=null,Ea=null,un=0,ba=null,Wr=null,qi=0,ef=0,tf=null,lm=null,fo=0,nf=null;function Jn(){return(Et&2)!==0&&gt!==0?gt&-gt:U.T!==null?cf():Ds()}function cm(){if(Qn===0)if((gt&536870912)===0||vt){var e=F;F<<=1,(F&3932160)===0&&(F=262144),Qn=e}else Qn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Qn}function Hn(e,n,a){(e===Bt&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)&&(qr(e,0),Ta(e,gt,Qn,!1)),Kt(e,a),((Et&2)===0||e!==Bt)&&(e===Bt&&((Et&2)===0&&(or|=a),Yt===4&&Ta(e,gt,Qn,!1)),Ci(e))}function um(e,n,a){if((Et&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ke(e,n),c=s?Yv(e,n):rf(e,n,!0),f=s;do{if(c===0){jr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Wv(a)){c=rf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var E=e;c=uo;var B=E.current.memoizedState.isDehydrated;if(B&&(qr(E,_).flags|=256),_=rf(E,_,!1),_!==2){if(Qu&&!B){E.errorRecoveryDisabledLanes|=f,or|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){qr(e,0),Ta(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,Qn,!Sa);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=yl+300-_e(),10<c)){if(Ta(s,n,Qn,!Sa),Ke(s,0,!0)!==0)break e;qi=n,s.timeoutHandle=Gm(fm.bind(null,s,a,Fn,Ml,$u,n,Qn,or,Xr,Sa,f,"Throttled",-0,0),c);break e}fm(s,a,Fn,Ml,$u,n,Qn,or,Xr,Sa,f,null,-0,0)}}break}while(!0);Ci(e)}function fm(e,n,a,s,c,f,_,E,B,J,fe,me,ee,se){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},im(n,f,me);var Oe=(f&62914560)===f?yl-_e():(f&4194048)===f?om-_e():0;if(Oe=Dx(me,Oe),Oe!==null){qi=f,e.cancelPendingCommit=Oe(xm.bind(null,e,n,f,a,s,c,_,E,B,fe,me,null,ee,se)),Ta(e,f,_,!J);return}}xm(e,n,f,a,s,c,_,E,B)}function Wv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~Ju,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-We(c),_=1<<f;s[f]=-1,c&=~_}a!==0&&hn(e,a,n)}function El(){return(Et&6)===0?(ho(0),!1):!0}function af(){if(pt!==null){if(Rt===0)var e=pt.return;else e=pt,Pi=Ja=null,xu(e),Br=null,Ys=0,e=pt;for(;e!==null;)Vp(e.alternate,e),e=e.return;pt=null}}function qr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qi=0,af(),Bt=e,pt=a=Oi(e.current,null),gt=n,Rt=0,Kn=null,Sa=!1,jr=ke(e,n),Qu=!1,Xr=Qn=Ju=or=Ma=Yt=0,Fn=uo=null,$u=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-We(s),f=1<<c;n|=e[c],s&=~f}return Wi=n,jo(),a}function dm(e,n){at=null,U.H=no,n===Pr||n===Jo?(n=wh(),Rt=3):n===ou?(n=wh(),Rt=4):Rt=n===zu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,pt===null&&(Yt=1,dl(e,ri(n,e.current)))}function hm(){var e=Yn.current;return e===null?!0:(gt&4194048)===gt?ci===null:(gt&62914560)===gt||(gt&536870912)!==0?e===ci:!1}function pm(){var e=U.H;return U.H=no,e===null?no:e}function mm(){var e=U.A;return U.A=jv,e}function bl(){Yt=4,Sa||(gt&4194048)!==gt&&Yn.current!==null||(jr=!0),(Ma&134217727)===0&&(or&134217727)===0||Bt===null||Ta(Bt,gt,Qn,!1)}function rf(e,n,a){var s=Et;Et|=2;var c=pm(),f=mm();(Bt!==e||gt!==n)&&(Ml=null,qr(e,n)),n=!1;var _=Yt;e:do try{if(Rt!==0&&pt!==null){var E=pt,B=Kn;switch(Rt){case 8:af(),_=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=Rt;if(Rt=0,Kn=null,Yr(e,E,B,J),a&&jr){_=0;break e}break;default:J=Rt,Rt=0,Kn=null,Yr(e,E,B,J)}}qv(),_=Yt;break}catch(fe){dm(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Pi=Ja=null,Et=s,U.H=c,U.A=f,pt===null&&(Bt=null,gt=0,jo()),_}function qv(){for(;pt!==null;)gm(pt)}function Yv(e,n){var a=Et;Et|=2;var s=pm(),c=mm();Bt!==e||gt!==n?(Ml=null,Sl=_e()+500,qr(e,n)):jr=ke(e,n);e:do try{if(Rt!==0&&pt!==null){n=pt;var f=Kn;t:switch(Rt){case 1:Rt=0,Kn=null,Yr(e,n,f,1);break;case 2:case 9:if(Ah(f)){Rt=0,Kn=null,_m(n);break}n=function(){Rt!==2&&Rt!==9||Bt!==e||(Rt=7),Ci(e)},f.then(n,n);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:Ah(f)?(Rt=0,Kn=null,_m(n)):(Rt=0,Kn=null,Yr(e,n,f,7));break;case 5:var _=null;switch(pt.tag){case 26:_=pt.memoizedState;case 5:case 27:var E=pt;if(_?ng(_):E.stateNode.complete){Rt=0,Kn=null;var B=E.sibling;if(B!==null)pt=B;else{var J=E.return;J!==null?(pt=J,Tl(J)):pt=null}break t}}Rt=0,Kn=null,Yr(e,n,f,5);break;case 6:Rt=0,Kn=null,Yr(e,n,f,6);break;case 8:af(),Yt=6;break e;default:throw Error(r(462))}}Zv();break}catch(fe){dm(e,fe)}while(!0);return Pi=Ja=null,U.H=s,U.A=c,Et=a,pt!==null?0:(Bt=null,gt=0,jo(),Yt)}function Zv(){for(;pt!==null&&!Me();)gm(pt)}function gm(e){var n=Hp(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Tl(e):pt=n}function _m(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Op(a,n,n.pendingProps,n.type,void 0,gt);break;case 11:n=Op(a,n,n.pendingProps,n.type.render,n.ref,gt);break;case 5:xu(n);default:Vp(a,n),n=pt=mh(n,Wi),n=Hp(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Tl(e):pt=n}function Yr(e,n,a,s){Pi=Ja=null,xu(n),Br=null,Ys=0;var c=n.return;try{if(Bv(e,c,n,a,gt)){Yt=1,dl(e,ri(a,e.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;Yt=1,dl(e,ri(a,e.current)),pt=null;return}n.flags&32768?(vt||s===1?e=!0:jr||(gt&536870912)!==0?e=!1:(Sa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),vm(n,e)):Tl(n)}function Tl(e){var n=e;do{if((n.flags&32768)!==0){vm(n,Sa);return}e=n.return;var a=Hv(n.alternate,n,Wi);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);Yt===0&&(Yt=5)}function vm(e,n){do{var a=Gv(e.alternate,e);if(a!==null){a.flags&=32767,pt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pt=e;return}pt=e=a}while(e!==null);Yt=6,pt=null}function xm(e,n,a,s,c,f,_,E,B){e.cancelPendingCommit=null;do Al();while(un!==0);if((Et&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Wc,Lt(e,a,f,_,E,B),e===Bt&&(pt=Bt=null,gt=0),Wr=n,ba=e,qi=a,ef=f,tf=c,lm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$v(Ye,function(){return bm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=U.T,U.T=null,c=X.p,X.p=2,_=Et,Et|=4;try{Vv(e,n,a)}finally{Et=_,X.p=c,U.T=s}}un=1,ym(),Sm(),Mm()}}function ym(){if(un===1){un=0;var e=ba,n=Wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var s=X.p;X.p=2;var c=Et;Et|=4;try{em(n,e);var f=_f,_=sh(e.containerInfo),E=f.focusedElem,B=f.selectionRange;if(_!==E&&E&&E.ownerDocument&&rh(E.ownerDocument.documentElement,E)){if(B!==null&&Gc(E)){var J=B.start,fe=B.end;if(fe===void 0&&(fe=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(fe,E.value.length);else{var me=E.ownerDocument||document,ee=me&&me.defaultView||window;if(ee.getSelection){var se=ee.getSelection(),Oe=E.textContent.length,Qe=Math.min(B.start,Oe),Ot=B.end===void 0?Qe:Math.min(B.end,Oe);!se.extend&&Qe>Ot&&(_=Ot,Ot=Qe,Qe=_);var W=ah(E,Qe),H=ah(E,Ot);if(W&&H&&(se.rangeCount!==1||se.anchorNode!==W.node||se.anchorOffset!==W.offset||se.focusNode!==H.node||se.focusOffset!==H.offset)){var Q=me.createRange();Q.setStart(W.node,W.offset),se.removeAllRanges(),Qe>Ot?(se.addRange(Q),se.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),se.addRange(Q))}}}}for(me=[],se=E;se=se.parentNode;)se.nodeType===1&&me.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<me.length;E++){var he=me[E];he.element.scrollLeft=he.left,he.element.scrollTop=he.top}}Il=!!gf,_f=gf=null}finally{Et=c,X.p=s,U.T=a}}e.current=n,un=2}}function Sm(){if(un===2){un=0;var e=ba,n=Wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var s=X.p;X.p=2;var c=Et;Et|=4;try{Zp(e,n.alternate,n)}finally{Et=c,X.p=s,U.T=a}}un=3}}function Mm(){if(un===4||un===3){un=0,Se();var e=ba,n=Wr,a=qi,s=lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Wr=ba=null,Em(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ea=null),ra(a),n=n.stateNode,Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=U.T,c=X.p,X.p=2,U.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var E=s[_];f(E.value,{componentStack:E.stack})}}finally{U.T=n,X.p=c}}(qi&3)!==0&&Al(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===nf?fo++:(fo=0,nf=e):fo=0,ho(0)}}function Em(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ws(n)))}function Al(){return ym(),Sm(),Mm(),bm()}function bm(){if(un!==5)return!1;var e=ba,n=ef;ef=0;var a=ra(qi),s=U.T,c=X.p;try{X.p=32>a?32:a,U.T=null,a=tf,tf=null;var f=ba,_=qi;if(un=0,Wr=ba=null,qi=0,(Et&6)!==0)throw Error(r(331));var E=Et;if(Et|=4,rm(f.current),nm(f,f.current,_,a),Et=E,ho(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot($e,f)}catch{}return!0}finally{X.p=c,U.T=s,Em(e,n)}}function Tm(e,n,a){n=ri(a,n),n=Ou(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Kt(e,2),Ci(e))}function wt(e,n,a){if(e.tag===3)Tm(e,e,a);else for(;n!==null;){if(n.tag===3){Tm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=ri(a,e),a=Ap(2),s=_a(n,a,2),s!==null&&(Rp(a,s,n,e),Kt(s,2),Ci(s));break}}n=n.return}}function sf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Xv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Qu=!0,c.add(a),e=Kv.bind(null,e,n,a),n.then(e,e))}function Kv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Bt===e&&(gt&a)===a&&(Yt===4||Yt===3&&(gt&62914560)===gt&&300>_e()-yl?(Et&2)===0&&qr(e,0):Ju|=a,Xr===gt&&(Xr=0)),Ci(e)}function Am(e,n){n===0&&(n=Tt()),e=Za(e,n),e!==null&&(Kt(e,n),Ci(e))}function Qv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Am(e,a)}function Jv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Am(e,a)}function $v(e,n){return T(e,n)}var Rl=null,Zr=null,of=!1,wl=!1,lf=!1,Aa=0;function Ci(e){e!==Zr&&e.next===null&&(Zr===null?Rl=Zr=e:Zr=Zr.next=e),wl=!0,of||(of=!0,tx())}function ho(e,n){if(!lf&&wl){lf=!0;do for(var a=!1,s=Rl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var _=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-We(42|e)+1)-1,f&=c&~(_&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dm(s,f))}else f=gt,f=Ke(s,s===Bt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ke(s,f)||(a=!0,Dm(s,f));s=s.next}while(a);lf=!1}}function ex(){Rm()}function Rm(){wl=of=!1;var e=0;Aa!==0&&fx()&&(e=Aa);for(var n=_e(),a=null,s=Rl;s!==null;){var c=s.next,f=wm(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(Zr=a)):(a=s,(e!==0||(f&3)!==0)&&(wl=!0)),s=c}un!==0&&un!==5||ho(e),Aa!==0&&(Aa=0)}function wm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-We(f),E=1<<_,B=c[_];B===-1?((E&a)===0||(E&s)!==0)&&(c[_]=Dt(E,n)):B<=n&&(e.expiredLanes|=E),f&=~E}if(n=Bt,a=gt,a=Ke(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Rt===2||Rt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&ie(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ke(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&ie(s),ra(a)){case 2:case 8:a=ze;break;case 32:a=Ye;break;case 268435456:a=xe;break;default:a=Ye}return s=Cm.bind(null,e),a=T(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&ie(s),e.callbackPriority=2,e.callbackNode=null,2}function Cm(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Al()&&e.callbackNode!==a)return null;var s=gt;return s=Ke(e,e===Bt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(um(e,s,n),wm(e,_e()),e.callbackNode!=null&&e.callbackNode===a?Cm.bind(null,e):null)}function Dm(e,n){if(Al())return null;um(e,n,!0)}function tx(){hx(function(){(Et&6)!==0?T(we,ex):Rm()})}function cf(){if(Aa===0){var e=Or;e===0&&(e=be,be<<=1,(be&261888)===0&&(be=256)),Aa=e}return Aa}function Lm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Po(""+e)}function Nm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function nx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Lm((c[Tn]||null).action),_=s.submitter;_&&(n=(n=_[Tn]||null)?Lm(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var E=new Ho("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Aa!==0){var B=_?Nm(c,_):new FormData(c);wu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=_?Nm(c,_):new FormData(c),wu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var uf=0;uf<Xc.length;uf++){var ff=Xc[uf],ix=ff.toLowerCase(),ax=ff[0].toUpperCase()+ff.slice(1);gi(ix,"on"+ax)}gi(ch,"onAnimationEnd"),gi(uh,"onAnimationIteration"),gi(fh,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(yv,"onTransitionRun"),gi(Sv,"onTransitionStart"),gi(Mv,"onTransitionCancel"),gi(dh,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),At("onBeforeInput",["compositionend","keypress","textInput","paste"]),At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Um(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var E=s[_],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(fe){ko(fe)}c.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(E=s[_],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=J;try{f(c)}catch(fe){ko(fe)}c.currentTarget=null,f=B}}}}function mt(e,n){var a=n[Ls];a===void 0&&(a=n[Ls]=new Set);var s=e+"__bubble";a.has(s)||(Om(n,e,2,!1),a.add(s))}function df(e,n,a){var s=0;n&&(s|=4),Om(a,e,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function hf(e){if(!e[Cl]){e[Cl]=!0,et.forEach(function(a){a!=="selectionchange"&&(rx.has(a)||df(a,!1,e),df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,df("selectionchange",!1,n))}}function Om(e,n,a,s){switch(cg(n)){case 2:var c=Ux;break;case 8:c=Ox;break;default:c=wf}a=c.bind(null,n,a,e),c=void 0,!Nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function pf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var E=s.stateNode.containerInfo;if(E===c)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;E!==null;){if(_=Ce(E),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue e}E=E.parentNode}}s=s.return}Fd(function(){var J=f,fe=Dc(a),me=[];e:{var ee=hh.get(e);if(ee!==void 0){var se=Ho,Oe=e;switch(e){case"keypress":if(Io(a)===0)break e;case"keydown":case"keyup":se=J_;break;case"focusin":Oe="focus",se=Pc;break;case"focusout":Oe="blur",se=Pc;break;case"beforeblur":case"afterblur":se=Pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=tv;break;case ch:case uh:case fh:se=k_;break;case dh:se=iv;break;case"scroll":case"scrollend":se=I_;break;case"wheel":se=rv;break;case"copy":case"cut":case"paste":se=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=jd;break;case"toggle":case"beforetoggle":se=ov}var Qe=(n&4)!==0,Ot=!Qe&&(e==="scroll"||e==="scrollend"),W=Qe?ee!==null?ee+"Capture":null:ee;Qe=[];for(var H=J,Q;H!==null;){var he=H;if(Q=he.stateNode,he=he.tag,he!==5&&he!==26&&he!==27||Q===null||W===null||(he=zs(H,W),he!=null&&Qe.push(mo(H,he,Q))),Ot)break;H=H.return}0<Qe.length&&(ee=new se(ee,Oe,null,a,fe),me.push({event:ee,listeners:Qe}))}}if((n&7)===0){e:{if(ee=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",ee&&a!==Cc&&(Oe=a.relatedTarget||a.fromElement)&&(Ce(Oe)||Oe[sa]))break e;if((se||ee)&&(ee=fe.window===fe?fe:(ee=fe.ownerDocument)?ee.defaultView||ee.parentWindow:window,se?(Oe=a.relatedTarget||a.toElement,se=J,Oe=Oe?Ce(Oe):null,Oe!==null&&(Ot=u(Oe),Qe=Oe.tag,Oe!==Ot||Qe!==5&&Qe!==27&&Qe!==6)&&(Oe=null)):(se=null,Oe=J),se!==Oe)){if(Qe=Vd,he="onMouseLeave",W="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=jd,he="onPointerLeave",W="onPointerEnter",H="pointer"),Ot=se==null?ee:qe(se),Q=Oe==null?ee:qe(Oe),ee=new Qe(he,H+"leave",se,a,fe),ee.target=Ot,ee.relatedTarget=Q,he=null,Ce(fe)===J&&(Qe=new Qe(W,H+"enter",Oe,a,fe),Qe.target=Q,Qe.relatedTarget=Ot,he=Qe),Ot=he,se&&Oe)t:{for(Qe=sx,W=se,H=Oe,Q=0,he=W;he;he=Qe(he))Q++;he=0;for(var je=H;je;je=Qe(je))he++;for(;0<Q-he;)W=Qe(W),Q--;for(;0<he-Q;)H=Qe(H),he--;for(;Q--;){if(W===H||H!==null&&W===H.alternate){Qe=W;break t}W=Qe(W),H=Qe(H)}Qe=null}else Qe=null;se!==null&&zm(me,ee,se,Qe,!1),Oe!==null&&Ot!==null&&zm(me,Ot,Oe,Qe,!0)}}e:{if(ee=J?qe(J):window,se=ee.nodeName&&ee.nodeName.toLowerCase(),se==="select"||se==="input"&&ee.type==="file")var yt=Jd;else if(Kd(ee))if($d)yt=_v;else{yt=mv;var Ie=pv}else se=ee.nodeName,!se||se.toLowerCase()!=="input"||ee.type!=="checkbox"&&ee.type!=="radio"?J&&wc(J.elementType)&&(yt=Jd):yt=gv;if(yt&&(yt=yt(e,J))){Qd(me,yt,a,fe);break e}Ie&&Ie(e,ee,J),e==="focusout"&&J&&ee.type==="number"&&J.memoizedProps.value!=null&&Rc(ee,"number",ee.value)}switch(Ie=J?qe(J):window,e){case"focusin":(Kd(Ie)||Ie.contentEditable==="true")&&(Ar=Ie,Vc=J,ks=null);break;case"focusout":ks=Vc=Ar=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,oh(me,a,fe);break;case"selectionchange":if(xv)break;case"keydown":case"keyup":oh(me,a,fe)}var st;if(Ic)e:{switch(e){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Tr?Yd(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(Xd&&a.locale!=="ko"&&(Tr||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Tr&&(st=Hd()):(ua=fe,Uc="value"in ua?ua.value:ua.textContent,Tr=!0)),Ie=Dl(J,_t),0<Ie.length&&(_t=new kd(_t,e,null,a,fe),me.push({event:_t,listeners:Ie}),st?_t.data=st:(st=Zd(a),st!==null&&(_t.data=st)))),(st=cv?uv(e,a):fv(e,a))&&(_t=Dl(J,"onBeforeInput"),0<_t.length&&(Ie=new kd("onBeforeInput","beforeinput",null,a,fe),me.push({event:Ie,listeners:_t}),Ie.data=st)),nx(me,e,J,a,fe)}Um(me,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(mo(e,c,f)),c=zs(e,n),c!=null&&s.push(mo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function sx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zm(e,n,a,s,c){for(var f=n._reactName,_=[];a!==null&&a!==s;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===s)break;E!==5&&E!==26&&E!==27||J===null||(B=J,c?(J=zs(a,f),J!=null&&_.unshift(mo(a,J,B))):c||(J=zs(a,f),J!=null&&_.push(mo(a,J,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var ox=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Pm(e){return(typeof e=="string"?e:""+e).replace(ox,`
`).replace(lx,"")}function Bm(e,n){return n=Pm(n),Pm(e)===n}function Ut(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Mr(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Mr(e,""+s);break;case"className":Pt(e,"class",s);break;case"tabIndex":Pt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Pt(e,a,s);break;case"style":Bd(e,s,f);break;case"data":if(n!=="object"){Pt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Po(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ut(e,n,"name",c.name,c,null),Ut(e,n,"formEncType",c.formEncType,c,null),Ut(e,n,"formMethod",c.formMethod,c,null),Ut(e,n,"formTarget",c.formTarget,c,null)):(Ut(e,n,"encType",c.encType,c,null),Ut(e,n,"method",c.method,c,null),Ut(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Po(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ni);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Po(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":mt("beforetoggle",e),mt("toggle",e),oa(e,"popover",s);break;case"xlinkActuate":gn(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":gn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":gn(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":gn(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":gn(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":gn(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":gn(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":gn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":gn(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":oa(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=P_.get(a)||a,oa(e,a,s))}}function mf(e,n,a,s,c,f){switch(a){case"style":Bd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Mr(e,s):(typeof s=="number"||typeof s=="bigint")&&Mr(e,""+s);break;case"onScroll":s!=null&&mt("scroll",e);break;case"onScrollEnd":s!=null&&mt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):oa(e,a,s)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",e),mt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ut(e,n,f,_,a,null)}}c&&Ut(e,n,"srcSet",a.srcSet,a,null),s&&Ut(e,n,"src",a.src,a,null);return;case"input":mt("invalid",e);var E=f=_=c=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var fe=a[s];if(fe!=null)switch(s){case"name":c=fe;break;case"type":_=fe;break;case"checked":B=fe;break;case"defaultChecked":J=fe;break;case"value":f=fe;break;case"defaultValue":E=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:Ut(e,n,s,fe,a,null)}}Os(e,f,E,B,J,_,c,!1);return;case"select":mt("invalid",e),s=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":_=E;break;case"multiple":s=E;default:Ut(e,n,c,E,a,null)}n=f,a=_,e.multiple=!!s,n!=null?Sr(e,!!s,n,!1):a!=null&&Sr(e,!!s,a,!0);return;case"textarea":mt("invalid",e),f=c=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ut(e,n,_,E,a,null)}zd(e,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ut(e,n,B,s,a,null)}return;case"dialog":mt("beforetoggle",e),mt("toggle",e),mt("cancel",e),mt("close",e);break;case"iframe":case"object":mt("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)mt(po[s],e);break;case"image":mt("error",e),mt("load",e);break;case"details":mt("toggle",e);break;case"embed":case"source":case"link":mt("error",e),mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ut(e,n,J,s,a,null)}return;default:if(wc(n)){for(fe in a)a.hasOwnProperty(fe)&&(s=a[fe],s!==void 0&&mf(e,n,fe,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ut(e,n,E,s,a,null))}function cx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,E=null,B=null,J=null,fe=null;for(se in a){var me=a[se];if(a.hasOwnProperty(se)&&me!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":B=me;default:s.hasOwnProperty(se)||Ut(e,n,se,null,s,me)}}for(var ee in s){var se=s[ee];if(me=a[ee],s.hasOwnProperty(ee)&&(se!=null||me!=null))switch(ee){case"type":f=se;break;case"name":c=se;break;case"checked":J=se;break;case"defaultChecked":fe=se;break;case"value":_=se;break;case"defaultValue":E=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==me&&Ut(e,n,ee,se,s,me)}}Us(e,_,E,B,J,fe,f,c);return;case"select":se=_=E=ee=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":se=B;default:s.hasOwnProperty(f)||Ut(e,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ee=f;break;case"defaultValue":E=f;break;case"multiple":_=f;default:f!==B&&Ut(e,n,c,f,s,B)}n=E,a=_,s=se,ee!=null?Sr(e,!!a,ee,!1):!!s!=!!a&&(n!=null?Sr(e,!!a,n,!0):Sr(e,!!a,a?[]:"",!1));return;case"textarea":se=ee=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ut(e,n,E,null,s,c)}for(_ in s)if(c=s[_],f=a[_],s.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":ee=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ut(e,n,_,c,s,f)}Od(e,ee,se);return;case"option":for(var Oe in a)if(ee=a[Oe],a.hasOwnProperty(Oe)&&ee!=null&&!s.hasOwnProperty(Oe))switch(Oe){case"selected":e.selected=!1;break;default:Ut(e,n,Oe,null,s,ee)}for(B in s)if(ee=s[B],se=a[B],s.hasOwnProperty(B)&&ee!==se&&(ee!=null||se!=null))switch(B){case"selected":e.selected=ee&&typeof ee!="function"&&typeof ee!="symbol";break;default:Ut(e,n,B,ee,s,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)ee=a[Qe],a.hasOwnProperty(Qe)&&ee!=null&&!s.hasOwnProperty(Qe)&&Ut(e,n,Qe,null,s,ee);for(J in s)if(ee=s[J],se=a[J],s.hasOwnProperty(J)&&ee!==se&&(ee!=null||se!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(r(137,n));break;default:Ut(e,n,J,ee,s,se)}return;default:if(wc(n)){for(var Ot in a)ee=a[Ot],a.hasOwnProperty(Ot)&&ee!==void 0&&!s.hasOwnProperty(Ot)&&mf(e,n,Ot,void 0,s,ee);for(fe in s)ee=s[fe],se=a[fe],!s.hasOwnProperty(fe)||ee===se||ee===void 0&&se===void 0||mf(e,n,fe,ee,s,se);return}}for(var W in a)ee=a[W],a.hasOwnProperty(W)&&ee!=null&&!s.hasOwnProperty(W)&&Ut(e,n,W,null,s,ee);for(me in s)ee=s[me],se=a[me],!s.hasOwnProperty(me)||ee===se||ee==null&&se==null||Ut(e,n,me,ee,s,se)}function Im(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ux(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,_=c.initiatorType,E=c.duration;if(f&&E&&Im(_)){for(_=0,E=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>E)break;var fe=B.transferSize,me=B.initiatorType;fe&&Im(me)&&(B=B.responseEnd,_+=fe*(B<E?1:(E-J)/(B-J)))}if(--s,n+=8*(f+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gf=null,_f=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function Fm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function fx(){var e=window.event;return e&&e.type==="popstate"?e===xf?!1:(xf=e,!0):(xf=null,!1)}var Gm=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Vm=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vm<"u"?function(e){return Vm.resolve(null).then(e).catch(px)}:Gm;function px(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function km(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),$r(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var _=f.nextSibling,E=f.nodeName;f[re]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&go(e.ownerDocument.body);a=c}while(a);$r(n)}function jm(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yf(a),ne(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[re])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function gx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function Xm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Sf(e){return e.data==="$?"||e.data==="$~"}function Mf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _x(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ef=null;function Wm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function qm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ym(e,n,a){switch(n=Ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ne(e)}var fi=new Map,Zm=new Set;function Nl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=X.d;X.d={f:vx,r:xx,D:yx,C:Sx,L:Mx,m:Ex,X:Tx,S:bx,M:Ax};function vx(){var e=Yi.f(),n=El();return e||n}function xx(e){var n=Pe(e);n!==null&&n.tag===5&&n.type==="form"?dp(n):Yi.r(e)}var Kr=typeof document>"u"?null:document;function Km(e,n,a){var s=Kr;if(s&&typeof n=="string"&&n){var c=An(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Zm.has(c)||(Zm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),yn(n,"link",e),He(n),s.head.appendChild(n)))}}function yx(e){Yi.D(e),Km("dns-prefetch",e,null)}function Sx(e,n){Yi.C(e,n),Km("preconnect",e,n)}function Mx(e,n,a){Yi.L(e,n,a);var s=Kr;if(s&&e&&n){var c='link[rel="preload"][as="'+An(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+An(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+An(a.imageSizes)+'"]')):c+='[href="'+An(e)+'"]';var f=c;switch(n){case"style":f=Qr(e);break;case"script":f=Jr(e)}fi.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),yn(n,"link",e),He(n),s.head.appendChild(n)))}}function Ex(e,n){Yi.m(e,n);var a=Kr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+An(s)+'"][href="'+An(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(e)}if(!fi.has(f)&&(e=x({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),yn(s,"link",e),He(s),a.head.appendChild(s)}}}function bx(e,n,a){Yi.S(e,n,a);var s=Kr;if(s&&e){var c=Ze(s).hoistableStyles,f=Qr(e);n=n||"default";var _=c.get(f);if(!_){var E={loading:0,preload:null};if(_=s.querySelector(_o(f)))E.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&bf(e,a);var B=_=s.createElement("link");He(B),yn(B,"link",e),B._p=new Promise(function(J,fe){B.onload=J,B.onerror=fe}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ul(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:E},c.set(f,_)}}}function Tx(e,n){Yi.X(e,n);var a=Kr;if(a&&e){var s=Ze(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(e=x({src:e,async:!0},n),(n=fi.get(c))&&Tf(e,n),f=a.createElement("script"),He(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Ax(e,n){Yi.M(e,n);var a=Kr;if(a&&e){var s=Ze(a).hoistableScripts,c=Jr(e),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=fi.get(c))&&Tf(e,n),f=a.createElement("script"),He(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Qm(e,n,a,s){var c=(c=ye.current)?Nl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=Ze(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qr(a.href);var f=Ze(c).hoistableStyles,_=f.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=c.querySelector(_o(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Rx(c,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=Ze(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qr(e){return'href="'+An(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Jm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Rx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),He(n),e.head.appendChild(n))}function Jr(e){return'[src="'+An(e)+'"]'}function vo(e){return"script[async]"+e}function $m(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+An(a.href)+'"]');if(s)return n.instance=s,He(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),He(s),yn(s,"style",c),Ul(s,a.precedence,e),n.instance=s;case"stylesheet":c=Qr(a.href);var f=e.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,He(f),f;s=Jm(a),(c=fi.get(c))&&bf(s,c),f=(e.ownerDocument||e).createElement("link"),He(f);var _=f;return _._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),yn(f,"link",s),n.state.loading|=4,Ul(f,a.precedence,e),n.instance=f;case"script":return f=Jr(a.src),(c=e.querySelector(vo(f)))?(n.instance=c,He(c),c):(s=a,(c=fi.get(f))&&(s=x({},a),Tf(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),He(c),yn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ul(s,a.precedence,e));return n.instance}function Ul(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,_=0;_<s.length;_++){var E=s[_];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ol=null;function eg(e,n,a){if(Ol===null){var s=new Map,c=Ol=new Map;c.set(a,s)}else c=Ol,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[re]||f[$t]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var E=s.get(_);E?E.push(f):s.set(_,[f])}}return s}function tg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ng(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cx(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Qr(s.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,He(f);return}f=n.ownerDocument||n,s=Jm(s),(c=fi.get(c))&&bf(s,c),f=f.createElement("link"),He(f);var _=f;_._p=new Promise(function(E,B){_.onload=E,_.onerror=B}),yn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Af=0;function Dx(e,n){return e.stylesheets&&e.count===0&&Bl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Af===0&&(Af=62500*ux());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Af?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pl=null;function Bl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pl=new Map,n.forEach(Lx,e),Pl=null,zl.call(e))}function Lx(e,n){if(!(n.state.loading&4)){var a=Pl.get(e);if(a)var s=a.get(null);else{a=new Map,Pl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,c),a.set(_,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nx(e,n,a,s,c,f,_,E,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.hiddenUpdates=Wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function ig(e,n,a,s,c,f,_,E,B,J,fe,me){return e=new Nx(e,n,a,_,B,J,fe,me,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lu(f),e}function ag(e){return e?(e=Cr,e):Cr}function rg(e,n,a,s,c,f){c=ag(c),s.context===null?s.context=c:s.pendingContext=c,s=ga(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(e,s,n),a!==null&&(Hn(a,e,n),Ks(a,e,n))}function sg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rf(e,n){sg(e,n),(e=e.alternate)&&sg(e,n)}function og(e){if(e.tag===13||e.tag===31){var n=Za(e,67108864);n!==null&&Hn(n,e,67108864),Rf(e,67108864)}}function lg(e){if(e.tag===13||e.tag===31){var n=Jn();n=Cs(n);var a=Za(e,n);a!==null&&Hn(a,e,n),Rf(e,n)}}var Il=!0;function Ux(e,n,a,s){var c=U.T;U.T=null;var f=X.p;try{X.p=2,wf(e,n,a,s)}finally{X.p=f,U.T=c}}function Ox(e,n,a,s){var c=U.T;U.T=null;var f=X.p;try{X.p=8,wf(e,n,a,s)}finally{X.p=f,U.T=c}}function wf(e,n,a,s){if(Il){var c=Cf(s);if(c===null)pf(e,n,s,Fl,a),ug(e,s);else if(Px(c,e,n,a,s))s.stopPropagation();else if(ug(e,s),n&4&&-1<zx.indexOf(e)){for(;c!==null;){var f=Pe(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Te(f.pendingLanes);if(_!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var B=1<<31-We(_);E.entanglements[1]|=B,_&=~B}Ci(f),(Et&6)===0&&(Sl=_e()+500,ho(0))}}break;case 31:case 13:E=Za(f,2),E!==null&&Hn(E,f,2),El(),Rf(f,2)}if(f=Cf(s),f===null&&pf(e,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else pf(e,n,s,null,a)}}function Cf(e){return e=Dc(e),Df(e)}var Fl=null;function Df(e){if(Fl=null,e=Ce(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Fl=e,null}function cg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case we:return 2;case ze:return 8;case Ye:case rt:return 32;case xe:return 268435456;default:return 32}default:return 32}}var Lf=!1,wa=null,Ca=null,Da=null,yo=new Map,So=new Map,La=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ug(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(n.pointerId)}}function Mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Pe(n),n!==null&&og(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Px(e,n,a,s,c){switch(n){case"focusin":return wa=Mo(wa,e,n,a,s,c),!0;case"dragenter":return Ca=Mo(Ca,e,n,a,s,c),!0;case"mouseover":return Da=Mo(Da,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Mo(yo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,So.set(f,Mo(So.get(f)||null,e,n,a,s,c)),!0}return!1}function fg(e){var n=Ce(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){lg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Xa(e.priority,function(){lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Cc=s,a.target.dispatchEvent(s),Cc=null}else return n=Pe(a),n!==null&&og(n),e.blockedOn=a,!1;n.shift()}return!0}function dg(e,n,a){Hl(e)&&a.delete(n)}function Bx(){Lf=!1,wa!==null&&Hl(wa)&&(wa=null),Ca!==null&&Hl(Ca)&&(Ca=null),Da!==null&&Hl(Da)&&(Da=null),yo.forEach(dg),So.forEach(dg)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Bx)))}var Vl=null;function hg(e){Vl!==e&&(Vl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=Pe(a);f!==null&&(e.splice(n,3),n-=3,wu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function $r(e){function n(B){return Gl(B,e)}wa!==null&&Gl(wa,e),Ca!==null&&Gl(Ca,e),Da!==null&&Gl(Da,e),yo.forEach(n),So.forEach(n);for(var a=0;a<La.length;a++){var s=La[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)fg(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],_=c[Tn]||null;if(typeof f=="function")_||hg(a);else if(_){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[Tn]||null)E=_.formAction;else if(Df(c)!==null)continue}else E=_.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),hg(a)}}}function pg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Nf(e){this._internalRoot=e}kl.prototype.render=Nf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Jn();rg(a,s,e,n,null,null)},kl.prototype.unmount=Nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rg(e.current,2,null,e,null,null),El(),n[sa]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ds();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&fg(e)}};var mg=t.version;if(mg!=="19.2.1")throw Error(r(527,mg,"19.2.1"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Ix={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{$e=jl.inject(Ix),Ue=jl}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Mp,f=Ep,_=bp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=ig(e,1,!1,null,null,a,s,null,c,f,_,pg),e[sa]=n.current,hf(e),new Nf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Mp,_=Ep,E=bp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=ig(e,1,!0,n,a??null,s,c,B,f,_,E,pg),n.context=ag(null),a=n.current,s=Jn(),s=Cs(s),c=ga(s),c.callback=null,_a(a,c,s),a=s,n.current.lanes=a,Kt(n,a),Ci(n),e[sa]=n.current,hf(e),new kl(n)},bo.version="19.2.1",bo}var Tg;function Yx(){if(Tg)return zf.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),zf.exports=qx(),zf.exports}var Zx=Yx();const Kx=Y0(Zx);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jx=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Ag=o=>{const t=Jx(o);return t.charAt(0).toUpperCase()+t.slice(1)},K0=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),$x=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ey={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=it.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>it.createElement("svg",{ref:m,...ey,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:K0("lucide",l),...!u&&!$x(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>it.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(o,t)=>{const i=it.forwardRef(({className:r,...l},u)=>it.createElement(ty,{ref:u,iconNode:t,className:K0(`lucide-${Qx(Ag(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Ag(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],iy=Vt("activity",ny);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ry=Vt("arrow-right",ay);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Q0=Vt("arrow-up-right",sy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],ly=Vt("arrow-up",oy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],uy=Vt("chart-column",cy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],dy=Vt("check",fy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],py=Vt("chevron-down",hy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],gy=Vt("copy",my);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],J0=Vt("cpu",_y);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],xy=Vt("globe",vy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Sy=Vt("instagram",yy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Ey=Vt("linkedin",My);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ty=Vt("map",by);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ry=Vt("menu",Ay);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Cy=Vt("message-square",wy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ly=Vt("network",Dy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Uy=Vt("radio",Ny);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],zy=Vt("scan",Oy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],By=Vt("star",Py);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Fy=Vt("target",Iy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],$0=Vt("terminal",Hy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Vy=Vt("twitter",Gy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],jy=Vt("wifi",ky);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wy=Vt("x",Xy);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],e_=Vt("zap",qy);class Yy{constructor(){this.ctx=null,this.gainNode=null,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.gainNode=this.ctx.createGain(),this.gainNode.connect(this.ctx.destination),this.gainNode.gain.value=.04,this.initialized=!0}catch(t){console.error("Audio init failed",t)}}playHover(){if(this.initialized||this.init(),!this.ctx||!this.gainNode)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2e3,t.connect(r),r.connect(i),i.connect(this.gainNode),t.type="sine",t.frequency.setValueAtTime(1e3,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(500,this.ctx.currentTime+.03),i.gain.setValueAtTime(.2,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.03),t.start(),t.stop(this.ctx.currentTime+.04)}playClick(){if(this.initialized||this.init(),!this.ctx||!this.gainNode)return;this.ctx.state==="suspended"&&this.ctx.resume();const t=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=1e3,t.connect(r),r.connect(i),i.connect(this.gainNode),t.type="triangle",t.frequency.setValueAtTime(300,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(50,this.ctx.currentTime+.1),i.gain.setValueAtTime(.4,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.1),t.start(),t.stop(this.ctx.currentTime+.12)}}const Xt=new Yy,Zy=()=>{if(typeof document>"u")return;const o="star-border-styles";if(document.getElementById(o))return;const t=document.createElement("style");t.id=o,t.textContent=`
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
  `,document.head.appendChild(t)};typeof document<"u"&&Zy();const Ky=({as:o,className:t="",color:i="#DE69CB",speed:r="4s",thickness:l=1,children:u,onMouseEnter:h,onClick:d,...m})=>{const p=o||"button";return b.jsxs(p,{className:`star-border-container ${t}`,onMouseEnter:g=>{Xt.playHover(),h&&h(g)},onClick:g=>{Xt.playClick(),d&&d(g)},...m,children:[b.jsx("div",{className:"border-gradient-bottom",style:{background:`radial-gradient(circle, ${i}, transparent 10%)`,animationDuration:r}}),b.jsx("div",{className:"border-gradient-top",style:{background:`radial-gradient(circle, ${i}, transparent 10%)`,animationDuration:r}}),b.jsx("div",{className:"inner-content",children:u})]})},Qy="/assets/HEDlogo-DV3nW9Of.svg",Jy=({className:o=""})=>b.jsx("div",{className:`flex items-center ${o}`,children:b.jsx("img",{src:Qy,alt:"High Energy Digital Logo",className:`
          w-56 md:w-80
          h-auto 
          object-contain 
          select-none 
          pointer-events-none
          drop-shadow-[0_0_20px_rgba(222,105,203,0.45)]
        `})}),$y=()=>{const[o,t]=it.useState(!1),[i,r]=it.useState(!1);it.useEffect(()=>{let u;const h=()=>{u||(u=window.setTimeout(()=>{r(window.scrollY>20),u=0},100))};return window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h),clearTimeout(u)}},[]);const l=(u,h)=>{if(Xt.playClick(),u.preventDefault(),t(!1),h==="top"){window.scrollTo({top:0,behavior:"smooth"});return}const d=document.getElementById(h);if(d){const p=document.body.getBoundingClientRect().top,y=d.getBoundingClientRect().top-p-120;window.scrollTo({top:y,behavior:"smooth"})}};return b.jsxs(b.Fragment,{children:[b.jsxs("header",{className:"fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",children:[b.jsxs("div",{className:`
            hidden md:flex items-center justify-between px-8 py-1.5 
            border-b border-white/10 transition-all duration-300
            ${i?"bg-[#030303] text-gray-400":"bg-[#030303]/50 backdrop-blur-md text-gray-300"}
          `,children:[b.jsxs("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(xy,{size:10,className:"text-brand-cyan"}),b.jsx("span",{children:"Global Agency"})]}),b.jsx("div",{className:"w-px h-3 bg-white/20"}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(jy,{size:10,className:"text-brand-neon"}),b.jsx("span",{children:"Fast Response"})]})]}),b.jsxs("div",{className:"flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] uppercase",children:[b.jsxs("div",{className:"flex items-center gap-2 text-brand-neon",children:[b.jsx(iy,{size:10,className:"animate-pulse"}),b.jsx("span",{children:"Accepting New Clients"})]}),b.jsx("div",{className:"w-px h-3 bg-white/20"}),b.jsxs("div",{className:"text-gray-500",children:["Availability: ",b.jsx("span",{className:"text-white animate-pulse",children:"Limited"})]})]})]}),b.jsx("div",{className:`
            border-b border-white/10 transition-all duration-300
            ${i?"bg-[#030303]/95 backdrop-blur-xl py-3 shadow-2xl":"bg-transparent py-4 md:py-5"}
          `,children:b.jsxs("div",{className:"max-w-[98%] mx-auto px-4 md:px-8 flex items-center justify-between relative",children:[b.jsx("div",{className:"cursor-pointer flex items-center shrink-0 z-20",onClick:u=>l(u,"top"),onMouseEnter:()=>Xt.playHover(),children:b.jsx(Jy,{})}),b.jsx("nav",{className:"hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10",children:["Services","Process","About"].map(u=>b.jsxs("a",{href:`#${u.toLowerCase()}`,onClick:h=>l(h,u.toLowerCase()),onMouseEnter:()=>Xt.playHover(),className:"group relative px-2 py-1 text-xs lg:text-sm font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.15em] font-mono",children:[b.jsx("span",{className:"absolute -left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black",children:"["}),u,b.jsx("span",{className:"absolute -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand-neon text-lg font-black",children:"]"}),b.jsx("span",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-brand-neon scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"})]},u))}),b.jsxs("div",{className:"flex items-center gap-6 shrink-0 z-20",children:[b.jsx("div",{className:"hidden md:block",children:b.jsx(Ky,{as:"a",href:"#contact",onClick:u=>l(u,"contact"),onMouseEnter:()=>Xt.playHover(),color:"#DE69CB",speed:"4s",className:"group",children:b.jsxs("span",{className:"px-5 py-2.5 lg:px-6 lg:py-3 font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white group-hover:text-brand-neon transition-colors flex items-center gap-3",children:["Start Project ",b.jsx(Q0,{size:16})]})})}),b.jsx("button",{className:"md:hidden w-12 h-12 flex items-center justify-center border border-white/20 bg-black text-white active:scale-95 transition-all hover:border-brand-neon",onClick:()=>{Xt.playClick(),t(!o)},onMouseEnter:()=>Xt.playHover(),children:o?b.jsx(Wy,{size:24}):b.jsx(Ry,{size:24})})]})]})})]}),b.jsxs("div",{className:`
          fixed inset-0 z-[9998] bg-[#030303] flex flex-col items-center justify-center gap-10
          transition-all duration-300
          ${o?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}
        `,children:[b.jsx("div",{className:"absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none"}),["Services","Process","About","Contact"].map((u,h)=>b.jsxs("a",{href:`#${u.toLowerCase()}`,onClick:d=>l(d,u.toLowerCase()),onMouseEnter:()=>Xt.playHover(),className:"relative text-5xl md:text-7xl font-black text-white uppercase tracking-tighter hover:text-brand-neon transition-all",children:[b.jsxs("span",{className:"text-gray-800 mr-4 font-mono text-2xl align-top mt-2 inline-block",children:["0",h+1]}),u]},u)),b.jsx("div",{className:"mt-12 w-full max-w-xs px-6",children:b.jsx("a",{href:"#contact",onClick:u=>l(u,"contact"),onMouseEnter:()=>Xt.playHover(),className:"flex items-center justify-center w-full py-5 bg-brand-neon text-black font-black uppercase tracking-widest text-sm border-2 border-brand-neon hover:bg-black hover:text-brand-neon transition-all duration-300",children:"Start Project"})})]})]})},t_=({children:o,className:t="",onMouseEnter:i,onClick:r,...l})=>b.jsxs("button",{className:`
        relative group overflow-hidden px-10 py-5 
        bg-brand-neon/5 border border-brand-neon text-brand-neon
        font-mono text-sm md:text-base font-bold uppercase tracking-[0.2em]
        transition-all duration-500 ease-out
        shadow-[0_0_20px_rgba(222,105,203,0.2)]
        hover:shadow-[0_0_60px_rgba(222,105,203,0.6),inset_0_0_20px_rgba(222,105,203,0.4)]
        active:scale-[0.98]
        ${t}
      `,onMouseEnter:u=>{Xt.playHover(),i&&i(u)},onClick:u=>{Xt.playClick(),r&&r(u)},...l,children:[b.jsx("div",{className:"absolute inset-0 bg-brand-neon translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"}),b.jsx("div",{className:"absolute inset-0 border border-white/50 scale-[0.95] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out z-10"}),b.jsx("span",{className:"relative z-20 flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-white group-hover:tracking-[0.35em] group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]",children:o}),b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-white opacity-100 z-20"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-white opacity-100 z-20"}),b.jsx("div",{className:"absolute inset-0 -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 pointer-events-none"})]}),cn=({children:o,width:t="fit-content",delay:i=0})=>{const r=it.useRef(null),[l,u]=it.useState(!1);return it.useEffect(()=>{const h=new IntersectionObserver(d=>{d.forEach(m=>{m.isIntersecting&&(u(!0),h.disconnect())})},{threshold:.1,rootMargin:"0px 0px -20px 0px"});return r.current&&h.observe(r.current),()=>{r.current&&h.unobserve(r.current)}},[]),b.jsx("div",{ref:r,style:{width:t},className:"relative",children:b.jsx("div",{className:`transform transition-all duration-[1200ms] cubic-bezier(0.2, 1, 0.3, 1) ${l?"opacity-100 translate-y-0 blur-0":"opacity-0 translate-y-12 blur-sm"}`,style:{transitionDelay:`${i}ms`},children:o})})},Rg="ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*!<>[]{}".split(""),eS=({text:o,duration:t=800,className:i="",animateOnHover:r=!0,delay:l=0})=>{const[u,h]=it.useState(o),[d,m]=it.useState(!1),p=it.useRef(0);it.useRef(!0);const g=()=>{p.current=0,m(!0)};return it.useEffect(()=>{const x=setTimeout(()=>{g()},l);return()=>clearTimeout(x)},[l]),it.useEffect(()=>{if(!d)return;const x=setInterval(()=>{p.current<o.length?(h(y=>y.split("").map((M,R)=>M===" "?M:R<p.current?o[R]:Rg[Math.floor(Math.random()*Rg.length)]).join("")),p.current=p.current+.1):(h(o),clearInterval(x),m(!1))},t/(o.length*10));return()=>clearInterval(x)},[o,t,d]),b.jsx("span",{className:`inline-block ${i}`,onMouseEnter:r?g:void 0,children:u})},tS=()=>{const o=it.useRef(null),t=it.useRef(null);it.useEffect(()=>{let r;const l=u=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{const h=u.clientX/window.innerWidth*2-1,d=u.clientY/window.innerHeight*2-1;o.current&&(o.current.style.transform=`translate(${h*-20}px, ${d*-10}px)`),t.current&&(t.current.style.transform=`translate(${h*20}px, ${d*10}px)`)})};return window.addEventListener("mousemove",l),()=>{window.removeEventListener("mousemove",l),cancelAnimationFrame(r)}},[]);const i=()=>{const r=document.getElementById("contact");if(r){const u=document.body.getBoundingClientRect().top,m=r.getBoundingClientRect().top-u-100;window.scrollTo({top:m,behavior:"smooth"})}};return b.jsx("section",{className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-transparent pt-40 md:pt-20 perspective-1000",children:b.jsx("div",{className:"max-w-[95vw] md:max-w-[90vw] mx-auto px-4 md:px-6 relative z-10 w-full",children:b.jsxs("div",{className:"flex flex-col items-center justify-center text-center space-y-12",children:[b.jsxs("div",{className:"relative w-full",children:[b.jsxs("div",{ref:o,className:"relative group mb-4 transition-transform duration-100 ease-out will-change-transform",children:[b.jsx(cn,{width:"100%",children:b.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[b.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent to-gray-500"}),b.jsx("h2",{className:"text-xl md:text-3xl font-bold text-gray-400 tracking-[0.2em] uppercase drop-shadow-md font-mono",children:"We handle the"}),b.jsx("div",{className:"h-px w-12 bg-gradient-to-l from-transparent to-gray-500"})]})}),b.jsx(cn,{width:"100%",delay:100,children:b.jsx("div",{className:"relative mix-blend-normal flex justify-center",children:b.jsx("div",{className:"relative text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]",children:b.jsx(eS,{text:"NOISE",className:"text-white dark:text-white",duration:1e3})})})})]}),b.jsxs("div",{ref:t,className:"relative mt-4 md:mt-8 transition-transform duration-100 ease-out will-change-transform",children:[b.jsx(cn,{width:"100%",delay:300,children:b.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[b.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent to-brand-neon/50"}),b.jsx("h2",{className:"text-xl md:text-3xl font-bold text-white tracking-[0.2em] uppercase drop-shadow-md font-mono",children:"You handle the"}),b.jsx("div",{className:"h-px w-12 bg-gradient-to-l from-transparent to-brand-neon/50"})]})}),b.jsx(cn,{width:"100%",delay:400,children:b.jsxs("h1",{className:"relative z-10 text-[15vw] md:text-[160px] leading-[0.8] font-black tracking-tighter text-white mix-blend-normal drop-shadow-[0_0_30px_rgba(222,105,203,0.3)]",children:["BUSINESS",b.jsx("span",{className:"text-brand-neon",children:"."}),b.jsx("div",{className:"absolute inset-0 bg-brand-neon/20 blur-[100px] md:blur-[150px] -z-10 rounded-full opacity-50 animate-pulse-slow"})]})})]})]}),b.jsx(cn,{delay:600,children:b.jsx("div",{className:"mt-16 w-full max-w-4xl flex flex-col items-center gap-8",children:b.jsx("div",{className:"flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left relative z-10",children:b.jsxs("div",{className:"max-w-lg text-center",children:[b.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[b.jsx("div",{className:"w-2 h-2 bg-brand-neon rounded-full animate-pulse shadow-[0_0_10px_#DE69CB]"}),b.jsx("span",{className:"font-mono text-[10px] text-brand-neon tracking-[0.2em] uppercase",children:"Agency Status: Active"})]}),b.jsxs("p",{className:"text-white font-medium text-xl md:text-2xl mb-10 leading-relaxed",children:["You close the deals. ",b.jsx("span",{className:"text-brand-cyan text-glow",children:"We drive the demand."})]}),b.jsx(t_,{onClick:i,className:"w-full md:w-auto mx-auto hover:scale-105 transition-transform duration-300",children:"START PROJECT"})]})})})})]})})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="160",nS=0,wg=1,iS=2,n_=1,aS=2,ea=3,ka=0,kn=1,ta=2,Ha=0,xs=1,Cg=2,Dg=3,Lg=4,rS=5,pr=100,sS=101,oS=102,Ng=103,Ug=104,lS=200,cS=201,uS=202,fS=203,_d=204,vd=205,dS=206,hS=207,pS=208,mS=209,gS=210,_S=211,vS=212,xS=213,yS=214,SS=0,MS=1,ES=2,mc=3,bS=4,TS=5,AS=6,RS=7,i_=0,wS=1,CS=2,Ga=0,DS=1,LS=2,NS=3,US=4,OS=5,zS=6,a_=300,Ss=301,Ms=302,xd=303,yd=304,Sc=306,Sd=1e3,bi=1001,Md=1002,Sn=1003,Og=1004,Ff=1005,Dn=1006,PS=1007,Lo=1008,Va=1009,BS=1010,IS=1011,Cd=1012,r_=1013,Ia=1014,Fa=1015,Es=1016,s_=1017,o_=1018,gr=1020,FS=1021,ti=1023,HS=1024,GS=1025,_r=1026,bs=1027,VS=1028,l_=1029,kS=1030,c_=1031,u_=1033,Hf=33776,Gf=33777,Vf=33778,kf=33779,zg=35840,Pg=35841,Bg=35842,Ig=35843,f_=36196,Fg=37492,Hg=37496,Gg=37808,Vg=37809,kg=37810,jg=37811,Xg=37812,Wg=37813,qg=37814,Yg=37815,Zg=37816,Kg=37817,Qg=37818,Jg=37819,$g=37820,e0=37821,jf=36492,t0=36494,n0=36495,jS=36283,i0=36284,a0=36285,r0=36286,d_=3e3,vr=3001,XS=3200,WS=3201,qS=0,YS=1,hi="",Mn="srgb",aa="srgb-linear",Dd="display-p3",Mc="display-p3-linear",gc="linear",Gt="srgb",_c="rec709",vc="p3",es=7680,s0=519,ZS=512,KS=513,QS=514,h_=515,JS=516,$S=517,eM=518,tM=519,o0=35044,l0="300 es",Ed=1035,na=2e3,xc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=Math.PI/180,bd=180/Math.PI;function No(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[o&255]+wn[o>>8&255]+wn[o>>16&255]+wn[o>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Vn(o,t,i){return Math.max(t,Math.min(i,o))}function nM(o,t){return(o%t+t)%t}function Wf(o,t,i){return(1-i)*o+i*t}function c0(o){return(o&o-1)===0&&o!==0}function Td(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,i=0){xt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Vn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(t,i,r,l,u,h,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],y=r[2],M=r[5],R=r[8],A=l[0],S=l[3],v=l[6],I=l[1],N=l[4],P=l[7],q=l[2],G=l[5],z=l[8];return u[0]=h*A+d*I+m*q,u[3]=h*S+d*N+m*G,u[6]=h*v+d*P+m*z,u[1]=p*A+g*I+x*q,u[4]=p*S+g*N+x*G,u[7]=p*v+g*P+x*z,u[2]=y*A+M*I+R*q,u[5]=y*S+M*N+R*G,u[8]=y*v+M*P+R*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,y=d*m-g*u,M=p*u-h*m,R=i*x+r*y+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=x*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=y*A,t[4]=(g*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(qf.makeScale(t,i)),this}rotate(t){return this.premultiply(qf.makeRotation(-t)),this}translate(t,i){return this.premultiply(qf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new ht;function p_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function iM(){const o=yc("canvas");return o.style.display="block",o}const u0={};function Do(o){o in u0||(u0[o]=!0,console.warn(o))}const f0=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d0=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[aa]:{transfer:gc,primaries:_c,toReference:o=>o,fromReference:o=>o},[Mn]:{transfer:Gt,primaries:_c,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Mc]:{transfer:gc,primaries:vc,toReference:o=>o.applyMatrix3(d0),fromReference:o=>o.applyMatrix3(f0)},[Dd]:{transfer:Gt,primaries:vc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(d0),fromReference:o=>o.applyMatrix3(f0).convertLinearToSRGB()}},aM=new Set([aa,Mc]),zt={enabled:!0,_workingColorSpace:aa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!aM.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,t,i){if(this.enabled===!1||t===i||!t||!i)return o;const r=Xl[t].toReference,l=Xl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,t){return this.convert(o,this._workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this._workingColorSpace)},getPrimaries:function(o){return Xl[o].primaries},getTransfer:function(o){return o===hi?gc:Xl[o].transfer}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class m_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ts===void 0&&(ts=yc("canvas")),ts.width=t.width,ts.height=t.height;const r=ts.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=ts}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=yc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ys(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class g_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=No(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Zf(l[h].image)):u.push(Zf(l[h]))}else u=Zf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?m_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sM=0;class jn extends As{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,r=bi,l=bi,u=Dn,h=Lo,d=ti,m=Va,p=jn.DEFAULT_ANISOTROPY,g=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=No(),this.name="",this.source=new g_(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===vr?Mn:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==a_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sd:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Md:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sd:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Md:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mn?vr:d_}set encoding(t){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vr?Mn:hi}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=a_;jn.DEFAULT_ANISOTROPY=1;class En{constructor(t=0,i=0,r=0,l=1){En.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],y=m[1],M=m[5],R=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(x-A)<.01&&Math.abs(R-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(x+A)<.1&&Math.abs(R+S)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,P=(M+1)/2,q=(v+1)/2,G=(g+y)/4,z=(x+A)/4,ge=(R+S)/4;return N>P&&N>q?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=z/r):P>q?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=G/l,u=ge/l):q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(q),r=z/u,l=ge/u),this.set(r,l,u,i),this}let I=Math.sqrt((S-R)*(S-R)+(x-A)*(x-A)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-R)/I,this.y=(x-A)/I,this.z=(y-g)/I,this.w=Math.acos((p+M+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends As{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new En(0,0,t,i),this.scissorTest=!1,this.viewport=new En(0,0,t,i);const l={width:t,height:i,depth:1};r.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===vr?Mn:hi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new jn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(t,i,r=1){(this.width!==t||this.height!==i||this.depth!==r)&&(this.width=t,this.height=i,this.depth=r,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new g_(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends oM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class __ extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lM extends jn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const y=u[h+0],M=u[h+1],R=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=R,t[i+3]=A;return}if(x!==A||m!==y||p!==M||g!==R){let S=1-d;const v=m*y+p*M+g*R+x*A,I=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const q=Math.sqrt(N),G=Math.atan2(q,v*I);S=Math.sin(S*G)/q,d=Math.sin(d*G)/q}const P=d*I;if(m=m*S+y*P,p=p*S+M*P,g=g*S+R*P,x=x*S+A*P,S===1-d){const q=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=q,p*=q,g*=q,x*=q}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],y=u[h+1],M=u[h+2],R=u[h+3];return t[i]=d*R+g*x+m*M-p*y,t[i+1]=m*R+g*y+p*x-d*M,t[i+2]=p*R+g*M+d*y-m*x,t[i+3]=g*R-d*x-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),y=m(r/2),M=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=y*g*x+p*M*R,this._y=p*M*x-y*g*R,this._z=p*g*R+y*M*x,this._w=p*g*x-y*M*R;break;case"YXZ":this._x=y*g*x+p*M*R,this._y=p*M*x-y*g*R,this._z=p*g*R-y*M*x,this._w=p*g*x+y*M*R;break;case"ZXY":this._x=y*g*x-p*M*R,this._y=p*M*x+y*g*R,this._z=p*g*R+y*M*x,this._w=p*g*x-y*M*R;break;case"ZYX":this._x=y*g*x-p*M*R,this._y=p*M*x+y*g*R,this._z=p*g*R-y*M*x,this._w=p*g*x+y*M*R;break;case"YZX":this._x=y*g*x+p*M*R,this._y=p*M*x+y*g*R,this._z=p*g*R-y*M*x,this._w=p*g*x-y*M*R;break;case"XZY":this._x=y*g*x-p*M*R,this._y=p*M*x-y*g*R,this._z=p*g*R+y*M*x,this._w=p*g*x+y*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],y=r+d+x;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vn(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*x+this._w*y,this._x=r*x+this._x*y,this._y=l*x+this._y*y,this._z=u*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(t=0,i=0,r=0){le.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(h0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(h0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Vn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new le,h0=new Uo;class Oo{constructor(t=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,xi):xi.fromBufferAttribute(u,h),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Wl.copy(r.boundingBox)),Wl.applyMatrix4(t.matrixWorld),this.union(Wl)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),ql.subVectors(this.max,Ao),ns.subVectors(t.a,Ao),is.subVectors(t.b,Ao),as.subVectors(t.c,Ao),Ua.subVectors(is,ns),Oa.subVectors(as,is),lr.subVectors(ns,as);let i=[0,-Ua.z,Ua.y,0,-Oa.z,Oa.y,0,-lr.z,lr.y,Ua.z,0,-Ua.x,Oa.z,0,-Oa.x,lr.z,0,-lr.x,-Ua.y,Ua.x,0,-Oa.y,Oa.x,0,-lr.y,lr.x,0];return!Qf(i,ns,is,as,ql)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,ns,is,as,ql))?!1:(Yl.crossVectors(Ua,Oa),i=[Yl.x,Yl.y,Yl.z],Qf(i,ns,is,as,ql))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new le,new le,new le,new le,new le,new le,new le,new le],xi=new le,Wl=new Oo,ns=new le,is=new le,as=new le,Ua=new le,Oa=new le,lr=new le,Ao=new le,ql=new le,Yl=new le,cr=new le;function Qf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=t.dot(cr),p=i.dot(cr),g=r.dot(cr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const cM=new Oo,Ro=new le,Jf=new le;class Ld{constructor(t=new le,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(Jf)),this.expandByPoint(Ro.copy(t.center).sub(Jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new le,$f=new le,Zl=new le,za=new le,ed=new le,Kl=new le,td=new le;class uM{constructor(t=new le,i=new le(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ki.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,i),Ki.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){$f.copy(t).add(i).multiplyScalar(.5),Zl.copy(i).sub(t).normalize(),za.copy(this.origin).sub($f);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=za.dot(this.direction),m=-za.dot(Zl),p=za.lengthSq(),g=Math.abs(1-h*h);let x,y,M,R;if(g>0)if(x=h*m-d,y=h*d-m,R=u*g,x>=0)if(y>=-R)if(y<=R){const A=1/g;x*=A,y*=A,M=x*(x+h*y+2*d)+y*(h*x+y+2*m)+p}else y=u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y=-u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;else y<=-R?(x=Math.max(0,-(-h*u+d)),y=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p):y<=R?(x=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(x=Math.max(0,-(h*u+d)),y=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+y*(y+2*m)+p);else y=h>0?-u:u,x=Math.max(0,-(h*y+d)),M=-x*x+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy($f).addScaledVector(Zl,y),M}intersectSphere(t,i){Ki.subVectors(t.center,this.origin);const r=Ki.dot(this.direction),l=Ki.dot(Ki)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-y.z)*x,m=(t.max.z-y.z)*x):(d=(t.max.z-y.z)*x,m=(t.min.z-y.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,i,r,l,u){ed.subVectors(i,t),Kl.subVectors(r,t),td.crossVectors(ed,Kl);let h=this.direction.dot(td),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(Kl.crossVectors(za,Kl));if(m<0)return null;const p=d*this.direction.dot(ed.cross(za));if(p<0||m+p>h)return null;const g=-d*za.dot(td);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn{constructor(t,i,r,l,u,h,d,m,p,g,x,y,M,R,A,S){bn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,y,M,R,A,S)}set(t,i,r,l,u,h,d,m,p,g,x,y,M,R,A,S){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=y,v[3]=M,v[7]=R,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),u=1/rs.setFromMatrixColumn(t,1).length(),h=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const y=h*g,M=h*x,R=d*g,A=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+R*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=R+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,M=m*x,R=p*g,A=p*x;i[0]=y+A*d,i[4]=R*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-R,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,M=m*x,R=p*g,A=p*x;i[0]=y-A*d,i[4]=-h*x,i[8]=R+M*d,i[1]=M+R*d,i[5]=h*g,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,M=h*x,R=d*g,A=d*x;i[0]=m*g,i[4]=R*p-M,i[8]=y*p+A,i[1]=m*x,i[5]=A*p+y,i[9]=M*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,R=d*m,A=d*p;i[0]=m*g,i[4]=A-y*x,i[8]=R*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+R,i[10]=y-A*x}else if(t.order==="XZY"){const y=h*m,M=h*p,R=d*m,A=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=y*x+A,i[5]=h*g,i[9]=M*x-R,i[2]=R*x-M,i[6]=d*g,i[10]=A*x+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,dM)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Pa.crossVectors(r,$n),Pa.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Pa.crossVectors(r,$n)),Pa.normalize(),Ql.crossVectors($n,Pa),l[0]=Pa.x,l[4]=Ql.x,l[8]=$n.x,l[1]=Pa.y,l[5]=Ql.y,l[9]=$n.y,l[2]=Pa.z,l[6]=Ql.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],y=r[9],M=r[13],R=r[2],A=r[6],S=r[10],v=r[14],I=r[3],N=r[7],P=r[11],q=r[15],G=l[0],z=l[4],ge=l[8],C=l[12],O=l[1],ce=l[5],de=l[9],ve=l[13],j=l[2],$=l[6],U=l[10],X=l[14],Y=l[3],oe=l[7],ue=l[11],L=l[15];return u[0]=h*G+d*O+m*j+p*Y,u[4]=h*z+d*ce+m*$+p*oe,u[8]=h*ge+d*de+m*U+p*ue,u[12]=h*C+d*ve+m*X+p*L,u[1]=g*G+x*O+y*j+M*Y,u[5]=g*z+x*ce+y*$+M*oe,u[9]=g*ge+x*de+y*U+M*ue,u[13]=g*C+x*ve+y*X+M*L,u[2]=R*G+A*O+S*j+v*Y,u[6]=R*z+A*ce+S*$+v*oe,u[10]=R*ge+A*de+S*U+v*ue,u[14]=R*C+A*ve+S*X+v*L,u[3]=I*G+N*O+P*j+q*Y,u[7]=I*z+N*ce+P*$+q*oe,u[11]=I*ge+N*de+P*U+q*ue,u[15]=I*C+N*ve+P*X+q*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],y=t[10],M=t[14],R=t[3],A=t[7],S=t[11],v=t[15];return R*(+u*m*x-l*p*x-u*d*y+r*p*y+l*d*M-r*m*M)+A*(+i*m*M-i*p*y+u*h*y-l*h*M+l*p*g-u*m*g)+S*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*g-r*p*g)+v*(-l*d*g-i*m*x+i*d*y+l*h*x-r*h*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],y=t[10],M=t[11],R=t[12],A=t[13],S=t[14],v=t[15],I=x*S*p-A*y*p+A*m*M-d*S*M-x*m*v+d*y*v,N=R*y*p-g*S*p-R*m*M+h*S*M+g*m*v-h*y*v,P=g*A*p-R*x*p+R*d*M-h*A*M-g*d*v+h*x*v,q=R*x*m-g*A*m-R*d*y+h*A*y+g*d*S-h*x*S,G=i*I+r*N+l*P+u*q;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return t[0]=I*z,t[1]=(A*y*u-x*S*u-A*l*M+r*S*M+x*l*v-r*y*v)*z,t[2]=(d*S*u-A*m*u+A*l*p-r*S*p-d*l*v+r*m*v)*z,t[3]=(x*m*u-d*y*u-x*l*p+r*y*p+d*l*M-r*m*M)*z,t[4]=N*z,t[5]=(g*S*u-R*y*u+R*l*M-i*S*M-g*l*v+i*y*v)*z,t[6]=(R*m*u-h*S*u-R*l*p+i*S*p+h*l*v-i*m*v)*z,t[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*M+i*m*M)*z,t[8]=P*z,t[9]=(R*x*u-g*A*u-R*r*M+i*A*M+g*r*v-i*x*v)*z,t[10]=(h*A*u-R*d*u+R*r*p-i*A*p-h*r*v+i*d*v)*z,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*M-i*d*M)*z,t[12]=q*z,t[13]=(g*A*l-R*x*l+R*r*y-i*A*y-g*r*S+i*x*S)*z,t[14]=(R*d*l-h*A*l-R*r*m+i*A*m+h*r*S-i*d*S)*z,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*y+i*d*y)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,y=u*p,M=u*g,R=u*x,A=h*g,S=h*x,v=d*x,I=m*p,N=m*g,P=m*x,q=r.x,G=r.y,z=r.z;return l[0]=(1-(A+v))*q,l[1]=(M+P)*q,l[2]=(R-N)*q,l[3]=0,l[4]=(M-P)*G,l[5]=(1-(y+v))*G,l[6]=(S+I)*G,l[7]=0,l[8]=(R+N)*z,l[9]=(S-I)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/u,g=1/h,x=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(r-l),x=(i+t)/(i-t),y=(r+l)/(r-l);let M,R;if(d===na)M=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===xc)M=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(r-l),x=1/(h-u),y=(i+t)*p,M=(r+l)*g;let R,A;if(d===na)R=(h+u)*x,A=-2*x;else if(d===xc)R=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new le,yi=new bn,fM=new le(0,0,0),dM=new le(1,1,1),Pa=new le,Ql=new le,$n=new le,p0=new bn,m0=new Uo;class Ec{constructor(t=0,i=0,r=0,l=Ec.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Vn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Vn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Vn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Vn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return p0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return m0.setFromEuler(this),this.setFromQuaternion(m0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ec.DEFAULT_ORDER="XYZ";class v_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const g0=new le,ss=new Uo,Qi=new bn,Jl=new le,wo=new le,pM=new le,mM=new Uo,_0=new le(1,0,0),v0=new le(0,1,0),x0=new le(0,0,1),gM={type:"added"},_M={type:"removed"};class ni extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const t=new le,i=new Ec,r=new Uo,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new bn},normalMatrix:{value:new ht}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new v_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(_0,t)}rotateY(t){return this.rotateOnAxis(v0,t)}rotateZ(t){return this.rotateOnAxis(x0,t)}translateOnAxis(t,i){return g0.copy(t).applyQuaternion(this.quaternion),this.position.add(g0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(_0,t)}translateY(t){return this.translateOnAxis(v0,t)}translateZ(t){return this.translateOnAxis(x0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jl.copy(t):Jl.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(wo,Jl,this.up):Qi.lookAt(Jl,wo,this.up),this.quaternion.setFromRotationMatrix(Qi),l&&(Qi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Qi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(gM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_M)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),y=h(t.skeletons),M=h(t.animations),R=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ni.DEFAULT_UP=new le(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new le,Ji=new le,nd=new le,$i=new le,os=new le,ls=new le,y0=new le,id=new le,ad=new le,rd=new le;let $l=!1;class Mi{constructor(t=new le,i=new le,r=new le){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Si.subVectors(t,i),l.cross(Si);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Si.subVectors(l,i),Ji.subVectors(r,i),nd.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(Ji),m=Si.dot(nd),p=Ji.dot(Ji),g=Ji.dot(nd),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const y=1/x,M=(p*m-d*g)*y,R=(h*g-d*m)*y;return u.set(1-M-R,R,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(t,i,r,l,u,h,d,m){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),this.getInterpolation(t,i,r,l,u,h,d,m)}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,$i)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,$i.x),m.addScaledVector(h,$i.y),m.addScaledVector(d,$i.z),m)}static isFrontFacing(t,i,r,l){return Si.subVectors(r,i),Ji.subVectors(t,i),Si.cross(Ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Si.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,r,l,u){return $l===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$l=!0),Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}getInterpolation(t,i,r,l,u){return Mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),id.subVectors(t,r);const m=os.dot(id),p=ls.dot(id);if(m<=0&&p<=0)return i.copy(r);ad.subVectors(t,l);const g=os.dot(ad),x=ls.dot(ad);if(g>=0&&x<=g)return i.copy(l);const y=m*x-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);rd.subVectors(t,u);const M=os.dot(rd),R=ls.dot(rd);if(R>=0&&M<=R)return i.copy(u);const A=M*p-m*R;if(A<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(ls,d);const S=g*R-M*x;if(S<=0&&x-g>=0&&M-R>=0)return y0.subVectors(u,l),d=(x-g)/(x-g+(M-R)),i.copy(l).addScaledVector(y0,d);const v=1/(S+A+y);return h=A*v,d=y*v,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},ec={h:0,s:0,l:0};function sd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ct{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,zt.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=zt.workingColorSpace){return this.r=t,this.g=i,this.b=r,zt.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=zt.workingColorSpace){if(t=nM(t,1),i=Vn(i,0,1),r=Vn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=sd(h,u,t+1/3),this.g=sd(h,u,t),this.b=sd(h,u,t-1/3)}return zt.toWorkingColorSpace(this,l),this}setStyle(t,i=Mn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Mn){const r=x_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}copyLinearToSRGB(t){return this.r=Yf(t.r),this.g=Yf(t.g),this.b=Yf(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return zt.fromWorkingColorSpace(Cn.copy(this),t),Math.round(Vn(Cn.r*255,0,255))*65536+Math.round(Vn(Cn.g*255,0,255))*256+Math.round(Vn(Cn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=zt.workingColorSpace){zt.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=zt.workingColorSpace){return zt.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Mn){zt.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==Mn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ba),this.setHSL(Ba.h+t,Ba.s+i,Ba.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ba),t.getHSL(ec);const r=Wf(Ba.h,ec.h,i),l=Wf(Ba.s,ec.s,i),u=Wf(Ba.l,ec.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ct;Ct.NAMES=x_;let vM=0;class bc extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=No(),this.name="",this.type="Material",this.blending=xs,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=vd,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(r.blending=this.blending),this.side!==ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_d&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==mc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class y_ extends bc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=i_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new le,tc=new xt;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=o0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(t),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==o0&&(t.usage=this.usage),t}}class S_ extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class M_ extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class xr extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xM=0;const di=new bn,od=new ni,cs=new le,ei=new Oo,Co=new Oo,mn=new le;class yr extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(p_(t)?M_:S_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ht().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return od.lookAt(t),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const i=[];for(let r=0,l=t.length;r<l;r++){const u=t[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new xr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ld);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new le,1/0);return}if(t){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(ei.min,Co.min),ei.expandByPoint(mn),mn.addVectors(ei.max,Co.max),ei.expandByPoint(mn)):(ei.expandByPoint(Co.min),ei.expandByPoint(Co.max))}ei.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)mn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(t,p),mn.add(cs)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,l=i.position.array,u=i.normal.array,h=i.uv.array,d=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*d),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let O=0;O<d;O++)p[O]=new le,g[O]=new le;const x=new le,y=new le,M=new le,R=new xt,A=new xt,S=new xt,v=new le,I=new le;function N(O,ce,de){x.fromArray(l,O*3),y.fromArray(l,ce*3),M.fromArray(l,de*3),R.fromArray(h,O*2),A.fromArray(h,ce*2),S.fromArray(h,de*2),y.sub(x),M.sub(x),A.sub(R),S.sub(R);const ve=1/(A.x*S.y-S.x*A.y);isFinite(ve)&&(v.copy(y).multiplyScalar(S.y).addScaledVector(M,-A.y).multiplyScalar(ve),I.copy(M).multiplyScalar(A.x).addScaledVector(y,-S.x).multiplyScalar(ve),p[O].add(v),p[ce].add(v),p[de].add(v),g[O].add(I),g[ce].add(I),g[de].add(I))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let O=0,ce=P.length;O<ce;++O){const de=P[O],ve=de.start,j=de.count;for(let $=ve,U=ve+j;$<U;$+=3)N(r[$+0],r[$+1],r[$+2])}const q=new le,G=new le,z=new le,ge=new le;function C(O){z.fromArray(u,O*3),ge.copy(z);const ce=p[O];q.copy(ce),q.sub(z.multiplyScalar(z.dot(ce))).normalize(),G.crossVectors(ge,ce);const ve=G.dot(g[O])<0?-1:1;m[O*4]=q.x,m[O*4+1]=q.y,m[O*4+2]=q.z,m[O*4+3]=ve}for(let O=0,ce=P.length;O<ce;++O){const de=P[O],ve=de.start,j=de.count;for(let $=ve,U=ve+j;$<U;$+=3)C(r[$+0]),C(r[$+1]),C(r[$+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new le,u=new le,h=new le,d=new le,m=new le,p=new le,g=new le,x=new le;if(t)for(let y=0,M=t.count;y<M;y+=3){const R=t.getX(y+0),A=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),d.add(g),m.add(g),p.add(g),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,y=new p.constructor(m.length*g);let M=0,R=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*g;for(let v=0;v<g;v++)y[R++]=p[M++]}return new Li(y,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const y=p[g],M=t(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,y=p.length;x<y;x++){const M=p[x];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let y=0,M=x.length;y<M;y++)g.push(x[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const S0=new bn,ur=new uM,nc=new Ld,M0=new le,us=new le,fs=new le,ds=new le,ld=new le,ic=new le,ac=new xt,rc=new xt,sc=new xt,E0=new le,b0=new le,T0=new le,oc=new le,lc=new le;class ia extends ni{constructor(t=new yr,i=new y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){ic.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(ld.fromBufferAttribute(x,t),h?ic.addScaledVector(ld,g):ic.addScaledVector(ld.sub(i),g))}i.add(ic)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),ur.copy(t.ray).recast(t.near),!(nc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(nc,M0)===null||ur.origin.distanceToSquared(M0)>(t.far-t.near)**2))&&(S0.copy(u).invert(),ur.copy(t.ray).applyMatrix4(S0),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,ur)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,y=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,A=y.length;R<A;R++){const S=y[R],v=h[S.materialIndex],I=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let P=I,q=N;P<q;P+=3){const G=d.getX(P),z=d.getX(P+1),ge=d.getX(P+2);l=cc(this,v,t,r,p,g,x,G,z,ge),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=R,v=A;S<v;S+=3){const I=d.getX(S),N=d.getX(S+1),P=d.getX(S+2);l=cc(this,h,t,r,p,g,x,I,N,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,A=y.length;R<A;R++){const S=y[R],v=h[S.materialIndex],I=Math.max(S.start,M.start),N=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let P=I,q=N;P<q;P+=3){const G=P,z=P+1,ge=P+2;l=cc(this,v,t,r,p,g,x,G,z,ge),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=R,v=A;S<v;S+=3){const I=S,N=S+1,P=S+2;l=cc(this,h,t,r,p,g,x,I,N,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function yM(o,t,i,r,l,u,h,d){let m;if(t.side===kn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===ka,d),m===null)return null;lc.copy(d),lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:o}}function cc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,us),o.getVertexPosition(m,fs),o.getVertexPosition(p,ds);const g=yM(o,t,i,r,us,fs,ds,oc);if(g){l&&(ac.fromBufferAttribute(l,d),rc.fromBufferAttribute(l,m),sc.fromBufferAttribute(l,p),g.uv=Mi.getInterpolation(oc,us,fs,ds,ac,rc,sc,new xt)),u&&(ac.fromBufferAttribute(u,d),rc.fromBufferAttribute(u,m),sc.fromBufferAttribute(u,p),g.uv1=Mi.getInterpolation(oc,us,fs,ds,ac,rc,sc,new xt),g.uv2=g.uv1),h&&(E0.fromBufferAttribute(h,d),b0.fromBufferAttribute(h,m),T0.fromBufferAttribute(h,p),g.normal=Mi.getInterpolation(oc,us,fs,ds,E0,b0,T0,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new le,materialIndex:0};Mi.getNormal(us,fs,ds,x.normal),g.face=x}return g}class zo extends yr{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let y=0,M=0;R("z","y","x",-1,-1,r,i,t,h,u,0),R("z","y","x",1,-1,r,i,-t,h,u,1),R("x","z","y",1,1,t,r,i,l,h,2),R("x","z","y",1,-1,t,r,-i,l,h,3),R("x","y","z",1,-1,t,i,r,l,u,4),R("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new xr(p,3)),this.setAttribute("normal",new xr(g,3)),this.setAttribute("uv",new xr(x,2));function R(A,S,v,I,N,P,q,G,z,ge,C){const O=P/z,ce=q/ge,de=P/2,ve=q/2,j=G/2,$=z+1,U=ge+1;let X=0,Y=0;const oe=new le;for(let ue=0;ue<U;ue++){const L=ue*ce-ve;for(let k=0;k<$;k++){const V=k*O-de;oe[A]=V*I,oe[S]=L*N,oe[v]=j,p.push(oe.x,oe.y,oe.z),oe[A]=0,oe[S]=0,oe[v]=G>0?1:-1,g.push(oe.x,oe.y,oe.z),x.push(k/z),x.push(1-ue/ge),X+=1}}for(let ue=0;ue<ge;ue++)for(let L=0;L<z;L++){const k=y+L+$*ue,V=y+L+$*(ue+1),K=y+(L+1)+$*(ue+1),pe=y+(L+1)+$*ue;m.push(k,V,pe),m.push(V,K,pe),Y+=6}d.addGroup(M,Y,C),M+=Y,y+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)t[l]=r[l]}return t}function SM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function E_(o){return o.getRenderTarget()===null?o.outputColorSpace:zt.workingColorSpace}const MM={clone:Ts,merge:Un};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends bc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nd extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ei extends Nd{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=bd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(Xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const hs=-90,ps=1;class TM extends ni{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(hs,ps,t,i);l.layers=this.layers,this.add(l);const u=new Ei(hs,ps,t,i);u.layers=this.layers,this.add(u);const h=new Ei(hs,ps,t,i);h.layers=this.layers,this.add(h);const d=new Ei(hs,ps,t,i);d.layers=this.layers,this.add(d);const m=new Ei(hs,ps,t,i);m.layers=this.layers,this.add(m);const p=new Ei(hs,ps,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,y,M),t.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class b_ extends jn{constructor(t,i,r,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ss,super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AM extends pi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vr?Mn:hi),this.texture=new b_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Dn}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zo(5,5,5),u=new ja({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ha});u.uniforms.tEquirect.value=i;const h=new ia(l,u),d=i.minFilter;return i.minFilter===Lo&&(i.minFilter=Dn),new TM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}const cd=new le,RM=new le,wM=new ht;class dr{constructor(t=new le(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=cd.subVectors(r,i).cross(RM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(cd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||wM.getNormalMatrix(t),l=this.coplanarPoint(cd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ld,uc=new le;class T_{constructor(t=new dr,i=new dr,r=new dr,l=new dr,u=new dr,h=new dr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=na){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],y=l[7],M=l[8],R=l[9],A=l[10],S=l[11],v=l[12],I=l[13],N=l[14],P=l[15];if(r[0].setComponents(m-u,y-p,S-M,P-v).normalize(),r[1].setComponents(m+u,y+p,S+M,P+v).normalize(),r[2].setComponents(m+h,y+g,S+R,P+I).normalize(),r[3].setComponents(m-h,y-g,S-R,P-I).normalize(),r[4].setComponents(m-d,y-x,S-A,P-N).normalize(),i===na)r[5].setComponents(m+d,y+x,S+A,P+N).normalize();else if(i===xc)r[5].setComponents(d,x,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?t.max.x:t.min.x,uc.y=l.normal.y>0?t.max.y:t.min.y,uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function A_(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function CM(o,t){const i=t.isWebGL2,r=new WeakMap;function l(p,g){const x=p.array,y=p.usage,M=x.byteLength,R=o.createBuffer();o.bindBuffer(g,R),o.bufferData(g,x,y),p.onUploadCallback();let A;if(x instanceof Float32Array)A=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)A=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)A=o.SHORT;else if(x instanceof Uint32Array)A=o.UNSIGNED_INT;else if(x instanceof Int32Array)A=o.INT;else if(x instanceof Int8Array)A=o.BYTE;else if(x instanceof Uint8Array)A=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)A=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:R,type:A,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:M}}function u(p,g,x){const y=g.array,M=g._updateRange,R=g.updateRanges;if(o.bindBuffer(x,p),M.count===-1&&R.length===0&&o.bufferSubData(x,0,y),R.length!==0){for(let A=0,S=R.length;A<S;A++){const v=R[A];i?o.bufferSubData(x,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):o.bufferSubData(x,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(x,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function d(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(o.deleteBuffer(g.buffer),r.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const y=r.get(p);(!y||y.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=r.get(p);if(x===void 0)r.set(p,l(p,g));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,p,g),x.version=p.version}}return{get:h,remove:d,update:m}}class Tc extends yr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,y=i/m,M=[],R=[],A=[],S=[];for(let v=0;v<g;v++){const I=v*y-h;for(let N=0;N<p;N++){const P=N*x-u;R.push(P,-I,0),A.push(0,0,1),S.push(N/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const N=I+p*v,P=I+p*(v+1),q=I+1+p*(v+1),G=I+1+p*v;M.push(N,P,G),M.push(P,q,G)}this.setIndex(M),this.setAttribute("position",new xr(R,3)),this.setAttribute("normal",new xr(A,3)),this.setAttribute("uv",new xr(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.width,t.height,t.widthSegments,t.heightSegments)}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LM=`#ifdef USE_ALPHAHASH
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
#endif`,NM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
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
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kM=`#ifdef USE_IRIDESCENCE
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
#endif`,jM=`#ifdef USE_BUMPMAP
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
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
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tE=`vec3 transformedNormal = objectNormal;
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
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`
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
}`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uE=`#ifdef USE_ENVMAP
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
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
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
#endif`,hE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
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
}`,vE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ME=`uniform bool receiveShadow;
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
#endif`,EE=`#ifdef USE_ENVMAP
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
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wE=`PhysicalMaterial material;
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
#endif`,CE=`struct PhysicalMaterial {
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
}`,DE=`
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
#endif`,LE=`#if defined( RE_IndirectDiffuse )
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,BE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HE=`#if defined( USE_POINTS_UV )
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
#endif`,GE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jE=`#ifdef USE_MORPHNORMALS
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
#endif`,XE=`#ifdef USE_MORPHTARGETS
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
#endif`,WE=`#ifdef USE_MORPHTARGETS
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
#endif`,qE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
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
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ab=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pb=`float getShadowMask() {
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
}`,mb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,_b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,xb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Db=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`#include <common>
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
}`,Pb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Ib=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,jb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,qb=`#define MATCAP
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
}`,Yb=`#define MATCAP
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
}`,Zb=`#define NORMAL
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
}`,Kb=`#define NORMAL
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
}`,Qb=`#define PHONG
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
}`,Jb=`#define PHONG
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
}`,$b=`#define STANDARD
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
}`,e1=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,n1=`#define TOON
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
}`,i1=`uniform float size;
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
}`,a1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:DM,alphahash_pars_fragment:LM,alphamap_fragment:NM,alphamap_pars_fragment:UM,alphatest_fragment:OM,alphatest_pars_fragment:zM,aomap_fragment:PM,aomap_pars_fragment:BM,batching_pars_vertex:IM,batching_vertex:FM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:kM,bumpmap_pars_fragment:jM,clipping_planes_fragment:XM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:qM,clipping_planes_vertex:YM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:rE,colorspace_fragment:sE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:EE,envmap_vertex:dE,fog_vertex:hE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_fragment:vE,lightmap_pars_fragment:xE,lights_lambert_fragment:yE,lights_lambert_pars_fragment:SE,lights_pars_begin:ME,lights_toon_fragment:bE,lights_toon_pars_fragment:TE,lights_phong_fragment:AE,lights_phong_pars_fragment:RE,lights_physical_fragment:wE,lights_physical_pars_fragment:CE,lights_fragment_begin:DE,lights_fragment_maps:LE,lights_fragment_end:NE,logdepthbuf_fragment:UE,logdepthbuf_pars_fragment:OE,logdepthbuf_pars_vertex:zE,logdepthbuf_vertex:PE,map_fragment:BE,map_pars_fragment:IE,map_particle_fragment:FE,map_particle_pars_fragment:HE,metalnessmap_fragment:GE,metalnessmap_pars_fragment:VE,morphcolor_vertex:kE,morphnormal_vertex:jE,morphtarget_pars_vertex:XE,morphtarget_vertex:WE,normal_fragment_begin:qE,normal_fragment_maps:YE,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:tb,iridescence_pars_fragment:nb,opaque_fragment:ib,packing:ab,premultiplied_alpha_fragment:rb,project_vertex:sb,dithering_fragment:ob,dithering_pars_fragment:lb,roughnessmap_fragment:cb,roughnessmap_pars_fragment:ub,shadowmap_pars_fragment:fb,shadowmap_pars_vertex:db,shadowmap_vertex:hb,shadowmask_pars_fragment:pb,skinbase_vertex:mb,skinning_pars_vertex:gb,skinning_vertex:_b,skinnormal_vertex:vb,specularmap_fragment:xb,specularmap_pars_fragment:yb,tonemapping_fragment:Sb,tonemapping_pars_fragment:Mb,transmission_fragment:Eb,transmission_pars_fragment:bb,uv_pars_fragment:Tb,uv_pars_vertex:Ab,uv_vertex:Rb,worldpos_vertex:wb,background_vert:Cb,background_frag:Db,backgroundCube_vert:Lb,backgroundCube_frag:Nb,cube_vert:Ub,cube_frag:Ob,depth_vert:zb,depth_frag:Pb,distanceRGBA_vert:Bb,distanceRGBA_frag:Ib,equirect_vert:Fb,equirect_frag:Hb,linedashed_vert:Gb,linedashed_frag:Vb,meshbasic_vert:kb,meshbasic_frag:jb,meshlambert_vert:Xb,meshlambert_frag:Wb,meshmatcap_vert:qb,meshmatcap_frag:Yb,meshnormal_vert:Zb,meshnormal_frag:Kb,meshphong_vert:Qb,meshphong_frag:Jb,meshphysical_vert:$b,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:a1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:l1},Ae={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Di={basic:{uniforms:Un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Un([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Un([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Un([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Un([Ae.points,Ae.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Un([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Un([Ae.common,Ae.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Un([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Un([Ae.sprite,Ae.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Un([Ae.common,Ae.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Un([Ae.lights,Ae.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Di.physical={uniforms:Un([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const fc={r:0,b:0,g:0};function c1(o,t,i,r,l,u,h){const d=new Ct(0);let m=u===!0?0:1,p,g,x=null,y=0,M=null;function R(S,v){let I=!1,N=v.isScene===!0?v.background:null;N&&N.isTexture&&(N=(v.backgroundBlurriness>0?i:t).get(N)),N===null?A(d,m):N&&N.isColor&&(A(N,1),I=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?r.buffers.color.setClear(0,0,0,1,h):P==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||I)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),N&&(N.isCubeTexture||N.mapping===Sc)?(g===void 0&&(g=new ia(new zo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Ts(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,G,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=zt.getTransfer(N.colorSpace)!==Gt,(x!==N||y!==N.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,x=N,y=N.version,M=o.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new ia(new Tc(2,2),new ja({name:"BackgroundMaterial",uniforms:Ts(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=zt.getTransfer(N.colorSpace)!==Gt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||y!==N.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=N,y=N.version,M=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function A(S,v){S.getRGB(fc,E_(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,v,h)}return{getClearColor:function(){return d},setClearColor:function(S,v=1){d.set(S),m=v,A(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(S){m=S,A(d,m)},render:R}}function u1(o,t,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:t.get("OES_vertex_array_object"),h=r.isWebGL2||u!==null,d={},m=S(null);let p=m,g=!1;function x(j,$,U,X,Y){let oe=!1;if(h){const ue=A(X,U,$);p!==ue&&(p=ue,M(p.object)),oe=v(j,X,U,Y),oe&&I(j,X,U,Y)}else{const ue=$.wireframe===!0;(p.geometry!==X.id||p.program!==U.id||p.wireframe!==ue)&&(p.geometry=X.id,p.program=U.id,p.wireframe=ue,oe=!0)}Y!==null&&i.update(Y,o.ELEMENT_ARRAY_BUFFER),(oe||g)&&(g=!1,ge(j,$,U,X),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(Y).buffer))}function y(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(j){return r.isWebGL2?o.bindVertexArray(j):u.bindVertexArrayOES(j)}function R(j){return r.isWebGL2?o.deleteVertexArray(j):u.deleteVertexArrayOES(j)}function A(j,$,U){const X=U.wireframe===!0;let Y=d[j.id];Y===void 0&&(Y={},d[j.id]=Y);let oe=Y[$.id];oe===void 0&&(oe={},Y[$.id]=oe);let ue=oe[X];return ue===void 0&&(ue=S(y()),oe[X]=ue),ue}function S(j){const $=[],U=[],X=[];for(let Y=0;Y<l;Y++)$[Y]=0,U[Y]=0,X[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:U,attributeDivisors:X,object:j,attributes:{},index:null}}function v(j,$,U,X){const Y=p.attributes,oe=$.attributes;let ue=0;const L=U.getAttributes();for(const k in L)if(L[k].location>=0){const K=Y[k];let pe=oe[k];if(pe===void 0&&(k==="instanceMatrix"&&j.instanceMatrix&&(pe=j.instanceMatrix),k==="instanceColor"&&j.instanceColor&&(pe=j.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;ue++}return p.attributesNum!==ue||p.index!==X}function I(j,$,U,X){const Y={},oe=$.attributes;let ue=0;const L=U.getAttributes();for(const k in L)if(L[k].location>=0){let K=oe[k];K===void 0&&(k==="instanceMatrix"&&j.instanceMatrix&&(K=j.instanceMatrix),k==="instanceColor"&&j.instanceColor&&(K=j.instanceColor));const pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),Y[k]=pe,ue++}p.attributes=Y,p.attributesNum=ue,p.index=X}function N(){const j=p.newAttributes;for(let $=0,U=j.length;$<U;$++)j[$]=0}function P(j){q(j,0)}function q(j,$){const U=p.newAttributes,X=p.enabledAttributes,Y=p.attributeDivisors;U[j]=1,X[j]===0&&(o.enableVertexAttribArray(j),X[j]=1),Y[j]!==$&&((r.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,$),Y[j]=$)}function G(){const j=p.newAttributes,$=p.enabledAttributes;for(let U=0,X=$.length;U<X;U++)$[U]!==j[U]&&(o.disableVertexAttribArray(U),$[U]=0)}function z(j,$,U,X,Y,oe,ue){ue===!0?o.vertexAttribIPointer(j,$,U,Y,oe):o.vertexAttribPointer(j,$,U,X,Y,oe)}function ge(j,$,U,X){if(r.isWebGL2===!1&&(j.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;N();const Y=X.attributes,oe=U.getAttributes(),ue=$.defaultAttributeValues;for(const L in oe){const k=oe[L];if(k.location>=0){let V=Y[L];if(V===void 0&&(L==="instanceMatrix"&&j.instanceMatrix&&(V=j.instanceMatrix),L==="instanceColor"&&j.instanceColor&&(V=j.instanceColor)),V!==void 0){const K=V.normalized,pe=V.itemSize,ye=i.get(V);if(ye===void 0)continue;const Ee=ye.buffer,Be=ye.type,Ne=ye.bytesPerElement,Ve=r.isWebGL2===!0&&(Be===o.INT||Be===o.UNSIGNED_INT||V.gpuType===r_);if(V.isInterleavedBufferAttribute){const ot=V.data,te=ot.stride,Zt=V.offset;if(ot.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)q(k.location+Fe,ot.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)P(k.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let Fe=0;Fe<k.locationSize;Fe++)z(k.location+Fe,pe/k.locationSize,Be,K,te*Ne,(Zt+pe/k.locationSize*Fe)*Ne,Ve)}else{if(V.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)q(k.location+ot,V.meshPerAttribute);j.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ot=0;ot<k.locationSize;ot++)P(k.location+ot);o.bindBuffer(o.ARRAY_BUFFER,Ee);for(let ot=0;ot<k.locationSize;ot++)z(k.location+ot,pe/k.locationSize,Be,K,pe*Ne,pe/k.locationSize*ot*Ne,Ve)}}else if(ue!==void 0){const K=ue[L];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(k.location,K);break;case 3:o.vertexAttrib3fv(k.location,K);break;case 4:o.vertexAttrib4fv(k.location,K);break;default:o.vertexAttrib1fv(k.location,K)}}}}G()}function C(){de();for(const j in d){const $=d[j];for(const U in $){const X=$[U];for(const Y in X)R(X[Y].object),delete X[Y];delete $[U]}delete d[j]}}function O(j){if(d[j.id]===void 0)return;const $=d[j.id];for(const U in $){const X=$[U];for(const Y in X)R(X[Y].object),delete X[Y];delete $[U]}delete d[j.id]}function ce(j){for(const $ in d){const U=d[$];if(U[j.id]===void 0)continue;const X=U[j.id];for(const Y in X)R(X[Y].object),delete X[Y];delete U[j.id]}}function de(){ve(),g=!0,p!==m&&(p=m,M(p.object))}function ve(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:de,resetDefaultState:ve,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:ce,initAttributes:N,enableAttribute:P,disableUnusedAttributes:G}}function f1(o,t,i,r){const l=r.isWebGL2;let u;function h(g){u=g}function d(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function m(g,x,y){if(y===0)return;let M,R;if(l)M=o,R="drawArraysInstanced";else if(M=t.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[R](u,g,x,y),i.update(x,u,y)}function p(g,x,y){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<y;R++)this.render(g[R],x[R]);else{M.multiDrawArraysWEBGL(u,g,0,x,0,y);let R=0;for(let A=0;A<y;A++)R+=x[A];i.update(R,u,1)}}this.setMode=h,this.render=d,this.renderInstances=m,this.renderMultiDraw=p}function d1(o,t,i){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let d=i.precision!==void 0?i.precision:"highp";const m=u(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const p=h||t.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),R=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),A=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),I=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=y>0,P=h||t.has("OES_texture_float"),q=N&&P,G=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:R,maxAttributes:A,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:I,vertexTextures:N,floatFragmentTextures:P,floatVertexTextures:q,maxSamples:G}}function h1(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new dr,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const M=x.length!==0||y||r!==0||l;return l=y,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,y){i=g(x,y,0)},this.setState=function(x,y,M){const R=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,v=o.get(x);if(!l||R===null||R.length===0||u&&!S)u?g(null):p();else{const I=u?0:r,N=I*4;let P=v.clippingState||null;m.value=P,P=g(R,y,N,M);for(let q=0;q!==N;++q)P[q]=i[q];v.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,y,M,R){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,R!==!0||S===null){const v=M+A*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<v)&&(S=new Float32Array(v));for(let N=0,P=M;N!==A;++N,P+=4)h.copy(x[N]).applyMatrix4(I,d),h.normal.toArray(S,P),S[P+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function p1(o){let t=new WeakMap;function i(h,d){return d===xd?h.mapping=Ss:d===yd&&(h.mapping=Ms),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===xd||d===yd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new AM(m.height/2);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}class m1 extends Nd{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const _s=4,A0=[.125,.215,.35,.446,.526,.582],mr=20,ud=new m1,R0=new Ct;let fd=null,dd=0,hd=0;const hr=(1+Math.sqrt(5))/2,ms=1/hr,w0=[new le(1,1,1),new le(-1,1,1),new le(1,1,-1),new le(-1,1,-1),new le(0,hr,ms),new le(0,hr,-ms),new le(ms,0,hr),new le(-ms,0,hr),new le(hr,ms,0),new le(-hr,ms,0)];class C0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fd,dd,hd),t.scissorTest=!1,dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ss||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fd=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Es,format:ti,colorSpace:aa,depthBuffer:!1},l=D0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(u)),this._blurMaterial=_1(u,t,i)}return l}_compileMaterial(t){const i=new ia(this._lodPlanes[0],t);this._renderer.compile(i,ud)}_sceneToCubeUV(t,i,r,l){const d=new Ei(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(R0),g.toneMapping=Ga,g.autoClear=!1;const M=new y_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new ia(new zo,M);let A=!1;const S=t.background;S?S.isColor&&(M.color.copy(S),t.background=null,A=!0):(M.color.copy(R0),A=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):I===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const N=this._cubeSize;dc(l,I*N,v>2?N:0,N,N),g.setRenderTarget(l),A&&g.render(R,d),g.render(t,d)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=S}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ss||t.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ia(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ud)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=w0[(l-1)%w0.length];this._blur(t,l-1,l,u,h)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ia(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),A=u/R,S=isFinite(u)?1+Math.floor(g*A):mr;S>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${mr}`);const v=[];let I=0;for(let z=0;z<mr;++z){const ge=z/A,C=Math.exp(-ge*ge/2);v.push(C),z===0?I+=C:z<S&&(I+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/I;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=R,y.mipInt.value=N-r;const P=this._sizeLods[l],q=3*P*(l>N-_s?l-N+_s:0),G=4*(this._cubeSize-P);dc(i,q,G,3*P,2*P),m.setRenderTarget(i),m.render(x,ud)}}function g1(o){const t=[],i=[],r=[];let l=o;const u=o-_s+1+A0.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=A0[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,y=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,R=6,A=3,S=2,v=1,I=new Float32Array(A*R*M),N=new Float32Array(S*R*M),P=new Float32Array(v*R*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,ge=G>2?0:-1,C=[z,ge,0,z+2/3,ge,0,z+2/3,ge+1,0,z,ge,0,z+2/3,ge+1,0,z,ge+1,0];I.set(C,A*R*G),N.set(y,S*R*G);const O=[G,G,G,G,G,G];P.set(O,v*R*G)}const q=new yr;q.setAttribute("position",new Li(I,A)),q.setAttribute("uv",new Li(N,S)),q.setAttribute("faceIndex",new Li(P,v)),t.push(q),l>_s&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function D0(o,t,i){const r=new pi(o,t,i);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function _1(o,t,i){const r=new Float32Array(mr),l=new le(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function L0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function N0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Ud(){return`

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
	`}function v1(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===xd||m===yd,g=m===Ss||m===Ms;if(p||g)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let x=t.get(d);return i===null&&(i=new C0(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),t.set(d,x),x.texture}else{if(t.has(d))return t.get(d).texture;{const x=d.image;if(p&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new C0(o));const y=p?i.fromEquirectangular(d):i.fromCubemap(d);return t.set(d,y),d.addEventListener("dispose",u),y.texture}else return null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function x1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function y1(o,t,i,r){const l={},u=new WeakMap;function h(x){const y=x.target;y.index!==null&&t.remove(y.index);for(const R in y.attributes)t.remove(y.attributes[R]);for(const R in y.morphAttributes){const A=y.morphAttributes[R];for(let S=0,v=A.length;S<v;S++)t.remove(A[S])}y.removeEventListener("dispose",h),delete l[y.id];const M=u.get(y);M&&(t.remove(M),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(x,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(x){const y=x.attributes;for(const R in y)t.update(y[R],o.ARRAY_BUFFER);const M=x.morphAttributes;for(const R in M){const A=M[R];for(let S=0,v=A.length;S<v;S++)t.update(A[S],o.ARRAY_BUFFER)}}function p(x){const y=[],M=x.index,R=x.attributes.position;let A=0;if(M!==null){const I=M.array;A=M.version;for(let N=0,P=I.length;N<P;N+=3){const q=I[N+0],G=I[N+1],z=I[N+2];y.push(q,G,G,z,z,q)}}else if(R!==void 0){const I=R.array;A=R.version;for(let N=0,P=I.length/3-1;N<P;N+=3){const q=N+0,G=N+1,z=N+2;y.push(q,G,G,z,z,q)}}else return;const S=new(p_(y)?M_:S_)(y,1);S.version=A;const v=u.get(x);v&&t.remove(v),u.set(x,S)}function g(x){const y=u.get(x);if(y){const M=x.index;M!==null&&y.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function S1(o,t,i,r){const l=r.isWebGL2;let u;function h(M){u=M}let d,m;function p(M){d=M.type,m=M.bytesPerElement}function g(M,R){o.drawElements(u,R,d,M*m),i.update(R,u,1)}function x(M,R,A){if(A===0)return;let S,v;if(l)S=o,v="drawElementsInstanced";else if(S=t.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[v](u,R,d,M*m,A),i.update(R,u,A)}function y(M,R,A){if(A===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<A;v++)this.render(M[v]/m,R[v]);else{S.multiDrawElementsWEBGL(u,R,0,d,M,0,A);let v=0;for(let I=0;I<A;I++)v+=R[I];i.update(v,u,1)}}this.setMode=h,this.setIndex=p,this.render=g,this.renderInstances=x,this.renderMultiDraw=y}function M1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function E1(o,t){return o[0]-t[0]}function b1(o,t){return Math.abs(t[1])-Math.abs(o[1])}function T1(o,t,i){const r={},l=new Float32Array(8),u=new WeakMap,h=new En,d=[];for(let p=0;p<8;p++)d[p]=[p,0];function m(p,g,x){const y=p.morphTargetInfluences;if(t.isWebGL2===!0){const R=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,A=R!==void 0?R.length:0;let S=u.get(g);if(S===void 0||S.count!==A){let $=function(){ve.dispose(),u.delete(g),g.removeEventListener("dispose",$)};var M=$;S!==void 0&&S.texture.dispose();const N=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,q=g.morphAttributes.color!==void 0,G=g.morphAttributes.position||[],z=g.morphAttributes.normal||[],ge=g.morphAttributes.color||[];let C=0;N===!0&&(C=1),P===!0&&(C=2),q===!0&&(C=3);let O=g.attributes.position.count*C,ce=1;O>t.maxTextureSize&&(ce=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const de=new Float32Array(O*ce*4*A),ve=new __(de,O,ce,A);ve.type=Fa,ve.needsUpdate=!0;const j=C*4;for(let U=0;U<A;U++){const X=G[U],Y=z[U],oe=ge[U],ue=O*ce*4*U;for(let L=0;L<X.count;L++){const k=L*j;N===!0&&(h.fromBufferAttribute(X,L),de[ue+k+0]=h.x,de[ue+k+1]=h.y,de[ue+k+2]=h.z,de[ue+k+3]=0),P===!0&&(h.fromBufferAttribute(Y,L),de[ue+k+4]=h.x,de[ue+k+5]=h.y,de[ue+k+6]=h.z,de[ue+k+7]=0),q===!0&&(h.fromBufferAttribute(oe,L),de[ue+k+8]=h.x,de[ue+k+9]=h.y,de[ue+k+10]=h.z,de[ue+k+11]=oe.itemSize===4?h.w:1)}}S={count:A,texture:ve,size:new xt(O,ce)},u.set(g,S),g.addEventListener("dispose",$)}let v=0;for(let N=0;N<y.length;N++)v+=y[N];const I=g.morphTargetsRelative?1:1-v;x.getUniforms().setValue(o,"morphTargetBaseInfluence",I),x.getUniforms().setValue(o,"morphTargetInfluences",y),x.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const R=y===void 0?0:y.length;let A=r[g.id];if(A===void 0||A.length!==R){A=[];for(let P=0;P<R;P++)A[P]=[P,0];r[g.id]=A}for(let P=0;P<R;P++){const q=A[P];q[0]=P,q[1]=y[P]}A.sort(b1);for(let P=0;P<8;P++)P<R&&A[P][1]?(d[P][0]=A[P][0],d[P][1]=A[P][1]):(d[P][0]=Number.MAX_SAFE_INTEGER,d[P][1]=0);d.sort(E1);const S=g.morphAttributes.position,v=g.morphAttributes.normal;let I=0;for(let P=0;P<8;P++){const q=d[P],G=q[0],z=q[1];G!==Number.MAX_SAFE_INTEGER&&z?(S&&g.getAttribute("morphTarget"+P)!==S[G]&&g.setAttribute("morphTarget"+P,S[G]),v&&g.getAttribute("morphNormal"+P)!==v[G]&&g.setAttribute("morphNormal"+P,v[G]),l[P]=z,I+=z):(S&&g.hasAttribute("morphTarget"+P)===!0&&g.deleteAttribute("morphTarget"+P),v&&g.hasAttribute("morphNormal"+P)===!0&&g.deleteAttribute("morphNormal"+P),l[P]=0)}const N=g.morphTargetsRelative?1:1-I;x.getUniforms().setValue(o,"morphTargetBaseInfluence",N),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function A1(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}class R_ extends jn{constructor(t,i,r,l,u,h,d,m,p,g){if(g=g!==void 0?g:_r,g!==_r&&g!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===_r&&(r=Ia),r===void 0&&g===bs&&(r=gr),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Sn,this.minFilter=m!==void 0?m:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const w_=new jn,C_=new R_(1,1);C_.compareFunction=h_;const D_=new __,L_=new lM,N_=new b_,U0=[],O0=[],z0=new Float32Array(16),P0=new Float32Array(9),B0=new Float32Array(4);function Rs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=U0[l];if(u===void 0&&(u=new Float32Array(l),U0[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function fn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function dn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Ac(o,t){let i=O0[t];i===void 0&&(i=new Int32Array(t),O0[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function R1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function w1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2fv(this.addr,t),dn(i,t)}}function C1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;o.uniform3fv(this.addr,t),dn(i,t)}}function D1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4fv(this.addr,t),dn(i,t)}}function L1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;B0.set(r),o.uniformMatrix2fv(this.addr,!1,B0),dn(i,r)}}function N1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;P0.set(r),o.uniformMatrix3fv(this.addr,!1,P0),dn(i,r)}}function U1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(fn(i,r))return;z0.set(r),o.uniformMatrix4fv(this.addr,!1,z0),dn(i,r)}}function O1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2iv(this.addr,t),dn(i,t)}}function P1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3iv(this.addr,t),dn(i,t)}}function B1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4iv(this.addr,t),dn(i,t)}}function I1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function F1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;o.uniform2uiv(this.addr,t),dn(i,t)}}function H1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;o.uniform3uiv(this.addr,t),dn(i,t)}}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;o.uniform4uiv(this.addr,t),dn(i,t)}}function V1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?C_:w_;i.setTexture2D(t||u,l)}function k1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||L_,l)}function j1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||N_,l)}function X1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||D_,l)}function W1(o){switch(o){case 5126:return R1;case 35664:return w1;case 35665:return C1;case 35666:return D1;case 35674:return L1;case 35675:return N1;case 35676:return U1;case 5124:case 35670:return O1;case 35667:case 35671:return z1;case 35668:case 35672:return P1;case 35669:case 35673:return B1;case 5125:return I1;case 36294:return F1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return X1}}function q1(o,t){o.uniform1fv(this.addr,t)}function Y1(o,t){const i=Rs(t,this.size,2);o.uniform2fv(this.addr,i)}function Z1(o,t){const i=Rs(t,this.size,3);o.uniform3fv(this.addr,i)}function K1(o,t){const i=Rs(t,this.size,4);o.uniform4fv(this.addr,i)}function Q1(o,t){const i=Rs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function J1(o,t){const i=Rs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $1(o,t){const i=Rs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eT(o,t){o.uniform1iv(this.addr,t)}function tT(o,t){o.uniform2iv(this.addr,t)}function nT(o,t){o.uniform3iv(this.addr,t)}function iT(o,t){o.uniform4iv(this.addr,t)}function aT(o,t){o.uniform1uiv(this.addr,t)}function rT(o,t){o.uniform2uiv(this.addr,t)}function sT(o,t){o.uniform3uiv(this.addr,t)}function oT(o,t){o.uniform4uiv(this.addr,t)}function lT(o,t,i){const r=this.cache,l=t.length,u=Ac(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||w_,u[h])}function cT(o,t,i){const r=this.cache,l=t.length,u=Ac(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||L_,u[h])}function uT(o,t,i){const r=this.cache,l=t.length,u=Ac(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||N_,u[h])}function fT(o,t,i){const r=this.cache,l=t.length,u=Ac(i,l);fn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||D_,u[h])}function dT(o){switch(o){case 5126:return q1;case 35664:return Y1;case 35665:return Z1;case 35666:return K1;case 35674:return Q1;case 35675:return J1;case 35676:return $1;case 5124:case 35670:return eT;case 35667:case 35671:return tT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}class hT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=W1(i.type)}}class pT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dT(i.type)}}class mT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function I0(o,t){o.seq.push(t),o.map[t.id]=t}function gT(o,t,i){const r=o.name,l=r.length;for(pd.lastIndex=0;;){const u=pd.exec(r),h=pd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){I0(i,p===void 0?new hT(d,o,t):new pT(d,o,t));break}else{let x=i.map[d];x===void 0&&(x=new mT(d),I0(i,x)),i=x}}}class pc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);gT(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function F0(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const _T=37297;let vT=0;function xT(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function yT(o){const t=zt.getPrimaries(zt.workingColorSpace),i=zt.getPrimaries(o);let r;switch(t===i?r="":t===vc&&i===_c?r="LinearDisplayP3ToLinearSRGB":t===_c&&i===vc&&(r="LinearSRGBToLinearDisplayP3"),o){case aa:case Mc:return[r,"LinearTransferOETF"];case Mn:case Dd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function H0(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+xT(o.getShaderSource(t),h)}else return l}function ST(o,t){const i=yT(t);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function MT(o,t){let i;switch(t){case DS:i="Linear";break;case LS:i="Reinhard";break;case NS:i="OptimizedCineon";break;case US:i="ACESFilmic";break;case zS:i="AgX";break;case OS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function ET(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function bT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function TT(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function AT(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function vs(o){return o!==""}function G0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function V0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(o){return o.replace(RT,CT)}const wT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CT(o,t){let i=ut[t];if(i===void 0){const r=wT.get(t);if(r!==void 0)i=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ad(i)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k0(o){return o.replace(DT,LT)}function LT(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function j0(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function NT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===n_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===aS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function UT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case Ms:t="ENVMAP_TYPE_CUBE";break;case Sc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function OT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function zT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case i_:t="ENVMAP_BLENDING_MULTIPLY";break;case wS:t="ENVMAP_BLENDING_MIX";break;case CS:t="ENVMAP_BLENDING_ADD";break}return t}function PT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function BT(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=NT(i),p=UT(i),g=OT(i),x=zT(i),y=PT(i),M=i.isWebGL2?"":ET(i),R=bT(i),A=TT(u),S=l.createProgram();let v,I,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(vs).join(`
`),v.length>0&&(v+=`
`),I=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(vs).join(`
`),I.length>0&&(I+=`
`)):(v=[j0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),I=[M,j0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ut.tonemapping_pars_fragment:"",i.toneMapping!==Ga?MT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ST("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vs).join(`
`)),h=Ad(h),h=G0(h,i),h=V0(h,i),d=Ad(d),d=G0(d,i),d=V0(d,i),h=k0(h),d=k0(d),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,v=[R,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,I=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===l0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);const P=N+v+h,q=N+I+d,G=F0(l,l.VERTEX_SHADER,P),z=F0(l,l.FRAGMENT_SHADER,q);l.attachShader(S,G),l.attachShader(S,z),i.index0AttributeName!==void 0?l.bindAttribLocation(S,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(S,0,"position"),l.linkProgram(S);function ge(de){if(o.debug.checkShaderErrors){const ve=l.getProgramInfoLog(S).trim(),j=l.getShaderInfoLog(G).trim(),$=l.getShaderInfoLog(z).trim();let U=!0,X=!0;if(l.getProgramParameter(S,l.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,S,G,z);else{const Y=H0(l,G,"vertex"),oe=H0(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(S,l.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+Y+`
`+oe)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(j===""||$==="")&&(X=!1);X&&(de.diagnostics={runnable:U,programLog:ve,vertexShader:{log:j,prefix:v},fragmentShader:{log:$,prefix:I}})}l.deleteShader(G),l.deleteShader(z),C=new pc(l,S),O=AT(l,S)}let C;this.getUniforms=function(){return C===void 0&&ge(this),C};let O;this.getAttributes=function(){return O===void 0&&ge(this),O};let ce=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ce===!1&&(ce=l.getProgramParameter(S,_T)),ce},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(S),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=vT++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=G,this.fragmentShader=z,this}let IT=0;class FT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new HT(t),i.set(t,r)),r}}class HT{constructor(t){this.id=IT++,this.code=t,this.usedTimes=0}}function GT(o,t,i,r,l,u,h){const d=new v_,m=new FT,p=[],g=l.isWebGL2,x=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return C===0?"uv":`uv${C}`}function S(C,O,ce,de,ve){const j=de.fog,$=ve.geometry,U=C.isMeshStandardMaterial?de.environment:null,X=(C.isMeshStandardMaterial?i:t).get(C.envMap||U),Y=X&&X.mapping===Sc?X.image.height:null,oe=R[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ue=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,L=ue!==void 0?ue.length:0;let k=0;$.morphAttributes.position!==void 0&&(k=1),$.morphAttributes.normal!==void 0&&(k=2),$.morphAttributes.color!==void 0&&(k=3);let V,K,pe,ye;if(oe){const Kt=Di[oe];V=Kt.vertexShader,K=Kt.fragmentShader}else V=C.vertexShader,K=C.fragmentShader,m.update(C),pe=m.getVertexShaderID(C),ye=m.getFragmentShaderID(C);const Ee=o.getRenderTarget(),Be=ve.isInstancedMesh===!0,Ne=ve.isBatchedMesh===!0,Ve=!!C.map,ot=!!C.matcap,te=!!X,Zt=!!C.aoMap,Fe=!!C.lightMap,Xe=!!C.bumpMap,De=!!C.normalMap,ft=!!C.displacementMap,Je=!!C.emissiveMap,D=!!C.metalnessMap,T=!!C.roughnessMap,ie=C.anisotropy>0,Me=C.clearcoat>0,Se=C.iridescence>0,_e=C.sheen>0,Ge=C.transmission>0,we=ie&&!!C.anisotropyMap,ze=Me&&!!C.clearcoatMap,Ye=Me&&!!C.clearcoatNormalMap,rt=Me&&!!C.clearcoatRoughnessMap,xe=Se&&!!C.iridescenceMap,bt=Se&&!!C.iridescenceThicknessMap,dt=_e&&!!C.sheenColorMap,$e=_e&&!!C.sheenRoughnessMap,Ue=!!C.specularMap,Le=!!C.specularColorMap,We=!!C.specularIntensityMap,Mt=Ge&&!!C.transmissionMap,kt=Ge&&!!C.thicknessMap,lt=!!C.gradientMap,be=!!C.alphaMap,F=C.alphaTest>0,Re=!!C.alphaHash,Te=!!C.extensions,Ke=!!$.attributes.uv1,ke=!!$.attributes.uv2,Dt=!!$.attributes.uv3;let Tt=Ga;return C.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Tt=o.toneMapping),{isWebGL2:g,shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:V,fragmentShader:K,defines:C.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Ne,instancing:Be,instancingColor:Be&&ve.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:aa,map:Ve,matcap:ot,envMap:te,envMapMode:te&&X.mapping,envMapCubeUVHeight:Y,aoMap:Zt,lightMap:Fe,bumpMap:Xe,normalMap:De,displacementMap:y&&ft,emissiveMap:Je,normalMapObjectSpace:De&&C.normalMapType===YS,normalMapTangentSpace:De&&C.normalMapType===qS,metalnessMap:D,roughnessMap:T,anisotropy:ie,anisotropyMap:we,clearcoat:Me,clearcoatMap:ze,clearcoatNormalMap:Ye,clearcoatRoughnessMap:rt,iridescence:Se,iridescenceMap:xe,iridescenceThicknessMap:bt,sheen:_e,sheenColorMap:dt,sheenRoughnessMap:$e,specularMap:Ue,specularColorMap:Le,specularIntensityMap:We,transmission:Ge,transmissionMap:Mt,thicknessMap:kt,gradientMap:lt,opaque:C.transparent===!1&&C.blending===xs,alphaMap:be,alphaTest:F,alphaHash:Re,combine:C.combine,mapUv:Ve&&A(C.map.channel),aoMapUv:Zt&&A(C.aoMap.channel),lightMapUv:Fe&&A(C.lightMap.channel),bumpMapUv:Xe&&A(C.bumpMap.channel),normalMapUv:De&&A(C.normalMap.channel),displacementMapUv:ft&&A(C.displacementMap.channel),emissiveMapUv:Je&&A(C.emissiveMap.channel),metalnessMapUv:D&&A(C.metalnessMap.channel),roughnessMapUv:T&&A(C.roughnessMap.channel),anisotropyMapUv:we&&A(C.anisotropyMap.channel),clearcoatMapUv:ze&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:$e&&A(C.sheenRoughnessMap.channel),specularMapUv:Ue&&A(C.specularMap.channel),specularColorMapUv:Le&&A(C.specularColorMap.channel),specularIntensityMapUv:We&&A(C.specularIntensityMap.channel),transmissionMapUv:Mt&&A(C.transmissionMap.channel),thicknessMapUv:kt&&A(C.thicknessMap.channel),alphaMapUv:be&&A(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(De||ie),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:ke,vertexUv3s:Dt,pointsUvs:ve.isPoints===!0&&!!$.attributes.uv&&(Ve||be),fog:!!j,useFog:C.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:ve.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&ce.length>0,shadowMapType:o.shadowMap.type,toneMapping:Tt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:Ve&&C.map.isVideoTexture===!0&&zt.getTransfer(C.map.colorSpace)===Gt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Te&&C.extensions.derivatives===!0,extensionFragDepth:Te&&C.extensions.fragDepth===!0,extensionDrawBuffers:Te&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&C.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const O=[];if(C.shaderID?O.push(C.shaderID):(O.push(C.customVertexShaderID),O.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ce in C.defines)O.push(ce),O.push(C.defines[ce]);return C.isRawShaderMaterial===!1&&(I(O,C),N(O,C),O.push(o.outputColorSpace)),O.push(C.customProgramCacheKey),O.join()}function I(C,O){C.push(O.precision),C.push(O.outputColorSpace),C.push(O.envMapMode),C.push(O.envMapCubeUVHeight),C.push(O.mapUv),C.push(O.alphaMapUv),C.push(O.lightMapUv),C.push(O.aoMapUv),C.push(O.bumpMapUv),C.push(O.normalMapUv),C.push(O.displacementMapUv),C.push(O.emissiveMapUv),C.push(O.metalnessMapUv),C.push(O.roughnessMapUv),C.push(O.anisotropyMapUv),C.push(O.clearcoatMapUv),C.push(O.clearcoatNormalMapUv),C.push(O.clearcoatRoughnessMapUv),C.push(O.iridescenceMapUv),C.push(O.iridescenceThicknessMapUv),C.push(O.sheenColorMapUv),C.push(O.sheenRoughnessMapUv),C.push(O.specularMapUv),C.push(O.specularColorMapUv),C.push(O.specularIntensityMapUv),C.push(O.transmissionMapUv),C.push(O.thicknessMapUv),C.push(O.combine),C.push(O.fogExp2),C.push(O.sizeAttenuation),C.push(O.morphTargetsCount),C.push(O.morphAttributeCount),C.push(O.numDirLights),C.push(O.numPointLights),C.push(O.numSpotLights),C.push(O.numSpotLightMaps),C.push(O.numHemiLights),C.push(O.numRectAreaLights),C.push(O.numDirLightShadows),C.push(O.numPointLightShadows),C.push(O.numSpotLightShadows),C.push(O.numSpotLightShadowsWithMaps),C.push(O.numLightProbes),C.push(O.shadowMapType),C.push(O.toneMapping),C.push(O.numClippingPlanes),C.push(O.numClipIntersection),C.push(O.depthPacking)}function N(C,O){d.disableAll(),O.isWebGL2&&d.enable(0),O.supportsVertexTextures&&d.enable(1),O.instancing&&d.enable(2),O.instancingColor&&d.enable(3),O.matcap&&d.enable(4),O.envMap&&d.enable(5),O.normalMapObjectSpace&&d.enable(6),O.normalMapTangentSpace&&d.enable(7),O.clearcoat&&d.enable(8),O.iridescence&&d.enable(9),O.alphaTest&&d.enable(10),O.vertexColors&&d.enable(11),O.vertexAlphas&&d.enable(12),O.vertexUv1s&&d.enable(13),O.vertexUv2s&&d.enable(14),O.vertexUv3s&&d.enable(15),O.vertexTangents&&d.enable(16),O.anisotropy&&d.enable(17),O.alphaHash&&d.enable(18),O.batching&&d.enable(19),C.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.skinning&&d.enable(4),O.morphTargets&&d.enable(5),O.morphNormals&&d.enable(6),O.morphColors&&d.enable(7),O.premultipliedAlpha&&d.enable(8),O.shadowMapEnabled&&d.enable(9),O.useLegacyLights&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),C.push(d.mask)}function P(C){const O=R[C.type];let ce;if(O){const de=Di[O];ce=MM.clone(de.uniforms)}else ce=C.uniforms;return ce}function q(C,O){let ce;for(let de=0,ve=p.length;de<ve;de++){const j=p[de];if(j.cacheKey===O){ce=j,++ce.usedTimes;break}}return ce===void 0&&(ce=new BT(o,O,C,u),p.push(ce)),ce}function G(C){if(--C.usedTimes===0){const O=p.indexOf(C);p[O]=p[p.length-1],p.pop(),C.destroy()}}function z(C){m.remove(C)}function ge(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:P,acquireProgram:q,releaseProgram:G,releaseShaderCache:z,programs:p,dispose:ge}}function VT(){let o=new WeakMap;function t(u){let h=o.get(u);return h===void 0&&(h={},o.set(u,h)),h}function i(u){o.delete(u)}function r(u,h,d){o.get(u)[h]=d}function l(){o=new WeakMap}return{get:t,remove:i,update:r,dispose:l}}function kT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function X0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function W0(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,y,M,R,A,S){let v=o[t];return v===void 0?(v={id:x.id,object:x,geometry:y,material:M,groupOrder:R,renderOrder:x.renderOrder,z:A,group:S},o[t]=v):(v.id=x.id,v.object=x,v.geometry=y,v.material=M,v.groupOrder=R,v.renderOrder=x.renderOrder,v.z=A,v.group=S),t++,v}function d(x,y,M,R,A,S){const v=h(x,y,M,R,A,S);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(x,y,M,R,A,S){const v=h(x,y,M,R,A,S);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,y){i.length>1&&i.sort(x||kT),r.length>1&&r.sort(y||X0),l.length>1&&l.sort(y||X0)}function g(){for(let x=t,y=o.length;x<y;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function jT(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new W0,o.set(r,[h])):l>=u.length?(h=new W0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function XT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new le,color:new Ct};break;case"SpotLight":i={position:new le,direction:new le,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new le,halfWidth:new le,halfHeight:new le};break}return o[t.id]=i,i}}}function WT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let qT=0;function YT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function ZT(o,t){const i=new XT,r=WT(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new le);const u=new le,h=new bn,d=new bn;function m(g,x){let y=0,M=0,R=0;for(let de=0;de<9;de++)l.probe[de].set(0,0,0);let A=0,S=0,v=0,I=0,N=0,P=0,q=0,G=0,z=0,ge=0,C=0;g.sort(YT);const O=x===!0?Math.PI:1;for(let de=0,ve=g.length;de<ve;de++){const j=g[de],$=j.color,U=j.intensity,X=j.distance,Y=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)y+=$.r*U*O,M+=$.g*U*O,R+=$.b*U*O;else if(j.isLightProbe){for(let oe=0;oe<9;oe++)l.probe[oe].addScaledVector(j.sh.coefficients[oe],U);C++}else if(j.isDirectionalLight){const oe=i.get(j);if(oe.color.copy(j.color).multiplyScalar(j.intensity*O),j.castShadow){const ue=j.shadow,L=r.get(j);L.shadowBias=ue.bias,L.shadowNormalBias=ue.normalBias,L.shadowRadius=ue.radius,L.shadowMapSize=ue.mapSize,l.directionalShadow[A]=L,l.directionalShadowMap[A]=Y,l.directionalShadowMatrix[A]=j.shadow.matrix,P++}l.directional[A]=oe,A++}else if(j.isSpotLight){const oe=i.get(j);oe.position.setFromMatrixPosition(j.matrixWorld),oe.color.copy($).multiplyScalar(U*O),oe.distance=X,oe.coneCos=Math.cos(j.angle),oe.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),oe.decay=j.decay,l.spot[v]=oe;const ue=j.shadow;if(j.map&&(l.spotLightMap[z]=j.map,z++,ue.updateMatrices(j),j.castShadow&&ge++),l.spotLightMatrix[v]=ue.matrix,j.castShadow){const L=r.get(j);L.shadowBias=ue.bias,L.shadowNormalBias=ue.normalBias,L.shadowRadius=ue.radius,L.shadowMapSize=ue.mapSize,l.spotShadow[v]=L,l.spotShadowMap[v]=Y,G++}v++}else if(j.isRectAreaLight){const oe=i.get(j);oe.color.copy($).multiplyScalar(U),oe.halfWidth.set(j.width*.5,0,0),oe.halfHeight.set(0,j.height*.5,0),l.rectArea[I]=oe,I++}else if(j.isPointLight){const oe=i.get(j);if(oe.color.copy(j.color).multiplyScalar(j.intensity*O),oe.distance=j.distance,oe.decay=j.decay,j.castShadow){const ue=j.shadow,L=r.get(j);L.shadowBias=ue.bias,L.shadowNormalBias=ue.normalBias,L.shadowRadius=ue.radius,L.shadowMapSize=ue.mapSize,L.shadowCameraNear=ue.camera.near,L.shadowCameraFar=ue.camera.far,l.pointShadow[S]=L,l.pointShadowMap[S]=Y,l.pointShadowMatrix[S]=j.shadow.matrix,q++}l.point[S]=oe,S++}else if(j.isHemisphereLight){const oe=i.get(j);oe.skyColor.copy(j.color).multiplyScalar(U*O),oe.groundColor.copy(j.groundColor).multiplyScalar(U*O),l.hemi[N]=oe,N++}}I>0&&(t.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ae.LTC_FLOAT_1,l.rectAreaLTC2=Ae.LTC_FLOAT_2):(l.rectAreaLTC1=Ae.LTC_HALF_1,l.rectAreaLTC2=Ae.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ae.LTC_FLOAT_1,l.rectAreaLTC2=Ae.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ae.LTC_HALF_1,l.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=R;const ce=l.hash;(ce.directionalLength!==A||ce.pointLength!==S||ce.spotLength!==v||ce.rectAreaLength!==I||ce.hemiLength!==N||ce.numDirectionalShadows!==P||ce.numPointShadows!==q||ce.numSpotShadows!==G||ce.numSpotMaps!==z||ce.numLightProbes!==C)&&(l.directional.length=A,l.spot.length=v,l.rectArea.length=I,l.point.length=S,l.hemi.length=N,l.directionalShadow.length=P,l.directionalShadowMap.length=P,l.pointShadow.length=q,l.pointShadowMap.length=q,l.spotShadow.length=G,l.spotShadowMap.length=G,l.directionalShadowMatrix.length=P,l.pointShadowMatrix.length=q,l.spotLightMatrix.length=G+z-ge,l.spotLightMap.length=z,l.numSpotLightShadowsWithMaps=ge,l.numLightProbes=C,ce.directionalLength=A,ce.pointLength=S,ce.spotLength=v,ce.rectAreaLength=I,ce.hemiLength=N,ce.numDirectionalShadows=P,ce.numPointShadows=q,ce.numSpotShadows=G,ce.numSpotMaps=z,ce.numLightProbes=C,l.version=qT++)}function p(g,x){let y=0,M=0,R=0,A=0,S=0;const v=x.matrixWorldInverse;for(let I=0,N=g.length;I<N;I++){const P=g[I];if(P.isDirectionalLight){const q=l.directional[y];q.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(v),y++}else if(P.isSpotLight){const q=l.spot[R];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),q.direction.setFromMatrixPosition(P.matrixWorld),u.setFromMatrixPosition(P.target.matrixWorld),q.direction.sub(u),q.direction.transformDirection(v),R++}else if(P.isRectAreaLight){const q=l.rectArea[A];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),d.identity(),h.copy(P.matrixWorld),h.premultiply(v),d.extractRotation(h),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),q.halfWidth.applyMatrix4(d),q.halfHeight.applyMatrix4(d),A++}else if(P.isPointLight){const q=l.point[M];q.position.setFromMatrixPosition(P.matrixWorld),q.position.applyMatrix4(v),M++}else if(P.isHemisphereLight){const q=l.hemi[S];q.direction.setFromMatrixPosition(P.matrixWorld),q.direction.transformDirection(v),S++}}}return{setup:m,setupView:p,state:l}}function q0(o,t){const i=new ZT(o,t),r=[],l=[];function u(){r.length=0,l.length=0}function h(x){r.push(x)}function d(x){l.push(x)}function m(x){i.setup(r,x)}function p(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:h,pushShadow:d}}function KT(o,t){let i=new WeakMap;function r(u,h=0){const d=i.get(u);let m;return d===void 0?(m=new q0(o,t),i.set(u,[m])):h>=d.length?(m=new q0(o,t),d.push(m)):m=d[h],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class QT extends bc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JT extends bc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`;function tA(o,t,i){let r=new T_;const l=new xt,u=new xt,h=new En,d=new QT({depthPacking:WS}),m=new JT,p={},g=i.maxTextureSize,x={[ka]:kn,[kn]:ka,[ta]:ta},y=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:$T,fragmentShader:eA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const R=new yr;R.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ia(R,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n_;let v=this.type;this.render=function(G,z,ge){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||G.length===0)return;const C=o.getRenderTarget(),O=o.getActiveCubeFace(),ce=o.getActiveMipmapLevel(),de=o.state;de.setBlending(Ha),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ve=v!==ea&&this.type===ea,j=v===ea&&this.type!==ea;for(let $=0,U=G.length;$<U;$++){const X=G[$],Y=X.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const oe=Y.getFrameExtents();if(l.multiply(oe),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/oe.x),l.x=u.x*oe.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/oe.y),l.y=u.y*oe.y,Y.mapSize.y=u.y)),Y.map===null||ve===!0||j===!0){const L=this.type!==ea?{minFilter:Sn,magFilter:Sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new pi(l.x,l.y,L),Y.map.texture.name=X.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const ue=Y.getViewportCount();for(let L=0;L<ue;L++){const k=Y.getViewport(L);h.set(u.x*k.x,u.y*k.y,u.x*k.z,u.y*k.w),de.viewport(h),Y.updateMatrices(X,L),r=Y.getFrustum(),P(z,ge,Y.camera,X,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&I(Y,ge),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(C,O,ce)};function I(G,z){const ge=t.update(A);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new pi(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,ge,y,A,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,ge,M,A,null)}function N(G,z,ge,C){let O=null;const ce=ge.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(ce!==void 0)O=ce;else if(O=ge.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const de=O.uuid,ve=z.uuid;let j=p[de];j===void 0&&(j={},p[de]=j);let $=j[ve];$===void 0&&($=O.clone(),j[ve]=$,z.addEventListener("dispose",q)),O=$}if(O.visible=z.visible,O.wireframe=z.wireframe,C===ea?O.side=z.shadowSide!==null?z.shadowSide:z.side:O.side=z.shadowSide!==null?z.shadowSide:x[z.side],O.alphaMap=z.alphaMap,O.alphaTest=z.alphaTest,O.map=z.map,O.clipShadows=z.clipShadows,O.clippingPlanes=z.clippingPlanes,O.clipIntersection=z.clipIntersection,O.displacementMap=z.displacementMap,O.displacementScale=z.displacementScale,O.displacementBias=z.displacementBias,O.wireframeLinewidth=z.wireframeLinewidth,O.linewidth=z.linewidth,ge.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const de=o.properties.get(O);de.light=ge}return O}function P(G,z,ge,C,O){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&O===ea)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,G.matrixWorld);const ve=t.update(G),j=G.material;if(Array.isArray(j)){const $=ve.groups;for(let U=0,X=$.length;U<X;U++){const Y=$[U],oe=j[Y.materialIndex];if(oe&&oe.visible){const ue=N(G,oe,C,O);G.onBeforeShadow(o,G,z,ge,ve,ue,Y),o.renderBufferDirect(ge,null,ve,ue,G,Y),G.onAfterShadow(o,G,z,ge,ve,ue,Y)}}}else if(j.visible){const $=N(G,j,C,O);G.onBeforeShadow(o,G,z,ge,ve,$,null),o.renderBufferDirect(ge,null,ve,$,G,null),G.onAfterShadow(o,G,z,ge,ve,$,null)}}const de=G.children;for(let ve=0,j=de.length;ve<j;ve++)P(de[ve],z,ge,C,O)}function q(G){G.target.removeEventListener("dispose",q);for(const ge in p){const C=p[ge],O=G.target.uuid;O in C&&(C[O].dispose(),delete C[O])}}}function nA(o,t,i){const r=i.isWebGL2;function l(){let F=!1;const Re=new En;let Te=null;const Ke=new En(0,0,0,0);return{setMask:function(ke){Te!==ke&&!F&&(o.colorMask(ke,ke,ke,ke),Te=ke)},setLocked:function(ke){F=ke},setClear:function(ke,Dt,Tt,Wt,Kt){Kt===!0&&(ke*=Wt,Dt*=Wt,Tt*=Wt),Re.set(ke,Dt,Tt,Wt),Ke.equals(Re)===!1&&(o.clearColor(ke,Dt,Tt,Wt),Ke.copy(Re))},reset:function(){F=!1,Te=null,Ke.set(-1,0,0,0)}}}function u(){let F=!1,Re=null,Te=null,Ke=null;return{setTest:function(ke){ke?Ne(o.DEPTH_TEST):Ve(o.DEPTH_TEST)},setMask:function(ke){Re!==ke&&!F&&(o.depthMask(ke),Re=ke)},setFunc:function(ke){if(Te!==ke){switch(ke){case SS:o.depthFunc(o.NEVER);break;case MS:o.depthFunc(o.ALWAYS);break;case ES:o.depthFunc(o.LESS);break;case mc:o.depthFunc(o.LEQUAL);break;case bS:o.depthFunc(o.EQUAL);break;case TS:o.depthFunc(o.GEQUAL);break;case AS:o.depthFunc(o.GREATER);break;case RS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Te=ke}},setLocked:function(ke){F=ke},setClear:function(ke){Ke!==ke&&(o.clearDepth(ke),Ke=ke)},reset:function(){F=!1,Re=null,Te=null,Ke=null}}}function h(){let F=!1,Re=null,Te=null,Ke=null,ke=null,Dt=null,Tt=null,Wt=null,Kt=null;return{setTest:function(Lt){F||(Lt?Ne(o.STENCIL_TEST):Ve(o.STENCIL_TEST))},setMask:function(Lt){Re!==Lt&&!F&&(o.stencilMask(Lt),Re=Lt)},setFunc:function(Lt,hn,Xn){(Te!==Lt||Ke!==hn||ke!==Xn)&&(o.stencilFunc(Lt,hn,Xn),Te=Lt,Ke=hn,ke=Xn)},setOp:function(Lt,hn,Xn){(Dt!==Lt||Tt!==hn||Wt!==Xn)&&(o.stencilOp(Lt,hn,Xn),Dt=Lt,Tt=hn,Wt=Xn)},setLocked:function(Lt){F=Lt},setClear:function(Lt){Kt!==Lt&&(o.clearStencil(Lt),Kt=Lt)},reset:function(){F=!1,Re=null,Te=null,Ke=null,ke=null,Dt=null,Tt=null,Wt=null,Kt=null}}}const d=new l,m=new u,p=new h,g=new WeakMap,x=new WeakMap;let y={},M={},R=new WeakMap,A=[],S=null,v=!1,I=null,N=null,P=null,q=null,G=null,z=null,ge=null,C=new Ct(0,0,0),O=0,ce=!1,de=null,ve=null,j=null,$=null,U=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,oe=0;const ue=o.getParameter(o.VERSION);ue.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Y=oe>=1):ue.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Y=oe>=2);let L=null,k={};const V=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),pe=new En().fromArray(V),ye=new En().fromArray(K);function Ee(F,Re,Te,Ke){const ke=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(F,Dt),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Tt=0;Tt<Te;Tt++)r&&(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)?o.texImage3D(Re,0,o.RGBA,1,1,Ke,0,o.RGBA,o.UNSIGNED_BYTE,ke):o.texImage2D(Re+Tt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ke);return Dt}const Be={};Be[o.TEXTURE_2D]=Ee(o.TEXTURE_2D,o.TEXTURE_2D,1),Be[o.TEXTURE_CUBE_MAP]=Ee(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Be[o.TEXTURE_2D_ARRAY]=Ee(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Be[o.TEXTURE_3D]=Ee(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),d.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Ne(o.DEPTH_TEST),m.setFunc(mc),Je(!1),D(wg),Ne(o.CULL_FACE),De(Ha);function Ne(F){y[F]!==!0&&(o.enable(F),y[F]=!0)}function Ve(F){y[F]!==!1&&(o.disable(F),y[F]=!1)}function ot(F,Re){return M[F]!==Re?(o.bindFramebuffer(F,Re),M[F]=Re,r&&(F===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Re),F===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Re)),!0):!1}function te(F,Re){let Te=A,Ke=!1;if(F)if(Te=R.get(Re),Te===void 0&&(Te=[],R.set(Re,Te)),F.isWebGLMultipleRenderTargets){const ke=F.texture;if(Te.length!==ke.length||Te[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Tt=ke.length;Dt<Tt;Dt++)Te[Dt]=o.COLOR_ATTACHMENT0+Dt;Te.length=ke.length,Ke=!0}}else Te[0]!==o.COLOR_ATTACHMENT0&&(Te[0]=o.COLOR_ATTACHMENT0,Ke=!0);else Te[0]!==o.BACK&&(Te[0]=o.BACK,Ke=!0);Ke&&(i.isWebGL2?o.drawBuffers(Te):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Te))}function Zt(F){return S!==F?(o.useProgram(F),S=F,!0):!1}const Fe={[pr]:o.FUNC_ADD,[sS]:o.FUNC_SUBTRACT,[oS]:o.FUNC_REVERSE_SUBTRACT};if(r)Fe[Ng]=o.MIN,Fe[Ug]=o.MAX;else{const F=t.get("EXT_blend_minmax");F!==null&&(Fe[Ng]=F.MIN_EXT,Fe[Ug]=F.MAX_EXT)}const Xe={[lS]:o.ZERO,[cS]:o.ONE,[uS]:o.SRC_COLOR,[_d]:o.SRC_ALPHA,[gS]:o.SRC_ALPHA_SATURATE,[pS]:o.DST_COLOR,[dS]:o.DST_ALPHA,[fS]:o.ONE_MINUS_SRC_COLOR,[vd]:o.ONE_MINUS_SRC_ALPHA,[mS]:o.ONE_MINUS_DST_COLOR,[hS]:o.ONE_MINUS_DST_ALPHA,[_S]:o.CONSTANT_COLOR,[vS]:o.ONE_MINUS_CONSTANT_COLOR,[xS]:o.CONSTANT_ALPHA,[yS]:o.ONE_MINUS_CONSTANT_ALPHA};function De(F,Re,Te,Ke,ke,Dt,Tt,Wt,Kt,Lt){if(F===Ha){v===!0&&(Ve(o.BLEND),v=!1);return}if(v===!1&&(Ne(o.BLEND),v=!0),F!==rS){if(F!==I||Lt!==ce){if((N!==pr||G!==pr)&&(o.blendEquation(o.FUNC_ADD),N=pr,G=pr),Lt)switch(F){case xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFunc(o.ONE,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}P=null,q=null,z=null,ge=null,C.set(0,0,0),O=0,I=F,ce=Lt}return}ke=ke||Re,Dt=Dt||Te,Tt=Tt||Ke,(Re!==N||ke!==G)&&(o.blendEquationSeparate(Fe[Re],Fe[ke]),N=Re,G=ke),(Te!==P||Ke!==q||Dt!==z||Tt!==ge)&&(o.blendFuncSeparate(Xe[Te],Xe[Ke],Xe[Dt],Xe[Tt]),P=Te,q=Ke,z=Dt,ge=Tt),(Wt.equals(C)===!1||Kt!==O)&&(o.blendColor(Wt.r,Wt.g,Wt.b,Kt),C.copy(Wt),O=Kt),I=F,ce=!1}function ft(F,Re){F.side===ta?Ve(o.CULL_FACE):Ne(o.CULL_FACE);let Te=F.side===kn;Re&&(Te=!Te),Je(Te),F.blending===xs&&F.transparent===!1?De(Ha):De(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),m.setFunc(F.depthFunc),m.setTest(F.depthTest),m.setMask(F.depthWrite),d.setMask(F.colorWrite);const Ke=F.stencilWrite;p.setTest(Ke),Ke&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ne(o.SAMPLE_ALPHA_TO_COVERAGE):Ve(o.SAMPLE_ALPHA_TO_COVERAGE)}function Je(F){de!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),de=F)}function D(F){F!==nS?(Ne(o.CULL_FACE),F!==ve&&(F===wg?o.cullFace(o.BACK):F===iS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ve(o.CULL_FACE),ve=F}function T(F){F!==j&&(Y&&o.lineWidth(F),j=F)}function ie(F,Re,Te){F?(Ne(o.POLYGON_OFFSET_FILL),($!==Re||U!==Te)&&(o.polygonOffset(Re,Te),$=Re,U=Te)):Ve(o.POLYGON_OFFSET_FILL)}function Me(F){F?Ne(o.SCISSOR_TEST):Ve(o.SCISSOR_TEST)}function Se(F){F===void 0&&(F=o.TEXTURE0+X-1),L!==F&&(o.activeTexture(F),L=F)}function _e(F,Re,Te){Te===void 0&&(L===null?Te=o.TEXTURE0+X-1:Te=L);let Ke=k[Te];Ke===void 0&&(Ke={type:void 0,texture:void 0},k[Te]=Ke),(Ke.type!==F||Ke.texture!==Re)&&(L!==Te&&(o.activeTexture(Te),L=Te),o.bindTexture(F,Re||Be[F]),Ke.type=F,Ke.texture=Re)}function Ge(){const F=k[L];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function we(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ye(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){pe.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function Mt(F){ye.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),ye.copy(F))}function kt(F,Re){let Te=x.get(Re);Te===void 0&&(Te=new WeakMap,x.set(Re,Te));let Ke=Te.get(F);Ke===void 0&&(Ke=o.getUniformBlockIndex(Re,F.name),Te.set(F,Ke))}function lt(F,Re){const Ke=x.get(Re).get(F);g.get(Re)!==Ke&&(o.uniformBlockBinding(Re,Ke,F.__bindingPointIndex),g.set(Re,Ke))}function be(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},L=null,k={},M={},R=new WeakMap,A=[],S=null,v=!1,I=null,N=null,P=null,q=null,G=null,z=null,ge=null,C=new Ct(0,0,0),O=0,ce=!1,de=null,ve=null,j=null,$=null,U=null,pe.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),d.reset(),m.reset(),p.reset()}return{buffers:{color:d,depth:m,stencil:p},enable:Ne,disable:Ve,bindFramebuffer:ot,drawBuffers:te,useProgram:Zt,setBlending:De,setMaterial:ft,setFlipSided:Je,setCullFace:D,setLineWidth:T,setPolygonOffset:ie,setScissorTest:Me,activeTexture:Se,bindTexture:_e,unbindTexture:Ge,compressedTexImage2D:we,compressedTexImage3D:ze,texImage2D:Ue,texImage3D:Le,updateUBOMapping:kt,uniformBlockBinding:lt,texStorage2D:dt,texStorage3D:$e,texSubImage2D:Ye,texSubImage3D:rt,compressedTexSubImage2D:xe,compressedTexSubImage3D:bt,scissor:We,viewport:Mt,reset:be}}function iA(o,t,i,r,l,u,h){const d=l.isWebGL2,m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let x;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,T){return M?new OffscreenCanvas(D,T):yc("canvas")}function A(D,T,ie,Me){let Se=1;if((D.width>Me||D.height>Me)&&(Se=Me/Math.max(D.width,D.height)),Se<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const _e=T?Td:Math.floor,Ge=_e(Se*D.width),we=_e(Se*D.height);x===void 0&&(x=R(Ge,we));const ze=ie?R(Ge,we):x;return ze.width=Ge,ze.height=we,ze.getContext("2d").drawImage(D,0,0,Ge,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Ge+"x"+we+")."),ze}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function S(D){return c0(D.width)&&c0(D.height)}function v(D){return d?!1:D.wrapS!==bi||D.wrapT!==bi||D.minFilter!==Sn&&D.minFilter!==Dn}function I(D,T){return D.generateMipmaps&&T&&D.minFilter!==Sn&&D.minFilter!==Dn}function N(D){o.generateMipmap(D)}function P(D,T,ie,Me,Se=!1){if(d===!1)return T;if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e=T;if(T===o.RED&&(ie===o.FLOAT&&(_e=o.R32F),ie===o.HALF_FLOAT&&(_e=o.R16F),ie===o.UNSIGNED_BYTE&&(_e=o.R8)),T===o.RED_INTEGER&&(ie===o.UNSIGNED_BYTE&&(_e=o.R8UI),ie===o.UNSIGNED_SHORT&&(_e=o.R16UI),ie===o.UNSIGNED_INT&&(_e=o.R32UI),ie===o.BYTE&&(_e=o.R8I),ie===o.SHORT&&(_e=o.R16I),ie===o.INT&&(_e=o.R32I)),T===o.RG&&(ie===o.FLOAT&&(_e=o.RG32F),ie===o.HALF_FLOAT&&(_e=o.RG16F),ie===o.UNSIGNED_BYTE&&(_e=o.RG8)),T===o.RGBA){const Ge=Se?gc:zt.getTransfer(Me);ie===o.FLOAT&&(_e=o.RGBA32F),ie===o.HALF_FLOAT&&(_e=o.RGBA16F),ie===o.UNSIGNED_BYTE&&(_e=Ge===Gt?o.SRGB8_ALPHA8:o.RGBA8),ie===o.UNSIGNED_SHORT_4_4_4_4&&(_e=o.RGBA4),ie===o.UNSIGNED_SHORT_5_5_5_1&&(_e=o.RGB5_A1)}return(_e===o.R16F||_e===o.R32F||_e===o.RG16F||_e===o.RG32F||_e===o.RGBA16F||_e===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_e}function q(D,T,ie){return I(D,ie)===!0||D.isFramebufferTexture&&D.minFilter!==Sn&&D.minFilter!==Dn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function G(D){return D===Sn||D===Og||D===Ff?o.NEAREST:o.LINEAR}function z(D){const T=D.target;T.removeEventListener("dispose",z),C(T),T.isVideoTexture&&g.delete(T)}function ge(D){const T=D.target;T.removeEventListener("dispose",ge),ce(T)}function C(D){const T=r.get(D);if(T.__webglInit===void 0)return;const ie=D.source,Me=y.get(ie);if(Me){const Se=Me[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&O(D),Object.keys(Me).length===0&&y.delete(ie)}r.remove(D)}function O(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const ie=D.source,Me=y.get(ie);delete Me[T.__cacheKey],h.memory.textures--}function ce(D){const T=D.texture,ie=r.get(D),Me=r.get(T);if(Me.__webglTexture!==void 0&&(o.deleteTexture(Me.__webglTexture),h.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(ie.__webglFramebuffer[Se]))for(let _e=0;_e<ie.__webglFramebuffer[Se].length;_e++)o.deleteFramebuffer(ie.__webglFramebuffer[Se][_e]);else o.deleteFramebuffer(ie.__webglFramebuffer[Se]);ie.__webglDepthbuffer&&o.deleteRenderbuffer(ie.__webglDepthbuffer[Se])}else{if(Array.isArray(ie.__webglFramebuffer))for(let Se=0;Se<ie.__webglFramebuffer.length;Se++)o.deleteFramebuffer(ie.__webglFramebuffer[Se]);else o.deleteFramebuffer(ie.__webglFramebuffer);if(ie.__webglDepthbuffer&&o.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&o.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Se=0;Se<ie.__webglColorRenderbuffer.length;Se++)ie.__webglColorRenderbuffer[Se]&&o.deleteRenderbuffer(ie.__webglColorRenderbuffer[Se]);ie.__webglDepthRenderbuffer&&o.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let Se=0,_e=T.length;Se<_e;Se++){const Ge=r.get(T[Se]);Ge.__webglTexture&&(o.deleteTexture(Ge.__webglTexture),h.memory.textures--),r.remove(T[Se])}r.remove(T),r.remove(D)}let de=0;function ve(){de=0}function j(){const D=de;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),de+=1,D}function $(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function U(D,T){const ie=r.get(D);if(D.isVideoTexture&&ft(D),D.isRenderTargetTexture===!1&&D.version>0&&ie.__version!==D.version){const Me=D.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(ie,D,T);return}}i.bindTexture(o.TEXTURE_2D,ie.__webglTexture,o.TEXTURE0+T)}function X(D,T){const ie=r.get(D);if(D.version>0&&ie.__version!==D.version){pe(ie,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ie.__webglTexture,o.TEXTURE0+T)}function Y(D,T){const ie=r.get(D);if(D.version>0&&ie.__version!==D.version){pe(ie,D,T);return}i.bindTexture(o.TEXTURE_3D,ie.__webglTexture,o.TEXTURE0+T)}function oe(D,T){const ie=r.get(D);if(D.version>0&&ie.__version!==D.version){ye(ie,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ie.__webglTexture,o.TEXTURE0+T)}const ue={[Sd]:o.REPEAT,[bi]:o.CLAMP_TO_EDGE,[Md]:o.MIRRORED_REPEAT},L={[Sn]:o.NEAREST,[Og]:o.NEAREST_MIPMAP_NEAREST,[Ff]:o.NEAREST_MIPMAP_LINEAR,[Dn]:o.LINEAR,[PS]:o.LINEAR_MIPMAP_NEAREST,[Lo]:o.LINEAR_MIPMAP_LINEAR},k={[ZS]:o.NEVER,[tM]:o.ALWAYS,[KS]:o.LESS,[h_]:o.LEQUAL,[QS]:o.EQUAL,[eM]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function V(D,T,ie){if(ie?(o.texParameteri(D,o.TEXTURE_WRAP_S,ue[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ue[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ue[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,L[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,L[T.minFilter])):(o.texParameteri(D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==bi||T.wrapT!==bi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(D,o.TEXTURE_MAG_FILTER,G(T.magFilter)),o.texParameteri(D,o.TEXTURE_MIN_FILTER,G(T.minFilter)),T.minFilter!==Sn&&T.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Me=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Sn||T.minFilter!==Ff&&T.minFilter!==Lo||T.type===Fa&&t.has("OES_texture_float_linear")===!1||d===!1&&T.type===Es&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(o.texParameterf(D,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function K(D,T){let ie=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",z));const Me=T.source;let Se=y.get(Me);Se===void 0&&(Se={},y.set(Me,Se));const _e=$(T);if(_e!==D.__cacheKey){Se[_e]===void 0&&(Se[_e]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ie=!0),Se[_e].usedTimes++;const Ge=Se[D.__cacheKey];Ge!==void 0&&(Se[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&O(T)),D.__cacheKey=_e,D.__webglTexture=Se[_e].texture}return ie}function pe(D,T,ie){let Me=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Me=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Me=o.TEXTURE_3D);const Se=K(D,T),_e=T.source;i.bindTexture(Me,D.__webglTexture,o.TEXTURE0+ie);const Ge=r.get(_e);if(_e.version!==Ge.__version||Se===!0){i.activeTexture(o.TEXTURE0+ie);const we=zt.getPrimaries(zt.workingColorSpace),ze=T.colorSpace===hi?null:zt.getPrimaries(T.colorSpace),Ye=T.colorSpace===hi||we===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const rt=v(T)&&S(T.image)===!1;let xe=A(T.image,rt,!1,l.maxTextureSize);xe=Je(T,xe);const bt=S(xe)||d,dt=u.convert(T.format,T.colorSpace);let $e=u.convert(T.type),Ue=P(T.internalFormat,dt,$e,T.colorSpace,T.isVideoTexture);V(Me,T,bt);let Le;const We=T.mipmaps,Mt=d&&T.isVideoTexture!==!0&&Ue!==f_,kt=Ge.__version===void 0||Se===!0,lt=q(T,xe,bt);if(T.isDepthTexture)Ue=o.DEPTH_COMPONENT,d?T.type===Fa?Ue=o.DEPTH_COMPONENT32F:T.type===Ia?Ue=o.DEPTH_COMPONENT24:T.type===gr?Ue=o.DEPTH24_STENCIL8:Ue=o.DEPTH_COMPONENT16:T.type===Fa&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===_r&&Ue===o.DEPTH_COMPONENT&&T.type!==Cd&&T.type!==Ia&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ia,$e=u.convert(T.type)),T.format===bs&&Ue===o.DEPTH_COMPONENT&&(Ue=o.DEPTH_STENCIL,T.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=gr,$e=u.convert(T.type))),kt&&(Mt?i.texStorage2D(o.TEXTURE_2D,1,Ue,xe.width,xe.height):i.texImage2D(o.TEXTURE_2D,0,Ue,xe.width,xe.height,0,dt,$e,null));else if(T.isDataTexture)if(We.length>0&&bt){Mt&&kt&&i.texStorage2D(o.TEXTURE_2D,lt,Ue,We[0].width,We[0].height);for(let be=0,F=We.length;be<F;be++)Le=We[be],Mt?i.texSubImage2D(o.TEXTURE_2D,be,0,0,Le.width,Le.height,dt,$e,Le.data):i.texImage2D(o.TEXTURE_2D,be,Ue,Le.width,Le.height,0,dt,$e,Le.data);T.generateMipmaps=!1}else Mt?(kt&&i.texStorage2D(o.TEXTURE_2D,lt,Ue,xe.width,xe.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,xe.width,xe.height,dt,$e,xe.data)):i.texImage2D(o.TEXTURE_2D,0,Ue,xe.width,xe.height,0,dt,$e,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Mt&&kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,lt,Ue,We[0].width,We[0].height,xe.depth);for(let be=0,F=We.length;be<F;be++)Le=We[be],T.format!==ti?dt!==null?Mt?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,xe.depth,dt,Le.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,Ue,Le.width,Le.height,xe.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?i.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,xe.depth,dt,$e,Le.data):i.texImage3D(o.TEXTURE_2D_ARRAY,be,Ue,Le.width,Le.height,xe.depth,0,dt,$e,Le.data)}else{Mt&&kt&&i.texStorage2D(o.TEXTURE_2D,lt,Ue,We[0].width,We[0].height);for(let be=0,F=We.length;be<F;be++)Le=We[be],T.format!==ti?dt!==null?Mt?i.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Le.width,Le.height,dt,Le.data):i.compressedTexImage2D(o.TEXTURE_2D,be,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?i.texSubImage2D(o.TEXTURE_2D,be,0,0,Le.width,Le.height,dt,$e,Le.data):i.texImage2D(o.TEXTURE_2D,be,Ue,Le.width,Le.height,0,dt,$e,Le.data)}else if(T.isDataArrayTexture)Mt?(kt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,lt,Ue,xe.width,xe.height,xe.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,dt,$e,xe.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ue,xe.width,xe.height,xe.depth,0,dt,$e,xe.data);else if(T.isData3DTexture)Mt?(kt&&i.texStorage3D(o.TEXTURE_3D,lt,Ue,xe.width,xe.height,xe.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,dt,$e,xe.data)):i.texImage3D(o.TEXTURE_3D,0,Ue,xe.width,xe.height,xe.depth,0,dt,$e,xe.data);else if(T.isFramebufferTexture){if(kt)if(Mt)i.texStorage2D(o.TEXTURE_2D,lt,Ue,xe.width,xe.height);else{let be=xe.width,F=xe.height;for(let Re=0;Re<lt;Re++)i.texImage2D(o.TEXTURE_2D,Re,Ue,be,F,0,dt,$e,null),be>>=1,F>>=1}}else if(We.length>0&&bt){Mt&&kt&&i.texStorage2D(o.TEXTURE_2D,lt,Ue,We[0].width,We[0].height);for(let be=0,F=We.length;be<F;be++)Le=We[be],Mt?i.texSubImage2D(o.TEXTURE_2D,be,0,0,dt,$e,Le):i.texImage2D(o.TEXTURE_2D,be,Ue,dt,$e,Le);T.generateMipmaps=!1}else Mt?(kt&&i.texStorage2D(o.TEXTURE_2D,lt,Ue,xe.width,xe.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,dt,$e,xe)):i.texImage2D(o.TEXTURE_2D,0,Ue,dt,$e,xe);I(T,bt)&&N(Me),Ge.__version=_e.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ye(D,T,ie){if(T.image.length!==6)return;const Me=K(D,T),Se=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+ie);const _e=r.get(Se);if(Se.version!==_e.__version||Me===!0){i.activeTexture(o.TEXTURE0+ie);const Ge=zt.getPrimaries(zt.workingColorSpace),we=T.colorSpace===hi?null:zt.getPrimaries(T.colorSpace),ze=T.colorSpace===hi||Ge===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,rt=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let be=0;be<6;be++)!Ye&&!rt?xe[be]=A(T.image[be],!1,!0,l.maxCubemapSize):xe[be]=rt?T.image[be].image:T.image[be],xe[be]=Je(T,xe[be]);const bt=xe[0],dt=S(bt)||d,$e=u.convert(T.format,T.colorSpace),Ue=u.convert(T.type),Le=P(T.internalFormat,$e,Ue,T.colorSpace),We=d&&T.isVideoTexture!==!0,Mt=_e.__version===void 0||Me===!0;let kt=q(T,bt,dt);V(o.TEXTURE_CUBE_MAP,T,dt);let lt;if(Ye){We&&Mt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Le,bt.width,bt.height);for(let be=0;be<6;be++){lt=xe[be].mipmaps;for(let F=0;F<lt.length;F++){const Re=lt[F];T.format!==ti?$e!==null?We?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,0,0,Re.width,Re.height,$e,Re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,Le,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,0,0,Re.width,Re.height,$e,Ue,Re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F,Le,Re.width,Re.height,0,$e,Ue,Re.data)}}}else{lt=T.mipmaps,We&&Mt&&(lt.length>0&&kt++,i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,Le,xe[0].width,xe[0].height));for(let be=0;be<6;be++)if(rt){We?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,xe[be].width,xe[be].height,$e,Ue,xe[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,xe[be].width,xe[be].height,0,$e,Ue,xe[be].data);for(let F=0;F<lt.length;F++){const Te=lt[F].image[be].image;We?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,0,0,Te.width,Te.height,$e,Ue,Te.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,Le,Te.width,Te.height,0,$e,Ue,Te.data)}}else{We?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,$e,Ue,xe[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,$e,Ue,xe[be]);for(let F=0;F<lt.length;F++){const Re=lt[F];We?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,0,0,$e,Ue,Re.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,F+1,Le,$e,Ue,Re.image[be])}}}I(T,dt)&&N(o.TEXTURE_CUBE_MAP),_e.__version=Se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,ie,Me,Se,_e){const Ge=u.convert(ie.format,ie.colorSpace),we=u.convert(ie.type),ze=P(ie.internalFormat,Ge,we,ie.colorSpace);if(!r.get(T).__hasExternalTextures){const rt=Math.max(1,T.width>>_e),xe=Math.max(1,T.height>>_e);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,_e,ze,rt,xe,T.depth,0,Ge,we,null):i.texImage2D(Se,_e,ze,rt,xe,0,Ge,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),De(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Me,Se,r.get(ie).__webglTexture,0,Xe(T)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Me,Se,r.get(ie).__webglTexture,_e),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(D,T,ie){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let Me=d===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(ie||De(T)){const Se=T.depthTexture;Se&&Se.isDepthTexture&&(Se.type===Fa?Me=o.DEPTH_COMPONENT32F:Se.type===Ia&&(Me=o.DEPTH_COMPONENT24));const _e=Xe(T);De(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,_e,Me,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,_e,Me,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,Me,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const Me=Xe(T);ie&&De(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,o.DEPTH24_STENCIL8,T.width,T.height):De(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const Me=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Se=0;Se<Me.length;Se++){const _e=Me[Se],Ge=u.convert(_e.format,_e.colorSpace),we=u.convert(_e.type),ze=P(_e.internalFormat,Ge,we,_e.colorSpace),Ye=Xe(T);ie&&De(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,ze,T.width,T.height):De(T)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye,ze,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ze,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ne(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U(T.depthTexture,0);const Me=r.get(T.depthTexture).__webglTexture,Se=Xe(T);if(T.depthTexture.format===_r)De(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0,Se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Me,0);else if(T.depthTexture.format===bs)De(T)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0,Se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Ve(D){const T=r.get(D),ie=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");Ne(T.__webglFramebuffer,D)}else if(ie){T.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[Me]),T.__webglDepthbuffer[Me]=o.createRenderbuffer(),Be(T.__webglDepthbuffer[Me],D,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),Be(T.__webglDepthbuffer,D,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function ot(D,T,ie){const Me=r.get(D);T!==void 0&&Ee(Me.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ie!==void 0&&Ve(D)}function te(D){const T=D.texture,ie=r.get(D),Me=r.get(T);D.addEventListener("dispose",ge),D.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=o.createTexture()),Me.__version=T.version,h.memory.textures++);const Se=D.isWebGLCubeRenderTarget===!0,_e=D.isWebGLMultipleRenderTargets===!0,Ge=S(D)||d;if(Se){ie.__webglFramebuffer=[];for(let we=0;we<6;we++)if(d&&T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[we]=[];for(let ze=0;ze<T.mipmaps.length;ze++)ie.__webglFramebuffer[we][ze]=o.createFramebuffer()}else ie.__webglFramebuffer[we]=o.createFramebuffer()}else{if(d&&T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)ie.__webglFramebuffer[we]=o.createFramebuffer()}else ie.__webglFramebuffer=o.createFramebuffer();if(_e)if(l.drawBuffers){const we=D.texture;for(let ze=0,Ye=we.length;ze<Ye;ze++){const rt=r.get(we[ze]);rt.__webglTexture===void 0&&(rt.__webglTexture=o.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&D.samples>0&&De(D)===!1){const we=_e?T:[T];ie.__webglMultisampledFramebuffer=o.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ze=0;ze<we.length;ze++){const Ye=we[ze];ie.__webglColorRenderbuffer[ze]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ie.__webglColorRenderbuffer[ze]);const rt=u.convert(Ye.format,Ye.colorSpace),xe=u.convert(Ye.type),bt=P(Ye.internalFormat,rt,xe,Ye.colorSpace,D.isXRRenderTarget===!0),dt=Xe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,dt,bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,ie.__webglColorRenderbuffer[ze])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(ie.__webglDepthRenderbuffer=o.createRenderbuffer(),Be(ie.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Se){i.bindTexture(o.TEXTURE_CUBE_MAP,Me.__webglTexture),V(o.TEXTURE_CUBE_MAP,T,Ge);for(let we=0;we<6;we++)if(d&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)Ee(ie.__webglFramebuffer[we][ze],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else Ee(ie.__webglFramebuffer[we],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);I(T,Ge)&&N(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(_e){const we=D.texture;for(let ze=0,Ye=we.length;ze<Ye;ze++){const rt=we[ze],xe=r.get(rt);i.bindTexture(o.TEXTURE_2D,xe.__webglTexture),V(o.TEXTURE_2D,rt,Ge),Ee(ie.__webglFramebuffer,D,rt,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,0),I(rt,Ge)&&N(o.TEXTURE_2D)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(d?we=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(we,Me.__webglTexture),V(we,T,Ge),d&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)Ee(ie.__webglFramebuffer[ze],D,T,o.COLOR_ATTACHMENT0,we,ze);else Ee(ie.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,we,0);I(T,Ge)&&N(we),i.unbindTexture()}D.depthBuffer&&Ve(D)}function Zt(D){const T=S(D)||d,ie=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let Me=0,Se=ie.length;Me<Se;Me++){const _e=ie[Me];if(I(_e,T)){const Ge=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,we=r.get(_e).__webglTexture;i.bindTexture(Ge,we),N(Ge),i.unbindTexture()}}}function Fe(D){if(d&&D.samples>0&&De(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ie=D.width,Me=D.height;let Se=o.COLOR_BUFFER_BIT;const _e=[],Ge=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,we=r.get(D),ze=D.isWebGLMultipleRenderTargets===!0;if(ze)for(let Ye=0;Ye<T.length;Ye++)i.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ye=0;Ye<T.length;Ye++){_e.push(o.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&_e.push(Ge);const rt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(rt===!1&&(D.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),ze&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]),rt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ge]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ge])),ze){const xe=r.get(T[Ye]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xe,0)}o.blitFramebuffer(0,0,ie,Me,0,0,ie,Me,Se,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_e)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ze)for(let Ye=0;Ye<T.length;Ye++){i.bindFramebuffer(o.FRAMEBUFFER,we.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,we.__webglColorRenderbuffer[Ye]);const rt=r.get(T[Ye]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,we.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Xe(D){return Math.min(l.maxSamples,D.samples)}function De(D){const T=r.get(D);return d&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(D){const T=h.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Je(D,T){const ie=D.colorSpace,Me=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Ed||ie!==aa&&ie!==hi&&(zt.getTransfer(ie)===Gt?d===!1?t.has("EXT_sRGB")===!0&&Me===ti?(D.format=Ed,D.minFilter=Dn,D.generateMipmaps=!1):T=m_.sRGBToLinear(T):(Me!==ti||Se!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),T}this.allocateTextureUnit=j,this.resetTextureUnits=ve,this.setTexture2D=U,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=oe,this.rebindTextures=ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=De}function aA(o,t,i){const r=i.isWebGL2;function l(u,h=hi){let d;const m=zt.getTransfer(h);if(u===Va)return o.UNSIGNED_BYTE;if(u===s_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===o_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===BS)return o.BYTE;if(u===IS)return o.SHORT;if(u===Cd)return o.UNSIGNED_SHORT;if(u===r_)return o.INT;if(u===Ia)return o.UNSIGNED_INT;if(u===Fa)return o.FLOAT;if(u===Es)return r?o.HALF_FLOAT:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(u===FS)return o.ALPHA;if(u===ti)return o.RGBA;if(u===HS)return o.LUMINANCE;if(u===GS)return o.LUMINANCE_ALPHA;if(u===_r)return o.DEPTH_COMPONENT;if(u===bs)return o.DEPTH_STENCIL;if(u===Ed)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(u===VS)return o.RED;if(u===l_)return o.RED_INTEGER;if(u===kS)return o.RG;if(u===c_)return o.RG_INTEGER;if(u===u_)return o.RGBA_INTEGER;if(u===Hf||u===Gf||u===Vf||u===kf)if(m===Gt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(u===Hf)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Gf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Vf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===kf)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(u===Hf)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Gf)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Vf)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===kf)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===zg||u===Pg||u===Bg||u===Ig)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(u===zg)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Pg)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Bg)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Ig)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===f_)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Fg||u===Hg)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(u===Fg)return m===Gt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(u===Hg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Gg||u===Vg||u===kg||u===jg||u===Xg||u===Wg||u===qg||u===Yg||u===Zg||u===Kg||u===Qg||u===Jg||u===$g||u===e0)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(u===Gg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Vg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===kg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===jg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Xg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Wg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===qg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Yg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Zg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Kg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Qg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Jg)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===$g)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===e0)return m===Gt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===jf||u===t0||u===n0)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(u===jf)return m===Gt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===t0)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===n0)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===jS||u===i0||u===a0||u===r0)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(u===jf)return d.COMPRESSED_RED_RGTC1_EXT;if(u===i0)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===a0)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===r0)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===gr?r?o.UNSIGNED_INT_24_8:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class rA extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],y=g.position.distanceTo(x.position),M=.02,R=.005;p.inputState.pinching&&y>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new hc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class oA extends As{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,y=null,M=null,R=null;const A=i.getContextAttributes();let S=null,v=null;const I=[],N=[],P=new xt;let q=null;const G=new Ei;G.layers.enable(1),G.viewport=new En;const z=new Ei;z.layers.enable(2),z.viewport=new En;const ge=[G,z],C=new rA;C.layers.enable(1),C.layers.enable(2);let O=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=I[V];return K===void 0&&(K=new md,I[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=I[V];return K===void 0&&(K=new md,I[V]=K),K.getGripSpace()},this.getHand=function(V){let K=I[V];return K===void 0&&(K=new md,I[V]=K),K.getHandSpace()};function de(V){const K=N.indexOf(V.inputSource);if(K===-1)return;const pe=I[K];pe!==void 0&&(pe.update(V.inputSource,V.frame,p||h),pe.dispatchEvent({type:V.type,data:V.inputSource}))}function ve(){l.removeEventListener("select",de),l.removeEventListener("selectstart",de),l.removeEventListener("selectend",de),l.removeEventListener("squeeze",de),l.removeEventListener("squeezestart",de),l.removeEventListener("squeezeend",de),l.removeEventListener("end",ve),l.removeEventListener("inputsourceschange",j);for(let V=0;V<I.length;V++){const K=N[V];K!==null&&(N[V]=null,I[V].disconnect(K))}O=null,ce=null,t.setRenderTarget(S),M=null,y=null,x=null,l=null,v=null,k.stop(),r.isPresenting=!1,t.setPixelRatio(q),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){d=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return x},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(S=t.getRenderTarget(),l.addEventListener("select",de),l.addEventListener("selectstart",de),l.addEventListener("selectend",de),l.addEventListener("squeeze",de),l.addEventListener("squeezestart",de),l.addEventListener("squeezeend",de),l.addEventListener("end",ve),l.addEventListener("inputsourceschange",j),A.xrCompatible!==!0&&await i.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(P),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:l.renderState.layers===void 0?A.antialias:!0,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,K),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),v=new pi(M.framebufferWidth,M.framebufferHeight,{format:ti,type:Va,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil})}else{let K=null,pe=null,ye=null;A.depth&&(ye=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,K=A.stencil?bs:_r,pe=A.stencil?gr:Ia);const Ee={colorFormat:i.RGBA8,depthFormat:ye,scaleFactor:u};x=new XRWebGLBinding(l,i),y=x.createProjectionLayer(Ee),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),v=new pi(y.textureWidth,y.textureHeight,{format:ti,type:Va,depthTexture:new R_(y.textureWidth,y.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0});const Be=t.properties.get(v);Be.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),k.setContext(l),k.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function j(V){for(let K=0;K<V.removed.length;K++){const pe=V.removed[K],ye=N.indexOf(pe);ye>=0&&(N[ye]=null,I[ye].disconnect(pe))}for(let K=0;K<V.added.length;K++){const pe=V.added[K];let ye=N.indexOf(pe);if(ye===-1){for(let Be=0;Be<I.length;Be++)if(Be>=N.length){N.push(pe),ye=Be;break}else if(N[Be]===null){N[Be]=pe,ye=Be;break}if(ye===-1)break}const Ee=I[ye];Ee&&Ee.connect(pe)}}const $=new le,U=new le;function X(V,K,pe){$.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(pe.matrixWorld);const ye=$.distanceTo(U),Ee=K.projectionMatrix.elements,Be=pe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),Ve=Ee[14]/(Ee[10]+1),ot=(Ee[9]+1)/Ee[5],te=(Ee[9]-1)/Ee[5],Zt=(Ee[8]-1)/Ee[0],Fe=(Be[8]+1)/Be[0],Xe=Ne*Zt,De=Ne*Fe,ft=ye/(-Zt+Fe),Je=ft*-Zt;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Je),V.translateZ(ft),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const D=Ne+ft,T=Ve+ft,ie=Xe-Je,Me=De+(ye-Je),Se=ot*Ve/T*D,_e=te*Ve/T*D;V.projectionMatrix.makePerspective(ie,Me,Se,_e,D,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;C.near=z.near=G.near=V.near,C.far=z.far=G.far=V.far,(O!==C.near||ce!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,ce=C.far);const K=V.parent,pe=C.cameras;Y(C,K);for(let ye=0;ye<pe.length;ye++)Y(pe[ye],K);pe.length===2?X(C,G,z):C.projectionMatrix.copy(G.projectionMatrix),oe(V,C,K)};function oe(V,K,pe){pe===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(pe.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=bd*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(V){m=V,y!==null&&(y.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)};let ue=null;function L(V,K){if(g=K.getViewerPose(p||h),R=K,g!==null){const pe=g.views;M!==null&&(t.setRenderTargetFramebuffer(v,M.framebuffer),t.setRenderTarget(v));let ye=!1;pe.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ee=0;Ee<pe.length;Ee++){const Be=pe[Ee];let Ne=null;if(M!==null)Ne=M.getViewport(Be);else{const ot=x.getViewSubImage(y,Be);Ne=ot.viewport,Ee===0&&(t.setRenderTargetTextures(v,ot.colorTexture,y.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(v))}let Ve=ge[Ee];Ve===void 0&&(Ve=new Ei,Ve.layers.enable(Ee),Ve.viewport=new En,ge[Ee]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(C.matrix.copy(Ve.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(Ve)}}for(let pe=0;pe<I.length;pe++){const ye=N[pe],Ee=I[pe];ye!==null&&Ee!==void 0&&Ee.update(ye,K,p||h)}ue&&ue(V,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),R=null}const k=new A_;k.setAnimationLoop(L),this.setAnimationLoop=function(V){ue=V},this.dispose=function(){}}}function lA(o,t){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,E_(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,I,N,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(S,v):v.isMeshToonMaterial?(u(S,v),x(S,v)):v.isMeshPhongMaterial?(u(S,v),g(S,v)):v.isMeshStandardMaterial?(u(S,v),y(S,v),v.isMeshPhysicalMaterial&&M(S,v,P)):v.isMeshMatcapMaterial?(u(S,v),R(S,v)):v.isMeshDepthMaterial?u(S,v):v.isMeshDistanceMaterial?(u(S,v),A(S,v)):v.isMeshNormalMaterial?u(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,I,N):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===kn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===kn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const I=t.get(v).envMap;if(I&&(S.envMap.value=I,S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap){S.lightMap.value=v.lightMap;const N=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=v.lightMapIntensity*N,i(v.lightMap,S.lightMapTransform)}v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,I,N){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*I,S.scale.value=N*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),t.get(v).envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,I){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&S.clearcoatNormalScale.value.negate())),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function R(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const I=t.get(v).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function cA(o,t,i,r){let l={},u={},h=[];const d=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(I,N){const P=N.program;r.uniformBlockBinding(I,P)}function p(I,N){let P=l[I.id];P===void 0&&(R(I),P=g(I),l[I.id]=P,I.addEventListener("dispose",S));const q=N.program;r.updateUBOMapping(I,q);const G=t.render.frame;u[I.id]!==G&&(y(I),u[I.id]=G)}function g(I){const N=x();I.__bindingPointIndex=N;const P=o.createBuffer(),q=I.__size,G=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,q,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,P),P}function x(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const N=l[I.id],P=I.uniforms,q=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,z=P.length;G<z;G++){const ge=Array.isArray(P[G])?P[G]:[P[G]];for(let C=0,O=ge.length;C<O;C++){const ce=ge[C];if(M(ce,G,C,q)===!0){const de=ce.__offset,ve=Array.isArray(ce.value)?ce.value:[ce.value];let j=0;for(let $=0;$<ve.length;$++){const U=ve[$],X=A(U);typeof U=="number"||typeof U=="boolean"?(ce.__data[0]=U,o.bufferSubData(o.UNIFORM_BUFFER,de+j,ce.__data)):U.isMatrix3?(ce.__data[0]=U.elements[0],ce.__data[1]=U.elements[1],ce.__data[2]=U.elements[2],ce.__data[3]=0,ce.__data[4]=U.elements[3],ce.__data[5]=U.elements[4],ce.__data[6]=U.elements[5],ce.__data[7]=0,ce.__data[8]=U.elements[6],ce.__data[9]=U.elements[7],ce.__data[10]=U.elements[8],ce.__data[11]=0):(U.toArray(ce.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,de,ce.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,N,P,q){const G=I.value,z=N+"_"+P;if(q[z]===void 0)return typeof G=="number"||typeof G=="boolean"?q[z]=G:q[z]=G.clone(),!0;{const ge=q[z];if(typeof G=="number"||typeof G=="boolean"){if(ge!==G)return q[z]=G,!0}else if(ge.equals(G)===!1)return ge.copy(G),!0}return!1}function R(I){const N=I.uniforms;let P=0;const q=16;for(let z=0,ge=N.length;z<ge;z++){const C=Array.isArray(N[z])?N[z]:[N[z]];for(let O=0,ce=C.length;O<ce;O++){const de=C[O],ve=Array.isArray(de.value)?de.value:[de.value];for(let j=0,$=ve.length;j<$;j++){const U=ve[j],X=A(U),Y=P%q;Y!==0&&q-Y<X.boundary&&(P+=q-Y),de.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=P,P+=X.storage}}}const G=P%q;return G>0&&(P+=q-G),I.__size=P,I.__cache={},this}function A(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function S(I){const N=I.target;N.removeEventListener("dispose",S);const P=h.indexOf(N.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function v(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class U_{constructor(t={}){const{canvas:i=iM(),context:r=null,depth:l=!0,stencil:u=!0,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=t;this.isWebGLRenderer=!0;let y;r!==null?y=r.getContextAttributes().alpha:y=h;const M=new Uint32Array(4),R=new Int32Array(4);let A=null,S=null;const v=[],I=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this._useLegacyLights=!1,this.toneMapping=Ga,this.toneMappingExposure=1;const N=this;let P=!1,q=0,G=0,z=null,ge=-1,C=null;const O=new En,ce=new En;let de=null;const ve=new Ct(0);let j=0,$=i.width,U=i.height,X=1,Y=null,oe=null;const ue=new En(0,0,$,U),L=new En(0,0,$,U);let k=!1;const V=new T_;let K=!1,pe=!1,ye=null;const Ee=new bn,Be=new xt,Ne=new le,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return z===null?X:1}let te=r;function Zt(w,Z){for(let ae=0;ae<w.length;ae++){const re=w[ae],ne=i.getContext(re,Z);if(ne!==null)return ne}return null}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",F,!1),i.addEventListener("webglcontextcreationerror",Re,!1),te===null){const Z=["webgl2","webgl","experimental-webgl"];if(N.isWebGL1Renderer===!0&&Z.shift(),te=Zt(Z,w),te===null)throw Zt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&te instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),te.getShaderPrecisionFormat===void 0&&(te.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Fe,Xe,De,ft,Je,D,T,ie,Me,Se,_e,Ge,we,ze,Ye,rt,xe,bt,dt,$e,Ue,Le,We,Mt;function kt(){Fe=new x1(te),Xe=new d1(te,Fe,t),Fe.init(Xe),Le=new aA(te,Fe,Xe),De=new nA(te,Fe,Xe),ft=new M1(te),Je=new VT,D=new iA(te,Fe,De,Je,Xe,Le,ft),T=new p1(N),ie=new v1(N),Me=new CM(te,Xe),We=new u1(te,Fe,Me,Xe),Se=new y1(te,Me,ft,We),_e=new A1(te,Se,Me,ft),dt=new T1(te,Xe,D),rt=new h1(Je),Ge=new GT(N,T,ie,Fe,Xe,We,rt),we=new lA(N,Je),ze=new jT,Ye=new KT(Fe,Xe),bt=new c1(N,T,ie,De,_e,y,m),xe=new tA(N,_e,Xe),Mt=new cA(te,ft,Xe,De),$e=new f1(te,Fe,ft,Xe),Ue=new S1(te,Fe,ft,Xe),ft.programs=Ge.programs,N.capabilities=Xe,N.extensions=Fe,N.properties=Je,N.renderLists=ze,N.shadowMap=xe,N.state=De,N.info=ft}kt();const lt=new oA(N,te);this.xr=lt,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const w=Fe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Fe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize($,U,!1))},this.getSize=function(w){return w.set($,U)},this.setSize=function(w,Z,ae=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,U=Z,i.width=Math.floor(w*X),i.height=Math.floor(Z*X),ae===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set($*X,U*X).floor()},this.setDrawingBufferSize=function(w,Z,ae){$=w,U=Z,X=ae,i.width=Math.floor(w*ae),i.height=Math.floor(Z*ae),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(ue)},this.setViewport=function(w,Z,ae,re){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,Z,ae,re),De.viewport(O.copy(ue).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(L)},this.setScissor=function(w,Z,ae,re){w.isVector4?L.set(w.x,w.y,w.z,w.w):L.set(w,Z,ae,re),De.scissor(ce.copy(L).multiplyScalar(X).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(w){De.setScissorTest(k=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(w=!0,Z=!0,ae=!0){let re=0;if(w){let ne=!1;if(z!==null){const Ce=z.texture.format;ne=Ce===u_||Ce===c_||Ce===l_}if(ne){const Ce=z.texture.type,Pe=Ce===Va||Ce===Ia||Ce===Cd||Ce===gr||Ce===s_||Ce===o_,qe=bt.getClearColor(),Ze=bt.getClearAlpha(),He=qe.r,et=qe.g,tt=qe.b;Pe?(M[0]=He,M[1]=et,M[2]=tt,M[3]=Ze,te.clearBufferuiv(te.COLOR,0,M)):(R[0]=He,R[1]=et,R[2]=tt,R[3]=Ze,te.clearBufferiv(te.COLOR,0,R))}else re|=te.COLOR_BUFFER_BIT}Z&&(re|=te.DEPTH_BUFFER_BIT),ae&&(re|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",F,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),ze.dispose(),Ye.dispose(),Je.dispose(),T.dispose(),ie.dispose(),_e.dispose(),We.dispose(),Mt.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Kt),lt.removeEventListener("sessionend",Lt),ye&&(ye.dispose(),ye=null),hn.stop()};function be(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ft.autoReset,Z=xe.enabled,ae=xe.autoUpdate,re=xe.needsUpdate,ne=xe.type;kt(),ft.autoReset=w,xe.enabled=Z,xe.autoUpdate=ae,xe.needsUpdate=re,xe.type=ne}function Re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Te(w){const Z=w.target;Z.removeEventListener("dispose",Te),Ke(Z)}function Ke(w){ke(w),Je.remove(w)}function ke(w){const Z=Je.get(w).programs;Z!==void 0&&(Z.forEach(function(ae){Ge.releaseProgram(ae)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ae,re,ne,Ce){Z===null&&(Z=Ve);const Pe=ne.isMesh&&ne.matrixWorld.determinant()<0,qe=Tn(w,Z,ae,re,ne);De.setMaterial(re,Pe);let Ze=ae.index,He=1;if(re.wireframe===!0){if(Ze=Se.getWireframeAttribute(ae),Ze===void 0)return;He=2}const et=ae.drawRange,tt=ae.attributes.position;let At=et.start*He,en=(et.start+et.count)*He;Ce!==null&&(At=Math.max(At,Ce.start*He),en=Math.min(en,(Ce.start+Ce.count)*He)),Ze!==null?(At=Math.max(At,0),en=Math.min(en,Ze.count)):tt!=null&&(At=Math.max(At,0),en=Math.min(en,tt.count));const tn=en-At;if(tn<0||tn===1/0)return;We.setup(ne,re,qe,ae,Ze);let ii,It=$e;if(Ze!==null&&(ii=Me.get(Ze),It=Ue,It.setIndex(ii)),ne.isMesh)re.wireframe===!0?(De.setLineWidth(re.wireframeLinewidth*ot()),It.setMode(te.LINES)):It.setMode(te.TRIANGLES);else if(ne.isLine){let ct=re.linewidth;ct===void 0&&(ct=1),De.setLineWidth(ct*ot()),ne.isLineSegments?It.setMode(te.LINES):ne.isLineLoop?It.setMode(te.LINE_LOOP):It.setMode(te.LINE_STRIP)}else ne.isPoints?It.setMode(te.POINTS):ne.isSprite&&It.setMode(te.TRIANGLES);if(ne.isBatchedMesh)It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)It.renderInstances(At,tn,ne.count);else if(ae.isInstancedBufferGeometry){const ct=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,oa=Math.min(ae.instanceCount,ct);It.renderInstances(At,tn,oa)}else It.render(At,tn)};function Dt(w,Z,ae){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Xa(w,Z,ae),w.side=ka,w.needsUpdate=!0,Xa(w,Z,ae),w.side=ta):Xa(w,Z,ae)}this.compile=function(w,Z,ae=null){ae===null&&(ae=w),S=Ye.get(ae),S.init(),I.push(S),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),w!==ae&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(S.pushLight(ne),ne.castShadow&&S.pushShadow(ne))}),S.setupLights(N._useLegacyLights);const re=new Set;return w.traverse(function(ne){const Ce=ne.material;if(Ce)if(Array.isArray(Ce))for(let Pe=0;Pe<Ce.length;Pe++){const qe=Ce[Pe];Dt(qe,ae,ne),re.add(qe)}else Dt(Ce,ae,ne),re.add(Ce)}),I.pop(),S=null,re},this.compileAsync=function(w,Z,ae=null){const re=this.compile(w,Z,ae);return new Promise(ne=>{function Ce(){if(re.forEach(function(Pe){Je.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){ne(w);return}setTimeout(Ce,10)}Fe.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Tt=null;function Wt(w){Tt&&Tt(w)}function Kt(){hn.stop()}function Lt(){hn.start()}const hn=new A_;hn.setAnimationLoop(Wt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(w){Tt=w,lt.setAnimationLoop(w),w===null?hn.stop():hn.start()},lt.addEventListener("sessionstart",Kt),lt.addEventListener("sessionend",Lt),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Z,z),S=Ye.get(w,I.length),S.init(),I.push(S),Ee.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V.setFromProjectionMatrix(Ee),pe=this.localClippingEnabled,K=rt.init(this.clippingPlanes,pe),A=ze.get(w,v.length),A.init(),v.push(A),Xn(w,Z,0,N.sortObjects),A.finish(),N.sortObjects===!0&&A.sort(Y,oe),this.info.render.frame++,K===!0&&rt.beginShadows();const ae=S.state.shadowsArray;if(xe.render(ae,w,Z),K===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),bt.render(A,w),S.setupLights(N._useLegacyLights),Z.isArrayCamera){const re=Z.cameras;for(let ne=0,Ce=re.length;ne<Ce;ne++){const Pe=re[ne];ws(A,w,Pe,Pe.viewport)}}else ws(A,w,Z);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(N,w,Z),We.resetDefaultState(),ge=-1,C=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,v.pop(),v.length>0?A=v[v.length-1]:A=null};function Xn(w,Z,ae,re){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ae=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){re&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const Pe=_e.update(w),qe=w.material;qe.visible&&A.push(w,Pe,qe,ae,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const Pe=_e.update(w),qe=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ne.copy(Pe.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(qe)){const Ze=Pe.groups;for(let He=0,et=Ze.length;He<et;He++){const tt=Ze[He],At=qe[tt.materialIndex];At&&At.visible&&A.push(w,Pe,At,ae,Ne.z,tt)}}else qe.visible&&A.push(w,Pe,qe,ae,Ne.z,null)}}const Ce=w.children;for(let Pe=0,qe=Ce.length;Pe<qe;Pe++)Xn(Ce[Pe],Z,ae,re)}function ws(w,Z,ae,re){const ne=w.opaque,Ce=w.transmissive,Pe=w.transparent;S.setupLightsView(ae),K===!0&&rt.setGlobalState(N.clippingPlanes,ae),Ce.length>0&&Cs(ne,Ce,Z,ae),re&&De.viewport(O.copy(re)),ne.length>0&&ra(ne,Z,ae),Ce.length>0&&ra(Ce,Z,ae),Pe.length>0&&ra(Pe,Z,ae),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Cs(w,Z,ae,re){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;const Ce=Xe.isWebGL2;ye===null&&(ye=new pi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")?Es:Va,minFilter:Lo,samples:Ce?4:0})),N.getDrawingBufferSize(Be),Ce?ye.setSize(Be.x,Be.y):ye.setSize(Td(Be.x),Td(Be.y));const Pe=N.getRenderTarget();N.setRenderTarget(ye),N.getClearColor(ve),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear();const qe=N.toneMapping;N.toneMapping=Ga,ra(w,ae,re),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye);let Ze=!1;for(let He=0,et=Z.length;He<et;He++){const tt=Z[He],At=tt.object,en=tt.geometry,tn=tt.material,ii=tt.group;if(tn.side===ta&&At.layers.test(re.layers)){const It=tn.side;tn.side=kn,tn.needsUpdate=!0,Ds(At,ae,re,en,tn,ii),tn.side=It,tn.needsUpdate=!0,Ze=!0}}Ze===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye)),N.setRenderTarget(Pe),N.setClearColor(ve,j),N.toneMapping=qe}function ra(w,Z,ae){const re=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Ce=w.length;ne<Ce;ne++){const Pe=w[ne],qe=Pe.object,Ze=Pe.geometry,He=re===null?Pe.material:re,et=Pe.group;qe.layers.test(ae.layers)&&Ds(qe,Z,ae,Ze,He,et)}}function Ds(w,Z,ae,re,ne,Ce){w.onBeforeRender(N,Z,ae,re,ne,Ce),w.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(N,Z,ae,re,w,Ce),ne.transparent===!0&&ne.side===ta&&ne.forceSinglePass===!1?(ne.side=kn,ne.needsUpdate=!0,N.renderBufferDirect(ae,Z,re,ne,w,Ce),ne.side=ka,ne.needsUpdate=!0,N.renderBufferDirect(ae,Z,re,ne,w,Ce),ne.side=ta):N.renderBufferDirect(ae,Z,re,ne,w,Ce),w.onAfterRender(N,Z,ae,re,ne,Ce)}function Xa(w,Z,ae){Z.isScene!==!0&&(Z=Ve);const re=Je.get(w),ne=S.state.lights,Ce=S.state.shadowsArray,Pe=ne.state.version,qe=Ge.getParameters(w,ne.state,Ce,Z,ae),Ze=Ge.getProgramCacheKey(qe);let He=re.programs;re.environment=w.isMeshStandardMaterial?Z.environment:null,re.fog=Z.fog,re.envMap=(w.isMeshStandardMaterial?ie:T).get(w.envMap||re.environment),He===void 0&&(w.addEventListener("dispose",Te),He=new Map,re.programs=He);let et=He.get(Ze);if(et!==void 0){if(re.currentProgram===et&&re.lightsStateVersion===Pe)return $t(w,qe),et}else qe.uniforms=Ge.getUniforms(w),w.onBuild(ae,qe,N),w.onBeforeCompile(qe,N),et=Ge.acquireProgram(qe,Ze),He.set(Ze,et),re.uniforms=qe.uniforms;const tt=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(tt.clippingPlanes=rt.uniform),$t(w,qe),re.needsLights=Ls(w),re.lightsStateVersion=Pe,re.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMap.value=ne.state.directionalShadowMap,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotShadowMap.value=ne.state.spotShadowMap,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMap.value=ne.state.pointShadowMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=et,re.uniformsList=null,et}function mi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=pc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function $t(w,Z){const ae=Je.get(w);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function Tn(w,Z,ae,re,ne){Z.isScene!==!0&&(Z=Ve),D.resetTextureUnits();const Ce=Z.fog,Pe=re.isMeshStandardMaterial?Z.environment:null,qe=z===null?N.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:aa,Ze=(re.isMeshStandardMaterial?ie:T).get(re.envMap||Pe),He=re.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,et=!!ae.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),tt=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,en=!!ae.morphAttributes.color;let tn=Ga;re.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(tn=N.toneMapping);const ii=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,It=ii!==void 0?ii.length:0,ct=Je.get(re),oa=S.state.lights;if(K===!0&&(pe===!0||w!==C)){const On=w===C&&re.id===ge;rt.setState(re,w,On)}let Pt=!1;re.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==oa.state.version||ct.outputColorSpace!==qe||ne.isBatchedMesh&&ct.batching===!1||!ne.isBatchedMesh&&ct.batching===!0||ne.isInstancedMesh&&ct.instancing===!1||!ne.isInstancedMesh&&ct.instancing===!0||ne.isSkinnedMesh&&ct.skinning===!1||!ne.isSkinnedMesh&&ct.skinning===!0||ne.isInstancedMesh&&ct.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ct.instancingColor===!1&&ne.instanceColor!==null||ct.envMap!==Ze||re.fog===!0&&ct.fog!==Ce||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==rt.numPlanes||ct.numIntersection!==rt.numIntersection)||ct.vertexAlphas!==He||ct.vertexTangents!==et||ct.morphTargets!==tt||ct.morphNormals!==At||ct.morphColors!==en||ct.toneMapping!==tn||Xe.isWebGL2===!0&&ct.morphTargetsCount!==It)&&(Pt=!0):(Pt=!0,ct.__version=re.version);let gn=ct.currentProgram;Pt===!0&&(gn=Xa(re,Z,ne));let Ln=!1,la=!1,Ns=!1;const nn=gn.getUniforms(),Ti=ct.uniforms;if(De.useProgram(gn.program)&&(Ln=!0,la=!0,Ns=!0),re.id!==ge&&(ge=re.id,la=!0),Ln||C!==w){nn.setValue(te,"projectionMatrix",w.projectionMatrix),nn.setValue(te,"viewMatrix",w.matrixWorldInverse);const On=nn.map.cameraPosition;On!==void 0&&On.setValue(te,Ne.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&nn.setValue(te,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&nn.setValue(te,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,la=!0,Ns=!0)}if(ne.isSkinnedMesh){nn.setOptional(te,ne,"bindMatrix"),nn.setOptional(te,ne,"bindMatrixInverse");const On=ne.skeleton;On&&(Xe.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),nn.setValue(te,"boneTexture",On.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(nn.setOptional(te,ne,"batchingTexture"),nn.setValue(te,"batchingTexture",ne._matricesTexture,D));const ca=ae.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Xe.isWebGL2===!0)&&dt.update(ne,ae,gn),(la||ct.receiveShadow!==ne.receiveShadow)&&(ct.receiveShadow=ne.receiveShadow,nn.setValue(te,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ti.envMap.value=Ze,Ti.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),la&&(nn.setValue(te,"toneMappingExposure",N.toneMappingExposure),ct.needsLights&&sa(Ti,Ns),Ce&&re.fog===!0&&we.refreshFogUniforms(Ti,Ce),we.refreshMaterialUniforms(Ti,re,X,U,ye),pc.upload(te,mi(ct),Ti,D)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pc.upload(te,mi(ct),Ti,D),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&nn.setValue(te,"center",ne.center),nn.setValue(te,"modelViewMatrix",ne.modelViewMatrix),nn.setValue(te,"normalMatrix",ne.normalMatrix),nn.setValue(te,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const On=re.uniformsGroups;for(let An=0,Us=On.length;An<Us;An++)if(Xe.isWebGL2){const Os=On[An];Mt.update(Os,gn),Mt.bind(Os,gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gn}function sa(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Ls(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,Z,ae){Je.get(w.texture).__webglTexture=Z,Je.get(w.depthTexture).__webglTexture=ae;const re=Je.get(w);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ae===void 0,re.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,Z){const ae=Je.get(w);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(w,Z=0,ae=0){z=w,q=Z,G=ae;let re=!0,ne=null,Ce=!1,Pe=!1;if(w){const Ze=Je.get(w);Ze.__useDefaultFramebuffer!==void 0?(De.bindFramebuffer(te.FRAMEBUFFER,null),re=!1):Ze.__webglFramebuffer===void 0?D.setupRenderTarget(w):Ze.__hasExternalTextures&&D.rebindTextures(w,Je.get(w.texture).__webglTexture,Je.get(w.depthTexture).__webglTexture);const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);const et=Je.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[Z])?ne=et[Z][ae]:ne=et[Z],Ce=!0):Xe.isWebGL2&&w.samples>0&&D.useMultisampledRTT(w)===!1?ne=Je.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?ne=et[ae]:ne=et,O.copy(w.viewport),ce.copy(w.scissor),de=w.scissorTest}else O.copy(ue).multiplyScalar(X).floor(),ce.copy(L).multiplyScalar(X).floor(),de=k;if(De.bindFramebuffer(te.FRAMEBUFFER,ne)&&Xe.drawBuffers&&re&&De.drawBuffers(w,ne),De.viewport(O),De.scissor(ce),De.setScissorTest(de),Ce){const Ze=Je.get(w.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ze.__webglTexture,ae)}else if(Pe){const Ze=Je.get(w.texture),He=Z||0;te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ze.__webglTexture,ae||0,He)}ge=-1},this.readRenderTargetPixels=function(w,Z,ae,re,ne,Ce,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Je.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(qe=qe[Pe]),qe){De.bindFramebuffer(te.FRAMEBUFFER,qe);try{const Ze=w.texture,He=Ze.format,et=Ze.type;if(He!==ti&&Le.convert(He)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const tt=et===Es&&(Fe.has("EXT_color_buffer_half_float")||Xe.isWebGL2&&Fe.has("EXT_color_buffer_float"));if(et!==Va&&Le.convert(et)!==te.getParameter(te.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===Fa&&(Xe.isWebGL2||Fe.has("OES_texture_float")||Fe.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-re&&ae>=0&&ae<=w.height-ne&&te.readPixels(Z,ae,re,ne,Le.convert(He),Le.convert(et),Ce)}finally{const Ze=z!==null?Je.get(z).__webglFramebuffer:null;De.bindFramebuffer(te.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(w,Z,ae=0){const re=Math.pow(2,-ae),ne=Math.floor(Z.image.width*re),Ce=Math.floor(Z.image.height*re);D.setTexture2D(Z,0),te.copyTexSubImage2D(te.TEXTURE_2D,ae,0,0,w.x,w.y,ne,Ce),De.unbindTexture()},this.copyTextureToTexture=function(w,Z,ae,re=0){const ne=Z.image.width,Ce=Z.image.height,Pe=Le.convert(ae.format),qe=Le.convert(ae.type);D.setTexture2D(ae,0),te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ae.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,ae.unpackAlignment),Z.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,re,w.x,w.y,ne,Ce,Pe,qe,Z.image.data):Z.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,re,w.x,w.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Pe,Z.mipmaps[0].data):te.texSubImage2D(te.TEXTURE_2D,re,w.x,w.y,Pe,qe,Z.image),re===0&&ae.generateMipmaps&&te.generateMipmap(te.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,ae,re,ne=0){if(N.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,qe=w.max.z-w.min.z+1,Ze=Le.convert(re.format),He=Le.convert(re.type);let et;if(re.isData3DTexture)D.setTexture3D(re,0),et=te.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)D.setTexture2DArray(re,0),et=te.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),te.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment);const tt=te.getParameter(te.UNPACK_ROW_LENGTH),At=te.getParameter(te.UNPACK_IMAGE_HEIGHT),en=te.getParameter(te.UNPACK_SKIP_PIXELS),tn=te.getParameter(te.UNPACK_SKIP_ROWS),ii=te.getParameter(te.UNPACK_SKIP_IMAGES),It=ae.isCompressedTexture?ae.mipmaps[ne]:ae.image;te.pixelStorei(te.UNPACK_ROW_LENGTH,It.width),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,It.height),te.pixelStorei(te.UNPACK_SKIP_PIXELS,w.min.x),te.pixelStorei(te.UNPACK_SKIP_ROWS,w.min.y),te.pixelStorei(te.UNPACK_SKIP_IMAGES,w.min.z),ae.isDataTexture||ae.isData3DTexture?te.texSubImage3D(et,ne,Z.x,Z.y,Z.z,Ce,Pe,qe,Ze,He,It.data):ae.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),te.compressedTexSubImage3D(et,ne,Z.x,Z.y,Z.z,Ce,Pe,qe,Ze,It.data)):te.texSubImage3D(et,ne,Z.x,Z.y,Z.z,Ce,Pe,qe,Ze,He,It),te.pixelStorei(te.UNPACK_ROW_LENGTH,tt),te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,At),te.pixelStorei(te.UNPACK_SKIP_PIXELS,en),te.pixelStorei(te.UNPACK_SKIP_ROWS,tn),te.pixelStorei(te.UNPACK_SKIP_IMAGES,ii),ne===0&&re.generateMipmaps&&te.generateMipmap(et),De.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?D.setTextureCube(w,0):w.isData3DTexture?D.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?D.setTexture2DArray(w,0):D.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){q=0,G=0,z=null,De.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===Dd?"display-p3":"srgb",i.unpackColorSpace=zt.workingColorSpace===Mc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mn?vr:d_}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vr?Mn:aa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class uA extends U_{}uA.prototype.isWebGL1Renderer=!0;class fA extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class dA extends jn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=Sn,g=Sn,x,y){super(null,h,d,m,p,g,l,u,x,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs extends ja{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const hA=["#5227FF","#FF9FFC","#B19EEF"];function pA({mouseForce:o=20,cursorSize:t=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=10,iterationsPoisson:u=10,dt:h=.014,BFECC:d=!0,resolution:m=.2,isBounce:p=!1,colors:g=hA,style:x={},className:y="",autoDemo:M=!0,autoSpeed:R=.5,autoIntensity:A=2.2,takeoverDuration:S=.25,autoResumeDelay:v=1e3,autoRampDuration:I=.6}){const N=it.useRef(null);return it.useRef(null),it.useEffect(()=>{if(!N.current)return;function P(Xe){const De=Xe.length,ft=new Uint8Array(De*4);for(let D=0;D<De;D++){const T=new Ct(Xe[D]);ft[D*4+0]=Math.round(T.r*255),ft[D*4+1]=Math.round(T.g*255),ft[D*4+2]=Math.round(T.b*255),ft[D*4+3]=255}const Je=new dA(ft,De,1,ti);return Je.minFilter=Dn,Je.magFilter=Dn,Je.needsUpdate=!0,Je}const q="attribute vec3 position; varying vec2 uv; void main(){ uv = 0.5 + position.xy * 0.5; gl_Position = vec4(position, 1.0); }",G="precision highp float; uniform sampler2D velocity; uniform sampler2D palette; varying vec2 uv; void main(){ float len = length(texture2D(velocity, uv).xy); vec3 c = texture2D(palette, vec2(len, 0.5)).rgb; float alpha = min(len * 2.5, 1.0); gl_FragColor = vec4(c, alpha); }",z="precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 fboSize; varying vec2 uv; void main(){ vec2 ratio = max(fboSize.x, fboSize.y) / fboSize; vec2 vel = texture2D(velocity, uv).xy; vec2 uv2 = uv - vel * dt * ratio; gl_FragColor = vec4(texture2D(velocity, uv2).xy, 0.0, 0.0); }",ge="precision highp float; uniform sampler2D velocity; uniform float dt; uniform vec2 px; varying vec2 uv; void main(){ float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x; float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x; float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y; float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y; float div = (x1 - x0 + y1 - y0) / 2.0; gl_FragColor = vec4(div / dt); }",C="precision highp float; uniform sampler2D pressure; uniform sampler2D divergence; uniform vec2 px; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r; float div = texture2D(divergence, uv).r; gl_FragColor = vec4((p0 + p1 + p2 + p3) / 4.0 - div); }",O="precision highp float; uniform sampler2D pressure; uniform sampler2D velocity; uniform vec2 px; uniform float dt; varying vec2 uv; void main(){ float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r; float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r; float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r; float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r; vec2 v = texture2D(velocity, uv).xy; vec2 grad = vec2(p0 - p1, p2 - p3) * 0.5; gl_FragColor = vec4(v - grad * dt, 0.0, 1.0); }",ce=new fA,de=new Nd,ve=new U_({antialias:!1,alpha:!0,powerPreference:"high-performance",precision:"mediump"});ve.setSize(window.innerWidth,window.innerHeight),ve.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),N.current&&N.current.appendChild(ve.domElement);const j=new ia(new Tc(2,2),new gs({}));ce.add(j);const $=Math.floor(window.innerWidth*m),U=Math.floor(window.innerHeight*m),X={type:Es,minFilter:Dn,magFilter:Dn,format:ti,depthBuffer:!1};let Y=new pi($,U,X),oe=new pi($,U,X),ue=new pi($,U,X),L=new pi($,U,X),k=new pi($,U,X);const V=new gs({vertexShader:q,fragmentShader:z,uniforms:{velocity:{value:null},dt:{value:h},fboSize:{value:new xt($,U)}}}),K=new gs({vertexShader:q,fragmentShader:ge,uniforms:{velocity:{value:null},dt:{value:h},px:{value:new xt(1/$,1/U)}}}),pe=new gs({vertexShader:q,fragmentShader:C,uniforms:{pressure:{value:null},divergence:{value:null},px:{value:new xt(1/$,1/U)}}}),ye=new gs({vertexShader:q,fragmentShader:O,uniforms:{pressure:{value:null},velocity:{value:null},dt:{value:h},px:{value:new xt(1/$,1/U)}}}),Ee=new gs({vertexShader:q,fragmentShader:G,uniforms:{velocity:{value:null},palette:{value:P(g)}},transparent:!0});let Be;const Ne=new xt,Ve=new xt,ot=new xt;let te=!1;const Zt=Xe=>{const De=Xe.clientX,ft=window.innerHeight-Xe.clientY;Ne.set(De,ft),te=!0};window.addEventListener("mousemove",Zt);const Fe=Xe=>{if(Be=requestAnimationFrame(Fe),!te&&M){const ft=Xe*.001*R;Ne.set((.5+Math.sin(ft)*.3)*window.innerWidth,(.5+Math.cos(ft*.8)*.3)*window.innerHeight)}ot.subVectors(Ne,Ve),Ve.copy(Ne),j.material=V,V.uniforms.velocity.value=Y.texture,ve.setRenderTarget(oe),ve.render(ce,de);let De=Y;Y=oe,oe=De,j.material=K,K.uniforms.velocity.value=Y.texture,ve.setRenderTarget(ue),ve.render(ce,de),j.material=pe,pe.uniforms.divergence.value=ue.texture;for(let ft=0;ft<u;ft++){pe.uniforms.pressure.value=L.texture,ve.setRenderTarget(k),ve.render(ce,de);let Je=L;L=k,k=Je}j.material=ye,ye.uniforms.pressure.value=L.texture,ye.uniforms.velocity.value=Y.texture,ve.setRenderTarget(oe),ve.render(ce,de),De=Y,Y=oe,oe=De,j.material=Ee,Ee.uniforms.velocity.value=Y.texture,ve.setRenderTarget(null),ve.render(ce,de),te=!1};return Be=requestAnimationFrame(Fe),()=>{window.removeEventListener("mousemove",Zt),cancelAnimationFrame(Be),ve.dispose(),Y.dispose(),oe.dispose(),ue.dispose(),L.dispose(),k.dispose(),N.current&&(N.current.innerHTML="")}},[g]),b.jsx("div",{ref:N,className:y,style:x})}const mA=Z0.memo(pA),gd=({children:o,className:t="",spotlightColor:i="rgba(222, 105, 203, 0.15)"})=>{const r=it.useRef(null),[l,u]=it.useState({x:0,y:0}),[h,d]=it.useState(0),m=x=>{if(!r.current)return;const y=r.current.getBoundingClientRect();u({x:x.clientX-y.left,y:x.clientY-y.top})},p=()=>{d(1)},g=()=>{d(0)};return b.jsxs("div",{ref:r,onMouseMove:m,onMouseEnter:p,onMouseLeave:g,className:`relative overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-300 hover:border-white/20 ${t}`,children:[b.jsx("div",{className:"pointer-events-none absolute -inset-px opacity-0 transition duration-300",style:{opacity:h,background:`radial-gradient(600px circle at ${l.x}px ${l.y}px, ${i}, transparent 40%)`}}),b.jsx("div",{className:"relative h-full",children:o})]})},gA=()=>b.jsxs("section",{id:"about",className:"py-40 relative overflow-hidden bg-transparent",children:[b.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-brand-neon/50"}),b.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[b.jsx(cn,{width:"100%",children:b.jsxs("div",{className:"text-center mb-24 max-w-5xl mx-auto",children:[b.jsxs("div",{className:"inline-flex items-center gap-3 text-brand-neon font-mono text-xs uppercase tracking-[0.2em] mb-10",children:[b.jsx("span",{className:"text-white/50",children:"["}),b.jsx("span",{className:"animate-pulse",children:"ABOUT US"}),b.jsx("span",{className:"text-white/50",children:"]"})]}),b.jsxs("h2",{className:"text-4xl md:text-7xl font-bold leading-[0.95] text-white tracking-tighter drop-shadow-lg",children:["High Energy Digital blends ",b.jsx("br",{}),b.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-white to-brand-cyan drop-shadow-[0_0_20px_rgba(222,105,203,0.2)]",children:"innovative strategies"}),b.jsx("br",{})," with enthusiasm."]})]})}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[b.jsx(cn,{delay:100,width:"100%",children:b.jsx(gd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(222, 105, 203, 0.2)",children:b.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[b.jsx("div",{className:"w-14 h-14 bg-brand-neon/10 flex items-center justify-center border border-brand-neon/30 shadow-[0_0_20px_rgba(222,105,203,0.1)]",children:b.jsx(Fy,{className:"text-brand-neon",size:28})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// Who We Are"}),b.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We help brands stand out, resonate, and engage. We specialize in elevating online presence through tailored digital marketing solutions."})]})]})})}),b.jsx(cn,{delay:200,width:"100%",children:b.jsx(gd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(0, 240, 255, 0.2)",children:b.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[b.jsx("div",{className:"w-14 h-14 bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.1)]",children:b.jsx(J0,{className:"text-brand-cyan",size:28})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// How We Work"}),b.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We combine creativity, data-driven insights, and a results-oriented approach to capture attention and drive tangible growth."})]})]})})}),b.jsx(cn,{delay:300,width:"100%",children:b.jsx(gd,{className:"h-full p-10 !rounded-none border-white/10 bg-black/50",spotlightColor:"rgba(255, 255, 255, 0.15)",children:b.jsxs("div",{className:"flex flex-col gap-8 h-full",children:[b.jsx("div",{className:"w-14 h-14 bg-white/10 flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.1)]",children:b.jsx(e_,{className:"text-white",size:28})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-xl font-bold text-white mb-4 uppercase tracking-widest font-mono",children:"// Our Vision"}),b.jsx("p",{className:"text-gray-400 font-light leading-relaxed text-lg border-l-2 border-white/10 pl-4",children:"We aim for digital excellence where every click becomes a meaningful connection. The future with HED is electrifying."})]})]})})})]}),b.jsx("div",{className:"mt-32 flex justify-center",children:b.jsx("div",{className:"h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent shadow-[0_0_15px_#DE69CB]"})})]})]}),_A=[{id:"01",title:"Social Media Management",desc:"A digital audit identifies strengths, weaknesses, opportunities.",Icon:Ly,status:"OPTIMAL",color:"text-brand-neon"},{id:"02",title:"Digital Strategy Audit",desc:"After the audit, we create a strategy to increase ROI.",Icon:$0,status:"READY",color:"text-brand-cyan"},{id:"03",title:"Design and Implementation",desc:"Once approved, we design and implement the marketing strategy.",Icon:J0,status:"ACTIVE",color:"text-white"}],vA=()=>{const[o,t]=it.useState(null);return b.jsx("section",{id:"services",className:"py-32 md:py-40 bg-[#030303] border-y border-white/10 relative z-10 transition-colors duration-300",children:b.jsxs("div",{className:"max-w-6xl mx-auto px-4 md:px-6",children:[b.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8",children:[b.jsx(cn,{children:b.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase drop-shadow-md",children:["Our ",b.jsx("span",{className:"text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.5)]",children:"Services"})]})}),b.jsx("div",{className:"hidden md:block font-mono text-xs text-gray-400 tracking-[0.2em]",children:"// WHAT WE DO"})]}),b.jsx("div",{className:"flex flex-col gap-6",children:_A.map((i,r)=>b.jsx(cn,{delay:r*100,width:"100%",children:b.jsxs("div",{onMouseEnter:()=>{t(r),Xt.playHover()},onMouseLeave:()=>t(null),className:`group relative border transition-all duration-500 overflow-hidden ${o===r?"border-brand-neon bg-[#080808] shadow-[0_0_30px_rgba(222,105,203,0.15)]":"border-white/20 bg-[#050505]"}`,children:[o===r&&b.jsx("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:b.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px] animate-[grid-scroll_20s_linear_infinite]"})}),b.jsx("div",{className:`absolute left-0 top-0 bottom-0 w-1 bg-brand-neon transition-all duration-300 shadow-[0_0_10px_#DE69CB] ${o===r?"opacity-100 h-full":"opacity-0 h-0"} hidden md:block`}),b.jsxs("div",{className:"relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:items-center",children:[b.jsxs("div",{className:"flex items-start md:items-center gap-6",children:[b.jsxs("div",{className:`p-4 border transition-all duration-300 flex-shrink-0 relative overflow-hidden ${o===r?"bg-brand-neon/10 border-brand-neon/50":"bg-white/5 border-white/20"}`,children:[b.jsx("div",{className:`transform transition-all duration-500 ${o===r?"scale-110":"scale-100"}`,children:b.jsx(i.Icon,{size:28,className:`
                                    transition-all duration-500
                                    ${o===r?`${i.color} drop-shadow-[0_0_8px_currentColor] animate-pulse`:"text-gray-400 animate-pulse-slow opacity-100"}
                                  `})}),b.jsx("div",{className:`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors duration-300 ${o===r?"border-brand-neon":"border-white/30"}`}),b.jsx("div",{className:`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors duration-300 ${o===r?"border-brand-neon":"border-white/30"}`})]}),b.jsxs("div",{className:"md:hidden flex-1",children:[b.jsx("div",{className:"flex items-center gap-3 mb-2",children:b.jsxs("span",{className:"font-mono text-[10px] text-gray-400 tracking-widest",children:["SERVICE_",i.id]})}),b.jsx("h3",{className:"text-2xl font-bold text-white uppercase tracking-tight leading-none",children:i.title})]})]}),b.jsxs("div",{className:"hidden md:block flex-1",children:[b.jsx("div",{className:"flex items-center gap-4 mb-2",children:b.jsxs("span",{className:"font-mono text-[10px] text-gray-400 tracking-widest",children:["SERVICE_",i.id]})}),b.jsx("h3",{className:"text-4xl font-bold text-white uppercase tracking-tight group-hover:text-white transition-colors",children:i.title})]}),b.jsx("div",{className:`w-full md:w-1/3 transition-all duration-500 ${o===r?"md:opacity-100 md:translate-x-0":"md:opacity-60 md:translate-x-4"}`,children:b.jsx("p",{className:"text-gray-300 font-light leading-relaxed text-base md:border-l md:border-white/20 md:pl-6 group-hover:border-brand-neon/50",children:i.desc})}),b.jsx("div",{className:`hidden md:flex items-center justify-center w-12 h-12 border transition-all duration-300 ${o===r?"border-brand-neon bg-brand-neon text-black rotate-0 shadow-[0_0_15px_#DE69CB]":"border-white/20 text-gray-400 -rotate-45 group-hover:border-white"}`,children:b.jsx(ry,{size:24})})]})]})},i.id))})]})})},xA=[{id:"01",title:"DIAGNOSTIC AUDIT",desc:"We dismantle your current digital presence to find leaks, inefficiencies, and missed opportunities. No sugar-coating.",output:"Deliverable: Audit Report",icon:b.jsx(zy,{size:24})},{id:"02",title:"STRATEGIC PLAN",desc:"We engineer a custom roadmap. This isn't a template; it's a battle plan tailored to your specific market mechanics.",output:"Deliverable: Strategy Doc",icon:b.jsx(Ty,{size:24})},{id:"03",title:"ACTIVE DEPLOYMENT",desc:"We execute. High-frequency content, precision ad targeting, and community engagement protocols go live.",output:"Deliverable: Campaign Launch",icon:b.jsx(e_,{size:24})},{id:"04",title:"OPTIMIZATION",desc:"We analyze the data stream. If it works, we scale it. If it doesn't, we kill it and iterate. Ruthless efficiency.",output:"Deliverable: ROI Analysis",icon:b.jsx(uy,{size:24})}],yA=()=>{const[o,t]=it.useState(null);return b.jsxs("section",{id:"process",className:"py-40 relative overflow-hidden bg-[#030303]",children:[b.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none"}),b.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10",children:[b.jsx("div",{className:"md:sticky md:top-32 h-fit",children:b.jsxs(cn,{children:[b.jsxs("div",{className:"inline-flex items-center gap-3 mb-8 px-4 py-2 border border-brand-neon/30 bg-brand-neon/5 rounded-sm",children:[b.jsx("div",{className:"w-2 h-2 bg-brand-neon animate-pulse"}),b.jsx("span",{className:"font-mono text-xs text-brand-neon tracking-[0.2em] uppercase",children:"Our Process"})]}),b.jsxs("h2",{className:"text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white leading-[0.9]",children:["HOW WE ",b.jsx("br",{}),b.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-white",children:"WORK."})]}),b.jsx("p",{className:"text-xl text-gray-300 font-light leading-relaxed max-w-lg mb-12",children:"Complexity kills momentum. We strip away the fluff and run a linear, 4-stage process designed to extract maximum value from your market."}),b.jsxs("div",{className:"hidden md:block p-6 border border-white/20 bg-black/80 font-mono text-xs text-gray-400",children:[b.jsxs("div",{className:"flex justify-between mb-2",children:[b.jsx("span",{children:"STATUS"}),b.jsx("span",{className:"text-brand-neon",children:"ONLINE"})]}),b.jsxs("div",{className:"flex justify-between mb-2",children:[b.jsx("span",{children:"Pipeline Status"}),b.jsx("span",{children:"100%"})]}),b.jsx("div",{className:"w-full h-1 bg-gray-800 mt-4",children:b.jsx("div",{className:"h-full bg-brand-neon w-[70%] animate-pulse"})})]})]})}),b.jsxs("div",{className:"relative pt-4",children:[b.jsx("div",{className:"absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/20 md:left-[23px]"}),b.jsx("div",{className:"space-y-12",children:xA.map((i,r)=>b.jsx(cn,{delay:r*100,width:"100%",children:b.jsxs("div",{className:"relative pl-16 md:pl-20 group",onMouseEnter:()=>{t(r),Xt.playHover()},onMouseLeave:()=>t(null),children:[b.jsx("div",{className:`
                            absolute left-0 md:left-1 top-0 w-10 h-10 md:w-12 md:h-12 
                            border-2 flex items-center justify-center bg-[#030303] transition-all duration-300 z-10
                            ${o===r?"border-brand-neon scale-110 shadow-[0_0_15px_#DE69CB]":"border-white/30 group-hover:border-white/60"}
                         `,children:b.jsx("span",{className:`font-mono font-bold text-sm ${o===r?"text-brand-neon":"text-gray-400"}`,children:i.id})}),b.jsxs("div",{className:`
                            relative p-8 border transition-all duration-300 bg-[#050505]
                            ${o===r?"border-brand-neon/50 bg-brand-neon/[0.04]":"border-white/20 hover:border-white/40"}
                         `,children:[b.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30"}),b.jsxs("div",{className:"flex items-start justify-between mb-4",children:[b.jsx("h3",{className:`text-2xl font-bold uppercase tracking-tight transition-colors ${o===r?"text-white":"text-gray-200"}`,children:i.title}),b.jsx("div",{className:`transition-colors ${o===r?"text-brand-neon":"text-gray-500"}`,children:i.icon})]}),b.jsx("p",{className:"text-gray-300 leading-relaxed mb-6 font-light",children:i.desc}),b.jsx("div",{className:`
                               flex items-center gap-4 py-3 px-4 border-l-2 text-sm font-mono
                               transition-colors duration-300
                               ${o===r?"bg-brand-neon/10 border-brand-neon text-brand-neon":"bg-white/5 border-white/20 text-gray-400"}
                            `,children:b.jsx("span",{className:"truncate",children:i.output})})]}),b.jsx("div",{className:`absolute left-[19px] md:left-[23px] top-12 bottom-[-48px] w-[2px] bg-brand-neon transition-all duration-500 ${o===r?"opacity-100":"opacity-0"}`})]})},r))})]})]})]})},SA=()=>{const[o,t]=it.useState(null),i=[{q:"Why hire a consultant vs in-house?",a:"Consultants bring specialized skills and objective perspective. We hit the ground running without the need for training, benefits, or HR overhead. You get a senior team for the price of a junior hire."},{q:"What deliverables can we expect?",a:"A complete strategy architecture, daily content execution, deep-dive analytics, and monthly growth reporting. You get a fully documented system, not just 'hours worked' or random posts."},{q:"How long until we see results?",a:"It depends on the vector. Paid ads can generate leads instantly. Organic social typically sees traction in month one, but compound growth (the 'hockey stick') usually activates around months 3-6 of consistent execution."},{q:"Do you handle paid advertising?",a:"Absolutely. We engineer high-ROAS campaigns across LinkedIn, Twitter/X, and Meta. We focus on lowering CPA (Cost Per Acquisition) while scaling volume, using the same creative-first approach as our organic content."},{q:"What does the onboarding process look like?",a:"Swift and surgical. We kick off with a strategy deep-dive within 48 hours. We audit your current assets, build the roadmap, and typically go live with the first wave of content within 7 days of signing."},{q:"Do you understand tech products?",a:"Yes. Our DNA is in Tech and Cybersecurity. We know the difference between a firewall, a VPN, and a zero-trust architecture. Your content will sound like it came from an engineer, not a generic marketer."},{q:"Do you offer custom enterprise packages?",a:"Yes. While we have core protocols, we engineer bespoke growth systems for enterprise clients with specific compliance, volume, or multi-region needs. Contact us for a custom scope."}];return b.jsxs("section",{id:"faq",className:"py-40 border-t border-white/5 bg-[#050505] transition-colors duration-300 relative overflow-hidden",children:[b.jsx("div",{className:"absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-neon/5 rounded-full blur-[150px] pointer-events-none"}),b.jsxs("div",{className:"max-w-4xl mx-auto px-6 relative z-10",children:[b.jsx(cn,{width:"100%",children:b.jsxs("div",{className:"mb-20 text-center md:text-left",children:[b.jsxs("h2",{className:"text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tighter uppercase",children:["Common ",b.jsx("span",{className:"text-brand-neon drop-shadow-[0_0_15px_rgba(222,105,203,0.4)]",children:"Questions"})]}),b.jsx("p",{className:"text-gray-500 font-mono text-sm tracking-[0.2em] uppercase",children:"// FAQ"})]})}),b.jsx("div",{className:"space-y-6",children:i.map((r,l)=>b.jsx(cn,{delay:l*50,width:"100%",children:b.jsxs("div",{className:`
                  group border rounded-xl overflow-hidden transition-all duration-300
                  ${o===l?"border-brand-neon bg-brand-neon/[0.03] shadow-[0_0_20px_rgba(222,105,203,0.1)]":"border-white/10 bg-white/[0.01] hover:border-white/30 hover:bg-white/[0.02]"}
                `,onMouseEnter:()=>Xt.playHover(),children:[b.jsxs("button",{className:"w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer",onClick:()=>{Xt.playClick(),t(o===l?null:l)},children:[b.jsx("span",{className:`text-lg md:text-xl font-bold transition-colors duration-300 ${o===l?"text-white":"text-gray-400 group-hover:text-white"}`,children:r.q}),b.jsx("span",{className:`
                    ml-4 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                    ${o===l?"border-brand-neon bg-brand-neon text-white rotate-180 shadow-[0_0_10px_#DE69CB]":"border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-white"}
                  `,children:b.jsx(py,{size:20})})]}),b.jsx("div",{className:`transition-all duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${o===l?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,children:b.jsx("div",{className:"px-6 pb-8 md:px-8 text-gray-300 leading-relaxed font-light text-base md:text-lg border-t border-white/5 pt-6",children:r.a})})]})},l))})]})]})},MA=[{text:"High Energy Digital took my social media profiles from zero to hero with a really solid plan of attack. Highly recommended!",author:"Rosa Maria Aguado",role:"Beal and Harlow"},{text:"These guys are really great to work with. Extremely professional and helpful when I asked them questions. Don’t look anywhere else for your digital marketing needs!",author:"Aaron Loeb",role:"NoBlueberry Label"},{text:"Results started off slow, but once they started coming through, we couldn’t stop the traffic to our site and socials! Highly recommended. Get in touch and start winning!",author:"David Lee",role:"The Safer Internet Project"}],EA=({review:o,index:t})=>{const i=it.useRef(null),[r,l]=it.useState(!1),[u,h]=it.useState(!1);return it.useEffect(()=>{if(!i.current||u)return;const d=new IntersectionObserver(([m])=>{if(m.isIntersecting){const p=300+t*200;setTimeout(()=>{l(!0),h(!0)},p)}},{threshold:.3});return d.observe(i.current),()=>d.disconnect()},[t,u]),b.jsxs("div",{ref:i,className:"relative h-full p-10 border border-white/20 bg-[#0a0a0a] hover:border-brand-neon/60 transition-all duration-300 flex flex-col justify-between group shadow-none hover:shadow-[0_0_30px_rgba(222,105,203,0.15)] rounded-2xl overflow-hidden",onMouseEnter:()=>Xt.playHover(),children:[r&&b.jsx("div",{className:"absolute inset-0 pointer-events-none z-0",children:b.jsx("div",{className:"absolute top-0 bottom-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-sweep"})}),b.jsxs("div",{className:"relative z-10 flex justify-between items-start mb-8",children:[b.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map(d=>b.jsx(By,{size:16,className:"fill-brand-neon text-brand-neon drop-shadow-[0_0_5px_rgba(222,105,203,0.5)]"},d))}),b.jsx(Cy,{size:24,className:"text-white/40 group-hover:text-brand-neon transition-colors"})]}),b.jsxs("p",{className:"relative z-10 text-lg md:text-xl font-light text-white leading-relaxed mb-10",children:['"',o.text,'"']}),b.jsxs("div",{className:"relative z-10 border-t border-white/20 pt-6 mt-auto",children:[b.jsx("div",{className:"font-bold text-white text-lg mb-1 group-hover:text-brand-neon transition-colors",children:o.author}),b.jsx("div",{className:"font-mono text-xs text-gray-400 uppercase tracking-[0.2em]",children:o.role})]})]})},bA=()=>b.jsxs("section",{id:"testimonials",className:"py-40 bg-[#050505] relative border-t border-white/20 overflow-hidden transition-colors duration-300",children:[b.jsx("div",{className:"absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none"}),b.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[b.jsx("div",{className:"flex items-center justify-between mb-20",children:b.jsx(cn,{children:b.jsxs("h2",{className:"text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase flex items-center gap-6 drop-shadow-md",children:[b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"absolute inset-0 bg-brand-neon/50 blur-xl rounded-full animate-pulse"}),b.jsx(Uy,{className:"text-brand-neon relative z-10",size:32})]}),"Client ",b.jsx("span",{className:"text-gray-400",children:"Reviews"})]})})}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:MA.map((o,t)=>b.jsx(cn,{delay:t*150,width:"100%",children:b.jsx(EA,{review:o,index:t})},t))})]})]}),TA=()=>{const[o,t]=it.useState(!1),i=()=>{Xt.playClick(),navigator.clipboard.writeText("clientservices@highenergydigital.com"),t(!0),setTimeout(()=>t(!1),2e3)},r=[{name:"Instagram",url:"https://instagram.com/highenergydigital",Icon:Sy},{name:"LinkedIn",url:"https://www.linkedin.com/company/high-energy-digital/",Icon:Ey},{name:"Twitter",url:"https://x.com/highenergydigit?s=21",Icon:Vy}];return b.jsxs("section",{id:"contact",className:"py-32 relative overflow-hidden bg-[#030303] border-t border-white/20 transition-colors duration-300",children:[b.jsx("div",{className:"absolute top-0 right-0 w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"}),b.jsx("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",children:[b.jsxs("div",{children:[b.jsxs(cn,{children:[b.jsxs("div",{className:"inline-flex items-center gap-2 mb-6 px-3 py-1 border border-brand-neon/40 bg-brand-neon/10 rounded text-brand-neon font-mono text-xs tracking-widest uppercase",children:[b.jsx("div",{className:"w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse"}),"Contact Us"]}),b.jsxs("h2",{className:"text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none",children:["Start Your ",b.jsx("br",{}),b.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-cyan",children:"Project."})]}),b.jsx("p",{className:"text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-md",children:"Stop shouting into the void. Send us a message and let's discuss your growth."})]}),b.jsx(cn,{delay:200,children:b.jsxs("div",{children:[b.jsx("h4",{className:"text-gray-400 font-mono text-xs uppercase tracking-[0.2em] mb-6",children:"Social Media"}),b.jsx("div",{className:"flex gap-4",children:r.map(l=>b.jsx("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5 hover:bg-brand-neon hover:border-brand-neon hover:text-black hover:shadow-[0_0_20px_#DE69CB] transition-all duration-300 group","aria-label":l.name,onMouseEnter:()=>Xt.playHover(),onClick:()=>Xt.playClick(),children:b.jsx(l.Icon,{size:20,className:"transition-transform duration-300 group-hover:scale-110"})},l.name))})]})})]}),b.jsx(cn,{delay:100,width:"100%",children:b.jsxs("div",{className:"relative group",children:[b.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-br from-brand-neon to-brand-cyan opacity-40 blur-lg group-hover:opacity-60 transition duration-1000"}),b.jsxs("div",{className:"relative bg-[#050505] border border-white/20 p-10 md:p-16 rounded-xl overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]",children:[b.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0 opacity-20"}),b.jsxs("div",{className:"relative z-10 w-full max-w-md",children:[b.jsx("div",{className:"w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-brand-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]",children:b.jsx($0,{size:40,className:"text-brand-cyan"})}),b.jsx("h3",{className:"text-white font-bold text-2xl uppercase tracking-widest mb-2",children:"Get In Touch"}),b.jsx("p",{className:"text-gray-400 font-mono text-xs mb-10 tracking-widest",children:"We reply within 24 hours."}),b.jsxs("div",{className:"flex flex-col gap-4",children:[b.jsx("a",{href:"mailto:clientservices@highenergydigital.com",className:"w-full group/btn",children:b.jsxs(t_,{className:"w-full flex justify-center py-6",children:["EMAIL US NOW ",b.jsx(Q0,{className:"ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"})]})}),b.jsx("button",{onClick:i,onMouseEnter:()=>Xt.playHover(),className:"w-full py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-gray-300 hover:text-white transition-all uppercase tracking-widest font-mono text-xs flex items-center justify-center gap-3 rounded-sm active:scale-[0.98]",children:o?b.jsxs(b.Fragment,{children:["COPIED TO CLIPBOARD ",b.jsx(dy,{size:14,className:"text-green-500"})]}):b.jsxs(b.Fragment,{children:["clientservices@highenergydigital.com ",b.jsx(gy,{size:14})]})})]})]})]})]})})]})})]})},AA=()=>b.jsx("footer",{className:"w-full bg-[#030303] border-t border-white/10 py-8 md:py-10 relative z-20",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0",children:[b.jsxs("div",{className:"text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase font-medium",children:["© ",new Date().getFullYear()," High Energy Digital. Engineered in Australia."]}),b.jsxs("div",{className:"group flex items-center gap-3 cursor-default",onMouseEnter:()=>Xt.playHover(),children:[b.jsxs("div",{className:"relative flex h-1.5 w-1.5 md:h-2 md:w-2",children:[b.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-neon opacity-75"}),b.jsx("span",{className:"relative inline-flex rounded-full h-full w-full bg-brand-neon"})]}),b.jsx("span",{className:"text-white font-mono text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300 group-hover:text-brand-neon group-hover:drop-shadow-[0_0_8px_rgba(222,105,203,0.8)]",children:"All Systems Nominal"})]})]})}),RA=()=>{const o=it.useRef(null),[t,i]=it.useState(!1);return it.useEffect(()=>{let r;const l=d=>{cancelAnimationFrame(r),r=requestAnimationFrame(()=>{o.current&&(o.current.style.transform=`translate(${d.clientX}px, ${d.clientY}px)`)})},u=()=>i(!0),h=()=>i(!1);return window.addEventListener("mousemove",l),window.addEventListener("mousedown",u),window.addEventListener("mouseup",h),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mousedown",u),window.removeEventListener("mouseup",h),cancelAnimationFrame(r)}},[]),b.jsxs(b.Fragment,{children:[b.jsx("style",{children:`
        @media (pointer: fine) {
          body { cursor: none; }
        }
      `}),b.jsxs("div",{ref:o,className:"fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference will-change-transform",style:{transform:"translate(-100px, -100px)"},children:[b.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-[1px] bg-white/50"}),b.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/50"}),b.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand-neon transition-all duration-100 ${t?"w-2 h-2 bg-brand-neon":"w-4 h-4 bg-transparent"}`})]})]})},wA=()=>{const[o,t]=it.useState(!1);it.useEffect(()=>{const r=()=>{window.scrollY>500?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=()=>{Xt.playClick(),window.scrollTo({top:0,behavior:"smooth"})};return b.jsx("div",{className:`fixed bottom-10 right-10 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${o?"translate-y-0 opacity-100":"translate-y-32 opacity-0 pointer-events-none"}`,children:b.jsxs("button",{onClick:i,onMouseEnter:()=>Xt.playHover(),className:"group relative w-14 h-14 flex items-center justify-center bg-black border border-brand-neon/40 hover:border-brand-neon transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.8)]","aria-label":"Return to top",children:[b.jsx("div",{className:"absolute inset-0 bg-brand-neon/5 group-hover:bg-brand-neon/10 transition-colors duration-300"}),b.jsx(ly,{size:20,className:"text-white group-hover:text-brand-neon transition-all duration-300 group-hover:-translate-y-1",strokeWidth:2}),b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-neon opacity-100"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-neon opacity-100"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),b.jsx("div",{className:"absolute right-full mr-6 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none",children:b.jsxs("div",{className:"flex items-center gap-3 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out",children:[b.jsx("span",{className:"h-px w-8 bg-brand-neon"}),b.jsx("span",{className:"font-mono text-xs text-brand-neon font-bold tracking-widest whitespace-nowrap bg-black px-2 py-1 border border-brand-neon/30",children:"RTB [TOP]"})]})})]})})},CA=()=>{const o=it.useRef(null);return it.useEffect(()=>{let t;const i=r=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{o.current&&(o.current.style.background=`radial-gradient(600px circle at ${r.clientX}px ${r.clientY}px, rgba(222, 105, 203, 0.04), transparent 40%)`)})};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i),cancelAnimationFrame(t)}},[]),b.jsx("div",{ref:o,className:"fixed inset-0 z-[1] pointer-events-none mix-blend-screen",style:{background:"radial-gradient(600px circle at 50% 50%, rgba(222, 105, 203, 0.04), transparent 40%)"}})},DA=()=>{const o=it.useMemo(()=>["#000000","#DE69CB","#00f0ff"],[]);return it.useEffect(()=>{document.documentElement.classList.add("dark")},[]),b.jsx(b.Fragment,{children:b.jsxs("div",{className:"min-h-screen bg-[#030303] text-white overflow-x-hidden font-sans selection:bg-brand-neon selection:text-white relative",children:[b.jsx("div",{className:"fixed inset-0 z-0",children:b.jsx(mA,{className:"w-full h-full",colors:o,mouseForce:15,cursorSize:200,viscous:20,dt:.015,autoSpeed:.1,resolution:.2,iterationsViscous:10,iterationsPoisson:10})}),b.jsx(CA,{}),b.jsx(RA,{}),b.jsx($y,{}),b.jsxs("main",{className:"relative z-10",children:[b.jsx(tS,{}),b.jsx(vA,{}),b.jsx(yA,{}),b.jsx(gA,{}),b.jsx(bA,{}),b.jsx(SA,{}),b.jsx(TA,{}),b.jsx(AA,{})]}),b.jsx(wA,{})]})})},O_=document.getElementById("root");if(!O_)throw new Error("Could not find root element to mount to");const LA=Kx.createRoot(O_);LA.render(b.jsx(Z0.StrictMode,{children:b.jsx(DA,{})}));
