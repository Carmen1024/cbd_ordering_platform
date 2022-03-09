import { request } from '@/utils/request'

//登录
export function mineQuery(data: object) {
  return request({
    url: '/g/login',
    method: 'post',
    data
  })
}

export function login(data: object) {
  return request({
    url: '/g/login/login_with_biz',
    method: 'post',
    data
  })
}

export function logout(data: object) {
  return request({
    url: '/g/login/logout',
    method: 'post',
    data
  })
}

export function getPhoneCode(data: object) {
  return request({
    url: '/g/login/test_reset_phone_code',
    method: 'post',
    data
  })
}

export function resetPass(data: object) {
  return request({
    url: '/g/login/pass_reset',
    method: 'post',
    data
  })
}