import type { ComponentMeta } from '@storybook/react';

import { Playground } from './Playground';

export const P1 = <Playground />;

export default {
  title: 'Playground',
  component: Playground,
} as ComponentMeta<typeof Playground>;
