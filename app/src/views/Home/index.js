import React from 'react';
import { useHistory } from 'react-router';
import { End } from '../../components/LayoutApp/styles';
import Menu from '../../components/Menu';
import { Container, Middle, BtnEdition} from './styles';


export default function Home() {

    const history = useHistory();

    return (
        <Container>
            <Menu background="var(--transparent)">
                <Middle>
                    <div>
                        <a href='/'>Inicio</a>
                        <a href='/'>Equipe</a>
                        <a href='/'>Contato</a>

                    </div>
                </Middle>
                <End height='22,5px'>
                    <BtnEdition text='Login' onClick={() => history.push('user/login')} />
                </End>
            </Menu>
        </Container>
    );
}