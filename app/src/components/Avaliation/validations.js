import * as yup from 'yup';

const schema = yup.object().shape({
  id_course: yup.string().required('Nome da disciplina deve ser preenchido.'),

  didactic: yup.array().min(1, 'Dê ao menos uma estrela.'),

  metod: yup.array().min(1, 'Dê ao menos uma estrela.'),

  avaliations: yup.array().min(1, 'Dê ao menos uma estrela.'),

  disponibility: yup.array().min(1, 'Dê ao menos uma estrela.'),

  comments: yup
    .string()
    .trim()
    .required('O comentário deve ser preenchido.')
    .min(10, 'O comentário deve conter pelo menos dez caracteres.')
    .max(254, 'O comentário deve ter no máximo 254 caracteres.'),
});

export default schema;
