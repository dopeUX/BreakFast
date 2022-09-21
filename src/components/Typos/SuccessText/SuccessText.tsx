import React from 'react';
import './SuccessText.modules.css';
import SuccessTextProps from './SuccessText.types';

const SuccessText: React.FC<SuccessTextProps> = ({
  title = 'your email was updated successfully',
  icon = 'type1',
  showIcon = true,
  styles,
  ...others
}) => {
  return (
    <p className="success-text" {...others} style={styles}>
      {title}
      {showIcon && (
        <img
          className="success-text-icon"
          src={icon === 'type1' || 'type2' || 'type3' ? getType[icon] : icon}
          alt=""
        />
      )}
    </p>
  );
};

const getType: any = {
  type1: 'https://i.postimg.cc/HsVCXNsF/type1.png',
  type2: 'https://i.postimg.cc/G2KH8fhH/type2.png',
  type3: 'https://i.postimg.cc/RFgZVnXt/type3.png',
};
export default SuccessText;
