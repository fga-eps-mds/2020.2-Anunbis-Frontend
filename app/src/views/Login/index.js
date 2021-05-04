import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validations';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { sendLogin, logOut, getToken } from '../../services/Auth';
import Users from '../../services/Users';
import { Content, Conteiner, Erro } from './styles';

const Header = ({ children }) => (
  <Conteiner>
    {children}
  </Conteiner>
);

export default function Login() {
  const history = useHistory();
  const [erroLogin, setErroLogin] = React.useState();
  const [cursor, setCursor] = React.useState();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    logOut();
  });

  function onSubmit(data) {
    setCursor('wait');
    sendLogin(data.email, data.password, () => {
      if (getToken()) {
        const home = Users.PROFESSOR.isAuthenticated() ? 'professor' : 'student';
        history.push(`/${home}`);
      }
    }, () => {
      createSpanError();
      setCursor('');
    });
  }

  function createSpanError() {
    setErroLogin(
      <Erro>
        Email ou Senha Inválidos
        <Button type="button" onClick={() => setErroLogin('')} text="X" />
      </Erro>,
    );
  }

  return (
    <Content cursor={cursor}>
      <Header>
        <Link className="btnLogin" to="/visitant/login">LOGIN</Link>
        <Link className="btnCadastro" to="/visitant/student">CADASTRO</Link>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field><div>{erroLogin}</div></Form.Field>
        <Form.Field errorMsg={errors.email?.message}>
          <Input type="text" text="Email Instuticional" name="email" register={register} />
          {' '}
        </Form.Field>
        <Form.Field errorMsg={errors.password?.message}>
          <Input type="password" text="Senha" name="password" register={register} />
          {' '}
        </Form.Field>
        <Form.Footer>
          <Button text="CONFIRMAR" backColor="#FFF9C4" cursor={cursor} />
        </Form.Footer>
      </Form>
    </Content>
  );
}
