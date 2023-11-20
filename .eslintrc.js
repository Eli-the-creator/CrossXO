module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'some-other-config-you-use',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
   ],
   overrides: [
      {
         env: {
            node: true,
         },
         files: ['.eslintrc.{js,cjs}'],
         parserOptions: {
            sourceType: 'script',
         },
      },
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint', 'react'],
   settings: {
      react: {
         vartion: 'detect',
      },
   },
   rules: {
      'no-console': 'warn',
   },
};
