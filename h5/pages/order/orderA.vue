<template>
	<view class="order-container">
		<view class="order-address" @click="showAddress=true">
			<span class="icon iconfont icon-dituguanli"></span>	  
			<view class="address-main" v-if="addr.s_a_name">
				<view class="detail">
					{{addr.s_a_province}} {{addr.s_a_area}} {{addr.s_a_city}} {{addr.s_a_detail}}
				</view>
				<view class="name">
					{{addr.s_a_name}} {{addr.s_a_phone}}
				</view>
			</view>	 
			<view class="address-main" v-else>
				<view class="detail" v-if="addrList.length>0">收货地址正在审核中</view>
				<view class="detail" v-else>您还没有收货地址</view>
				<view class="name">暂时无法下单</view>
			</view>
			<span class="icon iconfont icon-right"></span>
		</view>
		<address-list v-if="showAddress" :addrList="addrList" @change="changeAddr" @close="closeAddr" />
		<view v-show="ready">
			<!-- 实际物料 -->
			<!-- orderInformation.actual_buy_materials_msg -->
			<commodity-list :commodityList="orderInformation.actual_buy_materials_msg" />
			<!-- 关联物料 -->
			<rela-list 
				v-if="orderInformation.rela_materials_msg && orderInformation.rela_materials_msg.length>0"
				:commodityList="orderInformation?.rela_materials_msg" 
				@change="changeRela"
			/>
			<!-- 周期物料 -->
			<cycle-list 
				v-if="orderInformation?.cycle_materials_msg && orderInformation?.cycle_materials_msg.length>0"
				:commodityList="orderInformation?.cycle_materials_msg"
				@change="changeCycle"
			/>
			<view class="other">
				<view class="other-item">
					<text class="left">账户余额</text>
					<text class="right"><span class="icon iconfont icon-jine"></span>{{orderInformation.remain || 0}}元</text>
				</view>
				<view class="other-item">
					<text class="left">商品总额</text>
					<text class="right"><span class="icon iconfont icon-jine"></span>{{orderInformation.total_price || 0}}元</text>
				</view>
				<view class="other-item">
					<text class="left">合计运费</text>
					<text class="right"><span class="icon iconfont icon-jine"></span>{{orderInformation.freight_price || 0}}元</text>
				</view>
				<view class="other-item">
					<text class="left">价格等级优惠</text>
					<text class="right">
						<span class="icon iconfont icon-jian"></span>
						<span class="icon iconfont icon-jine"></span>{{orderInformation.grade_discount_price || 0}}元
					</text>
				</view>
				<view class="other-item">
					<text class="left">使用返利金</text>
					<text class="right">					
						<span class="icon iconfont icon-jian"></span>
						<span class="icon iconfont icon-jine"></span>{{orderInformation.refund_price || 0}}元
					</text>
				</view>
			</view>
			<view class="account">
				<view class="right">
					<view class="totalPrice">
						<text>合计：</text>
						<text class="priceTotal"><span class="icon iconfont icon-jine"></span>{{orderInformation.actual_pay_price}}</text>
					</view>
					<button class="uni-button" type="primary" size="mini" @click="lastConfirm">确认订单</button>
					<!-- <button class="uni-button" type="primary" size="mini" @click="submit">去结算</button> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import addressList from './addressList'
	import { orderConfirm,createOrder } from '@/api/order'
	import { addressQuery } from '@/api/home'
	import { getStorageSync } from '@/utils/token'
	import commodityList from './commodityList'
	import relaList from './relaList'
	import cycleList from './cycleList'
	export default defineComponent({
		components:{
			addressList,
			commodityList,
			relaList,
			cycleList
		},
		onLoad(option){
		  this.cartMaterialList = JSON.parse(getStorageSync("orderMList"))
		  this.getAddressList();
		},
		onShow(option){
		  this.showAddress = false;
		},
		setup() {
			const cartMaterialList = ref({})
			const orderInformation = ref({})
			const cartList = ref({})
			const showAddress = ref(false)
			const addr=ref({})
			const confirmFirst = ref(true)
			const ready = ref(false)
			
			// "user_choice_cycle": false,
			// "user_actual_choice_cycle": [], 
			//关联物料
			const rela = ref({
				"user_choice_rela": false,//是否使用关联物料（bool）
				"user_actual_choice_rela": [],//用户选择的关联物料（arr）
			})
			const cycle = ref({
				"user_choice_cycle": false,//是否使用关联物料（bool）
				"user_actual_choice_cycle": [],//用户选择的关联物料（arr）
			})
			const getRela = ()=>{
				// 关联物料
				const relaList = orderInformation.value.rela_materials_msg || []
				const checkList = relaList.filter(item=>{
					return item.checked
				}).map(item=>{
					 return {
						"r_m_id": item.r_m_id,
						"r_m_count": item.r_m_count,
						"m_u_unit": item.m_u_unit
					 }
				})
				rela.value = {
					"user_choice_rela": true,//是否使用关联物料（bool）
					"user_actual_choice_rela": checkList,//用户选择的关联物料（arr）
				}
			}
			const getCycle = ()=>{
				// 关联物料
				const cycleList = orderInformation.value.cycle_materials_msg || []
				const checkList = cycleList.filter(item=>{
					return item.checked
				}).map(item=>{
					 return {
						 "r_m_id": item.r_m_id,
						 "r_m_count": item.r_m_count,
						 "m_u_unit": item.m_u_unit
					 }
				})
				cycle.value = {
					"user_choice_cycle": true,//是否使用关联物料（bool）
					"user_actual_choice_cycle": checkList,//用户选择的关联物料（arr）
				}
			}
			// 创建订单
			const getOrderInf=()=>{
				ready.value = false
				setTimeout(()=>{
					uni.showToast({
						icon:"loading",
					    title: '正在加载中',
					    duration: 10000
					});
				},100)
				
				const c_ids = []
				cartList.value = cartMaterialList.value.map(item=>{
					c_ids.push(item._id)
					 return {
						 "m_id": item.m_id,
						 "o_m_count": item.m_c_count,
						 "m_u_unit": "1"
					 }
				})
				if(!confirmFirst.value){
					// 二次确认订单
					getRela()
					getCycle()
				}
				const params = {
					"a_id": "1", //地址ID
					"s_id": "10",//门店ID
					"r_g_id": "1", //区域ID
					// "a_id": addr.value._id, //地址ID(string)
					"a_id":"10",
					c_ids, //购物车ID集合(arr)
					"materials":cartList.value,
					...rela.value,
					...cycle.value
				}
				return new Promise(function(resolve,reject){  
					orderConfirm(params).then(res=>{
						orderInformation.value = res.data
						ready.value = true
						resolve('resolve');
					})
				})
			}
			const lastConfirm=()=>{
				getOrderInf().then(data=>{
					uni.showModal({
						content: '是否已经确认',
						showCancel: true,
						success: function (res) {
							if (res.confirm) {
								submit()
							}
						}
					})
				})
			}
			// 最终确认下单了才能提交
			const submit=()=>{
				 // "cache_order_key": -288269370,//确认订单hashkey
				const cache_order_key = orderInformation.value.cache_order_key;
				createOrder({cache_order_key}).then(res=>{
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
			//已通过
			const passAddr=(defaultAddr)=>{
				addr.value = defaultAddr
				// 第一次确认订单，返回相关信息
				getOrderInf().then(data=>{
					confirmFirst.value = false
					uni.hideToast();
				})
			}
			// 没有默认地址，自己设置
			const setAddr=()=>{
				showAddress.value = true;
			}
			const noAddr=()=>{
				uni.navigateTo({
				    url: "/pages/address/address",
				})
			}
			// 校验收货地址
			const checkAddress = ()=>{
				if(addrList.value.length==0){
					noAddr();
					return;
				}
				//是否有默认地址
				const defaultAddr = addrList.value.find(item=>item.s_a_default)
				defaultAddr ? passAddr(defaultAddr) : setAddr()
				
			}
			const addrList = ref([])
			const getAddressList = ()=>{
				const params={"s_id":"10"}
				addressQuery(params).then(res=>{
					addrList.value = res.data.filter(item=>
						item.s_a_audit_status==2
					)
					checkAddress();
				})
			}
			
			return {
				cartMaterialList,
				getOrderInf,
				orderInformation,
				cartList,
				lastConfirm,
				submit,
				showAddress,
				addr,
				addrList,
				getAddressList,
				ready
			}
		},
		methods:{
			changeAddr(item){
				this.addr = item
				this.showAddress=false
				this.getOrderInf().then(data=>{
					this.confirmFirst = false
					uni.hideToast();
				})
			},
			closeAddr(){
				console.log("close")
				this.showAddress=false
			},
			changeRela(values){
				//关联物料
				// this.rela.user_actual_choice_rela
				let items = this.orderInformation.rela_materials_msg
				items.map(item=>{
					if(values.includes(item.r_m_id)){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				})
				console.log(this.orderInformation.rela_materials_msg);
			},
			changeCycle(){
				// this.cycle.user_actual_choice_cycle
				let items = this.orderInformation.cycle_materials_msg
				items.map(item=>{
					if(values.includes(item.r_m_id)){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				})
				console.log(this.orderInformation.cycle_materials_msg);
			},
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 200rpx);
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f5f5f5;
		.order-address{
			display: flex;
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
			.address-main{
				width: calc(100% - 100rpx);
				.detail{
					min-height: 30rpx;
					font-weight: bold;
					word-wrap: wrap;
					word-break: break-all;
					border-bottom: solid 1px #ddd;
					margin-bottom: 10rpx;
					padding-bottom: 10rpx;
				}
				.name{
					min-height: 30rpx;
					color:#666;
				}
			}
			.icon-right{
				margin-left: 10rpx;
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
			height: 100rpx;
			line-height: 100rpx;
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
