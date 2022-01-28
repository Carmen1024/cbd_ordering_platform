<template>
	<view class="cart-container">
		<view class="account">
			<view class="left">
				<span class="icon iconfont icon-goumai"></span>
				<text v-if="countAndPrice.total && countAndPrice.total>0">
					{{countAndPrice.total}}
				</text>
			</view>
			<view class="right">
				<view v-if="countAndPrice.price && countAndPrice.price>0">
					<text>总计:</text>
					<text class="priceTotal"><span class="icon iconfont icon-jine"></span>{{countAndPrice.price}}</text>
				</view>
				<button type="primary" size="mini" class="toCart">去购物车</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { cartCountAndPrice } from '@/api/subscribe'
	export default defineComponent({
		props:{
			countAndPrice : {
				type: Object,
				default() {
					return {
						total:0,
						price:0
					}
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
		position: fixed;
		bottom: 100rpx;
		left: 0;
		width: 100%;
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
					font-size: 16rpx;
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
				.mini-btn{
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
