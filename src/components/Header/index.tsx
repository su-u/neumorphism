import * as React from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box';

interface IProps {
  title: string;
}

export const Header: React.FC<IProps> = ({ title }) => {
  return (
    <Box width="100%" radius="0" height="80px" center={false}>
      <Contents>
        <div>{title}</div>
      </Contents>
    </Box>
  );
};

const Contents = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 30px;
`;
