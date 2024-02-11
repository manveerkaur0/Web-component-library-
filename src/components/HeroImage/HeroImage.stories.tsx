// src/components/HeroImage/HeroImage.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta;

// Template for the story
const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'Hero image',
};
