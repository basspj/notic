import * as shelljs from 'shelljs';
import chalk from 'chalk';

shelljs.cp('-R', '@types', 'node_modules');

console.log(chalk.cyan('Copy @types to node_modules !\n'));
