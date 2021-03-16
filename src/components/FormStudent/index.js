import React from "react";
import Button from "../Button";
import Input from "../Input";
import './index.css';
import { useForm } from "react-hook-form";
import Select from "../Select";


const courses = [
    {"id": "0", "name": "Eng De Software"},
    {"id": "1", "name": "Eng Automotiva"},
    {"id": "2", "name": "Eng Eletrônica"},
    {"id": "3", "name": "Eng Aeroespacial"},
    {"id": "4", "name": "Eng De Energias"}
    ]

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
                <Select id="courses" options={courses} name="course" refe={register}/>
                <Input type="email" text="Email Institucional" name="email" refe={register}/>
                <Input type="password" text="Senha" name="password" refe={register}/>
                <Input type="password" text="Confirmar Senha" name="co-password" refe={register}/>

                <Button text="CONFIRMAR"/>
            </form>
            
            <div className="Buttons">
                <Button text="CANCELAR"/>
            </div>
        </div>
    );
}