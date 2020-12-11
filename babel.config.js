module.exports = {
  presets: [
    ['@babel/preset-env', { target: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@interface': './src/interface',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { lagacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
