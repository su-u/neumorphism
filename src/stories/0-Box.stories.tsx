import * as React from 'react';
import { Box } from '../components/Box';
import { StoryWrapper } from '../utilities/StoryWrapper';

export default {
  title: 'Box',
  component: Box,
};

export const BoxStory = () => {
  return (
    <StoryWrapper color="#fff">
      <Box>neumorphism</Box>
    </StoryWrapper>
  );
};
