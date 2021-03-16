import React from "react";
import Button from "../Button";
import './index.css';

export default function Form(props) {
    
    return (
        <div className="Form">
            <h4>
                {props.title}
            </h4>
            <div>
                {props.fields}
            </div>
            <div className="Buttons">
                <Button text="CANCELAR"/>
            </div>
        </div>
    );
}