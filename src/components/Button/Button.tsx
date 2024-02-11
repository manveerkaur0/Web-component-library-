import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props: { disabled?: boolean }) => (props.disabled ? '#ccc' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props: { disabled?: boolean }) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props: { disabled?: boolean }) => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
