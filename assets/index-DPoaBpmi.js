(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var b0={exports:{}},ac={},C0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),z_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),X_=Symbol.for("react.forward_ref"),j_=Symbol.for("react.suspense"),Y_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),np=Symbol.iterator;function q_(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var R0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P0=Object.assign,L0={};function $s(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||R0}$s.prototype.isReactComponent={};$s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D0(){}D0.prototype=$s.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=L0,this.updater=n||R0}var Lh=Ph.prototype=new D0;Lh.constructor=Ph;P0(Lh,$s.prototype);Lh.isPureReactComponent=!0;var ip=Array.isArray,I0=Object.prototype.hasOwnProperty,Dh={current:null},N0={key:!0,ref:!0,__self:!0,__source:!0};function U0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)I0.call(e,i)&&!N0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ca,type:t,key:s,ref:o,props:r,_owner:Dh.current}}function Z_(t,e){return{$$typeof:ca,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===ca}function K_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rp=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K_(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ca:case z_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Nc(o,0):i,ip(r)?(n="",t!=null&&(n=t.replace(rp,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Ih(r)&&(r=Z_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(rp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ip(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Nc(s,a);o+=dl(s,e,n,l,r)}else if(l=q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},pl={transition:null},Q_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Dh};function O0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=$s;Ye.Fragment=B_;Ye.Profiler=V_;Ye.PureComponent=Ph;Ye.StrictMode=H_;Ye.Suspense=j_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q_;Ye.act=O0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=P0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)I0.call(e,l)&&!N0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ca,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};Ye.createElement=U0;Ye.createFactory=function(t){var e=U0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:X_,render:t}};Ye.isValidElement=Ih;Ye.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:J_}};Ye.memo=function(t,e){return{$$typeof:Y_,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};Ye.unstable_act=O0;Ye.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ye.useContext=function(t){return sn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ye.useId=function(){return sn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ye.useRef=function(t){return sn.current.useRef(t)};Ye.useState=function(t){return sn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return sn.current.useTransition()};Ye.version="18.3.1";C0.exports=Ye;var _t=C0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=_t,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),ix=Object.prototype.hasOwnProperty,rx=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function F0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ix.call(e,i)&&!sx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:tx,type:t,key:s,ref:o,props:r,_owner:rx.current}}ac.Fragment=nx;ac.jsx=F0;ac.jsxs=F0;b0.exports=ac;var W=b0.exports,k0={exports:{}},wn={},z0={exports:{}},B0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var ee=U.length;U.push(q);e:for(;0<ee;){var le=ee-1>>>1,be=U[le];if(0<r(be,q))U[le]=q,U[ee]=be,ee=le;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var q=U[0],ee=U.pop();if(ee!==q){U[0]=ee;e:for(var le=0,be=U.length,Ze=be>>>1;le<Ze;){var K=2*(le+1)-1,oe=U[K],ye=K+1,ce=U[ye];if(0>r(oe,ee))ye<be&&0>r(ce,oe)?(U[le]=ce,U[ye]=ee,le=ye):(U[le]=oe,U[K]=ee,le=K);else if(ye<be&&0>r(ce,ee))U[le]=ce,U[ye]=ee,le=ye;else break e}}return q}function r(U,q){var ee=U.sortIndex-q.sortIndex;return ee!==0?ee:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=U)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function x(U){if(y=!1,_(U),!g)if(n(l)!==null)g=!0,V(C);else{var q=n(c);q!==null&&$(x,q.startTime-U)}}function C(U,q){g=!1,y&&(y=!1,f(R),R=-1),p=!0;var ee=d;try{for(_(q),h=n(l);h!==null&&(!(h.expirationTime>q)||U&&!E());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var be=le(h.expirationTime<=q);q=t.unstable_now(),typeof be=="function"?h.callback=be:h===n(l)&&i(l),_(q)}else i(l);h=n(l)}if(h!==null)var Ze=!0;else{var K=n(c);K!==null&&$(x,K.startTime-q),Ze=!1}return Ze}finally{h=null,d=ee,p=!1}}var A=!1,T=null,R=-1,M=5,S=-1;function E(){return!(t.unstable_now()-S<M)}function I(){if(T!==null){var U=t.unstable_now();S=U;var q=!0;try{q=T(!0,U)}finally{q?L():(A=!1,T=null)}}else A=!1}var L;if(typeof m=="function")L=function(){m(I)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,k=N.port2;N.port1.onmessage=I,L=function(){k.postMessage(null)}}else L=function(){v(I,0)};function V(U){T=U,A||(A=!0,L())}function $(U,q){R=v(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,V(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var ee=d;d=q;try{return U()}finally{d=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=d;d=U;try{return q()}finally{d=ee}},t.unstable_scheduleCallback=function(U,q,ee){var le=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?le+ee:le):ee=le,U){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,U={id:u++,callback:q,priorityLevel:U,startTime:ee,expirationTime:be,sortIndex:-1},ee>le?(U.sortIndex=ee,e(c,U),n(l)===null&&U===n(c)&&(y?(f(R),R=-1):y=!0,$(x,ee-le))):(U.sortIndex=be,e(l,U),g||p||(g=!0,V(C))),U},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(U){var q=d;return function(){var ee=d;d=q;try{return U.apply(this,arguments)}finally{d=ee}}}})(B0);z0.exports=B0;var ox=z0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=_t,En=ox;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,Ho={};function Xr(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(Ho[t]=e,t=0;t<e.length;t++)H0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vu=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function cx(t){return Vu.call(op,t)?!0:Vu.call(sp,t)?!1:lx.test(t)?op[t]=!0:(sp[t]=!0,!1)}function ux(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fx(t,e,n,i){if(e===null||typeof e>"u"||ux(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nh,Uh);Vt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nh,Uh);Vt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nh,Uh);Vt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Oh(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fx(e,n,r,i)&&(n=null),i||r===null?cx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),V0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),zh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),W0=Symbol.for("react.offscreen"),ap=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Uc;function Eo(t){if(Uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uc=e&&e[1]||""}return`
`+Uc+t}var Oc=!1;function Fc(t,e){if(!t||Oc)return"";Oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Eo(t):""}function hx(t){switch(t.tag){case 5:return Eo(t.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Gu:return"Profiler";case Fh:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case V0:return(t._context.displayName||"Context")+".Provider";case kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zh:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function dx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=X0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=px(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=X0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yu(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y0(t,e){e=e.checked,e!=null&&Oh(t,"checked",e,!1)}function $u(t,e){Y0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&qu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qu(t,e,n){(e!=="number"||Dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wo=Array.isArray;function As(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(wo(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function $0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ku(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,Z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(Ro).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ro[e]=Ro[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ro.hasOwnProperty(t)&&Ro[t]?(""+e).trim():e+"px"}function J0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=K0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var gx=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ef=null;function Bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tf=null,bs=null,Cs=null;function hp(t){if(t=ha(t)){if(typeof tf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=hc(e),tf(t.stateNode,t.type,e))}}function Q0(t){bs?Cs?Cs.push(t):Cs=[t]:bs=t}function eg(){if(bs){var t=bs,e=Cs;if(Cs=bs=null,hp(t),e)for(t=0;t<e.length;t++)hp(e[t])}}function tg(t,e){return t(e)}function ng(){}var kc=!1;function ig(t,e,n){if(kc)return t(e,n);kc=!0;try{return tg(t,e,n)}finally{kc=!1,(bs!==null||Cs!==null)&&(ng(),eg())}}function Go(t,e){var n=t.stateNode;if(n===null)return null;var i=hc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var nf=!1;if(Ai)try{var so={};Object.defineProperty(so,"passive",{get:function(){nf=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{nf=!1}function vx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Po=!1,Il=null,Nl=!1,rf=null,_x={onError:function(t){Po=!0,Il=t}};function xx(t,e,n,i,r,s,o,a,l){Po=!1,Il=null,vx.apply(_x,arguments)}function yx(t,e,n,i,r,s,o,a,l){if(xx.apply(this,arguments),Po){if(Po){var c=Il;Po=!1,Il=null}else throw Error(re(198));Nl||(Nl=!0,rf=c)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(jr(t)!==t)throw Error(re(188))}function Sx(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return dp(r),t;if(s===i)return dp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function sg(t){return t=Sx(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var ag=En.unstable_scheduleCallback,pp=En.unstable_cancelCallback,Mx=En.unstable_shouldYield,Ex=En.unstable_requestPaint,Tt=En.unstable_now,wx=En.unstable_getCurrentPriorityLevel,Hh=En.unstable_ImmediatePriority,lg=En.unstable_UserBlockingPriority,Ul=En.unstable_NormalPriority,Tx=En.unstable_LowPriority,cg=En.unstable_IdlePriority,lc=null,oi=null;function Ax(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:Rx,bx=Math.log,Cx=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(bx(t)/Cx|0)|0}var Ea=64,wa=4194304;function To(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=To(a):(s&=o,s!==0&&(i=To(s)))}else o=n&~r,o!==0?i=To(o):s!==0&&(i=To(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ug(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function Dx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,Gh,dg,pg,mg,of=!1,Ta=[],Zi=null,Ki=null,Ji=null,Wo=new Map,Xo=new Map,Xi=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ha(e),e!==null&&Gh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Nx(t,e,n,i,r){switch(e){case"focusin":return Zi=oo(Zi,t,e,n,i,r),!0;case"dragenter":return Ki=oo(Ki,t,e,n,i,r),!0;case"mouseover":return Ji=oo(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wo.set(s,oo(Wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Xo.set(s,oo(Xo.get(s)||null,t,e,n,i,r)),!0}return!1}function gg(t){var e=Rr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=rg(n),e!==null){t.blockedOn=e,mg(t.priority,function(){dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ef=i,n.target.dispatchEvent(i),ef=null}else return e=ha(n),e!==null&&Gh(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){ml(t)&&n.delete(e)}function Ux(){of=!1,Zi!==null&&ml(Zi)&&(Zi=null),Ki!==null&&ml(Ki)&&(Ki=null),Ji!==null&&ml(Ji)&&(Ji=null),Wo.forEach(gp),Xo.forEach(gp)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,of||(of=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,Ux)))}function jo(t){function e(r){return ao(r,t)}if(0<Ta.length){ao(Ta[0],t);for(var n=1;n<Ta.length;n++){var i=Ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&ao(Zi,t),Ki!==null&&ao(Ki,t),Ji!==null&&ao(Ji,t),Wo.forEach(e),Xo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&Xi.shift()}var Rs=Li.ReactCurrentBatchConfig,Fl=!0;function Ox(t,e,n,i){var r=ot,s=Rs.transition;Rs.transition=null;try{ot=1,Wh(t,e,n,i)}finally{ot=r,Rs.transition=s}}function Fx(t,e,n,i){var r=ot,s=Rs.transition;Rs.transition=null;try{ot=4,Wh(t,e,n,i)}finally{ot=r,Rs.transition=s}}function Wh(t,e,n,i){if(Fl){var r=af(t,e,n,i);if(r===null)qc(t,e,i,kl,n),mp(t,i);else if(Nx(r,t,e,n,i))i.stopPropagation();else if(mp(t,i),e&4&&-1<Ix.indexOf(t)){for(;r!==null;){var s=ha(r);if(s!==null&&hg(s),s=af(t,e,n,i),s===null&&qc(t,e,i,kl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var kl=null;function af(t,e,n,i){if(kl=null,t=Bh(i),t=Rr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kl=t,null}function vg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case Hh:return 1;case lg:return 4;case Ul:case Tx:return 16;case cg:return 536870912;default:return 16}default:return 16}}var $i=null,Xh=null,gl=null;function _g(){if(gl)return gl;var t,e=Xh,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function vp(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:vp,this.isPropagationStopped=vp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jh=Tn(qs),fa=Mt({},qs,{view:0,detail:0}),kx=Tn(fa),Bc,Hc,lo,cc=Mt({},fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Bc=t.screenX-lo.screenX,Hc=t.screenY-lo.screenY):Hc=Bc=0,lo=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),_p=Tn(cc),zx=Mt({},cc,{dataTransfer:0}),Bx=Tn(zx),Hx=Mt({},fa,{relatedTarget:0}),Vc=Tn(Hx),Vx=Mt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Gx=Tn(Vx),Wx=Mt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xx=Tn(Wx),jx=Mt({},qs,{data:0}),xp=Tn(jx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qx[t])?!!e[t]:!1}function Yh(){return Zx}var Kx=Mt({},fa,{key:function(t){if(t.key){var e=Yx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=Tn(Kx),Qx=Mt({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yp=Tn(Qx),ey=Mt({},fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),ty=Tn(ey),ny=Mt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iy=Tn(ny),ry=Mt({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sy=Tn(ry),oy=[9,13,27,32],$h=Ai&&"CompositionEvent"in window,Lo=null;Ai&&"documentMode"in document&&(Lo=document.documentMode);var ay=Ai&&"TextEvent"in window&&!Lo,xg=Ai&&(!$h||Lo&&8<Lo&&11>=Lo),Sp=" ",Mp=!1;function yg(t,e){switch(t){case"keyup":return oy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function ly(t,e){switch(t){case"compositionend":return Sg(e);case"keypress":return e.which!==32?null:(Mp=!0,Sp);case"textInput":return t=e.data,t===Sp&&Mp?null:t;default:return null}}function cy(t,e){if(ds)return t==="compositionend"||!$h&&yg(t,e)?(t=_g(),gl=Xh=$i=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uy[t.type]:e==="textarea"}function Mg(t,e,n,i){Q0(i),e=zl(e,"onChange"),0<e.length&&(n=new jh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Do=null,Yo=null;function fy(t){Ig(t,0)}function uc(t){var e=gs(t);if(j0(e))return t}function hy(t,e){if(t==="change")return e}var Eg=!1;if(Ai){var Gc;if(Ai){var Wc="oninput"in document;if(!Wc){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),Wc=typeof wp.oninput=="function"}Gc=Wc}else Gc=!1;Eg=Gc&&(!document.documentMode||9<document.documentMode)}function Tp(){Do&&(Do.detachEvent("onpropertychange",wg),Yo=Do=null)}function wg(t){if(t.propertyName==="value"&&uc(Yo)){var e=[];Mg(e,Yo,t,Bh(t)),ig(fy,e)}}function dy(t,e,n){t==="focusin"?(Tp(),Do=e,Yo=n,Do.attachEvent("onpropertychange",wg)):t==="focusout"&&Tp()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Yo)}function my(t,e){if(t==="click")return uc(e)}function gy(t,e){if(t==="input"||t==="change")return uc(e)}function vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:vy;function $o(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function Ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bp(t,e){var n=Ap(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ap(n)}}function Tg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Tg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=Dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dl(t.document)}return e}function qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _y(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Tg(n.ownerDocument.documentElement,n)){if(i!==null&&qh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bp(n,s);var o=bp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=Ai&&"documentMode"in document&&11>=document.documentMode,ps=null,lf=null,Io=null,cf=!1;function Cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cf||ps==null||ps!==Dl(i)||(i=ps,"selectionStart"in i&&qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&$o(Io,i)||(Io=i,i=zl(lf,"onSelect"),0<i.length&&(e=new jh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ps)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ms={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Xc={},bg={};Ai&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function fc(t){if(Xc[t])return Xc[t];if(!ms[t])return t;var e=ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bg)return Xc[t]=e[n];return t}var Cg=fc("animationend"),Rg=fc("animationiteration"),Pg=fc("animationstart"),Lg=fc("transitionend"),Dg=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){Dg.set(t,e),Xr(e,[t])}for(var jc=0;jc<Rp.length;jc++){var Yc=Rp[jc],yy=Yc.toLowerCase(),Sy=Yc[0].toUpperCase()+Yc.slice(1);dr(yy,"on"+Sy)}dr(Cg,"onAnimationEnd");dr(Rg,"onAnimationIteration");dr(Pg,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Lg,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function Pp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,yx(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Pp(r,a,c),s=l}}}if(Nl)throw t=rf,Nl=!1,rf=null,t}function mt(t,e){var n=e[pf];n===void 0&&(n=e[pf]=new Set);var i=t+"__bubble";n.has(i)||(Ng(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),Ng(n,t,i,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function qo(t){if(!t[Ca]){t[Ca]=!0,H0.forEach(function(n){n!=="selectionchange"&&(My.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,$c("selectionchange",!1,e))}}function Ng(t,e,n,i){switch(vg(e)){case 1:var r=Ox;break;case 4:r=Fx;break;default:r=Wh}n=r.bind(null,e,n,t),r=void 0,!nf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ig(function(){var c=s,u=Bh(n),h=[];e:{var d=Dg.get(t);if(d!==void 0){var p=jh,g=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":p=Jx;break;case"focusin":g="focus",p=Vc;break;case"focusout":g="blur",p=Vc;break;case"beforeblur":case"afterblur":p=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ty;break;case Cg:case Rg:case Pg:p=Gx;break;case Lg:p=iy;break;case"scroll":p=kx;break;case"wheel":p=sy;break;case"copy":case"cut":case"paste":p=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yp}var y=(e&4)!==0,v=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,_;m!==null;){_=m;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,f!==null&&(x=Go(m,f),x!=null&&y.push(Zo(m,x,_)))),v)break;m=m.return}0<y.length&&(d=new p(d,g,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==ef&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[bi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Rr(g):null,g!==null&&(v=jr(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=_p,x="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=yp,x="onPointerLeave",f="onPointerEnter",m="pointer"),v=p==null?d:gs(p),_=g==null?d:gs(g),d=new y(x,m+"leave",p,n,u),d.target=v,d.relatedTarget=_,x=null,Rr(u)===c&&(y=new y(f,m+"enter",g,n,u),y.target=_,y.relatedTarget=v,x=y),v=x,p&&g)t:{for(y=p,f=g,m=0,_=y;_;_=qr(_))m++;for(_=0,x=f;x;x=qr(x))_++;for(;0<m-_;)y=qr(y),m--;for(;0<_-m;)f=qr(f),_--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=qr(y),f=qr(f)}y=null}else y=null;p!==null&&Lp(h,d,p,y,!1),g!==null&&v!==null&&Lp(h,v,g,y,!0)}}e:{if(d=c?gs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=hy;else if(Ep(d))if(Eg)C=gy;else{C=py;var A=dy}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=my);if(C&&(C=C(t,c))){Mg(h,C,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&qu(d,"number",d.value)}switch(A=c?gs(c):window,t){case"focusin":(Ep(A)||A.contentEditable==="true")&&(ps=A,lf=c,Io=null);break;case"focusout":Io=lf=ps=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Cp(h,n,u);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Cp(h,n,u)}var T;if($h)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ds?yg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(xg&&n.locale!=="ko"&&(ds||R!=="onCompositionStart"?R==="onCompositionEnd"&&ds&&(T=_g()):($i=u,Xh="value"in $i?$i.value:$i.textContent,ds=!0)),A=zl(c,R),0<A.length&&(R=new xp(R,t,null,n,u),h.push({event:R,listeners:A}),T?R.data=T:(T=Sg(n),T!==null&&(R.data=T)))),(T=ay?ly(t,n):cy(t,n))&&(c=zl(c,"onBeforeInput"),0<c.length&&(u=new xp("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=T))}Ig(h,e)})}function Zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Go(t,n),s!=null&&i.unshift(Zo(t,s,r)),s=Go(t,e),s!=null&&i.push(Zo(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Go(n,s),l!=null&&o.unshift(Zo(n,l,a))):r||(l=Go(n,s),l!=null&&o.push(Zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ey=/\r\n?/g,wy=/\u0000|\uFFFD/g;function Dp(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(wy,"")}function Ra(t,e,n){if(e=Dp(e),Dp(t)!==e&&n)throw Error(re(425))}function Bl(){}var uf=null,ff=null;function hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var df=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,Ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(by)}:df;function by(t){setTimeout(function(){throw t})}function Zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),jo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);jo(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),ri="__reactFiber$"+Zs,Ko="__reactProps$"+Zs,bi="__reactContainer$"+Zs,pf="__reactEvents$"+Zs,Cy="__reactListeners$"+Zs,Ry="__reactHandles$"+Zs;function Rr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Np(t);t!==null;){if(n=t[ri])return n;t=Np(t)}return e}t=n,n=t.parentNode}return null}function ha(t){return t=t[ri]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function hc(t){return t[Ko]||null}var mf=[],vs=-1;function pr(t){return{current:t}}function gt(t){0>vs||(t.current=mf[vs],mf[vs]=null,vs--)}function ht(t,e){vs++,mf[vs]=t.current,t.current=e}var cr={},Qt=pr(cr),hn=pr(!1),Fr=cr;function Os(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function Hl(){gt(hn),gt(Qt)}function Up(t,e,n){if(Qt.current!==cr)throw Error(re(168));ht(Qt,e),ht(hn,n)}function Ug(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,dx(t)||"Unknown",r));return Mt({},n,i)}function Vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Fr=Qt.current,ht(Qt,t),ht(hn,hn.current),!0}function Op(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Ug(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,gt(hn),gt(Qt),ht(Qt,t)):gt(hn),ht(hn,n)}var xi=null,dc=!1,Kc=!1;function Og(t){xi===null?xi=[t]:xi.push(t)}function Py(t){dc=!0,Og(t)}function mr(){if(!Kc&&xi!==null){Kc=!0;var t=0,e=ot;try{var n=xi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,dc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),ag(Hh,mr),r}finally{ot=e,Kc=!1}}return null}var _s=[],xs=0,Gl=null,Wl=0,Cn=[],Rn=0,kr=null,yi=1,Si="";function Er(t,e){_s[xs++]=Wl,_s[xs++]=Gl,Gl=t,Wl=e}function Fg(t,e,n){Cn[Rn++]=yi,Cn[Rn++]=Si,Cn[Rn++]=kr,kr=t;var i=yi;t=Si;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-qn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Zh(t){t.return!==null&&(Er(t,1),Fg(t,1,0))}function Kh(t){for(;t===Gl;)Gl=_s[--xs],_s[xs]=null,Wl=_s[--xs],_s[xs]=null;for(;t===kr;)kr=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null,yi=Cn[--Rn],Cn[Rn]=null}var Mn=null,Sn=null,vt=!1,jn=null;function kg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function gf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vf(t){if(vt){var e=Sn;if(e){var n=e;if(!Fp(t,e)){if(gf(t))throw Error(re(418));e=Qi(n.nextSibling);var i=Mn;e&&Fp(t,e)?kg(i,n):(t.flags=t.flags&-4097|2,vt=!1,Mn=t)}}else{if(gf(t))throw Error(re(418));t.flags=t.flags&-4097|2,vt=!1,Mn=t}}}function kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Pa(t){if(t!==Mn)return!1;if(!vt)return kp(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hf(t.type,t.memoizedProps)),e&&(e=Sn)){if(gf(t))throw zg(),Error(re(418));for(;e;)kg(t,e),e=Qi(e.nextSibling)}if(kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?Qi(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=Sn;t;)t=Qi(t.nextSibling)}function Fs(){Sn=Mn=null,vt=!1}function Jh(t){jn===null?jn=[t]:jn.push(t)}var Ly=Li.ReactCurrentBatchConfig;function co(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zp(t){var e=t._init;return e(t._payload)}function Bg(t){function e(f,m){if(t){var _=f.deletions;_===null?(f.deletions=[m],f.flags|=16):_.push(m)}}function n(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function i(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function r(f,m){return f=ir(f,m),f.index=0,f.sibling=null,f}function s(f,m,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<m?(f.flags|=2,m):_):(f.flags|=2,m)):(f.flags|=1048576,m)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,m,_,x){return m===null||m.tag!==6?(m=ru(_,f.mode,x),m.return=f,m):(m=r(m,_),m.return=f,m)}function l(f,m,_,x){var C=_.type;return C===hs?u(f,m,_.props.children,x,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&zp(C)===m.type)?(x=r(m,_.props),x.ref=co(f,m,_),x.return=f,x):(x=wl(_.type,_.key,_.props,null,f.mode,x),x.ref=co(f,m,_),x.return=f,x)}function c(f,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=su(_,f.mode,x),m.return=f,m):(m=r(m,_.children||[]),m.return=f,m)}function u(f,m,_,x,C){return m===null||m.tag!==7?(m=Or(_,f.mode,x,C),m.return=f,m):(m=r(m,_),m.return=f,m)}function h(f,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ru(""+m,f.mode,_),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return _=wl(m.type,m.key,m.props,null,f.mode,_),_.ref=co(f,null,m),_.return=f,_;case fs:return m=su(m,f.mode,_),m.return=f,m;case Gi:var x=m._init;return h(f,x(m._payload),_)}if(wo(m)||ro(m))return m=Or(m,f.mode,_,null),m.return=f,m;La(f,m)}return null}function d(f,m,_,x){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(f,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:return _.key===C?l(f,m,_,x):null;case fs:return _.key===C?c(f,m,_,x):null;case Gi:return C=_._init,d(f,m,C(_._payload),x)}if(wo(_)||ro(_))return C!==null?null:u(f,m,_,x,null);La(f,_)}return null}function p(f,m,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(_)||null,a(m,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ya:return f=f.get(x.key===null?_:x.key)||null,l(m,f,x,C);case fs:return f=f.get(x.key===null?_:x.key)||null,c(m,f,x,C);case Gi:var A=x._init;return p(f,m,_,A(x._payload),C)}if(wo(x)||ro(x))return f=f.get(_)||null,u(m,f,x,C,null);La(m,x)}return null}function g(f,m,_,x){for(var C=null,A=null,T=m,R=m=0,M=null;T!==null&&R<_.length;R++){T.index>R?(M=T,T=null):M=T.sibling;var S=d(f,T,_[R],x);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(f,T),m=s(S,m,R),A===null?C=S:A.sibling=S,A=S,T=M}if(R===_.length)return n(f,T),vt&&Er(f,R),C;if(T===null){for(;R<_.length;R++)T=h(f,_[R],x),T!==null&&(m=s(T,m,R),A===null?C=T:A.sibling=T,A=T);return vt&&Er(f,R),C}for(T=i(f,T);R<_.length;R++)M=p(T,f,R,_[R],x),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?R:M.key),m=s(M,m,R),A===null?C=M:A.sibling=M,A=M);return t&&T.forEach(function(E){return e(f,E)}),vt&&Er(f,R),C}function y(f,m,_,x){var C=ro(_);if(typeof C!="function")throw Error(re(150));if(_=C.call(_),_==null)throw Error(re(151));for(var A=C=null,T=m,R=m=0,M=null,S=_.next();T!==null&&!S.done;R++,S=_.next()){T.index>R?(M=T,T=null):M=T.sibling;var E=d(f,T,S.value,x);if(E===null){T===null&&(T=M);break}t&&T&&E.alternate===null&&e(f,T),m=s(E,m,R),A===null?C=E:A.sibling=E,A=E,T=M}if(S.done)return n(f,T),vt&&Er(f,R),C;if(T===null){for(;!S.done;R++,S=_.next())S=h(f,S.value,x),S!==null&&(m=s(S,m,R),A===null?C=S:A.sibling=S,A=S);return vt&&Er(f,R),C}for(T=i(f,T);!S.done;R++,S=_.next())S=p(T,f,R,S.value,x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?R:S.key),m=s(S,m,R),A===null?C=S:A.sibling=S,A=S);return t&&T.forEach(function(I){return e(f,I)}),vt&&Er(f,R),C}function v(f,m,_,x){if(typeof _=="object"&&_!==null&&_.type===hs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:e:{for(var C=_.key,A=m;A!==null;){if(A.key===C){if(C=_.type,C===hs){if(A.tag===7){n(f,A.sibling),m=r(A,_.props.children),m.return=f,f=m;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&zp(C)===A.type){n(f,A.sibling),m=r(A,_.props),m.ref=co(f,A,_),m.return=f,f=m;break e}n(f,A);break}else e(f,A);A=A.sibling}_.type===hs?(m=Or(_.props.children,f.mode,x,_.key),m.return=f,f=m):(x=wl(_.type,_.key,_.props,null,f.mode,x),x.ref=co(f,m,_),x.return=f,f=x)}return o(f);case fs:e:{for(A=_.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(f,m.sibling),m=r(m,_.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else e(f,m);m=m.sibling}m=su(_,f.mode,x),m.return=f,f=m}return o(f);case Gi:return A=_._init,v(f,m,A(_._payload),x)}if(wo(_))return g(f,m,_,x);if(ro(_))return y(f,m,_,x);La(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(f,m.sibling),m=r(m,_),m.return=f,f=m):(n(f,m),m=ru(_,f.mode,x),m.return=f,f=m),o(f)):n(f,m)}return v}var ks=Bg(!0),Hg=Bg(!1),Xl=pr(null),jl=null,ys=null,Qh=null;function ed(){Qh=ys=jl=null}function td(t){var e=Xl.current;gt(Xl),t._currentValue=e}function _f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ps(t,e){jl=t,Qh=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(jl===null)throw Error(re(308));ys=t,jl.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Pr=null;function nd(t){Pr===null?Pr=[t]:Pr.push(t)}function Vg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,nd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}function Bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Mt({},h,d);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=h}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var da={},ai=pr(da),Jo=pr(da),Qo=pr(da);function Lr(t){if(t===da)throw Error(re(174));return t}function rd(t,e){switch(ht(Qo,e),ht(Jo,t),ht(ai,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ku(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ku(e,t)}gt(ai),ht(ai,e)}function zs(){gt(ai),gt(Jo),gt(Qo)}function Wg(t){Lr(Qo.current);var e=Lr(ai.current),n=Ku(e,t.type);e!==n&&(ht(Jo,t),ht(ai,n))}function sd(t){Jo.current===t&&(gt(ai),gt(Jo))}var xt=pr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Jc=[];function od(){for(var t=0;t<Jc.length;t++)Jc[t]._workInProgressVersionPrimary=null;Jc.length=0}var xl=Li.ReactCurrentDispatcher,Qc=Li.ReactCurrentBatchConfig,zr=0,St=null,Ct=null,Nt=null,ql=!1,No=!1,ea=0,Dy=0;function Wt(){throw Error(re(321))}function ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function ld(t,e,n,i,r,s){if(zr=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?Oy:Fy,t=n(i,r),No){s=0;do{if(No=!1,ea=0,25<=s)throw Error(re(301));s+=1,Nt=Ct=null,e.updateQueue=null,xl.current=ky,t=n(i,r)}while(No)}if(xl.current=Zl,e=Ct!==null&&Ct.next!==null,zr=0,Nt=Ct=St=null,ql=!1,e)throw Error(re(300));return t}function cd(){var t=ea!==0;return ea=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?St.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Un(){if(Ct===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Nt===null?St.memoizedState:Nt.next;if(e!==null)Nt=e,Ct=t;else{if(t===null)throw Error(re(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Nt===null?St.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ta(t,e){return typeof e=="function"?e(t):e}function eu(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((zr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,St.lanes|=u,Br|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Jn(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function tu(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Jn(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xg(){}function jg(t,e){var n=St,i=Un(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,ud(qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,na(9,$g.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(re(349));zr&30||Yg(n,e,r)}return r}function Yg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Zg(e)&&Kg(t)}function qg(t,e,n){return n(function(){Zg(e)&&Kg(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Kg(t){var e=Ci(t,1);e!==null&&Zn(e,t,1,-1)}function Vp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:t},e.queue=t,t=t.dispatch=Uy.bind(null,St,t),[e.memoizedState,t]}function na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jg(){return Un().memoizedState}function yl(t,e,n,i){var r=ni();St.flags|=t,r.memoizedState=na(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&ad(i,o.deps)){r.memoizedState=na(e,n,s,i);return}}St.flags|=t,r.memoizedState=na(1|e,n,s,i)}function Gp(t,e){return yl(8390656,8,t,e)}function ud(t,e){return pc(2048,8,t,e)}function Qg(t,e){return pc(4,2,t,e)}function ev(t,e){return pc(4,4,t,e)}function tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nv(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,tv.bind(null,e,t),n)}function fd(){}function iv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ad(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function rv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ad(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function sv(t,e,n){return zr&21?(Jn(n,e)||(n=ug(),St.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fn=!0),t.memoizedState=n)}function Iy(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{ot=n,Qc.transition=i}}function ov(){return Un().memoizedState}function Ny(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},av(t))lv(e,n);else if(n=Vg(t,e,n,i),n!==null){var r=rn();Zn(n,t,i,r),cv(n,e,i)}}function Uy(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(av(t))lv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Jn(a,o)){var l=e.interleaved;l===null?(r.next=r,nd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Vg(t,e,r,i),n!==null&&(r=rn(),Zn(n,t,i,r),cv(n,e,i))}}function av(t){var e=t.alternate;return t===St||e!==null&&e===St}function lv(t,e){No=ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vh(t,n)}}var Zl={readContext:Nn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Oy={readContext:Nn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Gp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ny.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Vp,useDebugValue:fd,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Vp(!1),e=t[0];return t=Iy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ni();if(vt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ot===null)throw Error(re(349));zr&30||Yg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Gp(qg.bind(null,i,s,t),[t]),i.flags|=2048,na(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ot.identifierPrefix;if(vt){var n=Si,i=yi;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:Nn,useCallback:iv,useContext:Nn,useEffect:ud,useImperativeHandle:nv,useInsertionEffect:Qg,useLayoutEffect:ev,useMemo:rv,useReducer:eu,useRef:Jg,useState:function(){return eu(ta)},useDebugValue:fd,useDeferredValue:function(t){var e=Un();return sv(e,Ct.memoizedState,t)},useTransition:function(){var t=eu(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:ov,unstable_isNewReconciler:!1},ky={readContext:Nn,useCallback:iv,useContext:Nn,useEffect:ud,useImperativeHandle:nv,useInsertionEffect:Qg,useLayoutEffect:ev,useMemo:rv,useReducer:tu,useRef:Jg,useState:function(){return tu(ta)},useDebugValue:fd,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:sv(e,Ct.memoizedState,t)},useTransition:function(){var t=tu(ta)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Xg,useSyncExternalStore:jg,useId:ov,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=nr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=nr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Zn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=nr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Zn(e,t,i,n),_l(e,t,i))}};function Wp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,i)||!$o(r,s):!0}function uv(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=dn(e)?Fr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function yf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},id(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=dn(e)?Fr:Qt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=hx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function nu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zy=typeof WeakMap=="function"?WeakMap:Map;function fv(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Jl||(Jl=!0,Lf=i),Sf(t,e)},n}function hv(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sf(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new zy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Qy.bind(null,t,e,n),e.then(t,t))}function Yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var By=Li.ReactCurrentOwner,fn=!1;function nn(t,e,n,i){e.child=t===null?Hg(e,null,n,i):ks(e,t.child,n,i)}function qp(t,e,n,i,r){n=n.render;var s=e.ref;return Ps(e,r),i=ld(t,e,n,i,s,r),n=cd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(vt&&n&&Zh(e),e.flags|=1,nn(t,e,i,r),e.child)}function Zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,dv(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function dv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($o(s,i)&&t.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(fn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Mf(t,e,n,i,r)}function pv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ms,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ms,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ms,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ms,xn),xn|=i;return nn(t,e,r,n),e.child}function mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mf(t,e,n,i,r){var s=dn(n)?Fr:Qt.current;return s=Os(e,s),Ps(e,r),n=ld(t,e,n,i,s,r),i=cd(),t!==null&&!fn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(vt&&i&&Zh(e),e.flags|=1,nn(t,e,n,r),e.child)}function Kp(t,e,n,i,r){if(dn(n)){var s=!0;Vl(e)}else s=!1;if(Ps(e,r),e.stateNode===null)Sl(t,e),uv(e,n,i),yf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=dn(n)?Fr:Qt.current,c=Os(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xp(e,o,i,c),Wi=!1;var d=e.memoizedState;o.state=d,Yl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||hn.current||Wi?(typeof u=="function"&&(xf(e,n,u,i),l=e.memoizedState),(a=Wi||Wp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Gg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Wn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=dn(n)?Fr:Qt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Xp(e,o,i,l),Wi=!1,d=e.memoizedState,o.state=d,Yl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||hn.current||Wi?(typeof p=="function"&&(xf(e,n,p,i),g=e.memoizedState),(c=Wi||Wp(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ef(t,e,n,i,s,r)}function Ef(t,e,n,i,r,s){mv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Op(e,n,!1),Ri(t,e,s);i=e.stateNode,By.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Op(e,n,!0),e.child}function gv(t){var e=t.stateNode;e.pendingContext?Up(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Up(t,e.context,!1),rd(t,e.containerInfo)}function Jp(t,e,n,i,r){return Fs(),Jh(r),e.flags|=256,nn(t,e,n,i),e.child}var wf={dehydrated:null,treeContext:null,retryLane:0};function Tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(xt,r&1),t===null)return vf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_c(o,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Tf(n),e.memoizedState=wf,t):hd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Hy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ir(a,s):(s=Or(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wf,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hd(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&Jh(i),ks(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Hy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=nu(Error(re(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),s=Or(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=Tf(o),e.memoizedState=wf,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=nu(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,fn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Zn(i,t,r,-1))}return _d(),i=nu(Error(re(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=e1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=Qi(r.nextSibling),Mn=e,vt=!0,jn=null,t!==null&&(Cn[Rn++]=yi,Cn[Rn++]=Si,Cn[Rn++]=kr,yi=t.id,Si=t.overflow,kr=e),e=hd(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_f(t.return,e,n)}function iu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function _v(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),iu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}iu(e,!0,n,null,s);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vy(t,e,n){switch(e.tag){case 3:gv(e),Fs();break;case 5:Wg(e);break;case 1:dn(e.type)&&Vl(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(ht(xt,xt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ht(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return _v(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,pv(t,e,n)}return Ri(t,e,n)}var xv,Af,yv,Sv;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};yv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(ai.current);var s=null;switch(n){case"input":r=Yu(t,r),i=Yu(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bl)}Ju(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ho.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ho.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Sv=function(t,e,n,i){n!==i&&(e.flags|=4)};function uo(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Gy(t,e,n){var i=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return dn(e.type)&&Hl(),Xt(e),null;case 3:return i=e.stateNode,zs(),gt(hn),gt(Qt),od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Nf(jn),jn=null))),Af(t,e),Xt(e),null;case 5:sd(e);var r=Lr(Qo.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Xt(e),null}if(t=Lr(ai.current),Pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Ko]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ao.length;r++)mt(Ao[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":lp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":up(i,s),mt("invalid",i)}Ju(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):Ho.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":Sa(i),cp(i,s,!0);break;case"textarea":Sa(i),fp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Ko]=i,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ao.length;r++)mt(Ao[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":lp(t,i),r=Yu(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":up(t,i),r=Zu(t,i),mt("invalid",t);break;default:r=i}Ju(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(t,l):typeof l=="number"&&Vo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ho.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Oh(t,s,l,o))}switch(n){case"input":Sa(t),cp(t,i,!1);break;case"textarea":Sa(t),fp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?As(t,!!i.multiple,s,!1):i.defaultValue!=null&&As(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Sv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Lr(Qo.current),Lr(ai.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Xt(e),null;case 13:if(gt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Sn!==null&&e.mode&1&&!(e.flags&128))zg(),Fs(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ri]=e}else Fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else jn!==null&&(Nf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Rt===0&&(Rt=3):_d())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return zs(),Af(t,e),t===null&&qo(e.stateNode.containerInfo),Xt(e),null;case 10:return td(e.type._context),Xt(e),null;case 17:return dn(e.type)&&Hl(),Xt(e),null;case 19:if(gt(xt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)uo(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Hs&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=$l(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Xt(e),null}else 2*Tt()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,i=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,ht(xt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Wy(t,e){switch(Kh(e),e.tag){case 1:return dn(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),gt(hn),gt(Qt),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sd(e),null;case 13:if(gt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(xt),null;case 4:return zs(),null;case 10:return td(e.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var Ia=!1,$t=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function bf(t,e,n){try{n()}catch(i){wt(t,e,i)}}var em=!1;function jy(t,e){if(uf=Fl,t=Ag(),qh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ff={focusedElem:t,selectionRange:n},Fl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,f=e.stateNode,m=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Wn(e.type,y),v);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=em,em=!1,g}function Uo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bf(e,n,s)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Ko],delete e[pf],delete e[Cy],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ev(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}function Pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}var Bt=null,Xn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)wv(t,e,n),n=n.sibling}function wv(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:$t||Ss(n,e);case 6:var i=Bt,r=Xn;Bt=null,Ui(t,e,n),Bt=i,Xn=r,Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Xn?(t=Bt,n=n.stateNode,t.nodeType===8?Zc(t.parentNode,n):t.nodeType===1&&Zc(t,n),jo(t)):Zc(Bt,n.stateNode));break;case 4:i=Bt,r=Xn,Bt=n.stateNode.containerInfo,Xn=!0,Ui(t,e,n),Bt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bf(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!$t&&(Ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ui(t,e,n),$t=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xy),e.forEach(function(i){var r=t1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Xn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Xn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Bt===null)throw Error(re(160));wv(s,o,r),Bt=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),ti(t),i&4){try{Uo(3,t,t.return),gc(3,t)}catch(y){wt(t,t.return,y)}try{Uo(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:kn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return);break;case 5:if(kn(e,t),ti(t),i&512&&n!==null&&Ss(n,n.return),t.flags&32){var r=t.stateNode;try{Vo(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Y0(r,s),Qu(a,o);var c=Qu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?J0(r,h):u==="dangerouslySetInnerHTML"?Z0(r,h):u==="children"?Vo(r,h):Oh(r,u,h,c)}switch(a){case"input":$u(r,s);break;case"textarea":$0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?As(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?As(r,!!s.multiple,s.defaultValue,!0):As(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ko]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(kn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(kn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:kn(e,t),ti(t);break;case 13:kn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(md=Tt())),i&4&&nm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,kn(e,t),$t=c):kn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(h=Ee=u;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:Uo(4,d,d.return);break;case 1:Ss(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Ss(d,d.return);break;case 22:if(d.memoizedState!==null){rm(h);continue}}p!==null?(p.return=d,Ee=p):rm(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=K0("display",o))}catch(y){wt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){wt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kn(e,t),ti(t),i&4&&nm(t);break;case 21:break;default:kn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ev(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Vo(r,""),i.flags&=-33);var s=tm(t);Pf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=tm(t);Rf(t,a,o);break;default:throw Error(re(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yy(t,e,n){Ee=t,Av(t)}function Av(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Ia;var c=$t;if(Ia=o,($t=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?sm(r):l!==null?(l.return=o,Ee=l):sm(r);for(;s!==null;)Ee=s,Av(s),s=s.sibling;Ee=r,Ia=a,$t=c}im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):im(t)}}function im(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&jo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}$t||e.flags&512&&Cf(e)}catch(d){wt(e,e.return,d)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function rm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function sm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{Cf(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{Cf(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var $y=Math.ceil,Kl=Li.ReactCurrentDispatcher,dd=Li.ReactCurrentOwner,Dn=Li.ReactCurrentBatchConfig,et=0,Ot=null,bt=null,Ht=0,xn=0,Ms=pr(0),Rt=0,ia=null,Br=0,vc=0,pd=0,Oo=null,un=null,md=0,Hs=1/0,_i=null,Jl=!1,Lf=null,tr=null,Na=!1,qi=null,Ql=0,Fo=0,Df=null,Ml=-1,El=0;function rn(){return et&6?Tt():Ml!==-1?Ml:Ml=Tt()}function nr(t){return t.mode&1?et&2&&Ht!==0?Ht&-Ht:Ly.transition!==null?(El===0&&(El=ug()),El):(t=ot,t!==0||(t=window.event,t=t===void 0?16:vg(t.type)),t):1}function Zn(t,e,n,i){if(50<Fo)throw Fo=0,Df=null,Error(re(185));ua(t,n,i),(!(et&2)||t!==Ot)&&(t===Ot&&(!(et&2)&&(vc|=n),Rt===4&&ji(t,Ht)),pn(t,i),n===1&&et===0&&!(e.mode&1)&&(Hs=Tt()+500,dc&&mr()))}function pn(t,e){var n=t.callbackNode;Lx(t,e);var i=Ol(t,t===Ot?Ht:0);if(i===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?Py(om.bind(null,t)):Og(om.bind(null,t)),Ay(function(){!(et&6)&&mr()}),n=null;else{switch(fg(i)){case 1:n=Hh;break;case 4:n=lg;break;case 16:n=Ul;break;case 536870912:n=cg;break;default:n=Ul}n=Nv(n,bv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bv(t,e){if(Ml=-1,El=0,et&6)throw Error(re(327));var n=t.callbackNode;if(Ls()&&t.callbackNode!==n)return null;var i=Ol(t,t===Ot?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=et;et|=2;var s=Rv();(Ot!==t||Ht!==e)&&(_i=null,Hs=Tt()+500,Ur(t,e));do try{Ky();break}catch(a){Cv(t,a)}while(!0);ed(),Kl.current=s,et=r,bt!==null?e=0:(Ot=null,Ht=0,e=Rt)}if(e!==0){if(e===2&&(r=sf(t),r!==0&&(i=r,e=If(t,r))),e===1)throw n=ia,Ur(t,0),ji(t,i),pn(t,Tt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!qy(r)&&(e=ec(t,i),e===2&&(s=sf(t),s!==0&&(i=s,e=If(t,s))),e===1))throw n=ia,Ur(t,0),ji(t,i),pn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:wr(t,un,_i);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=md+500-Tt(),10<e)){if(Ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=df(wr.bind(null,t,un,_i),e);break}wr(t,un,_i);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$y(i/1960))-i,10<i){t.timeoutHandle=df(wr.bind(null,t,un,_i),i);break}wr(t,un,_i);break;case 5:wr(t,un,_i);break;default:throw Error(re(329))}}}return pn(t,Tt()),t.callbackNode===n?bv.bind(null,t):null}function If(t,e){var n=Oo;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=ec(t,e),t!==2&&(e=un,un=n,e!==null&&Nf(e)),t}function Nf(t){un===null?un=t:un.push.apply(un,t)}function qy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~pd,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function om(t){if(et&6)throw Error(re(327));Ls();var e=Ol(t,0);if(!(e&1))return pn(t,Tt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=sf(t);i!==0&&(e=i,n=If(t,i))}if(n===1)throw n=ia,Ur(t,0),ji(t,e),pn(t,Tt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,un,_i),pn(t,Tt()),null}function gd(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Hs=Tt()+500,dc&&mr())}}function Hr(t){qi!==null&&qi.tag===0&&!(et&6)&&Ls();var e=et;et|=1;var n=Dn.transition,i=ot;try{if(Dn.transition=null,ot=1,t)return t()}finally{ot=i,Dn.transition=n,et=e,!(et&6)&&mr()}}function vd(){xn=Ms.current,gt(Ms)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ty(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Kh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hl();break;case 3:zs(),gt(hn),gt(Qt),od();break;case 5:sd(i);break;case 4:zs();break;case 13:gt(xt);break;case 19:gt(xt);break;case 10:td(i.type._context);break;case 22:case 23:vd()}n=n.return}if(Ot=t,bt=t=ir(t.current,null),Ht=xn=e,Rt=0,ia=null,pd=vc=Br=0,un=Oo=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function Cv(t,e){do{var n=bt;try{if(ed(),xl.current=Zl,ql){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ql=!1}if(zr=0,Nt=Ct=St=null,No=!1,ea=0,dd.current=null,n===null||n.return===null){Rt=1,ia=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Yp(o);if(p!==null){p.flags&=-257,$p(p,o,a,s,e),p.mode&1&&jp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){jp(s,c,e),_d();break e}l=Error(re(426))}}else if(vt&&a.mode&1){var v=Yp(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),$p(v,o,a,s,e),Jh(Bs(l,a));break e}}s=l=Bs(l,a),Rt!==4&&(Rt=2),Oo===null?Oo=[s]:Oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=fv(s,l,e);Bp(s,f);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(tr===null||!tr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=hv(s,a,e);Bp(s,x);break e}}s=s.return}while(s!==null)}Lv(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Rv(){var t=Kl.current;return Kl.current=Zl,t===null?Zl:t}function _d(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(Br&268435455)&&!(vc&268435455)||ji(Ot,Ht)}function ec(t,e){var n=et;et|=2;var i=Rv();(Ot!==t||Ht!==e)&&(_i=null,Ur(t,e));do try{Zy();break}catch(r){Cv(t,r)}while(!0);if(ed(),et=n,Kl.current=i,bt!==null)throw Error(re(261));return Ot=null,Ht=0,Rt}function Zy(){for(;bt!==null;)Pv(bt)}function Ky(){for(;bt!==null&&!Mx();)Pv(bt)}function Pv(t){var e=Iv(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Lv(t):bt=e,dd.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Wy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,bt=null;return}}else if(n=Gy(n,e,xn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Rt===0&&(Rt=5)}function wr(t,e,n){var i=ot,r=Dn.transition;try{Dn.transition=null,ot=1,Jy(t,e,n,i)}finally{Dn.transition=r,ot=i}return null}function Jy(t,e,n,i){do Ls();while(qi!==null);if(et&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Dx(t,s),t===Ot&&(bt=Ot=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,Nv(Ul,function(){return Ls(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=ot;ot=1;var a=et;et|=4,dd.current=null,jy(t,n),Tv(n,t),_y(ff),Fl=!!uf,ff=uf=null,t.current=n,Yy(n),Ex(),et=a,ot=o,Dn.transition=s}else t.current=n;if(Na&&(Na=!1,qi=t,Ql=r),s=t.pendingLanes,s===0&&(tr=null),Ax(n.stateNode),pn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Jl)throw Jl=!1,t=Lf,Lf=null,t;return Ql&1&&t.tag!==0&&Ls(),s=t.pendingLanes,s&1?t===Df?Fo++:(Fo=0,Df=t):Fo=0,mr(),null}function Ls(){if(qi!==null){var t=fg(Ql),e=Dn.transition,n=ot;try{if(Dn.transition=null,ot=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Ql=0,et&6)throw Error(re(331));var r=et;for(et|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Uo(8,u,s)}var h=u.child;if(h!==null)h.return=u,Ee=h;else for(;Ee!==null;){u=Ee;var d=u.sibling,p=u.return;if(Mv(u),u===c){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Uo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var m=t.current;for(Ee=m;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=m;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(C){wt(a,a.return,C)}if(a===o){Ee=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ee=x;break e}Ee=a.return}}if(et=r,mr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{ot=n,Dn.transition=e}}return!1}function am(t,e,n){e=Bs(n,e),e=fv(t,e,1),t=er(t,e,1),e=rn(),t!==null&&(ua(t,1,e),pn(t,e))}function wt(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Bs(n,t),t=hv(e,t,1),e=er(e,t,1),t=rn(),e!==null&&(ua(e,1,t),pn(e,t));break}}e=e.return}}function Qy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(Ht&n)===n&&(Rt===4||Rt===3&&(Ht&130023424)===Ht&&500>Tt()-md?Ur(t,0):pd|=n),pn(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=rn();t=Ci(t,e),t!==null&&(ua(t,e,n),pn(t,n))}function e1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function t1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Dv(t,n)}var Iv;Iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)fn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return fn=!1,Vy(t,e,n);fn=!!(t.flags&131072)}else fn=!1,vt&&e.flags&1048576&&Fg(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Os(e,Qt.current);Ps(e,n),r=ld(null,e,i,t,r,n);var s=cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,id(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,yf(e,i,t,n),e=Ef(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Zh(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=i1(i),t=Wn(i,t),r){case 0:e=Mf(null,e,i,t,n);break e;case 1:e=Kp(null,e,i,t,n);break e;case 11:e=qp(null,e,i,t,n);break e;case 14:e=Zp(null,e,i,Wn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Kp(t,e,i,r,n);case 3:e:{if(gv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Gg(t,e),Yl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(re(423)),e),e=Jp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(re(424)),e),e=Jp(t,e,i,n,r);break e}else for(Sn=Qi(e.stateNode.containerInfo.firstChild),Mn=e,vt=!0,jn=null,n=Hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fs(),i===r){e=Ri(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return Wg(e),t===null&&vf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,hf(i,r)?o=null:s!==null&&hf(i,s)&&(e.flags|=32),mv(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&vf(e),null;case 13:return vv(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),qp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Xl,i._currentValue),i._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===r.children&&!hn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ps(e,n),r=Nn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Zp(t,e,i,r,n);case 15:return dv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Sl(t,e),e.tag=1,dn(i)?(t=!0,Vl(e)):t=!1,Ps(e,n),uv(e,i,r),yf(e,i,r,n),Ef(null,e,i,!0,t,n);case 19:return _v(t,e,n);case 22:return pv(t,e,n)}throw Error(re(156,e.tag))};function Nv(t,e){return ag(t,e)}function n1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new n1(t,e,n,i)}function xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i1(t){if(typeof t=="function")return xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kh)return 11;if(t===zh)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hs:return Or(n.children,r,s,e);case Fh:o=8,r|=8;break;case Gu:return t=Ln(12,n,e,r|2),t.elementType=Gu,t.lanes=s,t;case Wu:return t=Ln(13,n,e,r),t.elementType=Wu,t.lanes=s,t;case Xu:return t=Ln(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case W0:return _c(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case V0:o=10;break e;case G0:o=9;break e;case kh:o=11;break e;case zh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=W0,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function r1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yd(t,e,n,i,r,s,o,a,l){return t=new r1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(s),t}function s1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return cr;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(dn(n))return Ug(t,n,e)}return e}function Ov(t,e,n,i,r,s,o,a,l){return t=yd(n,i,!0,t,r,s,o,a,l),t.context=Uv(null),n=t.current,i=rn(),r=nr(n),s=wi(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ua(t,r,i),pn(t,i),t}function xc(t,e,n,i){var r=e.current,s=rn(),o=nr(r);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,o),t!==null&&(Zn(t,r,o,s),_l(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sd(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function o1(){return null}var Fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}yc.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));xc(t,e,null,null)};yc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){xc(null,t,null,null)}),e[bi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&gg(t)}};function Ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function a1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=tc(o);s.call(c)}}var o=Ov(e,i,t,0,null,!1,!1,"",cm);return t._reactRootContainer=o,t[bi]=o.current,qo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=tc(l);a.call(c)}}var l=yd(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=l,t[bi]=l.current,qo(t.nodeType===8?t.parentNode:t),Hr(function(){xc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}xc(e,o,t,r)}else o=a1(n,e,t,r,i);return tc(o)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=To(e.pendingLanes);n!==0&&(Vh(e,n|1),pn(e,Tt()),!(et&6)&&(Hs=Tt()+500,mr()))}break;case 13:Hr(function(){var i=Ci(t,1);if(i!==null){var r=rn();Zn(i,t,1,r)}}),Sd(t,1)}};Gh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}Sd(t,134217728)}};dg=function(t){if(t.tag===13){var e=nr(t),n=Ci(t,e);if(n!==null){var i=rn();Zn(n,t,e,i)}Sd(t,e)}};pg=function(){return ot};mg=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};tf=function(t,e,n){switch(e){case"input":if($u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=hc(i);if(!r)throw Error(re(90));j0(i),$u(i,r)}}}break;case"textarea":$0(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};tg=gd;ng=Hr;var l1={usingClientEntryPoint:!1,Events:[ha,gs,hc,Q0,eg,gd]},fo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c1={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sg(t),t===null?null:t.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||o1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{lc=Ua.inject(c1),oi=Ua}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l1;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(e))throw Error(re(200));return s1(t,e,null,n)};wn.createRoot=function(t,e){if(!Ed(t))throw Error(re(299));var n=!1,i="",r=Fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,qo(t.nodeType===8?t.parentNode:t),new Md(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=sg(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Hr(t)};wn.hydrate=function(t,e,n){if(!Sc(e))throw Error(re(200));return Mc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!Ed(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ov(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};wn.render=function(t,e,n){if(!Sc(e))throw Error(re(200));return Mc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(re(40));return t._reactRootContainer?(Hr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};wn.unstable_batchedUpdates=gd;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Mc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),k0.exports=wn;var u1=k0.exports,zv,um=u1;zv=um.createRoot,um.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="170",f1=0,fm=1,h1=2,Td=1,Bv=2,vi=3,ur=0,Kt=1,Pn=2,rr=0,Ds=1,hm=2,dm=3,pm=4,d1=5,br=100,p1=101,m1=102,g1=103,v1=104,_1=200,x1=201,y1=202,S1=203,Uf=204,Of=205,M1=206,E1=207,w1=208,T1=209,A1=210,b1=211,C1=212,R1=213,P1=214,Ff=0,kf=1,zf=2,Vs=3,Bf=4,Hf=5,Vf=6,Gf=7,Ad=0,L1=1,D1=2,sr=0,I1=1,N1=2,U1=3,Hv=4,O1=5,F1=6,k1=7,Vv=300,Gs=301,Ws=302,Wf=303,Xf=304,Ec=306,nc=1e3,Dr=1001,jf=1002,Kn=1003,z1=1004,Oa=1005,si=1006,ou=1007,Ir=1008,Pi=1009,Gv=1010,Wv=1011,ra=1012,bd=1013,Vr=1014,Mi=1015,Ks=1016,Cd=1017,Rd=1018,Xs=1020,Xv=35902,jv=1021,Yv=1022,$n=1023,$v=1024,qv=1025,Is=1026,js=1027,Zv=1028,Pd=1029,Kv=1030,Ld=1031,Dd=1033,Tl=33776,Al=33777,bl=33778,Cl=33779,Yf=35840,$f=35841,qf=35842,Zf=35843,Kf=36196,Jf=37492,Qf=37496,eh=37808,th=37809,nh=37810,ih=37811,rh=37812,sh=37813,oh=37814,ah=37815,lh=37816,ch=37817,uh=37818,fh=37819,hh=37820,dh=37821,Rl=36492,ph=36494,mh=36495,Jv=36283,gh=36284,vh=36285,_h=36286,B1=3200,H1=3201,Id=0,V1=1,Yi="",Ut="srgb",Js="srgb-linear",wc="linear",at="srgb",Zr=7680,mm=519,G1=512,W1=513,X1=514,Qv=515,j1=516,Y1=517,$1=518,q1=519,gm=35044,vm="300 es",Ei=2e3,ic=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,xh=180/Math.PI;function eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Z1(t,e){return(t%e+e)%e}function lu(t,e,n){return(1-n)*t+n*e}function ho(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,n=0){he.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],y=r[0],v=r[3],f=r[6],m=r[1],_=r[4],x=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*y+a*m+l*C,s[3]=o*v+a*_+l*A,s[6]=o*f+a*x+l*T,s[1]=c*y+u*m+h*C,s[4]=c*v+u*_+h*A,s[7]=c*f+u*x+h*T,s[2]=d*y+p*m+g*C,s[5]=d*v+p*_+g*A,s[8]=d*f+p*x+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cu.makeScale(e,n)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Ge;function e_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K1(){const t=sa("canvas");return t.style.display="block",t}const _m={};function bo(t){t in _m||(_m[t]=!0,console.warn(t))}function J1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Q1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qe={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===at&&(t.r=Ti(t.r),t.g=Ti(t.g),t.b=Ti(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===at&&(t.r=Ns(t.r),t.g=Ns(t.g),t.b=Ns(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Yi?wc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ns(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const xm=[.64,.33,.3,.6,.15,.06],ym=[.2126,.7152,.0722],Sm=[.3127,.329],Mm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[Js]:{primaries:xm,whitePoint:Sm,transfer:wc,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:ym,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:xm,whitePoint:Sm,transfer:at,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:ym,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let Kr;class tS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=sa("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class t_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uu(r[o].image)):s.push(uu(r[o]))}else s=uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class Jt extends Qs{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Dr,r=Dr,s=si,o=Ir,a=$n,l=Pi,c=Jt.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=eo(),this.name="",this.source=new t_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Vv;Jt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,n=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],v=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,x=(p+1)/2,C=(f+1)/2,A=(u+d)/4,T=(h+y)/4,R=(g+v)/4;return _>x&&_>C?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((v-g)*(v-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(v-g)/m,this.y=(h-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Qs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new lt(0,0,e,n),this.scissorTest=!1,this.viewport=new lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends rS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==g){let v=1-a;const f=l*d+c*p+u*g+h*y,m=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,f*m);v=Math.sin(v*A)/C,a=Math.sin(a*A)/C}const x=a*m;if(l=l*v+d*x,c=c*v+p*x,u=u*v+g*x,h=h*v+y*x,v===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*h+l*p-c*d,e[n+1]=l*g+u*d+c*h-a*p,e[n+2]=c*g+u*p+a*d-l*h,e[n+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new O,wm=new pa;class ma{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),ka.subVectors(this.max,po),Jr.subVectors(e.a,po),Qr.subVectors(e.b,po),es.subVectors(e.c,po),Oi.subVectors(Qr,Jr),Fi.subVectors(es,Qr),vr.subVectors(Jr,es);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-vr.z,vr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,vr.z,0,-vr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-vr.y,vr.x,0];return!hu(n,Jr,Qr,es,ka)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,Jr,Qr,es,ka))?!1:(za.crossVectors(Oi,Fi),n=[za.x,za.y,za.z],hu(n,Jr,Qr,es,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new O,new O,new O,new O,new O,new O,new O,new O],zn=new O,Fa=new ma,Jr=new O,Qr=new O,es=new O,Oi=new O,Fi=new O,vr=new O,po=new O,ka=new O,za=new O,_r=new O;function hu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){_r.fromArray(t,s);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),c=n.dot(_r),u=i.dot(_r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oS=new ma,mo=new O,du=new O;class Tc{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);const n=mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(du)),this.expandByPoint(mo.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new O,pu=new O,Ba=new O,ki=new O,mu=new O,Ha=new O,gu=new O;class Nd{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=ki.dot(this.direction),l=-ki.dot(Ba),c=ki.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(pu).addScaledVector(Ba,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){mu.subVectors(n,e),Ha.subVectors(i,e),gu.crossVectors(mu,Ha);let o=this.direction.dot(gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(ki,Ha));if(l<0)return null;const c=a*this.direction.dot(mu.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(gu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,g,y,v){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),o=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,y=a*h;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*h,n[8]=g*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+g,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=o*u,n[9]=p*h-g,n[2]=g*h-p,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),Va.crossVectors(vn,zi),r[0]=zi.x,r[4]=Va.x,r[8]=vn.x,r[1]=zi.y,r[5]=Va.y,r[9]=vn.y,r[2]=zi.z,r[6]=Va.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],y=i[6],v=i[10],f=i[14],m=i[3],_=i[7],x=i[11],C=i[15],A=r[0],T=r[4],R=r[8],M=r[12],S=r[1],E=r[5],I=r[9],L=r[13],N=r[2],k=r[6],V=r[10],$=r[14],U=r[3],q=r[7],ee=r[11],le=r[15];return s[0]=o*A+a*S+l*N+c*U,s[4]=o*T+a*E+l*k+c*q,s[8]=o*R+a*I+l*V+c*ee,s[12]=o*M+a*L+l*$+c*le,s[1]=u*A+h*S+d*N+p*U,s[5]=u*T+h*E+d*k+p*q,s[9]=u*R+h*I+d*V+p*ee,s[13]=u*M+h*L+d*$+p*le,s[2]=g*A+y*S+v*N+f*U,s[6]=g*T+y*E+v*k+f*q,s[10]=g*R+y*I+v*V+f*ee,s[14]=g*M+y*L+v*$+f*le,s[3]=m*A+_*S+x*N+C*U,s[7]=m*T+_*E+x*k+C*q,s[11]=m*R+_*I+x*V+C*ee,s[15]=m*M+_*L+x*$+C*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],v=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+v*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],v=e[14],f=e[15],m=h*v*c-y*d*c+y*l*p-a*v*p-h*l*f+a*d*f,_=g*d*c-u*v*c-g*l*p+o*v*p+u*l*f-o*d*f,x=u*y*c-g*h*c+g*a*p-o*y*p-u*a*f+o*h*f,C=g*h*l-u*y*l-g*a*d+o*y*d+u*a*v-o*h*v,A=n*m+i*_+r*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=m*T,e[1]=(y*d*s-h*v*s-y*r*p+i*v*p+h*r*f-i*d*f)*T,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*v*s-g*d*s+g*r*p-n*v*p-u*r*f+n*d*f)*T,e[6]=(g*l*s-o*v*s-g*r*c+n*v*c+o*r*f-n*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=x*T,e[9]=(g*h*s-u*y*s-g*i*p+n*y*p+u*i*f-n*h*f)*T,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*T,e[12]=C*T,e[13]=(u*y*r-g*h*r+g*i*d-n*y*d-u*i*v+n*h*v)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*v-n*a*v)*T,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,y=o*u,v=o*h,f=a*h,m=l*c,_=l*u,x=l*h,C=i.x,A=i.y,T=i.z;return r[0]=(1-(y+f))*C,r[1]=(p+x)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+f))*A,r[6]=(v+m)*A,r[7]=0,r[8]=(g+_)*T,r[9]=(v-m)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),a=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,h=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ic)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,y;if(a===Ei)g=(o+s)*h,y=-2*h;else if(a===ic)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ts=new O,Bn=new je,aS=new O(0,0,0),lS=new O(1,1,1),zi=new O,Va=new O,vn=new O,Tm=new je,Am=new pa;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const bm=new O,ns=new pa,di=new je,Ga=new O,go=new O,uS=new O,fS=new pa,Cm=new O(1,0,0),Rm=new O(0,1,0),Pm=new O(0,0,1),Lm={type:"added"},hS={type:"removed"},is={type:"childadded",child:null},vu={type:"childremoved",child:null};class Ft extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new O,n=new Qn,i=new pa,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new Ge}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,n){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(go,Ga,this.up):di.lookAt(Ga,go,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(di),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),is.child=e,this.dispatchEvent(is),is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hS),vu.child=e,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ft.DEFAULT_UP=new O(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new O,pi=new O,_u=new O,mi=new O,rs=new O,ss=new O,Dm=new O,xu=new O,yu=new O,Su=new O,Mu=new lt,Eu=new lt,wu=new lt;class Yn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),pi.subVectors(i,n),_u.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(pi),l=Hn.dot(_u),c=pi.dot(pi),u=pi.dot(_u),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Mu.setScalar(0),Eu.setScalar(0),wu.setScalar(0),Mu.fromBufferAttribute(e,n),Eu.fromBufferAttribute(e,i),wu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Mu,s.x),o.addScaledVector(Eu,s.y),o.addScaledVector(wu,s.z),o}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),pi.subVectors(e,n),Hn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;rs.subVectors(r,i),ss.subVectors(s,i),xu.subVectors(e,i);const l=rs.dot(xu),c=ss.dot(xu);if(l<=0&&c<=0)return n.copy(i);yu.subVectors(e,r);const u=rs.dot(yu),h=ss.dot(yu);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(rs,o);Su.subVectors(e,s);const p=rs.dot(Su),g=ss.dot(Su);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ss,a);const v=u*g-p*h;if(v<=0&&h-u>=0&&p-g>=0)return Dm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),n.copy(r).addScaledVector(Dm,a);const f=1/(v+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(rs,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Z1(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Tu(o,s,e+1/3),this.g=Tu(o,s,e),this.b=Tu(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.fromWorkingColorSpace(Yt.copy(this),e),Math.round(qt(Yt.r*255,0,255))*65536+Math.round(qt(Yt.g*255,0,255))*256+Math.round(qt(Yt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Ut){Qe.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Wa);const i=lu(Bi.h,Wa.h,n),r=lu(Bi.s,Wa.s,n),s=lu(Bi.l,Wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new qe;qe.NAMES=i_;let dS=0;class Yr extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=eo(),this.name="",this.blending=Ds,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=Of,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uf&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zt extends Yr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new O,Xa=new he;class In{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ho(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ho(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ho(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ho(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ho(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gm&&(e.usage=this.usage),e}}class r_ extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ct extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const bn=new je,Au=new Ft,os=new O,_n=new ma,vo=new ma,Dt=new O;class kt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e_(e)?s_:r_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(_n.min,vo.min),_n.expandByPoint(Dt),Dt.addVectors(_n.max,vo.max),_n.expandByPoint(Dt)):(_n.expandByPoint(vo.min),_n.expandByPoint(vo.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(e,c),Dt.add(os)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const c=new O,u=new O,h=new O,d=new he,p=new he,g=new he,y=new O,v=new O;function f(R,M,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(E),v.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[R].add(y),a[M].add(y),a[S].add(y),l[R].add(v),l[M].add(v),l[S].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,M=m.length;R<M;++R){const S=m[R],E=S.start,I=S.count;for(let L=E,N=E+I;L<N;L+=3)f(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new O,x=new O,C=new O,A=new O;function T(R){C.fromBufferAttribute(r,R),A.copy(C);const M=a[R];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(A,M);const E=x.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,E)}for(let R=0,M=m.length;R<M;++R){const S=m[R],E=S.start,I=S.count;for(let L=E,N=E+I;L<N;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),v=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new In(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new je,xr=new Nd,ja=new Tc,Nm=new O,Ya=new O,$a=new O,qa=new O,bu=new O,Za=new O,Um=new O,Ka=new O;class rt extends Ft{constructor(e=new kt,n=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(bu.fromBufferAttribute(h,e),o?Za.addScaledVector(bu,u):Za.addScaledVector(bu.sub(n),u))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(ja.containsPoint(xr.origin)===!1&&(xr.intersectSphere(ja,Nm)===null||xr.origin.distanceToSquared(Nm)>(e.far-e.near)**2))&&(Im.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Im),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,C=_;x<C;x+=3){const A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=Ja(this,f,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const m=a.getX(v),_=a.getX(v+1),x=a.getX(v+2);r=Ja(this,o,e,i,c,u,h,m,_,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){const v=d[g],f=o[v.materialIndex],m=Math.max(v.start,p.start),_=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let x=m,C=_;x<C;x+=3){const A=x,T=x+1,R=x+2;r=Ja(this,f,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,f=y;v<f;v+=3){const m=v,_=v+1,x=v+2;r=Ja(this,o,e,i,c,u,h,m,_,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ka);return c<n.near||c>n.far?null:{distance:c,point:Ka.clone(),object:t}}function Ja(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ya),t.getVertexPosition(l,$a),t.getVertexPosition(c,qa);const u=mS(t,e,n,i,Ya,$a,qa,Um);if(u){const h=new O;Yn.getBarycoord(Um,Ya,$a,qa,h),r&&(u.uv=Yn.getInterpolatedAttribute(r,a,l,c,h,new he)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,a,l,c,h,new he)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Yn.getNormal(Ya,$a,qa,d.normal),u.face=d,u.barycoord=h}return u}class Di extends kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(y,v,f,m,_,x,C,A,T,R,M){const S=x/T,E=C/R,I=x/2,L=C/2,N=A/2,k=T+1,V=R+1;let $=0,U=0;const q=new O;for(let ee=0;ee<V;ee++){const le=ee*E-L;for(let be=0;be<k;be++){const Ze=be*S-I;q[y]=Ze*m,q[v]=le*_,q[f]=N,c.push(q.x,q.y,q.z),q[y]=0,q[v]=0,q[f]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(be/T),h.push(1-ee/R),$+=1}}for(let ee=0;ee<R;ee++)for(let le=0;le<T;le++){const be=d+le+k*ee,Ze=d+le+k*(ee+1),K=d+(le+1)+k*(ee+1),oe=d+(le+1)+k*ee;l.push(be,Ze,oe),l.push(Ze,K,oe),U+=6}a.addGroup(p,U,M),p+=U,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function o_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const vS={clone:Ys,merge:tn};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Yr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class a_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new O,Om=new he,Fm=new he;class yn extends a_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,Om,Fm),n.subVectors(Fm,Om)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,ls=1;class l_ extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(as,ls,e,n);r.layers=this.layers,this.add(r);const s=new yn(as,ls,e,n);s.layers=this.layers,this.add(s);const o=new yn(as,ls,e,n);o.layers=this.layers,this.add(o);const a=new yn(as,ls,e,n);a.layers=this.layers,this.add(a);const l=new yn(as,ls,e,n);l.layers=this.layers,this.add(l);const c=new yn(as,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class c_ extends Jt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u_ extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new c_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Di(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:rr});s.uniforms.tEquirect.value=n;const o=new rt(r,s),a=n.minFilter;return n.minFilter===Ir&&(n.minFilter=si),new l_(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Cu=new O,yS=new O,SS=new Ge;class Tr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cu.subVectors(i,n).cross(yS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SS.getNormalMatrix(e),r=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new Tc,Qa=new O;class Od{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,s=new Tr,o=new Tr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],v=r[11],f=r[12],m=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,v-p,x-f).normalize(),i[1].setComponents(l+s,d+c,v+p,x+f).normalize(),i[2].setComponents(l+o,d+u,v+g,x+m).normalize(),i[3].setComponents(l-o,d-u,v-g,x-m).normalize(),i[4].setComponents(l-a,d-h,v-y,x-_).normalize(),n===Ei)i[5].setComponents(l+a,d+h,v+y,x+_).normalize();else if(n===ic)i[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function f_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class hr extends kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],g=[],y=[],v=[];for(let f=0;f<u;f++){const m=f*d-o;for(let _=0;_<c;_++){const x=_*h-s;g.push(x,-m,0),y.push(0,0,1),v.push(_/a),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<a;m++){const _=m+c*f,x=m+c*(f+1),C=m+1+c*(f+1),A=m+1+c*f;p.push(_,x,A),p.push(x,C,A)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wS=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RS=`#ifdef USE_AOMAP
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
#endif`,PS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,US=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OS=`#ifdef USE_IRIDESCENCE
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
#endif`,FS=`#ifdef USE_BUMPMAP
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
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jS=`#define PI 3.141592653589793
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
} // validated`,YS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,qS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,mM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,SM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,MM=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DM=`#if defined( USE_POINTS_UV )
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
#endif`,IM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PE=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,LE=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,FE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kE=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,zE=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,BE=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,HE=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,VE=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,GE=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,XE=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jE=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,YE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,$E=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,qE=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ZE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,KE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,QE=`uniform vec3 color;
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
}`,ew=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tw=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Xe={alphahash_fragment:ES,alphahash_pars_fragment:wS,alphamap_fragment:TS,alphamap_pars_fragment:AS,alphatest_fragment:bS,alphatest_pars_fragment:CS,aomap_fragment:RS,aomap_pars_fragment:PS,batching_pars_vertex:LS,batching_vertex:DS,begin_vertex:IS,beginnormal_vertex:NS,bsdfs:US,iridescence_fragment:OS,bumpmap_pars_fragment:FS,clipping_planes_fragment:kS,clipping_planes_pars_fragment:zS,clipping_planes_pars_vertex:BS,clipping_planes_vertex:HS,color_fragment:VS,color_pars_fragment:GS,color_pars_vertex:WS,color_vertex:XS,common:jS,cube_uv_reflection_fragment:YS,defaultnormal_vertex:$S,displacementmap_pars_vertex:qS,displacementmap_vertex:ZS,emissivemap_fragment:KS,emissivemap_pars_fragment:JS,colorspace_fragment:QS,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:mM,envmap_vertex:sM,fog_vertex:oM,fog_pars_vertex:aM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:dM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:vM,lights_phong_fragment:_M,lights_phong_pars_fragment:xM,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:wM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:CM,map_fragment:RM,map_pars_fragment:PM,map_particle_fragment:LM,map_particle_pars_fragment:DM,metalnessmap_fragment:IM,metalnessmap_pars_fragment:NM,morphinstance_vertex:UM,morphcolor_vertex:OM,morphnormal_vertex:FM,morphtarget_pars_vertex:kM,morphtarget_vertex:zM,normal_fragment_begin:BM,normal_fragment_maps:HM,normal_pars_fragment:VM,normal_pars_vertex:GM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:YM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:qM,opaque_fragment:ZM,packing:KM,premultiplied_alpha_fragment:JM,project_vertex:QM,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:fE,specularmap_fragment:hE,specularmap_pars_fragment:dE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:vE,uv_pars_fragment:_E,uv_pars_vertex:xE,uv_vertex:yE,worldpos_vertex:SE,background_vert:ME,background_frag:EE,backgroundCube_vert:wE,backgroundCube_frag:TE,cube_vert:AE,cube_frag:bE,depth_vert:CE,depth_frag:RE,distanceRGBA_vert:PE,distanceRGBA_frag:LE,equirect_vert:DE,equirect_frag:IE,linedashed_vert:NE,linedashed_frag:UE,meshbasic_vert:OE,meshbasic_frag:FE,meshlambert_vert:kE,meshlambert_frag:zE,meshmatcap_vert:BE,meshmatcap_frag:HE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:jE,meshphysical_frag:YE,meshtoon_vert:$E,meshtoon_frag:qE,points_vert:ZE,points_frag:KE,shadow_vert:JE,shadow_frag:QE,sprite_vert:ew,sprite_frag:tw},pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ii={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const el={r:0,b:0,g:0},Sr=new Qn,nw=new je;function iw(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:e).get(_)),_}function y(m){let _=!1;const x=g(m);x===null?f(a,l):x&&x.isColor&&(f(x,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(m,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Ec)?(u===void 0&&(u=new rt(new Di(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Ys(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Sr.copy(_.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(Sr)),u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,(h!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new rt(new hr(2,2),new fr({name:"BackgroundMaterial",uniforms:Ys(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,_){m.getRGB(el,o_(t)),i.buffers.color.setClear(el.r,el.g,el.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:y,addToRenderList:v}}function rw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,E,I,L,N){let k=!1;const V=h(L,I,E);s!==V&&(s=V,c(s.object)),k=p(S,L,I,N),k&&g(S,L,I,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(S,E,I,L),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,E,I){const L=I.wireframe===!0;let N=i[S.id];N===void 0&&(N={},i[S.id]=N);let k=N[E.id];k===void 0&&(k={},N[E.id]=k);let V=k[L];return V===void 0&&(V=d(l()),k[L]=V),V}function d(S){const E=[],I=[],L=[];for(let N=0;N<n;N++)E[N]=0,I[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:I,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,E,I,L){const N=s.attributes,k=E.attributes;let V=0;const $=I.getAttributes();for(const U in $)if($[U].location>=0){const ee=N[U];let le=k[U];if(le===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function g(S,E,I,L){const N={},k=E.attributes;let V=0;const $=I.getAttributes();for(const U in $)if($[U].location>=0){let ee=k[U];ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),N[U]=le,V++}s.attributes=N,s.attributesNum=V,s.index=L}function y(){const S=s.newAttributes;for(let E=0,I=S.length;E<I;E++)S[E]=0}function v(S){f(S,0)}function f(S,E){const I=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;I[S]=1,L[S]===0&&(t.enableVertexAttribArray(S),L[S]=1),N[S]!==E&&(t.vertexAttribDivisor(S,E),N[S]=E)}function m(){const S=s.newAttributes,E=s.enabledAttributes;for(let I=0,L=E.length;I<L;I++)E[I]!==S[I]&&(t.disableVertexAttribArray(I),E[I]=0)}function _(S,E,I,L,N,k,V){V===!0?t.vertexAttribIPointer(S,E,I,N,k):t.vertexAttribPointer(S,E,I,L,N,k)}function x(S,E,I,L){y();const N=L.attributes,k=I.getAttributes(),V=E.defaultAttributeValues;for(const $ in k){const U=k[$];if(U.location>=0){let q=N[$];if(q===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const ee=q.normalized,le=q.itemSize,be=e.get(q);if(be===void 0)continue;const Ze=be.buffer,K=be.type,oe=be.bytesPerElement,ye=K===t.INT||K===t.UNSIGNED_INT||q.gpuType===bd;if(q.isInterleavedBufferAttribute){const ce=q.data,Ne=ce.stride,ze=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<U.locationSize;Fe++)f(U.location+Fe,ce.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<U.locationSize;Fe++)v(U.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Fe=0;Fe<U.locationSize;Fe++)_(U.location+Fe,le/U.locationSize,K,ee,Ne*oe,(ze+le/U.locationSize*Fe)*oe,ye)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<U.locationSize;ce++)f(U.location+ce,q.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<U.locationSize;ce++)v(U.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let ce=0;ce<U.locationSize;ce++)_(U.location+ce,le/U.locationSize,K,ee,le*oe,le/U.locationSize*ce*oe,ye)}}else if(V!==void 0){const ee=V[$];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(U.location,ee);break;case 3:t.vertexAttrib3fv(U.location,ee);break;case 4:t.vertexAttrib4fv(U.location,ee);break;default:t.vertexAttrib1fv(U.location,ee)}}}}m()}function C(){R();for(const S in i){const E=i[S];for(const I in E){const L=E[I];for(const N in L)u(L[N].object),delete L[N];delete E[I]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const I in E){const L=E[I];for(const N in L)u(L[N].object),delete L[N];delete E[I]}delete i[S.id]}function T(S){for(const E in i){const I=i[E];if(I[S.id]===void 0)continue;const L=I[S.id];for(const N in L)u(L[N].object),delete L[N];delete I[S.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:m}}function sw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ow(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==$n&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Pi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Tr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,f=t.get(h);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const m=s?0:i,_=m*4;let x=f.clippingState||null;l.value=x,x=u(g,d,_,p);for(let C=0;C!==_;++C)x[C]=n[C];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const f=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(v===null||v.length<f)&&(v=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(h[_]).applyMatrix4(m,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function lw(t){let e=new WeakMap;function n(o,a){return a===Wf?o.mapping=Gs:a===Xf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wf||a===Xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new u_(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class h_ extends a_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Es=4,km=[.125,.215,.35,.446,.526,.582],Cr=20,Ru=new h_,zm=new qe;let Pu=null,Lu=0,Du=0,Iu=!1;const Ar=(1+Math.sqrt(5))/2,cs=1/Ar,Bm=[new O(-Ar,cs,0),new O(Ar,cs,0),new O(-cs,0,Ar),new O(cs,0,Ar),new O(0,Ar,-cs),new O(0,Ar,cs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,Lu,Du),this._renderer.xr.enabled=Iu,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Ks,format:$n,colorSpace:Js,depthBuffer:!1},r=Hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cw(s)),this._blurMaterial=uw(s,e,n)}return r}_compileMaterial(e){const n=new rt(this._lodPlanes[0],e);this._renderer.compile(n,Ru)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(zm),u.toneMapping=sr,u.autoClear=!1;const p=new Zt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new rt(new Di,p);let y=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,y=!0):(p.color.copy(zm),y=!0);for(let f=0;f<6;f++){const m=f%3;m===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):m===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const _=this._cubeSize;tl(r,m*_,f>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Gs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bm[(r-s-1)%Bm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new rt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Cr-1),y=s/g,v=isFinite(s)?1+Math.floor(u*y):Cr;v>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Cr}`);const f=[];let m=0;for(let T=0;T<Cr;++T){const R=T/y,M=Math.exp(-R*R/2);f.push(M),T===0?m+=M:T<v&&(m+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/m;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const x=this._sizeLods[r],C=3*x*(r>_-Es?r-_+Es:0),A=4*(this._cubeSize-x);tl(n,C,A,3*x,2*x),l.setRenderTarget(n),l.render(h,Ru)}}function cw(t){const e=[],n=[],i=[];let r=t;const s=t-Es+1+km.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Es?l=km[o-t+Es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,v=2,f=1,m=new Float32Array(y*g*p),_=new Float32Array(v*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,M=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];m.set(M,y*g*A),_.set(d,v*g*A);const S=[A,A,A,A,A,A];x.set(S,f*g*A)}const C=new kt;C.setAttribute("position",new In(m,y)),C.setAttribute("uv",new In(_,v)),C.setAttribute("faceIndex",new In(x,f)),e.push(C),r>Es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hm(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uw(t,e,n){const i=new Float32Array(Cr),r=new O(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Vm(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Gm(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Fd(){return`

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
	`}function fw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wf||l===Xf,u=l===Gs||l===Ws;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new yh(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new yh(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let v=0,f=y.length;v<f;v++)e.remove(y[v])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let v=0,f=y.length;v<f;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let _=0,x=m.length;_<x;_+=3){const C=m[_+0],A=m[_+1],T=m[_+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const m=g.array;y=g.version;for(let _=0,x=m.length/3-1;_<x;_+=3){const C=_+0,A=_+1,T=_+2;d.push(C,A,A,T,T,C)}}else return;const v=new(e_(d)?s_:r_)(d,1);v.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,v)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let v=0;for(let f=0;f<g;f++)v+=p[f];n.update(v,i,1)}function h(d,p,g,y){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,g);let f=0;for(let m=0;m<g;m++)f+=p[m]*y[m];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gw(t,e,n){const i=new WeakMap,r=new lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),v===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*h),R=new n_(T,C,A,h);R.type=Mi,R.needsUpdate=!0;const M=x*4;for(let E=0;E<h;E++){const I=f[E],L=m[E],N=_[E],k=C*A*4*E;for(let V=0;V<I.count;V++){const $=V*M;g===!0&&(r.fromBufferAttribute(I,V),T[k+$+0]=r.x,T[k+$+1]=r.y,T[k+$+2]=r.z,T[k+$+3]=0),y===!0&&(r.fromBufferAttribute(L,V),T[k+$+4]=r.x,T[k+$+5]=r.y,T[k+$+6]=r.z,T[k+$+7]=0),v===!0&&(r.fromBufferAttribute(N,V),T[k+$+8]=r.x,T[k+$+9]=r.y,T[k+$+10]=r.z,T[k+$+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new he(C,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function vw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class d_ extends Jt{constructor(e,n,i,r,s,o,a,l,c,u=Is){if(u!==Is&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Is&&(i=Vr),i===void 0&&u===js&&(i=Xs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const p_=new Jt,Wm=new d_(1,1),m_=new n_,g_=new sS,v_=new c_,Xm=[],jm=[],Ym=new Float32Array(16),$m=new Float32Array(9),qm=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xm[r];if(s===void 0&&(s=new Float32Array(r),Xm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;qm.set(i),t.uniformMatrix2fv(this.addr,!1,qm),Lt(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;$m.set(i),t.uniformMatrix3fv(this.addr,!1,$m),Lt(n,i)}}function ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ym.set(i),t.uniformMatrix4fv(this.addr,!1,Ym),Lt(n,i)}}function Tw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wm.compareFunction=Qv,s=Wm):s=p_,n.setTexture2D(e||s,r)}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function Fw(t){switch(t){case 5126:return _w;case 35664:return xw;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return bw;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Lw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Ow}}function kw(t,e){t.uniform1fv(this.addr,e)}function zw(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function Bw(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function Hw(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function Vw(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gw(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ww(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Xw(t,e){t.uniform1iv(this.addr,e)}function jw(t,e){t.uniform2iv(this.addr,e)}function Yw(t,e){t.uniform3iv(this.addr,e)}function $w(t,e){t.uniform4iv(this.addr,e)}function qw(t,e){t.uniform1uiv(this.addr,e)}function Zw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function Jw(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||p_,s[o])}function e2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||g_,s[o])}function t2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||v_,s[o])}function n2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||m_,s[o])}function i2(t){switch(t){case 5126:return kw;case 35664:return zw;case 35665:return Bw;case 35666:return Hw;case 35674:return Vw;case 35675:return Gw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return jw;case 35668:case 35672:return Yw;case 35669:case 35673:return $w;case 5125:return qw;case 36294:return Zw;case 36295:return Kw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}class r2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Fw(n.type)}}class s2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i2(n.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Nu=/(\w+)(\])?(\[|\.)?/g;function Zm(t,e){t.seq.push(e),t.map[e.id]=e}function a2(t,e,n){const i=t.name,r=i.length;for(Nu.lastIndex=0;;){const s=Nu.exec(i),o=Nu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zm(n,c===void 0?new r2(a,t,e):new s2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new o2(a),Zm(n,h)),n=h}}}class Pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);a2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const l2=37297;let c2=0;function u2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Jm=new Ge;function f2(t){Qe._getMatrix(Jm,Qe.workingColorSpace,t);const e=`mat3( ${Jm.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case wc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+u2(t.getShaderSource(e),o)}else return r}function h2(t,e){const n=f2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function d2(t,e){let n;switch(e){case I1:n="Linear";break;case N1:n="Reinhard";break;case U1:n="Cineon";break;case Hv:n="ACESFilmic";break;case F1:n="AgX";break;case k1:n="Neutral";break;case O1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new O;function p2(){Qe.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function g2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function v2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Co(t){return t!==""}function e0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(t){return t.replace(_2,y2)}const x2=new Map;function y2(t,e){let n=Xe[e];if(n===void 0){const i=x2.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sh(n)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(t){return t.replace(S2,M2)}function M2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function i0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function w2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function A2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ad:e="ENVMAP_BLENDING_MULTIPLY";break;case L1:e="ENVMAP_BLENDING_MIX";break;case D1:e="ENVMAP_BLENDING_ADD";break}return e}function b2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=E2(n),c=w2(n),u=T2(n),h=A2(n),d=b2(n),p=m2(n),g=g2(s),y=r.createProgram();let v,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Co).join(`
`),f.length>0&&(f+=`
`)):(v=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),f=[i0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==sr?"#define TONE_MAPPING":"",n.toneMapping!==sr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==sr?d2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,h2("linearToOutputTexel",n.outputColorSpace),p2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),o=Sh(o),o=e0(o,n),o=t0(o,n),a=Sh(a),a=e0(a,n),a=t0(a,n),o=n0(o),a=n0(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=m+v+o,x=m+f+a,C=Km(r,r.VERTEX_SHADER,_),A=Km(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),L=r.getShaderInfoLog(C).trim(),N=r.getShaderInfoLog(A).trim();let k=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,A);else{const $=Qm(r,C,"vertex"),U=Qm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+$+`
`+U)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||N==="")&&(V=!1);V&&(E.diagnostics={runnable:k,programLog:I,vertexShader:{log:L,prefix:v},fragmentShader:{log:N,prefix:f}})}r.deleteShader(C),r.deleteShader(A),R=new Pl(r,y),M=v2(r,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,l2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let R2=0;class P2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new L2(e),n.set(e,i)),i}}class L2{constructor(e){this.id=R2++,this.code=e,this.usedTimes=0}}function D2(t,e,n,i,r,s,o){const a=new Ud,l=new P2,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,S,E,I,L){const N=I.fog,k=L.geometry,V=M.isMeshStandardMaterial?I.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||V),U=$&&$.mapping===Ec?$.image.height:null,q=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=ee!==void 0?ee.length:0;let be=0;k.morphAttributes.position!==void 0&&(be=1),k.morphAttributes.normal!==void 0&&(be=2),k.morphAttributes.color!==void 0&&(be=3);let Ze,K,oe,ye;if(q){const st=ii[q];Ze=st.vertexShader,K=st.fragmentShader}else Ze=M.vertexShader,K=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ye=l.getFragmentShaderID(M);const ce=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,Je=!!M.map,ne=!!M.matcap,ue=!!$,D=!!M.aoMap,De=!!M.lightMap,se=!!M.bumpMap,we=!!M.normalMap,de=!!M.displacementMap,Ue=!!M.emissiveMap,Se=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,X=M.clearcoat>0,J=M.dispersion>0,ie=M.iridescence>0,Q=M.sheen>0,Ce=M.transmission>0,me=w&&!!M.anisotropyMap,Me=X&&!!M.clearcoatMap,$e=X&&!!M.clearcoatNormalMap,ae=X&&!!M.clearcoatRoughnessMap,Te=ie&&!!M.iridescenceMap,Oe=ie&&!!M.iridescenceThicknessMap,ke=Q&&!!M.sheenColorMap,Ae=Q&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,We=!!M.specularColorMap,ut=!!M.specularIntensityMap,z=Ce&&!!M.transmissionMap,ge=Ce&&!!M.thicknessMap,Z=!!M.gradientMap,te=!!M.alphaMap,xe=M.alphaTest>0,ve=!!M.alphaHash,He=!!M.extensions;let Et=sr;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Gt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Ze,fragmentShader:K,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Js,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:ne,envMap:ue,envMapMode:ue&&$.mapping,envMapCubeUVHeight:U,aoMap:D,lightMap:De,bumpMap:se,normalMap:we,displacementMap:d&&de,emissiveMap:Ue,normalMapObjectSpace:we&&M.normalMapType===V1,normalMapTangentSpace:we&&M.normalMapType===Id,metalnessMap:Se,roughnessMap:P,anisotropy:w,anisotropyMap:me,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:$e,clearcoatRoughnessMap:ae,dispersion:J,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:Oe,sheen:Q,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:Ke,specularColorMap:We,specularIntensityMap:ut,transmission:Ce,transmissionMap:z,thicknessMap:ge,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Ds&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:ve,combine:M.combine,mapUv:Je&&y(M.map.channel),aoMapUv:D&&y(M.aoMap.channel),lightMapUv:De&&y(M.lightMap.channel),bumpMapUv:se&&y(M.bumpMap.channel),normalMapUv:we&&y(M.normalMap.channel),displacementMapUv:de&&y(M.displacementMap.channel),emissiveMapUv:Ue&&y(M.emissiveMap.channel),metalnessMapUv:Se&&y(M.metalnessMap.channel),roughnessMapUv:P&&y(M.roughnessMap.channel),anisotropyMapUv:me&&y(M.anisotropyMap.channel),clearcoatMapUv:Me&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(M.sheenRoughnessMap.channel),specularMapUv:Ke&&y(M.specularMap.channel),specularColorMapUv:We&&y(M.specularColorMap.channel),specularIntensityMapUv:ut&&y(M.specularIntensityMap.channel),transmissionMapUv:z&&y(M.transmissionMap.channel),thicknessMapUv:ge&&y(M.thicknessMap.channel),alphaMapUv:te&&y(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(we||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Je||te),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ne,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&E.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===at,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===at,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:He&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&M.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)S.push(E),S.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(m(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function m(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=g[M.type];let E;if(S){const I=ii[S];E=vS.clone(I.uniforms)}else E=M.uniforms;return E}function C(M,S){let E;for(let I=0,L=u.length;I<L;I++){const N=u[I];if(N.cacheKey===S){E=N,++E.usedTimes;break}}return E===void 0&&(E=new C2(t,S,M,s),u.push(E)),E}function A(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function I2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function N2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function r0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function s0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,g,y,v){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:v},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=v),e++,f}function a(h,d,p,g,y,v){const f=o(h,d,p,g,y,v);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,g,y,v){const f=o(h,d,p,g,y,v);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||N2),i.length>1&&i.sort(d||r0),r.length>1&&r.sort(d||r0)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function U2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new s0,t.set(i,[o])):r>=s.length?(o=new s0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function O2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new qe};break;case"SpotLight":n={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function F2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let k2=0;function z2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function B2(t){const e=new O2,n=F2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new je,o=new je;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,y=0,v=0,f=0,m=0,_=0,x=0,C=0,A=0,T=0;c.sort(z2);for(let M=0,S=c.length;M<S;M++){const E=c[M],I=E.color,L=E.intensity,N=E.distance,k=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=I.r*L,h+=I.g*L,d+=I.b*L;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],L);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,U=n.get(E);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=E.shadow.matrix,m++}i.directional[p]=V,p++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(I).multiplyScalar(L),V.distance=N,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[y]=V;const $=E.shadow;if(E.map&&(i.spotLightMap[C]=E.map,C++,$.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=$.matrix,E.castShadow){const U=n.get(E);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=k,x++}y++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(I).multiplyScalar(L),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[v]=V,v++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const $=E.shadow,U=n.get(E);U.shadowIntensity=$.intensity,U.shadowBias=$.bias,U.shadowNormalBias=$.normalBias,U.shadowRadius=$.radius,U.shadowMapSize=$.mapSize,U.shadowCameraNear=$.camera.near,U.shadowCameraFar=$.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=V,g++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(L),V.groundColor.copy(E.groundColor).multiplyScalar(L),i.hemi[f]=V,f++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==v||R.hemiLength!==f||R.numDirectionalShadows!==m||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=v,R.hemiLength=f,R.numDirectionalShadows=m,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=T,i.version=k2++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0;const v=u.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){const _=c[f];if(_.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),h++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(_.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function o0(t){const e=new B2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function H2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new o0(t),e.set(r,[a])):s>=o.length?(a=new o0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class V2 extends Yr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G2 extends Yr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const W2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
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
}`;function j2(t,e,n){let i=new Od;const r=new he,s=new he,o=new lt,a=new V2({depthPacking:H1}),l=new G2,c={},u=n.maxTextureSize,h={[ur]:Kt,[Kt]:ur,[Pn]:Pn},d=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:W2,fragmentShader:X2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rt(g,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let f=this.type;this.render=function(A,T,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),I=t.state;I.setBlending(rr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=f!==vi&&this.type===vi,N=f===vi&&this.type!==vi;for(let k=0,V=A.length;k<V;k++){const $=A[k],U=$.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const q=U.getFrameExtents();if(r.multiply(q),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,U.mapSize.y=s.y)),U.map===null||L===!0||N===!0){const le=this.type!==vi?{minFilter:Kn,magFilter:Kn}:{};U.map!==null&&U.map.dispose(),U.map=new Gr(r.x,r.y,le),U.map.texture.name=$.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ee=U.getViewportCount();for(let le=0;le<ee;le++){const be=U.getViewport(le);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),I.viewport(o),U.updateMatrices($,le),i=U.getFrustum(),x(T,R,U.camera,$,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&m(U,R),U.needsUpdate=!1}f=this.type,v.needsUpdate=!1,t.setRenderTarget(M,S,E)};function m(A,T){const R=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,p,y,null)}function _(A,T,R,M){let S=null;const E=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)S=E;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=S.uuid,L=T.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let k=N[L];k===void 0&&(k=S.clone(),N[L]=k,T.addEventListener("dispose",C)),S=k}if(S.visible=T.visible,S.wireframe=T.wireframe,M===vi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=R}return S}function x(A,T,R,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const L=e.update(A),N=A.material;if(Array.isArray(N)){const k=L.groups;for(let V=0,$=k.length;V<$;V++){const U=k[V],q=N[U.materialIndex];if(q&&q.visible){const ee=_(A,q,M,S);A.onBeforeShadow(t,A,T,R,L,ee,U),t.renderBufferDirect(R,null,L,ee,A,U),A.onAfterShadow(t,A,T,R,L,ee,U)}}}else if(N.visible){const k=_(A,N,M,S);A.onBeforeShadow(t,A,T,R,L,k,null),t.renderBufferDirect(R,null,L,k,A,null),A.onAfterShadow(t,A,T,R,L,k,null)}}const I=A.children;for(let L=0,N=I.length;L<N;L++)x(I[L],T,R,M,S)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Y2={[Ff]:kf,[zf]:Vf,[Bf]:Gf,[Vs]:Hf,[kf]:Ff,[Vf]:zf,[Gf]:Bf,[Hf]:Vs};function $2(t,e){function n(){let z=!1;const ge=new lt;let Z=null;const te=new lt(0,0,0,0);return{setMask:function(xe){Z!==xe&&!z&&(t.colorMask(xe,xe,xe,xe),Z=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ve,He,Et,Gt){Gt===!0&&(xe*=Et,ve*=Et,He*=Et),ge.set(xe,ve,He,Et),te.equals(ge)===!1&&(t.clearColor(xe,ve,He,Et),te.copy(ge))},reset:function(){z=!1,Z=null,te.set(-1,0,0,0)}}}function i(){let z=!1,ge=!1,Z=null,te=null,xe=null;return{setReversed:function(ve){if(ge!==ve){const He=e.get("EXT_clip_control");ge?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Et=xe;xe=null,this.setClear(Et)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?ce(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!z&&(t.depthMask(ve),Z=ve)},setFunc:function(ve){if(ge&&(ve=Y2[ve]),te!==ve){switch(ve){case Ff:t.depthFunc(t.NEVER);break;case kf:t.depthFunc(t.ALWAYS);break;case zf:t.depthFunc(t.LESS);break;case Vs:t.depthFunc(t.LEQUAL);break;case Bf:t.depthFunc(t.EQUAL);break;case Hf:t.depthFunc(t.GEQUAL);break;case Vf:t.depthFunc(t.GREATER);break;case Gf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ve}},setLocked:function(ve){z=ve},setClear:function(ve){xe!==ve&&(ge&&(ve=1-ve),t.clearDepth(ve),xe=ve)},reset:function(){z=!1,Z=null,te=null,xe=null,ge=!1}}}function r(){let z=!1,ge=null,Z=null,te=null,xe=null,ve=null,He=null,Et=null,Gt=null;return{setTest:function(st){z||(st?ce(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(st){ge!==st&&!z&&(t.stencilMask(st),ge=st)},setFunc:function(st,On,ci){(Z!==st||te!==On||xe!==ci)&&(t.stencilFunc(st,On,ci),Z=st,te=On,xe=ci)},setOp:function(st,On,ci){(ve!==st||He!==On||Et!==ci)&&(t.stencilOp(st,On,ci),ve=st,He=On,Et=ci)},setLocked:function(st){z=st},setClear:function(st){Gt!==st&&(t.clearStencil(st),Gt=st)},reset:function(){z=!1,ge=null,Z=null,te=null,xe=null,ve=null,He=null,Et=null,Gt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,y=!1,v=null,f=null,m=null,_=null,x=null,C=null,A=null,T=new qe(0,0,0),R=0,M=!1,S=null,E=null,I=null,L=null,N=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(U)[1]),V=$>=1):U.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),V=$>=2);let q=null,ee={};const le=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),Ze=new lt().fromArray(le),K=new lt().fromArray(be);function oe(z,ge,Z,te){const xe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(z,ve),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<Z;He++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ge+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ve}const ye={};ye[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),o.setFunc(Vs),se(!1),we(fm),ce(t.CULL_FACE),D(rr);function ce(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function Ne(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function ze(z,ge){return h[z]!==ge?(t.bindFramebuffer(z,ge),h[z]=ge,z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ge),z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Fe(z,ge){let Z=p,te=!1;if(z){Z=d.get(ge),Z===void 0&&(Z=[],d.set(ge,Z));const xe=z.textures;if(Z.length!==xe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,He=xe.length;ve<He;ve++)Z[ve]=t.COLOR_ATTACHMENT0+ve;Z.length=xe.length,te=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,te=!0);te&&t.drawBuffers(Z)}function Je(z){return g!==z?(t.useProgram(z),g=z,!0):!1}const ne={[br]:t.FUNC_ADD,[p1]:t.FUNC_SUBTRACT,[m1]:t.FUNC_REVERSE_SUBTRACT};ne[g1]=t.MIN,ne[v1]=t.MAX;const ue={[_1]:t.ZERO,[x1]:t.ONE,[y1]:t.SRC_COLOR,[Uf]:t.SRC_ALPHA,[A1]:t.SRC_ALPHA_SATURATE,[w1]:t.DST_COLOR,[M1]:t.DST_ALPHA,[S1]:t.ONE_MINUS_SRC_COLOR,[Of]:t.ONE_MINUS_SRC_ALPHA,[T1]:t.ONE_MINUS_DST_COLOR,[E1]:t.ONE_MINUS_DST_ALPHA,[b1]:t.CONSTANT_COLOR,[C1]:t.ONE_MINUS_CONSTANT_COLOR,[R1]:t.CONSTANT_ALPHA,[P1]:t.ONE_MINUS_CONSTANT_ALPHA};function D(z,ge,Z,te,xe,ve,He,Et,Gt,st){if(z===rr){y===!0&&(Ne(t.BLEND),y=!1);return}if(y===!1&&(ce(t.BLEND),y=!0),z!==d1){if(z!==v||st!==M){if((f!==br||x!==br)&&(t.blendEquation(t.FUNC_ADD),f=br,x=br),st)switch(z){case Ds:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}m=null,_=null,C=null,A=null,T.set(0,0,0),R=0,v=z,M=st}return}xe=xe||ge,ve=ve||Z,He=He||te,(ge!==f||xe!==x)&&(t.blendEquationSeparate(ne[ge],ne[xe]),f=ge,x=xe),(Z!==m||te!==_||ve!==C||He!==A)&&(t.blendFuncSeparate(ue[Z],ue[te],ue[ve],ue[He]),m=Z,_=te,C=ve,A=He),(Et.equals(T)===!1||Gt!==R)&&(t.blendColor(Et.r,Et.g,Et.b,Gt),T.copy(Et),R=Gt),v=z,M=!1}function De(z,ge){z.side===Pn?Ne(t.CULL_FACE):ce(t.CULL_FACE);let Z=z.side===Kt;ge&&(Z=!Z),se(Z),z.blending===Ds&&z.transparent===!1?D(rr):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const te=z.stencilWrite;a.setTest(te),te&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(z){S!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),S=z)}function we(z){z!==f1?(ce(t.CULL_FACE),z!==E&&(z===fm?t.cullFace(t.BACK):z===h1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),E=z}function de(z){z!==I&&(V&&t.lineWidth(z),I=z)}function Ue(z,ge,Z){z?(ce(t.POLYGON_OFFSET_FILL),(L!==ge||N!==Z)&&(t.polygonOffset(ge,Z),L=ge,N=Z)):Ne(t.POLYGON_OFFSET_FILL)}function Se(z){z?ce(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function P(z){z===void 0&&(z=t.TEXTURE0+k-1),q!==z&&(t.activeTexture(z),q=z)}function w(z,ge,Z){Z===void 0&&(q===null?Z=t.TEXTURE0+k-1:Z=q);let te=ee[Z];te===void 0&&(te={type:void 0,texture:void 0},ee[Z]=te),(te.type!==z||te.texture!==ge)&&(q!==Z&&(t.activeTexture(Z),q=Z),t.bindTexture(z,ge||ye[z]),te.type=z,te.texture=ge)}function X(){const z=ee[q];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ke(z){Ze.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Ze.copy(z))}function Ae(z){K.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),K.copy(z))}function Ke(z,ge){let Z=c.get(ge);Z===void 0&&(Z=new WeakMap,c.set(ge,Z));let te=Z.get(z);te===void 0&&(te=t.getUniformBlockIndex(ge,z.name),Z.set(z,te))}function We(z,ge){const te=c.get(ge).get(z);l.get(ge)!==te&&(t.uniformBlockBinding(ge,te,z.__bindingPointIndex),l.set(ge,te))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},q=null,ee={},h={},d=new WeakMap,p=[],g=null,y=!1,v=null,f=null,m=null,_=null,x=null,C=null,A=null,T=new qe(0,0,0),R=0,M=!1,S=null,E=null,I=null,L=null,N=null,Ze.set(0,0,t.canvas.width,t.canvas.height),K.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ne,bindFramebuffer:ze,drawBuffers:Fe,useProgram:Je,setBlending:D,setMaterial:De,setFlipSided:se,setCullFace:we,setLineWidth:de,setPolygonOffset:Ue,setScissorTest:Se,activeTexture:P,bindTexture:w,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:Te,texImage3D:Oe,updateUBOMapping:Ke,uniformBlockBinding:We,texStorage2D:$e,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Ce,compressedTexSubImage2D:me,compressedTexSubImage3D:Me,scissor:ke,viewport:Ae,reset:ut}}function a0(t,e,n,i){const r=q2(i);switch(n){case jv:return t*e;case $v:return t*e;case qv:return t*e*2;case Zv:return t*e/r.components*r.byteLength;case Pd:return t*e/r.components*r.byteLength;case Kv:return t*e*2/r.components*r.byteLength;case Ld:return t*e*2/r.components*r.byteLength;case Yv:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case Dd:return t*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case Cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $f:case Zf:return Math.max(t,16)*Math.max(e,8)/4;case Yf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case Kf:case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Rl:case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jv:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vh:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function q2(t){switch(t){case Pi:case Gv:return{byteLength:1,components:1};case ra:case Wv:case Ks:return{byteLength:2,components:1};case Cd:case Rd:return{byteLength:2,components:4};case Vr:case bd:case Mi:return{byteLength:4,components:1};case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Z2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):sa("canvas")}function y(P,w,X){let J=1;const ie=Se(P);if((ie.width>X||ie.height>X)&&(J=X/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(J*ie.width),Ce=Math.floor(J*ie.height);h===void 0&&(h=g(Q,Ce));const me=w?g(Q,Ce):h;return me.width=Q,me.height=Ce,me.getContext("2d").drawImage(P,0,0,Q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Ce+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),P;return P}function v(P){return P.generateMipmaps}function f(P){t.generateMipmap(P)}function m(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(P,w,X,J,ie=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=w;if(w===t.RED&&(X===t.FLOAT&&(Q=t.R32F),X===t.HALF_FLOAT&&(Q=t.R16F),X===t.UNSIGNED_BYTE&&(Q=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.R8UI),X===t.UNSIGNED_SHORT&&(Q=t.R16UI),X===t.UNSIGNED_INT&&(Q=t.R32UI),X===t.BYTE&&(Q=t.R8I),X===t.SHORT&&(Q=t.R16I),X===t.INT&&(Q=t.R32I)),w===t.RG&&(X===t.FLOAT&&(Q=t.RG32F),X===t.HALF_FLOAT&&(Q=t.RG16F),X===t.UNSIGNED_BYTE&&(Q=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RG8UI),X===t.UNSIGNED_SHORT&&(Q=t.RG16UI),X===t.UNSIGNED_INT&&(Q=t.RG32UI),X===t.BYTE&&(Q=t.RG8I),X===t.SHORT&&(Q=t.RG16I),X===t.INT&&(Q=t.RG32I)),w===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),X===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),X===t.UNSIGNED_INT&&(Q=t.RGB32UI),X===t.BYTE&&(Q=t.RGB8I),X===t.SHORT&&(Q=t.RGB16I),X===t.INT&&(Q=t.RGB32I)),w===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),X===t.UNSIGNED_INT&&(Q=t.RGBA32UI),X===t.BYTE&&(Q=t.RGBA8I),X===t.SHORT&&(Q=t.RGBA16I),X===t.INT&&(Q=t.RGBA32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),w===t.RGBA){const Ce=ie?wc:Qe.getTransfer(J);X===t.FLOAT&&(Q=t.RGBA32F),X===t.HALF_FLOAT&&(Q=t.RGBA16F),X===t.UNSIGNED_BYTE&&(Q=Ce===at?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(P,w){let X;return P?w===null||w===Vr||w===Xs?X=t.DEPTH24_STENCIL8:w===Mi?X=t.DEPTH32F_STENCIL8:w===ra&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vr||w===Xs?X=t.DEPTH_COMPONENT24:w===Mi?X=t.DEPTH_COMPONENT32F:w===ra&&(X=t.DEPTH_COMPONENT16),X}function C(P,w){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Kn&&P.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),R(w),w.isVideoTexture&&u.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),S(w)}function R(P){const w=i.get(P);if(w.__webglInit===void 0)return;const X=P.source,J=d.get(X);if(J){const ie=J[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(P),Object.keys(J).length===0&&d.delete(X)}i.remove(P)}function M(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const X=P.source,J=d.get(X);delete J[w.__cacheKey],o.memory.textures--}function S(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ie=0;ie<w.__webglFramebuffer[J].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[J][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)t.deleteFramebuffer(w.__webglFramebuffer[J]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=P.textures;for(let J=0,ie=X.length;J<ie;J++){const Q=i.get(X[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(X[J])}i.remove(P)}let E=0;function I(){E=0}function L(){const P=E;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),E+=1,P}function N(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function k(P,w){const X=i.get(P);if(P.isVideoTexture&&de(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(X,P,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function V(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){K(X,P,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function $(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){K(X,P,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function U(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){oe(X,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const q={[nc]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[jf]:t.MIRRORED_REPEAT},ee={[Kn]:t.NEAREST,[z1]:t.NEAREST_MIPMAP_NEAREST,[Oa]:t.NEAREST_MIPMAP_LINEAR,[si]:t.LINEAR,[ou]:t.LINEAR_MIPMAP_NEAREST,[Ir]:t.LINEAR_MIPMAP_LINEAR},le={[G1]:t.NEVER,[q1]:t.ALWAYS,[W1]:t.LESS,[Qv]:t.LEQUAL,[X1]:t.EQUAL,[$1]:t.GEQUAL,[j1]:t.GREATER,[Y1]:t.NOTEQUAL};function be(P,w){if(w.type===Mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===ou||w.magFilter===Oa||w.magFilter===Ir||w.minFilter===si||w.minFilter===ou||w.minFilter===Oa||w.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,q[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,q[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,q[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,ee[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Kn||w.minFilter!==Oa&&w.minFilter!==Ir||w.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ze(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const J=w.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const Q=N(w);if(Q!==P.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[Q].usedTimes++;const Ce=ie[P.__cacheKey];Ce!==void 0&&(ie[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(w)),P.__cacheKey=Q,P.__webglTexture=ie[Q].texture}return X}function K(P,w,X){let J=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=t.TEXTURE_3D);const ie=Ze(P,w),Q=w.source;n.bindTexture(J,P.__webglTexture,t.TEXTURE0+X);const Ce=i.get(Q);if(Q.version!==Ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const me=Qe.getPrimaries(Qe.workingColorSpace),Me=w.colorSpace===Yi?null:Qe.getPrimaries(w.colorSpace),$e=w.colorSpace===Yi||me===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ae=y(w.image,!1,r.maxTextureSize);ae=Ue(w,ae);const Te=s.convert(w.format,w.colorSpace),Oe=s.convert(w.type);let ke=_(w.internalFormat,Te,Oe,w.colorSpace,w.isVideoTexture);be(J,w);let Ae;const Ke=w.mipmaps,We=w.isVideoTexture!==!0,ut=Ce.__version===void 0||ie===!0,z=Q.dataReady,ge=C(w,ae);if(w.isDepthTexture)ke=x(w.format===js,w.type),ut&&(We?n.texStorage2D(t.TEXTURE_2D,1,ke,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,Te,Oe,null));else if(w.isDataTexture)if(Ke.length>0){We&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,Ke[0].width,Ke[0].height);for(let Z=0,te=Ke.length;Z<te;Z++)Ae=Ke[Z],We?z&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ae.width,Ae.height,0,Te,Oe,Ae.data);w.generateMipmaps=!1}else We?(ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,ae.width,ae.height),z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Te,Oe,ae.data)):n.texImage2D(t.TEXTURE_2D,0,ke,ae.width,ae.height,0,Te,Oe,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,Ke[0].width,Ke[0].height,ae.depth);for(let Z=0,te=Ke.length;Z<te;Z++)if(Ae=Ke[Z],w.format!==$n)if(Te!==null)if(We){if(z)if(w.layerUpdates.size>0){const xe=a0(Ae.width,Ae.height,w.format,w.type);for(const ve of w.layerUpdates){const He=Ae.data.subarray(ve*xe/Ae.data.BYTES_PER_ELEMENT,(ve+1)*xe/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,ve,Ae.width,Ae.height,1,Te,He)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ae.width,Ae.height,ae.depth,Te,Ae.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ae.width,Ae.height,ae.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?z&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Ae.width,Ae.height,ae.depth,Te,Oe,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,ke,Ae.width,Ae.height,ae.depth,0,Te,Oe,Ae.data)}else{We&&ut&&n.texStorage2D(t.TEXTURE_2D,ge,ke,Ke[0].width,Ke[0].height);for(let Z=0,te=Ke.length;Z<te;Z++)Ae=Ke[Z],w.format!==$n?Te!==null?We?z&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,ke,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?z&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ae.width,Ae.height,Te,Oe,Ae.data):n.texImage2D(t.TEXTURE_2D,Z,ke,Ae.width,Ae.height,0,Te,Oe,Ae.data)}else if(w.isDataArrayTexture)if(We){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,ke,ae.width,ae.height,ae.depth),z)if(w.layerUpdates.size>0){const Z=a0(ae.width,ae.height,w.format,w.type);for(const te of w.layerUpdates){const xe=ae.data.subarray(te*Z/ae.data.BYTES_PER_ELEMENT,(te+1)*Z/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Te,Oe,xe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,Oe,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,ae.width,ae.height,ae.depth,0,Te,Oe,ae.data);else if(w.isData3DTexture)We?(ut&&n.texStorage3D(t.TEXTURE_3D,ge,ke,ae.width,ae.height,ae.depth),z&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,Oe,ae.data)):n.texImage3D(t.TEXTURE_3D,0,ke,ae.width,ae.height,ae.depth,0,Te,Oe,ae.data);else if(w.isFramebufferTexture){if(ut)if(We)n.texStorage2D(t.TEXTURE_2D,ge,ke,ae.width,ae.height);else{let Z=ae.width,te=ae.height;for(let xe=0;xe<ge;xe++)n.texImage2D(t.TEXTURE_2D,xe,ke,Z,te,0,Te,Oe,null),Z>>=1,te>>=1}}else if(Ke.length>0){if(We&&ut){const Z=Se(Ke[0]);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}for(let Z=0,te=Ke.length;Z<te;Z++)Ae=Ke[Z],We?z&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Te,Oe,Ae):n.texImage2D(t.TEXTURE_2D,Z,ke,Te,Oe,Ae);w.generateMipmaps=!1}else if(We){if(ut){const Z=Se(ae);n.texStorage2D(t.TEXTURE_2D,ge,ke,Z.width,Z.height)}z&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Oe,ae)}else n.texImage2D(t.TEXTURE_2D,0,ke,Te,Oe,ae);v(w)&&f(J),Ce.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function oe(P,w,X){if(w.image.length!==6)return;const J=Ze(P,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const Q=i.get(ie);if(ie.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+X);const Ce=Qe.getPrimaries(Qe.workingColorSpace),me=w.colorSpace===Yi?null:Qe.getPrimaries(w.colorSpace),Me=w.colorSpace===Yi||Ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let te=0;te<6;te++)!$e&&!ae?Te[te]=y(w.image[te],!0,r.maxCubemapSize):Te[te]=ae?w.image[te].image:w.image[te],Te[te]=Ue(w,Te[te]);const Oe=Te[0],ke=s.convert(w.format,w.colorSpace),Ae=s.convert(w.type),Ke=_(w.internalFormat,ke,Ae,w.colorSpace),We=w.isVideoTexture!==!0,ut=Q.__version===void 0||J===!0,z=ie.dataReady;let ge=C(w,Oe);be(t.TEXTURE_CUBE_MAP,w);let Z;if($e){We&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ke,Oe.width,Oe.height);for(let te=0;te<6;te++){Z=Te[te].mipmaps;for(let xe=0;xe<Z.length;xe++){const ve=Z[xe];w.format!==$n?ke!==null?We?z&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ve.width,ve.height,ke,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,ve.width,ve.height,ke,Ae,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Ke,ve.width,ve.height,0,ke,Ae,ve.data)}}}else{if(Z=w.mipmaps,We&&ut){Z.length>0&&ge++;const te=Se(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ke,te.width,te.height)}for(let te=0;te<6;te++)if(ae){We?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te[te].width,Te[te].height,ke,Ae,Te[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,Te[te].width,Te[te].height,0,ke,Ae,Te[te].data);for(let xe=0;xe<Z.length;xe++){const He=Z[xe].image[te].image;We?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,He.width,He.height,ke,Ae,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ke,He.width,He.height,0,ke,Ae,He.data)}}else{We?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ke,Ae,Te[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ke,ke,Ae,Te[te]);for(let xe=0;xe<Z.length;xe++){const ve=Z[xe];We?z&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,ke,Ae,ve.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Ke,ke,Ae,ve.image[te])}}}v(w)&&f(t.TEXTURE_CUBE_MAP),Q.__version=ie.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ye(P,w,X,J,ie,Q){const Ce=s.convert(X.format,X.colorSpace),me=s.convert(X.type),Me=_(X.internalFormat,Ce,me,X.colorSpace),$e=i.get(w),ae=i.get(X);if(ae.__renderTarget=w,!$e.__hasExternalTextures){const Te=Math.max(1,w.width>>Q),Oe=Math.max(1,w.height>>Q);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,Q,Me,Te,Oe,w.depth,0,Ce,me,null):n.texImage2D(ie,Q,Me,Te,Oe,0,Ce,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),we(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ie,ae.__webglTexture,0,se(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ie,ae.__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(P,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Q=x(w.stencilBuffer,ie),Ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=se(w);we(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,Q,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,Q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,P)}else{const J=w.textures;for(let ie=0;ie<J.length;ie++){const Q=J[ie],Ce=s.convert(Q.format,Q.colorSpace),me=s.convert(Q.type),Me=_(Q.internalFormat,Ce,me,Q.colorSpace),$e=se(w);X&&we(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Me,w.width,w.height):we(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Me,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Me,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const ie=J.__webglTexture,Q=se(w);if(w.depthTexture.format===Is)we(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===js)we(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ze(P){const w=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,P)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=t.createRenderbuffer(),ce(w.__webglDepthbuffer[J],P,!1);else{const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),ce(w.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(P,w,X){const J=i.get(P);w!==void 0&&ye(J.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&ze(P)}function Je(P){const w=P.texture,X=i.get(P),J=i.get(w);P.addEventListener("dispose",T);const ie=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ce=ie.length>1;if(Ce||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=w.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let Me=0;Me<w.mipmaps.length;Me++)X.__webglFramebuffer[me][Me]=t.createFramebuffer()}else X.__webglFramebuffer[me]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)X.__webglFramebuffer[me]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let me=0,Me=ie.length;me<Me;me++){const $e=i.get(ie[me]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&we(P)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<ie.length;me++){const Me=ie[me];X.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const $e=s.convert(Me.format,Me.colorSpace),ae=s.convert(Me.type),Te=_(Me.internalFormat,$e,ae,Me.colorSpace,P.isXRRenderTarget===!0),Oe=se(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Te,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,X.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),be(t.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ye(X.__webglFramebuffer[me][Me],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Me);else ye(X.__webglFramebuffer[me],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let me=0,Me=ie.length;me<Me;me++){const $e=ie[me],ae=i.get($e);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),be(t.TEXTURE_2D,$e),ye(X.__webglFramebuffer,P,$e,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),v($e)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,J.__webglTexture),be(me,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)ye(X.__webglFramebuffer[Me],P,w,t.COLOR_ATTACHMENT0,me,Me);else ye(X.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,me,0);v(w)&&f(me),n.unbindTexture()}P.depthBuffer&&ze(P)}function ne(P){const w=P.textures;for(let X=0,J=w.length;X<J;X++){const ie=w[X];if(v(ie)){const Q=m(P),Ce=i.get(ie).__webglTexture;n.bindTexture(Q,Ce),f(Q),n.unbindTexture()}}}const ue=[],D=[];function De(P){if(P.samples>0){if(we(P)===!1){const w=P.textures,X=P.width,J=P.height;let ie=t.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(P),me=w.length>1;if(me)for(let Me=0;Me<w.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<w.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const $e=i.get(w[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,X,J,0,0,X,J,ie,t.NEAREST),l===!0&&(ue.length=0,D.length=0,ue.push(t.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ue.push(Q),D.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Me=0;Me<w.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const $e=i.get(w[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function se(P){return Math.min(r.maxSamples,P.samples)}function we(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Ue(P,w){const X=P.colorSpace,J=P.format,ie=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Js&&X!==Yi&&(Qe.getTransfer(X)===at?(J!==$n||ie!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=Fe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function K2(t,e){function n(i,r=Yi){let s;const o=Qe.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Cd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Xv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gv)return t.BYTE;if(i===Wv)return t.SHORT;if(i===ra)return t.UNSIGNED_SHORT;if(i===bd)return t.INT;if(i===Vr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Ks)return t.HALF_FLOAT;if(i===jv)return t.ALPHA;if(i===Yv)return t.RGB;if(i===$n)return t.RGBA;if(i===$v)return t.LUMINANCE;if(i===qv)return t.LUMINANCE_ALPHA;if(i===Is)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===Zv)return t.RED;if(i===Pd)return t.RED_INTEGER;if(i===Kv)return t.RG;if(i===Ld)return t.RG_INTEGER;if(i===Dd)return t.RGBA_INTEGER;if(i===Tl||i===Al||i===bl||i===Cl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yf||i===$f||i===qf||i===Zf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Jf||i===Qf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kf||i===Jf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===hh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ah)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===ph||i===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Rl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jv||i===gh||i===vh||i===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class J2 extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nr extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q2={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),f=this._getHandJoint(c,y);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fr({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new hr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iT extends Qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const y=new nT,v=n.getContextAttributes();let f=null,m=null;const _=[],x=[],C=new he;let A=null;const T=new yn;T.viewport=new lt;const R=new yn;R.viewport=new lt;const M=[T,R],S=new J2;let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=_[K];return oe===void 0&&(oe=new Uu,_[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=_[K];return oe===void 0&&(oe=new Uu,_[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=_[K];return oe===void 0&&(oe=new Uu,_[K]=oe),oe.getHandSpace()};function L(K){const oe=x.indexOf(K.inputSource);if(oe===-1)return;const ye=_[oe];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||o),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",k);for(let K=0;K<_.length;K++){const oe=x[K];oe!==null&&(x[K]=null,_[K].disconnect(oe))}E=null,I=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,m=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",N),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),m=new Gr(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let oe=null,ye=null,ce=null;v.depth&&(ce=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=v.stencil?js:Is,ye=v.stencil?Xs:Vr);const Ne={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new Gr(d.textureWidth,d.textureHeight,{format:$n,type:Pi,depthTexture:new d_(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(K){for(let oe=0;oe<K.removed.length;oe++){const ye=K.removed[oe],ce=x.indexOf(ye);ce>=0&&(x[ce]=null,_[ce].disconnect(ye))}for(let oe=0;oe<K.added.length;oe++){const ye=K.added[oe];let ce=x.indexOf(ye);if(ce===-1){for(let ze=0;ze<_.length;ze++)if(ze>=x.length){x.push(ye),ce=ze;break}else if(x[ze]===null){x[ze]=ye,ce=ze;break}if(ce===-1)break}const Ne=_[ce];Ne&&Ne.connect(ye)}}const V=new O,$=new O;function U(K,oe,ye){V.setFromMatrixPosition(oe.matrixWorld),$.setFromMatrixPosition(ye.matrixWorld);const ce=V.distanceTo($),Ne=oe.projectionMatrix.elements,ze=ye.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),Je=Ne[14]/(Ne[10]+1),ne=(Ne[9]+1)/Ne[5],ue=(Ne[9]-1)/Ne[5],D=(Ne[8]-1)/Ne[0],De=(ze[8]+1)/ze[0],se=Fe*D,we=Fe*De,de=ce/(-D+De),Ue=de*-D;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ue),K.translateZ(de),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Se=Fe+de,P=Je+de,w=se-Ue,X=we+(ce-Ue),J=ne*Je/P*Se,ie=ue*Je/P*Se;K.projectionMatrix.makePerspective(w,X,J,ie,Se,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let oe=K.near,ye=K.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),S.near=R.near=T.near=oe,S.far=R.far=T.far=ye,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const ce=K.parent,Ne=S.cameras;q(S,ce);for(let ze=0;ze<Ne.length;ze++)q(Ne[ze],ce);Ne.length===2?U(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),ee(K,S,ce)};function ee(K,oe,ye){ye===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let le=null;function be(K,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(m,p.framebuffer),e.setRenderTarget(m));let ce=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let ze=0;ze<ye.length;ze++){const Fe=ye[ze];let Je=null;if(p!==null)Je=p.getViewport(Fe);else{const ue=h.getViewSubImage(d,Fe);Je=ue.viewport,ze===0&&(e.setRenderTargetTextures(m,ue.colorTexture,d.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(m))}let ne=M[ze];ne===void 0&&(ne=new yn,ne.layers.enable(ze),ne.viewport=new lt,M[ze]=ne),ne.matrix.fromArray(Fe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Fe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Je.x,Je.y,Je.width,Je.height),ze===0&&(S.matrix.copy(ne.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(ne)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ze=h.getDepthInformation(ye[0]);ze&&ze.isValid&&ze.texture&&y.init(e,ze,r.renderState)}}for(let ye=0;ye<_.length;ye++){const ce=x[ye],Ne=_[ye];ce!==null&&Ne!==void 0&&Ne.update(ce,oe,c||o)}le&&le(K,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ze=new f_;Ze.setAnimationLoop(be),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}}const Mr=new Qn,rT=new je;function sT(t,e){function n(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function i(v,f){f.color.getRGB(v.fogColor.value,o_(t)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function r(v,f,m,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(v,f):f.isMeshToonMaterial?(s(v,f),h(v,f)):f.isMeshPhongMaterial?(s(v,f),u(v,f)):f.isMeshStandardMaterial?(s(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,x)):f.isMeshMatcapMaterial?(s(v,f),g(v,f)):f.isMeshDepthMaterial?s(v,f):f.isMeshDistanceMaterial?(s(v,f),y(v,f)):f.isMeshNormalMaterial?s(v,f):f.isLineBasicMaterial?(o(v,f),f.isLineDashedMaterial&&a(v,f)):f.isPointsMaterial?l(v,f,m,_):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,n(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Kt&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,n(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Kt&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,n(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,n(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);const m=e.get(f),_=m.envMap,x=m.envMapRotation;_&&(v.envMap.value=_,Mr.copy(x),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),v.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(Mr)),v.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,v.aoMapTransform))}function o(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform))}function a(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,m,_){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*m,v.scale.value=_*.5,f.map&&(v.map.value=f.map,n(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,n(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,n(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function u(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function h(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,m){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Kt&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,f){f.matcap&&(v.matcap.value=f.matcap)}function y(v,f){const m=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const x=_.program;i.uniformBlockBinding(m,x)}function c(m,_){let x=r[m.id];x===void 0&&(g(m),x=u(m),r[m.id]=x,m.addEventListener("dispose",v));const C=_.program;i.updateUBOMapping(m,C);const A=e.render.frame;s[m.id]!==A&&(d(m),s[m.id]=A)}function u(m){const _=h();m.__bindingPointIndex=_;const x=t.createBuffer(),C=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],x=m.uniforms,C=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=x.length;A<T;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,S=R.length;M<S;M++){const E=R[M];if(p(E,A,M,C)===!0){const I=E.__offset,L=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let k=0;k<L.length;k++){const V=L[k],$=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,I+N,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,x,C){const A=m.value,T=_+"_"+x;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(m){const _=m.uniforms;let x=0;const C=16;for(let T=0,R=_.length;T<R;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,E=M.length;S<E;S++){const I=M[S],L=Array.isArray(I.value)?I.value:[I.value];for(let N=0,k=L.length;N<k;N++){const V=L[N],$=y(V),U=x%C,q=U%$.boundary,ee=U+q;x+=q,ee!==0&&C-ee<$.storage&&(x+=C-ee),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=$.storage}}}const A=x%C;return A>0&&(x+=C-A),m.__size=x,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),_}function v(m){const _=m.target;_.removeEventListener("dispose",v);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class aT{constructor(e={}){const{canvas:n=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let v=null,f=null;const m=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=sr,this.toneMappingExposure=1;const x=this;let C=!1,A=0,T=0,R=null,M=-1,S=null;const E=new lt,I=new lt;let L=null;const N=new qe(0);let k=0,V=n.width,$=n.height,U=1,q=null,ee=null;const le=new lt(0,0,V,$),be=new lt(0,0,V,$);let Ze=!1;const K=new Od;let oe=!1,ye=!1;const ce=new je,Ne=new je,ze=new O,Fe=new lt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function ue(){return R===null?U:1}let D=i;function De(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wd}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),D===null){const B="webgl2";if(D=De(B,b),D===null)throw De(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,we,de,Ue,Se,P,w,X,J,ie,Q,Ce,me,Me,$e,ae,Te,Oe,ke,Ae,Ke,We,ut,z;function ge(){se=new hw(D),se.init(),We=new K2(D,se),we=new ow(D,se,e,We),de=new $2(D,se),we.reverseDepthBuffer&&d&&de.buffers.depth.setReversed(!0),Ue=new mw(D),Se=new I2,P=new Z2(D,se,de,Se,we,We,Ue),w=new lw(x),X=new fw(x),J=new MS(D),ut=new rw(D,J),ie=new dw(D,J,Ue,ut),Q=new vw(D,ie,J,Ue),ke=new gw(D,we,P),ae=new aw(Se),Ce=new D2(x,w,X,se,we,ut,ae),me=new sT(x,Se),Me=new U2,$e=new H2(se),Oe=new iw(x,w,X,de,Q,p,l),Te=new j2(x,Q,we),z=new oT(D,Ue,we,de),Ae=new sw(D,se,Ue),Ke=new pw(D,se,Ue),Ue.programs=Ce.programs,x.capabilities=we,x.extensions=se,x.properties=Se,x.renderLists=Me,x.shadowMap=Te,x.state=de,x.info=Ue}ge();const Z=new iT(x,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(V,$,!1))},this.getSize=function(b){return b.set(V,$)},this.setSize=function(b,B,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,$=B,n.width=Math.floor(b*U),n.height=Math.floor(B*U),j===!0&&(n.style.width=b+"px",n.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(V*U,$*U).floor()},this.setDrawingBufferSize=function(b,B,j){V=b,$=B,U=j,n.width=Math.floor(b*j),n.height=Math.floor(B*j),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,B,j,Y){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,B,j,Y),de.viewport(E.copy(le).multiplyScalar(U).round())},this.getScissor=function(b){return b.copy(be)},this.setScissor=function(b,B,j,Y){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,B,j,Y),de.scissor(I.copy(be).multiplyScalar(U).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){de.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(b=!0,B=!0,j=!0){let Y=0;if(b){let H=!1;if(R!==null){const fe=R.texture.format;H=fe===Dd||fe===Ld||fe===Pd}if(H){const fe=R.texture.type,_e=fe===Pi||fe===Vr||fe===ra||fe===Xs||fe===Cd||fe===Rd,Re=Oe.getClearColor(),Pe=Oe.getClearAlpha(),Be=Re.r,Ve=Re.g,Le=Re.b;_e?(g[0]=Be,g[1]=Ve,g[2]=Le,g[3]=Pe,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Be,y[1]=Ve,y[2]=Le,y[3]=Pe,D.clearBufferiv(D.COLOR,0,y))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),j&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),$e.dispose(),Se.dispose(),w.dispose(),X.dispose(),Q.dispose(),ut.dispose(),z.dispose(),Ce.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",$d),Z.removeEventListener("sessionend",qd),gr.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Ue.autoReset,B=Te.enabled,j=Te.autoUpdate,Y=Te.needsUpdate,H=Te.type;ge(),Ue.autoReset=b,Te.enabled=B,Te.autoUpdate=j,Te.needsUpdate=Y,Te.type=H}function ve(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const B=b.target;B.removeEventListener("dispose",He),Et(B)}function Et(b){Gt(b),Se.remove(b)}function Gt(b){const B=Se.get(b).programs;B!==void 0&&(B.forEach(function(j){Ce.releaseProgram(j)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,j,Y,H,fe){B===null&&(B=Je);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Re=O_(b,B,j,Y,H);de.setMaterial(Y,_e);let Pe=j.index,Be=1;if(Y.wireframe===!0){if(Pe=ie.getWireframeAttribute(j),Pe===void 0)return;Be=2}const Ve=j.drawRange,Le=j.attributes.position;let tt=Ve.start*Be,ft=(Ve.start+Ve.count)*Be;fe!==null&&(tt=Math.max(tt,fe.start*Be),ft=Math.min(ft,(fe.start+fe.count)*Be)),Pe!==null?(tt=Math.max(tt,0),ft=Math.min(ft,Pe.count)):Le!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,Le.count));const dt=ft-tt;if(dt<0||dt===1/0)return;ut.setup(H,Y,Re,j,Pe);let an,nt=Ae;if(Pe!==null&&(an=J.get(Pe),nt=Ke,nt.setIndex(an)),H.isMesh)Y.wireframe===!0?(de.setLineWidth(Y.wireframeLinewidth*ue()),nt.setMode(D.LINES)):nt.setMode(D.TRIANGLES);else if(H.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),de.setLineWidth(Ie*ue()),H.isLineSegments?nt.setMode(D.LINES):H.isLineLoop?nt.setMode(D.LINE_LOOP):nt.setMode(D.LINE_STRIP)}else H.isPoints?nt.setMode(D.POINTS):H.isSprite&&nt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,ui=H._multiDrawCounts,it=H._multiDrawCount,Fn=Pe?J.get(Pe).bytesPerElement:1,$r=Se.get(Y).currentProgram.getUniforms();for(let gn=0;gn<it;gn++)$r.setValue(D,"_gl_DrawID",gn),nt.render(Ie[gn]/Fn,ui[gn])}else if(H.isInstancedMesh)nt.renderInstances(tt,dt,H.count);else if(j.isInstancedBufferGeometry){const Ie=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ui=Math.min(j.instanceCount,Ie);nt.renderInstances(tt,dt,ui)}else nt.render(tt,dt)};function st(b,B,j){b.transparent===!0&&b.side===Pn&&b.forceSinglePass===!1?(b.side=Kt,b.needsUpdate=!0,_a(b,B,j),b.side=ur,b.needsUpdate=!0,_a(b,B,j),b.side=Pn):_a(b,B,j)}this.compile=function(b,B,j=null){j===null&&(j=b),f=$e.get(j),f.init(B),_.push(f),j.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),b!==j&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const Y=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let _e=0;_e<fe.length;_e++){const Re=fe[_e];st(Re,j,H),Y.add(Re)}else st(fe,j,H),Y.add(fe)}),_.pop(),f=null,Y},this.compileAsync=function(b,B,j=null){const Y=this.compile(b,B,j);return new Promise(H=>{function fe(){if(Y.forEach(function(_e){Se.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){H(b);return}setTimeout(fe,10)}se.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let On=null;function ci(b){On&&On(b)}function $d(){gr.stop()}function qd(){gr.start()}const gr=new f_;gr.setAnimationLoop(ci),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(b){On=b,Z.setAnimationLoop(b),b===null?gr.stop():gr.start()},Z.addEventListener("sessionstart",$d),Z.addEventListener("sessionend",qd),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,R),f=$e.get(b,_.length),f.init(B),_.push(f),Ne.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,oe=ae.init(this.clippingPlanes,ye),v=Me.get(b,m.length),v.init(),m.push(v),Z.enabled===!0&&Z.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&Ic(fe,B,-1/0,x.sortObjects)}Ic(b,B,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,ee),ne=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ne&&Oe.addToRenderList(v,b),this.info.render.frame++,oe===!0&&ae.beginShadows();const j=f.state.shadowsArray;Te.render(j,b,B),oe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,H=v.transmissive;if(f.setupLights(),B.isArrayCamera){const fe=B.cameras;if(H.length>0)for(let _e=0,Re=fe.length;_e<Re;_e++){const Pe=fe[_e];Kd(Y,H,b,Pe)}ne&&Oe.render(b);for(let _e=0,Re=fe.length;_e<Re;_e++){const Pe=fe[_e];Zd(v,b,Pe,Pe.viewport)}}else H.length>0&&Kd(Y,H,b,B),ne&&Oe.render(b),Zd(v,b,B);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,B),ut.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(f=_[_.length-1],oe===!0&&ae.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Ic(b,B,j,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){Y&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ne);const _e=Q.update(b),Re=b.material;Re.visible&&v.push(b,_e,Re,j,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const _e=Q.update(b),Re=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(Ne)),Array.isArray(Re)){const Pe=_e.groups;for(let Be=0,Ve=Pe.length;Be<Ve;Be++){const Le=Pe[Be],tt=Re[Le.materialIndex];tt&&tt.visible&&v.push(b,_e,tt,j,Fe.z,Le)}}else Re.visible&&v.push(b,_e,Re,j,Fe.z,null)}}const fe=b.children;for(let _e=0,Re=fe.length;_e<Re;_e++)Ic(fe[_e],B,j,Y)}function Zd(b,B,j,Y){const H=b.opaque,fe=b.transmissive,_e=b.transparent;f.setupLightsView(j),oe===!0&&ae.setGlobalState(x.clippingPlanes,j),Y&&de.viewport(E.copy(Y)),H.length>0&&va(H,B,j),fe.length>0&&va(fe,B,j),_e.length>0&&va(_e,B,j),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Kd(b,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Gr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Ks:Pi,minFilter:Ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const fe=f.state.transmissionRenderTarget[Y.id],_e=Y.viewport||E;fe.setSize(_e.z,_e.w);const Re=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(N),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),ne&&Oe.render(j);const Pe=x.toneMapping;x.toneMapping=sr;const Be=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),oe===!0&&ae.setGlobalState(x.clippingPlanes,Y),va(b,j,Y),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Le=0,tt=B.length;Le<tt;Le++){const ft=B[Le],dt=ft.object,an=ft.geometry,nt=ft.material,Ie=ft.group;if(nt.side===Pn&&dt.layers.test(Y.layers)){const ui=nt.side;nt.side=Kt,nt.needsUpdate=!0,Jd(dt,j,Y,an,nt,Ie),nt.side=ui,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}x.setRenderTarget(Re),x.setClearColor(N,k),Be!==void 0&&(Y.viewport=Be),x.toneMapping=Pe}function va(b,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,fe=b.length;H<fe;H++){const _e=b[H],Re=_e.object,Pe=_e.geometry,Be=Y===null?_e.material:Y,Ve=_e.group;Re.layers.test(j.layers)&&Jd(Re,B,j,Pe,Be,Ve)}}function Jd(b,B,j,Y,H,fe){b.onBeforeRender(x,B,j,Y,H,fe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,B,j,Y,b,fe),H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,x.renderBufferDirect(j,B,Y,H,b,fe),H.side=ur,H.needsUpdate=!0,x.renderBufferDirect(j,B,Y,H,b,fe),H.side=Pn):x.renderBufferDirect(j,B,Y,H,b,fe),b.onAfterRender(x,B,j,Y,H,fe)}function _a(b,B,j){B.isScene!==!0&&(B=Je);const Y=Se.get(b),H=f.state.lights,fe=f.state.shadowsArray,_e=H.state.version,Re=Ce.getParameters(b,H.state,fe,B,j),Pe=Ce.getProgramCacheKey(Re);let Be=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?X:w).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",He),Be=new Map,Y.programs=Be);let Ve=Be.get(Pe);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===_e)return ep(b,Re),Ve}else Re.uniforms=Ce.getUniforms(b),b.onBeforeCompile(Re,x),Ve=Ce.acquireProgram(Re,Pe),Be.set(Pe,Ve),Y.uniforms=Re.uniforms;const Le=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=ae.uniform),ep(b,Re),Y.needsLights=k_(b),Y.lightsStateVersion=_e,Y.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function Qd(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Pl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function ep(b,B){const j=Se.get(b);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function O_(b,B,j,Y,H){B.isScene!==!0&&(B=Je),P.resetTextureUnits();const fe=B.fog,_e=Y.isMeshStandardMaterial?B.environment:null,Re=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Js,Pe=(Y.isMeshStandardMaterial?X:w).get(Y.envMap||_e),Be=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,ft=!!j.morphAttributes.color;let dt=sr;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=x.toneMapping);const an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nt=an!==void 0?an.length:0,Ie=Se.get(Y),ui=f.state.lights;if(oe===!0&&(ye===!0||b!==S)){const An=b===S&&Y.id===M;ae.setState(Y,b,An)}let it=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ui.state.version||Ie.outputColorSpace!==Re||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Pe||Y.fog===!0&&Ie.fog!==fe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ae.numPlanes||Ie.numIntersection!==ae.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==Ve||Ie.morphTargets!==Le||Ie.morphNormals!==tt||Ie.morphColors!==ft||Ie.toneMapping!==dt||Ie.morphTargetsCount!==nt)&&(it=!0):(it=!0,Ie.__version=Y.version);let Fn=Ie.currentProgram;it===!0&&(Fn=_a(Y,B,H));let $r=!1,gn=!1,no=!1;const pt=Fn.getUniforms(),ei=Ie.uniforms;if(de.useProgram(Fn.program)&&($r=!0,gn=!0,no=!0),Y.id!==M&&(M=Y.id,gn=!0),$r||S!==b){de.buffers.depth.getReversed()?(ce.copy(b.projectionMatrix),Q1(ce),eS(ce),pt.setValue(D,"projectionMatrix",ce)):pt.setValue(D,"projectionMatrix",b.projectionMatrix),pt.setValue(D,"viewMatrix",b.matrixWorldInverse);const Ii=pt.map.cameraPosition;Ii!==void 0&&Ii.setValue(D,ze.setFromMatrixPosition(b.matrixWorld)),we.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,gn=!0,no=!0)}if(H.isSkinnedMesh){pt.setOptional(D,H,"bindMatrix"),pt.setOptional(D,H,"bindMatrixInverse");const An=H.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),pt.setValue(D,"boneTexture",An.boneTexture,P))}H.isBatchedMesh&&(pt.setOptional(D,H,"batchingTexture"),pt.setValue(D,"batchingTexture",H._matricesTexture,P),pt.setOptional(D,H,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",H._indirectTexture,P),pt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",H._colorsTexture,P));const io=j.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&ke.update(H,j,Fn),(gn||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,pt.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ei.envMap.value=Pe,ei.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(ei.envMapIntensity.value=B.environmentIntensity),gn&&(pt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&F_(ei,no),fe&&Y.fog===!0&&me.refreshFogUniforms(ei,fe),me.refreshMaterialUniforms(ei,Y,U,$,f.state.transmissionRenderTarget[b.id]),Pl.upload(D,Qd(Ie),ei,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pl.upload(D,Qd(Ie),ei,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(D,"center",H.center),pt.setValue(D,"modelViewMatrix",H.modelViewMatrix),pt.setValue(D,"normalMatrix",H.normalMatrix),pt.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const An=Y.uniformsGroups;for(let Ii=0,Ni=An.length;Ii<Ni;Ii++){const tp=An[Ii];z.update(tp,Fn),z.bind(tp,Fn)}}return Fn}function F_(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function k_(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,B,j){Se.get(b.texture).__webglTexture=B,Se.get(b.depthTexture).__webglTexture=j;const Y=Se.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const j=Se.get(b);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,j=0){R=b,A=B,T=j;let Y=!0,H=null,fe=!1,_e=!1;if(b){const Pe=Se.get(b);if(Pe.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)P.setupRenderTarget(b);else if(Pe.__hasExternalTextures)P.rebindTextures(b,Se.get(b.texture).__webglTexture,Se.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(Pe.__boundDepthTexture!==Le){if(Le!==null&&Se.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(b)}}const Be=b.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(_e=!0);const Ve=Se.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[B])?H=Ve[B][j]:H=Ve[B],fe=!0):b.samples>0&&P.useMultisampledRTT(b)===!1?H=Se.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[j]:H=Ve,E.copy(b.viewport),I.copy(b.scissor),L=b.scissorTest}else E.copy(le).multiplyScalar(U).floor(),I.copy(be).multiplyScalar(U).floor(),L=Ze;if(de.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&de.drawBuffers(b,H),de.viewport(E),de.scissor(I),de.setScissorTest(L),fe){const Pe=Se.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,j)}else if(_e){const Pe=Se.get(b.texture),Be=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,Be)}M=-1},this.readRenderTargetPixels=function(b,B,j,Y,H,fe,_e){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re){de.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Pe=b.texture,Be=Pe.format,Ve=Pe.type;if(!we.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&j>=0&&j<=b.height-H&&D.readPixels(B,j,Y,H,We.convert(Be),We.convert(Ve),fe)}finally{const Pe=R!==null?Se.get(R).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,B,j,Y,H,fe,_e){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Se.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_e!==void 0&&(Re=Re[_e]),Re){const Pe=b.texture,Be=Pe.format,Ve=Pe.type;if(!we.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-Y&&j>=0&&j<=b.height-H){de.bindFramebuffer(D.FRAMEBUFFER,Re);const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(B,j,Y,H,We.convert(Be),We.convert(Ve),0);const tt=R!==null?Se.get(R).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,tt);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await J1(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(Le),D.deleteSync(ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,j=0){b.isTexture!==!0&&(bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-j),H=Math.floor(b.image.width*Y),fe=Math.floor(b.image.height*Y),_e=B!==null?B.x:0,Re=B!==null?B.y:0;P.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,_e,Re,H,fe),de.unbindTexture()},this.copyTextureToTexture=function(b,B,j=null,Y=null,H=0){b.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],B=arguments[2],H=arguments[3]||0,j=null);let fe,_e,Re,Pe,Be,Ve,Le,tt,ft;const dt=b.isCompressedTexture?b.mipmaps[H]:b.image;j!==null?(fe=j.max.x-j.min.x,_e=j.max.y-j.min.y,Re=j.isBox3?j.max.z-j.min.z:1,Pe=j.min.x,Be=j.min.y,Ve=j.isBox3?j.min.z:0):(fe=dt.width,_e=dt.height,Re=dt.depth||1,Pe=0,Be=0,Ve=0),Y!==null?(Le=Y.x,tt=Y.y,ft=Y.z):(Le=0,tt=0,ft=0);const an=We.convert(B.format),nt=We.convert(B.type);let Ie;B.isData3DTexture?(P.setTexture3D(B,0),Ie=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Ie=D.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Ie=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const ui=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fn=D.getParameter(D.UNPACK_SKIP_PIXELS),$r=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const no=b.isDataArrayTexture||b.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const ei=Se.get(b),io=Se.get(B),An=Se.get(ei.__renderTarget),Ii=Se.get(io.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,An.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Ni=0;Ni<Re;Ni++)no&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(b).__webglTexture,H,Ve+Ni),b.isDepthTexture?(pt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(B).__webglTexture,H,ft+Ni),D.blitFramebuffer(Pe,Be,fe,_e,Le,tt,fe,_e,D.DEPTH_BUFFER_BIT,D.NEAREST)):pt?D.copyTexSubImage3D(Ie,H,Le,tt,ft+Ni,Pe,Be,fe,_e):D.copyTexSubImage2D(Ie,H,Le,tt,ft+Ni,Pe,Be,fe,_e);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ie,H,Le,tt,ft,fe,_e,Re,an,nt,dt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,H,Le,tt,ft,fe,_e,Re,an,dt.data):D.texSubImage3D(Ie,H,Le,tt,ft,fe,_e,Re,an,nt,dt):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,Le,tt,fe,_e,an,nt,dt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,Le,tt,dt.width,dt.height,an,dt.data):D.texSubImage2D(D.TEXTURE_2D,H,Le,tt,fe,_e,an,nt,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ui),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$r),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),H===0&&B.generateMipmaps&&D.generateMipmap(Ie),de.unbindTexture()},this.copyTextureToTexture3D=function(b,B,j=null,Y=null,H=0){return b.isTexture!==!0&&(bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0),bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,j,Y,H)},this.initRenderTarget=function(b){Se.get(b).__webglFramebuffer===void 0&&P.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?P.setTextureCube(b,0):b.isData3DTexture?P.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?P.setTexture2DArray(b,0):P.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,de.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}class __ extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Mh extends Yr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new O,sc=new O,l0=new je,_o=new Nd,il=new Tc,Ou=new O,c0=new O;class u0 extends Ft{constructor(e=new kt,n=new Mh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)rc.fromBufferAttribute(n,r-1),sc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new ct(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;l0.copy(r).invert(),_o.copy(e.ray).applyMatrix4(l0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const f=u.getX(y),m=u.getX(y+1),_=rl(this,e,_o,l,f,m);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(g-1),v=u.getX(p),f=rl(this,e,_o,l,y,v);f&&n.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const f=rl(this,e,_o,l,y,y+1);f&&n.push(f)}if(this.isLineLoop){const y=rl(this,e,_o,l,g-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(rc.fromBufferAttribute(o,r),sc.fromBufferAttribute(o,s),n.distanceSqToSegment(rc,sc,Ou,c0)>i)return;Ou.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Ou);if(!(l<e.near||l>e.far))return{distance:l,point:c0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class bc extends Jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new he:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],s=[],o=[],a=new O,l=new je;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(qt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kd extends li{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new he){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lT extends kd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const sl=new O,Fu=new zd,ku=new zd,zu=new zd;class cT extends li{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(sl.subVectors(r[0],r[1]).add(r[0]),c=sl);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(sl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=sl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),y=Math.pow(h.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),g<1e-4&&(g=y),v<1e-4&&(v=y),Fu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,v),ku.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,v),zu.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,v)}else this.curveType==="catmullrom"&&(Fu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ku.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),zu.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return i.set(Fu.calc(l),ku.calc(l),zu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function f0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function uT(t,e){const n=1-t;return n*n*e}function fT(t,e){return 2*(1-t)*t*e}function hT(t,e){return t*t*e}function ko(t,e,n,i){return uT(t,e)+fT(t,n)+hT(t,i)}function dT(t,e){const n=1-t;return n*n*n*e}function pT(t,e){const n=1-t;return 3*n*n*t*e}function mT(t,e){return 3*(1-t)*t*t*e}function gT(t,e){return t*t*t*e}function zo(t,e,n,i,r){return dT(t,e)+pT(t,n)+mT(t,i)+gT(t,r)}class x_ extends li{constructor(e=new he,n=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vT extends li{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zo(e,r.x,s.x,o.x,a.x),zo(e,r.y,s.y,o.y,a.y),zo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y_ extends li{constructor(e=new he,n=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new he){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new he){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _T extends li{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends li{constructor(e=new he,n=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new he){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xT extends li{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ko(e,r.x,s.x,o.x),ko(e,r.y,s.y,o.y),ko(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new he){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(f0(a,l.x,c.x,u.x,h.x),f0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new he().fromArray(r))}return this}}var Eh=Object.freeze({__proto__:null,ArcCurve:lT,CatmullRomCurve3:cT,CubicBezierCurve:x_,CubicBezierCurve3:vT,EllipseCurve:kd,LineCurve:y_,LineCurve3:_T,QuadraticBezierCurve:S_,QuadraticBezierCurve3:xT,SplineCurve:M_});class yT extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Eh[r.type]().fromJSON(r))}return this}}class h0 extends yT{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new y_(this.currentPoint.clone(),new he(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new S_(this.currentPoint.clone(),new he(e,n),new he(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new x_(this.currentPoint.clone(),new he(e,n),new he(i,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new M_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new kd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bd extends kt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new O,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bo extends kt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let g=0;const y=[],v=i/2;let f=0;m(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(p,2));function m(){const x=new O,C=new O;let A=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,E=S*(n-e)+e;for(let I=0;I<=r;I++){const L=I/r,N=L*l+a,k=Math.sin(N),V=Math.cos(N);C.x=E*k,C.y=-S*i+v,C.z=E*V,h.push(C.x,C.y,C.z),x.set(k,T,V).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-S),M.push(g++)}y.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=y[M][R],E=y[M+1][R],I=y[M+1][R+1],L=y[M][R+1];(e>0||M!==0)&&(u.push(S,E,L),A+=3),(n>0||M!==s-1)&&(u.push(E,I,L),A+=3)}c.addGroup(f,A,0),f+=A}function _(x){const C=g,A=new he,T=new O;let R=0;const M=x===!0?e:n,S=x===!0?1:-1;for(let I=1;I<=r;I++)h.push(0,v*S,0),d.push(0,S,0),p.push(.5,.5),g++;const E=g;for(let I=0;I<=r;I++){const N=I/r*l+a,k=Math.cos(N),V=Math.sin(N);T.x=M*V,T.y=v*S,T.z=M*k,h.push(T.x,T.y,T.z),d.push(0,S,0),A.x=k*.5+.5,A.y=V*.5*S+.5,p.push(A.x,A.y),g++}for(let I=0;I<r;I++){const L=C+I,N=E+I;x===!0?u.push(N,N+1,L):u.push(N+1,N,L),R+=3}c.addGroup(f,R,x===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hd extends h0{constructor(e){super(e),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new h0().fromJSON(r))}return this}}const ST={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=E_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,p;if(i&&(s=AT(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)h=t[g],d=t[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return oa(s,o,n,a,l,p,0),o}};function E_(t,e,n,i,r){let s,o;if(r===FT(t,e,n,i)>0)for(s=e;s<n;s+=i)o=d0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=d0(s,t[s],t[s+1],o);return o&&Cc(o,o.next)&&(la(o),o=o.next),o}function Wr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Cc(n,n.next)||yt(n.prev,n,n.next)===0)){if(la(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function oa(t,e,n,i,r,s,o){if(!t)return;!o&&s&&LT(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?ET(t,i,r,s):MT(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),la(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=wT(Wr(t),e,n),oa(t,e,n,i,r,s,2)):o===2&&TT(t,e,n,i,r,s):oa(Wr(t),e,n,i,r,s,1);break}}}function MT(t){const e=t.prev,n=t,i=t.next;if(yt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&ws(r,a,s,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ET(t,e,n,i){const r=t.prev,s=t,o=t.next;if(yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,y=a>l?a>c?a:c:l>c?l:c,v=u>h?u>d?u:d:h>d?h:d,f=wh(p,g,e,n,i),m=wh(y,v,e,n,i);let _=t.prevZ,x=t.nextZ;for(;_&&_.z>=f&&x&&x.z<=m;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&ws(a,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&ws(a,u,l,h,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=v&&_!==r&&_!==o&&ws(a,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=m;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=v&&x!==r&&x!==o&&ws(a,u,l,h,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wT(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Cc(r,s)&&w_(r,i,i.next,s)&&aa(r,s)&&aa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),la(i),la(i.next),i=t=s),i=i.next}while(i!==t);return Wr(i)}function TT(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&NT(o,a)){let l=T_(o,a);o=Wr(o,o.next),l=Wr(l,l.next),oa(o,e,n,i,r,s,0),oa(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function AT(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=E_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(IT(c));for(r.sort(bT),s=0;s<r.length;s++)n=CT(r[s],n);return n}function bT(t,e){return t.x-e.x}function CT(t,e){const n=RT(t,e);if(!n)return e;const i=T_(n,t);return Wr(i,i.next),Wr(n,n.next)}function RT(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const d=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=s&&d>i&&(i=d,r=n.x<n.next.x?n:n.next,d===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ws(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),aa(n,t)&&(h<u||h===u&&(n.x>r.x||n.x===r.x&&PT(r,n)))&&(r=n,u=h)),n=n.next;while(n!==a);return r}function PT(t,e){return yt(t.prev,t,e.prev)<0&&yt(e.next,t,t.next)<0}function LT(t,e,n,i){let r=t;do r.z===0&&(r.z=wh(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,DT(r)}function DT(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function wh(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function IT(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ws(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function NT(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!UT(t,e)&&(aa(t,e)&&aa(e,t)&&OT(t,e)&&(yt(t.prev,t,e.prev)||yt(t,e.prev,e))||Cc(t,e)&&yt(t.prev,t,t.next)>0&&yt(e.prev,e,e.next)>0)}function yt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Cc(t,e){return t.x===e.x&&t.y===e.y}function w_(t,e,n,i){const r=al(yt(t,e,n)),s=al(yt(t,e,i)),o=al(yt(n,i,t)),a=al(yt(n,i,e));return!!(r!==s&&o!==a||r===0&&ol(t,n,e)||s===0&&ol(t,i,e)||o===0&&ol(n,t,i)||a===0&&ol(n,e,i))}function ol(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function al(t){return t>0?1:t<0?-1:0}function UT(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&w_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function aa(t,e){return yt(t.prev,t,t.next)<0?yt(t,e,t.next)>=0&&yt(t,t.prev,e)>=0:yt(t,e,t.prev)<0||yt(t,t.next,e)<0}function OT(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function T_(t,e){const n=new Th(t.i,t.x,t.y),i=new Th(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function d0(t,e,n,i){const r=new Th(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function la(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Th(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FT(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class or{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return or.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];p0(e),m0(i,e);let o=e.length;n.forEach(p0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,m0(i,n[l]);const a=ST.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function p0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function m0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Vd extends kt{constructor(e=new Hd([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let d=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,v=n.bevelSegments!==void 0?n.bevelSegments:3;const f=n.extrudePath,m=n.UVGenerator!==void 0?n.UVGenerator:kT;let _,x=!1,C,A,T,R;f&&(_=f.getSpacedPoints(u),x=!0,d=!1,C=f.computeFrenetFrames(u,!1),A=new O,T=new O,R=new O),d||(v=0,p=0,g=0,y=0);const M=a.extractPoints(c);let S=M.shape;const E=M.holes;if(!or.isClockWise(S)){S=S.reverse();for(let ne=0,ue=E.length;ne<ue;ne++){const D=E[ne];or.isClockWise(D)&&(E[ne]=D.reverse())}}const L=or.triangulateShape(S,E),N=S;for(let ne=0,ue=E.length;ne<ue;ne++){const D=E[ne];S=S.concat(D)}function k(ne,ue,D){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ue,D)}const V=S.length,$=L.length;function U(ne,ue,D){let De,se,we;const de=ne.x-ue.x,Ue=ne.y-ue.y,Se=D.x-ne.x,P=D.y-ne.y,w=de*de+Ue*Ue,X=de*P-Ue*Se;if(Math.abs(X)>Number.EPSILON){const J=Math.sqrt(w),ie=Math.sqrt(Se*Se+P*P),Q=ue.x-Ue/J,Ce=ue.y+de/J,me=D.x-P/ie,Me=D.y+Se/ie,$e=((me-Q)*P-(Me-Ce)*Se)/(de*P-Ue*Se);De=Q+de*$e-ne.x,se=Ce+Ue*$e-ne.y;const ae=De*De+se*se;if(ae<=2)return new he(De,se);we=Math.sqrt(ae/2)}else{let J=!1;de>Number.EPSILON?Se>Number.EPSILON&&(J=!0):de<-Number.EPSILON?Se<-Number.EPSILON&&(J=!0):Math.sign(Ue)===Math.sign(P)&&(J=!0),J?(De=-Ue,se=de,we=Math.sqrt(w)):(De=de,se=Ue,we=Math.sqrt(w/2))}return new he(De/we,se/we)}const q=[];for(let ne=0,ue=N.length,D=ue-1,De=ne+1;ne<ue;ne++,D++,De++)D===ue&&(D=0),De===ue&&(De=0),q[ne]=U(N[ne],N[D],N[De]);const ee=[];let le,be=q.concat();for(let ne=0,ue=E.length;ne<ue;ne++){const D=E[ne];le=[];for(let De=0,se=D.length,we=se-1,de=De+1;De<se;De++,we++,de++)we===se&&(we=0),de===se&&(de=0),le[De]=U(D[De],D[we],D[de]);ee.push(le),be=be.concat(le)}for(let ne=0;ne<v;ne++){const ue=ne/v,D=p*Math.cos(ue*Math.PI/2),De=g*Math.sin(ue*Math.PI/2)+y;for(let se=0,we=N.length;se<we;se++){const de=k(N[se],q[se],De);ce(de.x,de.y,-D)}for(let se=0,we=E.length;se<we;se++){const de=E[se];le=ee[se];for(let Ue=0,Se=de.length;Ue<Se;Ue++){const P=k(de[Ue],le[Ue],De);ce(P.x,P.y,-D)}}}const Ze=g+y;for(let ne=0;ne<V;ne++){const ue=d?k(S[ne],be[ne],Ze):S[ne];x?(T.copy(C.normals[0]).multiplyScalar(ue.x),A.copy(C.binormals[0]).multiplyScalar(ue.y),R.copy(_[0]).add(T).add(A),ce(R.x,R.y,R.z)):ce(ue.x,ue.y,0)}for(let ne=1;ne<=u;ne++)for(let ue=0;ue<V;ue++){const D=d?k(S[ue],be[ue],Ze):S[ue];x?(T.copy(C.normals[ne]).multiplyScalar(D.x),A.copy(C.binormals[ne]).multiplyScalar(D.y),R.copy(_[ne]).add(T).add(A),ce(R.x,R.y,R.z)):ce(D.x,D.y,h/u*ne)}for(let ne=v-1;ne>=0;ne--){const ue=ne/v,D=p*Math.cos(ue*Math.PI/2),De=g*Math.sin(ue*Math.PI/2)+y;for(let se=0,we=N.length;se<we;se++){const de=k(N[se],q[se],De);ce(de.x,de.y,h+D)}for(let se=0,we=E.length;se<we;se++){const de=E[se];le=ee[se];for(let Ue=0,Se=de.length;Ue<Se;Ue++){const P=k(de[Ue],le[Ue],De);x?ce(P.x,P.y+_[u-1].y,_[u-1].x+D):ce(P.x,P.y,h+D)}}}K(),oe();function K(){const ne=r.length/3;if(d){let ue=0,D=V*ue;for(let De=0;De<$;De++){const se=L[De];Ne(se[2]+D,se[1]+D,se[0]+D)}ue=u+v*2,D=V*ue;for(let De=0;De<$;De++){const se=L[De];Ne(se[0]+D,se[1]+D,se[2]+D)}}else{for(let ue=0;ue<$;ue++){const D=L[ue];Ne(D[2],D[1],D[0])}for(let ue=0;ue<$;ue++){const D=L[ue];Ne(D[0]+V*u,D[1]+V*u,D[2]+V*u)}}i.addGroup(ne,r.length/3-ne,0)}function oe(){const ne=r.length/3;let ue=0;ye(N,ue),ue+=N.length;for(let D=0,De=E.length;D<De;D++){const se=E[D];ye(se,ue),ue+=se.length}i.addGroup(ne,r.length/3-ne,1)}function ye(ne,ue){let D=ne.length;for(;--D>=0;){const De=D;let se=D-1;se<0&&(se=ne.length-1);for(let we=0,de=u+v*2;we<de;we++){const Ue=V*we,Se=V*(we+1),P=ue+De+Ue,w=ue+se+Ue,X=ue+se+Se,J=ue+De+Se;ze(P,w,X,J)}}}function ce(ne,ue,D){l.push(ne),l.push(ue),l.push(D)}function Ne(ne,ue,D){Fe(ne),Fe(ue),Fe(D);const De=r.length/3,se=m.generateTopUV(i,r,De-3,De-2,De-1);Je(se[0]),Je(se[1]),Je(se[2])}function ze(ne,ue,D,De){Fe(ne),Fe(ue),Fe(De),Fe(ue),Fe(D),Fe(De);const se=r.length/3,we=m.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);Je(we[0]),Je(we[1]),Je(we[3]),Je(we[1]),Je(we[2]),Je(we[3])}function Fe(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Je(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return zT(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Eh[r.type]().fromJSON(r)),new Vd(i,e.options)}}const kT={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],v=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(d,1-g),new he(y,1-f)]:[new he(a,1-l),new he(u,1-h),new he(p,1-g),new he(v,1-f)]}};function zT(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Rc extends kt{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(n-e)/r,p=new O,g=new he;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const f=s+v/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<r;y++){const v=y*(i+1);for(let f=0;f<i;f++){const m=f+v,_=m,x=m+i+1,C=m+i+2,A=m+1;a.push(_,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gd extends kt{constructor(e=new Hd([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(o,2));function c(u){const h=r.length/3,d=u.extractPoints(n);let p=d.shape;const g=d.holes;or.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,f=g.length;v<f;v++){const m=g[v];or.isClockWise(m)===!0&&(g[v]=m.reverse())}const y=or.triangulateShape(p,g);for(let v=0,f=g.length;v<f;v++){const m=g[v];p=p.concat(m)}for(let v=0,f=p.length;v<f;v++){const m=p[v];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let v=0,f=y.length;v<f;v++){const m=y[v],_=m[0]+h,x=m[1]+h,C=m[2]+h;i.push(_,x,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return BT(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new Gd(i,e.curveSegments)}}function BT(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}class ga extends kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],g=[],y=[],v=[];for(let f=0;f<=i;f++){const m=[],_=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const A=C/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),v.push(A+x,1-_),m.push(c++)}u.push(m)}for(let f=0;f<i;f++)for(let m=0;m<n;m++){const _=u[f][m+1],x=u[f][m],C=u[f+1][m],A=u[f+1][m+1];(f!==0||o>0)&&p.push(_,x,A),(f!==i-1||l<Math.PI)&&p.push(x,C,A)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(y,3)),this.setAttribute("uv",new ct(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wd extends kt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new O,h=new O,d=new O;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,v=p/i*Math.PI*2;h.x=(e+n*Math.cos(v))*Math.cos(y),h.y=(e+n*Math.cos(v))*Math.sin(y),h.z=n*Math.sin(v),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,v=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,m=(r+1)*p+g;o.push(y,v,m),o.push(v,f,m)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ah extends Yr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HT extends Yr{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const g0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class VT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const GT=new VT;class Xd{constructor(e){this.manager=e!==void 0?e:GT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";class WT extends Xd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=g0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sa("img");function l(){u(),g0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class XT extends Xd{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,o=new WT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Pc extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class jT extends Pc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Bu=new je,v0=new O,_0=new O;class A_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;v0.setFromMatrixPosition(e.matrixWorld),n.position.copy(v0),_0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_0),n.updateMatrixWorld(),Bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const x0=new je,xo=new O,Hu=new O;class YT extends A_{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Hu.copy(i.position),Hu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Hu),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),x0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(x0)}}class $T extends Pc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new YT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qT extends A_{constructor(){super(new h_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZT extends Pc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new qT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class KT extends Pc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class JT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=y0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=y0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function y0(){return performance.now()}const S0=new je;class b_{constructor(e,n,i=0,r=1/0){this.ray=new Nd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return S0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(e,n=!0,i=[]){return bh(e,this,i,n),i.sort(M0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)bh(e[r],this,i,n);return i.sort(M0),i}}function M0(t,e){return t.distance-e.distance}function bh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)bh(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);class QT extends __{constructor(){super();const e=new Di;e.deleteAttribute("uv");const n=new Ah({side:Kt}),i=new Ah,r=new $T(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new rt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new rt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new rt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new rt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new rt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new rt(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new rt(e,i);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new rt(e,us(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new rt(e,us(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new rt(e,us(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const y=new rt(e,us(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);const v=new rt(e,us(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const f=new rt(e,us(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function us(t){const e=new Zt;return e.color.setScalar(t),e}const ar=.0533,C_=340,R_=50,G=t=>(t-C_)*ar,F=t=>(t-R_)*ar,eA=t=>t/ar+C_,tA=t=>t/ar+R_,cn=3.2,oc=1.62,P_={Public:"#c9a36b","Semi-public":"#c9837d",Private:"#8791d8"},Ch=[{id:"north",r:[473,58,773,419.5]},{id:"south",r:[351.4,419.5,651,722]},{id:"pantry",r:[651,419.5,773,478]},{id:"collab",r:[773,301.4,958.6,418]},{id:"lobby",r:[958.6,301.4,1199,418]},{id:"meetE",r:[838.2,239.8,956,301.4]}],Rh=[{name:"Server",r:[568,58,651.5,114.8]},{name:"Surveillance",r:[651.5,58,697.5,114.8]},{name:"Electrical",r:[697.5,58,773,114.8]},{name:"Server",r:[556.5,663.3,651,722]}],Lc=(t,e,n,i)=>(r,s=[-1,1])=>({n:t,x0:e,x1:n,yc:r,seats:i,sides:s}),yo=Lc("N1",683.9,772.9,4),So=Lc("N2",473.2,540.1,3),ll=Lc("N3",556.5,623.2,3),Mo=Lc("N4",351.4,440.4,4),jd=[So(100.6,[1]),So(151.3),So(203.3),So(254.8),So(306.4),yo(152.2),yo(203.3),yo(254.8),yo(306.4),yo(357.8,[-1]),Mo(477),Mo(527.6),Mo(580.5),Mo(631.5),Mo(682.9),ll(473.25),ll(524.2),ll(575.9),ll(627.1)],L_=jd.reduce((t,e)=>t+e.seats*e.sides.length,0),gi=Math.PI/2,E0=-Math.PI/2,mn=[{id:"lobby",name:"Reception Lobby",zone:"Public",page:21,rect:[958.6,301.4,1199,418],spawn:[1048,404],yaw:0,pano:[1160,371],panoYaw:1.25,refs:["lobby"],desc:"Marble feature wall, black marble desk, timber-slat ceiling and curved marble floor inlay."},{id:"collab",name:"Collaboration Lounge",zone:"Semi-public",page:22,rect:[773,301.4,958.6,418],spawn:[940,366],yaw:gi,pano:[915,366],panoYaw:gi,refs:["collab"],desc:"Entry collab area with dry pantry bar, black grid ceiling raft and hanging greens."},{id:"meeting",name:"Meeting Room · 4 pax",zone:"Semi-public",page:23,rect:[898.7,239.8,956,301.4],spawn:[946,292],yaw:gi,pano:[943,276],panoYaw:gi,refs:["meeting"],desc:"Interview / meeting room with felt TV wall, oak panelling and fluted glass front."},{id:"pantry",name:"Pantry & Cafeteria",zone:"Private",page:24,rect:[651,419.5,773,478],spawn:[762,434],yaw:gi,pano:[729,443],panoYaw:gi,refs:["pantry"],desc:"12-pax pantry: counter wall, bar ledge along the glass, round tables."},{id:"ws1",name:"Workstations · Neighbourhood 1",zone:"Private",page:25,rect:[683.9,118,773,358],spawn:[673,332],yaw:-.35,pano:[673,280],panoYaw:-.6,refs:["workstation-1","workstation-5"],desc:"36 seats in back-to-back benches beside the conference core."},{id:"ws2",name:"Workstations · Neighbourhood 2",zone:"Private",page:26,rect:[473,84,541,330],spawn:[554,322],yaw:.35,pano:[554,230],panoYaw:.6,refs:["workstation-2"],desc:"27 seats along the west windows with a lounge collab zone."},{id:"ws3",name:"Workstations · Neighbourhood 3",zone:"Private",page:28,rect:[556.5,447,651,660],spawn:[543.6,560],yaw:E0,pano:[543.6,550],panoYaw:E0,refs:["workstation-4"],desc:"24 seats with window-side collab pockets."},{id:"ws4",name:"Workstations · Neighbourhood 4",zone:"Private",page:27,rect:[351.4,445,461,722],spawn:[451,560],yaw:gi,pano:[451,555],panoYaw:gi,refs:["workstation-3"],desc:"40 seats – the largest neighbourhood, with booth seating at its head."},{id:"conference",name:"Conference Room · 14 pax",zone:"Private",page:30,rect:[568,240.2,652.4,378.2],spawn:[610,369],yaw:0,pano:[582,367],panoYaw:-.35,refs:["conference"],desc:"Walnut table, tan leather chairs, ring pendants and timber-slat TV wall."},{id:"focus",name:"Focus Rooms & Phone Booths",zone:"Private",page:31,rect:[461.6,479,531,695],spawn:[543.6,611],yaw:gi,pano:[521,613],panoYaw:2.2,refs:[],desc:"Enclosed work areas: 2-pax and 6-pax rooms plus phone booths. (The plan has no private cabins.)"}],D_=!1;for(const t of mn)t.refs=[];const Ts=t=>mn.find(e=>e.id===t);function I_(t,e){let n=null;for(const i of mn){const[r,s,o,a]=i.rect;if(t>=r&&t<=o&&e>=s&&e<=a){const l=(o-r)*(a-s);(!n||l<n.a)&&(n={r:i,a:l})}}return n?n.r:null}const Ll={lobby:{page:21,label:"Lobby"},collab:{page:22,label:"Collab area"},meeting:{page:23,label:"Meeting room"},pantry:{page:24,label:"Pantry"},"workstation-1":{page:25,label:"Workstation area"},"workstation-2":{page:26,label:"Workstation area"},"workstation-3":{page:27,label:"Workstation area"},"workstation-4":{page:28,label:"Workstation area"},"workstation-5":{page:29,label:"Workstation area"},conference:{page:30,label:"Conference room"}},Dc=t=>`./reference/${t}.jpg`;function nA(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new kt;let c=0;for(let u=0;u<t.length;++u){const h=t[u];let d=0;if(n!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(n)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const h=[];for(let d=0;d<t.length;++d){const p=t[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=t[d].attributes.position.count}l.setIndex(h)}for(const u in s){const h=w0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let y=0;y<o[u].length;++y)p.push(o[u][y][d]);const g=w0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function w0(t){let e,n,i,r=-1,s=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*n}const o=new e(s),a=new In(o,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const h=l/n;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<n;g++){const y=u.getComponent(d,g);a.setComponent(d+h,g,y)}}else o.set(u.array,l);l+=u.count*n}return r!==void 0&&(a.gpuType=r),a}class iA{constructor(){this.groups=new Map,this.stack=[new je],this.colliders=[],this.tris=0}get M(){return this.stack[this.stack.length-1]}at(e,n,i,r){const s=this.M.clone().multiply(new je().makeRotationY(i).setPosition(e,0,n));this.stack.push(s),r(),this.stack.pop()}add(e,n,i){if(!e)throw new Error("Batcher.add: missing material");const r=n.index?n.toNonIndexed():n;r.applyMatrix4(i?this.M.clone().multiply(i):this.M);let s=this.groups.get(e);s||this.groups.set(e,s=[]),s.push(r),this.tris+=r.attributes.position.count/3}box(e,n,i,r,s,o,a,l=0){const c=new Di(s,o,a),u=c.attributes.uv;for(let h=0;h<24;h++){const d=h>>2,p=d<2?a:s,g=d===2||d===3?a:o;u.setXY(h,u.getX(h)*p,u.getY(h)*g)}this.add(e,c,new je().makeRotationY(l).setPosition(n,i+o/2,r))}cyl(e,n,i,r,s,o,a=12,l=s){const c=new Bo(l,s,o,a);this.add(e,c,new je().makeTranslation(n,i+o/2,r))}ell(e,n,i,r,s,o,a){const l=new Bo(1,1,a,28);this.add(e,l,new je().makeScale(s,1,o).setPosition(n,i+a/2,r))}cylH(e,n,i,r,s,o,a,l=10){const c=r-n,u=s-i,h=new Bo(a,a,Math.hypot(c,u),l);h.rotateZ(Math.PI/2),this.add(e,h,new je().makeRotationY(Math.atan2(-u,c)).setPosition((n+r)/2,o,(i+s)/2))}sph(e,n,i,r,s,o,a,l=10){const c=new ga(1,l,Math.max(4,l-3));this.add(e,c,new je().makeScale(s,o,a).setPosition(n,i,r))}torus(e,n,i,r,s,o){const a=new Wd(s,o,6,28);a.rotateX(Math.PI/2),this.add(e,a,new je().makeTranslation(n,i,r))}collideC(e,n,i,r){this.colliders.push([e-i/2,n-r/2,e+i/2,n+r/2])}collide(e,n,i,r){this.colliders.push([Math.min(e,i),Math.min(n,r),Math.max(e,i),Math.max(n,r)])}build(e){for(const[n,i]of this.groups){const r=nA(i,!1);if(!r)continue;const s=new rt(r,n);s.castShadow=!n.userData.noCast,s.receiveShadow=!n.userData.noRecv,s.matrixAutoUpdate=!1,n.transparent&&(s.renderOrder=2),e.add(s),i.length=0}this.groups.clear()}}class rA{constructor(e,n){this.boxes=e,this.walk=n}blocked(e,n,i=.27){const r=this.boxes;for(let s=0;s<r.length;s++){const o=r[s];if(e>o[0]-i&&e<o[2]+i&&n>o[1]-i&&n<o[3]+i)return!0}return!1}inside(e,n){for(const i of this.walk)if(e>i[0]&&e<i[2]&&n>i[1]&&n<i[3])return!0;return!1}walkable(e,n){return this.inside(e,n)&&!this.blocked(e,n)}clearPath(e,n,i,r){const s=Math.hypot(i-e,r-n),o=Math.max(2,Math.ceil(s/.2));for(let a=1;a<=o;a++){const l=a/o;if(this.blocked(e+(i-e)*l,n+(r-n)*l))return!1}return!0}}function N_(t){return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Vn(t,e,n,{tile:i=[1,1],srgb:r=!0}={}){const s=document.createElement("canvas");s.width=t,s.height=e,n(s.getContext("2d"),t,e);const o=new bc(s);return o.wrapS=o.wrapT=nc,o.repeat.set(1/i[0],1/i[1]),r&&(o.colorSpace=Ut),o.anisotropy=4,o}function sA(t){const e=N_(11),n=(E,I,L,N,k,V=!0)=>{for(let $=0;$<N;$++)E.fillStyle=V?`rgba(0,0,0,${e()*k})`:`rgba(255,255,255,${e()*k})`,E.fillRect(e()*I,e()*L,1+e()*2,1+e()*2)},i=(E,I,L)=>Vn(512,512,(N,k,V)=>{N.fillStyle=E,N.fillRect(0,0,k,V);for(let $=0;$<700;$++){const U=e()*k;N.strokeStyle=`rgba(${I},${.03+e()*.1})`,N.lineWidth=.5+e()*2.2,N.beginPath(),N.moveTo(U,0),N.bezierCurveTo(U+e()*10-5,V*.33,U+e()*10-5,V*.66,U,V),N.stroke()}N.fillStyle="rgba(0,0,0,0.16)";for(let $=0;$<4;$++)N.fillRect($*128,0,1.5,V)},{tile:[L,L]}),r=i("#c9a376","90,60,30",1.6),s=i("#6b4630","30,15,5",1.4),o=Vn(256,64,(E,I,L)=>{E.fillStyle="#3a2a1c",E.fillRect(0,0,I,L);for(let N=0;N<8;N++){const k=N*32,V=E.createLinearGradient(k,0,k+22,0);V.addColorStop(0,"#b58a5c"),V.addColorStop(.5,"#d2a878"),V.addColorStop(1,"#a87c50"),E.fillStyle=V,E.fillRect(k,0,22,L)}n(E,I,L,500,.08)},{tile:[.56,2]}),a=Vn(512,512,(E,I,L)=>{const N=["#c79a68","#bd8f5d","#d0a573","#b98a59","#c9a06f","#c29462"];for(let k=0;k<4;k++){const V=k*128,$=k%2?1:-1;E.save(),E.beginPath(),E.rect(V,0,128,L),E.clip();for(let U=-6;U<22;U++){const q=U*32;E.fillStyle=N[((U%16+16)*7+k*3)%N.length],E.beginPath(),E.moveTo(V,q),E.lineTo(V+128,q+$*128),E.lineTo(V+128,q+$*128+32),E.lineTo(V,q+32),E.closePath(),E.fill(),E.strokeStyle="rgba(60,35,15,0.35)",E.lineWidth=1,E.stroke()}E.restore()}n(E,I,L,5e3,.06)},{tile:[1.7,1.7]}),l=Vn(256,256,(E,I,L)=>{E.fillStyle="#5f5c5a",E.fillRect(0,0,I,L),E.lineWidth=2;for(let N=-8;N<24;N++){E.strokeStyle=N%2?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.07)";for(let k=0;k<4;k++){const V=k%2?1:-1;E.beginPath(),E.moveTo(k*64,N*16),E.lineTo(k*64+64,N*16+V*64),E.stroke()}}n(E,I,L,9e3,.1),n(E,I,L,5e3,.05,!1)},{tile:[1.3,1.3]}),c=Vn(128,128,(E,I,L)=>{E.fillStyle="#8f9f88",E.fillRect(0,0,I,L),n(E,I,L,3500,.12),n(E,I,L,2e3,.1,!1)},{tile:[.8,.8]}),u=(E,I)=>Vn(1024,1024,(L,N,k)=>{L.fillStyle=E,L.fillRect(0,0,N,k);for(let V=0;V<26;V++){let $=e()*N,U=e()*k,q=e()*Math.PI*2;const ee=V<9;L.strokeStyle=`rgba(${I},${ee?.3+e()*.3:.12+e()*.15})`,L.lineWidth=ee?1.5+e()*3.5:.6+e(),L.beginPath(),L.moveTo($,U);for(let le=0;le<60;le++)q+=(e()-.5)*.7,$+=Math.cos(q)*18,U+=Math.sin(q)*18,L.lineTo($,U);L.stroke()}},{tile:[3.2,3.2]}),h=u("#f0eeea","120,120,125"),d=u("#141414","225,225,225"),p=Vn(256,256,(E,I,L)=>{E.fillStyle="#cfc6b7",E.fillRect(0,0,I,L),n(E,I,L,2500,.05),E.strokeStyle="rgba(90,82,70,0.55)",E.lineWidth=3,E.strokeRect(0,0,I,L)},{tile:[.6,.6]}),g=(E,I,L)=>Vn(128,128,(N,k,V)=>{N.fillStyle=E,N.fillRect(0,0,k,V),n(N,k,V,I,L),n(N,k,V,I/2,L*.7,!1)},{tile:[.7,.7]}),y=g("#8f8c88",3e3,.06),v=g("#bdb8b0",2500,.07),f=Vn(64,8,(E,I,L)=>{E.clearRect(0,0,I,L);for(let N=0;N<8;N++){const k=E.createLinearGradient(N*8,0,N*8+8,0);k.addColorStop(0,"rgba(255,255,255,0.78)"),k.addColorStop(.6,"rgba(225,232,232,0.42)"),k.addColorStop(1,"rgba(200,208,208,0.6)"),E.fillStyle=k,E.fillRect(N*8,0,8,L)}},{tile:[.2,1]}),m=Vn(256,256,(E,I,L)=>{const N=E.createLinearGradient(0,0,0,L);N.addColorStop(0,"#a9cdee"),N.addColorStop(.62,"#e9f2f8"),N.addColorStop(.63,"#8fae86"),N.addColorStop(1,"#5f8559"),E.fillStyle=N,E.fillRect(0,0,I,L);for(let k=0;k<60;k++)E.fillStyle=`rgba(${60+e()*40},${105+e()*40},${60+e()*30},0.8)`,E.beginPath(),E.arc(e()*I,L*.66+e()*L*.25,6+e()*14,0,7),E.fill()},{tile:[6,1.8]}),_=Vn(256,160,(E,I,L)=>{const N=E.createLinearGradient(0,0,0,L);N.addColorStop(0,"#5a3a78"),N.addColorStop(.45,"#e9836a"),N.addColorStop(.75,"#f6c078"),N.addColorStop(1,"#f1d6a0"),E.fillStyle=N,E.fillRect(0,0,I,L),E.fillStyle="#4a3340",E.beginPath(),E.moveTo(0,L),E.lineTo(0,120),E.lineTo(60,95),E.lineTo(105,60),E.lineTo(150,52),E.lineTo(200,100),E.lineTo(256,115),E.lineTo(256,L),E.fill()},{tile:[.5,.3]}),x=E=>new Ah(E),C=E=>{if(!t)return x(E);const{roughness:I,metalness:L,envMapIntensity:N,...k}=E;return new HT(k)},A=(E,I)=>(Object.assign(E.userData,I),E),T={noCast:!0},R=(E,I,L)=>{const N=new Zt;return N.color.setRGB(E,I,L),A(N,{noCast:!0,noRecv:!0})},M=(E,I=.85)=>C({color:E,roughness:I});return{plaster:M(15855078,.95),ceilPlaster:A(M(16052716,.95),T),ceilConcrete:A(C({map:v,roughness:1}),T),ceilDark:A(M(1841946,.9),T),carpet:C({map:l,roughness:1}),rug:C({map:c,roughness:1}),woodFloor:x({map:a,roughness:.45}),marble:x({map:h,roughness:.18,side:Pn}),marbleBlack:x({map:d,roughness:.15}),tile:x({map:p,roughness:.5}),oak:C({map:r,roughness:.6}),oakCeil:A(C({map:r,roughness:.6}),T),slat:C({map:o,roughness:.6}),walnut:x({map:s,roughness:.35}),felt:C({map:y,roughness:1}),olive:M(7831631,.95),black:M(1447446,.6),blackHung:A(M(1315860,.6),T),blackGloss:x({color:526603,roughness:.12,metalness:.2}),blackFabric:M(2105636,.95),meshWhite:M(14605528,.9),steel:x({color:13225168,roughness:.28,metalness:.9}),duct:A(M(14078408,.7),T),white:M(15987182,.5),stone:x({color:3091756,roughness:.3}),cabinet:M(10132120,.6),glass:A(t?new Zt({color:13623520,transparent:!0,opacity:.13,depthWrite:!1}):x({color:14478572,transparent:!0,opacity:.16,roughness:.04,depthWrite:!1,envMapIntensity:1.4}),{noCast:!0,noRecv:!0}),fluted:A(new Zt({map:f,transparent:!0,depthWrite:!1,side:Pn}),{noCast:!0,noRecv:!0}),sky:A(new Zt({map:m}),{noCast:!0,noRecv:!0}),doorGlass:R(.82,.9,.95),screen:A(new Zt({map:_}),{noCast:!0,noRecv:!0}),glow:R(2.6,2.2,1.7),glowSoft:R(1.5,1.35,1.1),glowGreen:R(.2,2.2,.5),leaf:C({color:4160826,roughness:.7,side:Pn}),leaf2:M(3105328,.8),leafHung:A(M(5016127,.8),T),leafHung2:A(M(3501875,.8),T),pot:M(3881013,.9),tan:x({color:13208142,roughness:.5}),cream:M(15196114,.7),yellow:M(14852637,.8),teal:M(2067596,.5),tealGlass:x({color:1010524,roughness:.15}),grey:M(4868686,.6),maroon:M(8005440,.6),blueFabric:M(9414340,.95),greyFabric:M(11118498,.95),tanFabric:M(12157519,.9),terracotta:A(M(11884074,.95),T),charcoal:A(M(3815996,.95),T),lampBlue:A(M(8368335,.4),T),wicker:A(M(12093775,.9),T),bookA:M(11876910),bookB:M(3111509),bookC:M(2908072),bookD:M(14198065),pink:M(15309478,.5)}}function oA(t,e,n){const i={},r=()=>new je,s=l=>Math.abs(Math.sin(l))>.7,o=(l,c,u,h,d)=>s(d)?t.collideC(l,c,h,u):t.collideC(l,c,u,h),a=(l,c=.28)=>{t.box(l,0,.02,0,c*2,.035,.06),t.box(l,0,.02,0,.06,.035,c*2)};return i.taskChair=(l,c,u)=>t.at(l,c,u,()=>{a(e.black),t.cyl(e.black,0,.05,0,.03,.38,6),t.box(e.blackFabric,0,.43,0,.46,.07,.46),t.box(e.meshWhite,0,.56,.23,.44,.5,.04),t.box(e.black,0,.5,.25,.06,.3,.03),t.box(e.black,-.25,.64,.02,.04,.03,.26),t.box(e.black,.25,.64,.02,.04,.03,.26)}),i.confChair=(l,c,u)=>t.at(l,c,u,()=>{a(e.black,.3),t.cyl(e.black,0,.05,0,.03,.36,6),t.box(e.tan,0,.41,0,.52,.12,.5),t.box(e.tan,0,.5,.25,.5,.72,.1),t.box(e.tan,-.28,.53,0,.06,.16,.42),t.box(e.tan,.28,.53,0,.06,.16,.42)}),i.meetingChair=(l,c,u)=>t.at(l,c,u,()=>{a(e.white,.26),t.cyl(e.white,0,.05,0,.025,.36,6),t.box(e.cream,0,.41,0,.5,.1,.48),t.sph(e.cream,0,.7,.24,.27,.3,.07,8),t.box(e.yellow,0,.51,-.04,.4,.03,.34),t.box(e.cream,-.26,.5,.04,.05,.16,.36),t.box(e.cream,.26,.5,.04,.05,.16,.36)}),i.shellChair=(l,c,u,h)=>t.at(l,c,u,()=>{t.box(h,0,.42,0,.44,.04,.42),t.sph(h,0,.64,.2,.22,.22,.04,8);for(const[d,p]of[[-.17,-.16],[.17,-.16],[-.17,.16],[.17,.16]])t.cyl(e.oak,d,0,p,.014,.42,5)}),i.barStool=(l,c,u)=>t.at(l,c,u,()=>{for(const[h,d]of[[-.15,-.15],[.15,-.15],[-.15,.15],[.15,.15]])t.box(e.black,h,0,d,.02,.72,.02);t.box(e.black,0,.28,-.15,.32,.02,.02),t.cyl(e.white,0,.72,0,.18,.05,12),t.box(e.oak,0,.82,.17,.34,.14,.025)}),i.lounge=(l,c,u,h=e.greyFabric)=>{t.at(l,c,u,()=>{t.box(h,0,.2,0,.72,.22,.66),t.sph(h,0,.62,.27,.4,.36,.13,10),t.box(h,-.36,.3,.02,.1,.24,.56),t.box(h,.36,.3,.02,.1,.24,.56);for(const[d,p]of[[-.28,-.24],[.28,-.24],[-.28,.26],[.28,.26]])t.cyl(e.oak,d,0,p,.018,.2,5)}),t.collideC(l,c,.6,.6)},i.sofa=(l,c,u,h=e.greyFabric,d=2.1)=>{t.at(l,c,u,()=>{t.box(h,0,.14,0,d,.28,.85),t.box(h,0,.42,.33,d,.42,.2),t.box(h,-(d/2-.1),.42,-.06,.2,.2,.6),t.box(h,d/2-.1,.42,-.06,.2,.2,.6);const p=(d-.5)/2;t.box(h,-p/2-.01,.42,-.06,p,.08,.56),t.box(h,p/2+.01,.42,-.06,p,.08,.56);for(const g of[-1,1])for(const y of[-1,1])t.cyl(e.oak,g*(d/2-.1),0,y*.34,.02,.14,5)}),o(l,c,d,.85,u)},i.roundTable=(l,c,u=.4,h=.42,d=e.tealGlass,p=!0)=>{t.cyl(e.black,l,0,c,u*.6,h,10,.07),t.cyl(d,l,h,c,u,.03,20),p&&t.collideC(l,c,u*1.6,u*1.6)},i.plant=(l,c,u=1)=>{t.cyl(e.pot,l,0,c,.17*u,.4*u,10,.25*u);const h=8;for(let d=0;d<h;d++){const p=d/h*Math.PI*2+n(),g=.18+n()*.5,y=(.45+n()*.75)*u,v=r().makeRotationY(p).setPosition(l,.36*u,c).multiply(r().makeRotationX(g)),f=new Di(.016,y,.016);f.translate(0,y/2,0),t.add(e.leaf2,f,v);const m=new Bd(1,8);m.scale(.17*u,.42*u,1),m.translate(0,y+.36*u,0),t.add(e.leaf,m,v)}t.collideC(l,c,.4*u,.4*u)},i.hangingGreens=(l,c,u,h=4)=>{for(let d=0;d<h;d++){const p=l+(n()-.5)*.7,g=u+(n()-.5)*.7,y=3+Math.floor(n()*4);for(let v=0;v<y;v++){const f=.06+n()*.07;t.sph(n()>.5?e.leafHung:e.leafHung2,p+(n()-.5)*.14,c-v*.11,g+(n()-.5)*.14,f,f*.8,f,5)}}},i.cord=(l,c,u,h)=>t.box(e.blackHung,l,u,c,.008,h-u,.008),i.ring=(l,c,u,h,d)=>{t.torus(e.blackHung,l,c+.025,u,h,.03),t.torus(e.glow,l,c,u,h,.022);for(const p of[0,2.1,4.2])i.cord(l+Math.cos(p)*h,u+Math.sin(p)*h,c,d)},i.linear=(l,c,u,h,d,p)=>{const g=Math.abs(u-l)>Math.abs(h-c),y=(l+u)/2,v=(c+h)/2,f=Math.abs(g?u-l:h-c);t.box(e.blackHung,y,d,v,g?f:.07,.05,g?.07:f),t.box(e.glow,y,d-.012,v,g?f-.04:.045,.012,g?.045:f-.04),i.cord(g?l+.3:y,g?v:c+.3,d,p),i.cord(g?u-.3:y,g?v:h-.3,d,p)},i.disc=(l,c,u,h,d)=>{t.cyl(d,l,c,u,h,.045,24),t.cyl(e.glow,l,c-.012,u,.06,.012,10),i.cord(l,u,c,c+.5)},i.bluePendant=(l,c,u,h)=>{t.cyl(e.lampBlue,l,c,u,.24,.03,14,.1),t.cyl(e.lampBlue,l,c+.06,u,.17,.03,14,.07),t.cyl(e.lampBlue,l,c+.12,u,.1,.04,12,.03),t.cyl(e.glowSoft,l,c-.012,u,.07,.012,8),i.cord(l,u,c+.14,h)},i.globePendant=(l,c,u,h)=>{t.sph(e.glow,l,c,u,.1,.1,.1,10),t.torus(e.blackHung,l,c,u,.13,.008),i.cord(l,u,c+.1,h)},i.domePendant=(l,c,u,h,d,p=e.charcoal)=>{const g=new ga(h,12,6,0,Math.PI*2,0,Math.PI/2);t.add(p,g,r().makeTranslation(l,c,u)),t.cyl(e.glow,l,c+.02,u,h*.45,.02,12),i.cord(l,u,c+h,d)},i.tv=(l,c,u,h,d,p)=>t.at(l,u,p,()=>{t.box(e.black,0,c,0,h,d,.05),t.box(e.blackGloss,0,c+.02,-.03,h-.04,d-.04,.01),t.box(e.black,0,c+d+.02,-.02,.5,.06,.07)}),i.workCluster=(l,c,u,h,d,p)=>{const g=c-l,y=(l+c)/2,v=g/h;t.box(e.felt,y,.74,u,g,.42,.03);for(const _ of d){const x=u+_*.31;t.box(e.white,y,.72,x,g,.03,.6);for(let C=0;C<=h;C++){const A=Math.min(c-.03,Math.max(l+.03,l+C*v));t.box(e.white,A,0,x,.04,.72,.52)}for(let C=0;C<h;C++){const A=l+(C+.5)*v,T=_<0?Math.PI:0;t.at(A,u+_*.17,T,()=>{t.box(e.steel,0,.75,0,.2,.012,.16),t.box(e.steel,0,.76,-.01,.05,.14,.015),t.box(e.steel,0,.86,.01,.56,.35,.02),t.box(e.screen,0,.885,.022,.5,.3,.004),t.box(e.white,0,.75,.28,.34,.012,.11)}),t.box(e.white,A-v/2+.26,.03,u+_*.33,.4,.54,.5),i.taskChair(A+(n()-.5)*.12,u+_*(.95+n()*.08),T+(n()-.5)*.5)}}const f=d.includes(-1)?u-.61:u-.02,m=d.includes(1)?u+.61:u+.02;t.collide(l,f,c,m),i.linear(l+.2,u,c-.2,u,2.3,p)},i.booth=(l,c,u,h=2.4,d=1.15)=>{t.at(l,c,u,()=>{t.box(e.olive,0,0,-d/2+.05,h,1.5,.1),t.box(e.olive,-h/2+.05,0,0,.1,1.5,d),t.box(e.olive,h/2-.05,0,0,.1,1.5,d),t.box(e.black,0,1.5,0,h,.06,d),t.box(e.glow,0,1.485,-.1,h-.4,.012,.04);for(const p of[-1,1])t.box(e.olive,p*(h/2-.35),.1,.02,.5,.36,d-.2),t.box(e.black,p*(h/2-.35),0,.02,.44,.1,d-.3);t.box(e.white,0,.72,0,.75,.04,.7),t.box(e.black,0,0,0,.06,.72,.06)}),o(l,c,h,d,u)},i.shelf=(l,c,u,h,d)=>{t.box(e.white,(l+u)/2,0,(c+h)/2,u-l,2.1,h-c);const g=d==="e"||d==="w",y=g?h-c:u-l,v=d==="e"||d==="s"?1:-1,f=g?v>0?u:l:0,m=g?0:v>0?h:c,_=Math.max(1,Math.round(y/.48)),x=5,C=y/_,A=2.1/x,T=v*.012;for(let M=0;M<=_;M++){const S=M*C;g?t.box(e.black,f+T,0,c+S,.03,2.1,.03):t.box(e.black,l+S,0,m+T,.03,2.1,.03)}for(let M=0;M<=x;M++){const S=Math.min(2.0700000000000003,M*A);g?t.box(e.black,f+T,S,(c+h)/2,.03,.03,y):t.box(e.black,(l+u)/2,S,m+T,y,.03,.03)}const R=[e.bookA,e.bookB,e.bookC,e.bookD,e.black];for(let M=0;M<_;M++)for(let S=0;S<x;S++){if(n()>.42)continue;const I=R[Math.floor(n()*R.length)],L=C*(.35+n()*.4),N=A*(.45+n()*.25),k=(M+.5)*C,V=S*A+.03;g?t.box(I,f+T*1.6,V,c+k,.03,N,L):t.box(I,l+k,V,m+T*1.6,L,N,.03)}t.collide(l,c,u,h)},i}const aA=.12,en=2.7,Gn=Math.PI/2,Vi=-Math.PI/2,It=0,zt=Math.PI;function lA(t,e,n,i){function r(f,m,_,x,C,A,T,R,M=0,S=0,E=0){if(C-x<.02||T<=0)return null;if(m==="h"){const k=G(x)-S,V=G(C)+E,$=F(_)+M;return t.box(f,(k+V)/2,A,$,V-k,T,R),[k,$-R/2,V,$+R/2]}const I=F(x)-S,L=F(C)+E,N=G(_)+M;return t.box(f,N,A,(I+L)/2,R,T,L-I),[N-R/2,I,N+R/2,L]}function s(f,m,_,x,C,A={}){const{y0:T=0,h:R=cn-T,t:M=aA,off:S=0}=A,E=r(f,m,_,x,C,T,R,M,S,M/2,M/2);E&&T<1.5&&t.colliders.push(E)}const o=(f,m,_,x)=>f==="h"?t.box(e.black,G(_),0,F(m),.045,x,.05):t.box(e.black,G(m),0,F(_),.05,x,.045);function a(f,m,_,x,C={}){const{doors:A=[],swing:T=1,fluted:R=!0,top:M=en,bulk:S=!0}=C,E=[];let I=_;for(const[L,N]of[...A].sort((k,V)=>k[0]-V[0])){L>I&&E.push([I,L]),o(f,m,L,M),o(f,m,N,M),r(e.black,f,m,L,N,2.12,.05,.05),r(e.black,f,m,L,N,M-.05,.05,.05),r(e.glass,f,m,L,N,2.17,M-2.22,.012);const k=(N-L)*ar-.06,V=f==="h"?G(L)+.03:G(m),$=f==="h"?F(m):F(L)+.03,U=f==="h"?T*1.4:-Math.PI/2+T*1.4;t.at(V,$,U,()=>{t.box(e.black,.02,0,0,.04,2.1,.04),t.box(e.black,k-.02,0,0,.04,2.1,.04),t.box(e.black,k/2,0,0,k,.05,.04),t.box(e.black,k/2,2.06,0,k,.05,.04),t.box(e.glass,k/2,.05,0,k-.06,2,.012),t.box(e.steel,k-.1,.9,0,.025,.32,.08)}),I=N}x>I&&E.push([I,x]);for(const[L,N]of E){const k=(N-L)*ar;r(e.black,f,m,L,N,0,.05,.05),r(e.black,f,m,L,N,M-.05,.05,.05),r(e.black,f,m,L,N,.95,.035,.045),r(e.black,f,m,L,N,2.05,.035,.045);const V=Math.max(1,Math.round(k/1.15));for(let U=0;U<=V;U++)o(f,m,L+(N-L)*U/V,M);r(e.glass,f,m,L,N,.05,M-.1,.012),R&&r(e.fluted,f,m,L,N,.985,1.065,.022);const $=r(e.glass,f,m,L,N,0,.01,.1);t.colliders.push($)}S&&r(e.plaster,f,m,_,x,M,cn-M,.14,0,.07,.07)}function l(f,m,_,x,C,A=[]){const R=C*.1;let M=_;[...A].sort((I,L)=>I[0]-L[0]).forEach(([I,L,N=.85,k=2.55,V=e.sky])=>{r(e.plaster,f,m,M,I,0,cn,.2,R,M===_?.2:0,0),N>0&&r(e.plaster,f,m,I,L,0,N,.2,R),r(e.plaster,f,m,I,L,k,cn-k,.2,R),r(V,f,m,I,L,N,k-N,.04,R);const $=R-C*.07;r(e.black,f,m,I,L,N,.04,.06,$),r(e.black,f,m,I,L,k-.04,.04,.06,$);const U=Math.max(1,Math.round((L-I)*ar/1.25));for(let q=0;q<=U;q++){const ee=I+(L-I)*q/U;f==="h"?t.box(e.black,G(ee),N,F(m)+$,.04,k-N,.06):t.box(e.black,G(m)+$,N,F(ee),.06,k-N,.04)}M=L}),r(e.plaster,f,m,M,x,0,cn,.2,R,M===_?.2:0,.2);const E=f==="h"?[G(_)-.2,F(m)+R-.2/2,G(x)+.2,F(m)+R+.2/2]:[G(m)+R-.2/2,F(_)-.2,G(m)+R+.2/2,F(x)+.2];t.colliders.push(E)}const c=([f,m,_,x])=>({cx:(G(f)+G(_))/2,cz:(F(m)+F(x))/2,w:G(_)-G(f),d:F(x)-F(m)}),u=(f,m,_=0)=>{const x=c(m);t.box(f,x.cx,-.1,x.cz,x.w,.1+_,x.d)},h=(f,m,_,x=.06)=>{const C=c(m);t.box(f,C.cx,_,C.cz,C.w,x,C.d)},d=f=>t.collide(G(f[0]),F(f[1]),G(f[2]),F(f[3])),p=(f,m)=>n.shelf(G(f[0]),F(f[1]),G(f[2]),F(f[3]),m),g=(f,m,_,x,C)=>{r(e.cabinet,f,m,_,x,0,2.1,.05,C),r(e.steel,f,m,x-3,x-2.2,.95,.12,.09,C)};u(e.carpet,[473,58,773,419.5]),u(e.carpet,[351.4,419.5,651,722]),u(e.carpet,[773,301.4,958.6,418]),u(e.oak,[838.2,239.8,956,301.4]),u(e.woodFloor,[958.6,301.4,1199,418]),u(e.tile,[651,419.5,773,478]);for(const f of[[468,53,778,424],[346,415,656,727],[646,415,778,483],[768,235,1204,423]])h(e.ceilConcrete,f,cn,.1);l("h",58,473,773,-1),l("v",473,58,419.5,-1,[[88,138],[160,214],[236,290],[338,392]]),l("v",773,58,301.4,1,[[128,180],[200,250],[262,296]]),s(e.plaster,"v",773,301.4,360.8,{t:.2}),l("h",419.5,351.4,473,-1),l("v",351.4,419.5,722,-1,[[455,505],[525,575],[595,645],[665,712]]),l("h",722,351.4,651,1,[[365,435],[465,540]]),l("v",651,478,722,1,[[485,535],[550,600],[610,655]]),s(e.plaster,"v",651.5,419.5,478,{t:.16}),l("h",478,651,773,1,[[672,760]]),l("v",773,419.5,478,1,[[428,470]]),l("h",418,773,958.6,1,[[782,825],[838,880],[893,935]]),l("h",301.4,773,838.2,-1,[[790,830]]),l("v",838.2,239.8,301.4,-1,[[252,290]]),l("h",239.8,838.2,956,-1),l("v",956,239.8,301.4,1,[[252,290]]),l("h",301.4,956,1199,-1),l("v",1199,301.4,418,1,[[340,408]]),l("h",418,958.6,1199,1,[[966,1008],[1020,1076,0,2.4,e.doorGlass],[1128,1190]]),t.box(e.black,G(1048),0,F(418)+.02,.05,2.4,.08);for(const f of[1041,1055])t.box(e.steel,G(f),.85,F(418)-.03,.03,.5,.04);{const f=I=>{const L=Math.abs(I-1078.8);return 339+(L<120?22.5*(1+Math.cos(Math.PI*L/120)):0)},m=new Hd;m.moveTo(G(959),F(339)),m.lineTo(G(1199),F(339));for(let I=1199;I>=959;I-=5)m.lineTo(G(I),F(f(I)));const _=new Gd(m);_.rotateX(Math.PI/2),t.add(e.marble,_,new je().makeTranslation(0,.006,0));const x=new Vd(m,{depth:.32,bevelEnabled:!1});x.rotateX(Math.PI/2),t.add(e.ceilPlaster,x,new je().makeTranslation(0,3.07,0));for(const[I,L]of[[1040,352],[1078,362],[1116,352],[1e3,344],[1156,344],[1078,345]])t.cyl(e.glow,G(I),2.738,F(L),.05,.012,10);h(e.ceilDark,[959,339,1199,418],3.1);const C=(F(339)+F(418))/2,A=F(418)-F(339);for(let I=G(959)+.12;I<G(1199);I+=.24)t.box(e.oakCeil,I,2.92,C,.05,.17,A);for(const I of[972,995,1018,1150,1178])t.box(e.glow,G(I),2.9,F(395),.05,.02,2.4);h(e.ceilPlaster,[959,301.4,1199,328],2.85);const T=F(333.4);t.box(e.plaster,G(1079),0,T,G(1147)-G(1011),cn,.6),t.collide(G(1011),F(327.8),G(1147),F(339));const R=F(339);t.box(e.marble,G(1079),0,R+.02,G(1123)-G(1035),3.05,.04),t.box(e.slat,G(1023),0,R+.03,G(1035)-G(1011),3.05,.06),t.box(e.slat,G(1135),0,R+.03,G(1147)-G(1123),3.05,.06),t.box(e.glow,G(1035),0,R+.035,.03,3.05,.02),t.box(e.glow,G(1123),0,R+.035,.03,3.05,.02);const M=new hr(3.3,.36);t.add(e.sign,M,new je().makeTranslation(G(1079),1.78,R+.05)),a("h",329,958.6,1011,{bulk:!0}),a("h",329,1147,1199,{doors:[[1150,1168]],swing:1}),g("h",301.4,1035,1052,.04),g("h",301.4,1110,1127,.04);const S=G(1077.4),E=F(366.8);t.box(e.marbleBlack,S,.1,E+.1,2.9,.95,.56),t.cyl(e.marbleBlack,S-1.45,.1,E+.1,.28,.95,16),t.cyl(e.marbleBlack,S+1.45,.1,E+.1,.28,.95,16),t.box(e.marble,S,1.05,E+.1,3,.05,.66),t.cyl(e.marble,S-1.45,1.05,E+.1,.33,.05,16),t.cyl(e.marble,S+1.45,1.05,E+.1,.33,.05,16),t.box(e.white,S,.72,E-.3,2.9,.04,.4),t.box(e.glow,S,.02,E+.1,3.3,.06,.5),t.collide(S-1.75,E-.5,S+1.75,E+.42),n.taskChair(G(1064.8),F(353),zt+.2),n.taskChair(G(1091.2),F(353),zt-.25),n.linear(S-1.3,E-.1,S+1.3,E-.1,2.05,2.75),n.sofa(G(990),F(403),It,e.blueFabric,2.2),n.roundTable(G(1014),F(392),.3,.45),n.lounge(G(1140),F(404),.35,e.greyFabric),n.lounge(G(1178),F(404),-.35,e.blueFabric),n.roundTable(G(1159.4),F(389),.42,.42),n.plant(G(1003),F(346),1.35),n.plant(G(1155),F(346),1.45),n.plant(G(1190),F(336),1.3),n.plant(G(966),F(336),1.2),a("v",958.6,301.4,347,{}),a("v",958.6,386,418,{});for(const I of[350,366.5,383])t.box(e.steel,G(958.6),0,F(I),1.1,.98,.18),t.box(e.black,G(958.6),.98,F(I),1.12,.02,.2),t.box(e.glowGreen,G(958.6)+.5,.82,F(I),.02,.06,.1),t.collideC(G(958.6),F(I),1.1,.18)}{a("h",301.4,838.2,956,{doors:[[840,855],[940,955]],swing:1}),s(e.plaster,"v",897.6,239.8,301.4,{t:.1}),y([838.2,239.8,897.6,301.4],"e",[883,270],[[876,256,zt],[890,256,zt],[876,285,It],[890,285,It]]),y([897.6,239.8,956,301.4],"w",[912.5,270],[[905.8,256,zt],[919.6,256,zt],[905.8,285,It],[919.6,285,It]]);const f=G(774.4)+.42;t.box(e.cabinet,f,0,F(331),.6,.88,F(357)-F(305)),t.box(e.stone,f,.88,F(331),.64,.04,F(357)-F(305)+.04),t.collide(G(774.4),F(305),G(774.4)+.75,F(357)),t.box(e.black,f,.92,F(318),.4,.5,.34);for(const T of[1.45,1.8]){t.box(e.oak,G(774.4)+.28,T,F(331),.28,.035,F(355)-F(307)),t.box(e.glowSoft,G(774.4)+.22,T-.012,F(331),.03,.012,F(355)-F(307)-.1);for(let R=0;R<6;R++)t.cyl(R%2?e.white:e.maroon,G(774.4)+.3,T+.035,F(311+R*7.5),.05,.11,8)}t.box(e.maroon,G(816),0,F(330),.62,1.02,2.3),t.box(e.oak,G(816),1.02,F(330),.74,.04,2.4),t.collideC(G(816),F(330),.74,2.4);for(const T of[316,330,344])n.barStool(G(829.5),F(T),Gn);for(const T of[321,339])t.sph(e.wicker,G(816),2.12,F(T),.2,.17,.2,10),t.cyl(e.glow,G(816),1.94,F(T),.06,.02,8),n.cord(G(816),F(T),2.28,cn);t.ell(e.rug,G(896.5),0,F(326),1.9,1.15,.008),n.lounge(G(885),F(324),Vi+.3,e.tanFabric),n.lounge(G(908),F(324),Gn-.3,e.greyFabric),n.roundTable(G(896.5),F(331),.3,.45),n.sofa(G(905.8),F(403.5),It,e.blueFabric,2.3),n.roundTable(G(905.8),F(384),.45,.4),n.roundTable(G(831),F(387),.42,.4),n.lounge(G(811),F(402),.5,e.tanFabric),n.lounge(G(850),F(402),-.5,e.greyFabric),n.plant(G(781),F(372),1.5),n.plant(G(872),F(409),1.3),n.plant(G(949),F(410),1.4),n.plant(G(948),F(312),1.2);const m=G(792),_=G(950),x=F(314),C=F(408),A=2.68;for(let T=m;T<=_+.01;T+=.6)t.box(e.blackHung,T,A,(x+C)/2,.03,.05,C-x);for(let T=x;T<=C+.01;T+=.6)t.box(e.blackHung,(m+_)/2,A,T,_-m,.05,.03);for(const[T,R]of[[2,1],[6,2],[10,1],[4,5],[8,6],[12,4],[1,6]])t.box(e.glowSoft,m+T*.6+.3,A+.03,x+R*.6+.3,1.14,.012,1.14);for(let T=0;T<22;T++)n.hangingGreens(m+.4+i()*(_-m-.8),A-.05,x+.3+i()*(C-x-.6),7);n.domePendant(G(858),2.25,F(352),.42,cn)}{a("h",419.5,652,773,{doors:[[756,771]],swing:-1}),h(e.ceilPlaster,[652,419.5,773,478],2.95);const f=c([672,430,762,470]);t.box(e.felt,f.cx,2.93,f.cz,f.w,.02,f.d),t.box(e.glow,f.cx,2.925,F(430),f.w,.012,.04),t.box(e.glow,f.cx,2.925,F(470),f.w,.012,.04);const m=G(652.5)+.38,_=F(449),x=F(476)-F(423);t.box(e.cabinet,m,0,_,.6,.88,x),t.box(e.stone,m,.88,_,.64,.04,x+.02),t.collide(G(652.5),F(423),G(652.5)+.75,F(476)),t.box(e.plaster,G(652.5)+.1,.92,_,.02,.5,x),t.box(e.oak,G(652.5)+.22,1.5,_,.3,.04,x),t.box(e.glow,G(652.5)+.16,1.488,_,.03,.012,x-.1),t.box(e.black,m,.92,F(462),.42,.52,.36),t.box(e.steel,m,.92,F(448),.38,.3,.5);for(let T=0;T<6;T++)t.cyl(e.white,G(652.5)+.24,1.54,F(436+T*5),.05,T<2?.08:.1,8);for(const T of[428,434])t.box(e.olive,G(670),0,F(T),.3,.95,.3),t.cyl(e.pink,G(670),.95,F(T),.12,.3,10);t.collide(G(667),F(425),G(673.5),F(437));const C=G(689),A=G(755);t.box(e.marble,(C+A)/2,1.03,F(419.5)+.3,A-C,.05,.42);for(const T of[C+.1,(C+A)/2,A-.1])t.box(e.black,T,0,F(419.5)+.46,.03,1.03,.03);t.collide(C,F(419.5),A,F(419.5)+.52);for(const T of[701.4,715.2,729,743.3])n.barStool(G(T),F(419.5)+.85,It);for(const T of[704,722,740])n.globePendant(G(T),2.05,F(419.5)+.3,2.95);[[709,459],[748,459]].forEach(([T,R],M)=>{n.roundTable(G(T),F(R),.45,.72,e.oak);for(let S=0;S<4;S++){const E=Math.PI/4+S*Math.PI/2;n.shellChair(G(T)+Math.sin(E)*.72,F(R)+Math.cos(E)*.72,E,(S+M)%2?e.teal:e.grey)}}),n.domePendant(G(686),2,F(456),.45,2.95)}{s(e.plaster,"h",114.8,568,773),s(e.plaster,"v",568,58,114.8),g("v",568,96,112,-.07),g("h",114.8,664,680,.07),g("h",114.8,700,716,.07),Rh.slice(0,3).forEach(C=>d(C.r)),n.booth(G(497.5),F(69.5),0),n.booth(G(543.5),F(69.5),0),a("v",568,115.8,179),a("h",179,568,651.5,{doors:[[591,607],[614,630]],swing:1}),s(e.plaster,"v",610.8,115.8,179,{t:.1}),s(e.plaster,"v",652,115.8,179),y([568,115.8,610.8,179],"e",[595.5,143],[[588,129.5,zt],[602,129.5,zt],[588,157,It],[602,157,It]]),y([610.8,115.8,652,179],"e",[637,143],[[630,129.5,zt],[644,129.5,zt],[630,157,It],[644,157,It]]),p([652.6,116,662.5,179],"e");const f=c([568,210,584.4,238.6]);t.box(e.white,f.cx,0,f.cz,f.w,.9,f.d),t.box(e.cabinet,f.cx,.9,f.cz,.6,.45,.55),d([568,210,584.4,238.6]);for(const C of[[585.9,210,607.7,238.6],[609.7,210,630,238.6],[631.4,210,651.4,238.6]])v(C,"n");p([652.6,210,662.5,236],"e"),s(e.plaster,"h",239.4,568,652.4),a("v",568,240.2,378.2,{doors:[[341,359]],swing:1}),s(e.plaster,"v",652.4,240.2,340),a("v",652.4,340,378.2,{doors:[[341,359]],swing:-1}),a("h",378.2,568,652.4),p([653,240.2,662.5,340],"e");const m=c([568,240.2,652.4,378.2]);t.box(e.ceilPlaster,m.cx,en+.15,m.cz,m.w,.06,m.d),t.box(e.felt,m.cx,en+.13,m.cz,m.w-1.2,.02,m.d-1.4);for(const C of[-1,1])t.box(e.glow,m.cx+C*(m.w-1.2)/2,en+.125,m.cz,.04,.012,m.d-1.4),t.box(e.glow,m.cx,en+.125,m.cz+C*(m.d-1.4)/2,m.w-1.2,.012,.04);t.box(e.slat,m.cx,0,F(239.4)+.09,m.w-.1,en+.15,.04),n.tv(m.cx,.95,F(239.4)+.14,2,1.1,zt),t.box(e.oak,G(652.4)-.08,0,(F(240.2)+F(340))/2,.03,en+.15,F(340)-F(240.2));const _=G(610.5),x=F(303.4);t.box(e.walnut,_,.7,x,1.65,.06,5.08);for(const C of[-1.6,1.6])t.box(e.walnut,_,0,x+C,.9,.7,.4);t.collideC(_,x,1.65,5.08);for(const C of[262.5,278.1,292.7,308.2,322.8,338.3])n.confChair(G(588.5),F(C),Vi+(i()-.5)*.2),n.confChair(G(632.5),F(C),Gn+(i()-.5)*.2),t.box(e.white,_-.5,.76,F(C),.02,.16,.24,.35),t.box(e.white,_+.5,.76,F(C),.02,.16,.24,-.35);n.confChair(G(603.4),F(357.5),It),n.confChair(G(617),F(357.5),It);for(const C of[272,303,334])t.cyl(e.stone,_,.76,F(C),.1,.06,10,.16),t.sph(e.yellow,_,.84,F(C),.1,.05,.1,6);n.ring(_,2.05,F(322),.8,en+.15),n.ring(_,2.05,F(282),.55,en+.15),n.plant(G(644),F(247),1.1),u(e.rug,[474,332.5,543,395.7],.006),n.sofa(G(487),F(364),Vi,e.greyFabric,2.5),n.lounge(G(527),F(345),Gn+.5,e.tanFabric),n.lounge(G(527),F(384),Gn-.5,e.tanFabric),n.roundTable(G(509),F(364),.45,.4),n.roundTable(G(486),F(338.5),.22,.5),n.roundTable(G(486),F(390),.22,.5),u(e.rug,[684,359.7,772,379.2],.006),n.plant(G(694),F(369.5),1.2),n.plant(G(764),F(369.5),1.2),n.lounge(G(711.7),F(369.8),Vi,e.greyFabric),n.lounge(G(746.1),F(369.8),Gn,e.greyFabric),n.roundTable(G(729),F(369.8),.3,.45,e.stone)}{n.booth(G(373.6),F(433),0),n.booth(G(418),F(433),0);const f=c([441.5,421.8,472.6,436.8]);t.box(e.white,f.cx,0,f.cz,f.w,.9,f.d),t.box(e.cabinet,f.cx,.9,f.cz,.6,.45,.55),d([441.5,421.8,472.6,436.8]),u(e.rug,[462,438,519.7,478],.006),n.sofa(G(507),F(455),Gn,e.greyFabric,2.2),n.roundTable(G(489.4),F(455),.42,.4),n.plant(G(470),F(471),1.2),p([520.9,421.8,530.8,478.2],"e"),a("h",479.3,473.1,530.8),a("v",530.8,479.3,542.6,{doors:[[499,510.5],[514,525.5]],swing:-1}),s(e.plaster,"h",512,473.1,530.8,{t:.1}),a("h",542.6,473.1,530.8),s(e.plaster,"v",473.1,479.3,542.6),p([462,483,472.4,539],"w"),y([473.1,479.3,530.8,512],"w",[498.4,495],[[484.5,495,Vi],[512.5,495,Gn]],{table:[.8,1],tvW:.9}),y([473.1,512,530.8,542.6],"w",[498.4,528],[[484.5,528,Vi],[512.5,528,Gn]],{table:[.8,1],tvW:.9}),u(e.rug,[462,543.7,530.8,601.2],.006),n.lounge(G(482.5),F(553),zt-.35,e.tanFabric),n.lounge(G(517.4),F(553),zt+.35,e.tanFabric),n.roundTable(G(499.7),F(566),.4,.4),n.sofa(G(499),F(590.5),It,e.blueFabric,2.2),a("h",602.9,473.1,530.8),a("v",530.8,602.9,665.3,{doors:[[605,619]],swing:-1}),s(e.plaster,"v",473.1,602.9,665.3),s(e.plaster,"h",665.3,461.6,530.8),p([462,604.7,472.4,662.2],"w"),y([473.1,602.9,530.8,665.3],"w",[500,641.5],[[485.5,626,zt],[500,626,zt],[514.5,626,zt],[485.5,657,It],[500,657,It],[514.5,657,It]],{table:[2.3,.98],tvW:1.4});for(const m of[[462.3,666.1,483.5,694.4],[484.6,666.1,506.3,694.4],[507.4,666.1,530.1,694.4]])v(m,"s");u(e.rug,[563.4,422,618.6,445.5],.006),n.lounge(G(573.3),F(432),Vi,e.greyFabric),n.lounge(G(608.3),F(432),Gn,e.greyFabric),n.roundTable(G(590.6),F(432),.3,.45,e.stone),n.plant(G(555),F(430),1.1),n.plant(G(626),F(430),1.1);for(const[m,_,x]of[[484.6,519.6,502],[585.6,620.4,603]])u(e.rug,[631.7,m-9,650,_+9],.006),n.lounge(G(641),F(m),zt,e.blueFabric),n.lounge(G(641),F(_),It,e.blueFabric),n.roundTable(G(641),F(x),.28,.45,e.stone);for(const[m,_]of[[641.6,462],[642.8,543],[641.6,562],[642.8,643]])n.plant(G(m),F(_),1.15);s(e.plaster,"h",663.3,556.5,651),s(e.plaster,"v",556.5,663.3,722),g("v",556.5,700,716,-.07),d(Rh[3].r)}jd.forEach((f,m)=>{const _=G(f.x0)+.06,x=G(f.x1)-.06;if(n.workCluster(_,x,F(f.yc),f.seats,f.sides,cn),f.sides.includes(1)){const C=x-_;n.disc(_+C*.3,2.62,F(f.yc)+1.37,.78,m%2?e.terracotta:e.charcoal),n.disc(_+C*.74,2.5,F(f.yc)+1.2,.52,m%2?e.charcoal:e.terracotta)}});for(const[f,m,_]of[[507,88,328],[728,122,352],[396,448,716],[590,450,656]]){t.cylH(e.duct,G(f),F(m),G(f),F(_),2.92,.22,12);for(let x=m+20;x<_;x+=55)t.box(e.blackHung,G(f)+.23,2.86,F(x),.02,.14,.5)}t.cylH(e.duct,G(507),F(196),G(566),F(196),2.92,.16,10),t.cylH(e.duct,G(664),F(196),G(728),F(196),2.92,.16,10);for(const[f,m]of[[554,[130,185,240,295]],[673,[130,190,250,310]],[451,[470,530,590,650,705]],[543.6,[470,560,640]]])for(const _ of m)n.bluePendant(G(f),2.3,F(_),cn);p([540.5,700,555.5,721],"s");function y(f,m,_,x,C={}){const A=c(f),[T,R]=C.table||[1.5,1];t.box(e.ceilPlaster,A.cx,en,A.cz,A.w,.06,A.d),t.cyl(e.glow,A.cx,en-.012,A.cz+A.d*.3,.05,.012,8),t.cyl(e.glow,A.cx,en-.012,A.cz-A.d*.3,.05,.012,8);const M=m==="w"?G(f[0])+.085:G(f[2])-.085,S=m==="w"?1:-1;t.box(e.felt,M,0,A.cz,.03,en,A.d-.14),n.tv(M+S*.05,1,F(_[1]),C.tvW||1.25,(C.tvW||1.25)*.58,m==="w"?Vi:Gn),t.box(e.oak,A.cx,0,F(f[1])+.085,A.w-.14,en,.03);const E=G(_[0]),I=F(_[1]);t.box(e.grey,E,.72,I,T,.03,R);for(const L of[-1,1])for(const N of[-1,1])t.cyl(e.oak,E+L*(T/2-.1),0,I+N*(R/2-.1),.025,.72,6);t.collideC(E,I,T,R);for(const[L,N,k]of x)n.meetingChair(G(L),F(N),k);n.ring(E,2,I,.26,en)}function v(f,m){const _=c(f),x=m==="n"?f[3]:f[1],C=m==="n"?f[1]:f[3],A=m==="n"?-1:1;r(e.plaster,"v",f[0],f[1],f[3],0,cn,.08),r(e.plaster,"v",f[2],f[1],f[3],0,cn,.08),r(e.plaster,"h",x,f[0],f[2],0,cn,.08),a("h",C,f[0],f[2],{fluted:!1,top:2.4}),r(e.felt,"h",x,f[0],f[2],0,2.4,.03,A*.06),t.box(e.ceilPlaster,_.cx,2.4,_.cz,_.w,.05,_.d),t.box(e.glowSoft,_.cx,2.388,_.cz,.45,.012,.45),t.box(e.oak,_.cx,1,F(x)+A*.25,_.w-.2,.04,.36),t.cyl(e.olive,_.cx,0,_.cz+A*.25,.17,.6,12),d(f)}}function cA(){const t=document.createElement("canvas");t.width=1024,t.height=112;const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height),e.font='700 76px "Segoe UI", Arial, Helvetica, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(40,25,10,0.55)",e.fillText("BIET INFRASTRUCTURE",516,62);const n=e.createLinearGradient(0,10,0,100);n.addColorStop(0,"#d9a868"),n.addColorStop(1,"#a8743a"),e.fillStyle=n,e.fillText("BIET INFRASTRUCTURE",512,58);const i=new bc(t);i.colorSpace=Ut,i.anisotropy=4;const r=new Zt({map:i,transparent:!0,depthWrite:!1});return r.userData={noCast:!0,noRecv:!0},r}const cl=340,ul=45,T0=1210,A0=735;function U_(t,e,n,i,r=10){const s=Math.min((n-r*2)/(T0-cl),(i-r*2)/(A0-ul)),o=t+(n-(T0-cl)*s)/2,a=e+(i-(A0-ul)*s)/2;return{s,x:l=>o+(l-cl)*s,y:l=>a+(l-ul)*s,ix:l=>(l-o)/s+cl,iy:l=>(l-a)/s+ul}}function Yd(t,e,n,i,r,s={}){const o=U_(e,n,i,r,s.pad),a=l=>[o.x(l[0]),o.y(l[1]),(l[2]-l[0])*o.s,(l[3]-l[1])*o.s];t.save(),t.fillStyle=s.bg||"#1b1e23",t.beginPath(),t.roundRect(e,n,i,r,10),t.fill(),t.fillStyle="#34383f";for(const l of Ch)t.fillRect(...a(l.r));for(const l of mn){const c=P_[l.zone],u=l.id===s.roomId,h=l.id===s.hoverId;t.globalAlpha=u?.95:h?.7:.33,t.fillStyle=c,t.fillRect(...a(l.rect)),t.globalAlpha=1,(u||h)&&(t.strokeStyle="#ffffff",t.lineWidth=1.5,t.strokeRect(...a(l.rect)))}t.fillStyle="#23262b";for(const l of Rh)t.fillRect(...a(l.r));t.fillStyle="rgba(240,238,232,0.8)";for(const l of jd){const c=.6/ar,u=l.sides.includes(-1)?l.yc-c:l.yc,h=l.sides.includes(1)?l.yc+c:l.yc;t.fillRect(...a([l.x0,u,l.x1,h]))}t.strokeStyle="#8b9099",t.lineWidth=1;for(const l of Ch)t.strokeRect(...a(l.r));if(s.labels){t.textAlign="center",t.textBaseline="middle";for(const l of mn){const[c,u,h,d]=a(l.rect),p=l.name.replace("Workstations · Neighbourhood ","N").replace(" · ",`
`).replace("Collaboration","Collab").replace(" & Cafeteria","").replace("Reception ","").replace("Focus Rooms & Phone Booths",`Focus
rooms`),g=Math.max(9,Math.min(13,h/6));t.font=`600 ${g}px "Segoe UI", Arial, sans-serif`,t.fillStyle=l.id===s.roomId||l.id===s.hoverId?"#111":"#f3f1ec",p.split(`
`).forEach((y,v,f)=>t.fillText(y,c+h/2,u+d/2+(v-(f.length-1)/2)*(g+2),h-2))}}if(s.showPlayer!==!1&&s.px){const l=o.x(s.px),c=o.y(s.py),u=s.yaw||0,h=-Math.sin(u),d=-Math.cos(u),p=s.marker||7;t.fillStyle="rgba(255,255,255,0.18)",t.beginPath(),t.moveTo(l,c),t.arc(l,c,p*3.2,Math.atan2(d,h)-.6,Math.atan2(d,h)+.6),t.closePath(),t.fill(),t.fillStyle="#ffffff",t.strokeStyle="#111",t.lineWidth=1.5,t.beginPath(),t.moveTo(l+h*p*1.5,c+d*p*1.5),t.lineTo(l-d*p*.8-h*p*.7,c+h*p*.8-d*p*.7),t.lineTo(l+d*p*.8-h*p*.7,c-h*p*.8-d*p*.7),t.closePath(),t.fill(),t.stroke()}return t.restore(),o}class uA{constructor(e){this.e=e,this.moving=!1,this.ray=new b_,this.tmp=new je,this.controllers=[],this.snapArmed=!0,this.aimer=null,this.aimHit=null;const n=e.renderer;for(let r=0;r<2;r++){const s=n.xr.getController(r);s.userData={source:null,prev:[],hover:null,stickAim:!1},s.addEventListener("connected",c=>{s.userData.source=c.data,s.visible=!0}),s.addEventListener("disconnected",()=>{s.userData.source=null,s.visible=!1}),s.addEventListener("selectstart",()=>this._selectStart(s)),s.addEventListener("selectend",()=>this._selectEnd(s)),s.addEventListener("squeezestart",()=>this.toggleMenu());const o=new rt(new Di(.035,.035,.11),new Zt({color:2763310}));o.position.z=.045;const a=new kt().setFromPoints([new O(0,0,0),new O(0,0,-1)]),l=new u0(a,new Mh({color:14267002,transparent:!0,opacity:.8}));l.scale.z=2.5,s.add(o,l),s.userData.laser=l,s.visible=!1,e.rig.add(s),this.controllers.push(s)}this.arcN=40;const i=new kt;i.setAttribute("position",new In(new Float32Array(this.arcN*3),3)),this.arc=new u0(i,new Mh({color:7332769})),this.arc.frustumCulled=!1,this.marker=new rt(new Rc(.2,.27,32).rotateX(-Math.PI/2),new Zt({color:7332769,transparent:!0,opacity:.9,depthTest:!1})),this.marker.renderOrder=900,this.arc.visible=this.marker.visible=!1,e.scene.add(this.arc,this.marker),this.menu=new fA(e,this),e.scene.add(this.menu.mesh)}onSessionEnd(){this.menu.hide(),this.arc.visible=this.marker.visible=!1,this.aimer=null,this.moving=!1}onState(){this.menu.mesh.visible&&this.menu.draw()}toggleMenu(){this.menu.mesh.visible?this.menu.hide():this.menu.show()}_targets(){const e=[];return this.menu.mesh.visible&&e.push(this.menu.mesh),this.e.state.mode==="pano"&&e.push(...this.e.pano.targets()),e}_cast(e){return this.tmp.identity().extractRotation(e.matrixWorld),this.ray.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.ray.direction.set(0,0,-1).applyMatrix4(this.tmp),this.ray.intersectObjects(this._targets(),!1)[0]||null}_selectStart(e){const n=this._cast(e);if(n){n.object===this.menu.mesh?this.menu.click(n.uv):this.e.pano.activate(n.object);return}this.e.state.mode==="walk"&&(this.aimer=e)}_selectEnd(e){this.aimer===e&&!e.userData.stickAim&&this._finishAim()}_finishAim(){const e=this.aimHit;this.aimer=null,this.aimHit=null,this.arc.visible=this.marker.visible=!1,e&&this.e._fadeThrough(()=>this.e.teleportTo(e.x,e.z))}_updateArc(e){this.tmp.identity().extractRotation(e.matrixWorld);const n=new O().setFromMatrixPosition(e.matrixWorld),i=new O(0,0,-1).applyMatrix4(this.tmp).multiplyScalar(6.5),r=this.arc.geometry.attributes.position;let s=null,o=0;const a=.04;for(;o<this.arcN-1;o++){r.setXYZ(o,n.x,n.y,n.z);const u=n.x+i.x*a,h=n.y+i.y*a,d=n.z+i.z*a;if(i.y-=9.8*a,h<=0){const p=n.y/(n.y-h);s=new O(n.x+(u-n.x)*p,0,n.z+(d-n.z)*p),o++,r.setXYZ(o,s.x,.01,s.z);break}n.set(u,h,d)}for(let u=o+1;u<this.arcN;u++)r.setXYZ(u,r.getX(o),r.getY(o),r.getZ(o));r.needsUpdate=!0;const l=s&&this.e.col.walkable(s.x,s.z),c=l?7332769:14905439;this.arc.material.color.setHex(c),this.marker.material.color.setHex(c),this.arc.visible=!0,this.marker.visible=!!s,s&&this.marker.position.set(s.x,.02,s.z),this.aimHit=l?s:null}update(e){var o;const n=this.e,i=n.state;let r=0,s=0;this.moving=!1;for(const a of this.controllers){const l=a.userData.source,c=l==null?void 0:l.gamepad,u=a.visible?this._cast(a):null;if(a.userData.laser.scale.z=u?u.distance:this.aimer===a?.001:2.5,u&&u.object===this.menu.mesh&&this.menu.hover(u.uv),!c)continue;const h=c.axes.length>=4?c.axes[2]:c.axes[0]||0,d=c.axes.length>=4?c.axes[3]:c.axes[1]||0,p=l.handedness;for(const y of[4,5]){const v=!!((o=c.buttons[y])!=null&&o.pressed);v&&!a.userData.prev[y]&&this.toggleMenu(),a.userData.prev[y]=v}const g=i.mode==="walk"&&!this.menu.mesh.visible;p==="left"&&g&&!i.teleportOnly&&(Math.abs(h)>.15&&(r=h),Math.abs(d)>.15&&(s=d)),(p==="right"||p==="left"&&i.teleportOnly)&&(p==="right"&&(this.snapArmed&&Math.abs(h)>.65&&Math.abs(d)<.5?(n.turnBy(h>0?-Math.PI/6:Math.PI/6),this.snapArmed=!1):Math.abs(h)<.3&&(this.snapArmed=!0)),g&&(d<-.7&&!this.aimer?(this.aimer=a,a.userData.stickAim=!0):a.userData.stickAim&&this.aimer===a&&d>-.3&&(a.userData.stickAim=!1,this._finishAim())))}if(this.aimer&&(i.mode!=="walk"||this.menu.mesh.visible?(this.aimer.userData.stickAim=!1,this.aimer=null,this.arc.visible=this.marker.visible=!1):this._updateArc(this.aimer)),r||s){const a=n.camera.getWorldDirection(new O),l=Math.hypot(a.x,a.z)||1,c=a.x/l,u=a.z/l,h=i.speed*e;n.moveBy((c*-s+-u*r)*h,(u*-s+c*r)*h),this.moving=!0}}}class fA{constructor(e,n){this.e=e,this.xr=n,this.W=1280,this.Hh=800,this.canvas=document.createElement("canvas"),this.canvas.width=this.W,this.canvas.height=this.Hh,this.ctx=this.canvas.getContext("2d"),this.tex=new bc(this.canvas),this.tex.colorSpace=Ut,this.mesh=new rt(new hr(1.44,.9),new Zt({map:this.tex,toneMapped:!1})),this.mesh.visible=!1,this.mesh.renderOrder=950,this.buttons=[],this.hot=null}show(){const e=this.e,n=e.head(),i=e.camera.getWorldDirection(new O),r=Math.hypot(i.x,i.z)||1;this.mesh.position.set(n.x+i.x/r*1.15,Math.max(1,n.y-.12),n.z+i.z/r*1.15),this.mesh.lookAt(n.x,this.mesh.position.y,n.z),this.mesh.visible=!0,this.draw()}hide(){this.mesh.visible=!1}_btn(e,n,i,r,s,o,a=!1,l=!1){this.buttons.push({x:e,y:n,w:i,h:r,fn:o,id:s+e+n});const c=this.ctx,u=this.hot===s+e+n;c.fillStyle=a?"#c9a36b":u?"#3a3f48":"#252930",c.strokeStyle=u?"#e7c992":"#454b55",c.lineWidth=2,c.beginPath(),c.roundRect(e,n,i,r,10),c.fill(),c.stroke(),c.fillStyle=a?"#16181c":"#eceae6",c.font=`${l?500:600} ${l?21:24}px "Segoe UI", Arial, sans-serif`,c.textAlign="center",c.textBaseline="middle",c.fillText(s,e+i/2,n+r/2+1,i-16)}draw(){const e=this.ctx,n=this.e,i=n.state;this.buttons=[],e.fillStyle="#14161a",e.fillRect(0,0,this.W,this.Hh),e.strokeStyle="#c9a36b",e.lineWidth=4,e.strokeRect(2,2,this.W-4,this.Hh-4),e.textAlign="left",e.textBaseline="alphabetic",e.fillStyle="#c9a36b",e.font='700 30px "Segoe UI", Arial, sans-serif',e.fillText("BIET CORPORATE INTERIOR",36,52),e.fillStyle="#9aa0aa",e.font='500 20px "Segoe UI", Arial, sans-serif',e.fillText(i.mode==="pano"?"Reconstructed 360° panorama (generated from the 3D model)":"3D walkthrough",36,82),this._btn(36,104,330,58,"3D WALKTHROUGH",()=>n.setMode("walk"),i.mode==="walk"),this._btn(382,104,330,58,"360° VIEW",()=>n.setMode("pano"),i.mode==="pano"),e.fillStyle="#9aa0aa",e.font='600 19px "Segoe UI", Arial, sans-serif',e.textAlign="left",e.fillText(i.mode==="pano"?"VIEW ROOM IN 360°":"TELEPORT TO ROOM",36,200),mn.forEach((o,a)=>{const l=a%2,c=Math.floor(a/2),u=o.name.replace("Workstations · ","Workstations ");this._btn(36+l*346,214+c*62,330,52,u,()=>{n.state.mode==="pano"?n.viewPano(o.id):n.gotoRoom(o.id),this.hide()},i.roomId===o.id,!0)});const r=540;e.fillStyle="#9aa0aa",e.font='600 19px "Segoe UI", Arial, sans-serif',e.textAlign="left",e.fillText(`WALK SPEED  ${i.speed.toFixed(1)} m/s`,36,r+2),this._btn(36,r+14,100,52,"–",()=>n.setSpeed(i.speed-.4)),this._btn(148,r+14,100,52,"+",()=>n.setSpeed(i.speed+.4)),this._btn(266,r+14,216,52,i.teleportOnly?"Teleport only: ON":"Teleport only: OFF",()=>n.setTeleportOnly(!i.teleportOnly),i.teleportOnly,!0),this._btn(496,r+14,216,52,i.vignette?"Comfort vignette: ON":"Comfort vignette: OFF",()=>n.setVignette(!i.vignette),i.vignette,!0),this._btn(382,r+84,160,52,"Close",()=>this.hide(),!1,!0),this._btn(552,r+84,160,52,"Exit VR",()=>n.exitVR(),!1,!0),e.fillStyle="#7d838d",e.font='500 17px "Segoe UI", Arial, sans-serif',e.fillText("Left stick: walk · Right stick: snap turn / push forward to teleport",36,r+172),e.fillText("Trigger: select, or hold on the floor to teleport · A/B/X/Y or grip: menu",36,r+198),Yd(e,740,100,510,420,{px:i.px,py:i.py,yaw:i.yaw,roomId:i.roomId,showPlayer:!0}),e.fillStyle="#9aa0aa",e.font='600 19px "Segoe UI", Arial, sans-serif',e.textAlign="left";const s=mn.find(o=>o.id===i.roomId);e.fillText("YOU ARE IN",748,560),e.fillStyle="#eceae6",e.font='600 26px "Segoe UI", Arial, sans-serif',e.fillText(s?s.name:"Circulation",748,594,490),this.tex.needsUpdate=!0}_at(e){const n=e.x*this.W,i=(1-e.y)*this.Hh;return this.buttons.find(r=>n>=r.x&&n<=r.x+r.w&&i>=r.y&&i<=r.y+r.h)||null}hover(e){const n=this._at(e),i=n?n.id:null;i!==this.hot&&(this.hot=i,this.draw())}click(e){const n=this._at(e);n&&(n.fn(),this.mesh.visible&&this.draw())}}class hA{constructor(e){this.e=e,this.group=new Nr,this.group.visible=!1,e.scene.add(this.group),this.hotspots=[],this.room=null,this.refIndex=0,this.loader=new XT,this.size=e.low?1024:2048}enter(e){const n=this.e;this.room=e,this.refIndex=0;const i=G(e.pano[0]),r=F(e.pano[1]);this.rt||(this.rt=new u_(this.size,{type:Ks,generateMipmaps:!1}),this.cube=new l_(.05,90,this.rt),n.scene.add(this.cube)),n.office.visible=!0,this.group.visible=!1,n.rig.visible=!1,n.xr.menu.hide(),n.scene.background=n.skyColor,this.cube.position.set(i,oc,r),this.cube.update(n.renderer,n.scene),n.rig.visible=!0,n.scene.background=this.rt.texture,n.office.visible=!1,n.teleportTo(i,r,e.panoYaw??e.yaw),this._build(i,r),this.group.visible=!0}exit(){const e=this.e;e.scene.background=e.skyColor,e.office.visible=!0,this.group.visible=!1,this.room=null}refresh(){this.room&&this.group.visible&&this._build(G(this.room.pano[0]),F(this.room.pano[1]))}setRef(e){this.refIndex=e,this.refresh()}targets(){return this.hotspots}pick(e){const n=e.intersectObjects(this.hotspots,!1)[0];return n?n.object:null}activate(e){const n=e.userData;n.roomId?this.e.viewPano(n.roomId):n.walk&&this.e.gotoRoom(this.room.id)}_clear(){var e,n,i,r;for(const s of[...this.group.children])this.group.remove(s),(e=s.geometry)==null||e.dispose(),(i=(n=s.material)==null?void 0:n.map)==null||i.dispose(),(r=s.material)==null||r.dispose();this.hotspots=[]}_label(e,n,i,r={}){const s=document.createElement("canvas");s.width=768,s.height=Math.round(768*i/n);const o=s.getContext("2d");o.fillStyle=r.bg||"rgba(18,20,24,0.88)",o.beginPath(),o.roundRect(3,3,s.width-6,s.height-6,26),o.fill(),o.strokeStyle=r.border||"#c9a36b",o.lineWidth=5,o.stroke(),o.textAlign="center",o.textBaseline="middle";const a=s.height/(e.length+.6);e.forEach((u,h)=>{o.fillStyle=h===0?r.color||"#f1ede6":"#b9bdc6",o.font=`${h===0?700:500} ${Math.round(a*(h===0?.6:.46))}px "Segoe UI", Arial, sans-serif`,o.fillText(u,s.width/2,a*(h+.8),s.width-40)});const l=new bc(s);l.colorSpace=Ut;const c=new rt(new hr(n,i),new Zt({map:l,transparent:!0,depthTest:!1,toneMapped:!1}));return c.renderOrder=800,c}_build(e,n){this._clear();const i=this.room,r=this.e.renderer.xr.isPresenting?1.5:oc,s=mn.filter(c=>c.id!==i.id).map(c=>{const u=G(c.pano[0])-e,h=F(c.pano[1])-n;return{r:c,az:Math.atan2(u,h),dist:Math.hypot(u,h)}});s.sort((c,u)=>c.az-u.az);const o=.36;for(let c=0;c<4;c++)for(let u=1;u<s.length;u++)s[u].az-s[u-1].az<o&&(s[u].az=s[u-1].az+o);const a=(i.panoYaw??i.yaw)+Math.PI;s.push({walk:!0,az:a,dist:0});for(const c of s){const u=c.walk?this._label(["WALK THIS ROOM","switch to 3D walkthrough"],.86,.3,{border:"#6fe3a1",color:"#bff5d6"}):this._label([`→  ${c.r.name}`,`${Math.round(c.dist)} m away · view in 360°`],.98,.3),h=c.walk?2.4:3.2;u.position.set(e+Math.sin(c.az)*h,r-(c.walk?1:.42),n+Math.cos(c.az)*h),u.lookAt(e,r-.1,n),u.userData=c.walk?{walk:!0}:{roomId:c.r.id},this.group.add(u),this.hotspots.push(u)}const l=this.e.state;if(this.e.renderer.xr.isPresenting){const c=a-1.25,u=(p,g)=>new O(e+Math.sin(c)*p,g,n+Math.cos(c)*p),h=this._label(["RECONSTRUCTED 360° PANORAMA","generated from the 3D model – not a photograph"],1.5,.26,{border:"#8791d8"});h.position.copy(u(2.6,r+1.05)),h.lookAt(e,r+.6,n),this.group.add(h);const d=i.refs[this.refIndex];if(l.showRef&&d){const p=Ll[d],g=new rt(new hr(1.9,.956),new Zt({color:16777215,toneMapped:!1,depthTest:!1}));g.renderOrder=800,this.loader.load(Dc(d),v=>{v.colorSpace=Ut,g.material.map=v,g.material.needsUpdate=!0}),g.position.copy(u(2.6,r+.3)),g.lookAt(e,r+.3,n);const y=this._label([`ORIGINAL NUEMORPH RENDER · PDF p.${p.page}`,"flat perspective image for comparison – not a 360° capture"],1.9,.26,{border:"#b3272d"});y.position.copy(u(2.6,r-.36)),y.lookAt(e,r-.36,n),this.group.add(g,y)}}}}const dA=new O(0,1,0);class pA{constructor(e,n){var p;this.container=e,this.onState=n||(()=>{});const i=new URLSearchParams(location.search).get("quality");this.low=i?i==="low":/OculusBrowser|Quest|Android|Mobile/i.test(navigator.userAgent),this.state={ready:!1,mode:"walk",roomId:"lobby",panoRoom:"lobby",px:0,py:0,yaw:0,inXR:!1,xrSupported:null,speed:1.6,teleportOnly:!1,vignette:!0,showRef:!0,idle:!0,stats:null};const r=this.renderer=new aT({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,this.low?1:2)),r.outputColorSpace=Ut,r.toneMapping=Hv,r.toneMappingExposure=.95,r.shadowMap.enabled=!0,r.shadowMap.type=this.low?Td:Bv,r.shadowMap.autoUpdate=!1,r.xr.enabled=!0,r.xr.setReferenceSpaceType("local-floor"),r.xr.setFoveation&&r.xr.setFoveation(1),e.appendChild(r.domElement),r.domElement.style.touchAction="none",this.scene=new __,this.skyColor=new qe(13624049),this.scene.background=this.skyColor;const s=new yh(r);this.scene.environment=s.fromScene(new QT,.04).texture,this.scene.environmentIntensity=.55,s.dispose(),this.camera=new yn(70,1,.05,120),this.rig=new Nr,this.rig.add(this.camera),this.scene.add(this.rig),this.camera.position.set(0,oc,0),this.yaw=0,this.pitch=0,this.scene.add(new jT(16777215,13483950,.95)),this.scene.add(new KT(16773340,.3));const o=new ZT(16774114,2.1),a=G(775),l=F(390);o.position.set(a+7,40,l+5.5),o.target.position.set(a,0,l),o.castShadow=!0;const c=o.shadow.camera;c.left=-25,c.right=25,c.top=20,c.bottom=-20,c.near=1,c.far=60,o.shadow.mapSize.set(this.low?2048:4096,this.low?2048:4096),o.shadow.bias=-6e-4,o.shadow.normalBias=.03,this.scene.add(o,o.target);const u=sA(this.low);u.sign=cA();const h=new iA,d=N_(2025);lA(h,u,oA(h,u,d),d),this.office=new Nr,this.state.stats={triangles:Math.round(h.tris),colliders:h.colliders.length},h.build(this.office),this.state.stats.drawCalls=this.office.children.length,this.scene.add(this.office),this.col=new rA(h.colliders,Ch.map(g=>[G(g.r[0]),F(g.r[1]),G(g.r[2]),F(g.r[3])])),r.shadowMap.needsUpdate=!0,this.fade=new rt(new ga(.3,16,10),new Zt({color:0,side:Kt,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.fade.renderOrder=1e3,this.fade.visible=!1,this.camera.add(this.fade),this.vig=new rt(new Rc(.2,1.2,40),new Zt({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.vig.position.z=-.32,this.vig.renderOrder=999,this.vig.visible=!1,this.camera.add(this.vig),this.fadeT=null,this.glide=null,this.pano=new hA(this),this.xr=new uA(this),this.raycaster=new b_,this.keys=new Set,this._bind(),this._resize(),this._placeAt(Ts("lobby"),!1),(p=navigator.xr)!=null&&p.isSessionSupported?navigator.xr.isSessionSupported("immersive-vr").then(g=>this._set({xrSupported:g})).catch(()=>this._set({xrSupported:!1})):this._set({xrSupported:!1}),this.clock=new JT,this._emitT=0,r.setAnimationLoop(()=>this._frame()),this._set({ready:!0})}setIdle(e){this._set({idle:e})}setSpeed(e){this._set({speed:Math.min(4,Math.max(.6,e))})}setTeleportOnly(e){this._set({teleportOnly:e})}setVignette(e){this._set({vignette:e})}setShowRef(e){this._set({showRef:e}),this.pano.refresh()}gotoRoom(e){const n=Ts(e);n&&this._fadeThrough(()=>{this.state.mode==="pano"&&this.pano.exit(),this._set({mode:"walk",idle:!1}),this._placeAt(n,!0)})}viewPano(e){const n=Ts(e||this.state.roomId)||mn[0];this._fadeThrough(()=>{this._set({mode:"pano",panoRoom:n.id,roomId:n.id,idle:!1}),this.pano.enter(n)})}setMode(e){e!==this.state.mode&&(e==="pano"?this.viewPano(this.state.roomId||this.nearestRoom().id):this.gotoRoom(this.state.panoRoom))}nearestRoom(){const e=this.head();let n=mn[0],i=1/0;for(const r of mn){const s=Math.hypot(G(r.pano[0])-e.x,F(r.pano[1])-e.z);s<i&&(i=s,n=r)}return n}async enterVR(){if(!navigator.xr)throw new Error("WebXR is not available in this browser.");const e=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.camera.rotation.set(0,0,0),this.pitch=0,await this.renderer.xr.setSession(e),this._set({inXR:!0,idle:!1}),this.pano.refresh(),e.addEventListener("end",()=>{this.camera.position.set(0,oc,0),this.camera.rotation.set(0,0,0),this.yaw=this.rig.rotation.y,this.xr.onSessionEnd(),this._set({inXR:!1}),this.pano.refresh(),this._resize()})}exitVR(){var e;(e=this.renderer.xr.getSession())==null||e.end()}toggleFullscreen(){var n;const e=this.container.parentElement||this.container;document.fullscreenElement?document.exitFullscreen():(n=e.requestFullscreen)==null||n.call(e)}dispose(){var e;this.renderer.setAnimationLoop(null),(e=this._unbind)==null||e.call(this),this.renderer.dispose(),this.renderer.domElement.remove()}head(e=new O){return this.camera.getWorldPosition(e),e}headYaw(){const e=this.camera.getWorldDirection(new O);return Math.atan2(-e.x,-e.z)}moveBy(e,n){const i=this.head(),r=this.col.blocked(i.x,i.z);(r||!this.col.blocked(i.x+e,i.z))&&(this.rig.position.x+=e,i.x+=e),(r||!this.col.blocked(i.x,i.z+n))&&(this.rig.position.z+=n)}teleportTo(e,n,i){this.rig.updateMatrixWorld(!0),i!==void 0&&this.turnTo(i);const r=this.head();this.rig.position.x+=e-r.x,this.rig.position.z+=n-r.z,this.rig.updateMatrixWorld(!0)}turnBy(e){const n=this.head();n.y=0,this.rig.position.sub(n).applyAxisAngle(dA,e).add(n),this.rig.position.y=0,this.rig.rotation.y+=e,this.yaw=this.rig.rotation.y,this.rig.updateMatrixWorld(!0)}turnTo(e){this.turnBy(e-this.headYaw())}_set(e){Object.assign(this.state,e),this.onState({...this.state})}_placeAt(e,n){this.pitch=0,this.renderer.xr.isPresenting||this.camera.rotation.set(0,0,0),this.teleportTo(G(e.spawn[0]),F(e.spawn[1]),e.yaw),n&&this._set({roomId:e.id})}_fadeThrough(e){this.glide=null,this.fadeT={t:0,fn:e,done:!1}}_bind(){const e=this.renderer.domElement;let n=null;const i=c=>{var u;this.renderer.xr.isPresenting||(n={x:c.clientX,y:c.clientY,moved:0},(u=e.setPointerCapture)==null||u.call(e,c.pointerId),this.state.idle&&this._set({idle:!1}))},r=c=>{if(!n){this.state.mode==="pano"&&(e.style.cursor=this.pano.pick(this._ray(c))?"pointer":"grab");return}const u=c.clientX-n.x,h=c.clientY-n.y;n.x=c.clientX,n.y=c.clientY,n.moved+=Math.abs(u)+Math.abs(h),this.turnBy(u*.0042),this.pitch=Math.max(-1.2,Math.min(1.2,this.pitch+h*.0042)),this.camera.rotation.x=this.pitch},s=c=>{n&&n.moved<6&&this._click(c),n=null},o=c=>{var h;if(((h=c.target)==null?void 0:h.tagName)==="INPUT")return;const u=c.key.toLowerCase();c.type==="keydown"?(this.keys.add(u),this.state.idle&&["w","a","s","d","arrowup"].includes(u)&&this._set({idle:!1})):this.keys.delete(u),(u.startsWith("arrow")||u===" ")&&c.preventDefault()},a=()=>this.keys.clear(),l=()=>this._resize();e.addEventListener("pointerdown",i),e.addEventListener("pointermove",r),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",()=>n=null),window.addEventListener("keydown",o),window.addEventListener("keyup",o),window.addEventListener("blur",a),window.addEventListener("resize",l),document.addEventListener("fullscreenchange",l),this._unbind=()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",o),window.removeEventListener("blur",a),window.removeEventListener("resize",l),document.removeEventListener("fullscreenchange",l)}}_ray(e){const n=this.renderer.domElement.getBoundingClientRect(),i=new he((e.clientX-n.left)/n.width*2-1,-((e.clientY-n.top)/n.height)*2+1);return this.camera.updateMatrixWorld(!0),this.raycaster.setFromCamera(i,this.camera),this.raycaster}_click(e){const n=this._ray(e);if(this.state.mode==="pano"){const c=this.pano.pick(n);c&&this.pano.activate(c);return}const i=n.ray.origin,r=n.ray.direction;if(r.y>-.02)return;const s=-i.y/r.y,o=i.x+r.x*s,a=i.z+r.z*s;if(s>25||!this.col.walkable(o,a))return;const l=this.head();this.col.clearPath(l.x,l.z,o,a)?this.glide={x0:l.x,z0:l.z,x:o,z:a,t:0,dur:Math.min(1.6,.25+s*.09)}:this._fadeThrough(()=>this.teleportTo(o,a))}_resize(){if(this.renderer.xr.isPresenting)return;const e=this.container.clientWidth||window.innerWidth,n=this.container.clientHeight||window.innerHeight;this.renderer.setSize(e,n),this.camera.aspect=e/n,this.camera.fov=70,this.camera.updateProjectionMatrix()}_desktop(e){const n=this.keys,i=this.state,r=(n.has("arrowleft")||n.has("q")?1:0)-(n.has("arrowright")||n.has("e")?1:0);if(r&&this.turnBy(r*1.7*e),i.idle&&this.turnBy(.06*e),i.mode!=="walk")return;const s=(n.has("w")||n.has("arrowup")?1:0)-(n.has("s")||n.has("arrowdown")?1:0),o=(n.has("d")?1:0)-(n.has("a")?1:0);if(s||o){this.glide=null;const a=i.speed*(n.has("shift")?2:1)*e,l=Math.hypot(s,o),c=this.rig.rotation.y,u=-Math.sin(c),h=-Math.cos(c);this.moveBy((u*s-h*o)/l*a,(h*s+u*o)/l*a)}if(this.glide){const a=this.glide;a.t=Math.min(1,a.t+e/a.dur);const l=a.t*a.t*(3-2*a.t);this.teleportTo(a.x0+(a.x-a.x0)*l,a.z0+(a.z-a.z0)*l),a.t>=1&&(this.glide=null)}}_frame(){const e=Math.min(.05,this.clock.getDelta()),n=this.renderer.xr.isPresenting;if(n?this.xr.update(e):this._desktop(e),this.fadeT){const s=this.fadeT;s.t+=e/.22,!s.done&&s.t>=1&&(s.fn(),s.done=!0);const o=s.t<1?s.t:Math.max(0,2-s.t);this.fade.material.opacity=Math.min(1,o),this.fade.visible=o>.001,s.t>=2&&(this.fadeT=null)}const i=n&&this.state.vignette&&this.xr.moving?.92:0,r=this.vig.material;if(r.opacity+=(i-r.opacity)*Math.min(1,e*10),this.vig.visible=r.opacity>.01,this._emitT+=e,this._emitT>.1){this._emitT=0;const s=this.head(),o=eA(s.x),a=tA(s.z),l=this.headYaw(),c=this.state,u=c.mode==="pano"?Ts(c.panoRoom):I_(o,a),h=u?u.id:null;(Math.abs(o-c.px)>.05||Math.abs(a-c.py)>.05||Math.abs(l-c.yaw)>.01||h!==c.roomId)&&(this._set({px:o,py:a,yaw:l,roomId:h}),this.xr.onState())}this.renderer.render(this.scene,this.camera)}}function mA({st:t,onEnterVR:e,onWalk:n,onPano:i,onPlan:r,onRooms:s}){const o=t.xrSupported;return W.jsx("div",{className:"landing",children:W.jsxs("div",{className:"landing-card",children:[W.jsx("div",{className:"eyebrow",children:"Nuemorph · Davanagere IT Interior"}),W.jsx("h1",{children:"BIET CORPORATE INTERIOR"}),W.jsx("h2",{children:"IMMERSIVE VR EXPERIENCE"}),W.jsxs("p",{className:"lede",children:["A walkable reconstruction of the BIET office from the Nuemorph design set – lobby, collaboration lounge, meeting rooms, pantry, conference room and all ",L_," workstations."]}),W.jsxs("div",{className:"landing-buttons",children:[W.jsx("button",{className:"btn primary",onClick:e,disabled:!o,children:"ENTER VR"}),W.jsx("button",{className:"btn",onClick:n,children:"3D WALKTHROUGH"}),W.jsx("button",{className:"btn",onClick:i,children:"360° VIEW"}),W.jsx("button",{className:"btn",onClick:r,children:"EXPLORE FLOOR PLAN"}),W.jsx("button",{className:"btn",onClick:s,children:"SELECT ROOM"})]}),W.jsxs("p",{className:"note",children:[o===null&&"Checking for a VR headset…",o===!0&&"VR headset detected – ENTER VR starts the immersive session.",o===!1&&"ENTER VR is unavailable here: this browser has no WebXR headset. Open this page in the Meta Quest Browser over HTTPS (see README), or use the desktop walkthrough."]})]})})}function gA({st:t,width:e=250,height:n=200}){const i=_t.useRef(null);return _t.useEffect(()=>{const r=i.current,s=Math.min(2,window.devicePixelRatio||1);r.width!==e*s&&(r.width=e*s,r.height=n*s);const o=r.getContext("2d");o.setTransform(s,0,0,s,0,0),o.clearRect(0,0,e,n),Yd(o,0,0,e,n,{px:t.px,py:t.py,yaw:t.yaw,roomId:t.roomId,bg:"rgba(20,22,26,0.86)",marker:5,pad:8})},[t.px,t.py,t.yaw,t.roomId,e,n]),W.jsx("canvas",{ref:i,style:{width:e,height:n,display:"block"}})}function vA({st:t,engine:e,onHome:n,onEnterVR:i,onModal:r}){const s=Ts(t.roomId),o=t.mode==="pano",[a,l]=_t.useState(0);_t.useEffect(()=>l(0),[t.panoRoom]);const c=o&&s?s.refs:[],u=c[Math.min(a,c.length-1)];return W.jsxs(W.Fragment,{children:[W.jsxs("div",{className:"hud top",children:[W.jsxs("div",{className:"brand",onClick:n,title:"Back to title screen",children:[W.jsx("b",{children:"BIET"})," CORPORATE INTERIOR"]}),W.jsxs("div",{className:"where",children:[W.jsx("span",{className:`dot ${s?s.zone.replace(/\W/g,""):""}`}),s?s.name:"Circulation",s&&W.jsxs("span",{className:"muted",children:[" · ",s.zone]})]}),W.jsxs("div",{className:"actions",children:[W.jsxs("div",{className:"seg",children:[W.jsx("button",{className:o?"":"on",onClick:()=>e.setMode("walk"),children:"3D Walkthrough"}),W.jsx("button",{className:o?"on":"",onClick:()=>e.setMode("pano"),children:"360° View"})]}),W.jsx("button",{onClick:()=>r("rooms"),children:"Rooms"}),W.jsx("button",{onClick:()=>r("plan"),children:"Floor plan"}),W.jsx("button",{onClick:()=>e.toggleFullscreen(),children:"Full screen"}),W.jsx("button",{onClick:()=>r("help"),children:"Help"}),W.jsx("button",{className:"vr",onClick:i,disabled:!t.xrSupported,title:t.xrSupported?"":"Open in the Meta Quest Browser to enable VR",children:"ENTER VR"})]})]}),W.jsx("div",{className:"hud map",onClick:()=>r("plan"),title:"Open floor plan",children:W.jsx(gA,{st:t})}),o?W.jsxs(W.Fragment,{children:[W.jsxs("div",{className:"hud badge",children:[W.jsx("b",{children:"RECONSTRUCTED 360° PANORAMA"}),W.jsx("span",{children:"Captured from the 3D model at one viewpoint – not a photograph. Drag to look around; click a label to jump to another room."})]}),W.jsx("div",{className:"hud panolist",children:mn.map(h=>W.jsx("button",{className:h.id===t.panoRoom?"on":"",onClick:()=>e.viewPano(h.id),children:h.name.replace("Workstations · Neighbourhood","Workstations N")},h.id))}),t.showRef&&u&&W.jsxs("div",{className:"hud refcard",children:[W.jsx("img",{src:Dc(u),alt:`Original Nuemorph render: ${Ll[u].label}`}),W.jsxs("div",{className:"cap",children:[W.jsx("b",{children:"ORIGINAL NUEMORPH RENDER"})," · PDF p.",Ll[u].page," · ",Ll[u].label,W.jsx("br",{}),W.jsx("span",{className:"muted",children:"Flat perspective image shown for comparison – not a 360° capture."})]}),W.jsxs("div",{className:"refnav",children:[c.length>1&&W.jsxs(W.Fragment,{children:[W.jsx("button",{onClick:()=>l((a+c.length-1)%c.length),children:"‹"}),W.jsxs("span",{children:[a+1,"/",c.length]}),W.jsx("button",{onClick:()=>l((a+1)%c.length),children:"›"})]}),W.jsx("button",{onClick:()=>e.setShowRef(!1),children:"Hide"})]})]}),D_]}):W.jsxs("div",{className:"hud bottom",children:[W.jsxs("span",{children:[W.jsx("kbd",{children:"W"}),W.jsx("kbd",{children:"A"}),W.jsx("kbd",{children:"S"}),W.jsx("kbd",{children:"D"})," move"]}),W.jsx("span",{children:"drag to look"}),W.jsx("span",{children:"click floor to walk"}),W.jsxs("span",{children:[W.jsx("kbd",{children:"Shift"})," run"]}),W.jsxs("label",{children:["Speed",W.jsx("input",{type:"range",min:"0.6",max:"4",step:"0.2",value:t.speed,onChange:h=>e.setSpeed(+h.target.value)}),t.speed.toFixed(1)," m/s"]})]})]})}function _A({st:t,onGo:e,onClose:n}){return W.jsx("div",{className:"modal",onClick:n,children:W.jsxs("div",{className:"sheet",onClick:i=>i.stopPropagation(),children:[W.jsxs("header",{children:[W.jsx("h3",{children:"Select a room"}),W.jsx("button",{className:"x",onClick:n,"aria-label":"Close",children:"×"})]}),W.jsx("div",{className:"rooms",children:mn.map(i=>W.jsxs("article",{className:i.id===(t==null?void 0:t.roomId)?"room here":"room",children:[i.refs[0]?W.jsx("img",{src:Dc(i.refs[0]),alt:"",loading:"lazy"}):W.jsx("div",{className:"noimg",children:i.name}),W.jsxs("div",{className:"body",children:[W.jsxs("div",{className:"zone",children:[i.zone,i.refs[0]?` · PDF p.${i.page}`:""]}),W.jsx("h4",{children:i.name}),W.jsx("p",{children:i.desc}),W.jsxs("div",{className:"row",children:[W.jsx("button",{className:"btn small primary",onClick:()=>e(i.id,"walk"),children:"Teleport here"}),W.jsx("button",{className:"btn small",onClick:()=>e(i.id,"pano"),children:"View 360°"})]})]})]},i.id))})]})})}const fl=900,hl=620;function xA({st:t,onGo:e,onClose:n}){const i=_t.useRef(null),[r,s]=_t.useState("interactive"),[o,a]=_t.useState(null),[l,c]=_t.useState((t==null?void 0:t.roomId)||"lobby");_t.useEffect(()=>{if(r!=="interactive")return;const d=i.current,p=Math.min(2,window.devicePixelRatio||1);d.width=fl*p,d.height=hl*p;const g=d.getContext("2d");g.setTransform(p,0,0,p,0,0),Yd(g,0,0,fl,hl,{px:t==null?void 0:t.px,py:t==null?void 0:t.py,yaw:t==null?void 0:t.yaw,roomId:l,hoverId:o,labels:!0,bg:"#17191d"})},[r,o,l,t==null?void 0:t.px,t==null?void 0:t.py,t==null?void 0:t.yaw]);const u=d=>{const p=i.current.getBoundingClientRect(),g=U_(0,0,fl,hl),y=(d.clientX-p.left)/p.width*fl,v=(d.clientY-p.top)/p.height*hl;return I_(g.ix(y),g.iy(v))},h=Ts(l);return W.jsx("div",{className:"modal",onClick:n,children:W.jsxs("div",{className:"sheet wide",onClick:d=>d.stopPropagation(),children:[W.jsxs("header",{children:[W.jsx("h3",{children:"Floor plan"}),W.jsxs("div",{className:"seg",children:[W.jsx("button",{className:r==="interactive"?"on":"",onClick:()=>s("interactive"),children:"Interactive plan"}),D_]}),W.jsx("button",{className:"x",onClick:n,"aria-label":"Close",children:"×"})]}),r==="interactive"?W.jsxs("div",{className:"planwrap",children:[W.jsx("canvas",{ref:i,className:"plan",onMouseMove:d=>{var p;return a(((p=u(d))==null?void 0:p.id)||null)},onMouseLeave:()=>a(null),onClick:d=>{const p=u(d);p&&c(p.id)},style:{cursor:o?"pointer":"default"}}),W.jsxs("aside",{children:[W.jsx("div",{className:"legend",children:Object.entries(P_).map(([d,p])=>W.jsxs("span",{children:[W.jsx("i",{style:{background:p}}),d]},d))}),h&&W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"zone",children:h.zone}),W.jsx("h4",{children:h.name}),W.jsx("p",{children:h.desc}),W.jsx("button",{className:"btn small primary",onClick:()=>e(h.id,"walk"),children:"Teleport here"}),W.jsx("button",{className:"btn small",onClick:()=>e(h.id,"pano"),children:"View 360°"})]}),W.jsx("div",{className:"roomlist",children:mn.map(d=>W.jsx("button",{className:d.id===l?"on":"",onClick:()=>c(d.id),onMouseEnter:()=>a(d.id),onMouseLeave:()=>a(null),children:d.name},d.id))}),W.jsxs("p",{className:"muted small",children:["Zoning follows PDF p.20. ",L_," workstations in four neighbourhoods (36 / 27 / 24 / 40). White arrow = you."]})]})]}):W.jsxs("div",{className:"pdfplan",children:[W.jsx("img",{src:Dc("floorplan"),alt:"Original Nuemorph floor plan, PDF page 19"}),W.jsx("p",{className:"muted small",children:"Original Nuemorph drawing “Davanagere IT Interior”, reproduced from page 19 of the PDF. The 3D model is traced from this sheet."})]})]})})}function yA({onClose:t}){return W.jsx("div",{className:"modal",onClick:t,children:W.jsxs("div",{className:"sheet narrow",onClick:e=>e.stopPropagation(),children:[W.jsxs("header",{children:[W.jsx("h3",{children:"Controls"}),W.jsx("button",{className:"x",onClick:t,"aria-label":"Close",children:"×"})]}),W.jsxs("div",{className:"help",children:[W.jsxs("section",{children:[W.jsx("h4",{children:"Desktop"}),W.jsxs("ul",{children:[W.jsxs("li",{children:[W.jsx("kbd",{children:"W"}),W.jsx("kbd",{children:"A"}),W.jsx("kbd",{children:"S"}),W.jsx("kbd",{children:"D"})," or arrow keys – walk / turn"]}),W.jsx("li",{children:"Drag with the mouse – look around"}),W.jsx("li",{children:"Click the floor – walk there"}),W.jsxs("li",{children:[W.jsx("kbd",{children:"Shift"})," – run · ",W.jsx("kbd",{children:"Q"}),W.jsx("kbd",{children:"E"})," – turn"]}),W.jsxs("li",{children:[W.jsx("kbd",{children:"R"})," rooms · ",W.jsx("kbd",{children:"M"})," floor plan · ",W.jsx("kbd",{children:"F"})," full screen · ",W.jsx("kbd",{children:"H"})," help"]})]})]}),W.jsxs("section",{children:[W.jsx("h4",{children:"Meta Quest 2"}),W.jsxs("ul",{children:[W.jsx("li",{children:"Left thumbstick – smooth walking (follows your gaze)"}),W.jsx("li",{children:"Right thumbstick left / right – 30° snap turn"}),W.jsx("li",{children:"Right thumbstick forward – aim teleport, release to jump"}),W.jsx("li",{children:"Trigger – select; or hold it while pointing at the floor to teleport"}),W.jsx("li",{children:"A / B / X / Y or grip – open the in-headset menu (rooms, 360° view, speed, comfort)"})]})]}),W.jsxs("section",{children:[W.jsx("h4",{children:"Two experiences"}),W.jsxs("ul",{children:[W.jsxs("li",{children:[W.jsx("b",{children:"3D Walkthrough"})," – move freely; walls, glass and furniture block you."]}),W.jsxs("li",{children:[W.jsx("b",{children:"360° View"})," – stand at one point per room inside a panorama captured from the 3D model. The original PDF render is shown next to it as a flat reference image."]})]})]})]})]})})}function SA(){const t=_t.useRef(null),e=_t.useRef(null),[n,i]=_t.useState(null),[r,s]=_t.useState("landing"),[o,a]=_t.useState(null),[l,c]=_t.useState(null);_t.useEffect(()=>{try{e.current=new pA(t.current,i),window.__biet=e.current}catch(y){console.error(y),c(String(y.message||y))}return()=>{var y;return(y=e.current)==null?void 0:y.dispose()}},[]);const u=e.current,h=_t.useCallback(()=>{s("app"),e.current.setIdle(!1)},[]),d=_t.useCallback(async()=>{try{await e.current.enterVR(),s("app"),a(null)}catch(y){c(`Could not start VR: ${y.message||y}`)}},[]),p=_t.useCallback((y,v)=>{s("app"),a(null),v==="pano"?e.current.viewPano(y):e.current.gotoRoom(y)},[]),g=_t.useCallback(()=>{a(null),s("landing"),e.current.state.mode==="pano"&&e.current.gotoRoom("lobby"),e.current.setIdle(!0)},[]);return _t.useEffect(()=>{const y=v=>{var m,_;if(v.key==="Escape"&&a(null),r!=="app"||((m=v.target)==null?void 0:m.tagName)==="INPUT")return;const f=v.key.toLowerCase();f==="r"&&a(x=>x==="rooms"?null:"rooms"),f==="m"&&a(x=>x==="plan"?null:"plan"),f==="f"&&((_=e.current)==null||_.toggleFullscreen()),f==="h"&&a(x=>x==="help"?null:"help")};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[r]),W.jsxs("div",{className:"app",children:[W.jsx("div",{className:"viewport",ref:t}),!(n!=null&&n.ready)&&!l&&W.jsx("div",{className:"loading",children:"Building the BIET office…"}),(n==null?void 0:n.ready)&&r==="landing"&&W.jsx(mA,{st:n,onEnterVR:d,onWalk:()=>{h(),u.gotoRoom("lobby")},onPano:()=>{s("app"),u.viewPano("lobby")},onPlan:()=>a("plan"),onRooms:()=>a("rooms")}),(n==null?void 0:n.ready)&&r==="app"&&W.jsx(vA,{st:n,engine:u,onHome:g,onEnterVR:d,onModal:a}),o==="rooms"&&W.jsx(_A,{st:n,onGo:p,onClose:()=>a(null)}),o==="plan"&&W.jsx(xA,{st:n,onGo:p,onClose:()=>a(null)}),o==="help"&&W.jsx(yA,{onClose:()=>a(null)}),l&&W.jsxs("div",{className:"toast",onClick:()=>c(null),children:[l," ",W.jsx("span",{className:"muted",children:"(click to dismiss)"})]})]})}zv(document.getElementById("root")).render(W.jsx(SA,{}));
