import React, { useEffect } from 'react';
import Users from '../../../services/Users';
import { Conteiner } from './styles';
import { getCourses } from '../../../services/Courses';
import api from '../../../services/Api';

const Header = () => {
  const [courses, setCourses] = React.useState([]);
  const student = Users.whoAuthenticated().data();

  useEffect(() => {
    getCourses(setCourses);
  }, []);

  function getCourseName() {
    let cont = 0;
    let name;
    while (cont < courses.length) {
      if (courses[cont].id_course === student.id_course) {
        name = courses[cont].name;
      }
      cont += 1;
    }
    return name;
  }
  return (
    <Conteiner backColor="#FFFFFF" width="240px" height="115px">
      <p>
        Nome Completo:
        {student.name}
      </p>
      <p>
        E-mail:
        {student.email}
      </p>
      <p>
        Curso:
        {getCourseName()}
      </p>
    </Conteiner>
  );
};

const Body = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    api.get('post').then((response) => {
      if (response.status === 200) setPosts(response.data);
    });
  }, []);
  console.log(posts);

  function countAgree() {
    return posts.reduce(
      (accumulator, p) => accumulator + p.feedbacks.agrees,
      0,
    );
  }

  function countDisagree() {
    return posts.reduce(
      (accumulator, c) => accumulator + c.feedbacks.disagrees,
      0,
    );
  }

  return (
    <Conteiner
      txtAlign="center"
      backColor="#FFFFFF"
      width="430px"
      height="115px"
    >
      <p>Quantidade de avaliações realizadas: {posts.length}</p>
      <p>
        Quantidade de pessoas que concordaram com suas avaliações:{' '}
        {countAgree()}
      </p>
      <p>
        Quantidade de pessoas que discordaram com suas avaliações:{' '}
        {countDisagree()}
      </p>
    </Conteiner>
  );
};
function ProfileStudent({ children }) {
  return children;
}

ProfileStudent.Header = Header;
ProfileStudent.Body = Body;

export default ProfileStudent;
