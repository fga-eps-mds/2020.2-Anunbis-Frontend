import React from 'react';
import { BtnEdition, Container, End, Main, ProfessorSearchStyle } from './styles';
import Menu from '../Menu';
import Input from '../Input';
import Button from '../Button';
import {logOut } from '../../services/Auth';
import Users from '../../services/Users';
import { useHistory } from 'react-router';
import MenuOptions from '../MenuOptions';

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


export default function LayoutApp({ children }) {

    const history = useHistory();
    const [menuOptions, setMenuOptions] = React.useState("");

    function makeMenuOptions() {
        if (menuOptions === "") {
            return (setMenuOptions(
                <MenuOptions>
                    <Button type='button' backColor='#FFD54F' text='CONFIGURAR' padding='3px' onClick={() => {setMenuOptions(""); if(Users.STUDENT.isAuthenticated()) history.push('/user/profile')}}/>
                    <Button backColor='#FFD54F' text='SOBRE' padding='3px' onClick={() => console.log("sobre")} />
                    <Button backColor='#FFD54F' text='SAIR' padding='3px' onClick={() => { logOut(); history.push('/') }} />
                </MenuOptions>
            ))
        } else {
            setMenuOptions("");
        }
    }

    return (
        <Container>
            <Menu>
                <ProfessorSearch history={history} />
                <End>
                    <BtnEdition text='ººº' padding='0px' backColor='#212121' onClick={() => makeMenuOptions()} />
                    {menuOptions}
                </End>
            </Menu>
            <Main>
                {children}
            </Main>
        </Container>
    );
}