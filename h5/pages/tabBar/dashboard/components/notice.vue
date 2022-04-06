<template>
	<view class="notice-container">
		<view class="title">
			<image class="logo" src="/static/logo.jpg"></image>
			<text>{{my_store.store_name}}</text>
		</view>
		<view class="main" @click="toNoticePage">
			<text class="left">
				<span class="icon iconfont icon-tongzhi"></span> 草莓预售通知
			</text>
			<text class="right">
				<span class="icon iconfont icon-right"></span>
			</text>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { getStorageSync } from '@/utils/token'
	import { linkStore } from '@/utils/utils'
	export default defineComponent({
		onShow() {
			this.my_store = linkStore()
		},
		setup() {
			let my_store = ref({})
			const toNoticePage=(item)=>{
				uni.navigateTo({
				    url: '/pages/notice/notice'
				})
			}
			return {
				toNoticePage,
				my_store
			}
		}
	})
</script>

<style lang="scss" scoped>
	.notice-container{
		.title{
			padding:20rpx;
			height: 60rpx;
			line-height: 60rpx;
			// background: #fff;
			// border-radius: 20rpx 20rpx 0 0;
			display: flex;
			font-size: 38rpx;
			font-weight: bold;
			.logo{
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				margin-right: 10rpx;
			}
		}
		.main{
			margin:0 20rpx 20rpx 20rpx;
			padding:20rpx;
			height: 60rpx;
			line-height: 60rpx;
			background: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			.left{
				float: left;
			}
			.right{
				float: right;
				color:#999;
				font-size: 24rpx;
				.iconfont{
					font-size: 24rpx;
				}
				.icon-right{
					font-size: 22rpx;
				}
			}
		}
		
	}
</style>
