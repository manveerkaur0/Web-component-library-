// src/components/Image/Image.tests.tsx

import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

test('renders image component', () => {
  const { getByAltText } = render(<Image src="test.jpg" alt="Test image" />);
  const imageElement = getByAltText('Test image');
  expect(imageElement).toBeInTheDocument();
});

test('renders image with specific dimensions', () => {
  const { getByAltText } = render(<Image src="test.jpg" alt="Test image" width="200px" height="200px" />);
  const imageElement = getByAltText('Test image');
  expect(imageElement).toHaveStyle('width: 200px');
  expect(imageElement).toHaveStyle('height: 200px');
});
