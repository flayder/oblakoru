<script setup>
	defineProps({
		onlyDesktop: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<section :class="`section ${onlyDesktop ? 'section--desktop' : ''}`">
		<slot></slot>
	</section>
</template>

<style scoped lang="scss">
	.section {
		max-width: 1440px;
		padding: 0px 20px;
		width: 100%;
		margin: 0 auto;
		& + & {
			margin-top: 20px;
		}
		@include r(768px) {
			padding-left: 16px;
			padding-right: 16px;
		}
	}
	@include r(1232px) {
		.section--desktop {
			padding: 0;
		}
	}
</style>
