<template>
	<view class="user-container-main">
		<image class="logo" src="/static/logo.jpg"></image>
		<view class="user-container-item">
			<text>账号</text>
			<input class="uni-input" v-model="user.name" placeholder="请输入用户名" />
		</view>
		<view class="user-container-item">
			<text>密码</text>
			<input class="uni-input" :password="passwordType" v-model="user.password" placeholder="请输入密码" >
			<span v-if="passwordType" @click="passwordType=false" class="icon iconfont icon-closeeye"></span>
			<span v-else @click="passwordType=true" class="icon iconfont icon-eye"></span>
		</view>
		
		<view style="text-align:right;">
			<navigator class="" url="/pages/login/resetPassword">
				<text>忘记密码</text>
			</navigator>
		</view>
		<button class="submit" type="primary" @click="submit">登录</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { setStorageSync } from '@/utils/token'
	import { login } from '@/api/login'
	
	export default defineComponent({
		setup() {
			const passwordType = ref(true)
			const user = ref({
				name:"18628062774",
				password:"1234"
			})
			return {
				user,
				passwordType
			}
		},
		methods: {
			submit(){
				console.log(this.user)
				// "user_phone":"18628062774",
				// "user_pass":"1234"
				const {name:user_phone,password:user_pass} = this.user
				login({"eq":{user_phone,user_pass}}).then(res=>{
					// setStorageSync('token','0f99a688f420243cda8d8166a4e69c4c')
					setStorageSync('token',res.data.token)
					setStorageSync("userName",user_phone)
					this.$emit("loginAction")
				})

			},
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
