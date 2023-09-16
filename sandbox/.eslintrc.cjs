/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'xero/js-config',
    'xero/vue3-config',
    'xero/ts-config'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
