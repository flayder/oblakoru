<script setup>
	import FootbarGeneral from "../FooterComponents/FootbarGeneral.vue";
	import FootbarSmall from "../FooterComponents/FootbarSmall.vue";
</script>

<template>
	<footer class="footer">
		<GlobalBlock class="footer__container">
			<FootbarGeneral />
			<FootbarSmall />
		</GlobalBlock>
	</footer>
</template>

<style scoped lang="scss">
	.footer {
		margin-top: 20px;
		padding-bottom: 20px;
		@include r(768px) {
			background-color: var(--color-text);
			margin-top: 0;
			&__container {
				padding: 0 !important;
			}
		}
	}
</style>
