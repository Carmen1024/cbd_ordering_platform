import{_ as t,D as a,E as l,R as e,o as s,d,w as o,e as c,L as f,f as u,F as r,k as _,h as i}from"./vendor.c7c2a947.js";import{f as n}from"./order.3e03155d.js";import{O as h,a as m}from"./oBill.c2e6e703.js";import"./request.fff8ccac.js";import"./token.8c82a9be.js";import"./payButton.dceacd50.js";var p=t(a({components:{OButton:h,OBill:m},onLoad:function(t){console.log(t.o_s_id);const{o_s_id:a,cost_code:l}=t;this.o_s_id=a,this.getOrderDetail({o_s_id:a,cost_code:l})},setup(){const t=l(""),a=l({});return{getOrderDetail:t=>{n(t).then((t=>{a.value=t.data}))},orderDetailData:a,o_s_id:t}},methods:{}}),[["render",function(t,a,l,n,h,m){const p=e("o-bill"),D=_,g=i;return s(),d(D,{class:"order-container"},{default:o((()=>[c(D,{class:"orderData"},{default:o((()=>[c(p,{"to-main":!0,bills:t.orderDetailData.cost_detail},null,8,["bills"])])),_:1}),c(D,{class:"other"},{default:o((()=>[c(D,{class:"title"},{default:o((()=>[f("span",{class:"icon iconfont icon-developer"}),c(g,null,{default:o((()=>[u("提点管理费")])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("门店名称:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("茶百道蜀都店")])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("门店编号:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("888888888")])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("签约人:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("张三")])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("费用描述:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u(r(t.orderDetailData.cost_name),1)])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("费用金额:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u(r(t.orderDetailData.cost_money),1)])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("收款公司:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("蜀信致远")])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("支付流水:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("SC2022011601985220")])),_:1})])),_:1})])),_:1}),c(D,{class:"other-item"},{default:o((()=>[c(D,null,{default:o((()=>[c(g,{class:"left"},{default:o((()=>[u("支付时间:")])),_:1}),c(g,{class:"right"},{default:o((()=>[u("2022-01-16 09:05:35")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-840802b6"]]);export{p as default};
