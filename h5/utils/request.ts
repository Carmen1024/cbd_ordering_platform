import { getStorageSync } from './token'
import { getLinkStore,reLogin } from './utils'

const host = "http://113.125.84.255:10000"
//113.125.84.255:8007
//192.168.99.5 丁武军
//192.168.99.174 何龙getStorageSync
//113.125.84.255 服务器

export const request = async (dataFormat)=>{
	
	const {url,method,data,domin=host,contentType="application/json"} = dataFormat

	await intercept(url)
	
	const newData = await dataValidation(data)
	
	const params={
		data:newData,
		token:getStorageSync('token')
	}

	return new Promise(function(resolve, reject){
		uni.request({
			url : domin + url,
			method,
			data:params,
			header: {
				'custom-header': contentType 
			},
			success: (res) => {
				console.log('请求数据已返回：', res);
				if(res.data.code == "0052"){
					reLogin()
					reject(res.data)
				}else if(res.data.code !== "0000"){
					uni.showModal({
						showCancel: false,
						content: res.data.desc,
					})
					reject(res.data)
				} else {
					resolve(res.data)
				}
			},
			fail: (e) => {
				uni.showModal({
					content: `系统有误，请重试`,
					showCancel: false
				})
			}
		})
	})

}

//数据校验
const dataValidation = (data)=>{
	// 如果有门店
	return new Promise(function(resolve, reject){
		if(data && data.s_id && data.s_id=="-1"){
			getLinkStore().then(linkStore=>{
				const { s_id,r_g_id } = linkStore
				const newData = {...data,s_id,r_g_id}
				resolve(newData)
			})
		}else{
			resolve(data)
		}
	})
}

// 统一拦截token
const intercept= (url)=>{
	
	return new Promise(function(resolve, reject){
		if(getStorageSync('token') || url.indexOf("login/login")>-1){
			resolve(true)
		}else{
			reLogin()
			reject("error")
		}
	})
}