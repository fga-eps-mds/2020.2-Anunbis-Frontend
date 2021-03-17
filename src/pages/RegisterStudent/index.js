import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './index.css'

// const courses = [
//   { "id_course": "0", "name": "Eng De Software" },
//   { "id_course": "1", "name": "Eng Automotiva" },
//   { "id_course": "2", "name": "Eng Eletrônica" },
//   { "id_course": "3", "name": "Eng Aeroespacial" },
//   { "id_course": "4", "name": "Eng De Energias" }
// ];


export default function RegisterStudent() {
  const [courses, setCourses] = React.useState([])
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/anunbis/api/course')
      const data = await response.json()

      setCourses(data);
    }
    fetchData();
  }, [])


  const fields = (
    <form className="Fields">
      <Input type="text" text="Nome" name="name" register={register} />
      <Select id="courses" options={courses} name="course" register={register} />
      <Input type="email" text="Email Institucional" name="email" register={register} />
      <Input type="password" text="Senha" name="password" register={register} />
      <Input type="password" text="Confirmar Senha" name="co-password" register={register} />
    </form>
  );
  const buttons = (
    <div className="Button">
      <Button text="CANCELAR" />
      <Button text="CONFIRMAR" onClick={handleSubmit(onSubmit)}/>
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
