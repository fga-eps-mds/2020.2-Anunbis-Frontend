import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, NameProfessor, TxtArea } from './styles';

import schema from './validations';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Form from '../Form';
import FeedPopup from '../FeedPopup';
import api from '../../services/Api';

export default function Avaliation({ close, professor }) {
  const regStudent = JSON.parse(localStorage.getItem('student')).reg_student;
  const { disciplines } = professor;
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function disciplines_Options(disciplines) {
    const disciplinesArray = [];
    disciplines.map((dis) => disciplinesArray.push({ id: dis.discipline_code, name: dis.name }));
    return (
      disciplinesArray
    );
  }

  function onSubmit(data) {
    const body = {
      reg_student: regStudent,
      id_professor: professor.id_professor,
      content: data.comments,
      rating: parseFloat(data.note),
      discipline_code: data.id_course,
      is_anonymous: isAnonymous,
    };

    api.post('/post', body)
      .then((response) => {
        if (response.status === 201) {
          close();
        }
      });
  }

  return (
    <FeedPopup title="Avaliação" close={close}>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <NameProfessor>{professor.name}</NameProfessor>
          <Form.Field errorMsg={errors.id_course?.message}><Select id="diciplines" backColor="#FFFDE7" text="Selecione um Curso" options={disciplines_Options(disciplines)} name="id_course" register={register} /></Form.Field>
          <Form.Field errorMsg={errors.note?.message}><Input type="number" step="0.1" text="Nota" name="note" register={register} width="90px" /></Form.Field>
          <p>Postagem:</p>
          <Container direction="row" heigth="30px" align="center">
            <Button type="button" padding="7px 10px" text="PÚBLICA" backColor={isAnonymous ? '#FFF9C4' : '#969681'} onClick={() => setIsAnonymous(false)} />
            <Button type="button" padding="7px 10px" text="ANÔNIMA" backColor={isAnonymous ? '#969681' : '#FFF9C4'} onClick={() => setIsAnonymous(true)} />
          </Container>
          <p>Descrição/Comentários:</p>
          <Form.Field errorMsg={errors.comments?.message}><TxtArea name="comments" ref={register} /></Form.Field>
          <Form.Footer><Button type="submit" text="POSTAR" backColor="#26A69A" /></Form.Footer>
        </Form>
      </Container>
    </FeedPopup>
  );
}
