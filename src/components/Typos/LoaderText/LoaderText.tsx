import React from 'react';
import '../../../../src/globalStyles/globalStyles.css';
import './LoaderText.modules.css';
import LoaderTextProps from './LoaderText.types';

const LoaderText: React.FC<LoaderTextProps> = ({
  text = 'This is a sample loading text',
  loaderPosition = 'end',
  color = '#E94560',
  isLoading = true,
  fontSize = '1rem',
  styles,
  ...others
}) => {
  return (
    <p
      className={`loader-text ${loaderPosition === 'start' && 'loader-start'}`}
      style={{ color: color, fontSize: fontSize, ...styles }}
      {...others}
    >
      {text}
      {isLoading && (
        <div
          className="lds-ellipsis"
          style={{
            marginRight: '1rem',
            display: isLoading ? 'inline-block' : 'none',
          }}
        >
          <div style={{ background: color }}></div>
          <div style={{ background: color }}></div>
          <div style={{ background: color }}></div>
          <div style={{ background: color }}></div>
        </div>
      )}
    </p>
  );
};

export default LoaderText;
