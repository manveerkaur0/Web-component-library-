import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

test('renders table correctly', () => {
  const { getByText } = render(
    <Table>
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
    </Table>
  );
  const header1 = getByText(/Header 1/i);
  const header2 = getByText(/Header 2/i);
  const row1Col1 = getByText(/Row 1, Column 1/i);
  const row2Col2 = getByText(/Row 2, Column 2/i);
  expect(header1).toBeInTheDocument();
  expect(header2).toBeInTheDocument();
  expect(row1Col1).toBeInTheDocument();
  expect(row2Col2).toBeInTheDocument();
});
