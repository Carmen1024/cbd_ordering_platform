<template>
	<view class="top-window-header">
		<view class="left-header logo">
			<navigator class="logo" open-type="reLaunch" url="/pages/component/view/view">
				<image src="../static/logo.jpg" mode="heightFix" style="width: 30px;"></image>
				<text>茶茶订货</text>
			</navigator>
		</view>
		<custom-tab-bar class="tab-bar-flex" direction="horizontal" :show-icon="false" :selected="current" @onTabItemTap="toSecondMenu" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: {
					component: 0,
					API: 1,
					extUI: 2,
					template: 3
				},
				current: 0,
				indexPage: [{
					tabBar: '/pages/tabBar/dashboard/dashboard',
					index: '/pages/tabBar/dashboard/dashboard'
				}, {
					tabBar: '/pages/tabBar/subscribe/subscribe',
					index: '/pages/tabBar/subscribe/subscribe'
				}, {
					tabBar: '/pages/tabBar/shoppingCart/shoppingCart',
					index: '/pages/tabBar/shoppingCart/shoppingCart'
				}, {
					tabBar: '/pages/tabBar/order/order',
					index: '/pages/tabBar/order/order'
				}, {
					tabBar: '/pages/tabBar/home/home',
					index: '/pages/tabBar/home/home'
				}]
			}
		},
		watch: {
			$route: {
				immediate: true,
				handler(newRoute) {
					const width = uni.getSystemInfoSync().screenWidth
					if ( width >= 768 ) {
						let path = newRoute.path
						let comp
						if (path === '/') {
							comp = 'component'
							path = '/pages/tabBar/component/component'
						} else {
							comp = path.split('/')[2]
						}
						this.current = this.selected[comp]
						for(const item of this.indexPage) {
							if (path === item.tabBar) {
								uni.redirectTo({
									url: item.index
								})
							}
						}
					}
				}
			}
		},
		mounted() {
		},
		methods: {
			toSecondMenu(e) {
				const activeTabBar = '/' + e.pagePath
				for(const item of this.indexPage) {
					if (activeTabBar === item.tabBar) {
						uni.switchTab({
							url: item.index
						})
					}
				}
			}
		}
	}
</script>

<style>
	.top-window-header {
		height: 60px;
		padding: 0 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #e1e1e1;
		background-color: #FFFFFF;
		color: #333;
	}
	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
	}
	.logo image {
		height: 30px;
		width: 30px;
		border-radius: 50%;
	}
	.logo text {
		margin-left: 8px;
	}
	.right-header {
		display: flex;
		flex-direction: row;
		color: #333;
	}
	.right-header-item {
		line-height: 25px;
		margin-left: 40px;
		cursor: pointer;
		font-size: 16px;
	}
	.active {
		color: #4cd964;
		border-bottom: 2px solid;
	}
	.tab-bar-flex {
		width: 360px;
	}
	.phone-link {
		padding-left: 20px;
		cursor: pointer;
	}
	.new-icon {
		margin-left: -3px;
		/* margin-right: 5px; */
		margin-top: -20px;
	}
</style>
