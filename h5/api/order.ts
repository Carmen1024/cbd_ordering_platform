import { request } from '@/utils/request'
// 获取数据api
export function orderConfirm(data: object) {
	// 8001
  return request({
    url: '/proced/order/confirm',
    method: 'post',
    data
  })
}

export function orderDetail(data: object) {
	// 8001
  return request({
    url: '/proced/order/detail',
    method: 'post',
    data
  })
}

//下单
export function createOrder(data: object) {
	// 8001
  return request({
    url: '/proced/order/create',
    method: 'post',
    data
  })
}

//
export function orderList(data: object) {
	// 8001
  return request({
    url: '/proced/order/subOrderList',
    method: 'post',
    data
  })
}

