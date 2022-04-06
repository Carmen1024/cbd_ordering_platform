<template>
	<back-layer :back="back"  />
	<view class="materialData">
		<image :src="materialData.img || '/static/logo.jpg'"></image>
		<view class="price">
			<span class="icon iconfont icon-jine"></span>
			<text v-if="materialData.m_prices">
				{{materialData.m_price}}
			</text>
			<text v-else>0.00</text>
		</view>
		<view class="name">
			{{materialData.m_name || '物料名称'}}
		</view>
		<view class="detail">
			<view class="detailItem">
				<view>{{materialData.m_stock || 999}}</view>
				<view>库存量</view>
			</view>
			<view class="detailItem">
				<view>{{materialData.m_package}}</view>
				<view>包装</view>
			</view>
			<view class="detailItem">
				<view>{{materialData.classifyName}}</view>
				<view>分类</view>
			</view>
		</view>
		<cart :total="materialData.num" />
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartList,cartDel,cartDelByM } from '@/api/subscribe'
	import { linkStore } from '@/utils/utils'
	import { getStorageSync } from "@/utils/token"
	import BackLayer from '@/components/backLayer'
	import cart from './cart.vue'
	export default defineComponent({
		components:{
			BackLayer,
			cart
		},
		computed:{
			materialData(){
				const num = this.material.m_prices ? this.material.m_prices[0].m_p_money : 0
				this.material.m_price = (num / 100).toFixed(2)
				return this.material
			},
			back(){
				const data={
					title:"物料详情",
					backUrl:this.material.backUrl,
				}
				return data
			}
		},
		setup(props) {
			const material =  ref(getStorageSync("material") || {})
			return {
				material
			}
		},
		methods:{
			jia(materialData){
				if(materialData.num >= materialData.m_stock){
					uni.showToast({
					    title: '库存已不足',
					    duration: 2000,
						icon:"none"
					});
					return
				}else if(materialData.c_valid==0){
					uni.showToast({
					    title: '物料已失效，无法加购',
					    duration: 2000,
						icon:"none"
					});
					return
				}
				materialData.num++
				const params = {
					"m_id":materialData._id,
				    "m_c_count":1,
				    "m_c_unit":1,
				    "s_id":linkStore().s_id
				}
				this.$emit("jiaReaction",params)
			}
		}
	})
</script>

<style lang="scss">
	.materialData{
		width:100%;
		line-height: 50rpx;
		image{
			width: 100%;
			// height: inherit;
			// height: auto;
		}
		.price{
			padding:0 20rpx;
			color:$uni-color-primary
		}
		.name{
			padding:0 20rpx;
			font-weight: bold;
			font-size: 30rpx;
			line-height: 60rpx;
		}
		.detail{
			display: flex;
			justify-content: space-around;
			border-top: solid 1px #ddd;
			border-bottom: solid 1px #ddd;
			padding:20rpx 0;
			.detailItem{
				text-align: center;
				view:last-child{
					color:#999;
					font-size: 16rpx;
				}
			}
		}
	}

	
</style>
