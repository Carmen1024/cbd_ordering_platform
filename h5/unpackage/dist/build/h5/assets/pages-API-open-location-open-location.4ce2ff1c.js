import{_ as l,a_ as a,a as e,c as t,o as s,d as u,w as i,e as d,f as n,k as c,a1 as f,T as o,aP as _}from"./vendor.6cfed29b.js";import{_ as m}from"./page-head.8cd8e2f7.js";var p=l({data:()=>({title:"openLocation"}),methods:{openLocation:function(l){console.log(l);var e=l.detail.value;a({longitude:Number(e.longitude),latitude:Number(e.latitude),name:e.name,address:e.address})}}},[["render",function(l,a,p,r,b,v){const g=e(t("page-head"),m),y=c,x=f,h=o,L=_;return s(),u(y,null,{default:i((()=>[d(g,{title:b.title},null,8,["title"]),d(y,{class:"uni-common-mt"},{default:i((()=>[d(L,{onSubmit:v.openLocation},{default:i((()=>[d(y,{class:"uni-list"},{default:i((()=>[d(y,{class:"uni-list-cell"},{default:i((()=>[d(y,{class:"uni-list-cell-left"},{default:i((()=>[d(y,{class:"uni-label"},{default:i((()=>[n("经度")])),_:1})])),_:1}),d(y,{class:"uni-list-cell-db"},{default:i((()=>[d(x,{class:"uni-input",type:"text",disabled:!0,value:"116.39747",name:"longitude"})])),_:1})])),_:1}),d(y,{class:"uni-list-cell"},{default:i((()=>[d(y,{class:"uni-list-cell-left"},{default:i((()=>[d(y,{class:"uni-label"},{default:i((()=>[n("纬度")])),_:1})])),_:1}),d(y,{class:"uni-list-cell-db"},{default:i((()=>[d(x,{class:"uni-input",type:"text",disabled:!0,value:"39.9085",name:"latitude"})])),_:1})])),_:1}),d(y,{class:"uni-list-cell"},{default:i((()=>[d(y,{class:"uni-list-cell-left"},{default:i((()=>[d(y,{class:"uni-label"},{default:i((()=>[n("位置名称")])),_:1})])),_:1}),d(y,{class:"uni-list-cell-db"},{default:i((()=>[d(x,{class:"uni-input",type:"text",disabled:!0,value:"天安门",name:"name"})])),_:1})])),_:1}),d(y,{class:"uni-list-cell"},{default:i((()=>[d(y,{class:"uni-list-cell-left"},{default:i((()=>[d(y,{class:"uni-label"},{default:i((()=>[n("详细位置")])),_:1})])),_:1}),d(y,{class:"uni-list-cell-db"},{default:i((()=>[d(x,{class:"uni-input",type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"})])),_:1})])),_:1})])),_:1}),d(y,{class:"uni-padding-wrap"},{default:i((()=>[d(y,{class:"uni-btn-v uni-common-mt"},{default:i((()=>[d(h,{type:"primary",formType:"submit"},{default:i((()=>[n("查看位置")])),_:1})])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}],["__scopeId","data-v-21dd1f09"]]);export{p as default};
