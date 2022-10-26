import React from 'react';
import { Story, Meta } from '@storybook/react';
import ContainerBox, { ContainerBoxProps } from './ContainerBox';
import '../../constants';
import { MAIN_COARSE } from '../../constants';

export default {
  title: MAIN_COARSE + '/ContainerBox',
  component: ContainerBox,
} as Meta;

const Template: Story<ContainerBoxProps> = args => <ContainerBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 'content',
  border: true,
  borderColor: '#54B435',
  shadow: true,
  rounded: true,
};
