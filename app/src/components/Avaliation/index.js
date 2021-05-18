import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Grades, NameProfessor, TxtArea } from './styles';
import schema from './validations';
import Select from '../Select';
import Button from '../Button';
import StarsAvaliation from '../StarsAvaliation';
import Form from '../Form';
import FeedPopup from '../FeedPopup';
import api from '../../services/Api';
import Users from '../../services/Users';

export default function Avaliation({ close, professor }) {
  const regStudent =
    Users.whoAuthenticated() === Users.STUDENT
      ? Users.whoAuthenticated().data().reg_student
      : null;
  const { disciplines } = professor != null ? professor : {};
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function disciplinesOptions(disciplines0) {
    const disciplinesArray = [];
    disciplines0?.map((dis) =>
      disciplinesArray.push({ id: dis.discipline_code, name: dis.name }),
    );
    return disciplinesArray;
  }

  function onSubmit(data) {
    const body = {
      reg_student: regStudent,
      id_professor: professor?.id_professor,
      content: data.comments,
      didactic: data.didactic.length,
      metod: data.metod.length,
      avaliations: data.avaliations.length,
      disponibility: data.disponibility.length,
      discipline_code: data.id_course,
      is_anonymous: isAnonymous,
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
        <Form onSubmit={handleSubmit(onSubmit)} data-testid="form-aval-1">
          <NameProfessor>{professor?.name}</NameProfessor>
          <Form.Field
            errorMsg={errors.id_course?.message}
            margin="0px 0px 0px 0px"
          >
            <Select
              id="diciplines"
              backColor="var(--transparent)"
              text="Selecione um Curso"
              options={disciplinesOptions(disciplines)}
              name="id_course"
              register={register}
              data-testid="select-aval-1"
            />
          </Form.Field>
          <p>Notas:</p>
          <Grades>
            <label>Didática:</label>
            <Form.Field
              errorMsg={errors.didactic?.message}
              margin="0px 0px 0px 0px"
            >
              <StarsAvaliation
                name="didactic"
                register={register}
                data-testid="star-aval-1"
              />
            </Form.Field>
            <label>Metodologia:</label>
            <Form.Field
              errorMsg={errors.metod?.message}
              margin="0px 0px 0px 0px"
            >
              <StarsAvaliation
                name="metod"
                register={register}
                data-testid="star-aval-2"
              />
            </Form.Field>
            <label>Coerência das Avaliações:</label>
            <Form.Field
              errorMsg={errors.avaliations?.message}
              margin="0px 0px 0px 0px"
            >
              <StarsAvaliation
                name="avaliations"
                register={register}
                data-testid="star-aval-3"
              />
            </Form.Field>
            <label>Disponibilidade:</label>
            <Form.Field
              errorMsg={errors.disponibility?.message}
              margin="0px 0px 0px 0px"
            >
              <StarsAvaliation
                name="disponibility"
                register={register}
                data-testid="star-aval-4"
              />
            </Form.Field>
          </Grades>
          <p>Postagem:</p>
          <Container direction="row" align="center">
            <Button
              type="button"
              padding="10px 10px"
              text="PÚBLICA"
              backColor={isAnonymous ? '#FFF9C4' : 'var(--yellow)'}
              onClick={() => setIsAnonymous(false)}
            />
            <Button
              type="button"
              padding="10px 10px"
              text="ANÔNIMA"
              backColor={isAnonymous ? 'var(--yellow)' : '#FFF9C4'}
              onClick={() => setIsAnonymous(true)}
            />
          </Container>
          <p>Descrição/Comentários:</p>
          <Form.Field
            errorMsg={errors.comments?.message}
            margin="0px 0px 0px 0px"
          >
            <TxtArea name="comments" ref={register} data-testid="form-aval-2" />
          </Form.Field>
          <Form.Footer>
            <Button type="submit" text="POSTAR" backColor="var(--cian)" />
          </Form.Footer>
        </Form>
      </Container>
    </FeedPopup>
  );
}
