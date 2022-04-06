<template>
	<view class="title">
		周期物料
	</view>
	<checkbox-group @change="checkboxChange" class="commodityList">
		<view class="commodityItem" v-for="(item,index) in commodityList">
			<checkbox 
				:checked="item.checked" 
				:value="item.r_m_id" 
				:disabled="item.m_stock < item.m_c_count ? true : false" 
			/>
			<image :src="item.m_pic || '/static/logo.jpg'"></image>
			<view class="detail">
				<view class="name">{{item.o_m_name}}</view>
				<view class="unit">{{item.m_package}}</view>
				<view class="price">
					<text class="total">
						<span class="icon iconfont icon-jine"></span>
						{{item.m_price || 0}}
					</text>
					<view class="numHandle">
						<text>{{item.r_m_count || 1}}</text>
					</view>
				</view>
			</view>
		</view>
	</checkbox-group>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressQuery } from '@/api/home'
	import { setStorageSync } from '@/utils/token'

	export default defineComponent({
		props:{
			commodityList : {
				type: Array,
				default() {
					return []
				}
			},
		},
		setup(props) {
			
			return {
			}
		},
		methods: {
			checkboxChange(e) {
				const values = e.detail.value
				this.$emit("change",values)
			},
			
		}
	})
</script>

<style lang="scss" scoped>
.title{
	padding: 0 20rpx;
	font-weight: bold;
}
.commodityList{
	width: calc(100% - 80rpx);
	margin: 20rpx;
	padding:0 20rpx;
	background-color: #fff;
	border-radius: 10rpx;
	box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
	.commodityItem{
		margin: 20rpx 0;
		padding:20rpx 0;
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
</style>
