// 高级校验

export const validatePhone = (value: any) => {
	return new Promise((resolve, reject) => {
		let errorMsg = ''
		if (value.length!=11) {
		  errorMsg = '填写11位手机号'
		} else {
		  const TEL_REGEXP = /^1\d{10}$/;
		  if(!TEL_REGEXP.test(value)){
		    errorMsg = '手机号不正确'
		  }
		}
		if(errorMsg){
		  uni.showToast({
			title: errorMsg,
			duration: 2000,
			icon:"error"
		  })
		  reject(errorMsg)
		}
		resolve(value)
	})
}
export const validateEmail = (rule: any, value: any, callback: any) => {
  console.log(value)
  if (value??''=='') callback()
  var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
  if(!reg.test(value)){
    callback(new Error('请填写正确的邮箱'))
  }
  
}

export const validateEmpty = (value:any,size:number=1,)=>{
	return new Promise((resolve, reject) => {
		if (value.length < size) {
		  const errprMsg = '填写有误'
		  uni.showToast({
			title: errprMsg,
			duration: 2000,
			icon:"error"
		  })
		  reject(errprMsg)
		}
		resolve(value)
	})
}

