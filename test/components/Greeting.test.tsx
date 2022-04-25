import Greeting from '../../src/components/Greeting';
import { render } from '@testing-library/react';
import React from 'react';

describe('Greeting', () => {
  it('creates a greeting from the given name', () => {
    const { container } = render(<Greeting name={'world'} />);
    expect(container).toHaveTextContent('Hello, world!');
  });
});
