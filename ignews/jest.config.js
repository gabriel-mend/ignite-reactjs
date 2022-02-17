module.exports = {
  testIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  trasnform: {
    "^.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom'
}