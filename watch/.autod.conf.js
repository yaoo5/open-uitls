/**
 * Auto generate dependencies and devDependencies by parse the project file.
 *
 * @see  https://github.com/node-modules/autod
 */

'use strict';

module.exports = {
  write: true,
  prefix: '^',
  devprefix: '^',
  exclude: [
    'demo',
    'dist'
  ],
  devdep: [
    'autod',
    'babel-core',
    'babel-loader',
    'eslint',
    'webpack'
  ],
  keep: [
  ],
  semver: [
  ],
};
