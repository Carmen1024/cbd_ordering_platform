<template>
	<view class="cart-container">
		<view class="account">
			<view class="left" @click="toCart">
				<span class="icon iconfont icon-goumai"></span>
				<text v-show="total > 0">
					{{total}}
				</text>
			</view>
			<view class="right">
				<button type="primary" size="mini" @click="toCart">加入购物车</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { cartCountAndPrice } from '@/api/subscribe'
	export default defineComponent({
		props:{
			total : {
				type: Number,
				default() {
					return 0
				}
			},
		},
		setup(props) {
			
			return {
				
			}
		},	
		methods:{
			toCart(){
				uni.switchTab({
				    url: '/pages/tabBar/shoppingCart/shoppingCart'
				});
			}
		}
	})
</script>
<style lang="scss" scoped>
	.cart-container{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #f5f5f5;
		.account{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			.left{
				margin-left: 10rpx;
				position: relative;
				height: 100%;
				.iconfont{
					border-radius: 50%;
					padding:10rpx;
					font-size: 40rpx;
					color:#fff;
					background-color: $uni-color-primary;
				}
				text{
					position: absolute;
					text-align: center;
					// display: flex;
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					font-size: 17rpx;
					top: 0rpx;
					right: -20rpx;
					border-radius: 50%;
					color:#fff;
					background-color: #fc758e;
				}
			}
			.right{
				display: flex;
				align-items: center;
				height: 100%;
				.priceTotal{
					font-weight: bold;
				}
				button{
					margin: 20rpx 20rpx;
					border-radius: 20rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 30rpx;
				}
			}
		}
	}
</style>
