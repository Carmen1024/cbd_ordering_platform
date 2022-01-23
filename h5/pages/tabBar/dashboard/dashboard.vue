<template>
	<view class="uni-container">
		<dashswiper></dashswiper>
		<div class="main-container">
			<notice></notice>
			<page-list></page-list>
		</div>
	</view>
</template>

<script lang="ts">
	import { defineComponent } from "vue"
	import dashswiper from "./components/dashswiper.vue"
	import notice from "./components/notice.vue"
	import pageList from "./components/pageList.vue"
	export default defineComponent({
		components:{
			dashswiper,
			notice,
			pageList
		},
		setup() {
			
			return {
				
			};
		}
	})
</script>

<style>

</style>
