import{_ as a,X as e,a0 as n,o as t,d as i,w as s,e as l,f as c,t as u,p as d,q as o,F as m,$ as f,h as g,k as p,a1 as r,i as _,a2 as h,a3 as k}from"./vendor.762bb174.js";var v=a(e({setup:()=>({commodityData:n([{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""},{id:"",name:"芝士奶盖浆",unit:"2kg*6袋/箱",price:528,num:2,img:""}])}),methods:{checkboxChange(a){for(var e=this.items,n=a.detail.value,t=0,i=e.length;t<i;++t){const a=e[t];n.includes(a.value)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)}},dataChange(){}}}),[["render",function(a,e,n,v,y,b){const j=g,C=p,x=r,I=_,D=h,$=k;return t(),i(C,{class:"shopping-container"},{default:s((()=>[l(C,{class:"title"},{default:s((()=>[l(C,{class:"left"},{default:s((()=>[l(j,null,{default:s((()=>[c("购物车")])),_:1}),l(j,null,{default:s((()=>[c("("+u(a.commodityData.length)+")",1)])),_:1})])),_:1}),l(C,{class:"right"},{default:s((()=>[l(j,null,{default:s((()=>[c("推荐订货")])),_:1}),l(j,null,{default:s((()=>[c("编辑商品")])),_:1})])),_:1})])),_:1}),l(C,{class:"commodityList"},{default:s((()=>[(t(!0),d(m,null,o(a.commodityData,((e,n)=>(t(),i($,{onChange:a.checkboxChange,class:"commodityItem"},{default:s((()=>[l(x,{checked:e.checked},null,8,["checked"]),l(I,{src:e.img||"/static/logo.jpg"},null,8,["src"]),l(C,{class:"detail"},{default:s((()=>[l(C,{class:"name"},{default:s((()=>[c(u(e.name),1)])),_:2},1024),l(C,{class:"unit"},{default:s((()=>[c(u(e.unit),1)])),_:2},1024),l(C,{class:"price"},{default:s((()=>[l(j,{class:"total"},{default:s((()=>[f("span",{class:"icon iconfont icon-jine"}),c(" "+u(e.price),1)])),_:2},1024),l(C,{class:"numHandle"},{default:s((()=>[l(j,null,{default:s((()=>[f("span",{class:"icon iconfont icon-jian"})])),_:1}),l(D,{class:"uni-input",type:"text",value:e.num,onInput:a.dataChange},null,8,["value","onInput"]),l(j,null,{default:s((()=>[f("span",{class:"icon iconfont icon-tianjia"})])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onChange"])))),256))])),_:1}),l(C,{class:"account"},{default:s((()=>[l(C,{class:"left"},{default:s((()=>[l(x,{value:"cb",checked:"false"}),c("全选 ")])),_:1}),l(C,{class:"right"},{default:s((()=>[l(j,null,{default:s((()=>[c("总计:")])),_:1}),l(j,{class:"priceTotal"},{default:s((()=>[f("span",{class:"icon iconfont icon-jine"}),c("1223.00")])),_:1}),f("uni-button",{class:"mini-btn",type:"primary",size:"mini"},"结算")])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-1fe4c304"]]);export{v as default};
