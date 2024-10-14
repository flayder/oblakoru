<script setup>
	import IconChevron from "@/assets/icons/IconChevron.vue";
	import BaseButton from "../global/BaseButton.vue";
	import ReviewItem from "./ReviewItem.vue";
	import { SwiperSlide, Swiper } from "swiper/vue";
	import api from "@/api/review"
	import { onMounted, ref } from "vue"
	const items = ref([])
	onMounted(async () => {
		items.value = await api.getMainReviews()
	})

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
	<GlobalBlock class="reviews" v-if="items?.length > 0">
		<div class="reviews__wrapper">
			<GlobalContainer class="reviews__container">
				<GlobalBlockTitle class="reviews__title">
					Что о нас говорят
				</GlobalBlockTitle>
				<GlobalBlockSubtitle class="reviews__subtitle">
					Реальные истории успеха и впечатления от наших услуг
				</GlobalBlockSubtitle>
				<div class="reviews__content">
					<Swiper
						ref="swiper"
						:slides-per-view="1"
						:space-between="30"
						:loop="true"
						class="reviews__slider"
						@swiper="onSwiper"
						@resize="onSwiperResize"
					>
						<template v-for="(item, index) in items" :key="index">
							<SwiperSlide>
								<ReviewItem
									:name="item.post_title"
									:rate="parseInt(item?.fields?.rate?.value) > 0 ? parseInt(item.fields.rate.value) : 1"
									:task="item?.fields?.task?.value"
									:text="item.post_excerpt"
									:file="item?.fields?.file?.value ? item?.fields?.file?.value?.url : ''"
								/>
							</SwiperSlide>
						</template>
					</Swiper>
					<div class="reviews__row">
						<p class="reviews__row-text">
							{{
								swiperInstance?.realIndex + 1 < 10
									? `0${swiperInstance?.realIndex + 1}`
									: swiperInstance?.realIndex + 1
							}}/{{
								items?.length < 10
									? `0${items?.length}`
									: items?.length
							}}
						</p>
						<div class="reviews__buttons">
							<BaseButton
								class="reviews__button reviews__button--prev"
								variant="outline"
								color="accent"
								@click="prevSlide()"
							>
								<IconChevron />
							</BaseButton>
							<BaseButton
								class="reviews__button reviews__button--next"
								variant="outline"
								color="accent"
								@click="nextSlide()"
							>
								<IconChevron />
							</BaseButton>
						</div>
					</div>
				</div>
			</GlobalContainer>
		</div>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.reviews {
		margin-top: 100px;
		&__wrapper {
			border-radius: 20px;
			background: white;
			padding-top: 60px;
			padding-bottom: 60px;
		}
		&__row {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__row-text {
			color: var(--color-text);
			font-size: 16px;
			font-weight: 400;
			opacity: 0.5;
		}
		&__slider {
			width: 100%;
		}
		&__subtitle {
			margin-top: 15px;
		}
		&__content {
			margin-top: 30px;
			display: flex;
			flex-direction: column;
			gap: 40px;
			padding: 40px;
			border-radius: 20px;
			background: #f2f8fd;
		}
		&__buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 15px;
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
		@include r(768px) {
			padding: 0 !important;
			margin-top: 40px;
			&__wrapper {
				border-radius: 0;
				padding: 40px 0;
			}
			&__content {
				gap: 30px;
				padding: 20px;
				margin-top: 20px;
			}
		}
	}
</style>
