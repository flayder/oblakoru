<script setup>
	import InnerPageHero from "@/components/BlockHero/InnerPageHero.vue";
	import DefaultTariffs from "@/components/BlockTariffs/DefaultTariffs.vue";
	import InnerPageLayout from "@/layouts/InnerPageLayout.vue";
</script>

<template>
	<InnerPageLayout>
		<InnerPageHero
			title="ГОТОВЫЕ ФИЗИЧЕСКИЕ СЕРВЕРЫ"
			text="Вот вам яркий пример современных тенденций — разбавленное изрядной долей эмпатии, рациональное мышление требует анализа укрепления моральных ценностей. Равным образом. Новая модель организационной деятельности требует анализа благоприятных перспектив. "
			button="ВЫБРАТЬ СЕРВЕР"
			breadcrumbs="Главная / Готовые физические серверы"
			image="../assets/img/home-hero-decor-06.png"
			decor-style="width: clamp(260px, 37%, 495px);"
		/>
		<DefaultTariffs
			title="ФИЗИЧЕСКИЕ СЕРВЕРЫ"
			selected-view="ФИЗИЧЕСКИЕ СЕРВЕРА"
		/>
	</InnerPageLayout>
</template>

<style scoped lang="scss"></style>
