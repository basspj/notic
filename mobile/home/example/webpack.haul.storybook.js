import path from 'path';

const config = ({ platform }, { module, resolve }) => ({
  entry: ['./storybook'],
  resolve: {
    ...resolve,
    extensions: ['.ts', '.tsx', '.json', ...resolve.extensions],
    alias: {
      '#': path.join(__dirname, '.'),
      '~': path.join(__dirname, '..'),
      '@shared/components': path.join(__dirname, '../src')
    },
    modules: [path.resolve('./storybook'), path.resolve('./node_modules'), 'node_modules']
  },
  module: {
    ...module,
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: ['tslint-loader', 'eslint-loader', 'stylelint-custom-processor-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        query: {
          useBabel: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['source-map-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      ...module.rules
    ]
  }
});

module.exports = config;
