import { request } from '@/utils/request'

//登录
export function mineQuery(data: object) {
  return request({
    url: '/g/login',
    method: 'post',
    data
  })
}