<script setup>
	import BenefitItem from "./BenefitItem.vue";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/grid";
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import BaseButton from "../global/BaseButton.vue";
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import { ref } from "vue";
	import IconGearUser from "@/assets/icons/IconGearUser.vue";
	import IconGearWrench from "@/assets/icons/IconGearWrench.vue";
	import IconExit from "@/assets/icons/IconExit.vue";
	import IconTodo from "@/assets/icons/IconTodo.vue";

	const swiperModules = [Navigation];
	const ServiceBlocks = {
		ssl: {
			title: "1 выделенный IP-адрес",
			icon: IconGearUser,
		},
		administration: {
			title: "Установка OC на ваш <br/> выбор",
			icon: IconGearWrench,
		},
		backup: {
			title: "Полный доступ по SSH",
			icon: IconExit,
		},
		isp: {
			title: "Тестовый период <br/> по согласованию",
			icon: IconTodo,
		},
	};

	const { windowWidth } = useWindowWidth();
	const swiper = ref(null);
	const swiperInstance = ref(null);
	const onSwiper = (swiper) => {
		swiperInstance.value = swiper;
	};
	const nextSlide = () => {
		swiperInstance.value.slideNext();
	};
	const prevSlide = () => {
		swiperInstance.value.slidePrev();
	};
</script>

<template>
	<section class="benefits">
		<GlobalContainer class="benefits__container">
			<GlobalBlockTitle class="benefits__title">
				В готовые тарифы включено:
			</GlobalBlockTitle>
			<div v-if="windowWidth > 768" class="benefits__grid">
				<template
					v-for="(item, index) in Object.values(ServiceBlocks)"
					:key="index"
				>
					<BenefitItem :title="item.title" :icon="item.icon" />
				</template>
			</div>
			<Swiper
				v-else
				ref="swiper"
				:loop="true"
				:slides-per-view="1"
				:space-between="15"
				:modules="swiperModules"
				class="benefits__slider"
				@swiper="onSwiper"
			>
				<SwiperSlide
					v-for="(item, index) in Object.values(ServiceBlocks)"
					:key="index"
					class="benefits__item"
				>
					<BenefitItem :title="item.title" :icon="item.icon" />
				</SwiperSlide>
			</Swiper>
			<div class="benefits__buttons">
				<BaseButton
					class="benefits__button benefits__button--prev"
					variant="outline"
					color="accent"
					@click="prevSlide()"
				>
					<IconChevron />
				</BaseButton>
				<BaseButton
					class="benefits__button benefits__button--next"
					variant="outline"
					color="accent"
					@click="nextSlide()"
				>
					<IconChevron />
				</BaseButton>
			</div>
		</GlobalContainer>
	</section>
</template>

<style scoped lang="scss">
	.benefits {
		padding-top: 100px;
		margin-top: 0;
		&__buttons {
			display: none;
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
		&__item {
			height: auto;
		}
		&__slider {
			margin-top: 20px;
		}
		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
			gap: 16px;
			margin-top: 30px;
		}
		@include r(768px) {
			padding-top: 60px;
			&__buttons {
				display: flex;
			}
		}
	}
</style>
