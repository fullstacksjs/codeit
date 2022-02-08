import type { StorybookConfig } from '@storybook/react/types';

import rootMain from '../../../.storybook/main';

const config: StorybookConfig = {
  ...rootMain,
  stories: ['../src/App/**/*.stories.tsx'],
};

export default config;
