import React from 'react';
import Name_Logo from "../../assets/Name_Logo.png";
import Input from '../Input';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';
import Button from '../Button'
import MenuOptions from '../MenuOptions';
import {logOut} from '../../services/authentication'

function ProfessorSearch ({history}) {
    const onSubmit = (data) => {
        if(data.key === 'Enter' && data.target.value.trim().length > 0)
            history.push("/professor/search/" + data.target.value.trim())
    }
    return (<ProfessorSearchStyle><Input type="text" width="400px" text="Informe o nome do professor" onkeydown={onSubmit}/></ProfessorSearchStyle>)
} 

export default function Menu() {

    const history = useHistory();
    const [menuOptions, setMenuOptions] = React.useState("");

    function makeMenuOptions(){
        if(menuOptions==""){
            return (setMenuOptions(
                <MenuOptions>
                    <Button type='button' backColor='#FFD54F' text='CONFIGURAR' padding='3px' onClick={() => {setMenuOptions(""); history.push('/profile')}}/>
                    <Button backColor='#FFD54F' text='SOBRE' padding='3px' onClick={() => console.log("sobre")} />
                    <Button backColor='#FFD54F' text='SAIR' padding='3px' onClick={() => {logOut(); history.push('/user/login')}} />
                </MenuOptions>
            ))
        }else{
            setMenuOptions("");
        }
    }

    return (
        <MenuBar>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo"></ImageLogo>
            </Logo>
            <ProfessorSearch history={history}/>
            <Container>
                <BtnEdition text='ººº' padding='5px 5px' backColor='#212121' onClick={() => makeMenuOptions()} />
                {menuOptions}
            </Container>
        </MenuBar>
    );
}

const MenuBar = styled.div`
    background-color: #212121;
    display: flex;
    height: 40px;
`

const Logo = styled.div`
    width: 280px;
`

const ImageLogo = styled.img`
        max-width: 190px;
        display: inline-block;
`

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
`

const BtnEdition = styled (Button)`
    margin-top: 10px;
    letter-spacing: 1.5px;
    color: #FFD54F;
    border: none;
    box-shadow: none;
`
const Container = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    height: 2px;
    margin-left: auto;
    margin-inline-end: 50px;
    letter-spacing: 1.5px;
    color: #FFD54F;
    box-shadow: none;
`