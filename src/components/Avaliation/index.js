import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';

import schema from './validations';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import Form from '../Form';
import FeedPopup from '../FeedPopup';
import api from '../../services/Api';

const Container = styled.div`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "column"};

    width: ${props => props.width ? props.width : "372"};
    height: ${props => props.heigth ? props.heigth : "360px"};

    align-self: flex-end;
    justify-content: center;
    
    border-bottom-right-radius: 2%;
    border-bottom-left-radius: 2%;
    background-color: ${props => props.backColor ? props.backColor : "#FFFDE7"};

    Form{
        align-items: ${props => props.align ? props.align : ""};
        align-items: flex-start;
        p, Input{
            margin-top: 10px;   
        }
    }
`
const NameProfessor = styled.p`
    color: rgba(61, 58, 58, 0.603);
    border-bottom: 1px solid #000000;
    width: 252px;
    text-align: left;
    font-size: 15px;
`

const Title = styled.div`
    width: 50px;
    display:flex;
    color: #FFFDE7;
    margin-left: auto;
    margin-right: auto;
`

const TxtArea = styled.textarea`
    width: 330px;
    height: 70px;
    border-radius: 10px;
    background-color: #FFFDE7;
    resize: none;

    &:focus{
        outline-width: 0;
    }
`
export default function Avaliation({
    close,
    reg_student,
    id_professor,
    name_professor,
    disciplines
    }) {
        function disciplines_Options (disciplines) {
            const disciplinesArray = []
            disciplines?.map((dis) => disciplinesArray.push({id:dis.discipline_code,name:dis.name}))
            return(
                disciplinesArray
            );       
        } 
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [isAnonymous,setIsAnonymous] = React.useState(false);
    
   function onSubmit(data) {
        const body = {
            reg_student: parseInt(reg_student),
            id_professor: parseInt(id_professor),
            content: data.comments,
            rating: parseFloat(data.note),
            discipline_code: data.id_course,
            is_anonymous: isAnonymous
         }

         api.post("/post", body)
         .then(response => {
             if(response.status === 201){
                close();
             }
         })
        }
        
  return (
    <FeedPopup close={close}>
          <Container>
              <Form onSubmit={handleSubmit(onSubmit)}>
                  <NameProfessor>{name_professor}</NameProfessor>
                    <Form.Field errorMsg={errors.id_course?.message}><Select id="diciplines" backColor="#FFFDE7" text="Selecione um Curso" options={disciplines_Options(disciplines)} name="id_course" register={register} /></Form.Field> 
                    <Form.Field errorMsg={errors.note?.message}><Input type="number" step="0.1" text="Nota" name="note" register={register} width="90px"/></Form.Field> 
                  <p>Postagem:</p>
                  <Container direction="row" heigth="30px" align="center">
                      <Button type="button" padding="7px 10px" text="PÚBLICA" backColor={isAnonymous ? "#FFF9C4" : "#969681"} onClick={() => setIsAnonymous(false)} />
                      <Button type="button" padding="7px 10px" text="ANÔNIMA" backColor={isAnonymous ? "#969681" : "#FFF9C4"} onClick={() => setIsAnonymous(true)} />
                  </Container>
                  <p>Descrição/Comentários:</p>
                    <Form.Field errorMsg={errors.comments?.message}><TxtArea name="comments" ref={register} /></Form.Field> 
                <Form.Footer><Button type="submit" text="POSTAR" backColor="#26A69A" /></Form.Footer>
              </Form>
          </Container>
      </FeedPopup>
  );
}
