import{_ as a,K as t,ae as e,M as s,C as l,W as o,o as r,R as d,e as i,w as _,f as c,N as n,P as u,V as f,k as m,h as p}from"./vendor.814d7eca.js";import{e as D}from"./order.6e4112aa.js";import{s as b}from"./enum.32150c18.js";import{O as h,a as g}from"./oBill.bc3317e3.js";import{B as k}from"./backLayer.4c1c377c.js";import"./index.e1c48d14.js";import"./payButton.f6224ea8.js";var B=a(t({components:{OButton:h,OBill:g,BackLayer:k},onLoad:function(a){this.o_s_id=a.o_s_id,this.getOrderDetail(a.o_s_id)},setup(){const a=e({title:"费用单详情",backUrl:"/pages/feeBill/feeBill"}),t=s(""),l=s({});return{getOrderDetail:a=>{D({o_s_id:a}).then((a=>{const t=b.find((t=>t.value===a.data.o_s_status));a.data.o_s_status_desc=t?t.label:a.data.o_s_status,l.value=a.data}))},orderDetailData:l,o_s_id:t,back:a}},methods:{toMainPage(a){l({url:`/pages/feeBill/billMain?o_s_id=${this.o_s_id}&cost_code=${a.cost_code}`})}}}),[["render",function(a,t,e,s,l,D){const b=o("back-layer"),h=o("o-bill"),g=m,k=p,B=o("o-button");return r(),d(f,null,[i(b,{back:a.back},null,8,["back"]),i(g,{class:"order-container"},{default:_((()=>[i(g,{class:"orderData"},{default:_((()=>[i(h,{"to-main":!0,bills:a.orderDetailData.cost_detail,onToMain:a.toMainPage},null,8,["bills","onToMain"])])),_:1}),i(g,{class:"other"},{default:_((()=>[i(g,{class:"other-item"},{default:_((()=>[i(g,null,{default:_((()=>[i(k,{class:"left"},{default:_((()=>[c("费用单号:")])),_:1}),i(k,{class:"right"},{default:_((()=>[c(n(a.orderDetailData.o_p_code),1)])),_:1})])),_:1})])),_:1}),i(g,{class:"other-item"},{default:_((()=>[i(g,null,{default:_((()=>[i(k,{class:"left"},{default:_((()=>[c("状态:")])),_:1}),i(k,{class:"right"},{default:_((()=>[c(n(a.orderDetailData.o_s_status_desc),1)])),_:1})])),_:1})])),_:1}),i(g,{class:"other-item"},{default:_((()=>[i(g,null,{default:_((()=>[i(k,{class:"left"},{default:_((()=>[c("创建时间:")])),_:1}),i(k,{class:"right"},{default:_((()=>[c(n(a.orderDetailData.c_create_time),1)])),_:1})])),_:1})])),_:1})])),_:1}),i(g,{class:"account"},{default:_((()=>[i(k,null,{default:_((()=>[c("共计："),u("span",{class:"icon iconfont icon-jine"}),c(n((a.orderDetailData.o_p_real_pay_money/100).toFixed(2)||0),1)])),_:1}),i(B,{order:a.orderDetailData},null,8,["order"])])),_:1})])),_:1})],64)}],["__scopeId","data-v-62676629"]]);export{B as default};
