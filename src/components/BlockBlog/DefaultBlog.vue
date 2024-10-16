<script setup>
	import BaseButton from "../global/BaseButton.vue";
	import BlogItem from "./BlogItem.vue";
	import api from "@/api/post"
	import { onMounted, ref } from "vue"
	import moment from 'moment'
	const items = ref([])
	onMounted(async () => {
		items.value = await api.getMainPosts()
	})

</script>

<template>
	<section class="blog">
		<GlobalContainer class="blog__container">
			<GlobalBlockTitle class="blog__title">Блог</GlobalBlockTitle>
			<div class="blog__row">
				<BlogItem
					v-for="(item, index) in items"
					:key="index"
					:tags="[item?.fields?.type?.value]"
					:image="item.thumbnail"
					:date="moment(item.post_date).format('DD.MM.YYYY')"
					:text="item.post_content"
				/>
			</div>
			<!-- <BaseButton class="blog__button" color="accent">ПОЧИТАТЬ ЕЩЕ</BaseButton> -->
		</GlobalContainer>
	</section>
</template>

<style scoped lang="scss">
	.blog {
		margin-top: 100px;
		&__row {
			display: flex;
			gap: 15px 20px;
			margin-top: 30px;
			flex-wrap: wrap;
		}
		&__button {
			margin: 60px auto 0;
			max-width: 390px;
		}
		@include r(768px) {
			margin-top: 60px;
			&__button {
				margin-top: 30px;
			}
		}
	}
</style>
