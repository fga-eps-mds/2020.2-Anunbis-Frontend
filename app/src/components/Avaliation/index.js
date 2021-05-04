import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grades, NameProfessor, TxtArea } from './styles'
import schema from './validations';
import Select from '../Select';
import Button from '../Button';
import StarsAvaliation from '../StarsAvaliation'
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

  function disciplinesOptions(disciplines) {
    const disciplinesArray = [];
    disciplines.map((dis) =>
      disciplinesArray.push({ id: dis.discipline_code, name: dis.name }),
    );
    return disciplinesArray;
  }

  function onSubmit(data) {
    const body = {
      reg_student: regStudent,
      id_professor: professor.id_professor,
      content: data.comments,
      didactic: data.didactic.length,
      metod: data.metod.length,
      avaliations: data.avaliations.length,
      disponibility: data.didactic.length,
      discipline_code: data.id_course,
      is_anonymous: isAnonymous
    };

    api.post('/post', body).then((response) => {
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
          <Form.Field errorMsg={errors.id_course?.message}>
            <Select
              id="diciplines"
              backColor="var(--yellow)"
              text="Selecione um Curso"
              options={disciplinesOptions(disciplines)}
              name="id_course"
              register={register}
            />
          </Form.Field>
          <p>Notas:</p>
          <Grades>
            <label>Didática:</label>
            <Form.Field errorMsg={errors.didactic?.message}>
              <StarsAvaliation 
              name="didactic" 
              register={register}
              />
            </Form.Field>
            <label>Metodologia:</label>
            <Form.Field errorMsg={errors.metod?.message}>
              <StarsAvaliation 
              name="metod"
              register={register}
              />
            </Form.Field>
            <label>Coerência das Avaliações:</label>
            <Form.Field errorMsg={errors.avaliations?.message}>
              <StarsAvaliation 
              name="avaliations" 
              register={register}
              />
            </Form.Field>
            <label>Disponibilidade:</label>
            <Form.Field errorMsg={errors.disponibility?.message}>
              <StarsAvaliation 
              name="disponibility" 
              register={register}/>
            </Form.Field>
          </Grades>
          <p>Postagem:</p>
          <Container direction="row" heigth="30px" align="center">
            <Button
              type="button"
              padding="7px 10px"
              text="PÚBLICA"
              backColor={isAnonymous ? 'var(--yellow)' : '#969681'}
              onClick={() => setIsAnonymous(false)}
            />
            <Button
              type="button"
              padding="7px 10px"
              text="ANÔNIMA"
              backColor={isAnonymous ? '#969681' : 'var(--yellow)'}
              onClick={() => setIsAnonymous(true)}
            />
          </Container>
          <p>Descrição/Comentários:</p>
          <Form.Field errorMsg={errors.comments?.message}>
            <TxtArea name="comments" ref={register} />
          </Form.Field>
          <Form.Footer>
            <Button 
              type="submit" 
              text="POSTAR" 
              backColor="var(--cian)" />
          </Form.Footer>
        </Form>
      </Container>
    </FeedPopup>
  );
}
