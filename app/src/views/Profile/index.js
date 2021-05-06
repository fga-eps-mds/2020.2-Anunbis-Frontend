import React from 'react';
import ResetPassword from '../../components/ResetPassword';
import { Conteiner, BtnReset, BtnExcluir, Title } from './styles';
import ProfileStudent from './Student';
import ProfileProfessor from './Professor';
import ExcludeAccount from '../../components/ExcludeAccount';
import Users from '../../services/Users';

export default function Profile() {
  const [excludeAcc, setExcludeAcc] = React.useState('');
  const [resetPassword, setResetPassword] = React.useState('');
  const ProfileSpecific =
    Users.whoAuthenticated().localStorageName === 'student'
      ? ProfileStudent
      : ProfileProfessor;

  return (
    <Conteiner display="flex" backColor="#E0E0E0">
      {resetPassword}
      {excludeAcc}
      <Title>Configurações de conta</Title>
      <ProfileSpecific.Header />
      <BtnReset
        text="ALTERAR SENHA"
        backColor="#FFF9C4"
        padding="5px"
        onClick={
          <ResetPassword
            onClick={() => setResetPassword('')}
          />
        }
      />
      <ProfileSpecific.Body />
      <BtnExcluir
        text="EXCLUIR CONTA"
        backColor="#F44336"
        padding="5px"
        onClick={<ExcludeAccount close={setExcludeAcc('')} />}
      />
    </Conteiner>
  );
}
