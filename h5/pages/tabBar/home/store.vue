<template>
	<back-layer :back="back"  />
	<view class="store-container">
		<view  class="storeList" v-if="storeList.length>0">
			<view class="storeItem" v-for="(item,index) in storeList" @click="setDefault(item)">
				<view class="title">
					<view class="left">
						<text class="name">{{item.s_name}}</text>
						<text class="phone">{{item.s_a_phone}}</text>
						<!-- <text class="default" v-show="item.s_a_default">默认</text> -->
					</view>
					<view class="right">
						<text v-if="item._id == old_s_id">当前门店</text>
						<!-- <button v-else type="primary" size="mini" @click="setDefault(item)">
							设为默认
						</button> -->
						<span v-else class="icon iconfont icon-right"></span>
					</view>
				</view>
				<view class="content">
					{{item.s_addr}}
				</view>
			</view>
		</view>
		<view class="noData" v-else>
			<view><span class="icon iconfont icon-dituguanli"></span></view>
			<view><text>您还没有关联的门店</text></view>
		</view>
<!-- 		<view class="storeFoot">
			<button class="submit" type="primary" @click="add">新增收货地址</button>
		</view> -->
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { myStoreList,getStore,setStore } from '@/api/home'
	import { setStorageSync,getStorageSync } from '@/utils/token'
	import { linkStore } from '@/utils/utils'
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		components:{
			BackLayer
		},
		onShow:function(e){
			this.getStoreList()
		},
		setup() {
			const back=reactive({
				title:"门店",
				backUrl:"/pages/tabBar/home/home",
			})
			const old_s_id = ref(linkStore().s_id)
			const storeList = ref([])
			const getStoreList = ()=>{
				myStoreList().then(res=>{
					storeList.value = res.data
				})
			}
			const setDefault = (item)=>{
				const store_id = item._id
				if(store_id == old_s_id.value){
					uni.switchTab({
						url: '/pages/tabBar/home/home'
					})
					return
				}
				const params={
					"set":{ s_id:store_id }
				}
				setStore(params).then(res=>{
					// old_s_id.value = store_id
					uni.showToast({
					    title: "设置成功",
					    duration: 2000,
						icon:"none",
					});
					const {_id:store_id,a_id:r_g_id,s_name:store_name,s_code:store_code} = item
					setStorageSync('linkStore', JSON.stringify({s_id:store_id,r_g_id,store_name,store_code}))
					uni.switchTab({
						url: '/pages/tabBar/home/home'
					})
				})
			}
			
			return {
				storeList,
				getStoreList,
				setDefault,
				old_s_id,
				back
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
				setStorageSync("storeDetail",JSON.stringify(params))
				uni.navigateTo({
				    url: '/pages/store/detail',
				})
			}
		}
	})
</script>

<style lang="scss" scoped>
	.store-container{
		// position: relative;
		width: 100%;
		height: calc(100vh - 130rpx);
		overflow: hidden;
		.storeList{
			overflow-y: auto;
			height: 100%;
			.storeItem{
				position: relative;
				margin: 20rpx;
				padding:20rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
				.title{
					width: 100%;
					height: 60rpx;
					line-height: 60rpx;
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
						text{
							padding:2rpx 5rpx;
							color:$uni-color-primary;
							font-weight: normal;
							border: solid 1px $uni-color-primary;
							border-radius: 10rpx;
						}
					}
				}
				.content{
					word-wrap: break-word;
					word-break: break-all;
				}
			}
		}
		.storeFoot{
			position: fixed;
			bottom: 0;
			width: 100%;
			button{
				margin:20rpx;
			}
		}
	}
</style>
