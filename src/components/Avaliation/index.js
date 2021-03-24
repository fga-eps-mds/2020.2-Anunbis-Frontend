import React from 'react';
import { useForm } from "react-hook-form";
import './index.css'

import Input from '../Input';
import Button from '../Button';

export default function Avaliation({reg_student,id_professor,post_date,discipline_code}) {
    const { register, handleSubmit, errors } = useForm({});
    const [isAnonymous,setIsAnonymous] = React.useState(false);
    //const onSubmit = (data) => alert(JSON.stringify(data));

   function onSubmit(data) {
        const body = {
            reg_student: parseInt(reg_student),
            id_professor: parseInt(id_professor),
            content: data.comments,
            post_date: post_date,
            rating: data.note,
            discipline_code: parseInt(discipline_code),
            is_anonymous: isAnonymous
         }
         console.log(body)
        }
  return (
    <div className="avaliation">
        <div className="title">
            Avaliação
            <button type="button" className="buttonClose">X</button>
        </div>
        <div className="avaliationContent">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" text="Nome do Professor" name="nameProfessor" register={register} />
                <Input type="text" text="Nome do Disciplina" name="nameDiscipline" register={register} />
                <Input type="text" text="Nota" name="note" register={register} />
                <div className="typePost">Postagem:<br/>
                    <button type="button" className="button" onClick={() => setIsAnonymous(true)}>ANÔNIMA</button>
                    <button type="button" className="button" onClick={() => setIsAnonymous(false)}>PÚBLICA</button>
                </div>
                <div className="commentsPost">Descrição/Comentários:
                    <textarea name="comments" ref={register} />
                </div>
                <button type="submit" className="buttonPost">POSTAR</button>
            </form>
        </div>
    </div>
  );
}
