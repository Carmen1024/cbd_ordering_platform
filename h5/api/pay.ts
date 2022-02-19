import { request } from '@/utils/request'

//我的
export function toPay(data: object) {
  return request({
    url: '/ccb/order_submit_by_phone_num',
    method: 'post',
	domin : "http://113.125.84.255:9000",
    data
  })
}

export function toThirdPartAPI(data: object) {
	
  return new Promise(function(resolve, reject){
  		uni.request({
  			url : "http://emall.ccb.com:8880/ecp/thirdPartAPI",
  			method: 'post',
  			data,
  			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
  			success: (res) => {
  				console.log('请求数据已返回：', res);
				resolve(res)
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


