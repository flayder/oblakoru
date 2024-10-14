<script setup>
	import IconLogoDzen from "@/assets/icons/IconLogoDzen.vue";
	import IconLogoTelegram from "@/assets/icons/IconLogoTelegram.vue";
	import IconLogoVK from "@/assets/icons/IconLogoVK.vue";
</script>

<template>
	<div class="navbar-social__wrapper">
		<div class="navbar-social">
			<p class="navbar-social__title">Телефон:</p>
			<a href="tel:8 (499) 707-74-23" class="navbar-social__link">
				8 (499) 707-74-23
			</a>
		</div>
		<div class="navbar-social">
			<p class="navbar-social__title">Почта:</p>
			<a href="mailto:sales@oblakoru.ru" class="navbar-social__link">
				sales@oblakoru.ru
			</a>
		</div>
		<div class="navbar-social">
			<p class="navbar-social__title">Соц. сети:</p>
			<div class="navbar-social__row">
				<a href="/" class="navbar-social__media">
					<IconLogoVK />
				</a>
				<a href="/" class="navbar-social__media">
					<IconLogoTelegram />
				</a>
				<a href="/" class="navbar-social__media">
					<IconLogoDzen />
				</a>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.navbar-social {
		display: flex;
		flex-direction: column;
		gap: 12px;
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
		&__title {
			font-size: 16px;
			opacity: 0.5;
			color: currentColor;
		}
		&__link {
			font-size: 16px;
			color: currentColor;
		}
		&__row {
			display: flex;
			gap: 16px;
		}
		&__media {
			color: currentColor;
		}
		:deep(path) {
			fill: currentColor;
		}
	}
</style>
