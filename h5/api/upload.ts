import { request } from '@/utils/request'

//我的
export function upload(data: object) {
  return request({
    url: '/fileManager/file/upload',
    method: 'post',
	domin : "http://113.125.84.255:8001",
	contentType : 'multipart/form-data',
    data
  })
}