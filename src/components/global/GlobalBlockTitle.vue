<template>
	<p class="title">
		<slot></slot>
	</p>
</template>

<style scoped lang="scss">
	.title {
		color: var(--color-text);
		font-size: 42px;
		font-weight: 700;
		line-height: 120%;
		text-transform: uppercase;
		:deep(span) {
			color: var(--color-accent);
		}
		@include r(768px) {
			font-size: 24px;
			line-height: 130%;
		}
	}
</style>
