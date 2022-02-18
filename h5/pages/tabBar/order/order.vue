<template>
	<view class="order-container">
		<view class="condition">
			<uni-search-bar
				class="left"
				@confirm="search"
				radius="20"
				maxlength="30"
				bgColor="#fff"
				placeholder="请输入订单号查询">
			</uni-search-bar>
			<text class="right">
				<span class="icon iconfont icon-riqi" @click="showTime=showTime?false:true"></span>
			</text>
		</view>
		<view class="timeMod" v-show="showTime">
			<uni-datetime-picker
				ref="datetimePicker"
				v-model="datetimerange"
				type="daterange"
				start="2021-01-01"
				end="2022-02-28"
				rangeSeparator="至"
				clear-icon
				@change="timeChange"
			/>
		</view>
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
						<text class="left">{{item.o_p_code}}</text>
						<view class="right">
							<text>{{item.o_s_status_desc}}</text>
							<!-- <text>{{item.o_s_status_desc}}</text> -->
						</view>
					</view>
					<view class="materialList">
						<view class="materialItem" v-for="(material,index) in item.sub_order_materials" v-show="index<3">
							<image :src="material.img || '/static/logo.jpg'"></image>
							<view class="detail">
								<view class="name">{{material.o_m_name || '物料名称'}}</view>
								<view class="price">
									<text class="total">
										<span class="icon iconfont icon-jine"></span>{{material.o_m_price}}
									</text>
									<view class="numHandle">
										<text>x{{material.o_m_count}}</text>
									</view>
								</view>
							</view>
						</view>
						<view v-show="item.sub_order_materials.length>3" class="more">
							查看更多 <span class="icon iconfont icon-right"></span>
						</view>
					</view>
					<view class="msg" v-if="item.o_s_status==1">
						<view class="detail">
							<!-- <text>总价<span class="icon iconfont icon-jine"></span>{{item.o_p_origin_money || 0}}</text> -->
							<!-- <text>优惠<span class="icon iconfont icon-jine"></span>{{Math.abs(item.o_p_discount_money) || 0}}</text> -->
							<view class="left"><text>{{item.c_create_time}}</text></view>
							<view class="right">
								<text>共计：{{item.s_o_m_num}}件,</text>
								<text class="price">需付款<span class="icon iconfont icon-jine"></span>{{item.o_p_real_pay_money || 0}}</text>
							</view>
						</view>
						<view class="numHandle">
							<button class="uni-button" size="mini">取消订单</button>
							<button type="primary" size="mini" @click="submit">去付款</button>
						</view>
					</view>
					<view class="msg" v-else>
						<view class="detail">
							<view class="left"><text>{{item.c_create_time}}</text></view>
							<view class="right">
								<text>共计：{{item.s_o_m_num}}件,</text>
								<text class="price">实付款：<span class="icon iconfont icon-jine"></span>{{item.o_p_real_pay_money}}</text>
							</view>
						</view>
						<view class="numHandle">
							<button size="mini">再次购买</button>
						</view>
					</view>
				</view>
			</view>
			<view class="loading">{{loading?'加载中':'到底喽'}}</view>
		</scroll-view>
		<view v-else class="noData">
			<view><span class="icon iconfont icon-chargeManagement"></span></view>
			<view>您还没有相关的订单</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { orderList } from '@/api/order'
	import { statusData,tabOptions } from './enum'
	export default defineComponent({
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log("onLoad")
			console.log(option.tabIndex); //打印出上个页面传递的参数。
			const tabItem = tabOptions.find(item=>item.value == option.tabIndex)
			// this.o_id = option.o_id;
			tabItem && this.setTab(tabItem);
		},
		onShow: function() {
			console.log("onShow")
			this.getOrderData();
		},
		setup() {
			
			const orderData = ref([])
			
			const page = ref({
				"pageSize":20,
				"pageNum":1
			})
			const condition = ref({
				o_p_code:"",
				c_create_start_time:"",
				c_create_end_time:"",
				o_s_status:[1,2,3,4,5,6,7,8,9,10,11]
			})
			
			const loading = ref(true)
			const tabIndex = ref(1)
			const datetimerange = ref(["2021-03-20", "2021-05-10"])
			const showTime = ref(false)
			
			const getOrderData=()=>{
				const params ={
					"s_id": "10",
					...page.value,
					...condition.value
				}
				orderList(params).then(res=>{
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
				    url: '/pages/tabBar/order/detail?_id='+item._id
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
				datetimerange,
				showTime,
				condition
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
			timeChange(e){
				console.log(e);
				if(e.length==0){
					delete this.condition.c_create_start_time
					delete this.condition.c_create_end_time
				}else{
					this.condition.c_create_start_time=e[0] + " 00:00:00"
					this.condition.c_create_end_time=e[1] + " 23:59:59"
				}
				this.page.pageNum = 1
				this.orderData = []
				this.getOrderData()
			},
			search(e){
				console.log(e);
				if(e.length==0){
					delete this.condition.o_p_code
				}else{
					this.condition.o_p_code=e.value
				}
				this.page.pageNum = 1
				this.orderData = []
				this.getOrderData()
			},
			openPicker(){
				this.$refs.datetimePicker.show()
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
		// .uni-searchbar{
		// }
		.condition{
			width: 100%;
			height: 120rpx;
			.uni-searchbar{
				width:calc(100% - 140rpx);
			}
			.iconfont{
				line-height: 110rpx;
				margin-right: 20rpx;
				padding:20rpx;
				background-color:$uni-color-primary;
				color:#fff;
				font-size: 30rpx;
				border-radius: 50%;
			}
		}
		.timeMod{
			padding:0 20rpx;
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
				.materialList{
					margin: 20rpx 0;
					overflow: hidden;
					.materialItem{
						margin: 20rpx 0;
						// width: calc(100% - 80rpx);
						display: flex;
						align-items:center;
						image{
							border-radius: 20rpx;
							margin-right:20rpx;
							width: 100rpx;
							height: 100rpx;
						}
						.detail{
							width: calc(100% - 150rpx);
							height: 100rpx;
							line-height: 50rpx;
							font-size: 26rpx;
							.name{
								font-weight: bold;
							}
							.price{
								width: 100%;
								.total{
									color:#005bac;
									font-size: 30rpx;
									// .iconfont{
									// 	font-size:18rpx
									// }
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
					.more{
						text-align: right;
						color:#999;
						line-height: 40rpx;
						.iconfont{
							color:#fff;
							background-color: #999;
							border-radius: 50%;
							font-size: 20rpx;
							padding:2rpx;
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
	}
</style>
