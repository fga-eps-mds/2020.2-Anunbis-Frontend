import React from 'react';
import { Conteiner } from './styles';
import Users from '../../../services/Users';

const Header = () => {
  const professor = Users.whoAuthenticated().user;
  return (
    <Conteiner backColor="#FFFFFF" width="240px" height="115px">
      <p>Nome Completo: {professor.name}</p>
      <p>E-mail: {professor.email}</p>
    </Conteiner>
  );
};

const Body = () => {
    <Conteiner
      txtAlign="center"
      backColor="#FFFFFF"
      width="430px"
      height="115px"
    >
      <p>Quantidade de avaliações recebidas: </p>
    </Conteiner>
};
function ProfileProfessor({ children }) {
  return children;
}

ProfileProfessor.Header = Header;
ProfileProfessor.Body = Body;

export default ProfileProfessor;
