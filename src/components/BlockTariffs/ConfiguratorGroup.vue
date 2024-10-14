<script setup>
	defineProps({
		title: {
			type: String,
			default: "title",
		},
		price: {
			type: String,
			default: "+750 ₽",
		},
		isDiscount: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<div class="configurator-group">
		<div class="configurator-group__header">
			<p class="configurator-group__title">
				{{ title }}
				<span :class="isDiscount ? 'discount' : ''">{{ price }}</span>
			</p>
			<slot name="header"></slot>
		</div>
		<slot name="content"></slot>
	</div>
</template>

<style scoped lang="scss">
	.configurator-group {
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: flex-start;
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
		&__title {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 600;
			gap: 10px;
			display: flex;
			align-items: center;
			span {
				opacity: 0.5;
			}
			.discount {
				opacity: 1;
				color: var(--color-accent);
			}
		}
		@include r(768px) {
			&__header {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 20px;
			}
		}
	}
</style>
