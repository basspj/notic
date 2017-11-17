const path = require('path');

const pathResolve = (dir) => path.join(__dirname, '..', dir);

module.exports = ({ platform }, { module, resolve }) => ({
  entry: ['./storybook/index.ts'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '@': pathResolve('storybook'),
      '~': pathResolve('src'),
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
