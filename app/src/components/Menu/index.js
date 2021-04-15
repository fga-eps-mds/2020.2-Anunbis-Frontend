import React from 'react';
import Name_Logo from "../../assets/images/Name_Logo.png";
import Input from '../Input';
import {useHistory} from "react-router-dom";
import Button from '../Button';
import MenuOptions from '../MenuOptions';
import {logOut} from '../../services/Auth';
import { MenuBar, Logo, ImageLogo, ProfessorSearchStyle, BtnEdition, Container } from './styles.js';

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
        if(menuOptions===""){
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