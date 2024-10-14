<script setup>
	defineProps({
		title: {
			type: String,
			default: "title",
		},
		list: {
			type: Array,
			default: () => [],
		},
	});
</script>

<template>
	<div class="sitemap-item">
		<p class="sitemap-item__title">
			{{ title }}
		</p>
		<ul class="sitemap-item__list">
			<li v-for="item in list" :key="item.title" class="sitemap-item__item">
				<a :href="item.href">{{ item.title }}</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
	.sitemap-item {
		display: flex;
		flex-direction: column;
		gap: 12px;
		&__title {
			color: #fff;
			font-size: 16px;
			font-weight: 700;
			text-transform: uppercase;
			opacity: 0.3;
		}
		&__list {
			gap: 12px;
			display: flex;
			flex-direction: column;
		}
		&__item {
			color: #fff;
			font-size: 14px;
			font-weight: 400;
			a {
				font: inherit;
				color: inherit;
			}
		}
	}
</style>
