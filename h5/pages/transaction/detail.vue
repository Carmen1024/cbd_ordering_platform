<template>
	<view class="transaction-container">
		<view class="transactionItem">
			<view class="msg">
				<view class="detail">
					<text>订单号：{{transactionData.tr_order_num}}</text>
				</view>
				<view class="detail">
					<text>交易金额：{{transactionData.tr_tx_amt}}</text>
				</view>
				<view class="detail">
					<text>付款人：{{transactionData.tr_payer_name}}</text>
				</view>
				<view class="detail">
					<text>付款账户：{{transactionData.tr_payer_acc_num}} </text>
				</view>
				<view class="detail">
					<text>支付流水：{{transactionData.tr_bank_sn}} </text>
				</view>
				<view class="detail">
					<text>交易时间：{{transactionData.tr_tx_time}} </text>
				</view>
				<view class="detail">
					<text>订单ID：{{transactionData._id}} </text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { getStorageSync } from '@/utils/token'
	export default defineComponent({
		onShow: function() {
			this.getTransactionData();
		},
		setup() {
			
			const transactionData = ref([])

			const getTransactionData=()=>{
				transactionData.value = JSON.parse(getStorageSync("transaction"))
			}
			
			
			return {
				transactionData,
				getTransactionData
			}
		},
		methods: {
			
		}
	})
</script>

<style lang="scss" scoped>
	.transaction-container{
		width: 100%;
		height: calc(100vh - 50px);
		overflow-x: hidden;
		overflow-y: auto;
		.transactionItem{
			margin: 20rpx;
			width: calc(100% - 80rpx);
			padding:20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			background: #fff;
			border-radius: 10rpx;	
			.msg{
				.detail{
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 26rpx;
					margin-top: 10rpx;
					text{
						margin-left:10rpx;
						color:#666;
					}
				}
				
			}
		}


	}
</style>
