<template>
	<back-layer :back="back"  />
	<view class="order-container">
		<view class="orderData">
				<!--  -->
			<o-bill :to-main="true" :bills="orderDetailData.cost_detail" />
		</view>
		<view class="other">
			<view class="title">
				<span class="icon iconfont icon-developer"></span>
				<text>提点管理费</text>
			</view>
			<view class="other-item">
				<view>
					<text class="left">门店名称:</text>
					<text class="right">茶百道蜀都店</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">门店编号:</text>
					<text class="right">888888888</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">签约人:</text>
					<text class="right">张三</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">费用描述:</text>
					<text class="right">{{orderDetailData.cost_name}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">费用金额:</text>
					<text class="right">
						<span class="icon iconfont icon-jine"></span>{{(orderDetailData.cost_money /100).toFixed(2) || 0}}
					</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">收款公司:</text>
					<text class="right">蜀信致远</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">支付流水:</text>
					<text class="right">SC2022011601985220</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">支付时间:</text>
					<text class="right">2022-01-16 09:05:35</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { costMain } from '@/api/order'
	import { statusData,tabOptions } from './enum'
	import OButton from "./components/oButton.vue"
	import OBill from "./components/oBill.vue"
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		components:{
			OButton,
			OBill,
			BackLayer
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.o_s_id); //打印出上个页面传递的参数。
			// this.o_id = option.o_id;
			const { o_s_id,cost_code } = option
			this.o_s_id = o_s_id
			this.back.backUrl = '/pages/feeBill/detail?o_s_id='+o_s_id
			this.getOrderDetail({ o_s_id,cost_code });
		},
		setup() {
			const o_s_id = ref("")
			const back=reactive({
				title:"费用单明细",
				backUrl:'/pages/feeBill/detail?o_s_id=',
			})
			const orderDetailData = ref({})
			const getOrderDetail=(params)=>{
				costMain(params).then(res=>{
					orderDetailData.value = res.data
				})
			}
			return {
				getOrderDetail,
				orderDetailData,
				o_s_id,
				back
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
		height: calc(100vh - 100rpx);
		// margin-bottom:100rpx;
		overflow-x: hidden;
		overflow-y: auto;
		// background-color: #f5f5f5;
		.orderData{
			margin: 10px;
			background-color: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			width: calc(100% - 80rpx);
			padding:0 20rpx;
		}
		.other{
			margin: 10px;
			background-color: #fff;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			overflow: hidden;
			.title{
				
				padding:10rpx 20rpx;
				height: 50rpx;
				line-height: 50rpx;
				font-size: 40rpx;
				font-weight: bold;
				.iconfont{
					margin-right: 10rpx;
					font-size: 40rpx;
					color: $uni-color-primary;
				}
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
		
		.account{
			position: fixed;
			bottom:0;
			width: 100%;
			padding: 20rpx 0;
			height: 60rpx;
			background-color: #fff;
			display: flex;
			justify-content: flex-end;
			text{
				width: 50%;
				margin-left: 20rpx;
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
			&-orderDetailData{
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
