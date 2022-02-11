import { GlobalStyles, ThemeProvider } from '@codeit/shared/ui-theme-provider';
import type { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default CustomApp;
