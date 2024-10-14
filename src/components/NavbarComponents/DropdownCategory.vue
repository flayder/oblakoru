<script setup>
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
</script>

<template>
	<div class="dropdown-link">
		<p class="dropdown-link__title">
			{{ category.post_title }}
			<IconChevron v-if="list.length > 0" />
		</p>
		<div v-if="list.length > 0" class="dropdown-link__list">
			<div class="dropdown-link__inner-list">
				<RouterLink
					v-for="item in list"
					:key="item.ID"
					class="dropdown-link__link"
					:to="item.url"
				>
					{{ item.post_title }}
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
			gap: 8px;
			font-size: 14px;
			color: #fff;
			cursor: default;
		}
		&__list {
			padding-top: 15px;
			position: absolute;
			top: 100%;
			left: 0;
			transition: 0.3s;
			transform: translate(0, 10px);
			pointer-events: none;
			opacity: 0;
		}
		&__inner-list {
			display: flex;
			flex-direction: column;
			background: #fff;
			padding: 5px;
			gap: 5px;
			border-radius: 10px;
			box-shadow: 0px 5px 20px 0px rgba(41, 52, 98, 0.06);
		}
		&__link {
			border-radius: 10px;
			padding: 12px;
			transition: 0.3s ease;
			color: var(--color-text);
			font-size: 14px;
			font-weight: 400;
			white-space: nowrap;
			&:hover {
				background: #f2f8fd;
				color: var(--color-accent);
			}
		}
		:deep(svg) {
			transition: 0.3s ease;
		}
		:deep(svg path) {
			fill: currentColor;
		}
		&:hover {
			.dropdown-link__list {
				opacity: 1;
				pointer-events: all;
				transform: translate(0, 0);
			}
			:deep(svg) {
				transform: rotate(180deg);
			}
		}
	}
</style>
