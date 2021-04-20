import * as yup from 'yup';

const schema = yup.object().shape({

    // old_password: yup
    // .string()
    // .min(8, "Contém no mínimo 8 caracteres.")
    // .required("Senha atual deve ser preenchida."),

    new_password: yup
    .string()
    .min(8, "Precisar conter no mínimo 8 caracteres.")
    .required("Nova senha deve ser preenchida."),

    confirm_new_password: yup
    .string()
    .min(8, "Precisar conter no mínimo 8 caracteres.")
    .required("Confirmação da senha deve ser preenchida.")
    .oneOf([yup.ref('new_password')], "Senhas devem ser iguais."),

})

export default schema;