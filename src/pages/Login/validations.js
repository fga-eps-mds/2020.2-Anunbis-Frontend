import * as yup from 'yup';

const schema = yup.object().shape({
    email:yup
        .string()
        .trim()
        .lowercase()
        .max(90, "Email Inválido")
        .required("Email Inválido"),
    
    password: yup
        .string()
        .oneOf([yup.ref('password')], "Senha")
});

export default schema;