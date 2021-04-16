import React from "react";
import styled from 'styled-components';

const SelectStyle = styled.select`
    display: inline-block;
    border: none;
    border-bottom: 1px solid #000000;
    background: ${props => props.backColor ? props.backColor : "white"};
    height: inherit;
    align-self: right;
    width: ${props => props.width ? props.width : "inherit"};
    color: rgba(61, 58, 58, 0.603);
`;

export default function Select({ text, id, name, register, options, backColor, width}){
    return(
        <div className="Select">
            <SelectStyle id={id} name={name} ref={register} backColor={backColor} width={width}>
                <option value="" disabled selected>{text}</option>
                {options?.map((item) => (
                    <option value={item.id} key={item.id}>{item.name}</option>
                ))}
            </SelectStyle>
        </div>
    );
}