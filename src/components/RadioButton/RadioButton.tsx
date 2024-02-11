import React, { useState } from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  options: { value: string; label: string }[];
  onChange: (selectedOption: string) => void;
}

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <RadioGroup>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </RadioGroup>
  );
};

export default RadioButton;
