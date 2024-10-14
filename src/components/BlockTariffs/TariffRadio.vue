<script setup>
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import { ref, watch } from "vue";
	import BaseDropdown from "../global/BaseDropdown.vue";

	const props = defineProps({
		options: {
			type: Array,
			default: () => [],
		},
		modelValue: {
			type: String,
			default: "",
		},
	});

	const emit = defineEmits(["update:modelValue"]);

	const id =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);

	const localValue = ref(props.modelValue);

	watch(
		() => props.modelValue,
		(newValue) => {
			localValue.value = newValue;
		}
	);

	const updateValue = (value) => {
		emit("update:modelValue", value);
	};
	const { windowWidth } = useWindowWidth();
</script>

<template>
	<BaseDropdown
		v-if="windowWidth <= 768 && options.length > 2"
		:options="options"
		:value="localValue"
		class="tariff-radio__dropdown"
		@update:value="(value) => (localValue = value)"
	/>
	<div v-else class="tariff-radio">
		<label
			v-for="(radio, index) in options"
			:key="index"
			class="tariff-radio__label"
			:class="{ 'tariff-radio__label--active': localValue === radio }"
		>
			<input
				:name="`tariff-radio__${id}`"
				type="radio"
				:value="radio"
				:checked="radio === modelValue"
				class="tariff-radio__input"
				@input="updateValue(radio)"
			/>

			<p class="tariff-radio__text">{{ radio }}</p>
		</label>
	</div>
</template>

<style scoped lang="scss">
	.tariff-radio {
		display: flex;
		gap: 4px;
		padding: 5px;
		border-radius: 10px;
		background: #f2f8fd;
		&__input {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
		}
		&__text {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
		}
		&__label {
			display: flex;
			align-items: center;
			position: relative;
			justify-content: center;
			gap: 10px;
			padding: 10px 5px;
			border-radius: 10px;
			cursor: pointer;
			transition: 0.3s ease;
			border: 1px solid transparent;
			flex: 1 1 0;
			&--active {
				background: white;
				border: 1px solid var(--color-accent);
				.tariff-radio__text {
					color: var(--color-accent);
				}
			}
		}
		&__dropdown {
			width: 100%;
			:deep(.dropdown__title) {
				padding: 10px 20px;
				border-radius: 10px;
				background: #fff;
				height: 47px;
				border: 1px solid var(--color-accent);
			}
		}
	}
</style>
