import React from 'react';
import '../../../../src/globalStyles/globalStyles.css';
import './Button.modules.css';
import ButtonProps from './Button.types';

const Button: React.FC<ButtonProps> = ({
  btnType = 'primary',
  title = 'Tasty !',
  textColor = 'white',
  bgColor,
  btnSize = 'md',
  isLoading = false,
  styles,
  className,
  ...otherAttributes
}) => {
  // const styles = {
  //   color: textColor,
  //   backgroundColor: bgColor,
  //   fontSize: btnSize,

  // };
  return (
    <button
      className={`simple-btn ${btnSize} ${btnType} ${className}`}
      style={{ color: textColor, backgroundColor: bgColor, ...styles }}
      {...otherAttributes}
    >
      {title}
      <div
        className="lds-ellipsis"
        style={{ display: isLoading ? 'inline-block' : 'none' }}
      >
        <div style={{ background: textColor }}></div>
        <div style={{ background: textColor }}></div>
        <div style={{ background: textColor }}></div>
        <div style={{ background: textColor }}></div>
      </div>
    </button>
  );
};

export default Button;
// export {Button};
