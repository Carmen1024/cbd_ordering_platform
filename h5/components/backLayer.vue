<template>
	<view class="back-container">
		<view v-show="back.backUrl!=''" @click="toUrl(back.backUrl)">
			<span class="icon iconfont icon-back"></span>
		</view>
		<view class="title">
			{{back.title}}
		</view>
		<view v-show="back.homeUrl!=''" @click="toUrl(back.homeUrl)">
			<text v-if="back.homeText!=''">{{back.homeText}}</text>
			<span v-else :class="`icon iconfont icon-${back.homeIconClass || 'home'}`"></span>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { switchData } from './enum'
	export default defineComponent({
		props:{
			back : {
				type: Object,
				default(){
					return {
						title:"",
						backUrl:"",
						homeUrl:"",
						homeText:""
					}
				}
			},
		},
		setup(props) {
			console.log(props)
			const toUrl = linkUrl =>{
				const select = switchData.find(item => item.label.indexOf(linkUrl)>-1)
				console.log(linkUrl)
				if(select){
					uni.switchTab({ url:linkUrl })
				}else{
					uni.navigateTo({ url:linkUrl })
				}
			}
			
			return {
				toUrl
			}
		},
		methods:{
			
		}
	})
</script>

<style lang="scss">
	.back-container{
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f5f5f5;
		view{
			padding:10rpx;
		}
		.iconfont{
			font-size: 40rpx;
		}
		.title{
			font-weight: bold;
			font-size: 32rpx;
		}
	}
</style>
