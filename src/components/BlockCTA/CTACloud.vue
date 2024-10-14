<script setup>
	import BaseButton from "../global/BaseButton.vue";
	import GlobalBlock from "../global/GlobalBlock.vue";
	import GlobalContainer from "../global/GlobalContainer.vue";

	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	const item = ref({})
	onMounted(async () => {
		item.value = await api.getBlock(72)
	})
</script>

<template>
	<GlobalBlock class="cta" v-if="item">
		<div class="cta__inner">
			<GlobalContainer class="cta__container">
				<div class="cta__column">
					<p class="cta__title" v-html="item.post_title"></p>
					<p class="cta__text" v-html="item.post_content"></p>
				</div>
				<BaseButton :link="item.post_excerpt" class="cta__button" color="white" variant="outline">
					ПОДРОБНЕЕ О КОМПАНИИ
				</BaseButton>
			</GlobalContainer>
		</div>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.cta {
		&__inner {
			background: url("@/assets/img/home-cta-cloud-bg-desktop.jpg") no-repeat;
			background-position: right;
			background-size: cover;
			border-radius: 20px;
			padding-top: 60px;
			padding-bottom: 60px;
		}
		&__container {
			display: flex;
			gap: 32px;
			flex-direction: column;
			align-items: flex-start;
		}
		&__column {
			display: flex;
			flex-direction: column;
			max-width: 700px;
		}
		&__button {
			width: auto;
			padding: 20px 50px;
			white-space: nowrap;
		}
		&__title {
			color: #fff;
			font-size: 36px;
			font-weight: 700;
			line-height: 120%; /* 43.2px */
			text-transform: uppercase;
		}
		&__text {
			margin-top: 15px;
			color: #fff;
			font-size: 20px;
			font-weight: 400;
			line-height: 140%; /* 28px */
		}
		@include r(768px) {
			&__inner {
				background: url("@/assets/img/home-cta-cloud-bg-mobile.jpg") no-repeat;
				background-position: right;
				background-size: cover;
				border-radius: 20px;
				padding-top: 20px;
				padding-bottom: 20px;
			}
			&__container {
				padding-left: 20px;
				padding-right: 20px;
			}
			&__column {
				min-width: 0;
			}
			&__title {
				font-size: 22px;
				line-height: 130%;
			}
			&__text {
				font-size: 16px;
				line-height: 140%;
				margin-top: 10px;
			}
			&__button {
				width: 100%;
				padding: 16px 24px;
				font-size: 14px;
			}
		}
	}
</style>
