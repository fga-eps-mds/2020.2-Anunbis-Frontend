import { Component } from "react";
import InputText from "../InputText";
import './index.css'; 

export default class BaseAutentication extends Component{
    render() {
        return (
            <div className="BaseAutentication">
                <h4>
                    Cadastro de Aluno    
                </h4>
                <div className="Forms">
                    <InputText text="Nome"/>
                    <InputText text="Curso"/>
                    <InputText text="Email Institucional" />
                </div>

            </div>
        );  
    }
}