import * as yup from 'yup';

const schema = yup.object().shape({
    nameProfessor: yup
    .string()
    .trim()
    .min(2, "Nome do professor deve conter pelo menos dois caracteres.")
    .max(254, "Nome do professor deve ter no máximo 254 caracteres.")
    .required("Nome do professor deve ser preenchido."),

    nameDiscipline: yup
    .string()
    .trim()
    .min(2, "Nome da disciplina deve conter pelo menos dois caracteres.")
    .max(254, "Nome da disciplina deve ter no máximo 254 caracteres.")
    .required("Nome da disciplina deve ser preenchido."),

    note: yup
    .string()
    .trim()
    .max(2, "Nota deve ser de 0 a 10")
    .matches(/^[0-9]*$/, "Nota deve conter somente números.")
    .required("Nota deve ser preenchida."),
    
    comments: yup
    .string()
    .trim()
    .min(10, "O comentário deve conter pelo menos dois caracteres.")
    .max(254, "O comentário deve ter no máximo 254 caracteres.")
    .required("O comentário deve ser preenchido."),

})

export default schema;