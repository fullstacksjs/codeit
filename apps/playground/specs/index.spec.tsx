import { render } from '@testing-library/react';

import Playground from '../pages/playground';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Playground />);
    expect(baseElement).toBeTruthy();
  });
});
