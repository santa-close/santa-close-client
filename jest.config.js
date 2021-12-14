module.exports = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/build/', '/dist/'],
}
