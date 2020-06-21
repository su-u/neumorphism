import * as React from 'react';
import { Card } from '../components/Card';
import { StoryWrapper } from '../utilities/StoryWrapper';

export default {
  title: 'Button',
  component: Card,
};

export const CardStory = () => {
  return <StoryWrapper color="#55b9f3" ><Card /></StoryWrapper>
}