<template>
	<view class="shopping-container">
		<view class="title">
			<view class="left">
				<text>购物车</text>
				<text>({{countAndPrice.total}})</text>
			</view>
<!-- 			<view class="right">
				<text>推荐订货</text>
				<text>编辑商品</text>
			</view> -->
		</view>
		<checkbox-group @change="checkboxChange" class="commodityList">
			<view class="commodityItem" v-for="(item,index) in cartMaterialList">
				<checkbox :checked="item.checked" :value="item.m_id" />
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
							<text @click="jian(item)"><span class="icon iconfont icon-jian"></span></text>
							<input class="uni-input" type="text" :value="item.m_c_count" @confirm="dataChange(item)"/>
							<text @click="jia(item)"><span class="icon iconfont icon-tianjia"></span></text>
						</view>
					</view>
				</view>
			</view>
		</checkbox-group>
		<view class="account">
			<view class="left">
				<checkbox value="cb" checked="false" />全选
			</view>
			<view class="right">
				<text>总计:</text>
				<text class="priceTotal"><span class="icon iconfont icon-jine"></span>{{countAndPrice.price}}</text>
				<button type="primary" size="mini" @click="submit">去下单</button>
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
			
			const countAndPrice = ref({})
			const cartMaterialList = ref([])
			
			const toCartInsert=(params)=>{
				 
				 cartInsert(params).then(res=>{
					 getCartCountAndPrice();
				 })
			}
			
			
			const getCartCountAndPrice=()=>{
				cartCountAndPrice({"s_id": "10"}).then(res=>{
					countAndPrice.value = res.data;
				})
			}
			getCartCountAndPrice();
			const getCartList=()=>{
				cartList({"s_id": "10"}).then(res=>{
					cartMaterialList.value = res.data;
				})
			}
			getCartList();
			
			const toOrder=()=>{
				
			}
			
			return {
				countAndPrice,
				cartMaterialList,
				toCartInsert,
				toOrder
			}
		},
		methods: {
			checkboxChange(e) {
				var items = this.cartMaterialList,
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
				const checkList = this.cartMaterialList.filter(item=>{
					return item.checked
				})
				console.log(checkList);
				// uni.navigateTo({
				//   url: 'pages/order/order',
				// })
			}
			
		}
	})
</script>

<style lang="scss" scoped>
	.shopping-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
		overflow: hidden;
		.title{
			width: 100%;
			height: 100rpx;
			view{
				margin: 20rpx;
				font-size: 38rpx;
				font-weight: bold;
			}
			.left{
				image{
					float: left;
					margin-right: 10rpx;
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
				}
				text:last-child{
					line-height: 50rpx;
					font-size: 26rpx;
					font-weight: 400;
				}
			}
			.right{
				text{
					margin-left: 10rpx;
					font-size: 28rpx;
					color:#666;
				}
			}
			
		}
		.commodityList{
			height: calc(100% - 200rpx);
			overflow-x: hidden;
			overflow-y:auto;
			background-color: #f5f5f5;
			.commodityItem{
				margin: 20rpx;
				width: calc(100% - 80rpx);
				padding:20rpx;
				display: flex;
				align-items:center;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				background: #fff;
				border-radius: 10rpx;
				image{
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
							width: 200rpx;
							border: solid 1px #ddd;
							border-radius: 20rpx;
							.uni-input{
								padding:5rpx;
								width:80rpx;
								height: 30rpx;
								border-left: solid 1px #ddd;
								border-right: solid 1px #ddd;
								text-align: center;
							}
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
