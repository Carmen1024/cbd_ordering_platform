<template>
	<view class="peiSong">
		<text class="price"  v-if="[0].includes(order.o_s_status)">
			订单已取消
		</text>
		<text class="price"  v-else-if="[1].includes(order.o_s_status)">
			订单未支付，无物流信息
		</text>
		<text class="price" v-else>
			暂无物流信息
		</text>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	export default defineComponent({
		components:{
			
		},
		props:{
			order : {
				type: Object,
				default(){
					return {}
				}
			},
		},
		setup(props) {
			
			return {
				
			}
		},
		methods:{
			
		}
	})
</script>

<style lang="scss">
	.button-container{
		width: 100%;
		display: flex;
		justify-content: flex-end;
		// width: 200rpx;
		.iconfont{
			padding:0 10rpx;
			color:#999;
		}
	}
</style>
