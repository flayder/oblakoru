<script setup>
	import { ref } from "vue";
	import IconChevron from "@/assets/icons/IconChevron.vue";

	defineProps({
		category: {
			type: Object,
			default: () => {
				return {
					title: "Home",
					href: "/",
				};
			},
		},
		list: {
			type: Array,
			default: () => [],
		},
	});

	const isOpen = ref(false);
</script>

<template>
	<div
		:class="`dropdown-link ${isOpen ? 'dropdown-link--active' : ''}`"
		@click="isOpen = !isOpen"
	>
		<button class="dropdown-link__title">
			{{ category.title }}
			<IconChevron v-if="list.length > 0" />
		</button>
		<div v-if="list.length > 0" class="dropdown-link__list">
			<div class="dropdown-link__inner-list">
				<RouterLink
					v-for="item in list"
					:key="item.title"
					class="dropdown-link__link"
					:to="item.href"
				>
					{{ item.title }}
				</RouterLink>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dropdown-link {
		position: relative;
		color: #fff;
		&__title {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 14px;
			font-weight: 700;
			text-transform: uppercase;
			color: var(--color-text);
			a {
				color: inherit;
				font: inherit;
			}
		}
		&__list {
			display: grid;
			grid-template-rows: 0fr;
			transition: 0.3s;
		}
		&__link {
			color: var(--color-text);
			opacity: 0.5;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
		&__inner-list {
			display: flex;
			flex-direction: column;
			gap: 15px;
			height: 100%;
			overflow: hidden;
		}
		:deep(svg) {
			transition: 0.3s ease;
			width: 16px;
			height: 16px;
		}
		:deep(svg path) {
			fill: var(--color-text);
		}
		&--active {
			:deep(svg) {
				transform: rotate(180deg);
			}

			.dropdown-link__list {
				padding-top: 15px;
				grid-template-rows: 1fr;
			}
		}
	}
</style>
