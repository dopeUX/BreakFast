import React from "react";
import "./RoundedAvatar.modules.css";
import RoundedAvatarProps from "./RoundedAvatars.types";

const RoundedAvatar: React.FC<RoundedAvatarProps> = ({
  url = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
  size = "100px",
  border = true,
  borderColor = "#181818",
  shadow = false,
  styles,
  ...others
}) => {
  return (
    <img
      className={`rounded-avatar-img ${shadow ? "rounded-avatar-shadow" : ""}`}
      src={url}
      loading="lazy"
      alt=""
      style={{
        width: size,
        height: size,
        border: border ? "3px solid " + borderColor : "0px solid transparent",
        ...styles,
      }}
      {...others}
    />
  );
};

export default RoundedAvatar;
