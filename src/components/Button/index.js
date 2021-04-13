import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
    background: ${props => props.backColor ? props.backColor : ""};
    border: 1px solid rgba(255, 245, 157, 0.6);
    box-sizing: border-box;
    border-radius: ${props => props.radius ? props.radius : "10px"};
    padding: ${props => props.padding ? props.padding : '15px 10px'};
    margin-inline: 15px;
    
    &:focus{
        outline-width: 0;
    }
`  

export default function Button(props) {
    return (
            <Btn type={props.type} onClick={props.onClick} backColor={props.backColor} padding={props.padding} radius={props.radius}>
                {props.text}
            </Btn>
    );
}