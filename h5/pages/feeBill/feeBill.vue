<template>
	<back-layer :back="back"  />
	<view class="order-container">
		<view class="tab">
			<text v-for="item in tabOptions" @click="checkTab(item)" :class="tabIndex==item.value && 'check'">
				{{item.label}}
			</text>
		</view>
		<scroll-view 
			class="right scroll-Y orderData" v-if="orderData.length>0"
			scroll-y="true" lower-threshold="50"
			@scrolltolower="lower"
		>
			<view v-for="(item,index) in orderData">
				<view class="orderItem" @click="toOrderDetail(item)">
					<!--  -->
					<view class="title">
						<text class="left">单号：{{item.o_p_code}}</text>
						<view class="right">
							<text>{{item.o_s_status_desc}}</text>
						</view>
					</view>
					<o-bill :bills="item.cost_detail" />
					<view class="msg">
						<view class="detail">
							<view class="left"><text>{{item.c_create_time}}</text></view>
							<view class="right">
								<text class="price">共计：<span class="icon iconfont icon-jine"></span>{{(item.o_p_real_pay_money / 100).toFixed(2) || 0}}</text>
							</view>
						</view>
						<o-button :order="item" />
					</view>
				</view>
			</view>
			<view class="loading">{{loading?'加载中':'到底喽'}}</view>
		</scroll-view>
		<view v-else class="noData">
			<view><span class="icon iconfont icon-chargeManagement"></span></view>
			<view>您还没有相关的收费单</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { costList } from '@/api/order'
	import { statusData,tabOptions } from './enum'
	import OButton from "./components/oButton.vue"
	import OBill from "./components/oBill.vue"
	import { linkStore } from '@/utils/utils'
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		components:{
			OButton,
			OBill,
			BackLayer
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log("onLoad")
			console.log(option.tabIndex); //打印出上个页面传递的参数。
			const tabItem = tabOptions.find(item=>item.value == option.tabIndex)
			// this.o_id = option.o_id;
			tabItem && this.setTab(tabItem);
		},
		onShow: function() {
			console.log("onShow")
			this.resetPage();
		},
		setup() {
			const back=reactive({
				title:"费用单",
				backUrl:"/pages/tabBar/dashboard/dashboard",
			})
			const { s_id,r_g_id } = linkStore()
			const orderData = ref([])
			// "o_s_status":0 //订单状态  0所有费用单， 1未支付费用单 2已支付费用单
			const page = ref({
				"pageSize":20,
				"pageNum":1
			})
			const condition = ref({
				o_s_status:0
			})
			
			const loading = ref(true)
			const tabIndex = ref(1)
			
			const getOrderData=()=>{
				const params ={
					s_id,
					...page.value,
					...condition.value
				}
				
				costList(params).then(res=>{
					console.log(res);
					const data = res.data.map(item=>{
						const select = statusData.find(select => select.value === item.o_s_status)
						item.o_s_status_desc = select ?  select.label : item.o_s_status
						return item
					});
					if(data.length<page.value.pageSize) loading.value = false;
					orderData.value = [...orderData.value,...data]
					
					page.value.pageNum++;
				})
			}
			
			const toOrderDetail=(item)=>{
				uni.navigateTo({
				    url: '/pages/feeBill/detail?o_s_id='+item._id
				})
			}
			
			return {
				orderData,
				toOrderDetail,
				getOrderData,
				loading,
				tabOptions,
				tabIndex,
				page,
				condition,
				back
			}
		},
		methods: {
			lower: function(e) {
				console.log(e)
				this.loading && this.getOrderData();
			},
			checkTab(item){
				this.setTab(item)
				this.getOrderData()
			},
			setTab(item){
				this.tabIndex = item.value
				this.condition.o_s_status = item.status
				this.page.pageNum = 1
				this.orderData = []
			},
			cancel(){
				this.condition.o_p_code=""
				this.page.pageNum = 1
				this.orderData = []
				this.getOrderData()
			},
			openPicker(){
				this.$refs.datetimePicker.show()
			},
			resetPage(){
				this.s_id = linkStore().s_id
				this.page.pageNum = 1
				this.orderData = []
				this.getOrderData();
			}
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 100rpx);
		overflow: hidden;
		// background-color: #f5f5f5;
		// .uni-searchbar{
		// }
		.tab{
			// width: 100%;
			background-color: #fff;
			padding:0 20rpx;
			height: 80rpx;
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
			height: calc(100% - 80rpx);
			overflow-x: hidden;
			overflow-y: auto;
			.loading{
				text-align: center;
				padding:30rpx 0;
				// height: 80rpx;
				color:#999;
			}
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
					.right{
						text{
							color:#999;
							margin-left: 10rpx;
						}
					}
				}
				
				.msg{
					text-align: right;
					.detail{
							width: 100%;
							height: 50rpx;
							line-height: 50rpx;
							font-size: 26rpx;
							margin-top: 10rpx;
							text{
								margin-left:10rpx;
								color:#666;
							}
							.iconfont{
								font-size:12rpx
							}
							.price{
								color:#000;
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
		.noData{
			:first-child{
				transform:rotate(330deg);
				-ms-transform:rotate(330deg); /* IE 9 */
				-webkit-transform:rotate(330deg); /* Safari and Chrome */
			}
		}
	}
</style>
