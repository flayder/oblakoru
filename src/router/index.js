import HomeView from "@/pages/HomeView.vue";
import ReadyServers1CView from "@/pages/VpsAndVdsServers/ReadyServers1CView.vue";
import ConfiguratorView from "@/pages/VpsAndVdsServers/ConfiguratorView.vue";
import ReadyServersView from "@/pages/VpsAndVdsServers/ReadyServersView.vue";
import ReadyServersWindowsView from "@/pages/VpsAndVdsServers/ReadyServersWindowsView.vue";
import { createWebHistory, createRouter } from "vue-router";
import PhysicalReadyServersView from "@/pages/PhysicalServers/ReadyServersView.vue";
import PhysicalConfiguratorView from "@/pages/PhysicalServers/ConfiguratorView.vue";

const routes = [
	{ path: "/", component: HomeView },
	{
		path: "/vps-and-vds-servers/ready-servers",
		component: ReadyServersView,
	},
	{
		path: "/vps-and-vds-servers/ready-servers-1c",
		component: ReadyServers1CView,
	},
	{
		path: "/vps-and-vds-servers/ready-servers-windows",
		component: ReadyServersWindowsView,
	},
	{
		path: "/vps-and-vds-servers/configuration",
		component: ConfiguratorView,
	},
	{
		path: "/physical-servers/ready-servers",
		component: PhysicalReadyServersView,
	},
	{
		path: "/physical-servers/configuration",
		component: PhysicalConfiguratorView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
