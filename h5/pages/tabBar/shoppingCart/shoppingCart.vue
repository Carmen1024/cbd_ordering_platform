<template>
	<view class="shopping-container">
		<view class="title">
			<view class="left">
				<span class="icon iconfont icon-goumai"></span>
				<text>购物车</text>
				<text>({{countAndPrice.total || 0}})</text>
			</view>
			<view class="right">
				<view>
					<text>推荐</text>
				</view>
				<view>
					<text>常购</text>
				</view>
				<view :class="operateType==2?'operate':''">
					<text class="manage" @click="operateType= operateType==1?2:1">管理</text>
					<span v-if="operateType==2" class="icon iconfont icon-close"></span>
				</view>
			</view>
		</view>
		<view class="commodityMod">
			<checkbox-group @change="checkboxChange" class="commodityList">
				<view class="commodityItem" v-for="(item,index) in cartMaterialList">
					<checkbox 
						:checked="item.checked" 
						:value="item.m_id" 
						:disabled="item.m_stock < item.m_c_count ? true : false" 
					/>
					<image :src="item.img || '/static/logo.jpg'"></image>
					<view class="detail">
						<view class="name">{{item.m_name || '物料名称'}}</view>
						<view class="unit">
							<text class="left">{{item.m_package}}</text>
							<text class="right" v-show="item.m_stock < item.m_c_count">该商品库存不足</text>
						</view>
						<view class="price">
							<text class="total">
								<span class="icon iconfont icon-jine"></span>
								<text v-if="item.m_prices">
									{{item.m_prices[0].m_p_money}}
								</text>
								<text v-else>0</text>
							</text>
							<view class="numHandle">
								<text @click="jian(item)"><span class="icon iconfont icon-jian"></span></text>
								<input class="uni-input" type="number" v-model="item.m_c_count" @blur="dataChange(item)" auto-blur=true />
								<text @click="jia(item)"><span class="icon iconfont icon-tianjia"></span></text>
							</view>
						</view>
					</view>
				</view>
			</checkbox-group>
			<view class="zeroList" v-show="stockZeroList.length>0">
				<view>
					<text class="left">失效宝贝{{stockZeroList.length}}件</text>
					<text class="right" @click="deletesZeroList">清空失效宝贝</text>
				</view>
				<view class="commodityItem" v-for="(item,index) in stockZeroList">
					<checkbox :checked="item.checked" :value="item.m_id" disabled/>
					<image :src="item.img || '/static/logo.jpg'"></image>
					<view class="detail">
						<view class="name">{{item.m_name || '物料名称'}}</view>
						<view v-if="c_valid==0" class="tip">商品已不能购买</view>
						<view v-else class="tip">商品库存不足</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="account">
			<view class="left">
				<checkbox 
					value="cb" 
					:checked="cbChecked" 
					@click="changeCb" 
					:disabled="cbCheckDisabled"
				/>全选
			</view>
			<view class="right">
				<view v-if="operateType==1">
					<text class="chosenTotal" v-if="chosenCountPrice.total>0">已选{{chosenCountPrice.total}}件，</text>
					<text>总计:</text>
					<text class="chosenPrice"><span class="icon iconfont icon-jine"></span>{{chosenCountPrice.price}}</text>
					<button type="primary" size="mini" @click="submit">结算</button>
				</view>
				<view v-if="operateType==2">
					<text @click="operateType=1">取消</text>
					<button type="warn" size="mini" @click="deleteM">删除</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartMaterialsUpdate,cartList,cartDel } from '@/api/subscribe'
	import { operateData } from './enum'
	import { setStorageSync } from '@/utils/token'
	export default defineComponent({
		onShow: function() {
			uni.hideToast();
			this.resetShoppingCart();
		},
		setup() {
			
			const operateType = ref(1)
			const countAndPrice = ref({})
			const cartMaterialList = ref([])
			const stockZeroList = ref([])
			const cbChecked = ref(false)
			const cbCheckDisabled=ref(false)
			//计算购物车已选中金额
			const chosenCountPrice = ref({
				price:0,
				total:0
			})
			
			const toCartInsert=(params)=>{
				 
				 cartInsert(params).then(res=>{
					 butFreshList()
				 })
			}
			
			const getCartCountAndPrice=()=>{
				cartCountAndPrice({"s_id": "10"}).then(res=>{
					countAndPrice.value = res.data;
				})
			}
			const getCartList=()=>{
				stockZeroList.value = []
				cartMaterialList.value = []
				cartList({"s_id": "10"}).then(res=>{
					res.data.map(item=>{
						item.old_count = item.m_c_count
					});
					res.data.map(item=>{
						(item.m_stock==0 || item.c_valid==0) ? stockZeroList.value.push(item) : cartMaterialList.value.push(item)
					})
					const clist = res.data.filter(item=>{
						return item.m_stock > item.m_c_count
					})
					console.log(clist.length);
					cbCheckDisabled.value = clist.length === res.data.length ? false : true
					//cbCheckDisabled
					console.log(stockZeroList.value,cartMaterialList.value)
				})
			}
			
			//计算已选择的价格和数量
			const setChosenCountPrice=()=>{
				
				let items = cartMaterialList.value,price=0,total=0;
				items.map(item=>{
					if(item.checked){
						total += (item.m_c_count || 0)
						const p = item.m_prices ? item.m_prices[0].m_p_money : 0
						price += item.m_c_count * p
					}
				})
				
				chosenCountPrice.value = {price,total}
			}
			
			// 全选按钮设置
			const setCbChecked=()=>{
				//cbChecked
				let items = cartMaterialList.value
				const all = items.length
				const checkedlength = items.filter(item=>item.checked).length
				cbChecked.value =  ((all == checkedlength) && (checkedlength > 0))? true:false
			}
			
			const resetShoppingCart =()=>{
				getCartList()
				butFreshList();
			}
			const butFreshList = ()=>{
				getCartCountAndPrice()
				setChosenCountPrice()
				setCbChecked()
			}
			
			return {
				countAndPrice,
				cartMaterialList,
				toCartInsert,
				getCartList,
				getCartCountAndPrice,
				cbChecked,
				chosenCountPrice,
				operateData,
				operateType,
				stockZeroList,
				setChosenCountPrice,
				setCbChecked,
				resetShoppingCart,
				butFreshList,
				cbCheckDisabled
			}
		},
		methods: {
			checkboxChange(e) {
				let items = this.cartMaterialList,
					values = e.detail.value;
					items.map(item=>{
						if(values.includes(item.m_id)){
							this.$set(item,'checked',true)
						}else{
							this.$set(item,'checked',false)
						}
					})
				this.setChosenCountPrice()
				this.setCbChecked()
			},

			//全选 全不选
			changeCb(){
				if(this.cbCheckDisabled) return
				this.cbChecked = this.cbChecked ? false:true
				this.setCheck()
				this.setChosenCountPrice()
			},
			setCheck(){
				let items = this.cartMaterialList
				items.map(item=>{
					this.$set(item,'checked',this.cbChecked)
				})
			},
			dataChange(item){
				
				let ret=/^([0-9]*)$/;
				console.log(isNaN(parseInt(item.m_c_count)),item);
				const m_c_count = isNaN(parseInt(item.m_c_count)) ? item.old_count :parseInt(item.m_c_count)
				item.m_c_count = m_c_count
				const params={
					"_id": item._id,
					"s_id": "10",
					"m_c_count": m_c_count,
					"m_id": item.m_id
				}
				console.log(params);
				console.log(item)
				cartMaterialsUpdate(params).then(res=>{
					// this.getCartCountAndPrice();
					this.butFreshList();
				})
			},

			// 删减物料
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
				const _this = this;
				if(item.m_c_count<=1){
					uni.showModal({
						content: '是否确认删除该物料',
						showCancel: true,
						success: function (res) {
							if (res.confirm) {
								const ids = [item._id]
								_this.deleteByIds(ids)
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
				setStorageSync("orderMList",JSON.stringify(checkList))
				uni.navigateTo({url: '/pages/order/order'})
			},
			deleteM(){
				const ids = this.cartMaterialList.filter(item=>{
					return item.checked
				}).map(item=>item._id)
				
				this.delete(ids)
			},
			deletesZeroList(){
				const ids = this.stockZeroList.map(item=>item._id)
				
				this.delete(ids)
			},
			delete(ids){
				console.log(ids);
				if(ids.length==0){
					uni.showToast({
					    title: '没有需要删除的物料',
					    duration: 2000,
						icon:"none"
					});
					return
				}
				const _this = this
				uni.showModal({
				    content: '确认将这些物料删除？',
				    success: function (res) {
				        if (res.confirm) {
							_this.deleteByIds(ids)
				        } else if (res.cancel) {
				           return
				        }
				    }
				});
				
			},
			// 最终删除购物车物料
			deleteByIds(ids){
				cartDel({ids}).then(res=>{
					uni.showToast({
					    title: '删除成功',
					    duration: 2000,
						icon:"none"
					});
					this.resetShoppingCart();
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
			width: calc(100% - 40rpx);
			height: 60rpx;
			line-height: 60rpx;
			border-bottom: solid 1px #ddd;
			padding: 20rpx;
			font-size: 38rpx;
			font-weight: bold;
			.left{
				display: flex;
				align-items: center;
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
				display: flex;
				align-items: center;
				view{
					border: solid 1px #fff;
					width: 100rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					padding:10rpx 0;
					font-size: 28rpx;
					color:#666;
				}
				.operate{
					border-radius: 30rpx;
					border: solid 1px $uni-color-primary;
					color:$uni-color-primary;
					background-color: #fff;
				}
			}
			
		}
		.commodityMod{
			height: calc(100% - 200rpx);
			overflow-x: hidden;
			overflow-y:auto;
			background-color: #f5f5f5;
		}
		.commodityList{
			.commodityItem{
				width: calc(100% - 80rpx);
				margin: 20rpx;
				padding:20rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				background: #fff;
				border-radius: 10rpx;
			}
		}
		.zeroList{
			width: calc(100% - 80rpx);
			margin: 20rpx;
			padding:20rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			background: #fff;
			border-radius: 10rpx;
			.tip{
				margin-top: 40rpx;
			}
			.right{
				font-size: 20rpx;
				color: $uni-color-primary;
				
			}
		}
		.commodityItem{
			padding-top:20rpx;
			width:100%;
			display: flex;
			align-items:center;
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
					width: 100%;
					height: 50rpx;
					overflow: hidden;
					color:#666;
					font-size: 20rpx;
					.right{
						color:$uni-color-error
					}
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
		.account{
			position: absolute;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			.left{
				margin-left: 10rpx;
			}
			.right{
				width: calc(100% - 200rpx);
				view{
					display: flex;
					justify-content: flex-end;
					align-items: center;
					align-self:center;
					font-size: 18rpx;
					height: 100rpx;
					line-height: 100rpx;
					.chosenTotal{
						color:#666;
					}
					.chosenPrice{
						font-weight: bold;
						font-size: 26rpx;
						display: flex;
						align-items: center;
						.iconfont{
							font-size: 18rpx;
						}
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

	}
</style>
<style lang="scss">
	.shopping-container{
		.uni-checkbox-input{
			border-radius: 50%;
		}	
	}
</style>
