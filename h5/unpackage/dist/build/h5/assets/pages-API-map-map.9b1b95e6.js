import{_ as e,bd as t,au as o,o as l,d as a,w as n,e as i,f as s,a5 as d,D as r,a2 as c,k as u}from"./vendor.1f020a26.js";const g=[{id:0,latitude:39.989631,longitude:116.481018,title:"方恒国际 阜通东大街6号",zIndex:"1",rotate:0,width:20,height:20,anchor:{x:.5,y:1},callout:{content:"方恒国际 阜通东大街6号",color:"#00BFFF",fontSize:10,borderRadius:4,borderWidth:1,borderColor:"#333300",bgColor:"#CCFF99",padding:"5",display:"ALWAYS"}},{id:1,latitude:39.908692,longitude:116.397477,title:"天安门",zIndex:"1",iconPath:"/static/location.png",width:40,height:40,anchor:{x:.5,y:1},callout:{content:"首都北京\n天安门",color:"#00BFFF",fontSize:12,borderRadius:2,borderWidth:0,borderColor:"#333300",bgColor:"#CCFF11",padding:"1",display:"ALWAYS"}}],h=[{points:[{latitude:39.925539,longitude:116.279037},{latitude:39.925539,longitude:116.520285}],color:"#FFCCFF",width:7,dottedLine:!0,arrowLine:!0,borderColor:"#000000",borderWidth:2},{points:[{latitude:39.938698,longitude:116.275177},{latitude:39.966069,longitude:116.289253},{latitude:39.944226,longitude:116.306076},{latitude:39.966069,longitude:116.322899},{latitude:39.938698,longitude:116.336975}],color:"#CCFFFF",width:5,dottedLine:!0,arrowLine:!0,borderColor:"#CC0000",borderWidth:3}],C=[{points:[{latitude:39.781892,longitude:116.293413},{latitude:39.7876,longitude:116.391842},{latitude:39.733187,longitude:116.417932},{latitude:39.704653,longitude:116.338255}],fillColor:"#FFCCFF",strokeWidth:3,strokeColor:"#CC99CC",zIndex:11},{points:[{latitude:39.8876,longitude:116.518932},{latitude:39.781892,longitude:116.518932},{latitude:39.781892,longitude:116.428932},{latitude:39.8876,longitude:116.428932}],fillColor:"#CCFFFF",strokeWidth:5,strokeColor:"#CC0000",zIndex:3}],b=[{latitude:39.996441,longitude:116.411146,radius:15e3,strokeWidth:5,color:"#CCFFFF",fillColor:"#CC0000"},{latitude:40.096441,longitude:116.511146,radius:12e3,strokeWidth:3,color:"#CCFFFF",fillColor:"#FFCCFF"},{latitude:39.896441,longitude:116.311146,radius:9e3,strokeWidth:1,color:"#CCFFFF",fillColor:"#CC0000"}],p=[{latitude:39.989631,longitude:116.481018},{latitude:39.908692,longitude:116.397477}];var k=e({data:()=>({location:{longitude:116.397477,latitude:39.908692},controls:[{id:1,position:{left:5,top:180,width:30,height:30},iconPath:"/static/logo.jpg",clickable:!0}],showLocation:!1,scale:13,showCompass:!0,enable3D:!0,enableOverlooking:!0,enableOverlooking:!0,enableZoom:!0,enableScroll:!0,enableRotate:!0,enableSatellite:!1,enableTraffic:!1,polyline:[],markers:[],polygons:[],circles:[],includePoints:[],rotate:0,skew:0}),onLoad(){},onReady(){this.map=t("map1",this)},methods:{changeScale(){this.scale=9==this.scale?15:9},changeRotate(){this.rotate=90==this.rotate?0:90},changeSkew(){this.skew=30==this.skew?0:30},enableThreeD(e){this.enable3D=e.detail.value},changeShowCompass(e){this.showCompass=e.detail.value},changeEnableOverlooking(e){this.enableOverlooking=e.detail.value},changeEnableZoom(e){this.enableZoom=e.detail.value},changeEnableScroll(e){this.enableScroll=e.detail.value},changeEnableRotate(e){this.enableRotate=e.detail.value},changeEnableSatellite(e){this.enableSatellite=e.detail.value},changeEnableTraffic(e){this.enableTraffic=e.detail.value},addMarkers(){this.markers=g},addPolyline(){this.polyline=h},addPolygons(){this.polygons=C},addCircles(){this.circles=b},includePoint(){this.includePoints=p},handleGetCenterLocation(){this.map.getCenterLocation({success:e=>{console.log(JSON.stringify(e)),o({content:JSON.stringify(e)})}})},handleGetRegion(){this.map.getRegion({success:e=>{console.log(JSON.stringify(e)),o({content:JSON.stringify(e)})}})},handleTranslateMarker(){this.map.translateMarker({markerId:1,destination:{latitude:39.989631,longitude:116.481018},duration:2e3},(e=>{console.log(JSON.stringify(e)),o({content:JSON.stringify(e)})}))},maptap(e){o({content:JSON.stringify(e)})},onmarkertap(e){o({content:JSON.stringify(e)})},oncontroltap(e){o({content:JSON.stringify(e)})},oncallouttap(e){o({content:JSON.stringify(e)})},onupdated(e){console.log(JSON.stringify(e))},onregionchange(e){console.log(JSON.stringify(e))},onpoitap(e){o({content:JSON.stringify(e)})}}},[["render",function(e,t,o,g,h,C){const b=d,p=r,k=c,f=u;return l(),a(f,{class:"content"},{default:n((()=>[i(b,{class:"map",id:"map1",ref:"map1",controls:h.controls,scale:h.scale,longitude:h.location.longitude,latitude:h.location.latitude,"show-location":h.showLocation,"enable-3D":h.enable3D,rotate:h.rotate,skew:h.skew,"show-compass":h.showCompass,"enable-overlooking":h.enableOverlooking,"enable-zoom":h.enableZoom,"enable-scroll":h.enableScroll,"enable-rotate":h.enableRotate,"enable-satellite":h.enableSatellite,"enable-traffic":h.enableTraffic,markers:h.markers,polyline:h.polyline,circles:h.circles,polygons:h.polygons,"include-points":h.includePoints,onClick:C.maptap,onControltap:C.oncontroltap,onMarkertap:C.onmarkertap,onCallouttap:C.oncallouttap,onPoitap:C.onpoitap,onUpdated:C.onupdated,onRegionchange:C.onregionchange},null,8,["controls","scale","longitude","latitude","show-location","enable-3D","rotate","skew","show-compass","enable-overlooking","enable-zoom","enable-scroll","enable-rotate","enable-satellite","enable-traffic","markers","polyline","circles","polygons","include-points","onClick","onControltap","onMarkertap","onCallouttap","onPoitap","onUpdated","onRegionchange"]),i(k,{class:"scrollview","scroll-y":"true"},{default:n((()=>[i(p,{class:"button",onClick:C.changeScale},{default:n((()=>[s("changeScale")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.changeRotate},{default:n((()=>[s("changeRotate")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.changeSkew},{default:n((()=>[s("skew")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.addMarkers},{default:n((()=>[s("addMarkers")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.addPolyline},{default:n((()=>[s("addPolyline")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.addPolygons},{default:n((()=>[s("addPolygons")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.addCircles},{default:n((()=>[s("addCircles")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.includePoint},{default:n((()=>[s("includePoints")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.handleGetCenterLocation},{default:n((()=>[s("getCenterLocation")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.handleGetRegion},{default:n((()=>[s("getRegion")])),_:1},8,["onClick"]),i(p,{class:"button",onClick:C.handleTranslateMarker},{default:n((()=>[s("translateMarker")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-030b3464"]]);export{k as default};
