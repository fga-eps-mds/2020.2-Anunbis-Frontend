import React from 'react'
import Users from '../../services/Users';
import {
    ContentExclude,
    BtsExclude,
  } from './styles'

function deleteAcc() {
    let user = Users.whoAuthenticated().user;
    const path = Users.whoAuthenticated().homePath 
    const reg = Users.whoAuthenticated().localStorageName == 'student' ? user.reg_student : user.reg_professor;
    api.delete(`${path}${reg}`).then(() => {
      logOut();
      history.push('/');
    });
  }

export function ExcludeAccount( props ) {
    return setExcludeAcc(
      <ContentExclude>
        <header>Tem certeza?</header>
        <BtsExclude>
          <Button
            backColor="#26A69A"
            padding="10px 10px"
            text="SIM"
            onClick={() => deleteAcc()}
          />
          <Button
            backColor="#26A69A"
            padding="10px 7px"
            text="NÃO"
            onClick={() => props.close()}
          />
        </BtsExclude>
      </ContentExclude>,
    );
  }