module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    'no-console': 'error', // Muestra un error por el uso de `console.log`
    'vue/multi-word-component-names': 'off' 
  }
}
