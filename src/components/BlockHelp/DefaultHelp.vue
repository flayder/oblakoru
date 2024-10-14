<script setup>
	import HelpItem from "./HelpItem.vue";
	import api from "@/api/block"
	import { onMounted, ref } from "vue"
	const item = ref({})
	onMounted(async () => {
		item.value = await api.getBlock(88)
	})
</script>

<template>
	<section class="help" v-if="item">
		<GlobalContainer class="help__container">
			<GlobalBlockTitle class="help__title">
				Доброжелательная поддержка 24/7
			</GlobalBlockTitle>
			<GlobalBlockSubtitle class="help__subtitle">
				Отвечаем за несколько минут и решаем огромный спектр задач:
			</GlobalBlockSubtitle>
			<div class="help__grid">
				<template v-for="(item, index) in item?.fields" :key="index">
					<HelpItem :title="item?.title" :text="item?.subtext" :number="index + 1" />
				</template>
				<img
					src="@/assets/img/home-help-decor-01.png"
					alt=""
					class="help__decor"
				/>
			</div>
		</GlobalContainer>
	</section>
</template>

<style scoped lang="scss">
	.help {
		position: relative;
		z-index: 1;
		&__subtitle {
			margin-top: 15px;
		}
		&__grid {
			grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
			gap: 15px;
			display: grid;
			margin-top: 30px;
			position: relative;
		}
		&__decor {
			position: absolute;
			right: -39px;
			bottom: max(-19vw, -228px);
			width: calc(30% + 39px);
		}
		@include r(1081px) {
			&__decor {
				bottom: max(-20vw, -228px);
				width: min(calc(50% + 31px), 460px);
			}
		}
		@include r(768px) {
			&__decor {
				display: none;
			}
			&__grid {
				display: flex;
				margin-top: 20px;
				flex-direction: column;
				gap: 10px;
			}
		}
	}
</style>
