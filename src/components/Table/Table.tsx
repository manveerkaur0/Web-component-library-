import React from 'react';
import styled from 'styled-components';

interface TableProps {
  children: React.ReactNode;
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;
