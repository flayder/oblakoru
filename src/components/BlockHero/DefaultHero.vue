<script setup>
	import BaseButton from "../global/BaseButton.vue";
	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	const item = ref({})
	onMounted(async () => {
		item.value = await api.getBlock(48)
	})
</script>

<template>
	<GlobalBlock class="hero" v-if="item">
		<div class="hero__inner">
			<GlobalContainer class="hero__container">
				<div class="hero__column">
					<h1 class="hero__title">
						{{ item.post_title }} <span v-if="item.post_excerpt">{{ item.post_excerpt }}</span>
					</h1>
					<p class="hero__subtitle" v-if="item.post_content" v-html="item.post_content"></p>
					<BaseButton class="hero__button" color="orange">
						ПОЛУЧИТЬ СЕРВЕР ЗА 5 МИНУТ
					</BaseButton>
				</div>
				<img
					:src="item.thumbnail"
					alt=""
					class="hero__decor"
					v-if="item.thumbnail"
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
			background: url("@/assets/img/home-hero-bg-desktop.jpg") no-repeat;
			background-position: right;
			border-radius: 20px;
			padding-top: 80px;
			padding-bottom: 80px;
		}
		&__column {
			max-width: 770px;
			position: relative;
			z-index: 1;
		}
		&__decor {
			position: absolute;
			bottom: 5px;
			right: clamp(24px, 6.944vw, 100px);
			width: clamp(260px, 25%, 360px);
		}
		&__title {
			color: var(--color-text);
			font-size: 54px;
			font-weight: 700;
			line-height: 120%; /* 64.8px */
			text-transform: uppercase;
			span {
				color: var(--color-accent);
			}
		}
		&__subtitle {
			margin-top: 15px;
			max-width: 498px;
			color: var(--color-text);
			font-size: 22px;
			line-height: 140%;
		}
		&__button {
			margin-top: 30px;
			max-width: unset;
			width: auto;
			padding: 20px 32px;
		}
		@include r(768px) {
			padding-bottom: 30px !important;
			&__inner {
				padding-bottom: 350px !important;
				background: url("@/assets/img/home-hero-bg-mobile.jpg") no-repeat;
				background-size: cover;
				background-position: bottom;
			}
			&__title {
				font-size: 32px;
			}
			&__subtitle {
				font-size: 16px;
				margin-top: 10px;
			}
			&__decor {
				bottom: -30px;
				left: 50%;
				right: auto;
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
