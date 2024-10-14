module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},
	rules: {
		"no-undef": "off",
		"useTabs": "off",
		"endOfLine": "off",
		"prettier/prettier": "off",
		"no-unused-vars": "off",
		// "prettier/prettier": [
		// 	"error",
		// 	{
		// 		tabWidth: 2,
		// 		useTabs: false,
		// 		endOfLine: "auto",
		// 	},
		// ],
		"vue/html-indent": ["error", "tab"],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
