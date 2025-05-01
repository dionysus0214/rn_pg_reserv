module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@store': './src/store',
        },
      },
    ],
  ],
};
