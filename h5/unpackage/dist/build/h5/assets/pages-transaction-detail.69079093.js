import{_ as a,K as t,ae as s,M as n,W as e,o as l,R as c,e as r,w as o,f as i,N as d,P as u,V as _,h as f,k as m}from"./vendor.814d7eca.js";import{g as p}from"./index.e1c48d14.js";import{B as D}from"./backLayer.4c1c377c.js";var k=a(t({components:{BackLayer:D},onShow:function(){this.getTransactionData()},setup(){const a=s({title:"账单详情",backUrl:"/pages/transaction/transaction"}),t=n([]);return{transactionData:t,getTransactionData:()=>{t.value=JSON.parse(p("transaction"))},back:a}},methods:{}}),[["render",function(a,t,s,n,p,D){const k=e("back-layer"),b=f,g=m;return l(),c(_,null,[r(k,{back:a.back},null,8,["back"]),r(g,{class:"transaction-container"},{default:o((()=>[r(g,{class:"transactionItem"},{default:o((()=>[r(g,{class:"msg"},{default:o((()=>[r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("订单号："+d(a.transactionData.tr_order_num),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("交易金额："),u("span",{class:"icon iconfont icon-jine"}),i(d((a.transactionData.tr_tx_amt/100).toFixed(2)),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("付款人："+d(a.transactionData.tr_payer_name),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("付款账户："+d(a.transactionData.tr_payer_acc_num),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("支付流水："+d(a.transactionData.tr_bank_sn),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("交易时间："+d(a.transactionData.tr_tx_time),1)])),_:1})])),_:1}),r(g,{class:"detail"},{default:o((()=>[r(b,null,{default:o((()=>[i("订单ID："+d(a.transactionData._id),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})],64)}],["__scopeId","data-v-483d2ff8"]]);export{k as default};
