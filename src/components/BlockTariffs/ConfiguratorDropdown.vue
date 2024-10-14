<script setup>
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import { onMounted, onUnmounted, ref } from "vue";

	defineProps({
		title: {
			type: String,
			default: "title",
		},
		options: {
			type: Array,
			default: () => [],
		},
		modelValue: {
			type: String,
			default: "",
		},
	});

	defineEmits(["update:modelValue"]);

	const isOpen = ref(false);
	const dropdown = ref(null);
	const closeDropdown = (event) => {
		if (!dropdown.value.contains(event.target)) {
			isOpen.value = false;
		}
	};
	onMounted(() => {
		window.addEventListener("click", closeDropdown);
	});
	onUnmounted(() => {
		window.removeEventListener("click", closeDropdown);
	});
</script>

<template>
	<div
		ref="dropdown"
		class="dropdown"
		:class="`${isOpen ? 'dropdown--active' : ''} ${
			options.find((item) => item.value === modelValue)?.title
				? 'dropdown--selected'
				: ''
		}`"
	>
		<div class="dropdown__header" @click="isOpen = !isOpen">
			<div class="dropdown__title">
				{{ title }}
				<hr />
				{{
					options.find((item) => item.value === modelValue)?.title
						? options.find((item) => item.value === modelValue).title
						: options[0].title
				}}
			</div>
			<IconChevron class="dropdown__icon" />
		</div>
		<div class="dropdown__list">
			<button
				v-for="(item, index) in options"
				:key="index"
				class="dropdown__option"
				:class="modelValue === item.value ? 'dropdown__option--active' : ''"
				type="button"
				@click="
					$emit('update:modelValue', item.value);
					isOpen = false;
				"
			>
				{{ title }} - {{ item.title }}
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dropdown {
		position: relative;
		z-index: 1;
		&__header {
			display: flex;
			gap: 10px;
			align-items: center;
			justify-content: center;
			padding: 10px 30px;
			border-radius: 10px;
			border: 1px solid var(--color-accent);
			cursor: pointer;
			transition: 0.3s ease;
			:deep([fill]) {
				fill: var(--color-text);
			}
			:deep(svg) {
				transition: 0.3s ease;
			}
		}
		&__list {
			position: absolute;
			top: calc(100% + 5px);
			display: flex;
			flex-direction: column;
			padding: 5px;
			background: #fff;
			gap: 5px;
			border-radius: 10px;
			width: 100%;
			transition: 0.3s ease;
			opacity: 0;
			pointer-events: none;
			transform: translateY(10px);
		}
		&__option {
			padding: 15px 20px;
			color: var(--color-text);
			font-size: 12px;
			font-weight: 600;
			border-radius: 10px;
			text-align: left;
			transition: 0.3s ease;
			cursor: pointer;
			&:hover,
			&--active {
				background: #f2f8fd;
			}
		}
		&__title {
			display: flex;
			align-items: center;
			gap: 10px;
			hr {
				width: 1px;
				height: 20px;
				background: var(--color-text);
			}
		}
		&--active {
			z-index: 2;
			.dropdown {
				&__list {
					transform: translateY(0);
					pointer-events: all;
					opacity: 1;
				}
				&__header {
					:deep(svg) {
						transform: rotate(180deg);
					}
				}
			}
		}
		&--selected {
			.dropdown {
				&__header {
					background: var(--color-accent);
					:deep([fill]) {
						fill: #fff;
					}
				}
				&__title {
					color: #fff;
					hr {
						background: #fff;
					}
				}
			}
		}
		@include r(768px) {
			&__header {
				padding: 10px 15px;
			}
		}
	}
</style>
