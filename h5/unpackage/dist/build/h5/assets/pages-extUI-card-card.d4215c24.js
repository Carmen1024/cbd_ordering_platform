import{_ as t,a4 as a,a as e,c as l,o as c,d as i,w as s,e as o,f as n,h as d,k as u,i as r}from"./vendor.762bb174.js";import{_ as f}from"./uni-card.1fa823de.js";import{_}from"./uni-section.38218040.js";import{_ as m}from"./uni-icons.dc40d211.js";import{_ as p}from"./uni-list-item.c8355df1.js";import{_ as b}from"./uni-list.2f4a7deb.js";import"./uni-badge.ea140bd3.js";var h=t({components:{},data:()=>({cover:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg",avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}),methods:{onClick(t){console.log(t)},actionsClick(t){a({title:t,icon:"none"})}}},[["render",function(t,a,h,C,k,y){const v=d,g=e(l("uni-card"),f),x=e(l("uni-section"),_),w=e(l("uni-icons"),m),z=u,j=e(l("uni-list-item"),p),U=e(l("uni-list"),b),q=r;return c(),i(z,{class:"container"},{default:s((()=>[o(g,{"is-shadow":!1,"is-full":""},{default:s((()=>[o(v,{class:"uni-h6"},{default:s((()=>[n("卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")])),_:1})])),_:1}),o(x,{title:"基础卡片",type:"line"},{default:s((()=>[o(g,{"is-shadow":!1},{default:s((()=>[o(v,{class:"uni-body"},{default:s((()=>[n("这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。")])),_:1})])),_:1})])),_:1}),o(x,{title:"卡片标题+额外信息",type:"line"},{default:s((()=>[o(g,{title:"基础卡片",extra:"额外信息"},{default:s((()=>[o(v,{class:"uni-body"},{default:s((()=>[n("这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。")])),_:1})])),_:1})])),_:1}),o(x,{title:"双标题卡片",type:"line"},{default:s((()=>[o(g,{title:"基础卡片","sub-title":"副标题",extra:"额外信息",thumbnail:k.avatar,onClick:y.onClick},{default:s((()=>[o(v,{class:"uni-body"},{default:s((()=>[n("这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。")])),_:1})])),_:1},8,["thumbnail","onClick"])])),_:1}),o(x,{title:"通栏卡片",type:"line"},{default:s((()=>[o(g,{title:"基础卡片",isFull:!0,"sub-title":"副标题",extra:"额外信息",thumbnail:k.avatar},{default:s((()=>[o(v,{class:"uni-body"},{default:s((()=>[n("这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。")])),_:1})])),_:1},8,["thumbnail"])])),_:1}),o(x,{title:"卡片封面图+操作栏",type:"line"},{default:s((()=>[o(g,{cover:k.cover,onClick:y.onClick},{default:s((()=>[o(v,{class:"uni-body"},{default:s((()=>[n("这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。")])),_:1}),o(z,{slot:"actions",class:"card-actions"},{default:s((()=>[o(z,{class:"card-actions-item",onClick:a[0]||(a[0]=t=>y.actionsClick("分享"))},{default:s((()=>[o(w,{type:"pengyouquan",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("分享")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[1]||(a[1]=t=>y.actionsClick("点赞"))},{default:s((()=>[o(w,{type:"heart",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("点赞")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[2]||(a[2]=t=>y.actionsClick("评论"))},{default:s((()=>[o(w,{type:"chatbubble",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("评论")])),_:1})])),_:1})])),_:1})])),_:1},8,["cover","onClick"])])),_:1}),o(x,{title:"自定义卡片内容",type:"line"},{default:s((()=>[o(g,{title:"基础卡片","sub-title":"副标题",extra:"额外信息",padding:"10px 0",thumbnail:k.avatar},{title:s((()=>[o(U,null,{default:s((()=>[o(j,{"show-switch":!0,title:"自定义标题",onSwitchChange:t.switchChange},null,8,["onSwitchChange"])])),_:1})])),default:s((()=>[o(q,{style:{width:"100%"},src:k.cover},null,8,["src"]),o(v,{class:"uni-body uni-mt-5"},{default:s((()=>[n("卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")])),_:1}),o(z,{slot:"actions",class:"card-actions"},{default:s((()=>[o(z,{class:"card-actions-item",onClick:a[3]||(a[3]=t=>y.actionsClick("分享"))},{default:s((()=>[o(w,{type:"pengyouquan",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("分享")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[4]||(a[4]=t=>y.actionsClick("点赞"))},{default:s((()=>[o(w,{type:"heart",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("点赞")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[5]||(a[5]=t=>y.actionsClick("评论"))},{default:s((()=>[o(w,{type:"chatbubble",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("评论")])),_:1})])),_:1})])),_:1})])),_:1},8,["thumbnail"])])),_:1}),o(x,{title:"卡片+列表",type:"line"},{default:s((()=>[o(g,{padding:"0",spacing:"0"},{cover:s((()=>[o(z,{class:"custom-cover"},{default:s((()=>[o(q,{class:"cover-image",mode:"aspectFill",src:k.cover},null,8,["src"]),o(z,{class:"cover-content"},{default:s((()=>[o(v,{class:"uni-subtitle uni-white"},{default:s((()=>[n("今日新闻热点")])),_:1})])),_:1})])),_:1})])),default:s((()=>[o(U,null,{default:s((()=>[o(j,{title:"今日新闻",showArrow:""}),o(j,{title:"今日新闻",showArrow:""})])),_:1}),o(z,{slot:"actions",class:"card-actions no-border"},{default:s((()=>[o(z,{class:"card-actions-item",onClick:a[6]||(a[6]=t=>y.actionsClick("分享"))},{default:s((()=>[o(w,{type:"pengyouquan",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("分享")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[7]||(a[7]=t=>y.actionsClick("点赞"))},{default:s((()=>[o(w,{type:"heart",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("点赞")])),_:1})])),_:1}),o(z,{class:"card-actions-item",onClick:a[8]||(a[8]=t=>y.actionsClick("评论"))},{default:s((()=>[o(w,{type:"chatbubble",size:"18",color:"#999"}),o(v,{class:"card-actions-item-text"},{default:s((()=>[n("评论")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-a18ffec6"]]);export{h as default};
