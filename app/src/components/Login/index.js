import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validations';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import { sendLogin, logOut } from '../../services/Auth';
import Users from '../../services/Users';
import { Message, VerifyMailStyle } from './styles';
import api from '../../services/Api';

function Login({ msg }) {
  const history = useHistory();
  const [message, setMessage] = React.useState(msg);
  const [cursor, setCursor] = React.useState();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    logOut();
  });

  function onSubmit(data) {
    setCursor('wait');
    sendLogin(
      data.email,
      data.password,
      (response) => {
        if (response.status === 200) {
          const home = Users.whoAuthenticated().homePath;
          history.push(home);
        }
        if (response.status === 203) {
          setCursor('pointer');
          setMessage(<VerifyMail email={data.email} />);
        }
      },
      () => {
        setCursor('');
        setMessage('Email ou senha inválido');
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>{message && <Message>{message}</Message>}</Form.Field>
      <Form.Field errorMsg={errors.email?.message}>
        <Input
          type="text"
          text="Email Instuticional"
          name="email"
          register={register}
        />
      </Form.Field>
      <Form.Field errorMsg={errors.password?.message}>
        <Input
          type="password"
          text="Senha"
          name="password"
          register={register}
        />
      </Form.Field>
      <Form.Footer>
        <Button text="CONFIRMAR" backColor="#FFF9C4" cursor={cursor} />
      </Form.Footer>
    </Form>
  );
}

function VerifyMail({ email }) {
  const [message, setMessage] = React.useState()

  function sendVerifyMail() {
    setMessage('Enviando email...');

    api.post('/auth/email', { email })
      .then(response => {
        if (response.status === 200)
          setMessage('E-mail de confirmação enviado.')
      })
  }

  return <VerifyMailStyle>
    {
      message
      || <>Cadastro ainda não confirmado. <button type='submit' onClick={sendVerifyMail}>Clique aqui</button> para reenviar o e-mail de verificação.</>
    }
  </VerifyMailStyle>
}



export default Login;