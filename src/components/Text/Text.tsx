import React from 'react';
import styled from 'styled-components';

interface TextProps {
  content: string;
}

const StyledText = styled.p`
  font-size: 16px;
  color: #333;
  /* Add any additional styling here */
`;

const Text: React.FC<TextProps> = ({ content }) => {
  return <StyledText>{content}</StyledText>;
};

export default Text;
