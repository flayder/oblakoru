<script setup>
	import { ref } from "vue";
	import BaseInput from "../global/BaseInput.vue";
	import BaseCheckbox from "../global/BaseCheckbox.vue";
	import BaseButton from "../global/BaseButton.vue";
	import api from "@/api/form"

	const form = ref({
		name: "",
		email: "",
		phone: "",
		message: "",
		agree: false,
		agree2: false,
	});

	const sent = ref(false)

	const formSubmit = async () => {
		//console.log('form.value', form.value)
		if(form.value.agree && form.value.agree2) {
			const data = new FormData()
			for(let key in form.value) {
				data.append(key, form.value[key])
			}

			data.append('page', 'Главная страница')

			const response = await api.sendForm(data)

			sent.value = true

			for(let key in form.value) {
				if(key == 'agree' || key == 'agree2') {
					form.value[key] = false
				} else {
					form.value[key] = ''
				}
			}

			setTimeout(() => {
				sent.value = false
			}, 3000);
		}
	}
</script>

<template>
	<div style="width: 100%;">
		<form @submit.prevent="formSubmit" class="feedback-form" v-if="!sent">
			<div class="feedback-form__inputs">
				<BaseInput
					v-model="form.name"
					placeholder="Ваше ФИО"
					class="feedback-form__input"
					:required="true"
				/>
				<BaseInput
					v-model="form.email"
					placeholder="Ваш email"
					class="feedback-form__input"
					:required="true"
				/>
				<BaseInput
					v-model="form.phone"
					placeholder="Ваш телефон"
					type="tel"
					class="feedback-form__input"
				/>
				<BaseInput
					v-model="form.message"
					placeholder="Ваш запрос"
					class="feedback-form__textarea"
					:is-textarea="true"
				/>
			</div>
			<div class="feedback-form__checkboxes">
				<BaseCheckbox v-model="form.agree" :required="true">
					Я ознакомлен(а) с
					<a href="">политикой конфиденциальности</a>
				</BaseCheckbox>
				<BaseCheckbox v-model="form.agree2" :required="true">
					Я даю <a href="">согласие</a> на обработку персональных данных
				</BaseCheckbox>
			</div>
			<BaseButton type="submit" class="feedback-form__button" color="orange">
				ОТПРАВИТЬ ЗАЯВКУ
			</BaseButton>
		</form>
		<GlobalBlockTitle class="feedback__title" v-else>
			Заявка <br/>
			<span>успешно отправлена</span>
		</GlobalBlockTitle>
	</div>
</template>

<style scoped lang="scss">
	.feedback-form {
		display: flex;
		flex-direction: column;
		gap: 30px;
		&__inputs {
			display: flex;
			gap: 15px;
			flex-wrap: wrap;
		}
		&__button {
			max-width: 290px;
		}
		&__checkboxes {
			display: flex;
			flex-direction: column;
			gap: 15px;
		}
		&__input {
			flex: 1 1 0;
			min-width: 300px;
		}
		&__textarea {
			width: 100%;
			min-width: 100%;
			height: 180px;
		}
		@include r(768px) {
			gap: 20px;
			&__button {
				max-width: 100%;
			}
		}
	}
</style>
