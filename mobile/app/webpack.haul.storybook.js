import path from 'path';

const config = ({ platform }, { module, resolve }) => ({
  entry: ['./storybook'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '~': path.join(__dirname, '..'),
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
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        use: ['tslint-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      ...module.rules,
    ],
  },
});

module.exports = config;
