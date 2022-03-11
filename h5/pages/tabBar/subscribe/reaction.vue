<template>
	<view class="reaction-container" v-show="reactionMaterials.show">
		<view class="title">
			<text>关联物料({{reactionMaterials.materials.length}})</text>
			<span class="right icon iconfont icon-close" @click="reactionMaterials.show=false"></span>
		</view>
		<view class="commodityList">
			<view class="commodityItem" v-for="(item,index) in reactionMaterials.materials">
				<image :src="item.img || '/static/logo.jpg'"></image>
				<view class="detail">
					<view class="name">{{item.m_name || '物料名称'}}</view>
					<view class="unit">
						<text class="left">500g*30袋/箱</text>
						<text class="right">
							<span class="icon iconfont icon-jine"></span>
							<text v-if="item.m_prices">
								{{item.m_prices[0].m_p_money}}/箱
							</text>
							<text v-else>100/箱</text>
						</text>
					</view>
					<view class="price">
						<text class="left total">
							关联件数：{{item.r_m_count}}
						</text>
						<view class="right numHandle" @click="jia(item)">
							<span class="icon iconfont icon-goumai"></span>
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
	import { storeId } from '@/utils/utils'
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
			const s_id = storeId()
			return {
				s_id
			}
		},
		methods:{
			jia(item){
				console.log(item);
				const params = {
					"m_id":item.r_m_id,
				    "m_c_count":item.r_m_count,
				    "m_c_unit":1,
				    "s_id":this.s_id
				}
				this.$emit("jiaReaction",params)
			}
		}
	})
</script>
<style lang="scss" scoped>
	.reaction-container{
		position: fixed;
		bottom: 195rpx;
		left: 0;
		width: 100%;
		// height: 400rpx;
		background-color: #f5f5f5;
		border-bottom: solid 1px #ddd;
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
					width: calc(100% - 150rpx);
					height: 150rpx;
					line-height: 50rpx;
					font-size: 26rpx;
					.name{
						font-weight: bold;
						height: 50rpx;
					}
					.unit{
						width: 100%;
						height: 40rpx;
						color:#666;
						font-size: 20rpx;
					}
					.price{
						width: 100%;
						height: 60rpx;
						line-height: 60rpx;
						overflow: hidden;
						.total{
							width: 50%;
						}
						.numHandle{
							.iconfont{
								border-radius: 50%;
								padding:10rpx;
								color:#fff;
								background-color: $uni-color-primary;
							}
						}
					}
				}
			}
		}
		
	}
</style>
