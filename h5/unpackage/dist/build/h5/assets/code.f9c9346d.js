import{D as e,E as s,_ as a,o as n,N as t,e as l,w as d,f as o,P as i,F as u,Q as r,h as c,a2 as p,k as h,U as m}from"./vendor.c7c2a947.js";import{g as C}from"./login.903dd2c6.js";var b=a(e({props:{user:{type:Object,default:()=>({})}},setup(e){const a=s(!1);return{sentContent:s("获取验证码"),sendDisable:a}},methods:{setSendC(e){this.sentContent=e+"秒后重新获取",setTimeout((()=>{e>1?this.setSendC(--e):(this.sentContent="获取验证码",this.sendDisable=!1)}),1e3)},sendCode(){const e={eq:{user_phone:this.user.phone}};C(e).then((e=>{this.sendDisable=!this.sendDisable,this.setSendC(60)}))}}}),[["render",function(e,s,a,C,b,f){const _=c,D=p,V=h,j=m;return n(),t(r,null,[l(V,{class:"user-container-item"},{default:d((()=>[l(_,null,{default:d((()=>[o("手机号")])),_:1}),l(D,{class:"uni-input",modelValue:e.user.phone,"onUpdate:modelValue":s[0]||(s[0]=s=>e.user.phone=s),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),l(V,{class:"user-container-item"},{default:d((()=>[l(_,null,{default:d((()=>[o("验证码")])),_:1}),l(D,{class:"uni-input",modelValue:e.user.code,"onUpdate:modelValue":s[1]||(s[1]=s=>e.user.code=s),placeholder:"请输入验证码"},null,8,["modelValue"]),l(j,{size:"mini",disabled:e.sendDisable,class:i(e.sendDisable?"sendDisable":""),type:"primary",onClick:e.sendCode},{default:d((()=>[o(u(e.sentContent),1)])),_:1},8,["disabled","class","onClick"])])),_:1})],64)}],["__scopeId","data-v-1c0a2442"]]);export{b as c};
