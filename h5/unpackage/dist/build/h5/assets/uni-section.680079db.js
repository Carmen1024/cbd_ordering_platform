import{_ as t,o as e,d as s,w as a,e as i,s as l,m as n,ac as o,f as c,t as d,bf as u,k as r,h as _}from"./vendor.1f020a26.js";var p=t({name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,default:""},color:{type:String,default:"#333"},subTitle:{type:String,default:""},padding:{type:Boolean,default:!1}},data:()=>({}),watch:{title(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick(){this.$emit("click")}}},[["render",function(t,p,f,y,g,b){const h=r,m=_;return e(),s(h,{class:"uni-section"},{default:a((()=>[i(h,{class:"uni-section-header",nvue:""},{default:a((()=>[f.type?(e(),s(h,{key:0,class:"uni-section__head"},{default:a((()=>[i(h,{class:l([f.type,"uni-section__head-tag"])},null,8,["class"])])),_:1})):n("",!0),i(h,{class:"uni-section__content"},{default:a((()=>[i(m,{class:l([{distraction:!f.subTitle},"uni-section__content-title"]),style:o({color:f.color})},{default:a((()=>[c(d(f.title),1)])),_:1},8,["class","style"]),f.subTitle?(e(),s(m,{key:0,class:"uni-section__content-sub"},{default:a((()=>[c(d(f.subTitle),1)])),_:1})):n("",!0)])),_:1})])),_:1}),i(h,{style:o({padding:f.padding?"10px":""})},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3})}],["__scopeId","data-v-4be4a357"]]);export{p as _};
