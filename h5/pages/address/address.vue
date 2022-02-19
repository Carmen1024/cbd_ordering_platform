<template>
	<view class="address-container">
		<view  class="addressList" v-if="addressList.length>0">
			<view class="addressItem" v-for="(item,index) in addressList">
				<view class="title">
					<view class="left">
						<text class="name">{{item.s_a_name}}</text>
						<text class="phone">{{item.s_a_phone}}</text>
						<!-- <text class="default" v-show="item.s_a_default">默认</text> -->
					</view>
					<view class="right" v-if="item.s_a_audit_status==1">
						 <text class="default">审核中</text>
						 <span class="icon iconfont icon-bianji" style="color:#999"></span>
					</view>
					<view class="right" v-else-if="item.s_a_audit_status==2">
						<span class="icon iconfont icon-bianji" @click="update(item)"></span>
					</view>
					<view class="right" v-else>
						<text class="default">审核不通过</text>
						<span class="icon iconfont icon-bianji" @click="update(item)"></span>
					</view>
				</view>
				<view class="content">
					{{item.s_a_province}} {{item.s_a_city}} {{item.s_a_area}} {{item.s_a_detail}}
				</view>
			</view>
		</view>
		<view class="noData" v-else>
			<view><span class="icon iconfont icon-dituguanli"></span></view>
			<view><text>您还没有收货地址</text></view>
		</view>
<!-- 		<view class="addressFoot">
			<button class="submit" type="primary" @click="add">新增收货地址</button>
		</view> -->
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressQuery } from '@/api/home'
	import { setStorageSync } from '@/utils/token'

	export default defineComponent({
		onShow:function(e){
			this.getAddressList()
		},
		setup() {
			
			const addressList = ref([])
			const getAddressList = ()=>{
				const params={"s_id":"10"}
				addressQuery(params).then(res=>{
					addressList.value = res.data
				})
			}
			
			return {
				addressList,
				getAddressList
			}
		},
		methods: {
			lower: function(e) {
				console.log(e)
				// this.loading && this.getMaterialQuery();
			},
			update(item){
				this.toDetail({title:"编辑收货地址",item})
			},
			add(){
				this.toDetail({title:"新增收货地址"})
			},
			toDetail(params){
				setStorageSync("addressDetail",JSON.stringify(params))
				uni.navigateTo({
				    url: '/pages/address/detail',
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	.address-container{
		// position: relative;
		width: 100%;
		height: calc(100vh - 130rpx);
		overflow: hidden;
		.addressList{
			overflow-y: auto;
			height: 100%;
			.addressItem{
				position: relative;
				margin: 20rpx;
				padding:20rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				.title{
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					padding-bottom: 10rpx;
					margin-bottom: 10rpx;
					border-bottom: solid 1px #ddd;
					font-weight: bold;
					.iconfont{
						color:$uni-color-primary
					}
					.left{
						text{
							margin-right: 10rpx;
						}
						.name{
							font-weight: bold;
						}
						.phone{
							color: #999;
							font-size: 20rpx;
						}
					}
					.default{
						color: $uni-color-primary;
						border: solid 1px $uni-color-primary;
						border-radius: 10rpx;
						padding:3rpx 5rpx;
						font-size: 20rpx;
					}
					.right{
						.default{
							margin-right: 10rpx;
							color: $uni-color-warning;
							border-color: $uni-color-warning;
						}
					}
				}
				.content{
					word-wrap: break-word;
					word-break: break-all;
				}
			}
		}
		.addressFoot{
			position: fixed;
			bottom: 0;
			width: 100%;
			button{
				margin:20rpx;
			}
		}
	}
</style>
