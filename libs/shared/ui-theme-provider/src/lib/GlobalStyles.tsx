import { Global } from '@emotion/react';

export const GlobalStyles: React.FC = () => (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  <Global styles={{ 'html, body, #__next': { height: '100%' } }} />
);
