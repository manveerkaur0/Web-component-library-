import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story<any> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <tbody>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
      <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
      </tr>
      <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
      </tr>
    </tbody>
  ),
};
