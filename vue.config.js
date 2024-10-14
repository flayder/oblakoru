const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				// Для глобального подключения SCSS-миксинов
				additionalData: `@import "@/assets/style/mixins.scss";`,
			},
		},
	},
});
