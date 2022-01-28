<template>
	<view class="order-container" v-if="orderInformation?.address">
		<view class="order-address">
			<!-- "detail": "2g2FHLG6uyBrooklynq7zIfHf2k7lyo7JoXnBG", //地址详情
			      "phone": "755-0235-6221",//联系电话
			      "name": "Joan Jimenez"//收件人 orderInformation-->
			<span class="icon iconfont icon-dituguanli"></span>	  
			<view>
				<view class="detail">成都市高新区名都路166号</view>
				<view class="name">{{orderInformation.address.name}} {{orderInformation.address.phone}}</view>
				<span class="icon iconfont icon-right"></span>
			</view>	  
		</view>
		<view class="commodityList">
			<view class="commodityItem" v-for="(item,index) in cartMaterialList">
				<image :src="item.img || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.m_name || '物料名称'}}</view>
					<view class="unit">500g*30袋/箱</view>
					<view class="price">
						<text class="total">
							<span class="icon iconfont icon-jine"></span>
							<text v-if="item.m_prices">
								{{item.m_prices[0].m_p_money}}
							</text>
						</text>
						<view class="numHandle">
							<text>{{item.m_c_count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="other-item">
				<text class="left">优惠券</text>
				<text class="right">5张可使用<span class="icon iconfont icon-right"></span></text>
			</view>
			<view class="other-item">
				<text class="left">账户余额</text>
				<text class="right"><span class="icon iconfont icon-jine"></span>1000元</text>
			</view>
			<view class="other-item">
				<text class="left">商品总额</text>
				<text class="right"><span class="icon iconfont icon-jine"></span>1000元</text>
			</view>
			<view class="other-item">
				<text class="left">运费</text>
				<text class="right"><span class="icon iconfont icon-jine"></span>{{orderInformation.freightCount}}元</text>
			</view>
			<view class="other-item">
				<text class="left">活动优惠</text>
				<text class="right"><span class="icon iconfont icon-jine"></span>{{orderInformation.discount}}元</text>
			</view>
			
		</view>
		<view class="account">
			<view class="right">
				<view class="totalPrice">
					<text>合计：</text>
					<text class="priceTotal"><span class="icon iconfont icon-jine"></span>{{orderInformation.totalPrice}}</text>
				</view>
				<button class="uni-button" type="primary" size="mini">去结算</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartMaterialsUpdate,cartList } from '@/api/subscribe'
	import { orderConfirm } from '@/api/order'
	export default defineComponent({
		setup() {
			const cartMaterialList = ref([
				{
					"m_c_unit": 1,
					"c_order": 1,
					"is_rela": 0,
					"c_version": 1,
					"m_extends": [
						{
							"m_ext_name": "500g*30袋",
							"_id": "３",
							"m_ext_val": "500g*30袋",
							"m_id": "a94d15dc7f1f414c8c25d91c038ccbc5"
						}
					],
					"c_struct_version": 1,
					"c_update_time": "2022-01-28 16:00:07",
					"m_order_step_type": 1,
					"c_update_user": "default",
					"c_del": 0,
					"c_valid": 1,
					"m_order_upper": 1,
					"m_order_lower": 1,
					"s_id": "10",
					"m_name": "消毒剂2",
					"m_pic": "",
					"c_create_time": "2022-01-28 14:32:09",
					"m_status": 2,
					"m_prices": [
						{
							"m_p_money": 6000,
							"m_p_currency": 1,
							"_id": "14",
							"m_p_type": 1,
							"m_id": "a94d15dc7f1f414c8c25d91c038ccbc5"
						}
					],
					"m_units": [
						{
							"m_u_unit": 1,
							"m_u_count": 1,
							"m_u_type": 4,
							"m_u_su_id": "",
							"m_id": "a94d15dc7f1f414c8c25d91c038ccbc5"
						}
					],
					"_id": "b0768082500c472ca560fcd7dac0bc20",
					"m_c_count": 2,
					"c_create_user": "default",
					"m_id": "a94d15dc7f1f414c8c25d91c038ccbc5",
					"checked": true
				},
				{
					"m_c_unit": 1,
					"c_order": 1,
					"is_rela": 0,
					"c_version": 1,
					"m_extends": null,
					"c_struct_version": 1,
					"c_update_time": "2022-01-28 11:33:56",
					"m_order_step_type": 1,
					"c_update_user": "default",
					"c_del": 0,
					"c_valid": 1,
					"m_order_upper": 1,
					"m_order_lower": 1,
					"s_id": "10",
					"m_name": "软化",
					"m_pic": "",
					"c_create_time": "2022-01-28 11:33:41",
					"m_status": 2,
					"m_prices": [
						{
							"m_p_money": 1000,
							"m_p_currency": 2,
							"_id": "6",
							"m_p_type": 3,
							"m_id": "859e700ba166417497e6fb874b144b8f"
						}
					],
					"m_units": [
						{
							"m_u_unit": 1,
							"m_u_count": 1,
							"m_u_type": 4,
							"m_u_su_id": "",
							"m_id": "859e700ba166417497e6fb874b144b8f"
						}
					],
					"_id": "862006f77ecf4e5bb97179b2df6f4dd0",
					"m_c_count": 2,
					"c_create_user": "default",
					"m_id": "859e700ba166417497e6fb874b144b8f",
					"checked": true
				}
			])
			const orderInformation = ref({})
			
			const getOrderInf=()=>{
				const cartList = cartMaterialList.value.map(item=>{
					 return {"m_id": item.m_id,"count": item.m_c_count,"unit": "1"}
				})
				const params = {
					"a_id": "1", //地址ID
					"s_id": "10",//门店ID
					"r_g_id": "1", //区域ID
					"materials":cartList
				}
				orderConfirm(params).then(res=>{
					orderInformation.value = res.data
				})
			}
			getOrderInf();
			
			return {
				cartMaterialList,
				cartList,
				getOrderInf,
				orderInformation
			}
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f5f5f5;
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
		.commodityList{
			margin: 20rpx;
			padding:0 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			overflow: hidden;
			.commodityItem{
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
		.account{
			position: fixed;
			bottom:0;
			width: 100%;
			height: 120rpx;
			line-height: 120rpx;
			background-color: #fff;
			.right{
				display: flex;
				align-items: center;
				font-size: 30rpx;
				.totalPrice{
					// margin-right: 20rpx;
					font-weight: bold;
				}
				.uni-button{
					margin: 0 30rpx;
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
			&-item{
				margin:0 20rpx;
				padding:30rpx 0;
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
