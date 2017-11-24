import { camelCase } from 'lodash';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import path from 'path';

import packageJson from './package.json';

const { name } = packageJson;
const index = 'index';
const outDir = 'build';

// CommonJS (for Node) and ES module (for bundlers) build.
// (We could have three entries in the configuration array
// instead of two, but it's quicker to generate multiple
// builds from a single configuration where possible, using
// the `targets` option which can specify `dest` and `format`)
export default {
  // entry: `${outDir}/${libraryName}.js`,
  entry: `${outDir}/${index}.js`,
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ['react', 'react-native'],
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    nodeResolve(),

    // Resolve source maps to the original source
    sourceMaps(),
    alias({
      '~/src': path.join(__dirname, '.', 'build'),
      resolve: ['.js', '.jsx', '/index.js'],
    }),
  ],
  sourcemap: true,
  targets: [
    { dest: packageJson.main, moduleName: camelCase(name), format: 'umd' },
    { dest: packageJson.module, format: 'es' },
  ],
  watch: {
    include: `${outDir}/**`,
  },
};
