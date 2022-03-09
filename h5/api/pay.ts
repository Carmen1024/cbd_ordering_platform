import { request } from '@/utils/request'

//我的
export function orderPay(data: object) {
  return request({
    url: '/g/ccb_ibs/order_pay',
	// domin : "http://113.125.84.255:9000",
    method: 'post',
    data
  })
}

export function payBack(data: object) {
	
	return request({
	  url : '/g/store/pages/pay/payback',
	  method : 'post',
	  contentType : 'application/x-www-form-urlencoded',
	  data
	})
  
}

export function payNotify(data: object) {
	
	return request({
	  url : '/g/ccb_ibs/order_pay_res_notify',
	  method : 'post',
	  contentType : 'application/x-www-form-urlencoded',
	  data
	})
}
