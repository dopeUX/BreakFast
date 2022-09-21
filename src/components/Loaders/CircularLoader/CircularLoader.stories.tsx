import React from "react";
import { Story, Meta } from "@storybook/react";
import CircularLoader from "./CircularLoader";
import CircularLoaderProps from "./CircularLoader.types";

export default {
  title: "Starter/Loaders/CircularLoader",
  component: CircularLoader,
} as Meta;

const Template: Story<CircularLoaderProps> = (args) => (
  <CircularLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "30px",
  color: "#FA7070",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "50px",
  color: "#8758FF",
};
export const Large = Template.bind({});
Large.args = {
  size: "70px",
  color: "#59CE8F",
};
