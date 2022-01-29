const host = "http://192.168.99.174:8009"
// const host1 = "http://192.168.99.5:8001"
//http://192.168.99.5:8009

export const request = ({url,method,data,domin=host})=>{
	const params={
		data:data,
		token:'admin'
	}
	return new Promise(function(resolve, reject){
		uni.request({
			url : domin + url,
			method,
			data:params,
			success: (res) => {
				console.log('请求数据已返回：', res);
				if(res.data.code !== "0000"){
					uni.showModal({
						showCancel: false,
						content: res.data.desc,
					})
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