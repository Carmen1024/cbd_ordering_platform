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

// 取消订单 /g/proced/order/apply/cancel/order
export function orderCancel(data: object) {
  return request({
    url: '/g/proced/order/apply/cancel/order',
	// domin : "http://192.168.99.174:8009",
    method: 'post',
    data
  })
}

// 费用单
export function costList(data: object) {
  return request({
    url: '/g/proced/cost/query/order/list',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}

export function costDetail(data: object) {
  return request({
    url: '/g/proced/cost/query/order/detail',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}

export function costMain(data: object) {
  return request({
    url: '/g/proced/cost/query/cost/detail',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}
// 验收
export function receiveList(data: object) {
  return request({
    url: '/g/invoice/exWarehouse/list',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}

export function orderRefund(data: object) {
  return request({
    url: '/g/proced/order/apply/refund/order',
    method: 'post',
	// domin : "http://192.168.99.174:8009",
    data
  })
}

export function receiveDetail(data: object) {
  return request({
    url: '/g/invoice/exWarehouse/detail',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}

export function receiveMaterials(data: object) {
  return request({
    url: '/g/invoice/receiveMaterials/insert',
    method: 'post',
	// domin : "http://113.125.84.255:8009",
    data
  })
}

// 交易流水 账单 
export function transactionList(data: object) {
  return request({
    url: '/g/proced/bill/query/bill/list',
    method: 'post',
    data
  })
}

