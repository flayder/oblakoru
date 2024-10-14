<script setup>
	defineProps({
		isOpen: {
			type: Boolean,
			default: false,
		},
	});
</script>

<template>
	<button
		:class="`hamburger ${isOpen ? 'hamburger--active' : ''}`"
		type="button"
	>
		<span></span>
		<span></span>
		<span></span>
	</button>
</template>

<style scoped lang="scss">
	.hamburger {
		position: relative;
		width: 26px;
		height: 18px;
		box-sizing: content-box;
		border: 8px solid transparent;
		margin: -9px -8px;
		span {
			width: 26px;
			height: 2px;
			border-radius: 100px;
			background-color: var(--color-accent);
			position: absolute;
			transition: 0.3s;
			left: 0;
			top: 0;
			&:first-child {
				transform: translate(0, 0);
			}
			&:nth-child(2) {
				transform: translate(0, 8px);
			}
			&:last-child {
				transform: translate(0, 16px);
			}
		}

		&--active {
			span {
				&:first-child {
					transform: translate(0, 8px) rotate(45deg);
				}
				&:nth-child(2) {
					transform: translate(0, 8px) rotate(-45deg);
				}
				&:last-child {
					transform: translate(0, 8px) rotate(0) scaleX(0);
				}
			}
		}
	}
</style>
