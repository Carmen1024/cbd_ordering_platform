import{a as e}from"./index.1e1ef7c1.js";import{_ as l,a,c as s,o as t,d as n,w as u,e as c,f as i,p as d,q as o,F as f,k as h,ad as m,ae as r,af as _,ai as k,t as v,ah as b,h as g}from"./vendor.1f020a26.js";var C=l({data:()=>({title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}),methods:{checkboxChange:function(e){var l=e.detail.value;console.log(l)},radioChange:function(e){var l=e.detail.value;console.log(l)}}},[["render",function(l,C,p,x,I,y){const j=a(s("page-head"),e),A=h,H=m,N=r,S=_,U=b,q=g,w=k;return t(),n(A,null,{default:u((()=>[c(j,{title:I.title},null,8,["title"]),c(A,{class:"uni-common-mt"},{default:u((()=>[c(A,{class:"uni-form-item uni-column"},{default:u((()=>[c(A,{class:"title"},{default:u((()=>[i("表单组件在label内")])),_:1}),c(S,{class:"uni-list",onChange:y.checkboxChange},{default:u((()=>[(t(!0),d(f,null,o(I.checkboxItems,(e=>(t(),n(N,{class:"uni-list-cell uni-list-cell-pd",key:e.name},{default:u((()=>[c(A,null,{default:u((()=>[c(H,{value:e.name,checked:e.checked},null,8,["value","checked"])])),_:2},1024),c(A,null,{default:u((()=>[i(v(e.value),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1}),c(A,{class:"uni-form-item uni-column"},{default:u((()=>[c(A,{class:"title"},{default:u((()=>[i("label用for标识表单组件")])),_:1}),c(w,{class:"uni-list",onChange:y.radioChange},{default:u((()=>[(t(!0),d(f,null,o(I.radioItems,((e,l)=>(t(),n(A,{class:"uni-list-cell uni-list-cell-pd",key:l},{default:u((()=>[c(A,null,{default:u((()=>[c(U,{id:e.name,value:e.name,checked:e.checked},null,8,["id","value","checked"])])),_:2},1024),c(N,{class:"label-2-text",for:e.name},{default:u((()=>[c(q,null,{default:u((()=>[i(v(e.value),1)])),_:2},1024)])),_:2},1032,["for"])])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1}),c(A,{class:"uni-form-item uni-column"},{default:u((()=>[c(A,{class:"title"},{default:u((()=>[i("label内有多个时选中第一个")])),_:1}),c(S,{class:"uni-list",onChange:y.checkboxChange},{default:u((()=>[c(N,{class:"label-3"},{default:u((()=>[c(A,{class:"uni-list-cell uni-list-cell-pd"},{default:u((()=>[c(H,{class:"checkbox-3"},{default:u((()=>[i("选项一")])),_:1})])),_:1}),c(A,{class:"uni-list-cell uni-list-cell-pd"},{default:u((()=>[c(H,{class:"checkbox-3"},{default:u((()=>[i("选项二")])),_:1})])),_:1}),c(A,{class:"uni-link uni-center",style:{"margin-top":"20rpx"}},{default:u((()=>[i("点击该label下的文字默认选中第一个checkbox")])),_:1})])),_:1})])),_:1},8,["onChange"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-8b23017c"]]);export{C as default};
