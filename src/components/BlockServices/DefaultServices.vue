<script setup>
	import IconServiceCloud from "@/assets/icons/IconServiceCloud.vue";
	import IconServiceFinger from "@/assets/icons/IconServiceFinger.vue";
	import IconServiceGear from "@/assets/icons/IconServiceGear.vue";
	import IconServiceKey from "@/assets/icons/IconServiceKey.vue";
	import IconServiceSertificate from "@/assets/icons/IconServiceSertificate.vue";
	import IconServiceShield from "@/assets/icons/IconServiceShield.vue";
	import ServiceItem from "./ServiceItem.vue";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/grid";
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import BaseButton from "../global/BaseButton.vue";
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import api from "@/api/service"
	import { onMounted, ref } from "vue"
	const items = ref([])
	onMounted(async () => {
		items.value = await api.getServices()
	})

	const swiperModules = [Navigation];

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
	<section class="services">
		<GlobalContainer class="services__container">
			<GlobalBlockTitle class="services__title">
				<span>Все необходимые решения</span> для защиты и оптимизации вашего
				веб-пространства
			</GlobalBlockTitle>
			<div v-if="windowWidth > 768" class="services__grid">
				<template
					v-for="(item, index) in items"
					:key="index"
				>
					<ServiceItem
						:title="item.post_title"
						:icon="item.fields?.icon?.value?.url"
						:href="item.fields?.link?.value"
						:text="item.post_excerpt"
					/>
				</template>
			</div>
			<Swiper
				v-else
				ref="swiper"
				:loop="true"
				:slides-per-view="1"
				:space-between="15"
				:modules="swiperModules"
				class="services__slider"
				@swiper="onSwiper"
			>
				<SwiperSlide
					v-for="(item, index) in items"
					:key="index"
					class="services__item"
				>
					<ServiceItem
						:title="item.post_title"
						:icon="item.fields?.icon?.value?.url"
						:href="item.fields?.link?.value"
						:text="item.post_excerpt"
					/>
				</SwiperSlide>
			</Swiper>
			<div class="services__buttons">
				<BaseButton
					class="services__button services__button--prev"
					variant="outline"
					color="accent"
					@click="prevSlide()"
				>
					<IconChevron />
				</BaseButton>
				<BaseButton
					class="services__button services__button--next"
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
	.services {
		padding-top: 100px;
		padding-bottom: 80px;
		background: url("@/assets/img/home-services-bg-desktop.jpg") no-repeat;
		background-size: cover;
		background-position: center center;
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
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 35px 15px;
			margin-top: 30px;
		}
		@include r(768px) {
			background: url("@/assets/img/home-services-bg-mobile.jpg") no-repeat;
			background-size: cover;
			background-position: center center;
			padding-top: 60px;
			padding-bottom: 60px;
			&__buttons {
				display: flex;
			}
		}
	}
</style>
