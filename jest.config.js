module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^~(.*)$': '<rootDir>/src/$1',
  },
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
