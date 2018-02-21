/* eslint-disable no-console */

import * as dir from 'node-dir';
import * as path from 'path';
import * as Tsconfig from 'tsconfig';
import * as TsconfigPaths from 'tsconfig-paths';
import * as fs from 'fs';
import chalk from 'chalk';

import { ENCODING } from './config';
import { keysRegex, newImportLines } from './func';

console.log(chalk.cyan('typescript: path mapping -> relative path'));

const tsconfig = Tsconfig.loadSync(__dirname, undefined);

if (tsconfig.path) {
  const basePath = path.join(path.dirname(tsconfig.path), tsconfig.config.compilerOptions.baseUrl);

  const { config: { compilerOptions: { paths } } } = tsconfig;

  const matchPath = TsconfigPaths.createMatchPath(basePath, paths);

  const pathsKey = Object.keys(paths);

  const pathsRegex = keysRegex(pathsKey);

  dir
    .promiseFiles(basePath)
    .then((files: string[]) => {
      for (const file of files) {
        fs.readFile(file, ENCODING, (err, code) => {
          if (err) {
            console.log(chalk.red(err.message));
          } else {
            const lines = code.split('\n');
            const newLines = newImportLines(lines, pathsRegex, matchPath, file);
            if (lines !== newLines) {
              fs.writeFile(file, newLines.join('\n'), ENCODING, (writeErr) => {
                if (writeErr) {
                  console.log(chalk.red(writeErr.message));
                }
              });
            }
          }
        });
      }
      console.log(chalk.cyan('done!'));
    })
    .catch((e: any) => {
      console.log(chalk.red(e));
    });
} else {
  console.log(chalk.red('tsconfig not found!'));
}
