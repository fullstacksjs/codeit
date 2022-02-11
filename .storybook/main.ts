import type { StorybookConfig } from '@storybook/react/types';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  core: { builder: 'webpack5' },
  stories: [],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
  ],
  webpackFinal(config) {
    config.resolve ??= {};
    config.resolve.plugins ??= [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({ configFile: 'tsconfig.base.json' }),
    );
    return config;
  },
};

export default config;
