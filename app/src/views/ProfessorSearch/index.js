import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import api from '../../services/Api';
import Loading from '../../components/Loading';
import {
  Container,
  FoundDiv,
  Img,
  FoundHeader,
  Name,
  Discipline,
  LoadingBox,
  NotFound,
} from './styles';
import BtnOptions from '../../assets/images/Btn_options.png';
import Users from '../../services/Users';

const ProfessorFound = ({
  professor,
  onClick,
  isSelected,
  setSelectedDiscipline,
}) => {
  const [showDisciplines, setShowDisciplines] = useState(false);

  function onClickDiscipline(index) {
    onClick();
    setSelectedDiscipline(index);
  }

  return (
    <FoundDiv>
      <FoundHeader selected={isSelected}>
        <Img
          src={BtnOptions}
          onClick={() => setShowDisciplines(!showDisciplines)}
          rotate={showDisciplines ? '90deg' : ''}
          data-testid="img-1"
        />
        <Name onClick={onClick}>{professor.name}</Name>
      </FoundHeader>

      {showDisciplines &&
        professor.disciplines.map((disci, index) => (
          <Discipline
            onClick={() => onClickDiscipline(index)}
            key={disci.discipline_code}
          >
            {`[${disci.discipline_code}] ${disci.name}`}
          </Discipline>
        ))}
    </FoundDiv>
  );
};

function getPostsByDiscipline(professor, disciplineSelected) {
  const { discipline_code } = professor.disciplines[disciplineSelected]; // eslint-disable-line
  return professor.posts.filter(
    (post) => post?.discipline.discipline_code === discipline_code, // eslint-disable-line
  );
}

function getPosts(professor, disciplineSelected) {
  if (professor && professor.posts) {
    return disciplineSelected < 0
      ? professor.posts
      : getPostsByDiscipline(professor, disciplineSelected);
  }
  return [];
}

function getFeedbacks(professor, posts, disciplineSelected) {
  if (disciplineSelected < 0) return professor;
  if (posts.length === 0) return -1;

  const rates = {
    rating: professor.rating,
    didactic: professor.didactic,
    metod: professor.metod,
    avaliations: professor.avaliations,
    disponibility: professor.disponibility,
  };

  return rates;
}

function ProfessorSearch() {
  const { professorName } = useParams();
  const [professors, setProfessors] = useState([]);
  const [selected, setSelected] = useState({
    professor: 0,
    discipline: -1,
  });
  const [newAvaliationState, setNewAvaliationState] = useState(false);
  const professor = professors[selected.professor];
  const posts = getPosts(professor, selected.discipline);
  const feedbacks = getFeedbacks(professor, posts, selected.discipline);
  const [loading, setLoading] = useState(true);

  function handleSetSelected(indexProfessor, indexDiscipline) {
    setLoading(true);
    setSelected({
      professor: indexProfessor,
      discipline: indexDiscipline,
    });
  }

  React.useEffect(() => {
    if (professors.length === 0) return;
    setLoading(true);
    const { id_professor } = professors[selected.professor]; // eslint-disable-line
    const startRequest = new Date().getTime();

    api.get(`/professor/${id_professor}`).then((response) => {
      // eslint-disable-line
      const requestDuration = startRequest - new Date().getTime();
      if (response.status === 200) {
        professors[selected.professor] = response.data;
        setProfessors(professors);
      }
      setTimeout(
        () => {
          setLoading(false);
        },
        requestDuration > 500 ? 0 : 500 - requestDuration,
      );
    });
  }, [professors, newAvaliationState, selected]);

  React.useEffect(() => {
    api
      .get(`/professor/${professorName}`)
      .then((response) => {
        if (response.status === 200) {
          setProfessors(response.data);
          handleSetSelected(0, -1);
        }
        if (response.data.length === 0) setLoading(false);
      })
      .catch(() => {
        setProfessors([]);
      });
  }, [professorName]);

  return (
    <Container hasProfessors={professors.length > 0}>
      {professors.length > 0 && (
        <Feed
          title="Professores"
          width="min(20vw, 210px)"
          radius="0px 0px 10px 10px"
          key={professors.length}
        >
          {professors.map((prof, index) => (
            <ProfessorFound
              professor={prof}
              onClick={() => handleSetSelected(index, -1)}
              setSelectedDiscipline={(indexDiscipline) =>
                handleSetSelected(index, indexDiscipline)
              }
              key={prof.id_professor}
              isSelected={index === selected.professor}
            />
          ))}
        </Feed>
      )}
      <Feed
        title={professor ? `${professor.name}` : 'Pesquisa de professor'}
        radius="0px 0px 10px 10px"
      >
        {professors.length > 0 && (
          <Feed.Header
            professor={professor}
            feedbacks={feedbacks}
            canAvaliate={Users.STUDENT.isAuthenticated()}
            onNewAvaliation={() => setNewAvaliationState(!newAvaliationState)}
            backColor="#FFFDE7"
            border="1px solid var(--black)"
          />
        )}
        {professors.length === 0 && !loading && (
          <NotFound>
            <div>Nenhum Professor Encontrado!</div>
          </NotFound>
        )}
        {professors.length > 0 && (
          <Feed.Title zIndex="0">
            {posts.length === 0 && !loading
              ? 'Sem Avaliações Ainda'
              : 'Avaliações'}
          </Feed.Title>
        )}
        {!loading && <Feed.PostsBox posts={posts} key={posts.length} />}
        {loading && (
          <LoadingBox data-testid="load-1">
            <Loading />
          </LoadingBox>
        )}
      </Feed>
    </Container>
  );
}

export default ProfessorSearch;
