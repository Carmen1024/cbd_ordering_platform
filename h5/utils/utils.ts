// 工具
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
