"use strict";var e=function(r,i){return function(){try{return i||r((i={exports:{}}).exports,i),i.exports}catch(m){throw (i=0, m)}};};var s=e(function(g,n){
var o=require('@stdlib/assert-is-number/dist').isPrimitive,b=require('@stdlib/math-base-assert-is-nan/dist');function O(r){return o(r)&&b(r)}n.exports=O
});var t=e(function(h,a){
var f=require('@stdlib/assert-is-number/dist').isObject,j=require('@stdlib/math-base-assert-is-nan/dist');function p(r){return f(r)&&j(r.valueOf())}a.exports=p
});var c=e(function(k,v){
var x=s(),N=t();function P(r){return x(r)||N(r)}v.exports=P
});var q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),d=s(),y=t();q(u,"isPrimitive",d);q(u,"isObject",y);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
