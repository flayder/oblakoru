<script setup>
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import BaseButton from "../global/BaseButton.vue";
	import { ref } from "vue";

	defineProps({
		title: {
			type: String,
			default: "title",
		},
		text: {
			type: String,
			default: "text",
		},
	});

	const isOpen = ref(false);
</script>

<template>
	<div :class="`faq-item ${isOpen ? 'faq-item--open' : ''}`">
		<div class="faq-item__header" @click="isOpen = !isOpen">
			<p class="faq-item__title">{{ title }}</p>
			<BaseButton class="faq-item__button" variant="outline" color="accent">
				<IconChevron />
			</BaseButton>
		</div>
		<div class="faq-item__wrapper">
			<div class="faq-item__content">
				<p class="faq-item__text" v-html="text"></p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.faq-item {
		padding: 30px 40px;
		background: white;
		border-radius: 10px;
		transition: 0.3s ease;
		& + & {
			margin-top: 16px;
		}
		&__button {
			padding: 6px;
			width: auto;
			border-radius: 5px;
			:deep(svg) {
				transition: 0.3s ease;
			}
		}
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 20px;
		}
		&__title {
			color: var(--color-text);
			font-size: 24px;
			font-weight: 600;
		}
		&__wrapper {
			display: grid;
			grid-template-rows: 0fr;
			transition: 0.3s ease;
		}
		&__content {
			height: auto;
			overflow: hidden;
			transition: 0.3s ease;
		}
		&__text {
			color: var(--color-text);
			font-size: 16px;
			line-height: 140%;
			max-width: 832px;
		}
		&--open {
			.faq-item {
				&__title {
					color: var(--color-accent);
				}
				&__button {
					:deep(svg) {
						transform: rotate(180deg);
					}
				}
				&__wrapper {
					grid-template-rows: 1fr;
					margin-top: 12px;
				}
			}
		}
		@include r(768px) {
			padding: 20px;
			& + & {
				margin-top: 10px;
			}
			&__title {
				font-size: 20px;
			}
			&--open {
				.faq-item {
					&__wrapper {
						margin-top: 10px;
					}
				}
			}
		}
	}
</style>
