import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input"
import "./index.css"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login() {
    const { register, handleSubmit, errors } = useForm([]);

    function onSubmit(data) {
            
    }
    return (
        <div className="Login">
            <header className="Header">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Field errorMsg="Email errado"><Input type="text" text="Email Instuticional" name="email" register={register} /> </Form.Field>
                    <Form.Field errorMsg="Senha Errada!"><Input type="password" text="Senha" name="password" register={register} /> </Form.Field>
                    <Form.Footer>
                        <Button text="CONFIRMAR" />
                    </Form.Footer>

                </Form>
            </header>

        </div>

    );
}