import { render } from '@testing-library/react';

import { Playground } from './Playground';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Playground />);

    expect(baseElement).toBeTruthy();
  });
});
