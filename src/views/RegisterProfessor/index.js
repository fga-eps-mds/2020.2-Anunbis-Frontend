import React from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import schema from './validations';
import { Link, useHistory } from 'react-router-dom';


const Conteiner = styled.div`
  width: 400px;
`;

const Links = styled.div`
  width: 400px;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  font-size:14px;
  margin-top: 15px;
    
  .btnCadastro {
    margin-right: 70px;
    color: #212121;
  }

  .btnLogin, .btnStudent{
    text-decoration: none;
    color: #212121;
  }
`;

const Title = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 40px;
`;
const Header = ({ children, title }) => {
  return (
    <Conteiner>
      <Links>
        {children}
      </Links>
      <Title>{title}</Title>
    </Conteiner>
  )
}

const Content = styled.div`
  height: 450px;
  width: 400px;
  display:flex;
  align-items: center;
  flex-direction: column;

  Form {
    height: 300px;
    width: 300px;
    Input, Select{
      margin-bottom: 15px;
      width: 180px;
    }
    Button{
      padding: 12px 8px; 
    }
}
`;

export default function RegisterProfessor() {
  const history = useHistory();
  const [errorDB, setErrorDB] = React.useState('');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const url = process.env.REACT_APP_API_HOST + "/professor";
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
      reg_professor: data.reg_professor
    }
    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response)
      .then(rs => {
        if (rs.ok) {
          setErrorDB("")
          history.push("/user/login")
        }
        if (rs.status === 409) {
          setErrorDB("Professor já cadastrado")
        }
      })
  };


  return (
    <Content>
      <Header title="Cadastro de Professor">
        <Link className="btnLogin" to="/user/login">LOGIN</Link>
        <Link className="btnCadastro" to="/user/student">CADASTRO</Link>
        <Link className="btnStudent" to="/user/student">ALUNO?</Link>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.reg_professor?.message}><Input type="text" text="Matrícula" name="reg_professor" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.password?.message}> <Input type="password" text="Senha" name="password" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
        <Form.Field><div className="errorDB">{errorDB}</div></Form.Field>
        <Form.Footer>
          <Button text="CANCELAR" backColor="#FFF9C4"/>
          <Button text="CONFIRMAR" type="submit" backColor="#FFF9C4"/>
        </Form.Footer>
      </Form>
    </Content>
  )
}