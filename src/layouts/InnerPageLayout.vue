<script setup>
	import DefaultBenefits from "@/components/BlockBenefits/DefaultBenefits.vue";
	import DefaultFAQ from "@/components/BlockFAQ/DefaultFAQ.vue";
	import DefaultFeedback from "@/components/BlockFeedback/DefaultFeedback.vue";
	import DefaultInfo from "@/components/BlockInfo/DefaultInfo.vue";
	import DefaultPartners from "@/components/BlockPartners/DefaultPartners.vue";
	import DefaultTariffs from "@/components/BlockTariffs/DefaultTariffs.vue";
</script>

<template>
	<slot />
	<DefaultBenefits />
	<DefaultTariffs
		title="Спецпредложения"
		:tabs="['VPS И VDS СЕРВЕРЫ', 'ФИЗИЧЕСКИЕ СЕРВЕРА', 'КОНФИГУРАТОР']"
	/>
	<DefaultInfo />
	<DefaultFAQ />
	<DefaultPartners />
	<DefaultFeedback />
</template>

<style scoped lang="scss"></style>
