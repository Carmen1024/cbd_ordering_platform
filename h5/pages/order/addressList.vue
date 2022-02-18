<template>
	<view class="address-container">
		<view class="addressTitle">
			<text>请选择收货地址</text>
			<span class="right icon iconfont icon-close" @click="close"></span>
		</view>
		<view  class="addressList">
			<view class="addressItem" v-for="(item,index) in addrList" @click="change(item)">
				<view class="title">
					<view class="left">
						<text class="name">{{item.s_a_name}}</text>
						<text class="phone">{{item.s_a_phone}}</text>
						<text class="default" v-show="item.s_a_default">默认</text>
					</view>
				</view>
				<view class="content">
					{{item.s_a_province}} {{item.s_a_area}} {{item.s_a_city}} {{item.s_a_detail}}
				</view>
			</view>
		</view>
	</view>
	<view class="uni-mask" @click="close"></view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressQuery } from '@/api/home'
	import { setStorageSync } from '@/utils/token'

	export default defineComponent({
		props:{
			addrList : {
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
			
			change(item){
				this.$emit("change",item)
			},
			close(){
				this.$emit("close")
			}
		}
	})
</script>

<style lang="scss" scoped>
	.address-container{
		// position: relative;
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		height: 60vh;
		z-index:1000;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
		overflow: hidden;
		animation: myfirst .5s;
		@keyframes myfirst
		{
		    from {bottom:-10vh}
		    to {bottom:0}
		}
		.addressTitle{
			padding:10rpx 20rpx;
			height: 40rpx;
			line-height: 40rpx;
			background-color: #f9cdad;
			border-radius: 10rpx 10rpx 0 0;
			color:#fff;
			text:first-child{
				font-weight: bold;
			}
			text:last-child{
				font-size: 20rpx;
			}
		}
		.addressList{
			height:calc(100% - 40rpx);
			overflow-y: auto;
			.addressItem{
				position: relative;
				margin: 20rpx;
				padding:20rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				.title{
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					padding-bottom: 10rpx;
					margin-bottom: 10rpx;
					border-bottom: solid 1px #ddd;
					font-weight: bold;
					.iconfont{
						color:$uni-color-primary
					}
					.left{
						text{
							margin-right: 10rpx;
						}
						.name{
							font-weight: bold;
						}
						.phone{
							color: #999;
							font-size: 20rpx;
						}
					}
					.default{
						color: $uni-color-primary;
						border: solid 1px $uni-color-primary;
						border-radius: 10rpx;
						padding:3rpx 5rpx;
						font-size: 20rpx;
					}
					.right{
						.default{
							margin-right: 10rpx;
							color: $uni-color-warning;
							border-color: $uni-color-warning;
						}
					}
				}
				.content{
					word-wrap: break-word;
					word-break: break-all;
				}
			}
		}
		.addressFoot{
			position: fixed;
			bottom: 0;
			width: 100%;
			button{
				margin:20rpx;
			}
		}
	}
</style>
