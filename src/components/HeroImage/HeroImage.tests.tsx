// src/components/HeroImage/HeroImage.tests.tsx

import React from 'react';
import { render } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders hero image component', () => {
  const { getByAltText } = render(<HeroImage src="test.jpg" alt="Test hero image" />);
  const imageElement = getByAltText('Test hero image');
  expect(imageElement).toBeInTheDocument();
});
