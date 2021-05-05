import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useHistory } from 'react-router-dom';
import schema from './validations';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';
import api from '../../services/Api';
import {
  Conteiner, Content, Links, Title,
} from './styles';

const Header = ({ children, title }) => (
  <Conteiner>
    <Links>
      {children}
    </Links>
    <Title>{title}</Title>
  </Conteiner>
);

export default function RegisterStudent() {
  const history = useHistory();
  const [courses, setCourses] = React.useState([]);
  const [errorDB, setErrorDB] = React.useState('');
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function coursesOptions(coursesO) {
    const coursesArray = [];
    coursesO?.map((course) => coursesArray.push({ id: course.id_course, name: course.name }));
    return (
      coursesArray
    );
  }

  useEffect(() => {
    api.get('/course')
      .then((response) => {
        setCourses(response.data);
      });
  }, []);

  function onSubmit(data) {
    const body = {
      reg_student: Number(data.reg_student),
      name: data.name,
      id_course: Number(data.id_course),
      email: data.email,
      password: data.password,
    };

    api.post('/student', body)
      .then((response) => {
        if (response.status === 201) {
          history.push('/visitant/login');
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          setErrorDB('Estudante já cadastrado');
        }
      });
  }

  return (
    <Content>
      <Header title="Cadastro de Aluno">
        <Link className="btnLogin" to="/visitant/login">LOGIN</Link>
        <Link className="btnCadastro" to="/visitant/student">CADASTRO</Link>
        <Link className="btnProfessor" to="/visitant/professor">PROFESSOR?</Link>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.name?.message}><Input type="text" text="Nome" name="name" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.id_course?.message}><Select id="courses" backColor="#FFD54F" text="Selecione um Curso" options={coursesOptions(courses)} name="id_course" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.reg_student?.message}><Input type="text" text="Matrícula" name="reg_student" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.email?.message}><Input type="email" text="Email Institucional" name="email" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /></Form.Field>
        <Form.Field errorMsg={errors.co_password?.message}><Input type="password" text="Confirmar Senha" name="co_password" register={register} /></Form.Field>
        <Form.Field><div className="errorDB">{errorDB}</div></Form.Field>
        <Form.Footer>
          <Button text="CANCELAR" backColor="#FFF9C4" padding="12px 8px" onClick={() => history.push('/')} />
          <Button text="CONFIRMAR" type="submit" backColor="#FFF9C4" padding="12px 8px" />
        </Form.Footer>
      </Form>
    </Content>
  );
}
