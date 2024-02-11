import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders card component with given content', () => {
  const { getByText } = render(<Card>Card Content</Card>);
  const cardElement = getByText(/Card Content/i);
  expect(cardElement).toBeInTheDocument();
});

// You can add more tests for specific functionalities or behaviors of the Card component.
