import { Story, Meta } from '@storybook/react';
import React from 'react';
import SuccessText from './SuccessText';
import SuccessTextProps from './SuccessText.types';

export default {
  title: 'Starter/Typos/SuccessText',
  component: SuccessText,
} as Meta;

const Template: Story<SuccessTextProps> = args => <SuccessText {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'your email was updated successfully',
  icon: 'type3',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'your email was updated successfully',
  icon: 'type2',
};
