<script setup>
	import { ref } from "vue";
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import HamburgerButton from "../HeaderComponents/HamburgerButton.vue";
	import NavbarMobile from "../HeaderComponents/NavbarMobile.vue";
	import DefaultLogo from "./DefaultLogo.vue";
	import NavbarServices from "../HeaderComponents/NavbarServices.vue";
	import NavbarMain from "../HeaderComponents/NavbarMain.vue";

	const isOpen = ref(false);
	const { windowWidth } = useWindowWidth();
</script>

<template>
	<header v-if="windowWidth > 768" class="header">
		<GlobalBlock>
			<NavbarMain />
			<NavbarServices />
		</GlobalBlock>
	</header>
	<header
		v-else
		:class="`header-mobile ${isOpen ? 'header-mobile--active' : ''}`"
	>
		<GlobalContainer class="header-mobile__container">
			<a href="/"><DefaultLogo class="header-mobile__logo" /></a>
			<HamburgerButton :is-open="isOpen" @click="isOpen = !isOpen" />
		</GlobalContainer>
		<Transition name="slide">
			<NavbarMobile v-if="isOpen" />
		</Transition>
	</header>
</template>

<style scoped lang="scss">
	.header {
		padding-top: 10px;
		position: relative;
		z-index: 2;
	}
	.header-mobile {
		padding: 20px 0px;
		background: #fff;
		position: relative;
		z-index: 1;
		box-shadow: 0px 5px 20px 0px rgba(41, 52, 98, 0.06);
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__logo {
			width: 160px;
			height: 20px;
		}
		&--active {
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			z-index: 2;
		}
	}
	.slide-enter-active,
	.slide-leave-active {
		transition: transform 0.5s ease;
	}
	.slide-enter-from {
		transform: translateX(100%);
	}
	.slide-leave-to {
		transform: translateX(100%);
	}
</style>
