<script setup>
	import InnerPageHero from "@/components/BlockHero/InnerPageHero.vue";
	import DefaultTariffs from "@/components/BlockTariffs/DefaultTariffs.vue";
	import InnerPageLayout from "@/layouts/InnerPageLayout.vue";
</script>

<template>
	<InnerPageLayout>
		<InnerPageHero
			title="ГОТОВЫЕ СЕРВЕРЫ WINDOWS"
			text="Вот вам яркий пример современных тенденций — разбавленное изрядной долей эмпатии, рациональное мышление требует анализа укрепления моральных ценностей. Равным образом. Новая модель организационной деятельности требует анализа благоприятных перспектив. "
			button="ВЫБРАТЬ СЕРВЕР"
			breadcrumbs="Главная / VPS и VDS серверы windows"
			image="../assets/img/home-hero-decor-04.png"
			decor-style="width: clamp(260px, 40%, 564px);"
		/>
		<DefaultTariffs
			title="Vps и VDS СЕРВЕРЫ WINDOWS"
			selected-view="VPS И VDS СЕРВЕРЫ"
		/>
	</InnerPageLayout>
</template>

<style scoped lang="scss"></style>
