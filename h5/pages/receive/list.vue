<template>
	<back-layer :back="back"  />
	<view class="shopping-container">
		<view class="commodityMod">
			<view class="commodityItem" v-for="(item,index) in materialList">
				<view class="other" @click="toDetail(item)">
					<view class="title">
						<span class="icon iconfont icon-yifahuo"></span>
						{{index+1}}
						<span class="icon iconfont icon-right right"></span>
					</view>
					<view class="other-item">
						<text class="left">单据Id</text>
						<view class="right">{{item._id}}</view>
					</view>
					<view class="other-item">
						<text class="left">单据编号</text>
						<view class="right">{{item.i_code}}</view>
					</view>
					<view class="other-item">
						<text class="left">单据类型</text>
						<view class="right">{{item.i_type_desc}}</view>
					</view>
					<view class="other-item">
						<text class="left">单据内容类型</text>
						<view class="right">{{item.i_detail_type_desc}}</view>
					</view>
					<view class="other-item">
						<text class="left">子订单Id</text>
						<view class="right">{{item.o_s_id}}</view>
					</view>
					<view class="other-item">
						<text class="left">子订单编号</text>
						<view class="right">{{item.o_s_code}}</view>
					</view>
					<view class="other-item">
						<text class="left">订单类型</text>
						<view class="right">{{item.o_type_desc}}</view>
					</view>
				</view>
			</view>			
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { receiveList,receiveMaterials } from '@/api/order'
	import { typeOptions,detailTypeOptions,orderTypeOptions } from './enum'
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		components:{
			BackLayer
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option.o_s_id); //打印出上个页面传递的参数。
			// this.o_id = option.o_id;
			this.getReceiveList(option.o_s_id);
		},
		setup() {
			const back=reactive({
				title:"发货单",
				backUrl:"/pages/tabBar/order/order",
			})
			const materialList = ref([])
			const getReceiveList=(o_s_id)=>{
				receiveList({ o_s_id }).then(res=>{
					//typeOptions,detailTypeOptions,orderTypeOptions
					materialList.value = res.data.map(item=>{
						const i_type = typeOptions.find(select => select.value === item.i_type)
						item.i_type_desc = i_type ?  i_type.label : item.i_type
						const i_detail_type = detailTypeOptions.find(select => select.value === item.i_detail_type)
						item.i_detail_type_desc = i_detail_type ?  i_detail_type.label : item.i_detail_type
						const o_type = orderTypeOptions.find(select => select.value === item.o_type)
						item.o_type_desc = o_type ?  o_type.label : item.o_type
						return item
					});
				})
			}
			
			return {
				getReceiveList,
				materialList,
				back
			}
		},
		methods: {
			toDetail(order){
				const arr = []
				for(let i in order){
					arr.push(`${i}=${order[i]}`)
				}
				const url = '/pages/receive/detail?'+arr.join('&')
				uni.navigateTo({ url })
			}
		}
	})
</script>

<style lang="scss" scoped>
	.shopping-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 100rpx);
		overflow: hidden;
		.commodityMod{
			width: 100%;
			height: 100%;
			overflow-x: hidden;
			overflow-y:auto;
			background-color: #f5f5f5;
			.commodityItem{
				margin: 20rpx;
				padding:20rpx;
				background-color: #fff;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .2);
				border-radius: 10rpx;
				overflow: hidden;
				// width:100%;
				.other{
					.title{
						padding:10rpx 20rpx;
						// font-weight: bold;
						.icon-yifahuo{
							// margin-right: 10rpx;
							color: #fff;
							padding:10rpx;
							background-color: $uni-color-primary;
							border-radius: 50%;
						}
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
