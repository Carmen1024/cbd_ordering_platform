<template>
	<view class="shopping-container-search">
		<uni-search-bar 
			@confirm="search"
			@cancel="cancel"
			radius="20"
			maxlength="30"
			bgColor="#fff"
			placeholder="请输入物料名称搜索">
		</uni-search-bar>
		<view class="shopping-container-main">
			<scroll-view v-if="materialData.length>0" ref="materialMod" class="right scroll-Y materialList"
				scroll-y="true" lower-threshold="50"
				@scrolltolower="lower">
				<material-item :materialData="materialData" @jiaReaction="toCartInsert" />
				<view class="loading">{{loading?'加载中':'到底喽'}}</view>
			</scroll-view>
			<view v-else-if="m_name==''" class="noData">
				<view><span class="icon iconfont icon-tishi1"></span></view>
				<view>您还没有输入关键字</view>
			</view>
			<view v-else class="noData">
				<view><span class="icon iconfont icon-tishi1"></span></view>
				<view>还没有相关的商品哦</view>
				<!-- <view>更多商品正在开发中，尽情期待~</view> -->
			</view>
		</view>
		<reaction :reactionMaterials="reactionMaterials" @jiaReaction="toCartInsert" />
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { materialQuerySearch,cartInsert,cartList } from '@/api/subscribe'
	import materialItem from './materialItem'
	import reaction from './reaction'
	import { storeId } from '@/utils/utils'
	export default defineComponent({
		components:{
			materialItem,
			reaction
		},
		onShow: function() {
			this.getCartList();
		},
		setup() {
			const s_id = storeId()
			const materialData = ref([])
			let m_name = ref("")
			let page = {
				"pageSize":20,
				"pageNum":1,
			}
			const scrollTop = ref(0)
			const loading = ref(true)
			const cartMaterialList = ref([])
			const resetSearch = (value)=>{
				m_name.value = value
				loading.value = true
				page.pageNum = 1
				materialData.value = []
			}
			
			const getMaterialQuery=()=>{
				if((m_name??'') == ''){
					loading.value = false
					return
				}
				const params = {
					r_g_id:"10",
					s_id,
					m_name:m_name.value,
					...page
				}
				loading.value && materialQuerySearch(params).then(res=>{
					const data = res.data.map(item=>{
						const select = cartMaterialList.value.find(select => select.m_id === item._id)
						console.log(select);
						item.num = select ? select.m_c_count : 0
						return item
					})
					if(data.length<page.pageSize) loading.value = false;
					materialData.value = [...materialData.value,...data]
					
					page.pageNum++;
					
				})
			}
			const reactionMaterials = ref({
				show:false,
				materials:[]
			})
			const toCartInsert=(params)=>{
				 
				 cartInsert(params).then(res=>{
					 					 
					 const materials = res.data?.r_m_material;
					 if(materials && materials.length>0){
						 reactionMaterials.value={
							 materials : materials,
							 show:true
						 }
					 }else{
						 reactionMaterials.value={
							 materials : [],
							 show:false
						 }
					 }
					 getCartList();
				 })
			}
			const getCartList=()=>{
				cartMaterialList.value = []
				cartList({s_id}).then(res=>{
					cartMaterialList.value = res.data || []
				})
			}
						
			return {
				materialData,
				scrollTop,
				getMaterialQuery,
				loading,
				page,
				m_name,
				resetSearch,
				toCartInsert,
				reactionMaterials,
				getCartList,
				cartMaterialList
			}
		},
		methods: {
			lower: function(e) {
				console.log(e)
				this.getMaterialQuery()
			},
			search:function(e) {
				console.log("search")
				this.resetSearch(e.value)
				this.getMaterialQuery()
			},
			cancel:function(e) {
				this.resetSearch("")
				// this.getMaterialQuery()
			},
		}
		
	})
</script>

<style lang="scss" scoped>
	.shopping-container-search{
		position: relative;
		width: 100%;
		height: calc(100vh - 88rpx);
		overflow: hidden;
		.shopping-container-main{
			overflow: hidden;
			height: calc(100% - 150rpx);
			overflow-x: hidden;
			overflow-y:auto;
			.materialList{
				width: 100%;
				// height: 100%;
				.loading{
					text-align: center;
					padding:30rpx 0;
					// height: 80rpx;
					color:#999;
				}
				.materialItem{
					margin: 20rpx;
					width: calc(100% - 60rpx);
					align-items:center;
					.classify{
						font-weight: bold;
						margin-bottom: 20rpx;
					}
					.material{
						display: flex;
						// margin: 20rpx;
						width: 100%;
						padding:20rpx 10rpx;
						align-items:center;
						box-shadow: 0 0 10rpx rgba(0, 0, 0, .1);
						background: #fff;
						border-radius: 10rpx;
						image{
							margin: 0 10rpx;
							width: 150rpx;
							height: 150rpx;
							border-radius: 20rpx;
						}
						.detail{
							width: calc(100% - 170rpx);
							height: 150rpx;
							// line-height: 50rpx;
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
								.iconfont{
									font-size:18rpx
								}
							}
							.price{
								width: 100%;
								height: 60rpx;
								line-height: 60rpx;
								.left{
									// color:#005bac;
									// width:calc(100% - 200rpx);
									float: left;
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
		}
	}
</style>
<style lang="scss">
	.shopping-container-search{
		.reaction-container{
			bottom:0;
		}
	}
</style>
