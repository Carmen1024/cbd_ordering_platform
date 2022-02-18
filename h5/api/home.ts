import { request } from '@/utils/request'

//我的
export function mineQuery(data: object) {
  return request({
    url: '/g/mine/query',
    method: 'post',
	domin : "http://113.125.84.255:8007",
    data
  })
}

// 收货地址
export function addressQuery(data: object) {
  return request({
    url: '/g/address/query',
    method: 'post',
	domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressInsert(data: object) {
  return request({
    url: '/g/address/insert',
    method: 'post',
	domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressUpdate(data: object) {
  return request({
    url: '/g/address/update',
    method: 'post',
	domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressDelete(data: object) {
  return request({
    url: '/g/address/delete',
    method: 'post',
	domin : "http://113.125.84.255:8007",
    data
  })
}