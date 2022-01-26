<template>
	<view class="home-container">
		<view class="information">
			<image class="bg" src="/static/images/bg.png"></image>
			<view class="personalInformation">
				<span class="icon iconfont icon-basic setUser"></span>
				<view class="user">
					<image class="logo" src="/static/logo.jpg"></image>
					<view>
						<view class="username">张三</view>
						<!-- <view class="userid">id:12121212</view> -->
					</view>
				</view>
				<view class="store">
					<view class="left">
						<text>茶百道成都双楠店</text>
					</view>
					<button type="primary" size="mini">更换门店</button>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="account-item">
				<text class="left">我的收货地址</text>
				<text class="right">管理我的地址<span class="icon iconfont icon-right"></span></text>
			</view>
			<view class="account-item">
				<text class="left">发票抬头管理</text>
				<text class="right">管理增票资质<span class="icon iconfont icon-right"></span></text>
			</view>
		</view>
		<view class="account">
			<view class="account-item">
				<text class="left">账户余额</text>
				<text class="right">1000元<span class="icon iconfont icon-right"></span></text>
			</view>
			<view class="account-item">
				<text class="left">优惠券</text>
				<text class="right">5张可使用<span class="icon iconfont icon-right"></span></text>
			</view>
			<view class="account-item">
				<text class="left">意见反馈</text>
				<text class="right">期待您的建议<span class="icon iconfont icon-right"></span></text>
			</view>
			<view class="account-item">
				<text class="left">版本号：v1.0.0</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	export default defineComponent({
		setup() {
			const descData = ref([
				{value:"",label:"我的订单"},
				{value:"",label:"我的订单"},
			])
			return {
				
			}
		}
	})
</script>

<style lang="scss" scoped>
	.home-container{
		.information{
			position: relative;
			overflow: hidden;
			.bg{
				background-color: rgba($uni-color-primary,.5);
				position: absolute;
				width: 100%;
				height: 300rpx;
				top:0;
			}
			.personalInformation{
				position: relative;
				margin: 260rpx 20rpx 0 20rpx;
				padding:20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				background: #fff;
				border-radius: 10rpx;
				.setUser{
					position: absolute;
					top:20rpx;
					right: 20rpx;
					font-size: 40rpx;
				}
				.user{
					height: 100rpx;
					display: flex;
					align-items: center;
					image{
						margin-right:30rpx;
						width: 100rpx;
						height: 100rpx;
						border-radius: 50%;
					}
					.username{
						font-weight: bold;
						font-size: 36rpx;
					}
					// .userid{
					// 	color:#333;
					// 	font-size: 20rpx;
					// }
				}
				.store{
					text-align: left;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					border-top: solid 1px #ddd;
					margin-top: 10rpx;
					padding-top:20rpx;
					line-height: 32rpx;
					.left{
						color:#333;
						font-size: 30rpx;
						font-weight: bold;
						.iconfont{
							margin-right: 5rpx;
						}
					}
				}
			}
		}
		.account{
			margin: 10px;
			background-color: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			overflow: hidden;
			&-item{
				margin:0 20rpx;
				padding:20rpx 0;
				height: 30rpx;
				border-bottom: solid 1px #ddd;
				.left{
					color:#333;
					font-size: 28rpx;
				}
				.right{
					float: right;
					font-size: 24rpx;
					color: #999;
					.iconfont{
						margin-left: 5rpx;
						font-size: 20rpx;
					}
				}
				&:last-child{
					border: none;
				}
			}
		}
	}
</style>
