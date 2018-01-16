import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import ts from 'typescript';

import path from 'path';
import { camelCase } from 'lodash';

import pkg from './package.json';

const libraryName = 'shared-themes';
const outDir = 'src';
const index = 'index';
const outputOptions = {
  sourcemap: true,
};

export default {
  input: `${outDir}/${index}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', ...outputOptions },
    { file: pkg.module, format: 'es', ...outputOptions },
  ],
  watch: {
    include: `${outDir}/**`,
  },
  plugins: [
    // Compile TypeScript files
    typescript({
      typescript: ts,
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    // Allow bundling cjs modules
    // (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
    alias({
      '~/src': path.join(__dirname, '.', 'build'),
      resolve: ['.js', '.jsx', '/index.js'],
    }),
  ],
};
