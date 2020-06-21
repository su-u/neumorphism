import * as React from 'react';
import { Box } from '../components/Box';
import { StoryWrapper } from '../utilities/StoryWrapper';
import { GlobalStyle } from '../components/GlobalStyle';

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => {
  return (
    <>
      <GlobalStyle />
      <StoryWrapper color="#fff">
        <Box>neumorphism</Box>
      </StoryWrapper>
    </>
  );
};
