var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;import{_ as r,g as s,r as i,s as l,a as p,b as d,c,o as g,d as _,w as u,e as m,f as h,i as f,h as b,j as P,k as I,u as A,l as T,m as E,n as v,p as B,q as x,t as w,v as L,x as D,y as R,z as O,A as j,B as y,C as V}from"./vendor.a21c6627.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k={},C=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/store/${e}`)in k)return;k[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},F={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:2e4,suspensible:!0};var q="/store/assets/logo.c8da0c35.jpg";var M=r({data:()=>({selected:{component:0,API:1,extUI:2,template:3},current:0,indexPage:[{tabBar:"/pages/tabBar/dashboard/dashboard",index:"/pages/tabBar/dashboard/dashboard"},{tabBar:"/pages/tabBar/subscribe/subscribe",index:"/pages/tabBar/subscribe/subscribe"},{tabBar:"/pages/tabBar/shoppingCart/shoppingCart",index:"/pages/tabBar/shoppingCart/shoppingCart"},{tabBar:"/pages/tabBar/order/order",index:"/pages/tabBar/order/order"},{tabBar:"/pages/tabBar/home/home",index:"/pages/tabBar/home/home"}]}),watch:{$route:{immediate:!0,handler(e){if(s().screenWidth>=768){let t,a=e.path;"/"===a?(t="component",a="/pages/tabBar/component/component"):t=a.split("/")[2],this.current=this.selected[t];for(const e of this.indexPage)a===e.tabBar&&i({url:e.index})}}}},mounted(){},methods:{toSecondMenu(e){const t="/"+e.pagePath;for(const a of this.indexPage)t===a.tabBar&&l({url:a.index})}}},[["render",function(e,t,a,o,n,r){const s=f,i=b,l=P,A=I,T=p(c("custom-tab-bar"),d);return g(),_(A,{class:"top-window-header"},{default:u((()=>[m(A,{class:"left-header logo"},{default:u((()=>[m(l,{class:"logo","open-type":"reLaunch",url:"/pages/component/view/view"},{default:u((()=>[m(s,{src:q,mode:"heightFix",style:{width:"30px"}}),m(i,null,{default:u((()=>[h("茶茶订货")])),_:1})])),_:1})])),_:1}),m(T,{class:"tab-bar-flex",direction:"horizontal","show-icon":!1,selected:n.current,onOnTabItemTap:r.toSecondMenu},null,8,["selected","onOnTabItemTap"])])),_:1})}],["__scopeId","data-v-52cb555b"]]);window.uni={},window.wx={},window.rpx2px=A;const U={},S=Object.assign;window.____CA21461____=!0,delete window.____CA21461____,window.__uniConfig=S({topWindow:{path:"windows/top-window.vue",style:{height:"60px"}},globalStyle:{pageOrientation:"portrait",backgroundColor:"#F8F8F8",backgroundColorTop:"#F4F5F6",backgroundColorBottom:"#F4F5F6",maxWidth:1190,navigationBar:{backgroundColor:"#F1F1F1",titleText:"Hello uniapp",titleColor:"#000000"}},tabBar:{position:"bottom",color:"#999999",selectedColor:"#005bac",borderStyle:"black",blurEffect:"none",fontSize:"10px",iconWidth:"24px",spacing:"3px",height:"50px",backgroundColor:"#fff",list:[{pagePath:"pages/tabBar/dashboard/dashboard",iconPath:"/static/icon/dashboard.png",selectedIconPath:"/static/icon/dashboardHL.png",text:"首页"},{pagePath:"pages/tabBar/subscribe/subscribe",iconPath:"/static/icon/subscribe.png",selectedIconPath:"/static/icon/subscribeHL.png",text:"订货"},{pagePath:"pages/tabBar/shoppingCart/shoppingCart",iconPath:"/static/icon/shoppingCart.png",selectedIconPath:"/static/icon/shoppingCartHL.png",text:"购物车"},{pagePath:"pages/tabBar/order/order",iconPath:"/static/icon/order.png",selectedIconPath:"/static/icon/orderHL.png",text:"订单"},{pagePath:"pages/tabBar/home/home",iconPath:"/static/icon/home.png",selectedIconPath:"/static/icon/homeHL.png",text:"我的"}],selectedIndex:0,shown:!0},compilerVersion:"3.3.5"},{async:F,debug:!1,networkTimeout:{request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},sdkConfigs:{maps:{qqmap:{key:"TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU"}}},qqMapKey:"TKUBZ-D24AF-GJ4JY-JDVM2-IBYKK-KEBCU",googleMapKey:void 0,nvue:{"flex-direction":"column"},locale:"",fallbackLocale:"",locales:Object.keys(U).reduce(((e,t)=>{const a=t.replace(/\.\/locale\/(uni-app.)?(.*).json/,"$2");return S(e[a]||(e[a]={}),U[t].default),e}),{}),router:{mode:"history",base:"/store/"}}),window.__uniLayout=window.__uniLayout||{},window.__uniConfig.topWindow.component=T(M,-1);const W={loadingComponent:E,errorComponent:v,delay:F.delay,timeout:F.timeout,suspensible:F.suspensible},K=()=>C((()=>import("./pages-index-index.927fb716.js")),["assets/pages-index-index.927fb716.js","assets/index.3d13a374.css","assets/vendor.a21c6627.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),H=B(S({loader:K},W)),N=()=>C((()=>import("./pages-tabBar-dashboard-dashboard.b1ef2469.js")),["assets/pages-tabBar-dashboard-dashboard.b1ef2469.js","assets/dashboard.660edf02.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Q=B(S({loader:N},W)),$=()=>C((()=>import("./pages-tabBar-subscribe-subscribe.6bf1f392.js")),["assets/pages-tabBar-subscribe-subscribe.6bf1f392.js","assets/subscribe.120e009d.css","assets/vendor.a21c6627.js","assets/materialItem.07b22084.js","assets/materialItem.dcf30508.css","assets/subscribe.08568398.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),J=B(S({loader:$},W)),Y=()=>C((()=>import("./pages-tabBar-shoppingCart-shoppingCart.8771d718.js")),["assets/pages-tabBar-shoppingCart-shoppingCart.8771d718.js","assets/shoppingCart.4989a119.css","assets/vendor.a21c6627.js","assets/subscribe.08568398.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),z=B(S({loader:Y},W)),G=()=>C((()=>import("./pages-tabBar-order-order.24a2cb2d.js")),["assets/pages-tabBar-order-order.24a2cb2d.js","assets/order.16abec51.css","assets/vendor.a21c6627.js","assets/uni-search-bar.24f13762.js","assets/uni-search-bar.3ced5879.css","assets/uni-icons.a51ab7af.js","assets/uni-icons.0b610b8a.css","assets/uni-datetime-picker.fd10993b.js","assets/uni-datetime-picker.00bd843c.css","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/enum.bdbcf073.js","assets/oButton.96d0d0c5.js","assets/oButton.bfba7cfa.css","assets/payButton.f50aa180.js"]).then((e=>w(e.default||e))),Z=B(S({loader:G},W)),X=()=>C((()=>import("./pages-tabBar-order-detail.b256f34c.js")),["assets/pages-tabBar-order-detail.b256f34c.js","assets/detail.d9185899.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/enum.bdbcf073.js","assets/oButton.96d0d0c5.js","assets/oButton.bfba7cfa.css","assets/payButton.f50aa180.js"]).then((e=>w(e.default||e))),ee=B(S({loader:X},W)),te=()=>C((()=>import("./pages-tabBar-home-home.3a26ef96.js")),["assets/pages-tabBar-home-home.3a26ef96.js","assets/home.d0166e70.css","assets/vendor.a21c6627.js","assets/token.ba774510.js","assets/home.1fc1901e.js","assets/request.bd165be5.js"]).then((e=>w(e.default||e))),ae=B(S({loader:te},W)),oe=()=>C((()=>import("./pages-order-order.35d311a4.js")),["assets/pages-order-order.35d311a4.js","assets/order.9d75041f.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/home.1fc1901e.js"]).then((e=>w(e.default||e))),ne=B(S({loader:oe},W)),re=()=>C((()=>import("./pages-error-404.98d567a1.js")),["assets/pages-error-404.98d567a1.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),se=B(S({loader:re},W)),ie=()=>C((()=>import("./pages-notice-notice.d0de8699.js")),["assets/pages-notice-notice.d0de8699.js","assets/notice.9268e407.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),le=B(S({loader:ie},W)),pe=()=>C((()=>import("./pages-feeBill-feeBill.f472724d.js")),["assets/pages-feeBill-feeBill.f472724d.js","assets/feeBill.b40e1b58.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/enum.32150c18.js","assets/oBill.fe39127c.js","assets/oBill.ca543a59.css","assets/payButton.f50aa180.js"]).then((e=>w(e.default||e))),de=B(S({loader:pe},W)),ce=()=>C((()=>import("./pages-feeBill-detail.07c2a000.js")),["assets/pages-feeBill-detail.07c2a000.js","assets/detail.57569a43.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/enum.32150c18.js","assets/oBill.fe39127c.js","assets/oBill.ca543a59.css","assets/payButton.f50aa180.js"]).then((e=>w(e.default||e))),ge=B(S({loader:ce},W)),_e=()=>C((()=>import("./pages-tabBar-subscribe-search.078b78c0.js")),["assets/pages-tabBar-subscribe-search.078b78c0.js","assets/search.8ec1a656.css","assets/uni-search-bar.24f13762.js","assets/uni-search-bar.3ced5879.css","assets/vendor.a21c6627.js","assets/uni-icons.a51ab7af.js","assets/uni-icons.0b610b8a.css","assets/subscribe.08568398.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/materialItem.07b22084.js","assets/materialItem.dcf30508.css"]).then((e=>w(e.default||e))),ue=B(S({loader:_e},W)),me=()=>C((()=>import("./pages-address-address.6bd89084.js")),["assets/pages-address-address.6bd89084.js","assets/address.45260a84.css","assets/vendor.a21c6627.js","assets/home.1fc1901e.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),he=B(S({loader:me},W)),fe=()=>C((()=>import("./pages-address-detail.5f658467.js")),["assets/pages-address-detail.5f658467.js","assets/detail.d8956bcd.css","assets/vendor.a21c6627.js","assets/home.1fc1901e.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/uni-icons.a51ab7af.js","assets/uni-icons.0b610b8a.css","assets/uni-cloud.es.7fbe2c7f.js"]).then((e=>w(e.default||e))),be=B(S({loader:fe},W)),Pe=()=>C((()=>import("./pages-login-login.574904e9.js")),["assets/pages-login-login.574904e9.js","assets/login.32e70417.css","assets/vendor.a21c6627.js","assets/token.ba774510.js","assets/login.7c4bc3ea.js","assets/request.bd165be5.js","assets/code.04c4c53d.js","assets/code.30ccdc0c.css"]).then((e=>w(e.default||e))),Ie=B(S({loader:Pe},W)),Ae=()=>C((()=>import("./pages-login-resetPassword.853d23d4.js")),["assets/pages-login-resetPassword.853d23d4.js","assets/resetPassword.6f728c89.css","assets/vendor.a21c6627.js","assets/code.04c4c53d.js","assets/code.30ccdc0c.css","assets/login.7c4bc3ea.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),Te=B(S({loader:Ae},W)),Ee=()=>C((()=>import("./pages-tabBar-order-returnList.a7cfe91c.js")),["assets/pages-tabBar-order-returnList.a7cfe91c.js","assets/returnList.ee767673.css","assets/vendor.a21c6627.js","assets/uni-search-bar.24f13762.js","assets/uni-search-bar.3ced5879.css","assets/uni-icons.a51ab7af.js","assets/uni-icons.0b610b8a.css","assets/uni-datetime-picker.fd10993b.js","assets/uni-datetime-picker.00bd843c.css","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/enum.bdbcf073.js"]).then((e=>w(e.default||e))),ve=B(S({loader:Ee},W)),Be=()=>C((()=>import("./pages-pay-payback.515c4f7e.js")),["assets/pages-pay-payback.515c4f7e.js","assets/payback.2ed0a600.css","assets/vendor.a21c6627.js","assets/utils.1ff9889d.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),xe=B(S({loader:Be},W)),we=()=>C((()=>import("./pages-feeBill-info.809abbce.js")),["assets/pages-feeBill-info.809abbce.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Le=B(S({loader:we},W)),De=()=>C((()=>import("./pages-feeBill-billMain.5bfcdfd2.js")),["assets/pages-feeBill-billMain.5bfcdfd2.js","assets/billMain.b7fee096.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/oBill.fe39127c.js","assets/oBill.ca543a59.css","assets/payButton.f50aa180.js"]).then((e=>w(e.default||e))),Re=B(S({loader:De},W)),Oe=()=>C((()=>import("./pages-receive-list.84686473.js")),["assets/pages-receive-list.84686473.js","assets/list.c50ae627.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),je=B(S({loader:Oe},W)),ye=()=>C((()=>import("./pages-receive-detail.4afb5cab.js")),["assets/pages-receive-detail.4afb5cab.js","assets/detail.4af2045c.css","assets/vendor.a21c6627.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),Ve=B(S({loader:ye},W)),ke=()=>C((()=>import("./pages-tabBar-order-refund.e36d60c8.js")),["assets/pages-tabBar-order-refund.e36d60c8.js","assets/refund.38fb29c0.css","assets/vendor.a21c6627.js","assets/uni-cloud.es.7fbe2c7f.js","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/utils.1ff9889d.js"]).then((e=>w(e.default||e))),Ce=B(S({loader:ke},W)),Fe=()=>C((()=>import("./pages-tabBar-home-setup.787f294c.js")),["assets/pages-tabBar-home-setup.787f294c.js","assets/setup.48218ac4.css","assets/vendor.a21c6627.js","assets/token.ba774510.js","assets/home.1fc1901e.js","assets/request.bd165be5.js","assets/login.7c4bc3ea.js"]).then((e=>w(e.default||e))),qe=B(S({loader:Fe},W)),Me=()=>C((()=>import("./pages-tabBar-home-coupon.13db92dd.js")),["assets/pages-tabBar-home-coupon.13db92dd.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ue=B(S({loader:Me},W)),Se=()=>C((()=>import("./pages-tabBar-home-store.adc8978f.js")),["assets/pages-tabBar-home-store.adc8978f.js","assets/store.1078e92f.css","assets/vendor.a21c6627.js","assets/home.1fc1901e.js","assets/request.bd165be5.js","assets/token.ba774510.js"]).then((e=>w(e.default||e))),We=B(S({loader:Se},W)),Ke=()=>C((()=>import("./pages-transaction-transaction.ed1e8137.js")),["assets/pages-transaction-transaction.ed1e8137.js","assets/transaction.243a2a0d.css","assets/vendor.a21c6627.js","assets/uni-datetime-picker.fd10993b.js","assets/uni-datetime-picker.00bd843c.css","assets/uni-icons.a51ab7af.js","assets/uni-icons.0b610b8a.css","assets/order.84a9170d.js","assets/request.bd165be5.js","assets/token.ba774510.js","assets/utils.1ff9889d.js"]).then((e=>w(e.default||e))),He=B(S({loader:Ke},W)),Ne=()=>C((()=>import("./pages-API-login-login.b5417045.js")),["assets/pages-API-login-login.b5417045.js","assets/login.71f02e51.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Qe=B(S({loader:Ne},W)),$e=()=>C((()=>import("./pages-API-get-user-info-get-user-info.95d15cba.js")),["assets/pages-API-get-user-info-get-user-info.95d15cba.js","assets/get-user-info.3a947810.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Je=B(S({loader:$e},W)),Ye=()=>C((()=>import("./pages-API-request-payment-request-payment.3dd772a1.js")),["assets/pages-API-request-payment-request-payment.3dd772a1.js","assets/request-payment.feab9917.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ze=B(S({loader:Ye},W)),Ge=()=>C((()=>import("./pages-API-share-share.96920be9.js")),["assets/pages-API-share-share.96920be9.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ze=B(S({loader:Ge},W)),Xe=()=>C((()=>import("./pages-API-set-navigation-bar-title-set-navigation-bar-title.44f3b30b.js")),["assets/pages-API-set-navigation-bar-title-set-navigation-bar-title.44f3b30b.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),et=B(S({loader:Xe},W)),tt=()=>C((()=>import("./pages-API-show-loading-show-loading.449ecaa5.js")),["assets/pages-API-show-loading-show-loading.449ecaa5.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),at=B(S({loader:tt},W)),ot=()=>C((()=>import("./pages-API-navigator-navigator.2555b41a.js")),["assets/pages-API-navigator-navigator.2555b41a.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),nt=B(S({loader:ot},W)),rt=()=>C((()=>import("./pages-API-navigator-new-page-new-vue-page-1.9ca83d2b.js")),["assets/pages-API-navigator-new-page-new-vue-page-1.9ca83d2b.js","assets/new-vue-page-1.c99e6ef7.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),st=B(S({loader:rt},W)),it=()=>C((()=>import("./pages-API-navigator-new-page-new-vue-page-2.2e191ae6.js")),["assets/pages-API-navigator-new-page-new-vue-page-2.2e191ae6.js","assets/new-vue-page-2.c7fab2db.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),lt=B(S({loader:it},W)),pt=()=>C((()=>import("./pages-API-pull-down-refresh-pull-down-refresh.bd3aae43.js")),["assets/pages-API-pull-down-refresh-pull-down-refresh.bd3aae43.js","assets/pull-down-refresh.ebd8ade5.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),dt=B(S({loader:pt},W)),ct=()=>C((()=>import("./pages-API-animation-animation.56be40b2.js")),["assets/pages-API-animation-animation.56be40b2.js","assets/animation.9f0aa111.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),gt=B(S({loader:ct},W)),_t=()=>C((()=>import("./pages-API-get-node-info-get-node-info.03f65193.js")),["assets/pages-API-get-node-info-get-node-info.03f65193.js","assets/get-node-info.72bac7e2.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ut=B(S({loader:_t},W)),mt=()=>C((()=>import("./pages-API-intersection-observer-intersection-observer.453e577b.js")),["assets/pages-API-intersection-observer-intersection-observer.453e577b.js","assets/intersection-observer.fce3790d.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ht=B(S({loader:mt},W)),ft=()=>C((()=>import("./pages-API-canvas-canvas.67b982f5.js")),["assets/pages-API-canvas-canvas.67b982f5.js","assets/canvas.7af879cb.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),bt=B(S({loader:ft},W)),Pt=()=>C((()=>import("./pages-API-action-sheet-action-sheet.f3bf5145.js")),["assets/pages-API-action-sheet-action-sheet.f3bf5145.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),It=B(S({loader:Pt},W)),At=()=>C((()=>import("./pages-API-modal-modal.5399ea60.js")),["assets/pages-API-modal-modal.5399ea60.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Tt=B(S({loader:At},W)),Et=()=>C((()=>import("./pages-API-toast-toast.0549de03.js")),["assets/pages-API-toast-toast.0549de03.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),vt=B(S({loader:Et},W)),Bt=()=>C((()=>import("./pages-API-get-network-type-get-network-type.38ce089c.js")),["assets/pages-API-get-network-type-get-network-type.38ce089c.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),xt=B(S({loader:Bt},W)),wt=()=>C((()=>import("./pages-API-get-system-info-get-system-info.1c9be667.js")),["assets/pages-API-get-system-info-get-system-info.1c9be667.js","assets/get-system-info.8257797e.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Lt=B(S({loader:wt},W)),Dt=()=>C((()=>import("./pages-API-add-phone-contact-add-phone-contact.57475110.js")),["assets/pages-API-add-phone-contact-add-phone-contact.57475110.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Rt=B(S({loader:Dt},W)),Ot=()=>C((()=>import("./pages-API-on-accelerometer-change-on-accelerometer-change.b9290f14.js")),["assets/pages-API-on-accelerometer-change-on-accelerometer-change.b9290f14.js","assets/on-accelerometer-change.40434a5a.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),jt=B(S({loader:Ot},W)),yt=()=>C((()=>import("./pages-API-on-compass-change-on-compass-change.e9d0b201.js")),["assets/pages-API-on-compass-change-on-compass-change.e9d0b201.js","assets/on-compass-change.5c05cd21.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Vt=B(S({loader:yt},W)),kt=()=>C((()=>import("./pages-API-make-phone-call-make-phone-call.37af27c2.js")),["assets/pages-API-make-phone-call-make-phone-call.37af27c2.js","assets/make-phone-call.df1a2216.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ct=B(S({loader:kt},W)),Ft=()=>C((()=>import("./pages-API-scan-code-scan-code.836c358b.js")),["assets/pages-API-scan-code-scan-code.836c358b.js","assets/scan-code.a59af87d.css","assets/vendor.a21c6627.js","assets/permission.0399e7a8.js"]).then((e=>w(e.default||e))),qt=B(S({loader:Ft},W)),Mt=()=>C((()=>import("./pages-API-clipboard-clipboard.c5d264ec.js")),["assets/pages-API-clipboard-clipboard.c5d264ec.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ut=B(S({loader:Mt},W)),St=()=>C((()=>import("./pages-API-request-request.cb998b65.js")),["assets/pages-API-request-request.cb998b65.js","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Wt=B(S({loader:St},W)),Kt=()=>C((()=>import("./pages-API-upload-file-upload-file.f154fccd.js")),["assets/pages-API-upload-file-upload-file.f154fccd.js","assets/upload-file.9899932c.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ht=B(S({loader:Kt},W)),Nt=()=>C((()=>import("./pages-API-download-file-download-file.454ed063.js")),["assets/pages-API-download-file-download-file.454ed063.js","assets/download-file.167b52cf.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Qt=B(S({loader:Nt},W)),$t=()=>C((()=>import("./pages-API-image-image.727f8f03.js")),["assets/pages-API-image-image.727f8f03.js","assets/image.d483ab90.css","assets/vendor.a21c6627.js","assets/permission.0399e7a8.js"]).then((e=>w(e.default||e))),Jt=B(S({loader:$t},W)),Yt=()=>C((()=>import("./pages-API-voice-voice.21c2a6e8.js")),["assets/pages-API-voice-voice.21c2a6e8.js","assets/voice.491e0b8b.css","assets/vendor.a21c6627.js","assets/util.b5eb4444.js","assets/stop.6096038e.js"]).then((e=>w(e.default||e))),zt=B(S({loader:Yt},W)),Gt=()=>C((()=>import("./pages-API-inner-audio-inner-audio.4bb677ab.js")),["assets/pages-API-inner-audio-inner-audio.4bb677ab.js","assets/inner-audio.4a04d067.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Zt=B(S({loader:Gt},W)),Xt=()=>C((()=>import("./pages-API-background-audio-background-audio.d0aaa1ed.js")),["assets/pages-API-background-audio-background-audio.d0aaa1ed.js","assets/background-audio.a5068a8d.css","assets/vendor.a21c6627.js","assets/util.b5eb4444.js","assets/stop.6096038e.js"]).then((e=>w(e.default||e))),ea=B(S({loader:Xt},W)),ta=()=>C((()=>import("./pages-API-video-video.fdb74db1.js")),["assets/pages-API-video-video.fdb74db1.js","assets/video.17208b26.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),aa=B(S({loader:ta},W)),oa=()=>C((()=>import("./pages-API-file-file.8c663284.js")),["assets/pages-API-file-file.8c663284.js","assets/file.7485aa4f.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),na=B(S({loader:oa},W)),ra=()=>C((()=>import("./pages-API-map-map.36fe6465.js")),["assets/pages-API-map-map.36fe6465.js","assets/map.21d06111.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),sa=B(S({loader:ra},W)),ia=()=>C((()=>import("./pages-API-get-location-get-location.8e7a30a5.js")),["assets/pages-API-get-location-get-location.8e7a30a5.js","assets/get-location.78a2e53e.css","assets/vendor.a21c6627.js","assets/util.b5eb4444.js"]).then((e=>w(e.default||e))),la=B(S({loader:ia},W)),pa=()=>C((()=>import("./pages-API-open-location-open-location.a71f4cf1.js")),["assets/pages-API-open-location-open-location.a71f4cf1.js","assets/open-location.3d5856f0.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),da=B(S({loader:pa},W)),ca=()=>C((()=>import("./pages-API-choose-location-choose-location.49abeb3f.js")),["assets/pages-API-choose-location-choose-location.49abeb3f.js","assets/choose-location.3b7c9a48.css","assets/vendor.a21c6627.js","assets/util.b5eb4444.js"]).then((e=>w(e.default||e))),ga=B(S({loader:ca},W)),_a=()=>C((()=>import("./pages-API-storage-storage.d13c8ff8.js")),["assets/pages-API-storage-storage.d13c8ff8.js","assets/storage.1b4f36af.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ua=B(S({loader:_a},W)),ma=()=>C((()=>import("./pages-API-sqlite-sqlite.6d22c78e.js")),["assets/pages-API-sqlite-sqlite.6d22c78e.js","assets/sqlite.644ae308.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ha=B(S({loader:ma},W)),fa=()=>C((()=>import("./pages-API-vibrate-vibrate.8b6f60f9.js")),["assets/pages-API-vibrate-vibrate.8b6f60f9.js","assets/vibrate.c91a04d6.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),ba=B(S({loader:fa},W)),Pa=()=>C((()=>import("./pages-API-websocket-socketTask-websocket-socketTask.5ab0c1a5.js")),["assets/pages-API-websocket-socketTask-websocket-socketTask.5ab0c1a5.js","assets/websocket-socketTask.ec0052e5.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ia=B(S({loader:Pa},W)),Aa=()=>C((()=>import("./pages-API-websocket-global-websocket-global.1004ac58.js")),["assets/pages-API-websocket-global-websocket-global.1004ac58.js","assets/websocket-global.08b1e32e.css","assets/vendor.a21c6627.js"]).then((e=>w(e.default||e))),Ta=B(S({loader:Aa},W));function Ea(e){return g(),_(x,null,{page:u((()=>[m(e,{ref:"page"},null,512)])),_:1})}window.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{setup:()=>()=>Ea(H)},loader:K,meta:{isQuit:!0,isEntry:!0,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/dashboard/dashboard",component:{setup:()=>()=>Ea(Q)},loader:N,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:0,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/subscribe/subscribe",component:{setup:()=>()=>Ea(J)},loader:$,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:1,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/shoppingCart/shoppingCart",component:{setup:()=>()=>Ea(z)},loader:Y,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:2,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/order/order",component:{setup:()=>()=>Ea(Z)},loader:G,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:3,enablePullDownRefresh:!1,navigationBar:{titleText:"茶茶订货",style:"custom"}}},{path:"/pages/tabBar/order/detail",component:{setup:()=>()=>Ea(ee)},loader:X,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"订单详情",style:""}}},{path:"/pages/tabBar/home/home",component:{setup:()=>()=>Ea(ae)},loader:te,meta:{isQuit:!0,isTabBar:!0,tabBarIndex:4,enablePullDownRefresh:!1,navigationBar:{titleText:"我的",style:"custom"}}},{path:"/pages/order/order",component:{setup:()=>()=>Ea(ne)},loader:oe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"确认订单",style:""}}},{path:"/pages/error/404",component:{setup:()=>()=>Ea(se)},loader:re,meta:{navigationBar:{titleText:"Not Found"}}},{path:"/pages/notice/notice",component:{setup:()=>()=>Ea(le)},loader:ie,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"消息",style:""}}},{path:"/pages/feeBill/feeBill",component:{setup:()=>()=>Ea(de)},loader:pe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用单"}}},{path:"/pages/feeBill/detail",component:{setup:()=>()=>Ea(ge)},loader:ce,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用单详情"}}},{path:"/pages/tabBar/subscribe/search",component:{setup:()=>()=>Ea(ue)},loader:_e,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"物料查询"}}},{path:"/pages/address/address",component:{setup:()=>()=>Ea(he)},loader:me,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"收货地址"}}},{path:"/pages/address/detail",component:{setup:()=>()=>Ea(be)},loader:fe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"编辑收货地址"}}},{path:"/pages/login/login",component:{setup:()=>()=>Ea(Ie)},loader:Pe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"登录",style:"custom"}}},{path:"/pages/login/resetPassword",component:{setup:()=>()=>Ea(Te)},loader:Ae,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"重置密码"}}},{path:"/pages/tabBar/order/returnList",component:{setup:()=>()=>Ea(ve)},loader:Ee,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"退货"}}},{path:"/pages/pay/payback",component:{setup:()=>()=>Ea(xe)},loader:Be,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"支付"}}},{path:"/pages/feeBill/info",component:{setup:()=>()=>Ea(Le)},loader:we,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:""}}},{path:"/pages/feeBill/billMain",component:{setup:()=>()=>Ea(Re)},loader:De,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"费用详情"}}},{path:"/pages/receive/list",component:{setup:()=>()=>Ea(je)},loader:Oe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"发货单列表"}}},{path:"/pages/receive/detail",component:{setup:()=>()=>Ea(Ve)},loader:ye,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"发货单详情"}}},{path:"/pages/tabBar/order/refund",component:{setup:()=>()=>Ea(Ce)},loader:ke,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"申请退货"}}},{path:"/pages/tabBar/home/setup",component:{setup:()=>()=>Ea(qe)},loader:Fe,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"设置"}}},{path:"/pages/tabBar/home/coupon",component:{setup:()=>()=>Ea(Ue)},loader:Me,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"优惠券"}}},{path:"/pages/tabBar/home/store",component:{setup:()=>()=>Ea(We)},loader:Se,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"门店"}}},{path:"/pages/transaction/transaction",component:{setup:()=>()=>Ea(He)},loader:Ke,meta:{enablePullDownRefresh:!1,navigationBar:{titleText:"账单"}}},{path:"/pages/API/login/login",component:{setup:()=>()=>Ea(Qe)},loader:Ne,meta:{navigationBar:{titleText:"授权登录"}}},{path:"/pages/API/get-user-info/get-user-info",component:{setup:()=>()=>Ea(Je)},loader:$e,meta:{navigationBar:{titleText:"获取用户信息"}}},{path:"/pages/API/request-payment/request-payment",component:{setup:()=>()=>Ea(ze)},loader:Ye,meta:{navigationBar:{titleText:"发起支付"}}},{path:"/pages/API/share/share",component:{setup:()=>()=>Ea(Ze)},loader:Ge,meta:{navigationBar:{titleText:"分享"}}},{path:"/pages/API/set-navigation-bar-title/set-navigation-bar-title",component:{setup:()=>()=>Ea(et)},loader:Xe,meta:{navigationBar:{titleText:"设置界面标题"}}},{path:"/pages/API/show-loading/show-loading",component:{setup:()=>()=>Ea(at)},loader:tt,meta:{navigationBar:{titleText:"加载提示框"}}},{path:"/pages/API/navigator/navigator",component:{setup:()=>()=>Ea(nt)},loader:ot,meta:{navigationBar:{titleText:"页面跳转"}}},{path:"/pages/API/navigator/new-page/new-vue-page-1",component:{setup:()=>()=>Ea(st)},loader:rt,meta:{navigationBar:{titleText:"新VUE页面1"}}},{path:"/pages/API/navigator/new-page/new-vue-page-2",component:{setup:()=>()=>Ea(lt)},loader:it,meta:{navigationBar:{titleText:"新VUE页面2"}}},{path:"/pages/API/pull-down-refresh/pull-down-refresh",component:{setup:()=>()=>Ea(dt)},loader:pt,meta:{enablePullDownRefresh:!0,navigationBar:{titleText:"下拉刷新"}}},{path:"/pages/API/animation/animation",component:{setup:()=>()=>Ea(gt)},loader:ct,meta:{navigationBar:{titleText:"创建动画"}}},{path:"/pages/API/get-node-info/get-node-info",component:{setup:()=>()=>Ea(ut)},loader:_t,meta:{navigationBar:{titleText:"节点信息"}}},{path:"/pages/API/intersection-observer/intersection-observer",component:{setup:()=>()=>Ea(ht)},loader:mt,meta:{navigationBar:{titleText:"节点布局相交状态"}}},{path:"/pages/API/canvas/canvas",component:{setup:()=>()=>Ea(bt)},loader:ft,meta:{navigationBar:{titleText:"创建绘画"}}},{path:"/pages/API/action-sheet/action-sheet",component:{setup:()=>()=>Ea(It)},loader:Pt,meta:{navigationBar:{titleText:"操作菜单"}}},{path:"/pages/API/modal/modal",component:{setup:()=>()=>Ea(Tt)},loader:At,meta:{navigationBar:{titleText:"模态弹窗"}}},{path:"/pages/API/toast/toast",component:{setup:()=>()=>Ea(vt)},loader:Et,meta:{navigationBar:{titleText:"消息提示框"}}},{path:"/pages/API/get-network-type/get-network-type",component:{setup:()=>()=>Ea(xt)},loader:Bt,meta:{navigationBar:{titleText:"获取设备网络状态"}}},{path:"/pages/API/get-system-info/get-system-info",component:{setup:()=>()=>Ea(Lt)},loader:wt,meta:{navigationBar:{titleText:"获取设备系统信息"}}},{path:"/pages/API/add-phone-contact/add-phone-contact",component:{setup:()=>()=>Ea(Rt)},loader:Dt,meta:{navigationBar:{titleText:"添加手机联系人"}}},{path:"/pages/API/on-accelerometer-change/on-accelerometer-change",component:{setup:()=>()=>Ea(jt)},loader:Ot,meta:{navigationBar:{titleText:"监听加速度计数据"}}},{path:"/pages/API/on-compass-change/on-compass-change",component:{setup:()=>()=>Ea(Vt)},loader:yt,meta:{navigationBar:{titleText:"监听罗盘数据"}}},{path:"/pages/API/make-phone-call/make-phone-call",component:{setup:()=>()=>Ea(Ct)},loader:kt,meta:{navigationBar:{titleText:"打电话"}}},{path:"/pages/API/scan-code/scan-code",component:{setup:()=>()=>Ea(qt)},loader:Ft,meta:{navigationBar:{titleText:"扫码"}}},{path:"/pages/API/clipboard/clipboard",component:{setup:()=>()=>Ea(Ut)},loader:Mt,meta:{navigationBar:{titleText:"剪贴板"}}},{path:"/pages/API/request/request",component:{setup:()=>()=>Ea(Wt)},loader:St,meta:{navigationBar:{titleText:"网络请求"}}},{path:"/pages/API/upload-file/upload-file",component:{setup:()=>()=>Ea(Ht)},loader:Kt,meta:{navigationBar:{titleText:"上传文件"}}},{path:"/pages/API/download-file/download-file",component:{setup:()=>()=>Ea(Qt)},loader:Nt,meta:{navigationBar:{titleText:"下载文件"}}},{path:"/pages/API/image/image",component:{setup:()=>()=>Ea(Jt)},loader:$t,meta:{navigationBar:{titleText:"图片"}}},{path:"/pages/API/voice/voice",component:{setup:()=>()=>Ea(zt)},loader:Yt,meta:{navigationBar:{titleText:"录音"}}},{path:"/pages/API/inner-audio/inner-audio",component:{setup:()=>()=>Ea(Zt)},loader:Gt,meta:{navigationBar:{titleText:"音频"}}},{path:"/pages/API/background-audio/background-audio",component:{setup:()=>()=>Ea(ea)},loader:Xt,meta:{navigationBar:{titleText:"背景音频"}}},{path:"/pages/API/video/video",component:{setup:()=>()=>Ea(aa)},loader:ta,meta:{navigationBar:{titleText:"视频"}}},{path:"/pages/API/file/file",component:{setup:()=>()=>Ea(na)},loader:oa,meta:{navigationBar:{titleText:"文件"}}},{path:"/pages/API/map/map",component:{setup:()=>()=>Ea(sa)},loader:ra,meta:{navigationBar:{titleText:"map"},isNVue:!0}},{path:"/pages/API/get-location/get-location",component:{setup:()=>()=>Ea(la)},loader:ia,meta:{navigationBar:{titleText:"获取位置"}}},{path:"/pages/API/open-location/open-location",component:{setup:()=>()=>Ea(da)},loader:pa,meta:{navigationBar:{titleText:"查看位置"}}},{path:"/pages/API/choose-location/choose-location",component:{setup:()=>()=>Ea(ga)},loader:ca,meta:{navigationBar:{titleText:"使用地图选择位置"}}},{path:"/pages/API/storage/storage",component:{setup:()=>()=>Ea(ua)},loader:_a,meta:{navigationBar:{titleText:"数据存储"}}},{path:"/pages/API/sqlite/sqlite",component:{setup:()=>()=>Ea(ha)},loader:ma,meta:{navigationBar:{titleText:"SQLite"}}},{path:"/pages/API/vibrate/vibrate",component:{setup:()=>()=>Ea(ba)},loader:fa,meta:{navigationBar:{titleText:"震动"}}},{path:"/pages/API/websocket-socketTask/websocket-socketTask",component:{setup:()=>()=>Ea(Ia)},loader:Pa,meta:{navigationBar:{titleText:"websocket-socketTask"}}},{path:"/pages/API/websocket-global/websocket-global",component:{setup:()=>()=>Ea(Ta)},loader:Aa,meta:{navigationBar:{titleText:"websocket-global"}}}].map((e=>(e.meta.route=(e.alias||e.path).substr(1),e)));const va={onLaunch:function(){console.log("%c hello uniapp %c v3.3.0 ","background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#005bac ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;"),console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},globalData:{test:""},methods:((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&n(e,s,r[s]);if(t)for(var s of t(r))o.call(r,s)&&n(e,s,r[s]);return e})({},L(["setUniverifyErrorMsg","setUniverifyLogin"]))};D(va);const Ba=R({state:{hasLogin:!1,isUniverifyLogin:!1,loginProvider:"",openid:null,testvuex:!1,colorIndex:0,colorList:["#FF0000","#00FF00","#0000FF"],noMatchLeftWindow:!0,active:"componentPage",leftWinActive:"/pages/component/view/view",activeOpen:"",menu:[],univerifyErrorMsg:""},mutations:{login(e,t){e.hasLogin=!0,e.loginProvider=t},logout(e){e.hasLogin=!1,e.openid=null},setOpenid(e,t){e.openid=t},setTestTrue(e){e.testvuex=!0},setTestFalse(e){e.testvuex=!1},setColorIndex(e,t){e.colorIndex=t},setMatchLeftWindow(e,t){e.noMatchLeftWindow=!t},setActive(e,t){e.active=t},setLeftWinActive(e,t){e.leftWinActive=t},setActiveOpen(e,t){e.activeOpen=t},setMenu(e,t){e.menu=t},setUniverifyLogin(e,t){"boolean"!=typeof t&&(t=!!t),e.isUniverifyLogin=t},setUniverifyErrorMsg(e,t=""){e.univerifyErrorMsg=t}},getters:{currentColor:e=>e.colorList[e.colorIndex]},actions:{getUserOpenId:async function({commit:e,state:t}){return await new Promise(((a,o)=>{t.openid?a(t.openid):O({success:t=>{e("login"),setTimeout((function(){const t="123456789";console.log("uni.request mock openid[123456789]"),e("setOpenid",t),a(t)}),1e3)},fail:e=>{console.log("uni.login 接口调用失败，将无法正常使用开放接口等服务",e),o(e)}})}))},getPhoneNumber:function({commit:e},t){return new Promise(((e,a)=>{j({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login",method:"POST",data:t,success:t=>{const o=t.data;o.success?e(o.phoneNumber):a(t)},fail:e=>{a(res)}})}))}}});(function(){const e=V(va);return e.use(Ba),e.config.globalProperties.$adpid="1111111111",e.config.globalProperties.$backgroundAudioData={playing:!1,playTime:0,formatedPlayTime:"00:00:00"},{app:e}})().app.use(y).mount("#app");export{q as _};
