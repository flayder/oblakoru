<script setup>
	defineProps({
		title: {
			type: String,
			default: "title",
		},
		text: {
			type: String,
			default: "text",
		},
		number: {
			type: Number,
			default: 0,
		},
	});
</script>

<template>
	<div class="help-item">
		<p class="help-item__number">{{ number < 10 ? `0${number}` : number }}</p>
		<p class="help-item__title" v-html="title"></p>
		<p class="help-item__text" v-html="text"></p>
	</div>
</template>

<style scoped lang="scss">
	.help-item {
		border-radius: 20px;
		border: 1px solid #d2e4f3;
		background: #fff;
		padding: 20px 24px 24px 32px;
		&__number {
			color: var(--color-text);
			font-size: 18px;
			font-weight: 600;
			line-height: 140%;
		}
		&__title {
			color: var(--color-accent);
			font-size: 24px;
			font-weight: 600;
			margin-top: 48px;
		}
		&__text {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
			line-height: 140%;
			opacity: 0.5;
			margin-top: 20px;
		}
		@include r(768px) {
			padding: 20px;
			&__text {
				margin-top: 10px;
			}
			&__number {
				font-size: 14px;
			}
			&__title {
				font-size: 22px;
				margin-top: 30px;
			}
		}
	}
</style>
