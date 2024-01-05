// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // 告诉 ESLint 关闭与 Prettier 格式化规则冲突的任何规则，需写在最后，会覆盖前面的配置
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
    'prettier', // 将 Prettier 的格式化功能集成到 ESLint 中。会应用Prettier的配置
  ],
  rules: {
    // 自定义规则
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'double'],
    semi: ['warn', 'always'],
  },
}
