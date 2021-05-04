import * as yup from 'yup';

const schema = yup.object().shape({
  option: yup
    .array()
    .min(1, 'Escolha ao menos um motivo para a denuncia.'),

  details: yup
    .string()
    .trim()
    .required('Escreva detalhes sobre o motivo da denuncia.')
    .min(10, 'O detalhamento deve conter pelo menos dez caracteres.')
    .max(254, 'O detalhamento deve ter no máximo 254 caracteres.'),

});

export default schema;
