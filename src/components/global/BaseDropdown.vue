<script setup>
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import { ref } from "vue";

	const props = defineProps({
		options: {
			type: Array,
			default: () => [],
		},
		value: {
			type: String,
			default: "",
		},
	});

	const getValue = (item) => {
		if(typeof item == 'object' && item?.name && item?.value) {
			return item.value
		}

		return item
	}

	const getName = (item) => {
		if(typeof item == 'object' && item?.name && item?.value) {
			return item.name
		}

		return item
	}

	const getNameByValue = (value) => {
		var name = ''
		props.options.map((item) => {
			if(typeof item == 'object' && item?.name && item?.value) {
				if(item.value == value)
					name = item.name
			} else if (item == value) {
				name = item
			}
		})

		return name
	}

	defineEmits(["update:value"]);

	const isOpen = ref(false);
</script>
<!-- TODO: Переписать компонент, чтобы значения были в формате {label|title,value} -->
<template>
	<div class="dropdown" :class="`${isOpen ? 'dropdown--active' : ''}`">
		<p class="dropdown__title" @click.self="isOpen = !isOpen">
			{{ getNameByValue(value) }}
			<IconChevron v-if="options.length > 0" />
		</p>
		<div
			v-if="options.length > 0"
			class="dropdown__list"
			@mouseleave="isOpen = false"
		>
			<div class="dropdown__inner-list">
				<button
					v-for="(item, index) in options"
					:key="index"
					class="dropdown__option"
					:class="value === getValue(item) ? 'dropdown__option--active' : ''"
					type="button"
					@click="
						() => {
							$emit('update:value', getValue(item));
							isOpen = false;
						}
					"
				>
					{{ getName(item) }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.dropdown {
		position: relative;
		&__title {
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f2f8fd;
			width: 100%;
			padding: 15px 42px 15px 24px;
			display: flex;
			align-items: center;
			gap: 8px;
			font-size: 16px;
			color: var(--color-text);
			justify-content: space-between;
			width: 100%;
			cursor: pointer;
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
			width: 100%;
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
		&__option {
			border-radius: 10px;
			padding: 12px;
			text-align: left;
			transition: opacity 0.3s ease;
			color: var(--color-text);
			cursor: pointer;
			font-size: 14px;
			font-weight: 400;
			white-space: nowrap;
			&:hover,
			&--active {
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
		&--active {
			.dropdown__list {
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
