import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { Playground } from './App/Playground';

ReactDOM.render(
  <StrictMode>
    <Playground />
  </StrictMode>,
  document.getElementById('root'),
);
