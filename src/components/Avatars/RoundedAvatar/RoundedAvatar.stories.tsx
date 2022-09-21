import React from "react";
import { Story, Meta } from "@storybook/react";
import RoundedAvatar from "./RoundedAvatar";
import RoundedAvatarProps from "./RoundedAvatars.types";

export default {
  title: "Starter/Avatars/RoundedAvatar",
  component: RoundedAvatar,
} as Meta;

const Template: Story<RoundedAvatarProps> = (args) => (
  <RoundedAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  size: "100px",
  border: false,
  borderColor: "#181818",
  shadow: false,
};

export const Small = Template.bind({});
Small.args = {
  url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  size: "50px",
  border: false,
  borderColor: "#181818",
  shadow: false,
};

export const Medium = Template.bind({});
Medium.args = {
  url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  size: "100px",
  border: false,
  borderColor: "#181818",
  shadow: true,
};

export const Large = Template.bind({});
Large.args = {
  url: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  size: "150px",
  border: false,
  borderColor: "#181818",
  shadow: true,
};
