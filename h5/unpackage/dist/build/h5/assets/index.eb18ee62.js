var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;import{_ as r,g as s,r as i,s as l,a as p,b as d,c,o as g,d as _,w as u,e as m,f as h,i as f,h as b,j as P,k as I,u as A,l as T,m as v,n as E,p as B,q as x,t as w,v as L,x as D,y as R,z as O,A as j,B as y,C as V}from"./vendor.c7c2a947.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={},C=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/store/${e}`)in k)return;k[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},F={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:2e4,suspensible:!0};var q="/store/assets/logo.c8da0c35.jpg";var M=r({data:()=>({selected:{component:0,API:1,extUI:2,template:3},current:0,indexPage:[{tabBar:"/pages/tabBar/dashboard/dashboard",index:"/pages/tabBar/dashboard/dashboard"},{tabBar:"/pages/tabBar/subscribe/subscribe",index:"/pages/tabBar/subscribe/subscribe"},{tabBar:"/pages/tabBar/shoppingCart/shoppingCart",index:"/pages/tabBar/shoppingCart/shoppingCart"},{tabBar:"/pages/tabBar/order/order",index:"/pages/tabBar/order/order"},{tabBar:"/pages/tabBar/home/home",index:"/pages/tabBar/home/home"}]}),watch:{$route:{immediate:!0,handler(e){if(s().screenWidth>=768){let t,a=e.path;"/"===a?(t="component",a="/pages/tabBar/component/component"):t=a.split("/")[2],this.current=this.selected[t];for(const e of this.indexPage)a===e.tabBar&&i({url:e.index})}}}},mounted(){},methods:{toSecondMenu(e){const t="/"+e.pagePath;for(const a of this.indexPage)t===a.tabBar&&l({url:a.index})}}},[["render",function(e,t,a,o,n,r){const s=f,i=b,l=P,A=I,T=p(c("custom-tab-bar"),d);return g(),_(A,{class:"top-window-header"},{default:u((()=>[m(A,{class:"left-header logo"},{default:u((()=>[m(l,{class:"logo","open-type":"reLaunch",url:"/pages/component/view/view"},{default:u((()=>[m(s,{src:q,mode:"heightFix",style:{width:"30px"}}),m(i,null,{default:u((()=>[h("茶茶订货")])),_:1})])),_:1})])),_:1}),m(T,{class:"tab-bar-flex",direction:"horizontal","show-icon":!1,selected:n.current,onOnTabItemTap:r.toSecondMenu},null,8,["selected","onOnTabItemTap"])])),_:1})}],["__scopeId","data-v-52cb555b"]]);window.uni={},window.wx={},window.rpx2px=A;const U={},S=Object.assign;window.____CA21461____=!0,delete window.____CA21461____,window.__uniConfig=S({topWindow:{path:"windows/top-window.vue",style:{height:"60px"}},globalStyle:{pageOrientation:"portrait",backgroundColor:"#F8F8F8",backgroundColorTop:"#F4F5F6",backgroundColorBottom:"#F4F5F6",maxWidth:1190,navigationBar:{backgroundColor:"#F1F1F1",titleText:"Hello uniapp",titleColor:"#000000"}},tabBar:{position:"bottom",color:"#999999",selectedColor:"#005bac",borderStyle:"black",blurEffect:"none",fontSize:"10px",iconWidth:"24px",spacing:"3px",height:"50px",backgroundColor:"#fff",list:[{pagePath:"pages/tabBar/dashboard/dashboard",iconPath:"/static/icon/dashboard.png",selectedIconPath:"/static/icon/dashboardHL.png",text:"首页"},{pagePath:"pages/tabBar/subscribe/subscribe",iconPath:"/static/icon/subscribe.png",selectedIconPath:"/static/icon/subscribeHL.png",text:"订货"},{pagePath:"pages/tabBar/shoppingCart/shoppingCart",iconPath:"/static/icon/shoppingCart.png",selectedIconPath:"/static/icon/shoppingCartHL.png",text:"购物车"},{pagePath:"pages/tabBar/order/order",iconPath:"/static/icon/order.png",selectedIconPath:"/static/icon/orderHL.png",text:"订单"},{pagePath:"pages/tabBar/home/home",iconPath:"/static/icon/home.png",selectedIconPath:"/static/icon/homeHL.png",text:"我的"}],selectedIndex:0,shown:!0},compilerVersion:"3.3.5"},{async:F,debug:!1,networkTimeout:{request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},sdkConfigs:{maps:{qqmap:{key:"TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU"}}},qqMapKey:"TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU",googleMapKey:void 0,nvue:{"flex-direction":"column"},locale:"",fallbackLocale:"",locales:Object.keys(U).reduce(((e,t)=>{const a=t.replace(/\.\/locale\/(uni-app.)?(.*).json/,"$2");return S(e[a]||(e[a]={}),U[t].default),e}),{}),router:{mode:"history",base:"/store/"}}),window.__uniLayout=window.__uniLayout||{},window.__uniConfig.topWindow.component=T(M,-1);const W={loadingComponent:v,errorComponent:E,delay:F.delay,timeout:F.timeout,suspensible:F.suspensible},K=()=>C((()=>import("./pages-index-index.e31803b6.js")),["assets/pages-index-index.e31803b6.js","assets/index.3d13a374.css","assets/vendor.c7c2a947.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),H=B(S({loader:K},W)),N=()=>C((()=>import("./pages-tabBar-dashboard-dashboard.e93214f7.js")),["assets/pages-tabBar-dashboard-dashboard.e93214f7.js","assets/dashboard.1c3b51dc.css","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),Q=B(S({loader:N},W)),$=()=>C((()=>import("./pages-tabBar-subscribe-subscribe.a199ea73.js")),["assets/pages-tabBar-subscribe-subscribe.a199ea73.js","assets/subscribe.120e009d.css","assets/vendor.c7c2a947.js","assets/materialItem.7fafa9fe.js","assets/materialItem.dcf30508.css","assets/subscribe.36abbfc8.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),J=B(S({loader:$},W)),Y=()=>C((()=>import("./pages-tabBar-shoppingCart-shoppingCart.66081c5c.js")),["assets/pages-tabBar-shoppingCart-shoppingCart.66081c5c.js","assets/shoppingCart.4989a119.css","assets/vendor.c7c2a947.js","assets/subscribe.36abbfc8.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),z=B(S({loader:Y},W)),G=()=>C((()=>import("./pages-tabBar-order-order.b37adb47.js")),["assets/pages-tabBar-order-order.b37adb47.js","assets/order.16abec51.css","assets/vendor.c7c2a947.js","assets/uni-search-bar.3e1aaa2d.js","assets/uni-search-bar.3ced5879.css","assets/uni-icons.c0827a47.js","assets/uni-icons.0b610b8a.css","assets/uni-datetime-picker.368e14a7.js","assets/uni-datetime-picker.00bd843c.css","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/enum.bdbcf073.js","assets/oButton.f77d9ccb.js","assets/oButton.bfba7cfa.css","assets/payButton.dceacd50.js"]).then((e=>w(e.default||e))),Z=B(S({loader:G},W)),X=()=>C((()=>import("./pages-tabBar-order-detail.6326b0d2.js")),["assets/pages-tabBar-order-detail.6326b0d2.js","assets/detail.d9185899.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/enum.bdbcf073.js","assets/oButton.f77d9ccb.js","assets/oButton.bfba7cfa.css","assets/payButton.dceacd50.js"]).then((e=>w(e.default||e))),ee=B(S({loader:X},W)),te=()=>C((()=>import("./pages-tabBar-home-home.31abb0d6.js")),["assets/pages-tabBar-home-home.31abb0d6.js","assets/home.b527880c.css","assets/vendor.c7c2a947.js","assets/token.8c82a9be.js","assets/home.13e9b574.js","assets/request.fff8ccac.js"]).then((e=>w(e.default||e))),ae=B(S({loader:te},W)),oe=()=>C((()=>import("./pages-order-order.fd582d10.js")),["assets/pages-order-order.fd582d10.js","assets/order.9d75041f.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/home.13e9b574.js"]).then((e=>w(e.default||e))),ne=B(S({loader:oe},W)),re=()=>C((()=>import("./pages-error-404.ab558de4.js")),["assets/pages-error-404.ab558de4.js","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),se=B(S({loader:re},W)),ie=()=>C((()=>import("./pages-notice-notice.9294ad0e.js")),["assets/pages-notice-notice.9294ad0e.js","assets/notice.9268e407.css","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),le=B(S({loader:ie},W)),pe=()=>C((()=>import("./pages-feeBill-feeBill.d14193e3.js")),["assets/pages-feeBill-feeBill.d14193e3.js","assets/feeBill.b40e1b58.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/enum.32150c18.js","assets/oBill.c2e6e703.js","assets/oBill.ca543a59.css","assets/payButton.dceacd50.js"]).then((e=>w(e.default||e))),de=B(S({loader:pe},W)),ce=()=>C((()=>import("./pages-feeBill-detail.648b9c83.js")),["assets/pages-feeBill-detail.648b9c83.js","assets/detail.57569a43.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/enum.32150c18.js","assets/oBill.c2e6e703.js","assets/oBill.ca543a59.css","assets/payButton.dceacd50.js"]).then((e=>w(e.default||e))),ge=B(S({loader:ce},W)),_e=()=>C((()=>import("./pages-tabBar-subscribe-search.77b0a65d.js")),["assets/pages-tabBar-subscribe-search.77b0a65d.js","assets/search.8ec1a656.css","assets/uni-search-bar.3e1aaa2d.js","assets/uni-search-bar.3ced5879.css","assets/vendor.c7c2a947.js","assets/uni-icons.c0827a47.js","assets/uni-icons.0b610b8a.css","assets/subscribe.36abbfc8.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/materialItem.7fafa9fe.js","assets/materialItem.dcf30508.css"]).then((e=>w(e.default||e))),ue=B(S({loader:_e},W)),me=()=>C((()=>import("./pages-address-address.6811f493.js")),["assets/pages-address-address.6811f493.js","assets/address.45260a84.css","assets/vendor.c7c2a947.js","assets/home.13e9b574.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),he=B(S({loader:me},W)),fe=()=>C((()=>import("./pages-address-detail.b5235801.js")),["assets/pages-address-detail.b5235801.js","assets/detail.d8956bcd.css","assets/vendor.c7c2a947.js","assets/home.13e9b574.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/uni-icons.c0827a47.js","assets/uni-icons.0b610b8a.css"]).then((e=>w(e.default||e))),be=B(S({loader:fe},W)),Pe=()=>C((()=>import("./pages-login-login.90377759.js")),["assets/pages-login-login.90377759.js","assets/login.d7d9e132.css","assets/vendor.c7c2a947.js","assets/token.8c82a9be.js","assets/login.903dd2c6.js","assets/request.fff8ccac.js","assets/code.f9c9346d.js","assets/code.30ccdc0c.css"]).then((e=>w(e.default||e))),Ie=B(S({loader:Pe},W)),Ae=()=>C((()=>import("./pages-login-resetPassword.e00ff934.js")),["assets/pages-login-resetPassword.e00ff934.js","assets/resetPassword.6f728c89.css","assets/vendor.c7c2a947.js","assets/code.f9c9346d.js","assets/code.30ccdc0c.css","assets/login.903dd2c6.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),Te=B(S({loader:Ae},W)),ve=()=>C((()=>import("./pages-tabBar-order-returnList.578dc52b.js")),["assets/pages-tabBar-order-returnList.578dc52b.js","assets/returnList.ee767673.css","assets/vendor.c7c2a947.js","assets/uni-search-bar.3e1aaa2d.js","assets/uni-search-bar.3ced5879.css","assets/uni-icons.c0827a47.js","assets/uni-icons.0b610b8a.css","assets/uni-datetime-picker.368e14a7.js","assets/uni-datetime-picker.00bd843c.css","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/enum.bdbcf073.js"]).then((e=>w(e.default||e))),Ee=B(S({loader:ve},W)),Be=()=>C((()=>import("./pages-pay-payback.fbfbf3c4.js")),["assets/pages-pay-payback.fbfbf3c4.js","assets/payback.2ed0a600.css","assets/vendor.c7c2a947.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),xe=B(S({loader:Be},W)),we=()=>C((()=>import("./pages-feeBill-info.955da392.js")),["assets/pages-feeBill-info.955da392.js","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),Le=B(S({loader:we},W)),De=()=>C((()=>import("./pages-feeBill-billMain.165f15e2.js")),["assets/pages-feeBill-billMain.165f15e2.js","assets/billMain.b7fee096.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js","assets/oBill.c2e6e703.js","assets/oBill.ca543a59.css","assets/payButton.dceacd50.js"]).then((e=>w(e.default||e))),Re=B(S({loader:De},W)),Oe=()=>C((()=>import("./pages-receive-list.8855fc2b.js")),["assets/pages-receive-list.8855fc2b.js","assets/list.c50ae627.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),je=B(S({loader:Oe},W)),ye=()=>C((()=>import("./pages-receive-detail.599c9a1f.js")),["assets/pages-receive-detail.599c9a1f.js","assets/detail.4af2045c.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),Ve=B(S({loader:ye},W)),ke=()=>C((()=>import("./pages-tabBar-order-refund.ce74d142.js")),["assets/pages-tabBar-order-refund.ce74d142.js","assets/refund.37497629.css","assets/vendor.c7c2a947.js","assets/order.3e03155d.js","assets/request.fff8ccac.js","assets/token.8c82a9be.js"]).then((e=>w(e.default||e))),Ce=B(S({loader:ke},W)),Fe=()=>C((()=>import("./pages-tabBar-home-setup.c37b107a.js")),["assets/pages-tabBar-home-setup.c37b107a.js","assets/setup.083dd7f4.css","assets/vendor.c7c2a947.js","assets/token.8c82a9be.js","assets/login.903dd2c6.js","assets/request.fff8ccac.js"]).then((e=>w(e.default||e))),qe=B(S({loader:Fe},W)),Me=()=>C((()=>import("./pages-tabBar-home-coupon.d557c1c0.js")),["assets/pages-tabBar-home-coupon.d557c1c0.js","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),Ue=B(S({loader:Me},W)),Se=()=>C((()=>import("./pages-API-login-login.c732e732.js")),["assets/pages-API-login-login.c732e732.js","assets/login.71f02e51.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),We=B(S({loader:Se},W)),Ke=()=>C((()=>import("./pages-API-get-user-info-get-user-info.5cc4b620.js")),["assets/pages-API-get-user-info-get-user-info.5cc4b620.js","assets/get-user-info.3a947810.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),He=B(S({loader:Ke},W)),Ne=()=>C((()=>import("./pages-API-request-payment-request-payment.8568dc6e.js")),["assets/pages-API-request-payment-request-payment.8568dc6e.js","assets/request-payment.feab9917.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Qe=B(S({loader:Ne},W)),$e=()=>C((()=>import("./pages-API-share-share.4f27fef7.js")),["assets/pages-API-share-share.4f27fef7.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Je=B(S({loader:$e},W)),Ye=()=>C((()=>import("./pages-API-set-navigation-bar-title-set-navigation-bar-title.007b9a7b.js")),["assets/pages-API-set-navigation-bar-title-set-navigation-bar-title.007b9a7b.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ze=B(S({loader:Ye},W)),Ge=()=>C((()=>import("./pages-API-show-loading-show-loading.d6bb7a31.js")),["assets/pages-API-show-loading-show-loading.d6bb7a31.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Ze=B(S({loader:Ge},W)),Xe=()=>C((()=>import("./pages-API-navigator-navigator.ef912e50.js")),["assets/pages-API-navigator-navigator.ef912e50.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),et=B(S({loader:Xe},W)),tt=()=>C((()=>import("./pages-API-navigator-new-page-new-vue-page-1.4092889a.js")),["assets/pages-API-navigator-new-page-new-vue-page-1.4092889a.js","assets/new-vue-page-1.c99e6ef7.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),at=B(S({loader:tt},W)),ot=()=>C((()=>import("./pages-API-navigator-new-page-new-vue-page-2.cd145ae3.js")),["assets/pages-API-navigator-new-page-new-vue-page-2.cd145ae3.js","assets/new-vue-page-2.c7fab2db.css","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),nt=B(S({loader:ot},W)),rt=()=>C((()=>import("./pages-API-pull-down-refresh-pull-down-refresh.49f76fdd.js")),["assets/pages-API-pull-down-refresh-pull-down-refresh.49f76fdd.js","assets/pull-down-refresh.ebd8ade5.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),st=B(S({loader:rt},W)),it=()=>C((()=>import("./pages-API-animation-animation.4ef85f44.js")),["assets/pages-API-animation-animation.4ef85f44.js","assets/animation.9f0aa111.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),lt=B(S({loader:it},W)),pt=()=>C((()=>import("./pages-API-get-node-info-get-node-info.c455089b.js")),["assets/pages-API-get-node-info-get-node-info.c455089b.js","assets/get-node-info.72bac7e2.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),dt=B(S({loader:pt},W)),ct=()=>C((()=>import("./pages-API-intersection-observer-intersection-observer.3c61c828.js")),["assets/pages-API-intersection-observer-intersection-observer.3c61c828.js","assets/intersection-observer.fce3790d.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),gt=B(S({loader:ct},W)),_t=()=>C((()=>import("./pages-API-canvas-canvas.06c891dc.js")),["assets/pages-API-canvas-canvas.06c891dc.js","assets/canvas.7af879cb.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ut=B(S({loader:_t},W)),mt=()=>C((()=>import("./pages-API-action-sheet-action-sheet.b78bc5ec.js")),["assets/pages-API-action-sheet-action-sheet.b78bc5ec.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ht=B(S({loader:mt},W)),ft=()=>C((()=>import("./pages-API-modal-modal.ab3f70e4.js")),["assets/pages-API-modal-modal.ab3f70e4.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),bt=B(S({loader:ft},W)),Pt=()=>C((()=>import("./pages-API-toast-toast.f411582e.js")),["assets/pages-API-toast-toast.f411582e.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),It=B(S({loader:Pt},W)),At=()=>C((()=>import("./pages-API-get-network-type-get-network-type.ee3c9253.js")),["assets/pages-API-get-network-type-get-network-type.ee3c9253.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Tt=B(S({loader:At},W)),vt=()=>C((()=>import("./pages-API-get-system-info-get-system-info.719ed9c1.js")),["assets/pages-API-get-system-info-get-system-info.719ed9c1.js","assets/get-system-info.8257797e.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Et=B(S({loader:vt},W)),Bt=()=>C((()=>import("./pages-API-add-phone-contact-add-phone-contact.8138aafc.js")),["assets/pages-API-add-phone-contact-add-phone-contact.8138aafc.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),xt=B(S({loader:Bt},W)),wt=()=>C((()=>import("./pages-API-on-accelerometer-change-on-accelerometer-change.b450fa3b.js")),["assets/pages-API-on-accelerometer-change-on-accelerometer-change.b450fa3b.js","assets/on-accelerometer-change.40434a5a.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Lt=B(S({loader:wt},W)),Dt=()=>C((()=>import("./pages-API-on-compass-change-on-compass-change.c21f8db1.js")),["assets/pages-API-on-compass-change-on-compass-change.c21f8db1.js","assets/on-compass-change.5c05cd21.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Rt=B(S({loader:Dt},W)),Ot=()=>C((()=>import("./pages-API-make-phone-call-make-phone-call.998a1994.js")),["assets/pages-API-make-phone-call-make-phone-call.998a1994.js","assets/make-phone-call.df1a2216.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),jt=B(S({loader:Ot},W)),yt=()=>C((()=>import("./pages-API-scan-code-scan-code.628b8e13.js")),["assets/pages-API-scan-code-scan-code.628b8e13.js","assets/scan-code.a59af87d.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js","assets/permission.a5c89be6.js"]).then((e=>w(e.default||e))),Vt=B(S({loader:yt},W)),kt=()=>C((()=>import("./pages-API-clipboard-clipboard.474cb138.js")),["assets/pages-API-clipboard-clipboard.474cb138.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Ct=B(S({loader:kt},W)),Ft=()=>C((()=>import("./pages-API-request-request.9dce14f6.js")),["assets/pages-API-request-request.9dce14f6.js","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),qt=B(S({loader:Ft},W)),Mt=()=>C((()=>import("./pages-API-upload-file-upload-file.84fe3066.js")),["assets/pages-API-upload-file-upload-file.84fe3066.js","assets/upload-file.9899932c.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Ut=B(S({loader:Mt},W)),St=()=>C((()=>import("./pages-API-download-file-download-file.85f26d35.js")),["assets/pages-API-download-file-download-file.85f26d35.js","assets/download-file.167b52cf.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Wt=B(S({loader:St},W)),Kt=()=>C((()=>import("./pages-API-image-image.a6a365c5.js")),["assets/pages-API-image-image.a6a365c5.js","assets/image.d483ab90.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js","assets/permission.a5c89be6.js"]).then((e=>w(e.default||e))),Ht=B(S({loader:Kt},W)),Nt=()=>C((()=>import("./pages-API-voice-voice.35b16c96.js")),["assets/pages-API-voice-voice.35b16c96.js","assets/voice.491e0b8b.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js","assets/util.b5eb4444.js","assets/stop.6096038e.js"]).then((e=>w(e.default||e))),Qt=B(S({loader:Nt},W)),$t=()=>C((()=>import("./pages-API-inner-audio-inner-audio.17597fd9.js")),["assets/pages-API-inner-audio-inner-audio.17597fd9.js","assets/inner-audio.4a04d067.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Jt=B(S({loader:$t},W)),Yt=()=>C((()=>import("./pages-API-background-audio-background-audio.226467f2.js")),["assets/pages-API-background-audio-background-audio.226467f2.js","assets/background-audio.a5068a8d.css","assets/page-head.65dafd7b.js","assets/vendor.c7c2a947.js","assets/util.b5eb4444.js","assets/stop.6096038e.js"]).then((e=>w(e.default||e))),zt=B(S({loader:Yt},W)),Gt=()=>C((()=>import("./pages-API-video-video.dc7c6b64.js")),["assets/pages-API-video-video.dc7c6b64.js","assets/video.17208b26.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),Zt=B(S({loader:Gt},W)),Xt=()=>C((()=>import("./pages-API-file-file.83128d9d.js")),["assets/pages-API-file-file.83128d9d.js","assets/file.7485aa4f.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ea=B(S({loader:Xt},W)),ta=()=>C((()=>import("./pages-API-map-map.b7304968.js")),["assets/pages-API-map-map.b7304968.js","assets/map.21d06111.css","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),aa=B(S({loader:ta},W)),oa=()=>C((()=>import("./pages-API-get-location-get-location.0e93dad1.js")),["assets/pages-API-get-location-get-location.0e93dad1.js","assets/get-location.78a2e53e.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js","assets/util.b5eb4444.js"]).then((e=>w(e.default||e))),na=B(S({loader:oa},W)),ra=()=>C((()=>import("./pages-API-open-location-open-location.ff0af8fc.js")),["assets/pages-API-open-location-open-location.ff0af8fc.js","assets/open-location.3d5856f0.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),sa=B(S({loader:ra},W)),ia=()=>C((()=>import("./pages-API-choose-location-choose-location.e4045116.js")),["assets/pages-API-choose-location-choose-location.e4045116.js","assets/choose-location.3b7c9a48.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js","assets/util.b5eb4444.js"]).then((e=>w(e.default||e))),la=B(S({loader:ia},W)),pa=()=>C((()=>import("./pages-API-storage-storage.c576e0e2.js")),["assets/pages-API-storage-storage.c576e0e2.js","assets/storage.1b4f36af.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),da=B(S({loader:pa},W)),ca=()=>C((()=>import("./pages-API-sqlite-sqlite.d801efcc.js")),["assets/pages-API-sqlite-sqlite.d801efcc.js","assets/sqlite.644ae308.css","assets/page-head.65dafd7b.js","assets/vendor.c7c2a947.js"]).then((e=>w(e.default||e))),ga=B(S({loader:ca},W)),_a=()=>C((()=>import("./pages-API-vibrate-vibrate.59d0fa3f.js")),["assets/pages-API-vibrate-vibrate.59d0fa3f.js","assets/vibrate.c91a04d6.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ua=B(S({loader:_a},W)),ma=()=>C((()=>import("./pages-API-websocket-socketTask-websocket-socketTask.4d502d95.js")),["assets/pages-API-websocket-socketTask-websocket-socketTask.4d502d95.js","assets/websocket-socketTask.ec0052e5.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ha=B(S({loader:ma},W)),fa=()=>C((()=>import("./pages-API-websocket-global-websocket-global.3514a1c0.js")),["assets/pages-API-websocket-global-websocket-global.3514a1c0.js","assets/websocket-global.08b1e32e.css","assets/vendor.c7c2a947.js","assets/page-head.65dafd7b.js"]).then((e=>w(e.default||e))),ba=B(S({loader:fa},W));function Pa(e){return g(),_(x,null,{page:u((()=>[m(e,{ref:"page"},null,512)])),_:1})}window.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{setup:()=>()=>Pa(H)},loader:K,meta:{isQuit:!0,isEntry:!0,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/dashboard/dashboard",component:{setup:()=>()=>Pa(Q)},loader:N,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:0,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/subscribe/subscribe",component:{setup:()=>()=>Pa(J)},loader:$,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:1,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/shoppingCart/shoppingCart",component:{setup:()=>()=>Pa(z)},loader:Y,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:2,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/order/order",component:{setup:()=>()=>Pa(Z)},loader:G,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:3,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/order/detail",component:{setup:()=>()=>Pa(ee)},loader:X,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"订单详情",style:""}}},{path:"/pages/tabBar/home/home",component:{setup:()=>()=>Pa(ae)},loader:te,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:4,enablePullDownRefresh:!1,navigationBar:{titleText:"我的",style:"custom"}}},{path:"/pages/order/order",component:{setup:()=>()=>Pa(ne)},loader:oe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"确认订单",style:""}}},{path:"/pages/error/404",component:{setup:()=>()=>Pa(se)},loader:re,meta:{navigationBar:{titleText:"Not Found"}}},{path:"/pages/notice/notice",component:{setup:()=>()=>Pa(le)},loader:ie,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"消息",style:""}}},{path:"/pages/feeBill/feeBill",component:{setup:()=>()=>Pa(de)},loader:pe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用单"}}},{path:"/pages/feeBill/detail",component:{setup:()=>()=>Pa(ge)},loader:ce,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用单详情"}}},{path:"/pages/tabBar/subscribe/search",component:{setup:()=>()=>Pa(ue)},loader:_e,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"物料查询"}}},{path:"/pages/address/address",component:{setup:()=>()=>Pa(he)},loader:me,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"收货地址"}}},{path:"/pages/address/detail",component:{setup:()=>()=>Pa(be)},loader:fe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"编辑收货地址"}}},{path:"/pages/login/login",component:{setup:()=>()=>Pa(Ie)},loader:Pe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"登录",style:"custom"}}},{path:"/pages/login/resetPassword",component:{setup:()=>()=>Pa(Te)},loader:Ae,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"重置密码"}}},{path:"/pages/tabBar/order/returnList",component:{setup:()=>()=>Pa(Ee)},loader:ve,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"退货"}}},{path:"/pages/pay/payback",component:{setup:()=>()=>Pa(xe)},loader:Be,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"支付"}}},{path:"/pages/feeBill/info",component:{setup:()=>()=>Pa(Le)},loader:we,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:""}}},{path:"/pages/feeBill/billMain",component:{setup:()=>()=>Pa(Re)},loader:De,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用详情"}}},{path:"/pages/receive/list",component:{setup:()=>()=>Pa(je)},loader:Oe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"发货单列表"}}},{path:"/pages/receive/detail",component:{setup:()=>()=>Pa(Ve)},loader:ye,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"发货单详情"}}},{path:"/pages/tabBar/order/refund",component:{setup:()=>()=>Pa(Ce)},loader:ke,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"申请退货"}}},{path:"/pages/tabBar/home/setup",component:{setup:()=>()=>Pa(qe)},loader:Fe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"设置"}}},{path:"/pages/tabBar/home/coupon",component:{setup:()=>()=>Pa(Ue)},loader:Me,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"优惠券"}}},{path:"/pages/API/login/login",component:{setup:()=>()=>Pa(We)},loader:Se,meta:{navigationBar:{titleText:"授权登录"}}},{path:"/pages/API/get-user-info/get-user-info",component:{setup:()=>()=>Pa(He)},loader:Ke,meta:{navigationBar:{titleText:"获取用户信息"}}},{path:"/pages/API/request-payment/request-payment",component:{setup:()=>()=>Pa(Qe)},loader:Ne,meta:{navigationBar:{titleText:"发起支付"}}},{path:"/pages/API/share/share",component:{setup:()=>()=>Pa(Je)},loader:$e,meta:{navigationBar:{titleText:"分享"}}},{path:"/pages/API/set-navigation-bar-title/set-navigation-bar-title",component:{setup:()=>()=>Pa(ze)},loader:Ye,meta:{navigationBar:{titleText:"设置界面标题"}}},{path:"/pages/API/show-loading/show-loading",component:{setup:()=>()=>Pa(Ze)},loader:Ge,meta:{navigationBar:{titleText:"加载提示框"}}},{path:"/pages/API/navigator/navigator",component:{setup:()=>()=>Pa(et)},loader:Xe,meta:{navigationBar:{titleText:"页面跳转"}}},{path:"/pages/API/navigator/new-page/new-vue-page-1",component:{setup:()=>()=>Pa(at)},loader:tt,meta:{navigationBar:{titleText:"新VUE页面1"}}},{path:"/pages/API/navigator/new-page/new-vue-page-2",component:{setup:()=>()=>Pa(nt)},loader:ot,meta:{navigationBar:{titleText:"新VUE页面2"}}},{path:"/pages/API/pull-down-refresh/pull-down-refresh",component:{setup:()=>()=>Pa(st)},loader:rt,meta:{enablePullDownRefresh:!0,navigationBar:{titleText:"下拉刷新"}}},{path:"/pages/API/animation/animation",component:{setup:()=>()=>Pa(lt)},loader:it,meta:{navigationBar:{titleText:"创建动画"}}},{path:"/pages/API/get-node-info/get-node-info",component:{setup:()=>()=>Pa(dt)},loader:pt,meta:{navigationBar:{titleText:"节点信息"}}},{path:"/pages/API/intersection-observer/intersection-observer",component:{setup:()=>()=>Pa(gt)},loader:ct,meta:{navigationBar:{titleText:"节点布局相交状态"}}},{path:"/pages/API/canvas/canvas",component:{setup:()=>()=>Pa(ut)},loader:_t,meta:{navigationBar:{titleText:"创建绘画"}}},{path:"/pages/API/action-sheet/action-sheet",component:{setup:()=>()=>Pa(ht)},loader:mt,meta:{navigationBar:{titleText:"操作菜单"}}},{path:"/pages/API/modal/modal",component:{setup:()=>()=>Pa(bt)},loader:ft,meta:{navigationBar:{titleText:"模态弹窗"}}},{path:"/pages/API/toast/toast",component:{setup:()=>()=>Pa(It)},loader:Pt,meta:{navigationBar:{titleText:"消息提示框"}}},{path:"/pages/API/get-network-type/get-network-type",component:{setup:()=>()=>Pa(Tt)},loader:At,meta:{navigationBar:{titleText:"获取设备网络状态"}}},{path:"/pages/API/get-system-info/get-system-info",component:{setup:()=>()=>Pa(Et)},loader:vt,meta:{navigationBar:{titleText:"获取设备系统信息"}}},{path:"/pages/API/add-phone-contact/add-phone-contact",component:{setup:()=>()=>Pa(xt)},loader:Bt,meta:{navigationBar:{titleText:"添加手机联系人"}}},{path:"/pages/API/on-accelerometer-change/on-accelerometer-change",component:{setup:()=>()=>Pa(Lt)},loader:wt,meta:{navigationBar:{titleText:"监听加速度计数据"}}},{path:"/pages/API/on-compass-change/on-compass-change",component:{setup:()=>()=>Pa(Rt)},loader:Dt,meta:{navigationBar:{titleText:"监听罗盘数据"}}},{path:"/pages/API/make-phone-call/make-phone-call",component:{setup:()=>()=>Pa(jt)},loader:Ot,meta:{navigationBar:{titleText:"打电话"}}},{path:"/pages/API/scan-code/scan-code",component:{setup:()=>()=>Pa(Vt)},loader:yt,meta:{navigationBar:{titleText:"扫码"}}},{path:"/pages/API/clipboard/clipboard",component:{setup:()=>()=>Pa(Ct)},loader:kt,meta:{navigationBar:{titleText:"剪贴板"}}},{path:"/pages/API/request/request",component:{setup:()=>()=>Pa(qt)},loader:Ft,meta:{navigationBar:{titleText:"网络请求"}}},{path:"/pages/API/upload-file/upload-file",component:{setup:()=>()=>Pa(Ut)},loader:Mt,meta:{navigationBar:{titleText:"上传文件"}}},{path:"/pages/API/download-file/download-file",component:{setup:()=>()=>Pa(Wt)},loader:St,meta:{navigationBar:{titleText:"下载文件"}}},{path:"/pages/API/image/image",component:{setup:()=>()=>Pa(Ht)},loader:Kt,meta:{navigationBar:{titleText:"图片"}}},{path:"/pages/API/voice/voice",component:{setup:()=>()=>Pa(Qt)},loader:Nt,meta:{navigationBar:{titleText:"录音"}}},{path:"/pages/API/inner-audio/inner-audio",component:{setup:()=>()=>Pa(Jt)},loader:$t,meta:{navigationBar:{titleText:"音频"}}},{path:"/pages/API/background-audio/background-audio",component:{setup:()=>()=>Pa(zt)},loader:Yt,meta:{navigationBar:{titleText:"背景音频"}}},{path:"/pages/API/video/video",component:{setup:()=>()=>Pa(Zt)},loader:Gt,meta:{navigationBar:{titleText:"视频"}}},{path:"/pages/API/file/file",component:{setup:()=>()=>Pa(ea)},loader:Xt,meta:{navigationBar:{titleText:"文件"}}},{path:"/pages/API/map/map",component:{setup:()=>()=>Pa(aa)},loader:ta,meta:{navigationBar:{titleText:"map"},isNVue:!0}},{path:"/pages/API/get-location/get-location",component:{setup:()=>()=>Pa(na)},loader:oa,meta:{navigationBar:{titleText:"获取位置"}}},{path:"/pages/API/open-location/open-location",component:{setup:()=>()=>Pa(sa)},loader:ra,meta:{navigationBar:{titleText:"查看位置"}}},{path:"/pages/API/choose-location/choose-location",component:{setup:()=>()=>Pa(la)},loader:ia,meta:{navigationBar:{titleText:"使用地图选择位置"}}},{path:"/pages/API/storage/storage",component:{setup:()=>()=>Pa(da)},loader:pa,meta:{navigationBar:{titleText:"数据存储"}}},{path:"/pages/API/sqlite/sqlite",component:{setup:()=>()=>Pa(ga)},loader:ca,meta:{navigationBar:{titleText:"SQLite"}}},{path:"/pages/API/vibrate/vibrate",component:{setup:()=>()=>Pa(ua)},loader:_a,meta:{navigationBar:{titleText:"震动"}}},{path:"/pages/API/websocket-socketTask/websocket-socketTask",component:{setup:()=>()=>Pa(ha)},loader:ma,meta:{navigationBar:{titleText:"websocket-socketTask"}}},{path:"/pages/API/websocket-global/websocket-global",component:{setup:()=>()=>Pa(ba)},loader:fa,meta:{navigationBar:{titleText:"websocket-global"}}}].map((e=>(e.meta.route=(e.alias||e.path).substr(1),e)));const Ia={onLaunch:function(){console.log("%c hello uniapp %c v3.3.0 ","background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#005bac ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;"),console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},globalData:{test:""},methods:((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&n(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&n(e,s,r[s]);return e})({},L(["setUniverifyErrorMsg","setUniverifyLogin"]))};D(Ia);const Aa=R({state:{hasLogin:!1,isUniverifyLogin:!1,loginProvider:"",openid:null,testvuex:!1,colorIndex:0,colorList:["#FF0000","#00FF00","#0000FF"],noMatchLeftWindow:!0,active:"componentPage",leftWinActive:"/pages/component/view/view",activeOpen:"",menu:[],univerifyErrorMsg:""},mutations:{login(e,t){e.hasLogin=!0,e.loginProvider=t},logout(e){e.hasLogin=!1,e.openid=null},setOpenid(e,t){e.openid=t},setTestTrue(e){e.testvuex=!0},setTestFalse(e){e.testvuex=!1},setColorIndex(e,t){e.colorIndex=t},setMatchLeftWindow(e,t){e.noMatchLeftWindow=!t},setActive(e,t){e.active=t},setLeftWinActive(e,t){e.leftWinActive=t},setActiveOpen(e,t){e.activeOpen=t},setMenu(e,t){e.menu=t},setUniverifyLogin(e,t){"boolean"!=typeof t&&(t=!!t),e.isUniverifyLogin=t},setUniverifyErrorMsg(e,t=""){e.univerifyErrorMsg=t}},getters:{currentColor:e=>e.colorList[e.colorIndex]},actions:{getUserOpenId:async function({commit:e,state:t}){return await new Promise(((a,o)=>{t.openid?a(t.openid):O({success:t=>{e("login"),setTimeout((function(){const t="123456789";console.log("uni.request mock openid[123456789]"),e("setOpenid",t),a(t)}),1e3)},fail:e=>{console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),o(e)}})}))},getPhoneNumber:function({commit:e},t){return new Promise(((e,a)=>{j({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login",method:"POST",data:t,success:t=>{const o=t.data;o.success?e(o.phoneNumber):a(t)},fail:e=>{a(res)}})}))}}});(function(){const e=V(Ia);return e.use(Aa),e.config.globalProperties.$adpid="1111111111",e.config.globalProperties.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},{app:e}})().app.use(y).mount("#app");export{q as _};
