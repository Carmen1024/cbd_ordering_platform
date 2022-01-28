import { request } from '@/utils/request'
// 获取数据api
export function orderConfirm(data: object) {
	// 8001
  return request({
    url: '/proced/order/confirm',
    method: 'post',
	domin : "http://192.168.99.174:8009",
    data
  })
}