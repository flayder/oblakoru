<script setup>
	defineProps({
		title: {
			type: String,
			default: "title",
		},
		icon: {
			type: Object,
			default: () => {},
		},
	});
</script>

<template>
	<div class="benefit-item">
		<div class="benefit-item__icon">
			<component :is="icon"></component>
		</div>
		<p class="benefit-item__title" v-html="title"></p>
	</div>
</template>

<style scoped lang="scss">
	.benefit-item {
		display: flex;
		flex-direction: column;
		padding: 32px 32px 24px;
		border-radius: 20px;
		border: 1px solid #ebf4fb;
		background: #fff;
		position: relative;
		height: 100%;
		gap: 18px;
		&__icon {
			width: 45px;
			height: 45px;
			background: var(--color-accent);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
		}
		&__title {
			color: var(--color-text);
			font-size: 16px;
			line-height: 140%;
			font-weight: 600;
			transition: 0.3s ease;
		}
		@include r(768px) {
			padding: 20px;
			min-height: 260px;
			&__icon {
				width: 45px;
				height: 45px;
			}
		}
	}
</style>
