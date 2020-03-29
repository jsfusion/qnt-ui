'use strict';

const { execSync } = require('child_process');
const rimraf = require('rimraf');
const path = require('path');
const { promisify } = require('util');

const rootDir = path.resolve(__dirname, '../');

const babelPath = path
  .resolve(__dirname, '../node_modules/.bin/babel')
  .replace(/ /g, '\\ ');

const rimrafAsync = promisify(rimraf);

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

const ignoreGlobs = [
  'dist/*/components/**/__tests__',
  'dist/*/components/**/*.test.js',
  'dist/*/components/**/*.types.js',
  'dist/*/components/**/*.test.stories.js',
  'dist/*/components/**/*.stories.js',
  'dist/*/components/**/*.stories.mdx',
  'dist/*/components/**/*.mocks.js',
  'dist/*/components/**/*.spec.js',
  'dist/*/components/**/*.spec.html',
  'dist/*/components/**/README.md',
  'dist/*/assets',
  'dist/*/examples',
  'dist/*/screens',
].join(' ');

console.log('Deleting old dist folders...');

Promise.all([rimrafAsync(`${rootDir}/dist`)])
  .then(() => {
    exec(
      `${babelPath} src --out-dir dist --copy-files`, //  && del ${ignoreGlobs}
      {
        NODE_ENV: 'production',
      },
    );
  })
  .catch(error => {
    console.error('One of the commands failed:', error.stack); // eslint-disable-line no-console
    process.exit(1);
  });