<template>
	<view class="order-container">
		<view class="condition">
			<view class="time">
				<span class="icon iconfont icon-riqi"></span>
				<view class="timeMod">
					<uni-datetime-picker
						ref="datetimePicker"
						v-model="datetimerange"
						type="daterange"
						rangeSeparator="至"
						clear-icon
						@change="timeChange"
					/>
				</view>
			</view>
			<view class="btn">
				<text @click="checkDays(0)">今天</text>
				<text @click="checkDays(1)">昨天</text>
				<text @click="checkDays(7)">7天内</text>
				<text @click="checkDays(30)">30天内</text>
			</view>
		</view>
		<scroll-view 
			class="right scroll-Y orderData" v-if="orderData.length>0"
			scroll-y="true" lower-threshold="50"
			@scrolltolower="lower"
		>
			<view v-for="(item,index) in orderData">
				<view class="orderItem">
					<view class="msg">
						<view class="detail">
							<view class="left">
								{{item.tr_order_num}}
							</view>
							<view class="right">
								<span class="icon iconfont icon-jine"></span>{{item.tr_tx_amt}}
							</view>
						</view>
						<view class="detail">
							<text>付款人：{{item.tr_payer_name}}  {{item.tr_payer_acc_num}} </text>
						</view>
						<view class="detail">
							<text>交易时间：{{item.tr_tx_time}} </text>
						</view>
						<view class="detail">
							<text>支付流水：{{item.tr_bank_sn}} </text>
						</view>
					</view>
				</view>
			</view>
			<view class="loading">{{loading?'加载中':'到底喽'}}</view>
		</scroll-view>
		<view v-else class="noData">
			<view><span class="icon iconfont icon-chargeManagement"></span></view>
			<view>您还没有账单</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { transactionList } from '@/api/order'
	import { timeFormat } from '@/utils/utils'
	export default defineComponent({
		onShow: function() {
			this.getOrderData();
		},
		setup() {
			
			const orderData = ref([])
			const datetimerange = ref(
				[timeFormat(new Date(),"yyyy-MM-dd"), timeFormat(new Date(),"yyyy-MM-dd")]
			)
			const page = ref({
				"pageSize":20,
				"pageNum":1,
			})
			const condition = ref({})
			const loading = ref(true)
			const getOrderData=()=>{
				const params ={
					"s_id": "10",
					...page.value,
					...condition.value
				}
				transactionList(params).then(res=>{
					console.log(res);
					const data = res.data
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
				page,
				condition,
				datetimerange
			}
		},
		methods: {
			timeChange(e){
				console.log(e);
				if(e.length==0){
					delete this.condition.c_create_start_time
					delete this.condition.c_create_end_time
				}else{
					this.condition.c_create_start_time=e[0] + " 00:00:00"
					this.condition.c_create_end_time=e[1] + " 23:59:59"
				}
				this.resetOrder()
			},
			checkDays(type){
				let c_create_start_time = ""
				const nowDate = new Date()
				let c_create_end_time = timeFormat(nowDate,"yyyy-MM-dd")
				if(type==0){
					c_create_start_time = timeFormat(nowDate,"yyyy-MM-dd")
				}
				if(type==1){
					const lastday = timeFormat(new Date(nowDate.getTime()-1000*60*60*24*2),"yyyy-MM-dd")
					c_create_start_time = lastday
					c_create_end_time = lastday
				}
				if(type==7){
					c_create_start_time = timeFormat(new Date(nowDate.getTime()-1000*60*60*24*7),"yyyy-MM-dd")
				}
				if(type==30){
					c_create_start_time = timeFormat(new Date(nowDate.getTime()-1000*60*60*24*30),"yyyy-MM-dd")
				}
				this.condition = {
					"c_create_start_time": c_create_start_time + " 00:00:01",//起始时间
					"c_create_end_time": c_create_end_time + " 23:23:59",//终止时间
				}
				this.resetOrder()
			},
			resetOrder(){
				this.page.pageNum = 1
				this.orderData = []
				this.getOrderData()
			},
			lower: function(e) {
				console.log(e)
				this.loading && this.getOrderData();
			},
			cancel(){
				this.condition.o_p_code=""
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
		width: 100%;
		height: calc(100vh - 50px);
			overflow-x: hidden;
			overflow-y: auto;
		// background-color: #f5f5f5;
		// .uni-searchbar{
		// }
		.condition{
			padding-bottom: 20rpx;
			margin-bottom: 20rpx;
			border-bottom: solid 1px #ddd;
			.time{
				display: flex;
				align-items: center;
				padding:20rpx;
				.iconfont{
					padding: 0 10rpx;
					font-size:40rpx;
					color:#fff;
					color: $uni-color-primary;
					font-weight: bold;
				}
				.timeMod{
					background-color: #fff;
					margin-left:20rpx;
				}
			}
			.btn{
				display: flex;
				text{
					text-align: center;
					flex: 1;
					margin: 0 20rpx;
					padding:5rpx 0;
					border-radius: 10rpx;
					background-color: $uni-color-primary;
					color:#fff;
				}
			}
		}
		.orderData{

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
				.msg{
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
