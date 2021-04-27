import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import api from '../../services/Api';
import { Container } from './styles'

export default function ProfessorSearch() {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([]);
    const [indexProfessorSelected, setIndexProfessorSelected] = useState(0);
    const [newAvaliationState, setNewAvaliationState] = useState(false);
    const posts = professors[indexProfessorSelected] ? professors[indexProfessorSelected].posts : []

    React.useEffect(() => {
        api.get("/professor/" + professorName)
            .then(response => {
                if (response.status === 200) {
                    setProfessors(response.data);
                }
            })
    }, [professorName, newAvaliationState]);

    return (<Container>
        <Feed title="Professores Encontrados" width="210px" radius="0px 0px 10px 10px">
        </Feed>

        <Feed title={professors[indexProfessorSelected] ? `${professors[indexProfessorSelected].name}` : "Sem Resultados"}>
            <Feed.Header professor={professors[indexProfessorSelected]} canAvaliate={true} onNewAvaliation={() => setNewAvaliationState(!newAvaliationState)} />
            {posts.length > 0 && <><Feed.Title backColor="#26A69A">Avaliações</Feed.Title> <Feed.PostsBox posts={posts} /> </>}
        </Feed>
    </Container>
    );
}