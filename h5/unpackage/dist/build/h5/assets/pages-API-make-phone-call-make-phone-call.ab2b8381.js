import{_ as a,b4 as e,a as n,c as t,o as l,d as s,w as i,e as u,f as d,k as o,ag as m,D as c}from"./vendor.1f020a26.js";import{a as p}from"./index.1e1ef7c1.js";var r=a({data:()=>({title:"makePhoneCall",disabled:!0}),methods:{bindInput:function(a){this.inputValue=a.detail.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){e({phoneNumber:this.inputValue,success:()=>{console.log("成功拨打电话")}})}}},[["render",function(a,e,r,f,b,h){const _=n(t("page-head"),p),k=o,g=m,v=c;return l(),s(k,null,{default:i((()=>[u(_,{title:b.title},null,8,["title"]),u(k,{class:"uni-padding-wrap uni-common-mt"},{default:i((()=>[u(k,{class:"uni-hello-text uni-center"},{default:i((()=>[d("请在下方输入电话号码")])),_:1}),u(g,{class:"input uni-common-mt",type:"number",name:"input",onInput:h.bindInput},null,8,["onInput"]),u(k,{class:"uni-btn-v uni-common-mt"},{default:i((()=>[u(v,{onClick:h.makePhoneCall,type:"primary",disabled:b.disabled},{default:i((()=>[d("拨打")])),_:1},8,["onClick","disabled"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-4b4fa731"]]);export{r as default};
