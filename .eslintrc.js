/* eslint-disable unicorn/prefer-module */
const typescriptRules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-types': [
    'error',
    {
      types: {
        Function: {
          fixWith: '((...args: any[]) => any)',
          message: 'use (...args: any[]) => any instead',
        },
        object: {
          fixWith: 'Record<string, any>',
          message: 'use Record<A, B> instead',
        },
      },
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  /**
   * https://github.com/typescript-eslint/typescript-eslint/issues/1824
   */
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-empty-interface': [
    'warn',
    {
      allowSingleExtends: true,
    },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-parameter-properties': 'error',
  '@typescript-eslint/no-unused-vars': 'off',
}

const reactRules = {
  'import/order': 'warn',
  'react-hooks/exhaustive-deps': [
    'warn',
    {
      additionalHooks: '(useRefAct|useRecoilCallback)',
    },
  ],
  'react-hooks/rules-of-hooks': 'off',
  'react/display-name': 'off',
  'react/jsx-child-element-spacing': 'error',
  'react/jsx-curly-spacing': ['error', {when: 'never'}],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': 'error',
  'react/jsx-key': 'warn',
  'react/jsx-max-depth': ['error', {max: 10}],
  'react/jsx-max-props-per-line': ['error', {maximum: 10}],
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-script-url': 'error',
  'react/jsx-pascal-case': 'error',
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-sort-default-props': 'warn',
  'react/jsx-sort-props': 'warn',
  'react/jsx-uses-react': 'error',
  'react/prop-types': 'off',
  'react/self-closing-comp': 'warn',
  'react/sort-comp': 'warn',
}

const promiseRules = {
  'promise/always-return': 'off',
}

const uinconRules = {
  'unicorn/consistent-function-scoping': 'off',
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: ['^UI'],
    },
  ],
  'unicorn/import-index': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-fn-reference-in-iterator': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-reduce': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-node-protocol': 'off',
  'unicorn/prevent-abbreviations': 'off',
}

module.exports = {
  env: {
    amd: true,
    browser: true,
    commonjs: true,
    es6: true,
    // jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.js'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    // {
    //   files: ['*.test.ts', '*.spec.ts', '*.test.tsx', '*.spec.tsx'],
    //   rules: {
    //     '@typescript-eslint/ban-ts-comment': 'off',
    //     'max-nested-callbacks': 'off',
    //     'no-magic-numbers': 'off',
    //     'unicorn/no-useless-undefined': 'off',
    //     'unicorn/prevent-abbreviations': 'off',
    //   },
    // },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // allows for the parsing of JSX
    },
    ecmaVersion: 2020, // allows for the parsing of modern ECMAScript features
    sourceType: 'module', // allows for the use of imports
  },
  plugins: ['promise', 'react', '@typescript-eslint', 'import', 'unicorn'],
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {after: true, before: true}],
    'block-spacing': ['error', 'always'],
    camelcase: ['error', {properties: 'always'}],
    'capitalized-comments': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          catch: {
            after: true,
          },
          for: {
            after: true,
          },
          if: {
            after: true,
          },
          switch: {
            after: true,
          },
          while: {
            after: true,
          },
        },
      },
    ],
    'max-depth': ['error', {max: 4}],
    'max-len': [
      'error',
      {
        code: 300,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'max-lines': ['error', 600],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['error', {max: 4}],
    'max-statements-per-line': ['error', {max: 2}],
    'no-alert': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-console': ['warn', {allow: ['warn', 'error']}],
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', {ignore: [0, 1, -1, 2]}],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    'no-unused-vars': 'off',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-spacing': ['error', 'never'],
    'quote-props': ['error', 'as-needed'],
    'sort-imports': ['warn', {ignoreCase: true, ignoreDeclarationSort: true}],
    'space-before-blocks': [
      'error',
      {
        classes: 'always',
        functions: 'always',
        keywords: 'always',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    ...promiseRules,
    ...typescriptRules,
    ...reactRules,
    ...uinconRules,
  },
  settings: {
    react: {
      version: 'detect', // tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
