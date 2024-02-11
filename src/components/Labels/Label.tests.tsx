import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';

test('renders label text correctly', () => {
  const { getByText } = render(<Label text="Example Label" />);
  const labelElement = getByText(/Example Label/i);
  expect(labelElement).toBeInTheDocument();
});
