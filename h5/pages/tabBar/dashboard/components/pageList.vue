<template>
	<view class="card-container">
		<view v-for="(item,index) in listData" class="card-container-item">
			<text class="type"><span :class="`icon iconfont icon-${item.value}`"></span></text>
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
				{value:"expense",label:"费用单",desc:"描述文字"},
				{value:"expenseType",label:"待付款",desc:"描述文字"},
				{value:"acceptance",label:"验收",desc:"描述文字"},
				{value:"refundBill",label:"退货",desc:"描述文字"},
				{value:"scrap",label:"报废",desc:"描述文字"},
				{value:"orderFile",label:"推荐订货",desc:"描述文字"},
				{value:"inventory",label:"库存盘点",desc:"描述文字"},
				{value:"report",label:"统计报表",desc:"描述文字"},
				{value:"chargeManagement",label:"交易查询",desc:"描述文字"}
			]
			return {
				listData
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
				color: $uni-color-primary;
				.iconfont{
					font-size: 50rpx;	
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
