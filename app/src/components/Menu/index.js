import React from 'react';
import Name_Logo from "../../assets/images/Name_Logo.png";
import Input from '../Input';
import { useHistory } from "react-router-dom";
import Button from '../Button';
import MenuOptions from '../MenuOptions';
import {logOut, whoAuthenticated} from '../../services/Auth';
import { MenuBar, Logo, ImageLogo, ProfessorSearchStyle, BtnEdition, Container } from './styles.js';

function ProfessorSearch({ history }) {
    const [isValid, setIsValid] = React.useState(false);
    const onSubmit = (data) => {
        if (data.key === 'Enter' && isValid) {
            history.push("/user/professor/search/" + data.target.value.trim())
        }
    }
    const validate = (e) => {
        const value = e.target.value.trim();
        const isValid = value.length > 1 && value.length < 254;
        setIsValid(isValid);
    }
    return (<ProfessorSearchStyle isValid={isValid}><Input type="text" width="400px" text="Informe o nome do professor" onkeydown={onSubmit} onChange={validate} /></ProfessorSearchStyle>)
}

export default function Menu() {

    const history = useHistory();
    const [menuOptions, setMenuOptions] = React.useState("");

    function makeMenuOptions() {
        if (menuOptions === "") {
            return (setMenuOptions(
                <MenuOptions>
                    <Button type='button' backColor='#FFD54F' text='CONFIGURAR' padding='3px' onClick={() => {setMenuOptions(""); if(whoAuthenticated() == 'student') history.push('/user/profile')}}/>
                    <Button backColor='#FFD54F' text='SOBRE' padding='3px' onClick={() => console.log("sobre")} />
                    <Button backColor='#FFD54F' text='SAIR' padding='3px' onClick={() => { logOut(); history.push('/visitant/login') }} />
                </MenuOptions>
            ))
        } else {
            setMenuOptions("");
        }
    }

    return (
        <MenuBar>
            <Logo>
                <ImageLogo src={Name_Logo} alt="logo"></ImageLogo>
            </Logo>
            <ProfessorSearch history={history} />
            <Container>
                <BtnEdition text='ººº' padding='5px 5px' backColor='#212121' onClick={() => makeMenuOptions()} />
                {menuOptions}
            </Container>
        </MenuBar>
    );
}