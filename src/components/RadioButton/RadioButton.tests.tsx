import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders radio button options correctly', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const { getByLabelText } = render(<RadioButton options={options} onChange={() => {}} />);
  options.forEach((option) => {
    const radioButton = getByLabelText(option.label) as HTMLInputElement;
    expect(radioButton).toBeInTheDocument();
    expect(radioButton.type).toBe('radio');
    expect(radioButton.value).toBe(option.value);
  });
});

test('calls onChange with selected option', () => {
  const onChangeMock = jest.fn();
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  const { getByLabelText } = render(<RadioButton options={options} onChange={onChangeMock} />);
  const radioButton2 = getByLabelText('Option 2') as HTMLInputElement;
  fireEvent.change(radioButton2, { target: { value: 'option2' } });
  expect(onChangeMock).toHaveBeenCalledWith('option2');
});
