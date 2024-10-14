<script setup>
	defineProps({
		title: {
			type: String,
			default: "title",
		},
		text: {
			type: String,
			default: "text",
		},
		icon: {
			type: Object,
			default: () => {},
		},
		color: {
			type: String,
			default: "white-orange",
		},
	});
</script>

<template>
	<div :class="`info-item info-item--${color}`">
		<div class="info-item__icon" v-if="icon">
			<img :src="icon" :alt="title">
		</div>
		<p class="info-item__title" v-html="title"></p>
		<p class="info-item__text" v-html="text"></p>
	</div>
</template>

<style scoped lang="scss">
	.info-item {
		--color-component-accent: var(--color-orange);
		--color-component-background: #fff;
		--color-component-text: var(--color-text);
		--color-component-border: #d2e4f3;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		border: 1px solid var(--color-component-border);
		background: var(--color-component-background);
		padding: 40px;
		&__title {
			margin-top: 60px;
			max-width: 490px;
			width: 100%;
			color: var(--color-component-text);
			font-size: 42px;
			font-weight: 700;
			line-height: 120%; /* 50.4px */
			text-transform: uppercase;
		}
		&__text {
			margin-top: 15px;
			max-width: 490px;
			width: 100%;
			font-size: 20px;
			line-height: 140%;
			opacity: 0.5;
			color: var(--color-component-text);
		}
		&__icon {
			width: 60px;
			height: 60px;
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			background: var(--color-component-accent);
			:deep([fill]) {
				fill: var(--color-component-background);
			}
		}

		&--white-orange {
			--color-component-accent: var(--color-orange);
			--color-component-background: #fff;
			--color-component-text: var(--color-text);
		}
		&--orange-white {
			--color-component-accent: #fff;
			--color-component-background: var(--color-orange);
			--color-component-text: #fff;
			--color-component-border: var(--color-component-background);
		}
		&--white-accent {
			--color-component-accent: var(--color-accent);
			--color-component-background: #fff;
			--color-component-text: var(--color-text);
		}
		&--accent-white {
			--color-component-accent: #fff;
			--color-component-background: var(--color-accent);
			--color-component-text: #fff;
			--color-component-border: var(--color-component-background);
		}
		@include r(768px) {
			padding: 20px;
			&__icon {
				width: 50px;
				height: 50px;
				:deep(svg) {
					width: 25px;
					height: 25px;
				}
			}
			&__title {
				margin-top: 30px;
				line-height: 130%;
				font-size: 24px;
			}
			&__text {
				margin-top: 10px;
				font-size: 16px;
				line-height: 140%;
			}
		}
	}
</style>
