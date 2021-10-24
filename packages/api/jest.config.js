const { pathsToModuleNameMapper } = require('ts-jest/utils');

const config = require('../../tsconfig.base.json');

module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  testRegex: '/test/.*\\.ts$',
  moduleNameMapper: pathsToModuleNameMapper(config.compilerOptions.paths, {
    prefix: '<rootDir>/../..',
  }),
};
