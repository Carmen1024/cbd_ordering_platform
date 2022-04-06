<template>
	<view class="shopping-container">
		<view class="shopping-container-title">
			<view class="left">
				<image class="logo" src="/static/logo.jpg"></image>
				<text>{{my_store.store_name}}</text>
			</view>
			<view class="right" @click="toSearch">
				<span class="icon iconfont icon-sousuo"></span>搜索
			</view>
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
			<scroll-view ref="materialMod" class="right scroll-Y materialList"
				:scroll-top="scrollTop"
				scroll-y="true" lower-threshold="50"
				:scroll-into-view="classifyDomId"
				@scrolltolower="lower" @scroll="scroll">
				<material-item :materialData="materialData" @jiaReaction="toCartInsert" @jianReaction="getCartCountAndPrice" />
				<view class="loading">{{loading?'加载中':'到底喽'}}</view>
			</scroll-view>
		</view>
		<reaction :reactionMaterials="reactionMaterials" @jiaReaction="toCartInsert" />
		<cart :countAndPrice="countAndPrice" />
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import cart from './cart'
	import reaction from './reaction'
	import materialItem from './materialItem'
	import { classifyQuery,materialQuery,cartCountAndPrice,cartInsert,cartList,cartDel } from '@/api/subscribe'
	import { linkStore } from '@/utils/utils'
	export default defineComponent({
		components:{
			cart,
			reaction,
			materialItem
		},
		onShow: function() {
			this.my_store = linkStore()
			this.getCartCountAndPrice();
			this.getCartList();
		},
		setup() {
			
			const my_store = ref(linkStore())
			const classifyData = ref([])
			const materialData = ref([])
			const countAndPrice = ref({})
			const page = {
				"pageSize":20,
				"pageNum":1
			}
			const scrollClassifyIndex = ref(0)
			const scrollTop = ref(0)
			const loading = ref(true)
			const classifyDomId = ref("")
			const topList = ref([])
			
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
			//获取购物车的数量
			const cartMaterialList = ref([])
			const getCartList = ()=>{
				cartList({s_id:linkStore().s_id}).then(res=>{
					cartMaterialList.value = res.data || []
					scrollClassifyIndex.value = 0
					scrollTop.value = 0
					loading.value = true
					classifyDomId.value = ""
					topList.value = []
					materialData.value = []
					page.pageNum = 1
					getMaterialQuery();
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
				const params = {
					r_g_id:linkStore().r_g_id,
					s_id:linkStore().s_id,
					...page
				}
				materialQuery(params).then(res=>{
					console.log(cartMaterialList.value);
					const data = res.data.map(item=>{
						const select = cartMaterialList.value.find(select => select.m_id === item._id)
						console.log(select);
						item.num = select ? select.m_c_count : 0
						return item
					})
					if(data.length<page.pageSize) loading.value = false;
					materialData.value = [...materialData.value,...data]
					
					page.pageNum++;
					
					setTimeout(() => {
						setTopList();
					}, 100)
				})
			}
			const reactionMaterials = ref({
				show:false,
				materials:[]
			})
			const getCartCountAndPrice=()=>{
				cartCountAndPrice({ s_id:linkStore().s_id }).then(res=>{
					countAndPrice.value = res.data;
				})
			}
			const setTopList = ()=>{
				topList.value = classifyData.value.map(item=>{
					const classifyId = item._id
					const classifyDomId = "classify_"+classifyId
					const classifyDom = document.getElementById(classifyDomId)
					return document.getElementById(classifyDomId) && document.getElementById(classifyDomId).offsetTop
				}).filter(item=>item)
				console.log(topList.value);
			}
						
			return {
				classifyData,
				materialData,
				scrollClassifyIndex,
				countAndPrice,
				getCartCountAndPrice,
				toCartInsert,
				reactionMaterials,
				scrollTop,
				getMaterialQuery,
				loading,
				page,
				classifyDomId,
				topList,
				setTopList,
				getCartList,
				my_store,
			}
		},
		methods: {
			classifyCheck(item,index){
				// const params = {classifyId:item._id,this.page}
				this.scrollClassifyIndex = index
				const classifyId = item._id
				const classifyDomId = "classify_"+classifyId
				const classifyDom = document.getElementById(classifyDomId)
				if(classifyDom){
					this.classifyDomId = classifyDomId
				}else{
					const lastM = this.materialData[this.materialData.length-1]
					const lastMId = lastM?._id || ''
					const params = {
						r_g_id:linkStore().r_g_id,
						s_id:linkStore().s_id,
						classifyId,lastMId,pageSize:this.page.pageSize,
					}
					materialQuery(params).then(res=>{
						const data = res.data.map(item=>{
							item.num = 0
							return item
						})
						if(data.length<this.page.pageSize) this.loading = false
						
						this.materialData = [...this.materialData,...data]
						
						this.page.pageNum=++res.pageNum;
						
						
						setTimeout(() => {
							this.classifyDomId = classifyDomId
							this.setTopList();
						}, 100)
						
					})
				}
				
			},
			lower: function(e) {
				console.log(e)
				this.loading && this.getMaterialQuery()
			},
			//后期再优化一下效率
			scroll:function(e){
				// document.getElementById(classifyDomId)
				const scrollTop = e.detail.scrollTop + 10
				const topList = this.topList
				let scrollClassifyIndex = null
				for(let i=0;i<topList.length;i++){
					const i_ = i+1
					// console.log(topList[i],scrollTop,topList[i_])
					if((i==topList.length-1) && scrollTop>topList[i]){
						scrollClassifyIndex = i
						this.scrollClassifyIndex = i
					}else if(scrollTop>topList[i] && scrollTop<=topList[i_]){
						scrollClassifyIndex = i
						this.scrollClassifyIndex = i
					}
					// console.log("scrollClassifyIndex",scrollClassifyIndex)
					if(scrollClassifyIndex) break
				}
			},
			toSearch(){
				uni.navigateTo({
					url: '/pages/tabBar/subscribe/search',
				})
			},
	
		
		},
	})
</script>

<style lang="scss" scoped>
	.shopping-container{
		position: relative;
		width: 100%;
		height: calc(100vh - 100rpx);
		overflow: hidden;
		&-title{
			width: calc(100% - 40rpx);
			padding:20rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-bottom: solid 1px rgba(0, 0, 0, .1);
			.left{
				// font-size: 38rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
				.logo{
					margin-right: 10rpx;
					width: 50rpx;
					height: 50rpx;
					border-radius: 50%;
				}
			}
			.right{
				padding:0 10rpx;
				line-height: 50rpx;
				border-radius: 30rpx;
				border: solid 1px $uni-color-primary;
				color:$uni-color-primary;
				background-color: #fff;
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
					line-height: 40rpx;
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
