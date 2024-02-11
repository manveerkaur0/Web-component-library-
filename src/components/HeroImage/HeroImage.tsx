// src/components/HeroImage/HeroImage.tsx

import React from 'react';
import styled from 'styled-components';

// Define props type
export interface HeroImageProps {
  src: string;
  alt?: string;
  className?: string;
}

// HeroImage component
const HeroImage: React.FC<HeroImageProps> = ({ src, alt = '', className }) => {
  return (
    <StyledHeroImage
      src={src}
      alt={alt}
      className={className}
    />
  );
};

// Styled HeroImage component
const StyledHeroImage = styled.img<HeroImageProps>`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export default HeroImage;
