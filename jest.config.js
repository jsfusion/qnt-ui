module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  verbose: false,
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: [],
  testPathIgnorePatterns: [
    // ignore files that are under a directory starting with "_" at the root of __tests__
    '/__tests__\\/_.*?',
    // ignore files under __tests__ that start with an underscore
    '/__tests__\\/.*?\\/_.*?',
  ],
  transformIgnorePatterns: ['\\/node_modules\\/(?!@atlaskit|@dentsu)'],

  testMatch: ['<rootDir>/src/components/**/*.test.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^Components(.*)$': '<rootDir>/src/components$1',
    //   '\\.(css|less)$': '<rootDir>/src/test/mocks/cssStub.js',
  },
  moduleFileExtensions: ['js', 'json'],
  globalSetup: undefined,
  globalTeardown: undefined,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
