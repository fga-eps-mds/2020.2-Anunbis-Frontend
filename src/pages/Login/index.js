import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import "./index.css";
import schema from "./validations"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {
    const [erroLogin, setErroLogin] = React.useState(''); 
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        const body = {
            email: data.email,
            password: data.password
        }
        console.log(data);
    }
    return (
        <div className="Login">
            <header className="Header">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field><div className="Erro">{erroLogin}</div></Form.Field>
                    <Form.Field errorMsg={errors.email?.message}><Input type="text" text="Email Instuticional" name="email" register={register} /> </Form.Field>
                    <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /> </Form.Field>
                    <Form.Footer>
                        <Button text="CONFIRMAR" />
                    </Form.Footer>

                </Form>
            </header>

        </div>

    );
}