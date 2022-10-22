import React from 'react';
import { Story, Meta } from '@storybook/react';
import Heading from './Heading';
import HeadingProps from './Heading.types';

export default {
  title: 'Starters/Typos/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  title: 'This is an Extra large yummy title !',
  size: 'extra-large',
  color: '#181818',
  underlined: false,
};

export const Large = Template.bind({});
Large.args = {
  title: 'This is a large yummy title !',
  size: 'large',
  color: '#181818',
  underlined: false,
};
export const Medium = Template.bind({});
Medium.args = {
  title: 'This is a medium yummy title !',
  size: 'medium',
  color: '#181818',
  underlined: false,
};
export const Underlined = Template.bind({});
Underlined.args = {
  title: 'This is a medium yummy title !',
  size: 'medium',
  color: '#181818',
  underlined: true,
};
