module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist',
    '.eslintrc.cjs',
    'tailwind.config.js',
    'postcss.config.js'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './tsconfig.app.json'
    ],
    tsconfigRootDir: '.',
  },
  settings: { react: { version: '18.3.1' } },
  plugins: [
    'react-refresh',
    'simple-import-sort',
    'prettier'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'prettier/prettier':  ['error', { 'endOfLine': 'auto' }],
  },
};
