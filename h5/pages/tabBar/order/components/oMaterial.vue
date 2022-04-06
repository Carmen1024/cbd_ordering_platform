<template>
	<view class="materialList">
		<view class="materialItem" v-for="(material,index) in materials" v-show="materials.length>0 && index<3">
			<image :src="material.img || '/static/logo.jpg'"></image>
			<view class="detail">
				<view class="name">{{material.o_m_name || '物料名称'}}</view>
				<view class="price">
					<text class="total">
						<span class="icon iconfont icon-jine"></span>{{(material.o_m_price / 100).toFixed(2)}}
					</text>
					<view class="numHandle">
						<text>x{{material.o_m_count}}</text>
					</view>
				</view>
			</view>
		</view>
		<view v-show="materials.length>3" class="more">
			查看更多 <span class="icon iconfont icon-right"></span>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { statusData } from './enum'
	export default defineComponent({
		props:{
			materials : {
				type: Array,
				default(){
					return []
				}
			},
		},
		setup(props) {
			
			return {
				
			}
		},
	})
</script>

<style lang="scss">
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

</style>
