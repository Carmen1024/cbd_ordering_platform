import{a}from"./index.1e1ef7c1.js";import{_ as e,a as l,c as t,o as s,d as u,w as n,e as i,f as r,p as d,q as c,F as o,k as f,ah as m,ae as _,ai as v,t as h}from"./vendor.1f020a26.js";var p=e({data:()=>({title:"radio 单选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}],current:0}),methods:{radioChange(a){for(let e=0;e<this.items.length;e++)if(this.items[e].value===a.detail.value){this.current=e;break}}}},[["render",function(e,p,g,C,k,F){const y=l(t("page-head"),a),x=f,w=m,A=_,N=v;return s(),u(x,null,{default:n((()=>[i(y,{title:k.title},null,8,["title"]),i(x,{class:"uni-padding-wrap"},{default:n((()=>[i(x,{class:"uni-title"},{default:n((()=>[r("默认样式")])),_:1}),i(x,null,{default:n((()=>[i(A,{class:"radio",style:{"margin-right":"30rpx"}},{default:n((()=>[i(w,{value:"r1",checked:"true"}),r("选中 ")])),_:1}),i(A,{class:"radio"},{default:n((()=>[i(w,{value:"r2"}),r("未选中 ")])),_:1})])),_:1})])),_:1}),i(x,{class:"uni-padding-wrap"},{default:n((()=>[i(x,{class:"uni-title"},{default:n((()=>[r("不同颜色和尺寸的radio")])),_:1}),i(x,null,{default:n((()=>[i(A,{class:"radio",style:{"margin-right":"30rpx"}},{default:n((()=>[i(w,{value:"r1",checked:"true",color:"#FFCC33",style:{transform:"scale(0.7)"}}),r("选中 ")])),_:1}),i(A,{class:"radio"},{default:n((()=>[i(w,{value:"r2",color:"#FFCC33",style:{transform:"scale(0.7)"}}),r("未选中 ")])),_:1})])),_:1})])),_:1}),i(x,{class:"uni-title uni-common-mt uni-common-pl"},{default:n((()=>[r("推荐展示样式")])),_:1}),i(x,{class:"uni-list"},{default:n((()=>[i(N,{onChange:F.radioChange},{default:n((()=>[(s(!0),d(o,null,c(k.items,((a,e)=>(s(),u(A,{class:"uni-list-cell uni-list-cell-pd",key:a.value},{default:n((()=>[i(x,null,{default:n((()=>[i(w,{value:a.value,checked:e===k.current},null,8,["value","checked"])])),_:2},1024),i(x,null,{default:n((()=>[r(h(a.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-242f2c10"]]);export{p as default};
