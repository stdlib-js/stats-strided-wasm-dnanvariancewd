"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=d(function(H,y){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));y.exports=A
});var v=d(function(I,h){
var O=require('@stdlib/assert-is-wasm-memory/dist'),f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=q();function t(e){if(!(this instanceof t))return new t(e);if(!O(e))throw new TypeError(g('2WLH0',e));return w.call(this,j,e,{env:{memory:e}}),this}S(t,w);f(t.prototype,"main",function(r,a,n,i){return this._instance.exports.stdlib_strided_dnanvariancewd(r,a,n,i)});f(t.prototype,"ndarray",function(r,a,n,i,o){return this._instance.exports.stdlib_strided_dnanvariancewd_ndarray(r,a,n,i,o)});h.exports=t
});var _=d(function(J,M){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),c=v();function s(){return this instanceof s?(c.call(this,new E({initial:0})),this):new s}z(s,c);m(s.prototype,"main",function(r,a,n,i){return this.ndarray(r,a,n,i,B(r,i))});m(s.prototype,"ndarray",function(r,a,n,i,o){var p,u;return p=T(this,[V(r,n,i,o)]),u=p[0],c.prototype.ndarray.call(this,r,a,u.ptr,u.stride,u.offset)});M.exports=s
});var x=d(function(K,b){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=_(),D=v(),l=new C;k(l,"Module",D.bind(null));l.initializeSync();b.exports=l
});var F=x();module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
