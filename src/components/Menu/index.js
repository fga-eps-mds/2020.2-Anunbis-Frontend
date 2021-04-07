import React from 'react';
import './index.css'
import Name_Logo from "../../assets/Name_Logo.png";
import Input from '../Input';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

const ProfessorSearch = () =>{
    const history =  useHistory()

    const onSubmit = (data) => {
        if(data.key === 'Enter' && data.target.value.trim().length > 0)
           history.push("/professor/search/" + data.target.value.trim()) 
    }

    return (<ProfessorSearchStyle><Input type="text" width="400px" text="Informe o nome do professor" onkeydown={onSubmit}/></ProfessorSearchStyle>)
}


export default function Menu() {
    return (
        <MenuBar>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo"></ImageLogo>
            </Logo>
            <ProfessorSearch />
        </MenuBar>
    );
}


const MenuBar = styled.div`
    background-color: #212121;
    display: flex;
    height: 40px;
    position: absolute;
    width: 100vw;
`;

const Logo = styled.div`
    width: 280px;
`;

const ImageLogo = styled.img`
        max-width: 190px;
        display: inline-block;
`;

const ProfessorSearchStyle = styled.div`
    display: inline-block;
    height: 40px;
    width: 400px;
    Input {
        
        color: #FFFDE7;
        border-bottom: 1px solid #FFFDE7;
    }
    input::-webkit-input-placeholder  {
        height: 30px;
    color: rgba(255, 255, 255, 0.603);
}
`;