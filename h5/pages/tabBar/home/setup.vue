<template>
	<back-layer :back="back"  />
	<view class="home-container">
		<view class="information">
			<view class="personalInformation">
				<view class="user">
					<image class="logo" src="/static/logo.jpg"></image>
					<view>
						<view class="username">{{userName}}</view>
						<!-- <view class="userid">id:12121212</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="account">
<!-- 			<view class="account-item">
				<navigator :url="'/pages/address/address'">
					<text class="left">我的收货地址</text>
					<text class="right">
						管理我的地址<span class="icon iconfont icon-dituguanli"></span>
					</text>
				</navigator>
			</view> -->
			<view class="account-item">
				<text class="left">手机号</text>
				<text class="right" @click="call">
					{{mine.store_user_phone || userName}}<span class="icon iconfont icon-dianhua"></span>
				</text>
			</view>
			<view class="account-item">
				<text class="left">密码</text>
				<navigator class="right" url="/pages/login/resetPassword">
					去修改<span class="icon iconfont icon-bianji"></span>
				</navigator>
			</view>
		</view>
		<button class="submit" type="primary" @click="out">退出登录</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { getStorageSync,removeStorageSync } from '@/utils/token'
	import { mineQuery } from "@/api/home"
	import { logout } from '@/api/login'
	import { linkStore } from '@/utils/utils'
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		components:{
			BackLayer
		},
		onShow: function() {
			this.getMineQuery();
		},
		setup() {
			const back=reactive({
				title:"设置",
				backUrl:"/pages/tabBar/home/home",
			})
			const { s_id,r_g_id } = linkStore()
			const userName = ref("")
			const mine = ref({})
			const descData = ref([
				{value:"",label:"我的订单"},
				{value:"",label:"我的订单"},
			])
			userName.value = getStorageSync("userName") || "张三"
			
			const getMineQuery = ()=>{
				const token = getStorageSync("token")
				mineQuery({ s_id,token }).then(res=>{
					mine.value = res.data
					userName.value = res.data.store_user_name || res.data.store_user_phone || getStorageSync("userName")
					
				})
			}
			const out = ()=>{
				logout().then(res=>{
					removeStorageSync("token")
					uni.navigateTo({
					    url: '/pages/login/login'
					})
				})
			}
			const call=()=>{
				uni.makePhoneCall({
				    phoneNumber: mine.value.store_user_phone || getStorageSync("userName")
				});
			}
			
			return {
				userName,
				mine,
				getMineQuery,
				out,
				call,
				back
			}
		}
	})
</script>

<style lang="scss" scoped>
	.home-container{
		.information{
			position: relative;
			overflow: hidden;
			.personalInformation{
				margin: 20rpx;
				padding:20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				background: #fff;
				border-radius: 10rpx;
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
			margin: 20rpx;
			margin-top:0;
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
		button{
			margin: 20rpx;
			border-radius: 50rpx;
		}
	}
</style>
