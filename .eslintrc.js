module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:chai-friendly/recommended',
        'plugin:mocha/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {},
};
