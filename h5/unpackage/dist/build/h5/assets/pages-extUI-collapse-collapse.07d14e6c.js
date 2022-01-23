import{_ as t,ap as e,a as l,c as i,o as s,d as a,w as n,e as o,bf as c,s as d,m as u,f as h,t as r,ac as p,i as f,h as m,k as _,a1 as g,D as y}from"./vendor.1f020a26.js";import{_ as b}from"./uni-card.e2d27e82.js";import{_ as w}from"./uni-icons.cc078c3e.js";import{_ as C}from"./uni-section.680079db.js";import{_ as v}from"./uni-list-item.6401addb.js";import{_ as x}from"./uni-list.2d672484.js";import"./uni-badge.086730a1.js";var V=t({name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:()=>({isOpen:!1,isheight:null,height:0,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,nameSync:0}),watch:{open(t){this.isOpen=t,this.onClick(t,"init")}},updated(t){this.$nextTick((()=>{this.init(!0)}))},created(){this.collapse=this.getCollapse(),this.oldHeight=0},unmounted(){this.__isUnmounted=!0,this.uninstall()},mounted(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn(`name 值 ${this.nameSync} 重复`),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init(t){this.getCollapseHeight(t)},uninstall(){this.collapse&&(this.collapse.childrens.forEach(((t,e)=>{t===this&&this.collapse.childrens.splice(e,1)})),this.collapse.names.forEach(((t,e)=>{t===this.nameSync&&this.collapse.names.splice(e,1)})))},onClick(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight(t,l=0){e().in(this).select(`#${this.elId}`).fields({size:!0},(e=>{if(!(l>=10)){if(!e)return l++,void this.getCollapseHeight(!1,l);this.height=e.height,this.isheight=!0,t||this.onClick(this.open,"init")}})).exec()},getNvueHwight(t){dom.getComponentRect(this.$refs["collapse--hook"],(e=>{if(e&&e.result&&e.size){if(this.height=e.size.height,this.isheight=!0,t)return;this.onClick(this.open,"init")}}))},getCollapse(t="uniCollapse"){let e=this.$parent,l=e.$options.name;for(;l!==t;){if(e=e.$parent,!e)return!1;l=e.$options.name}return e}}},[["render",function(t,e,g,y,b,C){const v=f,x=m,V=_,k=l(i("uni-icons"),w);return s(),a(V,{class:"uni-collapse-item"},{default:n((()=>[o(V,{onClick:e[0]||(e[0]=t=>C.onClick(!b.isOpen)),class:d(["uni-collapse-item__title",{"is-open":b.isOpen&&"auto"===g.titleBorder,"uni-collapse-item-border":"none"!==g.titleBorder}])},{default:n((()=>[o(V,{class:"uni-collapse-item__title-wrap"},{default:n((()=>[c(t.$slots,"title",{},(()=>[o(V,{class:d(["uni-collapse-item__title-box",{"is-disabled":g.disabled}])},{default:n((()=>[g.thumb?(s(),a(v,{key:0,src:g.thumb,class:"uni-collapse-item__title-img"},null,8,["src"])):u("",!0),o(x,{class:"uni-collapse-item__title-text"},{default:n((()=>[h(r(g.title),1)])),_:1})])),_:1},8,["class"])]),!0)])),_:3}),g.showArrow?(s(),a(V,{key:0,class:d([{"uni-collapse-item__title-arrow-active":b.isOpen,"uni-collapse-item--animation":!0===g.showAnimation},"uni-collapse-item__title-arrow"])},{default:n((()=>[o(k,{color:g.disabled?"#ddd":"#bbb",size:"14",type:"bottom"},null,8,["color"])])),_:1},8,["class"])):u("",!0)])),_:3},8,["class"]),o(V,{class:d(["uni-collapse-item__wrap",{"is--transition":g.showAnimation}]),style:p({height:(b.isOpen?b.height:0)+"px"})},{default:n((()=>[o(V,{id:b.elId,ref:"collapse--hook",class:d(["uni-collapse-item__wrap-content",{open:b.isheight,"uni-collapse-item--border":g.border&&b.isOpen}])},{default:n((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class"])])),_:3},8,["class","style"])])),_:3})}],["__scopeId","data-v-0f9cc292"]]);var k=t({name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:()=>({}),computed:{dataValue(){let t="string"==typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"==typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue(t){this.setOpen(t)}},created(){this.childrens=[],this.names=[]},mounted(){this.setOpen(this.dataValue)},methods:{setOpen(t){let e="string"==typeof t,l=Array.isArray(t);this.childrens.forEach(((i,s)=>{if(e&&t===i.nameSync){if(!this.accordion)return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");i.isOpen=!0}l&&t.forEach((t=>{if(t===i.nameSync){if(this.accordion)return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");i.isOpen=!0}}))})),this.emit(t)},setAccordion(t){this.accordion&&this.childrens.forEach(((e,l)=>{t!==e&&(e.isOpen=!1)}))},resize(){this.childrens.forEach(((t,e)=>{t.getCollapseHeight()}))},onChange(t,e){let l=[];this.accordion?l=t?e.nameSync:"":this.childrens.forEach(((t,e)=>{t.isOpen&&l.push(t.nameSync)})),this.$emit("change",l),this.emit(l)},emit(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}},[["render",function(t,e,l,i,o,d){const u=_;return s(),a(u,{class:"uni-collapse"},{default:n((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-30796755"]]);var S=t({components:{},data:()=>({value:["0"],accordionVal:"1",content:"折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。",extraIcon:{color:"#4cd964",size:"26",type:"image"}}),methods:{add(){this.content.length>35?this.content="折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。":this.content="折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。"},onClick(t){g({title:"列表被点击"})},change(t){console.log(t)}}},[["render",function(t,e,c,d,u,p){const f=m,g=l(i("uni-card"),b),w=_,S=l(i("uni-collapse-item"),V),O=l(i("uni-collapse"),k),A=l(i("uni-section"),C),$=y,I=l(i("uni-list-item"),v),B=l(i("uni-list"),x);return s(),a(w,null,{default:n((()=>[o(g,{"is-shadow":!1,"is-full":""},{default:n((()=>[o(f,{class:"uni-h6"},{default:n((()=>[h("折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。")])),_:1})])),_:1}),o(A,{title:"基础用法",type:"line"},{default:n((()=>[o(O,{ref:"collapse",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),onChange:p.change},{default:n((()=>[o(S,{title:"默认开启"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h(r(u.content),1)])),_:1})])),_:1})])),_:1}),o(S,{title:"折叠内容"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。")])),_:1})])),_:1})])),_:1}),o(S,{title:"禁用状态",disabled:""},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("禁用状态内容主体，页面上是看不到这段话的。")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),o($,{class:"button",type:"primary",onClick:p.add},{default:n((()=>[h("动态修改内容")])),_:1},8,["onClick"]),o(A,{title:"使用动画效果",type:"line"},{default:n((()=>[o(O,null,{default:n((()=>[o(S,{title:"使用动画","show-animation":!0},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。")])),_:1})])),_:1})])),_:1}),o(S,{title:"不使用动画","show-animation":!1},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h('设置 show-animation="false",关闭当前组件动画效果。')])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(A,{title:"手风琴效果（只会保留一个的打开状态）",type:"line"},{default:n((()=>[o(O,{accordion:"",modelValue:u.accordionVal,"onUpdate:modelValue":e[1]||(e[1]=t=>u.accordionVal=t),onChange:p.change},{default:n((()=>[o(S,{title:"手风琴效果"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])),_:1})])),_:1})])),_:1}),o(S,{title:"手风琴效果"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])),_:1})])),_:1})])),_:1}),o(S,{title:"手风琴效果"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),o(A,{title:"配置图片",type:"line"},{default:n((()=>[o(O,null,{default:n((()=>[o(S,{title:"标题文字",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("折叠内容主体，可自定义内容及样式")])),_:1})])),_:1})])),_:1}),o(S,{title:"标题文字",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"},{default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("折叠内容主体，可自定义内容及样式")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),o(A,{title:"使用插槽",type:"line"},{default:n((()=>[o(O,null,{default:n((()=>[o(S,{titleBorder:"none"},{title:n((()=>[o(B,null,{default:n((()=>[o(I,{title:"标题使用自定义标题插槽","show-extra-icon":!0,"extra-icon":u.extraIcon},null,8,["extra-icon"])])),_:1})])),default:n((()=>[o(w,{class:"content"},{default:n((()=>[o(f,{class:"text"},{default:n((()=>[h("折叠内容主体，可自定义内容及样式")])),_:1})])),_:1})])),_:1}),o(S,{title:"折叠内容使用 uni-list 组件"},{default:n((()=>[o(B,null,{default:n((()=>[o(I,{title:"列表文字"}),o(I,{disabled:!0,title:"列表文字",note:"列表禁用状态"}),o(I,{title:"列表右侧显示 switch","show-switch":!0}),o(I,{"show-extra-icon":!0,"extra-icon":u.extraIcon,title:"列表左侧带扩展图标"},null,8,["extra-icon"]),o(I,{title:"列表左侧带略缩图",note:"列表描述信息",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"右侧文字",showArrow:""}),o(I,{title:"开启点击反馈",clickable:"",showArrow:"",onClick:p.onClick},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-69069888"]]);export{S as default};
