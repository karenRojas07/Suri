(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function wx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var p_={exports:{}},bc={},m_={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=Symbol.for("react.element"),Ax=Symbol.for("react.portal"),bx=Symbol.for("react.fragment"),Rx=Symbol.for("react.strict_mode"),Cx=Symbol.for("react.profiler"),Px=Symbol.for("react.provider"),Ix=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Nx=Symbol.for("react.suspense"),Dx=Symbol.for("react.memo"),Ux=Symbol.for("react.lazy"),Dp=Symbol.iterator;function Fx(n){return n===null||typeof n!="object"?null:(n=Dp&&n[Dp]||n["@@iterator"],typeof n=="function"?n:null)}var g_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,v_={};function da(n,e,t){this.props=n,this.context=e,this.refs=v_,this.updater=t||g_}da.prototype.isReactComponent={};da.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};da.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function x_(){}x_.prototype=da.prototype;function sh(n,e,t){this.props=n,this.context=e,this.refs=v_,this.updater=t||g_}var ah=sh.prototype=new x_;ah.constructor=sh;__(ah,da.prototype);ah.isPureReactComponent=!0;var Up=Array.isArray,y_=Object.prototype.hasOwnProperty,oh={current:null},S_={key:!0,ref:!0,__self:!0,__source:!0};function M_(n,e,t){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)y_.call(e,i)&&!S_.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in o=n.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:bo,type:n,key:s,ref:a,props:r,_owner:oh.current}}function Ox(n,e){return{$$typeof:bo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function lh(n){return typeof n=="object"&&n!==null&&n.$$typeof===bo}function kx(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fp=/\/+/g;function Qc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?kx(""+n.key):e.toString(36)}function Cl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case bo:case Ax:a=!0}}if(a)return a=n,r=r(a),n=i===""?"."+Qc(a,0):i,Up(r)?(t="",n!=null&&(t=n.replace(Fp,"$&/")+"/"),Cl(r,e,t,"",function(c){return c})):r!=null&&(lh(r)&&(r=Ox(r,t+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Fp,"$&/")+"/")+n)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Up(n))for(var o=0;o<n.length;o++){s=n[o];var l=i+Qc(s,o);a+=Cl(s,e,t,l,r)}else if(l=Fx(n),typeof l=="function")for(n=l.call(n),o=0;!(s=n.next()).done;)s=s.value,l=i+Qc(s,o++),a+=Cl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Uo(n,e,t){if(n==null)return n;var i=[],r=0;return Cl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Bx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},Pl={transition:null},zx={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:oh};function E_(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Uo,forEach:function(n,e,t){Uo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Uo(n,function(){e++}),e},toArray:function(n){return Uo(n,function(e){return e})||[]},only:function(n){if(!lh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Qe.Component=da;Qe.Fragment=bx;Qe.Profiler=Cx;Qe.PureComponent=sh;Qe.StrictMode=Rx;Qe.Suspense=Nx;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zx;Qe.act=E_;Qe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=__({},n.props),r=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=oh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var o=n.type.defaultProps;for(l in e)y_.call(e,l)&&!S_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:bo,type:n.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(n){return n={$$typeof:Ix,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Px,_context:n},n.Consumer=n};Qe.createElement=M_;Qe.createFactory=function(n){var e=M_.bind(null,n);return e.type=n,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(n){return{$$typeof:Lx,render:n}};Qe.isValidElement=lh;Qe.lazy=function(n){return{$$typeof:Ux,_payload:{_status:-1,_result:n},_init:Bx}};Qe.memo=function(n,e){return{$$typeof:Dx,type:n,compare:e===void 0?null:e}};Qe.startTransition=function(n){var e=Pl.transition;Pl.transition={};try{n()}finally{Pl.transition=e}};Qe.unstable_act=E_;Qe.useCallback=function(n,e){return hn.current.useCallback(n,e)};Qe.useContext=function(n){return hn.current.useContext(n)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};Qe.useEffect=function(n,e){return hn.current.useEffect(n,e)};Qe.useId=function(){return hn.current.useId()};Qe.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};Qe.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};Qe.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};Qe.useMemo=function(n,e){return hn.current.useMemo(n,e)};Qe.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};Qe.useRef=function(n){return hn.current.useRef(n)};Qe.useState=function(n){return hn.current.useState(n)};Qe.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};Qe.useTransition=function(){return hn.current.useTransition()};Qe.version="18.3.1";m_.exports=Qe;var et=m_.exports;const Vx=wx(et);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx=et,Gx=Symbol.for("react.element"),Wx=Symbol.for("react.fragment"),jx=Object.prototype.hasOwnProperty,Xx=Hx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qx={key:!0,ref:!0,__self:!0,__source:!0};function T_(n,e,t){var i,r={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)jx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gx,type:n,key:s,ref:a,props:r,_owner:Xx.current}}bc.Fragment=Wx;bc.jsx=T_;bc.jsxs=T_;p_.exports=bc;var I=p_.exports,hd={},w_={exports:{}},Ln={},A_={exports:{}},b_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(z,K){var Q=z.length;z.push(K);e:for(;0<Q;){var ae=Q-1>>>1,me=z[ae];if(0<r(me,K))z[ae]=K,z[Q]=me,Q=ae;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var K=z[0],Q=z.pop();if(Q!==K){z[0]=Q;e:for(var ae=0,me=z.length,Ge=me>>>1;ae<Ge;){var Ke=2*(ae+1)-1,Ue=z[Ke],Z=Ke+1,de=z[Z];if(0>r(Ue,Q))Z<me&&0>r(de,Ue)?(z[ae]=de,z[Z]=Q,ae=Z):(z[ae]=Ue,z[Ke]=Q,ae=Ke);else if(Z<me&&0>r(de,Q))z[ae]=de,z[Z]=Q,ae=Z;else break e}}return K}function r(z,K){var Q=z.sortIndex-K.sortIndex;return Q!==0?Q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();n.unstable_now=function(){return a.now()-o}}var l=[],c=[],u=1,d=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(z){for(var K=t(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=z)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(c)}}function E(z){if(y=!1,v(z),!_)if(t(l)!==null)_=!0,W(b);else{var K=t(c);K!==null&&V(E,K.startTime-z)}}function b(z,K){_=!1,y&&(y=!1,h(x),x=-1),p=!0;var Q=f;try{for(v(K),d=t(l);d!==null&&(!(d.expirationTime>K)||z&&!L());){var ae=d.callback;if(typeof ae=="function"){d.callback=null,f=d.priorityLevel;var me=ae(d.expirationTime<=K);K=n.unstable_now(),typeof me=="function"?d.callback=me:d===t(l)&&i(l),v(K)}else i(l);d=t(l)}if(d!==null)var Ge=!0;else{var Ke=t(c);Ke!==null&&V(E,Ke.startTime-K),Ge=!1}return Ge}finally{d=null,f=Q,p=!1}}var w=!1,P=null,x=-1,R=5,N=-1;function L(){return!(n.unstable_now()-N<R)}function O(){if(P!==null){var z=n.unstable_now();N=z;var K=!0;try{K=P(!0,z)}finally{K?X():(w=!1,P=null)}}else w=!1}var X;if(typeof g=="function")X=function(){g(O)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,U=$.port2;$.port1.onmessage=O,X=function(){U.postMessage(null)}}else X=function(){m(O,0)};function W(z){P=z,w||(w=!0,X())}function V(z,K){x=m(function(){z(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,W(b))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(z){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Q=f;f=K;try{return z()}finally{f=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=f;f=z;try{return K()}finally{f=Q}},n.unstable_scheduleCallback=function(z,K,Q){var ae=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,z){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Q+me,z={id:u++,callback:K,priorityLevel:z,startTime:Q,expirationTime:me,sortIndex:-1},Q>ae?(z.sortIndex=Q,e(c,z),t(l)===null&&z===t(c)&&(y?(h(x),x=-1):y=!0,V(E,Q-ae))):(z.sortIndex=me,e(l,z),_||p||(_=!0,W(b))),z},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(z){var K=f;return function(){var Q=f;f=K;try{return z.apply(this,arguments)}finally{f=Q}}}})(b_);A_.exports=b_;var Kx=A_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=et,Pn=Kx;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R_=new Set,io={};function ss(n,e){Ys(n,e),Ys(n+"Capture",e)}function Ys(n,e){for(io[n]=e,n=0;n<e.length;n++)R_.add(e[n])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pd=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},kp={};function Zx(n){return pd.call(kp,n)?!0:pd.call(Op,n)?!1:$x.test(n)?kp[n]=!0:(Op[n]=!0,!1)}function Jx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Qx(n,e,t,i){if(e===null||typeof e>"u"||Jx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(n,e,t,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Zt[n]=new pn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Zt[e]=new pn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Zt[n]=new pn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Zt[n]=new pn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Zt[n]=new pn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Zt[n]=new pn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Zt[n]=new pn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Zt[n]=new pn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Zt[n]=new pn(n,5,!1,n.toLowerCase(),null,!1,!1)});var ch=/[\-:]([a-z])/g;function uh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(ch,uh);Zt[e]=new pn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(ch,uh);Zt[e]=new pn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(ch,uh);Zt[e]=new pn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Zt[n]=new pn(n,1,!1,n.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Zt[n]=new pn(n,1,!1,n.toLowerCase(),null,!0,!0)});function dh(n,e,t,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qx(e,t,r,i)&&(t=null),i||r===null?Zx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ji=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fo=Symbol.for("react.element"),As=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),md=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),P_=Symbol.for("react.context"),hh=Symbol.for("react.forward_ref"),gd=Symbol.for("react.suspense"),_d=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),I_=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function xa(n){return n===null||typeof n!="object"?null:(n=Bp&&n[Bp]||n["@@iterator"],typeof n=="function"?n:null)}var Rt=Object.assign,eu;function ka(n){if(eu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);eu=e&&e[1]||""}return`
`+eu+n}var tu=!1;function nu(n,e){if(!n||tu)return"";tu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=a&&0<=o);break}}}finally{tu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ka(n):""}function ey(n){switch(n.tag){case 5:return ka(n.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return n=nu(n.type,!1),n;case 11:return n=nu(n.type.render,!1),n;case 1:return n=nu(n.type,!0),n;default:return""}}function vd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case bs:return"Fragment";case As:return"Portal";case md:return"Profiler";case fh:return"StrictMode";case gd:return"Suspense";case _d:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case P_:return(n.displayName||"Context")+".Consumer";case C_:return(n._context.displayName||"Context")+".Provider";case hh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ph:return e=n.displayName||null,e!==null?e:vd(n.type)||"Memo";case ur:e=n._payload,n=n._init;try{return vd(n(e))}catch{}}return null}function ty(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vd(e);case 8:return e===fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function L_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ny(n){var e=L_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Oo(n){n._valueTracker||(n._valueTracker=ny(n))}function N_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=L_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Kl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xd(n,e){var t=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function zp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ar(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function D_(n,e){e=e.checked,e!=null&&dh(n,"checked",e,!1)}function yd(n,e){D_(n,e);var t=Ar(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Sd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Sd(n,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Sd(n,e,t){(e!=="number"||Kl(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ba=Array.isArray;function zs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ar(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Md(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Hp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Ba(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ar(t)}}function U_(n,e){var t=Ar(e.value),i=Ar(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Gp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function F_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ed(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?F_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ko,O_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ro(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iy=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(n){iy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ja[e]=ja[n]})});function k_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ja.hasOwnProperty(n)&&ja[n]?(""+e).trim():e+"px"}function B_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=k_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ry=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(n,e){if(e){if(ry[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function wd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function mh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bd=null,Vs=null,Hs=null;function Wp(n){if(n=Po(n)){if(typeof bd!="function")throw Error(se(280));var e=n.stateNode;e&&(e=Lc(e),bd(n.stateNode,n.type,e))}}function z_(n){Vs?Hs?Hs.push(n):Hs=[n]:Vs=n}function V_(){if(Vs){var n=Vs,e=Hs;if(Hs=Vs=null,Wp(n),e)for(n=0;n<e.length;n++)Wp(e[n])}}function H_(n,e){return n(e)}function G_(){}var iu=!1;function W_(n,e,t){if(iu)return n(e,t);iu=!0;try{return H_(n,e,t)}finally{iu=!1,(Vs!==null||Hs!==null)&&(G_(),V_())}}function so(n,e){var t=n.stateNode;if(t===null)return null;var i=Lc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Rd=!1;if(ji)try{var ya={};Object.defineProperty(ya,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",ya,ya),window.removeEventListener("test",ya,ya)}catch{Rd=!1}function sy(n,e,t,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Xa=!1,Yl=null,$l=!1,Cd=null,ay={onError:function(n){Xa=!0,Yl=n}};function oy(n,e,t,i,r,s,a,o,l){Xa=!1,Yl=null,sy.apply(ay,arguments)}function ly(n,e,t,i,r,s,a,o,l){if(oy.apply(this,arguments),Xa){if(Xa){var c=Yl;Xa=!1,Yl=null}else throw Error(se(198));$l||($l=!0,Cd=c)}}function as(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function j_(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function jp(n){if(as(n)!==n)throw Error(se(188))}function cy(n){var e=n.alternate;if(!e){if(e=as(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return jp(r),n;if(s===i)return jp(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===t){a=!0,t=r,i=s;break}if(o===i){a=!0,i=r,t=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===t){a=!0,t=s,i=r;break}if(o===i){a=!0,i=s,t=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function X_(n){return n=cy(n),n!==null?q_(n):null}function q_(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=q_(n);if(e!==null)return e;n=n.sibling}return null}var K_=Pn.unstable_scheduleCallback,Xp=Pn.unstable_cancelCallback,uy=Pn.unstable_shouldYield,dy=Pn.unstable_requestPaint,Dt=Pn.unstable_now,fy=Pn.unstable_getCurrentPriorityLevel,gh=Pn.unstable_ImmediatePriority,Y_=Pn.unstable_UserBlockingPriority,Zl=Pn.unstable_NormalPriority,hy=Pn.unstable_LowPriority,$_=Pn.unstable_IdlePriority,Rc=null,yi=null;function py(n){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Rc,n,void 0,(n.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:_y,my=Math.log,gy=Math.LN2;function _y(n){return n>>>=0,n===0?32:31-(my(n)/gy|0)|0}var Bo=64,zo=4194304;function za(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jl(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var o=a&~r;o!==0?i=za(o):(s&=a,s!==0&&(i=za(s)))}else a=t&~r,a!==0?i=za(a):s!==0&&(i=za(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ni(e),r=1<<t,i|=n[t],e&=~r;return i}function vy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-ni(s),o=1<<a,l=r[a];l===-1?(!(o&t)||o&i)&&(r[a]=vy(o,e)):l<=e&&(n.expiredLanes|=o),s&=~o}}function Pd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Z_(){var n=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),n}function ru(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ro(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ni(e),n[e]=t}function yy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ni(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function _h(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ni(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var dt=0;function J_(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Q_,vh,e0,t0,n0,Id=!1,Vo=[],vr=null,xr=null,yr=null,ao=new Map,oo=new Map,fr=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qp(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function Sa(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&vh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function My(n,e,t,i,r){switch(e){case"focusin":return vr=Sa(vr,n,e,t,i,r),!0;case"dragenter":return xr=Sa(xr,n,e,t,i,r),!0;case"mouseover":return yr=Sa(yr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ao.set(s,Sa(ao.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,oo.set(s,Sa(oo.get(s)||null,n,e,t,i,r)),!0}return!1}function i0(n){var e=Wr(n.target);if(e!==null){var t=as(e);if(t!==null){if(e=t.tag,e===13){if(e=j_(t),e!==null){n.blockedOn=e,n0(n.priority,function(){e0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Il(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ld(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ad=i,t.target.dispatchEvent(i),Ad=null}else return e=Po(t),e!==null&&vh(e),n.blockedOn=t,!1;e.shift()}return!0}function Kp(n,e,t){Il(n)&&t.delete(e)}function Ey(){Id=!1,vr!==null&&Il(vr)&&(vr=null),xr!==null&&Il(xr)&&(xr=null),yr!==null&&Il(yr)&&(yr=null),ao.forEach(Kp),oo.forEach(Kp)}function Ma(n,e){n.blockedOn===e&&(n.blockedOn=null,Id||(Id=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,Ey)))}function lo(n){function e(r){return Ma(r,n)}if(0<Vo.length){Ma(Vo[0],n);for(var t=1;t<Vo.length;t++){var i=Vo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Ma(vr,n),xr!==null&&Ma(xr,n),yr!==null&&Ma(yr,n),ao.forEach(e),oo.forEach(e),t=0;t<fr.length;t++)i=fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fr.length&&(t=fr[0],t.blockedOn===null);)i0(t),t.blockedOn===null&&fr.shift()}var Gs=Ji.ReactCurrentBatchConfig,Ql=!0;function Ty(n,e,t,i){var r=dt,s=Gs.transition;Gs.transition=null;try{dt=1,xh(n,e,t,i)}finally{dt=r,Gs.transition=s}}function wy(n,e,t,i){var r=dt,s=Gs.transition;Gs.transition=null;try{dt=4,xh(n,e,t,i)}finally{dt=r,Gs.transition=s}}function xh(n,e,t,i){if(Ql){var r=Ld(n,e,t,i);if(r===null)pu(n,e,i,ec,t),qp(n,i);else if(My(r,n,e,t,i))i.stopPropagation();else if(qp(n,i),e&4&&-1<Sy.indexOf(n)){for(;r!==null;){var s=Po(r);if(s!==null&&Q_(s),s=Ld(n,e,t,i),s===null&&pu(n,e,i,ec,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else pu(n,e,i,null,t)}}var ec=null;function Ld(n,e,t,i){if(ec=null,n=mh(i),n=Wr(n),n!==null)if(e=as(n),e===null)n=null;else if(t=e.tag,t===13){if(n=j_(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ec=n,null}function r0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case gh:return 1;case Y_:return 4;case Zl:case hy:return 16;case $_:return 536870912;default:return 16}default:return 16}}var mr=null,yh=null,Ll=null;function s0(){if(Ll)return Ll;var n,e=yh,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===r[s-i];i++);return Ll=r.slice(n,1<i?1-i:void 0)}function Nl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ho(){return!0}function Yp(){return!1}function Nn(n){function e(t,i,r,s,a){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ho:Yp,this.isPropagationStopped=Yp,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),e}var fa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sh=Nn(fa),Co=Rt({},fa,{view:0,detail:0}),Ay=Nn(Co),su,au,Ea,Cc=Rt({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(su=n.screenX-Ea.screenX,au=n.screenY-Ea.screenY):au=su=0,Ea=n),su)},movementY:function(n){return"movementY"in n?n.movementY:au}}),$p=Nn(Cc),by=Rt({},Cc,{dataTransfer:0}),Ry=Nn(by),Cy=Rt({},Co,{relatedTarget:0}),ou=Nn(Cy),Py=Rt({},fa,{animationName:0,elapsedTime:0,pseudoElement:0}),Iy=Nn(Py),Ly=Rt({},fa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ny=Nn(Ly),Dy=Rt({},fa,{data:0}),Zp=Nn(Dy),Uy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Oy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ky(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Oy[n])?!!e[n]:!1}function Mh(){return ky}var By=Rt({},Co,{key:function(n){if(n.key){var e=Uy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fy[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mh,charCode:function(n){return n.type==="keypress"?Nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zy=Nn(By),Vy=Rt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Nn(Vy),Hy=Rt({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mh}),Gy=Nn(Hy),Wy=Rt({},fa,{propertyName:0,elapsedTime:0,pseudoElement:0}),jy=Nn(Wy),Xy=Rt({},Cc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=Nn(Xy),Ky=[9,13,27,32],Eh=ji&&"CompositionEvent"in window,qa=null;ji&&"documentMode"in document&&(qa=document.documentMode);var Yy=ji&&"TextEvent"in window&&!qa,a0=ji&&(!Eh||qa&&8<qa&&11>=qa),Qp=" ",em=!1;function o0(n,e){switch(n){case"keyup":return Ky.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function $y(n,e){switch(n){case"compositionend":return l0(e);case"keypress":return e.which!==32?null:(em=!0,Qp);case"textInput":return n=e.data,n===Qp&&em?null:n;default:return null}}function Zy(n,e){if(Rs)return n==="compositionend"||!Eh&&o0(n,e)?(n=s0(),Ll=yh=mr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return a0&&e.locale!=="ko"?null:e.data;default:return null}}var Jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Jy[n.type]:e==="textarea"}function c0(n,e,t,i){z_(i),e=tc(e,"onChange"),0<e.length&&(t=new Sh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ka=null,co=null;function Qy(n){y0(n,0)}function Pc(n){var e=Is(n);if(N_(e))return n}function eS(n,e){if(n==="change")return e}var u0=!1;if(ji){var lu;if(ji){var cu="oninput"in document;if(!cu){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),cu=typeof nm.oninput=="function"}lu=cu}else lu=!1;u0=lu&&(!document.documentMode||9<document.documentMode)}function im(){Ka&&(Ka.detachEvent("onpropertychange",d0),co=Ka=null)}function d0(n){if(n.propertyName==="value"&&Pc(co)){var e=[];c0(e,co,n,mh(n)),W_(Qy,e)}}function tS(n,e,t){n==="focusin"?(im(),Ka=e,co=t,Ka.attachEvent("onpropertychange",d0)):n==="focusout"&&im()}function nS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pc(co)}function iS(n,e){if(n==="click")return Pc(e)}function rS(n,e){if(n==="input"||n==="change")return Pc(e)}function sS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var si=typeof Object.is=="function"?Object.is:sS;function uo(n,e){if(si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!pd.call(e,r)||!si(n[r],e[r]))return!1}return!0}function rm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sm(n,e){var t=rm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=rm(t)}}function f0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?f0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function h0(){for(var n=window,e=Kl();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Kl(n.document)}return e}function Th(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function aS(n){var e=h0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&f0(t.ownerDocument.documentElement,t)){if(i!==null&&Th(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=sm(t,s);var a=sm(t,i);r&&a&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var oS=ji&&"documentMode"in document&&11>=document.documentMode,Cs=null,Nd=null,Ya=null,Dd=!1;function am(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Dd||Cs==null||Cs!==Kl(i)||(i=Cs,"selectionStart"in i&&Th(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ya&&uo(Ya,i)||(Ya=i,i=tc(Nd,"onSelect"),0<i.length&&(e=new Sh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Cs)))}function Go(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ps={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},uu={},p0={};ji&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ic(n){if(uu[n])return uu[n];if(!Ps[n])return n;var e=Ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in p0)return uu[n]=e[t];return n}var m0=Ic("animationend"),g0=Ic("animationiteration"),_0=Ic("animationstart"),v0=Ic("transitionend"),x0=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,e){x0.set(n,e),ss(e,[n])}for(var du=0;du<om.length;du++){var fu=om[du],lS=fu.toLowerCase(),cS=fu[0].toUpperCase()+fu.slice(1);Cr(lS,"on"+cS)}Cr(m0,"onAnimationEnd");Cr(g0,"onAnimationIteration");Cr(_0,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(v0,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Va));function lm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,ly(i,e,void 0,n),n.currentTarget=null}function y0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;lm(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;lm(r,o,c),s=l}}}if($l)throw n=Cd,$l=!1,Cd=null,n}function Mt(n,e){var t=e[Bd];t===void 0&&(t=e[Bd]=new Set);var i=n+"__bubble";t.has(i)||(S0(e,n,2,!1),t.add(i))}function hu(n,e,t){var i=0;e&&(i|=4),S0(t,n,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function fo(n){if(!n[Wo]){n[Wo]=!0,R_.forEach(function(t){t!=="selectionchange"&&(uS.has(t)||hu(t,!1,n),hu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,hu("selectionchange",!1,e))}}function S0(n,e,t,i){switch(r0(e)){case 1:var r=Ty;break;case 4:r=wy;break;default:r=xh}t=r.bind(null,e,t,n),r=void 0,!Rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function pu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Wr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}W_(function(){var c=s,u=mh(t),d=[];e:{var f=x0.get(n);if(f!==void 0){var p=Sh,_=n;switch(n){case"keypress":if(Nl(t)===0)break e;case"keydown":case"keyup":p=zy;break;case"focusin":_="focus",p=ou;break;case"focusout":_="blur",p=ou;break;case"beforeblur":case"afterblur":p=ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ry;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Gy;break;case m0:case g0:case _0:p=Iy;break;case v0:p=jy;break;case"scroll":p=Ay;break;case"wheel":p=qy;break;case"copy":case"cut":case"paste":p=Ny;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jp}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,h!==null&&(E=so(g,h),E!=null&&y.push(ho(g,E,v)))),m)break;g=g.return}0<y.length&&(f=new p(f,_,null,t,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Ad&&(_=t.relatedTarget||t.fromElement)&&(Wr(_)||_[Xi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?Wr(_):null,_!==null&&(m=as(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=$p,E="onMouseLeave",h="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(y=Jp,E="onPointerLeave",h="onPointerEnter",g="pointer"),m=p==null?f:Is(p),v=_==null?f:Is(_),f=new y(E,g+"leave",p,t,u),f.target=m,f.relatedTarget=v,E=null,Wr(u)===c&&(y=new y(h,g+"enter",_,t,u),y.target=v,y.relatedTarget=m,E=y),m=E,p&&_)t:{for(y=p,h=_,g=0,v=y;v;v=cs(v))g++;for(v=0,E=h;E;E=cs(E))v++;for(;0<g-v;)y=cs(y),g--;for(;0<v-g;)h=cs(h),v--;for(;g--;){if(y===h||h!==null&&y===h.alternate)break t;y=cs(y),h=cs(h)}y=null}else y=null;p!==null&&cm(d,f,p,y,!1),_!==null&&m!==null&&cm(d,m,_,y,!0)}}e:{if(f=c?Is(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=eS;else if(tm(f))if(u0)b=rS;else{b=nS;var w=tS}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=iS);if(b&&(b=b(n,c))){c0(d,b,t,u);break e}w&&w(n,f,c),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Sd(f,"number",f.value)}switch(w=c?Is(c):window,n){case"focusin":(tm(w)||w.contentEditable==="true")&&(Cs=w,Nd=c,Ya=null);break;case"focusout":Ya=Nd=Cs=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,am(d,t,u);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":am(d,t,u)}var P;if(Eh)e:{switch(n){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rs?o0(n,t)&&(x="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(a0&&t.locale!=="ko"&&(Rs||x!=="onCompositionStart"?x==="onCompositionEnd"&&Rs&&(P=s0()):(mr=u,yh="value"in mr?mr.value:mr.textContent,Rs=!0)),w=tc(c,x),0<w.length&&(x=new Zp(x,n,null,t,u),d.push({event:x,listeners:w}),P?x.data=P:(P=l0(t),P!==null&&(x.data=P)))),(P=Yy?$y(n,t):Zy(n,t))&&(c=tc(c,"onBeforeInput"),0<c.length&&(u=new Zp("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=P))}y0(d,e)})}function ho(n,e,t){return{instance:n,listener:e,currentTarget:t}}function tc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(n,t),s!=null&&i.unshift(ho(n,s,r)),s=so(n,e),s!=null&&i.push(ho(n,s,r))),n=n.return}return i}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,e,t,i,r){for(var s=e._reactName,a=[];t!==null&&t!==i;){var o=t,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=so(t,s),l!=null&&a.unshift(ho(t,l,o))):r||(l=so(t,s),l!=null&&a.push(ho(t,l,o)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var dS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function um(n){return(typeof n=="string"?n:""+n).replace(dS,`
`).replace(fS,"")}function jo(n,e,t){if(e=um(e),um(n)!==e&&t)throw Error(se(425))}function nc(){}var Ud=null,Fd=null;function Od(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(mS)}:kd;function mS(n){setTimeout(function(){throw n})}function mu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),lo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);lo(e)}function Sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function fm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ha=Math.random().toString(36).slice(2),gi="__reactFiber$"+ha,po="__reactProps$"+ha,Xi="__reactContainer$"+ha,Bd="__reactEvents$"+ha,gS="__reactListeners$"+ha,_S="__reactHandles$"+ha;function Wr(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xi]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=fm(n);n!==null;){if(t=n[gi])return t;n=fm(n)}return e}n=t,t=n.parentNode}return null}function Po(n){return n=n[gi]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function Lc(n){return n[po]||null}var zd=[],Ls=-1;function Pr(n){return{current:n}}function Et(n){0>Ls||(n.current=zd[Ls],zd[Ls]=null,Ls--)}function xt(n,e){Ls++,zd[Ls]=n.current,n.current=e}var br={},an=Pr(br),_n=Pr(!1),Jr=br;function $s(n,e){var t=n.type.contextTypes;if(!t)return br;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function vn(n){return n=n.childContextTypes,n!=null}function ic(){Et(_n),Et(an)}function hm(n,e,t){if(an.current!==br)throw Error(se(168));xt(an,e),xt(_n,t)}function M0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,ty(n)||"Unknown",r));return Rt({},t,i)}function rc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||br,Jr=an.current,xt(an,n),xt(_n,_n.current),!0}function pm(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=M0(n,e,Jr),i.__reactInternalMemoizedMergedChildContext=n,Et(_n),Et(an),xt(an,n)):Et(_n),xt(_n,t)}var Oi=null,Nc=!1,gu=!1;function E0(n){Oi===null?Oi=[n]:Oi.push(n)}function vS(n){Nc=!0,E0(n)}function Ir(){if(!gu&&Oi!==null){gu=!0;var n=0,e=dt;try{var t=Oi;for(dt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Oi=null,Nc=!1}catch(r){throw Oi!==null&&(Oi=Oi.slice(n+1)),K_(gh,Ir),r}finally{dt=e,gu=!1}}return null}var Ns=[],Ds=0,sc=null,ac=0,kn=[],Bn=0,Qr=null,ki=1,Bi="";function Br(n,e){Ns[Ds++]=ac,Ns[Ds++]=sc,sc=n,ac=e}function T0(n,e,t){kn[Bn++]=ki,kn[Bn++]=Bi,kn[Bn++]=Qr,Qr=n;var i=ki;n=Bi;var r=32-ni(i)-1;i&=~(1<<r),t+=1;var s=32-ni(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ki=1<<32-ni(e)+r|t<<r|i,Bi=s+n}else ki=1<<s|t<<r|i,Bi=n}function wh(n){n.return!==null&&(Br(n,1),T0(n,1,0))}function Ah(n){for(;n===sc;)sc=Ns[--Ds],Ns[Ds]=null,ac=Ns[--Ds],Ns[Ds]=null;for(;n===Qr;)Qr=kn[--Bn],kn[Bn]=null,Bi=kn[--Bn],kn[Bn]=null,ki=kn[--Bn],kn[Bn]=null}var Cn=null,Rn=null,Tt=!1,Qn=null;function w0(n,e){var t=zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function mm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Cn=n,Rn=Sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Cn=n,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Qr!==null?{id:ki,overflow:Bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Cn=n,Rn=null,!0):!1;default:return!1}}function Vd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hd(n){if(Tt){var e=Rn;if(e){var t=e;if(!mm(n,e)){if(Vd(n))throw Error(se(418));e=Sr(t.nextSibling);var i=Cn;e&&mm(n,e)?w0(i,t):(n.flags=n.flags&-4097|2,Tt=!1,Cn=n)}}else{if(Vd(n))throw Error(se(418));n.flags=n.flags&-4097|2,Tt=!1,Cn=n}}}function gm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Cn=n}function Xo(n){if(n!==Cn)return!1;if(!Tt)return gm(n),Tt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Od(n.type,n.memoizedProps)),e&&(e=Rn)){if(Vd(n))throw A0(),Error(se(418));for(;e;)w0(n,e),e=Sr(e.nextSibling)}if(gm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Rn=Sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Rn=null}}else Rn=Cn?Sr(n.stateNode.nextSibling):null;return!0}function A0(){for(var n=Rn;n;)n=Sr(n.nextSibling)}function Zs(){Rn=Cn=null,Tt=!1}function bh(n){Qn===null?Qn=[n]:Qn.push(n)}var xS=Ji.ReactCurrentBatchConfig;function Ta(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function qo(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function _m(n){var e=n._init;return e(n._payload)}function b0(n){function e(h,g){if(n){var v=h.deletions;v===null?(h.deletions=[g],h.flags|=16):v.push(g)}}function t(h,g){if(!n)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=wr(h,g),h.index=0,h.sibling=null,h}function s(h,g,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<g?(h.flags|=2,g):v):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return n&&h.alternate===null&&(h.flags|=2),h}function o(h,g,v,E){return g===null||g.tag!==6?(g=Eu(v,h.mode,E),g.return=h,g):(g=r(g,v),g.return=h,g)}function l(h,g,v,E){var b=v.type;return b===bs?u(h,g,v.props.children,E,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&_m(b)===g.type)?(E=r(g,v.props),E.ref=Ta(h,g,v),E.return=h,E):(E=zl(v.type,v.key,v.props,null,h.mode,E),E.ref=Ta(h,g,v),E.return=h,E)}function c(h,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Tu(v,h.mode,E),g.return=h,g):(g=r(g,v.children||[]),g.return=h,g)}function u(h,g,v,E,b){return g===null||g.tag!==7?(g=Zr(v,h.mode,E,b),g.return=h,g):(g=r(g,v),g.return=h,g)}function d(h,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Eu(""+g,h.mode,v),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fo:return v=zl(g.type,g.key,g.props,null,h.mode,v),v.ref=Ta(h,null,g),v.return=h,v;case As:return g=Tu(g,h.mode,v),g.return=h,g;case ur:var E=g._init;return d(h,E(g._payload),v)}if(Ba(g)||xa(g))return g=Zr(g,h.mode,v,null),g.return=h,g;qo(h,g)}return null}function f(h,g,v,E){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:o(h,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fo:return v.key===b?l(h,g,v,E):null;case As:return v.key===b?c(h,g,v,E):null;case ur:return b=v._init,f(h,g,b(v._payload),E)}if(Ba(v)||xa(v))return b!==null?null:u(h,g,v,E,null);qo(h,v)}return null}function p(h,g,v,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(v)||null,o(g,h,""+E,b);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Fo:return h=h.get(E.key===null?v:E.key)||null,l(g,h,E,b);case As:return h=h.get(E.key===null?v:E.key)||null,c(g,h,E,b);case ur:var w=E._init;return p(h,g,v,w(E._payload),b)}if(Ba(E)||xa(E))return h=h.get(v)||null,u(g,h,E,b,null);qo(g,E)}return null}function _(h,g,v,E){for(var b=null,w=null,P=g,x=g=0,R=null;P!==null&&x<v.length;x++){P.index>x?(R=P,P=null):R=P.sibling;var N=f(h,P,v[x],E);if(N===null){P===null&&(P=R);break}n&&P&&N.alternate===null&&e(h,P),g=s(N,g,x),w===null?b=N:w.sibling=N,w=N,P=R}if(x===v.length)return t(h,P),Tt&&Br(h,x),b;if(P===null){for(;x<v.length;x++)P=d(h,v[x],E),P!==null&&(g=s(P,g,x),w===null?b=P:w.sibling=P,w=P);return Tt&&Br(h,x),b}for(P=i(h,P);x<v.length;x++)R=p(P,h,x,v[x],E),R!==null&&(n&&R.alternate!==null&&P.delete(R.key===null?x:R.key),g=s(R,g,x),w===null?b=R:w.sibling=R,w=R);return n&&P.forEach(function(L){return e(h,L)}),Tt&&Br(h,x),b}function y(h,g,v,E){var b=xa(v);if(typeof b!="function")throw Error(se(150));if(v=b.call(v),v==null)throw Error(se(151));for(var w=b=null,P=g,x=g=0,R=null,N=v.next();P!==null&&!N.done;x++,N=v.next()){P.index>x?(R=P,P=null):R=P.sibling;var L=f(h,P,N.value,E);if(L===null){P===null&&(P=R);break}n&&P&&L.alternate===null&&e(h,P),g=s(L,g,x),w===null?b=L:w.sibling=L,w=L,P=R}if(N.done)return t(h,P),Tt&&Br(h,x),b;if(P===null){for(;!N.done;x++,N=v.next())N=d(h,N.value,E),N!==null&&(g=s(N,g,x),w===null?b=N:w.sibling=N,w=N);return Tt&&Br(h,x),b}for(P=i(h,P);!N.done;x++,N=v.next())N=p(P,h,x,N.value,E),N!==null&&(n&&N.alternate!==null&&P.delete(N.key===null?x:N.key),g=s(N,g,x),w===null?b=N:w.sibling=N,w=N);return n&&P.forEach(function(O){return e(h,O)}),Tt&&Br(h,x),b}function m(h,g,v,E){if(typeof v=="object"&&v!==null&&v.type===bs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Fo:e:{for(var b=v.key,w=g;w!==null;){if(w.key===b){if(b=v.type,b===bs){if(w.tag===7){t(h,w.sibling),g=r(w,v.props.children),g.return=h,h=g;break e}}else if(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&_m(b)===w.type){t(h,w.sibling),g=r(w,v.props),g.ref=Ta(h,w,v),g.return=h,h=g;break e}t(h,w);break}else e(h,w);w=w.sibling}v.type===bs?(g=Zr(v.props.children,h.mode,E,v.key),g.return=h,h=g):(E=zl(v.type,v.key,v.props,null,h.mode,E),E.ref=Ta(h,g,v),E.return=h,h=E)}return a(h);case As:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(h,g.sibling),g=r(g,v.children||[]),g.return=h,h=g;break e}else{t(h,g);break}else e(h,g);g=g.sibling}g=Tu(v,h.mode,E),g.return=h,h=g}return a(h);case ur:return w=v._init,m(h,g,w(v._payload),E)}if(Ba(v))return _(h,g,v,E);if(xa(v))return y(h,g,v,E);qo(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(h,g.sibling),g=r(g,v),g.return=h,h=g):(t(h,g),g=Eu(v,h.mode,E),g.return=h,h=g),a(h)):t(h,g)}return m}var Js=b0(!0),R0=b0(!1),oc=Pr(null),lc=null,Us=null,Rh=null;function Ch(){Rh=Us=lc=null}function Ph(n){var e=oc.current;Et(oc),n._currentValue=e}function Gd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ws(n,e){lc=n,Rh=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function jn(n){var e=n._currentValue;if(Rh!==n)if(n={context:n,memoizedValue:e,next:null},Us===null){if(lc===null)throw Error(se(308));Us=n,lc.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return e}var jr=null;function Ih(n){jr===null?jr=[n]:jr.push(n)}function C0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Ih(e)):(t.next=r.next,r.next=t),e.interleaved=t,qi(n,i)}function qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var dr=!1;function Lh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function P0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(n,t)}function Dl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_h(n,t)}}function vm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function cc(n,e,t,i){var r=n.updateQueue;dr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var u=n.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,u=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=n,y=o;switch(f=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Rt({},d,f);break e;case 2:dr=!0}}o.callback!==null&&o.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ts|=a,n.lanes=a,n.memoizedState=d}}function xm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Io={},Si=Pr(Io),mo=Pr(Io),go=Pr(Io);function Xr(n){if(n===Io)throw Error(se(174));return n}function Nh(n,e){switch(xt(go,e),xt(mo,n),xt(Si,Io),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ed(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ed(e,n)}Et(Si),xt(Si,e)}function Qs(){Et(Si),Et(mo),Et(go)}function I0(n){Xr(go.current);var e=Xr(Si.current),t=Ed(e,n.type);e!==t&&(xt(mo,n),xt(Si,t))}function Dh(n){mo.current===n&&(Et(Si),Et(mo))}var wt=Pr(0);function uc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Uh(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var Ul=Ji.ReactCurrentDispatcher,vu=Ji.ReactCurrentBatchConfig,es=0,At=null,kt=null,jt=null,dc=!1,$a=!1,_o=0,yS=0;function Qt(){throw Error(se(321))}function Fh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!si(n[t],e[t]))return!1;return!0}function Oh(n,e,t,i,r,s){if(es=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=n===null||n.memoizedState===null?TS:wS,n=t(i,r),$a){s=0;do{if($a=!1,_o=0,25<=s)throw Error(se(301));s+=1,jt=kt=null,e.updateQueue=null,Ul.current=AS,n=t(i,r)}while($a)}if(Ul.current=fc,e=kt!==null&&kt.next!==null,es=0,jt=kt=At=null,dc=!1,e)throw Error(se(300));return n}function kh(){var n=_o!==0;return _o=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?At.memoizedState=jt=n:jt=jt.next=n,jt}function Xn(){if(kt===null){var n=At.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var e=jt===null?At.memoizedState:jt.next;if(e!==null)jt=e,kt=n;else{if(n===null)throw Error(se(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?At.memoizedState=jt=n:jt=jt.next=n}return jt}function vo(n,e){return typeof e=="function"?e(n):e}function xu(n){var e=Xn(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=kt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var u=c.lane;if((es&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,At.lanes|=u,ts|=u}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,si(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,At.lanes|=s,ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function yu(n){var e=Xn(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var a=r=r.next;do s=n(s,a.action),a=a.next;while(a!==r);si(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function L0(){}function N0(n,e){var t=At,i=Xn(),r=e(),s=!si(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Bh(F0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(t.flags|=2048,xo(9,U0.bind(null,t,i,r,e),void 0,null),qt===null)throw Error(se(349));es&30||D0(t,e,r)}return r}function D0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function U0(n,e,t,i){e.value=t,e.getSnapshot=i,O0(e)&&k0(n)}function F0(n,e,t){return t(function(){O0(e)&&k0(n)})}function O0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!si(n,t)}catch{return!0}}function k0(n){var e=qi(n,1);e!==null&&ii(e,n,1,-1)}function ym(n){var e=hi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:n},e.queue=n,n=n.dispatch=ES.bind(null,At,n),[e.memoizedState,n]}function xo(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function B0(){return Xn().memoizedState}function Fl(n,e,t,i){var r=hi();At.flags|=n,r.memoizedState=xo(1|e,t,void 0,i===void 0?null:i)}function Dc(n,e,t,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Fh(i,a.deps)){r.memoizedState=xo(e,t,s,i);return}}At.flags|=n,r.memoizedState=xo(1|e,t,s,i)}function Sm(n,e){return Fl(8390656,8,n,e)}function Bh(n,e){return Dc(2048,8,n,e)}function z0(n,e){return Dc(4,2,n,e)}function V0(n,e){return Dc(4,4,n,e)}function H0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function G0(n,e,t){return t=t!=null?t.concat([n]):null,Dc(4,4,H0.bind(null,e,n),t)}function zh(){}function W0(n,e){var t=Xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function j0(n,e){var t=Xn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Fh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function X0(n,e,t){return es&21?(si(t,e)||(t=Z_(),At.lanes|=t,ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function SS(n,e){var t=dt;dt=t!==0&&4>t?t:4,n(!0);var i=vu.transition;vu.transition={};try{n(!1),e()}finally{dt=t,vu.transition=i}}function q0(){return Xn().memoizedState}function MS(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},K0(n))Y0(e,t);else if(t=C0(n,e,t,i),t!==null){var r=dn();ii(t,n,i,r),$0(t,e,i)}}function ES(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(K0(n))Y0(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,t);if(r.hasEagerState=!0,r.eagerState=o,si(o,a)){var l=e.interleaved;l===null?(r.next=r,Ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=C0(n,e,r,i),t!==null&&(r=dn(),ii(t,n,i,r),$0(t,e,i))}}function K0(n){var e=n.alternate;return n===At||e!==null&&e===At}function Y0(n,e){$a=dc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function $0(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,_h(n,t)}}var fc={readContext:jn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},TS={readContext:jn,useCallback:function(n,e){return hi().memoizedState=[n,e===void 0?null:e],n},useContext:jn,useEffect:Sm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Fl(4194308,4,H0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Fl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Fl(4,2,n,e)},useMemo:function(n,e){var t=hi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=hi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=MS.bind(null,At,n),[i.memoizedState,n]},useRef:function(n){var e=hi();return n={current:n},e.memoizedState=n},useState:ym,useDebugValue:zh,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=ym(!1),e=n[0];return n=SS.bind(null,n[1]),hi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=At,r=hi();if(Tt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),qt===null)throw Error(se(349));es&30||D0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Sm(F0.bind(null,i,s,n),[n]),i.flags|=2048,xo(9,U0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=hi(),e=qt.identifierPrefix;if(Tt){var t=Bi,i=ki;t=(i&~(1<<32-ni(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=_o++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:jn,useCallback:W0,useContext:jn,useEffect:Bh,useImperativeHandle:G0,useInsertionEffect:z0,useLayoutEffect:V0,useMemo:j0,useReducer:xu,useRef:B0,useState:function(){return xu(vo)},useDebugValue:zh,useDeferredValue:function(n){var e=Xn();return X0(e,kt.memoizedState,n)},useTransition:function(){var n=xu(vo)[0],e=Xn().memoizedState;return[n,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1},AS={readContext:jn,useCallback:W0,useContext:jn,useEffect:Bh,useImperativeHandle:G0,useInsertionEffect:z0,useLayoutEffect:V0,useMemo:j0,useReducer:yu,useRef:B0,useState:function(){return yu(vo)},useDebugValue:zh,useDeferredValue:function(n){var e=Xn();return kt===null?e.memoizedState=n:X0(e,kt.memoizedState,n)},useTransition:function(){var n=yu(vo)[0],e=Xn().memoizedState;return[n,e]},useMutableSource:L0,useSyncExternalStore:N0,useId:q0,unstable_isNewReconciler:!1};function Zn(n,e){if(n&&n.defaultProps){e=Rt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Wd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Rt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Uc={isMounted:function(n){return(n=n._reactInternals)?as(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Tr(n),s=Hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(ii(e,n,r,i),Dl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=dn(),r=Tr(n),s=Hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(ii(e,n,r,i),Dl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=dn(),i=Tr(n),r=Hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(n,r,i),e!==null&&(ii(e,n,i,t),Dl(e,n,i))}};function Mm(n,e,t,i,r,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!uo(t,i)||!uo(r,s):!0}function Z0(n,e,t){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=vn(e)?Jr:an.current,i=e.contextTypes,s=(i=i!=null)?$s(n,r):br),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Em(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Uc.enqueueReplaceState(e,e.state,null)}function jd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Lh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=vn(e)?Jr:an.current,r.context=$s(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),cc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,e){try{var t="",i=e;do t+=ey(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Su(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Xd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function J0(n,e,t){t=Hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){pc||(pc=!0,nf=i),Xd(n,e)},t}function Q0(n,e,t){t=Hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Xd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xd(n,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function Tm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=VS.bind(null,n,e,t),e.then(n,n))}function wm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Am(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hi(-1,1),e.tag=2,Mr(t,e,1))),t.lanes|=1),n)}var RS=Ji.ReactCurrentOwner,gn=!1;function cn(n,e,t,i){e.child=n===null?R0(e,null,t,i):Js(e,n.child,t,i)}function bm(n,e,t,i,r){t=t.render;var s=e.ref;return Ws(e,r),i=Oh(n,e,t,i,s,r),t=kh(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(Tt&&t&&wh(e),e.flags|=1,cn(n,e,i,r),e.child)}function Rm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ev(n,e,s,i,r)):(n=zl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:uo,t(a,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=wr(s,i),n.ref=e.ref,n.return=e,e.child=n}function ev(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(uo(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return qd(n,e,t,i,r)}function tv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(Os,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,xt(Os,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,xt(Os,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,xt(Os,An),An|=i;return cn(n,e,r,t),e.child}function nv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function qd(n,e,t,i,r){var s=vn(t)?Jr:an.current;return s=$s(e,s),Ws(e,r),t=Oh(n,e,t,i,s,r),i=kh(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(Tt&&i&&wh(e),e.flags|=1,cn(n,e,t,r),e.child)}function Cm(n,e,t,i,r){if(vn(t)){var s=!0;rc(e)}else s=!1;if(Ws(e,r),e.stateNode===null)Ol(n,e),Z0(e,t,i),jd(e,t,i,r),i=!0;else if(n===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=vn(t)?Jr:an.current,c=$s(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Em(e,a,i,c),dr=!1;var f=e.memoizedState;a.state=f,cc(e,i,a,r),l=e.memoizedState,o!==i||f!==l||_n.current||dr?(typeof u=="function"&&(Wd(e,t,u,i),l=e.memoizedState),(o=dr||Mm(e,t,o,i,f,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,P0(n,e),o=e.memoizedProps,c=e.type===e.elementType?o:Zn(e.type,o),a.props=c,d=e.pendingProps,f=a.context,l=t.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=vn(t)?Jr:an.current,l=$s(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==l)&&Em(e,a,i,l),dr=!1,f=e.memoizedState,a.state=f,cc(e,i,a,r);var _=e.memoizedState;o!==d||f!==_||_n.current||dr?(typeof p=="function"&&(Wd(e,t,p,i),_=e.memoizedState),(c=dr||Mm(e,t,c,i,f,_,l)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Kd(n,e,t,i,s,r)}function Kd(n,e,t,i,r,s){nv(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&pm(e,t,!1),Ki(n,e,s);i=e.stateNode,RS.current=e;var o=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=Js(e,n.child,null,s),e.child=Js(e,null,o,s)):cn(n,e,o,s),e.memoizedState=i.state,r&&pm(e,t,!0),e.child}function iv(n){var e=n.stateNode;e.pendingContext?hm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(n,e.context,!1),Nh(n,e.containerInfo)}function Pm(n,e,t,i,r){return Zs(),bh(r),e.flags|=256,cn(n,e,t,i),e.child}var Yd={dehydrated:null,treeContext:null,retryLane:0};function $d(n){return{baseLanes:n,cachePool:null,transitions:null}}function rv(n,e,t){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=n!==null&&n.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),xt(wt,r&1),n===null)return Hd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kc(a,i,0,null),n=Zr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$d(t),e.memoizedState=Yd,n):Vh(e,a));if(r=n.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return CS(n,e,a,i,o,r,t);if(s){s=i.fallback,a=e.mode,r=n.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=wr(o,s):(s=Zr(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?$d(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=Yd,i}return s=n.child,n=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Vh(n,e){return e=kc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ko(n,e,t,i){return i!==null&&bh(i),Js(e,n.child,null,t),n=Vh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function CS(n,e,t,i,r,s,a){if(t)return e.flags&256?(e.flags&=-257,i=Su(Error(se(422))),Ko(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kc({mode:"visible",children:i.children},r,0,null),s=Zr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,n.child,null,a),e.child.memoizedState=$d(a),e.memoizedState=Yd,s);if(!(e.mode&1))return Ko(n,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Su(s,i,void 0),Ko(n,e,a,i)}if(o=(a&n.childLanes)!==0,gn||o){if(i=qt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(n,r),ii(i,n,r,-1))}return qh(),i=Su(Error(se(421))),Ko(n,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=HS.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Rn=Sr(r.nextSibling),Cn=e,Tt=!0,Qn=null,n!==null&&(kn[Bn++]=ki,kn[Bn++]=Bi,kn[Bn++]=Qr,ki=n.id,Bi=n.overflow,Qr=e),e=Vh(e,i.children),e.flags|=4096,e)}function Im(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gd(n.return,e,t)}function Mu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function sv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,t,e);else if(n.tag===19)Im(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(xt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&uc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Mu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&uc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Mu(e,!0,t,null,s);break;case"together":Mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=wr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=wr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function PS(n,e,t){switch(e.tag){case 3:iv(e),Zs();break;case 5:I0(e);break;case 1:vn(e.type)&&rc(e);break;case 4:Nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(wt,wt.current&1),e.flags|=128,null):t&e.child.childLanes?rv(n,e,t):(xt(wt,wt.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);xt(wt,wt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return sv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,tv(n,e,t)}return Ki(n,e,t)}var av,Zd,ov,lv;av=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zd=function(){};ov=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Xr(Si.current);var s=null;switch(t){case"input":r=xd(n,r),i=xd(n,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Md(n,r),i=Md(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=nc)}Td(t,i);var a;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(t||(t={}),t[a]=l[a])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",n),s||o===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};lv=function(n,e,t,i){t!==i&&(e.flags|=4)};function wa(n,e){if(!Tt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function en(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function IS(n,e,t){var i=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return vn(e.type)&&ic(),en(e),null;case 3:return i=e.stateNode,Qs(),Et(_n),Et(an),Uh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Xo(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(af(Qn),Qn=null))),Zd(n,e),en(e),null;case 5:Dh(e);var r=Xr(go.current);if(t=e.type,n!==null&&e.stateNode!=null)ov(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return en(e),null}if(n=Xr(Si.current),Xo(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[po]=s,n=(e.mode&1)!==0,t){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Va.length;r++)Mt(Va[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":zp(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Hp(i,s),Mt("invalid",i)}Td(t,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,o,n),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,o,n),r=["children",""+o]):io.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(t){case"input":Oo(i),Vp(i,s,!0);break;case"textarea":Oo(i),Gp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[gi]=e,n[po]=i,av(n,e,!1,!1),e.stateNode=n;e:{switch(a=wd(t,i),t){case"dialog":Mt("cancel",n),Mt("close",n),r=i;break;case"iframe":case"object":case"embed":Mt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Va.length;r++)Mt(Va[r],n);r=i;break;case"source":Mt("error",n),r=i;break;case"img":case"image":case"link":Mt("error",n),Mt("load",n),r=i;break;case"details":Mt("toggle",n),r=i;break;case"input":zp(n,i),r=xd(n,i),Mt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),Mt("invalid",n);break;case"textarea":Hp(n,i),r=Md(n,i),Mt("invalid",n);break;default:r=i}Td(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?B_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&O_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ro(n,l):typeof l=="number"&&ro(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",n):l!=null&&dh(n,s,l,a))}switch(t){case"input":Oo(n),Vp(n,i,!1);break;case"textarea":Oo(n),Gp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ar(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?zs(n,!!i.multiple,s,!1):i.defaultValue!=null&&zs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=nc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(n&&e.stateNode!=null)lv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=Xr(go.current),Xr(Si.current),Xo(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=Cn,n!==null))switch(n.tag){case 3:jo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return en(e),null;case 13:if(Et(wt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Tt&&Rn!==null&&e.mode&1&&!(e.flags&128))A0(),Zs(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[gi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(af(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||wt.current&1?Bt===0&&(Bt=3):qh())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Qs(),Zd(n,e),n===null&&fo(e.stateNode.containerInfo),en(e),null;case 10:return Ph(e.type._context),en(e),null;case 17:return vn(e.type)&&ic(),en(e),null;case 19:if(Et(wt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=uc(n),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return xt(wt,wt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Dt()>ta&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(n=uc(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Tt)return en(e),null}else 2*Dt()-s.renderingStartTime>ta&&t!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,t=wt.current,xt(wt,i?t&1|2:t&1),e):(en(e),null);case 22:case 23:return Xh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function LS(n,e){switch(Ah(e),e.tag){case 1:return vn(e.type)&&ic(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Qs(),Et(_n),Et(an),Uh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Dh(e),null;case 13:if(Et(wt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Zs()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Et(wt),null;case 4:return Qs(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var Yo=!1,sn=!1,NS=typeof WeakSet=="function"?WeakSet:Set,we=null;function Fs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Pt(n,e,i)}else t.current=null}function Jd(n,e,t){try{t()}catch(i){Pt(n,e,i)}}var Lm=!1;function DS(n,e){if(Ud=Ql,n=h0(),Th(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var a=0,o=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(o=a),f===s&&++u===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=o===-1||l===-1?null:{start:o,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fd={focusedElem:n,selectionRange:t},Ql=!1,we=e;we!==null;)if(e=we,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,we=n;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:Zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(E){Pt(e,e.return,E)}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}return _=Lm,Lm=!1,_}function Za(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jd(e,t,s)}r=r.next}while(r!==i)}}function Fc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Qd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function cv(n){var e=n.alternate;e!==null&&(n.alternate=null,cv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[po],delete e[Bd],delete e[gS],delete e[_S])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function uv(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ef(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=nc));else if(i!==4&&(n=n.child,n!==null))for(ef(n,e,t),n=n.sibling;n!==null;)ef(n,e,t),n=n.sibling}function tf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(tf(n,e,t),n=n.sibling;n!==null;)tf(n,e,t),n=n.sibling}var Yt=null,Jn=!1;function nr(n,e,t){for(t=t.child;t!==null;)dv(n,e,t),t=t.sibling}function dv(n,e,t){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Rc,t)}catch{}switch(t.tag){case 5:sn||Fs(t,e);case 6:var i=Yt,r=Jn;Yt=null,nr(n,e,t),Yt=i,Jn=r,Yt!==null&&(Jn?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(Jn?(n=Yt,t=t.stateNode,n.nodeType===8?mu(n.parentNode,t):n.nodeType===1&&mu(n,t),lo(n)):mu(Yt,t.stateNode));break;case 4:i=Yt,r=Jn,Yt=t.stateNode.containerInfo,Jn=!0,nr(n,e,t),Yt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!sn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Jd(t,e,a),r=r.next}while(r!==i)}nr(n,e,t);break;case 1:if(!sn&&(Fs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){Pt(t,e,o)}nr(n,e,t);break;case 21:nr(n,e,t);break;case 22:t.mode&1?(sn=(i=sn)||t.memoizedState!==null,nr(n,e,t),sn=i):nr(n,e,t);break;default:nr(n,e,t)}}function Dm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new NS),e.forEach(function(i){var r=GS.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function qn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,Jn=!1;break e;case 3:Yt=o.stateNode.containerInfo,Jn=!0;break e;case 4:Yt=o.stateNode.containerInfo,Jn=!0;break e}o=o.return}if(Yt===null)throw Error(se(160));dv(s,a,r),Yt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fv(e,n),e=e.sibling}function fv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qn(e,n),ui(n),i&4){try{Za(3,n,n.return),Fc(3,n)}catch(y){Pt(n,n.return,y)}try{Za(5,n,n.return)}catch(y){Pt(n,n.return,y)}}break;case 1:qn(e,n),ui(n),i&512&&t!==null&&Fs(t,t.return);break;case 5:if(qn(e,n),ui(n),i&512&&t!==null&&Fs(t,t.return),n.flags&32){var r=n.stateNode;try{ro(r,"")}catch(y){Pt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,o=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&D_(r,s),wd(o,a);var c=wd(o,s);for(a=0;a<l.length;a+=2){var u=l[a],d=l[a+1];u==="style"?B_(r,d):u==="dangerouslySetInnerHTML"?O_(r,d):u==="children"?ro(r,d):dh(r,u,d,c)}switch(o){case"input":yd(r,s);break;case"textarea":U_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(y){Pt(n,n.return,y)}}break;case 6:if(qn(e,n),ui(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){Pt(n,n.return,y)}}break;case 3:if(qn(e,n),ui(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(y){Pt(n,n.return,y)}break;case 4:qn(e,n),ui(n);break;case 13:qn(e,n),ui(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wh=Dt())),i&4&&Dm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(sn=(c=sn)||u,qn(e,n),sn=c):qn(e,n),ui(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(we=n,u=n.child;u!==null;){for(d=we=u;we!==null;){switch(f=we,p=f.child,f.tag){case 0:case 11:case 14:case 15:Za(4,f,f.return);break;case 1:Fs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Pt(i,t,y)}}break;case 5:Fs(f,f.return);break;case 22:if(f.memoizedState!==null){Fm(d);continue}}p!==null?(p.return=f,we=p):Fm(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=k_("display",a))}catch(y){Pt(n,n.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Pt(n,n.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,n),ui(n),i&4&&Dm(n);break;case 21:break;default:qn(e,n),ui(n)}}function ui(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(uv(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=Nm(n);tf(n,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Nm(n);ef(n,o,a);break;default:throw Error(se(161))}}catch(l){Pt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function US(n,e,t){we=n,hv(n)}function hv(n,e,t){for(var i=(n.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Yo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||sn;o=Yo;var c=sn;if(Yo=a,(sn=l)&&!c)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?Om(r):l!==null?(l.return=a,we=l):Om(r);for(;s!==null;)we=s,hv(s),s=s.sibling;we=r,Yo=o,sn=c}Um(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Um(n)}}function Um(n){for(;we!==null;){var e=we;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:sn||Fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!sn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Zn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xm(e,a,t)}break;case 5:var o=e.stateNode;if(t===null&&e.flags&4){t=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&lo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}sn||e.flags&512&&Qd(e)}catch(f){Pt(e,e.return,f)}}if(e===n){we=null;break}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}}function Fm(n){for(;we!==null;){var e=we;if(e===n){we=null;break}var t=e.sibling;if(t!==null){t.return=e.return,we=t;break}we=e.return}}function Om(n){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Fc(4,e)}catch(l){Pt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Qd(e)}catch(l){Pt(e,s,l)}break;case 5:var a=e.return;try{Qd(e)}catch(l){Pt(e,a,l)}}}catch(l){Pt(e,e.return,l)}if(e===n){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var FS=Math.ceil,hc=Ji.ReactCurrentDispatcher,Hh=Ji.ReactCurrentOwner,Gn=Ji.ReactCurrentBatchConfig,rt=0,qt=null,Ot=null,$t=0,An=0,Os=Pr(0),Bt=0,yo=null,ts=0,Oc=0,Gh=0,Ja=null,mn=null,Wh=0,ta=1/0,Fi=null,pc=!1,nf=null,Er=null,$o=!1,gr=null,mc=0,Qa=0,rf=null,kl=-1,Bl=0;function dn(){return rt&6?Dt():kl!==-1?kl:kl=Dt()}function Tr(n){return n.mode&1?rt&2&&$t!==0?$t&-$t:xS.transition!==null?(Bl===0&&(Bl=Z_()),Bl):(n=dt,n!==0||(n=window.event,n=n===void 0?16:r0(n.type)),n):1}function ii(n,e,t,i){if(50<Qa)throw Qa=0,rf=null,Error(se(185));Ro(n,t,i),(!(rt&2)||n!==qt)&&(n===qt&&(!(rt&2)&&(Oc|=t),Bt===4&&hr(n,$t)),xn(n,i),t===1&&rt===0&&!(e.mode&1)&&(ta=Dt()+500,Nc&&Ir()))}function xn(n,e){var t=n.callbackNode;xy(n,e);var i=Jl(n,n===qt?$t:0);if(i===0)t!==null&&Xp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Xp(t),e===1)n.tag===0?vS(km.bind(null,n)):E0(km.bind(null,n)),pS(function(){!(rt&6)&&Ir()}),t=null;else{switch(J_(i)){case 1:t=gh;break;case 4:t=Y_;break;case 16:t=Zl;break;case 536870912:t=$_;break;default:t=Zl}t=Sv(t,pv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function pv(n,e){if(kl=-1,Bl=0,rt&6)throw Error(se(327));var t=n.callbackNode;if(js()&&n.callbackNode!==t)return null;var i=Jl(n,n===qt?$t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=gc(n,i);else{e=i;var r=rt;rt|=2;var s=gv();(qt!==n||$t!==e)&&(Fi=null,ta=Dt()+500,$r(n,e));do try{BS();break}catch(o){mv(n,o)}while(!0);Ch(),hc.current=s,rt=r,Ot!==null?e=0:(qt=null,$t=0,e=Bt)}if(e!==0){if(e===2&&(r=Pd(n),r!==0&&(i=r,e=sf(n,r))),e===1)throw t=yo,$r(n,0),hr(n,i),xn(n,Dt()),t;if(e===6)hr(n,i);else{if(r=n.current.alternate,!(i&30)&&!OS(r)&&(e=gc(n,i),e===2&&(s=Pd(n),s!==0&&(i=s,e=sf(n,s))),e===1))throw t=yo,$r(n,0),hr(n,i),xn(n,Dt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:zr(n,mn,Fi);break;case 3:if(hr(n,i),(i&130023424)===i&&(e=Wh+500-Dt(),10<e)){if(Jl(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){dn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kd(zr.bind(null,n,mn,Fi),e);break}zr(n,mn,Fi);break;case 4:if(hr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var a=31-ni(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FS(i/1960))-i,10<i){n.timeoutHandle=kd(zr.bind(null,n,mn,Fi),i);break}zr(n,mn,Fi);break;case 5:zr(n,mn,Fi);break;default:throw Error(se(329))}}}return xn(n,Dt()),n.callbackNode===t?pv.bind(null,n):null}function sf(n,e){var t=Ja;return n.current.memoizedState.isDehydrated&&($r(n,e).flags|=256),n=gc(n,e),n!==2&&(e=mn,mn=t,e!==null&&af(e)),n}function af(n){mn===null?mn=n:mn.push.apply(mn,n)}function OS(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(n,e){for(e&=~Gh,e&=~Oc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ni(e),i=1<<t;n[t]=-1,e&=~i}}function km(n){if(rt&6)throw Error(se(327));js();var e=Jl(n,0);if(!(e&1))return xn(n,Dt()),null;var t=gc(n,e);if(n.tag!==0&&t===2){var i=Pd(n);i!==0&&(e=i,t=sf(n,i))}if(t===1)throw t=yo,$r(n,0),hr(n,e),xn(n,Dt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,zr(n,mn,Fi),xn(n,Dt()),null}function jh(n,e){var t=rt;rt|=1;try{return n(e)}finally{rt=t,rt===0&&(ta=Dt()+500,Nc&&Ir())}}function ns(n){gr!==null&&gr.tag===0&&!(rt&6)&&js();var e=rt;rt|=1;var t=Gn.transition,i=dt;try{if(Gn.transition=null,dt=1,n)return n()}finally{dt=i,Gn.transition=t,rt=e,!(rt&6)&&Ir()}}function Xh(){An=Os.current,Et(Os)}function $r(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hS(t)),Ot!==null)for(t=Ot.return;t!==null;){var i=t;switch(Ah(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ic();break;case 3:Qs(),Et(_n),Et(an),Uh();break;case 5:Dh(i);break;case 4:Qs();break;case 13:Et(wt);break;case 19:Et(wt);break;case 10:Ph(i.type._context);break;case 22:case 23:Xh()}t=t.return}if(qt=n,Ot=n=wr(n.current,null),$t=An=e,Bt=0,yo=null,Gh=Oc=ts=0,mn=Ja=null,jr!==null){for(e=0;e<jr.length;e++)if(t=jr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}t.pending=i}jr=null}return n}function mv(n,e){do{var t=Ot;try{if(Ch(),Ul.current=fc,dc){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dc=!1}if(es=0,jt=kt=At=null,$a=!1,_o=0,Hh.current=null,t===null||t.return===null){Bt=1,yo=e,Ot=null;break}e:{var s=n,a=t.return,o=t,l=e;if(e=$t,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=wm(a);if(p!==null){p.flags&=-257,Am(p,a,o,s,e),p.mode&1&&Tm(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Tm(s,c,e),qh();break e}l=Error(se(426))}}else if(Tt&&o.mode&1){var m=wm(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Am(m,a,o,s,e),bh(ea(l,o));break e}}s=l=ea(l,o),Bt!==4&&(Bt=2),Ja===null?Ja=[s]:Ja.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=J0(s,l,e);vm(s,h);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Q0(s,o,e);vm(s,E);break e}}s=s.return}while(s!==null)}vv(t)}catch(b){e=b,Ot===t&&t!==null&&(Ot=t=t.return);continue}break}while(!0)}function gv(){var n=hc.current;return hc.current=fc,n===null?fc:n}function qh(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),qt===null||!(ts&268435455)&&!(Oc&268435455)||hr(qt,$t)}function gc(n,e){var t=rt;rt|=2;var i=gv();(qt!==n||$t!==e)&&(Fi=null,$r(n,e));do try{kS();break}catch(r){mv(n,r)}while(!0);if(Ch(),rt=t,hc.current=i,Ot!==null)throw Error(se(261));return qt=null,$t=0,Bt}function kS(){for(;Ot!==null;)_v(Ot)}function BS(){for(;Ot!==null&&!uy();)_v(Ot)}function _v(n){var e=yv(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?vv(n):Ot=e,Hh.current=null}function vv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=LS(t,e),t!==null){t.flags&=32767,Ot=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ot=null;return}}else if(t=IS(t,e,An),t!==null){Ot=t;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=n}while(e!==null);Bt===0&&(Bt=5)}function zr(n,e,t){var i=dt,r=Gn.transition;try{Gn.transition=null,dt=1,zS(n,e,t,i)}finally{Gn.transition=r,dt=i}return null}function zS(n,e,t,i){do js();while(gr!==null);if(rt&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(yy(n,s),n===qt&&(Ot=qt=null,$t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||$o||($o=!0,Sv(Zl,function(){return js(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var a=dt;dt=1;var o=rt;rt|=4,Hh.current=null,DS(n,t),fv(t,n),aS(Fd),Ql=!!Ud,Fd=Ud=null,n.current=t,US(t),dy(),rt=o,dt=a,Gn.transition=s}else n.current=t;if($o&&($o=!1,gr=n,mc=r),s=n.pendingLanes,s===0&&(Er=null),py(t.stateNode),xn(n,Dt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(pc)throw pc=!1,n=nf,nf=null,n;return mc&1&&n.tag!==0&&js(),s=n.pendingLanes,s&1?n===rf?Qa++:(Qa=0,rf=n):Qa=0,Ir(),null}function js(){if(gr!==null){var n=J_(mc),e=Gn.transition,t=dt;try{if(Gn.transition=null,dt=16>n?16:n,gr===null)var i=!1;else{if(n=gr,gr=null,mc=0,rt&6)throw Error(se(331));var r=rt;for(rt|=4,we=n.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(we=c;we!==null;){var u=we;switch(u.tag){case 0:case 11:case 15:Za(8,u,s)}var d=u.child;if(d!==null)d.return=u,we=d;else for(;we!==null;){u=we;var f=u.sibling,p=u.return;if(cv(u),u===c){we=null;break}if(f!==null){f.return=p,we=f;break}we=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,we=h;break e}we=s.return}}var g=n.current;for(we=g;we!==null;){a=we;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,we=v;else e:for(a=g;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fc(9,o)}}catch(b){Pt(o,o.return,b)}if(o===a){we=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,we=E;break e}we=o.return}}if(rt=r,Ir(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Rc,n)}catch{}i=!0}return i}finally{dt=t,Gn.transition=e}}return!1}function Bm(n,e,t){e=ea(t,e),e=J0(n,e,1),n=Mr(n,e,1),e=dn(),n!==null&&(Ro(n,1,e),xn(n,e))}function Pt(n,e,t){if(n.tag===3)Bm(n,n,t);else for(;e!==null;){if(e.tag===3){Bm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){n=ea(t,n),n=Q0(e,n,1),e=Mr(e,n,1),n=dn(),e!==null&&(Ro(e,1,n),xn(e,n));break}}e=e.return}}function VS(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=dn(),n.pingedLanes|=n.suspendedLanes&t,qt===n&&($t&t)===t&&(Bt===4||Bt===3&&($t&130023424)===$t&&500>Dt()-Wh?$r(n,0):Gh|=t),xn(n,e)}function xv(n,e){e===0&&(n.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var t=dn();n=qi(n,e),n!==null&&(Ro(n,e,t),xn(n,t))}function HS(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),xv(n,t)}function GS(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),xv(n,t)}var yv;yv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,PS(n,e,t);gn=!!(n.flags&131072)}else gn=!1,Tt&&e.flags&1048576&&T0(e,ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ol(n,e),n=e.pendingProps;var r=$s(e,an.current);Ws(e,t),r=Oh(null,e,i,n,r,t);var s=kh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,rc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Lh(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,jd(e,i,n,t),e=Kd(null,e,i,!0,s,t)):(e.tag=0,Tt&&s&&wh(e),cn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ol(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=jS(i),n=Zn(i,n),r){case 0:e=qd(null,e,i,n,t);break e;case 1:e=Cm(null,e,i,n,t);break e;case 11:e=bm(null,e,i,n,t);break e;case 14:e=Rm(null,e,i,Zn(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),qd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Cm(n,e,i,r,t);case 3:e:{if(iv(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,P0(n,e),cc(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ea(Error(se(423)),e),e=Pm(n,e,i,t,r);break e}else if(i!==r){r=ea(Error(se(424)),e),e=Pm(n,e,i,t,r);break e}else for(Rn=Sr(e.stateNode.containerInfo.firstChild),Cn=e,Tt=!0,Qn=null,t=R0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zs(),i===r){e=Ki(n,e,t);break e}cn(n,e,i,t)}e=e.child}return e;case 5:return I0(e),n===null&&Hd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,a=r.children,Od(i,r)?a=null:s!==null&&Od(i,s)&&(e.flags|=32),nv(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&Hd(e),null;case 13:return rv(n,e,t);case 4:return Nh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Js(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),bm(n,e,i,r,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(oc,i._currentValue),i._currentValue=a,s!==null)if(si(s.value,a)){if(s.children===r.children&&!_n.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gd(s.return,t,e),o.lanes|=t;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=t,o=a.alternate,o!==null&&(o.lanes|=t),Gd(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ws(e,t),r=jn(r),i=i(r),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Rm(n,e,i,r,t);case 15:return ev(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ol(n,e),e.tag=1,vn(i)?(n=!0,rc(e)):n=!1,Ws(e,t),Z0(e,i,r),jd(e,i,r,t),Kd(null,e,i,!0,n,t);case 19:return sv(n,e,t);case 22:return tv(n,e,t)}throw Error(se(156,e.tag))};function Sv(n,e){return K_(n,e)}function WS(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(n,e,t,i){return new WS(n,e,t,i)}function Kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jS(n){if(typeof n=="function")return Kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===hh)return 11;if(n===ph)return 14}return 2}function wr(n,e){var t=n.alternate;return t===null?(t=zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function zl(n,e,t,i,r,s){var a=2;if(i=n,typeof n=="function")Kh(n)&&(a=1);else if(typeof n=="string")a=5;else e:switch(n){case bs:return Zr(t.children,r,s,e);case fh:a=8,r|=8;break;case md:return n=zn(12,t,e,r|2),n.elementType=md,n.lanes=s,n;case gd:return n=zn(13,t,e,r),n.elementType=gd,n.lanes=s,n;case _d:return n=zn(19,t,e,r),n.elementType=_d,n.lanes=s,n;case I_:return kc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C_:a=10;break e;case P_:a=9;break e;case hh:a=11;break e;case ph:a=14;break e;case ur:a=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=zn(a,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Zr(n,e,t,i){return n=zn(7,n,i,e),n.lanes=t,n}function kc(n,e,t,i){return n=zn(22,n,i,e),n.elementType=I_,n.lanes=t,n.stateNode={isHidden:!1},n}function Eu(n,e,t){return n=zn(6,n,null,e),n.lanes=t,n}function Tu(n,e,t){return e=zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function XS(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ru(0),this.expirationTimes=ru(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yh(n,e,t,i,r,s,a,o,l){return n=new XS(n,e,t,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(s),n}function qS(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Mv(n){if(!n)return br;n=n._reactInternals;e:{if(as(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(vn(t))return M0(n,t,e)}return e}function Ev(n,e,t,i,r,s,a,o,l){return n=Yh(t,i,!0,n,r,s,a,o,l),n.context=Mv(null),t=n.current,i=dn(),r=Tr(t),s=Hi(i,r),s.callback=e??null,Mr(t,s,r),n.current.lanes=r,Ro(n,r,i),xn(n,i),n}function Bc(n,e,t,i){var r=e.current,s=dn(),a=Tr(r);return t=Mv(t),e.context===null?e.context=t:e.pendingContext=t,e=Hi(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Mr(r,e,a),n!==null&&(ii(n,r,a,s),Dl(n,r,a)),a}function _c(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function $h(n,e){zm(n,e),(n=n.alternate)&&zm(n,e)}function KS(){return null}var Tv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zh(n){this._internalRoot=n}zc.prototype.render=Zh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Bc(n,e,null,null)};zc.prototype.unmount=Zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ns(function(){Bc(null,n,null,null)}),e[Xi]=null}};function zc(n){this._internalRoot=n}zc.prototype.unstable_scheduleHydration=function(n){if(n){var e=t0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fr.length&&e!==0&&e<fr[t].priority;t++);fr.splice(t,0,n),t===0&&i0(n)}};function Jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function YS(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=_c(a);s.call(c)}}var a=Ev(e,i,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=a,n[Xi]=a.current,fo(n.nodeType===8?n.parentNode:n),ns(),a}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=_c(l);o.call(c)}}var l=Yh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=l,n[Xi]=l.current,fo(n.nodeType===8?n.parentNode:n),ns(function(){Bc(e,l,t,i)}),l}function Hc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=_c(a);o.call(l)}}Bc(e,a,n,r)}else a=YS(t,e,n,r,i);return _c(a)}Q_=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=za(e.pendingLanes);t!==0&&(_h(e,t|1),xn(e,Dt()),!(rt&6)&&(ta=Dt()+500,Ir()))}break;case 13:ns(function(){var i=qi(n,1);if(i!==null){var r=dn();ii(i,n,1,r)}}),$h(n,1)}};vh=function(n){if(n.tag===13){var e=qi(n,134217728);if(e!==null){var t=dn();ii(e,n,134217728,t)}$h(n,134217728)}};e0=function(n){if(n.tag===13){var e=Tr(n),t=qi(n,e);if(t!==null){var i=dn();ii(t,n,e,i)}$h(n,e)}};t0=function(){return dt};n0=function(n,e){var t=dt;try{return dt=n,e()}finally{dt=t}};bd=function(n,e,t){switch(e){case"input":if(yd(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Lc(i);if(!r)throw Error(se(90));N_(i),yd(i,r)}}}break;case"textarea":U_(n,t);break;case"select":e=t.value,e!=null&&zs(n,!!t.multiple,e,!1)}};H_=jh;G_=ns;var $S={usingClientEntryPoint:!1,Events:[Po,Is,Lc,z_,V_,jh]},Aa={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZS={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=X_(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||KS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Rc=Zo.inject(ZS),yi=Zo}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$S;Ln.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(se(200));return qS(n,e,null,t)};Ln.createRoot=function(n,e){if(!Jh(n))throw Error(se(299));var t=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yh(n,1,!1,null,null,t,!1,i,r),n[Xi]=e.current,fo(n.nodeType===8?n.parentNode:n),new Zh(e)};Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=X_(e),n=n===null?null:n.stateNode,n};Ln.flushSync=function(n){return ns(n)};Ln.hydrate=function(n,e,t){if(!Vc(e))throw Error(se(200));return Hc(null,n,e,!0,t)};Ln.hydrateRoot=function(n,e,t){if(!Jh(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",a=Tv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Ev(e,null,n,1,t??null,r,!1,s,a),n[Xi]=e.current,fo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new zc(e)};Ln.render=function(n,e,t){if(!Vc(e))throw Error(se(200));return Hc(null,n,e,!1,t)};Ln.unmountComponentAtNode=function(n){if(!Vc(n))throw Error(se(40));return n._reactRootContainer?(ns(function(){Hc(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1};Ln.unstable_batchedUpdates=jh;Ln.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Vc(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Hc(n,e,t,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function wv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wv)}catch(n){console.error(n)}}wv(),w_.exports=Ln;var JS=w_.exports,Hm=JS;hd.createRoot=Hm.createRoot,hd.hydrateRoot=Hm.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="184",QS=0,Gm=1,eM=2,Vl=1,tM=2,Ha=3,Yi=0,yn=1,_i=2,Gi=0,Xs=1,Wm=2,jm=3,Xm=4,nM=5,Hr=100,iM=101,rM=102,sM=103,aM=104,oM=200,lM=201,cM=202,uM=203,of=204,lf=205,dM=206,fM=207,hM=208,pM=209,mM=210,gM=211,_M=212,vM=213,xM=214,cf=0,uf=1,df=2,na=3,ff=4,hf=5,pf=6,mf=7,Av=0,yM=1,SM=2,Mi=0,bv=1,Rv=2,Cv=3,Pv=4,Iv=5,Lv=6,Nv=7,qm="attached",MM="detached",Dv=300,is=301,ia=302,wu=303,Au=304,Gc=306,ra=1e3,vi=1001,vc=1002,zt=1003,Uv=1004,Ga=1005,Vt=1006,Hl=1007,zi=1008,bn=1009,Fv=1010,Ov=1011,So=1012,ep=1013,wi=1014,Vn=1015,$i=1016,tp=1017,np=1018,Mo=1020,kv=35902,Bv=35899,zv=1021,Vv=1022,Hn=1023,Zi=1026,qr=1027,ip=1028,rp=1029,rs=1030,sp=1031,ap=1033,Gl=33776,Wl=33777,jl=33778,Xl=33779,gf=35840,_f=35841,vf=35842,xf=35843,yf=36196,Sf=37492,Mf=37496,Ef=37488,Tf=37489,xc=37490,wf=37491,Af=37808,bf=37809,Rf=37810,Cf=37811,Pf=37812,If=37813,Lf=37814,Nf=37815,Df=37816,Uf=37817,Ff=37818,Of=37819,kf=37820,Bf=37821,zf=36492,Vf=36494,Hf=36495,Gf=36283,Wf=36284,yc=36285,jf=36286,EM=2200,TM=2201,wM=2202,Eo=2300,To=2301,bu=2302,Km=2303,ks=2400,Bs=2401,Sc=2402,op=2500,AM=2501,bM=0,Hv=1,Xf=2,RM=3200,qf=0,CM=1,pr="",Xt="srgb",In="srgb-linear",Mc="linear",ct="srgb",us=7680,Ym=519,PM=512,IM=513,LM=514,lp=515,NM=516,DM=517,cp=518,UM=519,Kf=35044,$m="300 es",xi=2e3,wo=2001;function FM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function OM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kM(){const n=Ao("canvas");return n.style.display="block",n}const Zm={};function Ec(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Re(...n){n=Gv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function De(...n){n=Gv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Yf(...n){const e=n.join(" ");e in Zm||(Zm[e]=!0,Re(...n))}function BM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const zM={[cf]:uf,[df]:pf,[ff]:mf,[na]:hf,[uf]:cf,[pf]:df,[mf]:ff,[hf]:na};class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jm=1234567;const eo=Math.PI/180,sa=180/Math.PI;function ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function up(n,e){return(n%e+e)%e}function VM(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function HM(n,e,t){return n!==e?(t-n)/(e-n):0}function to(n,e,t){return(1-t)*n+t*e}function GM(n,e,t,i){return to(n,e,1-Math.exp(-t*i))}function WM(n,e=1){return e-Math.abs(up(n,e*2)-e)}function jM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function XM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function KM(n,e){return n+Math.random()*(e-n)}function YM(n){return n*(.5-Math.random())}function $M(n){n!==void 0&&(Jm=n);let e=Jm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ZM(n){return n*eo}function JM(n){return n*sa}function QM(n){return(n&n-1)===0&&n!==0}function eE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nE(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*p,o*c);break;case"YXY":n.set(l*p,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*p,o*u,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ei(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const iE={DEG2RAD:eo,RAD2DEG:sa,generateUUID:ri,clamp:Je,euclideanModulo:up,mapLinear:VM,inverseLerp:HM,lerp:to,damp:GM,pingpong:WM,smoothstep:jM,smootherstep:XM,randInt:qM,randFloat:KM,randFloatSpread:YM,seededRandom:$M,degToRad:ZM,radToDeg:JM,isPowerOfTwo:QM,ceilPowerOfTwo:eE,floorPowerOfTwo:tE,setQuaternionFromProperEuler:nE,normalize:ut,denormalize:ei},Sp=class Sp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sp.prototype.isVector2=!0;let tt=Sp;class Wn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(d!==y||l!==f||c!==p||u!==_){let m=l*f+c*p+u*_+d*y;m<0&&(f=-f,p=-p,_=-_,y=-y,m=-m);let h=1-o;if(m<.9995){const g=Math.acos(m),v=Math.sin(g);h=Math.sin(h*g)/v,o=Math.sin(o*g)/v,l=l*h+f*o,c=c*h+p*o,u=u*h+_*o,d=d*h+y*o}else{l=l*h+f*o,c=c*h+p*o,u=u*h+_*o,d=d*h+y*o;const g=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=g,c*=g,u*=g,d*=g}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*p-c*f,e[t+1]=l*_+u*f+c*d-o*p,e[t+2]=c*_+u*p+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Mp=class Mp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Mp.prototype.isVector3=!0;let B=Mp;const Ru=new B,Qm=new Wn,Ep=class Ep{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],g=r[1],v=r[4],E=r[7],b=r[2],w=r[5],P=r[8];return s[0]=a*y+o*g+l*b,s[3]=a*m+o*v+l*w,s[6]=a*h+o*E+l*P,s[1]=c*y+u*g+d*b,s[4]=c*m+u*v+d*w,s[7]=c*h+u*E+d*P,s[2]=f*y+p*g+_*b,s[5]=f*m+p*v+_*w,s[8]=f*h+p*E+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,p=c*s-a*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ep.prototype.isMatrix3=!0;let ke=Ep;const Cu=new ke,eg=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tg=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const n={enabled:!0,workingColorSpace:In,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Yf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Yf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[In]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:eg,fromXYZ:tg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),n}const Ze=rE();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class sE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Ao("canvas")),ds.width=e.width,ds.height=e.height;const r=ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pu(r[a].image)):s.push(Pu(r[a]))}else s=Pu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let oE=0;const Iu=new B;class Kt extends Lr{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=vi,r=vi,s=Vt,a=zi,o=Hn,l=bn,c=Kt.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ri(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Dv;Kt.DEFAULT_ANISOTROPY=1;const Tp=class Tp{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(p+1)/2,b=(h+1)/2,w=(u+f)/4,P=(d+y)/4,x=(_+m)/4;return v>E&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=P/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=w/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=x/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tp.prototype.isVector4=!0;let _t=Tp;class lE extends Lr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends lE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wv extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ac=class Ac{constructor(e,t,i,r,s,a,o,l,c,u,d,f,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,p,_,y,m)}set(e,t,i,r,s,a,o,l,c,u,d,f,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ac().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,_=c*u,y=c*d;t[0]=f-y*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*d,_=o*u,y=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=y-f*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=f-y*d}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,dE)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ir.crossVectors(i,Tn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ir.crossVectors(i,Tn)),ir.normalize(),Jo.crossVectors(Tn,ir),r[0]=ir.x,r[4]=Jo.x,r[8]=Tn.x,r[1]=ir.y,r[5]=Jo.y,r[9]=Tn.y,r[2]=ir.z,r[6]=Jo.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],g=i[3],v=i[7],E=i[11],b=i[15],w=r[0],P=r[4],x=r[8],R=r[12],N=r[1],L=r[5],O=r[9],X=r[13],$=r[2],U=r[6],W=r[10],V=r[14],z=r[3],K=r[7],Q=r[11],ae=r[15];return s[0]=a*w+o*N+l*$+c*z,s[4]=a*P+o*L+l*U+c*K,s[8]=a*x+o*O+l*W+c*Q,s[12]=a*R+o*X+l*V+c*ae,s[1]=u*w+d*N+f*$+p*z,s[5]=u*P+d*L+f*U+p*K,s[9]=u*x+d*O+f*W+p*Q,s[13]=u*R+d*X+f*V+p*ae,s[2]=_*w+y*N+m*$+h*z,s[6]=_*P+y*L+m*U+h*K,s[10]=_*x+y*O+m*W+h*Q,s[14]=_*R+y*X+m*V+h*ae,s[3]=g*w+v*N+E*$+b*z,s[7]=g*P+v*L+E*U+b*K,s[11]=g*x+v*O+E*W+b*Q,s[15]=g*R+v*X+E*V+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15],g=l*p-c*f,v=o*p-c*d,E=o*f-l*d,b=a*p-c*u,w=a*f-l*u,P=a*d-o*u;return t*(y*g-m*v+h*E)-i*(_*g-m*b+h*w)+r*(_*v-y*b+h*P)-s*(_*E-y*w+m*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],g=t*o-i*a,v=t*l-r*a,E=t*c-s*a,b=i*l-r*o,w=i*c-s*o,P=r*c-s*l,x=u*y-d*_,R=u*m-f*_,N=u*h-p*_,L=d*m-f*y,O=d*h-p*y,X=f*h-p*m,$=g*X-v*O+E*L+b*N-w*R+P*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/$;return e[0]=(o*X-l*O+c*L)*U,e[1]=(r*O-i*X-s*L)*U,e[2]=(y*P-m*w+h*b)*U,e[3]=(f*w-d*P-p*b)*U,e[4]=(l*N-a*X-c*R)*U,e[5]=(t*X-r*N+s*R)*U,e[6]=(m*E-_*P-h*v)*U,e[7]=(u*P-f*E+p*v)*U,e[8]=(a*O-o*N+c*x)*U,e[9]=(i*N-t*O-s*x)*U,e[10]=(_*w-y*E+h*g)*U,e[11]=(d*E-u*w-p*g)*U,e[12]=(o*R-a*L-l*x)*U,e[13]=(t*L-i*R+r*x)*U,e[14]=(y*v-_*b-m*g)*U,e[15]=(u*b-d*v+f*g)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,p=s*u,_=s*d,y=a*u,m=a*d,h=o*d,g=l*c,v=l*u,E=l*d,b=i.x,w=i.y,P=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+E)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-E)*w,r[5]=(1-(f+h))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(_+v)*P,r[9]=(m-g)*P,r[10]=(1-(f+y))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),l=fs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Kn.copy(this);const c=1/a,u=1/o,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=xi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),p=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===xi)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===wo)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=xi,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),p=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===xi)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===wo)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ac.prototype.isMatrix4=!0;let qe=Ac;const fs=new B,Kn=new qe,uE=new B(0,0,0),dE=new B(1,1,1),ir=new B,Jo=new B,Tn=new B,ng=new qe,ig=new Wn;class Rr{constructor(e=0,t=0,i=0,r=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class jv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const rg=new B,hs=new Wn,Pi=new qe,Qo=new B,ba=new B,hE=new B,pE=new Wn,sg=new B(1,0,0),ag=new B(0,1,0),og=new B(0,0,1),lg={type:"added"},mE={type:"removed"},ps={type:"childadded",child:null},Lu={type:"childremoved",child:null};class bt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new B,t=new Rr,i=new Wn,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new ke}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(ag,e)}rotateZ(e){return this.rotateOnAxis(og,e)}translateOnAxis(e,t){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(ag,e)}translateZ(e){return this.translateOnAxis(og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qo.copy(e):Qo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(ba,Qo,this.up):Pi.lookAt(Qo,ba,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Pi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lg),ps.child=e,this.dispatchEvent(ps),ps.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mE),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lg),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,hE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,pE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new B(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gE={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Du(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=up(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Du(a,s,e+1/3),this.g=Du(a,s,e),this.b=Du(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=Xv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ze.workingToColorSpace(nn.copy(this),e),Math.round(Je(nn.r*255,0,255))*65536+Math.round(Je(nn.g*255,0,255))*256+Math.round(Je(nn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(nn.copy(this),t);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Xt){Ze.workingToColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,r=nn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(el);const i=to(rr.h,el.h,t),r=to(rr.s,el.s,t),s=to(rr.l,el.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Be;Be.NAMES=Xv;class _E extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new B,Ii=new B,Uu=new B,Li=new B,ms=new B,gs=new B,cg=new B,Fu=new B,Ou=new B,ku=new B,Bu=new _t,zu=new _t,Vu=new _t;class ti{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Ii.subVectors(i,t),Uu.subVectors(e,t);const a=Yn.dot(Yn),o=Yn.dot(Ii),l=Yn.dot(Uu),c=Ii.dot(Ii),u=Ii.dot(Uu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Bu.setScalar(0),zu.setScalar(0),Vu.setScalar(0),Bu.fromBufferAttribute(e,t),zu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bu,s.x),a.addScaledVector(zu,s.y),a.addScaledVector(Vu,s.z),a}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Ii.subVectors(e,t),Yn.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Yn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),Fu.subVectors(e,i);const l=ms.dot(Fu),c=gs.dot(Fu);if(l<=0&&c<=0)return t.copy(i);Ou.subVectors(e,r);const u=ms.dot(Ou),d=gs.dot(Ou);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ms,a);ku.subVectors(e,s);const p=ms.dot(ku),_=gs.dot(ku);if(_>=0&&p<=_)return t.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(gs,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return cg.subVectors(s,r),o=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector(cg,o);const h=1/(m+y+f);return a=y*h,o=f*h,t.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ai{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),nl.subVectors(this.max,Ra),_s.subVectors(e.a,Ra),vs.subVectors(e.b,Ra),xs.subVectors(e.c,Ra),sr.subVectors(vs,_s),ar.subVectors(xs,vs),Dr.subVectors(_s,xs);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Dr.z,Dr.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Dr.z,0,-Dr.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Dr.y,Dr.x,0];return!Hu(t,_s,vs,xs,nl)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,_s,vs,xs,nl))?!1:(il.crossVectors(sr,ar),t=[il.x,il.y,il.z],Hu(t,_s,vs,xs,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new B,new B,new B,new B,new B,new B,new B,new B],$n=new B,tl=new ai,_s=new B,vs=new B,xs=new B,sr=new B,ar=new B,Dr=new B,Ra=new B,nl=new B,il=new B,Ur=new B;function Hu(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ur.fromArray(n,s);const o=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ft=new B,rl=new tt;let vE=0;class fn extends Lr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kf,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qv extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kv extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xE=new ai,Ca=new B,Gu=new B;class bi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const t=Ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Gu)),this.expandByPoint(Ca.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yE=0;const Fn=new qe,Wu=new bt,ys=new B,wn=new ai,Pa=new ai,Wt=new B;class Dn extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FM(e)?Kv:qv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(wn.min,Pa.min),wn.expandByPoint(Wt),Wt.addVectors(wn.max,Pa.max),wn.expandByPoint(Wt)):(wn.expandByPoint(Pa.min),wn.expandByPoint(Pa.max))}wn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),Wt.add(ys)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new B,l[x]=new B;const c=new B,u=new B,d=new B,f=new tt,p=new tt,_=new tt,y=new B,m=new B;function h(x,R,N){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,N),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,R),_.fromBufferAttribute(s,N),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(y),o[R].add(y),o[N].add(y),l[x].add(m),l[R].add(m),l[N].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let x=0,R=g.length;x<R;++x){const N=g[x],L=N.start,O=N.count;for(let X=L,$=L+O;X<$;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new B,E=new B,b=new B,w=new B;function P(x){b.fromBufferAttribute(r,x),w.copy(b);const R=o[x];v.copy(R),v.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(w,R);const L=E.dot(l[x])<0?-1:1;a.setXYZW(x,v.x,v.y,v.z,L)}for(let x=0,R=g.length;x<R;++x){const N=g[x],L=N.start,O=N.count;for(let X=L,$=L+O;X<$;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new fn(f,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class SE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kf,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new B;class fp{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ei(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ec("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fp(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ec("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ME=0;class Ti extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Xs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==of&&(i.blendSrc=this.blendSrc),this.blendDst!==lf&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new B,ju=new B,sl=new B,or=new B,Xu=new B,al=new B,qu=new B;class Wc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ju.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),or.copy(this.origin).sub(ju);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sl),o=or.dot(this.direction),l=-or.dot(sl),c=or.lengthSq(),u=Math.abs(1-a*a);let d,f,p,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const y=1/u;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ju).addScaledVector(sl,f),p}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,r,s){Xu.subVectors(t,e),al.subVectors(i,e),qu.crossVectors(Xu,al);let a=this.direction.dot(qu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;or.subVectors(this.origin,e);const l=o*this.direction.dot(al.crossVectors(or,al));if(l<0)return null;const c=o*this.direction.dot(Xu.cross(or));if(c<0||l+c>a)return null;const u=-o*or.dot(qu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yr extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=Av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ug=new qe,Fr=new Wc,ol=new bi,dg=new B,ll=new B,cl=new B,ul=new B,Ku=new B,dl=new B,fg=new B,fl=new B;class Mn extends bt{constructor(e=new Dn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Ku.fromBufferAttribute(d,e),a?dl.addScaledVector(Ku,u):dl.addScaledVector(Ku.sub(t),u))}t.add(dl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(ol.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(ol,dg)===null||Fr.origin.distanceToSquared(dg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,b=v;E<b;E+=3){const w=o.getX(E),P=o.getX(E+1),x=o.getX(E+2);r=hl(this,h,e,i,c,u,d,w,P,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const g=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);r=hl(this,a,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],h=a[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=g,b=v;E<b;E+=3){const w=E,P=E+1,x=E+2;r=hl(this,h,e,i,c,u,d,w,P,x),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const g=m,v=m+1,E=m+2;r=hl(this,a,e,i,c,u,d,g,v,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function EE(n,e,t,i,r,s,a,o){let l;if(e.side===yn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;fl.copy(o),fl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fl);return c<t.near||c>t.far?null:{distance:c,point:fl.clone(),object:n}}function hl(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ll),n.getVertexPosition(l,cl),n.getVertexPosition(c,ul);const u=EE(n,e,t,i,ll,cl,ul,fg);if(u){const d=new B;ti.getBarycoord(fg,ll,cl,ul,d),r&&(u.uv=ti.getInterpolatedAttribute(r,o,l,c,d,new tt)),s&&(u.uv1=ti.getInterpolatedAttribute(s,o,l,c,d,new tt)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};ti.getNormal(ll,cl,ul,f.normal),u.face=f,u.barycoord=d}return u}const Ia=new _t,hg=new _t,pg=new _t,TE=new _t,mg=new qe,pl=new B,Yu=new bi,gg=new qe,$u=new Wc;class wE extends Mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qm,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ai),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pl),this.boundingBox.expandByPoint(pl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,pl),this.boundingSphere.expandByPoint(pl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yu.copy(this.boundingSphere),Yu.applyMatrix4(r),e.ray.intersectsSphere(Yu)!==!1&&(gg.copy(r).invert(),$u.copy(e.ray).applyMatrix4(gg),!(this.boundingBox!==null&&$u.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$u)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===MM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Re("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;hg.fromBufferAttribute(r.attributes.skinIndex,e),pg.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ia.copy(t),t.set(0,0,0,0)):(Ia.set(...t,1),t.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=pg.getComponent(s);if(a!==0){const o=hg.getComponent(s);mg.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(TE.copy(Ia).applyMatrix4(mg),a)}}return t.isVector4&&(t.w=Ia.w),t.applyMatrix4(this.bindMatrixInverse)}}class Yv extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hp extends Kt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=zt,u=zt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _g=new qe,AE=new qe;class pp{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Re("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:AE;_g.multiplyMatrices(o,t[s]),_g.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new pp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new hp(t,e,e,Hn,Vn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(Re("Skeleton: No bone found with UUID:",s),a=new Yv),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class $f extends fn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new qe,vg=new qe,ml=[],xg=new ai,bE=new qe,La=new Mn,Na=new bi;class RE extends Mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $f(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,bE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),xg.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(xg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ss),Na.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Na)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(La.geometry=this.geometry,La.material=this.material,La.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),e.ray.intersectsSphere(Na)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),vg.multiplyMatrices(i,Ss),La.matrixWorld=vg,La.raycast(e,ml);for(let a=0,o=ml.length;a<o;a++){const l=ml[a];l.instanceId=s,l.object=this,t.push(l)}ml.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $f(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hp(new Float32Array(r*this.count),r,this.count,ip,Vn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zu=new B,CE=new B,PE=new ke;class Vr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Zu.subVectors(i,t).cross(CE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Zu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||PE.getNormalMatrix(e),r=this.coplanarPoint(Zu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new bi,IE=new tt(.5,.5),gl=new B;class mp{constructor(e=new Vr,t=new Vr,i=new Vr,r=new Vr,s=new Vr,a=new Vr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],_=s[8],y=s[9],m=s[10],h=s[11],g=s[12],v=s[13],E=s[14],b=s[15];if(r[0].setComponents(c-a,p-u,h-_,b-g).normalize(),r[1].setComponents(c+a,p+u,h+_,b+g).normalize(),r[2].setComponents(c+o,p+d,h+y,b+v).normalize(),r[3].setComponents(c-o,p-d,h-y,b-v).normalize(),i)r[4].setComponents(l,f,m,E).normalize(),r[5].setComponents(c-l,p-f,h-m,b-E).normalize();else if(r[4].setComponents(c-l,p-f,h-m,b-E).normalize(),t===xi)r[5].setComponents(c+l,p+f,h+m,b+E).normalize();else if(t===wo)r[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const t=IE.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tc=new B,wc=new B,yg=new qe,Da=new Wc,_l=new bi,Ju=new B,Sg=new B;class gp extends bt{constructor(e=new Dn,t=new $v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Tc.fromBufferAttribute(t,r-1),wc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Tc.distanceTo(wc);e.setAttribute("lineDistance",new Sn(i,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;yg.copy(r).invert(),Da.copy(e.ray).applyMatrix4(yg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const h=u.getX(y),g=u.getX(y+1),v=vl(this,e,Da,l,h,g,y);v&&t.push(v)}if(this.isLineLoop){const y=u.getX(_-1),m=u.getX(p),h=vl(this,e,Da,l,y,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const h=vl(this,e,Da,l,y,y+1,y);h&&t.push(h)}if(this.isLineLoop){const y=vl(this,e,Da,l,_-1,p,_-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vl(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Tc.fromBufferAttribute(o,r),wc.fromBufferAttribute(o,s),t.distanceSqToSegment(Tc,wc,Ju,Sg)>i)return;Ju.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ju);if(!(c<e.near||c>e.far))return{distance:c,point:Sg.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Mg=new B,Eg=new B;class LE extends gp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Mg.fromBufferAttribute(t,r),Eg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new Sn(i,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class NE extends gp{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zv extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tg=new qe,Zf=new Wc,xl=new bi,yl=new B;class DE extends bt{constructor(e=new Dn,t=new Zv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(r),xl.radius+=s,e.ray.intersectsSphere(xl)===!1)return;Tg.copy(r).invert(),Zf.copy(e.ray).applyMatrix4(Tg);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);yl.fromBufferAttribute(d,m),wg(yl,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,y=p;_<y;_++)yl.fromBufferAttribute(d,_),wg(yl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function wg(n,e,t,i,r,s,a){const o=Zf.distanceSqToPoint(n);if(o<t){const l=new B;Zf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jv extends Kt{constructor(e=[],t=is,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends Kt{constructor(e,t,i=wi,r,s,a,o=zt,l=zt,c,u=Zi,d=1){if(u!==Zi&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class UE extends aa{constructor(e,t=wi,i=is,r,s,a=zt,o=zt,l,c=Zi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qv extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lo extends Dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(d,2));function _(y,m,h,g,v,E,b,w,P,x,R){const N=E/P,L=b/x,O=E/2,X=b/2,$=w/2,U=P+1,W=x+1;let V=0,z=0;const K=new B;for(let Q=0;Q<W;Q++){const ae=Q*L-X;for(let me=0;me<U;me++){const Ge=me*N-O;K[y]=Ge*g,K[m]=ae*v,K[h]=$,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[h]=w>0?1:-1,u.push(K.x,K.y,K.z),d.push(me/P),d.push(1-Q/x),V+=1}}for(let Q=0;Q<x;Q++)for(let ae=0;ae<P;ae++){const me=f+ae+U*Q,Ge=f+ae+U*(Q+1),Ke=f+(ae+1)+U*(Q+1),Ue=f+(ae+1)+U*Q;l.push(me,Ge,Ue),l.push(Ge,Ke,Ue),z+=6}o.addGroup(p,z,R),p+=z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _p extends Dn{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,p=2*d+f,_=i*2+s,y=r+1,m=new B,h=new B;for(let g=0;g<=_;g++){let v=0,E=0,b=0,w=0;if(g<=i){const R=g/i,N=R*Math.PI/2;E=-u-e*Math.cos(N),b=e*Math.sin(N),w=-e*Math.cos(N),v=R*d}else if(g<=i+s){const R=(g-i)/s;E=-u+R*t,b=e,w=0,v=d+R*f}else{const R=(g-i-s)/i,N=R*Math.PI/2;E=u+e*Math.sin(N),b=e*Math.cos(N),w=e*Math.sin(N),v=d+f+R*d}const P=Math.max(0,Math.min(1,v/p));let x=0;g===0?x=.5/r:g===_&&(x=-.5/r);for(let R=0;R<=r;R++){const N=R/r,L=N*Math.PI*2,O=Math.sin(L),X=Math.cos(L);h.x=-b*X,h.y=E,h.z=b*O,o.push(h.x,h.y,h.z),m.set(-b*X,w,b*O),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+x,P)}if(g>0){const R=(g-1)*y;for(let N=0;N<r;N++){const L=R+N,O=R+N+1,X=g*y+N,$=g*y+N+1;a.push(L,O,X),a.push(O,$,X)}}}this.setIndex(a),this.setAttribute("position",new Sn(o,3)),this.setAttribute("normal",new Sn(l,3)),this.setAttribute("uv",new Sn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class jc extends Dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,p=[],_=[],y=[],m=[];for(let h=0;h<u;h++){const g=h*f-a;for(let v=0;v<c;v++){const E=v*d-s;_.push(E,-g,0),y.push(0,0,1),m.push(v/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let g=0;g<o;g++){const v=g+c*h,E=g+c*(h+1),b=g+1+c*(h+1),w=g+1+c*h;p.push(v,E,w),p.push(E,b,w)}this.setIndex(p),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(y,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}function oa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Ag(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Ag(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=oa(n[t]);for(const r in i)e[r]=i[r]}return e}function Ag(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function FE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ex(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const OE={clone:oa,merge:ln};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=FE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zE extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xc extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ri extends Xc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VE extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=RM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Sl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function GE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function bg(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function tx(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class pa{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WE extends pa{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ks,endingEnd:ks}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bs:s=e,o=2*t-i;break;case Sc:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bs:a=e,l=2*i-t;break;case Sc:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),y=_*_,m=y*_,h=-f*m+2*f*y-f*_,g=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,v=(-1-p)*m+(1.5+p)*y+.5*_,E=p*m-p*y;for(let b=0;b!==o;++b)s[b]=h*a[u+b]+g*a[c+b]+v*a[l+b]+E*a[d+b];return s}}class nx extends pa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*d+a[l+f]*u;return s}}class jE extends pa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class XE extends pa{interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){const y=(i-t)/(r-t),m=1-y;for(let h=0;h!==o;++h)s[h]=a[c+h]*m+a[l+h]*y;return s}const p=o*2,_=e-1;for(let y=0;y!==o;++y){const m=a[c+y],h=a[l+y],g=_*p+y*2,v=f[g],E=f[g+1],b=e*p+y*2,w=d[b],P=d[b+1];let x=(i-t)/(r-t),R,N,L,O,X;for(let $=0;$<8;$++){R=x*x,N=R*x,L=1-x,O=L*L,X=O*L;const W=X*t+3*O*x*v+3*L*R*w+N*r-i;if(Math.abs(W)<1e-10)break;const V=3*O*(v-t)+6*L*x*(w-v)+3*R*(r-w);if(Math.abs(V)<1e-10)break;x=x-W/V,x=Math.max(0,Math.min(1,x))}s[y]=X*m+3*O*x*E+3*L*R*P+N*h}return s}}class oi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Sl(t,this.TimeBufferType),this.values=Sl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Sl(e.times,Array),values:Sl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new XE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case bu:t=this.InterpolantFactoryMethodSmooth;break;case Km:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Re("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return bu;case this.InterpolantFactoryMethodBezier:return Km}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(De("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(De("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){De("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){De("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&OM(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){De("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===bu,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){const y=t[d+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const d=o*i,f=a*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=To;class ma extends oi{constructor(e,t,i){super(e,t,i)}}ma.prototype.ValueTypeName="bool";ma.prototype.ValueBufferType=Array;ma.prototype.DefaultInterpolation=Eo;ma.prototype.InterpolantFactoryMethodLinear=void 0;ma.prototype.InterpolantFactoryMethodSmooth=void 0;class ix extends oi{constructor(e,t,i,r){super(e,t,i,r)}}ix.prototype.ValueTypeName="color";class la extends oi{constructor(e,t,i,r){super(e,t,i,r)}}la.prototype.ValueTypeName="number";class qE extends pa{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Wn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class ca extends oi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new qE(this.times,this.values,this.getValueSize(),e)}}ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends oi{constructor(e,t,i){super(e,t,i)}}ga.prototype.ValueTypeName="string";ga.prototype.ValueBufferType=Array;ga.prototype.DefaultInterpolation=Eo;ga.prototype.InterpolantFactoryMethodLinear=void 0;ga.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends oi{constructor(e,t,i,r){super(e,t,i,r)}}ua.prototype.ValueTypeName="vector";class Jf{constructor(e="",t=-1,i=[],r=op){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(YE(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=i.length;s!==a;++s)t.push(oi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=GE(l);l=bg(l,1,u),c=bg(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new la(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(Re("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return De("AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,_,y){if(p.length!==0){const m=[],h=[];tx(p,m,h,_),m.length!==0&&y.push(new d(f,m,h))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let y=0;y<f[_].morphTargets.length;y++)p[f[_].morphTargets[y]]=-1;for(const y in p){const m=[],h=[];for(let g=0;g!==f[_].morphTargets.length;++g){const v=f[_];m.push(v.time),h.push(v.morphTarget===y?1:0)}r.push(new la(".morphTargetInfluence["+y+"]",m,h))}l=p.length*a}else{const p=".bones["+t[d].name+"]";i(ua,p+".position",f,"pos",r),i(ca,p+".quaternion",f,"rot",r),i(ua,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function KE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return la;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return ix;case"quaternion":return ca;case"bool":case"boolean":return ma;case"string":return ga}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function YE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=KE(n.type);if(n.times===void 0){const t=[],i=[];tx(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Rg(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Rg(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Rg(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $E{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZE=new $E;class _a{constructor(e){this.manager=e!==void 0?e:ZE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class JE extends Error{constructor(e,t){super(e),this.response=t}}class rx extends _a{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:i,onError:r});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ui[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let y=0;const m=new ReadableStream({start(h){g();function g(){d.read().then(({done:v,value:E})=>{if(v)h.close();else{y+=E.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let w=0,P=u.length;w<P;w++){const x=u[w];x.onProgress&&x.onProgress(b)}h.enqueue(E),g()}},v=>{h.error(v)})}}});return new Response(m)}else throw new JE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Vi.add(`file:${e}`,c);const u=Ui[e];delete Ui[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ui[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ms=new WeakMap;class QE extends _a{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ms.get(a);d===void 0&&(d=[],Ms.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Ao("img");function l(){u(),t&&t(this);const d=Ms.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Ms.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Vi.remove(`image:${e}`);const f=Ms.get(this)||[];for(let p=0;p<f.length;p++){const _=f[p];_.onError&&_.onError(d)}Ms.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class eT extends _a{constructor(e){super(e)}load(e,t,i,r){const s=new Kt,a=new QE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class qc extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qu=new qe,Cg=new B,Pg=new B;class vp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cg),Pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pg),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===wo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ml=new B,El=new Wn,di=new B;class sx extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,El,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,di.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ml,El,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,El,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new B,Ig=new tt,Lg=new tt;class un extends sx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Ig,Lg),t.subVectors(Lg,Ig)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tT extends vp{constructor(){super(new un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=sa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class nT extends qc{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new tT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class iT extends vp{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class rT extends qc{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Kc extends sx{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sT extends vp{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends qc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new sT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class aT extends qc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class no{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ed=new WeakMap;class oT extends _a{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Re("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Re("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{ed.has(a)===!0?(r&&r(ed.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Vi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),ed.set(l,c),Vi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=-90,Ts=1;class lT extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(Es,Ts,e,t);r.layers=this.layers,this.add(r);const s=new un(Es,Ts,e,t);s.layers=this.layers,this.add(s);const a=new un(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new un(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new un(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new un(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class cT extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uT{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,a=r;s!==a;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,r){Wn.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const a=this._workIndex*s;Wn.multiplyQuaternionsFlat(e,a,e,t,e,i),Wn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,i,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*r}}_lerpAdditive(e,t,i,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*r}}}const xp="\\[\\]\\.:\\/",dT=new RegExp("["+xp+"]","g"),yp="[^"+xp+"]",fT="[^"+xp.replace("\\.","")+"]",hT=/((?:WC+[\/:])*)/.source.replace("WC",yp),pT=/(WCOD+)?/.source.replace("WCOD",fT),mT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yp),gT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yp),_T=new RegExp("^"+hT+pT+mT+gT+"$"),vT=["material","materials","bones","map"];class xT{constructor(e,t,i){const r=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dT,"")}static parseTrackName(e){const t=_T.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);vT.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){De("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){De("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){De("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){De("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;De("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=xT;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yT{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:ks,endingEnd:ks};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings&&Object.assign(l,u.settings),u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=TM,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case AM:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case op:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const a=i===wM;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(i===EM){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Bs,r.endingEnd=Bs):(e?r.endingStart=this.zeroSlopeAtStart?Bs:ks:r.endingStart=Sc,t?r.endingEnd=this.zeroSlopeAtEnd?Bs:ks:r.endingEnd=Sc)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}const ST=new Float32Array(1);class MT extends Lr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==s;++d){const f=r[d],p=f.name;let _=u[p];if(_!==void 0)++_.referenceCount,a[d]=_;else{if(_=a[d],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,p));continue}const y=t&&t._propertyBindings[d].binding.parsedPath;_=new uT(lt.create(i,p,y),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,p),a[d]=_}o[d].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new nx(new Float32Array(2),new Float32Array(2),1,ST),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Jf.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=op),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new yT(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Jf.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class ET{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wp=class wp{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};wp.prototype.isMatrix2=!0;let Ng=wp;function Dg(n,e,t,i){const r=TT(i);switch(t){case zv:return n*e;case ip:return n*e/r.components*r.byteLength;case rp:return n*e/r.components*r.byteLength;case rs:return n*e*2/r.components*r.byteLength;case sp:return n*e*2/r.components*r.byteLength;case Vv:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case ap:return n*e*4/r.components*r.byteLength;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jl:case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(n,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(n,8)*Math.max(e,8)/2;case yf:case Sf:case Ef:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mf:case xc:case wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case kf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case zf:case Vf:case Hf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gf:case Wf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case jf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function TT(n){switch(n){case bn:case Fv:return{byteLength:1,components:1};case So:case Ov:case $i:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case wi:case ep:case Vn:return{byteLength:4,components:1};case kv:case Bv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ax(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function wT(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],y=d[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const y=d[p];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
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
#endif`,RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LT=`#ifdef USE_AOMAP
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
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BT=`#ifdef USE_IRIDESCENCE
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
#endif`,zT=`#ifdef USE_BUMPMAP
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`#define PI 3.141592653589793
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
} // validated`,$T=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZT=`vec3 transformedNormal = objectNormal;
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
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hw=`#ifdef USE_GRADIENTMAP
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
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_w=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,vw=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ew=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Tw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ww=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fw=`#if defined( USE_POINTS_UV )
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
#endif`,Ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`#ifdef USE_MORPHTARGETS
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
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,dA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
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
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bA=`uniform sampler2D t2D;
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`#include <common>
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
}`,NA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DA=`#define DISTANCE
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
}`,UA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`uniform float scale;
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
}`,BA=`uniform vec3 diffuse;
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
}`,zA=`#include <common>
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
}`,VA=`uniform vec3 diffuse;
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
}`,HA=`#define LAMBERT
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
}`,GA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,WA=`#define MATCAP
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
}`,jA=`#define MATCAP
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
}`,XA=`#define NORMAL
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
}`,qA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KA=`#define PHONG
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
}`,YA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$A=`#define STANDARD
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
}`,ZA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,JA=`#define TOON
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
}`,QA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:AT,alphahash_pars_fragment:bT,alphamap_fragment:RT,alphamap_pars_fragment:CT,alphatest_fragment:PT,alphatest_pars_fragment:IT,aomap_fragment:LT,aomap_pars_fragment:NT,batching_pars_vertex:DT,batching_vertex:UT,begin_vertex:FT,beginnormal_vertex:OT,bsdfs:kT,iridescence_fragment:BT,bumpmap_pars_fragment:zT,clipping_planes_fragment:VT,clipping_planes_pars_fragment:HT,clipping_planes_pars_vertex:GT,clipping_planes_vertex:WT,color_fragment:jT,color_pars_fragment:XT,color_pars_vertex:qT,color_vertex:KT,common:YT,cube_uv_reflection_fragment:$T,defaultnormal_vertex:ZT,displacementmap_pars_vertex:JT,displacementmap_vertex:QT,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:rw,envmap_common_pars_fragment:sw,envmap_pars_fragment:aw,envmap_pars_vertex:ow,envmap_physical_pars_fragment:vw,envmap_vertex:lw,fog_vertex:cw,fog_pars_vertex:uw,fog_fragment:dw,fog_pars_fragment:fw,gradientmap_pars_fragment:hw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:_w,lights_toon_fragment:xw,lights_toon_pars_fragment:yw,lights_phong_fragment:Sw,lights_phong_pars_fragment:Mw,lights_physical_fragment:Ew,lights_physical_pars_fragment:Tw,lights_fragment_begin:ww,lights_fragment_maps:Aw,lights_fragment_end:bw,lightprobes_pars_fragment:Rw,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:Pw,logdepthbuf_pars_vertex:Iw,logdepthbuf_vertex:Lw,map_fragment:Nw,map_pars_fragment:Dw,map_particle_fragment:Uw,map_particle_pars_fragment:Fw,metalnessmap_fragment:Ow,metalnessmap_pars_fragment:kw,morphinstance_vertex:Bw,morphcolor_vertex:zw,morphnormal_vertex:Vw,morphtarget_pars_vertex:Hw,morphtarget_vertex:Gw,normal_fragment_begin:Ww,normal_fragment_maps:jw,normal_pars_fragment:Xw,normal_pars_vertex:qw,normal_vertex:Kw,normalmap_pars_fragment:Yw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:Qw,opaque_fragment:eA,packing:tA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:rA,dithering_pars_fragment:sA,roughnessmap_fragment:aA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:cA,shadowmap_vertex:uA,shadowmask_pars_fragment:dA,skinbase_vertex:fA,skinning_pars_vertex:hA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:_A,tonemapping_fragment:vA,tonemapping_pars_fragment:xA,transmission_fragment:yA,transmission_pars_fragment:SA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:TA,worldpos_vertex:wA,background_vert:AA,background_frag:bA,backgroundCube_vert:RA,backgroundCube_frag:CA,cube_vert:PA,cube_frag:IA,depth_vert:LA,depth_frag:NA,distance_vert:DA,distance_frag:UA,equirect_vert:FA,equirect_frag:OA,linedashed_vert:kA,linedashed_frag:BA,meshbasic_vert:zA,meshbasic_frag:VA,meshlambert_vert:HA,meshlambert_frag:GA,meshmatcap_vert:WA,meshmatcap_frag:jA,meshnormal_vert:XA,meshnormal_frag:qA,meshphong_vert:KA,meshphong_frag:YA,meshphysical_vert:$A,meshphysical_frag:ZA,meshtoon_vert:JA,meshtoon_frag:QA,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},ge={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},mi={basic:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Be(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:ln([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:ln([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:ln([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:ln([ge.common,ge.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:ln([ge.lights,ge.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Tl={r:0,b:0,g:0},a1=new qe,ox=new ke;ox.set(-1,0,0,0,1,0,0,0,1);function o1(n,e,t,i,r,s){const a=new Be(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function p(g){let v=g.isScene===!0?g.background:null;if(v&&v.isTexture){const E=g.backgroundBlurriness>0;v=e.get(v,E)}return v}function _(g){let v=!1;const E=p(g);E===null?m(a,o):E&&E.isColor&&(m(E,1),v=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(g,v){const E=p(v);E&&(E.isCubeTexture||E.mapping===Gc)?(c===void 0&&(c=new Mn(new Lo(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:oa(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler(v.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ox),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ct,(u!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Mn(new jc(2,2),new Ai({name:"BackgroundMaterial",uniforms:oa(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,f=n.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,v){g.getRGB(Tl,ex(n)),t.buffers.color.setClear(Tl.r,Tl.g,Tl.b,v,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),o=v,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:_,addToRenderList:y,dispose:h}}function l1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,O,X,$,U){let W=!1;const V=d(L,$,X,O);s!==V&&(s=V,c(s.object)),W=p(L,$,X,U),W&&_(L,$,X,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,E(L,O,X,$),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,O,X,$){const U=$.wireframe===!0;let W=i[O.id];W===void 0&&(W={},i[O.id]=W);const V=L.isInstancedMesh===!0?L.id:0;let z=W[V];z===void 0&&(z={},W[V]=z);let K=z[X.id];K===void 0&&(K={},z[X.id]=K);let Q=K[U];return Q===void 0&&(Q=f(l()),K[U]=Q),Q}function f(L){const O=[],X=[],$=[];for(let U=0;U<t;U++)O[U]=0,X[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:$,object:L,attributes:{},index:null}}function p(L,O,X,$){const U=s.attributes,W=O.attributes;let V=0;const z=X.getAttributes();for(const K in z)if(z[K].location>=0){const ae=U[K];let me=W[K];if(me===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;V++}return s.attributesNum!==V||s.index!==$}function _(L,O,X,$){const U={},W=O.attributes;let V=0;const z=X.getAttributes();for(const K in z)if(z[K].location>=0){let ae=W[K];ae===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),U[K]=me,V++}s.attributes=U,s.attributesNum=V,s.index=$}function y(){const L=s.newAttributes;for(let O=0,X=L.length;O<X;O++)L[O]=0}function m(L){h(L,0)}function h(L,O){const X=s.newAttributes,$=s.enabledAttributes,U=s.attributeDivisors;X[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),U[L]!==O&&(n.vertexAttribDivisor(L,O),U[L]=O)}function g(){const L=s.newAttributes,O=s.enabledAttributes;for(let X=0,$=O.length;X<$;X++)O[X]!==L[X]&&(n.disableVertexAttribArray(X),O[X]=0)}function v(L,O,X,$,U,W,V){V===!0?n.vertexAttribIPointer(L,O,X,U,W):n.vertexAttribPointer(L,O,X,$,U,W)}function E(L,O,X,$){y();const U=$.attributes,W=X.getAttributes(),V=O.defaultAttributeValues;for(const z in W){const K=W[z];if(K.location>=0){let Q=U[z];if(Q===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const ae=Q.normalized,me=Q.itemSize,Ge=e.get(Q);if(Ge===void 0)continue;const Ke=Ge.buffer,Ue=Ge.type,Z=Ge.bytesPerElement,de=Ue===n.INT||Ue===n.UNSIGNED_INT||Q.gpuType===ep;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Le=oe.stride,Fe=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<K.locationSize;Ne++)h(K.location+Ne,oe.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ne=0;Ne<K.locationSize;Ne++)m(K.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let Ne=0;Ne<K.locationSize;Ne++)v(K.location+Ne,me/K.locationSize,Ue,ae,Le*Z,(Fe+me/K.locationSize*Ne)*Z,de)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<K.locationSize;oe++)h(K.location+oe,Q.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<K.locationSize;oe++)m(K.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let oe=0;oe<K.locationSize;oe++)v(K.location+oe,me/K.locationSize,Ue,ae,me*Z,me/K.locationSize*oe*Z,de)}}else if(V!==void 0){const ae=V[z];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(K.location,ae);break;case 3:n.vertexAttrib3fv(K.location,ae);break;case 4:n.vertexAttrib4fv(K.location,ae);break;default:n.vertexAttrib1fv(K.location,ae)}}}}g()}function b(){R();for(const L in i){const O=i[L];for(const X in O){const $=O[X];for(const U in $){const W=$[U];for(const V in W)u(W[V].object),delete W[V];delete $[U]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const X in O){const $=O[X];for(const U in $){const W=$[U];for(const V in W)u(W[V].object),delete W[V];delete $[U]}}delete i[L.id]}function P(L){for(const O in i){const X=i[O];for(const $ in X){const U=X[$];if(U[L.id]===void 0)continue;const W=U[L.id];for(const V in W)u(W[V].object),delete W[V];delete U[L.id]}}}function x(L){for(const O in i){const X=i[O],$=L.isInstancedMesh===!0?L.id:0,U=X[$];if(U!==void 0){for(const W in U){const V=U[W];for(const z in V)u(V[z].object),delete V[z];delete U[W]}delete X[$],Object.keys(X).length===0&&delete i[O]}}}function R(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function c1(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function u1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Hn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==bn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vn&&!x)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:E,maxSamples:b,samples:w}}function d1(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Vr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let E=h.clippingState||null;l.value=E,E=u(_,f,v,p);for(let b=0;b!==v;++b)E[b]=t[b];h.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,_){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,E=p;v!==y;++v,E+=4)a.copy(d[v]).applyMatrix4(g,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const _r=4,Ug=[.125,.215,.35,.446,.526,.582],Gr=20,f1=256,Ua=new Kc,Fg=new Be;let td=null,nd=0,id=0,rd=!1;const h1=new B;class Og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=h1}=s;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:$i,format:Hn,colorSpace:In,depthBuffer:!1},r=kg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p1(s)),this._blurMaterial=g1(s,e,t),this._ggxMaterial=m1(s,e,t)}return r}_compileMaterial(e){const t=new Mn(new Dn,e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Fg),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Lo,new Yr({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let h=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,h=!0):(m.color.copy(Fg),h=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const b=this._cubeSize;ws(r,E*b,v>2?b:0,b,b),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===is||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bg());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-_r?i-_+_r:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,ws(s,m,h,3*y,2*y),r.setRenderTarget(s),r.render(o,Ua),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ws(e,m,h,3*y,2*y),r.setRenderTarget(e),r.render(o,Ua)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):Gr;m>Gr&&Re(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const h=[];let g=0;for(let P=0;P<Gr;++P){const x=P/y,R=Math.exp(-x*x/2);h.push(R),P===0?g+=R:P<m&&(g+=2*R)}for(let P=0;P<h.length;P++)h[P]=h[P]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const E=this._sizeLods[r],b=3*E*(r>v-_r?r-v+_r:0),w=4*(this._cubeSize-E);ws(t,b,w,3*E,2*E),l.setRenderTarget(t),l.render(d,Ua)}}function p1(n){const e=[],t=[],i=[];let r=n;const s=n-_r+1+Ug.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-_r?l=Ug[a-n+_r-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,y=3,m=2,h=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let w=0;w<p;w++){const P=w%3*2/3-1,x=w>2?0:-1,R=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];g.set(R,y*_*w),v.set(f,m*_*w);const N=[w,w,w,w,w,w];E.set(N,h*_*w)}const b=new Dn;b.setAttribute("position",new fn(g,y)),b.setAttribute("uv",new fn(v,m)),b.setAttribute("faceIndex",new fn(E,h)),i.push(new Mn(b,null)),r>_r&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function kg(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function m1(n,e,t){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:f1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function g1(n,e,t){const i=new Float32Array(Gr),r=new B(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Bg(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function zg(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}class lx extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lo(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Gi});s.uniforms.tEquirect.value=t;const a=new Mn(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Vt),new lT(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function _1(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===wu||p===Au)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const y=new lx(_.height);return y.fromEquirectangularTexture(n,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,_=p===wu||p===Au,y=p===is||p===ia;if(_||y){let m=t.get(f);const h=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Og(n)),m=_?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{const g=f.image;return _&&g&&g.height>0||y&&g&&l(g)?(i===null&&(i=new Og(n)),m=_?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,p){return p===wu?f.mapping=is:p===Au&&(f.mapping=ia),f}function l(f){let p=0;const _=6;for(let y=0;y<_;y++)f[y]!==void 0&&p++;return p===_}function c(f){const p=f.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function v1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Yf("WebGLRenderer: "+i+" extension not supported."),r}}}function x1(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,_=d.attributes.position;let y=0;if(_===void 0)return;if(p!==null){const g=p.array;y=p.version;for(let v=0,E=g.length;v<E;v+=3){const b=g[v+0],w=g[v+1],P=g[v+2];f.push(b,w,w,P,P,b)}}else{const g=_.array;y=_.version;for(let v=0,E=g.length/3-1;v<E;v+=3){const b=v+0,w=v+1,P=v+2;f.push(b,w,w,P,P,b)}}const m=new(_.count>=65535?Kv:qv)(f,1);m.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function y1(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*a,p),t.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function S1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:De("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function M1(n,e,t){const i=new WeakMap,r=new _t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var p=N;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let b=o.attributes.position.count*E,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*w*4*d),x=new Wv(P,b,w,d);x.type=Vn,x.needsUpdate=!0;const R=E*4;for(let L=0;L<d;L++){const O=h[L],X=g[L],$=v[L],U=b*w*4*L;for(let W=0;W<O.count;W++){const V=W*R;_===!0&&(r.fromBufferAttribute(O,W),P[U+V+0]=r.x,P[U+V+1]=r.y,P[U+V+2]=r.z,P[U+V+3]=0),y===!0&&(r.fromBufferAttribute(X,W),P[U+V+4]=r.x,P[U+V+5]=r.y,P[U+V+6]=r.z,P[U+V+7]=0),m===!0&&(r.fromBufferAttribute($,W),P[U+V+8]=r.x,P[U+V+9]=r.y,P[U+V+10]=r.z,P[U+V+11]=$.itemSize===4?r.w:1)}}f={count:d,texture:x,size:new tt(b,w)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function E1(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const T1={[bv]:"LINEAR_TONE_MAPPING",[Rv]:"REINHARD_TONE_MAPPING",[Cv]:"CINEON_TONE_MAPPING",[Pv]:"ACES_FILMIC_TONE_MAPPING",[Lv]:"AGX_TONE_MAPPING",[Nv]:"NEUTRAL_TONE_MAPPING",[Iv]:"CUSTOM_TONE_MAPPING"};function w1(n,e,t,i,r){const s=new Ei(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new aa(e,t):void 0}),a=new Ei(e,t,{type:$i,depthBuffer:!1,stencilBuffer:!1}),o=new Dn;o.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const l=new zE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(o,l),u=new Kc(-1,1,1,-1,0,1);let d=null,f=null,p=!1,_,y=null,m=[],h=!1;this.setSize=function(g,v){s.setSize(g,v),a.setSize(g,v);for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(g,v)}},this.setEffects=function(g){m=g,h=m.length>0&&m[0].isRenderPass===!0;const v=s.width,E=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(v,E)}},this.begin=function(g,v){if(p||g.toneMapping===Mi&&m.length===0)return!1;if(y=v,v!==null){const E=v.width,b=v.height;(s.width!==E||s.height!==b)&&this.setSize(E,b)}return h===!1&&g.setRenderTarget(s),_=g.toneMapping,g.toneMapping=Mi,!0},this.hasRenderPass=function(){return h},this.end=function(g,v){g.toneMapping=_,p=!0;let E=s,b=a;for(let w=0;w<m.length;w++){const P=m[w];if(P.enabled!==!1&&(P.render(g,b,E,v),P.needsSwap!==!1)){const x=E;E=b,b=x}}if(d!==g.outputColorSpace||f!==g.toneMapping){d=g.outputColorSpace,f=g.toneMapping,l.defines={},Ze.getTransfer(d)===ct&&(l.defines.SRGB_TRANSFER="");const w=T1[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(y),g.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const cx=new Kt,eh=new aa(1,1),ux=new Wv,dx=new cE,fx=new Jv,Vg=[],Hg=[],Gg=new Float32Array(16),Wg=new Float32Array(9),jg=new Float32Array(4);function va(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Vg[r];if(s===void 0&&(s=new Float32Array(r),Vg[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=Hg[e];t===void 0&&(t=new Int32Array(e),Hg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function b1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function C1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function P1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;jg.set(i),n.uniformMatrix2fv(this.addr,!1,jg),Gt(t,i)}}function I1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Wg.set(i),n.uniformMatrix3fv(this.addr,!1,Wg),Gt(t,i)}}function L1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,i))return;Gg.set(i),n.uniformMatrix4fv(this.addr,!1,Gg),Gt(t,i)}}function N1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function O1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function B1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function V1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eh.compareFunction=t.isReversedDepthBuffer()?cp:lp,s=eh):s=cx,t.setTexture2D(e||s,r)}function H1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dx,r)}function G1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fx,r)}function W1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ux,r)}function j1(n){switch(n){case 5126:return A1;case 35664:return b1;case 35665:return R1;case 35666:return C1;case 35674:return P1;case 35675:return I1;case 35676:return L1;case 5124:case 35670:return N1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return O1;case 36294:return k1;case 36295:return B1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return G1;case 36289:case 36303:case 36311:case 36292:return W1}}function X1(n,e){n.uniform1fv(this.addr,e)}function q1(n,e){const t=va(e,this.size,2);n.uniform2fv(this.addr,t)}function K1(n,e){const t=va(e,this.size,3);n.uniform3fv(this.addr,t)}function Y1(n,e){const t=va(e,this.size,4);n.uniform4fv(this.addr,t)}function $1(n,e){const t=va(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z1(n,e){const t=va(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J1(n,e){const t=va(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q1(n,e){n.uniform1iv(this.addr,e)}function eb(n,e){n.uniform2iv(this.addr,e)}function tb(n,e){n.uniform3iv(this.addr,e)}function nb(n,e){n.uniform4iv(this.addr,e)}function ib(n,e){n.uniform1uiv(this.addr,e)}function rb(n,e){n.uniform2uiv(this.addr,e)}function sb(n,e){n.uniform3uiv(this.addr,e)}function ab(n,e){n.uniform4uiv(this.addr,e)}function ob(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=eh:a=cx;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function lb(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||dx,s[a])}function cb(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||fx,s[a])}function ub(n,e,t){const i=this.cache,r=e.length,s=$c(t,r);Ht(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ux,s[a])}function db(n){switch(n){case 5126:return X1;case 35664:return q1;case 35665:return K1;case 35666:return Y1;case 35674:return $1;case 35675:return Z1;case 35676:return J1;case 5124:case 35670:return Q1;case 35667:case 35671:return eb;case 35668:case 35672:return tb;case 35669:case 35673:return nb;case 5125:return ib;case 36294:return rb;case 36295:return sb;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return lb;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return ub}}class fb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=j1(t.type)}}class hb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=db(t.type)}}class pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Xg(n,e){n.seq.push(e),n.map[e.id]=e}function mb(n,e,t){const i=n.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),a=sd.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Xg(t,c===void 0?new fb(o,n,e):new hb(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new pb(o),Xg(t,d)),t=d}}}class ql{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function qg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gb=37297;let _b=0;function vb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Kg=new ke;function xb(n){Ze._getMatrix(Kg,Ze.workingColorSpace,n);const e=`mat3( ${Kg.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Mc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+vb(n.getShaderSource(e),o)}else return s}function yb(n,e){const t=xb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Sb={[bv]:"Linear",[Rv]:"Reinhard",[Cv]:"Cineon",[Pv]:"ACESFilmic",[Lv]:"AgX",[Nv]:"Neutral",[Iv]:"Custom"};function Mb(n,e){const t=Sb[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wl=new B;function Eb(){Ze.getLuminanceCoefficients(wl);const n=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function wb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ab(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Wa(n){return n!==""}function $g(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(n){return n.replace(bb,Cb)}const Rb=new Map;function Cb(n,e){let t=We[e];if(t===void 0){const i=Rb.get(e);if(i!==void 0)t=We[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jg(n){return n.replace(Pb,Ib)}function Ib(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lb={[Vl]:"SHADOWMAP_TYPE_PCF",[Ha]:"SHADOWMAP_TYPE_VSM"};function Nb(n){return Lb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Db={[is]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function Ub(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Db[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Fb={[ia]:"ENVMAP_MODE_REFRACTION"};function Ob(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Fb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kb={[Av]:"ENVMAP_BLENDING_MULTIPLY",[yM]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function Bb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kb[n.combine]||"ENVMAP_BLENDING_NONE"}function zb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Vb(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Nb(t),c=Ub(t),u=Ob(t),d=Bb(t),f=zb(t),p=Tb(t),_=wb(s),y=r.createProgram();let m,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wa).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wa).join(`
`),h.length>0&&(h+=`
`)):(m=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),h=[Qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?We.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,yb("linearToOutputTexel",t.outputColorSpace),Eb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),a=th(a),a=$g(a,t),a=Zg(a,t),o=th(o),o=$g(o,t),o=Zg(o,t),a=Jg(a),o=Jg(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=g+m+a,E=g+h+o,b=qg(r,r.VERTEX_SHADER,v),w=qg(r,r.FRAGMENT_SHADER,E);r.attachShader(y,b),r.attachShader(y,w),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(L){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",X=r.getShaderInfoLog(b)||"",$=r.getShaderInfoLog(w)||"",U=O.trim(),W=X.trim(),V=$.trim();let z=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,b,w);else{const Q=Yg(r,b,"vertex"),ae=Yg(r,w,"fragment");De("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+Q+`
`+ae)}else U!==""?Re("WebGLProgram: Program Info Log:",U):(W===""||V==="")&&(K=!1);K&&(L.diagnostics={runnable:z,programLog:U,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(b),r.deleteShader(w),x=new ql(r,y),R=Ab(r,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(y,gb)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_b++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}let Hb=0;class Gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Wb(e),t.set(e,i)),i}}class Wb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function jb(n){return n===rs||n===xc||n===yc}function Xb(n,e,t,i,r,s){const a=new jv,o=new Gb,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,R,N,L,O,X){const $=L.fog,U=O.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||W,V),K=z&&z.mapping===Gc?z.image.height:null,Q=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Re("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,me=ae!==void 0?ae.length:0;let Ge=0;U.morphAttributes.position!==void 0&&(Ge=1),U.morphAttributes.normal!==void 0&&(Ge=2),U.morphAttributes.color!==void 0&&(Ge=3);let Ke,Ue,Z,de;if(Q){const ze=mi[Q];Ke=ze.vertexShader,Ue=ze.fragmentShader}else Ke=x.vertexShader,Ue=x.fragmentShader,o.update(x),Z=o.getVertexShaderID(x),de=o.getFragmentShaderID(x);const oe=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,yt=!!x.map,Ye=!!x.matcap,ot=!!z,pt=!!x.aoMap,je=!!x.lightMap,at=!!x.bumpMap,St=!!x.normalMap,C=!!x.displacementMap,M=!!x.emissiveMap,re=!!x.metalnessMap,ye=!!x.roughnessMap,Ae=x.anisotropy>0,te=x.clearcoat>0,nt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,k=x.transmission>0,q=Ae&&!!x.anisotropyMap,ne=te&&!!x.clearcoatMap,le=te&&!!x.clearcoatNormalMap,pe=te&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,ee=A&&!!x.iridescenceThicknessMap,xe=S&&!!x.sheenColorMap,Ee=S&&!!x.sheenRoughnessMap,fe=!!x.specularMap,ce=!!x.specularColorMap,Oe=!!x.specularIntensityMap,He=k&&!!x.transmissionMap,st=k&&!!x.thicknessMap,D=!!x.gradientMap,ue=!!x.alphaMap,J=x.alphaTest>0,Se=!!x.alphaHash,he=!!x.extensions;let ie=Mi;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ce={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Ue,defines:x.defines,customVertexShaderID:Z,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:yt,matcap:Ye,envMap:ot,envMapMode:ot&&z.mapping,envMapCubeUVHeight:K,aoMap:pt,lightMap:je,bumpMap:at,normalMap:St,displacementMap:C,emissiveMap:M,normalMapObjectSpace:St&&x.normalMapType===CM,normalMapTangentSpace:St&&x.normalMapType===qf,packedNormalMap:St&&x.normalMapType===qf&&jb(x.normalMap.format),metalnessMap:re,roughnessMap:ye,anisotropy:Ae,anisotropyMap:q,clearcoat:te,clearcoatMap:ne,clearcoatNormalMap:le,clearcoatRoughnessMap:pe,dispersion:nt,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:ee,sheen:S,sheenColorMap:xe,sheenRoughnessMap:Ee,specularMap:fe,specularColorMap:ce,specularIntensityMap:Oe,transmission:k,transmissionMap:He,thicknessMap:st,gradientMap:D,opaque:x.transparent===!1&&x.blending===Xs&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:Se,combine:x.combine,mapUv:yt&&_(x.map.channel),aoMapUv:pt&&_(x.aoMap.channel),lightMapUv:je&&_(x.lightMap.channel),bumpMapUv:at&&_(x.bumpMap.channel),normalMapUv:St&&_(x.normalMap.channel),displacementMapUv:C&&_(x.displacementMap.channel),emissiveMapUv:M&&_(x.emissiveMap.channel),metalnessMapUv:re&&_(x.metalnessMap.channel),roughnessMapUv:ye&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:ne&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(x.sheenRoughnessMap.channel),specularMapUv:fe&&_(x.specularMap.channel),specularColorMapUv:ce&&_(x.specularColorMap.channel),specularIntensityMapUv:Oe&&_(x.specularIntensityMap.channel),transmissionMapUv:He&&_(x.transmissionMap.channel),thicknessMapUv:st&&_(x.thicknessMap.channel),alphaMapUv:ue&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(St||Ae),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!U.attributes.uv&&(yt||ue),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Le,skinning:O.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ge,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:yt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:M&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)R.push(N),R.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(h(R,x),g(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function h(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function g(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function v(x){const R=p[x.type];let N;if(R){const L=mi[R];N=OE.clone(L.uniforms)}else N=x.uniforms;return N}function E(x,R){let N=u.get(R);return N!==void 0?++N.usedTimes:(N=new Vb(n,R,x,r),c.push(N),u.set(R,N)),N}function b(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function P(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:P}}function qb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Kb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function e_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function t_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,y,m,h){let g=n[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:h},n[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=_,g.materialVariant=a(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=m,g.group=h),e++,g}function l(f,p,_,y,m,h){const g=o(f,p,_,y,m,h);_.transmission>0?i.push(g):_.transparent===!0?r.push(g):t.push(g)}function c(f,p,_,y,m,h){const g=o(f,p,_,y,m,h);_.transmission>0?i.unshift(g):_.transparent===!0?r.unshift(g):t.unshift(g)}function u(f,p){t.length>1&&t.sort(f||Kb),i.length>1&&i.sort(p||e_),r.length>1&&r.sort(p||e_)}function d(){for(let f=e,p=n.length;f<p;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Yb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new t_,n.set(i,[a])):r>=s.length?(a=new t_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function $b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Be};break;case"SpotLight":t={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Zb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Jb=0;function Qb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function eR(n){const e=new $b,t=Zb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new qe,a=new qe;function o(c){let u=0,d=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,_=0,y=0,m=0,h=0,g=0,v=0,E=0,b=0,w=0,P=0;c.sort(Qb);for(let R=0,N=c.length;R<N;R++){const L=c[R],O=L.color,X=L.intensity,$=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===rs?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*X,d+=O.g*X,f+=O.b*X;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],X);P++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=U,i.directionalShadowMatrix[p]=L.shadow.matrix,g++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(X),W.distance=$,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[y]=W;const V=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,V.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=V.matrix,L.castShadow){const z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=U,E++}y++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(O).multiplyScalar(X),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const V=L.shadow,z=t.get(L);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=L.shadow.matrix,v++}i.point[_]=W,_++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(X),W.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[h]=W,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==h||x.numDirectionalShadows!==g||x.numPointShadows!==v||x.numSpotShadows!==E||x.numSpotMaps!==b||x.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,x.directionalLength=p,x.pointLength=_,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=h,x.numDirectionalShadows=g,x.numPointShadows=v,x.numSpotShadows=E,x.numSpotMaps=b,x.numLightProbes=P,i.version=Jb++)}function l(c,u){let d=0,f=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let h=0,g=c.length;h<g;h++){const v=c[h];if(v.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function n_(n){const e=new eR(n),t=[],i=[],r=[];function s(f){d.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const d={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function tR(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new n_(n),e.set(r,[o])):s>=a.length?(o=new n_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rR=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],sR=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],i_=new qe,Fa=new B,ad=new B;function aR(n,e,t){let i=new mp;const r=new tt,s=new tt,a=new _t,o=new VE,l=new HE,c={},u=t.maxTextureSize,d={[Yi]:yn,[yn]:Yi,[_i]:_i},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Dn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let h=this.type;this.render=function(w,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===tM&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vl);const R=n.getRenderTarget(),N=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=h!==this.type;X&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(U=>U.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,U=w.length;$<U;$++){const W=w[$],V=W.shadow;if(V===void 0){Re("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const z=V.getFrameExtents();r.multiply(z),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/z.x),r.x=s.x*z.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/z.y),r.y=s.y*z.y,V.mapSize.y=s.y));const K=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||X===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ha){if(W.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ei(r.x,r.y,{format:rs,type:$i,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new aa(r.x,r.y,Vn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=Zi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt}else W.isPointLight?(V.map=new lx(r.x),V.map.depthTexture=new UE(r.x,wi)):(V.map=new Ei(r.x,r.y),V.map.depthTexture=new aa(r.x,r.y,wi)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=Zi,this.type===Vl?(V.map.depthTexture.compareFunction=K?cp:lp,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt);V.camera.updateProjectionMatrix()}const Q=V.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Q;ae++){if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(V.map),n.clear());const me=V.getViewport(ae);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),O.viewport(a)}if(W.isPointLight){const me=V.camera,Ge=V.matrix,Ke=W.distance||me.far;Ke!==me.far&&(me.far=Ke,me.updateProjectionMatrix()),Fa.setFromMatrixPosition(W.matrixWorld),me.position.copy(Fa),ad.copy(me.position),ad.add(rR[ae]),me.up.copy(sR[ae]),me.lookAt(ad),me.updateMatrixWorld(),Ge.makeTranslation(-Fa.x,-Fa.y,-Fa.z),i_.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(i_,me.coordinateSystem,me.reversedDepth)}else V.updateMatrices(W);i=V.getFrustum(),E(P,x,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Ha&&g(V,x),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(R,N,L)};function g(w,P){const x=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ei(r.x,r.y,{format:rs,type:$i})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(P,null,x,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(P,null,x,p,y,null)}function v(w,P,x,R){let N=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=N.uuid,X=P.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let U=$[X];U===void 0&&(U=N.clone(),$[X]=U,P.addEventListener("dispose",b)),N=U}if(N.visible=P.visible,N.wireframe=P.wireframe,R===Ha?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:d[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const O=n.properties.get(N);O.light=x}return N}function E(w,P,x,R,N){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Ha)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const X=e.update(w),$=w.material;if(Array.isArray($)){const U=X.groups;for(let W=0,V=U.length;W<V;W++){const z=U[W],K=$[z.materialIndex];if(K&&K.visible){const Q=v(w,K,R,N);w.onBeforeShadow(n,w,P,x,X,Q,z),n.renderBufferDirect(x,null,X,Q,w,z),w.onAfterShadow(n,w,P,x,X,Q,z)}}}else if($.visible){const U=v(w,$,R,N);w.onBeforeShadow(n,w,P,x,X,U,null),n.renderBufferDirect(x,null,X,U,w,null),w.onAfterShadow(n,w,P,x,X,U,null)}}const O=w.children;for(let X=0,$=O.length;X<$;X++)E(O[X],P,x,R,N)}function b(w){w.target.removeEventListener("dispose",b);for(const x in c){const R=c[x],N=w.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function oR(n,e){function t(){let D=!1;const ue=new _t;let J=null;const Se=new _t(0,0,0,0);return{setMask:function(he){J!==he&&!D&&(n.colorMask(he,he,he,he),J=he)},setLocked:function(he){D=he},setClear:function(he,ie,Ce,ze,It){It===!0&&(he*=ze,ie*=ze,Ce*=ze),ue.set(he,ie,Ce,ze),Se.equals(ue)===!1&&(n.clearColor(he,ie,Ce,ze),Se.copy(ue))},reset:function(){D=!1,J=null,Se.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,J=null,Se=null,he=null;return{setReversed:function(ie){if(ue!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const ze=he;he=null,this.setClear(ze)}},getReversed:function(){return ue},setTest:function(ie){ie?oe(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ie){J!==ie&&!D&&(n.depthMask(ie),J=ie)},setFunc:function(ie){if(ue&&(ie=zM[ie]),Se!==ie){switch(ie){case cf:n.depthFunc(n.NEVER);break;case uf:n.depthFunc(n.ALWAYS);break;case df:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case ff:n.depthFunc(n.EQUAL);break;case hf:n.depthFunc(n.GEQUAL);break;case pf:n.depthFunc(n.GREATER);break;case mf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ie}},setLocked:function(ie){D=ie},setClear:function(ie){he!==ie&&(he=ie,ue&&(ie=1-ie),n.clearDepth(ie))},reset:function(){D=!1,J=null,Se=null,he=null,ue=!1}}}function r(){let D=!1,ue=null,J=null,Se=null,he=null,ie=null,Ce=null,ze=null,It=null;return{setTest:function(ft){D||(ft?oe(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ft){ue!==ft&&!D&&(n.stencilMask(ft),ue=ft)},setFunc:function(ft,Ci,li){(J!==ft||Se!==Ci||he!==li)&&(n.stencilFunc(ft,Ci,li),J=ft,Se=Ci,he=li)},setOp:function(ft,Ci,li){(ie!==ft||Ce!==Ci||ze!==li)&&(n.stencilOp(ft,Ci,li),ie=ft,Ce=Ci,ze=li)},setLocked:function(ft){D=ft},setClear:function(ft){It!==ft&&(n.clearStencil(ft),It=ft)},reset:function(){D=!1,ue=null,J=null,Se=null,he=null,ie=null,Ce=null,ze=null,It=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,_=[],y=null,m=!1,h=null,g=null,v=null,E=null,b=null,w=null,P=null,x=new Be(0,0,0),R=0,N=!1,L=null,O=null,X=null,$=null,U=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=z>=2);let Q=null,ae={};const me=n.getParameter(n.SCISSOR_BOX),Ge=n.getParameter(n.VIEWPORT),Ke=new _t().fromArray(me),Ue=new _t().fromArray(Ge);function Z(D,ue,J,Se){const he=new Uint8Array(4),ie=n.createTexture();n.bindTexture(D,ie),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<J;Ce++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ue+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return ie}const de={};de[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(n.DEPTH_TEST),a.setFunc(na),at(!1),St(Gm),oe(n.CULL_FACE),pt(Gi);function oe(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function Le(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Fe(D,ue){return f[D]!==ue?(n.bindFramebuffer(D,ue),f[D]=ue,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ue),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ne(D,ue){let J=_,Se=!1;if(D){J=p.get(ue),J===void 0&&(J=[],p.set(ue,J));const he=D.textures;if(J.length!==he.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,Ce=he.length;ie<Ce;ie++)J[ie]=n.COLOR_ATTACHMENT0+ie;J.length=he.length,Se=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,Se=!0);Se&&n.drawBuffers(J)}function yt(D){return y!==D?(n.useProgram(D),y=D,!0):!1}const Ye={[Hr]:n.FUNC_ADD,[iM]:n.FUNC_SUBTRACT,[rM]:n.FUNC_REVERSE_SUBTRACT};Ye[sM]=n.MIN,Ye[aM]=n.MAX;const ot={[oM]:n.ZERO,[lM]:n.ONE,[cM]:n.SRC_COLOR,[of]:n.SRC_ALPHA,[mM]:n.SRC_ALPHA_SATURATE,[hM]:n.DST_COLOR,[dM]:n.DST_ALPHA,[uM]:n.ONE_MINUS_SRC_COLOR,[lf]:n.ONE_MINUS_SRC_ALPHA,[pM]:n.ONE_MINUS_DST_COLOR,[fM]:n.ONE_MINUS_DST_ALPHA,[gM]:n.CONSTANT_COLOR,[_M]:n.ONE_MINUS_CONSTANT_COLOR,[vM]:n.CONSTANT_ALPHA,[xM]:n.ONE_MINUS_CONSTANT_ALPHA};function pt(D,ue,J,Se,he,ie,Ce,ze,It,ft){if(D===Gi){m===!0&&(Le(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),D!==nM){if(D!==h||ft!==N){if((g!==Hr||b!==Hr)&&(n.blendEquation(n.FUNC_ADD),g=Hr,b=Hr),ft)switch(D){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wm:n.blendFunc(n.ONE,n.ONE);break;case jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",D);break}else switch(D){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jm:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",D);break}v=null,E=null,w=null,P=null,x.set(0,0,0),R=0,h=D,N=ft}return}he=he||ue,ie=ie||J,Ce=Ce||Se,(ue!==g||he!==b)&&(n.blendEquationSeparate(Ye[ue],Ye[he]),g=ue,b=he),(J!==v||Se!==E||ie!==w||Ce!==P)&&(n.blendFuncSeparate(ot[J],ot[Se],ot[ie],ot[Ce]),v=J,E=Se,w=ie,P=Ce),(ze.equals(x)===!1||It!==R)&&(n.blendColor(ze.r,ze.g,ze.b,It),x.copy(ze),R=It),h=D,N=!1}function je(D,ue){D.side===_i?Le(n.CULL_FACE):oe(n.CULL_FACE);let J=D.side===yn;ue&&(J=!J),at(J),D.blending===Xs&&D.transparent===!1?pt(Gi):pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const Se=D.stencilWrite;o.setTest(Se),Se&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),M(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function St(D){D!==QS?(oe(n.CULL_FACE),D!==O&&(D===Gm?n.cullFace(n.BACK):D===eM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),O=D}function C(D){D!==X&&(V&&n.lineWidth(D),X=D)}function M(D,ue,J){D?(oe(n.POLYGON_OFFSET_FILL),($!==ue||U!==J)&&($=ue,U=J,a.getReversed()&&(ue=-ue),n.polygonOffset(ue,J))):Le(n.POLYGON_OFFSET_FILL)}function re(D){D?oe(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function ye(D){D===void 0&&(D=n.TEXTURE0+W-1),Q!==D&&(n.activeTexture(D),Q=D)}function Ae(D,ue,J){J===void 0&&(Q===null?J=n.TEXTURE0+W-1:J=Q);let Se=ae[J];Se===void 0&&(Se={type:void 0,texture:void 0},ae[J]=Se),(Se.type!==D||Se.texture!==ue)&&(Q!==J&&(n.activeTexture(J),Q=J),n.bindTexture(D,ue||de[D]),Se.type=D,Se.texture=ue)}function te(){const D=ae[Q];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function S(){try{n.texSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function k(){try{n.texSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function le(){try{n.texStorage2D(...arguments)}catch(D){De("WebGLState:",D)}}function pe(){try{n.texStorage3D(...arguments)}catch(D){De("WebGLState:",D)}}function Y(){try{n.texImage2D(...arguments)}catch(D){De("WebGLState:",D)}}function ee(){try{n.texImage3D(...arguments)}catch(D){De("WebGLState:",D)}}function xe(D){return d[D]!==void 0?d[D]:n.getParameter(D)}function Ee(D,ue){d[D]!==ue&&(n.pixelStorei(D,ue),d[D]=ue)}function fe(D){Ke.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ke.copy(D))}function ce(D){Ue.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ue.copy(D))}function Oe(D,ue){let J=c.get(ue);J===void 0&&(J=new WeakMap,c.set(ue,J));let Se=J.get(D);Se===void 0&&(Se=n.getUniformBlockIndex(ue,D.name),J.set(D,Se))}function He(D,ue){const Se=c.get(ue).get(D);l.get(ue)!==Se&&(n.uniformBlockBinding(ue,Se,D.__bindingPointIndex),l.set(ue,Se))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,ae={},f={},p=new WeakMap,_=[],y=null,m=!1,h=null,g=null,v=null,E=null,b=null,w=null,P=null,x=new Be(0,0,0),R=0,N=!1,L=null,O=null,X=null,$=null,U=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Le,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:yt,setBlending:pt,setMaterial:je,setFlipSided:at,setCullFace:St,setLineWidth:C,setPolygonOffset:M,setScissorTest:re,activeTexture:ye,bindTexture:Ae,unbindTexture:te,compressedTexImage2D:nt,compressedTexImage3D:A,texImage2D:Y,texImage3D:ee,pixelStorei:Ee,getParameter:xe,updateUBOMapping:Oe,uniformBlockBinding:He,texStorage2D:le,texStorage3D:pe,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:q,compressedTexSubImage3D:ne,scissor:fe,viewport:ce,reset:st}}function lR(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return _?new OffscreenCanvas(A,S):Ao("canvas")}function m(A,S,k){let q=1;const ne=nt(A);if((ne.width>k||ne.height>k)&&(q=k/Math.max(ne.width,ne.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const le=Math.floor(q*ne.width),pe=Math.floor(q*ne.height);f===void 0&&(f=y(le,pe));const Y=S?y(le,pe):f;return Y.width=le,Y.height=pe,Y.getContext("2d").drawImage(A,0,0,le,pe),Re("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+pe+")."),Y}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function h(A){return A.generateMipmaps}function g(A){n.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,S,k,q,ne,le=!1){if(A!==null){if(n[A]!==void 0)return n[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8),k===n.UNSIGNED_SHORT&&pe&&(Y=pe.R16_EXT),k===n.SHORT&&pe&&(Y=pe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),S===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8),k===n.UNSIGNED_SHORT&&pe&&(Y=pe.RG16_EXT),k===n.SHORT&&pe&&(Y=pe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&(k===n.UNSIGNED_SHORT&&pe&&(Y=pe.RGB16_EXT),k===n.SHORT&&pe&&(Y=pe.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),S===n.RGBA){const ee=le?Mc:Ze.getTransfer(ne);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=ee===ct?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&pe&&(Y=pe.RGBA16_EXT),k===n.SHORT&&pe&&(Y=pe.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(A,S){let k;return A?S===null||S===wi||S===Mo?k=n.DEPTH24_STENCIL8:S===Vn?k=n.DEPTH32F_STENCIL8:S===So&&(k=n.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===Mo?k=n.DEPTH_COMPONENT24:S===Vn?k=n.DEPTH_COMPONENT32F:S===So&&(k=n.DEPTH_COMPONENT16),k}function w(A,S){return h(A)===!0||A.isFramebufferTexture&&A.minFilter!==zt&&A.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){const S=A.target;S.removeEventListener("dispose",P),R(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),L(S)}function R(A){const S=i.get(A);if(S.__webglInit===void 0)return;const k=A.source,q=p.get(k);if(q){const ne=q[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(A),Object.keys(q).length===0&&p.delete(k)}i.remove(A)}function N(A){const S=i.get(A);n.deleteTexture(S.__webglTexture);const k=A.source,q=p.get(k);delete q[S.__cacheKey],a.memory.textures--}function L(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let ne=0;ne<S.__webglFramebuffer[q].length;ne++)n.deleteFramebuffer(S.__webglFramebuffer[q][ne]);else n.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)n.deleteFramebuffer(S.__webglFramebuffer[q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let q=0,ne=k.length;q<ne;q++){const le=i.get(k[q]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(k[q])}i.remove(A)}let O=0;function X(){O=0}function $(){return O}function U(A){O=A}function W(){const A=O;return A>=r.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function V(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function z(A,S){const k=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const q=A.image;if(q===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(k,A,S);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function K(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Le(k,A,S);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function Q(A,S){const k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Le(k,A,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function ae(A,S){const k=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&k.__version!==A.version){Fe(k,A,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const me={[ra]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},Ge={[zt]:n.NEAREST,[Uv]:n.NEAREST_MIPMAP_NEAREST,[Ga]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Ke={[PM]:n.NEVER,[UM]:n.ALWAYS,[IM]:n.LESS,[lp]:n.LEQUAL,[LM]:n.EQUAL,[cp]:n.GEQUAL,[NM]:n.GREATER,[DM]:n.NOTEQUAL};function Ue(A,S){if(S.type===Vn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vt||S.magFilter===Hl||S.magFilter===Ga||S.magFilter===zi||S.minFilter===Vt||S.minFilter===Hl||S.minFilter===Ga||S.minFilter===zi)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,me[S.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,me[S.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,me[S.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ge[S.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ge[S.minFilter]),S.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ke[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==Ga&&S.minFilter!==zi||S.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Z(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",P));const q=S.source;let ne=p.get(q);ne===void 0&&(ne={},p.set(q,ne));const le=V(S);if(le!==A.__cacheKey){ne[le]===void 0&&(ne[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ne[le].usedTimes++;const pe=ne[A.__cacheKey];pe!==void 0&&(ne[A.__cacheKey].usedTimes--,pe.usedTimes===0&&N(S)),A.__cacheKey=le,A.__webglTexture=ne[le].texture}return k}function de(A,S,k){return Math.floor(Math.floor(A/k)/S)}function oe(A,S,k,q){const le=A.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,k,q,S.data);else{le.sort((Ee,fe)=>Ee.start-fe.start);let pe=0;for(let Ee=1;Ee<le.length;Ee++){const fe=le[pe],ce=le[Ee],Oe=fe.start+fe.count,He=de(ce.start,S.width,4),st=de(fe.start,S.width,4);ce.start<=Oe+1&&He===st&&de(ce.start+ce.count-1,S.width,4)===He?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++pe,le[pe]=ce)}le.length=pe+1;const Y=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),xe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Ee=0,fe=le.length;Ee<fe;Ee++){const ce=le[Ee],Oe=Math.floor(ce.start/4),He=Math.ceil(ce.count/4),st=Oe%S.width,D=Math.floor(Oe/S.width),ue=He,J=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,st),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,st,D,ue,J,k,q,S.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Y),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Le(A,S,k){let q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=n.TEXTURE_3D);const ne=Z(A,S),le=S.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+k);const pe=i.get(le);if(le.version!==pe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),Se=S.colorSpace===pr?null:Ze.getPrimaries(S.colorSpace),he=S.colorSpace===pr||J===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ee=m(S.image,!1,r.maxTextureSize);ee=te(S,ee);const xe=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let fe=E(S.internalFormat,xe,Ee,S.normalized,S.colorSpace,S.isVideoTexture);Ue(q,S);let ce;const Oe=S.mipmaps,He=S.isVideoTexture!==!0,st=pe.__version===void 0||ne===!0,D=le.dataReady,ue=w(S,ee);if(S.isDepthTexture)fe=b(S.format===qr,S.type),st&&(He?t.texStorage2D(n.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,fe,ee.width,ee.height,0,xe,Ee,null));else if(S.isDataTexture)if(Oe.length>0){He&&st&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Oe[0].width,Oe[0].height);for(let J=0,Se=Oe.length;J<Se;J++)ce=Oe[J],He?D&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,Ee,ce.data):t.texImage2D(n.TEXTURE_2D,J,fe,ce.width,ce.height,0,xe,Ee,ce.data);S.generateMipmaps=!1}else He?(st&&t.texStorage2D(n.TEXTURE_2D,ue,fe,ee.width,ee.height),D&&oe(S,ee,xe,Ee)):t.texImage2D(n.TEXTURE_2D,0,fe,ee.width,ee.height,0,xe,Ee,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,Oe[0].width,Oe[0].height,ee.depth);for(let J=0,Se=Oe.length;J<Se;J++)if(ce=Oe[J],S.format!==Hn)if(xe!==null)if(He){if(D)if(S.layerUpdates.size>0){const he=Dg(ce.width,ce.height,S.format,S.type);for(const ie of S.layerUpdates){const Ce=ce.data.subarray(ie*he/ce.data.BYTES_PER_ELEMENT,(ie+1)*he/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ie,ce.width,ce.height,1,xe,Ce)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,xe,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,fe,ce.width,ce.height,ee.depth,0,ce.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ce.width,ce.height,ee.depth,xe,Ee,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,fe,ce.width,ce.height,ee.depth,0,xe,Ee,ce.data)}else{He&&st&&t.texStorage2D(n.TEXTURE_2D,ue,fe,Oe[0].width,Oe[0].height);for(let J=0,Se=Oe.length;J<Se;J++)ce=Oe[J],S.format!==Hn?xe!==null?He?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,J,fe,ce.width,ce.height,0,ce.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?D&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce.width,ce.height,xe,Ee,ce.data):t.texImage2D(n.TEXTURE_2D,J,fe,ce.width,ce.height,0,xe,Ee,ce.data)}else if(S.isDataArrayTexture)if(He){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,fe,ee.width,ee.height,ee.depth),D)if(S.layerUpdates.size>0){const J=Dg(ee.width,ee.height,S.format,S.type);for(const Se of S.layerUpdates){const he=ee.data.subarray(Se*J/ee.data.BYTES_PER_ELEMENT,(Se+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,ee.width,ee.height,1,xe,Ee,he)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ee,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,xe,Ee,ee.data);else if(S.isData3DTexture)He?(st&&t.texStorage3D(n.TEXTURE_3D,ue,fe,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,Ee,ee.data)):t.texImage3D(n.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,xe,Ee,ee.data);else if(S.isFramebufferTexture){if(st)if(He)t.texStorage2D(n.TEXTURE_2D,ue,fe,ee.width,ee.height);else{let J=ee.width,Se=ee.height;for(let he=0;he<ue;he++)t.texImage2D(n.TEXTURE_2D,he,fe,J,Se,0,xe,Ee,null),J>>=1,Se>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),d.add(S),J.onpaint=ze=>{const It=ze.changedElements;for(const ft of d)It.includes(ft.image)&&(ft.needsUpdate=!0)},J.requestPaint();return}const Se=0,he=n.RGBA,ie=n.RGBA,Ce=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Se,he,ie,Ce,ee),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(He&&st){const J=nt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ue,fe,J.width,J.height)}for(let J=0,Se=Oe.length;J<Se;J++)ce=Oe[J],He?D&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe,Ee,ce):t.texImage2D(n.TEXTURE_2D,J,fe,xe,Ee,ce);S.generateMipmaps=!1}else if(He){if(st){const J=nt(ee);t.texStorage2D(n.TEXTURE_2D,ue,fe,J.width,J.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Ee,ee)}else t.texImage2D(n.TEXTURE_2D,0,fe,xe,Ee,ee);h(S)&&g(q),pe.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Fe(A,S,k){if(S.image.length!==6)return;const q=Z(A,S),ne=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const le=i.get(ne);if(ne.version!==le.__version||q===!0){t.activeTexture(n.TEXTURE0+k);const pe=Ze.getPrimaries(Ze.workingColorSpace),Y=S.colorSpace===pr?null:Ze.getPrimaries(S.colorSpace),ee=S.colorSpace===pr||pe===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!xe&&!Ee?fe[ie]=m(S.image[ie],!0,r.maxCubemapSize):fe[ie]=Ee?S.image[ie].image:S.image[ie],fe[ie]=te(S,fe[ie]);const ce=fe[0],Oe=s.convert(S.format,S.colorSpace),He=s.convert(S.type),st=E(S.internalFormat,Oe,He,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,ue=le.__version===void 0||q===!0,J=ne.dataReady;let Se=w(S,ce);Ue(n.TEXTURE_CUBE_MAP,S);let he;if(xe){D&&ue&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,st,ce.width,ce.height);for(let ie=0;ie<6;ie++){he=fe[ie].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const ze=he[Ce];S.format!==Hn?Oe!==null?D?J&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,ze.width,ze.height,Oe,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,st,ze.width,ze.height,0,ze.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,ze.width,ze.height,Oe,He,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,st,ze.width,ze.height,0,Oe,He,ze.data)}}}else{if(he=S.mipmaps,D&&ue){he.length>0&&Se++;const ie=nt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,st,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Oe,He,fe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,fe[ie].width,fe[ie].height,0,Oe,He,fe[ie].data);for(let Ce=0;Ce<he.length;Ce++){const It=he[Ce].image[ie].image;D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,It.width,It.height,Oe,He,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,st,It.width,It.height,0,Oe,He,It.data)}}else{D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Oe,He,fe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,st,Oe,He,fe[ie]);for(let Ce=0;Ce<he.length;Ce++){const ze=he[Ce];D?J&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Oe,He,ze.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,st,Oe,He,ze.image[ie])}}}h(S)&&g(n.TEXTURE_CUBE_MAP),le.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ne(A,S,k,q,ne,le){const pe=s.convert(k.format,k.colorSpace),Y=s.convert(k.type),ee=E(k.internalFormat,pe,Y,k.normalized,k.colorSpace),xe=i.get(S),Ee=i.get(k);if(Ee.__renderTarget=S,!xe.__hasExternalTextures){const fe=Math.max(1,S.width>>le),ce=Math.max(1,S.height>>le);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,ee,fe,ce,S.depth,0,pe,Y,null):t.texImage2D(ne,le,ee,fe,ce,0,pe,Y,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ne,Ee.__webglTexture,0,re(S)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ne,Ee.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(A,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,ne=q&&q.isDepthTexture?q.type:null,le=b(S.stencilBuffer,ne),pe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(S),le,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(S),le,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,le,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,A)}else{const q=S.textures;for(let ne=0;ne<q.length;ne++){const le=q[ne],pe=s.convert(le.format,le.colorSpace),Y=s.convert(le.type),ee=E(le.internalFormat,pe,Y,le.normalized,le.colorSpace);ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(S),ee,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(S),ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ee,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(A,S,k){const q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(S.depthTexture);if(ne.__renderTarget=S,(!ne.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,S.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,S.depthTexture);const xe=s.convert(S.depthTexture.format),Ee=s.convert(S.depthTexture.type);let fe;S.depthTexture.format===Zi?fe=n.DEPTH_COMPONENT24:S.depthTexture.format===qr&&(fe=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,S.width,S.height,0,xe,Ee,null)}}else z(S.depthTexture,0);const le=ne.__webglTexture,pe=re(S),Y=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ee=S.depthTexture.format===qr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Zi)ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Y,le,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Y,le,0);else if(S.depthTexture.format===qr)ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Y,le,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,Y,le,0);else throw new Error("Unknown depthTexture format")}function ot(A){const S=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",ne)};q.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let q=0;q<6;q++)Ye(S.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?Ye(S.__webglFramebuffer[0],A,0):Ye(S.__webglFramebuffer,A,0)}else if(k){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=n.createRenderbuffer(),yt(S.__webglDepthbuffer[q],A,!1);else{const ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,le)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),yt(S.__webglDepthbuffer,A,!1);else{const ne=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(A,S,k){const q=i.get(A);S!==void 0&&Ne(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ot(A)}function je(A){const S=A.texture,k=i.get(A),q=i.get(S);A.addEventListener("dispose",x);const ne=A.textures,le=A.isWebGLCubeRenderTarget===!0,pe=ne.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=S.version,a.memory.textures++),le){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let ee=0;ee<S.mipmaps.length;ee++)k.__webglFramebuffer[Y][ee]=n.createFramebuffer()}else k.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)k.__webglFramebuffer[Y]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Y=0,ee=ne.length;Y<ee;Y++){const xe=i.get(ne[Y]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ye(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const ee=ne[Y];k.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const xe=s.convert(ee.format,ee.colorSpace),Ee=s.convert(ee.type),fe=E(ee.internalFormat,xe,Ee,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),ce=re(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Ne(k.__webglFramebuffer[Y][ee],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else Ne(k.__webglFramebuffer[Y],A,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);h(S)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Y=0,ee=ne.length;Y<ee;Y++){const xe=ne[Y],Ee=i.get(xe);let fe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Ee.__webglTexture),Ue(fe,xe),Ne(k.__webglFramebuffer,A,xe,n.COLOR_ATTACHMENT0+Y,fe,0),h(xe)&&g(fe)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Y,q.__webglTexture),Ue(Y,S),S.mipmaps&&S.mipmaps.length>0)for(let ee=0;ee<S.mipmaps.length;ee++)Ne(k.__webglFramebuffer[ee],A,S,n.COLOR_ATTACHMENT0,Y,ee);else Ne(k.__webglFramebuffer,A,S,n.COLOR_ATTACHMENT0,Y,0);h(S)&&g(Y),t.unbindTexture()}A.depthBuffer&&ot(A)}function at(A){const S=A.textures;for(let k=0,q=S.length;k<q;k++){const ne=S[k];if(h(ne)){const le=v(A),pe=i.get(ne).__webglTexture;t.bindTexture(le,pe),g(le),t.unbindTexture()}}}const St=[],C=[];function M(A){if(A.samples>0){if(ye(A)===!1){const S=A.textures,k=A.width,q=A.height;let ne=n.COLOR_BUFFER_BIT;const le=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(A),Y=S.length>1;if(Y)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Ee=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,ne,n.NEAREST),l===!0&&(St.length=0,C.length=0,St.push(n.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(St.push(le),C.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,pe.__webglColorRenderbuffer[xe]);const Ee=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function re(A){return Math.min(r.maxSamples,A.samples)}function ye(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function te(A,S){const k=A.colorSpace,q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==In&&k!==pr&&(Ze.getTransfer(k)===ct?(q!==Hn||ne!==bn)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",k)),S}function nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.getTextureUnits=$,this.setTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=pt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=M,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cR(n,e){function t(i,r=pr){let s;const a=Ze.getTransfer(r);if(i===bn)return n.UNSIGNED_BYTE;if(i===tp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===np)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fv)return n.BYTE;if(i===Ov)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===ep)return n.INT;if(i===wi)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===$i)return n.HALF_FLOAT;if(i===zv)return n.ALPHA;if(i===Vv)return n.RGB;if(i===Hn)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===qr)return n.DEPTH_STENCIL;if(i===ip)return n.RED;if(i===rp)return n.RED_INTEGER;if(i===rs)return n.RG;if(i===sp)return n.RG_INTEGER;if(i===ap)return n.RGBA_INTEGER;if(i===Gl||i===Wl||i===jl||i===Xl)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===_f||i===vf||i===xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===xc||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Sf)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ef)return s.COMPRESSED_R11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return s.COMPRESSED_RG11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Af||i===bf||i===Rf||i===Cf||i===Pf||i===If||i===Lf||i===Nf||i===Df||i===Uf||i===Ff||i===Of||i===kf||i===Bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Af)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Df)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ff)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Of)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zf||i===Vf||i===Hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zf)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gf||i===Wf||i===yc||i===jf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const uR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
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

}`;class fR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:uR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new jc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hR extends Lr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const y=typeof XRWebGLBinding<"u",m=new fR,h={},g=t.getContextAttributes();let v=null,E=null;const b=[],w=[],P=new tt;let x=null;const R=new un;R.viewport=new _t;const N=new un;N.viewport=new _t;const L=[R,N],O=new cT;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=b[Z];return de===void 0&&(de=new Nu,b[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=b[Z];return de===void 0&&(de=new Nu,b[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=b[Z];return de===void 0&&(de=new Nu,b[Z]=de),de.getHandSpace()};function U(Z){const de=w.indexOf(Z.inputSource);if(de===-1)return;const oe=b[de];oe!==void 0&&(oe.update(Z.inputSource,Z.frame,c||a),oe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let Z=0;Z<b.length;Z++){const de=w[Z];de!==null&&(w[Z]=null,b[Z].disconnect(de))}X=null,$=null,m.reset();for(const Z in h)delete h[Z];e.setRenderTarget(v),p=null,f=null,d=null,r=null,E=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Le=null,Fe=null;g.depth&&(Fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?qr:Zi,Le=g.stencil?Mo:wi);const Ne={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Ei(f.textureWidth,f.textureHeight,{format:Hn,type:bn,depthTexture:new aa(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ei(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Z){for(let de=0;de<Z.removed.length;de++){const oe=Z.removed[de],Le=w.indexOf(oe);Le>=0&&(w[Le]=null,b[Le].disconnect(oe))}for(let de=0;de<Z.added.length;de++){const oe=Z.added[de];let Le=w.indexOf(oe);if(Le===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=w.length){w.push(oe),Le=Ne;break}else if(w[Ne]===null){w[Ne]=oe,Le=Ne;break}if(Le===-1)break}const Fe=b[Le];Fe&&Fe.connect(oe)}}const z=new B,K=new B;function Q(Z,de,oe){z.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);const Le=z.distanceTo(K),Fe=de.projectionMatrix.elements,Ne=oe.projectionMatrix.elements,yt=Fe[14]/(Fe[10]-1),Ye=Fe[14]/(Fe[10]+1),ot=(Fe[9]+1)/Fe[5],pt=(Fe[9]-1)/Fe[5],je=(Fe[8]-1)/Fe[0],at=(Ne[8]+1)/Ne[0],St=yt*je,C=yt*at,M=Le/(-je+at),re=M*-je;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(re),Z.translateZ(M),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Fe[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ye=yt+M,Ae=Ye+M,te=St-re,nt=C+(Le-re),A=ot*Ye/Ae*ye,S=pt*Ye/Ae*ye;Z.projectionMatrix.makePerspective(te,nt,A,S,ye,Ae),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let de=Z.near,oe=Z.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),O.near=N.near=R.near=de,O.far=N.far=R.far=oe,(X!==O.near||$!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,$=O.far),O.layers.mask=Z.layers.mask|6,R.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;const Le=Z.parent,Fe=O.cameras;ae(O,Le);for(let Ne=0;Ne<Fe.length;Ne++)ae(Fe[Ne],Le);Fe.length===2?Q(O,R,N):O.projectionMatrix.copy(R.projectionMatrix),me(Z,O,Le)};function me(Z,de,oe){oe===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(oe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sa*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return h[Z]};let Ge=null;function Ke(Z,de){if(u=de.getViewerPose(c||a),_=de,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Le=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let Ye=0;Ye<oe.length;Ye++){const ot=oe[Ye];let pt=null;if(p!==null)pt=p.getViewport(ot);else{const at=d.getViewSubImage(f,ot);pt=at.viewport,Ye===0&&(e.setRenderTargetTextures(E,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(E))}let je=L[Ye];je===void 0&&(je=new un,je.layers.enable(Ye),je.viewport=new _t,L[Ye]=je),je.matrix.fromArray(ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(pt.x,pt.y,pt.width,pt.height),Ye===0&&(O.matrix.copy(je.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(je)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Ye=d.getDepthInformation(oe[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,r.renderState)}if(Fe&&Fe.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ye=0;Ye<oe.length;Ye++){const ot=oe[Ye].camera;if(ot){let pt=h[ot];pt||(pt=new Qv,h[ot]=pt);const je=d.getCameraImage(ot);pt.sourceTexture=je}}}}for(let oe=0;oe<b.length;oe++){const Le=w[oe],Fe=b[oe];Le!==null&&Fe!==void 0&&Fe.update(Le,de,c||a)}Ge&&Ge(Z,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ue=new ax;Ue.setAnimationLoop(Ke),this.setAnimationLoop=function(Z){Ge=Z},this.dispose=function(){}}}const pR=new qe,hx=new ke;hx.set(-1,0,0,0,1,0,0,0,1);function mR(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,ex(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,g,v,E){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,g,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===yn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===yn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const g=e.get(h),v=g.envMap,E=g.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(pR.makeRotationFromEuler(E)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hx),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,g,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*g,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,g){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const g=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gR(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const E=v.program;i.uniformBlockBinding(g,E)}function c(g,v){let E=r[g.id];E===void 0&&(_(g),E=u(g),r[g.id]=E,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const w=e.render.frame;s[g.id]!==w&&(f(g),s[g.id]=w)}function u(g){const v=d();g.__bindingPointIndex=v;const E=n.createBuffer(),b=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],E=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,P=E.length;w<P;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let R=0,N=x.length;R<N;R++){const L=x[R];if(p(L,w,R,b)===!0){const O=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let U=0;U<X.length;U++){const W=X[U],V=y(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+$,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):ArrayBuffer.isView(W)?L.__data.set(new W.constructor(W.buffer,W.byteOffset,L.__data.length)):(W.toArray(L.__data,$),$+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,E,b){const w=g.value,P=v+"_"+E;if(b[P]===void 0)return typeof w=="number"||typeof w=="boolean"?b[P]=w:ArrayBuffer.isView(w)?b[P]=w.slice():b[P]=w.clone(),!0;{const x=b[P];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return b[P]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function _(g){const v=g.uniforms;let E=0;const b=16;for(let P=0,x=v.length;P<x;P++){const R=Array.isArray(v[P])?v[P]:[v[P]];for(let N=0,L=R.length;N<L;N++){const O=R[N],X=Array.isArray(O.value)?O.value:[O.value];for(let $=0,U=X.length;$<U;$++){const W=X[$],V=y(W),z=E%b,K=z%V.boundary,Q=z+K;E+=K,Q!==0&&b-Q<V.storage&&(E+=b-Q),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=V.storage}}}const w=E%b;return w>0&&(E+=b-w),g.__size=E,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const g in r)n.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}const _R=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function vR(){return fi===null&&(fi=new hp(_R,16,16,rs,$i),fi.name="DFG_LUT",fi.minFilter=Vt,fi.magFilter=Vt,fi.wrapS=vi,fi.wrapT=vi,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class xR{constructor(e={}){const{canvas:t=kM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=p,m=new Set([ap,sp,rp]),h=new Set([bn,wi,So,Mo,tp,np]),g=new Uint32Array(4),v=new Int32Array(4),E=new B;let b=null,w=null;const P=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let L=!1,O=null;this._outputColorSpace=Xt;let X=0,$=0,U=null,W=-1,V=null;const z=new _t,K=new _t;let Q=null;const ae=new Be(0);let me=0,Ge=t.width,Ke=t.height,Ue=1,Z=null,de=null;const oe=new _t(0,0,Ge,Ke),Le=new _t(0,0,Ge,Ke);let Fe=!1;const Ne=new mp;let yt=!1,Ye=!1;const ot=new qe,pt=new B,je=new _t,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function C(){return U===null?Ue:1}let M=i;function re(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qh}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",ze,!1),M===null){const F="webgl2";if(M=re(F,T),M===null)throw re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw De("WebGLRenderer: "+T.message),T}let ye,Ae,te,nt,A,S,k,q,ne,le,pe,Y,ee,xe,Ee,fe,ce,Oe,He,st,D,ue,J;function Se(){ye=new v1(M),ye.init(),D=new cR(M,ye),Ae=new u1(M,ye,e,D),te=new oR(M,ye),Ae.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),nt=new S1(M),A=new qb,S=new lR(M,ye,te,A,Ae,D,nt),k=new _1(N),q=new wT(M),ue=new l1(M,q),ne=new x1(M,q,nt,ue),le=new E1(M,ne,q,ue,nt),Oe=new M1(M,Ae,S),Ee=new d1(A),pe=new Xb(N,k,ye,Ae,ue,Ee),Y=new mR(N,A),ee=new Yb,xe=new tR(ye),ce=new o1(N,k,te,le,_,l),fe=new aR(N,le,Ae),J=new gR(M,nt,Ae,te),He=new c1(M,ye,nt),st=new y1(M,ye,nt),nt.programs=pe.programs,N.capabilities=Ae,N.extensions=ye,N.properties=A,N.renderLists=ee,N.shadowMap=fe,N.state=te,N.info=nt}Se(),y!==bn&&(R=new w1(y,t.width,t.height,r,s));const he=new hR(N,M);this.xr=he,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(T){T!==void 0&&(Ue=T,this.setSize(Ge,Ke,!1))},this.getSize=function(T){return T.set(Ge,Ke)},this.setSize=function(T,F,j=!0){if(he.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=T,Ke=F,t.width=Math.floor(T*Ue),t.height=Math.floor(F*Ue),j===!0&&(t.style.width=T+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Ge*Ue,Ke*Ue).floor()},this.setDrawingBufferSize=function(T,F,j){Ge=T,Ke=F,Ue=j,t.width=Math.floor(T*j),t.height=Math.floor(F*j),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(y===bn){De("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,F,j,H){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,F,j,H),te.viewport(z.copy(oe).multiplyScalar(Ue).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,F,j,H){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,F,j,H),te.scissor(K.copy(Le).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){te.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,j=!0){let H=0;if(T){let G=!1;if(U!==null){const ve=U.texture.format;G=m.has(ve)}if(G){const ve=U.texture.type,Te=h.has(ve),_e=ce.getClearColor(),be=ce.getClearAlpha(),Pe=_e.r,Ve=_e.g,Xe=_e.b;Te?(g[0]=Pe,g[1]=Ve,g[2]=Xe,g[3]=be,M.clearBufferuiv(M.COLOR,0,g)):(v[0]=Pe,v[1]=Ve,v[2]=Xe,v[3]=be,M.clearBufferiv(M.COLOR,0,v))}else H|=M.COLOR_BUFFER_BIT}F&&(H|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(H|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&M.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ce.dispose(),ee.dispose(),xe.dispose(),A.dispose(),k.dispose(),le.dispose(),ue.dispose(),J.dispose(),pe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ap),he.removeEventListener("sessionend",bp),Nr.stop()};function ie(T){T.preventDefault(),Ec("WebGLRenderer: Context Lost."),L=!0}function Ce(){Ec("WebGLRenderer: Context Restored."),L=!1;const T=nt.autoReset,F=fe.enabled,j=fe.autoUpdate,H=fe.needsUpdate,G=fe.type;Se(),nt.autoReset=T,fe.enabled=F,fe.autoUpdate=j,fe.needsUpdate=H,fe.type=G}function ze(T){De("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function It(T){const F=T.target;F.removeEventListener("dispose",It),ft(F)}function ft(T){Ci(T),A.remove(T)}function Ci(T){const F=A.get(T).programs;F!==void 0&&(F.forEach(function(j){pe.releaseProgram(j)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,j,H,G,ve){F===null&&(F=at);const Te=G.isMesh&&G.matrixWorld.determinant()<0,_e=xx(T,F,j,H,G);te.setMaterial(H,Te);let be=j.index,Pe=1;if(H.wireframe===!0){if(be=ne.getWireframeAttribute(j),be===void 0)return;Pe=2}const Ve=j.drawRange,Xe=j.attributes.position;let Ie=Ve.start*Pe,ht=(Ve.start+Ve.count)*Pe;ve!==null&&(Ie=Math.max(Ie,ve.start*Pe),ht=Math.min(ht,(ve.start+ve.count)*Pe)),be!==null?(Ie=Math.max(Ie,0),ht=Math.min(ht,be.count)):Xe!=null&&(Ie=Math.max(Ie,0),ht=Math.min(ht,Xe.count));const Lt=ht-Ie;if(Lt<0||Lt===1/0)return;ue.setup(G,H,_e,j,be);let Ct,mt=He;if(be!==null&&(Ct=q.get(be),mt=st,mt.setIndex(Ct)),G.isMesh)H.wireframe===!0?(te.setLineWidth(H.wireframeLinewidth*C()),mt.setMode(M.LINES)):mt.setMode(M.TRIANGLES);else if(G.isLine){let Jt=H.linewidth;Jt===void 0&&(Jt=1),te.setLineWidth(Jt*C()),G.isLineSegments?mt.setMode(M.LINES):G.isLineLoop?mt.setMode(M.LINE_LOOP):mt.setMode(M.LINE_STRIP)}else G.isPoints?mt.setMode(M.POINTS):G.isSprite&&mt.setMode(M.TRIANGLES);if(G.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Jt=G._multiDrawStarts,Me=G._multiDrawCounts,En=G._multiDrawCount,it=be?q.get(be).bytesPerElement:1,Un=A.get(H).currentProgram.getUniforms();for(let ci=0;ci<En;ci++)Un.setValue(M,"_gl_DrawID",ci),mt.render(Jt[ci]/it,Me[ci])}else if(G.isInstancedMesh)mt.renderInstances(Ie,Lt,G.count);else if(j.isInstancedBufferGeometry){const Jt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Me=Math.min(j.instanceCount,Jt);mt.renderInstances(Ie,Lt,Me)}else mt.render(Ie,Lt)};function li(T,F,j){T.transparent===!0&&T.side===_i&&T.forceSinglePass===!1?(T.side=yn,T.needsUpdate=!0,Do(T,F,j),T.side=Yi,T.needsUpdate=!0,Do(T,F,j),T.side=_i):Do(T,F,j)}this.compile=function(T,F,j=null){j===null&&(j=T),w=xe.get(j),w.init(F),x.push(w),j.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),T!==j&&T.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const H=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){const _e=ve[Te];li(_e,j,G),H.add(_e)}else li(ve,j,G),H.add(ve)}),w=x.pop(),H},this.compileAsync=function(T,F,j=null){const H=this.compile(T,F,j);return new Promise(G=>{function ve(){if(H.forEach(function(Te){A.get(Te).currentProgram.isReady()&&H.delete(Te)}),H.size===0){G(T);return}setTimeout(ve,10)}ye.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Zc=null;function _x(T){Zc&&Zc(T)}function Ap(){Nr.stop()}function bp(){Nr.start()}const Nr=new ax;Nr.setAnimationLoop(_x),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(T){Zc=T,he.setAnimationLoop(T),T===null?Nr.stop():Nr.start()},he.addEventListener("sessionstart",Ap),he.addEventListener("sessionend",bp),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(T,F);const j=he.enabled===!0&&he.isPresenting===!0,H=R!==null&&(U===null||j)&&R.begin(N,U);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(F),F=he.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,F,U),w=xe.get(T,x.length),w.init(F),w.state.textureUnits=S.getTextureUnits(),x.push(w),ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ne.setFromProjectionMatrix(ot,xi,F.reversedDepth),Ye=this.localClippingEnabled,yt=Ee.init(this.clippingPlanes,Ye),b=ee.get(T,P.length),b.init(),P.push(b),he.enabled===!0&&he.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Jc(Te,F,-1/0,N.sortObjects)}Jc(T,F,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Z,de),St=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,St&&ce.addToRenderList(b,T),this.info.render.frame++,yt===!0&&Ee.beginShadows();const G=w.state.shadowsArray;if(fe.render(G,T,F),yt===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&R.hasRenderPass())===!1){const Te=b.opaque,_e=b.transmissive;if(w.setupLights(),F.isArrayCamera){const be=F.cameras;if(_e.length>0)for(let Pe=0,Ve=be.length;Pe<Ve;Pe++){const Xe=be[Pe];Cp(Te,_e,T,Xe)}St&&ce.render(T);for(let Pe=0,Ve=be.length;Pe<Ve;Pe++){const Xe=be[Pe];Rp(b,T,Xe,Xe.viewport)}}else _e.length>0&&Cp(Te,_e,T,F),St&&ce.render(T),Rp(b,T,F)}U!==null&&$===0&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),H&&R.end(N),T.isScene===!0&&T.onAfterRender(N,T,F),ue.resetDefaultState(),W=-1,V=null,x.pop(),x.length>0?(w=x[x.length-1],S.setTextureUnits(w.state.textureUnits),yt===!0&&Ee.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,O!==null&&O.renderEnd()};function Jc(T,F,j,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){H&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ot);const Te=le.update(T),_e=T.material;_e.visible&&b.push(T,Te,_e,j,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const Te=le.update(T),_e=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),je.copy(Te.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(ot)),Array.isArray(_e)){const be=Te.groups;for(let Pe=0,Ve=be.length;Pe<Ve;Pe++){const Xe=be[Pe],Ie=_e[Xe.materialIndex];Ie&&Ie.visible&&b.push(T,Te,Ie,j,je.z,Xe)}}else _e.visible&&b.push(T,Te,_e,j,je.z,null)}}const ve=T.children;for(let Te=0,_e=ve.length;Te<_e;Te++)Jc(ve[Te],F,j,H)}function Rp(T,F,j,H){const{opaque:G,transmissive:ve,transparent:Te}=T;w.setupLightsView(j),yt===!0&&Ee.setGlobalState(N.clippingPlanes,j),H&&te.viewport(z.copy(H)),G.length>0&&No(G,F,j),ve.length>0&&No(ve,F,j),Te.length>0&&No(Te,F,j),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Cp(T,F,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Ie=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:Ie?$i:bn,minFilter:zi,samples:Math.max(4,Ae.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ve=w.state.transmissionRenderTarget[H.id],Te=H.viewport||z;ve.setSize(Te.z*N.transmissionResolutionScale,Te.w*N.transmissionResolutionScale);const _e=N.getRenderTarget(),be=N.getActiveCubeFace(),Pe=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor(ae),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),St&&ce.render(j);const Ve=N.toneMapping;N.toneMapping=Mi;const Xe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),yt===!0&&Ee.setGlobalState(N.clippingPlanes,H),No(T,j,H),S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ht=0,Lt=F.length;ht<Lt;ht++){const Ct=F[ht],{object:mt,geometry:Jt,material:Me,group:En}=Ct;if(Me.side===_i&&mt.layers.test(H.layers)){const it=Me.side;Me.side=yn,Me.needsUpdate=!0,Pp(mt,j,H,Jt,Me,En),Me.side=it,Me.needsUpdate=!0,Ie=!0}}Ie===!0&&(S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve))}N.setRenderTarget(_e,be,Pe),N.setClearColor(ae,me),Xe!==void 0&&(H.viewport=Xe),N.toneMapping=Ve}function No(T,F,j){const H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const Te=T[G],{object:_e,geometry:be,group:Pe}=Te;let Ve=Te.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),_e.layers.test(j.layers)&&Pp(_e,F,j,be,Ve,Pe)}}function Pp(T,F,j,H,G,ve){T.onBeforeRender(N,F,j,H,G,ve),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(N,F,j,H,T,ve),G.transparent===!0&&G.side===_i&&G.forceSinglePass===!1?(G.side=yn,G.needsUpdate=!0,N.renderBufferDirect(j,F,H,G,T,ve),G.side=Yi,G.needsUpdate=!0,N.renderBufferDirect(j,F,H,G,T,ve),G.side=_i):N.renderBufferDirect(j,F,H,G,T,ve),T.onAfterRender(N,F,j,H,G,ve)}function Do(T,F,j){F.isScene!==!0&&(F=at);const H=A.get(T),G=w.state.lights,ve=w.state.shadowsArray,Te=G.state.version,_e=pe.getParameters(T,G.state,ve,F,j,w.state.lightProbeGridArray),be=pe.getProgramCacheKey(_e);let Pe=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=k.get(T.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",It),Pe=new Map,H.programs=Pe);let Xe=Pe.get(be);if(Xe!==void 0){if(H.currentProgram===Xe&&H.lightsStateVersion===Te)return Lp(T,_e),Xe}else _e.uniforms=pe.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,j,_e),T.onBeforeCompile(_e,N),Xe=pe.acquireProgram(_e,be),Pe.set(be,Xe),H.uniforms=_e.uniforms;const Ie=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=Ee.uniform),Lp(T,_e),H.needsLights=Sx(T),H.lightsStateVersion=Te,H.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Xe,H.uniformsList=null,Xe}function Ip(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ql.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Lp(T,F){const j=A.get(T);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function vx(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;E.setFromMatrixPosition(F.matrixWorld);for(let j=0,H=T.length;j<H;j++){const G=T[j];if(G.texture!==null&&G.boundingBox.containsPoint(E))return G}return null}function xx(T,F,j,H,G){F.isScene!==!0&&(F=at),S.resetTextureUnits();const ve=F.fog,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,_e=U===null?N.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ze.workingColorSpace,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Pe=k.get(H.envMap||Te,be),Ve=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ie=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,Lt=!!j.morphAttributes.color;let Ct=Mi;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Jt=mt!==void 0?mt.length:0,Me=A.get(H),En=w.state.lights;if(yt===!0&&(Ye===!0||T!==V)){const vt=T===V&&H.id===W;Ee.setState(H,T,vt)}let it=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==En.state.version||Me.outputColorSpace!==_e||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Pe||H.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ee.numPlanes||Me.numIntersection!==Ee.numIntersection)||Me.vertexAlphas!==Ve||Me.vertexTangents!==Xe||Me.morphTargets!==Ie||Me.morphNormals!==ht||Me.morphColors!==Lt||Me.toneMapping!==Ct||Me.morphTargetsCount!==Jt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Me.__version=H.version);let Un=Me.currentProgram;it===!0&&(Un=Do(H,F,G),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Un,Me));let ci=!1,Qi=!1,os=!1;const gt=Un.getUniforms(),Nt=Me.uniforms;if(te.useProgram(Un.program)&&(ci=!0,Qi=!0,os=!0),H.id!==W&&(W=H.id,Qi=!0),Me.needsLights){const vt=vx(w.state.lightProbeGridArray,G);Me.lightProbeGrid!==vt&&(Me.lightProbeGrid=vt,Qi=!0)}if(ci||V!==T){te.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(M,"projectionMatrix",T.projectionMatrix),gt.setValue(M,"viewMatrix",T.matrixWorldInverse);const tr=gt.map.cameraPosition;tr!==void 0&&tr.setValue(M,pt.setFromMatrixPosition(T.matrixWorld)),Ae.logarithmicDepthBuffer&&gt.setValue(M,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(M,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,Qi=!0,os=!0)}if(Me.needsLights&&(En.state.directionalShadowMap.length>0&&gt.setValue(M,"directionalShadowMap",En.state.directionalShadowMap,S),En.state.spotShadowMap.length>0&&gt.setValue(M,"spotShadowMap",En.state.spotShadowMap,S),En.state.pointShadowMap.length>0&&gt.setValue(M,"pointShadowMap",En.state.pointShadowMap,S)),G.isSkinnedMesh){gt.setOptional(M,G,"bindMatrix"),gt.setOptional(M,G,"bindMatrixInverse");const vt=G.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),gt.setValue(M,"boneTexture",vt.boneTexture,S))}G.isBatchedMesh&&(gt.setOptional(M,G,"batchingTexture"),gt.setValue(M,"batchingTexture",G._matricesTexture,S),gt.setOptional(M,G,"batchingIdTexture"),gt.setValue(M,"batchingIdTexture",G._indirectTexture,S),gt.setOptional(M,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(M,"batchingColorTexture",G._colorsTexture,S));const er=j.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&Oe.update(G,j,Un),(Qi||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,gt.setValue(M,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Nt.envMapIntensity.value=F.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=vR()),Qi){if(gt.setValue(M,"toneMappingExposure",N.toneMappingExposure),Me.needsLights&&yx(Nt,os),ve&&H.fog===!0&&Y.refreshFogUniforms(Nt,ve),Y.refreshMaterialUniforms(Nt,H,Ue,Ke,w.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const vt=Me.lightProbeGrid;Nt.probesSH.value=vt.texture,Nt.probesMin.value.copy(vt.boundingBox.min),Nt.probesMax.value.copy(vt.boundingBox.max),Nt.probesResolution.value.copy(vt.resolution)}ql.upload(M,Ip(Me),Nt,S)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ql.upload(M,Ip(Me),Nt,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(M,"center",G.center),gt.setValue(M,"modelViewMatrix",G.modelViewMatrix),gt.setValue(M,"normalMatrix",G.normalMatrix),gt.setValue(M,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const vt=H.uniformsGroups;for(let tr=0,ls=vt.length;tr<ls;tr++){const Np=vt[tr];J.update(Np,Un),J.bind(Np,Un)}}return Un}function yx(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Sx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,F,j){const H=A.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=F,A.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:j,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const j=A.get(T);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0};const Mx=M.createFramebuffer();this.setRenderTarget=function(T,F=0,j=0){U=T,X=F,$=j;let H=null,G=!1,ve=!1;if(T){const _e=A.get(T);if(_e.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(M.FRAMEBUFFER,_e.__webglFramebuffer),z.copy(T.viewport),K.copy(T.scissor),Q=T.scissorTest,te.viewport(z),te.scissor(K),te.setScissorTest(Q),W=-1;return}else if(_e.__webglFramebuffer===void 0)S.setupRenderTarget(T);else if(_e.__hasExternalTextures)S.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ve=T.depthTexture;if(_e.__boundDepthTexture!==Ve){if(Ve!==null&&A.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Pe=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?H=Pe[F][j]:H=Pe[F],G=!0):T.samples>0&&S.useMultisampledRTT(T)===!1?H=A.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?H=Pe[j]:H=Pe,z.copy(T.viewport),K.copy(T.scissor),Q=T.scissorTest}else z.copy(oe).multiplyScalar(Ue).floor(),K.copy(Le).multiplyScalar(Ue).floor(),Q=Fe;if(j!==0&&(H=Mx),te.bindFramebuffer(M.FRAMEBUFFER,H)&&te.drawBuffers(T,H),te.viewport(z),te.scissor(K),te.setScissorTest(Q),G){const _e=A.get(T.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,j)}else if(ve){const _e=F;for(let be=0;be<T.textures.length;be++){const Pe=A.get(T.textures[be]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+be,Pe.__webglTexture,j,_e)}}else if(T!==null&&j!==0){const _e=A.get(T.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,_e.__webglTexture,j)}W=-1},this.readRenderTargetPixels=function(T,F,j,H,G,ve,Te,_e=0){if(!(T&&T.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){te.bindFramebuffer(M.FRAMEBUFFER,be);try{const Pe=T.textures[_e],Ve=Pe.format,Xe=Pe.type;if(T.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+_e),!Ae.textureFormatReadable(Ve)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Xe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&j>=0&&j<=T.height-G&&M.readPixels(F,j,H,G,D.convert(Ve),D.convert(Xe),ve)}finally{const Pe=U!==null?A.get(U).__webglFramebuffer:null;te.bindFramebuffer(M.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,F,j,H,G,ve,Te,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be)if(F>=0&&F<=T.width-H&&j>=0&&j<=T.height-G){te.bindFramebuffer(M.FRAMEBUFFER,be);const Pe=T.textures[_e],Ve=Pe.format,Xe=Pe.type;if(T.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+_e),!Ae.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ie),M.bufferData(M.PIXEL_PACK_BUFFER,ve.byteLength,M.STREAM_READ),M.readPixels(F,j,H,G,D.convert(Ve),D.convert(Xe),0);const ht=U!==null?A.get(U).__webglFramebuffer:null;te.bindFramebuffer(M.FRAMEBUFFER,ht);const Lt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await BM(M,Lt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ie),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ve),M.deleteBuffer(Ie),M.deleteSync(Lt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,j=0){const H=Math.pow(2,-j),G=Math.floor(T.image.width*H),ve=Math.floor(T.image.height*H),Te=F!==null?F.x:0,_e=F!==null?F.y:0;S.setTexture2D(T,0),M.copyTexSubImage2D(M.TEXTURE_2D,j,0,0,Te,_e,G,ve),te.unbindTexture()};const Ex=M.createFramebuffer(),Tx=M.createFramebuffer();this.copyTextureToTexture=function(T,F,j=null,H=null,G=0,ve=0){let Te,_e,be,Pe,Ve,Xe,Ie,ht,Lt;const Ct=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(j!==null)Te=j.max.x-j.min.x,_e=j.max.y-j.min.y,be=j.isBox3?j.max.z-j.min.z:1,Pe=j.min.x,Ve=j.min.y,Xe=j.isBox3?j.min.z:0;else{const Nt=Math.pow(2,-G);Te=Math.floor(Ct.width*Nt),_e=Math.floor(Ct.height*Nt),T.isDataArrayTexture?be=Ct.depth:T.isData3DTexture?be=Math.floor(Ct.depth*Nt):be=1,Pe=0,Ve=0,Xe=0}H!==null?(Ie=H.x,ht=H.y,Lt=H.z):(Ie=0,ht=0,Lt=0);const mt=D.convert(F.format),Jt=D.convert(F.type);let Me;F.isData3DTexture?(S.setTexture3D(F,0),Me=M.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(S.setTexture2DArray(F,0),Me=M.TEXTURE_2D_ARRAY):(S.setTexture2D(F,0),Me=M.TEXTURE_2D),te.activeTexture(M.TEXTURE0),te.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,F.flipY),te.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),te.pixelStorei(M.UNPACK_ALIGNMENT,F.unpackAlignment);const En=te.getParameter(M.UNPACK_ROW_LENGTH),it=te.getParameter(M.UNPACK_IMAGE_HEIGHT),Un=te.getParameter(M.UNPACK_SKIP_PIXELS),ci=te.getParameter(M.UNPACK_SKIP_ROWS),Qi=te.getParameter(M.UNPACK_SKIP_IMAGES);te.pixelStorei(M.UNPACK_ROW_LENGTH,Ct.width),te.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Ct.height),te.pixelStorei(M.UNPACK_SKIP_PIXELS,Pe),te.pixelStorei(M.UNPACK_SKIP_ROWS,Ve),te.pixelStorei(M.UNPACK_SKIP_IMAGES,Xe);const os=T.isDataArrayTexture||T.isData3DTexture,gt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Nt=A.get(T),er=A.get(F),vt=A.get(Nt.__renderTarget),tr=A.get(er.__renderTarget);te.bindFramebuffer(M.READ_FRAMEBUFFER,vt.__webglFramebuffer),te.bindFramebuffer(M.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let ls=0;ls<be;ls++)os&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,A.get(T).__webglTexture,G,Xe+ls),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,A.get(F).__webglTexture,ve,Lt+ls)),M.blitFramebuffer(Pe,Ve,Te,_e,Ie,ht,Te,_e,M.DEPTH_BUFFER_BIT,M.NEAREST);te.bindFramebuffer(M.READ_FRAMEBUFFER,null),te.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||A.has(T)){const Nt=A.get(T),er=A.get(F);te.bindFramebuffer(M.READ_FRAMEBUFFER,Ex),te.bindFramebuffer(M.DRAW_FRAMEBUFFER,Tx);for(let vt=0;vt<be;vt++)os?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Nt.__webglTexture,G,Xe+vt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Nt.__webglTexture,G),gt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,er.__webglTexture,ve,Lt+vt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,er.__webglTexture,ve),G!==0?M.blitFramebuffer(Pe,Ve,Te,_e,Ie,ht,Te,_e,M.COLOR_BUFFER_BIT,M.NEAREST):gt?M.copyTexSubImage3D(Me,ve,Ie,ht,Lt+vt,Pe,Ve,Te,_e):M.copyTexSubImage2D(Me,ve,Ie,ht,Pe,Ve,Te,_e);te.bindFramebuffer(M.READ_FRAMEBUFFER,null),te.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else gt?T.isDataTexture||T.isData3DTexture?M.texSubImage3D(Me,ve,Ie,ht,Lt,Te,_e,be,mt,Jt,Ct.data):F.isCompressedArrayTexture?M.compressedTexSubImage3D(Me,ve,Ie,ht,Lt,Te,_e,be,mt,Ct.data):M.texSubImage3D(Me,ve,Ie,ht,Lt,Te,_e,be,mt,Jt,Ct):T.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ve,Ie,ht,Te,_e,mt,Jt,Ct.data):T.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ve,Ie,ht,Ct.width,Ct.height,mt,Ct.data):M.texSubImage2D(M.TEXTURE_2D,ve,Ie,ht,Te,_e,mt,Jt,Ct);te.pixelStorei(M.UNPACK_ROW_LENGTH,En),te.pixelStorei(M.UNPACK_IMAGE_HEIGHT,it),te.pixelStorei(M.UNPACK_SKIP_PIXELS,Un),te.pixelStorei(M.UNPACK_SKIP_ROWS,ci),te.pixelStorei(M.UNPACK_SKIP_IMAGES,Qi),ve===0&&F.generateMipmaps&&M.generateMipmap(Me),te.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&S.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){X=0,$=0,U=null,te.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function r_(n,e){if(e===bM)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Xf||e===Hv){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Xf)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function yR(n){const e=new Map,t=new Map,i=n.clone();return px(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function px(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)px(n.children[i],e.children[i],t)}class SR extends _a{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new AR(t)}),this.register(function(t){return new bR(t)}),this.register(function(t){return new FR(t)}),this.register(function(t){return new OR(t)}),this.register(function(t){return new kR(t)}),this.register(function(t){return new CR(t)}),this.register(function(t){return new PR(t)}),this.register(function(t){return new IR(t)}),this.register(function(t){return new LR(t)}),this.register(function(t){return new wR(t)}),this.register(function(t){return new NR(t)}),this.register(function(t){return new RR(t)}),this.register(function(t){return new UR(t)}),this.register(function(t){return new DR(t)}),this.register(function(t){return new ER(t)}),this.register(function(t){return new s_(t,$e.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new s_(t,$e.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new BR(t)})}load(e,t,i,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=no.extractUrlBase(e);a=no.resolveURL(c,this.path)}else a=no.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mx){try{a[$e.KHR_BINARY_GLTF]=new zR(e)}catch(d){r&&r(d);return}s=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new QR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case $e.KHR_MATERIALS_UNLIT:a[d]=new TR;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[d]=new VR(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[d]=new HR;break;case $e.KHR_MESH_QUANTIZATION:a[d]=new GR;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function MR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ut(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ER{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Be(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],In);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rT(u),c.distance=d;break;case"spot":c=new nT(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class TR{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Yr}extendParams(e,t,i){const r=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],In),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Xt))}return Promise.all(r)}}class wR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class AR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new tt(s,s)}return Promise.all(r)}}class bR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class RR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class CR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],In)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Xt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class PR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class IR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(s[0],s[1],s[2],In),Promise.all(r)}}class LR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class NR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(s[0],s[1],s[2],In),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Xt)),Promise.all(r)}}class DR{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class UR{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ut(this.parser,e,this.name)!==null?Ri:null}extendMaterialParams(e,t){const i=Ut(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class FR{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class OR{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class kR{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}}class s_{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class BR{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of d){const y=new qe,m=new B,h=new Wn,g=new B(1,1,1),v=new RE(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,E),l.SCALE&&g.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,y.compose(m,h,g));for(const E in l)if(E==="_COLOR_0"){const b=l[E];v.instanceColor=new $f(b.array,b.itemSize,b.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);bt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const mx="glTF",Oa=12,a_={JSON:1313821514,BIN:5130562};class zR{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Oa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Oa,s=new DataView(e,Oa);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===a_.JSON){const c=new Uint8Array(e,Oa+a,o);this.content=i.decode(c)}else if(l===a_.BIN){const c=Oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class VR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const d=nh[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=nh[u]||u.toLowerCase();if(a[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Ks[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const _ in p.attributes){const y=p.attributes[_],m=l[_];m!==void 0&&(y.normalized=m)}d(p)},o,c,In,f)})})}}class HR{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GR{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class gx extends pa{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,_=e*c,y=_-c,m=-2*p+3*f,h=p-f,g=1-m,v=h-f+d;for(let E=0;E!==o;E++){const b=a[y+E+o],w=a[y+E+l]*u,P=a[_+E+o],x=a[_+E]*u;s[E]=g*b+v*w+m*P+h*x}return s}}const WR=new Wn;class jR extends gx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return WR.fromArray(s).normalize().toArray(s),s}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},o_={9728:zt,9729:Vt,9984:Uv,9985:Hl,9986:Ga,9987:zi},l_={33071:vi,33648:vc,10497:ra},od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},nh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},XR={CUBICSPLINE:void 0,LINEAR:To,STEP:Eo},ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function qR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Xc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),n.DefaultMaterial}function kr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function KR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;a.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;o.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function YR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $R(n){let e;const t=n.extensions&&n.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cd(t.attributes):e=n.indices+":"+cd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+cd(n.targets[i]);return e}function cd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ih(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const JR=new qe;class QR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&a<98?this.textureLoader=new eT(this.options.manager):this.textureLoader=new oT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return kr(s,o,r),pi(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){i.load(no.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=od[r.type],o=Ks[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new fn(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=od[r.type],c=Ks[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let y,m;if(p&&p!==d){const h=Math.floor(f/p),g="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let v=t.cache.get(g);v||(y=new c(o,h*p,r.count*p/u),v=new SE(y,p/u),t.cache.add(g,v)),m=new fp(v,l,f%p/u,_)}else o===null?y=new c(r.count*l):y=new c(o,f,r.count*l),m=new fn(y,l,_);if(r.sparse!==void 0){const h=od.SCALAR,g=Ks[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,E=r.sparse.values.byteOffset||0,b=new g(a[1],v,r.sparse.count*h),w=new c(a[2],E,r.sparse.count*l);o!==null&&(m=new fn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,x=b.length;P<x;P++){const R=b[P];if(m.setX(R,w[P*l]),l>=2&&m.setY(R,w[P*l+1]),l>=3&&m.setZ(R,w[P*l+2]),l>=4&&m.setW(R,w[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=o_[f.magFilter]||Vt,u.minFilter=o_[f.minFilter]||zi,u.wrapS=l_[f.wrapS]||ra,u.wrapT=l_[f.wrapT]||ra,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==zt&&u.minFilter!==Vt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(y){const m=new Kt(y);m.needsUpdate=!0,f(m)}),t.load(no.resolveURL(d,s.path),_,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),pi(d,a),d.userData.mimeType=a.mimeType||ZR(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Zv,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new $v,Ti.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(r||s||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Xc}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const d=r[$e.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],In),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Xt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=_i);const u=s.alphaMode||ld.OPAQUE;if(u===ld.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ld.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Yr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new tt(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==Yr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Yr){const d=s.emissiveFactor;o.emissive=new Be().setRGB(d[0],d[1],d[2],In)}return s.emissiveTexture!==void 0&&a!==Yr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Xt)),Promise.all(c).then(function(){const d=new a(o);return s.name&&(d.name=s.name),pi(d,s),t.associations.set(d,{materials:e}),s.extensions&&kr(r,d,s),d})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return c_(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=$R(c),d=r[u];if(d)a.push(d.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=c_(new Dn,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?qR(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,_=u.length;p<_;p++){const y=u[p],m=a[p];let h;const g=c[p];if(m.mode===On.TRIANGLES||m.mode===On.TRIANGLE_STRIP||m.mode===On.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new wE(y,g):new Mn(y,g),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===On.TRIANGLE_STRIP?h.geometry=r_(h.geometry,Hv):m.mode===On.TRIANGLE_FAN&&(h.geometry=r_(h.geometry,Xf));else if(m.mode===On.LINES)h=new LE(y,g);else if(m.mode===On.LINE_STRIP)h=new gp(y,g);else if(m.mode===On.LINE_LOOP)h=new NE(y,g);else if(m.mode===On.POINTS)h=new DE(y,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&YR(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),pi(h,s),m.extensions&&kr(r,h,m),t.assignFinalMaterial(h),d.push(h)}for(let p=0,_=d.length;p<_;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&kr(r,d[0],s),d[0];const f=new Kr;s.extensions&&kr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=d.length;p<_;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new un(iE.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Kc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d){o.push(d);const f=new qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new pp(o,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],_=r.samplers[p.sampler],y=p.target,m=y.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,g=r.parameters!==void 0?r.parameters[_.output]:_.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",g)),c.push(_),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],_=d[2],y=d[3],m=d[4],h=[];for(let v=0,E=f.length;v<E;v++){const b=f[v],w=p[v],P=_[v],x=y[v],R=m[v];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const N=i._createAnimationTracks(b,w,P,x,R);if(N)for(let L=0;L<N.length;L++)h.push(N[L])}const g=new Jf(s,void 0,h);return pi(g,r),g})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,JR)});for(let p=0,_=d.length;p<_;p++)u.add(d[p]);if(u.userData.pivot!==void 0&&d.length>0){const p=u.userData.pivot,_=d[0];u.pivot=new B().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],_.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Yv:c.length>1?u=new Kr:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=a),pi(u,s),s.extensions&&kr(i,u,s),s.matrix!==void 0){const d=new qe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const d=r.associations.get(u);r.associations.set(u,{...d})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new Kr;i.name&&(s.name=r.createUniqueName(i.name)),pi(s,i),i.extensions&&kr(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,d=l.length;u<d;u++){const f=l[u];f.parent!==null?s.add(yR(f)):s.add(f)}const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof Ti||f instanceof Kt)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}cr[s.path]===cr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(cr[s.path]){case cr.weights:u=la;break;case cr.rotation:u=ca;break;case cr.translation:case cr.scale:u=ua;break;default:switch(i.itemSize){case 1:u=la;break;case 2:case 3:default:u=ua;break}break}const d=r.interpolation!==void 0?XR[r.interpolation]:To,f=this._getArrayFromAccessor(i);for(let p=0,_=l.length;p<_;p++){const y=new u(l[p]+"."+cr[s.path],t.array,f,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),a.push(y)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ih(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ca?jR:gx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function eC(n,e,t){const i=e.attributes,r=new ai;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const u=ih(Ks[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const y=ih(Ks[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}n.boundingBox=r;const a=new bi;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=a}function c_(n,e,t){const i=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=nh[a]||a.toLowerCase();o in n.attributes||r.push(s(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});r.push(a)}return Ze.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),pi(n,e),eC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?KR(n,e.targets,t):n})}const rn={ai:{provider:"mock",primaryModel:"mock-default",secondaryModel:"mock-default",apiKey:"",systemPrompt:"Eres Suri y respondes de forma clara y util.",responseMode:"faqs",faqSimilarityThreshold:.78},speech:{enabled:!0,autoRead:!0,repeatCount:1,lang:"es-CO",rate:1,pitch:1},voice:{lang:"es-ES",rate:1.1,pitch:1.2,primary:{lang:"es-ES",rate:1.1,pitch:1.2,engine:"espeak-wasm",browserVoice:""},secondary:{lang:"es-MX",rate:1,pitch:1.1,engine:"browser",browserVoice:""},tts:{engine:"espeak-wasm",primaryEngine:"espeak-wasm",secondaryEngine:"browser"}},listening:{mode:"normal",model:"onnx-community/whisper-small",sensitivity:"medium",language:"spanish",task:"transcribe"},avatar:{modelUrl:"/assets/avatar/SURI_Animations_2.glb",scale:.65,welcomeBubble:"Hola, soy Suri. Estoy listo para ayudarte.",defaultIdleState:"idle",initialExpression:"happy",initialGesture:"rest",initialPlaybackRef:"",refreshPlaybackRef:"",modelCatalog:[],chatAnimationRefs:[],bubbleAnimationRules:[],animationKeywordMap:{}},ui:{backgroundImageUrl:"/assets/fondo.png",logoUrl:"/assets/logo.png",mode:"embedded"}},rh=[{url:"./assets/avatar/SURI_Animations_2.glb",label:"Suri Animations 2",short:"S2",defaultAnimation:"idle"},{url:"./assets/avatar/Suri_Animations.glb",label:"Suri Animations",short:"SA",defaultAnimation:"idle"},{url:"./assets/avatar/suri_avatar.glb",label:"Suri base",short:"S",defaultAnimation:"idle"},{url:"./assets/avatar/Meshy_AI_Tech_Savvy_Meerkat_0610041201_generate.glb",label:"Meshy tech",short:"T",defaultAnimation:"idle"},{url:"./assets/avatar/Meshy_AI_Meshy_Merged_Animations.glb",label:"Meshy merged",short:"M",defaultAnimation:"idle"}],Al=["idle","walking","thinking","listening","speaking","speaking_explain","suggesting","tablet_reading","wave_hello","petting","celebrate","not_found","error"],u_=[{value:"espeak-wasm",label:"eSpeak"},{value:"mespeak-js",label:"meSpeak.js"},{value:"kokoro",label:"Kokoro"},{value:"browser",label:"Navegador (Web Speech)"}],ud=[{value:"es-CO",label:"Español (Colombia)"},{value:"es-ES",label:"Español (España)"},{value:"es-MX",label:"Español (México)"},{value:"es-AR",label:"Español (Argentina)"},{value:"en-US",label:"English (United States)"},{value:"en-GB",label:"English (United Kingdom)"}],tC=[{value:"normal",label:"Normal (mejor precisión)"},{value:"fast",label:"Rápido (menor latencia)"}],nC=[{value:"onnx-community/whisper-small",label:"Whisper Small (recomendado)"},{value:"onnx-community/whisper-base",label:"Whisper Base"}],iC=[{value:"medium",label:"Media"},{value:"high",label:"Alta (capta voz más suave)"},{value:"low",label:"Baja (filtra más ruido)"}],rC=[{value:"embedded",label:"embedded"},{value:"floating",label:"floating"}];function sC(n){if(!Array.isArray(n))return rh;const e=n.map(t=>({url:String((t==null?void 0:t.url)||"").trim(),label:String((t==null?void 0:t.label)||"").trim(),short:String((t==null?void 0:t.short)||"").trim(),defaultAnimation:String((t==null?void 0:t.defaultAnimation)||"").trim()})).filter(t=>t.url);return e.length?e:rh}function bl(n){var l,c,u;const e=n??{},t=e.voice??{},i=e.avatar??{},r=e.speech??{},s=((l=t.primary)==null?void 0:l.lang)||t.lang||rn.speech.lang,a=((c=t.primary)==null?void 0:c.rate)??t.rate??rn.speech.rate,o=((u=t.primary)==null?void 0:u.pitch)??t.pitch??rn.speech.pitch;return{ai:{...rn.ai,...e.ai??{}},speech:{...rn.speech,lang:s,rate:a,pitch:o,...r},voice:{...rn.voice,...t,primary:{...rn.voice.primary,...t.primary??{}},secondary:{...rn.voice.secondary,...t.secondary??{}},tts:{...rn.voice.tts,...t.tts??{}}},listening:{...rn.listening,...e.listening??{}},avatar:{...rn.avatar,...i,modelCatalog:sC(i.modelCatalog),chatAnimationRefs:Array.isArray(i.chatAnimationRefs)?i.chatAnimationRefs.map(d=>String(d)).filter(Boolean):rn.avatar.chatAnimationRefs,bubbleAnimationRules:Array.isArray(i.bubbleAnimationRules)?i.bubbleAnimationRules.map(d=>({contains:String((d==null?void 0:d.contains)||""),animationRef:String((d==null?void 0:d.animationRef)||""),priority:Number((d==null?void 0:d.priority)||0)})).filter(d=>d.contains&&d.animationRef):rn.avatar.bubbleAnimationRules,animationKeywordMap:i.animationKeywordMap&&typeof i.animationKeywordMap=="object"?Object.fromEntries(Object.entries(i.animationKeywordMap).map(([d,f])=>[String(d),String(f)])):rn.avatar.animationKeywordMap},ui:{...rn.ui,...e.ui??{}}}}function dd(n){return String(n||"").split(",").map(e=>e.trim()).filter(Boolean)}function aC(n){return String(n||"").split(",").map(e=>Number.parseInt(e.trim(),10)).filter(e=>Number.isFinite(e)&&e>0)}function Rl(n){return Array.isArray(n)?n.map(e=>String(e)).join(", "):""}function d_(n){return String(n||"").trim()}function oC(n){const e=String((n==null?void 0:n.lang)||"").toLowerCase();return e==="es"||e.startsWith("es-")}function f_(n){const e=`${(n==null?void 0:n.name)||""} ${(n==null?void 0:n.voiceURI)||""}`.toLowerCase();return["raul","pablo","jorge","enrique","miguel","alejandro","carlos","david","male","man"].some(i=>e.includes(i))}function lC(n){return{id:String(n.id||""),activo:n.activo!==!1,tema:String(n.tema||"General"),fuente:String(n.fuente||""),pagina:Array.isArray(n.pagina)?n.pagina.filter(e=>Number.isFinite(Number(e))).map(e=>Number(e)):[],pregunta:String(n.pregunta||""),variaciones:Array.isArray(n.variaciones)?n.variaciones.map(e=>String(e)).filter(Boolean):[],respuesta:String(n.respuesta||""),tags:Array.isArray(n.tags)?n.tags.map(e=>String(e)).filter(Boolean):[],faqsRelacionadas:Array.isArray(n.faqsRelacionadas)?n.faqsRelacionadas.map(e=>String(e)).filter(Boolean):[],prioridad:Number(n.prioridad||5)}}function h_(n){const e=n.map(s=>({...s,faqsRelacionadas:[...s.faqsRelacionadas]}));if(e.some(s=>s.faqsRelacionadas.length>0))return{faqs:e,linkedParents:e.filter(s=>s.faqsRelacionadas.length>0).length};const i=new Map;for(const s of e){const a=String(s.tema||"General");i.has(a)||i.set(a,[]),i.get(a).push(s)}let r=0;for(const s of i.values()){if(s.length<2)continue;const a=[...s].sort((c,u)=>(u.prioridad||0)-(c.prioridad||0)),o=a[0],l=a.slice(1,6).map(c=>c.id).filter(Boolean);l.length&&(o.faqsRelacionadas=l,r+=1)}return{faqs:e,linkedParents:r}}function fd(n,e){const t={idle:["idle","breath","stand","default","walking"],listening:["listen","ready","alert","idle","walking"],thinking:["think","ponder","inspect","idle","walking"],speaking:["speak","talk","chat","answer","walking"],suggesting:["suggest","guide","present","explain","walking"],not_found:["confused","error","sad","shrug","walking"]},i=[...n.keys()];for(const s of t[e]){const a=i.find(o=>o.includes(s));if(a)return n.get(a)??null}const r=i[0];return r?n.get(r)??null:null}function cC({modelUrl:n,scale:e,state:t,backgroundImageUrl:i,welcomeBubble:r,defaultIdleState:s,initialPlaybackRef:a}){const o=et.useRef(null),l=et.useRef(null),c=et.useRef(new Map),u=et.useRef(null),d=et.useRef(null),f=et.useRef(null),p=et.useRef(null),_=et.useRef(0),y=et.useRef(null);return et.useEffect(()=>{const m=o.current;if(!m)return;const h=new _E;d.current=h;const g=new un(34,m.clientWidth/m.clientHeight,.1,100);g.position.set(0,1.2,4.5),p.current=g;const v=new xR({antialias:!0,alpha:!0});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(m.clientWidth,m.clientHeight),v.outputColorSpace=Xt,m.innerHTML="",m.appendChild(v.domElement),f.current=v;const E=new Qf(16777215,2);E.position.set(2,4,4),h.add(E);const b=new Qf(14412542,.9);b.position.set(-3,2,1),h.add(b),h.add(new aT(16777215,.6));const w=new ET,P=()=>{const R=l.current;R&&R.update(w.getDelta()),v.render(h,g),_.current=window.requestAnimationFrame(P)},x=()=>{if(!o.current||!f.current||!p.current)return;const R=o.current.clientWidth,N=o.current.clientHeight;p.current.aspect=R/N,p.current.updateProjectionMatrix(),f.current.setSize(R,N)};return window.addEventListener("resize",x),P(),()=>{window.removeEventListener("resize",x),window.cancelAnimationFrame(_.current),v.dispose(),m.contains(v.domElement)&&m.removeChild(v.domElement),h.clear(),l.current=null,c.current.clear(),u.current=null,y.current=null}},[]),et.useEffect(()=>{if(!d.current)return;const m=new SR,h=d.current;y.current&&(h.remove(y.current),y.current=null),c.current.clear(),l.current=null,u.current=null,m.load(n,g=>{const v=g.scene;y.current=v;const E=new ai().setFromObject(v),b=E.getSize(new B),w=E.getCenter(new B);v.position.sub(w);const x=2.2/(Math.max(b.x,b.y,b.z)||1)*Math.max(.2,e||.65);v.scale.setScalar(x);const R=new ai().setFromObject(v),N=-.45;if(v.position.y+=N-R.min.y,h.add(v),g.animations.length>0){const L=new MT(v);l.current=L;const O=new Map;for(const U of g.animations)O.set(U.name.toLowerCase(),L.clipAction(U));c.current=O;const X=String(a||"").trim().toLowerCase(),$=X&&O.get(X)||fd(O,s);$&&($.reset().fadeIn(.18).play(),u.current=$)}},void 0,()=>{const g=new Mn(new _p(.55,1.2,8,16),new Xc({color:13208898,roughness:.72,metalness:.05}));g.position.set(0,.1,0),h.add(g),y.current=g})},[n,e,a,s]),et.useEffect(()=>{const m=c.current;if(!m.size)return;const h=fd(m,t);h&&(u.current&&u.current!==h&&u.current.fadeOut(.18),t==="idle"||t==="listening"||t==="thinking"?(h.enabled=!0,h.reset().fadeIn(.18).play(),h.timeScale=.3):(h.enabled=!0,h.reset().fadeIn(.18).play(),h.timeScale=1),u.current=h)},[t]),I.jsxs("aside",{className:"avatar-panel",children:[i?I.jsx("img",{className:"avatar-bg",src:i,alt:"fondo"}):null,I.jsx("div",{className:"avatar-canvas",ref:o}),I.jsx("div",{className:"avatar-bubble",children:r||"Hola, soy Suri. Estoy listo para ayudarte."})]})}function uC(){const[n,e]=et.useState("chat"),[t,i]=et.useState("Inicializando..."),[r,s]=et.useState(!0),[a,o]=et.useState(bl().avatar.defaultIdleState),[l,c]=et.useState([]),[u,d]=et.useState(bl()),[f,p]=et.useState(JSON.stringify(rn,null,2)),[_,y]=et.useState([]),[m,h]=et.useState(null),[g,v]=et.useState([{id:"boot",role:"assistant",text:"Hola, soy SURI. Escribe tu consulta.",timestamp:Date.now()}]),[E,b]=et.useState(""),[w,P]=et.useState(!1),[x,R]=et.useState(!1),N=et.useRef(null),L=et.useMemo(()=>!!E.trim()&&!w&&!r,[r,w,E]),O=et.useMemo(()=>{const C=new Map;for(const re of _)re.id&&C.set(String(re.id),re);const M=[];for(const re of _){const ye=Array.isArray(re.faqsRelacionadas)?re.faqsRelacionadas:[];if(!ye.length)continue;const Ae=ye.map(te=>C.get(String(te))).filter(te=>!!te);Ae.length&&M.push({parent:re,children:Ae})}return M},[_]),X=u.speech.enabled&&typeof window<"u"&&"speechSynthesis"in window,$=u.avatar.modelCatalog.length?u.avatar.modelCatalog:rh,U=["idle","listening","thinking","speaking","suggesting","not_found"],W=["happy","neutral","curious","excited","calm","surprised"],V=["rest","wave","point","explain","listen"],z=l.length>0?l:[],K=C=>{const M=l.length?l:window.speechSynthesis.getVoices();if(!M.length)return null;const re=C==="primary"?u.voice.primary:u.voice.secondary,ye=re.lang||u.speech.lang,Ae=d_(re.browserVoice),te=d_(C==="primary"?u.voice.secondary.browserVoice:u.voice.primary.browserVoice),nt=Ae?M.find(q=>q.name===Ae):null;if(nt)return nt;const A=M.filter(q=>String(q.lang||"").toLowerCase()===String(ye||"").toLowerCase()),S=A.filter(oC),k=A.filter(q=>q.name!==te);if(C==="primary"){const q=S.find(f_);if(q)return q;if(S.length)return S[0];if(k.length)return k[0]}else{const q=S.find(ne=>!f_(ne));if(q)return q;if(k.length)return k[0];if(S.length)return S.find(ne=>ne.name!==te)||S[0]||null}return M.find(q=>String(q.lang||"").toLowerCase()===String(ye||"").toLowerCase())||M[0]||null};et.useEffect(()=>{if(typeof window>"u"||!("speechSynthesis"in window))return;const C=()=>{c(window.speechSynthesis.getVoices())};return C(),window.speechSynthesis.addEventListener("voiceschanged",C),()=>{window.speechSynthesis.removeEventListener("voiceschanged",C)}},[]);const Q=C=>C?new Date(C).toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"}):"",ae=(C,M=1,re="primary")=>{if(!X)return;const ye=String(C||"").trim();if(!ye)return;const Ae=re==="primary"?u.voice.primary:u.voice.secondary,te=Ae.lang||u.speech.lang,nt=Ae.rate??u.speech.rate,A=Ae.pitch??u.speech.pitch,S=K(re);window.speechSynthesis.cancel();for(let k=0;k<Math.max(1,M);k+=1){const q=new SpeechSynthesisUtterance(ye);q.lang=te,q.rate=nt,q.pitch=A,S&&(q.voice=S),window.speechSynthesis.speak(q)}},me=C=>{!C||!C.repeatable||ae(C.text,u.speech.repeatCount,"secondary")},Ge=async C=>{try{await navigator.clipboard.writeText(C.text),i("Respuesta copiada")}catch{i("No se pudo copiar la respuesta")}};et.useEffect(()=>{N.current&&N.current.scrollIntoView({behavior:"smooth",block:"end"})},[g,w]);const Ke=()=>{if(x||w||r||typeof window>"u")return;const C=window.SpeechRecognition||window.webkitSpeechRecognition;if(!C){i("Tu navegador no soporta reconocimiento de voz.");return}const M=new C;M.lang="es-CO",M.interimResults=!1,M.maxAlternatives=1,R(!0),i("Escuchando..."),M.onresult=re=>{var Ae,te,nt;const ye=String(((nt=(te=(Ae=re.results)==null?void 0:Ae[0])==null?void 0:te[0])==null?void 0:nt.transcript)||"").trim();ye&&(b(ye),Le(ye))},M.onerror=()=>{i("No se pudo usar el micrófono.")},M.onend=()=>{R(!1)},M.start()},Ue=async()=>{const C=await fetch("/api/config");if(!C.ok)throw new Error("No se pudo cargar /api/config");const M=await C.json(),re=bl(M.config),ye=String(re.avatar.modelUrl||"").trim();ye.startsWith("./")&&(re.avatar.modelUrl=ye.slice(1));const Ae=String(re.ui.backgroundImageUrl||"").trim(),te=String(re.ui.logoUrl||"").trim();re.ui.backgroundImageUrl=Ae||"/assets/fondo.png",re.ui.logoUrl=te||"/assets/logo.png",re.ui.mode=["embedded","floating"].includes(String(re.ui.mode||"").trim())?String(re.ui.mode).trim():"embedded",d(re),p(JSON.stringify(re,null,2)),o(re.avatar.defaultIdleState||"idle")},Z=async()=>{const C=await fetch("/api/faqs");if(!C.ok)throw new Error("No se pudo cargar /api/faqs");const M=await C.json(),re=Array.isArray(M.faqs)?M.faqs.map(Ae=>lC(Ae)):[],ye=h_(re);y(ye.faqs),ye.linkedParents>0&&i(`Sincronizado (relaciones cargadas: ${ye.linkedParents})`)},de=async()=>{const C=await fetch("/api/app-info");if(!C.ok)throw new Error("No se pudo cargar /api/app-info");const M=await C.json();h(M)},oe=async()=>{i("Sincronizando con backend..."),await Promise.all([Ue(),Z(),de()]),i("Sincronizado")};et.useEffect(()=>{(async()=>{try{await oe()}catch(M){i(M instanceof Error?M.message:"No se pudo inicializar")}finally{s(!1)}})()},[]);const Le=async C=>{var re;const M=C.trim();if(!(!M||w)){v(ye=>[...ye,{id:`${Date.now()}-u`,role:"user",text:M,timestamp:Date.now()}]),b(""),P(!0),o("thinking"),i("Consultando...");try{const ye=await fetch("/api/chat/ask",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userText:M,responseMode:u.ai.responseMode,faqSimilarityThreshold:u.ai.faqSimilarityThreshold,llmProvider:u.ai.provider})});if(!ye.ok){const q=await ye.text();throw new Error(`Error ${ye.status}: ${q}`)}const Ae=await ye.json(),te=Ae.faqResult??null,nt=te==null?void 0:te.score,A=(re=te==null?void 0:te.resultado)==null?void 0:re.fuente,S=[Ae.responseMethod?`metodo: ${Ae.responseMethod}`:"",typeof nt=="number"?`similitud: ${Math.round(nt*100)}%`:"",A?`fuente: ${A}`:""].filter(Boolean),k=Ae.suggestions||(te==null?void 0:te.sugerencias)||[];v(q=>[...q,{id:`${Date.now()}-a`,role:"assistant",text:Ae.answer||"No fue posible generar respuesta",timestamp:Date.now(),meta:S.join(" | "),suggestions:k,repeatable:!0}]),u.speech.autoRead&&ae(Ae.answer||"No fue posible generar respuesta",1),(te==null?void 0:te.tipo)==="sugerencias"?o("suggesting"):(te==null?void 0:te.tipo)==="no_encontrado"?o("not_found"):o("speaking"),i("Respuesta lista"),window.setTimeout(()=>o(u.avatar.defaultIdleState),1800)}catch(ye){v(Ae=>[...Ae,{id:`${Date.now()}-e`,role:"assistant",text:"No pude responder en este momento.",timestamp:Date.now(),repeatable:!0}]),u.speech.autoRead&&ae("No pude responder en este momento.",1),o("not_found"),i(ye instanceof Error?ye.message:"Error no controlado"),window.setTimeout(()=>o(u.avatar.defaultIdleState),1800)}finally{P(!1)}}},Fe=async C=>{C.preventDefault(),await Le(E)},Ne=async()=>{if(i("Guardando configuracion..."),!(await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:u})})).ok)throw new Error("No se pudo guardar la configuracion");await de(),i("Configuracion guardada")},yt=async()=>{const C=bl(JSON.parse(f));if(d(C),!(await fetch("/api/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:C})})).ok)throw new Error("No se pudo persistir el JSON");await de(),i("JSON aplicado")},Ye=async()=>{if(i("Guardando FAQs..."),!(await fetch("/api/faqs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({faqs:_})})).ok)throw new Error("No se pudieron guardar FAQs");await Promise.all([Z(),de()]),i("FAQs guardadas")},ot=async()=>{if(i("Restaurando FAQs base..."),!(await fetch("/api/faqs/reset",{method:"POST"})).ok)throw new Error("No se pudieron restaurar FAQs");await Promise.all([Z(),de()]),i("FAQs restauradas")},pt=()=>{y(C=>[...C,{id:`faq-${Date.now()}`,activo:!0,tema:"General",fuente:"",pagina:[],pregunta:"",variaciones:[],respuesta:"",tags:[],faqsRelacionadas:[],prioridad:5}])},je=C=>{y(M=>M.filter((re,ye)=>ye!==C))},at=(C,M,re)=>{y(ye=>ye.map((Ae,te)=>te!==C?Ae:M==="activo"?{...Ae,activo:!!re}:M==="pagina"?{...Ae,pagina:aC(String(re))}:M==="variaciones"?{...Ae,variaciones:dd(String(re))}:M==="tags"?{...Ae,tags:dd(String(re))}:M==="faqsRelacionadas"?{...Ae,faqsRelacionadas:dd(String(re))}:M==="prioridad"?{...Ae,prioridad:Number(re)||0}:{...Ae,[M]:re}))},St=()=>{y(C=>{const M=h_(C);return i(`Relaciones padre-hija cargadas: ${M.linkedParents}`),M.faqs})};return I.jsx("main",{className:"shell",children:I.jsxs("section",{className:"panel",children:[I.jsxs("header",{className:"header",children:[I.jsxs("div",{className:"brand-wrap",children:[u.ui.logoUrl?I.jsx("img",{className:"logo",src:u.ui.logoUrl,alt:"logo"}):null,I.jsxs("div",{className:"brand-copy",children:[I.jsx("h1",{children:"SURI 2.0"}),I.jsx("p",{children:"Asistente DIARI - Interfaz restaurada"}),I.jsx("span",{className:"brand-status",children:"Backend sincronizado"})]})]}),I.jsxs("div",{className:"actions",children:[I.jsx("button",{type:"button",onClick:()=>void oe(),disabled:r||w,children:"Recargar"}),I.jsx("button",{type:"button",onClick:()=>{v([{id:`reset-${Date.now()}`,role:"system",text:"Chat reiniciado.",timestamp:Date.now()}]),o(u.avatar.defaultIdleState),i("Chat reiniciado"),typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},children:"Reiniciar chat"})]})]}),I.jsxs("nav",{className:"tabs",children:[I.jsx("button",{type:"button",className:n==="chat"?"active":"",onClick:()=>e("chat"),children:"Chat"}),I.jsx("button",{type:"button",className:n==="config"?"active":"",onClick:()=>e("config"),children:"Configuracion"}),I.jsx("button",{type:"button",className:n==="faqs"?"active":"",onClick:()=>e("faqs"),children:"FAQs"}),I.jsx("button",{type:"button",className:n==="info"?"active":"",onClick:()=>e("info"),children:"Info"})]}),n==="chat"&&I.jsxs("section",{className:"chat-layout",children:[I.jsx(cC,{modelUrl:u.avatar.modelUrl||"/assets/avatar/SURI_Animations_2.glb",scale:u.avatar.scale,state:a,backgroundImageUrl:u.ui.backgroundImageUrl||"/assets/fondo.png",welcomeBubble:u.avatar.welcomeBubble,defaultIdleState:u.avatar.defaultIdleState||"idle",initialPlaybackRef:u.avatar.initialPlaybackRef||""}),I.jsxs("section",{className:"tab-content chat-pane",children:[I.jsxs("div",{className:"messages",children:[g.map(C=>I.jsxs("article",{className:`bubble ${C.role}`,children:[I.jsxs("header",{className:"bubble-head",children:[I.jsx("strong",{children:C.role==="user"?"Tu":C.role==="assistant"?"SURI":"Sistema"}),I.jsx("span",{children:Q(C.timestamp)})]}),I.jsx("p",{children:C.text}),C.meta&&I.jsx("small",{children:C.meta}),Array.isArray(C.suggestions)&&C.suggestions.length>0&&I.jsx("div",{className:"suggestions",children:C.suggestions.map(M=>I.jsxs("button",{type:"button",onClick:()=>{Le(M.pregunta)},children:[M.tema,": ",M.pregunta]},`${C.id}-${M.id}`))}),C.role==="assistant"?I.jsxs("div",{className:"message-actions",children:[I.jsx("button",{type:"button",onClick:()=>me(C),disabled:!X,children:"Repetir"}),I.jsx("button",{type:"button",onClick:()=>void Ge(C),children:"Copiar"})]}):null]},C.id)),w?I.jsx("article",{className:"bubble assistant pending",children:I.jsx("p",{children:"SURI está preparando su respuesta..."})}):null,I.jsx("div",{ref:N})]}),I.jsxs("div",{className:"quick-actions",children:[I.jsx("button",{type:"button",onClick:()=>{v([{id:`reset-${Date.now()}`,role:"system",text:"Chat reiniciado.",timestamp:Date.now()}]),o(u.avatar.defaultIdleState),i("Chat reiniciado"),typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},children:"Limpiar chat"}),I.jsx("button",{type:"button",onClick:()=>me([...g].reverse().find(C=>C.role==="assistant")),disabled:!X,children:"Repetir última respuesta"})]}),I.jsxs("form",{className:"composer",onSubmit:Fe,children:[I.jsx("button",{type:"button",className:`mic-button ${x?"recording":""}`,onClick:()=>{Ke()},"aria-label":"Hablar con SURI",title:"Hablar con SURI",disabled:r||w,children:x?"■":"🎤"}),I.jsx("input",{value:E,onChange:C=>b(C.target.value),placeholder:"Escribe tu consulta",disabled:r||w}),I.jsx("button",{type:"submit",disabled:!L,children:w?"Enviando...":"Enviar"})]}),I.jsx("p",{className:"status",children:t})]})]}),n==="config"&&I.jsxs("section",{className:"tab-content",children:[I.jsx("h2",{children:"Configuracion AI y Avatar"}),I.jsx("h3",{children:"Chat y voz"}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("label",{children:["Modo de respuesta",I.jsxs("select",{value:u.ai.responseMode,onChange:C=>d(M=>({...M,ai:{...M.ai,responseMode:C.target.value}})),children:[I.jsx("option",{value:"faqs",children:"FAQs"}),I.jsx("option",{value:"hybrid",children:"Hibrido"}),I.jsx("option",{value:"llm",children:"LLM"})]})]}),I.jsxs("label",{children:["Proveedor",I.jsxs("select",{value:u.ai.provider,onChange:C=>d(M=>({...M,ai:{...M.ai,provider:C.target.value}})),children:[I.jsx("option",{value:"mock",children:"Mock"}),I.jsx("option",{value:"openai",children:"OpenAI"}),I.jsx("option",{value:"gemini",children:"Gemini"})]})]}),I.jsxs("label",{children:["Umbral de similitud",I.jsx("input",{type:"number",min:0,max:1,step:.01,value:u.ai.faqSimilarityThreshold,onChange:C=>d(M=>({...M,ai:{...M.ai,faqSimilarityThreshold:Math.max(0,Math.min(1,Number(C.target.value)||0))}}))})]}),I.jsxs("label",{children:["Voz activa",I.jsxs("select",{value:u.speech.enabled?"si":"no",onChange:C=>d(M=>({...M,speech:{...M.speech,enabled:C.target.value==="si"}})),children:[I.jsx("option",{value:"si",children:"Si"}),I.jsx("option",{value:"no",children:"No"})]})]}),I.jsxs("label",{children:["Auto lectura",I.jsxs("select",{value:u.speech.autoRead?"si":"no",onChange:C=>d(M=>({...M,speech:{...M.speech,autoRead:C.target.value==="si"}})),children:[I.jsx("option",{value:"si",children:"Si"}),I.jsx("option",{value:"no",children:"No"})]})]}),I.jsxs("label",{children:["Repeticiones al repetir",I.jsx("input",{type:"number",min:1,max:3,step:1,value:u.speech.repeatCount,onChange:C=>d(M=>({...M,speech:{...M.speech,repeatCount:Math.max(1,Math.min(3,Number(C.target.value)||1))}}))})]}),I.jsxs("label",{children:["Idioma voz",I.jsx("select",{value:u.speech.lang,onChange:C=>d(M=>({...M,speech:{...M.speech,lang:C.target.value}})),children:ud.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Velocidad voz",I.jsx("input",{type:"number",min:.7,max:1.4,step:.05,value:u.speech.rate,onChange:C=>d(M=>({...M,speech:{...M.speech,rate:Math.max(.7,Math.min(1.4,Number(C.target.value)||1))}}))})]}),I.jsxs("label",{children:["Tono voz",I.jsx("input",{type:"number",min:.7,max:1.4,step:.05,value:u.speech.pitch,onChange:C=>d(M=>({...M,speech:{...M.speech,pitch:Math.max(.7,Math.min(1.4,Number(C.target.value)||1))}}))})]})]}),I.jsx("h3",{children:"Voz primaria y secundaria"}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("label",{children:["Voz primaria idioma",I.jsx("select",{value:u.voice.primary.lang,onChange:C=>d(M=>({...M,voice:{...M.voice,primary:{...M.voice.primary,lang:C.target.value}}})),children:ud.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Voz primaria engine",I.jsx("select",{value:u.voice.primary.engine,onChange:C=>d(M=>({...M,voice:{...M.voice,primary:{...M.voice.primary,engine:C.target.value}}})),children:u_.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Voz primaria navegador",I.jsxs("select",{value:u.voice.primary.browserVoice,onChange:C=>d(M=>({...M,voice:{...M.voice,primary:{...M.voice.primary,browserVoice:C.target.value}}})),children:[I.jsx("option",{value:"",children:"Automatica"}),z.map(C=>I.jsxs("option",{value:C.name,children:[C.name," (",C.lang,")"]},C.name))]})]}),I.jsxs("label",{children:["Voz primaria velocidad",I.jsx("input",{type:"number",step:.05,min:.5,max:1.8,value:u.voice.primary.rate,onChange:C=>d(M=>({...M,voice:{...M.voice,primary:{...M.voice.primary,rate:Number(C.target.value)||1}}}))})]}),I.jsxs("label",{children:["Voz primaria tono",I.jsx("input",{type:"number",step:.05,min:.5,max:1.8,value:u.voice.primary.pitch,onChange:C=>d(M=>({...M,voice:{...M.voice,primary:{...M.voice.primary,pitch:Number(C.target.value)||1}}}))})]}),I.jsxs("label",{children:["Voz secundaria idioma",I.jsx("select",{value:u.voice.secondary.lang,onChange:C=>d(M=>({...M,voice:{...M.voice,secondary:{...M.voice.secondary,lang:C.target.value}}})),children:ud.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Voz secundaria engine",I.jsx("select",{value:u.voice.secondary.engine,onChange:C=>d(M=>({...M,voice:{...M.voice,secondary:{...M.voice.secondary,engine:C.target.value}}})),children:u_.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Voz secundaria navegador",I.jsxs("select",{value:u.voice.secondary.browserVoice,onChange:C=>d(M=>({...M,voice:{...M.voice,secondary:{...M.voice.secondary,browserVoice:C.target.value}}})),children:[I.jsx("option",{value:"",children:"Automatica"}),z.map(C=>I.jsxs("option",{value:C.name,children:[C.name," (",C.lang,")"]},C.name))]})]}),I.jsxs("label",{children:["Voz secundaria velocidad",I.jsx("input",{type:"number",step:.05,min:.5,max:1.8,value:u.voice.secondary.rate,onChange:C=>d(M=>({...M,voice:{...M.voice,secondary:{...M.voice.secondary,rate:Number(C.target.value)||1}}}))})]}),I.jsxs("label",{children:["Voz secundaria tono",I.jsx("input",{type:"number",step:.05,min:.5,max:1.8,value:u.voice.secondary.pitch,onChange:C=>d(M=>({...M,voice:{...M.voice,secondary:{...M.voice.secondary,pitch:Number(C.target.value)||1}}}))})]}),I.jsxs("label",{children:["TTS engine general",I.jsx("input",{value:u.voice.tts.engine,onChange:C=>d(M=>({...M,voice:{...M.voice,tts:{...M.voice.tts,engine:C.target.value}}}))})]})]}),I.jsx("h3",{children:"Configuracion SURI (respuestas y estados)"}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("label",{children:["Estado idle por defecto",I.jsx("select",{value:u.avatar.defaultIdleState,onChange:C=>{const M=C.target.value;d(re=>({...re,avatar:{...re.avatar,defaultIdleState:M}})),o(M)},children:U.map(C=>I.jsx("option",{value:C,children:C},C))})]}),I.jsxs("label",{children:["Expresion inicial",I.jsx("select",{value:u.avatar.initialExpression,onChange:C=>d(M=>({...M,avatar:{...M.avatar,initialExpression:C.target.value}})),children:W.map(C=>I.jsx("option",{value:C,children:C},C))})]}),I.jsxs("label",{children:["Gesto inicial",I.jsx("select",{value:u.avatar.initialGesture,onChange:C=>d(M=>({...M,avatar:{...M.avatar,initialGesture:C.target.value}})),children:V.map(C=>I.jsx("option",{value:C,children:C},C))})]}),I.jsxs("label",{children:["Animación inicial",I.jsxs("select",{value:u.avatar.initialPlaybackRef||"",onChange:C=>d(M=>({...M,avatar:{...M.avatar,initialPlaybackRef:C.target.value}})),children:[I.jsx("option",{value:"",children:"Automática"}),Al.map(C=>I.jsx("option",{value:C,children:C},C))]})]}),I.jsxs("label",{children:["Animación de refresh",I.jsxs("select",{value:u.avatar.refreshPlaybackRef||"",onChange:C=>d(M=>({...M,avatar:{...M.avatar,refreshPlaybackRef:C.target.value}})),children:[I.jsx("option",{value:"",children:"Automática"}),Al.map(C=>I.jsx("option",{value:C,children:C},C))]})]}),I.jsxs("label",{children:["Animaciones para chat",I.jsx("select",{multiple:!0,size:Math.min(8,Al.length),value:u.avatar.chatAnimationRefs,onChange:C=>d(M=>({...M,avatar:{...M.avatar,chatAnimationRefs:Array.from(C.currentTarget.selectedOptions).map(re=>re.value)}})),children:Al.map(C=>I.jsx("option",{value:C,children:C},C))})]})]}),I.jsxs("label",{className:"block",children:["Reglas burbuja a animacion (JSON)",I.jsx("textarea",{rows:4,value:JSON.stringify(u.avatar.bubbleAnimationRules,null,2),onChange:C=>{try{const M=JSON.parse(C.target.value);Array.isArray(M)&&d(re=>({...re,avatar:{...re.avatar,bubbleAnimationRules:M}}))}catch{}}})]}),I.jsxs("label",{className:"block",children:["Mapa keyword a animacion (JSON)",I.jsx("textarea",{rows:4,value:JSON.stringify(u.avatar.animationKeywordMap,null,2),onChange:C=>{try{const M=JSON.parse(C.target.value);M&&typeof M=="object"&&d(re=>({...re,avatar:{...re.avatar,animationKeywordMap:M}}))}catch{}}})]}),I.jsx("h3",{children:"Escucha (STT)"}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("label",{children:["Modo escucha",I.jsx("select",{value:u.listening.mode,onChange:C=>d(M=>({...M,listening:{...M.listening,mode:C.target.value}})),children:tC.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Modelo escucha",I.jsx("select",{value:u.listening.model,onChange:C=>d(M=>({...M,listening:{...M.listening,model:C.target.value}})),children:nC.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Sensibilidad",I.jsx("select",{value:u.listening.sensitivity,onChange:C=>d(M=>({...M,listening:{...M.listening,sensitivity:C.target.value}})),children:iC.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]}),I.jsxs("label",{children:["Idioma escucha",I.jsx("input",{value:u.listening.language,onChange:C=>d(M=>({...M,listening:{...M.listening,language:C.target.value}}))})]}),I.jsxs("label",{children:["Tarea escucha",I.jsx("input",{value:u.listening.task,onChange:C=>d(M=>({...M,listening:{...M.listening,task:C.target.value}}))})]})]}),I.jsxs("div",{className:"form-grid",children:[I.jsxs("label",{children:["Modelo principal",I.jsx("input",{value:u.ai.primaryModel,onChange:C=>d(M=>({...M,ai:{...M.ai,primaryModel:C.target.value}}))})]}),I.jsxs("label",{children:["Modelo secundario",I.jsx("input",{value:u.ai.secondaryModel,onChange:C=>d(M=>({...M,ai:{...M.ai,secondaryModel:C.target.value}}))})]}),I.jsxs("label",{children:["API Key",I.jsx("input",{value:u.ai.apiKey,onChange:C=>d(M=>({...M,ai:{...M.ai,apiKey:C.target.value}}))})]}),I.jsxs("label",{children:["Modelo avatar",I.jsxs("select",{value:u.avatar.modelUrl,onChange:C=>d(M=>({...M,avatar:{...M.avatar,modelUrl:C.target.value}})),children:[$.map(C=>I.jsxs("option",{value:C.url,children:[C.label||C.url," ",C.short?`(${C.short})`:""]},C.url)),$.some(C=>C.url===u.avatar.modelUrl)?null:I.jsx("option",{value:u.avatar.modelUrl,children:u.avatar.modelUrl})]})]}),I.jsxs("label",{children:["Escala avatar",I.jsx("input",{type:"number",step:.05,min:.2,max:2,value:u.avatar.scale,onChange:C=>d(M=>({...M,avatar:{...M.avatar,scale:Number(C.target.value)||.65}}))})]}),I.jsxs("label",{children:["Fondo avatar",I.jsx("input",{value:u.ui.backgroundImageUrl,onChange:C=>d(M=>({...M,ui:{...M.ui,backgroundImageUrl:C.target.value}}))})]}),I.jsxs("label",{children:["Modo UI",I.jsx("select",{value:u.ui.mode||"embedded",onChange:C=>d(M=>({...M,ui:{...M.ui,mode:C.target.value}})),children:rC.map(C=>I.jsx("option",{value:C.value,children:C.label},C.value))})]})]}),I.jsxs("label",{className:"block",children:["Burbuja de bienvenida",I.jsx("textarea",{rows:3,value:u.avatar.welcomeBubble,onChange:C=>d(M=>({...M,avatar:{...M.avatar,welcomeBubble:C.target.value}}))})]}),I.jsxs("label",{className:"block",children:["Prompt del sistema",I.jsx("textarea",{rows:5,value:u.ai.systemPrompt,onChange:C=>d(M=>({...M,ai:{...M.ai,systemPrompt:C.target.value}}))})]}),I.jsxs("div",{className:"actions",children:[I.jsx("button",{type:"button",onClick:()=>void Ue(),children:"Recargar"}),I.jsx("button",{type:"button",onClick:()=>void Ne(),children:"Guardar"})]}),I.jsx("h3",{children:"JSON configuracion"}),I.jsx("textarea",{className:"json",rows:12,value:f,onChange:C=>p(C.target.value)}),I.jsx("div",{className:"actions",children:I.jsx("button",{type:"button",onClick:()=>void yt(),children:"Aplicar JSON"})})]}),n==="faqs"&&I.jsxs("section",{className:"tab-content",children:[I.jsxs("div",{className:"actions",children:[I.jsx("button",{type:"button",onClick:pt,children:"Agregar fila"}),I.jsx("button",{type:"button",onClick:St,children:"Cargar relaciones padre-hija"}),I.jsx("button",{type:"button",onClick:()=>void Ye(),children:"Guardar FAQs"}),I.jsx("button",{type:"button",onClick:()=>void ot(),children:"Reset base"})]}),I.jsx("div",{className:"table-wrap",children:I.jsxs("table",{children:[I.jsx("thead",{children:I.jsxs("tr",{children:[I.jsx("th",{children:"Activo"}),I.jsx("th",{children:"ID"}),I.jsx("th",{children:"Tema"}),I.jsx("th",{children:"Fuente"}),I.jsx("th",{children:"Variaciones"}),I.jsx("th",{children:"Pregunta"}),I.jsx("th",{children:"Respuesta"}),I.jsx("th",{children:"Tags"}),I.jsx("th",{children:"Paginas"}),I.jsx("th",{children:"FAQs hijas (IDs)"}),I.jsx("th",{children:"Prioridad"}),I.jsx("th",{children:"Acciones"})]})}),I.jsx("tbody",{children:_.map((C,M)=>I.jsxs("tr",{children:[I.jsx("td",{children:I.jsx("input",{type:"checkbox",checked:C.activo,onChange:re=>at(M,"activo",re.target.checked)})}),I.jsx("td",{children:I.jsx("input",{value:C.id,onChange:re=>at(M,"id",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:C.tema,onChange:re=>at(M,"tema",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:C.fuente,onChange:re=>at(M,"fuente",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:Rl(C.variaciones),onChange:re=>at(M,"variaciones",re.target.value)})}),I.jsx("td",{children:I.jsx("textarea",{rows:2,value:C.pregunta,onChange:re=>at(M,"pregunta",re.target.value)})}),I.jsx("td",{children:I.jsx("textarea",{rows:2,value:C.respuesta,onChange:re=>at(M,"respuesta",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:Rl(C.tags),onChange:re=>at(M,"tags",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:Rl(C.pagina),onChange:re=>at(M,"pagina",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{value:Rl(C.faqsRelacionadas),onChange:re=>at(M,"faqsRelacionadas",re.target.value)})}),I.jsx("td",{children:I.jsx("input",{type:"number",value:C.prioridad,onChange:re=>at(M,"prioridad",re.target.value)})}),I.jsx("td",{children:I.jsx("button",{type:"button",onClick:()=>je(M),children:"Eliminar"})})]},C.id||`${M}`))})]})}),I.jsx("h3",{children:"Mapa mental FAQ (padre-hija)"}),O.length===0?I.jsx("p",{children:"No hay relaciones definidas en faqsRelacionadas."}):I.jsx("div",{className:"faq-map-grid",children:O.map((C,M)=>I.jsxs("article",{className:"faq-map-card",children:[I.jsxs("h4",{children:["Padre: ",C.parent.id]}),I.jsx("p",{children:C.parent.pregunta}),I.jsx("div",{className:"faq-map-children",children:C.children.map(re=>I.jsxs("span",{className:"faq-child-pill",children:[re.id,": ",re.pregunta]},`${C.parent.id}-${re.id}`))})]},`${C.parent.id}-${M}`))})]}),n==="info"&&I.jsxs("section",{className:"tab-content",children:[I.jsx("h2",{children:"Informacion principal"}),m?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"cards",children:[I.jsxs("article",{children:[I.jsx("h3",{children:"FAQ Total"}),I.jsx("p",{children:m.summary.faqTotal})]}),I.jsxs("article",{children:[I.jsx("h3",{children:"FAQ Activas"}),I.jsx("p",{children:m.summary.faqActivas})]}),I.jsxs("article",{children:[I.jsx("h3",{children:"Temas"}),I.jsx("p",{children:m.summary.topics})]}),I.jsxs("article",{children:[I.jsx("h3",{children:"Modo"}),I.jsx("p",{children:m.summary.responseMode})]})]}),I.jsx("h3",{children:"Temas por frecuencia"}),I.jsx("ul",{className:"topics",children:Object.entries(m.topics).map(([C,M])=>I.jsxs("li",{children:[I.jsx("span",{children:C}),I.jsx("strong",{children:M})]},C))})]}):I.jsx("p",{children:"No disponible"})]})]})})}hd.createRoot(document.getElementById("root")).render(I.jsx(Vx.StrictMode,{children:I.jsx(uC,{})}));
