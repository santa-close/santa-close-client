module.exports = {
  schema: ['packages/santa_close_common/src/graphql/schema.graphql'],
  documents: ['**/*.{graphql,js,ts,jsx,tsx}'],
  extensions: {
    languageService: {
      cacheSchemaFileForLookup: true,
      enableValidation: false,
    },
  },
}
