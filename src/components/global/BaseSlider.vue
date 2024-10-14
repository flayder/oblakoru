<script setup>
	defineProps({
		modelValue: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 100,
		},
		min: {
			type: Number,
			default: 0,
		},
		postfix: {
			type: String,
			default: "ГБ",
		},
	});

	defineEmits(["update:modelValue"]);
</script>

<template>
	<div class="slider__wrapper">
		<label
			class="slider__label"
			:style="`
			--progress: ${((modelValue - min) / (max - min)) * 100};
			--value: ${modelValue};
			`"
			:data-value="modelValue"
		>
			<input
				type="range"
				:value="modelValue"
				:max="max"
				:min="min"
				class="slider no-swiping"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</label>

		<div class="slider__row">
			<div class="slider__min-max">{{ min }} {{ postfix }}</div>
			<div class="slider__min-max">{{ max }} {{ postfix }}</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.slider {
		-webkit-appearance: none;
		width: 100%;
		height: 8px;
		background: #f0f4ff;
		border-radius: 5px;
		outline: none;
		cursor: pointer;
		&::-webkit-slider-runnable-track {
			height: 8px;
			background: #f2f8fd;
			border-radius: 5px;
		}

		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			width: 24px;
			height: 24px;
			background: var(--color-accent);
			border-radius: 50%;
			cursor: pointer;
			margin-top: -8px;
		}

		&::-moz-range-thumb {
			width: 24px;
			height: 24px;
			background: var(--color-accent);
			border-radius: 50%;
			cursor: pointer;
		}

		&::-moz-range-track {
			height: 8px;
			background: #f2f8fd;
			border-radius: 5px;
		}

		&::-ms-thumb {
			width: 24px;
			height: 24px;
			background: var(--color-accent);
			border-radius: 50%;
			cursor: pointer;
		}

		&::-ms-track {
			width: 100%;
			height: 8px;
			background: transparent;
			border-color: transparent;
			color: transparent;
		}

		&::-ms-fill-lower {
			background: #f2f8fd;
		}

		&::-ms-fill-upper {
			background: #f0f4ff;
		}
		&__wrapper {
			display: flex;
			flex-direction: column;
			gap: 18px;
		}
		&__label {
			height: 24px;
			display: flex;
			align-items: center;
			position: relative;
			&::before {
				content: "";
				display: block;
				width: calc(var(--progress) * 1%);
				height: 8px;
				background: var(--color-accent);
				border-radius: 90px;
				position: absolute;
				left: 0;
				top: 8px;
				pointer-events: none;
			}
			&::after {
				content: attr(data-value);
				display: block;
				background: var(--color-accent);
				color: #fff;
				position: absolute;
				font-size: 12px;
				opacity: 0;
				font-weight: 600;
				width: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				left: calc(var(--progress) * 1%);
				transform: translateX(calc(var(--progress) / 4 * -1px - 4px));
				top: -12px;
				padding: 4px;
				transition: top 0.3s ease, opacity 0.3s ease;
				border-radius: 5px;
				pointer-events: none;
				background: var(--color-accent);
			}
		}
		&__wrapper:hover {
			.slider__label {
				&::after {
					opacity: 1;
					top: -24px;
				}
			}
		}
		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__min-max {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
		}
	}
</style>
