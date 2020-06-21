import * as React from 'react';
import styled from '@emotion/styled';

interface ICardProps {
  backgroundColor?: string;
  shadowColor?: string;
  width?: string;
  height?: string;
  radius?: string;
}

interface IProps extends ICardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<IProps> = ({ children, ...cardProps }) => {
  return <CardContainer {...cardProps}>{children}</CardContainer>;
};

Card.defaultProps = {
  width: '300px',
  height: '300px',
  backgroundColor: '#ffffff',
  shadowColor: '#d9d9d9',
  radius: '50px',
};

const CardContainer = styled('div')`
  border-radius: ${(props: ICardProps) => props.radius};
  background: ${(props: ICardProps) => props.backgroundColor};
  box-shadow: 20px 20px 60px ${(props: ICardProps) =>
    props.shadowColor};, -20px -20px 60px ${(props: ICardProps) =>
  props.backgroundColor};;
  width: ${(props: ICardProps) => props.width};
  height: ${(props: ICardProps) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;
