// 工具
import { getStorageSync } from '@/utils/token'
// 获取路由参数
export const getUrlParams = ()=>{
	const url = location.href;
	const requestParams = {};
	if (url.indexOf('?') !== -1) {
		const str = url.substr(url.indexOf('?') + 1); //截取?后面的内容作为字符串
		const strs = str.split('&'); //将字符串内容以&分隔为一个数组
		for (let i = 0; i < strs.length; i++) {
			requestParams[strs[i].split('=')[0]] = decodeURI(strs[i].split('=')[1]);
			// 将数组元素中'='左边的内容作为对象的属性名，'='右边的内容作为对象对应属性的属性值
		}
	}
	console.log(requestParams, '处理后的对象');
	return requestParams;
}

export const uploadImg = (uploadPath)=>{
	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url: 'http://113.125.84.255:8001/fileManager/file/upload', //仅为示例，非真实的接口地址
			filePath: uploadPath,
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (res) => {
				const filePath = JSON.parse(res.data).data.fileUrl.replace("nacos.cbd.com","113.125.84.255")
				// console.log(filePath)
				resolve(filePath)
				// _this.imageValue = filePath
			}
		});
	})
}

export const timeFormat = function (time?:Date,format?: string): string {
        let year = `${time.getFullYear()}`;
        let month = `${time.getMonth() + 1}`;
        if (month.length === 1) {
            month = `0${month}`;
        }
        let day = `${time.getDate()}`;
        if (day.length === 1) {
            day = `0${day}`;
        }

        let hours = `${time.getHours()}`;
        if (hours.length === 1) {
            hours = `0${hours}`;
        }
        let minutes = `${time.getMinutes()}`;
        if (minutes.length === 1) {
            minutes = `0${minutes}`;
        }
        let seconds = `${time.getSeconds()}`;
        if (seconds.length === 1) {
            seconds = `0${seconds}`;
        }

        return (format || "yyyy-MM-dd hh:mm:ss")
            .replace(/yyyy/g, year)
            .replace(/MM/g, month)
            .replace(/dd/g, day)

            .replace(/hh/g, hours)
            .replace(/mm/g, minutes)
            .replace(/ss/g, seconds);
    }

export const storeId = ()=>{
	const my_store = JSON.parse(getStorageSync("my_store"))
	// if(my_store) return my_store._id
	if(my_store) return "10"
	uni.showToast({
	    title: "登录状态已失效，请重新登录",
	    duration: 2000,
		icon:"none"
	});
	uni.navigateTo({
		url: '/pages/login/login'
	})
}

