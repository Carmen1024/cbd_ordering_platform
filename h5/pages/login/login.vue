<template>
	<view class="user-container">
		<account @loginAction="action" v-if="style==0" />
		<verification @loginAction="action" v-else />
		<view class="user-container-style">
			<view>
				其他登录方式
			</view>
			<view class="styles">
				<view class="style-item" v-if="style==1" @click="style=0">
					<span class="icon iconfont icon-a-shoujihaoshouji"></span>
					<view>账号</view>
				</view>
				<view class="style-item" v-else @click="style=1">
					<span class="icon iconfont icon-wode1"></span>
					<view>手机</view>
				</view>
			</view>

		</view>
	
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { setStorageSync } from '@/utils/token'
	import Account from './components/account.vue'
	import verification from "./components/verification.vue"
	// import { getStore } from "@/api/home"
	export default defineComponent({
		components:{
			Account,
			verification
		},
		setup() {
			const style = ref(0)

			return {
				style
			}
		},
		methods: {
			action(){
				// "store_code": "837010030",
				// "store_name": "3892-茶百道济南章丘和谐广场店",
				// "_id": "3734828b44084cf9a0c99847133b9242"
				uni.switchTab({
				    url: '/pages/tabBar/subscribe/subscribe'
				})
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './login.scss'
</style>
