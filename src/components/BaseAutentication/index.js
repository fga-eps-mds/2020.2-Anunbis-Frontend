import React from "react";
import Button from "../Button";
import Input from "../Input";
import './index.css';

export default function BaseAutentication() {
    return (
        <div className="BaseAutentication">
            <h4>
                Cadastro de Aluno
                </h4>
            <form className="Forms">
                <Input type="text" text="Nome" />
                <Input type="text" text="Curso" />
                <Input type="text" text="Email Institucional" />
                <Input type="password" text="Senha" />
                <Input type="password" text="Confirmar Senha" />
            </form>

            <div className="Buttons">
                <Button text="CONFIRMAR" />
                <Button text="CANCELAR" />
            </div>

        </div>
    );
}