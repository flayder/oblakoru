<script setup>
	import DefaultFooter from "./components/global/DefaultFooter.vue";
	import DefaultHeader from "./components/global/DefaultHeader.vue";
	import { RouterView } from "vue-router";
</script>

<template>
	<div class="app">
		<DefaultHeader />
		<RouterView />
		<DefaultFooter />
	</div>
</template>

<style scoped lang="scss">
	.app {
		overflow: hidden;
		min-height: 100vh;
	}
</style>
