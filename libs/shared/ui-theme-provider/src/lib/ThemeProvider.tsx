import type { MantineProviderProps } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

export const ThemeProvider: React.FC<MantineProviderProps> = props => (
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      colorScheme: 'dark',
      colors: {
        dark: [
          '#d5d7e0',
          '#acaebf',
          '#8c8fa3',
          '#666980',
          '#4d4f66',
          '#34354a',
          '#323643',
          '#2E313D',
          '#272A34',
          '#23252E',
        ],
      },
      fontFamily: 'Rajdhani, sans serif',
    }}
    {...props}
  />
);
