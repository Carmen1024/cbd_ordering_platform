<template>
	<view class="index-container">
		<view class="main">
			<!-- <button type="default">跳转tab页面</button> -->
			<image class="logo" src="/static/logo.jpg"></image>
			<text class="text-title">{{title}}</text>
			<text class="text-area">{{tip}}</text>
		</view>
		<view class="toPages" @click="toPages">
			<text class="time">{{time}}</text>
			<text>跳过</text>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent, ref, reactive } from 'vue'
	import { getStorageSync } from '@/utils/token'
	export default defineComponent({
		setup() {
			const title = '茶茶订货'
			const tip="让订货更轻松，让库存理精准"
			const loading = ref(true)
			const time = ref(5)
			const setTime=()=>{
				if(time.value>=1){
					setTimeout(()=>{
						time.value--
						setTime();
					},1000)
				}else{
					loading.value && toPages()
				}
			}
			setTime()
			const toPages=()=>{
				loading.value = false
				if(getStorageSync('token')){
					uni.switchTab({
					    url: '/pages/tabBar/dashboard/dashboard'
					});
				}else{
					uni.navigateTo({
					    url: '/pages/login/login'
					})
				}

			}
			return {
				title,
				tip,
				toPages,
				time
			}
		},
		methods: {
		
		}
	})
</script>

<style lang="scss">
	.index-container{
		.toPages{
			position: fixed;
			top:20rpx;
			right: 20rpx;
			width: 200rpx;
			height: 80rpx;
			line-height: 80rpx;
			border:solid 1px rgba(0,0,0,.1);
			border-radius:50rpx;
			display: flex;
			text{
				width: 100rpx;
				text-align: center;
			}
			.time{
				border-right:solid 1px rgba(0,0,0,.1);
			}
		}
		.main{
			height: 100vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.logo {
				height: 200rpx;
				width: 200rpx;
				border-radius: 50%;
				// margin-top: 200rpx;
				margin-left: auto;
				margin-right: auto;
				margin-bottom: 50rpx;
			}
			
			.text-title {
				font-size: 36rpx;
				font-weight: bold;
				color: #333;
			}
			.text-area {
				font-size: 30rpx;
				color: #8f8f94;
				margin-top: 20rpx;
			}
		}
	}
	
</style>
