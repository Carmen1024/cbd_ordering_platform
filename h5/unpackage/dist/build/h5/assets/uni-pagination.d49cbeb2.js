import{bv as e,_ as t,a as n,c as a,o as i,d as r,w as s,e as u,f as c,t as o,s as l,p,q as h,F as d,k as g,h as x}from"./vendor.1f020a26.js";import{_ as m}from"./uni-icons.cc078c3e.js";var _={en:{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next"},es:{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"próxima"},fr:{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante"},"zh-Hans":{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页"},"zh-Hant":{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁"}};const{t:f}=e(_);var v=t({name:"UniPagination",emits:["update:modelValue","input","change"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7}},data:()=>({currentIndex:1,paperData:[]}),computed:{prevPageText(){return this.prevText||f("uni-pagination.prevText")},nextPageText(){return this.nextText||f("uni-pagination.nextText")},maxPage(){let e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper(){const e=this.currentIndex,t=this.pagerCount,n=this.total,a=this.pageSize;let i=[],r=[],s=Math.ceil(n/a);for(let c=0;c<s;c++)i.push(c+1);r.push(1);const u=i[i.length-(t+1)/2];return i.forEach(((n,a)=>{(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=u?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||s-t<n)&&n<i[i.length-1]&&r.push(n)})),s>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=u?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(t+1)/2>=e||e+2<=u||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}}},methods:{selectPage(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{let e=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>e?this.currentIndex=e:this.currentIndex+=5)}},clickLeft(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}},[["render",function(e,t,_,f,v,I){const b=g,y=n(a("uni-icons"),m),T=x;return i(),r(b,{class:"uni-pagination"},{default:s((()=>[u(b,{class:"uni-pagination__total is-phone-hide"},{default:s((()=>[c("共 "+o(_.total)+" 条",1)])),_:1}),u(b,{class:l(["uni-pagination__btn",1===v.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":1===v.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:I.clickLeft},{default:s((()=>[!0===_.showIcon||"true"===_.showIcon?(i(),r(y,{key:0,color:"#666",size:"16",type:"left"})):(i(),r(T,{key:1,class:"uni-pagination__child-btn"},{default:s((()=>[c(o(I.prevPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"]),u(b,{class:"uni-pagination__num uni-pagination__num-flex-none"},{default:s((()=>[u(b,{class:"uni-pagination__num-current"},{default:s((()=>[u(T,{class:"uni-pagination__num-current-text is-pc-hide",style:{color:"#409EFF"}},{default:s((()=>[c(o(v.currentIndex),1)])),_:1}),u(T,{class:"uni-pagination__num-current-text is-pc-hide"},{default:s((()=>[c("/"+o(I.maxPage||0),1)])),_:1}),(i(!0),p(d,null,h(I.paper,((e,t)=>(i(),r(b,{key:t,class:l([{"page--active":e===v.currentIndex},"uni-pagination__num-tag tag--active is-phone-hide"]),onClick:n=>I.selectPage(e,t)},{default:s((()=>[u(T,null,{default:s((()=>[c(o(e),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})])),_:1}),u(b,{class:l(["uni-pagination__btn",v.currentIndex>=I.maxPage?"uni-pagination--disabled":"uni-pagination--enabled"]),"hover-class":v.currentIndex===I.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70,onClick:I.clickRight},{default:s((()=>[!0===_.showIcon||"true"===_.showIcon?(i(),r(y,{key:0,color:"#666",size:"16",type:"right"})):(i(),r(T,{key:1,class:"uni-pagination__child-btn"},{default:s((()=>[c(o(I.nextPageText),1)])),_:1}))])),_:1},8,["class","hover-class","onClick"])])),_:1})}],["__scopeId","data-v-eecc85ae"]]);export{v as _};
