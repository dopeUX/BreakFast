import React from 'react';
import Color from '../../Colors.types';
import './ContainerBox.modules.css';

export interface ContainerBoxProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: 'full' | 'content' | string;
  border?: boolean;
  borderColor?: Color;
  rounded?: boolean;
  shadow?: boolean;
  styles?: React.CSSProperties;
}

const ContainerBox: React.FC<ContainerBoxProps> = ({
  width = 'content',
  border = true,
  borderColor = '#54B435',
  rounded = true,
  shadow = true,
  styles,
  children,
  ...othersAttributes
}) => {
  return (
    <div
      className="container-box"
      style={{
        width: `${width === 'content' ? 'fit-content' : '90%'}`,
        border: `${border ? '3px' : '0px'} solid ${borderColor}`,
        boxShadow: `${
          shadow ? '0 0 20px 5px rgba(70, 70, 70, 0.43)' : '0 0 0 0'
        }`,
        borderRadius: `${rounded ? '1rem' : '0'}`,
        ...styles,
      }}
      {...othersAttributes}
    >
      {children || (
        <p className="container-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      )}
    </div>
  );
};

export default ContainerBox;
