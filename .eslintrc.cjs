module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'vue/no-multiple-template-root': 0,
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
  },
};
