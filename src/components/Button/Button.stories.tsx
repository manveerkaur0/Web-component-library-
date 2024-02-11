import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true,
};
