import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('renders dropdown options correctly', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const { getByLabelText } = render(<Dropdown options={options} onChange={() => {}} />);
  const dropdown = getByLabelText(/Select an option/i) as HTMLSelectElement;
  expect(dropdown).toBeInTheDocument();
  expect(dropdown.options.length).toBe(options.length);
});

test('calls onChange with selected option', () => {
  const onChangeMock = jest.fn();
  const { getByLabelText } = render(<Dropdown options={['Option 1', 'Option 2']} onChange={onChangeMock} />);
  const dropdown = getByLabelText(/Select an option/i) as HTMLSelectElement;
  fireEvent.change(dropdown, { target: { value: 'Option 2' } });
  expect(onChangeMock).toHaveBeenCalledWith('Option 2');
});
