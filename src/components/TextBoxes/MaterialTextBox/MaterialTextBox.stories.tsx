import MaterialTextBox from './MaterialTextBox';
import React from 'react';
import { Story, Meta } from '@storybook/react';
import MaterialTextBoxProps from './MaterialTextBox.types';

export default {
  title: 'Starter/TextBoxes/MaterialTextBox',
  component: MaterialTextBox,
} as Meta;

const Template: Story<MaterialTextBoxProps> = args => (
  <MaterialTextBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Your name',
  accentColor: 'rgb(223, 244, 247)',
  borderColor: 'rgb(97, 174, 184)',
  errorMessage: 'name should not be left empty',
  showError: true,
};
export const Custom = Template.bind({});
Custom.args = {
  label: 'Your name',
  accentColor: '#FFC4C4',
  borderColor: '#B42B51',
  errorMessage: 'name should not be left empty',
  showError: true,
};
