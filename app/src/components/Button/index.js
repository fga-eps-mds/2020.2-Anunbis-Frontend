import React from "react";

import { Btn } from './styles'

export default function Button(props) {
    return (
            <Btn type={props.type} onClick={props.onClick} backColor={props.backColor} backImage={props.backImage} padding={props.padding} radius={props.radius} className={props.className} cursor={props.cursor}>
                {props.text}
            </Btn>
    );
}