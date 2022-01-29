<template>
	<view class="order-container">
		<view class="peiSong">
			<text>订单未支付，无物流信息</text>
		</view>
		<view class="materialList">
			<view class="materialItem" v-for="(item,index) in orderDetailData.materials">
				<image :src="item.o_m_pic || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.o_m_name || '物料名称'}}</view>
					<view class="unit">500g*30袋/箱</view>
					<view class="price">
						<text class="total">
							<span class="icon iconfont icon-jine"></span>
							{{item.o_m_price}}
						</text>
						<view class="numHandle">
							<text>{{item.o_m_count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="other">
			<view class="title">订单信息</view>
			<view class="other-item">
				<view>
					<text class="left">订单号:</text>
					<text class="right">{{o_id}}</text>
				</view>
			</view>
			<view class="other-item">
				<text class="left">订单状态:</text>
				<text class="right">未支付</text>
			</view>
			<view class="other-item">
				<text class="left">优惠券</text>
				<view class="right" >
					<span class="icon iconfont icon-jine"></span>1000<span class="icon iconfont icon-right"></span>
				</view>
			</view>
			<view class="other-item">
				<text class="left">账户余额</text>
				<view class="right" >
					<span class="icon iconfont icon-jine"></span>1000<span class="icon iconfont icon-right"></span>
				</view>
			</view>
			<view class="other-item">
				<text class="left">商品总额</text>
				<view class="right" >
					<span class="icon iconfont icon-jine"></span>1000<span class="icon iconfont icon-right"></span>
				</view>
			</view>
			<view class="other-item">
				<text class="left">运费</text>
				<text class="right">
					<span class="icon iconfont icon-jine"></span>{{orderDetailData.o_freight_money || 0}}
					<span class="icon iconfont icon-right"></span>
				</text>
			</view>
			<view class="other-item">
				<text class="left">商品优惠</text>
				<text class="right">
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.discount || 0}}
					<span class="icon iconfont icon-right"></span>
				</text>
			</view>
			
		</view>
		<view class="other">
			<view class="title">配送信息</view>
			<view class="other-item">
				<view>
					<text class="left">配送方式:</text>
					<text class="right">{{orderDetailData.o_recipient_contact}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">运费:</text>
					<text class="right">0</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">送货时间:</text>
					<text class="right">{{orderDetailData.o_recipient}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">物流状态:</text>
					<text class="right">{{orderDetailData.o_recipient}}</text>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">收货信息</view>
			<view class="other-item">
				<view>
					<text class="left">收货人:</text>
					<text class="right">{{orderDetailData.o_recipient_contact}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">地址:</text>
					<text class="right">成都市高新区名都路166号</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">手机号:</text>
					<text class="right">{{orderDetailData.o_recipient}}</text>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="right">
				<button class="uni-button" type="primary" size="mini">去付款</button>
				<button class="uni-button" size="mini">再来一单</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { orderDetail } from '@/api/order'
	import { statusData } from './enum'
	export default defineComponent({
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.o_id); //打印出上个页面传递的参数。
		},
		setup() {
			const o_id = "fe19ecc0ddcd48dd94c25ad93e35b540"
			const orderDetailData = ref({})
			const getOrderDetail=()=>{
				orderDetail({o_id}).then(res=>{
					orderDetailData.value = res.data
				})
			}
			getOrderDetail();
			
			return {
				getOrderDetail,
				orderDetailData,
				o_id
			}
		},
		methods:{
			getOrderInf(){
				const cartList = this.cartMaterialList.map(item=>{
					 return {"m_id": item.m_id,"count": item.m_c_count,"unit": "1"}
				})
				console.log(cartList);
				const params = {
					"a_id": "1", //地址ID
					"s_id": "10",//门店ID
					"r_g_id": "1", //区域ID
					"materials":cartList
				}
				orderConfirm(params).then(res=>{
					this.orderDetailData = res.data
				})
				uni.hideLoading();
			}
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 100px);
		// margin-bottom:100rpx;
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f5f5f5;
		.peiSong{
			margin: 20rpx;
			padding:20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			view{
				height: 60rpx;
			}
		}
		.materialList{
			margin: 20rpx;
			padding:0 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			overflow: hidden;
			.materialItem{
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
		.order-address{
			position:relative;
			margin: 20rpx;
			padding:20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			display: flex;
			.icon-dituguanli{
				margin-right: 10rpx;
				padding:10rpx;
				width: 30rpx;
				height: 30rpx;
				line-height: 30rpx;
				background-color: $uni-color-primary;
				border-radius: 50%;
				color: #fff;
				font-size: 30rpx;
			}
			.detail{
				font-weight: bold;
			}
			.name{
				color:#666;
			}
			.icon-right{
				position: absolute;
				right: 20rpx;
				top: 40rpx;
			}
			
		}
		.account{
			position: fixed;
			bottom:0;
			width: 100%;
			padding: 20rpx 0;
			height: 60rpx;
			background-color: #fff;
			.right{
				.uni-button{
					margin-right: 20rpx;
					border-radius: 20rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 30rpx;
				}
			}
		}
		.other{
			margin: 10px;
			background-color: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			overflow: hidden;
			.title{
				padding:10rpx 20rpx;
				font-weight: bold;
			}
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
