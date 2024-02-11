import React from 'react';
import { Story, Meta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<any> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  onChange: (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  },
};
