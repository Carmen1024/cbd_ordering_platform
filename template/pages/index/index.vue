<template>
	<view class="layout-container">
		<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
			<!-- <button type="default">跳转tab页面</button> -->
			<image class="logo" src="/static/logo.jpg"></image>
			<text class="text-title">{{title}}</text>
			<text class="text-area">{{tip}}</text>
		</navigator>

	</view>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	export default defineComponent({
		setup() {
			const title = '小茶订货'
			const tip="让订货更轻松，让库存理精准"
			return {
				title,
				tip
			}
		},
		methods: {
		
		}
	})
</script>

<style lang="scss">
	uni-navigator{
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

	
</style>
