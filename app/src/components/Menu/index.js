import React from 'react';
import Name_Logo from "../../assets/images/Name_Logo.png";
import { MenuBar, Logo, ImageLogo } from './styles.js';


export default function Menu({children, background}) {
    return (
        <MenuBar background={background}>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo" />
            </Logo>
            {children}
        </MenuBar>
    );
}