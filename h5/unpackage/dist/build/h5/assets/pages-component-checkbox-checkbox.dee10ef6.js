import{a as e}from"./index.1e1ef7c1.js";import{_ as a,a as l,c as t,o as u,d as n,w as s,e as c,f as d,p as i,q as o,F as f,k as m,ad as r,ae as h,af as _,h as v,t as k}from"./vendor.1f020a26.js";var p=a({data:()=>({title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}),methods:{checkboxChange:function(e){for(var a=this.items,l=e.detail.value,t=0,u=a.length;t<u;++t){const e=a[t];l.indexOf(e.value)>=0?this.$set(e,"checked",!0):this.$set(e,"checked",!1)}}}},[["render",function(a,p,b,C,g,x){const F=l(t("page-head"),e),w=m,y=r,A=h,N=_,j=v;return u(),n(w,null,{default:s((()=>[c(F,{title:g.title},null,8,["title"]),c(w,{class:"uni-padding-wrap uni-common-mt"},{default:s((()=>[c(w,{class:"uni-title uni-common-mt"},{default:s((()=>[d("默认样式")])),_:1}),c(w,null,{default:s((()=>[c(N,null,{default:s((()=>[c(A,null,{default:s((()=>[c(y,{value:"cb1",checked:"true"}),d("选中 ")])),_:1}),c(A,null,{default:s((()=>[c(y,{value:"cb"}),d("未选中 ")])),_:1})])),_:1})])),_:1}),c(w,{class:"uni-title uni-common-mt"},{default:s((()=>[d("不同颜色和尺寸的checkbox")])),_:1}),c(w,null,{default:s((()=>[c(N,null,{default:s((()=>[c(A,null,{default:s((()=>[c(y,{value:"cb1",checked:"true",color:"#FFCC33",style:{transform:"scale(0.7)"}}),d("选中 ")])),_:1}),c(A,null,{default:s((()=>[c(y,{value:"cb",color:"#FFCC33",style:{transform:"scale(0.7)"}}),d("未选中 ")])),_:1})])),_:1})])),_:1})])),_:1}),c(w,{class:"uni-padding-wrap"},{default:s((()=>[c(w,{class:"uni-title uni-common-mt"},{default:s((()=>[d(" 推荐展示样式 "),c(j,null,{default:s((()=>[d("\\n使用 uni-list 布局")])),_:1})])),_:1})])),_:1}),c(w,{class:"uni-list"},{default:s((()=>[c(N,{onChange:x.checkboxChange},{default:s((()=>[(u(!0),i(f,null,o(g.items,(e=>(u(),n(A,{class:"uni-list-cell uni-list-cell-pd",key:e.value},{default:s((()=>[c(w,null,{default:s((()=>[c(y,{value:e.value,checked:e.checked},null,8,["value","checked"])])),_:2},1024),c(w,null,{default:s((()=>[d(k(e.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["onChange"])])),_:1})])),_:1})}],["__scopeId","data-v-62b81709"]]);export{p as default};
