import * as React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

const globalStyle = css`
  html {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;
