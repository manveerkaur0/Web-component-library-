// src/components/Image/Image.tsx

import React from 'react';
import styled from 'styled-components';

// Define props type
export interface ImageProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}

// Image component
const Image: React.FC<ImageProps> = ({ src, alt = '', width, height, className }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

// Styled image component
const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
`;

export default Image;
