import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button';
import Checkbox from '../Checkbox';
import FeedPopup from '../FeedPopup';
import Form from '../Form';
import {
  Options, Footer, TxtArea, Details,
} from './styles';
import schema from './validations';

export default function Report({ close }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit() {
    console.log('Denuncia realizada.');
  }

  return (
    <FeedPopup title="Denuncia" close={close}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.option?.message}>
          <Options>
            <p>Motivo da Denuncia:</p>
            <Checkbox text="Linguagem ofensiva" name="option" register={register} />
            <Checkbox text="Comentário preconceituoso" name="option" register={register} />
            <Checkbox text="Críticas não relacionadas a disciplina" name="option" register={register} />
            <Checkbox text="Outros" name="option" register={register} />
          </Options>
        </Form.Field>
        <Details>
          <p>Detalhe os motivos:</p>
          <Form.Field errorMsg={errors.details?.message}><TxtArea name="details" ref={register} /></Form.Field>
        </Details>
        <Footer>
          <Button type="submit" text="DENUNCIAR" backColor="#F44336" />
        </Footer>
      </Form>
    </FeedPopup>
  );
}
