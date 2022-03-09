<template>
	<view class="materialItem" v-for="(item,index) in materialData">
		<view v-if="item.isFirst" class="classify" :id="`classify_${item.classifyId}`">
			{{item.classifyName}}
		</view>
		<view class="material">
			<image :src="item.img || '/static/logo.jpg'"></image>
			<view class="detail">
				<view class="name">{{item.m_name || '物料名称'}}</view>
				<view class="unit">
					<text class="left">{{item.m_package}}</text>
					<text class="right">
						<span class="icon iconfont icon-jine"></span>
						<text v-if="item.m_prices">
							{{item.m_prices[0].m_p_money}}/箱
						</text>
						<text v-else>0/箱</text>
					</text>
				</view>
				<view class="price">
					<view class="left total">
						库存量：{{item.m_stock || 999}}
					</view>
					<view class="right">
						<span v-show="item.num>0" class="icon iconfont icon-jian" @click="jian(item)"></span>
						<view class="numHandle" @click="jia(item)">
							<span class="icon iconfont icon-goumai"></span>
							<text v-if="item.num && item.num>0">{{item.num}}</text>
						</view>

					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { cartCountAndPrice,cartInsert,cartList,cartDel,cartDelByM } from '@/api/subscribe'
	export default defineComponent({
		props:{
			materialData : {
				type: Array,
				default() {
					return []
				}
			},
		},
		setup(props) {

			return {
				
			}
		},
		methods:{
			jia(item){
				if(item.num >= item.m_stock){
					uni.showToast({
					    title: '库存已不足',
					    duration: 2000,
						icon:"none"
					});
					return
				}else if(item.c_valid==0){
					uni.showToast({
					    title: '物料已失效，无法加购',
					    duration: 2000,
						icon:"none"
					});
					return
				}
				item.num++
				const params = {
					"m_id":item._id,
				    "m_c_count":1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				this.$emit("jiaReaction",params)
			},
			jian(item){
				console.log("减少",item)
				const _this = this;
				if(item.num<=1){
					// uni.showToast({
					//     title: '暂时无法清空',
					//     duration: 2000,
					// 	icon:"none"
					// });
					uni.showModal({
						content: '是否确认删除该物料',
						showCancel: true,
						success: function (res) {
							if (res.confirm) {
								item.num--
								_this.deleteByM(item)
							}
						}
					})
				}else{
					item.num--
					_this.reduce(item)
				}
			},
			// 删减物料
			reduce(item){
				const params = {
					"m_id":item._id,
				    "m_c_count":-1,
				    "m_c_unit":1,
				    "s_id":"10"
				}
				this.$emit("jiaReaction",params)
			},
			deleteByM(item){
				const _this = this;
				const params = {
					"s_id":"10",
					"m_id":item._id
				}
				cartDelByM(params).then(res=>{
					_this.$emit("jianReaction")
				})
			},
			// 最终删除购物车物料
			deleteByIds(ids){
				const _this = this;
				cartDel({ids}).then(res=>{
					uni.showToast({
					    title: '删除成功',
					    duration: 2000,
						icon:"none"
					});
					_this.$emit("jianReaction")
				})
			},
			
		}
	})
</script>

<style lang="scss">
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
					.right{
						.iconfont{
							border-radius: 50%;
							padding:8rpx;
							color:#fff;
							background-color: $uni-color-primary;
							border: solid 1px $uni-color-primary;
						}
						.icon-jian{
							margin-right: 10rpx;
							color:$uni-color-primary;
							background-color: #fff;
							border: solid 1px #ddd;
						}
						.numHandle{
							display: inline-block;
							position: relative;
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

	
</style>
