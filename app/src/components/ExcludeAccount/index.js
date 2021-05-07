import React from 'react';
import { useHistory } from 'react-router';
import Users from '../../services/Users';
import Button from '../Button';
import { ContentExclude, BtsExclude } from './styles';
import api from '../../services/Api';
import { logOut } from '../../services/Auth';

export default function ExcludeAccount(props) {
  const history = useHistory();

  function deleteAcc() {
    const { path, reg } = {
      path: Users.whoAuthenticated().homePath,
      reg:
        Users.whoAuthenticated().localStorageName === 'student'
          ? Users.whoAuthenticated().data().reg_student
          : Users.whoAuthenticated().data().reg_professor,
    };
    api.delete(`${path}${reg}`).then(() => {
      logOut();
      history.push('/');
    });
  }

  return (
    <ContentExclude>
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
      </BtsExclude>
    </ContentExclude>
  );
}
