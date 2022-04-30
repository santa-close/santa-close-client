const path = require('path')

module.exports = {
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'prettier'],
  ignorePatterns: ['**/*.config.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint', 'prettier'],
      extends: ['airbnb-typescript', 'prettier'],
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: [
              __dirname,
              path.resolve(__dirname, './packages/santa_close_app'),
              path.resolve(__dirname, './packages/santa_close_map'),
              path.resolve(__dirname, './packages/santa_close_frame'),
              path.resolve(__dirname, './packages/santa_close_design-system'),
              path.resolve(__dirname, './packages/santa_close_common'),
            ],
            devDependencies: [
              '**/*.test.ts',
              '**/*.spec.ts',
              '**/*.setup.ts',
              '**/*.test.tsx',
              '**/*.spec.tsx',
              '**/*.config.js',
              '**/*.config.ts',
            ],
          },
        ],
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: ['plugin:@graphql-eslint/operations-recommended'],
      rules: {
        '@graphql-eslint/executable-definitions': 'off',
      },
      parserOptions: {
        schema: './packages/santa_close_common/schema.graphql',
        operations: './packages/**/*.graphql',
      },
    },
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    'react/function-component-definition': [
      2,
      {namedComponents: 'arrow-function'},
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['off'],
  },
}
