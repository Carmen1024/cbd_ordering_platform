import{_ as e,A as t,Y as s,Z as a,R as n,o as i,d as o,w as l,e as c,f as r,k as u,ag as d,U as g}from"./vendor.a21c6627.js";const m="https://unidemo.dcloud.net.cn/ajax/echo/text?name=uni-app";var h=e({data:()=>({title:"request",loading:!1,res:""}),methods:{sendRequest(e){switch(this.loading=!0,e){case"promise":this._requestPromise();break;case"await":this._requestAwait();break;default:this._request()}},_request(){t({url:m,dataType:"text",data:{noncestr:Date.now()},success:e=>{console.log("request success",e),s({title:"请求成功",icon:"success",mask:!0,duration:2e3}),this.res="请求结果 : "+JSON.stringify(e)},fail:e=>{console.log("request fail",e),a({content:e.errMsg,showCancel:!1})},complete:()=>{this.loading=!1}})},_requestPromise(){t({url:m,dataType:"text",data:{noncestr:Date.now()}}).then((e=>{console.log("request success",e),s({title:"请求成功",icon:"success",mask:!0,duration:2e3}),this.res="请求结果 : "+JSON.stringify(e),this.loading=!1})).catch((e=>{console.log("request fail",e),a({content:e.errMsg,showCancel:!1}),this.loading=!1}))},async _requestAwait(){let e,n;try{e=await t({url:m,dataType:"text",data:{noncestr:Date.now()}})}catch(i){n=i}n?(console.log("request fail",n),a({content:n.errMsg,showCancel:!1})):(console.log("request success",e),s({title:"请求成功",icon:"success",mask:!0,duration:2e3}),this.res="请求结果 : "+JSON.stringify(e)),this.loading=!1}}},[["render",function(e,t,s,a,m,h){const f=n("page-head"),p=u,q=d,w=g;return i(),o(p,null,{default:l((()=>[c(f,{title:m.title},null,8,["title"]),c(p,{class:"uni-padding-wrap uni-common-mt"},{default:l((()=>[c(p,{class:"uni-hello-text"},{default:l((()=>[r(" 请点击按钮向服务器发起请求 ")])),_:1}),c(p,{class:"uni-textarea uni-common-mt"},{default:l((()=>[c(q,{value:m.res},null,8,["value"])])),_:1}),c(p,{class:"uni-btn-v uni-common-mt"},{default:l((()=>[c(w,{type:"primary",onClick:h.sendRequest,loading:m.loading},{default:l((()=>[r("发起请求（Callback）")])),_:1},8,["onClick","loading"]),c(w,{type:"primary",onClick:t[0]||(t[0]=e=>h.sendRequest("promise")),loading:m.loading},{default:l((()=>[r("发起请求（Promise）")])),_:1},8,["loading"]),c(w,{type:"primary",onClick:t[1]||(t[1]=e=>h.sendRequest("await")),loading:m.loading},{default:l((()=>[r("发起请求（Async/Await）")])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})}]]);export{h as default};
