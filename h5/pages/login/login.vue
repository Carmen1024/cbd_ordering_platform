<template>
	<view class="user-container">
		<account1 v-if="style==0" />
		<verification v-else />
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
	import account1 from './components/account.vue'
	import verification from "./components/verification.vue"
	
	export default defineComponent({
		components:{
			account1,
			verification
		},
		setup() {
			const style = ref(0)

			return {
				style
			}
		},
		methods: {
			
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './login.scss'
</style>
