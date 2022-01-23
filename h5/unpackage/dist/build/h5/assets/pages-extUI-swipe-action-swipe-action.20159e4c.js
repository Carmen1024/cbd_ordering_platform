import{_ as t,o as e,d as o,w as n,e as s,bf as i,p as a,q as l,ac as c,aJ as r,f as h,t as d,F as u,h as p,k as f,a1 as g,au as m,a as b,c as w}from"./vendor.1f020a26.js";import{_ as x}from"./uni-card.e2d27e82.js";import{_ as C}from"./uni-section.680079db.js";function _(){var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0;for(let n=0;n<e.length-1;n++)if(t.indexOf(e[n])>0){o=!1;break}return o}let y={};y={data:()=>({is_show:"none"}),watch:{show(t){this.is_show=this.show}},created(){this.swipeaction=this.getSwipeAction(),void 0!==this.swipeaction.children&&this.swipeaction.children.push(this)},mounted(){this.is_show=this.show},methods:{closeSwipe(t){this.autoClose&&this.swipeaction.closeOther(this)},change(t){this.$emit("change",t.open),this.is_show!==t.open&&(this.is_show=t.open)},appTouchStart(t){if(_())return;const{clientX:e}=t.changedTouches[0];this.clientX=e,this.timestamp=(new Date).getTime()},appTouchEnd(t,e,o,n){if(_())return;const{clientX:s}=t.changedTouches[0];let i=Math.abs(this.clientX-s),a=(new Date).getTime()-this.timestamp;i<40&&a<300&&this.$emit("click",{content:o,index:e,position:n})},onClickForPC(t,e,o){_()&&this.$emit("click",{content:e,index:t,position:o})}}};var k=!1;function v(t,e){var o=t.instance,n=o.getDataset().disabled,s=o.getState();D(o,e),(n=("string"==typeof n?JSON.parse(n):n)||!1)||(o.requestAnimationFrame((function(){o.removeClass("ani"),e.callMethod("closeSwipe")})),s.x=s.left||0,function(t){var e=t.instance,o=e.getState();W(e);var n=t.touches[0];k&&F()&&(n=t);o.startX=n.clientX,o.startY=n.clientY}(t))}function S(t,e){var o=t.instance,n=o.getDataset().disabled,s=o.getState();(n=("string"==typeof n?JSON.parse(n):n)||!1)||(!function(t){var e=t.instance.getState(),o=t.touches[0];k&&F()&&(o=t);e.deltaX=o.clientX-e.startX,e.deltaY=o.clientY-e.startY,e.offsetY=Math.abs(e.deltaY),e.offsetX=Math.abs(e.deltaX),e.direction=e.direction||function(t,e){if(t>e&&t>10)return"horizontal";if(e>t&&e>10)return"vertical";return""}(e.offsetX,e.offsetY)}(t),"horizontal"===s.direction&&(t.preventDefault&&t.preventDefault(),X(s.x+s.deltaX,o)))}function T(t,e){var o=t.instance,n=o.getDataset().disabled,s=o.getState();(n=("string"==typeof n?JSON.parse(n):n)||!1)||function(t,e,o){var n=e.getState(),s=n.threshold;n.position;var i=n.isopen||"none",a=n.leftWidth,l=n.rightWidth;if(0===n.deltaX)return void O("none",e,o);O("none"===i&&l>0&&-t>s||"none"!==i&&l>0&&l+t<s?"right":"none"===i&&a>0&&t>s||"none"!==i&&a>0&&a-t<s?"left":"none",e,o)}(s.left,o,e)}function X(t,e,o){t=t||0;var n,s,i,a=e.getState(),l=a.leftWidth,c=a.rightWidth;a.left=(n=t,s=-c,i=l,Math.min(Math.max(n,s),i)),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+a.left+"px)","-webkit-transform":"translateX("+a.left+"px)"})}))}function D(t,e){var o,n,s=t.getState(),i=e.selectComponent(".button-group--left"),a=e.selectComponent(".button-group--right");o=i.getBoundingClientRect(),n=a.getBoundingClientRect(),s.leftWidth=o.width||0,s.rightWidth=n.width||0,s.threshold=t.getDataset().threshold}function O(t,e,o){var n=e.getState(),s=n.leftWidth,i=n.rightWidth,a="";switch(n.isopen=n.isopen?n.isopen:"none",t){case"left":a=s;break;case"right":a=-i;break;default:a=0}n.isopen!==t&&(n.throttle=!0,o.callMethod("change",{open:t})),n.isopen=t,e.requestAnimationFrame((function(){e.addClass("ani"),X(a,e)}))}function W(t){var e=t.getState();e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0}function F(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],o=!0,n=0;n<e.length-1;n++)if(t.indexOf(e[n])>0){o=!1;break}return o}"object"==typeof window&&(k=!0);var $=!1;const Y={showWatch:function(t,e,o,n){var s=n.getState();D(n,o),t&&"none"!==t?O(t,n,o):(s.left&&O("none",n,o),W(n))},touchstart:v,touchmove:S,touchend:T,mousedown:function(t,e){k&&F()&&(v(t,e),$=!0)},mousemove:function(t,e){k&&F()&&$&&S(t)},mouseup:function(t,e){k&&F()&&(T(t,e),$=!1)},mouseleave:function(t,e){k&&F()&&($=!1)}};var A=t=>{t.$wxs||(t.$wxs=[]),t.$wxs.push("wxsswipe"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.wxsswipe=Y}})};var M={showWatch(t,e,o,n,s){let i=s.state;this.getDom(n,o,s),t&&"none"!==t?this.openState(t,n,o,s):(i.left&&this.openState("none",n,o,s),this.resetTouchStatus(n,s))},touchstart(t,e,o){let n=t.instance,s=n.getDataset().disabled,i=o.state;this.getDom(n,e,o),s=this.getDisabledType(s),s||(n.requestAnimationFrame((function(){n.removeClass("ani"),e.callMethod("closeSwipe")})),i.x=i.left||0,this.stopTouchStart(t,e,o))},touchmove(t,e,o){let n=t.instance,s=n.getDataset().disabled,i=o.state;if(s=this.getDisabledType(s),s)return;if(this.stopTouchMove(t,o),"horizontal"!==i.direction)return;t.preventDefault&&t.preventDefault();let a=i.x+i.deltaX;this.move(a,n,e,o)},touchend(t,e,o){let n=t.instance,s=n.getDataset().disabled,i=o.state;s=this.getDisabledType(s),s||this.moveDirection(i.left,n,e,o)},move(t,e,o,n){t=t||0;let s=n.state,i=s.leftWidth,a=s.rightWidth;s.left=this.range(t,-a,i),e.requestAnimationFrame((function(){e.setStyle({transform:"translateX("+s.left+"px)","-webkit-transform":"translateX("+s.left+"px)"})}))},getDom(t,e,o){let n=o.state;var s=e.$el.querySelector(".button-group--left"),i=e.$el.querySelector(".button-group--right");n.leftWidth=s.offsetWidth||0,n.rightWidth=i.offsetWidth||0,n.threshold=t.getDataset().threshold},getDisabledType:t=>("string"==typeof t?JSON.parse(t):t)||!1,range:(t,e,o)=>Math.min(Math.max(t,e),o),moveDirection(t,e,o,n){var s=n.state,i=s.threshold;s.position;var a=s.isopen||"none",l=s.leftWidth,c=s.rightWidth;0!==s.deltaX?"none"===a&&c>0&&-t>i||"none"!==a&&c>0&&c+t<i?this.openState("right",e,o,n):"none"===a&&l>0&&t>i||"none"!==a&&l>0&&l-t<i?this.openState("left",e,o,n):this.openState("none",e,o,n):this.openState("none",e,o,n)},openState(t,e,o,n){let s=n.state,i=s.leftWidth,a=s.rightWidth,l="";switch(s.isopen=s.isopen?s.isopen:"none",t){case"left":l=i;break;case"right":l=-a;break;default:l=0}s.isopen!==t&&(s.throttle=!0,o.callMethod("change",{open:t})),s.isopen=t,e.requestAnimationFrame((()=>{e.addClass("ani"),this.move(l,e,o,n)}))},getDirection:(t,e)=>t>e&&t>10?"horizontal":e>t&&e>10?"vertical":"",resetTouchStatus(t,e){let o=e.state;o.direction="",o.deltaX=0,o.deltaY=0,o.offsetX=0,o.offsetY=0},stopTouchStart(t,e,o){let n=t.instance,s=o.state;this.resetTouchStatus(n,o);var i=t.touches[0];s.startX=i.clientX,s.startY=i.clientY},stopTouchMove(t,e){t.instance;let o=e.state,n=t.touches[0];o.deltaX=n.clientX-o.startX,o.deltaY=n.clientY-o.startY,o.offsetY=Math.abs(o.deltaY),o.offsetX=Math.abs(o.deltaX),o.direction=o.direction||this.getDirection(o.offsetX,o.offsetY)}};const z={mounted(t,e,o){this.state={}},methods:{showWatch(t,e,o,n){M.showWatch(t,e,o,n,this)},touchstart(t,e){M.touchstart(t,e,this)},touchmove(t,e){M.touchmove(t,e,this)},touchend(t,e){M.touchend(t,e,this)}}};var P=t=>{t.$renderjs||(t.$renderjs=[]),t.$renderjs.push("renderswipe"),t.mixins||(t.mixins=[]),t.mixins.push({beforeCreate(){this.renderswipe=this}}),t.mixins.push(z)};const q={mixins:[y,{},{}],emits:["click","change"],props:{show:{type:String,default:"none"},disabled:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},threshold:{type:Number,default:20},leftOptions:{type:Array,default:()=>[]},rightOptions:{type:Array,default:()=>[]}},unmounted(){this.__isUnmounted=!0,this.uninstall()},methods:{uninstall(){this.swipeaction&&this.swipeaction.children.forEach(((t,e)=>{t===this&&this.swipeaction.children.splice(e,1)}))},getSwipeAction(t="uniSwipeAction"){let e=this.$parent,o=e.$options.name;for(;o!==t;){if(e=e.$parent,!e)return!1;o=e.$options.name}return e}}};A(q),P(q);var j=t(q,[["render",function(t,g,m,b,w,x){const C=p,_=f;return e(),o(_,{class:"uni-swipe"},{default:n((()=>[s(_,{class:"uni-swipe_box","change:prop":t.wxsswipe.showWatch,prop:t.is_show,"data-threshold":m.threshold,"data-disabled":m.disabled,onTouchstart:t.wxsswipe.touchstart,onTouchmove:t.wxsswipe.touchmove,onTouchend:t.wxsswipe.touchend},{default:n((()=>[s(_,{class:"uni-swipe_button-group button-group--left"},{default:n((()=>[i(t.$slots,"left",{},(()=>[(e(!0),a(u,null,l(m.leftOptions,((i,a)=>(e(),o(_,{key:a,style:c({backgroundColor:i.style&&i.style.backgroundColor?i.style.backgroundColor:"#C7C6CD",fontSize:i.style&&i.style.fontSize?i.style.fontSize:"16px"}),class:"uni-swipe_button button-hock",onTouchstart:t.appTouchStart,onTouchend:e=>t.appTouchEnd(e,a,i,"left"),onClick:r((e=>t.onClickForPC(a,i,"left")),["stop"])},{default:n((()=>[s(C,{class:"uni-swipe_button-text",style:c({color:i.style&&i.style.color?i.style.color:"#FFFFFF"})},{default:n((()=>[h(d(i.text),1)])),_:2},1032,["style"])])),_:2},1032,["style","onTouchstart","onTouchend","onClick"])))),128))]),!0)])),_:3}),s(_,{class:"uni-swipe_text--center"},{default:n((()=>[i(t.$slots,"default",{},void 0,!0)])),_:3}),s(_,{class:"uni-swipe_button-group button-group--right"},{default:n((()=>[i(t.$slots,"right",{},(()=>[(e(!0),a(u,null,l(m.rightOptions,((i,a)=>(e(),o(_,{key:a,style:c({backgroundColor:i.style&&i.style.backgroundColor?i.style.backgroundColor:"#C7C6CD",fontSize:i.style&&i.style.fontSize?i.style.fontSize:"16px"}),class:"uni-swipe_button button-hock",onTouchstart:t.appTouchStart,onTouchend:e=>t.appTouchEnd(e,a,i,"right"),onClick:r((e=>t.onClickForPC(a,i,"right")),["stop"])},{default:n((()=>[s(C,{class:"uni-swipe_button-text",style:c({color:i.style&&i.style.color?i.style.color:"#FFFFFF"})},{default:n((()=>[h(d(i.text),1)])),_:2},1032,["style"])])),_:2},1032,["style","onTouchstart","onTouchend","onClick"])))),128))]),!0)])),_:3})])),_:3},8,["change:prop","prop","data-threshold","data-disabled","onTouchstart","onTouchmove","onTouchend"])])),_:3})}],["__scopeId","data-v-504a4a4a"]]);var I=t({name:"uniSwipeAction",data:()=>({}),created(){this.children=[]},methods:{resize(){},closeAll(){this.children.forEach((t=>{t.is_show="none"}))},closeOther(t){this.openItem&&this.openItem!==t&&(this.openItem.is_show="none"),this.openItem=t}}},[["render",function(t,s,a,l,c,r){const h=f;return e(),o(h,null,{default:n((()=>[i(t.$slots,"default")])),_:3})}]]);var L=t({components:{},data:()=>({show:!1,isOpened:"none",options1:[{text:"取消置顶"}],options2:[{text:"取消",style:{backgroundColor:"#005bac"}},{text:"确认",style:{backgroundColor:"#F56C6C"}}],swipeList:[]}),onReady(){setTimeout((()=>{this.isOpened="right",this.swipeList=[{options:[{text:"添加",style:{backgroundColor:"#F56C6C"}}],id:0,content:"item1"},{id:1,options:[{text:"置顶"},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item2"},{id:2,options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"item3"}]}),1e3)},methods:{bindClick(t){g({title:`点击了${"left"===t.position?"左侧":"右侧"} ${t.content.text}按钮`,icon:"none"})},setOpened(){"none"!==this.isOpened?"left"!==this.isOpened?"right"!==this.isOpened||(this.isOpened="none"):this.isOpened="right":this.isOpened="left"},change(t){this.isOpened=t,console.log("返回：",t)},swipeChange(t,e){console.log("返回：",t),console.log("当前索引：",e)},swipeClick(t,e){let{content:o}=t;"删除"===o.text?m({title:"提示",content:"是否删除",success:t=>{t.confirm?this.swipeList.splice(e,1):t.cancel&&console.log("用户点击取消")}}):"添加"===o.text?this.swipeList.length<10?(this.swipeList.push({id:(new Date).getTime(),options:[{text:"置顶"},{text:"标记为已读",style:{backgroundColor:"rgb(254,156,1)"}},{text:"删除",style:{backgroundColor:"rgb(255,58,49)"}}],content:"新增"+(new Date).getTime()}),g({title:"添加了一条数据",icon:"none"})):g({title:"最多添加十条数据",icon:"none"}):g({title:`点击了${t.content.text}按钮`,icon:"none"})}}},[["render",function(t,i,c,r,g,m){const _=p,y=b(w("uni-card"),x),k=b(w("uni-section"),C),v=f,S=b(w("uni-swipe-action-item"),j),T=b(w("uni-swipe-action"),I);return e(),o(v,{class:"container"},{default:n((()=>[s(y,{"is-full":"","is-shadow":!1},{default:n((()=>[s(_,{class:"uni-h6"},{default:n((()=>[h("通过滑动触发选项的容器，容器内可放置列表等组件，通过左右滑动来触发一些操作。")])),_:1})])),_:1}),s(k,{title:"基本用法",type:"line"}),s(T,null,{default:n((()=>[s(S,{"left-options":g.options2,threshold:0,"right-options":g.options1,onClick:m.bindClick},{default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h("使用数据填充")])),_:1})])),_:1})])),_:1},8,["left-options","right-options","onClick"]),s(S,{onClick:m.bindClick},{left:n((()=>[s(v,{class:"slot-button"},{default:n((()=>[s(_,{class:"slot-button-text",onClick:i[0]||(i[0]=t=>m.bindClick({position:"left",content:{text:"置顶"}}))},{default:n((()=>[h("置顶")])),_:1})])),_:1})])),right:n((()=>[s(v,{class:"slot-button"},{default:n((()=>[s(_,{class:"slot-button-text"},{default:n((()=>[h("删除")])),_:1})])),_:1})])),default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h("使用插槽")])),_:1})])),_:1})])),_:1},8,["onClick"]),s(S,{"right-options":g.options1,onClick:m.bindClick},{left:n((()=>[s(v,{class:"slot-button"},{default:n((()=>[s(_,{class:"slot-button-text",onClick:i[1]||(i[1]=t=>m.bindClick({position:"left",content:{text:"置顶"}}))},{default:n((()=>[h("置顶")])),_:1})])),_:1})])),default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h("混合使用")])),_:1})])),_:1})])),_:1},8,["right-options","onClick"])])),_:1}),s(k,{title:"禁止滑动",type:"line"}),s(T,null,{default:n((()=>[s(S,{disabled:!0},{default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h("禁止左右滚动")])),_:1})])),_:1})])),_:1})])),_:1}),s(k,{title:"使用变量控制开关",type:"line"}),s(v,{class:"example-body"},{default:n((()=>[s(v,{class:"button",onClick:m.setOpened},{default:n((()=>[s(_,{class:"button-text"},{default:n((()=>[h("当前状态："+d(g.isOpened),1)])),_:1})])),_:1},8,["onClick"])])),_:1}),s(T,null,{default:n((()=>[s(S,{"left-options":g.options2,"right-options":g.options2,show:g.isOpened,"auto-close":!1,onChange:m.change,onClick:m.bindClick},{default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h("使用变量控制SwipeAction的开启状态")])),_:1})])),_:1})])),_:1},8,["left-options","right-options","show","onChange","onClick"])])),_:1}),s(k,{title:"swipe-action 列表",type:"line"}),s(T,null,{default:n((()=>[(e(!0),a(u,null,l(g.swipeList,((t,i)=>(e(),o(S,{"right-options":t.options,key:t.id,onChange:t=>m.swipeChange(t,i),onClick:t=>m.swipeClick(t,i)},{default:n((()=>[s(v,{class:"content-box"},{default:n((()=>[s(_,{class:"content-text"},{default:n((()=>[h(d(t.content),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["right-options","onChange","onClick"])))),128))])),_:1})])),_:1})}],["__scopeId","data-v-8bb4893a"]]);export{L as default};
