import{K as a,_ as e,o as t,d as s,w as n,e as l,i as o,S as r,O as i,k as c,M as u,C as d,f as p,N as f,P as g,h as _,Q as v,R as b,T as h,U as m,V as w,W as y}from"./vendor.814d7eca.js";import{l as x,_ as B}from"./index.e1c48d14.js";var k=e(a({setup:()=>({background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:3e3,duration:500})}),[["render",function(a,e,u,d,p,f){const g=o,_=r,v=i,b=c;return t(),s(b,null,{default:n((()=>[l(b,{class:"uni-margin-wrap"},{default:n((()=>[l(v,{class:"swiper",circular:"","indicator-dots":a.indicatorDots,autoplay:a.autoplay,interval:a.interval,duration:a.duration},{default:n((()=>[l(_,null,{default:n((()=>[l(g,{src:"/store/assets/swipe1.ba444caf.jpg"})])),_:1}),l(_,null,{default:n((()=>[l(g,{src:"/store/assets/swipe2.31ba1bf6.jpg"})])),_:1})])),_:1},8,["indicator-dots","autoplay","interval","duration"])])),_:1})])),_:1})}],["__scopeId","data-v-18a06fbe"]]);var I=e(a({onShow(){this.my_store=x()},setup:()=>({toNoticePage:a=>{d({url:"/pages/notice/notice"})},my_store:u({})})}),[["render",function(a,e,r,i,u,d){const v=o,b=_,h=c;return t(),s(h,{class:"notice-container"},{default:n((()=>[l(h,{class:"title"},{default:n((()=>[l(v,{class:"logo",src:B}),l(b,null,{default:n((()=>[p(f(a.my_store.store_name),1)])),_:1})])),_:1}),l(h,{class:"main",onClick:a.toNoticePage},{default:n((()=>[l(b,{class:"left"},{default:n((()=>[g("span",{class:"icon iconfont icon-tongzhi"}),p(" 草莓预售通知 ")])),_:1}),l(b,{class:"right"},{default:n((()=>[g("span",{class:"icon iconfont icon-right"})])),_:1})])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-552ccbba"]]);const C=a({setup:()=>({listData:[{value:"expense",label:"费用单",navigate:"/pages/feeBill/feeBill"},{value:"chargeManagement",label:"账单",navigate:"/pages/transaction/transaction"},{value:"basic",label:"设置",navigate:"/pages/tabBar/home/setup"},{value:"expenseType",label:"待付款",switch:"/pages/tabBar/order/order?tabIndex=2"},{value:"acceptance",label:"待验收",switch:"/pages/tabBar/order/order?tabIndex=4"},{value:"refundBill",label:"售后",switch:"/pages/tabBar/order/order?tabIndex=5"}],toPage:a=>{a.navigate&&d({url:a.navigate}),a.switch&&v({url:a.switch})}})});var P=e(a({components:{dashswiper:k,notice:I,pageList:e(C,[["render",function(a,e,o,r,i,u){const d=c,v=_;return t(),s(d,{class:"card-container"},{default:n((()=>[(t(!0),b(w,null,h(a.listData,((e,o)=>(t(),s(d,{class:"card-container-item",onClick:t=>a.toPage(e)},{default:n((()=>[l(d,{class:"type"},{default:n((()=>[g("span",{class:m(`icon iconfont icon-${e.value}`)},null,2)])),_:2},1024),l(v,{class:"title"},{default:n((()=>[p(f(e.label),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})}],["__scopeId","data-v-6e267a1a"]])},setup:()=>({})}),[["render",function(a,e,o,r,i,u){const d=y("dashswiper"),p=y("notice"),f=y("page-list"),_=c;return t(),s(_,{class:"uni-container"},{default:n((()=>[l(d),g("div",{class:"main-container"},[l(p),l(f)])])),_:1})}]]);export{P as default};
