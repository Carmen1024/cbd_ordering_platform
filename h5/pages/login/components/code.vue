<template>
	<view class="user-container-item">
		<text>手机号</text>
		<input 
			class="uni-input" 
			v-model="user.phone" 
			type="number"
			placeholder="请输入手机号" 
		/>
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
	import { setStorageSync } from '@/utils/token'
	import { useStore } from 'vuex'
	import {validatePhone} from '@/utils/validate'
	export default defineComponent({
		props:{
			user : {
				type : Object,
				default() {
					return {}
				}
			},
			hasLogin : {
				type : Boolean,
				default() {
					return false
				}
			},
		},
		setup(props) {
			const sendDisable = ref(false)
			const sentContent = ref("获取验证码")
			const store = useStore()
			
			function setSendC(t){
				sentContent.value = t + "秒后重新获取"
				setTimeout(()=>{
					if(t>1){
						setSendC(--t)
					}else{
						sentContent.value = "获取验证码"
						sendDisable.value = false
					}
				},1000)
			}
			const sendCode = async ()=>{
				const user_phone = props.user.phone
				
				await validatePhone(user_phone)
				
				const params={
					"eq":{ user_phone }
				}
				getPhoneCode(params).then(res=>{
					const verificationCodeKey = res.data
					store.commit('setVerificationCodeKey', verificationCodeKey)
					sendDisable.value = sendDisable.value ? false : true;
					setSendC(60)
				})
			}
			
			return {
				sentContent,
				sendDisable,
				sendCode
			}
		},
		methods: {
			
			
		}
	})
</script>

<style lang="scss" scoped >
	@import './../login.scss'
</style>
