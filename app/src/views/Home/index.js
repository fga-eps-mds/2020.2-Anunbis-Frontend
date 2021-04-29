import React from 'react';
import { useHistory } from 'react-router';
import { End } from '../../components/LayoutApp/styles';
import Menu from '../../components/Menu';
import Logo from '../../assets/images/LogoHome.svg';
import PuzzleImg from '../../assets/images/puzzle.svg';
import { Container, Main, Middle, BtnEdition, Conteiner, Image, Text, Footer } from './styles';


export default function Home() {

    const history = useHistory();

    const Begin = () => {
        return (
            <Conteiner display='flex'>
                <Text>
                    <label>
                        Onde a união faz a força
                    </label>
                    <p>
                        Alunos trocando experiências e opiniões sobre disciplinas e professores para manter
                        a comunidade acadêmica da Universidade de Brasilia unida e bem informada.
                    </p>
                    <BtnEdition text='Cadastre-se' width='160px' margin="20px 0 0 0" onClick={() => history.push('user/student/')} />
                </Text>
                <Image height='80%' src={Logo} alt="Logo" />
            </Conteiner>
        );
    }

    const Puzzle = () => {
        return (
            <Conteiner display='flex'>
                <Text>
                    <label>
                        Como funciona?
                    </label>
                    <p>
                        Os alunos podem escrever avaliações públicas sobre os professores optando por manter ou não o anonimato. Os demais alunos podem ver as avaliações, concordar ou discordar.
                        Todas as notas e comentários são de livre acesso para todos os usuários, incluindo professores.
                    </p>
                </Text>
                <Image height='80%' src={PuzzleImg} alt="Logo" />
            </Conteiner>
        );
    }

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
            <Main>
                <Begin />
                <Puzzle />
                <Footer>
                    <p>&#127279; Anunbis 2021</p>
                </Footer>
            </Main>
        </Container>
    );
}