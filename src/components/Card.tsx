import * as React from 'react';
import styled from '@emotion/styled';

interface IProps {
  children?: React.ReactNode;
}

export const Card: React.FC<IProps> = ({children}) => {
  return <CardContainer>{children}</CardContainer>
}

const CardContainer = styled('div')`
  border-radius: 50px;
  background: #55b9f3;
  box-shadow:  20px 20px 60px #489dcf,
    -20px -20px 60px #62d5ff;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
