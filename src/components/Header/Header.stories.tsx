import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MAIN_COARSE } from '../../constants';
import Header from './Header';
import { HeaderProps } from './Header';

export default {
  title: MAIN_COARSE + '/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
