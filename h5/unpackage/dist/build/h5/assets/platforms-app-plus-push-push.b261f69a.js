import{_ as e,ay as n,a1 as t,a as s,c as o,o as a,d as i,w as l,e as r,f as u,m as p,D as d,k as c,ao as m}from"./vendor.1f020a26.js";import{a as f}from"./index.1e1ef7c1.js";var g=e({data:()=>({title:"push",provider:[],pushServer:"http://demo.dcloud.net.cn/push/?",tranMsg:""}),onLoad:function(){n({service:"push",success:e=>{console.log("success",e),this.provider=e.provider},fail:e=>{console.log("获取推送通道失败",e)}})},onUnload:function(){this.tranMsg=""},methods:{listenTranMsg(){plus.push.addEventListener("click",(e=>{this.tranMsg=JSON.stringify(e)})),plus.push.addEventListener("receive",(e=>{this.tranMsg=JSON.stringify(e)})),t({title:"开始监听透传数据",icon:"success"})},requireTranMsg(){var e=plus.push.getClientInfo(),n=this.pushServer+"type=tran&appid="+encodeURIComponent(plus.runtime.appid);e.id&&(n+="&id="+e.id),n+="&cid="+encodeURIComponent(e.clientid),"iOS"==plus.os.name&&(n+="&token="+encodeURIComponent(e.token)),n+="&title="+encodeURIComponent("Hello uniapp"),n+="&content="+encodeURIComponent("带透传数据推送通知！"),"iOS"===plus.os.name?n+="&payload="+encodeURIComponent('{"title":"Hello uniapp Test","content":"test content"}'):n+="&payload="+encodeURIComponent('\'{"title":"Hello uniapp Test","content":"test content"}\''),n+="&version="+encodeURIComponent(plus.runtime.version),plus.runtime.openURL(n)}}},[["render",function(e,n,t,g,v,h){const C=s(o("page-head"),f),y=d,U=c,M=m;return a(),i(U,null,{default:l((()=>[r(C,{title:v.title},null,8,["title"]),v.provider[0]?(a(),i(U,{key:0,class:"uni-padding-wrap"},{default:l((()=>[r(U,{class:"uni-btn-v uni-common-mt"},{default:l((()=>[r(y,{type:"primary",onClick:h.listenTranMsg},{default:l((()=>[u("监听透传数据")])),_:1},8,["onClick"])])),_:1}),r(U,{class:"uni-btn-v uni-common-mt"},{default:l((()=>[r(y,{type:"primary",onClick:h.requireTranMsg},{default:l((()=>[u('发送"透传数据"消息')])),_:1},8,["onClick"])])),_:1}),r(U,{class:"uni-title uni-common-mt"},{default:l((()=>[u("透传内容：")])),_:1}),r(U,{class:"uni-textarea"},{default:l((()=>[r(M,{modelValue:v.tranMsg,"onUpdate:modelValue":n[0]||(n[0]=e=>v.tranMsg=e)},null,8,["modelValue"])])),_:1})])),_:1})):p("",!0)])),_:1})}]]);export{g as default};
