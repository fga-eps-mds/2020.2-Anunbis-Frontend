import React from 'react';
import { useForm } from "react-hook-form";
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import './index.css'

const courses = [
  { "id": "0", "name": "Eng De Software" },
  { "id": "1", "name": "Eng Automotiva" },
  { "id": "2", "name": "Eng Eletrônica" },
  { "id": "3", "name": "Eng Aeroespacial" },
  { "id": "4", "name": "Eng De Energias" }
];

export default function RegisterStudent() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  const fields = (
    <form className="Fields" onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" text="Nome" name="name" register={register} />
      <Select id="courses" options={courses} name="course" register={register} />
      <Input type="email" text="Email Institucional" name="email" register={register} />
      <Input type="password" text="Senha" name="password" register={register} />
      <Input type="password" text="Confirmar Senha" name="co-password" register={register} />

      <Button text="CONFIRMAR" />
    </form>
  );

  return (
    <div className="RegisterStudent">
      <header className="App-header">
        <Form title="Cadastro de Aluno" fields={fields} />
      </header>
    </div>
  );
}
