import React from 'react';
import { Story, Meta } from '@storybook/react';
import OutlinedButton from './OutlinedButton';
import outlinedButtonProps from './OutlinedButton.types';

export default {
  title: 'Starter/Buttons/OutlinedButton',
  component: OutlinedButton,
} as Meta;

const Template: Story<outlinedButtonProps> = args => (
  <OutlinedButton {...args} />
);

export const primary = Template.bind({});
primary.args = {
  title: 'Tasty !',
  isLoading: true,
  color: '#F65A83',
  btnType: 'primary',
  btnSize: 'sm',
};

export const secondary = Template.bind({});
secondary.args = {
  title: 'Tasty !',
  isLoading: false,
  btnType: 'secondary',
  color: '#65C18C',
  btnSize: 'md',
};

export const yummy = Template.bind({});
yummy.args = {
  title: 'Tasty !',
  isLoading: false,
  btnType: 'yummy',
  color: '#F68989',
  btnSize: 'lg',
};

export const chocolatey = Template.bind({});
chocolatey.args = {
  title: 'Tasty !',
  isLoading: false,
  color: '#A64B2A',
  btnType: 'chocolatey',
  btnSize: 'xl',
};

export const dark = Template.bind({});
dark.args = {
  title: 'Tasty !',
  isLoading: false,
  color: '#2C3333',
  btnType: 'dark',
  btnSize: 'xxl',
};
