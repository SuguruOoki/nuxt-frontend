module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'arrow-parens': 'off',
    'brace-style': 'off',
    complexity: ['error', { max: 10 }],
    curly: 'off',
    // max:800にしたのは、すでに多すぎるコンポーネントが存在し、そのリファクタが必要であり、これ以上の悪化を防ぐため。
    'max-depth': ['error', 3],
    'max-lines': ['error', { max: 930, skipBlankLines: true, skipComments: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'space-before-function-paren': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
