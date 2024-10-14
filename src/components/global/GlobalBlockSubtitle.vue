<template>
	<p class="title">
		<slot></slot>
	</p>
</template>

<style scoped lang="scss">
	.title {
		color: var(--color-text);
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
		:deep(span) {
			color: var(--color-accent);
		}
		@include r(768px) {
			font-size: 16px;
		}
	}
</style>
