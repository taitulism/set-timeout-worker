module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		mocha: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	overrides: [{
		files: 'tests/**',
		env: {
			mocha: true
		},
		rules: {
			'no-unused-expressions': 'off',
			'no-magic-numbers': 'off',
			'max-lines-per-function': 'off',
			'max-statements': 'off',
			'func-names': 'off',
			'prefer-arrow-callback': 'off',
			'global-require': 'off',
			'no-new': 'off',
		},
	}],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-invalid-this': ['error'],
		'no-shadow': 'off',
		'accessor-pairs': 'error',
		'array-bracket-newline': 'error',
		'array-bracket-spacing': 'error',
		'array-callback-return': 'error',
		'arrow-body-style': 'error',
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'arrow-spacing': 'error',
		'block-scoped-var': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		camelcase: [
			'error', {
				allow: ['^REGEX_']
			}
		],
		'class-methods-use-this': 'error',
		'comma-spacing': 'error',
		'comma-style': 'error',
		complexity: 'error',
		'computed-property-spacing': 'error',
		'consistent-this': 'error',
		curly: ['error', 'multi-line'],
		'default-case': 'error',
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		'eol-last': 'error',
		eqeqeq: ['error', 'smart'],
		'func-call-spacing': 'error',
		'func-names': [
			'error',
			'as-needed'
		],
		'function-paren-newline': 'error',
		'generator-star-spacing': 'error',
		'guard-for-in': 'error',
		'handle-callback-err': 'error',
		'id-blacklist': 'error',
		'id-match': 'error',
		'implicit-arrow-linebreak': 'error',
		indent: ['error', 'tab', {ignoreComments: true}],
		'jsx-quotes': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': [
			'error',
			'unix'
		],
		'lines-around-directive': 'error',
		'lines-between-class-members': 'error',
		'max-classes-per-file': 'error',
		'max-depth': 'error',
		'max-len': [
			'error', {
				code: 100,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			}
		],
		'max-nested-callbacks': 'error',
		'max-params': ['error', { max: 4 }],
		'new-cap': [
			'error', {
				capIsNew: false,
			}
		],
		'new-parens': 'error',
		'newline-per-chained-call': [
			'error', {
				ignoreChainWithDepth: 3
			}
		],
		'no-alert': 'error',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-bitwise': 'error',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-catch-shadow': 'error',
		'no-confusing-arrow': 'error',
		'no-console': 'error',
		'no-continue': 'error',
		'no-div-regex': 'error',
		'no-duplicate-imports': 'error',
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['error', { ignore: [0, 1] }],
		'no-misleading-character-class': 'error',
		'no-mixed-operators': 'error',
		'no-mixed-requires': 'error',
		'no-multi-assign': 'error',
		'no-multi-str': 'error',
		'no-multiple-empty-lines': [
			'error', {
				max: 4,
				maxEOF: 1,
			}
		],
		'no-native-reassign': 'error',
		'no-negated-condition': 'error',
		'no-negated-in-lhs': 'error',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-restricted-globals': 'error',
		'no-restricted-imports': 'error',
		'no-restricted-modules': 'error',
		'no-restricted-properties': 'error',
		'no-restricted-syntax': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-shadow-restricted-names': 'error',
		'no-spaced-func': 'error',
		'no-template-curly-in-string': 'error',
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unneeded-ternary': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': [
			'error', {
				allowShortCircuit: true
			}
		],
		'no-use-before-define': [
			'error', {
				functions: false,
				classes: false
			}
		],
		'no-useless-call': 'error',
		'no-useless-catch': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'error',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'error',
		'object-curly-newline': 'error',
		'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
		'object-shorthand': 'error',
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padding-line-between-statements': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-object-spread': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'quote-props': ['error', 'as-needed'],
		quotes: [
			'error',
			'single'
		],
		radix: 'error',
		'require-atomic-updates': 'error',
		'require-await': 'error',
		'require-unicode-regexp': 'error',
		'rest-spread-spacing': 'error',
		semi: 'error',
		'semi-spacing': 'error',
		'sort-imports': [
			'error', {
				ignoreCase: true,
				ignoreMemberSort: true,
				ignoreDeclarationSort: true,
				memberSyntaxSortOrder: [
					'single',
					'multiple',
					'all',
					'none'
				]
			}
		],
		'space-before-blocks': 'error',
		'space-before-function-paren': 'error',
		'space-in-parens': [
			'error',
			'never'
		],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [
			'error',
			'always'
		],
		strict: [
			'error',
			'never'
		],
		'switch-colon-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': [
			'error',
			'never'
		],
		'valid-jsdoc': 'error',
		'vars-on-top': 'error',
		'wrap-iife': 'error',
		'wrap-regex': 'error',
		'yield-star-spacing': 'error',
		yoda: 'error'
	}
};

//		"prefer-destructuring": "off",
//		"callback-return": "off",
//		"sort-keys": "off",
//		"semi-style": [ "off", "last" ],
//		"require-jsdoc": "off",
//		"prefer-reflect": "off", // Deprecated
//		"prefer-named-capture-group": "off",
//		"padded-blocks": "off",
//		"one-var": "off",
//		"func-name-matching": "off",
//		"object-curly-spacing": "off",
//		'max-statements-per-line': 'off',
//		"no-warning-comments": "off",
//		"no-underscore-dangle": ["off", { "allowAfterThis": true, "allow": [] }],
//		"no-ternary": "off",
//		"no-sync": "off",
//		"no-plusplus": "off",
//		"no-param-reassign": "off",
//		"no-multi-spaces": ["off", { "exceptions": { "VariableDeclarator": true, "ImportDeclaration": true, "Property": true } }],
//		"no-inline-comments": "off",
//		'no-invalid-this': 'off',
//		'no-eq-null': 'off',
//		"no-extra-parens": "off",
//		"newline-after-var": [ "off", "always" ],
//		"multiline-comment-style": "off",
//		"max-statements": ["off", { "max": 20 }],
//		"max-lines": "off",
//		"line-comment-position": "off",
//		'lines-around-comment': 'off',
//		"key-spacing": ["off", { "align": "value" }],
//		"indent-legacy": "off",
//		"id-length": ["off", {"exceptions": ["i"]}],
//		"global-require": "off",
//		"func-style": "off",
//		"consistent-return": "off",
//		"comma-dangle": ["off", "always-multiline"],
//		"capitalized-comments": "off",
//		"array-element-newline": ["off", { "minItems": 4, "multiline": true, }],
//		'prefer-template': 'off',
//		"sort-vars": "off",
//		"no-tabs": "off",
//		"newline-before-return": "off",
//		"multiline-ternary": "off",
//		"max-lines-per-function": ["off", 50],
//		"init-declarations": "off",
