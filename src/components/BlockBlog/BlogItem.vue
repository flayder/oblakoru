<script setup>
	defineProps({
		image: {
			type: String,
			default: "",
		},
		date: {
			type: String,
			default: "14.09.2024",
		},
		text: {
			type: String,
			default: "text",
		},
		tags: {
			type: Array,
			default: () => [],
		},
	});
</script>

<template>
	<div class="blog-item">
		<div class="blog-item__header">
			<div class="blog-item__tags">
				<a
					v-for="(tag, index) in tags"
					:key="index"
					href="#"
					class="blog-item__tag"
				>
					{{ tag }}
				</a>
			</div>
			<img :src="image" class="blog-item__image" :alt="text" v-if="image" />
		</div>
		<p class="blog-item__date">{{ date }}</p>
		<p class="blog-item__text" v-html="text"></p>
	</div>
</template>

<style scoped lang="scss">
	.blog-item {
		display: flex;
		flex-direction: column;
		min-width: 300px;
		flex: 1 1 0;
		&__header {
			border-radius: 20px;
			overflow: hidden;
			position: relative;
			height: 220px;
		}
		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
		&__date {
			margin-top: 30px;
			color: var(--color-text);
			font-size: 12px;
			line-height: 140%;
			opacity: 0.5;
		}
		&__text {
			margin-top: 15px;
			color: var(--color-text);
			font-size: 16px;
			line-height: 140%; /* 22.4px */
		}
		&__tag {
			padding: 8px 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--color-accent);
			background: white;
			border-radius: 90px;
			text-align: center;
			font-size: 12px;
			font-weight: 500;
		}
		&__tags {
			display: flex;
			align-items: center;
			gap: 4px;
			top: 20px;
			left: 20px;
			position: absolute;
		}
		@include r(768px) {
			&__header {
				height: 200px;
			}
			&__date {
				margin-top: 20px;
			}
			&__text {
				margin-top: 10px;
			}
		}
	}
</style>
