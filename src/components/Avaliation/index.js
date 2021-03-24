import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import './index.css'
import { yupResolver } from '@hookform/resolvers/yup';

import schema from './validations';
import Input from '../Input';
import Form from '../Form';
import Select from '../Select';

const Field = ({errorMsg, children}) => {
    return (
        <div className="field">
            {children}
            <div className="field error">{errorMsg}</div>
        </div>
    )
}

export default function Avaliation({
    reg_student,
    id_professor,
    name_professor
    }) {

        const disciplines = [{
            discipline_code: 223,
            name: "Vandor"
        },
        {
            discipline_code: 123,
            name: "Vandor"
        }]
        function testeDiscipline (disciplines) {
            const disciplinesArray = [{}]
            disciplines?.map((dis) => disciplinesArray.push({id_course:dis.discipline_code,name:dis.name}))
            return(
                disciplinesArray
            );       
        }
        
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [isAnonymous,setIsAnonymous] = React.useState(false);
    
   function onSubmit(data) {
       const url = process.env.REACT_APP_API_HOST + "/post"
        console.log(data)
        const body = {
            reg_student: parseInt("190038969"),
            id_professor: parseInt("1"),
            content: data.comments,
            rating: parseFloat(data.note),
            discipline_code:"FGA01",
            is_anonymous: isAnonymous
         }
        
         fetch(url,{
             method: 'post',
             headers: {'Content-type':'application/json'},
             body: JSON.stringify(body)
         })
         .then(response => response)
         .then(rs => {
            console.log(rs)
            console.log(rs.json())
         })
                
            
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
               <div className="nameProfessor">{name_professor}dsf</div>
               <Field errorMsg={errors.id_course?.message}><Select id="diciplines" options={testeDiscipline(disciplines)} name="id_course" register={register} /></Field> 
               <Field errorMsg={errors.note?.message}><Input type="number"  step="0.1" text="Nota" name="note" register={register} /></Field> 
                <div className="typePost">Postagem:<br/>
                    <button type="button" className={(`button ${isAnonymous === false? "selected": ""}`)} onClick={() => setIsAnonymous(false)}>PÚBLICA</button>
                    <button type="button" className={(`button ${isAnonymous? "selected": ""}`)} onClick={() => setIsAnonymous(true)}>ANÔNIMA</button>
                </div>
                <div className="commentsPost">Descrição/Comentários:
                    <Field errorMsg={errors.comments?.message}><textarea name="comments" ref={register} /></Field> 
                </div>
                <button type="submit" className="buttonPost">POSTAR</button>
            </form>
        </div>
    </div>
  );
}
