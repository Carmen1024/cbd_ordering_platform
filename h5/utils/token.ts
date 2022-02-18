
export const setStorageSync = (key,value)=>{
	try {
	    uni.setStorageSync(key,value);
	} catch (e) {
	    // error
	}
}

export const getStorageSync = (key)=>{
	try {
	    const value = uni.getStorageSync(key);
		return value || null
	} catch (e) {
	    // error
	}
}

export const removeStorageSync = (key)=>{
	try {
	    uni.removeStorageSync(key);
	} catch (e) {
	    // error
	}
}

export const setStorage = (key,value)=>{
	uni.setStorage({
		key: key,
		data: value,
		success: function () {
			console.log('success');
		}
	});
}

export const getStorage = (key)=>{
	uni.getStorage({
	    key: key,
	    success: function (res) {
			return res.data || null
	    }
	});
}

export const removeStorage = (key)=>{
	uni.removeStorage({
	    key: key,
	    success: function (res) {
	        console.log('success');
	    }
	});
}



