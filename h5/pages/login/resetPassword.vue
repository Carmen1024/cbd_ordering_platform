<template>
	<back-layer :back="back"  />
	<view class="user-container">
		<view class="user-container-main">
			<image class="logo" src="/static/logo.jpg"></image>
			<code-mode :user="user" hasLogin="true" />
			<view class="user-container-item">
				<text>新密码</text>
				<input class="uni-input" :password="passwordType" v-model="user.newpassword" placeholder="请输入密码" >
				<span v-if="passwordType" @click="passwordType=false" class="icon iconfont icon-closeeye"></span>
				<span v-else @click="passwordType=true" class="icon iconfont icon-eye"></span>
			</view>
			<button 
				class="submit" 
				type="primary" 
				@click="submit"
				:disabled="user.phone && user.code && user.newpassword ? false : true"
			>确认</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import codeMode from './components/code.vue'
	import { resetPass } from '@/api/login'
	import { getStorageSync } from '@/utils/token'
	import BackLayer from '@/components/backLayer'
	import { useStore } from 'vuex'
	import { validateEmpty } from '@/utils/validate'
	export default defineComponent({
		components:{
			codeMode,
			BackLayer
		},
		setup() {
			const store = useStore()
			const back=reactive({
				title:"重置密码",
				backUrl:"/pages/tabBar/home/setup",
			})
			const sendDisable = ref(false)
			const sentContent = ref("获取验证码")
			const passwordType = ref(true)
			const password=ref(true)
			const user = ref({
				phone:getStorageSync("userName") || '',
				code:"",
				newpassword:""
			})
			const submit = async ()=>{
				const {phone:user_phone,code:verificationCode,newpassword:user_pass} = user.value
				await validateEmpty(user_phone,11)
				await validateEmpty(verificationCode,6)
				await validateEmpty(user_pass)
				const verificationCodeKey = store.state.verificationCodeKey || ''
				
				const params = {
					"eq":{
						user_phone,
					},
					"set":{
						user_pass
					},
					verificationCode:parseInt(verificationCode),  //验证码
					verificationCodeKey //获取验证码时返回的key
				}
				resetPass(params).then(res=>{
					uni.showToast({
					    title: "密码修改成功",
					    duration: 2000,
						icon:"none"
					})
					uni.navigateTo({
					    url: '/pages/login/login'
					})
				})
			}
			return {
				user,
				password,
				sendDisable,
				passwordType,
				sentContent,
				back,
				submit
			}
		},
		methods: {
			
			setSendC(t){
				this.sentContent = t + "秒后重新获取"
				setTimeout(()=>{
					if(t>1){
						this.setSendC(--t)
					}else{
						this.sentContent = "获取验证码"
						this.sendDisable = false
					}
				},1000)
			},
			sendCode(){
				this.sendDisable = this.sendDisable ? false : true;
				this.setSendC(60)
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './login.scss'
</style>
