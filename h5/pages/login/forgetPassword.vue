<template>
	<view class="user-container">
		<view class="step">
			<text :class="step==0?'check':''">验证手机号码</text>
			<text :class="step==1?'check':''">设置新密码</text>
			<text :class="step==2?'check':''">完成</text>
		</view>
		<view class="user-container-main">
			<verification v-if="step==0" @pass="nextStep" />
			<password v-else-if="step==1" @pass="nextStep" />
			<view v-else @pass="nextStep">
				3秒后为您重新登录
			</view>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import verification from "./components/verification.vue"
	import password from "./components/password.vue"
	
	export default defineComponent({
		components:{
			verification,
			password
		},
		setup() {
			
			const step = ref(0)

			return {
				step
			}
		},
		methods: {
			nextStep(step){
				this.step = step
				if(step==2){
					setTimeout(()=>{
						uni.navigateBack({
						    delta: 1,
						    animationType: 'pop-out',
						    animationDuration: 200
						});
					},3000)
				}
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './login.scss'
</style>
