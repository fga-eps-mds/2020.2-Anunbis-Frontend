import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import schema from './validations';
import { Container, Header, BtnConfirm, FeedBack } from './styles';
import api from '../../services/Api';
import Users from '../../services/Users';

export default function ResetPassword({ onClick }) {
  const [feedBack, setFeedBack] = React.useState('');
  const user = Users.whoAuthenticated();

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
    const body = {
      password: data.new_password,
    };
    api
      .put(`${user.homePath}`, body)
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
        REDEFINIÇÃO DE SENHA
        <Button text="X" backColor="red" padding="2px 2px" onClick={onClick} />
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
        <BtnConfirm
          type="submit"
          text="CONFIRMAR"
          backColor="#26A69A"
          padding="3px 3px"
        />
      </Form>
    </Container>
  );
}
