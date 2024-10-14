<script setup>
	import InnerPageHero from "@/components/BlockHero/InnerPageHero.vue";
	import DefaultTariffs from "@/components/BlockTariffs/DefaultTariffs.vue";
	import InnerPageLayout from "@/layouts/InnerPageLayout.vue";
</script>

<template>
	<InnerPageLayout>
		<InnerPageHero
			title="КОНФИГУРАЦИЯ <br/> ФИЗИЧЕСКИХ СЕРВЕРОВ"
			text="Разбавленное изрядной долей эмпатии, рациональное мышление требует анализа укрепления моральных ценностей. Равным образом. Новая модель организационной деятельности требует анализа благоприятных перспектив."
			button="ВЫБРАТЬ СЕРВЕР"
			breadcrumbs="Главная / Конфигуратор физических серверов"
			image="../assets/img/home-hero-decor-07.png"
			decor-style="width: clamp(260px, 40%, 539px);"
		/>
		<DefaultTariffs title="Конфигуратор" selected-view="КОНФИГУРАТОР" />
	</InnerPageLayout>
</template>

<style scoped lang="scss"></style>
