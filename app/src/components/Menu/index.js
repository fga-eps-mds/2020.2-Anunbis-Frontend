import React from 'react';
import Name_Logo from "../../assets/images/Name_Logo.png";
import { MenuBar, Logo, ImageLogo } from './styles.js';
import Users from '../../services/Users'
import { useHistory } from 'react-router';

export default function Menu({children, background}) {
    const history = useHistory();
    return (
        <MenuBar background={background}>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo" onClick={() => history.push(Users.whoAuthenticated().homePath)}/>
            </Logo>
            {children}
        </MenuBar>
    );
}