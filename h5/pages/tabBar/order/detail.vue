<template>
	<view class="order-container">
		<view class="peiSong">
			<text class="price" v-if="orderDetailData.o_s_status==1">订单未支付，无物流信息</text>
			<text class="price" v-else>暂无物流信息</text>
		</view>
		<view class="materialList">
			<view class="materialItem" v-for="(item,index) in orderDetailData.sub_order_materials">
				<image :src="item.o_m_pic || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.o_m_name || '物料名称'}}</view>
					<view class="unit">500g*30袋/箱</view>
					<view class="price">
						<text class="total">
							<span class="icon iconfont icon-jine"></span>
							{{item.o_m_price}}
						</text>
						<view class="numHandle">
							<text>{{item.o_m_count}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">付款信息</view>
			<view class="other-item">
				<text class="left">商品总价</text>
				<view class="right" >
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_origin_money || 0}}
				</view>
			</view>
			<view class="other-item">
				<text class="left">运费</text>
				<text class="right">
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_freight_money || 0}}
				</text>
			</view>
			<view class="other-item">
				<text class="left">合计优惠</text>
				<text class="right color-primary">
					<span class="icon iconfont icon-jian"></span>
					<span class="icon iconfont icon-jine"></span>
					{{Math.abs(orderDetailData.o_p_discount_money) || 0}}
				</text>
			</view>
			<view class="other-item">
				<text class="left">实付款</text>
				<view class="right color-primary fontBold" >
					<span class="icon iconfont icon-jine"></span>
					{{orderDetailData.o_p_real_pay_money || 0}}
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">订单信息</view>
			<view class="other-item">
				<view>
					<text class="left">订单号:</text>
					<view class="right">
						<text>{{orderDetailData.o_p_code}}</text>
						<text class="copyC" @click="copyC">复制</text>
					</view>
				</view>
			</view>
			<view class="other-item">
				<text class="left">订单状态:</text>
				<text class="right">{{orderDetailData.o_s_status_desc}}</text>
			</view>
		</view>
		<view class="other">
			<view class="title">配送信息</view>
			<view class="other-item">
				<view>
					<text class="left">配送方式:</text>
					<text class="right">物流</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">送货时间:</text>
					<text class="right">预计2022月02月19日</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">物流状态:</text>
					<text class="right">未发货</text>
				</view>
			</view>
		</view>
		<view class="other">
			<view class="title">收货信息</view>
			<view class="other-item">
				<view>
					<text class="left">收货人:</text>
					<text class="right">{{orderDetailData.o_s_recipient}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">联系方式:</text>
					<text class="right">{{orderDetailData.o_s_recipient_contact}}</text>
				</view>
			</view>
			<view class="other-item">
				<view>
					<text class="left">地址:</text>
					<text class="right">{{orderDetailData.o_s_recipient_addr}}</text>
				</view>
			</view>
		</view>
		<view class="account">
			<view class="right" v-if="orderDetailData.o_s_status==1">
				<button class="uni-button" size="mini">取消订单</button>
				<button class="uni-button" type="primary" size="mini" @click="pay">去付款</button>
			</view>
			<view class="right" v-else>
				<button class="uni-button" size="mini">再来一单</button>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { subOrderDetail } from '@/api/order'
	import { statusData } from './enum'
	import { toPay,toThirdPartAPI } from '@/api/pay'
	export default defineComponent({
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option._id); //打印出上个页面传递的参数。
			// this.o_id = option.o_id;
			this.getOrderDetail(option._id);
		},
		setup() {
			// const o_id = ""
			const orderDetailData = ref({})
			const getOrderDetail=(_id)=>{
				subOrderDetail({_id}).then(res=>{
					const select = statusData.find(select => select.value === res.data.o_s_status)
					res.data.o_s_status_desc = select ?  select.label : res.data.o_s_status
					orderDetailData.value = res.data
				})
			}
			const copyC = ()=>{
				uni.setClipboardData({
				    data: orderDetailData.value.o_p_code,
				    success: function () {
				        // console.log('已复制订单号');
				    }
				});
			}
			return {
				getOrderDetail,
				orderDetailData,
				copyC
			}
		},
		methods:{
			pay(){
				// const params = {
				// 	"GoPayType": "1",
				// 	"OrderIniter": "0",
				// 	"BuyerUserID_ThirdSys": "cbdorderpayer",
				// 	"BuyerUserName_ThirdSys": "cbdorderpayer",
				// 	"SellerUserID_ThirdSys": "cbdorderpayee",
				// 	"BuyerUserType_ThirdSys": "1",
				// 	"BuyerTrueName_ThirdSys": "cbdorderpayer",
				// 	"BuyerCompany_ThirdSys": "cbdorderpayer",
				// 	"BuyerAddress_ThirdSys": "完美公司",
				// 	"BuyerPhoneNum_ThirdSys": "13827897383",
				// 	"BuyerCertType_ThirdSys": "17",
				// 	"BuyerCertValue_ThirdSys": "123456789012345678",
				// 	"OrderInfos": [
				// 		{
				// 			"Order_No": "QW20151123012",
				// 			"HaveProducts": 1,
				// 			"Order_Products": [
				// 				{
				// 					"ProductID": 1231,
				// 					"ProductTitle": "衣服",
				// 					"ProductCode": "C001",
				// 					"ProductModel": "M001",
				// 					"ProductPrice": 32.3,
				// 					"ProductAmount": 30,
				// 					"ProductUnit": "件",
				// 					"ProductDesc": "红色"
				// 				},
				// 				{
				// 					"ProductID": 1232,
				// 					"ProductTitle": "裤子",
				// 					"ProductCode": "C002",
				// 					"ProductModel": "M002",
				// 					"ProductPrice": 32.3,
				// 					"ProductAmount": 30,
				// 					"ProductUnit": "件",
				// 					"ProductDesc": "黑色快点送货"
				// 				}
				// 			],
				// 			"Order_Money": 222.33,
				// 			"Order_Time": 20151120125001,
				// 			"Order_Title": "形象使用费",
				// 			"Order_BuyerPhone": "13800138000",
				// 			"ReceiverTrueName_ThirdSys": "1",
				// 			"ReceiverCompany_ThirdSys": "1",
				// 			"ReceiverAddress_ThirdSys": "1",
				// 			"Expand2": "订单1扩展信息"
				// 		}
				// 	],
				// 	"Expand1": "扩展信息2"
				// }
				// toPay(params).then(res=>{
					const res = {
						"TxCode": "SFT10012",
						"ThirdSysID": "SCCBD001",
						"Auth": "e884994fe372f91d6612e48bf87a5503",
						"Data": "UYv09F1mHsLjPn%2FPKCH6MLnAD5GkZnKTg8GR3r%2BzhmsUl1P65hcATiZd6hQnI5Lg5wRYlC6%2BUISK7T6VvFRjLn3mDJtKtXG8wbchmdqj5m2JS5P%2BOiLUT7pnr8N9Xkv7HKt3nIrRMCm3IlhkgMZidRGJSDmUwdpwwvBXrJNBlw19YywNqAhgTdIS%2FHFr%2Bs6SmIzhaI3Iq4sJXN8RkjkAEBZSRIHlLIKXUkmnh7xvo2F581kRAIylI1Fd3rHACqNG6YysV7eACwu1iTaheCwayuJx4jKD%2BrrkGQSy%2BeiRGj3khY3QNHEMDJ9Yg52yz%2Bvvqpk7j7rVKFiRWNgGgfHcfU2U%2Fvks5ps6emfvIl6AxRAq75ZMdzMH196J7i0nSCQ%2FH9%2FuBM76ry9RVW3foKPnn9IKIoupTp%2FVNmRnwJvBYyn6OzOdBevDZMa5wRQjV9eGuoaqjggkSGwe5KZYsCT09I61eSqGULwkR4bXzFOFzeoFuZzW1BWDxTBCc4lHBx%2F5ebW5X5TW32lGnhkfCa26zlpg9oqNoepLHj54ccsYTQE5R0z7UUfjXBy2a9gdCbzqhOC45C12IKta6yjwUcew2snvn%2FFG7bkciMWVE7HRctwFEKuXzXTTX15hjf4CCtzlx%2F1XjwvvNQzTROAkE1GHlYtYgqrMQJLzgWfcdKvjY89YG1WMtnPtOjsbTqIb9ORA8Y2DLjr0yrjSqzMYJ5WEEbYdV85RPw0sTPRF0iXgG8ghjWlWcHO3TV0Dv6RvKVqopIXPbclYBt3jFwVTsPGGVLkBS28%2BnCNOHtHDena2F4fp58zERbHKW2YTlsZqXwW0HP7TH3aVUYTpL8roXCVaA2SanltCWEhJ55ne26tqdvl1OcQWlEUWP2Nf6jqJL9U7pV6zIQTXSzB8HILCj76CVdaWEeE1Rq6gh0CB%2F7H85SJIuZ4o1MjHaQTTQ5PMBovODhfiZweaXTl0k7UKVaoQjZJp%2Be0%2F997a6kB4ZmOT5h7WTrMZpD6xj1F1tVx73AYtd0meEcvhZ83YJpVC3XXcq5x%2FiK8S3%2BgdhQXz9GDtpTdqSv2CIWAihheKBCzLC9p5uKZZp9LMY2khcS18mztNC0a6fDyaYVMLWy1u4rJNCm3E8MFZmxAi5V8hMlEaj2BR9xsmKadl8738fKPIEDFQ1vepk%2FmjMq9xHdJHLqNvzFcYI1L5dr7%2BltfS3JYiHks94itPZ2Faw6TPTrMNcXAoI%2FyWszSp78ntBN8zntAtq5hLpDED630dWPCyq%2Bn%2ByUDj68uhZHg3OQZ1LR8btApe9UMYy4XiFZbHojU2BDjFhB93mYE8b9QqwV3RIZIWxbq8OTlSEGEGMq110382VAjKZIRmAAxOC8gIimK186yvKiznqffh4gK%2Bhbz0h2TWzXl3%2F252tiMArctNNaivofsM%2BJeIGRe3U8yOQJZ28%2FUdeLK3fzALoGuF0%2BbX2TIdwgjjIZGFB8O02ddfQPXmkx3dWJ%2FNJzwKC4QuoGDW0l7d6fWlcK6%2BTlIfO3ybaEMRiMhwKJpwX1GUJw3n7FWiPnYweXWBCsQ2OSQz02uHo651W0tGCMTjTed8k0UJoz9VJnuxdMaYFLWvkYDuQbc1HqTHjKPKECMQoXaghMSsqZWA61yp5vp9IRKbNQRO8qeQmgCPXb60aFTr5Su0Dr%2Bop5NfeoaB9rEUD037pfXOlicYBhB3YsFe%2B5xWrFIfMv18D2aYZShTlP3wImiimaNumqGesr9LYck8eXSMoQLDn0pX%2FQnJgJxn7awXPT2tTu3BfrxJfnVEije4WGv8r%2FvRMX6W2U%2BtC2oZmVhrLe3RDMJn%2BbnfARQ0iUqwAamwr5yqnqRGvlnXxSiLKKQx%2By6A6pvIBg%3D%3D"
					}
					toThirdPartAPI(res).then(res=>{
						console.log(res);
					})
					// http://emall.ccb.com:8880/ecp/thirdPartAPI
				// })
			}
		}
	})
</script>

<style lang="scss" scoped>
	.order-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 100px);
		// margin-bottom:100rpx;
		overflow-x: hidden;
		overflow-y: auto;
		background-color: #f5f5f5;
		.peiSong{
			margin: 20rpx;
			padding:20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			view{
				height: 60rpx;
			}
		}
		.materialList{
			margin: 20rpx;
			padding:0 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
			overflow: hidden;
			.materialItem{
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
		.order-address{
			position:relative;
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
			.detail{
				font-weight: bold;
			}
			.name{
				color:#666;
			}
			.icon-right{
				position: absolute;
				right: 20rpx;
				top: 40rpx;
			}
			
		}
		.account{
			position: fixed;
			bottom:0;
			width: 100%;
			padding: 20rpx 0;
			height: 60rpx;
			background-color: #fff;
			.right{
				.uni-button{
					margin-right: 20rpx;
					// border-radius: 20rpx;
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

	}
</style>
