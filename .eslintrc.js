module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/func-call-spacing': ['error'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', {avoidEscape: true}],
      },
  },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@styles', './src/styles'],
          ['@components', './src/components'],
          ['@screens', './src/screens'],
          ['@utils', './src/utils'],
          ['@hooks', './src/hooks'],
          ['@assets', './src/assets']
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
      }
    },
  },
  ignorePatterns: [
    'node_modules/',
    'build/',
    'dist/',
    'coverage/',
    '.eslintcache',
    '*.config.js',
    '*.config.ts',
  ],
};
