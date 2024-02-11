// src/components/Image/Image.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
} as Meta;

// Template for the story
const Template: Story<ImageProps> = (args) => <Image {...args} />;

// Default state
export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Placeholder image',
};

// Image with specific dimensions
export const WithDimensions = Template.bind({});
WithDimensions.args = {
  src: 'https://via.placeholder.com/300',
  alt: 'Placeholder image',
  width: '200px',
  height: '200px',
};
