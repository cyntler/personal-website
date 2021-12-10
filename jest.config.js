module.exports = {
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.ts',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
      },
    ],
  },
};
