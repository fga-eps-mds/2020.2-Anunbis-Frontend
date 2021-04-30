import React from 'react';
import { useHistory } from 'react-router';
import { End } from '../../components/LayoutApp/styles';
import Menu from '../../components/Menu';
import LogoImg from '../../assets/images/LogoHome.svg';
import PuzzleImg from '../../assets/images/Puzzle.svg';
import CommunicationImg from '../../assets/images/Communication.svg';
import TeamWorkImg from '../../assets/images/Teamwork.svg';
import Rafael from '../../assets/images/Rafael.jpeg';
import Rodrigo from '../../assets/images/Rodrigo.jpeg';
import Roberto from '../../assets/images/Roberto.jpeg';
import Eduardo from '../../assets/images/Eduardo.jpeg';
import Thiago from '../../assets/images/Thiago.jpeg';
import Victor from '../../assets/images/Victor.jpeg';
import { Container, Main, Middle, BtnEdition, Content, Image, Text, Footer, CardContent } from './styles';
import HeadIcon from '../../components/HeadIcon';


export default function Home() {

    const history = useHistory();

    const Begin = () => {
        return (
            <Content display='flex' id="begin">
                <Text>
                    <label>
                        Onde a união faz a força
                    </label>
                    <p>
                        Alunos trocando experiências e opiniões sobre disciplinas e professores para manter
                        a comunidade acadêmica da Universidade de Brasilia unida e bem informada.
                    </p>
                    <BtnEdition text='Cadastre-se' width='160px' margin="20px 0 0 0" shadow="2px 2px 2px rgba(0,0,0, 100%)" onClick={() => history.push('user/student/')} />
                </Text>
                <Image height='80%' src={LogoImg} alt="Logo" />
            </Content>
        );
    }

    const Puzzle = () => {
        return (
            <Content display='flex' id="howItWorks">
                <Text>
                    <label>
                        Como funciona?
                    </label>
                    <p>
                        Os alunos podem escrever avaliações públicas sobre os professores optando por manter ou não o anonimato. Os demais alunos podem ver as avaliações, concordar ou discordar.
                        Todas as notas e comentários são de livre acesso para todos os usuários, incluindo professores.
                    </p>
                </Text>
                <Image height='80%' src={PuzzleImg} alt="Puzzle" />
            </Content>
        );
    }

    const Team = () => {
        return (<Content direction="column">
            <Content display='flex' id="team" height="50%">
                <Text>
                    <label>
                        Equipe
                    </label>
                    <p>
                        O Anunbis é um projeto criado e desenvolvido por alunos de Métodos de Desenvolvimento
                        de Software (MDS) da Faculdade do Gama (FGA), da Universidade de Brasília (UnB).
                    </p>
                </Text>
                <Image height='75%' src={TeamWorkImg} alt="Team" margin="0px" />
            </Content>
            <Content display='flex' height="100px">
                <Text>
                    <label>Membros</label></Text>
            </Content>
            <CardContent>
                <HeadIcon imgSrc={Rafael} name="Rafael Cleydson" linkGithub="https://github.com/RcleydsonR" />
                <HeadIcon imgSrc={Rodrigo} name="Rodrigo Balbino" linkGithub="https://github.com/Balbinoo" />
                <HeadIcon imgSrc={Roberto} name="Roberto Santana" linkGithub="https://github.com/mangabeiras" />
                <HeadIcon imgSrc={Eduardo} name="Eduardo Afonso" linkGithub="https://github.com/oEduardoAfonso" />
                <HeadIcon imgSrc={Thiago} name="Thiago Paiva" linkGithub="https://github.com/thiagohdaqw" />
                <HeadIcon imgSrc={Victor} name="Victor Hugo" linkGithub="https://github.com/victorhugo21" />
            </CardContent>
        </Content>
        );
    }

    const Contact = () => {
        return (
            <Content display='flex' id="contact">
                <Text>
                    <label>
                        Contate-nos
                    </label>
                    <p>
                        Deseja elogiar, sugerir mudanças, ou contribuir?
                        Entre em contato conosco através do email ou acesse nosso repositório no github.
                    </p>
                    <a target="_blank" href="mailto:anunbis.team@gmail.com">anunbis.team@gmail.com</a>
                    <a target="_blank" href="https://github.com/fga-eps-mds/2020.2-Anunbis">Repositório Back-end</a>
                    <a target="_blank" href="https://github.com/fga-eps-mds/2020.2-Anunbis-FrontEnd">Repositório Front-end</a>


                </Text>
                <Image height='50%' src={CommunicationImg} alt="Img" />
            </Content>
        )
    }

    return (
        <Container >
            <Menu background="var(--transparent)">
                <Middle>
                    <div>
                        <a href="#begin">Inicio</a>
                        <a href="#howItWorks">Como Funciona?</a>
                        <a href="#team">Equipe</a>
                        <a href="#contact">Contato</a>
                    </div>
                </Middle>
                <End height='22,5px'>
                    <BtnEdition text='Login' onClick={() => history.push('user/login')} />
                </End>
            </Menu>
            <Main>
                <Begin />
                <Puzzle />
                <Team />
                <Contact />
                <Footer>
                    <p>&#127279; Anunbis 2021</p>
                </Footer>
            </Main>
        </Container>
    );
}