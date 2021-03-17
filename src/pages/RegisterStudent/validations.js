import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
    .string()
    .min(2, "Nome deve conter pelo menos dois caracteres.")
    .required("Nome deve ser preenchido."),

    id_course: yup
    .string()
    .required("Curso deve ser preenchido."),

    reg_student: yup
    .string()
    .length(9)
    .matches(/^[0-9]*$/, "Matricula deve conter somente números.")
    .required("Matricula deve ser preenchida."),

    email: yup
    .string()
    .matches(/^[0-9]+@aluno.unb.br$/, "Formato do email deve ser: \"matricula@aluno.unb.br\"")
    .required("Email deve ser preenchido."),

    password: yup
    .string()
    .min(8, "Senha deve ter pelo menos 8 caracteres.")
    .required("Senha deve ser preenchida."),

    co_password: yup
    .string()
    .oneOf([yup.ref('password')], "Senhas devem ser iguais.")
    .required("Confirmação da senha deve ser preenchida."),
});

export default schema;