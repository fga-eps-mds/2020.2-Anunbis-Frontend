import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
    background: ${props => props.backColor ? props.backColor : "palevioletred"};
    border: 1px solid rgba(255, 245, 157, 0.6);
    box-sizing: border-box;
    border-radius: 10px;
    padding: ${props => props.padding ? props.padding : '15px 10px'};
    margin-inline: 15px;
    box-shadow: 2px 2px grey;`    

export default function Button(props) {
    return (
        <div>
            <Btn onClick={props.onClick} backColor={props.backColor} padding={props.padding}>
                {props.text}
            </Btn>
        </div>
    );
}