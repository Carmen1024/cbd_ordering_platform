<template>
	<back-layer :back="back"  />
	<view class="address-container" v-show="address">
		<view class="address-container-item">
			<text>收件人</text>
			<input class="uni-input" maxlength="16" v-model="address.s_a_name" placeholder="收件人姓名" />
		</view>
		<view class="address-container-item">
			<text>手机号</text>
			<input class="uni-input" maxlength="11" type="number" v-model="address.s_a_phone" placeholder="手机号" />
		</view>
		<view class="address-container-item">
			<text>所在地区</text>
			<view @click="areaOperate=true">
				{{address.s_a_province}} {{address.s_a_city}} {{address.s_a_area}}
			</view>
			<!-- <input @click="areaOperate=true" class="uni-input" placeholder="省" v-model="" /> -->
			<!-- <input @click="areaOperate=true" class="uni-input" placeholder="市" v-model="address.s_a_city" /> -->
			<!-- <input @click="areaOperate=true" class="uni-input" placeholder="区/县" v-model="address.s_a_area" /> -->
		</view>
		<area-picker v-show="areaOperate" :address="address" @change="changeArea" @close="closeArea" />
		<view class="address-container-item" style="height: 150rpx;">
			<text>详细地址</text>
			<textarea class="uni-textarea" maxlength="64" placeholder="详细地址" v-model="address.s_a_detail" />
		</view>
		<view class="address-container-item">
			<text>邮编</text>
			<input class="uni-input" maxlength="12" type="number" v-model="address.s_a_postcode" placeholder="邮编" />
		</view>
<!-- 		<view class="address-container-item">
			<text>设为默认收货地址</text>
			<switch :checked="address.s_a_default" style="transform: scale(0.7);" @change="switch1Change" />
		</view> -->
		<button class="submit" type="primary" @click="submit">确认</button>
		<!-- <button class="delete" @click="deleteD">删除地址</button> -->
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressInsert,addressUpdate,addressDelete } from '@/api/home'
	import { getStorageSync } from '@/utils/token'
	import { submitData } from './enum'
	import areaPicker from './area'
	import { linkStore } from '@/utils/utils'
	import BackLayer from '@/components/backLayer'
	export default defineComponent({
		onLoad:function(option){
			this.setAddr(JSON.parse(getStorageSync("addressDetail")));
		},
		components:{
			areaPicker,
			BackLayer
		},
		setup() {
			const back=reactive({
				title:"地址详情",
				backUrl:'/pages/address/address',
			})
			const { s_id,r_g_id } = linkStore()
			const areaOperate = ref(false)
			const address = ref({})
			const layer=reactive({
				title:"",
				item:{}
			})
			const setAddr=option=>{
				uni.setNavigationBarTitle({
				    title: option.title
				});
				layer.title = option.title
				const item = option.item ? option.item : null
				if(item){
					layer.item = item
					address.value = item
				}else{
					delete layer.item
					address.value={
						s_id,
						"s_a_name":"",
						"s_a_phone":"",
						"s_a_province":"",
						"s_a_city":"",
						"s_a_area":"",
						// "s_a_default":false,
						"s_a_detail":"",
						"s_a_postcode":""
					}
				}

			}
			
			return {
				address,
				setAddr,
				layer,
				areaOperate,
				back
			}
		},
		methods: {
			switch1Change: function (e) {
				this.address.s_a_default = this.address.s_a_default?false:true
			},
			verify(){
				const address = this.address
				return new Promise(function(resolve,reject){
					for(let item of submitData){
						if(address[item.label]==""){
							uni.showToast({
							    title: item.tip,
							    duration: 2000,
								icon:"error"
							});
							reject("error");
							break
						}
					}
				  resolve('success');
				});

			},
			submit(){
				this.verify().then(()=>{
					this.layer.item ? this.update() : this.insert()
				})
			},
			insert(){
				const params = this.address
				params.s_a_default = this.address.s_a_default?"1":"0"
				params.s_id = this.s_id
				addressInsert(params).then(res=>{
					uni.showToast({
					    title: '新增成功',
					    duration: 2000,
						icon:"none"
					});
					uni.navigateBack()
				})
			},
			update(){
				const params = this.address
				params.s_a_default = this.address.s_a_default?"1":"0"
				params.s_id = this.s_id
				addressUpdate(params).then(res=>{
					uni.showToast({
					    title: '保存成功',
					    duration: 2000,
						icon:"none"
					});
					uni.navigateBack()
				})
			},
			deleteD(){
				const params={
					_id:this.address._id,
					c_del:1
				}
				addressDelete(params).then(res=>{
					uni.showToast({
					    title: '删除成功',
					    duration: 2000,
						icon:"none"
					});
					uni.navigateBack()
				})
				
			},
			changeArea(data){
				this.address.s_a_province = data.provinceData.text || ""
				this.address.s_a_city = data.cityData.text || ""
				this.address.s_a_area = data.areaData.text || ""
				this.closeArea()
			},
			closeArea(){
				this.areaOperate = false
			}
			
		}
	})
</script>

<style lang="scss" scoped>
	.address-container{
		padding:20rpx;
		&-item{
			display: flex;
			height: 100rpx;
			align-items: center;
			text{
				font-weight: bold;
				min-width: 130rpx;
			}
			input,textarea{
				margin-left: 20rpx;
				background-color: #efefef;
				border-radius: 20rpx;
			}
			textarea{
				height: 100rpx;
				padding: 15rpx 25rpx;
				line-height:50rpx;
				font-size:28rpx;
			}
			view{
				width: 100%;
				margin-left: 20rpx;
				padding: 15rpx 25rpx;
				line-height:50rpx;
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
