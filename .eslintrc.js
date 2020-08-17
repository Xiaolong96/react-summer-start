module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    // 0=off, 1=warn, 2=error
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'react/display-name': 0,
    'react/prop-types': 0,
  },
};
