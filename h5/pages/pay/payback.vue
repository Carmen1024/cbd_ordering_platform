<template>
	<view class="payBack-container">
		<view v-if="urlParams.SUCCESS=='Y'">
			支付成功，{{time}}秒后跳转回订单
		</view>
		<view v-else>
			<view>支付失败，原因是：{{urlParams.REMARK1}}</view>
			<view>{{time}}秒后跳转回订单</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { getUrlParams } from '@/utils/utils'
	import { getStorageSync } from '@/utils/token'
	export default defineComponent({
		setup() {
			
			const urlParams = getUrlParams()
			const time = ref(3) 
			// 拼接参数
			console.log(urlParams);
						
			const toOrderDetail=(item)=>{
				const payOrder = JSON.parse(getStorageSync("payOrder"))
				const orderType = getStorageSync("orderType")
				if(orderType=="order"){
					//订单号一致
					let url = "/pages/tabBar/order/order"
					if(urlParams.ORDERID == payOrder.o_code){
						url = '/pages/tabBar/order/detail?_id=' + payOrder._id
						uni.navigateTo({ url })
					}else{
						uni.switchTab({ url })
					}
				}else if(orderType=="bill"){
					//订单号一致
					let url = "/pages/feeBill/feeBill"
					if(urlParams.ORDERID == payOrder.o_p_code){
						url = '/pages/feeBill/detail?o_s_id=' + payOrder._id
						uni.navigateTo({ url })
					}
				}


			}
			const setTime=()=>{
				setTimeout(()=>{
					time.value-- > 1 ? setTime() : toOrderDetail()
				},1000)
			}
			setTime()
			
			return {
				urlParams,
				time
			};
		}
	})
</script>

<style lang="scss" scoped>
	.payBack-container{
		width: 100%;
		height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
