import React from 'react';
import ContainerBox from '../ContainerBox/ContainerBox';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return <ContainerBox></ContainerBox>;
};

export default Navbar;
