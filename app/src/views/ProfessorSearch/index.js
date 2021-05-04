import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../../components/Feed';
import api from '../../services/Api';
import Loading from '../../components/Loading';
import {
  Container, FoundDiv, Img, FoundHeader, Name, Discipline, LoadingBox,
} from './styles';
import Btn_options from '../../assets/images/Btn_options.png';
import Users from '../../services/Users';

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

  React.useEffect(() => {
    if (professors.length === 0) return;
    setLoading(true);
    const { id_professor } = professors[selected.professor];
    const startRequest = new Date().getTime();

    api.get(`/professor/${id_professor}`)
      .then((response) => {
        if (response.status === 200) {
          const requestDuration = startRequest - new Date().getTime();
          professors[selected.professor] = response.data;
          console.log(response.data);
          setProfessors(professors);
          setTimeout(() => {
            setLoading(false);
          }, (requestDuration) > 500 ? 0 : 500 - requestDuration);
        }
      });
  }, [newAvaliationState, selected]);

  React.useEffect(() => {
    api.get(`/professor/${professorName}`)
      .then((response) => {
        if (response.status === 200) {
          setProfessors(response.data);
          handleSetSelected(0, -1);
        }
      })
      .catch((error) => {
        setProfessors([]);
      });
  }, [professorName]);

  function handleSetSelected(indexProfessor, indexDiscipline) {
    setLoading(true);
    setSelected({
      professor: indexProfessor,
      discipline: indexDiscipline,
    });
  }

  return (
    <Container hasProfessors={professors.length > 0}>
      {
            professors.length > 0
            && (
            <Feed title="Professores" width="210px" radius="0px 0px 10px 10px" key={professors.length}>
              {professors.map((prof, index) => <ProfessorFound professor={prof} onClick={() => handleSetSelected(index, -1)} setSelectedDiscipline={(indexDiscpline) => handleSetSelected(index, indexDiscpline)} key={prof.id_professor} isSelected={index === selected.professor} />)}
            </Feed>
            )
        }

      <Feed title={professor ? `${professor.name}` : 'Sem Resultados'} radius="0px 0px 10px 10px">
        <Feed.Header professor={professor} feedbacks={feedbacks} canAvaliate={Users.STUDENT.isAuthenticated()} onNewAvaliation={() => setNewAvaliationState(!newAvaliationState)} />
        {professors.length > 0 && <Feed.Title backColor="#26A69A">{posts.length === 0 && !loading ? 'Sem Avaliações Ainda' : 'Avaliações'}</Feed.Title>}
        {!loading && <Feed.PostsBox posts={posts} key={posts.length} />}
        {loading && professors.length > 0 && <LoadingBox><Loading /></LoadingBox>}
      </Feed>
    </Container>
  );
}

const ProfessorFound = ({
  professor, onClick, isSelected, setSelectedDiscipline,
}) => {
  const [showDisciplines, setShowDisciplines] = useState(false);

  function onClickDiscipline(index) {
    onClick();
    setSelectedDiscipline(index);
  }

  return (
    <FoundDiv>
      <FoundHeader selected={isSelected}>
        <Img src={Btn_options} onClick={() => setShowDisciplines(!showDisciplines)} rotate={showDisciplines ? '90deg' : ''} />
        <Name onClick={onClick}>
          {professor.name}
        </Name>
      </FoundHeader>

      {showDisciplines && professor.disciplines.map((disci, index) => <Discipline onClick={() => onClickDiscipline(index)} key={disci.discipline_code}>{`[${disci.discipline_code}] ${disci.name}`}</Discipline>)}
    </FoundDiv>
  );
};

function getPosts(professor, disciplineSelected) {
  if (professor && professor.posts) {
    return disciplineSelected < 0 ? professor.posts : getPostsByDiscipline(professor, disciplineSelected);
  } return [];
}

function getPostsByDiscipline(professor, disciplineSelected) {
  const { discipline_code } = professor.disciplines[disciplineSelected];
  return professor.posts.filter((post) => post.discipline.discipline_code === discipline_code);
}

function getFeedbacks(professor, posts, disciplineSelected) {
  if (disciplineSelected < 0) return professor;
  if (posts.length === 0) return;

  const rating = posts.reduce((accumulator, p) => accumulator + p.rating, 0) / posts.length;
  return { rating };
}

export default ProfessorSearch;
