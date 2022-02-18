<template>
	<view class="order-container">
		<view class="peiSong">
			<text class="price" v-if="orderDetailData.o_s_status==1">订单未支付，无物流信息</text>
			<text class="price" v-else>暂无物流信息</text>
		</view>
		<view class="materialList">
			<view class="materialItem" v-for="(item,index) in orderDetailData.sub_order_materials">
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
			<view class="title">付款信息</view>
			<view class="other-item">
				<text class="left">商品总价</text>
				<view class="right" >
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_origin_money || 0}}
				</view>
			</view>
			<view class="other-item">
				<text class="left">运费</text>
				<text class="right">
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_freight_money || 0}}
				</text>
			</view>
			<view class="other-item">
				<text class="left">合计优惠</text>
				<text class="right color-primary">
					<span class="icon iconfont icon-jian"></span>
					<span class="icon iconfont icon-jine"></span>
					{{Math.abs(orderDetailData.o_p_discount_money) || 0}}
				</text>
			</view>
			<view class="other-item">
				<text class="left">实付款</text>
				<view class="right color-primary fontBold" >
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_real_pay_money || 0}}
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">订单信息</view>
			<view class="other-item">
				<view>
					<text class="left">订单号:</text>
					<view class="right">
						<text>{{orderDetailData.o_p_code}}</text>
						<text class="copyC" @click="copyC">复制</text>
					</view>
				</view>
			</view>
			<view class="other-item">
				<text class="left">订单状态:</text>
				<text class="right">{{orderDetailData.o_s_status_desc}}</text>
			</view>
		</view>
		<view class="other">
			<view class="title">配送信息</view>
			<view class="other-item">
				<view>
					<text class="left">配送方式:</text>
					<text class="right">物流</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">送货时间:</text>
					<text class="right">预计2022月02月19日</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">物流状态:</text>
					<text class="right">未发货</text>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">收货信息</view>
			<view class="other-item">
				<view>
					<text class="left">收货人:</text>
					<text class="right">{{orderDetailData.o_s_recipient}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">联系方式:</text>
					<text class="right">{{orderDetailData.o_s_recipient_contact}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">地址:</text>
					<text class="right">{{orderDetailData.o_s_recipient_addr}}</text>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="right" v-if="orderDetailData.o_s_status==1">
				<button class="uni-button" size="mini">取消订单</button>
				<button class="uni-button" type="primary" size="mini">去付款</button>
			</view>
			<view class="right" v-else>
				<button class="uni-button" size="mini">再来一单</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { subOrderDetail } from '@/api/order'
	import { statusData } from './enum'
	export default defineComponent({
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option._id); //打印出上个页面传递的参数。
			// this.o_id = option.o_id;
			this.getOrderDetail(option._id);
		},
		setup() {
			// const o_id = ""
			const orderDetailData = ref({})
			const getOrderDetail=(_id)=>{
				subOrderDetail({_id}).then(res=>{
					const select = statusData.find(select => select.value === res.data.o_s_status)
					res.data.o_s_status_desc = select ?  select.label : res.data.o_s_status
					orderDetailData.value = res.data
				})
			}
			const copyC = ()=>{
				uni.setClipboardData({
				    data: orderDetailData.value.o_id,
				    success: function () {
				        // console.log('已复制订单号');
				    }
				});
			}
			return {
				getOrderDetail,
				orderDetailData,
				copyC
			}
		},
		methods:{
			
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
			align-items: center;
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
					// border-radius: 20rpx;
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
				.copyC{
					margin-left: 10rpx;
					padding-left: 10rpx;
					border-left: solid 1px #666;
					color: #666;
					font-size: 20rpx;
				}
			}
		}

	}
</style>
