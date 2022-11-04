import React from 'react';
import ContainerBox from '../ContainerBox/ContainerBox';
import './Header.modules.css';

interface menuItem {
  icon: string;
  label: string;
}

const items: Array<menuItem> = [
  {
    icon: '',
    label: '',
  },
];

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  navIcon: string;
  menuItems: Array<menuItem>;
}

const Header: React.FC<HeaderProps> = ({
  title = 'EquiTek',
  navIcon,
  menuItems = items,
}) => {
  return (
    <nav className="navbar">
      <h3>{title}</h3>
    </nav>
  );
};

export default Header;
