import React from 'react';
import { Story, Meta } from '@storybook/react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<any> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  onChange: (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  },
};
