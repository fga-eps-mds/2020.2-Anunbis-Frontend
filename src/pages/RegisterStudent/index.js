import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import './index.css'
import schema from './validations';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';


export default function RegisterStudent() {
  const [courses, setCourses] = React.useState([])
  const [errorDB, setErrorDB] = React.useState('')
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(process.env)
  useEffect(() => {
    async function fetchData() {
      const url = process.env.REACT_APP_API_HOST + "/course";
      const response = await fetch(url)
      const data = await response.json()

      setCourses(data);
    }
    fetchData();
  }, []);
  
   function onSubmit(data) {
    const url = process.env.REACT_APP_API_HOST + "/student";
    const body = {
      reg_student: parseInt(data.reg_student),
      name: data.name,
      id_course: parseInt(data.id_course),
      email: data.email,
      password: data.password
    }

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
        setErrorDB("Estudante já cadastrado")
      }
    })};

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