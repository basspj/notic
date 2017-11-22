import path from 'path';

const config = ({}, { module, resolve }: any) => ({
  entry: ['./storybook'],
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

module.exports = config;
