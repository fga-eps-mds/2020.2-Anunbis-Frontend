import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import ProfessorBox from '../../components/ProfessorBox';
import Avaliation from '../../components/Avaliation';

const Content = styled.div`
display: flex;
align-items: center;
`
const AvaliationProfBox = styled.div`
        position: absolute;
        width: 450px;
        display: flex;
        align-items: center;
        justify-content: center;
`
;



export default function ProfessorSearch() {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([]);
    const [boxAvaliation, setBoxAvaliation] = React.useState('');

    React.useEffect(() => {
        async function fetchData() {
            const url = process.env.REACT_APP_API_HOST + "/professor/" + professorName;
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                setProfessors(data);
            }
        }
        fetchData();
    }, [professorName]);



    function makeAvaliation(id_professor, name, disciplines) {
        setBoxAvaliation(
            <Avaliation
                close={() => setBoxAvaliation('')}
                reg_student={JSON.parse(localStorage.getItem('student')).reg_student}
                id_professor={id_professor}
                name_professor={name}
                disciplines={disciplines}
            />
        )
    }

    const Professors = (({ professors }) => {
        const Conteiner = styled.div`
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        `;


         return (
            
                <Feed title={professorName}>
                    <Conteiner>
                {professors?.map(prof => {
                    return (
                        <ProfessorBox onClick={() => makeAvaliation(prof.id_professor, prof.name, prof.disciplines)} name={prof.name} rating={prof.rating} posts={prof.posts}></ProfessorBox>
                    )
                })}
                </Conteiner>
                </Feed>
            
         );
    });

    return (
        <Content>
            <AvaliationProfBox>
                {boxAvaliation}
            </AvaliationProfBox>
                <Professors professors={professors}/>
        </Content>
    );
}