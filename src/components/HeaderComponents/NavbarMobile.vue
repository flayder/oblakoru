<script setup>
	import { useStore, computed } from 'vuex'
	import DropdownCategoryMobile from "../NavbarComponents/DropdownCategoryMobile.vue";
	import IconUser from "@/assets/icons/IconUser.vue";
	import NavbarSocials from "../global/NavbarSocials.vue";
	import { navigation } from "@/data/navigation";
	import BaseButton from "../global/BaseButton.vue";
	const store = useStore()
	const top_menu1 = computed(() => store.state.blocks.top_menu1)
	const top_menu2 = computed(() => store.state.blocks.top_menu2)
</script>

<template>
	<nav class="mobile-navbar">
		<GlobalContainer class="mobile-navbar__container">
			<div class="mobile-navbar__column">
				<DropdownCategory
					v-bind:key="item.ID"
					v-for="item in top_menu1"
					:category="item"
					:list="item.children"
				/>
				<DropdownCategory
					v-bind:key="item.ID"
					v-for="item in top_menu2"
					:category="item"
					:list="item.children"
				/>
			</div>
			<hr class="mobile-navbar__divider" />
			<BaseButton class="mobile-navbar__button" variant="outline">
				<IconUser />
				Личный кабинет
			</BaseButton>
			<NavbarSocials />
		</GlobalContainer>
	</nav>
</template>

<style scoped lang="scss">
	.mobile-navbar {
		background: #fff;
		z-index: 2;
		width: 100vw;
		top: 100%;
		position: absolute;
		padding-top: 20px;
		height: clamp(100vh - 60px, 100vh, 100vh - 60px);
		overflow: auto;
		&__button {
			:deep(path) {
				fill: var(--color-accent);
			}
		}
		&__container {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
		&__column {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
		&__divider {
			width: 100%;
			height: 1px;
			background: #d2e4f3;
		}
	}
</style>
