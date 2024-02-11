import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders button text correctly', () => {
  const { getByText } = render(<Button text="Click me" />);
  const buttonElement = getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button is disabled correctly', () => {
  const { getByText } = render(<Button text="Disabled Button" disabled />);
  const buttonElement = getByText(/Disabled Button/i) as HTMLButtonElement;
  expect(buttonElement.disabled).toBeTruthy();
});
