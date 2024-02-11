import styled from 'styled-components';

interface StyledLabelProps {
  color?: string;
  disabled?: boolean;
}

export const StyledLabel = styled.span<StyledLabelProps>`
  color: ${(props) => (props.disabled ? 'grey' : props.color || 'black')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
