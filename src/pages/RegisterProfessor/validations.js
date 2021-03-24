import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .min(2, "Nome deve conter pelo menos dois caracteres")
    .max(254, "Nome deve ter no máximo 254 caracteres.")
    .required("Nome deve ser preenchido."),

    reg_professor: yup
    .string()
    .trim()
    .matches(/^[0-9]*$/, "Matricula deve conter somente números.")
    .required("Matricula deve ser preenchida."),

    email: yup
    .string()
    .trim()
    .lowercase()
    .matches(/^[a-z . 0-9]+@unb.br$/, "Formato do email deve ser: \"matricula(nome)@unb.br\"")
    .max(90, "O email deve ter tamanho máximo de 90 caracteres.")
    .required("Email deve ser preenchido."),

    password: yup
    .string()
    .min(8, "Senha deve ter pelo menos 8 caracteres.")
    .max(100, "Senha deve ter no máximo 100 caracteres.")
    .required("Senha deve ser preenchida."),

    co_password: yup
    .string()
    .oneOf([yup.ref('password')], "Senhas devem ser iguais.")
    .required("Confirmação da senha deve ser preenchida."),
});

export default schema;
