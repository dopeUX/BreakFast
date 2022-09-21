import React from "react";
import { Story, Meta } from "@storybook/react";
import OutlinedButton  from "./OutlinedButton";
import outlinedButtonProps from "./OutlinedButton.types";

export default {
  title: "Starter/Buttons/OutlinedButton",
  component: OutlinedButton,
} as Meta;

const Template: Story<outlinedButtonProps> = (args) => (
  <OutlinedButton {...args} />
);

export const primary = Template.bind({});
primary.args = {
  title: "Tasty !",
  isLoading: true,
  btnType: "primary",
  btnSize: "sm",
};

export const secondary = Template.bind({});
secondary.args = {
  title: "Tasty !",
  isLoading: false,
  btnType: "secondary",
  btnSize: "md",
};

export const yummy = Template.bind({});
yummy.args = {
  title: "Tasty !",
  isLoading: false,
  btnType: "yummy",
  btnSize: "lg",
};

export const chocolatey = Template.bind({});
chocolatey.args = {
  title: "Tasty !",
  isLoading: false,
  btnType: "chocolatey",
  btnSize: "xl",
};

export const dark = Template.bind({});
dark.args = {
  title: "Tasty !",
  isLoading: false,
  btnType: "dark",
  btnSize: "xxl",
};
