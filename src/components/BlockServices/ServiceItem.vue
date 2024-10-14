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
			type: String,
			default: "",
		},
		href: {
			type: String,
			default: "#",
		},
	});
</script>

<template>
	<div class="service-item">
		<a :href="href" class="service-item__link"></a>
		<div class="service-item__icon" v-if="icon">
			<img :src="icon" :alt="title">
		</div>
		<p class="service-item__title" v-html="title"></p>
		<p class="service-item__text" v-html="text"></p>
	</div>
</template>

<style scoped lang="scss">
	.service-item {
		display: flex;
		flex-direction: column;
		padding: 40px;
		border-radius: 20px;
		border: 1px solid #ebf4fb;
		background: #fff;
		position: relative;
		height: 100%;
		min-height: 320px;
		&__title {
			margin-top: auto;
		}
		&__icon {
			width: 60px;
			height: 60px;
			background: var(--color-accent);
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
		}
		&__title {
			color: var(--color-text);
			font-size: 24px;
			font-weight: 600;
			transition: 0.3s ease;
		}
		&__text {
			color: var(--color-text);
			font-size: 14px;
			font-weight: 400;
			line-height: 140%;
			opacity: 0.5;
			margin-top: 10px;
			transition: 0.3s ease;
		}
		&__link {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		&:hover {
			.service-item {
				&__title {
					color: var(--color-accent);
				}
				&__text {
					opacity: 1;
				}
			}
		}
		@include r(768px) {
			padding: 20px;
			min-height: 260px;
			&__icon {
				width: 50px;
				height: 50px;
				:deep(svg) {
					width: 25px;
					height: 25px;
				}
			}
			&__title {
				font-size: 22px;
				color: var(--color-accent);
			}
			&__text {
				line-height: 130%;
				opacity: 1;
			}
		}
	}
</style>
