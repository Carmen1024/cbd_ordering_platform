import{D as a,_ as e,o as t,d as s,w as n,e as l,i as o,S as i,K as r,k as c,G as u,f as d,L as p,h as f,M as g,N as v,O as _,P as b,F as h,Q as w,R as m}from"./vendor.a21c6627.js";import{_ as B}from"./index.7ec11993.js";var x=e(a({setup:()=>({background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:3e3,duration:500})}),[["render",function(a,e,u,d,p,f){const g=o,v=i,_=r,b=c;return t(),s(b,null,{default:n((()=>[l(b,{class:"uni-margin-wrap"},{default:n((()=>[l(_,{class:"swiper",circular:"","indicator-dots":a.indicatorDots,autoplay:a.autoplay,interval:a.interval,duration:a.duration},{default:n((()=>[l(v,null,{default:n((()=>[l(g,{src:"/store/assets/swipe1.94c3af40.jpg"})])),_:1}),l(v,null,{default:n((()=>[l(g,{src:"/store/assets/swipe2.31ba1bf6.jpg"})])),_:1})])),_:1},8,["indicator-dots","autoplay","interval","duration"])])),_:1})])),_:1})}],["__scopeId","data-v-61d0623b"]]);var k=e(a({setup:()=>({toNoticePage:a=>{u({url:"/pages/notice/notice"})}})}),[["render",function(a,e,i,r,u,g){const v=o,_=f,b=c;return t(),s(b,{class:"notice-container"},{default:n((()=>[l(b,{class:"title"},{default:n((()=>[l(v,{class:"logo",src:B}),l(_,null,{default:n((()=>[d("茶百道成都双楠店")])),_:1})])),_:1}),l(b,{class:"main",onClick:a.toNoticePage},{default:n((()=>[l(_,{class:"left"},{default:n((()=>[p("span",{class:"icon iconfont icon-tongzhi"}),d(" 草莓预售通知 ")])),_:1}),l(_,{class:"right"},{default:n((()=>[p("span",{class:"icon iconfont icon-right"})])),_:1})])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-35d59795"]]);const y=a({setup:()=>({listData:[{value:"expense",label:"费用单",navigate:"/pages/feeBill/feeBill"},{value:"chargeManagement",label:"账单",navigate:"/pages/transaction/transaction"},{value:"refundBill",label:"设置",navigate:"/pages/tabBar/home/setup"},{value:"expenseType",label:"待付款",switch:"/pages/tabBar/order/order?tabIndex=2"},{value:"acceptance",label:"待验收",switch:"/pages/tabBar/order/order?tabIndex=4"},{value:"refundBill",label:"售后",switch:"/pages/tabBar/order/order?tabIndex=5"}],toPage:a=>{a.navigate&&u({url:a.navigate}),a.switch&&g({url:a.switch})}})});var I=e(a({components:{dashswiper:x,notice:k,pageList:e(y,[["render",function(a,e,o,i,r,u){const g=c,m=f;return t(),s(g,{class:"card-container"},{default:n((()=>[(t(!0),v(w,null,_(a.listData,((e,o)=>(t(),s(g,{class:"card-container-item",onClick:t=>a.toPage(e)},{default:n((()=>[l(g,{class:"type"},{default:n((()=>[p("span",{class:b(`icon iconfont icon-${e.value}`)},null,2)])),_:2},1024),l(m,{class:"title"},{default:n((()=>[d(h(e.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})}],["__scopeId","data-v-295a2ce2"]])},setup:()=>({})}),[["render",function(a,e,o,i,r,u){const d=m("dashswiper"),f=m("notice"),g=m("page-list"),v=c;return t(),s(v,{class:"uni-container"},{default:n((()=>[l(d),p("div",{class:"main-container"},[l(f),l(g)])])),_:1})}]]);export{I as default};
