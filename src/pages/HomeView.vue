<script setup>
	import DefaultBlog from "@/components/BlockBlog/DefaultBlog.vue";
	import CTACloud from "@/components/BlockCTA/CTACloud.vue";
	import DefaultCTA from "@/components/BlockCTA/DefaultCTA.vue";
	import DefaultFAQ from "@/components/BlockFAQ/DefaultFAQ.vue";
	import DefaultFeedback from "@/components/BlockFeedback/DefaultFeedback.vue";
	import DefaultHelp from "@/components/BlockHelp/DefaultHelp.vue";
	import DefaultHero from "@/components/BlockHero/DefaultHero.vue";
	import DefaultInfo from "@/components/BlockInfo/DefaultInfo.vue";
	import DefaultPartners from "@/components/BlockPartners/DefaultPartners.vue";
	import DefaultReviews from "@/components/BlockReviews/DefaultReviews.vue";
	import DefaultServices from "@/components/BlockServices/DefaultServices.vue";
	import DefaultTariffs from "@/components/BlockTariffs/DefaultTariffs.vue";
</script>

<template>
	<DefaultHero />
	<DefaultInfo />
	<DefaultCTA />
	<DefaultTariffs
		:tabs="['VPS И VDS СЕРВЕРЫ', 'ФИЗИЧЕСКИЕ СЕРВЕРА', 'КОНФИГУРАТОР']"
	/>
	<CTACloud />
	<DefaultServices />
	<DefaultHelp />
	<DefaultReviews />
	<DefaultFAQ />
	<DefaultPartners />
	<DefaultBlog />
	<DefaultFeedback />
</template>

<style scoped lang="scss"></style>
