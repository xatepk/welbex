module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'import'
    ],
    rules: {
      'react/prop-types': 'off',
      'no-debugger': 'off',
      'import/order': [
        'error',
        {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
                {
                    pattern: 'react',
                    group: 'external',
                    position: 'before',
                },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
                order: 'asc',
                caseInsensitive: true,
            },
        },
    ],
    quotes: [2, 'single', { 'avoidEscape': true }]
  }
}
