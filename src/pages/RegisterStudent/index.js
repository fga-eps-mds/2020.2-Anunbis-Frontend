import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import './index.css'
import schema from './validations';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';


// const courses = [
//   { "id_course": "0", "name": "Eng De Software" },
//   { "id_course": "1", "name": "Eng Automotiva" },
//   { "id_course": "2", "name": "Eng Eletrônica" },
//   { "id_course": "3", "name": "Eng Aeroespacial" },
//   { "id_course": "4", "name": "Eng De Energias" }
// ];


export default function RegisterStudent() {
  const [courses, setCourses] = React.useState([])

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  
  console.log(errors)
  const onSubmit = data => {
    console.log(data)
    return;

    const body = {
      "reg_student": 19212244,
      "name": "Thiago Paiva",
      "id_course": 15,
      "email": "thiago.smaaa1111paa@aao.unb.br",
      "password": "password"
    }

    fetch('http://localhost:5000/anunbis/api/student', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(response => response)
    .then(rs => {
      console.log(rs)
      console.log(rs.json())
      if(rs.ok){
        console.log("deu certo")
      }
      if(rs.status === 409){
        console.log("estudante ja cadastrado")
      }
    })
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/anunbis/api/course')
      const data = await response.json()

      setCourses(data);
    }
    fetchData();
  }, [])

  return (
    <div className="RegisterStudent">
      <header className="Header">
        <Form title="Cadastro de Aluno" onSubmit={handleSubmit(onSubmit)}>
          <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
          <Form.Field errorMsg={errors.id_course?.message}><Select id="courses" options={courses} name="id_course" register={register} /></Form.Field>
          <Form.Field errorMsg={errors.reg_student?.message}><Input type="text" text="Matrícula" name="reg_student" register={register} /></Form.Field>
          <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
          <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /></Form.Field>
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
