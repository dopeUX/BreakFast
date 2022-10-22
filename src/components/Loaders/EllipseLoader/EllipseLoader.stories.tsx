import React from 'react';
import { Story, Meta } from '@storybook/react';
import EllipseLoader from './EllipseLoader';
import EllipseLoaderProps from './EllipseLoader.types';

export default {
  title: 'Starters/Loaders/EllipseLoader',
  component: EllipseLoader,
} as Meta;

const Template: Story<EllipseLoaderProps> = args => <EllipseLoader {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '2rem',
  color: '#FA7070',
};

export const Custom = Template.bind({});
Custom.args = {
  size: '5rem',
  color: '#8758FF',
};
