import React, {useContext, useEffect} from "react";
import { useHistory, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import "./index.css";
import schema from "./validations"
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import isAuthenticated, {sendLogin, logOut} from '../../services/authentication'

export default function Login() {
    const history = useHistory();
    const [erroLogin, setErroLogin] = React.useState();
    
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
    });
    
    useEffect(() => {
      logOut();
    })

    function onSubmit(data) {
     sendLogin(data.email, data.password);

     setTimeout(function(){
      if (!isAuthenticated())
        createSpanError();
      else 
        history.push("/home");
     }, 300);
    }

    function createSpanError() {
      setErroLogin(
       <div className="Erro">
         Email ou Senha Inválidos
         <Button id="closeSpan" type="button" onClick={() => setErroLogin('')} text="X" />
       </div>)
     }
     
    return (
      <div className="Login">
        <header className="Header">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Header>
            <Link className="btnLogin_log" to="/login">LOGIN</Link>
            <Link className="btnCadastro_log" to="/">CADASTRO</Link>
          </Form.Header>
          <div className="body">
            <Form.Field><div>{erroLogin}</div></Form.Field>
            <Form.Field errorMsg={errors.email?.message}><Input type="text" text="Email Instuticional" name="email" register={register} /> </Form.Field>
            <Form.Field errorMsg={errors.password?.message}><Input type="password" text="Senha" name="password" register={register} /> </Form.Field>
            <Form.Footer>
              <Button text="CONFIRMAR" />
            </Form.Footer>
          </div>
          </Form>
        </header>
      </div>
    );
}