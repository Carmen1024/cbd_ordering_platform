<template>
	<view class="user-container-main">
		<image class="logo" src="/static/logo.jpg"></image>
		<code-mode :user="user" />
		<view style="text-align: right;">
			<navigator class="" url="/pages/login/resetPassword">
				<text>忘记密码</text>
			</navigator>
		</view>
		<button 
			class="submit" 
			type="primary"
			@click="submit"
			:disabled="user.phone!='' && user.code!='' ? false : true"
		>确认</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { setStorageSync } from '@/utils/token'
	import codeMode from './code.vue'
	import { loginByCode } from '@/api/login'
	import { useStore } from 'vuex'
	import { validateEmpty } from '@/utils/validate'
	export default defineComponent({
		components:{
			codeMode
		},
		setup(props,cxt) {
			const store = useStore()
			const sendDisable = ref(false)
			const user = ref({
				phone:"",
				code:""
			})
			async function submit(){
				const {phone:user_phone,code:verificationCode} = user.value
				await validateEmpty(user_phone,11)
				await validateEmpty(verificationCode,6)
				const verificationCodeKey = store.state.verificationCodeKey || ''
				const params = {
					"eq":{ user_phone },
					verificationCode:parseInt(verificationCode),  //验证码
					verificationCodeKey //获取验证码时返回的key
				}
				loginByCode(params).then(res=>{
					setStorageSync('token',res.data.token)
					setStorageSync("userName",user_phone)
					cxt.emit("loginAction")
				})
			}
			return {
				user,
				sendDisable,
				submit
			}
		},
		methods: {
			sendCode(){
				this.sendDisable = this.sendDisable ? false : true;
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
