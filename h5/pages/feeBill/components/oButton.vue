<template>
	<view class="button-container">
		<view v-show="order.o_s_status==1">
			<pay-button orderType="bill" :order="order" />
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref } from "vue"
	import { statusData } from './enum'
	import PayButton from "@/pages/pay/payButton.vue"
	export default defineComponent({
		components:{
			PayButton
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
