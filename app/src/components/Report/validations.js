/* eslint-disable */
import * as yup from 'yup';

let schema = yup.object().shape({
  offensive: yup.bool(),
  prejudice: yup.bool(),
  unrelated: yup.bool(),
  others: yup.bool(),

  details: yup
    .string()
    .trim()
    .required('Escreva detalhes sobre o motivo da denuncia.')
    .min(10, 'O detalhamento deve conter pelo menos dez caracteres.')
    .max(254, 'O detalhamento deve ter no máximo 254 caracteres.'),
});

schema = schema.test('myCustomCheckboxTest', null, (obj) => {
  if (obj.offensive || obj.prejudice || obj.unrelated || obj.others) {
    return true;
  }

  return new yup.ValidationError(
    'Escolha ao menos um motivo para a denuncia.',
    null,
    'option',
  );
});

export default schema;
