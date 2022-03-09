<template>
	<view class="user-container-item">
		<text>手机号</text>
		<input class="uni-input" v-model="user.phone" placeholder="请输入手机号" />
	</view>
	<view class="user-container-item">
		<text>验证码</text>
		<input class="uni-input" v-model="user.code" placeholder="请输入验证码" />
		<button size="mini" :disabled="sendDisable" :class="sendDisable?'sendDisable':''"
			type="primary" @click="sendCode">{{sentContent}}
		</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { getPhoneCode,resetPass } from '@/api/login'
	export default defineComponent({
		props:{
			user : {
				type : Object,
				default() {
					return {}
				}
			}
		},
		setup(props) {
			const sendDisable = ref(false)
			const sentContent = ref("获取验证码")
			return {
				sentContent,
				sendDisable
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
				const params={
					"eq":{
						"user_phone":this.user.phone
					}
				}
				getPhoneCode(params).then(res=>{
					this.sendDisable = this.sendDisable ? false : true;
					this.setSendC(60)
				})
			}
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
