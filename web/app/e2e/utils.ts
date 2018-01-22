import path from 'path';
import { ChildProcess } from 'child_process';

export const projectDir = path.join(__dirname, '..');

export const wait = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms));

export const logChild = (child: ChildProcess) => {
  child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
  });

  child.on('exit', (code: number, signal: string) => {
    console.log(`child process exited with code ${code} and signal ${signal}`);
  });
};
