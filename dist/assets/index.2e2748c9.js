var h=Object.defineProperty,k=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(r,e,a)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,u=(r,e)=>{for(var a in e||(e={}))w.call(e,a)&&f(r,a,e[a]);if(_)for(var a of _(e))y.call(e,a)&&f(r,a,e[a]);return r},i=(r,e)=>k(r,x(e));import{d as v,r as p,o as g,c as d,a as C,w as O,bO as B,Z as E,aC as F,aD as I,as as N,u as s}from"./index.19f5ef3b.js";const S=["onDragenter","onDragend","onDragstart"],z=v({name:"NestingFirstPage"}),P=v(i(u({},z),{setup(r){const e=p([{id:1,label:"\u5217\u88681",isDrag:!1},{id:2,label:"\u5217\u88682"},{id:3,label:"\u5217\u88683"},{id:4,label:"\u5217\u88684"},{id:5,label:"\u5217\u88685"},{id:6,label:"\u5217\u88686"}]),a=p(-1);function b(n){console.log("gragIndex",n),a.value=n}function D(n,l){if(n.preventDefault(),s(a)!==l){const t=s(e)[s(a)];if(!t)return;console.log(t),e.value.splice(s(a),1),e.value.splice(l,0,i(u({},t),{isDrag:!0})),a.value=l}}function m(n,l){console.log("dragOver"),n.preventDefault(),e.value[s(a)].isDrag=!1,a.value=-1}return(n,l)=>(g(),d("div",null,[C(B,{name:"drag",tag:"ul"},{default:O(()=>[(g(!0),d(E,null,F(e.value,(t,c)=>(g(),d("li",{key:t.id,class:I(["mb-small p-mini",[t.isDrag?"bg-white text-white border border-solid border-pink-600":"bg-pink-400"]]),draggable:!0,onDragenter:o=>D(o,c),onDragend:o=>m(o),onDragstart:o=>b(c)},N(t.label),43,S))),128))]),_:1})]))}}));export{P as default};
