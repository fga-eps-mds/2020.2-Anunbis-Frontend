import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
    display: ${props => props.display?props.display:{}};
    flex-direction: column;
    align-items: center;
    width: ${props => props.width?props.width:'480px'};
    height: ${props => props.height?props.height:'510px'};
    background-color: ${props => props.backColor?props.backColor:{}};
    border-radius: 20px;
    /* justify-content: center; */
    
    p{
        font-size: 14px;
        margin-left: 5px;
    }

    Button{
        margin-top: 20px;
        margin-bottom: 20px;
    }

`;

const BtnExcluir = styled(Button)`
    color: white;
`

const Title = styled.h4`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-bottom:20px;
  margin-top: 40px;
`;

export default function Edition(){

    return (
    <Container display='flex' backColor='#E0E0E0'>
    
    <Title>
        Configurações de conta
    </Title>
    
    <Container backColor='#FFFFFF' width='240px' height='115px'>
        <p>Nome Completo: </p>
        <p>E-mail: </p>
        <p>Curso: </p>
    </Container>

    <Button text='ALTERAR SENHA' backColor='#FFF9C4' padding='5px' onClick={()=>console.log("teste")}/>

    <Container backColor='#FFFFFF' width='430px' height='115px'>
    <p>Quantidade de avaliações realizadas: </p>
    <p>Quantidade de pessoas que concordaram com suas avaliações: </p>
    <p>Quantidade de pessoas que discordaram com suas avaliações: </p>
    </Container>

    <BtnExcluir text='EXCLUIR CONTA' backColor='#F44336' padding='5px' onClick={()=>console.log("testeExcluir")}/>

    </Container>)
}