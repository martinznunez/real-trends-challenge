module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true

  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'

  ],
  rules: {
  }
}
