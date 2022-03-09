<template>
	<button type="primary" size="mini" @click="toPay">去付款</button>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { orderPay,payBack,payNotify } from '@/api/pay'
	import { setStorageSync } from '@/utils/token'
	export default defineComponent({
		props:{
			order : {
				type: Object,
				default(){
					return {}
				}
			},
			orderType : {
				type: String,
				default(){
					return "order"
				}
			}
		},
		setup(props) {
			
			return {
				
			}
		},
		methods:{
			toPay(){
				//订单号
				const code = this.orderType=="order" ? this.order.o_code : this.order.o_p_code
				const params={
					"ORDERID": code,
					// "PAYMENT": this.order.o_p_real_pay_money,
				}
				orderPay(params).then(res=>{ 
					setStorageSync('payOrder',JSON.stringify(this.order))
					setStorageSync('orderType',this.orderType)
					this.pay(res.data)
				})
			},
			pay(data){
				// 模拟form表单提交
				let form = document.createElement("form")
				document.body.appendChild(form)
				for(let i in data){
					// const v = i=="PAYMENT" ? "0.01" : data[i]
					const n = this.generateHideElement(i, data[i])
					form.appendChild(n);
				}
				form.method = "post";
				form.action = "https://ibsbjstar.ccb.com.cn/CCBIS/ccbMain"
				form.submit();
			},
			generateHideElement(name, value) {
				 let tempInput = document.createElement("input");
				 tempInput.type = "hidden";
				 tempInput.name = name;
				 tempInput.value = value;
				 return tempInput;
			 },
		}
	})
</script>
