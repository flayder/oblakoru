<script setup>
	defineProps({
		color: {
			type: String,
			default: "accent",
		},
		variant: {
			type: String,
			default: "solid",
		},
		link: {
			type: String,
			default: ""
		}
	});
</script>

<template>
	<button :class="`button button--${color} button--${variant}`" v-if="!link">
		<slot />
	</button>
	<a :to="link" :class="`button button--${color} button--${variant}`" v-else>
		<slot />
	</a>
</template>

<style scoped lang="scss">
	.button {
		--color-component-border: transparent;
		--color-component-text: var(--color-accent);
		--color-component-background: var(--color-accent);

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 14px 16px;
		border-radius: 10px;
		color: var(--color-component-text);
		background: var(--color-component-background);
		border: 1px solid var(--color-component-border);
		font-weight: 500;
		font-size: 16px;
		width: 100%;
		transition: 0.3s;
		cursor: pointer;
		:deep([fill]) {
			fill: var(--color-component-text);
		}

		&--accent {
			--color-component-border: var(--color-accent);
			--color-component-text: #fff;
			--color-component-background: var(--color-accent);
			--color-component-outline-hover: #fff;
			@include hoverActive {
				--color-component-background: hsl(224, 100%, 38%);
			}
		}
		&--orange {
			--color-component-border: var(--color-orange);
			--color-component-text: #fff;
			--color-component-background: var(--color-orange);
			@include hoverActive {
				--color-component-background: hsl(15, 100%, 48%);
			}
		}
		&--white {
			--color-component-border: #fff;
			--color-component-text: var(--color-accent);
			--color-component-outline-hover: var(--color-accent);
			--color-component-background: #fff;
		}
		&--outline {
			--color-component-background: transparent;
			--color-component-text: var(--color-component-border);
			@include hoverActive {
				background-color: var(--color-component-border);
				color: var(--color-component-outline-hover);
				:deep([fill]) {
					fill: var(--color-component-outline-hover);
				}
			}
		}
	}
</style>
