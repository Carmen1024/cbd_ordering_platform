import{_ as t,D as s,E as a,G as e,o as l,d as o,w as i,N as n,O as d,Q as r,e as u,L as c,f,Y as _,h as m,k as p,F as h,W as g,X as D,U as L}from"./vendor.a21c6627.js";import{i as k,s as y}from"./home.1fc1901e.js";import{s as j,g as v}from"./token.ba774510.js";import"./request.bd165be5.js";var S=t(s({onShow:function(t){this.getStoreList()},setup(){const t=a([]),s=()=>{k().then((s=>{t.value=s.data.map((t=>(t.default=t._id==v("s_id"),t)))}))};return{storeList:t,getStoreList:s,setDefault:t=>{const a=t._id;y({set:{store_id:a}}).then((t=>{_({title:"设置成功",duration:2e3,icon:"none"}),j("s_id",a),s()}))}}},methods:{lower:function(t){console.log(t)},update(t){this.toDetail({title:"编辑收货地址",item:t})},add(){this.toDetail({title:"新增收货地址"})},toDetail(t){j("storeDetail",JSON.stringify(t)),e({url:"/pages/store/detail"})}}}),[["render",function(t,s,a,e,_,k){const y=m,j=p,v=L;return l(),o(j,{class:"store-container"},{default:i((()=>[t.storeList.length>0?(l(),o(j,{key:0,class:"storeList"},{default:i((()=>[(l(!0),n(r,null,d(t.storeList,((s,a)=>(l(),o(j,{class:"storeItem"},{default:i((()=>[u(j,{class:"title"},{default:i((()=>[u(j,{class:"left"},{default:i((()=>[u(y,{class:"name"},{default:i((()=>[f(h(s.s_name),1)])),_:2},1024),u(y,{class:"phone"},{default:i((()=>[f(h(s.s_a_phone),1)])),_:2},1024)])),_:2},1024),g(u(j,{class:"right"},{default:i((()=>[u(v,{type:"primary",size:"mini",onClick:a=>t.setDefault(s)},{default:i((()=>[f(" 设为默认 ")])),_:2},1032,["onClick"])])),_:2},1536),[[D,!s.default]])])),_:2},1024),u(j,{class:"content"},{default:i((()=>[f(h(s.s_addr),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})):(l(),o(j,{key:1,class:"noData"},{default:i((()=>[u(j,null,{default:i((()=>[c("span",{class:"icon iconfont icon-dituguanli"})])),_:1}),u(j,null,{default:i((()=>[u(y,null,{default:i((()=>[f("您还没有门店")])),_:1})])),_:1})])),_:1}))])),_:1})}],["__scopeId","data-v-2d37c157"]]);export{S as default};
