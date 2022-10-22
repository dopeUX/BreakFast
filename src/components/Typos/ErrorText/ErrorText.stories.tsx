import React from 'react';
import { Story, Meta } from '@storybook/react';
import ErrorText from './ErrorText';
import ErrorTextProps from './ErrorText.types';

export default {
  title: 'Starters/Typos/ErrorText',
  component: ErrorText,
} as Meta;

const Template: Story<ErrorTextProps> = args => <ErrorText {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Oops ! email validation failed',
  icon: 'type1',
  showIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Oops ! email validation failed',
  icon: 'type2',
  showIcon: true,
};
