import{A as a,Y as t,_ as e,D as l,E as s,o,d as c,w as i,e as d,f as n,M as r,N as f,P as u,K as _,F as h,ab as m,h as p,k as D,T as B,i as g}from"./vendor.d63b4332.js";import{s as F}from"./order.f7fc3fa6.js";import{s as j}from"./enum.6f7a1015.js";import"./request.f2a0712f.js";import"./token.1631d279.js";var C=e(l({onLoad:function(a){console.log(a._id),this.getOrderDetail(a._id)},setup(){const a=s({});return{getOrderDetail:t=>{F({_id:t}).then((t=>{const e=j.find((a=>a.value===t.data.o_s_status));t.data.o_s_status_desc=e?e.label:t.data.o_s_status,a.value=t.data}))},orderDetailData:a,copyC:()=>{m({data:a.value.o_p_code,success:function(){}})}}},methods:{pay(){var e;(e={TxCode:"SFT10012",ThirdSysID:"SCCBD001",Auth:"e884994fe372f91d6612e48bf87a5503",Data:"UYv09F1mHsLjPn%2FPKCH6MLnAD5GkZnKTg8GR3r%2BzhmsUl1P65hcATiZd6hQnI5Lg5wRYlC6%2BUISK7T6VvFRjLn3mDJtKtXG8wbchmdqj5m2JS5P%2BOiLUT7pnr8N9Xkv7HKt3nIrRMCm3IlhkgMZidRGJSDmUwdpwwvBXrJNBlw19YywNqAhgTdIS%2FHFr%2Bs6SmIzhaI3Iq4sJXN8RkjkAEBZSRIHlLIKXUkmnh7xvo2F581kRAIylI1Fd3rHACqNG6YysV7eACwu1iTaheCwayuJx4jKD%2BrrkGQSy%2BeiRGj3khY3QNHEMDJ9Yg52yz%2Bvvqpk7j7rVKFiRWNgGgfHcfU2U%2Fvks5ps6emfvIl6AxRAq75ZMdzMH196J7i0nSCQ%2FH9%2FuBM76ry9RVW3foKPnn9IKIoupTp%2FVNmRnwJvBYyn6OzOdBevDZMa5wRQjV9eGuoaqjggkSGwe5KZYsCT09I61eSqGULwkR4bXzFOFzeoFuZzW1BWDxTBCc4lHBx%2F5ebW5X5TW32lGnhkfCa26zlpg9oqNoepLHj54ccsYTQE5R0z7UUfjXBy2a9gdCbzqhOC45C12IKta6yjwUcew2snvn%2FFG7bkciMWVE7HRctwFEKuXzXTTX15hjf4CCtzlx%2F1XjwvvNQzTROAkE1GHlYtYgqrMQJLzgWfcdKvjY89YG1WMtnPtOjsbTqIb9ORA8Y2DLjr0yrjSqzMYJ5WEEbYdV85RPw0sTPRF0iXgG8ghjWlWcHO3TV0Dv6RvKVqopIXPbclYBt3jFwVTsPGGVLkBS28%2BnCNOHtHDena2F4fp58zERbHKW2YTlsZqXwW0HP7TH3aVUYTpL8roXCVaA2SanltCWEhJ55ne26tqdvl1OcQWlEUWP2Nf6jqJL9U7pV6zIQTXSzB8HILCj76CVdaWEeE1Rq6gh0CB%2F7H85SJIuZ4o1MjHaQTTQ5PMBovODhfiZweaXTl0k7UKVaoQjZJp%2Be0%2F997a6kB4ZmOT5h7WTrMZpD6xj1F1tVx73AYtd0meEcvhZ83YJpVC3XXcq5x%2FiK8S3%2BgdhQXz9GDtpTdqSv2CIWAihheKBCzLC9p5uKZZp9LMY2khcS18mztNC0a6fDyaYVMLWy1u4rJNCm3E8MFZmxAi5V8hMlEaj2BR9xsmKadl8738fKPIEDFQ1vepk%2FmjMq9xHdJHLqNvzFcYI1L5dr7%2BltfS3JYiHks94itPZ2Faw6TPTrMNcXAoI%2FyWszSp78ntBN8zntAtq5hLpDED630dWPCyq%2Bn%2ByUDj68uhZHg3OQZ1LR8btApe9UMYy4XiFZbHojU2BDjFhB93mYE8b9QqwV3RIZIWxbq8OTlSEGEGMq110382VAjKZIRmAAxOC8gIimK186yvKiznqffh4gK%2Bhbz0h2TWzXl3%2F252tiMArctNNaivofsM%2BJeIGRe3U8yOQJZ28%2FUdeLK3fzALoGuF0%2BbX2TIdwgjjIZGFB8O02ddfQPXmkx3dWJ%2FNJzwKC4QuoGDW0l7d6fWlcK6%2BTlIfO3ybaEMRiMhwKJpwX1GUJw3n7FWiPnYweXWBCsQ2OSQz02uHo651W0tGCMTjTed8k0UJoz9VJnuxdMaYFLWvkYDuQbc1HqTHjKPKECMQoXaghMSsqZWA61yp5vp9IRKbNQRO8qeQmgCPXb60aFTr5Su0Dr%2Bop5NfeoaB9rEUD037pfXOlicYBhB3YsFe%2B5xWrFIfMv18D2aYZShTlP3wImiimaNumqGesr9LYck8eXSMoQLDn0pX%2FQnJgJxn7awXPT2tTu3BfrxJfnVEije4WGv8r%2FvRMX6W2U%2BtC2oZmVhrLe3RDMJn%2BbnfARQ0iUqwAamwr5yqnqRGvlnXxSiLKKQx%2By6A6pvIBg%3D%3D"},new Promise((function(l,s){a({url:"http://emall.ccb.com:8880/ecp/thirdPartAPI",method:"post",data:e,header:{"Content-Type":"application/x-www-form-urlencoded"},success:a=>{console.log("请求数据已返回：",a),l(a)},fail:a=>{t({content:"系统有误，请重试",showCancel:!1})}})}))).then((a=>{console.log(a)}))}}}),[["render",function(a,t,e,l,s,m){const F=p,j=D,C=g,T=B;return o(),c(j,{class:"order-container"},{default:i((()=>[d(j,{class:"peiSong"},{default:i((()=>[1==a.orderDetailData.o_s_status?(o(),c(F,{key:0,class:"price"},{default:i((()=>[n("订单未支付，无物流信息")])),_:1})):(o(),c(F,{key:1,class:"price"},{default:i((()=>[n("暂无物流信息")])),_:1}))])),_:1}),d(j,{class:"materialList"},{default:i((()=>[(o(!0),r(u,null,f(a.orderDetailData.sub_order_materials,((a,t)=>(o(),c(j,{class:"materialItem"},{default:i((()=>[d(C,{src:a.o_m_pic||"/static/logo.jpg"},null,8,["src"]),d(j,{class:"detail"},{default:i((()=>[d(j,{class:"name"},{default:i((()=>[n(h(a.o_m_name||"物料名称"),1)])),_:2},1024),d(j,{class:"unit"},{default:i((()=>[n("500g*30袋/箱")])),_:1}),d(j,{class:"price"},{default:i((()=>[d(F,{class:"total"},{default:i((()=>[_("span",{class:"icon iconfont icon-jine"}),n(" "+h(a.o_m_price),1)])),_:2},1024),d(j,{class:"numHandle"},{default:i((()=>[d(F,null,{default:i((()=>[n(h(a.o_m_count),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1}),d(j,{class:"other"},{default:i((()=>[d(j,{class:"title"},{default:i((()=>[n("付款信息")])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("商品总价")])),_:1}),d(j,{class:"right"},{default:i((()=>[_("span",{class:"icon iconfont icon-jine"}),n(" "+h(a.orderDetailData.o_p_origin_money||0),1)])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("运费")])),_:1}),d(F,{class:"right"},{default:i((()=>[_("span",{class:"icon iconfont icon-jine"}),n(" "+h(a.orderDetailData.o_p_freight_money||0),1)])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("合计优惠")])),_:1}),d(F,{class:"right color-primary"},{default:i((()=>[_("span",{class:"icon iconfont icon-jian"}),_("span",{class:"icon iconfont icon-jine"}),n(" "+h(Math.abs(a.orderDetailData.o_p_discount_money)||0),1)])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("实付款")])),_:1}),d(j,{class:"right color-primary fontBold"},{default:i((()=>[_("span",{class:"icon iconfont icon-jine"}),n(" "+h(a.orderDetailData.o_p_real_pay_money||0),1)])),_:1})])),_:1})])),_:1}),d(j,{class:"other"},{default:i((()=>[d(j,{class:"title"},{default:i((()=>[n("订单信息")])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("订单号:")])),_:1}),d(j,{class:"right"},{default:i((()=>[d(F,null,{default:i((()=>[n(h(a.orderDetailData.o_p_code),1)])),_:1}),d(F,{class:"copyC",onClick:a.copyC},{default:i((()=>[n("复制")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("订单状态:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n(h(a.orderDetailData.o_s_status_desc),1)])),_:1})])),_:1})])),_:1}),d(j,{class:"other"},{default:i((()=>[d(j,{class:"title"},{default:i((()=>[n("配送信息")])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("配送方式:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n("物流")])),_:1})])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("送货时间:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n("预计2022月02月19日")])),_:1})])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("物流状态:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n("未发货")])),_:1})])),_:1})])),_:1})])),_:1}),d(j,{class:"other"},{default:i((()=>[d(j,{class:"title"},{default:i((()=>[n("收货信息")])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("收货人:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n(h(a.orderDetailData.o_s_recipient),1)])),_:1})])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("联系方式:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n(h(a.orderDetailData.o_s_recipient_contact),1)])),_:1})])),_:1})])),_:1}),d(j,{class:"other-item"},{default:i((()=>[d(j,null,{default:i((()=>[d(F,{class:"left"},{default:i((()=>[n("地址:")])),_:1}),d(F,{class:"right"},{default:i((()=>[n(h(a.orderDetailData.o_s_recipient_addr),1)])),_:1})])),_:1})])),_:1})])),_:1}),d(j,{class:"account"},{default:i((()=>[1==a.orderDetailData.o_s_status?(o(),c(j,{key:0,class:"right"},{default:i((()=>[d(T,{class:"uni-button",size:"mini"},{default:i((()=>[n("取消订单")])),_:1}),d(T,{class:"uni-button",type:"primary",size:"mini",onClick:a.pay},{default:i((()=>[n("去付款")])),_:1},8,["onClick"])])),_:1})):(o(),c(j,{key:1,class:"right"},{default:i((()=>[d(T,{class:"uni-button",size:"mini"},{default:i((()=>[n("再来一单")])),_:1})])),_:1}))])),_:1})])),_:1})}],["__scopeId","data-v-091b6e4d"]]);export{C as default};
