const path = require('path')

module.exports = {
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
  ignorePatterns: [
    '**/build',
    '**/*.config.js',
    '**/dist',
    '**/node_modules',
    '**/coverage',
  ],
  parserOptions: {
    project: ['./tsconfig.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],
    'react/function-component-definition': [
      2,
      {namedComponents: 'arrow-function'},
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [
          __dirname,
          path.resolve(__dirname, './packages/santa_close_app'),
          path.resolve(__dirname, './packages/santa_close_map'),
          path.resolve(__dirname, './packages/santa_close_frame'),
          path.resolve(__dirname, './packages/santa_close_design-system'),
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
    'import/prefer-default-export': 'off',
    'arrow-body-style': ['off'],
  },
}
