import * as React from 'react';
import styled from '@emotion/styled';

interface IProps {
  color: string;
  children: React.ReactNode;
}

export const StoryWrapper: React.FC<IProps> = ({ color, children }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

interface IWrapperProps {
  color: string;
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props: IWrapperProps) => props.color};
`;
