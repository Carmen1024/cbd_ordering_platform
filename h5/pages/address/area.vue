<template>
	<view class="areaPicker">
		<view class="area">
			<view class="areaTitle">
				<text>请选择所在地区</text>
				<span class="right icon iconfont icon-close" @click="close"></span>
			</view>
			<view class="areaOperate">
				<uni-data-picker 
					:localdata="provinceList" 
					clear-icon="false"
					placeholder="请选择省"
					popup-title="请选择省" 
					@change="provinceonchange" 
					@nodeclick="provinceonnodeclick">
				</uni-data-picker>
				<uni-data-picker
					:localdata="cityList" 
					placeholder="请选择市"
					popup-title="请选择市" 
					@change="cityonchange" 
					@nodeclick="cityonnodeclick">
				</uni-data-picker>
				<uni-data-picker
					:localdata="areaList" 
					placeholder="请选择区/县"
					popup-title="请选择区/县" 
					@change="areaonchange" 
					@nodeclick="areaonnodeclick">
				</uni-data-picker>
				
			</view>
		</view>
		<button class="submit" size="mini" @click="submit">确认</button>
	</view>
</template>

<script lang="ts">
	import { defineComponent,ref,reactive } from "vue"
	import { addressProvince,addressCity,addressAreas } from "@/api/home"
	export default defineComponent({
		props:{
			address : {
				type: Object,
				default() {
					return {
						"s_a_province":"",
						"s_a_city":"",
						"s_a_area":"",
					}
				}
			},
		},
		setup(props) {
			
			const areaShow = ref(false)
			//省
			const provinceData = ref({})
			const cityData = ref({})
			const areaData = ref({})
			
			const provinceList = ref([])
			const cityList = ref([])
			const areaList = ref([])
			const items = ref([])
			
			const getProvinceList=()=>{
				addressProvince().then(res=>{
					provinceList.value = res.data.map(item=>{
						return {
							text:item.province,
							value:item.provinceid
						}
					})
				})
			}
			getProvinceList()
			const getCityList=params=>{
				addressCity(params).then(res=>{
					cityList.value = res.data.map(item=>{
						return {
							text:item.city,
							value:item.cityid
						}
					})
				})
			}
			const getAreaList=params=>{
				addressAreas(params).then(res=>{
					areaList.value = res.data.map(item=>{
						return {
							text:item.area,
							value:item.areaid
						}
					})
				})
			}
			
			const index = 0
			
			return{
				provinceList,
				cityList,
				areaList,
				provinceData,
				cityData,
				areaData,
				getCityList,
				getAreaList
			}
		},
		methods: {
			provinceonnodeclick(node) {
				const old = this.provinceData.text
				if(old == node.text){
					return
				}
				this.provinceData = node
				// 清空市 区
				this.cityList = []
				this.cityData={}
				this.areaList = []
				this.areaData={}				
				const params = {
					provinceid:node.value
				}
				this.getCityList(params)

			},
			cityonnodeclick(node) {
				const old = this.cityData.text
				if(old == node.text){
					return
				}
				this.cityData = node
				//清空区
				this.areaList = []
				this.areaData={}
				const params = {
					cityid:node.value
				}
				this.getAreaList(params)
			},
			areaonnodeclick(node) {
				this.areaData = node
				// console.log(this.provinceData)
				// console.log(this.cityData)
				// console.log(this.areaData)
			},
			submit(){
				
				const data = {
					provinceData:this.provinceData,
					cityData:this.cityData,
					areaData:this.areaData
				}
				this.$emit("change",data)
			},
			close(){
				this.$emit("close")
			}
		}
	})
</script>

<style lang="scss" scoped>
	.areaPicker{
		position: fixed;
		width: 100%;
		// height: 60vh;
		background-color: #fff;
		bottom:0;
		left:0;
		z-index:100;
		.title{
			display: flex;
			height: 100rpx;
			align-items: center;
			text{
				font-weight: bold;
				min-width: 130rpx;
			}
			input{
				margin-left: 20rpx;
				background-color: #efefef;
				border-radius: 20rpx;
			}
		}
		.area{

			.areaTitle{
				padding:10rpx 20rpx;
				height: 40rpx;
				line-height: 40rpx;
				background-color: #f9cdad;
				border-radius: 10rpx 10rpx 0 0;
				color:#fff;
				text:first-child{
					font-weight: bold;
				}
				text:last-child{
					font-size: 20rpx;
				}
			}
			.areaOperate{
				margin: 20rpx;
				// border-bottom: solid 1px #ddd;
				border-left: solid 1px $uni-color-primary;
				view{
					position: relative;
					padding:0 10px;
					// height: 20px;
					line-height: 20px;
				}
				view:before{
					content: '';
					position: absolute;
					left: -4px;
					top: 50%;
					width: 6px;
					height: 6px;
					border: solid 1px $uni-color-primary;
					background-color: $uni-color-primary;
					border-radius: 50%;
				}
				
			}
		}
		.submit{
			margin: 20rpx;
			width: 200rpx;
			background-color: #f9cdad;
			// border-radius: 50rpx;
			color: #fff;
			float: right;
		}
	}
</style>
<style lang="scss">
	.areaOperate{
		.input-value-border{
			border: none;
			border-bottom: solid 1px #ddd;
			border-radius: 0;
		}
		.icon-clear{
			display: none;
		}
		.input-arrow{
			border-left:none;
			border-right: 1px solid #999;
			border-bottom: 1px solid #999;
		}
	}
</style>
