<template>
	<view class="billList">
		<view class="billItem" v-for="(bill,index) in bills" v-show="bills.length>0 && index<3">
			<view class="detail">
				<view class="name left">{{bill.cost_name || '费用名称'}}</view>
				<view class="price right" v-if="toMain" @click="toMainPage(bill)">
					<span class="icon iconfont icon-jine"></span>{{(bill.cost_money / 100).toFixed(2) || 0}}<span class="icon iconfont icon-right"></span>
				</view>
				<view class="price right" v-else>
					<span class="icon iconfont icon-jine"></span>{{(bill.cost_money / 100).toFixed(2) || 0}}
				</view>
			</view>
		</view>
		<view v-show="bills.length>3" class="more">
			查看更多 <span class="icon iconfont icon-right"></span>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { statusData } from './enum'
	export default defineComponent({
		props:{
			bills : {
				type: Array,
				default(){
					return []
				}
			},
			toMain:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		setup(props) {
						
			return {
				
			}
		},
		methods:{
			toMainPage(bill){
				this.$emit("toMain",bill)
			}
		}
	})
</script>

<style lang="scss">
	.billList{
		margin: 20rpx 0;
		overflow: hidden;
		.billItem{
			margin: 20rpx 0;
			display: flex;
			align-items:center;
			.detail{
				width: 100%;
				line-height: 50rpx;
				font-size: 26rpx;
				.name{
					font-weight: bold;
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
