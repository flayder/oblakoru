<script setup>
	import { Swiper, SwiperSlide } from "swiper/vue";
	import { Navigation } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/grid";
	// import { useWindowWidth } from "@/composable/useWindowWidth";
	import BaseButton from "../global/BaseButton.vue";
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	const item = ref({})
	onMounted(async () => {
		item.value = await api.getBlock(98)
	})

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
	<section class="partners" v-if="item && item?.fields?.length > 0">
		<GlobalContainer class="partners__container">
			<GlobalBlockTitle class="partners__title">
				{{ item.post_title }}
			</GlobalBlockTitle>
			<Swiper
				ref="swiper"
				:loop="true"
				:slides-per-view="'auto'"
				:space-between="16"
				:modules="swiperModules"
				class="partners__slider"
				@swiper="onSwiper"
				@resize="onSwiperResize"
			>
				<template v-for="(item, index) in item.fields">	
					<SwiperSlide
						v-if="item?.file?.url"
						:key="index"
						class="partners__item"
					>
						<img
							:src="item.file.url"
						/>
					</SwiperSlide>
				</template>
			</Swiper>
			<div
				v-if="swiperInstance?.allowSlideNext && swiperInstance?.allowSlidePrev"
				class="partners__buttons"
			>
				<BaseButton
					class="partners__button partners__button--prev"
					variant="outline"
					color="accent"
					@click="prevSlide()"
				>
					<IconChevron />
				</BaseButton>
				<BaseButton
					class="partners__button partners__button--next"
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
	.partners {
		margin-top: 100px;
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
		&__item {
			height: 120px;
			display: flex;
			align-items: center;
			justify-content: center;
			max-width: 288px;
			width: 100%;
			border-radius: 10px;
			background: #fff;
			box-shadow: 0px 15px 60px 0px rgba(41, 52, 98, 0.06);
			padding: 0px 16px;
			img {
				width: auto;
				height: auto;
				max-width: 100%;
			}
		}
		&__slider {
			margin-top: 30px;
		}
		&__grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
			gap: 35px 15px;
			margin-top: 30px;
		}
		@include r(768px) {
			margin-top: 60px;
			&__slider {
				margin-top: 20px;
				margin-left: -16px;
				margin-right: -16px;
				width: calc(100% + 32px);
				padding-left: 16px;
			}
			&__item {
				height: 90px;
				max-width: 244px;
			}
		}
	}
</style>
