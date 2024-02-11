import React from 'react';
import { Story, Meta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta;

const Template: Story<any> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Example Label',
};
