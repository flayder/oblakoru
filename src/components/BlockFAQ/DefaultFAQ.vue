<script setup>
	import FAQItem from "./FAQItem.vue";
	import api from "@/api/help"
	import { onMounted, ref } from "vue"
	const items = ref([])
	onMounted(async () => {
		items.value = await api.getHelps()
	})
</script>

<template>
	<section class="faq" v-if="items?.length > 0">
		<GlobalContainer class="faq__container">
			<GlobalBlockTitle class="faq__title">
				Часто задаваемые вопросы
			</GlobalBlockTitle>
			<template v-for="(item, index) in items" :key="index">
				<FAQItem :title="item.post_title" :text="item.post_content" />
			</template>
		</GlobalContainer>
	</section>
</template>

<style scoped lang="scss">
	.faq {
		margin-top: 100px;
		&__title {
			margin-bottom: 30px;
		}
		@include r(768px) {
			margin-top: 40px;
			&__title {
				margin-bottom: 20px;
			}
		}
	}
</style>
