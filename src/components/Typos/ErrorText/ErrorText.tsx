import React from 'react';
import './ErrorText.modules.css';
import ErrorTextProps from './ErrorText.types';

const ErrorText: React.FC<ErrorTextProps> = ({
  title = 'Oops ! email validation failed',
  icon = 'type1',
  showIcon = true,
  styles,
}) => {
  return (
    <p style={styles} className="error-text">
      {title}
      {showIcon && (
        <img
          className="error-text-icon"
          src={icon === 'type1' || 'type2' || 'type3' ? getIcon[icon] : icon}
          alt=""
        />
      )}
    </p>
  );
};

const getIcon: any = {
  type1: 'https://i.postimg.cc/YqbZnzjY/error1.png',
  type2: 'https://i.postimg.cc/ry9PsN13/error2.png',
  type3: 'https://i.postimg.cc/VkJG7yxP/error3.png',
};

export default ErrorText;
