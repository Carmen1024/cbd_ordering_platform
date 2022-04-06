<template>
	<view class="notice-container">
		<scroll-view  class="right scroll-Y noticeList"
		scroll-y="true" lower-threshold="50"
		@scrolltolower="lower">
			<view class="noticeItem" v-for="(item,index) in noticeList">
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

	export default defineComponent({
		setup() {
			
			const noticeList = ref([
				{title:'草莓3月20日预售通知',content:'草莓将于3月20日进行预售，199元/箱，规格为5KG，每账号限定3箱！'},
				{
					title:'认准唯一官网∶www.chabaidao.com',
					content:'茶百道从未授权或许可任何网站、企业、个人以"茶百道"品牌的名义进行招商加盟，一切加盟合作都需要到公司进行考察、申请，才能进行下一步合作。'
				},
			])
			const page = {
				"pageSize":20,
				"pageNum":1
			}
			const scrollTop = ref(0)
			return {
				noticeList,
				scrollTop
			}
		},
		methods: {
			lower: function(e) {
				console.log(e)
				// this.loading && this.getMaterialQuery();
			},
			
		}
	})
</script>

<style lang="scss" scoped>
	.notice-container{
		// position: relative;
		width: 100%;
		height: calc(100vh - 100rpx);
		overflow: hidden;
		.noticeList{
			overflow-y: auto;
			width: 100%;
			height: 100%;
			.noticeItem{
				// position: relative;
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
