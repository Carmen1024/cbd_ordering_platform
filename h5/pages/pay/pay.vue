<template>
	<view class="shopping-container">
		<view class="title">
			<view class="left">
				<span class="icon iconfont icon-goumai"></span>
				<text>购物车</text>
				<text>({{countAndPrice.total || 0}})</text>
			</view>
<!-- 			<view class="right">
				<text>推荐订货</text>
				<text>编辑商品</text>
			</view> -->
		</view>
		<checkbox-group @change="checkboxChange" class="commodityList">
			<view class="commodityItem" v-for="(item,index) in cartMaterialList">
				<checkbox :checked="item.checked" :value="item.m_id" />
				<view class="detail">
					<text class="left">
						<text>2021-12-01</text>
						<text>提点管理费</text>
						<text>￥528.00</text>
						<text>查看</text>
					</text>
					<text class="right">
						<span class="icon iconfont icon-right"></span>
					</text>	
				</view>
			</view>
		</checkbox-group>
		<view class="account">
			<view class="left">
				<checkbox value="cb" :checked="cbChecked" @click="changeCb" />全选
			</view>
			<view class="right">
				<text>总计:</text>
				<text class="priceTotal"><span class="icon iconfont icon-jine"></span>{{countAndPrice.price || 0}}</text>
				<button type="primary" size="mini" @click="submit">去下单</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartMaterialsUpdate,cartList } from '@/api/subscribe'
	export default defineComponent({
		onShow: function() {
			uni.hideToast();
			this.getCartList();
			this.getCartCountAndPrice();
		},
		setup() {
			
			const countAndPrice = ref({})
			const cartMaterialList = ref([])
			const cbChecked = ref(false)
			
			const toCartInsert=(params,refresh)=>{
				 
				 cartInsert(params).then(res=>{
					 getCartCountAndPrice();
					 refresh && getCartList();
				 })
			}
			
			const getCartCountAndPrice=()=>{
				cartCountAndPrice({"s_id": "10"}).then(res=>{
					countAndPrice.value = res.data;
				})
			}
			const getCartList=()=>{
				cartList({"s_id": "10"}).then(res=>{
					cartMaterialList.value = res.data;
				})
			}
			
			return {
				countAndPrice,
				cartMaterialList,
				toCartInsert,
				getCartList,
				getCartCountAndPrice,
				cbChecked
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
			changeCb(){
				this.cbChecked = this.cbChecked ? false:true
				this.setCheck()
			},
			setCheck(){
				var items = this.cartMaterialList
				items.map(item=>{
					this.$set(item,'checked',this.cbChecked)
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
			reduce(item,refresh=false){
				item.m_c_count--
				const params = {
					"m_id":item.m_id,
				    "m_c_count":-1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				this.toCartInsert(params,refresh)
			},
			jian(item){
				console.log("减少",item)
				const _this = this;
				if(item.m_c_count<=1){
					uni.showModal({
						content: '是否确认删除该物料',
						showCancel: true,
						success: function (res) {
							if (res.confirm) {
								_this.reduce(item,true)
							}
						}
					})
				}else{
					_this.reduce(item)
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
				if(checkList.length==0){
					uni.showToast({
					    title: '您还没有选择物料哦',
					    duration: 2000,
						icon:"none"
					});
					return
				}
				uni.navigateTo({
				    url: '/pages/order/order',
					
				    success: function(res) {
				      // 通过eventChannel向被打开页面传送数据
					  console.log("新的下订单")
				      res.eventChannel.emit('acceptDataFromOpenerPage', { data: {checkList} })
				    }
				})
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
			border-bottom: solid 1px #ddd;
			view{
				margin: 20rpx;
				font-size: 38rpx;
				font-weight: bold;
			}
			.left{
				display: flex;
				image{
					float: left;
					margin-right: 10rpx;
					width: 50rpx;
					height: 50rpx;
					line-height: 50rpx;
					border-radius: 50%;
				}
				text:last-child{
					line-height: 50rpx;
					font-size: 26rpx;
					font-weight: 400;
				}
				.iconfont{
					background-color: $uni-color-primary;
					border-radius: 50%;
					margin-right: 10rpx;
					width: 50rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 30rpx;
					color:#fff;
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
					border-radius: 20rpx;
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
				button{
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
