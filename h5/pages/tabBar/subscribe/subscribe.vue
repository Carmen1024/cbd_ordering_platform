<template>
	<view class="shopping-container">
		<view class="shopping-container-title">
			<view class="left">
				<image class="logo" src="/static/logo.jpg"></image>
				<text>茶百道双楠店</text>
			</view>
<!-- 			<view class="right">
				搜索按钮
			</view> -->
		</view>
		<view class="shopping-container-main">
			<view class="left classifyList">
				<view 
					:class="scrollClassifyIndex===index?'openClassify classifyItem':'classifyItem'"
					v-for="(item,index) in classifyData" 
					@click="classifyCheck(item,index)">
					<view>{{item.clf_name}}</view>
				</view>
			</view>
			<view class="right materialList">
				<view class="materialItem" v-for="(item,index) in materialData">
					<view v-if="item.isFirst" class="classify">
						{{item.classifyName}}
					</view>
					<view class="material">
						<image :src="item.img || '/static/logo.jpg'"></image>
						<view class="detail">
							<!-- 
							m_order_upper	订购上限。
							m_order_step_type	订货规则，1:按倍数递增,2:按逐1递增
							m_order_lower	订购下限。
							{{item.m_prices || 100}}/{{item.m_units || '箱'}}
							-->
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
								<view class="left total">
									库存量：{{item.m_stock || 999}}
								</view>
								<view class="right numHandle" @click="jia(item)">
									<span class="icon iconfont icon-goumai"></span>
									<text v-if="item.num && item.num>0">{{item.num}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<reaction :reactionMaterials="reactionMaterials" @jiaReaction="toCartInsert" />
		<cart :countAndPrice="countAndPrice" />
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import cart from './cart'
	import reaction from './reaction'
	import { classifyQuery,materialQuery,cartCountAndPrice,cartInsert,cartList } from '@/api/subscribe'
	export default defineComponent({
		components:{
			cart,
			reaction
		},
		setup() {
			const classifyData = ref([])
			const materialData = ref([])
			const countAndPrice = ref({})
			const scrollClassifyIndex = ref(0)
			
			const jia = (item)=>{
				item.num++
				const params = {
					"m_id":item._id,
				    "m_c_count":1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				toCartInsert(params)
			}
			const toCartInsert=(params)=>{
				 
				 cartInsert(params).then(res=>{
					 
					 getCartCountAndPrice();
					 
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
				 })
			}
			const getClassifyQuery=()=>{
				const params={
					"clf_inner_type": true,
					"clf_lay":1
				}
				classifyQuery(params).then(res=>{
					classifyData.value = res.data
				})
			}
			getClassifyQuery();
			const getMaterialQuery=()=>{
				const params={
					"pageSize":10,
					"pageNum":1
				}
				materialQuery(params).then(res=>{
					materialData.value = res.data.map(item=>{
						item.num = 0
						return item
					})
				})
			}
			getMaterialQuery();
			const reactionMaterials = ref({
				show:false,
				materials:[]
			})
			const getCartCountAndPrice=()=>{
				cartCountAndPrice({"s_id": "10"}).then(res=>{
					countAndPrice.value = res.data;
				})
			}
			getCartCountAndPrice();
			
			return {
				classifyData,
				materialData,
				scrollClassifyIndex,
				countAndPrice,
				getCartCountAndPrice,
				jia,
				toCartInsert,
				reactionMaterials
			}
		},
		methods: {
			classifyCheck(item,index){
				this.scrollClassifyIndex = index;
				console.log("切换tab",item)
			},
			
		}
		
	})
</script>

<style lang="scss" scoped>
	.shopping-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 50px);
		overflow: hidden;
		&-title{
			width: 100%;
			height: 100rpx;
			border-bottom: solid 1px rgba(0, 0, 0, .1);
			background: #f5f5f5;
			view{
				margin: 20rpx;
				font-size: 38rpx;
				font-weight: bold;
			}
			.left{
				.logo{
					float: left;
					margin-right: 10rpx;
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
				}
			}
			.right{
				margin-left: 10rpx;
				font-size: 28rpx;
				color:#666;
			}
			
		}
		&-main{
			overflow: hidden;
			height: calc(100% - 200rpx);
			.classifyList{
				width: 150rpx;
				height: 100%;
				background: #f5f5f5;
				overflow-x: hidden;
				overflow-y:auto;
				// border-right: solid 1px #ddd;
				.classifyItem{
					padding:20rpx 10rpx;
					line-height: 30rpx;
				}
				.openClassify{
					background-color: #fff;
				}
			}
			.materialList{
				width: calc(100% - 155rpx);
				height: 100%;
				overflow-x: hidden;
				overflow-y:auto;
				// background-color: #f5f5f5;
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
