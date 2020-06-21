import * as React from 'react';
import { Card } from '../components/Card';
import { StoryWrapper } from '../utilities/StoryWrapper';

export default {
  title: 'Card',
  component: Card,
};

export const CardStory = () => {
  return (
    <StoryWrapper color="#55b9f3">
      <Card>neumorphism</Card>
    </StoryWrapper>
  );
};
