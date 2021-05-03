import React, { useEffect } from 'react';
import Button from '../../components/Button';
import ResetPassword from '../../components/ResetPassword';
import { useHistory } from "react-router-dom";
import api from '../../services/Api';
import {Conteiner, ContentExclude, BtsExclude, BtnReset, BtnExcluir, Title } from './styles';
import { logOut } from '../../services/Auth';

export default function Profile() {
  const history = useHistory();
  const [excludeAcc, setExcludeAcc] = React.useState("");
  const [resetPassword, setResetPassword] = React.useState("");
  const [courses, setCourses] = React.useState([]);
  const student = {
    name: JSON.parse(localStorage.getItem('student')).name,
    email: JSON.parse(localStorage.getItem('student')).email,
    id_course: JSON.parse(localStorage.getItem('student')).id_course,
    reg_student: JSON.parse(localStorage.getItem('student')).reg_student,
  }

  useEffect(() => {
    api.get('/course')
    .then(response => {
      setCourses(response.data);
    })
  }, []);

  function getCourseName() {
    let cont = 0;
      while (cont < courses.length) {
        if (courses[cont++].id_course === student.id_course)
          return courses[cont - 1].name;
      }
  }

  function makeResetPassword() {
      return setResetPassword(<ResetPassword 
        onClick={() => setResetPassword("")} 
        student= {student} 
        />)
  }

  function excludeAccount(){
    api.delete("/student/" + student.reg_student)
    .then(response => {
      logOut()
      history.push('/') 
    })
    .catch(error =>  {
      console.log(error.response);
    }
    )
  }

  function makeSure() {
    return (
      setExcludeAcc(
        <ContentExclude >
          <header>Tem certeza?</header>
          <BtsExclude>
            <Button backColor='#26A69A' padding='10px 10px' text='SIM' onClick={() => excludeAccount()} />
            <Button backColor='#26A69A' padding='10px 7px' text='NÃO' onClick={() => setExcludeAcc('')} />
          </BtsExclude>
        </ContentExclude>)
      )
  }

  return (
    <Conteiner display='flex' backColor='#E0E0E0'>
      {resetPassword}
      {excludeAcc}
      <Title>Configurações de conta</Title>
      <Conteiner backColor='#FFFFFF' width='240px' height='115px'>
        <p>Nome Completo: {student.name}</p>
        <p>E-mail: {student.email}</p>
        <p>Curso: {getCourseName()}</p>
      </Conteiner>
      <BtnReset text='ALTERAR SENHA' backColor='#FFF9C4' padding='5px' onClick={() => makeResetPassword()} />
      <Conteiner txtAlign='center' backColor='#FFFFFF' width='430px' height='115px'>
        <p>Quantidade de avaliações realizadas: </p>
        <p>Quantidade de pessoas que concordaram com suas avaliações: </p>
        <p>Quantidade de pessoas que discordaram com suas avaliações: </p>
      </Conteiner>
      <BtnExcluir text='EXCLUIR CONTA' backColor='#F44336' padding='5px' onClick={() => makeSure()} />
    </Conteiner>)
}