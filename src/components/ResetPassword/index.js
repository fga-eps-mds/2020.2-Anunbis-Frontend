import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './validations';
import { useForm } from "react-hook-form";

export default function ResetPassword({onClick, student}){

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
      });

    function onSubmit (data){

        const body = {
            oldPassword: data.old_password,
            newPassword: data.new_password,
            confirmNewPassword: data.confirm_new_password
        }

          console.log(data);
    }

    return(
        <Container>
            <Header>
                REDEFINIÇÃO DE SENHA
                <Button text='X' backColor='red' padding='2px 2px' onClick={onClick} />
            </Header>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field errorMsg={errors.old_password?.message} >
                    <Input type="password" text="Digite a senha atual" name="old_password" register={register}/>
                </Form.Field>

                <Form.Field errorMsg={errors.new_password?.message} >
                    <Input type="password" text="Digite a nova senha" name="new_password" register={register}/>
                </Form.Field>

                <Form.Field errorMsg={errors.confirm_new_password?.message} >
                    <Input type="password" text="Repita a nova senha" name="confirm_new_password" register={register}/>
                </Form.Field>

                <BtnConfirm type='submit' text='CONFIRMAR' backColor='#26A69A' padding='3px 3px' />
            </Form>

        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFDE7;
    position: absolute;
    display: flex;
    flex-direction: ${props => props.direction?props.direction:'column'};
    width: 300px;
    height: fit-content;
    margin-top: 60px;
    border-radius: 10px;

    Input{
        width: 280px;
        margin-top: 20px;
        align-self: flex-start;
    };

`

const Header = styled.header`
    width: inherit;
    height: 30px;
    background-color: #212121;
    color: white;
    text-align: center;
    justify-content: center;
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    Button{
        margin-top: 0px;
        border-radius: 0;
        margin-left: auto;
    };
`

const BtnConfirm = styled(Button)`
    margin-top: 15px;
    margin-bottom: 15px;
    color: white;
`