import React from "react";
import Button from "../Button";
import Input from "../Input";
import './index.css';
import { useForm } from "react-hook-form";

export default function FormStudent() {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="FormStudent">
            <h4>
                Cadastro de Aluno
            </h4>
            <form className="Forms" onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" text="Nome" name="name" refe={register}/>
                <Input type="text" text="Curso" name="course" refe={register}/>
                <Input type="email" text="Email Institucional" name="email" refe={register}/>
                <Input type="password" text="Senha" name="password" refe={register}/>
                <Input type="password" text="Confirmar Senha" name="co-password" refe={register}/>

                <div className="Buttons">
                    <Input type="submit" value="CONFIRMAR"/>
                    <Button text="CANCELAR" />
                </div>
            </form>

            

        </div>
    );
}