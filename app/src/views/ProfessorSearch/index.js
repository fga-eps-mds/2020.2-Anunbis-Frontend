import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import ProfessorBox from '../../components/ProfessorBox';
import Avaliation from '../../components/Avaliation';
import api from '../../services/Api';
import Report from '../../components/Report';
import {Content, Conteiner, AvaliationProfBox} from './styles';

export default function ProfessorSearch() {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([]);
    const [boxPopup, setBoxPopup] = React.useState('');
    const [reload, setReload] = useState(false)

    React.useEffect(() => {
        api.get("/professor/" + professorName)
            .then(response => {
                if (response.status === 200) {
                    setProfessors(response.data);
                }
            })
    }, [professorName, reload]);

    function closePopup() {
        setBoxPopup('');
        setReload(!reload);
    }

    function makeAvaliation(id_professor, name, disciplines) {
        setBoxPopup(
            <Avaliation
                close={() => closePopup()}
                reg_student={JSON.parse(localStorage.getItem('student')).reg_student}
                id_professor={id_professor}
                name_professor={name}
                disciplines={disciplines}
            />
        )
    }

    function makeReport() {
        setBoxPopup(
            <Report
                close={() => closePopup()}
            />
        )
    }

    const Professors = (({ professors }) => {
        return (

            <Feed title={professorName}>
                <Conteiner>
                    {professors?.map(prof => {
                        return (
                            <ProfessorBox onClick={() => makeAvaliation(prof.id_professor, prof.name, prof.disciplines)} report={() => makeReport()} name={prof.name} rating={prof.rating} posts={prof.posts}></ProfessorBox>
                        )
                    })}
                </Conteiner>
            </Feed>

        );
    });

    return (
        <Content>
            <AvaliationProfBox>
                {boxPopup}
            </AvaliationProfBox>
            <Professors professors={professors} />
        </Content>
    );
}