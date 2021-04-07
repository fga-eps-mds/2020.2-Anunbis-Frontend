import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import schema from './validations';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const Conteiner = styled.div`
  width: 400px;
`;

const Links = styled.div`
  width: 400px;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  font-size:14px;
  margin-top: 15px;


  .btnCadastro {
    margin-right: 70px;
    color: #212121;
  }

  .btnLogin, .btnProfessor{
    text-decoration: none;
    color: #212121;
  }
`;

const Title = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
  margin-top: 40px;
`;

const Header = ({ children, title }) => {
  return (
    <Conteiner>
      <Links>
        {children}
      </Links>
      <Title>{title}</Title>
    </Conteiner>
  )
}

const Content = styled.div`
  height: 450px;
  width: 400px;
  display:flex;
  align-items: center;
  flex-direction: column;

Form {
  height: 300px;
  width: 300px;
  Input, Select{
    margin-bottom: 10px;
    width: 180px;
  }
  
}

select {
  margin: 0px;
  width: 185px;
}
`;

export default function RegisterStudent() {
  const history = useHistory();
  const [courses, setCourses] = React.useState([])
  const [errorDB, setErrorDB] = React.useState('')
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(process.env)

  function courses_Options(courses) {
    const coursesArray = [{}]
    courses?.map((course) => coursesArray.push({ id: course.id_course, name: course.name }))
    return (
      coursesArray
    );
  }

  useEffect(() => {
    async function fetchData() {
      const url = process.env.REACT_APP_API_HOST + "/course";
      const response = await fetch(url)
      const data = await response.json()

      setCourses(data);
    }
    fetchData();
  }, []);

  function onSubmit(data) {
    const url = process.env.REACT_APP_API_HOST + "/student";
    const body = {
      reg_student: parseInt(data.reg_student),
      name: data.name,
      id_course: parseInt(data.id_course),
      email: data.email,
      password: data.password
    }

    fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(response => response)
      .then(rs => {
        console.log(rs)
        console.log(rs.json())
        if (rs.ok) {
          setErrorDB("")
          history.push("/login")
        }
        if (rs.status === 409) {
          setErrorDB("Estudante já cadastrado")
        }
      })
  };

  return (
    <Content>
      <Header title="Cadastro de Aluno">
        <Link className="btnLogin" to="/user/login">LOGIN</Link>
        <Link className="btnCadastro" to="/user/student">CADASTRO</Link>
        <Link className="btnProfessor" to="/user/professor">PROFESSOR?</Link>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.id_course?.message}><Select id="courses" options={courses_Options(courses)} name="id_course" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.reg_student?.message}><Input type="text" text="Matrícula" name="reg_student" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
        <Form.Field><div className="errorDB">{errorDB}</div></Form.Field>
        <Form.Footer>
          <Button text="CANCELAR" backColor="#FFF9C4" padding="12px 8px" />
          <Button text="CONFIRMAR" type="submit" backColor="#FFF9C4" padding="12px 8px" />
        </Form.Footer>
      </Form>
    </Content>
  )
}