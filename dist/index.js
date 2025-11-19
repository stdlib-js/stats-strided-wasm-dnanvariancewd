"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=o(function(H,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));y.exports=A
});var v=o(function(I,h){
var O=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=q();function n(e){if(!(this instanceof n))return new n(e);if(!O(e))throw new TypeError(g('2WLH0',e));return w.call(this,j,e,{env:{memory:e}}),this}S(n,w);f(n.prototype,"main",function(r,i,t,a){return this._instance.exports.stdlib_strided_dnanvariancewd(r,i,t,a)});f(n.prototype,"ndarray",function(r,i,t,a,d){return this._instance.exports.stdlib_strided_dnanvariancewd_ndarray(r,i,t,a,d)});h.exports=n
});var _=o(function(J,M){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new E({initial:0})),this):new s}z(s,c);m(s.prototype,"main",function(r,i,t,a){return this.ndarray(r,i,t,a,B(r,a))});m(s.prototype,"ndarray",function(r,i,t,a,d){var p,u;return p=T(this,[V(r,t,a,d)]),u=p[0],c.prototype.ndarray.call(this,r,i,u.ptr,u.stride,u.offset)});M.exports=s
});var x=o(function(K,b){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=_(),D=v(),l=new C;k(l,"Module",D);l.initializeSync();b.exports=l
});var F=x();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
