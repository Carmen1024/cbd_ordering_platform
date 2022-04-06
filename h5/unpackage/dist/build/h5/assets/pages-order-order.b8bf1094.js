var a=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(e,s,t)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,c=(a,c)=>{for(var o in c||(c={}))s.call(c,o)&&l(a,o,c[o]);if(e)for(var o of e(c))t.call(c,o)&&l(a,o,c[o]);return a};import{K as o,_ as n,o as i,R as r,e as d,w as _,f as u,P as m,V as f,T as h,d as p,N as g,$ as y,a0 as v,h as k,k as I,i as L,a2 as b,a3 as C,M as j,a1 as A,W as w,X as x,D as O,s as $,Y as P}from"./vendor.814d7eca.js";import{b as F,c as M}from"./order.6e4112aa.js";import{g as T,l as H,b as R}from"./index.e1c48d14.js";var S=n(o({props:{addrList:{type:Array,default:()=>[]}},setup:a=>({}),methods:{change(a){this.$emit("change",a)},close(){this.$emit("close")}}}),[["render",function(a,e,s,t,l,c){const o=k,n=I;return i(),r(f,null,[d(n,{class:"address-container"},{default:_((()=>[d(n,{class:"addressTitle"},{default:_((()=>[d(o,null,{default:_((()=>[u("请选择收货地址")])),_:1}),m("span",{class:"right icon iconfont icon-close",onClick:e[0]||(e[0]=(...e)=>a.close&&a.close(...e))})])),_:1}),d(n,{class:"addressList"},{default:_((()=>[(i(!0),r(f,null,h(a.addrList,((e,s)=>(i(),p(n,{class:"addressItem",onClick:s=>a.change(e)},{default:_((()=>[d(n,{class:"title"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[d(o,{class:"name"},{default:_((()=>[u(g(e.s_a_name),1)])),_:2},1024),d(o,{class:"phone"},{default:_((()=>[u(g(e.s_a_phone),1)])),_:2},1024),y(d(o,{class:"default"},{default:_((()=>[u("默认")])),_:2},1536),[[v,e.s_a_default]])])),_:2},1024)])),_:2},1024),d(n,{class:"content"},{default:_((()=>[u(g(e.s_a_province)+" "+g(e.s_a_area)+" "+g(e.s_a_city)+" "+g(e.s_a_detail),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1}),d(n,{class:"uni-mask",onClick:a.close},null,8,["onClick"])],64)}],["__scopeId","data-v-1a9d4a67"]]);var D=n(o({props:{commodityList:{type:Array,default:()=>[]}},setup:a=>({}),methods:{}}),[["render",function(a,e,s,t,l,c){const o=L,n=I,y=k;return i(),p(n,{class:"commodityList"},{default:_((()=>[(i(!0),r(f,null,h(a.commodityList,((a,e)=>(i(),p(n,{class:"commodityItem"},{default:_((()=>[d(o,{src:a.m_pic||"/static/logo.jpg"},null,8,["src"]),d(n,{class:"detail"},{default:_((()=>[d(n,{class:"name"},{default:_((()=>[u(g(a.o_m_name),1)])),_:2},1024),d(n,{class:"unit"},{default:_((()=>[u(g(a.m_package),1)])),_:2},1024),d(n,{class:"price"},{default:_((()=>[d(y,{class:"total"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(" "+g(a.m_price||0),1)])),_:2},1024),d(n,{class:"numHandle"},{default:_((()=>[d(y,null,{default:_((()=>[u(g(a.o_m_count),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})}],["__scopeId","data-v-53a0ae34"]]);var N=n(o({props:{commodityList:{type:Array,default:()=>[]}},setup:a=>({}),methods:{checkboxChange(a){const e=a.detail.value;this.$emit("change",e)}}}),[["render",function(a,e,s,t,l,c){const o=I,n=b,y=L,v=k,j=C;return i(),r(f,null,[d(o,{class:"title"},{default:_((()=>[u(" 关联物料 ")])),_:1}),d(j,{onChange:a.checkboxChange,class:"commodityList"},{default:_((()=>[(i(!0),r(f,null,h(a.commodityList,((a,e)=>(i(),p(o,{class:"commodityItem"},{default:_((()=>[d(n,{checked:a.checked,value:a.r_m_id,disabled:a.m_stock<a.m_c_count},null,8,["checked","value","disabled"]),d(y,{src:a.m_pic||"/static/logo.jpg"},null,8,["src"]),d(o,{class:"detail"},{default:_((()=>[d(o,{class:"name"},{default:_((()=>[u(g(a.o_m_name),1)])),_:2},1024),d(o,{class:"unit"},{default:_((()=>[u(g(a.m_package),1)])),_:2},1024),d(o,{class:"price"},{default:_((()=>[d(v,{class:"total"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(" "+g(a.m_price||0),1)])),_:2},1024),d(o,{class:"numHandle"},{default:_((()=>[d(v,null,{default:_((()=>[u(g(a.r_m_count||1),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1},8,["onChange"])],64)}],["__scopeId","data-v-d8a7b5ea"]]);const z=o({props:{commodityList:{type:Array,default:()=>[]}},setup:a=>({}),methods:{checkboxChange(a){const e=a.detail.value;this.$emit("change",e)}}});var B=n(o({components:{addressList:S,commodityList:D,relaList:N,cycleList:n(z,[["render",function(a,e,s,t,l,c){const o=I,n=b,y=L,v=k,j=C;return i(),r(f,null,[d(o,{class:"title"},{default:_((()=>[u(" 周期物料 ")])),_:1}),d(j,{onChange:a.checkboxChange,class:"commodityList"},{default:_((()=>[(i(!0),r(f,null,h(a.commodityList,((a,e)=>(i(),p(o,{class:"commodityItem"},{default:_((()=>[d(n,{checked:a.checked,value:a.r_m_id,disabled:a.m_stock<a.m_c_count},null,8,["checked","value","disabled"]),d(y,{src:a.m_pic||"/static/logo.jpg"},null,8,["src"]),d(o,{class:"detail"},{default:_((()=>[d(o,{class:"name"},{default:_((()=>[u(g(a.o_m_name),1)])),_:2},1024),d(o,{class:"unit"},{default:_((()=>[u(g(a.m_package),1)])),_:2},1024),d(o,{class:"price"},{default:_((()=>[d(v,{class:"total"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(" "+g(a.m_price||0),1)])),_:2},1024),d(o,{class:"numHandle"},{default:_((()=>[d(v,null,{default:_((()=>[u(g(a.r_m_count||1),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1},8,["onChange"])],64)}],["__scopeId","data-v-7ebaed0f"]])},onLoad(a){this.cartMaterialList=JSON.parse(T("orderMList")),this.getAddressList()},onShow(a){this.showAddress=!1},setup(){const{s_id:a,r_g_id:e}=H(),s=j({}),t=j({}),l=j({}),o=j(!1),n=j({}),i=j(!0),r=j(!1),d=j(!1),_=j({user_choice_rela:!1,user_actual_choice_rela:[]}),u=j({user_choice_cycle:!1,user_actual_choice_cycle:[]}),m=()=>{r.value=!1;let o="正在加载订单";const d=[];l.value=s.value.map((a=>(d.push(a._id),{m_id:a.m_id,o_m_count:a.m_c_count,m_u_unit:"1"}))),i.value||((()=>{const a=(t.value.rela_materials_msg||[]).filter((a=>a.checked)).map((a=>({r_m_id:a.r_m_id,r_m_count:a.r_m_count,m_u_unit:a.m_u_unit})));_.value={user_choice_rela:!0,user_actual_choice_rela:a}})(),(()=>{const a=(t.value.cycle_materials_msg||[]).filter((a=>a.checked)).map((a=>({r_m_id:a.r_m_id,r_m_count:a.r_m_count,m_u_unit:a.m_u_unit})));u.value={user_choice_cycle:!0,user_actual_choice_cycle:a}})(),o="正在下单"),O({icon:"loading",title:o,duration:1e5});const m=c(c({s_id:a,r_g_id:e,a_id:n.value._id,c_ids:d,materials:l.value},_.value),u.value);return new Promise((function(a,e){F(m).then((e=>{t.value=e.data,r.value=!0,a("resolve")}),(a=>{A()}))}))},f=()=>{const a=t.value.cache_order_key;M({cache_order_key:a}).then((a=>{O({title:"创建订单成功",duration:2e3}),setTimeout((function(){$({url:"/pages/tabBar/order/order"})}),2e3)}))},h=()=>{if(0==p.value.length)return void(d.value=!0);(a=>{n.value=a,m().then((a=>{i.value=!1,A()}))})(p.value.find((a=>a.s_a_default))||p.value[0])},p=j([]);return{cartMaterialList:s,getOrderInf:m,orderInformation:t,cartList:l,lastConfirm:()=>{m().then((a=>{f()}),(a=>{A()}))},submit:f,showAddress:o,addr:n,addrList:p,getAddressList:()=>{R({s_id:a}).then((a=>{p.value=a.data.filter((a=>2==a.s_a_audit_status)),h()}))},ready:r,noAddr:d}},methods:{changeAddr(a){this.addr=a,this.showAddress=!1,this.getOrderInf().then((a=>{this.confirmFirst=!1,A()}))},closeAddr(){console.log("close"),this.showAddress=!1},changeRela(a){this.orderInformation.rela_materials_msg.map((e=>{a.includes(e.r_m_id)?this.$set(e,"checked",!0):this.$set(e,"checked",!1)})),console.log(this.orderInformation.rela_materials_msg)},changeCycle(){this.orderInformation.cycle_materials_msg.map((a=>{values.includes(a.r_m_id)?this.$set(a,"checked",!0):this.$set(a,"checked",!1)})),console.log(this.orderInformation.cycle_materials_msg)}}}),[["render",function(a,e,s,t,l,c){const o=I,n=k,r=w("commodity-list"),f=w("rela-list"),h=w("cycle-list"),y=P;return i(),p(o,{class:"order-container"},{default:_((()=>[a.addrList.length>0?(i(),p(o,{key:0,class:"order-address"},{default:_((()=>[m("span",{class:"icon iconfont icon-dituguanli"}),a.addr.s_a_name?(i(),p(o,{key:0,class:"address-main"},{default:_((()=>[d(o,{class:"detail"},{default:_((()=>[u(g(a.addr.s_a_province)+" "+g(a.addr.s_a_area)+" "+g(a.addr.s_a_city)+" "+g(a.addr.s_a_detail),1)])),_:1}),d(o,{class:"name"},{default:_((()=>[u(g(a.addr.s_a_name)+" "+g(a.addr.s_a_phone),1)])),_:1})])),_:1})):(i(),p(o,{key:1,class:"address-main"},{default:_((()=>[d(o,{class:"detail"},{default:_((()=>[u("您还没有有效的收货地址")])),_:1}),d(o,{class:"name"},{default:_((()=>[u("暂时无法下单")])),_:1})])),_:1}))])),_:1})):x("",!0),a.noAddr?(i(),p(o,{key:1,class:"noData"},{default:_((()=>[d(o,null,{default:_((()=>[m("span",{class:"icon iconfont icon-dituguanli"})])),_:1}),d(o,null,{default:_((()=>[d(n,null,{default:_((()=>[u("您还没有收货地址")])),_:1})])),_:1}),d(o,null,{default:_((()=>[d(n,null,{default:_((()=>[u("暂时无法下单")])),_:1})])),_:1})])),_:1})):x("",!0),a.orderInformation.actual_buy_materials_msg?(i(),p(o,{key:2},{default:_((()=>{var e,s,t,l;return[d(r,{commodityList:a.orderInformation.actual_buy_materials_msg},null,8,["commodityList"]),a.orderInformation.rela_materials_msg&&a.orderInformation.rela_materials_msg.length>0?(i(),p(f,{key:0,commodityList:null==(e=a.orderInformation)?void 0:e.rela_materials_msg,onChange:a.changeRela},null,8,["commodityList","onChange"])):x("",!0),(null==(s=a.orderInformation)?void 0:s.cycle_materials_msg)&&(null==(t=a.orderInformation)?void 0:t.cycle_materials_msg.length)>0?(i(),p(h,{key:1,commodityList:null==(l=a.orderInformation)?void 0:l.cycle_materials_msg,onChange:a.changeCycle},null,8,["commodityList","onChange"])):x("",!0),d(o,{class:"other"},{default:_((()=>[d(o,{class:"other-item"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[u("账户余额")])),_:1}),d(n,{class:"right"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(g(a.orderInformation.remain||0)+"元",1)])),_:1})])),_:1}),d(o,{class:"other-item"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[u("商品总额")])),_:1}),d(n,{class:"right"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(g((a.orderInformation.total_price/100).toFixed(2)||0)+"元",1)])),_:1})])),_:1}),d(o,{class:"other-item"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[u("合计运费")])),_:1}),d(n,{class:"right"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(g(a.orderInformation.freight_price||0)+"元",1)])),_:1})])),_:1}),0!=a.orderInformation.grade_discount_price?(i(),p(o,{key:0,class:"other-item"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[u("价格等级优惠")])),_:1}),d(n,{class:"right"},{default:_((()=>[m("span",{class:"icon iconfont icon-jian"}),m("span",{class:"icon iconfont icon-jine"}),u(g((a.orderInformation.grade_discount_price/100).toFixed(2)||0)+"元 ",1)])),_:1})])),_:1})):x("",!0),0!=a.orderInformation.refund_price?(i(),p(o,{key:1,class:"other-item"},{default:_((()=>[d(n,{class:"left"},{default:_((()=>[u("使用返利金")])),_:1}),d(n,{class:"right"},{default:_((()=>[m("span",{class:"icon iconfont icon-jian"}),m("span",{class:"icon iconfont icon-jine"}),u(g(a.orderInformation.refund_price||0)+"元 ",1)])),_:1})])),_:1})):x("",!0)])),_:1}),d(o,{class:"account"},{default:_((()=>[d(o,{class:"right"},{default:_((()=>[d(o,{class:"totalPrice"},{default:_((()=>[d(n,null,{default:_((()=>[u("合计：")])),_:1}),d(n,{class:"priceTotal"},{default:_((()=>[m("span",{class:"icon iconfont icon-jine"}),u(g((a.orderInformation.actual_pay_price/100).toFixed(2)),1)])),_:1})])),_:1}),d(y,{class:"uni-button",type:"primary",size:"mini",onClick:a.lastConfirm},{default:_((()=>[u("确认订单")])),_:1},8,["onClick"])])),_:1})])),_:1})]})),_:1})):x("",!0)])),_:1})}],["__scopeId","data-v-16b6b71e"]]);export{B as default};
