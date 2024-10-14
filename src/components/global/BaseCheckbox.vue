<script setup>
	defineProps({
		modelValue: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false
		}
	});

	defineEmits(["update:modelValue"]);
</script>

<template>
	<label class="checkbox">
		<input
			class="checkbox__input"
			type="checkbox"
			:checked="modelValue"
			@input="$emit('update:modelValue', $event.target.checked)"
			:required="required"
		/>
		<div class="checkbox__box"></div>
		<p class="checkbox__text">
			<slot></slot>
		</p>
	</label>
</template>

<style scoped lang="scss">
	.checkbox {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		position: relative;
		&__input {
			position: absolute;
			opacity: 0;
			// visibility: hidden;
			// width: 0;
			// height: 0;
		}
		&__box {
			transition: 0.3s ease;
			width: 16px;
			height: 16px;
			border: 1px solid var(--color-accent);
			border-radius: 3px;
		}
		&__text {
			color: var(--color-text);
			font-size: 14px;
			font-weight: 400;
			:deep(a) {
				color: var(--color-accent);
				text-decoration-line: underline;
				text-underline-position: under;
			}
		}
		&__input:checked + &__box {
			background-color: var(--color-accent);
		}
	}
</style>
