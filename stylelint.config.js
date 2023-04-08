module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended-scss",
    "stylelint-config-standard",
    "stylelint-config-prettier",
  ],
  "rules": {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'at-root',
          'debug',
          'each',
          'else',
          'error',
          'extend',
          'for',
          'forward',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'use',
          'warn',
          'while',
        ],
      },
    ],
    'no-descending-specificity': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['/^math/', '/^global/'],
      },
    ],
    'selector-class-pattern': null,
    "no-invalid-position-at-import-rule": null
  }
};