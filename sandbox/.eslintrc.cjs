/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'eslint-config-xero-js',
    'eslint-config-xero-ts',
    'eslint-config-xero-vue'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
