<script setup>
	import GlobalContainer from "../global/GlobalContainer.vue";
	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	import moment from 'moment'
	const items = ref([])
	onMounted(async () => {
		items.value = await api.getMenu(4)
	})
</script>

<template>
	<div class="footbar-small" v-if="items?.length > 0">
		<GlobalContainer class="footbar-small__container">
			<p class="footbar-small__text">© {{ moment().format('YYYY') }} Облако.ру</p>
			<div class="footbar-small__row">
				<a 
					:href="item.url"
					v-bind:key="item.ID"
					class="footbar-small__link" 
					v-for="item in items">{{ item.post_title }}
				</a>
			</div>
		</GlobalContainer>
	</div>
</template>

<style scoped lang="scss">
	.footbar-small {
		margin-top: 20px;
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap-reverse;
			gap: 20px;
		}
		&__row {
			display: flex;
			align-items: center;
			gap: 20px 36px;
			flex-wrap: wrap;
		}
		&__link,
		&__text {
			color: var(--color-text);
			opacity: 0.5;
			font-size: 16px;
			font-weight: 400;
		}
		@include r(768px) {
			margin-top: 0;
			&__row {
				padding-top: 30px;
				border-top: 1px solid rgba(255, 255, 255, 0.2);
				align-items: flex-start;
				flex-direction: column;
				width: 100%;
			}
			&__link,
			&__text {
				color: #fff;
				text-align: left;
			}
		}
	}
</style>
