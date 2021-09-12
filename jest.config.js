module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  testMatch: [
    '<rootDir>/**/*.test.ts',
    '**/*.pacttest.(ts)',
    '**/*.pactverify.(ts)',
  ],
  automock: true,
  clearMocks: true,
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      lines: 0,
      functions: 0,
    },
  },
  setupFiles: ['./jest.setup.ts'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@di/(.*)$': '<rootDir>/di/$1',
    '^@domain/(.*)$': '<rootDir>/domain/$1',
    '^@infrastructure/(.*)$': '<rootDir>/infrastructure/$1',
    '^@presentation/(.*)$': '<rootDir>/presentation/$1',
    '^@shared/(.*)$': '<rootDir>/shared/$1',
  },
}
