import React from 'react';
import Name_Logo from "../../assets/Name_Logo.png";
import Input from '../Input';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import Button from '../Button'

function ProfessorSearch ({history}) {
    const onSubmit = (data) => {
        if(data.key === 'Enter' && data.target.value.trim().length > 0)
            history.push("/professor/search/" + data.target.value.trim())
    }
    return (<ProfessorSearchStyle><Input type="text" width="400px" text="Informe o nome do professor" onkeydown={onSubmit}/></ProfessorSearchStyle>)
}

export default function Menu() {

    const history = useHistory();

    return (
        <MenuBar>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo"></ImageLogo>
            </Logo>
            <ProfessorSearch history={history}/>
            <BtnEdition text='ººº' padding='5px 5px' backColor='#212121' onClick={() => history.push("/profile")}/>
        </MenuBar>
    );
}


const MenuBar = styled.div`
    background-color: #212121;
    display: flex;
    height: 40px;
`;

const Logo = styled.div`
    width: 280px;
`;

const ImageLogo = styled.img`
        max-width: 190px;
        display: inline-block;
`;

const ProfessorSearchStyle = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 400px;
    Input {
        
        color: #FFFDE7;
        border-bottom: 1px solid #FFFDE7;
        margin: 0px;
        
    }

    input {
            height: 18px;
    }
    input::-webkit-input-placeholder  {
        height: 30px;
    color: rgba(255, 255, 255, 0.603);
}
`;

const BtnEdition = styled (Button)`
    margin-left: auto;
    letter-spacing: 1.5px;
    color: #FFD54F;
    border: none;
    box-shadow: none;
    display: flex;
    align-self: flex-end;
`