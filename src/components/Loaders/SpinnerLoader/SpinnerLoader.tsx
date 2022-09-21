import React from 'react';
import './SpinnerLoader.modules.css';
import SpinnerLoaderProps from './SpinnerLoader.types';

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({
  size = '2rem',
  color = '#FA7070',
  styles,
  ...others
}) => {
  return (
    <div
      className="spinner"
      style={{
        fontSize: size,
        ...styles,
      }}
      {...others}
    >
      <div className="bar1" style={{ background: color }}></div>
      <div className="bar2" style={{ background: color }}></div>
      <div className="bar3" style={{ background: color }}></div>
      <div className="bar4" style={{ background: color }}></div>
      <div className="bar5" style={{ background: color }}></div>
      <div className="bar6" style={{ background: color }}></div>
      <div className="bar7" style={{ background: color }}></div>
      <div className="bar8" style={{ background: color }}></div>
      <div className="bar9" style={{ background: color }}></div>
      <div className="bar10" style={{ background: color }}></div>
      <div className="bar11" style={{ background: color }}></div>
      <div className="bar12" style={{ background: color }}></div>
    </div>
  );
};

export default SpinnerLoader;
