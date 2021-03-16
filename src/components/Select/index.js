import React from "react";

export default function Select(props){
    return(
        <div className="Select">
            <select id={props.id} name={props.name} ref={props.register}>
                <option value="">Selecione o seu curso</option>
                {props.options.map((item) => (
                    <option value={item.id_course} key={item.id_course}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}