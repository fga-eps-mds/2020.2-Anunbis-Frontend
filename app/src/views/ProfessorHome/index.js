import React from 'react';
import Feed from '../../components/Feed';
import btnOptions from '../../assets/images/Btn_options.png';
import {
  Container,
  ContainerPost,
  ImageOptions,
  ContainerOptions,
  ContainerHeader,
  BtnHomeProfessor,
  Home,
  LoadingBox,
  DisciplinePostsStyle,
} from './styles';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import { getPosts } from '../../services/Posts';
import Graphic from '../../components/Statistics';

const DisciplineContent = ({ discipline }) => {
  const [boxPost, setBoxPost] = React.useState(false);
  const [rotate, setRotate] = React.useState('');

  function handleSetBoxPost() {
    setRotate(!boxPost ? '90deg' : '');
    setBoxPost(!boxPost);
  }

  return (
    <ContainerPost>
      <DisciplineOptions onClick={handleSetBoxPost}>
        <ImageOptions src={btnOptions} rotate={rotate} />
        {`[${discipline.discipline_code}] ${discipline.name}`}
      </DisciplineOptions>
      {boxPost && <DisciplinePosts discipline={discipline} />}
    </ContainerPost>
  );
};

const DisciplineOptions = ({ children, onClick }) => (
  <ContainerOptions onClick={() => onClick()}>{children}</ContainerOptions>
);

const DisciplinePosts = ({ discipline }) => (
  <DisciplinePostsStyle>
    <ContainerHeader>
      <Feed.Header
        professor={discipline}
        feedbacks={discipline.feedbacks}
        canAvaliate={false}
      />
    </ContainerHeader>
    <Feed.PostsBox posts={discipline.posts} canReport />
  </DisciplinePostsStyle>
);

function sortPostsByDiscipline(posts) {
  const disciplines = {};
  const arrayFeedbacks = {};
  if (Object.keys(posts).length !== 0) {
    posts.forEach((postKey) => {
      if (disciplines[postKey.discipline.discipline_code] === undefined) {
        disciplines[postKey.discipline.discipline_code] = {
          feedbacks: {},
          posts: [],
          discipline_code: postKey.discipline.discipline_code,
          name: postKey.discipline.name,
        };
      }
      disciplines[postKey.discipline.discipline_code].posts.push(postKey);
    });
    const accumulatorInicial = {
      rating: 0,
      didactic: 0,
      metod: 0,
      avaliations: 0,
      disponibility: 0,
    };
    Object.keys(disciplines).forEach((disciplineCode) => {
      arrayFeedbacks[disciplineCode] = disciplines[disciplineCode].posts.reduce(
        (acumulador, valorAtual) => ({
          rating: acumulador.rating + valorAtual.rating,
          didactic: acumulador.didactic + valorAtual.didactic,
          metod: acumulador.metod + valorAtual.metod,
          avaliations: acumulador.avaliations + valorAtual.avaliations,
          disponibility: acumulador.disponibility + valorAtual.disponibility,
        }),
        accumulatorInicial,
      );
      disciplines[disciplineCode].feedbacks = {
        rating:
          arrayFeedbacks[disciplineCode].rating /
          disciplines[disciplineCode].posts.length,
        didactic:
          arrayFeedbacks[disciplineCode].didactic /
          disciplines[disciplineCode].posts.length,
        metod:
          arrayFeedbacks[disciplineCode].metod /
          disciplines[disciplineCode].posts.length,
        avaliations:
          arrayFeedbacks[disciplineCode].avaliations /
          disciplines[disciplineCode].posts.length,
        disponibility:
          arrayFeedbacks[disciplineCode].disponibility /
          disciplines[disciplineCode].posts.length,
      };
    });
  }
  return disciplines;
}

export default function ProfessorHome() {
  const [isStatistics, setIsStatistics] = React.useState(false);
  const [disciplines, setDisciplines] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPosts((post) => {
      setDisciplines(sortPostsByDiscipline(post));
      setTimeout(() => setLoading(false), 500);
    });
  }, []);
  function OptionsProfessorHome() {
    return (
      <BtnHomeProfessor>
        <Button
          text="AVALIAÇÕES"
          backColor="var(--yellow)"
          padding="15px 40px"
          radius="20px"
          onClick={() => setIsStatistics(false)}
        />
        <Button
          text="ESTATÍSTICA"
          backColor="var(--yellow)"
          padding="15px 40px"
          radius="20px"
          onClick={() => setIsStatistics(true)}
        />
      </BtnHomeProfessor>
    );
  }

  return (
    <Home>
      <OptionsProfessorHome />
      {isStatistics && (
        <Feed title="Estatística">
          {Object.keys(disciplines).length === 0 && !loading ? (
            <Container>Sem avaliações ainda</Container>
          ) : (
            <Graphic />
          )}
        </Feed>
      )}
      {!isStatistics && (
        <Feed title="Avaliações sobre você">
          {Object.keys(disciplines).length === 0 && !loading ? (
            <Container>Sem avaliações ainda</Container>
          ) : (
            <Container backColor="#FFD54F">
              {!loading &&
                Object.keys(disciplines).map((dis) => (
                  <DisciplineContent key={dis} discipline={disciplines[dis]} />
                ))}
              {loading && (
                <LoadingBox>
                  <Loading />
                </LoadingBox>
              )}
            </Container>
          )}
        </Feed>
      )}
    </Home>
  );
}
