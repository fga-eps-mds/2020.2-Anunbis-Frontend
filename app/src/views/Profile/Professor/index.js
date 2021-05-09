import React, { useEffect } from 'react';
import { Conteiner } from './styles';
import Users from '../../../services/Users';
import { getPosts } from '../../../services/Posts';

const Header = () => {
  const professor = Users.whoAuthenticated().data();
  return (
    <Conteiner backColor="#FFFFFF" width="240px" height="115px">
      <p>Nome Completo: {professor.name}</p>
      <p>E-mail: {professor.email}</p>
    </Conteiner>
  );
};

const Body = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  function getRating() {
    return (
      posts.reduce((accumulator, p) => accumulator + p.rating, 0) / posts.length
    );
  }

  console.log(posts);
  return (
    <Conteiner
      txtAlign="center"
      backColor="#FFFFFF"
      width="430px"
      height="115px"
    >
      <p>Quantidade de avaliações recebidas: {posts.length}</p>
      <p>Pontuação média recebida: {getRating()}</p>
    </Conteiner>
  );
};
function ProfileProfessor({ children }) {
  return children;
}

ProfileProfessor.Header = Header;
ProfileProfessor.Body = Body;

export default ProfileProfessor;
