<template>
	<view class="card-container">
		<view v-for="(item,index) in listData" class="card-container-item" @click="toPage(item)">
			<view class="type">
				<span :class="`icon iconfont icon-${item.value}`"></span>
			</view>
			<text class="title">{{item.label}}</text>
			<!-- <text class="desc">{{item.desc}}</text> -->
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	// import { listData } from "./../enum"
	export default defineComponent({
		setup() {
			
			const listData = [
				{value:"expense",label:"费用单",navigate:"/pages/feeBill/feeBill"},
				{value:"chargeManagement",label:"账单",navigate:"/pages/transaction/transaction"},
				{value:"basic",label:"设置",navigate:"/pages/tabBar/home/setup"},
				// {value:"inventory",label:"资产",navigate:""},
				{value:"expenseType",label:"待付款",switch:"/pages/tabBar/order/order?tabIndex=2"},
				{value:"acceptance",label:"待验收",switch:"/pages/tabBar/order/order?tabIndex=4"},
				// navigate:"/pages/tabBar/order/returnList"
				{value:"refundBill",label:"售后",switch:"/pages/tabBar/order/order?tabIndex=5"},
			]
			const toPage=(item)=>{
				item.navigate && uni.navigateTo({
				    url: item.navigate,
				})
				item.switch && uni.reLaunch({
				    url: item.switch
				});
			}
			return {
				listData,
				toPage
			};
		}
	})
</script>

<style lang="scss">
	.card-container{
		margin: 20rpx;
		padding:20rpx 10rpx;
		display: flex;
		flex-wrap: wrap;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
		border-radius: 10rpx;
		background: #fff;
		&-item{
			width: calc(100% / 3 - 60rpx);
			padding:20rpx;
			margin: 10rpx;
			text-align: center;
			text{
				display: block;
			}
			.type{
				// color: $uni-color-primary;
				margin-bottom: 10rpx;
				height: 80rpx;
				line-height: 80rpx;
				// overflow: hidden;
				.iconfont{
					font-size: 50rpx;
					color:#fff;
					background: $uni-color-primary;
					padding:15rpx;
					border-radius: 50%;
				}
			}
			.title{
				margin-top: 10rpx;
				font-weight: bold;
				color:#333;
			}
			.desc{
				color: #999;
				font-size: 12rpx;
			}
		}
	}
</style>
