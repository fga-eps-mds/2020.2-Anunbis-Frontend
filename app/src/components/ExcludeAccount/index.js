import React from 'react';
import { useHistory } from 'react-router';
import Users from '../../services/Users';
import Button from '../Button';
import { ContentExclude, BtsExclude, MsgLoading } from './styles';
import api from '../../services/Api';
import { logOut } from '../../services/Auth';
import Loading from '../Loading';

export default function ExcludeAccount(props) {
  const history = useHistory();

  const [loading, setLoading] = React.useState({
    animation: false,
    message: 'Carregando',
  });

  function deleteAcc() {
    setLoading({
      animation: true,
      message: 'Excluindo conta',
    });
    api.delete(`${Users.whoAuthenticated().localStorageName}`).then(() => {
      logOut();
      history?.push('/');
    });
    setLoading({
      animation: false,
      message: '',
    });
  }

  return (
    <ContentExclude>
      {loading.animation && <><Loading/><MsgLoading>{loading.message}</MsgLoading></>}
      {!loading.animation && <>
      <header>DESEJA EXCLUIR SUA CONTA?</header>
      <BtsExclude>
        <Button
          backColor="#26A69A"
          padding="10px 10px"
          text="VOLTAR"
          onClick={() => props.close()}
        />
        <Button
          backColor="var(--lightRed)"
          padding="10px 7px"
          text="EXCLUIR"
          onClick={() => deleteAcc()}
        />
      </BtsExclude></>}
    </ContentExclude>
  );
}
