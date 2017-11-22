const path = require('path');

module.exports = ({ platform }, { module, resolve }) => ({
  entry: ['./storybook/index.ts'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '~': path.join(__dirname, '..', 'src'),
      '~story': path.join(__dirname, '..', 'storybook'),
    },
    modules: [
      path.resolve('./storybook'),
      path.resolve('./src'),
      path.resolve('./node_modules'),
      'node_modules',
    ],
  },
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      ...module.rules,
    ],
  },
});
