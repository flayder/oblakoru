import { createApp } from "vue";
import App from "./App.vue";
import VueTheMask from "vue-the-mask";
import { store } from "./store";
import "./assets/style/style.scss";
import router from "./router";
import GlobalContainer from "./components/global/GlobalContainer.vue";
import GlobalBlockTitle from "./components/global/GlobalBlockTitle.vue";
import GlobalBlockSubtitle from "./components/global/GlobalBlockSubtitle.vue";
import GlobalBlock from "./components/global/GlobalBlock.vue";

const app = createApp(App);

app.component("GlobalContainer", GlobalContainer);
app.component("GlobalBlock", GlobalBlock);
app.component("GlobalBlockTitle", GlobalBlockTitle);
app.component("GlobalBlockSubtitle", GlobalBlockSubtitle);

app.use(router);
app.use(VueTheMask);
app.use(store)
app.mount("#app");
