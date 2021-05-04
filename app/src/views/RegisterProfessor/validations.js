import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Nome deve ser preenchido.')
    .min(2, 'Nome deve conter pelo menos dois caracteres')
    .max(254, 'Nome deve ter no máximo 254 caracteres.'),

  reg_professor: yup
    .string()
    .trim()
    .required('Matricula deve ser preenchida.')
    .length(11, 'Matrícula deve conter exatamente 11 dígitos.')
    .matches(/^[0-9]*$/, 'Matricula deve conter somente números.'),

  email: yup
    .string()
    .trim()
    .lowercase()
    .required('Email deve ser preenchido.')
    .matches(/^[a-z . 0-9]+@unb.br$/, 'Formato do email deve ser: "matricula(nome)@unb.br"')
    .max(90, 'O email deve ter tamanho máximo de 90 caracteres.'),

  password: yup
    .string()
    .required('Senha deve ser preenchida.')
    .min(8, 'Senha deve ter pelo menos 8 caracteres.')
    .max(100, 'Senha deve ter no máximo 100 caracteres.'),

  co_password: yup
    .string()
    .required('Confirmação da senha deve ser preenchida.')
    .oneOf([yup.ref('password')], 'Senhas devem ser iguais.'),
});

export default schema;
