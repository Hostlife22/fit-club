module.exports = {
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  rules: {
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
      },
    ],
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'string-quotes': null,
    'no-descending-specificity': null,
  },
};
