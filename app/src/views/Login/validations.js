import * as yup from 'yup';

const schema = yup.object().shape({
    email:yup
        .string()
        .trim()
        .lowercase()
        .matches(/^[0-9]+@aluno.unb.br$ || ^[0-9]+@unb.br$/, "Insira um email válido")
        .max(90, "Email Inválido")
        .required("Email Inválido"),
    
    password: yup
        .string()
        .oneOf([yup.ref('password')], "Senha")
});

export default schema;