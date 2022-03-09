<template>
	<view class="user-container">
		<view class="user-container-main">
			<image class="logo" src="/static/logo.jpg"></image>
			<code-mode :user="user" />
			<view class="user-container-item">
				<text>新密码</text>
				<input class="uni-input" :password="passwordType" v-model="user.newpassword" placeholder="请输入密码" >
				<span v-if="passwordType" @click="passwordType=false" class="icon iconfont icon-eye"></span>
				<span v-else @click="passwordType=true" class="icon iconfont icon-closeeye"></span>
			</view>
			<button class="submit" type="primary" @click="submit">确认</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import codeMode from './components/code.vue'
	import { resetPass } from '@/api/login'
	export default defineComponent({
		components:{
			codeMode
		},
		setup() {
			
			const sendDisable = ref(false)
			const sentContent = ref("获取验证码")
			const passwordType = ref(true)
			const password=ref(true)
			const user = ref({
				phone:"",
				code:"",
				newpassword:""
			})
			return {
				user,
				password,
				sendDisable,
				passwordType,
				sentContent
			}
		},
		methods: {
			submit(){
				console.log(this.user)
				const params = {
					"eq":{
						"user_phone":this.user.phone,
						"phone_code":this.user.code
					},
					"set":{
						"user_pass":this.user.newpassword
					}
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
			},
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
