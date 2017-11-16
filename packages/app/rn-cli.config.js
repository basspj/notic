const path = require('path');
const blacklist = require('metro-bundler/src/blacklist');
// const glob = require('glob-to-regexp');
// const sharedThemesPackage = require('../shared-themes/package.json');

// const dependencies = Object.keys(sharedThemesPackage.dependencies);
// const peerDependencies = Object.keys(sharedThemesPackage.peerDependencies);

const config = {
  // getProjectRoots() {
  //   return [__dirname, path.resolve(__dirname, '../shared-themes')];
  // },

  // getProvidesModuleNodeModules() {
  //   return [...dependencies, ...peerDependencies];
  // },

  // extraNodeModules: {
  // 'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  // react: path.resolve(__dirname, 'node_modules/react'),
  // },

  getBlacklistRE() {
    return blacklist([
      /!app\/node_modules\/react-native.*/,
      // glob(`${path.resolve(__dirname, '../shared-themes')}/node_modules/*`),
      // glob(`${__dirname}/node_modules/*/{${dependencies.join(',')}}`, {
      //   extended: true,
      // }),
    ]);
  },

  // typescript
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
};
module.exports = config;
