import React from "react";
import Button from "../Button";
import './index.css';

export default function Form(props) {

    return (
        <div className="Form">
            <div className="divImg">
                <img id="imagem" />
            </div>
            <div className="Fields">
                <h4>
                    {props.title}
                </h4>
                <div>
                    {props.fields}
                </div>
                <div>
                    {props.buttons}
                </div>
            </div>
        </div>
    );
}