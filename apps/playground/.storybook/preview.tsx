import '../../../.storybook/NextImageMonkeyPatch';

// @ts-expect-error add tsconfig
import { GlobalStyles, ThemeProvider } from '@codeit/shared/ui-theme-provider';
import type { Parameters } from '@storybook/api';
import type { DecoratorFn } from '@storybook/react';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators: DecoratorFn[] = [
  Story => (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  ),
];
