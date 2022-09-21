import { Story, Meta } from "@storybook/react";
import React from "react";
import TextBoxSimple from "./TextBoxSimple";
import TextBoxSimpleProps from "./TextBoxSimple.types";

export default {
  title: "Starter/TextBoxes/TextBoxSimple",
  component: TextBoxSimple,
} as Meta;

const Template: Story<TextBoxSimpleProps> = (args) => (
  <TextBoxSimple {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Your Name",
  activeColor: "#65C18C",
  labelPosition: "start",
  showError: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Your Name",
  activeColor: "#F94892",
  labelPosition: "start",
  showError: false,
};

export const LabelEnd = Template.bind({});
LabelEnd.args = {
  label: "Your Name",
  activeColor: "#54BAB9",
  labelPosition: "end",
  showError: false,
};

export const ColoredLabel = Template.bind({});
ColoredLabel.args = {
  label: "Your Name",
  activeColor: "#4B5D67",
  labelPosition: "end",
  labelColor: "#FFE6E6",
  showError: true,
};
