import React, { useEffect } from 'react';
import api from '../../../services/Api';
import Users from '../../../services/Users';
import {
   Conteiner,
} from './styles'


const Header = () => {
  const [courses, setCourses] = React.useState([]);
  const student = Users.whoAuthenticated().user

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
  return(
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
  )
}
const Body = () => {
  return (
    <Conteiner
        txtAlign="center"
        backColor="#FFFFFF"
        width="430px"
        height="115px"
        >
      <p>Quantidade de avaliações realizadas: </p>
      <p>Quantidade de pessoas que concordaram com suas avaliações: </p>
      <p>Quantidade de pessoas que discordaram com suas avaliações: </p>
    </Conteiner>
  )
}
function ProfileStudent({ children }) { 
  return ( children ) 
}

ProfileStudent.Header = Header
ProfileStudent.Body = Body

export default ProfileStudent