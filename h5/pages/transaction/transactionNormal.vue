<template>
	<back-layer :back="back"  />
	<view class="transaction-container">
		<view class="condition">
			<view class="time">
				<span class="icon iconfont icon-riqi"></span>
				<view class="timeMod">
					<uni-datetime-picker
						ref="datetimePicker"
						:value="datetimerange"
						:end="nowTime"
						type="daterange"
						rangeSeparator="至"
						clear-icon
						@change="timeChange"
					/>
				</view>
			</view>
			<view class="btn">
				<text 
					v-for="(item,index) in buttonOptions" 
					@click="checkDays(item.days)">
					{{item.label}}
				</text>
			</view>
		</view>
		<scroll-view 
			class="right scroll-Y transactionData" v-if="transactionData.length>0"
			scroll-y="true" lower-threshold="50"
			@scrolltolower="lower"
		>
			<view v-for="(item,index) in transactionData" @click="toTransactionDetail(item)">
				<view class="transactionItem">
					<view class="msg">
						<view class="detail">
							<view class="left">
								订单号：{{item.tr_order_num}}
							</view>
							<view class="right">
								<span class="icon iconfont icon-jine"></span>{{(item.tr_tx_amt / 100).toFixed(2) || 0}}
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
	import {buttonOptions} from './enum'
	import { setStorageSync } from '@/utils/token'
	import { linkStore } from '@/utils/utils'
	import BackLayer from '@/components/backLayer'
	import { useStore } from 'vuex'
	export default defineComponent({
		components:{
			BackLayer
		},
		onShow: function() {
			this.getTransactionData();
		},
		setup() {
			const store = useStore()
			const back=reactive({
				title:"账单",
				backUrl:store.state.frontPage,
			})
			const { s_id,r_g_id } = linkStore()
			const transactionData = ref([])
			const datetimerange = ref([])
			const nowTime = timeFormat(new Date(),"yyyy-MM-dd")
			const page = ref({
				"pageSize":20,
				"pageNum":1,
			})
			const condition = ref({})
			const loading = ref(true)
			const getTransactionData=()=>{
				const params ={
					s_id,
					...page.value,
					...condition.value
				}
				transactionList(params).then(res=>{
					console.log(res);
					const data = res.data
					if(data.length<page.value.pageSize) loading.value = false;
					transactionData.value = [...transactionData.value,...data]
					page.value.pageNum++;
				})
			}
			
			const toTransactionDetail=(item)=>{
				setStorageSync("transaction",JSON.stringify(item))
				uni.navigateTo({
				    url: '/pages/transaction/detail'
				})
			}
			
			return {
				transactionData,
				toTransactionDetail,
				getTransactionData,
				loading,
				page,
				condition,
				datetimerange,
				buttonOptions,
				nowTime,
				back
			}
		},
		methods: {
			timeChange(e){
				console.log(e);
				this.datetimerange = e
				this.resetTransaction()
			},
			checkDays(type){
				const nowDate = new Date()
				let c_create_start_time = this.nowTime
				let c_create_end_time = this.nowTime
				if(type==1){
					const lastday = timeFormat(new Date(nowDate.getTime()-1000*60*60*24),"yyyy-MM-dd")
					c_create_start_time = lastday
					c_create_end_time = lastday
				}
				if(type==7){
					c_create_start_time = timeFormat(new Date(nowDate.getTime()-1000*60*60*24*7),"yyyy-MM-dd")
				}
				if(type==30){
					c_create_start_time = timeFormat(new Date(nowDate.getTime()-1000*60*60*24*30),"yyyy-MM-dd")
				}
				this.datetimerange = [c_create_start_time,c_create_end_time]
				this.resetTransaction()
			},
			resetTransaction(){
				const time = this.datetimerange
				if(time.length==0){
					delete this.condition.c_create_start_time
					delete this.condition.c_create_end_time
				}else{
					this.condition.c_create_start_time=time[0] + " 00:00:00"
					this.condition.c_create_end_time=time[1] + " 23:59:59"
				}
				this.page.pageNum = 1
				this.transactionData = []
				this.getTransactionData()
			},
			lower: function(e) {
				console.log(e)
				this.loading && this.getTransactionData()
			},
			cancel(){
				this.condition.o_p_code=""
				this.page.pageNum = 1
				this.transactionData = []
				this.getTransactionData()
			},
			openPicker(){
				this.$refs.datetimePicker.show()
			},
		}
	})
</script>

<style lang="scss" scoped>
	.transaction-container{
		width: 100%;
		height: calc(100vh - 100rpx);
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
		.transactionData{

			.loading{
				text-align: center;
				padding:30rpx 0;
				// height: 80rpx;
				color:#999;
			}
			.transactionItem{
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
