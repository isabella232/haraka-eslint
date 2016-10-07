module.exports = {
  "env": {
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "installedESLint": true,
  "root": true,
  "rules": {
    "dot-notation": 2,
    "indent": [2, 2, {"SwitchCase": 1}],
    "one-var": [2, "never"],
    "no-trailing-spaces": [2, { "skipBlankLines": false }],
    "keyword-spacing": [2, {
      "before": true,
      "after": true
    }],
    "no-delete-var": 2,
    "no-label-var": 2,
    "no-shadow": 2,
    "no-unused-vars": [ 1, { "args": "none" }]
  }
}