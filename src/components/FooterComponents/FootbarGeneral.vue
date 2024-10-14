<script setup>
	import DefaultLogo from "../global/DefaultLogo.vue";
	import NavbarSocials from "../global/NavbarSocials.vue";
	import FootbarStiemap from "./FootbarStiemap.vue";
</script>

<template>
	<div class="general-footbar">
		<GlobalContainer class="general-footbar__container">
			<div class="general-footbar__column">
				<DefaultLogo class="general-footbar__logo" color="#fff" />
				<NavbarSocials class="general-footbar__socials" />
			</div>
			<FootbarStiemap class="general-footbar__sitemap" />
		</GlobalContainer>
	</div>
</template>

<style scoped lang="scss">
	.general-footbar {
		padding: 30px 0;
		background-color: var(--color-text);
		border-radius: 20px;
		&__container {
			display: flex;
			gap: 30px 75px;
		}
		&__sitemap {
			flex: 1 1 0;
		}
		&__socials {
			color: #fff;
			gap: 16px;
		}
		&__column {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
		@include r(768px) {
			padding: 20px 0px 30px;
			&__logo {
				width: 160px;
				height: 20px;
			}
			&__container {
				flex-direction: column;
			}
			&__column {
				gap: 30px;
			}
			&__socials {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 16px;
			}
		}
	}
</style>
