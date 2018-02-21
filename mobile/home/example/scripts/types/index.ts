import * as shelljs from 'shelljs';
import chalk from 'chalk';

console.log(chalk.cyan('Copy parent\'s types to example!'));

shelljs.cp('-R', '../dist/types', 'node_modules/@types/shared__components');
