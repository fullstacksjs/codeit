import { createGetInitialProps } from '@mantine/next';
import type { NextComponentType } from 'next';
import { Head, Html, Main, NextScript } from 'next/document';

const CustomDocument: NextComponentType = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

CustomDocument.getInitialProps = createGetInitialProps();

export default CustomDocument;
