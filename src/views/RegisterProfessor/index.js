import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import './index.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from './validations';

export default function RegisterProfessor(){
    const [errorDB, setErrorDB] = React.useState('');
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
      });
    
    function onSubmit(data){
        const url = process.env.REACT_APP_API_HOST + "/professor";
        const body = {
            name: data.name,
            email: data.email,
            password: data.password,
            reg_professor: data.reg_professor
        }
        console.log(body);
        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
          .then(response => response)
          .then(rs => {
            console.log(rs)
            console.log(rs.json())
            if(rs.ok){
              setErrorDB("")
            }
            if(rs.status === 409){
              setErrorDB("Professor já cadastrado")
            }
          })};

    return (
        <div className="RegisterProfessor">
            <header className="Header">
                <Form title="Cadastro de Professor" onSubmit={handleSubmit(onSubmit)} link="ALUNO?" endereco={`/`}>
                    <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.reg_professor?.message}><Input type="text" text="Matrícula" name="reg_professor" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.password?.message}> <Input type="password" text="Senha" name="password" register={register} /></Form.Field>
                    <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
                    <Form.Field><div className="errorDB">{errorDB}</div></Form.Field>
                    <Form.Footer>
                        <Button text="CANCELAR" />
                        <Button text="CONFIRMAR" type="submit"/>
                    </Form.Footer>
                </Form>                
            </header>
        </div>
    )
}