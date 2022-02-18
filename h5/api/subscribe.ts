import { request } from '@/utils/request'
// 获取数据api
export function classifyQuery(data: object) {
	// 8001
  return request({
    url: '/classify/queryClassifyList',
    method: 'post',
	// domin : "http://192.168.99.5:8001",
    data
  })
}

export function materialQuery(data: object) {
  return request({
    url: '/materials/queryListByClassify',
    method: 'post',
    data
  })
}

//物料关键字搜索materials/queryList
export function materialQuerySearch(data: object) {
  return request({
    url: '/materials/queryList',
    method: 'post',
    data
  })
}
//购物车数量价格统计						
///shoppingCart/cartCountAndPrice
export function cartCountAndPrice(data: object) {
  return request({
    url: '/shoppingCart/cartCountAndPrice',
    method: 'post',
    data
  })
}

//服务详细描述：购物车物料添加货删减 count为1或-1  在分类商品列表调用
//购物车添加物料
//url：/shoppingCart/cartInsert
export function cartInsert(data: object) {
  return request({
    url: '/shoppingCart/cartInsert',
    method: 'post',
    data
  })
}

// 购物车物料列表						
// url：/shoppingCart/cartList						
export function cartList(data: object) {
  return request({
    url: '/shoppingCart/cartList',
    method: 'post',
    data
  })
}

// 购物车添加物料						
// url：/shoppingCart/cartMaterialsUpdate						
export function cartMaterialsUpdate(data: object) {
  return request({
    url: '/shoppingCart/cartMaterialsUpdate',
    method: 'post',
    data
  })
}

//删除购物车物料
//_id	关联物料购物车主键id
//ids	关联物料购物车主键ids

export function cartDel(data: object) {
  return request({
    url: '/shoppingCart/cartDel',
    method: 'post',
    data
  })
}