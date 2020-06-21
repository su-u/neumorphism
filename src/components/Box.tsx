import * as React from 'react';
import styled from '@emotion/styled';

interface IBoxProps {
  backgroundColor?: string;
  shadowColor?: string;
  width?: string;
  height?: string;
  radius?: string;
  center?: boolean;
}

interface IProps extends IBoxProps {
  children?: React.ReactNode;
}

export const Box: React.FC<IProps> = ({ children, ...cardProps }) => {
  return <BoxContainer {...cardProps}>{children}</BoxContainer>;
};

Box.defaultProps = {
  width: '300px',
  height: '300px',
  backgroundColor: '#ffffff',
  shadowColor: '#d9d9d9',
  radius: '50px',
  center: true,
};

const BoxContainer = styled('div')`
  border-radius: ${(props: IBoxProps) => props.radius};
  background: ${(props: IBoxProps) => props.backgroundColor};
  box-shadow: 20px 20px 60px ${(props: IBoxProps) => props.shadowColor},
    -20px -20px 60px ${(props: IBoxProps) => props.backgroundColor};
  width: ${(props: IBoxProps) => props.width};
  height: ${(props: IBoxProps) => props.height};
  ${(props: IBoxProps) => (props.center ? 'display: flex' : '')};
  ${(props: IBoxProps) => (props.center ? 'justify-content: center' : '')};
  ${(props: IBoxProps) => (props.center ? 'align-items: center' : '')};
`;
