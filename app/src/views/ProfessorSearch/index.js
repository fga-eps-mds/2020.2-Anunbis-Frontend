import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import api from '../../services/Api';
import Loading from '../../components/Loading';
import Select from '../../components/Select';
import {
  Container,
  FoundDiv,
  Img,
  FoundHeader,
  Name,
  Discipline,
  LoadingBox,
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
  const { discipline_code } = professor.disciplines[disciplineSelected];
  return professor.posts.filter(
    (post) => post.discipline.discipline_code === discipline_code,
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
  const [order, setOrder] = useState(0);

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
    const { id_professor } = professors[selected.professor];
    const startRequest = new Date().getTime();

    api.get(`/professor/${id_professor}`).then((response) => {
      if (response.status === 200) {
        const requestDuration = startRequest - new Date().getTime();
        professors[selected.professor] = response.data;
        setProfessors(professors);
        setTimeout(
          () => {
            setLoading(false);
          },
          requestDuration > 500 ? 0 : 500 - requestDuration,
        );
      }
    });
  }, [newAvaliationState, selected, order]);

  React.useEffect(() => {
    api
      .get(`/professor/${professorName}`)
      .then((response) => {
        if (response.status === 200) {
          setProfessors(response.data);
          handleSetSelected(0, -1);
        }
      })
      .catch(() => {
        setProfessors([]);
      });
  }, [professorName]);

  function orderPop(post1, post2){
    if(post1?.feedbacks.agrees > post2?.feedbacks.agrees) return -1;
    if(post1?.feedbacks.agrees < post2?.feedbacks.agrees) return 1;
    return 0;
  }

  function orderDate(post1, post2){
    if(post1?.post_date > post2?.post_date) return -1;
    if(post1?.post_date < post2?.post_date) return 1;
    return 0;
  }

  function orderHRate(post1, post2){
    const rating1 = post1?.didactic +
    post1?.metod +
    post1?.avaliations +
    post1?.disponibility / 4;

    const rating2 = post2?.didactic +
    post2?.metod +
    post2?.avaliations +
    post2?.disponibility / 4;

    if(rating1 > rating2) return -1;
    if(rating1 < rating2) return 1;
    return 0;
  }

  function orderLRate(post1, post2){
    const rating1 = post1?.didactic +
    post1?.metod +
    post1?.avaliations +
    post1?.disponibility / 4;

    const rating2 = post2?.didactic +
    post2?.metod +
    post2?.avaliations +
    post2?.disponibility / 4;

    if(rating1 < rating2) return -1;
    if(rating1 > rating2) return 1;
    return 0;
  }

  const orders = [
    { fun: orderPop, id: 'pop', name: 'Mais popular', selected: true },
    { fun: orderDate, id: 'date', name: 'Data de Envio' },
    { fun: orderHRate, id: 'hRate', name: 'Maior Nota Geral' },
    { fun: orderLRate, id: 'lRate', name: 'Menor Nota Geral' }
  ];

  return (
    <Container hasProfessors={professors.length > 0}>
      {professors.length > 0 && (
        <Feed
          title="Professores"
          width="210px"
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
        title={professor ? `${professor.name}` : 'Sem Resultados'}
        radius="0px 0px 10px 10px"
      >
        <Feed.Header
          professor={professor}
          feedbacks={feedbacks}
          canAvaliate={Users.STUDENT.isAuthenticated()}
          onNewAvaliation={() => setNewAvaliationState(!newAvaliationState)}
        />
        {professors.length > 0 && (
          <Feed.Title backColor="var(--cian)">
            {posts.length === 0 && !loading
              ? 'Sem Avaliações Ainda'
              : 'Avaliações'}
          </Feed.Title>
        )}
        {posts.length === 0
              ? ''
              : <Select
              id="orders"
              backColor="var(--transparent)"
              text="Selecione um Ordenação"
              options={orders}
              onChange={(e) => setOrder(e.target.selectedIndex - 1)}
              selected={1}
            />}
        
        {!loading && <Feed.PostsBox posts={posts.sort(orders[order].fun)} key={posts.length} />}
        {loading && professors.length > 0 && (
          <LoadingBox>
            <Loading />
          </LoadingBox>
        )}
      </Feed>
    </Container>
  );
}

export default ProfessorSearch;
