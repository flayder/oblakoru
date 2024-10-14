<script setup>
	defineProps({
		modelValue: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
			default: "",
		},
		type: {
			type: String,
			default: "text",
		},
		isTextarea: {
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
	<textarea
		v-if="isTextarea"
		:value="modelValue"
		class="input"
		:placeholder="placeholder"
		@input="$emit('update:modelValue', $event.target.value)"
		:required="required"
	></textarea>
	<input
		v-else-if="type === 'tel'"
		v-mask="'+7 (###) ###-##-##'"
		type="tel"
		class="input"
		:placeholder="placeholder"
		:required="required"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
	<input
		v-else
		:value="modelValue"
		:type="type"
		class="input"
		:placeholder="placeholder"
		:required="required"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<style scoped lang="scss">
	.input {
		border-radius: 10px;
		border: 1px solid #d2e4f3;
		color: var(--color-text);
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		padding: 18px 22px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		resize: none;
		&::placeholder {
			opacity: 0.5;
		}
		@include r(768px) {
			font-size: 14px;
			padding: 16px 24px;
		}
	}
</style>
