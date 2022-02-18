<template>
	<view class="user-container">
		<view class="user-container-main">
			<image class="logo" src="/static/logo.jpg"></image>
			<view class="user-container-item">
				<text>账号</text>
				<input class="uni-input" v-model="user.name" placeholder="请输入用户名" />
			</view>
			<view class="user-container-item">
				<text>密码</text>
				<input class="uni-input" v-model="user.password" placeholder="请输入密码" />
			</view>
			<view style="text-align: right;">
				<navigator class="" url="/pages/login/forgetPassword">
					<text>忘记密码</text>
				</navigator>
			</view>
			<button class="submit" type="primary" @click="submit">登录</button>
			<button class="delete" @click="reset">重置</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { setStorageSync } from '@/utils/token'
	
	export default defineComponent({
		setup() {

			const user = ref({
				name:"",
				password:""
			})
			return {
				user,
			}
		},
		methods: {
			submit(){
				console.log(this.user)
				setStorageSync('userName',this.user.name)
				setStorageSync('token','0f99a688f420243cda8d8166a4e69c4c')
				uni.switchTab({
				    url: '/pages/tabBar/dashboard/dashboard'
				});
			},
			reset(){
				this.user = {
					name:"",
					password:""
				}
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './login.scss'
</style>
