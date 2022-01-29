<template>
	<view class="order-container">
		<uni-search-bar @confirm="search" @input="input" placeholder="请输入关键字"></uni-search-bar>
		<view class="tab">
			<text class="check">全部</text>
			<text>待支付</text>
			<text>待验收</text>
			<text>待退货</text>
			<text>售后</text>
		</view>
		<view class="orderData" v-if="orderData">
			<view class="orderItem" v-for="(item,index) in orderData" @click="toOrderDetail(item)">
				<!--  -->
				<view class="title">
					<text class="left">订单号:{{item.o_p_code}}</text>
					<!-- <text class="right">{{item.o_s_status_desc}}</text> -->
				</view>
				<view class="materials">
					<view v-for="(material,index) in item.sub_order_materials">
						<image :src="item.img || '/static/logo.jpg'"></image>
					</view>
				</view>
				<view class="detail">
					<text class="name">共计：{{item.s_o_m_num}}件</text>
					<text class="price" v-if="item.o_s_status==1">{{item.o_s_status_desc}}</text>
					<text class="price" v-else>实付款：<span class="icon iconfont icon-jine"></span>{{item.o_p_real_pay_money}}</text>
				</view>
				<view class="numHandle">
					<button v-if="item.o_s_status==1" type="primary" size="mini" @click="submit">去付款</button>
					<button size="mini" v-else>再次购买</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { orderList } from '@/api/order'
	import { statusData } from './enum'
	export default defineComponent({
		setup() {
			
			const orderData = ref([])
			
			const getOrderData=()=>{
				const params ={
					"s_id": "10",
					"pageNum":1,
					"pageSize":10
				}
				orderList(params).then(res=>{
					console.log(res);
					orderData.value = res.data.map(item=>{
							const select = statusData.find(select => select.value === item.o_s_status)
							item.o_s_status_desc = select ?  select.label : item.o_s_status
							return item
					});
					// .map(d=>{
					// })
					console.log(orderData);
				})
			}
			getOrderData();
			
			const toOrderDetail=(item)=>{
				uni.navigateTo({
				    url: '/pages/tabBar/order/detail?o_id='+item.o_id
				})
			}
			
			return {
				orderData,
				toOrderDetail
			}
		},
		methods: {
			checkboxChange(e) {
				var items = this.orderData,
					values = e.detail.value;
					items.map(item=>{
						if(values.includes(item.m_id)){
							this.$set(item,'checked',true)
						}else{
							this.$set(item,'checked',false)
						}
					})
			},
			dataChange(item){
				console.log(item);
				const params={
					"_id": item._id,
					"s_id": "10",
					"m_c_count": item.m_c_count,
					"m_id": item.m_id
				}
				// cartMaterialsUpdate(params).then(res=>{
				// 	this.getCartCountAndPrice();
				// })
			},
			reduce(item){
				item.m_c_count--
				const params = {
					"m_id":item.m_id,
				    "m_c_count":-1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				this.toCartInsert(params)
			},
			jian(item){
				console.log("减少",item)
				if(item.m_c_count<=1){
					uni.showModal({
						content: '是否确认删除该物料',
						showCancel: true,
						success: function (res) {
							if (res.confirm) {
								this.reduce(item)
							}
						}
					})
				}else{
					this.reduce(item)
				}

			},
			jia(item){
				item.m_c_count++
				const params = {
					"m_id":item.m_id,
				    "m_c_count":1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				this.toCartInsert(params)
			},
			cartHandle(params){
				 cartInsert(params).then(res=>{
					this.getCartCountAndPrice();
				 })
			},
			submit(){
				const checkList = this.orderData.filter(item=>{
					return item.checked
				})
				console.log(checkList);
				uni.navigateTo({
				    url: '/pages/order/order',
				    success: function(res) {
				      // 通过eventChannel向被打开页面传送数据
				      res.eventChannel.emit('acceptDataFromOpenerPage', { data: {checkList} })
				    }
				})
			}
			
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
		overflow: hidden;
		background-color: #f5f5f5;
		.uni-searchbar{
			background-color: $uni-color-primary;
			.uni-searchbar__box{
				background-color: #f5f5f5;
			}
			.uni-searchbar__cancel{
				color: #fff;
			}
		}
		.tab{
			// width: 100%;
			padding:0 20rpx;
			// height: 50rpx;
			display: flex;
			justify-content:space-between;
			text{
				padding:20rpx;
				line-height: 30rpx;
			}
			.check{
				border-bottom: solid 2px $uni-color-primary;
			}
		}
		.orderData{
			height: calc(100% - 200rpx);
			overflow-x: hidden;
			overflow-y: auto;
			.orderItem{
				margin: 20rpx;
				width: calc(100% - 80rpx);
				padding:20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				background: #fff;
				border-radius: 10rpx;
				.title{
					width: 100%;
					height: 40rpx;
					line-height: 40rpx;
				}
				.materials{
					margin-top: 20rpx;
					width: 100%;
					min-height: 150rpx;
					view{
						display: inline-block;
					}
					image{
						margin: 0 10rpx;
						width: 150rpx;
						height: 150rpx;
						border-radius: 20rpx;
					}
				}
				.detail{
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 26rpx;
					margin-top: 10rpx;
					text-align: right;
					.name{
						// font-weight: bold;
						margin-right: 10rpx;
					}
					.price{
						.iconfont{
							font-size:18rpx
						}	
					}
				}
				.numHandle{
					margin-top: 10rpx;
					text-align: right;
					width: 100%;
					height: 60rpx;
					.uni-input{
						padding:5rpx;
						width:80rpx;
						height: 40rpx;
						border-left: solid 1px #ddd;
						border-right: solid 1px #ddd;
						text-align: center;
					}
				}
			}
		}
		.account{
			position: absolute;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			.left{
				margin-left: 10rpx;
			}
			.right{
				display: flex;
				align-items: baseline;
				.priceTotal{
					font-weight: bold;
				}
				.mini-btn{
					margin: 20rpx 20rpx;
					border-radius: 20rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 30rpx;
				}
			}
		}
	}
</style>
