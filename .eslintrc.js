module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  'rules': {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0,
    "object-shorthand": 0,
    "comma-dangle": 0,
    "arrow-body-style": 0,
    "no-console": 0,
    "func-names": 0,
    "react/jsx-indent-props": [0, 2],
    "react/jsx-boolean-value": 0,
    "react/jsx-indent": 0,
    "react/prefer-es6-class": 0,
    "react/no-did-update-set-state": 0,
    "react/no-is-mounted": 0,
    "no-param-reassign": 0,
    "max-len": [1, 100, 2],
  }
}
