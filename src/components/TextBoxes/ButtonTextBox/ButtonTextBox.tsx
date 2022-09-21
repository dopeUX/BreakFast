import React from 'react';
import './ButtonTextBox.modules.css';
import ButtonTextBoxProps from './ButtonTextBox.types';

const ButtonTextBox: React.FC<ButtonTextBoxProps> = ({
  placeholder = 'Your email',
  styles,
  buttonTextColor = '#ffffff',
  accentColor = '#65C18C',
  errorMessage = 'email should not be left empty',
  showError = true,
  ...others
}) => {
  const [active, setActive] = React.useState(false);
  return (
    <div className="button-textbox-section">
      <div className="button-textbox">
        <input
          type="text"
          className=""
          placeholder={placeholder}
          onFocus={(e: any) => {
            setActive(true);
            e.currentTarget.style.border = `3px solid ${accentColor}`;
          }}
          onBlur={(e: any) => {
            setActive(false);
            e.currentTarget.style.border = `1px solid #b4b4b4`;
          }}
          style={{
            ...styles,
          }}
          {...others}
        ></input>
        <button
          className=""
          style={{
            background: active ? accentColor : '#CFD2CF',
            color: active ? buttonTextColor : 'black',
          }}
        >
          Send
        </button>
      </div>
      {showError && <span>{errorMessage}</span>}
    </div>
  );
};

export default ButtonTextBox;
