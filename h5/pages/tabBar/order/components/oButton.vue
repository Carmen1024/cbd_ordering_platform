<template>
	<view class="button-container">
<!-- 		<view v-show="[0,3,4,5].includes(order.o_s_status)">
			<button size="mini" @click="reBuy">再次购买</button>
		</view> -->
		<view v-show="[0].includes(order.o_s_status)">
			<button size="mini" @click="reBuy">确认</button>
		</view>
		<view v-show="[1,2].includes(order.o_s_status)">
			<button class="uni-button" size="mini" @click="cancel">取消订单</button>
		</view>
		<view v-show="[1].includes(order.o_s_status)">
			<!-- 付款 -->
			<pay-button :order="order" />
		</view>
		<view v-show="[3,4].includes(order.o_s_status)">
			<button type="primary" size="mini" @click="receive">去验收</button>
		</view>
		<!-- orderRefund -->
		<view v-show="[5].includes(order.o_s_status)">
			<button size="mini" @click="refund">去退货</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { setStorageSync } from '@/utils/token'
	import { statusData } from './enum'
	import { orderPay,payBack,payNotify } from '@/api/pay'
	import { orderCancel,orderRefund } from '@/api/order'
	import PayButton from "@/pages/pay/payButton.vue"
	export default defineComponent({
		components:{
			PayButton
		},
		props:{
			order : {
				type: Object,
				default(){
					return {}
				}
			},
		},
		setup(props) {
			
			return {
				
			}
		},
		methods:{
			receive(){
				uni.navigateTo({
				    url: '/pages/receive/list?o_s_id='+this.order._id
				})
			},
			refund(){
				uni.navigateTo({
				    url: '/pages/tabBar/order/refund?_id='+this.order._id
				})
				
			},
			 // 重新购买
			 reBuy(){
				 uni.switchTab({
				     url: '/pages/tabBar/order/order'
				 })
			 },
			 // 取消订单
			 cancel(){
				 const _this = this
				 const {o_code} = this.order
				 uni.showModal({
				 	content: '是否确认取消',
				 	showCancel: true,
				 	success: function (res) {
				 		if (res.confirm) {
				 			orderCancel({ o_code }).then(res=>{		 
								uni.showToast({
									title: "订单已取消",
									duration: 2000,
									icon:"none"
								})
								_this.$emit("refresh")
				 			})
				 		}
				 	}
				 })
			 },
		}
	})
</script>

<style lang="scss">
	.button-container{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		// width: 200rpx;
		.iconfont{
			padding:0 10rpx;
			color:#999;
		}
	}
</style>
