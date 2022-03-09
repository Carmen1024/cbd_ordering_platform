import { request } from '@/utils/request'

//我的
export function mineQuery(data: object) {
  return request({
    url: '/g/mine/query',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}

// 收货地址
export function addressQuery(data: object) {
  return request({
    url: '/g/address/query',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressInsert(data: object) {
  return request({
    url: '/g/address/insert',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressUpdate(data: object) {
  return request({
    url: '/g/address/update',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressDelete(data: object) {
  return request({
    url: '/g/address/delete',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
// 省 市 区
export function addressProvince(data: object) {
  return request({
    url: '/g/address/province',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressCity(data: object) {
  return request({
    url: '/g/address/city',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}
export function addressAreas(data: object) {
  return request({
    url: '/g/address/areas',
    method: 'post',
	// domin : "http://113.125.84.255:8007",
    data
  })
}

///g/login_store/query
export function storeList(data: object) {
  return request({
    url: '/g/login_store/query',
    method: 'post',
    data
  })
}

///g/login_store/set_current_store
export function setStore(data: object) {
  return request({
    url: '/g/login_store/set_current_store',
    method: 'post',
    data
  })
}