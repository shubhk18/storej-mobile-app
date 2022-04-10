module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"settings" : {
		"react" : {
			"version" : "detect"
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"react-native",
		"prettier", 
		"jest", 
		"testing-library"
	],
	ignorePatterns: ['.eslintrc.js', 'dist', 'babel.config.js', 'metro.config.js'],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	},
};
