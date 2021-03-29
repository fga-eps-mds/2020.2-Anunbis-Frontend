import React, { useState } from 'react';
import './index.css'
import { useParams } from "react-router-dom";
import Feed from '../../components/Feed';
import ProfessorBox from '../../components/ProfessorBox';
import Avaliation from '../../components/Avaliation';


export default function ProfessorSearch() {
    const { professorName } = useParams();
    const [professors, setProfessors] = useState([]);
    const [boxAvaliation, setBoxAvaliation] = React.useState('');

    React.useEffect(() => {
        async function search() {
            const url = process.env.REACT_APP_API_HOST + "/professor/" + professorName;
            const response = await fetch(url);
            const data = await response.json();
            if (response.ok) {
                setProfessors(data);
            }
        }
        search();
    }, [professorName]);

    

   function makeAvaliation(){
       setBoxAvaliation (
        <div className="avaliationProfBox">
        <Avaliation onClick={() => setBoxAvaliation('')}/>
        </div>)
    }

    const Professors = (({ professors }) => {
        return (
            <div className="Professors">
                {professors?.map(prof => {

                    return (
                        <ProfessorBox onClick={makeAvaliation} name={prof.name} rating={prof.rating} posts={prof.posts}></ProfessorBox>
                    )
                })}
            </div>
        );
    });

    return (
        <div className="ProfessorSearch">
            {boxAvaliation}
            <Feed title={professorName}>
                <Professors professors={professors} />
            </Feed>
        </div>
    );
}