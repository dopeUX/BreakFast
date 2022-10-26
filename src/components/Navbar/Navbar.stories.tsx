import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MAIN_COARSE } from '../../constants';
import Navbar from './Navbar';
import { NavbarProps } from './Navbar';

export default {
  title: MAIN_COARSE + '/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
