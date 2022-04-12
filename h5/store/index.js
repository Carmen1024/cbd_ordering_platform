// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
import { getStore } from "@/api/home"
import { getStorageSync,setStorageSync } from '@/utils/token'
const store = createStore({
// #endif
	state: {
		hasLogin: false,
		isUniverifyLogin: false,
		loginProvider: "",
		openid: null,
		testvuex: false,
		colorIndex: 0,
		colorList: ['#FF0000', '#00FF00', '#0000FF'],
		noMatchLeftWindow: true,
		active: 'componentPage',
		leftWinActive: '/pages/component/view/view',
		activeOpen: '',
		menu: [],
		univerifyErrorMsg: '',
		frontPage:'/pages/tabBar/subscribe/subscribe',
		verificationCodeKey:''
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.loginProvider = provider;
		},
		logout(state) {
			state.hasLogin = false
			state.openid = null
		},
		setOpenid(state, openid) {
			state.openid = openid
		},
		setTestTrue(state) {
			state.testvuex = true
		},
		setTestFalse(state) {
			state.testvuex = false
		},
		setColorIndex(state, index) {
			state.colorIndex = index
		},
		setMatchLeftWindow(state, matchLeftWindow) {
			state.noMatchLeftWindow = !matchLeftWindow
		},
		setActive(state, tabPage) {
			state.active = tabPage
		},
		setLeftWinActive(state, leftWinActive) {
			state.leftWinActive = leftWinActive
		},
		setVerificationCodeKey(state, verificationCodeKey) {
			state.verificationCodeKey = verificationCodeKey
		},
		setActiveOpen(state, activeOpen) {
			state.activeOpen = activeOpen
		},
		setMenu(state, menu) {
			state.menu = menu
		},
		setUniverifyLogin(state, payload) {
			typeof payload !== 'boolean' ? payload = !!payload : '';
			state.isUniverifyLogin = payload;
		},
		setUniverifyErrorMsg(state,payload = ''){
			state.univerifyErrorMsg = payload
		},
		setLinkStore(state,linkStore){
			state.linkStore = linkStore
		}
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		},
		linkStore(){
			return JSON.parse(getStorageSync("linkStore")) || {r_g_id:"-1",s_id:"-1"}
		},
	},
	actions: {
		// lazy loading openid
		getUserOpenId: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				if (state.openid) {
					resolve(state.openid)
				} else {
					uni.login({
						success: (data) => {
							commit('login')
							setTimeout(function() { //模拟异步请求服务器获取 openid
								const openid = '123456789'
								console.log('uni.request mock openid[' + openid + ']');
								commit('setOpenid', openid)
								resolve(openid)
							}, 1000)
						},
						fail: (err) => {
							console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
							reject(err)
						}
					})
				}
			})
		},
		getPhoneNumber: function({
			commit
		}, univerifyInfo) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
					method: 'POST',
					data: univerifyInfo,
					success: (res) => {
						const data = res.data
						if (data.success) {
							resolve(data.phoneNumber)
						} else {
							reject(res)
						}

					},
					fail: (err) => {
						reject(res)
					}
				})
			})
		},
		getLinkStore: function({commit,state}){
			return new Promise((resolve, reject) => {
				const my_store = state.linkStore
				// if(my_store) return my_store._id
				if(my_store && my_store.s_id!="-1") resolve(my_store)
				getStore().then(res=>{
					const {_id:s_id,a_id:r_g_id,store_name,store_code} = res.data
					// commit('setLinkStore', {s_id,r_g_id,store_name,store_code})
					setStorageSync('linkStore',JSON.stringify({s_id,r_g_id,store_name,store_code}))
					resolve({s_id,r_g_id,store_name,store_code})
				},rej=>{
					reject(rej)
					uni.navigateTo({
						url: '/pages/tabBar/home/store'
					})
				})
			})
		}
	}
})

export default store
