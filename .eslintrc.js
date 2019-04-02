module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: 'airbnb-base',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'no-unused-vars': 'warn',
		'linebreak-style': ['warn', 'windows'],
		'class-methods-use-this': 'warn',
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'no-tabs': 'off',
		'no-bitwise': 'off',
		'no-plusplus': 'off',
		'prefer-const': 'warn',
		'no-undef': 'error',
		'no-unused-vars': 'off',
		'no-underscore-dangle' : 'off',
	},
};
