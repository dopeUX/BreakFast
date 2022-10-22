import React from 'react';
import { Story, Meta } from '@storybook/react';
import CircularAvatar from './CircularAvatar';
import CircularAvatarProps from './CircularAvatar.types';

export default {
  title: 'Starters/Avatars/CircularAvatar',
  component: CircularAvatar,
} as Meta;

const Template: Story<CircularAvatarProps> = args => (
  <CircularAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  size: '100px',
  border: true,
  borderColor: '#181818',
  shadow: false,
};

export const Small = Template.bind({});
Small.args = {
  url:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  size: '50px',
  border: true,
  borderColor: '#D2001A',
  shadow: true,
};

export const Medium = Template.bind({});
Medium.args = {
  url:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  size: '100px',
  border: true,
  borderColor: '#D2001A',
  shadow: true,
};

export const Large = Template.bind({});
Large.args = {
  url:
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  size: '150px',
  border: false,
  borderColor: '#D2001A',
  shadow: true,
};
