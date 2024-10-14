<script setup>
	import IconPin from "@/assets/icons/IconPin.vue";
	import IconStar from "@/assets/icons/IconStar.vue";
	defineProps({
		name: {
			type: String,
			default: "name",
		},
		rate: {
			type: Number,
			default: 5,
		},
		task: {
			type: String,
			default: "task",
		},
		text: {
			type: String,
			default: "text",
		},
		file: {
			type: String,
			default: ""
		}
	});
</script>

<template>
	<div class="review-item">
		<div class="review-item__column">
			<div class="review-item-info">
				<p class="review-item-info__title">Имя</p>
				<p class="review-item-info__text">
					<b>{{ name }}</b>
				</p>
			</div>
			<div class="review-item-info">
				<p class="review-item-info__title">Оценка</p>
				<p class="review-item-info__text">
					<IconStar v-for="i in rate" :key="i" />
				</p>
			</div>
			<div class="review-item-info">
				<p class="review-item-info__title">Задача</p>
				<p class="review-item-info__text">{{ task }}</p>
			</div>
			<a :href="file" target="_blank" download="true" class="review-item__link" v-if="file">
				<IconPin />
				Оригинал отзыва
			</a>
		</div>
		<p class="review-item__text">
			{{ text }}
		</p>
	</div>
</template>

<style scoped lang="scss">
	.review-item {
		display: flex;
		gap: 30px 32px;
		justify-content: space-between;
		flex-wrap: wrap;
		&__column {
			max-width: 476px;
			display: flex;
			flex: 1 1 0;
			min-width: 288px;
			gap: 36px;
			flex-wrap: wrap;
			& > *:nth-child(3),
			& > *:nth-child(4) {
				flex-basis: 100%;
			}
		}
		&__link {
			display: flex;
			align-items: center;
			gap: 8px;
			color: var(--color-accent);
			text-align: center;
			font-size: 12px;
			font-weight: 500;
			text-decoration-line: underline;
			text-underline-position: under;
		}
		&__text {
			color: var(--color-accent);
			font-size: 28px;
			font-weight: 600;
			flex: 1 1 0;
			min-width: 288px;
			line-height: 130%;
			max-width: 560px;
		}
		@include r(768px) {
			flex-direction: column;
			&__column {
				max-width: 100%;
				gap: 20px 36px;
				min-width: 0;
			}
			&__text {
				font-size: 22px;
				max-width: 100%;
				min-width: 0;
			}
		}
	}
	.review-item-info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		&__text {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
			line-height: 140%;
			display: flex;
			gap: 4px;
			b {
				font-weight: 600;
			}
		}
		&__title {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
			opacity: 0.5;
		}
		@include r(768px) {
			&__title {
				font-size: 14px;
			}
			&__text {
				font-size: 14px;
			}
		}
	}
</style>
