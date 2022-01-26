import{a as e}from"./index.2c3ecc05.js";import{_ as t,a as l,c as a,o as i,d as n,w as s,e as u,f as d,t as c,k as r,al as m}from"./vendor.762bb174.js";function o(e){const t=new Date;let l=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return"start"===e?l-=10:"end"===e&&(l+=10),a=a>9?a:"0"+a,i=i>9?i:"0"+i,`${l}-${a}-${i}`}var f=t({data:()=>({title:"picker",array:[{name:"中国"},{name:"美国"},{name:"巴西"},{name:"日本"}],index:0,multiArray:[["亚洲","欧洲"],["中国","日本"],["北京","上海","广州"]],multiIndex:[0,0,0],date:o({format:!0}),startDate:o("start"),endDate:o("end"),time:"12:01"}),methods:{bindPickerChange:function(e){console.log("picker发送选择改变，携带值为："+e.detail.value),this.index=e.detail.value},bindMultiPickerColumnChange:function(e){switch(console.log("修改的列为："+e.detail.column+"，值为："+e.detail.value),this.multiIndex[e.detail.column]=e.detail.value,e.detail.column){case 0:switch(this.multiIndex[0]){case 0:this.multiArray[1]=["中国","日本"],this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[1]=["英国","法国"],this.multiArray[2]=["伦敦","曼彻斯特"]}this.multiIndex.splice(1,1,0),this.multiIndex.splice(2,1,0);break;case 1:switch(this.multiIndex[0]){case 0:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["北京","上海","广州"];break;case 1:this.multiArray[2]=["东京","北海道"]}break;case 1:switch(this.multiIndex[1]){case 0:this.multiArray[2]=["伦敦","曼彻斯特"];break;case 1:this.multiArray[2]=["巴黎","马赛"]}}this.multiIndex.splice(2,1,0)}this.$forceUpdate()},bindDateChange:function(e){this.date=e.detail.value},bindTimeChange:function(e){this.time=e.detail.value}}},[["render",function(t,o,f,h,_,g){const p=l(a("page-head"),e),b=r,x=m;return i(),n(b,null,{default:s((()=>[u(p,{title:_.title},null,8,["title"]),u(b,{class:"uni-title uni-common-pl"},{default:s((()=>[d("普通选择器")])),_:1}),u(b,{class:"uni-list"},{default:s((()=>[u(b,{class:"uni-list-cell"},{default:s((()=>[u(b,{class:"uni-list-cell-left"},{default:s((()=>[d(" 当前选择 ")])),_:1}),u(b,{class:"uni-list-cell-db"},{default:s((()=>[u(x,{onChange:g.bindPickerChange,value:_.index,range:_.array,"range-key":"name"},{default:s((()=>[u(b,{class:"uni-input"},{default:s((()=>[d(c(_.array[_.index].name),1)])),_:1})])),_:1},8,["onChange","value","range"])])),_:1})])),_:1})])),_:1}),u(b,{class:"uni-title uni-common-pl"},{default:s((()=>[d("多列选择器")])),_:1}),u(b,{class:"uni-list"},{default:s((()=>[u(b,{class:"uni-list-cell"},{default:s((()=>[u(b,{class:"uni-list-cell-left"},{default:s((()=>[d(" 当前选择 ")])),_:1}),u(b,{class:"uni-list-cell-db"},{default:s((()=>[u(x,{mode:"multiSelector",onColumnchange:g.bindMultiPickerColumnChange,value:_.multiIndex,range:_.multiArray},{default:s((()=>[u(b,{class:"uni-input"},{default:s((()=>[d(c(_.multiArray[0][_.multiIndex[0]])+"，"+c(_.multiArray[1][_.multiIndex[1]])+"，"+c(_.multiArray[2][_.multiIndex[2]]),1)])),_:1})])),_:1},8,["onColumnchange","value","range"])])),_:1})])),_:1})])),_:1}),u(b,{class:"uni-title uni-common-pl"},{default:s((()=>[d("时间选择器")])),_:1}),u(b,{class:"uni-list"},{default:s((()=>[u(b,{class:"uni-list-cell"},{default:s((()=>[u(b,{class:"uni-list-cell-left"},{default:s((()=>[d(" 当前选择 ")])),_:1}),u(b,{class:"uni-list-cell-db"},{default:s((()=>[u(x,{mode:"time",value:_.time,start:"09:01",end:"21:01",onChange:g.bindTimeChange},{default:s((()=>[u(b,{class:"uni-input"},{default:s((()=>[d(c(_.time),1)])),_:1})])),_:1},8,["value","onChange"])])),_:1})])),_:1})])),_:1}),u(b,{class:"uni-picker-tips"},{default:s((()=>[d(" 注：选择 09:01 ~ 21:01 之间的时间, 不在区间内不能选中 ")])),_:1}),u(b,{class:"uni-title uni-common-pl"},{default:s((()=>[d("日期选择器")])),_:1}),u(b,{class:"uni-list"},{default:s((()=>[u(b,{class:"uni-list-cell"},{default:s((()=>[u(b,{class:"uni-list-cell-left"},{default:s((()=>[d(" 当前选择 ")])),_:1}),u(b,{class:"uni-list-cell-db"},{default:s((()=>[u(x,{mode:"date",value:_.date,start:_.startDate,end:_.endDate,onChange:g.bindDateChange},{default:s((()=>[u(b,{class:"uni-input"},{default:s((()=>[d(c(_.date),1)])),_:1})])),_:1},8,["value","start","end","onChange"])])),_:1})])),_:1})])),_:1}),u(b,{class:"uni-picker-tips"},{default:s((()=>[d(" 注：选择当前时间 ±10 年之间的时间, 不在区间内不能选中 ")])),_:1})])),_:1})}],["__scopeId","data-v-0b4fe710"]]);export{f as default};
