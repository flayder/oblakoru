<script setup>
	import { onMounted, computed } from 'vue'
	import { useStore } from 'vuex'
	import IconPhone from "@/assets/icons/IconPhone.vue";
	import DropdownCategory from "../NavbarComponents/DropdownCategory.vue";
	import MainLogo from "../global/DefaultLogo.vue";
	const store = useStore()
	const items = computed(() => store.state.blocks.top_menu2)
	onMounted(() => {
		store.dispatch('blocks/getBackendTopMenu2')
	})
</script>

<template>
	<nav class="services-navbar">
		<GlobalContainer class="services-navbar__container">
			<a href="/"><MainLogo class="services-navbar__logo" /></a>
			<div class="services-navbar__row">
				<DropdownCategory
					v-bind:key="item.ID"
					v-for="item in items"
					:category="item"
					:list="item.children"
					class="services-navbar__link"
				/>
			</div>
			<a href="tel:8 (499) 707-74-23" class="services-navbar__phone">
				<IconPhone /> 8 (499) 707-74-23
			</a>
		</GlobalContainer>
	</nav>
</template>

<style scoped lang="scss">
	.services-navbar {
		margin-top: 20px;
		&__container {
			display: flex;
			align-items: center;
			gap: 20px 36px;
			justify-content: space-between;
			flex-wrap: wrap;
			container-name: services-navbar;
			container-type: inline-size;
		}
		&__row {
			display: flex;
			align-items: center;
			gap: 36px;
		}
		&__phone {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 20px;
			font-weight: 600;
			color: var(--color-accent);
		}
		&__link {
			color: var(--color-text);
			font-size: 16px;
			:deep(.dropdown-link__title) {
				font-size: 16px;
				color: var(--color-text);
			}
		}
	}
	@container services-navbar (max-width: 1031px) {
		.services-navbar {
			&__row {
				order: 3;
				flex-basis: 100%;
				justify-content: center;
			}
			&__phone {
				order: 2;
				flex-wrap: wrap;
			}
			&__logo {
				order: 1;
			}
		}
	}
</style>
