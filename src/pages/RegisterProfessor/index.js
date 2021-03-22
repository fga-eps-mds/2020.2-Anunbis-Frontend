import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './index.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function RegisterProfessor(){
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(),
      });

    return (
        <div className="RegisterProfessor">
            <header className="Header">
                <Form title="Cadastro de Professor" onSubmit={handleSubmit()} link="ALUNO?" endereco={`/`}>
                    <Form.Field><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
                    <Form.Field><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
                    <Form.Field> <Input type="password" text="Senha" name="password" register={register} /></Form.Field>
                    <Form.Field><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
                    <Form.Footer>
                        <Button text="CANCELAR" />
                        <Button text="CONFIRMAR" type="submit"/>
                    </Form.Footer>
                </Form>                
            </header>
        </div>
    )
}