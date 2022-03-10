import{_ as a,Z as t,b5 as e,b6 as l,al as s,R as n,o as i,d as c,w as u,e as o,f as d,k as f,a2 as r,U as h}from"./vendor.a21c6627.js";var k=a({data:()=>({title:"get/set/clearStorage",key:"",data:""}),methods:{keyChange:function(a){this.key=a.detail.value},dataChange:function(a){this.data=a.detail.value},getStorage:function(){var a=this.key;this.data,0===a.length?t({title:"读取数据失败",content:"key 不能为空",showCancel:!1}):e({key:a,success:a=>{t({title:"读取数据成功",content:"data: '"+a.data+"'",showCancel:!1})},fail:()=>{t({title:"读取数据失败",content:"找不到 key 对应的数据",showCancel:!1})}})},setStorage:function(){var a=this.key,e=this.data;0===a.length?t({title:"保存数据失败",content:"key 不能为空",showCancel:!1}):l({key:a,data:e,success:a=>{t({title:"存储数据成功",content:JSON.stringify(a.errMsg),showCancel:!1})},fail:()=>{t({title:"储存数据失败!",showCancel:!1})}})},clearStorage:function(){s(),this.key="",this.data="",t({title:"清除数据成功",content:" ",showCancel:!1})}}},[["render",function(a,t,e,l,s,k){const g=n("page-head"),y=f,_=r,p=h;return i(),c(y,null,{default:u((()=>[o(g,{title:s.title},null,8,["title"]),o(y,{class:"uni-common-mt"},{default:u((()=>[o(y,{class:"uni-list"},{default:u((()=>[o(y,{class:"uni-list-cell"},{default:u((()=>[o(y,{class:"uni-list-cell-left"},{default:u((()=>[o(y,{class:"uni-label"},{default:u((()=>[d("key")])),_:1})])),_:1}),o(y,{class:"uni-list-cell-db"},{default:u((()=>[o(_,{class:"uni-input",type:"text",placeholder:"请输入key",name:"key",value:s.key,onInput:k.keyChange},null,8,["value","onInput"])])),_:1})])),_:1}),o(y,{class:"uni-list-cell"},{default:u((()=>[o(y,{class:"uni-list-cell-left"},{default:u((()=>[o(y,{class:"uni-label"},{default:u((()=>[d("value")])),_:1})])),_:1}),o(y,{class:"uni-list-cell-db"},{default:u((()=>[o(_,{class:"uni-input",type:"text",placeholder:"请输入value",name:"data",value:s.data,onInput:k.dataChange},null,8,["value","onInput"])])),_:1})])),_:1})])),_:1}),o(y,{class:"uni-padding-wrap"},{default:u((()=>[o(y,{class:"uni-btn-v"},{default:u((()=>[o(p,{type:"primary",class:"btn-setstorage",onClick:k.setStorage},{default:u((()=>[d("存储数据")])),_:1},8,["onClick"]),o(p,{onClick:k.getStorage},{default:u((()=>[d("读取数据")])),_:1},8,["onClick"]),o(p,{onClick:k.clearStorage},{default:u((()=>[d("清理数据")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-badbaa8c"]]);export{k as default};
