import React from "react";
import { Story, Meta } from "@storybook/react";
import LoaderText from "./LoaderText";
import LoaderTextProps from "./LoaderText.types";

export default {
  title: "Starter/Typos/LoaderText",
  component: LoaderText,
} as Meta;

const Template: Story<LoaderTextProps> = (args) => <LoaderText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "This is a sample loading text",
  loaderPosition: "end",
  color: "#E94560",
  isLoading: true,
  fontSize: "1rem",
};

export const Custom = Template.bind({});
Custom.args = {
  text: "This is a sample loading text",
  loaderPosition: "end",
  color: "#42855B",
  isLoading: true,
  fontSize: "1rem",
};
