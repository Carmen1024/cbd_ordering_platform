import{_ as l,a4 as o,a as e,c as s,o as c,d as t,w as n,e as r,f as i,h as a,k as u,a5 as d}from"./vendor.762bb174.js";import{a as m}from"./index.2c3ecc05.js";var f=l({data:()=>({scrollTop:0,old:{scrollTop:0}}),methods:{upper:function(l){console.log(l)},lower:function(l){console.log(l)},scroll:function(l){console.log(l),this.old.scrollTop=l.detail.scrollTop},goTop:function(l){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),o({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}},[["render",function(l,o,f,p,_,g){const w=e(s("page-head"),m),T=a,b=u,v=d;return c(),t(b,null,{default:n((()=>[r(w,{title:"scroll-view,区域滚动视图"}),r(b,{class:"uni-padding-wrap uni-common-mt"},{default:n((()=>[r(b,{class:"uni-title uni-common-mt"},{default:n((()=>[i(" Vertical Scroll "),r(T,null,{default:n((()=>[i("\\n纵向滚动")])),_:1})])),_:1}),r(b,null,{default:n((()=>[r(v,{"scroll-top":_.scrollTop,"scroll-y":"true",class:"scroll-Y",onScrolltoupper:g.upper,onScrolltolower:g.lower,onScroll:g.scroll},{default:n((()=>[r(b,{id:"demo1",class:"scroll-view-item uni-bg-red"},{default:n((()=>[i("A")])),_:1}),r(b,{id:"demo2",class:"scroll-view-item uni-bg-green"},{default:n((()=>[i("B")])),_:1}),r(b,{id:"demo3",class:"scroll-view-item uni-bg-blue"},{default:n((()=>[i("C")])),_:1})])),_:1},8,["scroll-top","onScrolltoupper","onScrolltolower","onScroll"])])),_:1}),r(b,{onClick:g.goTop,class:"uni-link uni-center uni-common-mt"},{default:n((()=>[i(" 点击这里返回顶部 ")])),_:1},8,["onClick"]),r(b,{class:"uni-title uni-common-mt"},{default:n((()=>[i(" Horizontal Scroll "),r(T,null,{default:n((()=>[i("\\n横向滚动")])),_:1})])),_:1}),r(b,null,{default:n((()=>[r(v,{class:"scroll-view_H","scroll-x":"true",onScroll:g.scroll,"scroll-left":"120"},{default:n((()=>[r(b,{id:"demo1",class:"scroll-view-item_H uni-bg-red"},{default:n((()=>[i("A")])),_:1}),r(b,{id:"demo2",class:"scroll-view-item_H uni-bg-green"},{default:n((()=>[i("B")])),_:1}),r(b,{id:"demo3",class:"scroll-view-item_H uni-bg-blue"},{default:n((()=>[i("C")])),_:1})])),_:1},8,["onScroll"])])),_:1}),r(b,{class:"uni-common-pb"})])),_:1})])),_:1})}],["__scopeId","data-v-4920af20"]]);export{f as default};
