import React, {useContext} from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import "./index.css";
import schema from "./validations"

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import isAuthenticated, {sendLogin} from '../../services/authentication'

export default function Login() {
    const [erroLogin, setErroLogin] = React.useState();
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
    });

    function onSubmit(data) {
     console.log(data);

     sendLogin(data.email, data.password);

     setTimeout(function(){
      console.log("token = " + localStorage.getItem('access_token'));
      if (!isAuthenticated())
        createSpanError();
     }, 100);
    }

    function createSpanError() {
      setErroLogin(
       <div className="Erro">
         Email ou Senha Inválidos
         <Button id="closeSpan" type="button" onClick={fechaErro} text="X" />
       </div>)
     }
     
    function fechaErro(){
      setErroLogin('');
    }
    return (
      <div className="Login">
        <header className="Header">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field><div>{erroLogin}</div></Form.Field>
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