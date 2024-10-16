<script setup>
	import BaseButton from "../global/BaseButton.vue";
	import {ref} from "vue" 
	import productUtil from "@/utils/product"

	const props = defineProps({
		tariff: {
			type: Object,
			default: () => {},
		},
	});

	const pricelist = ref(props?.tariff?.fields?.pricelist?.value);
	const duration = ref(props?.tariff?.fields?.month?.value ?? '1');
	const defaultValue = ref(props?.tariff?.fields?.memory?.value?.memory_default ?? '1');

	const orderClick = () => {
		productUtil.generateBaseLink(pricelist.value, defaultValue.value, duration.value)
	}
</script>

<template>
	<div class="tariff-item-table">
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">Тариф</p>
			<p class="tariff-item-table__text tariff-item-table__text--title">
				{{ tariff.post_title }}
			</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">CPU</p>
			<p class="tariff-item-table__text">{{ tariff?.fields?.cpu?.value }}</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">Процессор</p>
			<p class="tariff-item-table__text">{{ tariff?.fields?.processor?.value }}</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">Память</p>
			<p class="tariff-item-table__text">{{ tariff?.fields?.ram?.value }}</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">NVMe</p>
			<p class="tariff-item-table__text">{{ tariff?.fields?.memory_phys?.value }}</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">Канал</p>
			<p class="tariff-item-table__text">{{ tariff?.fields?.channel?.value }}</p>
		</div>
		<div class="tariff-item-table__column">
			<p class="tariff-item-table__title">В месяц</p>
			<p class="tariff-item-table__text tariff-item-table__text--price">
				{{ tariff?.fields?.price?.value }} ₽
			</p>
		</div>
		<BaseButton class="tariff-item-table__button" color="orange" @click="orderClick">
			ЗАКАЗАТЬ
		</BaseButton>
	</div>
</template>

<style scoped lang="scss">
	.tariff-item-table {
		display: flex;
		border-radius: 20px;
		transition: 0.3s ease;
		border: 1px solid #d2e4f3;
		padding: 30px 40px;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px 8px;
		&__button {
			padding: 15px 50px;
			width: auto;
		}
		&__column {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
		&__title {
			opacity: 0.5;
			color: var(--color-text);
			font-size: 14px;
			line-height: 140%;
		}
		&__text {
			color: var(--color-text);
			font-size: 18px;
			font-weight: 600;
			&--price {
				color: var(--color-accent);
			}
		}
		&:hover {
			border: 1px solid #fff;
			background: #fff;
			box-shadow: 0px 15px 60px 0px rgba(41, 52, 98, 0.06);
		}
		@include r(768px) {
			padding: 20px;
			justify-content: flex-start;
			&__button {
				width: 100%;
				padding: 16px;
			}
			&__column {
				width: calc(50% - 4px);
			}
			&__text {
				&--price,
				&--title {
					font-size: 24px;
					color: var(--color-text);
				}
			}
			&__column:nth-child(1),
			&__column:nth-child(7) {
				width: 100%;
				padding-top: 20px;
				border-top: 1px solid #d2e4f3;
			}
			&__column:nth-child(1) {
				padding-top: 0;
				padding-bottom: 20px;
				border-top: 0;
				border-bottom: 1px solid #d2e4f3;
			}
		}
	}
</style>
