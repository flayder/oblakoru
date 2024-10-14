<script setup>
	import FeedbackForm from "./FeedbackForm.vue";
</script>

<template>
	<GlobalBlock class="feedback">
		<div class="feedback__wrapper">
			<GlobalContainer class="feedback__container">
				<GlobalBlockTitle class="feedback__title">
					если у вас остались вопросы, <span>свяжитесь с нами</span>
				</GlobalBlockTitle>
				<GlobalBlockSubtitle class="feedback__subtitle">
					Поможем выбрать тариф, подробнее расскажем про услуги и ответим на все
					ваши вопросы
				</GlobalBlockSubtitle>
				<FeedbackForm class="feedback__form" />
			</GlobalContainer>
		</div>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.feedback {
		margin-top: 100px;
		&__wrapper {
			border-radius: 20px;
			background: white;
			padding-top: 60px;
			padding-bottom: 60px;
		}
		&__title {
			max-width: 841px;
		}
		&__subtitle {
			margin-top: 15px;
			max-width: 642px;
		}
		&__form {
			margin-top: 30px;
		}
		@include r(768px) {
			padding: 0 !important;
			margin-top: 40px;
			&__wrapper {
				border-radius: 0;
				padding: 40px 0;
			}
			&__form {
				margin-top: 20px;
			}
		}
	}
</style>
