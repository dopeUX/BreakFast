import React from 'react';
import { Story, Meta } from '@storybook/react';
import SpinnerLoader from './SpinnerLoader';
import SpinnerLoaderProps from './SpinnerLoader.types';

export default {
  title: 'Starters/Loaders/SpinnerLoader',
  component: SpinnerLoader,
} as Meta;

const Template: Story<SpinnerLoaderProps> = args => <SpinnerLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '40px',
  color: '#FA7070',
};

export const Small = Template.bind({});
Small.args = {
  size: '30px',
  color: '#367E18',
};

export const Medium = Template.bind({});
Medium.args = {
  size: '50px',
  color: '#8758FF',
};

export const Large = Template.bind({});
Large.args = {
  size: '80px',
  color: '#18978F',
};
