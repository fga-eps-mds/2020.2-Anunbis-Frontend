import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './index.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from './validations';

export default function RegisterProfessor(){
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
      });
    
    function onSubmit(data){
        const body = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        console.log(body);
    }

    return (
        <div className="RegisterProfessor">
            <header className="Header">
                <Form title="Cadastro de Professor" onSubmit={handleSubmit(onSubmit)} link="ALUNO?" endereco={`/`}>
                    <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.password?.message}> <Input type="password" text="Senha" name="password" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
                    <Form.Footer>
                        <Button text="CANCELAR" />
                        <Button text="CONFIRMAR" type="submit"/>
                    </Form.Footer>
                </Form>                
            </header>
        </div>
    )
}