import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input';
import Button from '../Button';
import schema from './validations';
import api from '../../services/Api';

export default function RegisterProfessor({ redirect }) {
  const history = useHistory();
  const [errorDB, setErrorDB] = React.useState('');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      reg_professor: data.reg_professor,
    };

    api
      .post('/professor', body)
      .then((response) => {
        if (response.status === 201) {
          redirect();
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setErrorDB('Professor já cadastrado');
        }
      });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field errorMsg={errors.name?.message}>
        <Input type="text" text="Nome" name="name" register={register} />
      </Form.Field>
      <Form.Field errorMsg={errors.reg_professor?.message}>
        <Input
          type="text"
          text="Matrícula"
          name="reg_professor"
          register={register}
        />
      </Form.Field>
      <Form.Field errorMsg={errors.email?.message}>
        <Input
          type="email"
          text="Email Institucional"
          name="email"
          register={register}
        />
      </Form.Field>
      <Form.Field errorMsg={errors.password?.message}>
        {' '}
        <Input
          type="password"
          text="Senha"
          name="password"
          register={register}
        />
      </Form.Field>
      <Form.Field errorMsg={errors.co_password?.message}>
        <Input
          type="password"
          text="Confirmar Senha"
          name="co_password"
          register={register}
        />
      </Form.Field>
      <Form.Field>
        <div className="errorDB">{errorDB}</div>
      </Form.Field>
      <Form.Footer>
        <Button
          text="CANCELAR"
          backColor="#FFF9C4"
          onClick={() => history.push('/')}
        />
        <Button
          text="CONFIRMAR"
          type="submit"
          backColor="#FFF9C4"
          onkeydown="Enter"
        />
      </Form.Footer>
    </Form>
  );
}
