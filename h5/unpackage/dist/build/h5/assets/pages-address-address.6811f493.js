import{_ as s,D as a,E as t,G as e,o as l,d as n,w as i,N as d,O as o,Q as c,e as u,L as _,f as r,h as f,k as p,F as h}from"./vendor.c7c2a947.js";import{a as m}from"./home.13e9b574.js";import{s as k}from"./token.8c82a9be.js";import"./request.fff8ccac.js";var g=s(a({onShow:function(s){this.getAddressList()},setup(){const s=t([]);return{addressList:s,getAddressList:()=>{m({s_id:"10"}).then((a=>{s.value=a.data}))}}},methods:{lower:function(s){console.log(s)},update(s){this.toDetail({title:"编辑收货地址",item:s})},add(){this.toDetail({title:"新增收货地址"})},toDetail(s){k("addressDetail",JSON.stringify(s)),e({url:"/pages/address/detail"})}}}),[["render",function(s,a,t,e,m,k){const g=f,y=p;return l(),n(y,{class:"address-container"},{default:i((()=>[s.addressList.length>0?(l(),n(y,{key:0,class:"addressList"},{default:i((()=>[(l(!0),d(c,null,o(s.addressList,((a,t)=>(l(),n(y,{class:"addressItem"},{default:i((()=>[u(y,{class:"title"},{default:i((()=>[u(y,{class:"left"},{default:i((()=>[u(g,{class:"name"},{default:i((()=>[r(h(a.s_a_name),1)])),_:2},1024),u(g,{class:"phone"},{default:i((()=>[r(h(a.s_a_phone),1)])),_:2},1024)])),_:2},1024),1==a.s_a_audit_status?(l(),n(y,{key:0,class:"right"},{default:i((()=>[u(g,{class:"default"},{default:i((()=>[r("审核中")])),_:1}),_("span",{class:"icon iconfont icon-bianji",style:{color:"#999"}})])),_:1})):2==a.s_a_audit_status?(l(),n(y,{key:1,class:"right"},{default:i((()=>[_("span",{class:"icon iconfont icon-bianji",onClick:t=>s.update(a)},null,8,["onClick"])])),_:2},1024)):(l(),n(y,{key:2,class:"right"},{default:i((()=>[u(g,{class:"default"},{default:i((()=>[r("审核不通过")])),_:1}),_("span",{class:"icon iconfont icon-bianji",onClick:t=>s.update(a)},null,8,["onClick"])])),_:2},1024))])),_:2},1024),u(y,{class:"content"},{default:i((()=>[r(h(a.s_a_province)+" "+h(a.s_a_city)+" "+h(a.s_a_area)+" "+h(a.s_a_detail),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):(l(),n(y,{key:1,class:"noData"},{default:i((()=>[u(y,null,{default:i((()=>[_("span",{class:"icon iconfont icon-dituguanli"})])),_:1}),u(y,null,{default:i((()=>[u(g,null,{default:i((()=>[r("您还没有收货地址")])),_:1})])),_:1})])),_:1}))])),_:1})}],["__scopeId","data-v-e04088a8"]]);export{g as default};
