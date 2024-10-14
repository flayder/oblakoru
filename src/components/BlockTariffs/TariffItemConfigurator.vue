<script setup>
	import BaseButton from "../global/BaseButton.vue";
</script>

<template>
	<div class="tariff-item">
		<div class="tariff-item__column">
			<div class="tariff-item__header">
				<p class="tariff-item__title">FLEX_VPS</p>
				<p class="tariff-item__price">24 540 ₽</p>
			</div>
			<div class="tariff-item__info">
				<div class="tariff-item__info-row">
					<p class="tariff-item__info-title">CPU</p>
					<hr class="tariff-item__info-line" />
					<p class="tariff-item__info-value">1 ядро</p>
				</div>
				<div class="tariff-item__info-row">
					<p class="tariff-item__info-title">RAM</p>
					<hr class="tariff-item__info-line" />
					<p class="tariff-item__info-value">1 ГБ</p>
				</div>
				<div class="tariff-item__info-row">
					<p class="tariff-item__info-title">SSD</p>
					<hr class="tariff-item__info-line" />
					<p class="tariff-item__info-value">620 ГБ</p>
				</div>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Нагрузка:</p>
				<p class="tariff-item__group-text">Операционная система:</p>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Предустановленное ПО:</p>
				<p class="tariff-item__group-text">Не выбрано</p>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Скорость порта:</p>
				<p class="tariff-item__group-text">До 100 Мбит/с - безлимит</p>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Лимит IP-адресов:</p>
				<p class="tariff-item__group-text">256 адресов</p>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Информационная безопасность:</p>
				<p class="tariff-item__group-text">Защита от DDoS</p>
			</div>
			<div class="tariff-item__group">
				<p class="tariff-item__group-title">Срок заказа:</p>
				<p class="tariff-item__group-text">1 месяц</p>
			</div>
		</div>
		<BaseButton class="tariff-item__button" color="orange">ЗАКАЗАТЬ</BaseButton>
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
