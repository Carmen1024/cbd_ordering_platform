<template>
	<view class="shopping-container">
		<view class="commodityMod">
			<view class="other">
				<view class="other-item">
					<text class="left">订单号</text>
					<view class="right">{{orderDetailData.o_p_code}}</view>
				</view>
			</view>
			<view class="commodityItem" v-for="(item,index) in orderDetailData.sub_order_materials">
				<image :src="item.img || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.o_m_name || '物料名称'}}</view>
					<view class="unit">
						<text class="left">{{item.o_m_package || '500g*30袋/箱'}}</text>
						<!-- <text class="right">批次号:{{item.i_m_batch_no}}</text> -->
					</view>
					<view class="price">
						<text class="total">
							可退{{item.o_m_count}}件
						</text>
						<view class="numHandle">
							退: <input class="uni-input" type="number" v-model="item.m_c_count" @blur="dataChange(item)" auto-blur=true />
						</view>
					</view>
				</view>
			</view>
			<view>
				
			</view>
		</view>
		<view class="account">
			<text>订货数量{{o_m_count}}箱，实收数量{{m_c_count}}箱</text>
			
			<button type="primary" size="mini" @click="refund">
				确认退货
			</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { subOrderDetail,orderRefund } from '@/api/order'
	export default defineComponent({
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			// this.o_id = option.o_id;
			this.order = option
			this.getReceiveList();
		},
		setup() {
			const option = ref({})
			const order = ref({})
			const orderDetailData = ref({})
			const o_m_count = ref(0)
			const m_c_count = ref(0)
			const getReceiveList=()=>{
				const { _id } = order.value
				subOrderDetail({ _id }).then(res=>{
					o_m_count.value = 0
					res.data.sub_order_materials = res.data.sub_order_materials.map(item=>{
						item.m_c_count = item.o_m_count
						o_m_count.value += parseInt(item.o_m_count)
						return item
					})
					orderDetailData.value = res.data
					m_c_count.value = o_m_count.value
				})
			}
			
			return {
				getReceiveList,
				orderDetailData,
				order,
				m_c_count,
				o_m_count,
				option
			}
		},
		methods: {
			refund(){
				// o_s_code: "202202151705444832521", //子订单编号
				// o_s_id: "9684764e50ee47ebbaf7650b80952c4e",//子订单ID 
				const { _id:o_s_id,o_p_code:o_s_code } = this.orderDetailData
				const materials_list = this.orderDetailData.sub_order_materials.map(item=>{
					const { o_m_name:m_name,m_c_count:m_count,o_m_package:m_unit,m_id} = item;
					return { m_name,m_count,m_unit,m_id}
				}).filter(item=>item.m_count>0)
				const params={
					o_s_id,o_s_code,materials_list
				}
				console.log(params)
				orderRefund(params).then(res=>{
					this.getReceiveList()
					uni.showToast({
					    title: "已成功退货",
					    duration: 2000,
						icon:"none"
					})
				})
			},
			dataChange(item){
				
				let ret=/^\d+$/;
				let errorTip=""
				if(isNaN(parseInt(item.m_c_count))){
					errorTip="请填入数字"
				}else if(!item.m_c_count.match(ret)){
					errorTip="数量必须大于等于0"
				}else if(parseInt(item.m_c_count)>parseInt(item.o_m_count)){
					errorTip="不能大于实际件数"
				}
				if(errorTip){
					item.m_c_count = item.o_m_count
					uni.showToast({
					    title: errorTip,
					    duration: 2000,
						icon:"none"
					})
					return
				}
				let count=0
				const p = this.orderDetailData.sub_order_materials.map(item=>{
					count+= parseInt(item.m_c_count)
				})
				this.m_c_count = count
			},
			
		}
	})
</script>

<style lang="scss" scoped>
	.shopping-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
		overflow: hidden;
		.commodityMod{
			height: calc(100% - 100rpx);
			overflow-x: hidden;
			overflow-y:auto;
			.other{
				margin: 10px;
				background-color: #fff;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				border-radius: 10rpx;
				overflow: hidden;
				.title{
					padding:10rpx 20rpx;
					font-weight: bold;
				}
				&-item{
					margin:0 20rpx;
					padding:20rpx 0;
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
					.copyC{
						margin-left: 10rpx;
						padding-left: 10rpx;
						border-left: solid 1px #666;
						color: #666;
						font-size: 20rpx;
					}
				}
			}
			.commodityItem{
				margin: 10px;
				background-color: #fff;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				border-radius: 10rpx;
				overflow: hidden;
				padding:20rpx;
				display: flex;
				align-items:center;
				image{
					margin: 0 10rpx;
					width: 150rpx;
					height: 150rpx;
					border-radius: 20rpx;
				}
				.detail{
					width: calc(100% - 160rpx);
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
							float: right;
							display:flex;
							.uni-input{
								padding:5rpx;
								width:120rpx;
								height: 30rpx;
								border: solid 1px #ddd;
								border-radius: 10rpx;
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
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			background-color: #f5f5f5;
			button{
				margin: 20rpx 20rpx;
				border-radius: 20rpx;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 30rpx;
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
