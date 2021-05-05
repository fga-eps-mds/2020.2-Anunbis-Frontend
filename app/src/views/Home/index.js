import React, { useEffect, useState } from 'react';
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
import {
  Container,
  Main,
  Middle,
  BtnEdition,
  Content,
  Image,
  Text,
  Footer,
  CardContent,
  LinkMenu,
} from './styles';
import HeadIcon from '../../components/HeadIcon';

const useElementOnScreen = (options, isVisibleDefault) => {
  const containerRef = React.useRef(null);
  const [isVisible, setIsVisible] = useState(isVisibleDefault || false);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    const cRc = containerRef.current;
    if (cRc) observer.observe(cRc);

    return () => {
      if (cRc) observer.unobserve(cRc);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

const ObserveableComponent = ({ children, onVisible, isVisibleDefault }) => {
  const [containerRef, isVisible] = useElementOnScreen(
    {
      root: null,
      rootMargin: '20px',
      threshold: 0.65,
    },
    isVisibleDefault,
  );

  if (isVisible) {
    setTimeout(() => {
      onVisible();
    }, 100);
  }

  return (
    <span ref={containerRef} style={{ height: '100%', width: '100%' }}>
      {children}
    </span>
  );
};

function Home() {
  const history = useHistory();
  const [whatSelected, setWhatSelected] = useState(0);

  return (
    <Container>
      <Menu background="var(--transparent)">
        <Middle>
          <div>
            <LinkMenu href="#begin" isSelected={whatSelected === 0}>
              Inicio
            </LinkMenu>
            <LinkMenu href="#howItWorks" isSelected={whatSelected === 1}>
              Como Funciona?
            </LinkMenu>
            <LinkMenu href="#team" isSelected={whatSelected === 2}>
              Equipe
            </LinkMenu>
            <LinkMenu href="#contact" isSelected={whatSelected === 3}>
              Contato
            </LinkMenu>
          </div>
        </Middle>
        <End height="22,5px">
          <BtnEdition
            text="Login"
            onClick={() => history.push('visitant/Authentication')}
          />
        </End>
      </Menu>
      <Main>
        <ObserveableComponent
          onVisible={() => setWhatSelected(0)}
          isVisibleDefault
        >
          <Begin isVisible={whatSelected === 0} />
        </ObserveableComponent>
        <ObserveableComponent onVisible={() => setWhatSelected(1)}>
          <Puzzle isVisible={whatSelected === 1} />
        </ObserveableComponent>
        <ObserveableComponent onVisible={() => setWhatSelected(2)}>
          <Team isVisible={whatSelected === 2} />
        </ObserveableComponent>
        <ObserveableComponent onVisible={() => setWhatSelected(3)}>
          <Contact isVisible={whatSelected === 3} />
        </ObserveableComponent>
        <Footer>
          <p>&#127279; Anunbis 2021</p>
        </Footer>
      </Main>
    </Container>
  );
}

const Begin = ({ isVisible }) => {
  const history = useHistory();

  return (
    <Content display="flex" id="begin">
      <Text isVisible={isVisible}>
        <label>Onde a união faz a força</label>
        <p>
          Alunos trocando experiências e opiniões sobre disciplinas e
          professores para manter a comunidade acadêmica da Universidade de
          Brasilia unida e bem informada.
        </p>
        <BtnEdition
          text="Cadastre-se"
          width="160px"
          margin="20px 0 0 0"
          shadow="2px 2px 2px rgba(0,0,0, 100%)"
          onClick={() => history.push('visitant/Authentication/')}
        />
      </Text>
      <Image height="80%" src={LogoImg} alt="Logo" isVisible={isVisible} />
    </Content>
  );
};

const Puzzle = ({ isVisible }) => (
  <Content display="flex" id="howItWorks">
    <Text isVisible={isVisible}>
      <label>Como funciona?</label>
      <p>
        Os alunos podem escrever avaliações públicas sobre os professores
        optando por manter ou não o anonimato. Os demais alunos podem ver as
        avaliações, concordar ou discordar. Todas as notas e comentários são de
        livre acesso para todos os usuários, incluindo professores.
      </p>
    </Text>
    <Image height="80%" src={PuzzleImg} alt="Puzzle" isVisible={isVisible} />
  </Content>
);

const Team = ({ isVisible }) => (
  <Content direction="column">
    <Content display="flex" id="team" height="50%">
      <Text isVisible={isVisible}>
        <label>Equipe</label>
        <p>
          O Anunbis é um projeto criado e desenvolvido por alunos de Métodos de
          Desenvolvimento de Software (MDS) da Faculdade do Gama (FGA), da
          Universidade de Brasília (UnB).
        </p>
      </Text>
      <Image
        height="75%"
        src={TeamWorkImg}
        alt="Team"
        margin="0px"
        isVisible={isVisible}
      />
    </Content>
    <Content display="flex" height="100px">
      <Text isVisible={isVisible}>
        <label>Membros</label>
      </Text>
    </Content>
    <CardContent isVisible={isVisible}>
      <HeadIcon
        imgSrc={Rafael}
        name="Rafael Cleydson"
        linkGithub="https://github.com/RcleydsonR"
      />
      <HeadIcon
        imgSrc={Rodrigo}
        name="Rodrigo Balbino"
        linkGithub="https://github.com/Balbinoo"
      />
      <HeadIcon
        imgSrc={Roberto}
        name="Roberto Santana"
        linkGithub="https://github.com/mangabeiras"
      />
      <HeadIcon
        imgSrc={Eduardo}
        name="Eduardo Afonso"
        linkGithub="https://github.com/oEduardoAfonso"
      />
      <HeadIcon
        imgSrc={Thiago}
        name="Thiago Paiva"
        linkGithub="https://github.com/thiagohdaqw"
      />
      <HeadIcon
        imgSrc={Victor}
        name="Victor Hugo"
        linkGithub="https://github.com/victorhugo21"
      />
    </CardContent>
  </Content>
);

const Contact = ({ isVisible }) => (
  <Content display="flex" id="contact">
    <Text isVisible={isVisible}>
      <label>Contate-nos</label>
      <p>
        Deseja elogiar, sugerir mudanças, ou contribuir? Entre em contato
        conosco através do email ou acesse nosso repositório no github.
      </p>
      <a href="mailto:anunbis.team@gmail.com">anunbis.team@gmail.com</a>
      <a
        href="https://github.com/fga-eps-mds/2020.2-Anunbis"
        target="_blank"
        rel="noreferrer"
      >
        Repositório Back-end
      </a>
      <a
        href="https://github.com/fga-eps-mds/2020.2-Anunbis-FrontEnd"
        target="_blank"
        rel="noreferrer"
      >
        Repositório Front-end
      </a>
    </Text>
    <Image
      height="50%"
      src={CommunicationImg}
      alt="Img"
      isVisible={isVisible}
    />
  </Content>
);

export default Home;
