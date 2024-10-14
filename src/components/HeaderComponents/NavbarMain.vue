<script setup>
	import { onMounted, computed  } from 'vue'
	import DropdownCategory from "../NavbarComponents/DropdownCategory.vue";
	import IconUser from "@/assets/icons/IconUser.vue";
	import { navigation } from "@/data/navigation";
	import { useStore } from 'vuex'
	const store = useStore()
	const items = computed(() => store.state.blocks.top_menu1)
	onMounted(() => {
		store.dispatch('blocks/getBackendTopMenu1')
	})
</script>

<template>
	<nav class="general-navbar">
		<GlobalContainer class="general-navbar__container">
			<div class="general-navbar__row">
				<DropdownCategory
					v-bind:key="item.ID"
					v-for="item in items"
					:category="item"
					:list="item.children"
				/>
			</div>
			<a href="/" class="general-navbar__cabinet">
				<IconUser /> Личный кабинет
			</a>
		</GlobalContainer>
	</nav>
</template>

<style scoped lang="scss">
	.general-navbar {
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: var(--color-accent);
		border-radius: 10px;
		position: relative;
		z-index: 2;

		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__row {
			display: flex;
			align-items: center;
			gap: 36px;
		}

		&__cabinet {
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 14px;
			color: #fff;
		}
	}
</style>
