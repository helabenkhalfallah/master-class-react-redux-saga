module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: [
            'chrome >= 41',
            'ie >= 9',
            'firefox >= 36',
            'and_ff >= 36',
            'android >= 4.4',
            'iOS >= 8',
            'last 1 samsung versions',
          ],
        },
      },
    ],
  ];

  const plugins = [
    [
      '@babel/plugin-proposal-decorators', {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime',
    'react-hot-loader/babel',
  ];

  return {
    presets,
    plugins,
  };
};
