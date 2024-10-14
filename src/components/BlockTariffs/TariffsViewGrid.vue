<script setup>
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import BaseButton from "../global/BaseButton.vue";
	import TariffItem from "./TariffItem.vue";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import IconChevron from "@/assets/icons/IconChevron.vue";

	defineProps({
		tariffs: {
			type: Array,
			default: () => [],
		},
	});

	const { windowWidth } = useWindowWidth();

	import { ref } from "vue";
	import { Navigation } from "swiper/modules";

	const swiperModules = [Navigation];

	const swiper = ref(null);
	const swiperInstance = ref(null);
	const onSwiper = (swiper) => {
		swiperInstance.value = swiper;
	};
	const onSwiperResize = () => {
		if (swiperInstance.value) {
			swiperInstance.value.update();
		}
	};
	const nextSlide = () => {
		swiperInstance.value.slideNext();
	};
	const prevSlide = () => {
		swiperInstance.value.slidePrev();
	};
</script>

<template>
	<div>
		<div v-if="windowWidth > 768" class="tariffs-view-grid">
			<TariffItem v-for="tariff in tariffs" :key="tariff.id" :tariff="tariff" />
		</div>
		<Swiper
			v-else
			ref="swiper"
			:loop="true"
			:slides-per-view="'auto'"
			:space-between="16"
			:modules="swiperModules"
			class="tariffs-view-grid-swiper"
			touch-start-prevent-default="false"
			no-swiping="true"
			no-swiping-class="no-swiping"
			@swiper="onSwiper"
			@resize="onSwiperResize"
		>
			<SwiperSlide
				v-for="(tariff, index) in tariffs"
				:key="index"
				class="tariffs-view-grid-swiper__item"
			>
				<TariffItem :tariff="tariff" />
			</SwiperSlide>
		</Swiper>
		<template v-if="windowWidth > 768"></template>
		<!-- <BaseButton v-if="windowWidth > 768" class="tariffs-view-grid__button">
			СМОТРЕТЬ ЕЩЕ
		</BaseButton> -->
		<div v-else class="tariffs-view-grid-swiper__buttons">
			<BaseButton
				class="tariffs-view-grid-swiper__button tariffs-view-grid-swiper__button--prev"
				variant="outline"
				color="accent"
				@click="prevSlide()"
			>
				<IconChevron />
			</BaseButton>
			<BaseButton
				class="tariffs-view-grid-swiper__button tariffs-view-grid-swiper__button--next"
				variant="outline"
				color="accent"
				@click="nextSlide()"
			>
				<IconChevron />
			</BaseButton>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.tariffs-view-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 15px;
		&__button {
			margin: 60px auto 0;
			max-width: 390px;
		}
		@include r(768px) {
			&__button {
				display: none;
			}
		}
	}
	.tariffs-view-grid-swiper {
		overflow: visible;
		&__buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 30px;
			margin-top: 30px;
		}
		&__button {
			padding: 6px;
			width: auto;
			border-radius: 5px;
			&--next {
				transform: rotate(-90deg);
			}
			&--prev {
				transform: rotate(90deg);
			}
		}
		&__slider {
			margin-top: 30px;
		}
		@include r(768px) {
			&__slider {
				margin-top: 20px;
				margin-left: -16px;
				margin-right: -16px;
				width: calc(100% + 32px);
				padding-left: 16px;
			}
		}
	}
</style>
