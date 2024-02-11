import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <StyledSelect value={selectedOption} onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
