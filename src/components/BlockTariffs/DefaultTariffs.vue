<script setup>
	import BaseButton from "../global/BaseButton.vue";
	import TariffsViewGrid from "./TariffsViewGrid.vue";
	import { useWindowWidth } from "@/composable/useWindowWidth";
	import BaseDropdown from "../global/BaseDropdown.vue";
	import TariffsViewTable from "./TariffsViewTable.vue";
	import TariffsViewConfigurator from "./TariffsViewConfigurator.vue";
	import api from "@/api/product"
	import { onMounted, ref } from "vue"
	const vps = ref([])
	const phys = ref([])
	onMounted(async () => {
		vps.value = await api.getMainProducts({
			slug: 'vps-and-vds-servers'
		})

		phys.value = await api.getMainProducts({
			slug: 'physical-servers'
		})
	})

	const props = defineProps({
		title: {
			type: String,
			default: "Акционные тарифы",
		},
		tabs: {
			type: Array,
			default: () => [],
		},
		selectedView: {
			type: String,
			default: "VPS И VDS СЕРВЕРЫ",
		},
	});

	const selectedView = ref(props.selectedView);
	const { windowWidth } = useWindowWidth();
</script>

<template>
	<GlobalBlock class="tariffs">
		<div class="tariffs__wrapper">
			<GlobalContainer class="tariffs__container">
				<GlobalBlockTitle class="tariffs__title">
					{{ title }}
				</GlobalBlockTitle>
				<template v-if="tabs.length > 0">
					<div v-if="windowWidth > 768" class="tariffs__tabs">
						<template v-for="(item, index) in tabs" :key="index">
							<BaseButton
								:class="`tariffs__tab ${
									selectedView === item ? 'tariffs__tab--active' : ''
								}`"
								type="button"
								variant="outline"
								@click="selectedView = item"
							>
								{{ item }}
							</BaseButton>
						</template>
					</div>
					<BaseDropdown
						v-else
						class="tariffs__tabs"
						:options="tabs"
						:value="selectedView"
						@update:value="(value) => (selectedView = value)"
					/>
				</template>
				<TariffsViewGrid
					v-if="selectedView === 'VPS И VDS СЕРВЕРЫ' && vps?.length > 0"
					class="tariffs__grid"
					:tariffs="vps"
				/>
				<TariffsViewTable
					v-if="selectedView === 'ФИЗИЧЕСКИЕ СЕРВЕРА' && phys?.length > 0"
					:tariffs="phys"
					class="tariffs__table"
				/>
				<TariffsViewConfigurator
					v-if="selectedView === 'КОНФИГУРАТОР'"
					class="tariffs__configurator"
				/>
				<!-- <TariffsViewSSL v-if="selectedView === 'SSL-СЕРТИФИКАТЫ'" class="tariffs__ssl" /> -->
			</GlobalContainer>
		</div>
	</GlobalBlock>
</template>

<style scoped lang="scss">
	.tariffs {
		margin-top: 100px;
		&__tabs {
			display: flex;
			gap: 10px;
			margin-top: 30px;
			z-index: 2;
		}
		&__tab {
			width: auto;
			padding: 14px 20px;
			&--active {
				background: var(--color-accent);
				color: #fff;
			}
		}
		&__table,
		&__configurator,
		&__grid {
			margin-top: 30px;
		}
		&__wrapper {
			border-radius: 20px;
			background: white;
			padding-top: 60px;
			padding-bottom: 60px;
		}
		@include r(768px) {
			padding: 0 !important;
			margin-top: 40px;
			&__wrapper {
				border-radius: 0;
				padding: 40px 0;
			}
			&__tabs {
				:deep(.dropdown__title) {
					background: var(--color-accent);
					color: #fff;
				}
			}
		}
	}
</style>
