<template>
	<view class="commodityList">
		<view class="commodityItem" v-for="(item,index) in commodityList">
			<image :src="item.m_pic || '/static/logo.jpg'"></image>
			<view class="detail">
				<view class="name">{{item.o_m_name}}</view>
				<view class="unit">{{item.m_package}}</view>
				<view class="price">
					<text class="total">
						<span class="icon iconfont icon-jine"></span>
						{{item.m_price || 10}}
					</text>
					<view class="numHandle">
						<text>{{item.o_m_count}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressQuery } from '@/api/home'
	import { setStorageSync } from '@/utils/token'

	export default defineComponent({
		props:{
			commodityList : {
				type: Array,
				default() {
					return []
				}
			},
		},
		setup(props) {
			
			return {
			}
		},
		methods: {
			
			
		}
	})
</script>

<style lang="scss" scoped>
	.commodityList{
		margin: 20rpx;
		padding:0 20rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
		overflow: hidden;
		.commodityItem{
			margin: 20rpx 0;
			// width: calc(100% - 80rpx);
			display: flex;
			align-items:center;
			image{
				border-radius: 20rpx;
				margin: 0 10rpx;
				width: 150rpx;
				height: 150rpx;
			}
			.detail{
				width: calc(100% - 200rpx);
				height: 150rpx;
				line-height: 50rpx;
				font-size: 26rpx;
				.name{
					font-weight: bold;
				}
				.unit{
					color:#666;
					font-size: 20rpx;
				}
				.price{
					width: 100%;
					.total{
						color:#005bac;
						font-size: 30rpx;
						.iconfont{
							font-size:18rpx
						}
					}
					.numHandle{
						display: flex;
						float: right;
						// width: 200rpx;
						.iconfont{
							padding:0 10rpx;
							color:#999;
						}
					}
				}
			}
		}
	}
</style>
