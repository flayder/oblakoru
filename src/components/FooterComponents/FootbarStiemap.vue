<script setup>
	import { navigation } from "@/data/navigation";
	import FootbarStiemapItem from "./FootbarStiemapItem.vue";
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	const store = useStore()
	const top_menu1 = computed(() => store.state.blocks.top_menu1)
	const top_menu2 = computed(() => store.state.blocks.top_menu2)
</script>

<template>
	<div class="footbar-sitemap">
		<div class="footbar-sitemap__column footbar-sitemap__column--mobile">
			<div class="footbar-sitemap__column">
				<FootbarStiemapItem
					v-if="top_menu2?.length > 0"
					:title="top_menu2[0].post_title"
					:list="top_menu2[0].children"
				/>
				<FootbarStiemapItem
					v-if="top_menu2?.length >= 1"
					:title="top_menu2[1].post_title"
					:list="top_menu2[1].children"
				/>
			</div>
			<div class="footbar-sitemap__column">
				<FootbarStiemapItem
					v-if="top_menu1?.length > 0"
					:title="top_menu1[0].post_title"
					:list="top_menu1[0].children"
				/>
				<FootbarStiemapItem
					v-if="top_menu1?.length >= 2"
					:title="top_menu1[2].post_title"
					:list="top_menu1[2].children"
				/>
			</div>
		</div>
		<div class="footbar-sitemap__column footbar-sitemap__column--mobile">
			<div class="footbar-sitemap__column">
				<FootbarStiemapItem
					v-if="top_menu2?.length >= 2"
					:title="top_menu2[2].post_title"
					:list="top_menu2[2].children"
				/>
			</div>
			<div class="footbar-sitemap__column">
				<FootbarStiemapItem
					v-if="top_menu1?.length >= 1"
					:title="top_menu1[1].post_title"
					:list="top_menu1[1].children"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.footbar-sitemap {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 30px 36px;
		&__column {
			display: flex;
			flex-direction: column;
			gap: 36px;
			flex: 1 1 0;
			&:nth-child(1) {
				order: 1;
				max-width: 219px;
			}
			&:nth-child(2) {
				order: 3;
				max-width: 176px;
			}
			&:nth-child(3) {
				order: 2;
				max-width: 146px;
			}
			&:nth-child(4) {
				order: 4;
				max-width: 184px;
			}
			&--mobile {
				display: contents;
			}
		}
		@include r(768px) {
			gap: 30px 8px;
			border-top: 1px solid rgba(255, 255, 255, 0.2);
			padding-top: 30px;
			&__column {
				width: 100%;
				max-width: 100%;
				&:nth-child(3) {
					order: 3;
				}
				&--mobile {
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>
