import React, { useEffect } from "react";
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import schema from "./validations"
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import isAuthenticated, { sendLogin, logOut } from '../../services/authentication'

const Content = styled.div`
height: 450px;
width: 400px;
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;

Form {
  height: 300px;
  width: 300px;
}
`;

const Header = ({ children }) => {

  const Conteiner = styled.div`
      width: 400px;
      display:flex;
      align-items: center;
      font-size:14px;

      .btnCadastro {
        text-decoration: none;
        color: #212121;
      }

      .btnLogin {
        color: #212121;
        margin: 35px;
      }
  `;

  return (
    <Conteiner>
      {children}
    </Conteiner>
  )
}

export default function Login() {
  const history = useHistory();
  const [erroLogin, setErroLogin] = React.useState();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    logOut();
  })

  function onSubmit(data) {
    sendLogin(data.email, data.password);

    setTimeout(function () {
      if (!isAuthenticated())
        createSpanError();
      else
        history.push("/home");
    }, 300);
  }

  function createSpanError() {
    setErroLogin(
      <div className="Erro">
        Email ou Senha Inválidos
         <Button id="closeSpan" type="button" onClick={() => setErroLogin('')} text="X" />
      </div>)
  }

  return (
    <Content>
      <Header>
        <Link className="btnLogin" to="/user/login">LOGIN</Link>
        <Link className="btnCadastro" to="/user/student">CADASTRO</Link>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field><div>{erroLogin}</div></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="text" text="Email Instuticional" name="email" register={register} /> </Form.Field>
        <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /> </Form.Field>
        <Form.Footer>
          <Button text="CONFIRMAR" />
        </Form.Footer>
      </Form>
    </Content>
  );
}