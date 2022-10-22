import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonTextBox from './ButtonTextBox';
import ButtonTextBoxProps from './ButtonTextBox.types';

export default {
  title: 'Starters/TextBoxes/ButtonTextBox',
  component: ButtonTextBox,
} as Meta;

const Template: Story<ButtonTextBoxProps> = args => <ButtonTextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'your name',
  buttonTextColor: '#ffffff',
  accentColor: '#65C18C',
  errorMessage: 'email should not be left empty',
  showError: false,
};

export const Yummy = Template.bind({});
Yummy.args = {
  placeholder: 'your name',
  buttonTextColor: '#ffffff',
  accentColor: '#EE6983',
  errorMessage: 'email should not be left empty',
  showError: true,
};
