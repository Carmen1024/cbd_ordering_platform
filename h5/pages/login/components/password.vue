<template>
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
	<button class="submit" type="primary" @click="submit">确认</button>
	<button class="delete" @click="reset">重置</button>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	
	export default defineComponent({
		setup() {

			const password=ref(true)
			const user = ref({
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
				this.$emit("pass",2)
			},
			reset(){
				this.user = {
					newpassword:"",
					confirmPassword:""
				}
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
