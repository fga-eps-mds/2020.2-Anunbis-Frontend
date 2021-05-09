import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Form from '../Form';
import Input from '../Input';
import schema from './validations';
import { Container, Header, Btn, FeedBack } from './styles';
import api from '../../services/Api';
import Users from '../../services/Users';

export default function ResetPassword({ onClick }) {
  const [feedBack, setFeedBack] = React.useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function makeFeedback() {
    return (
      <FeedBack>
        <p>Senha alterada com Sucesso</p>
      </FeedBack>
    );
  }

  function onSubmit(data) {
    console.log(data);
    const body = {
      password: data.new_password,
    };
    api
      .put(Users.whoAuthenticated().localStorageName, body)
      .then(() => {
        setFeedBack(makeFeedback());
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container>
      <Header>
        <div>REDEFINIÇÃO DE SENHA</div>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.new_password?.message}>
          <Input
            type="password"
            text="Digite a nova senha"
            name="new_password"
            register={register}
          />
        </Form.Field>
        <Form.Field errorMsg={errors.confirm_new_password?.message}>
          <Input
            type="password"
            text="Repita a nova senha"
            name="confirm_new_password"
            register={register}
          />
        </Form.Field>
        {feedBack}
        <Form.Footer>
          <Btn
            text="CANCELAR"
            backColor="#26A69A"
            padding="3px 3px"
            onClick={() => onClick()}
          />
          <Btn
            type="submit"
            text="ALTERAR"
            backColor="#26A69A"
            padding="3px 6px"
          />
        </Form.Footer>
      </Form>
    </Container>
  );
}
