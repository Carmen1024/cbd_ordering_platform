import{_ as t,o as a,d as e,w as i,e as l,s,p as n,q as r,ac as o,F as d,f as c,t as u,m as h,bf as _,aJ as g,k as f,i as p,h as m,a1 as b,U as v,a as k,c as x}from"./vendor.1f020a26.js";import{_ as y}from"./uni-card.e2d27e82.js";import{_ as C}from"./uni-list.2d672484.js";import{_ as T}from"./uni-section.680079db.js";import{_ as L}from"./uni-icons.cc078c3e.js";var S=t({name:"UniListChat",emits:["click"],props:{title:{type:String,default:""},note:{type:String,default:""},clickable:{type:Boolean,default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},badgeText:{type:[String,Number],default:""},badgePositon:{type:String,default:"right"},time:{type:String,default:""},avatarCircle:{type:Boolean,default:!1},avatar:{type:String,default:""},avatarList:{type:Array,default:()=>[]}},computed:{isSingle(){if("dot"===this.badgeText)return"uni-badge--dot";return this.badgeText.toString().length>1?"uni-badge--complex":"uni-badge--single"},computedAvatar(){return this.avatarList.length>4?(this.imageWidth=13.95,"avatarItem--3"):this.avatarList.length>1?(this.imageWidth=21.15,"avatarItem--2"):(this.imageWidth=45,"avatarItem--1")}},data:()=>({isFirstChild:!1,border:!0,imageWidth:50}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0),this.border=this.list.border)},methods:{getForm(t="uniList"){let a=this.$parent,e=a.$options.name;for(;e!==t;){if(a=a.$parent,!a)return!1;e=a.$options.name}return a},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(t){uni[t]({url:this.to,success:t=>{this.$emit("click",{data:t})},fail:t=>{this.$emit("click",{data:t}),console.error(t.errMsg)}})}}},[["render",function(t,b,v,k,x,y){const C=f,T=p,L=m;return a(),e(C,{"hover-class":v.clickable||v.link?"uni-list-chat--hover":"",class:"uni-list-chat",onClick:g(y.onClick,["stop"])},{default:i((()=>[l(C,{class:s({"uni-list--border":x.border,"uni-list-chat--first":x.isFirstChild})},null,8,["class"]),l(C,{class:"uni-list-chat__container"},{default:i((()=>[l(C,{class:"uni-list-chat__header-warp"},{default:i((()=>[v.avatarCircle||0===v.avatarList.length?(a(),e(C,{key:0,class:s(["uni-list-chat__header",{"header--circle":v.avatarCircle}])},{default:i((()=>[l(T,{class:"uni-list-chat__header-image",src:v.avatar,mode:"aspectFill"},null,8,["src"])])),_:1},8,["class"])):(a(),e(C,{key:1,class:"uni-list-chat__header"},{default:i((()=>[(a(!0),n(d,null,r(v.avatarList,((t,n)=>(a(),e(C,{key:n,class:s(["uni-list-chat__header-box",y.computedAvatar]),style:o({width:x.imageWidth+"px",height:x.imageWidth+"px"})},{default:i((()=>[l(T,{class:"uni-list-chat__header-image",style:o({width:x.imageWidth+"px",height:x.imageWidth+"px"}),src:t.url,mode:"aspectFill"},null,8,["style","src"])])),_:2},1032,["class","style"])))),128))])),_:1}))])),_:1}),v.badgeText&&"left"===v.badgePositon?(a(),e(C,{key:0,class:s(["uni-list-chat__badge uni-list-chat__badge-pos",[y.isSingle]])},{default:i((()=>[l(L,{class:"uni-list-chat__badge-text"},{default:i((()=>[c(u("dot"===v.badgeText?"":v.badgeText),1)])),_:1})])),_:1},8,["class"])):h("",!0),l(C,{class:"uni-list-chat__content"},{default:i((()=>[l(C,{class:"uni-list-chat__content-main"},{default:i((()=>[l(L,{class:"uni-list-chat__content-title uni-ellipsis"},{default:i((()=>[c(u(v.title),1)])),_:1}),l(L,{class:"uni-list-chat__content-note uni-ellipsis"},{default:i((()=>[c(u(v.note),1)])),_:1})])),_:1}),l(C,{class:"uni-list-chat__content-extra"},{default:i((()=>[_(t.$slots,"default",{},(()=>[l(L,{class:"uni-list-chat__content-extra-text"},{default:i((()=>[c(u(v.time),1)])),_:1}),v.badgeText&&"right"===v.badgePositon?(a(),e(C,{key:0,class:s(["uni-list-chat__badge",[y.isSingle,"right"===v.badgePositon?"uni-list-chat--right":""]])},{default:i((()=>[l(L,{class:"uni-list-chat__badge-text"},{default:i((()=>[c(u("dot"===v.badgeText?"":v.badgeText),1)])),_:1})])),_:1},8,["class"])):h("",!0)]),!0)])),_:3})])),_:3})])),_:3})])),_:3},8,["hover-class","onClick"])}],["__scopeId","data-v-032042e2"]]);var D=t({components:{},data:()=>({UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},listData:[],avatarList:[{url:"/static/logo.jpg"},{url:"/static/logo.jpg"},{url:"/static/logo.jpg"}]}),onLoad(){this.getList()},methods:{onClick(){b({title:"列表被点击"})},avatar(t){let a=[];return this.avatarList.forEach(((e,i)=>{i<t&&a.push(e)})),a},getList(){v({url:"https://unidemo.dcloud.net.cn/api/news",data:{column:"id,post_id,title,author_name,cover,published_at"},success:t=>{if(200==t.statusCode){let a=this.setTime(t.data);a=this.reload?a:this.listData.concat(a),a.map((t=>(t.text=Math.floor(-19*Math.random()+20),t))),this.listData=this.getRandomArrayElements(a,3)}},fail:(t,a)=>{console.log("fail"+JSON.stringify(t))}})},getRandomArrayElements(t,a){for(var e,i,l=t.slice(0),s=t.length,n=s-a;s-- >n;)e=l[i=Math.floor((s+1)*Math.random())],l[i]=l[s],l[s]=e;return l.slice(n)},setTime(t){var a=[];return t.forEach((t=>{a.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:this.format(t.published_at),title:t.title})})),a},format(t){var a=this.parse(t),e=Date.now()-a.getTime();if(e<this.UNITS["天"])return this.humanize(e);var i=function(t){return t<10?"0"+t:t};return a.getFullYear()+"-"+i(a.getMonth()+1)+"-"+i(a.getDate())+" "+i(a.getHours())+":"+i(a.getMinutes())},parse(t){var a=t.split(/[^0-9]/);return new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}}},[["render",function(t,s,o,u,h,_){const g=m,p=k(x("uni-card"),y),b=k(x("uni-list-chat"),S),v=k(x("uni-list"),C),D=k(x("uni-section"),T),A=k(x("uni-icons"),L),w=f;return a(),e(w,null,{default:i((()=>[l(p,{"is-shadow":!1,"is-full":""},{default:i((()=>[l(g,{class:"uni-h6"},{default:i((()=>[c("此示例展示了聊天列表的使用场景。")])),_:1})])),_:1}),l(D,{title:"圆头像且不显示分割线",type:"line"},{default:i((()=>[l(v,{border:!1},{default:i((()=>[(a(!0),n(d,null,r(h.listData,(t=>(a(),e(b,{"avatar-circle":!0,key:t.id,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,clickable:!1},null,8,["title","avatar","note","time"])))),128))])),_:1})])),_:1}),l(D,{title:"带圆点",type:"line"},{default:i((()=>[l(v,null,{default:i((()=>[(a(!0),n(d,null,r(h.listData,(t=>(a(),e(b,{key:t.id,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,"badge-text":t.text,clickable:!1,"badge-positon":"left"},null,8,["title","avatar","note","time","badge-text"])))),128))])),_:1})])),_:1}),l(D,{title:"自定义右侧内容",type:"line"},{default:i((()=>[l(v,null,{default:i((()=>[(a(!0),n(d,null,r(h.listData,(t=>(a(),e(b,{key:t.id,title:t.author_name,avatar:t.cover,note:t.title,"badge-positon":"left","badge-text":t.text},{default:i((()=>[l(w,{class:"chat-custom-right"},{default:i((()=>[l(g,{class:"chat-custom-text"},{default:i((()=>[c("刚刚")])),_:1}),l(A,{type:"star-filled",color:"#999",size:"18"})])),_:1})])),_:2},1032,["title","avatar","note","badge-text"])))),128))])),_:1})])),_:1}),l(D,{title:"带通知角标的单头像聊天列表",type:"line"},{default:i((()=>[l(v,null,{default:i((()=>[(a(!0),n(d,null,r(h.listData,(t=>(a(),e(b,{key:t.id,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,clickable:!0,"badge-text":t.text,onClick:_.onClick},null,8,["title","avatar","note","time","badge-text","onClick"])))),128))])),_:1})])),_:1}),l(D,{title:"带通知角标的多头像聊天列表",type:"line"},{default:i((()=>[l(v,null,{default:i((()=>[(a(!0),n(d,null,r(h.listData,((t,i)=>(a(),e(b,{key:t.id,title:t.author_name,avatar:t.cover,note:t.title,time:t.published_at,clickable:!0,avatarList:_.avatar(i+1),"badge-text":t.text,onClick:_.onClick},null,8,["title","avatar","note","time","avatarList","badge-text","onClick"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-dff0d670"]]);export{D as default};
