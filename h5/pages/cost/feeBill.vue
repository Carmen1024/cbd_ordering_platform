<template>
	<view class="feeBill-container">
		<view class="tab">
			<text v-for="item in tabOptions" @click="checkTab(item)" :class="tabIndex==item.value && 'check'">
				{{item.label}}
			</text>
		</view>
		<scroll-view  class="right scroll-Y feeBillList"
		scroll-y="true" lower-threshold="50"
		@scrolltolower="lower">
			<view class="feeBillItem" v-for="(item,index) in feeBillList">
				<view class="title">
					<span class="icon iconfont icon-tongzhi"></span>
					{{item.title}}
				</view>
				<view class="content">
					{{item.content}}
					<!-- <span class="icon iconfont icon-right"></span> -->
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { tabOptions } from './enum'
	export default defineComponent({
		setup() {
			
			const feeBillList = ref([
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{title:'草莓1月20日预售通知',content:'草莓将于1月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
			])
			const page = {
				"pageSize":20,
				"pageNum":1
			}
			const scrollTop = ref(0)
			const tabIndex = ref(1)
			return {
				feeBillList,
				scrollTop,
				tabIndex
			}
		},
		methods: {
			lower: function(e) {
				console.log(e)
				// this.loading && this.getMaterialQuery();
			},
			checkTab(item){
				this.tabIndex = item.value
			}
		}
	})
</script>

<style lang="scss" scoped>
	.feeBill-container{
		// position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		.feeBillList{
			overflow-y: auto;
			height: 100%;
			.feeBillItem{
				position: relative;
				margin: 20rpx;
				padding:20rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				
				.title{
					padding-bottom: 10rpx;
					margin-bottom: 10rpx;
					border-bottom: solid 1px #ddd;
					font-weight: bold;
					span{
						color:$uni-color-primary
					}
				}
			}
		}
	}
</style>
