import{A as o,Z as t}from"./vendor.c7c2a947.js";import{g as a}from"./token.8c82a9be.js";const e=({url:e,method:n,data:c,domin:s="http://113.125.84.255:8007",contentType:d="application/json"})=>{const r={data:c,token:a("token")||"admin"};return new Promise((function(a,c){o({url:s+e,method:n,data:r,header:{"custom-header":d},success:o=>{console.log("请求数据已返回：",o),"0000"!==o.data.code?t({showCancel:!1,content:o.data.desc}):a(o.data)},fail:o=>{t({content:"系统有误，请重试",showCancel:!1})}})}))};export{e as r};
