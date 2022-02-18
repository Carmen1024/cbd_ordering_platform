<template>
	<view class="user-container">
		<view class="user-container-main">
			<image class="logo" src="/static/logo.jpg"></image>
			<view class="user-container-item">
				<text>原密码</text>
				<input class="uni-input" v-model="user.password" :password="password" placeholder="请输入原密码" />
			</view>
			<view class="user-container-item">
				<text>新密码</text>
				<input class="uni-input" v-model="user.newpassword" :password="password" placeholder="请输入新密码" />
			</view>
			<view class="user-container-item">
				<text>确认新密码</text>
				<input class="uni-input" v-model="user.confirmPassword" :password="password" placeholder="请输入新密码" />
			</view>
<!-- 			.icon-eye
			.icon-closeeye -->
			<button class="submit" type="primary" @click="submit">登录</button>
			<button class="delete" @click="reset">重置</button>
		</view>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	
	export default defineComponent({
		setup() {

			const password=ref(true)
			const user = ref({
				name:"",
				password:"",
				newpassword:"",
				confirmPassword:""
			})
			return {
				user,
				password
			}
		},
		methods: {
			submit(){
				console.log(this.user)
				
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

<style lang="scss" scoped>
	.user-container{
		width: 100%;
		// height: 100vh;
		display: flex;
		align-items: center;
		&-main{
			padding:20rpx;
			width: 100%;
			margin-top: 100rpx;
			text-align: center;
		}
		.logo {
			margin-bottom: 100rpx;
			height: 200rpx;
			width: 200rpx;
			border-radius: 50%;
			// margin-top: 200rpx;
		}
		&-item{
			display: flex;
			height: 100rpx;
			align-items: center;
			text{
				// text-align: right;
				font-weight: bold;
				min-width: 200rpx;
			}
			input{
				text-align: left;
				margin-left: 20rpx;
				background-color: #efefef;
				border-radius: 20rpx;
			}
		}
		button{
			margin-top: 20rpx;
			border-radius: 50rpx;
		}
		.delete{
			border: solid 1px #ddd;
		}
	}
</style>
<style lang="scss">
	
</style>
