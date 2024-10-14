<script setup>
	import { ref } from "vue";
	import BaseSlider from "../global/BaseSlider.vue";
	import ConfiguratorGroup from "./ConfiguratorGroup.vue";

	defineProps({
		title: {
			type: String,
			default: "title",
		},
		postfix: {
			type: String,
			default: "ядер",
		},
		min: {
			type: Number,
			default: 2,
		},
		max: {
			type: Number,
			default: 104,
		},
	});

	const value = ref(2);
</script>

<template>
	<ConfiguratorGroup :title="title">
		<template #header>
			<label class="configurator-slider__label">
				<input
					v-model="value"
					class="configurator-slider__input"
					type="text"
					@input="
						if (value < min) value = min;
						if (value > max) value = max;
						$emit('update:modelValue', value);
					"
				/>
				{{ postfix }}
			</label>
		</template>
		<template #content>
			<BaseSlider
				v-model="value"
				:max="max"
				:min="min"
				:postfix="postfix"
				class="configurator-slider__slider"
			/>
		</template>
	</ConfiguratorGroup>
</template>

<style scoped lang="scss">
	.configurator-slider {
		&__label {
			padding: 15px 20px;
			border-radius: 10px;
			border: 1px solid var(--color-accent);
			display: flex;
			max-width: 150px;
			width: 100%;
			color: rgba(34, 34, 34, 0.5);
			font-size: 16px;
			font-weight: 400;
		}
		&__slider {
			width: 100%;
		}
		&__input {
			width: auto;
			min-width: 0px;
			display: flex;
			color: var(--color-accent);
			font-size: 16px;
			font-weight: 600;
		}
	}
</style>
