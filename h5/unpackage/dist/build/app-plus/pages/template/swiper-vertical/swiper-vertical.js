"use weex:vue";
(()=>{var e={683:e=>{e.exports={"@VERSION":2}},9936:e=>{e.exports={".page":{"":{flex:[1,0,0,1]}},".swiper":{"":{flex:[1,0,0,2],backgroundColor:["#005bac",0,0,2]}},".swiper-item":{"":{flex:[1,0,0,3]}},".video":{"":{flex:[1,0,0,4]}},"@VERSION":2}},9319:(e,t,i)=>{"use strict";var o=i(9936),s=i.n(o);t.Z=s()}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(683),t=i.n(e)();Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style(t,Vue.prototype.__$appStyle__);const o=[{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4"},{src:"https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4"}];var s=function(e,t,i,o,s,n,r,a,d){var l,p="function"==typeof e?e.options:e;if(d){p.components||(p.components={});var h=Object.prototype.hasOwnProperty;for(var c in d)h.call(d,c)&&!h.call(p.components,c)&&(p.components[c]=d[c])}if(t&&(p.render=t,p.staticRenderFns=i,p._compiled=!0),o&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=l):s&&(l=a?function(){s.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(p.functional){p._injectStyles=l;var u=p.render;p.render=function(e,t){return l.call(t),u(e,t)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,l):[l]}return{exports:e,options:p}}({data:()=>({circular:!0,videoList:[{id:"video0",src:"",img:""},{id:"video1",src:"",img:""},{id:"video2",src:"",img:""}],videoDataList:[]}),onLoad(e){},onReady(){this.init(),this.getData()},methods:{init(){this._videoIndex=0,this._videoContextList=[];for(var e=0;e<this.videoList.length;e++)this._videoContextList.push(uni.createVideoContext("video"+e,this));this._videoDataIndex=0},getData(e){this.videoDataList=o,setTimeout((()=>{this.updateVideo(!0)}),200)},onSwiperChange(e){let t=e.detail.current;if(t===this._videoIndex)return;let i=!1;0===t&&this._videoIndex===this.videoList.length-1?i=!0:t===this.videoList.length-1&&0===this._videoIndex?i=!1:t>this._videoIndex&&(i=!0),i?this._videoDataIndex++:this._videoDataIndex--,this._videoDataIndex<0?this._videoDataIndex=this.videoDataList.length-1:this._videoDataIndex>=this.videoDataList.length&&(this._videoDataIndex=0),this.circular=0!=this._videoDataIndex,this._videoIndex>=0&&(this._videoContextList[this._videoIndex].pause(),this._videoContextList[this._videoIndex].seek(0)),this._videoIndex=t,setTimeout((()=>{this.updateVideo(i)}),200)},getNextIndex(e){let t=this._videoIndex+(e?1:-1);return t<0?this.videoList.length-1:t>=this.videoList.length?0:t},getNextDataIndex(e){let t=this._videoDataIndex+(e?1:-1);return t<0?this.videoDataList.length-1:t>=this.videoDataList.length?0:t},updateVideo(e){this.$set(this.videoList[this._videoIndex],"src",this.videoDataList[this._videoDataIndex].src),this.$set(this.videoList[this.getNextIndex(e)],"src",this.videoDataList[this.getNextDataIndex(e)].src),setTimeout((()=>{this._videoContextList[this._videoIndex].play()}),200),console.log("v:"+this._videoIndex+" d:"+this._videoDataIndex+"; next v:"+this.getNextIndex(e)+" next d:"+this.getNextDataIndex(e))}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["page"]},[i("swiper",{staticClass:["swiper"],attrs:{circular:e.circular,vertical:!0},on:{change:e.onSwiperChange}},e._l(e.videoList,(function(e){return i("swiper-item",{key:e.id},[i("u-video",{ref:e.id,refInFor:!0,staticClass:["video"],attrs:{id:e.id,src:e.src,controls:!1,loop:!0,showCenterPlayBtn:!1}})],1)})),1)],1)])}),[],!1,null,null,null,!1,{});(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style(i(9319).Z,this.options.style)}).call(s);var n=s.exports;"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){const t=this.constructor;return this.then((i=>t.resolve(e()).then((()=>i))),(i=>t.resolve(e()).then((()=>{throw i}))))}),n.mpType="page",n.route="pages/template/swiper-vertical/swiper-vertical",n.el="#root",new Vue(n)})()})();