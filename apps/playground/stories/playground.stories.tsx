import type { ComponentMeta } from '@storybook/react';

import PlaygroundPage from '../pages/playground';

export default {
  title: 'Playground',
  component: PlaygroundPage,
} as ComponentMeta<typeof PlaygroundPage>;

export const Playground = PlaygroundPage;
