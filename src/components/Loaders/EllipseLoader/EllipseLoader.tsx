import React from 'react';
import EllipseLoaderProps from './EllipseLoader.types';

const EllipseLoader: React.FC<EllipseLoaderProps> = ({
  size = '2rem',
  color = '#FA7070',
  styles,
  ...other
}) => {
  return (
    <div
      className="lds-ellipsis"
      style={{
        fontSize: size,
        marginRight: '1rem',
        display: 'inline-block',
        ...styles,
        // display: isLoading ? "inline-block" : "none",
      }}
      {...other}
    >
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
      <div style={{ background: color }}></div>
    </div>
  );
};

export default EllipseLoader;
