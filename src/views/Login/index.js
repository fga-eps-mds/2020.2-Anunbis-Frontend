import React, { useEffect } from "react";
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import schema from "./validations"
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import isAuthenticated, { sendLogin, logOut } from '../../services/Auth'

const Content = styled.div`
  height: 450px;
  width: 400px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  cursor: ${props => props.cursor ? props.cursor : ""};
    Form {
    height: 300px;
    width: 300px;

    Button{
      margin-top: 30px;
    }
}
`;

const Conteiner = styled.div`
      width: 400px;
      height: 15px;
      display:flex;
      align-items: center;
      font-size:14px;
      margin-top: 15px;

      .btnCadastro {
        text-decoration: none;
        color: #212121;
      }

      .btnLogin {
        color: #212121;
        margin: 35px;
      }
  `;
const Header = ({ children }) => {
  return (
    <Conteiner>
      {children}
    </Conteiner>
  )
}

const Erro = styled.div`
    display: flex;
    flex-direction: row;
    color:black;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

    background: #f3c2c2;
    border: 1px solid rgba(255, 245, 157, 0.6);
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 2px grey;

    Button{
      background: #f3c2c2;
      color: #cf5858;
      border: none;
      box-sizing: border-box;
      border-radius: 3px;
      padding: 5px 5px;
      margin-right: 2px;
    }
`

export default function Login() {
  const history = useHistory();
  const [erroLogin, setErroLogin] = React.useState();
  const [cursor, setCursor] = React.useState();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    logOut();
  })

  function onSubmit(data) {
    setCursor("wait");
    sendLogin(data.email, data.password, () => {
      if (isAuthenticated())
        history.push("/home");
    }, () => {
      createSpanError();
      setCursor("");
    });
  }

  function createSpanError() {
    setErroLogin(
      <Erro>
        Email ou Senha Inválidos
        <Button type="button" onClick={() => setErroLogin('')} text="X" />
      </Erro>)
  }

  return (
    <Content cursor={cursor}>
      <Header>
        <Link className="btnLogin" to="/user/login">LOGIN</Link>
        <Link className="btnCadastro" to="/user/student">CADASTRO</Link>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field><div>{erroLogin}</div></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="text" text="Email Instuticional" name="email" register={register} /> </Form.Field>
        <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /> </Form.Field>
        <Form.Footer>
          <Button text="CONFIRMAR" backColor="#FFF9C4" cursor={cursor}/>
        </Form.Footer>
      </Form>
    </Content>
  );
}