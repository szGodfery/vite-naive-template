var c=Object.defineProperty,p=Object.defineProperties;var i=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var a=(s,e,o)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,n=(s,e)=>{for(var o in e||(e={}))d.call(e,o)&&a(s,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&a(s,o,e[o]);return s},t=(s,e)=>p(s,i(e));import{q as b,d as f,r as v,B as S,aM as _,bF as g,bk as h,bG as m}from"./index.19f5ef3b.js";const j=Object.assign(Object.assign({},b.props),{xScrollable:Boolean,onScroll:Function}),O=f({name:"Scrollbar",props:j,setup(){const s=v(null);return Object.assign(Object.assign({},{scrollTo:(...o)=>{var l;(l=s.value)===null||l===void 0||l.scrollTo(o[0],o[1])},scrollBy:(...o)=>{var l;(l=s.value)===null||l===void 0||l.scrollBy(o[0],o[1])}}),{scrollbarInstRef:s})},render(){return S(_,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});var M=O;const R=g("app",()=>{const s=h({collapsed:!1});function e(){s.collapsed=!s.collapsed}return t(n({},m(s)),{toggleCollapsed:e})});export{M as _,R as u};
