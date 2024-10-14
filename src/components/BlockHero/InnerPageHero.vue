<script setup>
	import BaseButton from "../global/BaseButton.vue";

	defineProps({
		title: {
			type: String,
			default: "title",
		},
		text: {
			type: String,
			default: "text",
		},
		button: {
			type: String,
			default: "button",
		},
		image: {
			type: String,
			default: "image",
		},
		decorStyle: {
			type: String,
			default: "",
		},
		breadcrumbs: {
			type: String,
			default: "",
		},
	});
</script>

<template>
	<GlobalBlock class="hero">
		<div class="hero__inner">
			<GlobalContainer class="hero__container">
				<div class="hero__column">
					<p class="hero__breadcrumbs">{{ breadcrumbs }}</p>
					<h1 class="hero__title" v-html="title"></h1>
					<p class="hero__subtitle" v-html="text"></p>
					<BaseButton class="hero__button" color="orange">
						{{ button }}
					</BaseButton>
				</div>
				<img
					:src="image"
					:alt="title"
					class="hero__decor"
					:style="decorStyle"
				/>
			</GlobalContainer>
		</div>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.hero {
		position: relative;
		margin-top: 20px !important;
		&__inner {
			border-radius: 20px;
			padding-bottom: 80px;
		}
		&__breadcrumbs {
			color: rgba(34, 34, 34, 0.5);
			font-size: 16px;
			font-weight: 600;
		}
		&__column {
			max-width: 770px;
			position: relative;
			z-index: 1;
		}
		&__decor {
			position: absolute;
			bottom: -90px;
			right: 80px;
		}
		&__title {
			color: var(--color-text);
			font-size: 42px;
			font-weight: 700;
			line-height: 120%; /* 64.8px */
			text-transform: uppercase;
			margin-top: 50px;
			span {
				color: var(--color-accent);
			}
		}
		&__subtitle {
			margin-top: 52px;
			max-width: 646px;
			color: var(--color-text);
			font-size: 20px;
		}
		&__button {
			margin-top: 30px;
			max-width: unset;
			width: auto;
			padding: 20px 32px;
		}
		@include r(768px) {
			padding-bottom: 0px !important;
			padding: 0 !important;
			&__inner {
				padding-top: 0px;
				padding-bottom: 0px !important;
			}
			&__title {
				font-size: 32px;
				margin-top: 24px;
			}
			&__subtitle {
				font-size: 16px;
				margin-top: 12px;
			}
			&__decor {
				left: 50%;
				bottom: 0;
				width: 100% !important;
				margin-top: 30px;
				height: auto;
				right: auto;
				position: relative;
				transform: translateX(-50%);
			}
			&__container {
				padding-left: 20px;
				padding-right: 20px;
			}
			&__button {
				padding: 16px;
				margin-top: 20px;
				width: 100%;
				font-size: 14px;
			}
		}
	}
</style>
