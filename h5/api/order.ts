import { request } from '@/utils/request'
// 获取数据api
export function orderConfirm(data: object) {
  return request({
    url: '/g/proced/order/confirm',
	// domin : "http://192.168.99.174:8009",
    method: 'post',
    data
  })
}

//下单
export function createOrder(data: object) {
  return request({
    url: '/g/proced/order/create',
	// domin : "http://192.168.99.174:8009",
    method: 'post',
    data
  })
}

//
export function orderList(data: object) {
  return request({
    url: '/g/proced/order/subOrderList',
	// domin : "http://192.168.99.174:8009",
    method: 'post',
    data
  })
}

//获取父订单 暂时用不上
export function orderDetail(data: object) {
  return request({
    url: '/g/proced/order/detail',
    method: 'post',
    data
  })
}
//子订单详情
export function subOrderDetail(data: object) {
  return request({
    url: '/g/proced/order/subOrderDetail',
	// domin : "http://192.168.99.174:8009",
    method: 'post',
    data
  })
}
