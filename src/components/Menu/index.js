import React from 'react';
import './index.css'
import Name_Logo from "../../assets/Name_Logo.png";
import Input from '../Input';
import {useHistory} from "react-router-dom";

const ProfessorSearch = () =>{
    const history =  useHistory()

    const onSubmit = (data) => {
        if(data.key === 'Enter' && data.target.value.trim().length > 0)
           history.push("/professor/search/" + data.target.value.trim()) 
    }

    return (<div className="ProfessorSearch"><Input type="text" text="Informe o nome do professor" onkeydown={onSubmit}/></div>)
}


export default function Menu() {
    return (
        <div className="Menu">
            <div className="Logo">
                <img src={Name_Logo} alt="logo"></img>
            </div>
            <ProfessorSearch />
        </div>
    );
}