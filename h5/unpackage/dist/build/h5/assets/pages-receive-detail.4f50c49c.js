import{_ as a,D as t,E as e,Y as s,o as _,d as l,w as o,e as i,f as c,F as d,N as n,O as u,Q as m,W as r,X as f,h as p,k as h,U as v,i as g,a2 as D}from"./vendor.a21c6627.js";import{g as k,h as y}from"./order.ecada970.js";import"./request.bd165be5.js";import"./token.ba774510.js";var I=a(t({onLoad:function(a){console.log(a.o_s_id),this.order=a,this.getReceiveList()},setup(){const a=e({}),t=e({}),s=e(0),_=e(0);return{getReceiveList:()=>{const{o_s_id:e,_id:l,i_code:o,o_s_code:i}=a.value;y({o_s_id:e,_id:l,i_code:o,o_s_code:i}).then((a=>{s.value=0,a.data.i_materials_list=a.data.i_materials_list.map((a=>(a.m_c_count=a.m_count,s.value+=parseInt(a.m_count),a))),t.value=a.data,_.value=s.value}))},detailData:t,order:a,m_c_count:_,m_count:s}},methods:{reveice(){const{o_s_id:a,_id:t,o_s_code:e}=this.detailData,_={o_s_id:a,_id:t,o_s_code:e,i_materials_list:this.detailData.i_materials_list.map((a=>{const{m_name:t,m_c_count:e,m_unit:s,m_id:_}=a;return{m_name:t,m_count:e,m_unit:s,m_id:_}}))};console.log(_),k(_).then((a=>{this.getReceiveList(),s({title:"已成功验收",duration:2e3,icon:"none"})}))},dataChange(a){let t="";if(isNaN(parseInt(a.m_c_count))?t="请填入数字":a.m_c_count.match(/^\d+$/)?parseInt(a.m_c_count)>parseInt(a.m_count)&&(t="不能大于实际发货件数"):t="数量必须大于等于0",t)return a.m_c_count=a.m_count,void s({title:t,duration:2e3,icon:"none"});let e=0;this.detailData.i_materials_list.map((a=>{e+=parseInt(a.m_c_count)})),this.m_c_count=e}}}),[["render",function(a,t,e,s,k,y){const I=p,b=h,j=g,C=D,L=v;return _(),l(b,{class:"shopping-container"},{default:o((()=>[i(b,{class:"commodityMod"},{default:o((()=>[i(b,{class:"other"},{default:o((()=>[i(b,{class:"other-item"},{default:o((()=>[i(I,{class:"left"},{default:o((()=>[c("交货单")])),_:1}),i(b,{class:"right"},{default:o((()=>[c(d(a.detailData.i_code),1)])),_:1})])),_:1}),i(b,{class:"other-item"},{default:o((()=>[i(I,{class:"left"},{default:o((()=>[c("订单号")])),_:1}),i(b,{class:"right"},{default:o((()=>[c(d(a.detailData.o_s_code),1)])),_:1})])),_:1})])),_:1}),(_(!0),n(m,null,u(a.detailData.i_materials_list,((t,e)=>(_(),l(b,{class:"commodityItem"},{default:o((()=>[i(j,{src:t.img||"/static/logo.jpg"},null,8,["src"]),i(b,{class:"detail"},{default:o((()=>[i(b,{class:"name"},{default:o((()=>[c(d(t.m_name||"物料名称"),1)])),_:2},1024),i(b,{class:"unit"},{default:o((()=>[i(I,{class:"left"},{default:o((()=>[c(d(t.m_package||"500g*30袋/箱"),1)])),_:2},1024),i(I,{class:"right"},{default:o((()=>[c("批次号:"+d(t.i_m_batch_no),1)])),_:2},1024)])),_:2},1024),i(b,{class:"price"},{default:o((()=>[i(I,{class:"total"},{default:o((()=>[c(" 发货:"+d(t.m_count)+"件 ",1)])),_:2},1024),i(b,{class:"numHandle"},{default:o((()=>[c(" 签收: "),1==a.detailData.received?(_(),l(I,{key:0},{default:o((()=>[c(d(t.received_m_count||0),1)])),_:2},1024)):(_(),l(C,{key:1,class:"uni-input",type:"number",modelValue:t.m_c_count,"onUpdate:modelValue":a=>t.m_c_count=a,onBlur:e=>a.dataChange(t),"auto-blur":"true"},null,8,["modelValue","onUpdate:modelValue","onBlur"]))])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1}),i(b,{class:"account"},{default:o((()=>[i(I,null,{default:o((()=>[c("订货数量"+d(a.m_count)+"箱，实收数量"+d(a.m_c_count)+"箱",1)])),_:1}),r(i(L,{type:"primary",size:"mini",onClick:a.reveice},{default:o((()=>[c(" 确认验收 ")])),_:1},8,["onClick"]),[[f,1!=a.detailData.received]])])),_:1})])),_:1})}],["__scopeId","data-v-63d27c68"]]);export{I as default};
