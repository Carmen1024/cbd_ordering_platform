import{D as e,_ as t,o as r,d as o,w as a,f as d,U as s}from"./vendor.c7c2a947.js";import{r as n}from"./request.fff8ccac.js";import{s as i}from"./token.8c82a9be.js";var c=t(e({props:{order:{type:Object,default:()=>({})},orderType:{type:String,default:()=>"order"}},setup:e=>({}),methods:{toPay(){const e="order"==this.orderType?this.order.o_code:this.order.o_p_code;var t;(t={ORDERID:e},n({url:"/g/ccb_ibs/order_pay",method:"post",data:t})).then((e=>{i("payOrder",JSON.stringify(this.order)),i("orderType",this.orderType),this.pay(e.data)}))},pay(e){let t=document.createElement("form");document.body.appendChild(t);for(let r in e){const o=this.generateHideElement(r,e[r]);t.appendChild(o)}t.method="post",t.action="https://ibsbjstar.ccb.com.cn/CCBIS/ccbMain",t.submit()},generateHideElement(e,t){let r=document.createElement("input");return r.type="hidden",r.name=e,r.value=t,r}}}),[["render",function(e,t,n,i,c,p){const m=s;return r(),o(m,{type:"primary",size:"mini",onClick:e.toPay},{default:a((()=>[d("去付款")])),_:1},8,["onClick"])}]]);export{c as P};
