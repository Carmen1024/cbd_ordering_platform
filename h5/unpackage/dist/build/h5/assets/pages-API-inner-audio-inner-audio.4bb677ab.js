import{_ as a,aW as i,R as n,o as t,d as s,w as o,e,aY as l,k as u,i as d}from"./vendor.a21c6627.js";var h=a({data:()=>({title:"innerAudioContext",isPlaying:!1,isPlayEnd:!1,currentTime:0,duration:100}),computed:{position(){return this.isPlayEnd?0:this.currentTime},playImage(){return this.isPlaying?"/static/pause.png":"/static/play.png"}},onLoad(){this._isChanging=!1,this._audioContext=null,this.createAudio()},onUnload(){null!=this._audioContext&&this.isPlaying&&this.stop()},methods:{createAudio(){var a=this._audioContext=i();return a.autoplay=!1,a.src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3",a.onPlay((()=>{console.log("开始播放")})),a.onTimeUpdate((i=>{!0!==this._isChanging&&(this.currentTime=a.currentTime||0,this.duration=a.duration||0)})),a.onEnded((()=>{this.currentTime=0,this.isPlaying=!1,this.isPlayEnd=!0})),a.onError((a=>{this.isPlaying=!1,console.log(a.errMsg),console.log(a.errCode)})),a},onchanging(){this._isChanging=!0},onchange(a){console.log(a.detail.value),console.log(typeof a.detail.value),this._audioContext.seek(a.detail.value),this._isChanging=!1},play(){this.isPlaying?this.pause():(this.isPlaying=!0,this._audioContext.play(),this.isPlayEnd=!1)},pause(){this._audioContext.pause(),this.isPlaying=!1},stop(){this._audioContext.stop(),this.isPlaying=!1}}},[["render",function(a,i,h,r,g,c){const p=n("page-head"),y=l,m=u,C=d;return t(),s(m,{class:"uni-padding-wrap"},{default:o((()=>[e(p,{title:"audio"}),e(m,{class:"uni-common-mt"},{default:o((()=>[e(y,{value:c.position,min:0,max:g.duration,onChanging:c.onchanging,onChange:c.onchange},null,8,["value","max","onChanging","onChange"])])),_:1}),e(m,{class:"play-button-area"},{default:o((()=>[e(C,{class:"icon-play",src:c.playImage,onClick:c.play},null,8,["src","onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-721d6885"]]);export{h as default};
