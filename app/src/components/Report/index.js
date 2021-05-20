import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/Api';
import Button from '../Button';
import Checkbox from '../Checkbox';
import FeedPopup from '../FeedPopup';
import Form from '../Form';
import { Options, Footer, TxtArea, Details } from './styles';
import schema from './validations';

export default function Report({ close, post }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [disabled, setDisabled] = React.useState(false);

  function onSubmit(data) {
    setDisabled(true);
    const body = {
      content: data.details,
      id_post: post.id_post,
      offensive: data.offensive,
      others: data.others,
      prejudice: data.prejudice,
      unrelated: data.unrelated,
    };
    api
      .post('/report', body)
      .then(() => close())
      .catch(() => close());
  }

  return (
    <FeedPopup title="Denuncia" close={close}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field errorMsg={errors.option?.message}>
          <Options>
            <p>Motivo da Denuncia:</p>
            <Checkbox
              text="Linguagem ofensiva"
              name="offensive"
              register={register}
            />
            <Checkbox
              text="Comentário preconceituoso"
              name="prejudice"
              register={register}
            />
            <Checkbox
              text="Críticas não relacionadas a disciplina"
              name="unrelated"
              register={register}
            />
            <Checkbox text="Outros" name="others" register={register} />
          </Options>
        </Form.Field>
        <Details>
          <p>Detalhe os motivos:</p>
          <Form.Field errorMsg={errors.details?.message}>
            <TxtArea name="details" ref={register} />
          </Form.Field>
        </Details>
        <Footer>
          <Button
            type="submit"
            text="DENUNCIAR"
            backColor="#F44336"
            disabled={disabled}
          />
        </Footer>
      </Form>
    </FeedPopup>
  );
}
