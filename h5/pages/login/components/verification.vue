<template>
	<view class="user-container-item">
		<text>手机号</text>
		<input class="uni-input" v-model="verification.phone" placeholder="请输入手机号" />
	</view>
	<view class="user-container-item">
		<text>验证码</text>
		<input class="uni-input" v-model="verification.code" placeholder="请输入验证码" />
		<button size="mini" class="submit" type="primary" @click="submit">发送验证码</button>
	</view>
<!-- 			.icon-eye
	.icon-closeeye -->
	<button class="submit" type="primary" @click="submit">确认</button>

</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	
	export default defineComponent({
		setup() {

			const verification = ref({
				phone:"",
				code:""
			})
			return {
				verification,
			}
		},
		methods: {
			submit(){
				console.log(this.verification)
				this.$emit("pass",1)
			},
			
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
