import React from "react";
import { Story, Meta } from "@storybook/react";
import Description from "./Description";
import DescriptionProps from "./Description.types";

const randomText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`;

export default {
  title: "Starter/Typos/Description",
  component: Description,
} as Meta;

const Template: Story<DescriptionProps> = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: randomText,
};

export const Yummy = Template.bind({});
Yummy.args = {
  title: randomText,
  color: "#FA7070",
  size: "1.2rem",
};

export const Custom1 = Template.bind({});
Custom1.args = {
  title: randomText,
  size: "1.2rem",
  cap: true,
};

export const Custom2 = Template.bind({});
Custom2.args = {
  title: randomText,
  size: "1.2rem",
  cap: true,
  capColor: "#FA7070",
};
