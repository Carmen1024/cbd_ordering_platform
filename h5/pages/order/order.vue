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
			<view class="commodityItem" v-for="(item,index) in orderInformation.materialsMsg">
				<image :src="item.img || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.o_m_name || '物料名称'}}</view>
					<view class="unit">500g*30袋/箱</view>
					<view class="price">
						<text class="total">
							<span class="icon iconfont icon-jine"></span>
							{{item.m_price || 10}}
						</text>
						<view class="numHandle">
							<text>{{item.o_m_count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="other-item">
				<text class="left">优惠券</text>
				<view class="right" ><text class="color-primary">5张可使用</text><span class="icon iconfont icon-right"></span></view>
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
				<button class="uni-button" type="primary" size="mini" @click="submit">去结算</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { orderConfirm,createOrder } from '@/api/order'
	export default defineComponent({
		onLoad(option){
		  // #ifdef APP-NVUE
		  const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
		  // #endif
		  // #ifndef APP-NVUE
		  const eventChannel = this.getOpenerEventChannel();
		  const _this = this;
		  // #endif
		  // eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});
		  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
		  eventChannel.on('acceptDataFromOpenerPage', function(data) {
			uni.showLoading({
			    title: '加载中'
			});
		    console.log(data)
			_this.cartMaterialList = data.data.checkList
			console.log(_this.cartMaterialList);
			_this.getOrderInf();
		  })
		},
		setup() {
			const cartMaterialList = ref({})
			const orderInformation = ref({})
			const cartList = ref({})
			
			const getOrderInf=()=>{
				console.log(cartMaterialList.value);
				cartList.value = cartMaterialList.value.map(item=>{
					 return {
						 "m_id": item.m_id,
						 "count": item.m_c_count,
						 "unit": "1",
						 "c_id": item._id
					 }
				})
				const params = {
					"a_id": "1", //地址ID
					"s_id": "10",//门店ID
					"r_g_id": "1", //区域ID
					"materials":cartList.value
				}
				orderConfirm(params).then(res=>{
					orderInformation.value = res.data
				})
				uni.hideLoading();
			}
			const submit=()=>{
				const params={
					"a_id": "1", //地址ID
					"s_id": "10",//门店ID
					"r_g_id": "1", //区域ID
					"materials": cartList.value
				}
				createOrder(params).then(res=>{
					uni.showToast({
					    title: '创建订单成功',
					    duration: 2000
					});
					setTimeout(function() {
						uni.switchTab({
							url: '/pages/tabBar/order/order',
						})
					}, 2000);
				})
			}
			
			return {
				cartMaterialList,
				getOrderInf,
				orderInformation,
				cartList,
				submit
			}
		},
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
