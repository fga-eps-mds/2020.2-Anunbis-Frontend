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

  const { register, handleSubmit } = useForm(
      {
      resolver: yupResolver(schema),
    }
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/anunbis/api/course')
      const data = await response.json()

      setCourses(data);
    }
    fetchData();
  }, []);

   function Submit(data) {
    const url = 'http://localhost:5000/anunbis/api/student'
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
      if(rs.ok)
      console.log('ok')
      if(rs.status === 409)
        console.log("estudante ja cadastrado")
    })};


  const fields = (
    <form className="Fields">
      <Input type="text" text="Nome" name="name" register={register} />
      <Select id="courses" options={courses} name="id_course" register={register} />
      <Input type="text" text="Matrícula" name="reg_student" register={register} />
      <Input type="email" text="Email Institucional" name="email" register={register} />
      <Input type="password" text="Senha" name="password" register={register} />
      <Input type="password" text="Confirmar Senha" name="co_password" register={register} />
    </form>
  );
  const buttons = (
    <div className="Button">
      <Button text="CANCELAR" />
      <Button text="CONFIRMAR" onClick={handleSubmit(Submit)} />
    </div>
  );

  return (
    <div className="RegisterStudent">
      <header className="Header">
        <Form title="Cadastro de Aluno" fields={fields} buttons={buttons} />
      </header>
    </div>
  )
}