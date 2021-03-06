import{_ as t,aP as e,a1 as l,aV as a,a as o,c as n,o as i,d as s,w as c,e as f,f as r,$ as u,t as d,h as m,k as p,ag as h}from"./vendor.1f020a26.js";import{_ as k}from"./uni-nav-bar.469d050b.js";import{_ as b}from"./uni-card.e2d27e82.js";import{_}from"./uni-section.680079db.js";import{_ as y}from"./uni-icons.cc078c3e.js";var C=t({components:{},data:()=>({city:"北京"}),methods:{back(){e({delta:1})},showMenu(){l({title:"菜单"})},clickLeft(){l({title:"左侧按钮"})},search(){l({title:"搜索"})},showCity(){l({title:"选择城市"})},scan(){l({title:"扫码"})},confirm(){l({title:"搜索"})}},onPullDownRefresh(){console.log("onPullDownRefresh"),setTimeout((function(){a(),console.log("stopPullDownRefresh")}),1e3)}},[["render",function(t,e,l,a,C,g){const w=o(n("uni-nav-bar"),k),x=m,v=o(n("uni-card"),b),L=o(n("uni-section"),_),F=p,j=o(n("uni-icons"),y),R=h;return i(),s(F,{class:"container"},{default:c((()=>[f(w,{fixed:!0,color:"#ffffff","background-color":"#005bac","status-bar":!0,"left-icon":"arrowleft","left-text":"返回",title:"uni-nav-bar 标题",onClickLeft:g.back},null,8,["onClickLeft"]),f(v,{"is-full":"",isShadow:!1},{default:c((()=>[f(x,{class:"uni-h6"},{default:c((()=>[r("本导航栏为自定义组件，并非原生导航栏。除非原生导航栏无法满足需求，否则不推荐使用自定义导航栏组件。具体参考https://ask.dcloud.net.cn/article/34921")])),_:1})])),_:1}),f(L,{title:"基本用法",type:"line",style:{"margin-bottom":"3px"}},{default:c((()=>[f(w,{"left-icon":"left",title:"标题",onClickLeft:g.back},null,8,["onClickLeft"])])),_:1}),f(L,{title:"左右显示文字",type:"line",style:{"margin-bottom":"3px"}},{default:c((()=>[f(w,{"left-icon":"left","right-text":"菜单","left-text":"返回",title:"标题",onClickLeft:g.back},null,8,["onClickLeft"])])),_:1}),f(L,{title:"插入slot",type:"line",style:{"margin-bottom":"3px"}},{default:c((()=>[f(w,{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-icon":"scan",onClickLeft:g.showCity,onClickRight:g.scan},{default:c((()=>[u("template",{slot:"left"},[f(F,{class:"city"},{default:c((()=>[f(F,null,{default:c((()=>[f(x,{class:"uni-nav-bar-text"},{default:c((()=>[r(d(C.city),1)])),_:1})])),_:1}),f(j,{type:"arrowdown",color:"#333333",size:"22"})])),_:1})]),f(F,{class:"input-view"},{default:c((()=>[f(j,{class:"input-uni-icon",type:"search",size:"18",color:"#999"}),f(R,{"confirm-type":"search",class:"nav-bar-input",type:"text",placeholder:"输入搜索关键词",onConfirm:g.confirm},null,8,["onConfirm"])])),_:1})])),_:1},8,["onClickLeft","onClickRight"])])),_:1})])),_:1})}],["__scopeId","data-v-077a91ce"]]);export{C as default};
