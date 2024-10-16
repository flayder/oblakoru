<script setup>
	import { ref } from "vue";
	import BaseButton from "../global/BaseButton.vue";
	import BaseSlider from "../global/BaseSlider.vue";
	import TariffRadio from "./TariffRadio.vue";
	import BaseDropdown from "../global/BaseDropdown.vue";
	import productUtil from "@/utils/product"
	import {periods} from "@/utils/constants"

	const props = defineProps({
		tariff: {
			type: Object,
			default: () => {},
		},
	});
	defineEmits(["update:modelValueSSD"]);

	const valueSSD = ref(props?.tariff?.fields?.ssd?.value);
	const diskType = ref(props?.tariff?.fields?.disc_type?.value[0]);
	const pricelist = ref(props?.tariff?.fields?.pricelist?.value);
	const duration = ref(props?.tariff?.fields?.month?.value ?? '1');
	const defaultValue = ref(props?.tariff?.fields?.memory?.value?.memory_default);

	const orderClick = () => {
		productUtil.generateBaseLink(pricelist.value, defaultValue.value, duration.value)
	}
</script>

<template>
	<div class="tariff-item">
		<div class="tariff-item__column">
			<div class="tariff-item__header">
				<p class="tariff-item__title">{{ tariff.post_title }}</p>
				<p class="tariff-item__price">{{ tariff.fields?.price?.value }} ₽</p>
			</div>
			<div class="tariff-item__info">
				<template v-bind:key="index" v-for="(field, index) in tariff.fields">
					<div class="tariff-item__info-row" v-if="field?.value && typeof field.value == 'string' && index != 'price'">
						<p class="tariff-item__info-title">{{ field.label }}</p>
						<hr class="tariff-item__info-line" />
						<p class="tariff-item__info-value">{{ field.value }}</p>
					</div>
				</template>
			</div>
			<div class="tariff-item__group" v-if="tariff.post_content">
				<p class="tariff-item__group-title">Нагрузка:</p>
				<p class="tariff-item__group-text" v-html="tariff.post_content"></p>
			</div>
			<div class="tariff-item__group" v-if="tariff?.fields?.disc_type?.value?.length > 1">
				<p class="tariff-item__group-title">Тип диска:</p>
				<TariffRadio
					:options="tariff?.fields?.disc_type?.value"
					:model-value="diskType"
					@update:model-value="(value) => (diskType = value)"
				/>
			</div>
			<div class="tariff-item__group" v-if="tariff?.fields?.memory?.value?.memory_default && tariff?.fields?.memory?.value?.memory_min && tariff?.fields?.memory?.value?.memory_max">
				<p class="tariff-item__group-title">{{ diskType }}</p>
				<BaseSlider
					v-model="defaultValue"
					:max="tariff.fields.memory.value.memory_max"
					:min="tariff.fields.memory.value.memory_min"
				/>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Срок заказа:</p>
				<BaseDropdown
					:options="periods"
					:value="duration"
					@update:value="(value) => (duration = value)"
				/>
			</div>
		</div>
		<BaseButton class="tariff-item__button" color="orange" @click="orderClick">ЗАКАЗАТЬ</BaseButton>
	</div>
</template>

<style scoped lang="scss">
	.tariff-item {
		border-radius: 20px;
		border: 1px solid #d2e4f3;
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding: 16px;
		transition: 0.3s ease;
		position: relative;
		&__column {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
		&__group {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		&__group-title {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 600;
		}
		&__group-text {
			opacity: 0.5;
			font-size: 16px;
			line-height: 140%; /* 22.4px */
		}
		&__info {
			display: flex;
			flex-direction: column;
			gap: 16px;
		}
		&__info-row {
			display: flex;
			align-items: flex-end;
			gap: 4px;
		}
		&__info-title {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
			opacity: 0.5;
		}
		&__info-value {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 600;
		}
		&__info-line {
			flex: 1 1 0;
			height: 1px;
			background: var(--color-text);
			opacity: 0.2;
			margin-bottom: 5px;
		}
		&__header {
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 16px;
			border-radius: 10px;
			background: #f2f8fd;
			align-items: center;
			justify-content: center;
		}
		&__title {
			padding: 6px 14px;
			background-color: var(--color-text);
			font-size: 16px;
			color: white;
			font-weight: 120%;
			text-transform: uppercase;
			border-radius: 90px;
		}
		&__price {
			color: var(--color-accent);
			text-align: center;
			font-size: 24px;
			font-weight: 600;
		}
		&:hover {
			background: #fff;
			border-color: #fff;
			box-shadow: 0px 30px 50px 0px rgba(41, 52, 98, 0.08);
			z-index: 1;
		}
		@include r(768px) {
			&__group-title {
				font-size: 14px;
			}
			&__group-text {
				font-size: 14px;
			}
		}
	}
</style>
