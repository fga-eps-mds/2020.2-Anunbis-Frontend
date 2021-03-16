import React from "react";

export default function Select(props){
    return(
        <div className="Select">
            <select id={props.id} name={props.name} ref={props.refe}>
                <option value="">Selecione o seu curso</option>
                {props.options.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}