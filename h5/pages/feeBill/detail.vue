<template>
	<back-layer :back="back"  />
	<view class="order-container">
		<view class="orderData">
				<!--  -->
			<o-bill :to-main="true" :bills="orderDetailData.cost_detail" @toMain="toMainPage" />
		</view>
		<view class="other">
			<!-- <view class="title">费用单信息</view> -->
			<view class="other-item">
				<view>
					<text class="left">费用单号:</text>
					<text class="right">{{orderDetailData.o_p_code}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">状态:</text>
					<text class="right">{{orderDetailData.o_s_status_desc}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">创建时间:</text>
					<text class="right">{{orderDetailData.c_create_time}}</text>
				</view>
			</view>
		</view>
		<view class="account">
			<text>共计：<span class="icon iconfont icon-jine"></span>{{(orderDetailData.o_p_real_pay_money /100).toFixed(2) || 0}}</text>
			<o-button :order="orderDetailData" />
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { costDetail } from '@/api/order'
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
			this.o_s_id = option.o_s_id;
			this.getOrderDetail(option.o_s_id);
		},
		setup() {
			const back=reactive({
				title:"费用单详情",
				backUrl:"/pages/feeBill/feeBill",
			})
			// const o_id = ""
			const o_s_id = ref("")
			const orderDetailData = ref({})
			const getOrderDetail=(o_s_id)=>{
				
				costDetail({o_s_id}).then(res=>{
					const select = statusData.find(select => select.value === res.data.o_s_status)
					res.data.o_s_status_desc = select ?  select.label : res.data.o_s_status
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
			toMainPage(bill){
				uni.navigateTo({
				    url: `/pages/feeBill/billMain?o_s_id=${this.o_s_id}&cost_code=${bill.cost_code}`
				})
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
