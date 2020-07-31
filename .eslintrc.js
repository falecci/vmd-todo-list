module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest', 'cypress'],
  rules: {
    'import/no-unresolved': 'off', // Required for TS and Prettier
    'import/extensions': 'off', // Required for TS and Prettier
    'prettier/prettier': 'error', // We don't want ESLint to mess up with Prettier rules.
    'import/prefer-default-export': 'off', // This is rather annoying.
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // I don't know why this is messing up things
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          'cypress/**/*.js',
          'cypress/**/*.spec.js',
        ],
      },
    ],
  },
};
