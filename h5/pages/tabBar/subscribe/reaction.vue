<template>
	<view class="reaction-container" v-show="reactionMaterials.show">
		<view class="title">
			<text>关联物料</text>
		</view>
		<view class="commodityList">
			<view class="commodityItem" v-for="(item,index) in reactionMaterials.materials">
				<image :src="item.img || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.m_name || '物料名称'}}</view>
					<view class="unit">500g*30袋/箱</view>
					<view class="price">
						<text class="total">
							<span class="icon iconfont icon-jine"></span>
							<text v-if="item.m_prices">
								{{item.m_prices[0].m_p_money}}
							</text>
						</text>
						<view class="right numHandle" @click="jia(item)">
							<span class="icon iconfont icon-goumai"></span>
							<text v-if="item.num && item.num>0">{{item.num}}</text>
						</view>
					</view>
				</view>
			</view>
		</view> 
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartList } from '@/api/subscribe'
	export default defineComponent({
		props:{
			reactionMaterials : {
				type: Object,
				default() {
					return {
						show:false,
						materials:[]
					}
				}
			},
		},
		setup(props) {
			// const cartInsert = ()=>{
			const jia=(item)=>{
				console.log(item);
				// r_m_count: 275
				// r_m_id: "a94d15dc7f1f414c8c25d91c038ccbc5"
				// const params = {
				// 	"m_id":item._id,
				//     "m_c_count":1,
				//     "m_c_unit":1,
				//     "s_id":"10"
				// }
				// toCartInsert(params)
			}
			
			// },
			return {
				jia,
			}
		},
	})
</script>
<style lang="scss" scoped>
	.reaction-container{
		position: fixed;
		bottom: 200rpx;
		left: 0;
		width: 100%;
		background-color: #f5f5f5;
		.title{
			padding:10rpx 20rpx;
			height: 40rpx;
			line-height: 40rpx;
			background-color: #f9cdad;
			border-radius: 10rpx 10rpx 0 0;
			color:#fff;
			text:first-child{
				font-weight: bold;
			}
			text:last-child{
				font-size: 20rpx;
			}
		}
		.commodityList{
			max-height: 400rpx;
			overflow-x: hidden;
			overflow-y:auto;
			background-color: #fff;
			.commodityItem{
				margin: 20rpx;
				width: calc(100% - 80rpx);
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
							position: relative;
							.iconfont{
								border-radius: 50%;
								padding:10rpx;
								color:#fff;
								background-color: $uni-color-primary;
							}
							text{
								position: absolute;
								text-align: center;
								width: 30rpx;
								height: 30rpx;
								line-height: 30rpx;
								font-size: 20rpx;
								top: -5rpx;
								right: -5rpx;
								border-radius: 50%;
								color:#fff;
								background-color: #fc758e;
							}
						}
					}
				}
			}
		}
		
	}
</style>
