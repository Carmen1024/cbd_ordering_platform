<template>
	<view class="user-container-main">
		<image class="logo" src="/static/logo.jpg"></image>
		<code-mode :user="user" />
		<view style="text-align: right;">
			<navigator class="" url="/pages/login/resetPassword">
				<text>忘记密码</text>
			</navigator>
		</view>
		<button class="submit" type="primary" @click="submit">确认</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { setStorageSync } from '@/utils/token'
	import codeMode from './code.vue'
	import { getPhoneCode,resetPass } from '@/api/login'
	export default defineComponent({
		components:{
			codeMode
		},
		setup() {

			const sendDisable = ref(false)
			const user = ref({
				phone:"",
				code:""
			})
			return {
				user,
				sendDisable
			}
		},
		methods: {
			submit(){
				
				const params = {
					"eq":{
						"user_phone":this.user.phone,
						"phone_code":this.user.code
					},
				}
				
				setStorageSync('token','0f99a688f420243cda8d8166a4e69c4c')
				uni.switchTab({
				    url: '/pages/tabBar/dashboard/dashboard'
				});
			},
			sendCode(){
				this.sendDisable = this.sendDisable ? false : true;
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
