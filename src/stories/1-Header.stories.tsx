import * as React from 'react';
import { Header } from '../components/Header';
import { GlobalStyle } from '../components/GlobalStyle';

export default {
  title: 'Header',
  component: Header,
};

export const BoxStory = () => {
  return (
    <>
      {' '}
      <GlobalStyle />
      <Header title="Header" />
    </>
  );
};
