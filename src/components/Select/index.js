import React from "react";


export default function Select({ text, id, name, register, options}){
    return(
        <div className="Select">
            <select id={id} name={name} ref={register}>
                <option value="">{text}</option>
                {options?.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}