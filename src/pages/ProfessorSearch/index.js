import React, { useState } from 'react';
import './index.css'
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import TeacherBox from '../../components/TeacherBox';



const ProfessorItem = ({ professor }) => {
    if (professor.length === 0) {
        return (<div>Nenhum professor encontrado</div>)
    }
    return (<div>
        {professor.name}
    </div>)
}

export default function ProfessorSearch(props) {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([{}]);

    React.useEffect(async () => {
        const url = process.env.REACT_APP_API_HOST + "/professor/" + professorName;
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            setProfessors(data);
        }
    }, []);

    return (
        <div className="ProfessorSearch">
            <Feed title={professorName}>
            {professors.map(prof => <TeacherBox name={prof.name} rating={prof.rating} posts={prof.posts}></TeacherBox>)}  
            </Feed>
        </div>
    );
}