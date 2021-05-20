import React from 'react';
import { useHistory } from 'react-router';
import NameLogo from '../../assets/images/Name_Logo.png';
import { MenuBar, Logo, ImageLogo } from './styles';
import Users from '../../services/Users';

export default function Menu({ children, background }) {
  const history = useHistory();
  return (
    <MenuBar background={background}>
      <Logo>
        <ImageLogo
          src={NameLogo}
          alt="logo"
          onClick={() => history.push(Users.whoAuthenticated().homePath)}
        />
      </Logo>
      {children}
    </MenuBar>
  );
}
