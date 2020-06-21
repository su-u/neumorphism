import * as React from 'react';
import { Card } from '../components/Card';
import { StoryWrapper } from '../utilities/StoryWrapper';

export default {
  title: 'Card',
  component: Card,
};

export const CardStory = () => {
  return (
    <StoryWrapper color="#fff">
      <Card>neumorphism</Card>
    </StoryWrapper>
  );
};
