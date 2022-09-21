import React from 'react';
import './CircularAvatar.modules.css';
import CircularAvatarProps from './CircularAvatar.types';

const CircularAvatar: React.FC<CircularAvatarProps> = ({
  url = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
  size = '100px',
  border = true,
  borderColor = '#181818',
  shadow = false,
  styles,
  ...others
}) => {
  return (
    <img
      className={`circular-avatar-img ${
        shadow ? 'circular-avatar-shadow' : ''
      }`}
      src={url}
      loading="lazy"
      alt=""
      style={{
        width: size,
        height: size,
        border: border ? '3px solid ' + borderColor : '0px solid transparent',
        ...styles,
      }}
      {...others}
    />
  );
};

export default CircularAvatar;
