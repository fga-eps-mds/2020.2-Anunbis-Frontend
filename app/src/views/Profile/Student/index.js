import React, { useEffect } from 'react';
import Users from '../../../services/Users';
import { Conteiner } from './styles';
import { getCourses } from '../../../services/Courses';
import { getPosts } from '../../../services/Posts';

const Header = () => {
  const [courses, setCourses] = React.useState([]);
  const student = Users.whoAuthenticated().data();

  useEffect(() => {
    getCourses(setCourses);
  }, []);

  function getCourseName(coursesArray) {
    const result = coursesArray.find(
      (course) => course.id_course === student.id_course,
    );
    return result?.name;
  }

  return (
    <Conteiner backColor="#FFFFFF" width="240px" height="115px">
      <p>Nome Completo: {student?.name}</p>
      <p>E-mail: {student?.email}</p>
      <p>Curso: {getCourseName(courses)}</p>
    </Conteiner>
  );
};

const Body = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

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
        Quantidade de pessoas que discordaram de suas avaliações:{' '}
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
