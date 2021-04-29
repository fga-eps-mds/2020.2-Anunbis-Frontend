import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import api from '../../services/Api';
import Loading from '../../components/Loading';
import { Container, FoundDiv, Img, FoundHeader, Name, Discipline, LoadingBox } from './styles'
import Btn_options from '../../assets/images/Btn_options.png'

function ProfessorSearch() {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([]);
    const [professorSelected, setProfessorSelected] = useState(-1);
    const [newAvaliationState, setNewAvaliationState] = useState(false);
    const [disciplineSelected, setDisciplineSelected] = useState(-1)
    const professor = professors[professorSelected];
    const posts = getPosts(professor, disciplineSelected)
    const feedbacks = getFeedbacks(professor, posts, disciplineSelected)
    const [loading, setLoading] = useState(true)


    React.useEffect(() => {
        if (professors.length === 0) return;
        const id_professor = professors[professorSelected].id_professor;
        const start = new Date().getTime();

        setLoading(true)
        api.get("/professor/" + id_professor)
            .then(response => {
                if (response.status === 200) {
                    const requestDuration = start - new Date().getTime();
                    professors[professorSelected] = response.data;
                    setProfessors(professors);
                    setTimeout(() => {
                        setLoading(false)
                    }, (requestDuration) > 500 ? 0 : 500 - requestDuration);
                }
            })
    }, [newAvaliationState, professorSelected, disciplineSelected])

    React.useEffect(() => {
        api.get("/professor/" + professorName)
            .then(response => {
                if (response.status === 200) {
                    setProfessors(response.data);
                    setProfessorSelected(0)
                }
            })
    }, []);

    function onClickProfessor(index) {
        setProfessorSelected(index)
        setDisciplineSelected(-1)
    }

    return (<Container hasProfessors={professors.length > 0}>
        {professors.length > 0 && <Feed title="Professores" width="210px" radius="0px 0px 10px 10px">
            {professors.map((prof, index) => <ProfessorFound professor={prof} onClick={() => onClickProfessor(index)} setDisciplineSelected={setDisciplineSelected} key={prof.id_professor} selected={index === professorSelected} />)}
        </Feed>}

        <Feed title={professors[professorSelected] ? `${professors[professorSelected].name}` : "Sem Resultados"} radius="0px 0px 10px 10px">
            <Feed.Header professor={professor} feedbacks={feedbacks} canAvaliate={true} onNewAvaliation={() => setNewAvaliationState(!newAvaliationState)} />
            <Feed.Title backColor="#26A69A" >{posts.length === 0 && !loading ? "Sem Avaliações Ainda" : "Avaliações"}</Feed.Title>
            {!loading && <Feed.PostsBox posts={posts} />}
            {loading && <LoadingBox><Loading /></LoadingBox>}
        </Feed>
    </Container>
    );
}

const ProfessorFound = ({ professor, onClick, selected, setDisciplineSelected }) => {
    const [showDisciplines, setShowDisciplines] = useState(false);

    function onClickDiscipline(index) {
        onClick()
        setDisciplineSelected(index)
    }

    return (
        <FoundDiv>
            <FoundHeader selected={selected}>
                <Img src={Btn_options} onClick={() => setShowDisciplines(!showDisciplines)} rotate={showDisciplines ? "90deg" : ""} />
                <Name onClick={onClick}>
                    {professor.name}
                </Name>
            </FoundHeader>

            {showDisciplines && professor.disciplines.map((disci, index) => <Discipline onClick={() => onClickDiscipline(index)} key={disci.discipline_code}>{`[${disci.discipline_code}] ${disci.name}`}</Discipline>)}
        </FoundDiv>
    )
}


function getPosts(professor, disciplineSelected) {
    if (professor && professor.posts) {
        return disciplineSelected < 0 ? professor.posts : getPostsByDiscipline(professor, disciplineSelected);
    } else
        return [];
}

function getPostsByDiscipline(professor, disciplineSelected) {
    const discipline_code = professor.disciplines[disciplineSelected].discipline_code;
    return professor.posts.filter(post => post.discipline.discipline_code === discipline_code);
}

function getFeedbacks(professor, posts, disciplineSelected) {
    if (disciplineSelected < 0) return professor;
    if (posts.length === 0) return;

    const rating = posts.reduce((accumulator, p) => accumulator + p.rating, 0) / posts.length;
    return { 'rating': rating }
}

export default ProfessorSearch;