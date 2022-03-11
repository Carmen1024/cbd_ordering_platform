import { getStorageSync } from './token'

const host = "http://113.125.84.255:8007"
//113.125.84.255:8007
//192.168.99.5 丁武军
//192.168.99.174 何龙getStorageSync
//113.125.84.255 服务器

export const request = ({url,method,data,domin=host,contentType="application/json"})=>{
	const params={
		data:data,
		token:getStorageSync('token') || 'admin'
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
				if(res.data.code !== "0000"){
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