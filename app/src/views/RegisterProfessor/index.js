import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from './validations';
import api from '../../services/Api';
import {
  Conteiner, Content, Links, Title,
} from './styles';

const Header = ({ children, title }) => (
  <Conteiner>
    <Links>
      {children}
    </Links>
    <Title>{title}</Title>
  </Conteiner>
);

export default function RegisterProfessor() {
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

    api.post('/professor', body)
      .then((response) => {
        if (response.status === 201) {
          history.push('/visitant/login');
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setErrorDB('Professor já cadastrado');
        }
      });
  }

  return (
    <Content>
      <Header title="Cadastro de Professor">
        <Link className="btnLogin" to="/visitant/login">LOGIN</Link>
        <Link className="btnCadastro" to="/visitant/student">CADASTRO</Link>
        <Link className="btnStudent" to="/visitant/student">ALUNO?</Link>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.reg_professor?.message}><Input type="text" text="Matrícula" name="reg_professor" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.password?.message}>
          {' '}
          <Input type="password" text="Senha" name="password" register={register} />
        </Form.Field>
        <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
        <Form.Field><div className="errorDB">{errorDB}</div></Form.Field>
        <Form.Footer>
          <Button text="CANCELAR" backColor="#FFF9C4" onClick={() => history.push('/')} />
          <Button text="CONFIRMAR" type="submit" backColor="#FFF9C4" />
        </Form.Footer>
      </Form>
    </Content>
  );
}
