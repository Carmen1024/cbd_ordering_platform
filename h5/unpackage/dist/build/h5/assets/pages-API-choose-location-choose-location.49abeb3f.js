import{_ as a,b4 as t,R as o,o as e,d as n,w as l,e as s,f as i,T as c,N as u,F as d,Q as r,k as f,h,U as _}from"./vendor.a21c6627.js";import{a as m}from"./util.b5eb4444.js";var p=m;var g=a({data:()=>({title:"chooseLocation",hasLocation:!1,location:{},locationAddress:""}),methods:{chooseLocation:function(){t({success:a=>{this.hasLocation=!0,this.location=p(a.longitude,a.latitude),this.locationAddress=a.address}})},clear:function(){this.hasLocation=!1}}},[["render",function(a,t,m,p,g,k){const L=o("page-head"),F=f,b=h,y=_;return e(),n(F,null,{default:l((()=>[s(L,{title:g.title},null,8,["title"]),s(F,{class:"uni-padding-wrap"},{default:l((()=>[s(F,{style:{background:"#FFFFFF",padding:"40rpx"}},{default:l((()=>[s(F,{class:"uni-hello-text uni-center"},{default:l((()=>[i("当前位置信息")])),_:1}),!1===g.hasLocation?(e(),n(F,{key:0,class:"uni-h2 uni-center uni-common-mt"},{default:l((()=>[i("未选择位置")])),_:1})):c("",!0),!0===g.hasLocation?(e(),u(r,{key:1},[s(F,{class:"uni-hello-text uni-center",style:{"margin-top":"10px"}},{default:l((()=>[i(d(g.locationAddress),1)])),_:1}),s(F,{class:"uni-h2 uni-center uni-common-mt"},{default:l((()=>[s(b,null,{default:l((()=>[i("E: "+d(g.location.longitude[0])+"°"+d(g.location.longitude[1])+"′",1)])),_:1}),s(b,null,{default:l((()=>[i("\\nN: "+d(g.location.latitude[0])+"°"+d(g.location.latitude[1])+"′",1)])),_:1})])),_:1})],64)):c("",!0)])),_:1}),s(F,{class:"uni-btn-v"},{default:l((()=>[s(y,{type:"primary",onClick:k.chooseLocation},{default:l((()=>[i("选择位置")])),_:1},8,["onClick"]),s(y,{onClick:k.clear},{default:l((()=>[i("清空")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3eb9cde8"]]);export{g as default};
