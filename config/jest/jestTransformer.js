// eslint-disable-next-line import/no-extraneous-dependencies
const babelJestMd = require('babel-jest');

// eslint-disable-next-line no-underscore-dangle
const babelJest = babelJestMd.__esModule ? babelJestMd.default : babelJestMd;

module.exports = babelJest.createTransformer({
  babelrc: false,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],

  plugins: [
    [
      '@babel/plugin-proposal-decorators', {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
  ],
});
