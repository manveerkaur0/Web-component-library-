import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<any> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Example text',
};
