import path from 'path';

const config = ({ platform }, { module, resolve }) => ({
  entry: ['./src'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '~': path.join(__dirname, '..'),
    },
    modules: [path.resolve('./src'), path.resolve('./node_modules'), 'node_modules'],
  },
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: ['tslint-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        query: {
          useBabel: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['source-map-loader', 'babel-loader'],
      },
      ...module.rules,
    ],
  },
});

module.exports = config;
