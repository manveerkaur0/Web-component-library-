import React from 'react';
import { render } from '@testing-library/react';
import Text from './Text';

test('renders text correctly', () => {
  const { getByText } = render(<Text content="Example text" />);
  const textElement = getByText(/Example text/i);
  expect(textElement).toBeInTheDocument();
});
