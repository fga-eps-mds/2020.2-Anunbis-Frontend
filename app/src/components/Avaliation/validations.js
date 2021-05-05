import * as yup from 'yup';

const schema = yup.object().shape({
  // nameProfessor: yup
  // .string()
  // .trim()
  // .required("Nome do professor deve ser preenchido.")
  // .min(2, "Nome do professor deve conter pelo menos dois caracteres.")
  // .max(254, "Nome do professor deve ter no máximo 254 caracteres."),

  id_course: yup
    .string()
    .required('Nome da disciplina deve ser preenchido.'),

  note: yup
    .number('Nota deve ser um número de 0 a 10.')
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .required('Nota deve ser preenchida.')
    .min(0, 'Nota deve ser maior ou igual a 0.')
    .max(10, 'Nota deve ser menor ou igual a 10.'),

  comments: yup
    .string()
    .trim()
    .required('O comentário deve ser preenchido.')
    .min(10, 'O comentário deve conter pelo menos dez caracteres.')
    .max(254, 'O comentário deve ter no máximo 254 caracteres.'),

});

export default schema;
