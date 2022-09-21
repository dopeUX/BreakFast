import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import ButtonProps from './Button.types';

// const stories = storiesOf('Buttons', module);

// stories.add('Button', ()=>{
//     return (<Button/>)
// });

export default {
  title: 'Starter/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  btnType: 'primary',
  title: 'Tasty!',
  textColor: '#ffffff',
  btnSize: 'sm',
  isLoading: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  btnType: 'secondary',
  title: 'Tasty!',
  textColor: '#ffffff',
  btnSize: 'md',
  isLoading: false,
};

export const yummy = Template.bind({});
yummy.args = {
  btnType: 'yummy',
  title: 'Tasty !',
  textColor: '#ffffff',
  btnSize: 'lg',
  isLoading: false,
};

export const chocolatey = Template.bind({});
chocolatey.args = {
  btnType: 'chocolatey',
  title: 'Tasty !',
  textColor: '#ffffff',
  btnSize: 'xl',
  isLoading: false,
};

export const dark = Template.bind({});
dark.args = {
  btnType: 'dark',
  title: 'Tasty !',
  textColor: '#ffffff',
  btnSize: 'xxl',
  isLoading: false,
};

const custom = Template.bind({});
custom.args = {};
