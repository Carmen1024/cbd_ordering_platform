<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<image src="../../../../static/images/swipe1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../../../static/images/swipe2.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>
<script lang="ts">
	import { defineComponent } from "vue"
	export default defineComponent({
		setup() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500
			}
		},
	})
</script>

<style lang="scss" scoped>
	.uni-margin-wrap {
		width:690rpx;
		width: 100%;;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt{
		margin-top:60rpx;
		position:relative;
	}

	.info {
		position: absolute;
		right:20rpx;
	}

    .uni-padding-wrap {
        width:550rpx;
        padding:0 100rpx;
    }
	image{
		width: 100%;
	}
</style>
