<script setup>
	import IconInfoPhone from "@/assets/icons/IconInfoPhone.vue";
	import InfoItem from "./InfoItem.vue";
	import IconInfoClock from "@/assets/icons/IconInfoClock.vue";
	import IconInfoLaptop from "@/assets/icons/IconInfoLaptop.vue";
	import IconInfoCloud from "@/assets/icons/IconInfoCloud.vue";
	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	const item = ref({})
	onMounted(async () => {
		item.value = await api.getBlock(66)
	})
</script>

<template>
	<GlobalBlock class="info" v-if="item?.fields">
		<InfoItem
			v-for="(field, key) in item.fields"
			v-bind:key="key"
			:icon="field?.file?.url"
			:title="field.title"
			:text="field.content"
			:color="field.subtext"
		/>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.info {
		gap: 20px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		@include r(768px) {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
