<script setup>
	import { ref, watch } from "vue";
	import ConfiguratorSlider from "./ConfiguratorSlider.vue";
	import TariffItemConfigurator from "./TariffItemConfigurator.vue";
	import TariffRadio from "./TariffRadio.vue";
	import ConfiguratorGroup from "./ConfiguratorGroup.vue";
	import ConfiguratorDropdown from "./ConfiguratorDropdown.vue";
	import {periods} from "@/utils/constants"

	const valueProcessor = ref("2");
	const valueTypeStorage = ref("SSD");
	const valueTypeProtection = ref("Базовая");
	const valueDeadline = ref("1");
	const valueOS = ref("ubuntu_14_04");
	const valueMemory = ref("20");
	const valueRam = ref("2");
	const valueIp = ref("0");
	const ubuntuVersions = [
		{ title: "14.04", value: "ubuntu_14_04" },
		{ title: "16.04", value: "ubuntu_16_04" },
		{ title: "18.04", value: "ubuntu_18_04" },
		{ title: "20.04", value: "ubuntu_20_04" },
	];
	const almaVersions = [
		{ title: "8.4", value: "alma_8_4" },
		{ title: "9.0", value: "alma_9_0" },
		{ title: "9.1", value: "alma_9_1" },
	];
	const debianVersions = [
		{ title: "10", value: "debian_10" },
		{ title: "11", value: "debian_11" },
		{ title: "12", value: "debian_12" },
	];
	const rockyVersions = [
		{ title: "8", value: "rocky_8" },
		{ title: "9", value: "rocky_9" },
		{ title: "10", value: "rocky_10" },
	];
	const centosVersions = [
		{ title: "7", value: "centos_7" },
		{ title: "8", value: "centos_8" },
		{ title: "9", value: "centos_9" },
	];
	const oracleVersions = [
		{ title: "7.9", value: "oracle_7_9" },
		{ title: "8.4", value: "oracle_8_4" },
		{ title: "9.0", value: "oracle_9_0" },
	];
	const freebsdVersions = [
		{ title: "12.2", value: "freebsd_12_2" },
		{ title: "13.0", value: "freebsd_13_0" },
		{ title: "13.1", value: "freebsd_13_1" },
	];
	const windowsVersions = [
		{ title: "10", value: "windows_10" },
		{ title: "11", value: "windows_11" },
	];
	const atstraLinuxVersions = [
		{ title: "8.4", value: "atstra_linux_8_4" },
		{ title: "9.0", value: "atstra_linux_9_0" },
	];

	
</script>

<template>
	<div class="configurator">
		<div class="configurator__column">
			<div class="configurator__group">
				<p class="configurator__title">Процессор и память</p>
				<div class="configurator__group-column">
					<ConfiguratorSlider 
						title="Количество ядер процессора:"
						v-model="valueProcessor"
						@update:modelValue="(value) => {
							valueProcessor = value
						}"
						:min="2"
						:max="16"
					/>
					<ConfiguratorSlider
						title="Объём оперативной памяти (DDR4):"
						v-model="valueRam"
						@update:modelValue="(value) => {
							valueRam = value
						}"
						postfix="ГБ"
						:min="2"
						:max="64"
					/>
				</div>
			</div>
			<hr class="configurator__divider" />
			<div class="configurator__group">
				<p class="configurator__title">Хранилище</p>
				<div class="configurator__group-column">
					<ConfiguratorGroup title="Дисковая система:">
						<template #content>
							<TariffRadio
								:options="['SSD', 'NVMe']"
								:model-value="valueTypeStorage"
								@update:model-value="(value) => {
									valueTypeStorage = value
								}"
							/>
						</template>
					</ConfiguratorGroup>
					<ConfiguratorSlider
						v-model="valueMemory"
						@update:model-value="(value) => {
							valueMemory = value
						}"
						title="Объём накопителя:"
						postfix="ГБ"
						:min="20"
						:max="2000"
					/>
				</div>
			</div>
			<hr class="configurator__divider" />
			<div class="configurator__group">
				<p class="configurator__title">IP-адреса</p>
				<ConfiguratorSlider
					title="Количество публичных IPv4:"
					v-model="valueIp"
					@update:model-value="(value) => {
						valueIp = value
					}"
					postfix="шт"
					:min="0"
					:max="10"
				/>
			</div>
			<hr class="configurator__divider" />
			<div class="configurator__group">
				<p class="configurator__title">Операционная система</p>
				<ConfiguratorGroup title="Выбор операционной системы:">
					<template #content>
						<div class="configurator__operation-system">
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Ubuntu"
								:options="ubuntuVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Alma"
								:options="almaVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Debian"
								:options="debianVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Rocky"
								:options="rockyVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="CentOS"
								:options="centosVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Oracle"
								:options="oracleVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="FreeBSD"
								:options="freebsdVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Windows"
								:options="windowsVersions"
							/>
							<ConfiguratorDropdown
								v-model="valueOS"
								title="Atstra Linux"
								:options="atstraLinuxVersions"
							/>
						</div>
					</template>
				</ConfiguratorGroup>
			</div>
			<hr class="configurator__divider" />
			<div class="configurator__group">
				<p class="configurator__title">Информационная безопасность</p>
				<ConfiguratorGroup title="Выбор канала:">
					<template #content>
						<TariffRadio
							:options="['Базовая', 'Защита от DDOS']"
							:model-value="valueTypeProtection"
							@update:model-value="(value) => {
								valueTypeProtection = value
							}"
						/>
					</template>
				</ConfiguratorGroup>
			</div>
			<hr class="configurator__divider" />
			<div class="configurator__group">
				<p class="configurator__title">Срок заказа</p>
				<ConfiguratorGroup title="Скидка" is-discount price="5%">
					<template #content>
						<TariffRadio
							:options="periods"
							:model-value="valueDeadline"
							@update:model-value="(value) => {
								valueDeadline = value
							}"
						/>
					</template>
				</ConfiguratorGroup>
			</div>
		</div>
		<TariffItemConfigurator 
			:value-deadline="valueDeadline"
			:value-ip="valueIp"
			:value-memory="valueMemory"
			:value-o-s="valueOS"
			:value-processor="valueProcessor"
			:value-ram="valueRam"
			:value-type-protection="valueTypeProtection"
			:value-type-storage="valueTypeStorage"
			class="configurator__result" 
		/>
	</div>
</template>

<style scoped lang="scss">
	.configurator {
		display: flex;
		align-items: flex-start;
		gap: 30px;
		position: relative;
		flex-wrap: wrap;
		&__column {
			display: flex;
			flex-direction: column;
			flex: 1 1 0;
			gap: 40px;
			position: relative;
			z-index: 1;
		}
		&__operation-system {
			display: flex;
			gap: 10px;
			flex-wrap: wrap;
			width: 100%;
		}
		&__divider {
			height: 1px;
			width: 100%;
			background: #d2e4f3;
		}
		&__group {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
		&__group-column {
			display: flex;
			flex-direction: column;
			gap: 40px;
		}
		&__result {
			max-width: 390px;
			flex: 1 1 0;
			position: sticky;
			min-width: 390px;
			top: 30px;
		}
		&__title {
			color: var(--color-text);
			font-size: 24px;
			font-weight: 600;
		}
		@include r(768px) {
			&__result {
				max-width: 100%;
			}
			&__column {
				gap: 30px;
			}
			&__group-column {
				gap: 20px;
			}
		}
	}
</style>
